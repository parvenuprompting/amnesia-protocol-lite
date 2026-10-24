# Detectielaag: van hinttekst naar een formaat, met één voorbeeld ter bevestiging

**Status:** gebouwd, getest en aangesloten in de werkkopie (24 okt 2026). **Niets gecommit, niets
gepusht.** Herzien na review door Claude: de eerste versie zocht de hint op in het register en wees
alles af wat daar niet in stond — daardoor kwam 87 % van de plausibele invoer bij het model uit.
Sinds de herziening leest de detector de vorm uit de zin en is het register alleen nog bevestiging.

## Waarom

`formatHint` is vrije tekst en gaat ongefilterd naar het model (`ollama.ts:96`, `App.tsx:156`).
Daarmee is het de injectie-oppervlakte (alle vijf gemiste weigeringen kwamen erdoor binnen) en is het
achteraf niet te controleren: de app ziet de tekst van de hint, niet de specificatie. Zie §1 van
`format-id-ontwerp.md`.

## Wat er staat

| bestand                        | wat                                                                                   |
| ------------------------------ | ------------------------------------------------------------------------------------- |
| `src/formatDetect.ts`          | `parseHint()`, `detectFormat()`, `previewValue()`, `toHint()`, `listFormats()`        |
| `src/formatRegister.ts`        | **gegenereerd**: 658 formats, 338 vormen, 10 families                                 |
| `src/formatDetect.test.ts`     | 25 tests: regels, vrije prefixen, voorstellen, poort over 2.897 corpusrijen           |
| `src/__fixtures__/hintGate.ts` | **gegenereerd**: 2.077 hintteksten met hun 2.897 corpusrijen                          |
| `scripts/measure-hints.ts`     | meting op een hints-bestand met de detector die in de app zit                         |
| `App.tsx`                      | aangesloten: `known`/`proposed` genereren zonder model, `ambiguous`/`unknown` → model |

### API

```ts
type FormatDetection =
  | { status: "known"; formatId; spec; exactYear; example; parsed }      // register bevestigt
  | { status: "proposed"; formatId; spec; example; parsed }              // vorm gelezen, onbekend
  | { status: "ambiguous"; formatIds; reason; parsed }                   // jaartal ontbreekt
  | { status: "unknown"; reason; parsed? };                              // te vaag → model

detectFormat(hint): FormatDetection
parseHint(hint): HintParse | { reason }   // alleen de leesstap
previewValue(spec): string                // één voorbeeldwaarde, deterministisch uit de spec
toHint(spec, locale): string              // leesbare hint bij een spec
listFormats(): readonly FormatSpec[]      // het register, als hulp
```

`formatId` blijft `specKey(spec)` — dezelfde sleutel die `formats.ts` al gebruikt en die met 1.133
gevallen aan `forgemodel.py` is gelijkgetrokken. Voor een zelf samengestelde vorm is de familie
`custom`; die is alleen voor de UI-tekst, niet voor de waarde.

### De regel: nooit gokken, wel voorstellen

| uitkomst    | wanneer                                                                          | route                                                   |
| ----------- | -------------------------------------------------------------------------------- | ------------------------------------------------------- |
| `known`     | de vorm staat in het register                                                    | generator, model niet gebruikt                          |
| `proposed`  | de vorm is volledig te lezen (prefix + blokken + scheidingsteken), maar onbekend | één voorbeeld tonen, gebruiker bevestigt, dan generator |
| `ambiguous` | "met een jaartal" zonder jaar, of meerdere vormen                                | jaar/vorm kiezen                                        |
| `unknown`   | geen prefix én geen familienaam, of geen bloklengte                              | modelroute (vangnet)                                    |

Het voorbeeld is precies waar de bevestiging over gaat: `REF.83802236` laat zien wat er komt. Wijkt
dat af van wat de gebruiker bedoelde, dan zegt hij nee en blijft de modelroute over. `previewValue()`
is deterministisch per spec en put de sessie-uitgever niet uit: een vraag is geen uitgifte.

## Bewijs

