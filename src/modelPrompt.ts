import promptContract from "../model-prompt.md?raw";
import type { SyntheticLocale } from "./synthetic";

function fencedBlockAfter(heading: string): string {
  const headingStart = promptContract.indexOf(heading);
  const fenceStart = promptContract.indexOf("```", headingStart);
  const contentStart = promptContract.indexOf("\n", fenceStart) + 1;
  const fenceEnd = promptContract.indexOf("\n```", contentStart);
  if (headingStart < 0 || fenceStart < 0 || contentStart === 0 || fenceEnd < 0) {
    throw new Error(`Promptcontract mist ${heading}`);
  }
  return promptContract.slice(contentStart, fenceEnd);
}

export const REPLACEMENT_SYSTEM_PROMPT = fencedBlockAfter("## 1. System-bericht");

export function buildReplacementUserMessage(
  marker: string,
  formatHint: string,
  locale: SyntheticLocale,
): string {
  if (!/^[A-Z]+_[0-9]+$/.test(marker)) {
    throw new Error("De marker voldoet niet aan het promptcontract");
  }
  const lines = [`Marker: ${marker}`, `Taal: ${locale === "en" ? "English" : "Nederlands"}`];
  const hint = formatHint.trim();
  if (hint) lines.push(`Gewenst formaat: ${hint}`);
  return lines.join("\n");
}

export { promptContract };
