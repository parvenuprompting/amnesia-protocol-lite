import { describe, expect, it } from "vitest";
import { specKey, toRegex, type FormatSpec } from "./formats";
import {
  CUSTOM_FAMILY,
  detectFormat,
  formatCount,
  listFormats,
  parseHint,
  previewValue,
  shapeCount,
  toHint,
} from "./formatDetect";
import { HINT_GATE } from "./__fixtures__/hintGate";

function spec(partial: Partial<FormatSpec> & Pick<FormatSpec, "family" | "blocks">): FormatSpec {
  return { prefix: "", sep: "", year: null, locale: "nl", kind: "structured", ...partial };
}

function verwacht(partial: Partial<FormatSpec> & Pick<FormatSpec, "family" | "blocks">): string {
  return specKey(spec(partial));
}

/** De vorm zonder familienaam: dat is wat een samengesteld voorstel moet kloppen. */
function vorm(key: string): string {
  return key.split("|").slice(1).join("|");
}

describe("detectFormat — bekende vormen", () => {
  const cases: readonly [string, string][] = [
    [
      "intern projectnummer met prefix PRJ., daarna het jaartal 2027 en zes tekens met letters en cijfers (delen gescheiden door punten)",
      verwacht({ family: "project", prefix: "PRJ", blocks: [["alnum", 6]], sep: ".", year: 2027 }),
    ],
    [
      "een dossiercode dat begint met CASE- en dan twee letters en vijf cijfers (delen gescheiden door koppeltekens)",
      verwacht({
        family: "case",
        prefix: "CASE",
        blocks: [
          ["letters", 2],
          ["digits", 5],
        ],
        sep: "-",
      }),
    ],
    [
      "ticketnummer zoals INC-2026- en dan vijf cijfers",
      verwacht({ family: "ticket", prefix: "INC", blocks: [["digits", 5]], sep: "-", year: 2026 }),
    ],
    [
      "batchnummer met BATCH-, jaartal en vier cijfers",
      specKey(
        spec({
          family: "batch",
          prefix: "BATCH",
          blocks: [["digits", 4]],
          sep: "-",
          year: 2026,
          year_required: false,
        }),
      ),
    ],
    [
      "korte code: PRJ/ plus zes cijfers (delen gescheiden door schuine strepen), jaartal 2026",
      verwacht({ family: "project", prefix: "PRJ", blocks: [["digits", 6]], sep: "/", year: 2026 }),
    ],
    [
      "iets als ZD-4821, vier cijfers",
      verwacht({ family: "case", prefix: "ZD", blocks: [["digits", 4]], sep: "-" }),
    ],
  ];

  for (const [hint, expected] of cases) {
    it(`herkent: ${hint.slice(0, 62)}…`, () => {
      const result = detectFormat(hint);
      expect(result.status === "known" ? result.formatId : result.status).toBe(expected);
    });
  }
});

