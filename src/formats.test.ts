import { describe, expect, it } from "vitest";
import { specRegexFixture } from "./__fixtures__/specRegex";
import {
  DocumentSession,
  FormatSpaceExhaustedError,
  OtherValueIssuer,
  type FormatSpec,
  formatSpaceSize,
  renderFormatValue,
  specKey,
  toRegex,
  toRegexSource,
} from "./formats";
import { SeededRandom } from "./synthetic";

const fixture = specRegexFixture as {
  bron: string;
  aantal: number;
  gevallen: Array<{ id: string; split: string; spec: FormatSpec; regex: string }>;
};

describe("toRegex — gelijk aan forgemodel.py, zonder de Python-regel te hergebruiken", () => {
  it("levert voor elke spec uit de fixture exact hetzelfde patroon", () => {
    expect(fixture.gevallen.length).toBeGreaterThan(1000);
    const fouten = fixture.gevallen
      .filter((geval) => toRegexSource(geval.spec) !== geval.regex)
      .map((geval) => ({
        id: geval.id,
        python: geval.regex,
        typescript: toRegexSource(geval.spec),
      }));
    expect(fouten).toEqual([]);
  });

  it("dekt de blind-set volledig", () => {
    const blind = fixture.gevallen.filter((geval) => geval.split === "blind");
    expect(blind.length).toBe(160);
    for (const { spec, id } of blind) {
      const waarde = new OtherValueIssuer({ sessionSeed: 1 }).issue(spec, `blind-${id}`);
      expect(toRegex(spec).test(waarde), `${id} → ${waarde}`).toBe(true);
    }
  });
});

describe("generator — vorm klopt altijd", () => {
  it("elke gegenereerde waarde past op zijn eigen regex", () => {
    const steekproef = fixture.gevallen.filter((geval) => geval.split === "blind").slice(0, 60);
    for (const { spec, id } of steekproef) {
      const issuer = new OtherValueIssuer({ sessionSeed: 20261024 });
      for (let i = 0; i < 25; i += 1) {
        const waarde = issuer.issue(spec, `${id}-origineel-${i}`);
        expect(toRegex(spec).test(waarde), `${id} → ${waarde}`).toBe(true);
      }
    }
  });

  it("geen I of O in letters (verwarbaar met 1 en 0)", () => {
    const metLetters = fixture.gevallen.find((geval) =>
      geval.spec.blocks.some(([soort]) => soort === "letters"),
    );
    expect(metLetters).toBeDefined();
    const spec = metLetters!.spec;
    const issuer = new OtherValueIssuer({ sessionSeed: 7 });
    for (let i = 0; i < 30; i += 1) {
      const waarde = issuer.issue(spec, `origineel-${i}`);
      const zonderPrefixJaar = waarde.slice((spec.prefix + spec.sep).length);
      expect(zonderPrefixJaar).not.toMatch(/[IO]/);
    }
  });
});

describe("uniekheid en stabiliteit", () => {
  const spec = fixture.gevallen[0]!.spec;

  it("één issuer geeft bij een tweede vraag om hetzelfde origineel dezelfde waarde", () => {
    const issuer = new OtherValueIssuer({ sessionSeed: 123, documentText: "" });
    const eerste = issuer.issue(spec, "origineel-A");
    const tweede = issuer.issue(spec, "origineel-A");
    expect(tweede).toBe(eerste);
    // De tweede vraag voegt niets toe: één origineel is één uitgegeven waarde.
    expect(issuer.issued.size).toBe(1);
    expect(issuer.valueFor(spec, "origineel-A")).toBe(eerste);
  });

  it("twee issuers met dezelfde sessie-seed geven hetzelfde resultaat", () => {
    const a = new OtherValueIssuer({ sessionSeed: 123, documentText: "" });
    const b = new OtherValueIssuer({ sessionSeed: 123, documentText: "" });
    expect(b.issue(spec, "origineel-A")).toBe(a.issue(spec, "origineel-A"));
  });

  it("een andere sessie-seed geeft een andere waarde", () => {
    const a = new OtherValueIssuer({ sessionSeed: 123 });
    const b = new OtherValueIssuer({ sessionSeed: 124 });
    expect(b.issue(spec, "origineel-A")).not.toBe(a.issue(spec, "origineel-A"));
  });

  it("duizenden waarden in één sessie zijn allemaal uniek", () => {
    const issuer = new OtherValueIssuer({ sessionSeed: 99 });
    const gezien = new Set<string>();
    for (let i = 0; i < 3000; i += 1) {
      const waarde = issuer.issue(spec, `origineel-${i}`);
      expect(gezien.has(waarde), `dubbel: ${waarde}`).toBe(false);
      gezien.add(waarde);
    }
    expect(gezien.size).toBe(3000);
    expect(issuer.issued.size).toBe(3000);
  });

  it("een waarde die al in het document staat wordt nooit gekozen", () => {
    const eerste = new OtherValueIssuer({ sessionSeed: 5 }).issue(spec, "origineel-B");
    const issuer = new OtherValueIssuer({
      sessionSeed: 5,
      documentText: `De klant noemde ${eerste} in de mail.`,
    });
    const waarde = issuer.issue(spec, "origineel-B");
    expect(waarde).not.toBe(eerste);
    expect(`De klant noemde ${eerste} in de mail.`.toUpperCase().includes(waarde)).toBe(false);
  });

  it("de documentcontrole is hoofdletterongevoelig", () => {
    const eerste = new OtherValueIssuer({ sessionSeed: 6 }).issue(spec, "origineel-C");
    const issuer = new OtherValueIssuer({ sessionSeed: 6, documentText: eerste.toLowerCase() });
    expect(issuer.issue(spec, "origineel-C")).not.toBe(eerste);
  });
});

