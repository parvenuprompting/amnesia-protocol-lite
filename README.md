# Amnesia Protocol Lite

[![GitHub last commit](https://img.shields.io/github/last-commit/parvenuprompting/amnesia-protocol-lite?style=flat-square)](https://github.com/parvenuprompting/amnesia-protocol-lite/commits/main)
[![Repository size](https://img.shields.io/github/repo-size/parvenuprompting/amnesia-protocol-lite?style=flat-square)](https://github.com/parvenuprompting/amnesia-protocol-lite)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=20232A)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![Tauri](https://img.shields.io/badge/Tauri-2-FFC131?style=flat-square&logo=tauri&logoColor=111111)](https://tauri.app/)

Amnesia Protocol is een lokale, offline-first privacyfilter voor tekst. De app detecteert gevoelige klant- en transactiedata, laat elk resultaat door een mens beoordelen en vervangt goedgekeurde waarden door consistente, getypeerde pseudoniemen voordat de tekst in een ander venster of een cloud-LLM wordt gebruikt.

De app is bedoeld voor persoonlijk gebruik op één Mac. Het doel is gecontroleerde pseudonimisering, niet anonimiteit.

## Kernprincipes

- **Lokaal:** tekst wordt in de app verwerkt; er is geen account, server of telemetrie.
- **Recall eerst:** twijfelgevallen blijven zichtbaar zodat de gebruiker ze kan beoordelen.
- **Menselijke controle:** kandidaten worden nooit stilzwijgend als veilig beschouwd.
- **Sessiegebaseerde mapping:** de relatie tussen bronwaarde en pseudoniem bestaat alleen in React-state zolang de app open is.
- **Eerlijke grenzen:** pseudoniemen verwijderen niet automatisch alle indirecte of quasi-identificerende informatie.

## Workflow

1. Start een nieuwe controle.
2. Plak tekst in het bronvenster.
3. Bekijk de automatisch gevonden kandidaten.
4. Kies per kandidaat `Genereer token`, `Negeren` of `Waarde aanpassen`.
5. Voeg gemiste passages handmatig toe met de `+`-knop.
6. Gebruik eventueel `Alles vervangen` na de expliciete bevestiging.
7. Controleer de vervangingen en klik daarna op `Kopieer veilige tekst`.

De bulkactie vervangt alle geflagde kandidaten in één keer, inclusief eerder genegeerde kandidaten, maar kopieert niets automatisch. Gebruik die actie alleen wanneer dat bewust gewenst is en controleer daarna de tekst voordat je op `Kopieer veilige tekst` klikt.

## Detectie

De detectoren werken volledig lokaal met regexen, contextregels en checksums waar mogelijk. De huidige typen zijn:

- E-mailadressen
- Nederlandse mobiele, vaste en zakelijke telefoonnummers
- IBAN met mod-97-validatie
- BSN met elfproef-validatie
- IPv4-adressen
- Nederlandse postcodes, inclusief plaatscontext
- Straatadressen met huisnummer
- Numerieke en geschreven datums, inclusief korte jaaraanduidingen
- Internetdomeinen en websites
- Persoonsnamen met initialen en contextlabels zoals `naam:` of `contactpersoon:`
- Klant-, lid-, relatie-, account-, polis- en personeelsnummers
- Transactie-, order-, bestel-, factuur-, ticket- en betalingsnummers
- Serienummers, apparaat-ID's, contract- en chassisnummers
- Dossier-, zaak-, referentie-, KvK- en BTW/VAT-nummers

Context is belangrijk. Een los nummer kan niet betrouwbaar worden onderscheiden als bijvoorbeeld BSN, klantnummer of transactienummer. Een nummer na `klantnummer:` krijgt daarom een andere classificatie dan dezelfde waarde zonder context.

## Pseudonimiseren

Goedgekeurde waarden krijgen een typegebonden token:

```text
klant@example.com       -> EMAIL_1
klantnummer 123456      -> CUSTOMER_1
transactie TX-2025-04   -> TRANSACTION_1
serienummer SN8844      -> SERIAL_1
```

Dezelfde waarde krijgt binnen één actieve sessie hetzelfde token. Bij het sluiten van de app verdwijnt de mapping. Er is bewust nog geen vault, wachtwoordscherm, projectbestand of persistente opslag.

## Technologie

- React 19 en TypeScript
- Vite
- Tauri 2
- Rust als minimale desktoplaag
- Tailwind CSS en lokale styles
- Vitest voor unit-tests
- Playwright voor end-to-end-tests
- Tauri clipboard-plugin voor lokaal klembordgebruik

## Installeren

Vereisten:

- macOS op Apple Silicon voor de huidige `.app`-build
- Node.js 22 of nieuwer
- Rust en Cargo

Installeer dependencies:

```bash
npm install
```

Start de webontwikkelserver:

```bash
npm run dev
```

Start de desktopapp in development mode:

```bash
npm run tauri dev
```

## Testen en bouwen

Unit-tests:

```bash
npm run test
```

End-to-end-tests:

```bash
npm run test:e2e
```

Codekwaliteit:

```bash
npm run lint
npm run format
```

Productiebuild:

```bash
npm run tauri build
```

De standaard Tauri-build maakt de macOS-app zonder Finder-automatisering:

```text
src-tauri/target/release/bundle/macos/Amnesia Protocol.app
```

Een DMG kan lokaal zonder AppleScript worden gemaakt met:

```bash
hdiutil create \
  -volname "Amnesia Protocol" \
  -srcfolder "src-tauri/target/release/bundle/macos/Amnesia Protocol.app" \
  -ov \
  -format UDZO \
  "src-tauri/target/release/bundle/dmg/Amnesia Protocol_0.1.0_aarch64.dmg"
```

## Klembordcontrole

Beide kopieeracties gebruiken dezelfde lokale clipboardadapter. Na het schrijven leest Amnesia Protocol het klembord direct terug en vergelijkt het resultaat met de verwachte tekst. Alleen bij een overeenkomende readback wordt succes gemeld. De UI toont tijdens het kopiëren `Kopiëren...` en daarna een blijvende succes- of foutstatus naast de knoppen.

De browser-e2e-tests geven Playwright expliciete klembordrechten en controleren de gekopieerde inhoud. Dit valideert de browserfallback. Controleer voor een native macOS-release ook handmatig de gebouwde `.app`: kopieer een tekst met een token, plak die in een lokale teksteditor en controleer dat bijvoorbeeld `EMAIL_1` aanwezig is. De native Tauri-permissies staan in `src-tauri/capabilities/default.json`.

## Privacy en beveiliging

De MVP doet geen netwerkverzoeken tijdens de normale workflow en heeft geen analytics of telemetrie. Tauri-capabilities zijn beperkt tot de clipboard-plugin.

FileVault beschermt de Mac op schijfniveau. De app gebruikt in deze versie geen extra encryptielaag omdat de mapping niet persistent wordt opgeslagen. De brondata en mapping leven tijdens gebruik wel tijdelijk in het geheugen van de applicatie.

Let op:

- Clipboardinhoud kan door andere lokale apps worden gelezen.
- Een gepseudonimiseerde tekst kan nog indirect identificerende informatie bevatten.
- Automatische detectie is geen garantie dat alle gevoelige informatie is gevonden.
- Vertrouw niet uitsluitend op de bulkactie voor gegevens met hoge impact; beoordeel bij voorkeur de kandidaten handmatig.

## Bekende beperkingen

- Namen zonder duidelijke context worden niet algemeen via NER gedetecteerd. Handmatig markeren blijft nodig voor veel namen.
- Overlapresolutie is bewust eenvoudig en gericht op korte geplakte teksten. Bij complexe meervoudige overlaps kan menselijke controle nodig zijn.
- PDF, DOCX, OCR, CSV-structuurbehoud en bestandsimport/export zijn nog geen onderdeel van deze MVP.
- Persistente mapping tussen sessies is uitgesteld tot daar een concreet gebruiksmoment voor bestaat.

## Projectstructuur

```text
src/
  App.tsx             Reviewworkspace en sessiestate
  detectors.ts        Lokale detectoren, contextregels en checksums
  review.ts           Reviewacties, merge-logica en vervanging
  types.ts            Domeintypen en labels
  *.test.ts           Unit-tests
e2e/
  review.spec.ts      Playwright-workflowtests
src-tauri/
  src/                Minimale Tauri/Rust-entrypoint
  capabilities/       Beperkte desktoppermissies
```

## Status

De huidige implementatie bevat de Fase 1/2-MVP: lokale review, uitgebreide Nederlandse detectieregels, sessiegebonden pseudonimisering, klembordkopie en een expliciete bulkactie. De tests en productiebuild moeten groen zijn voordat wijzigingen als afgerond worden beschouwd.
