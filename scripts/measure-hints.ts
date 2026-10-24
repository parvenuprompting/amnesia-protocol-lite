/**
 * Meet de detectielaag op een bestand met hintteksten — hetzelfde idee als `--hints` in de meetlat
 * van het lab (`amnesia-qwen-lab/eval/coverage.py`), maar dan met de detector die echt in de app zit.
 *
 * Gebruik:
 *   npx vite-node scripts/measure-hints.ts <hints.txt> [--verbose]
 *
 * Eén hint per regel; regels die met # beginnen zijn commentaar. Uitvoer is JSON met per hint de
 * uitkomst, plus een samenvatting met de redenen waarom iets niet resolveert. Dat laatste is het
 * nuttigste deel: het zegt of de hint te vaag is, of dat het formaat niet in het register staat.
 */
import { readFileSync } from "node:fs";
import { detectFormat } from "../src/formatDetect";

const [path, ...flags] = process.argv.slice(2);
if (!path) {
  console.error("gebruik: npx vite-node scripts/measure-hints.ts <hints.txt> [--verbose]");
  process.exit(2);
}
const verbose = flags.includes("--verbose");

const hints = readFileSync(path, "utf8")
  .split("\n")
  .map((line: string) => line.trim())
  .filter((line: string) => line.length > 0 && !line.startsWith("#"));

type Uitkomst = {
  hint: string;
  status: string;
  detail: string;
};

const uitkomsten: Uitkomst[] = hints.map((hint: string) => {
  const result = detectFormat(hint);
  if (result.status === "known") return { hint, status: "known", detail: result.formatId };
  // Een voorstel is de nieuwe tussenstand: de vorm is gelezen, het register kent hem niet.
  if (result.status === "proposed") {
    return { hint, status: "proposed", detail: `${result.formatId}  bv. ${result.example}` };
  }
  if (result.status === "ambiguous") {
    return { hint, status: "ambiguous", detail: result.formatIds.join(" | ") };
  }
  return { hint, status: "unknown", detail: result.reason };
});

const redenen: Record<string, number> = {};
for (const rij of uitkomsten) {
  if (rij.status !== "unknown") continue;
  redenen[rij.detail] = (redenen[rij.detail] ?? 0) + 1;
}
const bekend = uitkomsten.filter((rij) => rij.status === "known").length;
const voorgesteld = uitkomsten.filter((rij) => rij.status === "proposed").length;
const meerduidig = uitkomsten.filter((rij) => rij.status === "ambiguous").length;
const bruikbaar = bekend + voorgesteld + meerduidig;

console.log(
  JSON.stringify(
    {
      set: path,
      hints: hints.length,
      bekend,
      voorgesteld,
      meerduidig,
      bruikbaar_pct: Math.round((bruikbaar / hints.length) * 1000) / 10,
      onbekend: redenen,
      ...(verbose ? { rijen: uitkomsten } : {}),
    },
    null,
    2,
  ),
);