describe("modelroute — keuring per markertoken", () => {
  const spec = fixture.gevallen[0]!.spec;

  it("dezelfde waarde voor een ánder token is dubbel", () => {
    const issuer = new OtherValueIssuer({ sessionSeed: 3 });
    const waarde = renderFormatValue(spec, new SeededRandom(4242));
    expect(issuer.acceptModelValue(waarde, { token: "OTHER_1", spec })).toEqual({
      ok: true,
      value: waarde,
    });
    expect(issuer.acceptModelValue(waarde, { token: "OTHER_2", spec })).toEqual({
      ok: false,
      reason: "dubbel",
    });
  });

  it("een modelwaarde die al in het (gemarkeerde) document staat wordt geweigerd", () => {
    const waarde = renderFormatValue(spec, new SeededRandom(99));
    const issuer = new OtherValueIssuer({
      sessionSeed: 2,
      documentText: `eerder genoemde waarde: ${waarde}`,
    });
    expect(issuer.acceptModelValue(waarde, { token: "OTHER_1", spec })).toEqual({
      ok: false,
      reason: "in-document",
    });
  });

  it("lege en verkeerd gevormde modelwaarden worden geweigerd", () => {
    const issuer = new OtherValueIssuer({ sessionSeed: 1 });
    expect(issuer.acceptModelValue("   ", { token: "OTHER_1", spec })).toEqual({
      ok: false,
      reason: "leeg",
    });
    expect(issuer.acceptModelValue("PRJ-1", { token: "OTHER_1", spec })).toEqual({
      ok: false,
      reason: "formaat",
    });
  });

  it("opnieuw genereren geeft de oude waarde vrij en neemt de nieuwe over", () => {
    const issuer = new OtherValueIssuer({ sessionSeed: 4 });
    const eerste = renderFormatValue(spec, new SeededRandom(11));
    const tweede = renderFormatValue(spec, new SeededRandom(12));
    expect(issuer.acceptModelValue(eerste, { token: "OTHER_1", spec }).ok).toBe(true);
    expect(issuer.acceptModelValue(tweede, { token: "OTHER_1", spec })).toEqual({
      ok: true,
      value: tweede,
    });
    expect(issuer.issued.has(eerste)).toBe(false);
    expect(issuer.issued.has(tweede)).toBe(true);
    expect(issuer.issued.size).toBe(1);
    expect(issuer.modelValueFor("OTHER_1")).toBe(tweede);
    // De vrijgekomen waarde mag nu door een ander token gebruikt worden.
    expect(issuer.acceptModelValue(eerste, { token: "OTHER_2", spec })).toEqual({
      ok: true,
      value: eerste,
    });
  });

  it("hetzelfde token nog eens met dezelfde waarde is geen fout", () => {
    const issuer = new OtherValueIssuer({ sessionSeed: 5 });
    const waarde = renderFormatValue(spec, new SeededRandom(21));
    issuer.acceptModelValue(waarde, { token: "OTHER_1", spec });
    expect(issuer.acceptModelValue(waarde, { token: "OTHER_1", spec })).toEqual({
      ok: true,
      value: waarde,
    });
    expect(issuer.issued.size).toBe(1);
  });
});

