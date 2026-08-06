import { Download, RefreshCw, X } from "lucide-react";
import { CLIPBOARD_CLEAR_OPTIONS, type ClipboardClearDelay } from "./clipboard";
import {
  FALLBACK_OLLAMA_MODEL,
  hasMistralModel,
  OLLAMA_CATALOG,
  type OllamaLocalModel,
} from "./ollama";
import type { SyntheticLocale } from "./synthetic";

type SettingsPanelProps = {
  syntheticLocale: SyntheticLocale;
  clipboardClearAfter: ClipboardClearDelay;
  localModels: OllamaLocalModel[];
  ollamaStatus: "idle" | "loading" | "ready" | "error";
  ollamaError: string;
  downloadModel: string;
  pullBusy: boolean;
  pullProgress: string;
  hardwareInfo: string;
  onLocaleChange: (value: SyntheticLocale) => void;
  onClipboardClearAfterChange: (value: ClipboardClearDelay) => void;
  onRefreshModels: () => void;
  onDownloadModelChange: (value: string) => void;
  onPullModel: () => void;
  onClose: () => void;
};

export function SettingsPanel({
  syntheticLocale,
  clipboardClearAfter,
  localModels,
  ollamaStatus,
  ollamaError,
  downloadModel,
  pullBusy,
  pullProgress,
  hardwareInfo,
  onLocaleChange,
  onClipboardClearAfterChange,
  onRefreshModels,
  onDownloadModelChange,
  onPullModel,
  onClose,
}: SettingsPanelProps) {
  const selectedDownload = OLLAMA_CATALOG.find((item) => item.name === downloadModel);

  return (
    <div className="settings-backdrop" role="dialog" aria-modal="true" aria-label="Instellingen">
      <aside className="settings-panel">
        <div className="settings-header">
          <div>
            <span className="panel-kicker">PREFERENCES</span>
            <h2>Instellingen</h2>
          </div>
          <button
            type="button"
            className="icon-button"
            onClick={onClose}
            aria-label="Sluit instellingen"
            title="Sluit instellingen"
          >
            <X size={16} />
          </button>
        </div>

        <section className="settings-section">
          <h3>Lokale AI</h3>
          <div className="settings-model-status">
            <span>Mistral</span>
            <strong className={hasMistralModel(localModels) ? "available" : "missing"}>
              {hasMistralModel(localModels) ? "Lokaal beschikbaar" : "Ontbreekt"}
            </strong>
            <span>Gemma 3 1B fallback</span>
            <strong
              className={
                localModels.some((model) => model.name === FALLBACK_OLLAMA_MODEL)
                  ? "available"
                  : "missing"
              }
            >
              {localModels.some((model) => model.name === FALLBACK_OLLAMA_MODEL)
                ? "Lokaal beschikbaar"
                : "Ontbreekt"}
            </strong>
          </div>
          <div className="settings-inline-row">
            <span className={`ollama-status ${ollamaStatus}`}>
              {ollamaStatus === "loading" && "Modellen ophalen..."}
              {ollamaStatus === "ready" && `${localModels.length} lokale modellen`}
              {ollamaStatus === "error" && ollamaError}
              {ollamaStatus === "idle" && "Ollama optioneel"}
            </span>
            <button
              type="button"
              className="icon-button"
              onClick={onRefreshModels}
              disabled={ollamaStatus === "loading"}
              aria-label="Ververs lokale modellen"
              title="Ververs lokale modellen"
            >
              <RefreshCw size={15} />
            </button>
          </div>
          {(ollamaStatus === "error" || (ollamaStatus === "ready" && localModels.length === 0)) && (
            <div className="ollama-onboarding">
              <strong>
                Ollama {ollamaStatus === "error" ? "niet gevonden" : "heeft nog geen modellen"}
              </strong>
              <p>
                Review, Terminal en standaard synthetische vervanging werken zonder Ollama. Voor
                lokale chat en AI-vervanging van `OTHER` heb je Ollama nodig.
              </p>
              <a href="https://ollama.com/download/mac" target="_blank" rel="noreferrer">
                Open Ollama downloadpagina
              </a>
              <ol>
                <li>Installeer Ollama voor macOS.</li>
                <li>Open Ollama en kom daarna hier terug.</li>
                <li>Klik op Ververs lokale modellen.</li>
              </ol>
            </div>
          )}
          <div className="settings-download-box">
            <label>
              <span>Nieuw model downloaden</span>
              <select
                value={downloadModel}
                onChange={(event) => onDownloadModelChange(event.target.value)}
                disabled={pullBusy}
              >
                {OLLAMA_CATALOG.map((model) => (
                  <option key={model.name} value={model.name}>
                    {model.label} · {model.downloadSize}
                  </option>
                ))}
              </select>
            </label>
            {selectedDownload && (
              <p>
                {selectedDownload.description} {selectedDownload.recommendedRam} aanbevolen.
                Hardware: {hardwareInfo}.
              </p>
            )}
            <button type="button" className="ai-button" onClick={onPullModel} disabled={pullBusy}>
              <Download size={15} />{" "}
              {pullBusy ? `Download: ${pullProgress || "bezig"}` : "Download lokaal model"}
            </button>
          </div>
        </section>

        <section className="settings-section">
          <h3>Basis</h3>
          <label>
            <span>Taal voor synthetische waarden</span>
            <select
              value={syntheticLocale}
              onChange={(event) => onLocaleChange(event.target.value as SyntheticLocale)}
            >
              <option value="nl">Nederlands</option>
              <option value="en">English</option>
            </select>
          </label>
          <label>
            <span>Klembord automatisch leegmaken</span>
            <select
              value={clipboardClearAfter}
              onChange={(event) =>
                onClipboardClearAfterChange(Number(event.target.value) as ClipboardClearDelay)
              }
            >
              {CLIPBOARD_CLEAR_OPTIONS.map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
        </section>

        <p className="settings-note">
          Alleen deze voorkeuren worden lokaal bewaard. Brondata, mappings en chatgeschiedenis
          blijven sessiegebonden.
        </p>
      </aside>
    </div>
  );
}