describe("detectFormat — vrije prefixen worden voorgesteld, niet afgewezen", () => {
  const voorstellen: readonly [string, string, string, string][] = [
    // hint, prefix, sep, blokken (als sleutel)
    ["referentie met REF gevolgd door een punt en acht cijfers", "REF", ".", "digits8"],
    [
      "dossiernummer, prefix DOS-, jaartal 2026 en vier cijfers, alles met streepjes",
      "DOS",
      "-",
      "digits4",
    ],
    ["zaakcode met ZK. gevolgd door twee letters en vier cijfers", "ZK", ".", "letters2,digits4"],
    ["ticket met TKT- plus twee letters en vier cijfers", "TKT", "-", "letters2,digits4"],
    ["vergunningnummer met VERG- en zeven cijfers", "VERG", "-", "digits7"],
    ["registratiecode: REG gevolgd door negen cijfers", "REG", "", "digits9"],
    ["licentienummer met LIC. en vier letters en vier cijfers", "LIC", ".", "letters4,digits4"],
    ["asset tag met AST- en zes cijfers", "AST", "-", "digits6"],
    [
      "shipment reference met SHIP/ en two letters plus six digits",
      "SHIP",
      "/",
      "letters2,digits6",
    ],
    ["documentcode met DOC. en daarna zes alfanumerieke tekens", "DOC", ".", "alnum6"],
    ["kenmerk met KM zonder spaties en zeven cijfers", "KM", "", "digits7"],
  ];

  for (const [hint, prefix, sep, blocks] of voorstellen) {
    it(`stelt voor: ${hint.slice(0, 56)}…`, () => {
      const result = detectFormat(hint);
      expect(result.status).toBe("proposed");
      if (result.status !== "proposed") return;
      expect(result.spec.prefix).toBe(prefix);
      expect(result.spec.sep).toBe(sep);
      expect(result.spec.blocks.map(([kind, length]) => `${kind}${length}`).join(",")).toBe(blocks);
      // Het voorbeeld moet de vorm hebben die de hint beschrijft: dat is wat de gebruiker ziet.
      expect(toRegex(result.spec).test(result.example)).toBe(true);
    });
  }

  it("leidt blokken af uit een voorbeeldwaarde in de hint", () => {
    const result = detectFormat("referentie zoals ABC-1234");
    expect(result.status).toBe("proposed");
    if (result.status === "proposed") {
      expect(result.spec.prefix).toBe("ABC");
      expect(result.spec.blocks).toEqual([["digits", 4]]);
    }
  });

  it("leest een ingebakken jaartal in de prefix (CASE/2026/)", () => {
    const result = detectFormat("case id met CASE/2026/ en vijf cijfers");
    expect(result.status).toBe("proposed");
    if (result.status === "proposed") {
      expect(result.spec.prefix).toBe("CASE");
      expect(result.spec.sep).toBe("/");
      expect(result.spec.year).toBe(2026);
    }
  });

  it("stelt ook voor bij een onbekend jaartal in plaats van te weigeren", () => {
    const result = detectFormat(
      "intern projectnummer met prefix PRJ- en het jaartal 2019 en vier cijfers",
    );
    expect(result.status).toBe("proposed");
    if (result.status === "proposed") expect(result.spec.year).toBe(2019);
  });

  it("geeft een voorstel zonder familienaam de familie 'custom' en een leesbare hint", () => {
    const result = detectFormat("referentie met REF gevolgd door een punt en acht cijfers");
    expect(result.status).toBe("proposed");
    if (result.status === "proposed") {
      expect(result.spec.family).toBe(CUSTOM_FAMILY);
      expect(toHint(result.spec, "nl")).toContain("nummer met prefix REF.");
      expect(toHint(result.spec, "en")).toContain("number with prefix REF.");
    }
  });

  it("het voorbeeld is deterministisch en heeft geen bijwerking", () => {
    const item = spec({ family: CUSTOM_FAMILY, prefix: "REF", blocks: [["digits", 8]], sep: "." });
    expect(previewValue(item)).toBe(previewValue(item));
    expect(toRegex(item).test(previewValue(item))).toBe(true);
  });
});

describe("detectFormat — vaag blijft bij het model", () => {
  const vaag: readonly [string, string][] = [
    ["een code van acht cijfers", "geen prefix en geen familienaam"],
    ["korte code met letters en nummers", "geen prefix en geen familienaam"],
    ["maak er een korte herkenbare code van", "geen prefix en geen familienaam"],
    ["intern projectnummer, zelfde opbouw als de bestaande code", "geen bloklengte"],
    ["intern projectnummer met prefix PROJ-", "geen bloklengte"],
    ["fictional project name", "geen prefix en geen familienaam"],
  ];

  for (const [hint, reason] of vaag) {
    it(`weigert: ${hint}`, () => {
      const result = detectFormat(hint);
      expect(result.status).toBe("unknown");
      expect(result.status === "unknown" && result.reason).toBe(reason);
    });
  }

  it("vraagt om een jaartal als de hint dat niet noemt maar het wel bedoelt", () => {
    const result = detectFormat(
      "korte code met jaartal: AST plus negen tekens met letters en cijfers (zonder scheidingsteken)",
    );
    expect(result.status).toBe("ambiguous");
  });

  it("een lege hint levert geen formaat op", () => {
    expect(detectFormat("   ").status).toBe("unknown");
  });

  it("leest getalwoorden en cijfers gelijk", () => {
    const metCijfers = parseHint("dossiercode met prefix ZD- en 6 cijfers");
    const metWoorden = parseHint("dossiercode met prefix ZD- en zes cijfers");
    expect("reason" in metCijfers).toBe(false);
    expect("reason" in metWoorden).toBe(false);
    expect("reason" in metCijfers ? null : metCijfers.blocks).toEqual(
      "reason" in metWoorden ? null : metWoorden.blocks,
    );
  });

  it("leest een scheidingsteken uit de woorden en uit de prefix", () => {
    const metWoorden = parseHint(
      "dossiercode met prefix ZD en zes cijfers (delen gescheiden door punten)",
    );
    const uitPrefix = parseHint("dossiercode met prefix ZD- en zes cijfers");
    expect("reason" in metWoorden ? null : metWoorden.sep).toBe(".");
    expect("reason" in uitPrefix ? null : uitPrefix.sep).toBe("-");
  });
});

