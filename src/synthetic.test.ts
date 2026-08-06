import { describe, expect, it } from "vitest";
import {
  createSyntheticMap,
  generateBSN,
  generateIBAN,
  hashString,
  isValidBSN,
  parseSyntheticMarkers,
  replaceSyntheticMarkers,
  SeededRandom,
} from "./synthetic";

describe("synthetic generators", () => {
  it("generates deterministic values for the same session seed", () => {
    const values = [
      { type: "email" as const, value: "persoon@example.com" },
      { type: "person" as const, value: "Jan de Vries" },
      { type: "link" as const, value: "https://example.com/account" },
      { type: "address" as const, value: "Dorpsstraat 42" },
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

  it("parses only supported markers and replaces them without touching other text", () => {
    const text = "Mail EMAIL_1 naar CUSTOMER_2 op ADDRESS_3. Laat CODE_1 ongewijzigd.";
    expect(parseSyntheticMarkers(text)).toEqual([
      { token: "EMAIL_1", type: "email" },
      { token: "CUSTOMER_2", type: "customer" },
      { token: "ADDRESS_3", type: "address" },
    ]);
    expect(
      replaceSyntheticMarkers(
        text,
        new Map([
          ["EMAIL_1", "mila@example.nl"],
          ["CUSTOMER_2", "847291503"],
          ["ADDRESS_3", "Lindelaan 42"],
        ]),
      ),
    ).toBe("Mail mila@example.nl naar 847291503 op Lindelaan 42. Laat CODE_1 ongewijzigd.");
  });

  it("generates English values when the locale is selected", () => {
    const values = createSyntheticMap(
      [
        { type: "person" as const, value: "PERSON_1" },
        { type: "email" as const, value: "EMAIL_1" },
        { type: "link" as const, value: "LINK_1" },
      ],
      42,
      "en",
    );

    expect(values.get("PERSON_1")).toMatch(/^[A-Z][a-z]+ [A-Z][a-z]+$/);
    expect(values.get("EMAIL_1")).toMatch(
      /@(example\.com|fictional\.co\.uk|demo-org\.com|sample\.net|test-company\.co\.uk)$/,
    );
    expect(values.get("LINK_1")).toMatch(/^https:\/\/www\./);
  });
});
