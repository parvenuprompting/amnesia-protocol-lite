import type { Detection, DetectionType } from "./types";

type Candidate = Omit<Detection, "id" | "decision">;
type ContextPattern = { type: DetectionType; regex: RegExp; confidence: number };

export const MAX_DETECTION_INPUT_LENGTH = 1_000_000;

const patterns: Array<{ type: DetectionType; regex: RegExp; confidence: number }> = [
  { type: "email", regex: /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi, confidence: 0.99 },
  {
    type: "phone",
    regex:
      /(?<!\d)(?:\+31[ -]?(?:[1-9]\d{0,2}|[89]00)[ -]?\d{3,4}[ -]?\d{3,4}|0[1-9]\d{1,2}[ -]?\d{3,4}[ -]?\d{3,4}|0[89]00[ -]?\d{4,7}|06[ -]?\d{8})(?!\d)/gi,
    confidence: 0.96,
  },
  {
    type: "iban",
    regex: /\bNL\s?\d{2}\s?[A-Z]{4}\s?(?:\d{4}\s?){2}\d{2}\b/gi,
    confidence: 0.99,
  },
  { type: "bsn", regex: /(?<!\d)\d{9}(?!\d)/g, confidence: 0.97 },
  { type: "ip", regex: /(?<![\d.])(?:\d{1,3}\.){3}\d{1,3}(?![\d.])/g, confidence: 0.92 },
  {
    type: "postcode",
    regex: /(?<![\dA-Z])\d{4}\s?[A-Z]{2}(?:\s+[A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)?(?![A-Z])/g,
    confidence: 0.92,
  },
  {
    type: "address",
    regex:
      /\b[A-Z][a-z]+(?:straat|weg|laan|plein|gracht|kade|dijk|steeg|singel|dreef|berg|dorp|hof|pad|allee|ring)\s+\d+\s?[a-zA-Z]?(?!\d)/g,
    confidence: 0.93,
  },
  {
    type: "date",
    regex:
      /(?<!\w)(?:0?[1-9]|[12]\d|3[01])\s+(?:januari|februari|maart|april|mei|juni|juli|augustus|september|oktober|november|december|jan|feb|mrt|apr|jun|jul|aug|sep|okt|nov|dec)\.?\s+(?:\d{4}|'\d{2}|\d{2})\b/gi,
    confidence: 0.94,
  },
  {
    type: "date",
    regex: /(?<!\d)(?:0?[1-9]|[12]\d|3[01])[-/.](?:0?[1-9]|1[0-2])[-/.](?:\d{4}|\d{2})(?!\d)/g,
    confidence: 0.9,
  },
  {
    type: "date",
    regex: /(?<!\d)\d{4}[-/.](?:0?[1-9]|1[0-2])[-/.](?:0?[1-9]|[12]\d|3[01])(?!\d)/g,
    confidence: 0.9,
  },
  {
    type: "person",
    regex: /\b[A-Z]\.(?:[A-Z]\.)+\s+(?:(?:van|de|den|der|het|t'|von|le|la)\s+)*[A-Z][a-zA-Z-]+\b/g,
    confidence: 0.95,
  },
  {
    type: "person",
    regex: /\b[A-Z][a-z]{2,}\s+(?:van\s+(?:der\s+|den\s+)?|de\s+|het\s+)[A-Z][a-z]{2,}\b/g,
    confidence: 0.85,
  },
  {
    type: "reference",
    regex: /\bNL\s?[\d.]{9,12}\s?B\s?\d{2}\b/gi,
    confidence: 0.96,
  },
  {
    type: "reference",
    regex: /\b\d{2}\.\d{3}\.\d{3}\b/g,
    confidence: 0.9,
  },
  {
    type: "link",
    regex: /\bhttps?:\/\/[^\s<>"{}|\\^`]+(?<![.,;!?:)])/gi,
    confidence: 0.96,
  },
];

const contextPatterns: ContextPattern[] = [
  {
    type: "customer",
    regex:
      /\b(?:klantnummer|klantnr\.?|customer\s*(?:number|id)?|lid-?\/?relatienummer|lidnummer|lidnr\.?|relatienummer|relatienr\.?|accountnummer|accountnr\.?|polisnummer|polisnr\.?|gebruikersid|personeelsnummer|medewerkersnummer)\s*[:#-]?\s*(?<value>[A-Z0-9][A-Z0-9-]{3,})\b/gi,
    confidence: 0.98,
  },
  {
    type: "customer",
    regex:
      /["']?(?:customer|customer[_ -]?number|klant[_ -]?nr\.?)["']?\s*[:=]\s*["']?(?<value>[A-Z0-9][A-Z0-9-]{3,})["']?/gi,
    confidence: 0.96,
  },
  {
    type: "transaction",
    regex:
      /\b(?:transactie(?:nummer|id)?|ordernummer|bestelnummer|factuurnummer|facturnr\.?|ticketnummer|interactienummer|betalingskenmerk|rekeningnummer)\s*[:#-]?\s*(?<value>[A-Z0-9][A-Z0-9-]{3,})\b/gi,
    confidence: 0.98,
  },
  {
    type: "serial",
    regex:
      /\b(?:serienummer|serial\s*number|apparaat-?id|device\s*id|contractnummer|chassisnummer)\s*[:#-]?\s*(?<value>[A-Z0-9][A-Z0-9-]{3,})\b/gi,
    confidence: 0.98,
  },
  {
    type: "reference",
    regex:
      /\b(?:dossier(?:nummer)?|zaaknummer|referentie(?:nummer)?|case\s*id|kvk\s*(?:nr\.?|nummer)?|btw\s*(?:nr\.?|nummer)?|vat\s*(?:nr\.?|number)?)\s*[:#-]?\s*(?<value>[A-Z0-9.-]{3,})\b/gi,
    confidence: 0.96,
  },
  {
    type: "person",
    regex:
      /\b(?:naam|heer|mevrouw|dhr\.?|mvr\.?|geadresseerde|t\.a\.v\.?|tav|contactpersoon|patient|cliënt|client)\s*[:#-]?\s*(?<value>[A-Z][a-zA-Z.-]+(?:\s+(?:van|de|den|der|het|t'|von|le|la)\b)*\s+[A-Z][a-zA-Z-]+)\b/gi,
    confidence: 0.96,
  },
  {
    type: "date",
    regex:
      /\b(?:factuurdatum|geboortedatum|vervaldatum|datum|periode)\s*[:#-]?\s*(?<value>(?:0?[1-9]|[12]\d|3[01])\s+(?:januari|februari|maart|april|mei|juni|juli|augustus|september|oktober|november|december|jan|feb|mrt|apr|jun|jul|aug|sep|okt|nov|dec)\.?\s+(?:\d{4}|\d{2})|(?:0?[1-9]|[12]\d|3[01])[-/.](?:0?[1-9]|1[0-2])[-/.](?:\d{4}|\d{2}))\b/gi,
    confidence: 0.98,
  },
  {
    type: "phone",
    regex:
      /\b(?:telefoon(?:nummer)?|tel\.?|mobiel|phone|fax|t:)\s*[:#-]?\s*(?<value>(?:\+31[ -]?(?:[1-9]\d{0,2}|[89]00)[ -]?\d{3,4}[ -]?\d{3,4}|0[1-9]\d{1,2}[ -]?\d{3,4}[ -]?\d{3,4}|0[89]00[ -]?\d{4,7}|06[ -]?\d{8}))\b/gi,
    confidence: 0.98,
  },
  {
    type: "link",
    regex:
      /\b(?:internet|website|web|url|site)\s*[:#-]?\s*(?<value>https?:\/\/[a-z0-9-]+(?:\.[a-z0-9-]+)+(?:\/[^\s]*)?)\b/gi,
    confidence: 0.95,
  },
  {
    type: "address",
    regex:
      /\b(?:adres|straat|woonadres|postadres|vestigingsadres)\s*[:#-]?\s*(?<value>[A-Z][a-zA-Z0-9\s.-]+?\s+\d+\s?[a-zA-Z]?)\b/gi,
    confidence: 0.95,
  },
];

const terminalContextPatterns: ContextPattern[] = [
  {
    type: "accessToken",
    regex:
      /\b(?:authorization|proxy-authorization)\s*:\s*bearer\s+(?<value>[A-Za-z0-9._~+/-]{12,})/gi,
    confidence: 0.99,
  },
  {
    type: "secret",
    regex:
      /\b(?:password|passwd|secret|token|api[_-]?key|access[_-]?key)\s*[=:]\s*["']?(?<value>[^\s"']{8,})["']?/gi,
    confidence: 0.94,
  },
  {
    type: "account",
    regex: /(?:\/Users\/|\/home\/|C:\\\\Users\\)(?<value>[A-Za-z0-9._-]{2,})/g,
    confidence: 0.96,
  },
];

const terminalPatterns: Array<{ type: DetectionType; regex: RegExp; confidence: number }> = [
  {
    type: "privateKey",
    regex: /-----BEGIN [A-Z ]*PRIVATE KEY-----[\s\S]+?-----END [A-Z ]*PRIVATE KEY-----/g,
    confidence: 1,
  },
  {
    type: "jwt",
    regex: /\beyJ[A-Za-z0-9_-]{8,}\.[A-Za-z0-9_-]{8,}\.[A-Za-z0-9_-]{8,}\b/g,
    confidence: 0.99,
  },
  {
    type: "apiKey",
    regex:
      /\b(?:AKIA|ASIA)[0-9A-Z]{16}\b|\bgh[pousr]_[A-Za-z0-9_]{20,}\b|\bxox[baprs]-[A-Za-z0-9-]{20,}\b/g,
    confidence: 0.99,
  },
  {
    type: "cloudResource",
    regex: /\barn:(?:aws|azure|gcp):[^\s]+\b/gi,
    confidence: 0.95,
  },
  {
    type: "gitRemote",
    regex: /\b(?:https?:\/\/[^\s/@]+(?::[^\s/@]+)?@github\.com\/[^\s]+|git@github\.com:[^\s]+)\b/gi,
    confidence: 0.96,
  },
  {
    type: "credentialUrl",
    regex: /\b(?:postgres(?:ql)?|mysql|mongodb(?:\+srv)?|redis|amqp):\/\/[^\s]+/gi,
    confidence: 0.98,
  },
  {
    type: "path",
    regex: /(?<![\w])(?:\/Users\/[^\s]+|\/home\/[^\s]+|[A-Z]:\\Users\\[^\s]+)/g,
    confidence: 0.8,
  },
];

function clean(value: string) {
  return value.replace(/[\s-]/g, "").toUpperCase();
}

export function isValidIban(value: string): boolean {
  const normalized = clean(value);
  if (!/^NL\d{2}[A-Z]{4}\d{10}$/.test(normalized)) return false;
  const rearranged = normalized.slice(4) + normalized.slice(0, 4);
  const numeric = [...rearranged]
    .map((char) => (/[A-Z]/.test(char) ? String(char.charCodeAt(0) - 55) : char))
    .join("");
  let remainder = 0;
  for (const digit of numeric) remainder = (remainder * 10 + Number(digit)) % 97;
  return remainder === 1;
}

export function isValidBsn(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  if (!/^\d{9}$/.test(digits) || /^([0-9])\1{8}$/.test(digits)) return false;
  const sum = [...digits].reduce(
    (total, digit, index) => total + Number(digit) * (index === 8 ? -1 : 9 - index),
    0,
  );
  return sum % 11 === 0;
}

function validIp(value: string) {
  return value.split(".").every((part) => Number(part) <= 255);
}

function validDate(value: string) {
  if (
    /\b(?:januari|februari|maart|april|mei|juni|juli|augustus|september|oktober|november|december|jan|feb|mrt|apr|jun|jul|aug|sep|okt|nov|dec)\b/i.test(
      value,
    )
  ) {
    return true;
  }
  const parts = value.split(/[-/.]/).map(Number);
  if (parts.length !== 3) return false;
  let [day, month, year] = parts;
  if (year < 100) year += 2000;
  if (day > 1000) {
    const isoYear = day;
    const isoMonth = month;
    const isoDay = year;
    day = isoDay;
    month = isoMonth;
    year = isoYear;
  }
  const date = new Date(year, month - 1, day);
  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
}

function collectContextCandidates(
  text: string,
  rules: ContextPattern[] = contextPatterns,
): Candidate[] {
  const candidates: Candidate[] = [];
  for (const { type, regex, confidence } of rules) {
    regex.lastIndex = 0;
    for (const match of text.matchAll(regex)) {
      const rawValue = match.groups?.value;
      if (!rawValue || match.index === undefined) continue;
      const leadingSpace = rawValue.length - rawValue.trimStart().length;
      const value = rawValue.trim();
      if (!value) continue;
      const start = match.index + match[0].lastIndexOf(rawValue) + leadingSpace;
      candidates.push({
        start,
        end: start + value.length,
        value,
        type,
        confidence,
        detector: "regex",
      });
    }
  }
  return candidates;
}

function collectPatternCandidates(
  text: string,
  rules: Array<{ type: DetectionType; regex: RegExp; confidence: number }> = patterns,
): Candidate[] {
  const candidates: Candidate[] = [];
  for (const { type, regex, confidence } of rules) {
    regex.lastIndex = 0;
    for (const match of text.matchAll(regex)) {
      const value = match[0];
      const start = match.index ?? 0;
      let valid = true;
      let candidateConfidence = confidence;
      if (type === "iban") valid = isValidIban(value);
      if (type === "bsn") valid = isValidBsn(value);
      if (type === "ip") valid = validIp(value);
      if (type === "date") valid = validDate(value);
      if (!valid && (type === "iban" || type === "bsn")) candidateConfidence = 0.45;
      else if (!valid) continue;
      candidates.push({
        start,
        end: start + value.length,
        value,
        type,
        confidence: candidateConfidence,
        detector: "regex",
      });
    }
  }
  return candidates;
}

export function detect(text: string): Detection[] {
  if (text.length > MAX_DETECTION_INPUT_LENGTH) {
    throw new Error(
      `Tekst is te groot om veilig te analyseren. Maximum is ${MAX_DETECTION_INPUT_LENGTH.toLocaleString("nl-NL")} tekens.`,
    );
  }
  const candidates = [...collectContextCandidates(text), ...collectPatternCandidates(text)];
  return resolveOverlaps(candidates).map((candidate, index) => ({
    ...candidate,
    id: `detection-${index + 1}`,
    decision: "pending",
  }));
}

export function detectTerminal(text: string): Detection[] {
  const baseCandidates = detect(text).map((item) => ({
    start: item.start,
    end: item.end,
    value: item.value,
    type: item.type,
    confidence: item.confidence,
    detector: item.detector,
  }));
  const candidates = [
    ...baseCandidates,
    ...collectContextCandidates(text, terminalContextPatterns),
    ...collectPatternCandidates(text, terminalPatterns),
  ];
  return resolveOverlaps(candidates).map((candidate, index) => ({
    ...candidate,
    id: `terminal-detection-${index + 1}`,
    decision: "pending" as const,
  }));
}

export function resolveOverlaps(candidates: Candidate[]): Candidate[] {
  const sorted = [...candidates].sort(
    (a, b) => a.start - b.start || b.end - b.start - (a.end - a.start),
  );
  const result: Candidate[] = [];
  for (const candidate of sorted) {
    const previous = result[result.length - 1];
    if (!previous || candidate.start >= previous.end) {
      result.push(candidate);
    } else if (candidate.confidence > previous.confidence) {
      result[result.length - 1] = candidate;
    } else if (
      candidate.confidence === previous.confidence &&
      candidate.end - candidate.start > previous.end - previous.start
    ) {
      result[result.length - 1] = candidate;
    }
  }
  return result.sort((a, b) => a.start - b.start);
}
