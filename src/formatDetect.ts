/**
 * Detectielaag: van de vrije hinttekst naar een formaat, met een voorbeeld ter bevestiging.
 *
 * Waarom dit bestaat: het veld "Gewenst formaat" is vrije tekst. Zolang die tekst ongefilterd naar
 * het model gaat, is de app niet in staat na te trekken wat er gevraagd werd (zie AI-0019 en
 * `docs/format-id-ontwerp.md` §1). Deze laag leest de hint en zegt: dít is de vorm — of dit kan ik
 * niet met zekerheid zeggen.
 *
 * **Geen vaste prefixlijst.** De eerste versie zocht de hint op in het register (658 formats uit het
 * trainingscorpus) en kwam daardoor op 4 van 30 plausibele hints uit: 24 hints beschreven de vorm
 * volledig, maar met een prefix die het corpus niet kent (REF, DOC, ORD, TKM…). Sinds de herziening
 * leest de detector de vorm uit de zin zelf en gebruikt het register alleen nog als bevestiging:
 *
 *   - `known`    — de vorm staat in het register; `format_id` is dan de bekende sleutel
 *   - `proposed` — de vorm is volledig te lezen maar niet bekend; de spec wordt samengesteld en de
 *                  UI toont één voorbeeldwaarde ("bedoel je zoiets?") die de gebruiker bevestigt
 *   - `ambiguous`— de vorm staat vast, het jaartal niet (de hint zegt "met een jaartal")
 *   - `unknown`  — te weinig informatie; de modelroute blijft dan het vangnet
 *
 * **Hij gokt nooit.** Een verkeerd formaat levert stil een waarde in de verkeerde vorm op, en dat is
 * precies de fout die `format_id` moest uitsluiten. Daarom liever `unknown` dan een aanname.
 *
 * De poort in `formatDetect.test.ts` draait alle corpusrijen (2.897) en alle 30 hints uit AI-0025:
 * geen enkele hint mag een ándere vorm opleveren dan de bedoelde.
 */
import type { BlockKind, FormatBlock, FormatSpec, SyntheticLocaleCode } from "./formats";
import { renderFormatValue, specKey } from "./formats";
import { FORMAT_REGISTER } from "./formatRegister";
import { hashString, SeededRandom } from "./synthetic";

export type Sep = "" | "-" | "." | "/";

/** Familienaam voor een vorm die niet uit het register komt; alleen voor de UI-tekst. */
export const CUSTOM_FAMILY = "custom";

export type HintParse = {
  readonly family: string;
  readonly prefix: string;
  readonly blocks: readonly FormatBlock[];
  readonly sep: Sep;
  readonly year: number | null;
  readonly yearWord: boolean;
};

export type FormatDetection =
  | {
      readonly status: "known";
      readonly formatId: string;
      readonly spec: FormatSpec;
      readonly exactYear: boolean;
      readonly example: string;
      readonly parsed: HintParse;
    }
  | {
      readonly status: "proposed";
      readonly formatId: string;
      readonly spec: FormatSpec;
      readonly example: string;
      readonly parsed: HintParse;
    }
  | {
      readonly status: "ambiguous";
      readonly formatIds: readonly string[];
      readonly reason: string;
      readonly parsed: HintParse;
    }
  | { readonly status: "unknown"; readonly reason: string; readonly parsed?: HintParse };

/** Familienaam zoals hij in een hint voorkomt (NL en EN), gelijk aan `forgemodel.STRUCTURED`. */
const FAMILY_NAMES: Readonly<Record<string, readonly [string, string]>> = {
  project: ["projectnummer", "project code"],
  case: ["dossiercode", "case code"],
  ticket: ["incidentnummer", "incident number"],
  batch: ["batchcode", "batch code"],
  asset: ["assetcode", "asset code"],
  licence: ["licentienummer", "licence number"],
  vessel: ["vaartuignummer", "vessel number"],
  specimen: ["monsternummer", "specimen number"],
  permit: ["vergunningnummer", "permit number"],
  registration: ["registratienummer", "registration number"],
};

