import { Download, RefreshCw, X } from "lucide-react";
import { CLIPBOARD_CLEAR_OPTIONS, type ClipboardClearDelay } from "./clipboard";
import { OLLAMA_CATALOG, type OllamaLocalModel } from "./ollama";
import type { SyntheticLocale } from "./synthetic";

type SettingsPanelProps = {
  preferredModel: string;
  syntheticLocale: SyntheticLocale;
  clipboardClearAfter: ClipboardClearDelay;
  localModels: OllamaLocalModel[];
  ollamaStatus: "idle" | "loading" | "ready" | "error";
  ollamaError: string;
  downloadModel: string;
  pullBusy: boolean;
  pullProgress: string;
  hardwareInfo: string;
  onPreferredModelChange: (value: string) => void;
  onLocaleChange: (value: SyntheticLocale) => void;
  onClipboardClearAfterChange: (value: ClipboardClearDelay) => void;
  onRefreshModels: () => void;
  onDownloadModelChange: (value: string) => void;
  onPullModel: () => void;
  onClose: () => void;
};

export function SettingsPanel({
  preferredModel,
  syntheticLocale,
  clipboardClearAfter,
  localModels,
  ollamaStatus,
  ollamaError,
  downloadModel,
  pullBusy,
  pullProgress,
  hardwareInfo,
  onPreferredModelChange,
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
          <label>
            <span>Voorkeursmodel</span>
            <select
              value={preferredModel}
              onChange={(event) => onPreferredModelChange(event.target.value)}
            >
              {!localModels.some((model) => model.name === preferredModel) && (
                <option value={preferredModel}>{preferredModel} (niet lokaal gevonden)</option>
              )}
              {localModels.map((model) => (
                <option key={model.name} value={model.name}>
                  {model.name}
                  {model.parameterSize ? ` · ${model.parameterSize}` : ""}
                </option>
              ))}
            </select>
          </label>
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
