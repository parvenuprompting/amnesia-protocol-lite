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
  APIKEY: "apiKey",
  ACCESSTOKEN: "accessToken",
  JWT: "jwt",
  PRIVATEKEY: "privateKey",
  CREDENTIALURL: "credentialUrl",
  SECRET: "secret",
  ACCOUNT: "account",
  PATH: "path",
  GITREMOTE: "gitRemote",
  CLOUDRESOURCE: "cloudResource",
};

const FIRST_NAMES_NL = ["Voorbeeld", "Fictief", "Test"];

const LAST_NAMES_NL = ["Persoon", "Gebruiker", "Contact"];

const STREET_NAMES_NL = ["Voorbeeldstraat", "Fictiefplein", "Testlaan"];

const CITIES_NL = ["Voorbeeldstad", "Fictiefdorp", "Testdam"];

const RESERVED_DOMAINS = ["example.com", "example.net", "example.org", "example.invalid"];

const FIRST_NAMES_EN = ["Example", "Fictional", "Test"];

const LAST_NAMES_EN = ["Person", "User", "Contact"];

const STREET_NAMES_EN = ["Example Street", "Fictional Road", "Test Avenue"];

const CITIES_EN = ["Example City", "Fictional Town", "Testville"];

const LINK_PATHS = [
  "/mijn-account",
  "/factuur/2026/07",
  "/contact",
  "/diensten/onderhoud",
  "/leden/123456",
  "/documenten/afschrift",
];

const LINK_PATHS_EN = [
  "/my-account",
  "/invoice/2026/07",
  "/contact",
  "/services/maintenance",
  "/members/123456",
  "/documents/statement",
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
  let candidate = rng.digits(9);
  while (isValidBSN(candidate)) {
    candidate = `${candidate.slice(0, -1)}${(Number(candidate.at(-1)) + 1) % 10}`;
  }
  return candidate;
}

export function generateIBAN(rng: SeededRandom): string {
  const iban = `NL00TEST${rng.digits(10)}`;
  return `${iban.slice(0, 4)} ${iban.slice(4, 8)} ${iban.slice(8, 12)} ${iban.slice(12, 16)} ${iban.slice(16, 18)}`;
}

function formatPostcode(rng: SeededRandom, locale: SyntheticLocale): string {
  if (locale === "en") return `000${rng.digits(2)}`;
  const digits = `000${rng.int(0, 9)}`;
  const letters = rng.chars(2).replace(/O/g, "P");
  return `${digits} ${letters}`;
}

function formatAddress(rng: SeededRandom, locale: SyntheticLocale): string {
  const streets = locale === "en" ? STREET_NAMES_EN : STREET_NAMES_NL;
  return `${rng.pick(streets)} 0`;
}

function formatPostcodeWithCity(rng: SeededRandom, locale: SyntheticLocale): string {
  const cities = locale === "en" ? CITIES_EN : CITIES_NL;
  return `${formatPostcode(rng, locale)} ${rng.pick(cities)}`;
}

function formatPhone(rng: SeededRandom, locale: SyntheticLocale): string {
  if (locale === "en") return `+1 202 555 01${rng.digits(2)}`;
  return `+31 00 0000 ${rng.digits(4)}`;
}

function formatDate(rng: SeededRandom, locale: SyntheticLocale): string {
  const start = new Date(2020, 0, 1).getTime();
  const end = new Date(2030, 11, 31).getTime();
  const timestamp = start + Math.floor(rng.next() * (end - start));
  return new Date(timestamp).toLocaleDateString(locale === "en" ? "en-GB" : "nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function generateSyntheticValue(
  type: DetectionType,
  value: string,
  rng: SeededRandom,
  locale: SyntheticLocale = "nl",
): string | null {
  const firstNames = locale === "en" ? FIRST_NAMES_EN : FIRST_NAMES_NL;
  const lastNames = locale === "en" ? LAST_NAMES_EN : LAST_NAMES_NL;
  const domains = RESERVED_DOMAINS;
  switch (type) {
    case "person": {
      const first = rng.pick(firstNames);
      const last = rng.pick(lastNames);
      if (value.includes(".")) {
        return `${first.charAt(0)}. ${last}`;
      }
      return `${first} ${last}`;
    }
    case "email": {
      const first = rng.pick(firstNames).toLowerCase();
      const last = rng.pick(lastNames).toLowerCase().replace(/\s+/g, ".");
      const domain = rng.pick(domains);
      return `${first}.${last}@${domain}`;
    }
    case "phone":
      return formatPhone(rng, locale);
    case "iban":
      return generateIBAN(rng);
    case "bsn":
      return generateBSN(rng);
    case "ip":
      return `10.${rng.int(0, 255)}.${rng.int(0, 255)}.${rng.int(0, 255)}`;
    case "postcode":
      if (/[A-Za-z].*\d/.test(value) && !/^\d{4}/.test(value.trim())) {
        return formatAddress(rng, locale);
      }
      if (/^\d{4}\s?[A-Z]{2}\s+/i.test(value.trim())) {
        return formatPostcodeWithCity(rng, locale);
      }
      return formatPostcode(rng, locale);
    case "address":
      return formatAddress(rng, locale);
    case "date":
      return formatDate(rng, locale);
    case "customer":
      return generateBSN(rng);
    case "transaction":
      return `2003${rng.digits(7)}`;
    case "serial":
      return `${rng.chars(4)}-${rng.digits(4)}-${rng.chars(4)}`;
    case "reference":
      return `${rng.digits(2)}.${rng.digits(3)}.${rng.digits(3)}`;
    case "link": {
      const domain = rng.pick(domains);
      const path = rng.pick(locale === "en" ? LINK_PATHS_EN : LINK_PATHS);
      return `https://${domain}${path}`;
    }
    case "apiKey":
      return `demo_api_${rng.chars(12).toLowerCase()}`;
    case "accessToken":
      return `demo_token_${rng.chars(12).toLowerCase()}`;
    case "jwt":
      return `demo_jwt_${rng.chars(12).toLowerCase()}`;
    case "privateKey":
      return `SYNTHETIC_PRIVATE_KEY_${rng.chars(8)}`;
    case "credentialUrl":
      return "postgresql://demo:demo@example.invalid:5432/example";
    case "secret":
      return `demo_value_${rng.chars(12).toLowerCase()}`;
    case "account": {
      const first = rng.pick(firstNames).toLowerCase();
      const last = rng.pick(lastNames).toLowerCase().replace(/\s+/g, "-");
      return `${first}_${last}`;
    }
    case "path": {
      const account = generateSyntheticValue("account", value, rng, locale) ?? "synthetic-user";
      return locale === "en" ? `/Users/${account}/project` : `/Users/${account}/project`;
    }
    case "gitRemote":
      return "https://example.invalid/example-org/demo-repo";
    case "cloudResource":
      return `arn:aws:s3:::synthetic-bucket-${rng.digits(6)}`;
    case "other":
      return null;
    default:
      return null;
  }
}

export function createSyntheticMap(
  values: Iterable<{ type: DetectionType; value: string }>,
  sessionSeed?: number,
  locale: SyntheticLocale = "nl",
): Map<string, string> {
  const seed = sessionSeed ?? Date.now();
  const map = new Map<string, string>();
  for (const { type, value } of values) {
    if (type === "other" || map.has(value)) continue;
    const itemSeed = hashString(`${type}:${value}:${seed}:${locale}`);
    const rng = new SeededRandom(itemSeed);
    const synthetic = generateSyntheticValue(type, value, rng, locale);
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
