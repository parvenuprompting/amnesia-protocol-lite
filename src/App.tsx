import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import {
  Check,
  Clipboard,
  Eraser,
  EyeOff,
  Plus,
  RotateCcw,
  RotateCw,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { copyAndVerify } from "./clipboard";
import { detect } from "./detectors";
import { applyAction, mergeDetections, replaceAccepted, type ReviewAction } from "./review";
import type { Detection, DetectionType } from "./types";
import { TYPE_LABELS } from "./types";

const initialText =
  "Plak hier de tekst die je wilt controleren. Bijvoorbeeld: klantnummer 123456 of e-mail klant@example.com.";
const typeOptions = Object.entries(TYPE_LABELS) as [DetectionType, string][];
type ClipboardStatus =
  | { state: "idle" }
  | { state: "copying" }
  | { state: "success"; message: string }
  | { state: "error"; message: string };

type DialogState =
  | {
      open: true;
      title: string;
      message: string;
      input?: string;
      onConfirm: (value?: string) => void;
      onCancel: () => void;
    }
  | { open: false };

function tokenFor(type: DetectionType, index: number) {
  return `${type.toUpperCase()}_${index}`;
}

function createTokens(items: Detection[]) {
  const counts = new Map<DetectionType, number>();
  const mapping = new Map<string, string>();
  items
    .filter((item) => item.decision === "accepted" || item.decision === "edited")
    .forEach((item) => {
      if (!mapping.has(item.value)) {
        const index = (counts.get(item.type) ?? 0) + 1;
        counts.set(item.type, index);
        mapping.set(item.value, tokenFor(item.type, index));
      }
    });
  return mapping;
}

function MarkerText({ text, detections }: { text: string; detections: Detection[] }) {
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
      >
        {text.slice(item.start, item.end)}
      </mark>,
    );
    cursor = item.end;
  });
  parts.push(<span key="text-end">{text.slice(cursor)}</span>);
  return <>{parts}</>;
}

