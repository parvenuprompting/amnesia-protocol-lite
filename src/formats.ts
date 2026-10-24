/**
 * `format_id` — deterministische generatie van synthetische waarden voor markertype `OTHER`.
 *
 * Waarom dit bestaat: de vrije-tekstroute (`generateWithOllama`) krijgt een hint die de app zelf
 * niet kan natrekken. Alle vijf gemiste weigeringen uit de veiligheidsmeting kwamen via dat veld
 * binnen, en vijf tot tien formaatfouten per 200 ontstonden doordat het model de lengte van een
 * letter/cijferblok verkeerd inschatte. Een generator telt in plaats van te schatten.
 *
 * De specificatie is **letterlijk** die van `forgemodel.py` in het lab:
 *   { family, prefix, blocks: [[kind, lengte], …], sep, year, locale, kind, year_required }
 * en `toRegex()` geeft exact hetzelfde patroon als `forgemodel.spec_regex()`. Dat wordt bewezen met
 * een fixture die uit Python komt (`src/__fixtures__/specRegex.ts`), niet met een tweede
 * implementatie van dezelfde regel — anders meet je jezelf.
 *
 * Uniekheid en stabiliteit:
 *   - hetzelfde origineel → **dezelfde** vervanger, zolang dezelfde `sessionSeed` geldt
 *   - elke uitgegeven waarde is **uniek** binnen de issuer
 *   - een waarde komt **nooit** voor in de brondocumenttekst
 *   - toeval komt uit `SeededRandom` (zoals `synthetic.ts`), niet uit `crypto.getRandomValues`
 *
 * Let op: "stabiel na een reload" is alleen waar als de app de `sessionSeed` bewaart. Zolang
 * `App.tsx` een verse `Date.now()` per sessie gebruikt, geldt de stabiliteit binnen die sessie.
 */
import { hashString, SeededRandom } from "./synthetic";

export type BlockKind = "digits" | "letters" | "alnum";
export type FormatBlock = readonly [BlockKind, number];
export type SyntheticLocaleCode = "nl" | "en";

export type FormatSpec = {
  readonly family: string;
  readonly prefix: string;
  readonly blocks: readonly FormatBlock[];
  readonly sep: "" | "-" | "." | "/";
  readonly year: number | null;
  readonly locale: SyntheticLocaleCode;
  readonly kind: "structured" | "refusal";
  readonly year_required?: boolean;
};

/** Letters zonder I en O, zodat een waarde niet met 1 of 0 te verwarren is. */
const ALPHABET: readonly string[] = [..."ABCDEFGHJKLMNPQRSTUVWXYZ"];
const DIGITS: readonly string[] = [..."0123456789"];
const ALNUM: readonly string[] = [...ALPHABET, ...DIGITS];

/** De tekens die Python's `re.escape` (3.7+) uit een string haalt; nodig voor patroongelijkheid. */
const PY_ESCAPED = "()[]{}?*+-|^$\\\\.&~# \t\n\r\v\f";

function escapeRegex(value: string): string {
  let out = "";
  for (const ch of value) {
    out += PY_ESCAPED.includes(ch) ? `\\${ch}` : ch;
  }
  return out;
}

/**
 * Hetzelfde patroon als `forgemodel.spec_regex()`:
 * prefix, dan het jaartal (verplicht, of `(?:20\d{2})` als de hint alleen "met jaartal" zegt),
 * dan de blokken — alles verbonden door het scheidingsteken.
 */
export function toRegexSource(spec: FormatSpec): string {
  const parts: string[] = [];
  if (spec.prefix) parts.push(escapeRegex(spec.prefix));
  if (spec.year) {
    parts.push(spec.year_required === false ? "(?:20\\d{2})" : String(spec.year));
  }
  for (const [kind, length] of spec.blocks) {
    if (kind === "digits") parts.push(`\\d{${length}}`);
    else if (kind === "letters") parts.push(`[A-Z]{${length}}`);
    else parts.push(`[A-Z0-9]{${length}}`);
  }
  return `^${parts.join(escapeRegex(spec.sep))}$`;
}

export function toRegex(spec: FormatSpec): RegExp {
  return new RegExp(toRegexSource(spec));
}

/** Stabiele sleutel per specificatie; verandert nooit tussen app en lab. */
export function specKey(spec: FormatSpec): string {
  const blocks = spec.blocks.map(([kind, length]) => `${kind}${length}`).join(",");
  return [
    spec.family,
    spec.prefix,
    blocks,
    spec.sep,
    spec.year ?? "-",
    spec.year_required === false ? "opt" : "req",
  ].join("|");
}

/**
 * Hoeveel waarden dit formaat kan voortbrengen. Nodig om een uitgeputte ruimte te herkennen en om
 * in de melding te kunnen zeggen hoeveel er waren.
 */