```
npx vitest run     → 12 bestanden, 118 tests groen
npx tsc -b         → schoon
npx eslint src e2e scripts → geen meldingen
npx prettier --check src e2e scripts → schoon (behalve de bestaande fixture specRegex.ts)

E2E_PORT=4319 npx playwright test → 10/10 groen
```

De poort over de corpus (letterlijk uit de testuitvoer):

```
{"rijen":2897,"bekend":2631,"voorgesteld":0,"meerduidig":247,
 "bruikbaar_pct":99.3,"onbekend":{"geen prefix en geen familienaam":19}}
```

**0 verkeerde vormen**: elke `known` staat in de grondwaarheid, elk voorstel heeft dezelfde vorm als
de bedoelde spec, en elke `ambiguous` bevat hem.

De nieuwe E2E-test (`maakt een Overig-waarde uit de hint, zonder model`) bewijst de route in de echte
UI: een hint met een prefix die het register niet kent (`REF`) levert één voorbeeld ter bevestiging
en daarna `REF.########` in de tekst — zonder dat er een model aan te pas komt. Een bekende vorm
(`PROJ-` + vier cijfers) gaat direct, zonder vraag.

## Dekking op echte hintstijl (AI-0025)

Codex leverde 30 hintteksten. **Let op de herkomst:** 4 zijn bestaande appvoorbeelden, 4 komen uit
`formatDetect.test.ts` — een bestand dat op dezelfde dag is geschreven — en 22 zijn door Codex zelf
geschreven. **Er zijn dus geen echte gebruikershints en er is geen productietelemetrie.** Deze set
meet hoe de detector met plausibele invoer omgaat, niet hoe vaak iets in het echt voorkomt.

```
npx vite-node scripts/measure-hints.ts …/eval/hints-codex-2026-10-24.txt
{"hints":30,"bekend":4,"voorgesteld":16,"meerduidig":2,"bruikbaar_pct":73.3,
 "onbekend":{"geen bloklengte":2,"geen prefix en geen familienaam":6}}
```

Voor de herziening was dit 13,3 % (4 van 30): toen werd alles wat niet in het register stond
afgewezen. De acht die nu nog naar het model gaan, zijn:

| hint                                                  | waarom                                                  |
| ----------------------------------------------------- | ------------------------------------------------------- |
| "intern projectnummer met prefix PROJ-"               | geen bloklengte                                         |
| "intern projectnummer"                                | geen bloklengte                                         |
| "fictional project name"                              | geen code maar een naam (text-familie)                  |
| "korte code met letters en nummers"                   | geen aantal                                             |
| "intern nummer, zelfde opbouw als de bestaande code"  | geen vorm                                               |
| "maak er een korte herkenbare code van"               | geen vorm                                               |
| "korte interne code met drie letters en vijf cijfers" | vorm compleet, maar **geen prefix en geen familienaam** |
| "een code van acht cijfers"                           | idem                                                    |

De laatste twee zijn een bewuste grens: zonder prefix of familienaam is er geen enkele aanwijzing
_wat_ er vervangen wordt, en op de corpus blijkt dat zo'n voorstel vaak de verkeerde vorm kiest
(19 corpusrijen hebben daar een tweedelige waarheid). Liever het model dan een stille gok. Wie die
twee ook deterministisch wil, moet in de UI een prefix laten kiezen — dat is precies het punt waar
Codex' advies en deze meting samenkomen.

## Opnieuw genereren

```
cd ~/Projects/amnesia-qwen-lab
python3 eval/dump_format_register.py --app ~/Documents/Codex/2026-10-23/clo/work/amnesia-protocol-lite
```

Het script schrijft `src/formatRegister.ts` en `src/__fixtures__/hintGate.ts`, zet de corpus-sha256's
in de kop en draait daarna Prettier.

## Wat nog niet gedaan is

1. **De keuzelijst in de UI.** `listFormats()` en `toHint()` staan klaar; de bediening (en het kiezen
   van een jaar bij `ambiguous`) is UI-werk. Nu toont de app alleen het voorstel bij `proposed`.
2. **Echte dekkingscijfers.** Die bestaan niet; 73,3 % op 30 plausibele regels is het eerlijke getal.
3. **De 8 vage hints** — twee daarvan vragen om een prefixkeuze in de UI, de rest hoort bij het model.
