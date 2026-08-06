import { describe, expect, it } from "vitest";
import {
  createSyntheticMap,
  generateBSN,
  generateIBAN,
  hashString,
  isValidBSN,
  SeededRandom,
} from "./synthetic";

describe("synthetic generators", () => {
  it("generates deterministic values for the same session seed", () => {
    const values = [
      { type: "email" as const, value: "persoon@example.com" },
      { type: "person" as const, value: "Jan de Vries" },
      { type: "link" as const, value: "https://example.com/account" },
    ];

    expect(createSyntheticMap(values, 42)).toEqual(createSyntheticMap(values, 42));
  });

  it("creates valid Dutch BSN and IBAN values", () => {
    const rng = new SeededRandom(hashString("test"));
    expect(isValidBSN(generateBSN(rng))).toBe(true);
    expect(generateIBAN(rng)).toMatch(/^NL\d{2} [A-Z]{4} \d{4} \d{4} \d{2}$/);
  });

  it("does not generate a deterministic value for OTHER", () => {
    expect(createSyntheticMap([{ type: "other", value: "interne aanduiding" }], 42)).toEqual(
      new Map(),
    );
  });
});
