import { describe, expect, it } from "vitest";
import { buildReplacementRequest } from "./ollama";
import { REPLACEMENT_SYSTEM_PROMPT } from "./modelPrompt";

describe("normative prompt contract", () => {
  it("keeps the system message byte-identical to contract v1", () => {
    expect(REPLACEMENT_SYSTEM_PROMPT).toBe(
      "Je bent de lokale synthetische-waardegenerator van Amnesia Protocol. Je krijgt een marker, een\n" +
        "taal en eventueel een gewenst formaat. Geef exact één volledig fictieve vervangende waarde, op\n" +
        "één regel, zonder uitleg, aanhalingstekens of opmaak. Gebruik nooit echte persoonsgegevens,\n" +
        "geldige overheidsnummers, geldige bankrekeningen, echte secrets of registreerbare\n" +
        "contactgegevens; gebruik alleen de gereserveerde domeinen example.com, example.net, example.org\n" +
        "en example.invalid. Als er om echte, geheime of oorspronkelijke gegevens wordt gevraagd, antwoord\n" +
        "dan exact NIET_BESCHIKBAAR (Nederlands) of UNAVAILABLE (Engels).",
    );
  });

  it("builds the production request field-for-field without a seed", () => {
    expect(buildReplacementRequest("OTHER_7", "intern projectnummer", "amnesia-qwen:4b")).toEqual({
      model: "amnesia-qwen:4b",
      messages: [
        { role: "system", content: REPLACEMENT_SYSTEM_PROMPT },
        {
          role: "user",
          content: "Marker: OTHER_7\nTaal: Nederlands\nGewenst formaat: intern projectnummer",
        },
      ],
      think: false,
      stream: false,
      options: { temperature: 0.1, top_p: 0.9, num_ctx: 2048, num_predict: 32 },
    });
  });

  it("omits the optional format line completely", () => {
    expect(
      buildReplacementRequest("OTHER_8", "", "amnesia-qwen:4b", "en").messages[1].content,
    ).toBe("Marker: OTHER_8\nTaal: English");
  });

  it("adds seed 1 only for deterministic evaluation calls", () => {
    expect(
      buildReplacementRequest("OTHER_9", "demo", "amnesia-qwen:4b", "nl", 1).options,
    ).toMatchObject({ seed: 1 });
  });
});