/** Getalwoorden die in hints voorkomen (NL en EN). Cijfers worden ook gelezen. */
const NUM_WORDS: Readonly<Record<string, number>> = {
  een: 1,
  one: 1,
  twee: 2,
  two: 2,
  drie: 3,
  three: 3,
  vier: 4,
  four: 4,
  vijf: 5,
  five: 5,
  zes: 6,
  six: 6,
  zeven: 7,
  seven: 7,
  acht: 8,
  eight: 8,
  negen: 9,
  nine: 9,
  tien: 10,
  ten: 10,
  elf: 11,
  eleven: 11,
  twaalf: 12,
  twelve: 12,
};

const KIND_WORDS: Readonly<Record<string, BlockKind>> = {
  cijfers: "digits",
  digits: "digits",
  nummers: "digits",
  numbers: "digits",
  letters: "letters",
  "tekens met letters en cijfers": "alnum",
  "tekens letters en cijfers": "alnum",
  "characters letters and digits": "alnum",
  "alfanumerieke tekens": "alnum",
  "alphanumerieke tekens": "alnum",
  "alfanumerieke karakters": "alnum",
  "characters mixing letters and digits": "alnum",
  "characters with letters and digits": "alnum",
  "alphanumeric characters": "alnum",
};

/**
 * Scheidingstekens zoals een hint ze noemt. "zonder …" staat vooraan: die woorden bevatten soms
 * hetzelfde zelfstandig naamwoord als de variant met scheidingsteken ("geen streepjes").
 */
const SEP_WORDS: readonly (readonly [string, Sep])[] = [
  ["zonder scheidingsteken", ""],
  ["zonder scheidingstekens", ""],
  ["zonder spaties", ""],
  ["zonder streepjes", ""],
  ["without separators", ""],
  ["without a separator", ""],
  ["without spaces", ""],
  ["geen streepjes", ""],
  ["geen punten", ""],
  ["no hyphens", ""],
  ["koppeltekens", "-"],
  ["koppelteken", "-"],
  ["streepjes", "-"],
  ["streepje", "-"],
  ["hyphens", "-"],
  ["hyphen", "-"],
  ["punten", "."],
  ["punt", "."],
  ["dots", "."],
  ["dot", "."],
  ["schuine strepen", "/"],
  ["schuine streep", "/"],
  ["slashes", "/"],
  ["slash", "/"],
];

const PREFIX_PATTERNS: readonly RegExp[] = [
  /\bprefix\s+([A-Z0-9][A-Z0-9._/-]*)/,
  /\bbegint met\s+([A-Z0-9][A-Z0-9._/-]*)/,
  /\bstart(?:s|ing)? with\s+([A-Z0-9][A-Z0-9._/-]*)/,
  /(?::\s*|\bmet\s+|\bwith\s+|\bzoals\s+|\bsuch as\s+|\blike\s+|\bals\s+)([A-Z][A-Z0-9._/-]*)/,
  /\bshape\s+([A-Z0-9][A-Z0-9._/-]*)/,
  /\bopbouw\s+([A-Z0-9][A-Z0-9._/-]*)/,
];

/** "INC-2026-" : prefix, scheidingsteken, jaartal en nog een scheidingsteken in één stuk. */
const PREFIX_YEAR_RE = /([A-Z][A-Z0-9]{1,})([-./])(20\d{2})([-./])/;
/** "ZD-4821" of "ABC-1234": een voorbeeldwaarde; de letters ervoor zijn de prefix. */
const EXAMPLE_VALUE_RE = /^([A-Z]{2,})([-./])([A-Z0-9]+)$/;
const YEAR_RE = /\b(?:jaartal|year)\s*(20\d{2})/i;
const YEAR_ANY_RE = /\b(?:jaartal|year)\b/i;

const BLOCK_RE = new RegExp(
  `(\\d+|${Object.keys(NUM_WORDS)
    .sort((a, b) => b.length - a.length)
    .join("|")})\\s+` +
    `(${Object.keys(KIND_WORDS)
      .sort((a, b) => b.length - a.length)
      .join("|")})`,
  "gi",
);

function shapeKeyOf(spec: FormatSpec): string {
  const blocks = spec.blocks.map(([kind, length]) => `${kind}${length}`).join(",");
  return [spec.family, spec.prefix, blocks, spec.sep].join("|");
}

function blocksKey(blocks: readonly FormatBlock[]): string {
  return blocks.map(([kind, length]) => `${kind}${length}`).join(",");
}

