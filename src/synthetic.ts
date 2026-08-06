import type { DetectionType } from "./types";

export type SyntheticLocale = "nl" | "en";

export type SyntheticMarker = {
  token: string;
  type: DetectionType;
};

const MARKER_TYPES: Record<string, DetectionType> = {
  EMAIL: "email",
  PHONE: "phone",
  IBAN: "iban",
  BSN: "bsn",
  IP: "ip",
  POSTCODE: "postcode",
  ADDRESS: "address",
  DATE: "date",
  CUSTOMER: "customer",
  TRANSACTION: "transaction",
  SERIAL: "serial",
  REFERENCE: "reference",
  PERSON: "person",
  LINK: "link",
  OTHER: "other",
};

const FIRST_NAMES_NL = [
  "Liam",
  "Emma",
  "Lucas",
  "Mila",
  "Noah",
  "Sofia",
  "Daan",
  "Julia",
  "Sem",
  "Anna",
  "Milan",
  "Tess",
  "Luuk",
  "Zoë",
  "Jayden",
  "Eva",
  "Tim",
  "Fleur",
  "Thomas",
  "Sanne",
];

const LAST_NAMES_NL = [
  "Jansen",
  "Bakker",
  "Visser",
  "Smit",
  "Mulder",
  "Boer",
  "De Groot",
  "De Jong",
  "Peters",
  "Van Dijk",
  "Van den Berg",
  "Bos",
  "Verhoeven",
  "De Vries",
  "Dekker",
  "Hendriks",
  "Van Leeuwen",
  "Jacobs",
  "Brouwer",
  "Meijer",
];

const STREET_NAMES_NL = [
  "Lindelaan",
  "Oranjelaan",
  "Kerkstraat",
  "Schoolstraat",
  "Dorpsstraat",
  "Hoofdstraat",
  "Stationsweg",
  "Molenstraat",
  "Eikenlaan",
  "Van Breestraat",
];

const CITIES_NL = [
  "Amsterdam",
  "Rotterdam",
  "Den Haag",
  "Utrecht",
  "Eindhoven",
  "Groningen",
  "Tilburg",
  "Breda",
  "Nijmegen",
  "Apeldoorn",
];

const DOMAINS_NL = ["voorbeeld.nl", "fictief.nl", "demo-org.nl", "example.nl", "testbedrijf.nl"];

const LINK_PATHS = [
  "/mijn-account",
  "/factuur/2026/07",
  "/contact",
  "/diensten/onderhoud",
  "/leden/123456",
  "/documenten/afschrift",
];

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export class SeededRandom {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed >>> 0;
  }

  next(): number {
    this.seed = (this.seed * 1664525 + 1013904223) >>> 0;
    return this.seed / 4294967296;
  }

  int(min: number, max: number): number {
    return Math.floor(this.next() * (max - min + 1)) + min;
  }

  pick<T>(items: readonly T[]): T {
    return items[this.int(0, items.length - 1)];
  }

  digits(length: number): string {
    let result = "";
    for (let i = 0; i < length; i++) {
      result += this.int(0, 9);
    }
    return result;
  }

  chars(length: number): string {
    let result = "";
    for (let i = 0; i < length; i++) {
      result += LETTERS[this.int(0, LETTERS.length - 1)];
    }
    return result;
  }
}

export function hashString(value: string): number {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i++) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

export function isValidBSN(value: string): boolean {
  if (!/^\d{9}$/.test(value)) return false;
  if (value === "000000000") return false;
  const weights = [9, 8, 7, 6, 5, 4, 3, 2, -1];
  const sum = weights.reduce((acc, weight, index) => acc + Number(value[index]) * weight, 0);
  return sum % 11 === 0;
}

export function generateBSN(rng: SeededRandom): string {
  for (let attempts = 0; attempts < 1000; attempts++) {
    const candidate = rng.digits(9);
    if (isValidBSN(candidate)) return candidate;
  }
  return "111222333";
}

export function generateIBAN(rng: SeededRandom): string {
  const bankCode = rng.chars(4);
  const account = rng.digits(10);
  const bban = bankCode + account;
  const numeric = bban.split("").reduce((acc, char) => {
    const code = char.charCodeAt(0);
    return acc + (code >= 65 ? String(code - 55) : char);
  }, "");
  const modInput = numeric + "232100";
  let remainder = 0;
  for (let i = 0; i < modInput.length; i += 7) {
    remainder = Number(String(remainder) + modInput.slice(i, i + 7)) % 97;
  }
  const check = String(98 - remainder).padStart(2, "0");
  const iban = `NL${check}${bban}`;
  return `${iban.slice(0, 4)} ${iban.slice(4, 8)} ${iban.slice(8, 12)} ${iban.slice(12, 16)} ${iban.slice(16, 18)}`;
}