function App() {
  const [screen, setScreen] = useState<"home" | "review">("home");
  const [text, setText] = useState(initialText);
  const [detections, setDetections] = useState<Detection[]>(() => detect(initialText));
  const [history, setHistory] = useState<Detection[][]>([]);
  const [future, setFuture] = useState<Detection[][]>([]);
  const [filter, setFilter] = useState("all");
  const [message, setMessage] = useState("Klaar voor beoordeling");
  const [selectedType, setSelectedType] = useState<DetectionType>("person");
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const [toastKey, setToastKey] = useState(0);
  const [clipboardStatus, setClipboardStatus] = useState<ClipboardStatus>({ state: "idle" });
  const [dialog, setDialog] = useState<DialogState>({ open: false });
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const showToast = (msg: string) => {
    setMessage(msg);
    setToastKey((prev) => prev + 1);
    setFeedbackVisible(true);
  };

  useEffect(() => {
    if (!feedbackVisible) return;
    const timeout = window.setTimeout(() => setFeedbackVisible(false), 2400);
    return () => window.clearTimeout(timeout);
  }, [feedbackVisible, toastKey]);

  const askConfirm = (messageText: string, title = "Bevestigen") => {
    return new Promise<boolean>((resolve) => {
      setDialog({
        open: true,
        title,
        message: messageText,
        onConfirm: () => {
          setDialog({ open: false });
          resolve(true);
        },
        onCancel: () => {
          setDialog({ open: false });
          resolve(false);
        },
      });
    });
  };

  const askPrompt = (messageText: string, defaultValue = "") => {
    return new Promise<string | null>((resolve) => {
      setDialog({
        open: true,
        title: "Waarde aanpassen",
        message: messageText,
        input: defaultValue,
        onConfirm: (value) => {
          setDialog({ open: false });
          resolve(value ?? null);
        },
        onCancel: () => {
          setDialog({ open: false });
          resolve(null);
        },
      });
    });
  };

  const update = (action: ReviewAction) => {
    setHistory((items) => [...items, detections]);
    setFuture([]);
    setDetections(applyAction(detections, action));
  };

  const onTextChange = (value: string) => {
    setText(value);
    setDetections(mergeDetections(detections, detect(value), value));
    setFuture([]);
    showToast("Nieuwe tekst gedetecteerd");
  };

  const addManual = () => {
    const editor = textareaRef.current;
    if (!editor || editor.selectionStart === editor.selectionEnd) {
      showToast("Selecteer eerst tekst in het invoerveld");
      return;
    }
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    const manual: Detection = {
      id: `manual-${Date.now()}`,
      start,
      end,
      value: text.slice(start, end),
      type: selectedType,
      confidence: 1,
      detector: "manual",
      decision: "pending",
    };
    setHistory((items) => [...items, detections]);
    setFuture([]);
    setDetections([...detections, manual].sort((a, b) => a.start - b.start));
    showToast("Handmatige markering toegevoegd");
  };

  const undo = () => {
    const previous = history.at(-1);
    if (!previous) return;
    setFuture((items) => [...items, detections]);
    setDetections(previous);
    setHistory((items) => items.slice(0, -1));
    showToast("Actie ongedaan gemaakt");
  };

  const redo = () => {
    const next = future.at(-1);
    if (!next) return;
    setHistory((items) => [...items, detections]);
    setDetections(next);
    setFuture((items) => items.slice(0, -1));
    showToast("Actie opnieuw toegepast");
  };

  const tokens = useMemo(() => {
    return createTokens(detections);
  }, [detections]);

  const pending = detections.filter((item) => item.decision === "pending").length;
  const filtered = detections.filter(
    (item) =>
      filter === "all" ||
      item.decision === filter ||
      item.type === filter ||
      (filter === "low" && item.confidence < 0.7),
  );
  const output = replaceAccepted(text, detections, tokens);

  const copyOutput = async () => {
    if (
      pending > 0 &&
      !(await askConfirm(
        `${pending} kandidaat${pending === 1 ? " is" : "en zijn"} nog niet beoordeeld. Toch kopiëren?`,
        "Onbeoordeelde kandidaten",
      ))
    )
      return;
    setClipboardStatus({ state: "copying" });
    try {
      const count = detections.filter(
        (item) => item.decision === "accepted" || item.decision === "edited",
      ).length;
      await copyAndVerify(output);
      const successMessage = `${count} markeringen gekopieerd`;
      setClipboardStatus({ state: "success", message: successMessage });
      showToast(successMessage);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "onbekende clipboardfout";
      setClipboardStatus({ state: "error", message: "Kopiëren mislukt" });
      console.error("Clipboard copy failed:", errorMessage);
      showToast("Kopiëren is niet gelukt");
    }
  };

  const replaceAll = async () => {
    if (!detections.length) {
      setClipboardStatus({ state: "error", message: "Geen kandidaten om te vervangen" });
      showToast("Geen kandidaten om te vervangen");
      return;
    }
    if (
      !(await askConfirm(
        `Dit vervangt alle ${detections.length} geflagde items. Je kunt daarna zelf de tekst kopiëren. Doorgaan?`,
        "Alles vervangen",
      ))
    )
      return;
    const allAccepted = detections.map((item) => ({ ...item, decision: "accepted" as const }));
    setHistory((items) => [...items, detections]);
    setFuture([]);
    setDetections(allAccepted);
    const successMessage = `${detections.length} items vervangen. Controleer de tekst en klik daarna op Kopieer veilige tekst.`;
    setClipboardStatus({ state: "success", message: successMessage });
    showToast(successMessage);
  };

  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark">
            <EyeOff size={17} />
          </div>
          <div>
            <strong>Amnesia Protocol</strong>
            <span>private review workspace</span>
          </div>
        </div>
        <div className="privacy-badge">
          <span className="status-dot" /> offline only
        </div>
        <div className="top-actions">
          <button
            className="icon-button"
            onClick={undo}
            disabled={!history.length}
            aria-label="Undo"
          >
            <RotateCcw size={17} />
          </button>
          <button
            className="icon-button"
            onClick={redo}
            disabled={!future.length}
            aria-label="Redo"
          >
            <RotateCw size={17} />
          </button>
          <span className="divider" />
          <span className="session-label">Sessiegeheugen · actief</span>
        </div>
      </header>
      {screen === "home" ? (
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
            <button className="start-button" type="button" onClick={() => setScreen("review")}>
              Start een nieuwe controle <Sparkles size={17} />
            </button>
          </div>
          <div className="home-aside">
            <div className="home-shield">
              <ShieldCheck size={26} />
            </div>
            <p className="home-aside-title">Geen data verlaat deze app.</p>
            <p>
              De mapping verdwijnt bij afsluiten. Controleer elke markering voordat je kopieert.
            </p>
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
      ) : (
        <>
          <section className="workspace">
            <div className="editor-panel panel">
              <div className="panel-head">
                <div>
                  <span className="panel-kicker">BRONTEKST</span>
                  <span className="panel-title">Te beoordeelen inhoud</span>
                </div>
                <span className="char-count">{text.length} tekens</span>
              </div>
              <div className="editor-wrap">
                <div className="highlight-layer" aria-hidden="true">
                  <MarkerText text={text} detections={detections} />
                </div>
                <textarea
                  ref={textareaRef}
                  aria-label="Brontekst"
                  value={text}
                  onChange={(event) => onTextChange(event.target.value)}
                  onScroll={(event) => {
                    const layer = event.currentTarget.previousElementSibling as HTMLElement;
                    layer.scrollTop = event.currentTarget.scrollTop;
                    layer.scrollLeft = event.currentTarget.scrollLeft;
                  }}
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
                  onClick={addManual}
                  aria-label="Markering toevoegen"
                  title="Markering toevoegen"
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
                <button
                  className={filter === "all" ? "active" : ""}
                  onClick={() => setFilter("all")}
                >
                  Alle
                </button>
                <button
                  className={filter === "pending" ? "active" : ""}
                  onClick={() => setFilter("pending")}
                >
                  Open
                </button>
                <button
                  className={filter === "accepted" ? "active" : ""}
                  onClick={() => setFilter("accepted")}
                >
                  Akkoord
                </button>
                <button
                  className={filter === "rejected" ? "active" : ""}
                  onClick={() => setFilter("rejected")}
                >
                  Genegeerd
                </button>
              </div>
              <div className="candidate-list">
                {filtered.map((item) => (
                  <article className={`candidate ${item.decision}`} key={item.id}>
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
                          update({ id: item.id, decision: "accepted" });
                          showToast("Generieke vervanger aangemaakt");
                        }}
                        className="generate"
                        data-testid={`generate-${item.id}`}
                      >
                        <Sparkles size={14} /> Genereer token
                      </button>
                      <button
                        type="button"
                        onClick={() => update({ id: item.id, decision: "rejected" })}
                        className="reject"
                        title="Laat deze kandidaat ongewijzigd"
                      >
                        <X size={14} /> Negeren
                      </button>
                      <button
                        type="button"
                        onClick={async () => {
                          const next = await askPrompt("Pas de waarde aan", item.value);
                          if (next === null) return;
                          const trimmed = next.trim();
                          if (!trimmed) {
                            showToast("Waarde mag niet leeg zijn");
                            return;
                          }
                          update({ id: item.id, decision: "edited", value: trimmed });
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
          <section className="bottom-bar">
            <div className="manual-control">
              <span>Handmatig label</span>
              <select
                aria-label="Type handmatig label"
                value={selectedType}
                onChange={(event) => setSelectedType(event.target.value as DetectionType)}
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
              <span>
                {
                  detections.filter(
                    (item) => item.decision === "accepted" || item.decision === "edited",
                  ).length
                }{" "}
                vervangingen voorbereid
              </span>
            </div>
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
              onClick={replaceAll}
              disabled={clipboardStatus.state === "copying"}
              data-testid="replace-all"
              title="Vervang alle geflagde items zonder ze te kopiëren"
            >
              <Sparkles size={16} /> Alles vervangen
            </button>
            <button
              className="copy-button"
              type="button"
              onClick={copyOutput}
              disabled={clipboardStatus.state === "copying"}
            >
              <Clipboard size={17} />{" "}
              {clipboardStatus.state === "copying" ? "Kopiëren..." : "Kopieer veilige tekst"}
            </button>
          </section>
        </>
      )}
      {feedbackVisible && (
        <div className="feedback-toast" role="status">
          <Check size={16} />
          <span>{message}</span>
        </div>
      )}
      {dialog.open && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" data-testid="modal">
          <div className="modal">
            <div className="modal-head">
              <strong>{dialog.title}</strong>
            </div>
            <p className="modal-message">{dialog.message}</p>
            {dialog.input !== undefined && (
              <input
                type="text"
                className="modal-input"
                defaultValue={dialog.input}
                data-testid="modal-input"
                autoFocus
                onKeyDown={(event) => {
                  if (event.key === "Enter") dialog.onConfirm(event.currentTarget.value);
                  if (event.key === "Escape") dialog.onCancel();
                }}
              />
            )}
            <div className="modal-actions">
              <button
                type="button"
                className="modal-cancel"
                data-testid="modal-cancel"
                onClick={dialog.onCancel}
              >
                Annuleren
              </button>
              <button
                type="button"
                className="modal-confirm"
                data-testid="modal-ok"
                onClick={() => {
                  if (dialog.input !== undefined) {
                    const input = document.querySelector(
                      '[data-testid="modal-input"]',
                    ) as HTMLInputElement | null;
                    dialog.onConfirm(input?.value ?? "");
                  } else {
                    dialog.onConfirm();
                  }
                }}
              >
                Doorgaan
              </button>
            </div>
          </div>
        </div>
      )}
      <footer>
        <span>
          <Eraser size={13} /> Alleen sessiegeheugen · geen opslag
        </span>
        <span>{message}</span>
      </footer>
    </main>
  );
}

export default App;