describe("documentwissel — geen geërfde waarden", () => {
  const spec = fixture.gevallen[0]!.spec;

  it("een nieuw document begint met een verse uitgever", () => {
    const sessie = new DocumentSession(777, "document A: OTHER_1 en OTHER_2");
    const waarde = renderFormatValue(spec, new SeededRandom(31));
    expect(sessie.issuer.acceptModelValue(waarde, { token: "OTHER_1", spec }).ok).toBe(true);
    expect(sessie.issuer.issued.size).toBe(1);

    const vers = sessie.beginDocument("document B: OTHER_1");
    expect(vers.issued.size).toBe(0);
    expect(vers.modelValueFor("OTHER_1")).toBeUndefined();
    // Dezelfde waarde mag in het nieuwe document opnieuw: niets geërfd.
    expect(vers.acceptModelValue(waarde, { token: "OTHER_1", spec })).toEqual({
      ok: true,
      value: waarde,
    });
  });

  it("de sessie-seed blijft gelijk over documenten heen", () => {
    const sessie = new DocumentSession(4242);
    sessie.beginDocument("iets anders");
    expect(sessie.seed).toBe(4242);
  });
});

describe("weigeringsspecs en uitgeputte formaatruimte", () => {
  const structured = fixture.gevallen[0]!.spec;
  const weigering: FormatSpec = {
    family: "generic",
    prefix: "",
    blocks: [],
    sep: "",
    year: null,
    locale: "nl",
    kind: "refusal",
  };
  const klein: FormatSpec = {
    family: "project",
    prefix: "P",
    blocks: [["digits", 1]],
    sep: "",
    year: null,
    locale: "nl",
    kind: "structured",
  };

  it("weigert een spec van kind refusal", () => {
    const issuer = new OtherValueIssuer({ sessionSeed: 1 });
    expect(() => issuer.issue(weigering, "origineel-X")).toThrow(/weigeringsspec/);
  });

  it("kent de grootte van de formaatruimte", () => {
    expect(formatSpaceSize(klein)).toBe(10);
    expect(formatSpaceSize(structured)).toBeGreaterThan(10_000);
  });

  it("een volle formaatruimte geeft een nette melding in plaats van een onafgevangen fout", () => {
    const issuer = new OtherValueIssuer({ sessionSeed: 42 });
    const uitgegeven = new Set<string>();
    // Alle tien originelen moeten een waarde krijgen; de ruimte is precies tien groot, dus er mag er
    // geen enkele blijven liggen (dit was de fout: de negende meldde al "uitgeput").
    for (let i = 0; i < 10; i += 1) uitgegeven.add(issuer.issue(klein, `origineel-${i}`));
    expect(uitgegeven.size).toBe(10);
    expect(issuer.issued.size).toBe(10);
    expect([...uitgegeven].sort()).toEqual([
      "P0",
      "P1",
      "P2",
      "P3",
      "P4",
      "P5",
      "P6",
      "P7",
      "P8",
      "P9",
    ]);

    let fout: unknown;
    try {
      issuer.issue(klein, "origineel-11");
    } catch (error) {
      fout = error;
    }
    expect(fout).toBeInstanceOf(FormatSpaceExhaustedError);
    const nette = fout as FormatSpaceExhaustedError;
    expect(nette.userMessage).toContain("10 mogelijkheden");
    expect(nette.userMessage).toContain("Kies een ander formaat");
    expect(nette.name).toBe("FormatSpaceExhaustedError");
    // De mislukte poging heeft niets achtergelaten.
    expect(issuer.issued.size).toBe(10);
  });

  it("een kleine ruimte met twee cijfers raakt pas uitgeput als alle honderd vergeven zijn", () => {
    const honderd: FormatSpec = { ...klein, blocks: [["digits", 2]] };
    const issuer = new OtherValueIssuer({ sessionSeed: 8 });
    const gezien = new Set<string>();
    for (let i = 0; i < 100; i += 1) seen(gezien, issuer.issue(honderd, `o-${i}`));
    expect(gezien.size).toBe(100);
    expect(() => issuer.issue(honderd, "o-100")).toThrow(FormatSpaceExhaustedError);
  });

  it("setDocumentText werkt zonder de toewijzingen te verliezen", () => {
    const issuer = new OtherValueIssuer({ sessionSeed: 3 });
    const eerste = issuer.issue(structured, "origineel-T");
    issuer.setDocumentText("een nieuw document");
    expect(issuer.issue(structured, "origineel-T")).toBe(eerste);
  });
});

function seen(verzameling: Set<string>, waarde: string): void {
  expect(verzameling.has(waarde)).toBe(false);
  verzameling.add(waarde);
}

describe("specKey — stabiel tussen app en lab", () => {
  it("verandert niet bij een gelijke spec", () => {
    const spec = fixture.gevallen[0]!.spec;
    expect(specKey(spec)).toBe(
      specKey({ ...spec, blocks: spec.blocks.map(([k, n]) => [k, n] as const) }),
    );
  });
});
