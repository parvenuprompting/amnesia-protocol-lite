import { ShieldCheck, Sparkles } from "lucide-react";

type HomeScreenProps = {
  onStart: () => void;
};

export function HomeScreen({ onStart }: HomeScreenProps) {
  return (
    <section className="home-screen">
      <div className="home-copy">
        <p className="eyebrow">Lokale privacyfilter</p>
        <h1>
          Maak gevoelige tekst
          <br />
          <em>klaar om te delen.</em>
        </h1>
        <p className="home-description">
          Amnesia Protocol helpt je gevoelige klantgegevens te vinden en te vervangen voordat je
          tekst een ander venster of een externe dienst bereikt. Alles blijft lokaal en de
          pseudoniem-mapping bestaat alleen zolang deze sessie open is.
        </p>
        <button className="start-button" type="button" onClick={onStart}>
          Start een nieuwe controle <Sparkles size={17} />
        </button>
      </div>
      <div className="home-aside">
        <div className="home-shield">
          <ShieldCheck size={26} />
        </div>
        <p className="home-aside-title">Geen data verlaat deze app.</p>
        <p>De mapping verdwijnt bij afsluiten. Controleer elke markering voordat je kopieert.</p>
        <div className="home-steps">
          <span>
            <b>01</b> Detecteer
          </span>
          <span>
            <b>02</b> Beoordeel
          </span>
          <span>
            <b>03</b> Kopieer veilig
          </span>
        </div>
      </div>
    </section>
  );
}
