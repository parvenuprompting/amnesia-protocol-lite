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
import { isValidIban } from "./detectors";
import { isValidAnyIban, validateSyntheticValue } from "./syntheticSafety";

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

  it("never creates valid Dutch BSN or IBAN values", () => {
    const rng = new SeededRandom(hashString("test"));
    expect(isValidBSN(generateBSN(rng))).toBe(false);
    expect(isValidIban(generateIBAN(rng))).toBe(false);
  });

  it("does not generate a deterministic value for OTHER", () => {
    expect(createSyntheticMap([{ type: "other", value: "interne aanduiding" }], 42)).toEqual(
      new Map(),
    );
  });

  it("parses only supported markers and replaces them without touching other text", () => {
    const text = "Mail EMAIL_1 naar CUSTOMER_2 op ADDRESS_3 met APIKEY_4. Laat CODE_1 ongewijzigd.";
    expect(parseSyntheticMarkers(text)).toEqual([
      { token: "EMAIL_1", type: "email" },
      { token: "CUSTOMER_2", type: "customer" },
      { token: "ADDRESS_3", type: "address" },
      { token: "APIKEY_4", type: "apiKey" },
    ]);
    expect(
      replaceSyntheticMarkers(
        text,
        new Map([
          ["EMAIL_1", "mila@example.com"],
          ["CUSTOMER_2", "847291503"],
          ["ADDRESS_3", "Lindelaan 42"],
          ["APIKEY_4", "demo_api_abcdefghijkl"],
        ]),
      ),
    ).toBe(
      "Mail mila@example.com naar 847291503 op Lindelaan 42 met demo_api_abcdefghijkl. Laat CODE_1 ongewijzigd.",
    );
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
      /@(example\.com|example\.net|example\.org|example\.invalid)$/,
    );
    expect(values.get("LINK_1")).toMatch(/^https:\/\/example\./);
  });

  it("keeps every deterministic generator result inside the runtime safety contract", () => {
    const types = [
      "person",
      "email",
      "phone",
      "iban",
      "bsn",
      "ip",
      "postcode",
      "address",
      "date",
      "customer",
      "transaction",
      "serial",
      "reference",
      "link",
      "apiKey",
      "accessToken",
      "jwt",
      "privateKey",
      "credentialUrl",
      "secret",
      "account",
      "path",
      "gitRemote",
      "cloudResource",
    ] as const;
    for (const locale of ["nl", "en"] as const) {
      const values = createSyntheticMap(
        types.map((type, index) => ({ type, value: `${type}-${index}` })),
        42,
        locale,
      );
      for (const value of values.values()) {
        expect(validateSyntheticValue(value, locale), value).toMatchObject({ ok: true });
      }
    }
  });

  it("rejects privacy violations and locale-specific refusals", () => {
    expect(validateSyntheticValue("contact@real-company.nl", "nl")).toMatchObject({ ok: false });
    expect(validateSyntheticValue("AKIAIOSFODNN7EXAMPLE", "nl")).toMatchObject({ ok: false });
    expect(validateSyntheticValue("OTHER_7", "nl")).toMatchObject({ ok: false });
    expect(validateSyntheticValue("NIET_BESCHIKBAAR", "nl")).toMatchObject({
      ok: false,
      refusal: true,
    });
    expect(validateSyntheticValue("UNAVAILABLE", "nl")).toMatchObject({
      ok: false,
      refusal: true,
    });
    expect(isValidAnyIban("GB82 WEST 1234 5698 7654 32")).toBe(true);
    expect(validateSyntheticValue("GB82 WEST 1234 5698 7654 32", "en")).toMatchObject({
      ok: false,
    });
  });
});
