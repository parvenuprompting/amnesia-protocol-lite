import { Check, Plus, Sparkles, X } from "lucide-react";
import { useRef, type RefObject, type ReactNode } from "react";
import type { ReviewAction } from "./review";
import type { Detection, DetectionType } from "./types";
import { TYPE_LABELS } from "./types";

type ReviewWorkspaceProps = {
  text: string;
  detections: Detection[];
  filtered: Detection[];
  tokens: Map<string, string>;
  filter: string;
  pending: number;
  selectedType: DetectionType;
  textareaRef: RefObject<HTMLTextAreaElement | null>;
  onTextChange: (value: string) => void;
  onPaste: (event: React.ClipboardEvent<HTMLTextAreaElement>) => void;
  onScroll: (event: React.UIEvent<HTMLTextAreaElement>) => void;
  onFilterChange: (value: string) => void;
  onAddManual: () => void;
  onUpdate: (action: ReviewAction) => void;
  onPrompt: (message: string, value: string) => Promise<string | null>;
  onToast: (message: string) => void;
  mode: "standard" | "terminal";
};

function MarkerText({
  text,
  detections,
  onSelect,
}: {
  text: string;
  detections: Detection[];
  onSelect: (id: string) => void;
}) {
  const parts: ReactNode[] = [];
  let cursor = 0;
  detections.forEach((item) => {
    if (item.start < cursor) return;
    parts.push(<span key={`text-${item.id}`}>{text.slice(cursor, item.start)}</span>);
    parts.push(
      <mark
        key={item.id}
        className={`mark mark-${item.type} ${item.decision}`}
        data-testid={`mark-${item.id}`}
        role="button"
        tabIndex={0}
        aria-label={`Bekijk markering ${item.value}`}
        onClick={() => onSelect(item.id)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") onSelect(item.id);
        }}
      >
        {text.slice(item.start, item.end)}
      </mark>,
    );
    cursor = item.end;
  });
  parts.push(<span key="text-end">{text.slice(cursor)}</span>);
  return <>{parts}</>;
}

export function ReviewWorkspace({
  text,
  detections,
  filtered,
  tokens,
  filter,
  pending,
  selectedType,
  textareaRef,
  onTextChange,
  onPaste,
  onScroll,
  onFilterChange,
  onAddManual,
  onUpdate,
  onPrompt,
  onToast,
  mode,
}: ReviewWorkspaceProps) {
  const candidateRefs = useRef(new Map<string, HTMLElement>());
  const selectCandidate = (id: string) => {
    const candidate = candidateRefs.current.get(id);
    candidate?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    candidate?.focus();
  };

  return (
    <section className="workspace">
      <div className="editor-panel panel">
        <div className="panel-head">
          <div>
            <span className="panel-kicker">{mode === "terminal" ? "TERMINAL" : "BRONTEKST"}</span>
            <span className="panel-title">
              {mode === "terminal" ? "Terminaluitvoer opschonen" : "Te beoordelen inhoud"}
            </span>
          </div>
          <span className="char-count">{text.length} tekens</span>
        </div>
        <div className="editor-wrap">
          <div className="highlight-layer">
            <MarkerText text={text} detections={detections} onSelect={selectCandidate} />
          </div>
          <textarea
            ref={textareaRef}
            aria-label="Brontekst"
            value={text}
            onChange={(event) => onTextChange(event.target.value)}
            onPaste={onPaste}
            onScroll={onScroll}
            spellCheck={false}
          />
        </div>
        <div className="editor-foot">
          <span>
            <Sparkles size={14} /> Tip: selecteer tekst om handmatig te markeren
          </span>
          <button
            type="button"
            className="add-mark"
            onClick={onAddManual}
            aria-label="Markering toevoegen"
            title={`Markering toevoegen als ${TYPE_LABELS[selectedType]}`}
          >
            <Plus size={17} />
          </button>
        </div>
      </div>
      <aside className="review-panel panel">
        <div className="panel-head">
          <div>
            <span className="panel-kicker">REVIEW</span>
            <span className="panel-title">
              Kandidaten <b>{detections.length}</b>
            </span>
          </div>
          <span className={`review-status ${pending ? "attention" : "ready"}`}>
            {pending ? `${pending} open` : "gereviewd"}
          </span>
        </div>
        <div className="filter-row">
          {[
            ["all", "Alle"],
            ["pending", "Open"],
            ["accepted", "Akkoord"],
            ["rejected", "Genegeerd"],
          ].map(([value, label]) => (
            <button
              key={value}
              className={filter === value ? "active" : ""}
              onClick={() => onFilterChange(value)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="candidate-list">
          {filtered.map((item) => (
            <article
              className={`candidate ${item.decision}`}
              key={item.id}
              tabIndex={-1}
              ref={(element) => {
                if (element) candidateRefs.current.set(item.id, element);
                else candidateRefs.current.delete(item.id);
              }}
            >
              <div className="candidate-top">
                <span className={`type-dot type-${item.type}`} />
                <span className="candidate-type">{TYPE_LABELS[item.type]}</span>
                <span className="confidence">{Math.round(item.confidence * 100)}%</span>
              </div>
              <div className="candidate-value">{item.value}</div>
              {(item.decision === "accepted" || item.decision === "edited") &&
                tokens.has(item.value) && (
                  <div className="candidate-token" data-testid={`token-${item.id}`}>
                    <span>VERVANGER</span>
                    <code>{tokens.get(item.value)}</code>
                  </div>
                )}
              <div className="candidate-actions">
                <button
                  type="button"
                  onClick={() => {
                    onUpdate({ id: item.id, decision: "accepted" });
                    onToast("Generieke vervanger aangemaakt");
                  }}
                  className="generate"
                  data-testid={`generate-${item.id}`}
                >
                  <Sparkles size={14} /> Genereer token
                </button>
                <button
                  type="button"
                  onClick={() => onUpdate({ id: item.id, decision: "rejected" })}
                  className="reject"
                  title="Laat deze kandidaat ongewijzigd"
                >
                  <X size={14} /> Negeren
                </button>
                <button
                  type="button"
                  onClick={async () => {
                    const next = await onPrompt("Pas de waarde aan", item.value);
                    if (next === null) return;
                    const trimmed = next.trim();
                    if (!trimmed) {
                      onToast("Waarde mag niet leeg zijn");
                      return;
                    }
                    onUpdate({ id: item.id, decision: "edited", value: trimmed });
                  }}
                  className="edit"
                  title="Pas de gemarkeerde waarde aan"
                >
                  Waarde aanpassen
                </button>
              </div>
            </article>
          ))}
          {!filtered.length && (
            <div className="empty">
              <Check size={22} />
              <p>Geen kandidaten in deze weergave.</p>
            </div>
          )}
        </div>
      </aside>
    </section>
  );
}