export function formatSpaceSize(spec: FormatSpec): number {
  let size = 1;
  for (const [kind, length] of spec.blocks) {
    const basis =
      kind === "digits" ? DIGITS.length : kind === "letters" ? ALPHABET.length : ALNUM.length;
    size *= basis ** length;
  }
  return size;
}

/** Wordt gegooid als een formaat geen vrije waarde meer heeft; de UI toont `userMessage`. */
export class FormatSpaceExhaustedError extends Error {
  readonly userMessage: string;

  constructor(
    readonly spec: FormatSpec,
    readonly size: number,
  ) {
    const userMessage =
      `Er zijn geen ongebruikte waarden meer voor dit formaat (${size} mogelijkheden). ` +
      "Kies een ander formaat of maak de blokken langer.";
    super(userMessage);
    this.name = "FormatSpaceExhaustedError";
    this.userMessage = userMessage;
  }
}

function body(rng: SeededRandom, kind: BlockKind, length: number): string {
  if (kind === "digits") return Array.from({ length }, () => rng.pick(DIGITS)).join("");
  if (kind === "letters") return Array.from({ length }, () => rng.pick(ALPHABET)).join("");
  return Array.from({ length }, () => rng.pick(ALNUM)).join("");
}

/** Waarde volgens de spec; vorm is identiek aan `forgemodel.render_value()`. */
export function renderFormatValue(spec: FormatSpec, rng: SeededRandom): string {
  const parts: string[] = [];
  if (spec.prefix) parts.push(spec.prefix);
  if (spec.year) parts.push(String(spec.year));
  for (const [kind, length] of spec.blocks) parts.push(body(rng, kind, length));
  return parts.join(spec.sep);
}

export class OtherValueIssuer {
  private readonly used = new Set<string>();
  /** Onthoudt wat een origineel kreeg, zodat een tweede vraag hetzelfde antwoord geeft. */
  private readonly assigned = new Map<string, string>();
  private upperDocument: string;
  readonly sessionSeed: number;

  constructor(options: { sessionSeed?: number; documentText?: string } = {}) {
    this.sessionSeed = options.sessionSeed ?? Date.now();
    this.upperDocument = (options.documentText ?? "").toUpperCase();
  }

  get issued(): ReadonlySet<string> {
    return this.used;
  }

  /**
   * De brondtekst verandert mee met het document; de toewijzingen en de uitgegeven waarden blijven
   * staan, want die horen bij de sessie en niet bij één versie van de tekst.
   */
  setDocumentText(text: string): void {
    this.upperDocument = text.toUpperCase();
  }

  /** Wat dit origineel al kreeg, of undefined. */
  valueFor(spec: FormatSpec, original: string): string | undefined {
    return this.assigned.get(this.assignKey(spec, original));
  }

  private assignKey(spec: FormatSpec, original: string): string {
    return `gen|${specKey(spec)}|${original}`;
  }

  /** Wat dit markertoken kreeg van de modelroute, of undefined. */
  modelValueFor(token: string): string | undefined {
    return this.assigned.get(`model|${token}`);
  }

  /**
   * Alle waarden van de ruimte, in een vaste volgorde. Alleen bedoeld voor kleine ruimtes: als de
   * willekeurige pogingen niets vrij vinden, is dit de garantie dat een vrije waarde niet blijft
   * liggen (bij tien mogelijkheden mag de negende poging niet "uitgeput" melden).
   */
  private *spaceValues(spec: FormatSpec): Generator<string> {
    const alfabetten = spec.blocks.map(([kind]) =>
      kind === "digits" ? DIGITS : kind === "letters" ? ALPHABET : ALNUM,
    );
    const totaal = formatSpaceSize(spec);
    for (let n = 0; n < totaal; n += 1) {
      let rest = n;
      const delen: string[] = new Array(spec.blocks.length).fill("");
      for (let b = spec.blocks.length - 1; b >= 0; b -= 1) {
        const basis = alfabetten[b].length;
        delen[b] = alfabetten[b][rest % basis];
        rest = Math.floor(rest / basis);
      }
      const kop = [spec.prefix, spec.year ? String(spec.year) : ""].filter((deel) => deel !== "");
      yield [...kop, ...delen].join(spec.sep);
    }
  }

  /** Waarom een kandidaat niet mag: leeg, al uitgegeven, of staat al in het document. */
  rejection(value: string): "leeg" | "dubbel" | "in-document" | null {
    const trimmed = value.trim();
    if (!trimmed) return "leeg";
    if (this.used.has(trimmed)) return "dubbel";
    if (this.upperDocument && this.upperDocument.includes(trimmed.toUpperCase()))
      return "in-document";
    return null;
  }

