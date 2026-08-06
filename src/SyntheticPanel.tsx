import { Clipboard, RefreshCw, Sparkles } from "lucide-react";
import type { DetectionType } from "./types";
import { TYPE_LABELS } from "./types";

export type SyntheticEntry = {
  key: string;
  token: string;
  type: DetectionType;
  value: string;
  replacement: string;
};

type SyntheticPanelProps = {
  entries: SyntheticEntry[];
  sourceText: string;
  syntheticText: string;
  model: string;
  formatHint: string;
  aiBusy: boolean;
  aiError: string;
  onSourceTextChange: (value: string) => void;
  onModelChange: (value: string) => void;
  onFormatHintChange: (value: string) => void;
  onGenerateAll: () => void;
  onGenerateOther: (entry: SyntheticEntry) => void;
  onReplacementChange: (entry: SyntheticEntry, value: string) => void;
  onCopy: () => void;
};

export function SyntheticPanel({
  entries,
  sourceText,
  syntheticText,
  model,
  formatHint,
  aiBusy,
  aiError,
  onSourceTextChange,
  onModelChange,
  onFormatHintChange,
  onGenerateAll,
  onGenerateOther,
  onReplacementChange,
  onCopy,
}: SyntheticPanelProps) {
  const otherEntries = entries.filter((entry) => entry.type === "other");

  return (
    <section className="synthetic-workspace">
      <div className="synthetic-output panel">
        <div className="panel-head">
          <div>
            <span className="panel-kicker">TWEEDE LAAG</span>
            <span className="panel-title">Geplakte veilige tekst</span>
          </div>
          <span className="char-count">{sourceText.length} tekens</span>
        </div>
        <textarea
          className="synthetic-source-textarea"
          aria-label="Veilige tekst voor synthetische laag"
          value={sourceText}
          onChange={(event) => onSourceTextChange(event.target.value)}
          spellCheck={false}
          placeholder="Plak hier de tekst die je uit laag 1 hebt gekopieerd, bijvoorbeeld EMAIL_1 of CUSTOMER_1."
        />
        <div className="synthetic-output-head">
          <span className="panel-kicker">OUTPUT</span>
          <span>{syntheticText.length} tekens na generatie</span>
        </div>
        <textarea
          className="synthetic-textarea"
          aria-label="Synthetische tekst"
          value={syntheticText}
          readOnly
          spellCheck={false}
        />
        <div className="synthetic-output-foot">
          <span>Genereer eerst expliciet nieuwe waarden.</span>
          <button type="button" className="copy-button" onClick={onCopy}>
            <Clipboard size={16} /> Kopieer synthetische tekst
          </button>
        </div>
      </div>

      <aside className="synthetic-mapping panel">
        <div className="panel-head">
          <div>
            <span className="panel-kicker">MAPPING</span>
            <span className="panel-title">
              Fictieve vervangers <b>{entries.length}</b>
            </span>
          </div>
        </div>

        <div className="synthetic-controls">
          <label>
            <span>Ollama-model voor Overig</span>
            <input
              type="text"
              value={model}
              onChange={(event) => onModelChange(event.target.value)}
              placeholder="llama3.2"
            />
          </label>
          <label>
            <span>Gewenst formaat voor Overig</span>
            <input
              type="text"
              value={formatHint}
              onChange={(event) => onFormatHintChange(event.target.value)}
              placeholder="bijv. intern projectnummer met prefix PROJ-"
            />
          </label>
          <button type="button" className="generate-all-button" onClick={onGenerateAll}>
            <Sparkles size={15} /> Genereer standaardvervangers
          </button>
          {otherEntries.length > 0 && (
            <button
              type="button"
              className="ai-button"
              onClick={() => otherEntries.forEach(onGenerateOther)}
              disabled={aiBusy || !model.trim()}
            >
              <Sparkles size={15} />
              {aiBusy
                ? "Ollama genereert..."
                : `Genereer ${otherEntries.length} Overig-item${otherEntries.length === 1 ? "" : "s"} met AI`}
            </button>
          )}
          {aiError && <p className="ai-error">{aiError}</p>}
        </div>

        <div className="synthetic-entry-list">
          {entries.map((entry) => (
            <article className="synthetic-entry" key={entry.key}>
              <div className="synthetic-entry-top">
                <span className={`type-dot type-${entry.type}`} />
                <span className="candidate-type">{TYPE_LABELS[entry.type]}</span>
                <code>{entry.token}</code>
              </div>
              <div className="synthetic-original">Marker uit input: {entry.token}</div>
              <div className="synthetic-replacement-row">
                <input
                  aria-label={`Fictieve vervanger voor ${entry.token}`}
                  value={entry.replacement}
                  onChange={(event) => onReplacementChange(entry, event.target.value)}
                  placeholder={
                    entry.type === "other" ? "Genereer met lokale AI" : "Nog niet gegenereerd"
                  }
                />
                {entry.type === "other" && (
                  <button
                    type="button"
                    className="icon-button"
                    onClick={() => onGenerateOther(entry)}
                    disabled={aiBusy || !model.trim()}
                    aria-label={`Genereer ${entry.token} met lokale AI`}
                  >
                    <RefreshCw size={15} />
                  </button>
                )}
              </div>
            </article>
          ))}
          {!entries.length && (
            <div className="empty">
              <p>Plak eerst veilige tekst met markers uit laag 1.</p>
            </div>
          )}
        </div>
      </aside>
    </section>
  );
}
