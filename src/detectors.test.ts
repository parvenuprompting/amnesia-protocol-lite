import { describe, expect, it } from "vitest";
import { detect, isValidBsn, isValidIban, resolveOverlaps } from "./detectors";
import { mergeDetections } from "./review";

describe("checksums", () => {
  it("validates Dutch IBANs", () => {
    expect(isValidIban("NL91 ABNA 0417 1643 00")).toBe(true);
    expect(isValidIban("NL91 ABNA 0417 1643 01")).toBe(false);
  });
  it("validates BSNs with the eleven-test", () => {
    expect(isValidBsn("111222333")).toBe(true);
    expect(isValidBsn("123456782")).toBe(true);
    expect(isValidBsn("111222334")).toBe(false);
    expect(isValidBsn("111111111")).toBe(false);
  });
});

describe("detectors", () => {
  it("finds all MVP types and keeps invalid identifier candidates", () => {
    const result = detect(
      "Mail a@b.nl, 06-12345678, NL91 ABNA 0417 1643 00, BSN 111222333, 192.168.0.1, 1234 AB, 01-02-2025, dossiernummer 123456.",
    );
    expect(result.map((item) => item.type)).toEqual([
      "email",
      "phone",
      "iban",
      "bsn",
      "ip",
      "postcode",
      "date",
      "reference",
    ]);
    expect(result.every((item) => item.decision === "pending")).toBe(true);
  });
  it("uses JavaScript UTF-16 offsets consistently around emoji", () => {
    const text = "🙂 klantnummer 123456";
    const item = detect(text)[0];
    expect(text.slice(item.start, item.end)).toBe(item.value);
  });
  it("resolves overlapping candidates to one decision", () => {
    const result = resolveOverlaps([
      { start: 0, end: 10, value: "broad", type: "reference", confidence: 0.5, detector: "regex" },
      { start: 2, end: 6, value: "specific", type: "bsn", confidence: 0.9, detector: "regex" },
    ]);
    expect(result).toHaveLength(1);
    expect(result[0].value).toBe("specific");
  });
  it("preserves decisions and manual marks after text edits", () => {
    const previous = detect("Mail a@example.com");
    previous[0].decision = "accepted";
    const manual = {
      id: "manual-1",
      start: 0,
      end: 4,
      value: "Mail",
      type: "person" as const,
      confidence: 1,
      detector: "manual" as const,
      decision: "rejected" as const,
    };
    const merged = mergeDetections(
      previous.concat(manual),
      detect("Mail a@example.com aangepast"),
      "Mail a@example.com aangepast",
    );
    expect(merged.find((item) => item.type === "email")?.decision).toBe("accepted");
    expect(merged.find((item) => item.detector === "manual")?.decision).toBe("rejected");
  });
  it("classifies contextual identifiers before generic BSN detection", () => {
    const result = detect("klantnummer 123456782, transactie TX-2025-04, serienummer SN8844");
    expect(result.map((item) => [item.type, item.value])).toEqual([
      ["customer", "123456782"],
      ["transaction", "TX-2025-04"],
      ["serial", "SN8844"],
    ]);
  });
  it("detects all sensitive entities in Dutch customer service document", () => {
    const doc = [
      "afzender Voorbeeld B.V.",
      "afdeling Klantenservice",
      "adres Dorpsstraat 42",
      "1012 AB Amsterdam",
      "telefoon 020 123 4567",
      "internet voorbeeld.nl",
      "IBAN NL91 ABNA 0417 1643 00",
      "BTW nr NL123456789B01",
      "KvK nr 12.345.678",
      "Lid-/Relatienummer 111222333",
      "Factuurnummer 1002003001",
      "Factuurdatum 15 maart 2026",
      "Producten & diensten Periode Bedrag (EUR) Totaal (EUR)",
      "Ondersteuning Standaard",
      "J.A. Jansen 111222333",
      "01-04-26 t/m 31-03-27 122,25",
      "Extra Diensten Pakket",
      "J.A. Jansen 111222333",
      "01-04-26 t/m 31-03-27 85,25",
    ].join("\n");

    const result = detect(doc);
    const detections = result.map((item) => [item.type, item.value]);

    expect(detections).toEqual([
      ["postcode", "Dorpsstraat 42"],
      ["postcode", "1012 AB Amsterdam"],
      ["phone", "020 123 4567"],
      ["email", "voorbeeld.nl"],
      ["iban", "NL91 ABNA 0417 1643 00"],
      ["reference", "NL123456789B01"],
      ["reference", "12.345.678"],
      ["customer", "111222333"],
      ["transaction", "1002003001"],
      ["date", "15 maart 2026"],
      ["person", "J.A. Jansen"],
      ["bsn", "111222333"],
      ["date", "01-04-26"],
      ["date", "31-03-27"],
      ["person", "J.A. Jansen"],
      ["bsn", "111222333"],
      ["date", "01-04-26"],
      ["date", "31-03-27"],
    ]);
  });
});
