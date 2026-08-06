# Amnesia Protocol Lite

[![Offline-first](https://img.shields.io/badge/Privacy-offline--first-637157?style=flat-square)](#privacy-en-beveiliging)
[![Local AI](https://img.shields.io/badge/AI-local%20Ollama-c9a957?style=flat-square)](#synthetische-tweede-laag)
[![macOS](https://img.shields.io/badge/Platform-macOS%20Apple%20Silicon-252522?style=flat-square&logo=apple&logoColor=white)](#installeren)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=20232A)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![Tauri](https://img.shields.io/badge/Tauri-2-FFC131?style=flat-square&logo=tauri&logoColor=111111)](https://tauri.app/)
[![Testing](https://img.shields.io/badge/Testing-Vitest%20%2B%20Playwright-6e9fcb?style=flat-square)](#testen-en-bouwen)

Amnesia Protocol Lite is een lokale desktopwerkplek voor het gecontroleerd opschonen en synthetiseren van gevoelige tekst. De app combineert menselijke review, getypeerde pseudonimisering en een expliciete tweede laag voor realistische fictieve data. Zo kan tekst veilig worden voorbereid voordat die een ander venster of een cloud-LLM bereikt.

De app is ontworpen voor persoonlijk gebruik op één Mac. Het doel is gecontroleerde pseudonimisering en synthetische vervanging, niet anonimiteit of een garantie dat alle indirecte identificerende informatie verdwijnt.

## Screenshots

### Welkomstscherm

![Amnesia Protocol Welkomstscherm](docs/images/home-screen.png)

### 01 Review Workspace

![Amnesia Protocol Review Workspace](docs/images/review-screen.png)

### 02 Synthetische Vervangers

![Amnesia Protocol Synthetische Vervangers](docs/images/synthetic-screen.png)

## Kernprincipes

- **Lokaal als standaard:** detectie, review en standaardgeneratie draaien op de Mac zonder account, cloudservice of telemetrie.
- **Twee expliciete lagen:** eerst wordt gevoelige tekst omgezet naar markers; daarna plakt de gebruiker die veilige tekst bewust in de synthetische laag.
- **Menselijke controle:** kandidaten, markers en gegenereerde waarden blijven zichtbaar en aanpasbaar.
- **Privacy door ontkoppeling:** laag 2 ontvangt alleen markers zoals `EMAIL_1` en nooit de oorspronkelijke bronwaarde.
- **Eerlijke grenzen:** geen enkele detector of pseudoniem maakt tekst automatisch volledig anoniem.

## Workflow

### Laag 1: Review en pseudonimisering

1. Start een nieuwe controle.
2. Plak tekst in het bronvenster.
3. Bekijk de automatisch gevonden kandidaten.
4. Kies per kandidaat `Genereer token`, `Negeren` of `Waarde aanpassen`.
5. Voeg gemiste passages handmatig toe met de `+`-knop.
6. Gebruik eventueel `Accepteer openstaande`; eerdere genegeerde of aangepaste kandidaten blijven ongemoeid.
7. Controleer de vervangingen en klik op `Kopieer veilige tekst`.

### Laag 2: Synthetische vervanging

1. Open tabblad `02 Synthetisch`.
2. Plak daar zelf de gekopieerde tekst uit laag 1.
3. Controleer de gevonden markers.
4. Klik expliciet op `Genereer standaardvervangers`.
5. Gebruik voor `OTHER` optioneel een lokaal Ollama-model.
6. Controleer en corrigeer de fictieve waarden.
7. Klik op `Kopieer synthetische tekst`.

De veilige bulkactie accepteert alleen openstaande kandidaten. `Forceer alle kandidaten` is een aparte, expliciet bevestigde actie die ook eerder genegeerde kandidaten accepteert. Geen van beide acties kopieert automatisch; controleer de tekst altijd voordat je op `Kopieer veilige tekst` klikt.

## Detectie

De detectoren werken volledig lokaal met regexen, contextregels en checksums waar mogelijk. De huidige typen zijn:

- E-mailadressen
- Nederlandse mobiele, vaste en zakelijke telefoonnummers
- IBAN met mod-97-validatie
- BSN met elfproef-validatie
- IPv4-adressen
- Nederlandse postcodes, inclusief plaatscontext
- Straatadressen met huisnummer als `address`
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

## Synthetische tweede laag

In tabblad `02 Synthetisch` plakt de gebruiker eerst zelf de veilige tekst uit laag 1. Alleen ondersteunde markers zoals `EMAIL_1`, `CUSTOMER_1` en `LINK_1` worden herkend; de tweede laag ontvangt geen bronwaarden uit de eerste laag. Na een expliciete klik worden de markers opnieuw opgebouwd als realistische, volledig fictieve Nederlandse waarden. E-mailadressen, personen, telefoonnummers, IBAN's, BSN's, postcodes, datums, identifiers en links worden lokaal en deterministisch gegenereerd. De tekst wordt pas gekopieerd nadat alle vervangers zijn ingevuld.

`OTHER` wordt niet willekeurig ingevuld. Hiervoor kan optioneel een lokaal Ollama-model worden gebruikt. De app communiceert hiervoor uitsluitend met `http://localhost:11434`; er worden geen cloudmodellen of externe endpoints ondersteund. In de tweede laag kan de gebruiker het model en een gewenste formaatbeschrijving opgeven, bijvoorbeeld `intern projectnummer met prefix PROJ-`.

## Technologie

- React 19 en TypeScript
- Vite
- Tauri 2
- Rust als minimale desktoplaag
- Tailwind CSS en lokale styles
- Vitest voor unit-tests
- Playwright voor end-to-end-tests
- Tauri clipboard-plugin voor lokaal klembordgebruik
- Ollama als optionele lokale AI-runtime voor `OTHER`

## Installeren

Vereisten:

- macOS op Apple Silicon voor de huidige `.app`-build
- Node.js 22 of nieuwer
- Rust en Cargo
- Ollama is alleen nodig voor AI-vervanging van `OTHER`

Installeer dependencies:

```bash
npm install
```

Optionele lokale AI instellen:

```bash
ollama serve
ollama pull llama3.2
```

De tweede laag gebruikt standaard het lokale model `llama3.2`. Een ander lokaal geïnstalleerd model kan in de app worden ingevuld. De app gebruikt uitsluitend Ollama op `http://localhost:11434`; zonder Ollama blijven alle standaardvervangers volledig offline beschikbaar.

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

De MVP doet geen externe netwerkverzoeken tijdens de normale workflow en heeft geen analytics of telemetrie. De optionele AI-functie voor `OTHER` praat uitsluitend met een lokaal Ollama-model op `localhost`. Tauri-capabilities zijn beperkt tot de clipboard-plugin.

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
  App.tsx             App-shell en laagselectie
  HomeScreen.tsx      Welkomstscherm
  ReviewWorkspace.tsx Revieweditor en kandidaatlijst
  ReviewBottomBar.tsx Reviewacties en clipboardknoppen
  AppDialog.tsx       Modalweergave en focusbeheer
  useDialog.ts        Confirm- en promptlogica
  SyntheticPanel.tsx  Tweede laag voor geplakte markers
  detectors.ts        Lokale detectoren, contextregels en checksums
  synthetic.ts        Markerparser en fictieve datageneratoren
  ollama.ts           Lokale Ollama-integratie voor OTHER
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

De huidige implementatie bevat de Fase 1/2-MVP: lokale review, uitgebreide Nederlandse detectieregels, sessiegebonden pseudonimisering, een onafhankelijk geplakte synthetische tweede laag, optionele lokale Ollama-AI, klembordcontrole, snapshot-history en gescheiden veilige en geforceerde bulkacties. De tests en productiebuild moeten groen zijn voordat wijzigingen als afgerond worden beschouwd.