/** Registerindex: vorm (zonder jaartal) → de formats met die vorm. */
const BY_SHAPE = new Map<string, FormatSpec[]>();
const FAMILIES_BY_PREFIX = new Map<string, Set<string>>();
for (const spec of FORMAT_REGISTER) {
  const shape = shapeKeyOf(spec);
  const bucket = BY_SHAPE.get(shape);
  if (bucket) bucket.push(spec);
  else BY_SHAPE.set(shape, [spec]);
  const families = FAMILIES_BY_PREFIX.get(spec.prefix) ?? new Set<string>();
  families.add(spec.family);
  FAMILIES_BY_PREFIX.set(spec.prefix, families);
}

export const formatCount = FORMAT_REGISTER.length;
export const shapeCount = BY_SHAPE.size;

function stripSep(prefix: string): string {
  return prefix.replace(/[./-]+$/, "");
}

function trailingSep(prefix: string): Sep {
  const last = prefix.slice(-1);
  return last === "-" || last === "." || last === "/" ? last : "";
}

/** Leidt blokken af uit een voorbeeldwaarde ("ABC-1234" → vier cijfers). */
function blocksFromExample(value: string): FormatBlock[] {
  return [...value].reduce<FormatBlock[]>((blocks, char) => {
    const kind: BlockKind = /\d/.test(char) ? "digits" : "letters";
    const last = blocks[blocks.length - 1];
    if (last && last[0] === kind) blocks[blocks.length - 1] = [kind, last[1] + 1];
    else blocks.push([kind, 1]);
    return blocks;
  }, []);
}

export type HintParseResult = HintParse | { readonly reason: string };

/** Alleen de leesstap, zonder registerlookup. Nuttig voor de UI en voor tests. */
export function parseHint(hint: string): HintParseResult {
  const text = hint.trim();
  const low = text.toLowerCase();
  if (!text) return { reason: "geen hint" };

  // 1. Prefix, inclusief de vorm waarbij het jaartal eraan vast zit ("INC-2026-").
  const embedded = PREFIX_YEAR_RE.exec(text);
  let prefix = "";
  let yearFromPrefix: number | null = null;
  let sepFromPrefix: Sep = "";
  if (embedded) {
    prefix = `${embedded[1]!}${embedded[4]!}`;
    yearFromPrefix = Number(embedded[3]);
    sepFromPrefix = embedded[4] as Sep;
  } else {
    for (const pattern of PREFIX_PATTERNS) {
      const match = pattern.exec(text);
      if (match?.[1]) {
        prefix = match[1];
        break;
      }
    }
  }
  const example = EXAMPLE_VALUE_RE.exec(prefix);
  let exampleBlocks: FormatBlock[] = [];
  if (example) {
    prefix = `${example[1]!}${example[2]!}`;
    exampleBlocks = blocksFromExample(example[3]!);
  }
  const sepInPrefix = trailingSep(prefix);
  prefix = stripSep(prefix);

  // 2. Familie: uit de naam, anders uit een eenduidige prefix, anders "custom" (de vorm telt).
  let family: string | null = null;
  for (const [name, [nl, en]] of Object.entries(FAMILY_NAMES)) {
    if (low.includes(nl) || low.includes(en)) {
      family = name;
      break;
    }
  }
  if (family === null && prefix) {
    const families = FAMILIES_BY_PREFIX.get(prefix);
    if (families?.size === 1) family = [...families][0]!;
  }
  // Geen prefix én geen familienaam: dan is er niets om een waarde op te baseren ("een code van
  // acht cijfers"). Dat is de vage hint die bij het model hoort, niet bij de generator.
  if (family === null && !prefix) return { reason: "geen prefix en geen familienaam" };

  // 3. Scheidingsteken: genoemd in woorden, anders dat van de prefix. Tegenstrijdig → niet gokken.
  let sep: Sep | null = embedded ? sepFromPrefix : null;
  for (const [word, value] of SEP_WORDS) {
    if (!low.includes(word)) continue;
    if (sep === null || sep === sepFromPrefix) {
      sep = value;
      break;
    }
  }
  if (sep === null) sep = sepInPrefix || (example ? (example[2] as Sep) : "");
  else if (sepInPrefix && sep !== sepInPrefix)
    return { reason: "prefix en scheidingsteken spreken elkaar tegen" };

  // 4. Blokken in de volgorde waarin de hint ze noemt; anders uit de voorbeeldwaarde.
  const blocks: FormatBlock[] = [];
  for (const match of text.matchAll(BLOCK_RE)) {
    const amount = match[1]!.toLowerCase();
    const kind = KIND_WORDS[match[2]!.toLowerCase()];
    if (!kind) continue;
    const length = /^\d+$/.test(amount) ? Number(amount) : NUM_WORDS[amount];
    if (length === undefined) continue;
    blocks.push([kind, length]);
  }
  // Een voorbeeldwaarde in de hint ("zoals ABC-1234") is wat de gebruiker letterlijk voor zich
  // ziet; die gaat vóór de woorden. Anders telt "twee letters en vier cijfers" bij "ZD-4821" de
  // letters van de prefix dubbel.
  if (exampleBlocks.length) blocks.splice(0, blocks.length, ...exampleBlocks);
  if (!blocks.length) return { reason: "geen bloklengte" };

  // 5. Jaartal: met getal ("jaartal 2027") of alleen het woord ("met jaartal").
  const yearMatch = YEAR_RE.exec(text);
  const year = yearMatch ? Number(yearMatch[1]) : yearFromPrefix;
  const yearWord = YEAR_ANY_RE.test(text);

  return { family: family ?? CUSTOM_FAMILY, prefix, blocks, sep, year, yearWord };
}

