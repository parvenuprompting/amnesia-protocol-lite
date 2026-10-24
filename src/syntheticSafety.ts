import { isValidBsn } from "./detectors";
import type { SyntheticLocale } from "./synthetic";

const ALLOWED_DOMAINS = new Set(["example.com", "example.net", "example.org", "example.invalid"]);
const DOMAIN_PATTERN =
  /(?:https?:\/\/|@|\b)(?:www\.)?([a-z0-9-]+(?:\.[a-z0-9-]+)*\.(?:[a-z]{2,}|invalid))\b/gi;
const SECRET_PATTERN =
  /(?:AKIA[A-Z0-9]{8,}|\beyJ[A-Za-z0-9_-]*|\bsk-[A-Za-z0-9_-]+|\bghp_[A-Za-z0-9]+|-----BEGIN)/i;

export type SyntheticValidation =
  { ok: true; value: string } | { ok: false; reason: string; refusal: boolean };

export function validateSyntheticValue(raw: string, locale: SyntheticLocale): SyntheticValidation {
  const refusal = locale === "en" ? "UNAVAILABLE" : "NIET_BESCHIKBAAR";
  if (raw === refusal) {
    return { ok: false, reason: `Het model weigerde met ${refusal}`, refusal: true };
  }
  if (raw === (locale === "en" ? "NIET_BESCHIKBAAR" : "UNAVAILABLE")) {
    return { ok: false, reason: "Het model gebruikte de verkeerde weigeringstaal", refusal: true };
  }
  if (!raw || raw !== raw.trim() || /[\r\n]/.test(raw)) {
    return {
      ok: false,
      reason: "De vervanging moet exact één niet-lege regel zijn",
      refusal: false,
    };
  }
  if (raw.length > 64) {
    return { ok: false, reason: "De vervanging is langer dan 64 tekens", refusal: false };
  }
  if (/^["'`]|["'`]$/.test(raw) || raw.includes("```")) {
    return {
      ok: false,
      reason: "Aanhalingstekens en codeblokken zijn niet toegestaan",
      refusal: false,
    };
  }
  if (/\b[A-Z]+_[0-9]+\b/.test(raw)) {
    return { ok: false, reason: "De vervanging bevat een marker-token", refusal: false };
  }
  if (raw.endsWith(".")) {
    return { ok: false, reason: "De vervanging mag niet eindigen op een punt", refusal: false };
  }
  if (/^(?:here is|hier is|replacement|vervanging)\b/i.test(raw)) {
    return { ok: false, reason: "De vervanging bevat uitleg", refusal: false };
  }
  if (SECRET_PATTERN.test(raw)) {
    return { ok: false, reason: "De vervanging lijkt op een echt secret", refusal: false };
  }

  for (const match of raw.matchAll(DOMAIN_PATTERN)) {
    const matchEnd = (match.index ?? 0) + match[0].length;
    if (raw[matchEnd] === "@") continue;
    const domain = match[1].toLowerCase();
    if (!ALLOWED_DOMAINS.has(domain)) {
      return { ok: false, reason: `Domein ${domain} is niet gereserveerd`, refusal: false };
    }
  }

  for (const match of raw.matchAll(/\b[a-z][a-z0-9+.-]*:\/\/[^\s]+/gi)) {
    try {
      const domain = new URL(match[0]).hostname.toLowerCase();
      if (!ALLOWED_DOMAINS.has(domain)) {
        return { ok: false, reason: `Domein ${domain} is niet gereserveerd`, refusal: false };
      }
    } catch {
      return { ok: false, reason: "De vervanging bevat een ongeldige URL", refusal: false };
    }
  }
  for (const match of raw.matchAll(/@([^\s:/]+)(?=[:/\s]|$)/g)) {
    const domain = match[1].toLowerCase();
    if (!ALLOWED_DOMAINS.has(domain)) {
      return { ok: false, reason: `Domein ${domain} is niet gereserveerd`, refusal: false };
    }
  }

  const bsnDigits = raw.replace(/\D/g, "");
  if (bsnDigits.length === 9 && isValidBsn(bsnDigits)) {
    return { ok: false, reason: "De vervanging is een geldig BSN", refusal: false };
  }
  const ibanCandidates = raw.toUpperCase().match(/[A-Z]{2}\d{2}(?:\s?[A-Z0-9]){11,30}/g) ?? [];
  if (ibanCandidates.some((candidate) => isValidAnyIban(candidate))) {
    return { ok: false, reason: "De vervanging is een geldige IBAN", refusal: false };
  }
  return { ok: true, value: raw };
}

export function isValidAnyIban(value: string): boolean {
  const normalized = value.replace(/\s/g, "").toUpperCase();
  if (!/^[A-Z]{2}\d{2}[A-Z0-9]{11,30}$/.test(normalized)) return false;
  const rearranged = normalized.slice(4) + normalized.slice(0, 4);
  let remainder = 0;
  for (const char of rearranged) {
    const numeric = /[A-Z]/.test(char) ? String(char.charCodeAt(0) - 55) : char;
    for (const digit of numeric) remainder = (remainder * 10 + Number(digit)) % 97;
  }
  return remainder === 1;
}

export function assertSyntheticValue(raw: string, locale: SyntheticLocale): string {
  const result = validateSyntheticValue(raw, locale);
  if (!result.ok) throw new Error(result.reason);
  return result.value;
}