  /**
   * Geef de waarde voor dit origineel.
   *
   * - Bestaat er al een toewijzing voor dit origineel (en deze spec), dan komt **die** terug. Dat is
   *   de stabiliteitseis: een tweede vraag mag geen nieuwe waarde opleveren, ook al staat de eerste
   *   in `used`.
   * - Anders genereert de issuer deterministisch uit `sessionSeed` + spec + origineel, en schuift hij
   *   net zo lang op tot de waarde uniek is en niet in het document voorkomt.
   * - Is de formaatruimte uitgeput, dan volgt `FormatSpaceExhaustedError` met een `userMessage` die
   *   de UI kan tonen — geen onafgevangen fout.
   */
  issue(spec: FormatSpec, original: string, attemptLimit = 400, sweepLimit = 200_000): string {
    if (spec.kind === "refusal") {
      throw new Error(
        "een weigeringsspec hoort niet bij de generator: die hoort bij het model of bij een vaste regel",
      );
    }
    const key = this.assignKey(spec, original);
    const bekend = this.assigned.get(key);
    if (bekend) return bekend;

    const size = formatSpaceSize(spec);
    const basis = hashString(`other:${specKey(spec)}:${original}:${this.sessionSeed}`);
    for (let attempt = 0; attempt < attemptLimit; attempt += 1) {
      const rng = new SeededRandom(hashString(`${basis}:${attempt}`));
      const value = renderFormatValue(spec, rng);
      if (!this.rejection(value) && toRegex(spec).test(value)) {
        this.used.add(value);
        this.assigned.set(key, value);
        return value;
      }
    }
    // De willekeurige pogingen vonden niets vrij. Bij een kleine ruimte lopen we hem helemaal langs,
    // zodat een vrije waarde niet ongebruikt blijft liggen; pas daarna is "uitgeput" eerlijk.
    if (size <= sweepLimit) {
      for (const value of this.spaceValues(spec)) {
        if (!this.rejection(value) && toRegex(spec).test(value)) {
          this.used.add(value);
          this.assigned.set(key, value);
          return value;
        }
      }
    }
    throw new FormatSpaceExhaustedError(spec, size);
  }

  /**
   * Voor de modelroute: keur een waarde die het model teruggaf.
   *
   * De sleutel is het **markertoken** (`OTHER_1`), niet het origineel: de app heeft het origineel op
   * dat moment al vervangen door het token, dus het origineel is niet meer beschikbaar. De
   * documentcontrole kijkt naar de gemarkeerde tekst en beschermt daarmee tegen botsing met wat er
   * nog staat — niet tegen gelijkheid met een origineel dat al uit de tekst verdwenen is.
   *
   * Wordt voor hetzelfde token opnieuw een waarde aangeboden (opnieuw genereren), dan geeft de keuring
   * de oude waarde vrij en neemt de nieuwe over. Zo blijft de verzameling uitgegeven waarden kloppen.
   */
  acceptModelValue(
    value: string,
    options: { token: string; spec?: FormatSpec },
  ):
    | { ok: true; value: string }
    | { ok: false; reason: "leeg" | "dubbel" | "in-document" | "formaat" } {
    const trimmed = value.trim();
    if (!trimmed) return { ok: false, reason: "leeg" };
    if (options.spec && !toRegex(options.spec).test(trimmed))
      return { ok: false, reason: "formaat" };
    const sleutel = `model|${options.token}`;
    const vorige = this.assigned.get(sleutel);
    if (this.used.has(trimmed) && trimmed !== vorige) return { ok: false, reason: "dubbel" };
    if (this.upperDocument && this.upperDocument.includes(trimmed.toUpperCase()))
      return { ok: false, reason: "in-document" };
    if (vorige && vorige !== trimmed) this.used.delete(vorige);
    this.used.add(trimmed);
    this.assigned.set(sleutel, trimmed);
    return { ok: true, value: trimmed };
  }
}

/**
 * Eén sessie per geladen document. `beginDocument()` gooit de uitgever weg en maakt een nieuwe, en
 * hoort op precies hetzelfde moment te gebeuren als het wissen van de vervangwaarden — anders erft
 * `OTHER_1` in document B de waarde uit document A.
 */
export class DocumentSession {
  private huidige: OtherValueIssuer;

  constructor(
    private readonly sessionSeed: number,
    documentText = "",
  ) {
    this.huidige = new OtherValueIssuer({ sessionSeed, documentText });
  }

  get issuer(): OtherValueIssuer {
    return this.huidige;
  }

  get seed(): number {
    return this.sessionSeed;
  }

  /** Nieuw document: verse uitgever, geen geërfde toewijzingen of uitgegeven waarden. */
  beginDocument(documentText = ""): OtherValueIssuer {
    this.huidige = new OtherValueIssuer({ sessionSeed: this.sessionSeed, documentText });
    return this.huidige;
  }
}