function specFrom(parsed: HintParse): FormatSpec {
  return {
    family: parsed.family,
    prefix: parsed.prefix,
    blocks: parsed.blocks,
    sep: parsed.sep,
    year: parsed.year,
    locale: "nl",
    kind: "structured",
  };
}

/**
 * Eén voorbeeldwaarde bij een spec, deterministisch uit de spec zelf.
 *
 * Bewust niet uit de sessie-uitgever: dit is een vraag ("bedoel je zoiets?"), geen uitgifte. De
 * waarde mag dus geen plek in `issued` innemen, en moet bij dezelfde spec altijd hetzelfde zijn.
 */
export function previewValue(spec: FormatSpec): string {
  const rng = new SeededRandom(hashString(`preview:${specKey(spec)}`));
  return renderFormatValue(spec, rng);
}

/**
 * Zet een hint om in een formaat.
 *
 * `known` = de vorm staat in het register; `proposed` = de vorm is volledig gelezen maar onbekend
 * (één voorbeeld ter bevestiging); `ambiguous` = het jaartal ontbreekt; `unknown` = te vaag, de
 * modelroute neemt het over.
 */
export function detectFormat(hint: string): FormatDetection {
  const parsed = parseHint(hint);
  if ("reason" in parsed) return { status: "unknown", reason: parsed.reason };

  const shape = [parsed.family, parsed.prefix, blocksKey(parsed.blocks), parsed.sep].join("|");
  const candidates = BY_SHAPE.get(shape) ?? [];

  // De hint noemt "een jaartal" maar geen jaar: de vorm staat vast, het jaar niet. Past er precies
  // één optioneel-jaartalvorm uit het register, dan is dat de bedoelde; anders moet de gebruiker
  // kiezen (of krijgt hij één voorstel met het huidige jaar).
  if (parsed.year === null && parsed.yearWord) {
    const optioneel = candidates.filter((item) => item.year_required === false);
    if (optioneel.length === 1) {
      const known = optioneel[0]!;
      return {
        status: "known",
        formatId: specKey(known),
        spec: known,
        exactYear: false,
        example: previewValue(known),
        parsed,
      };
    }
    const spec = specFrom(parsed);
    return {
      status: "ambiguous",
      formatIds: optioneel.length
        ? optioneel.map((item) => specKey(item))
        : [specKey({ ...spec, year: new Date().getFullYear(), year_required: false })],
      reason: "de hint noemt geen jaartal; kies er een",
      parsed,
    };
  }

  const spec = specFrom(parsed);
  if (!candidates.length) {
    // Onbekende vorm: geen gok, maar een concreet voorstel met één voorbeeldwaarde.
    return {
      status: "proposed",
      formatId: specKey(spec),
      spec,
      example: previewValue(spec),
      parsed,
    };
  }

  const rank = (item: FormatSpec): 0 | 1 | 2 => {
    const yearRequired = item.year_required !== false;
    if (parsed.year !== null) {
      if (item.year !== parsed.year) return 2;
      return yearRequired ? 0 : 1;
    }
    return item.year === null ? 0 : 1;
  };

  const best = Math.min(...candidates.map(rank)) as 0 | 1 | 2;
  if (best === 2) {
    // Vorm bekend, jaar niet: ook dan een voorstel in plaats van een weigering.
    return {
      status: "proposed",
      formatId: specKey(spec),
      spec,
      example: previewValue(spec),
      parsed,
    };
  }
  const bestItems = candidates.filter((item) => rank(item) === best);
  if (bestItems.length === 1) {
    const known = bestItems[0]!;
    return {
      status: "known",
      formatId: specKey(known),
      spec: known,
      exactYear: best === 0,
      example: previewValue(known),
      parsed,
    };
  }
  return {
    status: "ambiguous",
    formatIds: bestItems.map((item) => specKey(item)),
    reason: "meerdere formats passen bij deze hint",
    parsed,
  };
}