describe("register en hinttekst", () => {
  it("het register heeft unieke formats en een reële omvang", () => {
    expect(formatCount).toBeGreaterThan(500);
    expect(shapeCount).toBeGreaterThan(300);
    const keys = new Set(listFormats().map((item) => specKey(item)));
    expect(keys.size).toBe(formatCount);
  });

  it("toHint() en detectFormat() vinden elkaar terug voor alle formats", () => {
    const fouten: string[] = [];
    let optioneelJaar = 0;
    for (const item of listFormats()) {
      for (const locale of ["nl", "en"] as const) {
        const hint = toHint(item, locale);
        const result = detectFormat(hint);
        const key = specKey(item);
        if ((result.status === "known" || result.status === "proposed") && result.formatId === key)
          continue;
        if (
          item.year_required === false &&
          result.status === "ambiguous" &&
          result.formatIds.includes(key)
        ) {
          optioneelJaar += 1;
          continue;
        }
        fouten.push(
          `${locale}: ${hint} → ${result.status === "known" || result.status === "proposed" ? result.formatId : result.status}`,
        );
      }
    }
    expect(fouten.slice(0, 5)).toEqual([]);
    expect(fouten.length).toBe(0);
    expect(optioneelJaar).toBeGreaterThan(0);
  });

  it("toHint() noemt prefix, blokken en scheidingsteken", () => {
    const item = spec({
      family: "project",
      prefix: "PRJ",
      blocks: [["alnum", 6]],
      sep: ".",
      year: 2027,
    });
    expect(toHint(item, "nl")).toBe(
      "intern projectnummer met prefix PRJ., daarna het jaartal 2027 en zes tekens met letters en cijfers (delen gescheiden door punten)",
    );
    expect(toHint(item, "en")).toContain("project code");
    expect(toHint(item, "en")).toContain("six characters mixing letters and digits");
  });

  it("toHint() vraagt bij een optioneel jaartal niet om één jaar", () => {
    const item = spec({
      family: "asset",
      prefix: "AST",
      blocks: [["digits", 4]],
      sep: "-",
      year: 2025,
      year_required: false,
    });
    expect(toHint(item, "nl")).toContain("met een jaartal");
    expect(toHint(item, "nl")).not.toContain("2025");
    expect(toHint(item, "en")).toContain("with a year");
  });
});

describe("poort: geen enkele corpusrij mag een verkeerde vorm opleveren", () => {
  it(`alle ${HINT_GATE.reduce((som, rij) => som + rij.n, 0)} corpusrijen`, () => {
    let rijen = 0;
    let bekend = 0;
    let voorgesteld = 0;
    let meerduidig = 0;
    const onbekend: Record<string, number> = {};
    const fouten: { hint: string; kreeg: string; verwacht: readonly string[] }[] = [];

    for (const { hint, keys, n } of HINT_GATE) {
      rijen += n;
      const result = detectFormat(hint);
      if (result.status === "known") {
        bekend += n;
        if (!keys.includes(result.formatId))
          fouten.push({ hint, kreeg: result.formatId, verwacht: keys });
        continue;
      }
      if (result.status === "proposed") {
        voorgesteld += n;
        // Een voorstel moet dezelfde vorm hebben (prefix, blokken, scheidingsteken, jaartal) en,
        // als de hint een familie noemt, ook dezelfde familie.
        const kandidaten = keys.filter((key) => vorm(key) === vorm(result.formatId));
        const familie = result.spec.family;
        const familieKlopt =
          familie === CUSTOM_FAMILY || kandidaten.some((key) => key.split("|")[0] === familie);
        if (!kandidaten.length || !familieKlopt) {
          fouten.push({ hint, kreeg: result.formatId, verwacht: keys });
        }
        continue;
      }
      if (result.status === "ambiguous") {
        meerduidig += n;
        if (!result.formatIds.some((id) => keys.some((key) => vorm(key) === vorm(id)))) {
          fouten.push({ hint, kreeg: result.formatIds.join(" of "), verwacht: keys });
        }
        continue;
      }
      onbekend[result.reason] = (onbekend[result.reason] ?? 0) + n;
    }

    expect(fouten.slice(0, 5)).toEqual([]);
    expect(fouten.length).toBe(0);
    const bruikbaar = (bekend + voorgesteld + meerduidig) / rijen;
    expect(bruikbaar).toBeGreaterThan(0.95);

    console.log(
      JSON.stringify({
        rijen,
        bekend,
        voorgesteld,
        meerduidig,
        bruikbaar_pct: Math.round(bruikbaar * 1000) / 10,
        onbekend,
      }),
    );
  });
});