function formatPostcode(rng: SeededRandom): string {
  const digits = rng.digits(4);
  const letters = rng.chars(2).replace(/O/g, "P");
  return `${digits} ${letters}`;
}

function formatAddress(rng: SeededRandom): string {
  return `${rng.pick(STREET_NAMES_NL)} ${rng.int(1, 198)}`;
}

function formatPostcodeWithCity(rng: SeededRandom): string {
  return `${formatPostcode(rng)} ${rng.pick(CITIES_NL)}`;
}

function formatPhone(rng: SeededRandom): string {
  const number = rng.int(10000000, 99999999);
  const str = String(number);
  return `06 ${str.slice(0, 2)} ${str.slice(2, 4)} ${str.slice(4, 6)} ${str.slice(6, 8)}`;
}

function formatDate(rng: SeededRandom): string {
  const start = new Date(2020, 0, 1).getTime();
  const end = new Date(2030, 11, 31).getTime();
  const timestamp = start + Math.floor(rng.next() * (end - start));
  return new Date(timestamp).toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function generateSyntheticValue(
  type: DetectionType,
  value: string,
  rng: SeededRandom,
): string | null {
  switch (type) {
    case "person": {
      const first = rng.pick(FIRST_NAMES_NL);
      const last = rng.pick(LAST_NAMES_NL);
      if (value.includes(".")) {
        return `${first.charAt(0)}. ${last}`;
      }
      return `${first} ${last}`;
    }
    case "email": {
      const first = rng.pick(FIRST_NAMES_NL).toLowerCase();
      const last = rng.pick(LAST_NAMES_NL).toLowerCase().replace(/\s+/g, ".");
      const domain = rng.pick(DOMAINS_NL);
      return `${first}.${last}@${domain}`;
    }
    case "phone":
      return formatPhone(rng);
    case "iban":
      return generateIBAN(rng);
    case "bsn":
      return generateBSN(rng);
    case "ip":
      return `10.${rng.int(0, 255)}.${rng.int(0, 255)}.${rng.int(0, 255)}`;
    case "postcode":
      if (/[A-Za-z].*\d/.test(value) && !/^\d{4}/.test(value.trim())) {
        return formatAddress(rng);
      }
      if (/^\d{4}\s?[A-Z]{2}\s+/i.test(value.trim())) {
        return formatPostcodeWithCity(rng);
      }
      return formatPostcode(rng);
    case "address":
      return formatAddress(rng);
    case "date":
      return formatDate(rng);
    case "customer":
      return rng.digits(9);
    case "transaction":
      return `2003${rng.digits(7)}`;
    case "serial":
      return `${rng.chars(4)}-${rng.digits(4)}-${rng.chars(4)}`;
    case "reference":
      return `${rng.digits(2)}.${rng.digits(3)}.${rng.digits(3)}`;
    case "link": {
      const domain = rng.pick(DOMAINS_NL).replace(/^www\./, "");
      const path = rng.pick(LINK_PATHS);
      return `https://www.${domain}${path}`;
    }
    case "other":
      return null;
    default:
      return null;
  }
}

export function createSyntheticMap(
  values: Iterable<{ type: DetectionType; value: string }>,
  sessionSeed?: number,
): Map<string, string> {
  const seed = sessionSeed ?? Date.now();
  const map = new Map<string, string>();
  for (const { type, value } of values) {
    if (type === "other" || map.has(value)) continue;
    const itemSeed = hashString(`${type}:${value}:${seed}`);
    const rng = new SeededRandom(itemSeed);
    const synthetic = generateSyntheticValue(type, value, rng);
    if (synthetic !== null) {
      map.set(value, synthetic);
    }
  }
  return map;
}

export function parseSyntheticMarkers(text: string): SyntheticMarker[] {
  const markers: SyntheticMarker[] = [];
  const seen = new Set<string>();
  const pattern = /\b([A-Z]+)_\d+\b/g;
  for (const match of text.matchAll(pattern)) {
    const token = match[0];
    const type = MARKER_TYPES[match[1]];
    if (!type || seen.has(token)) continue;
    seen.add(token);
    markers.push({ token, type });
  }
  return markers;
}

export function replaceSyntheticMarkers(text: string, replacements: Map<string, string>): string {
  return text.replace(/\b([A-Z]+)_\d+\b/g, (token) => replacements.get(token) ?? token);
}
