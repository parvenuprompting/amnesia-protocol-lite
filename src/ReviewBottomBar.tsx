import { Clipboard, Sparkles } from "lucide-react";
import {
  CLIPBOARD_CLEAR_OPTIONS,
  type ClipboardClearDelay,
  type ClipboardStatus,
} from "./clipboard";
import type { DetectionType } from "./types";

export type { ClipboardStatus } from "./clipboard";

type ReviewBottomBarProps = {
  typeOptions: [DetectionType, string][];
  selectedType: DetectionType;
  acceptedCount: number;
  clipboardStatus: ClipboardStatus;
  clipboardClearAfter: ClipboardClearDelay;
  onTypeChange: (type: DetectionType) => void;
  onAcceptPending: () => void;
  onForceAll: () => void;
  onCopy: () => void;
  onClipboardClearAfterChange: (value: ClipboardClearDelay) => void;
};

export function ReviewBottomBar({
  typeOptions,
  selectedType,
  acceptedCount,
  clipboardStatus,
  clipboardClearAfter,
  onTypeChange,
  onAcceptPending,
  onForceAll,
  onCopy,
  onClipboardClearAfterChange,
}: ReviewBottomBarProps) {
  return (
    <section className="bottom-bar">
      <div className="manual-control">
        <span>Handmatig label</span>
        <select
          aria-label="Type handmatig label"
          value={selectedType}
          onChange={(event) => onTypeChange(event.target.value as DetectionType)}
        >
          {typeOptions.map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <div className="copy-preview">
        <span className="output-label">OUTPUT</span>
        <span>{acceptedCount} vervangingen voorbereid</span>
      </div>
      <label className="clipboard-clear-control">
        <span>Clipboard</span>
        <select
          aria-label="Klembord automatisch leegmaken"
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
      <div
        className={`clipboard-status ${clipboardStatus.state}`}
        aria-live="polite"
        data-testid="clipboard-status"
      >
        {clipboardStatus.state === "copying" && "Kopiëren..."}
        {clipboardStatus.state === "success" && clipboardStatus.message}
        {clipboardStatus.state === "error" && clipboardStatus.message}
      </div>
      <button
        className="bulk-copy-button"
        type="button"
        onClick={onAcceptPending}
        disabled={clipboardStatus.state === "copying"}
        data-testid="accept-pending"
      >
        <Sparkles size={16} /> Accepteer openstaande
      </button>
      <button
        className="force-all-button"
        type="button"
        onClick={onForceAll}
        disabled={clipboardStatus.state === "copying"}
        data-testid="force-all"
      >
        <Sparkles size={16} /> Forceer alle kandidaten
      </button>
      <button
        className="copy-button"
        type="button"
        onClick={onCopy}
        disabled={clipboardStatus.state === "copying"}
      >
        <Clipboard size={17} />{" "}
        {clipboardStatus.state === "copying" ? "Kopiëren..." : "Kopieer veilige tekst"}
      </button>
    </section>
  );
}