const NUMBER_WORDS: Readonly<Record<number, readonly [string, string]>> = {
  1: ["een", "one"],
  2: ["twee", "two"],
  3: ["drie", "three"],
  4: ["vier", "four"],
  5: ["vijf", "five"],
  6: ["zes", "six"],
  7: ["zeven", "seven"],
  8: ["acht", "eight"],
  9: ["negen", "nine"],
  10: ["tien", "ten"],
  11: ["elf", "eleven"],
  12: ["twaalf", "twelve"],
};

function amountWord(length: number, locale: SyntheticLocaleCode): string {
  return NUMBER_WORDS[length]?.[locale === "nl" ? 0 : 1] ?? String(length);
}

function blockWords([kind, length]: FormatBlock, locale: SyntheticLocaleCode): string {
  const amount = amountWord(length, locale);
  if (kind === "digits") return locale === "nl" ? `${amount} cijfers` : `${amount} digits`;
  if (kind === "letters") return `${amount} letters`;
  return locale === "nl"
    ? `${amount} tekens met letters en cijfers`
    : `${amount} characters mixing letters and digits`;
}

const SEP_NOTE: Readonly<Record<string, readonly [string, string]>> = {
  "-": [" (delen gescheiden door koppeltekens)", " (parts separated by hyphens)"],
  ".": [" (delen gescheiden door punten)", " (parts separated by dots)"],
  "/": [" (delen gescheiden door schuine strepen)", " (parts separated by slashes)"],
  "": [" (zonder scheidingsteken)", " (without separators)"],
};

/**
 * Leesbare hint bij een spec, voor de keuzelijst en voor het bevestigingsblok in de UI.
 *
 * Zelfde opbouw als variant 0 van `forgemodel.render_hint()`, zodat app en lab dezelfde taal
 * spreken — en zodat een hint die hier vandaan komt door `detectFormat()` weer op dezelfde spec
 * uitkomt (dat is een test, geen aanname).
 */
export function toHint(spec: FormatSpec, locale: SyntheticLocaleCode = "nl"): string {
  const [nlName, enName] = FAMILY_NAMES[spec.family] ?? [
    spec.family === CUSTOM_FAMILY ? "nummer" : spec.family,
    spec.family === CUSTOM_FAMILY ? "number" : spec.family,
  ];
  const name = locale === "nl" ? nlName : enName;
  const prefix = `${spec.prefix}${spec.sep}`;
  const desc = spec.blocks
    .map((block) => blockWords(block, locale))
    .join(locale === "nl" ? " en " : " and ");
  const sepNote = (SEP_NOTE[spec.sep] ?? SEP_NOTE[""]!)[locale === "nl" ? 0 : 1];
  const year = spec.year;
  // Een optioneel jaartal (`year_required: false`) hoort niet als vast jaartal in de hint te staan:
  // de validator accepteert dan elk plausibel jaar, dus de UI hoort dat ook zo te vragen.
  const yearText = year === null ? "" : spec.year_required === false ? "" : String(year);
  if (locale === "nl") {
    const middle =
      year === null ? "" : yearText ? `, daarna het jaartal ${yearText}` : ", met een jaartal";
    return `intern ${name} met prefix ${prefix}${middle} en ${desc}${sepNote}`;
  }
  const middle = year === null ? "" : yearText ? `, then the year ${yearText}` : ", with a year";
  return `internal ${name} with prefix ${prefix}${middle} and ${desc}${sepNote}`;
}

/** Alle bekende formats, voor een keuzelijst: het register als hulp, niet als grens. */
export function listFormats(): readonly FormatSpec[] {
  return FORMAT_REGISTER;
}
