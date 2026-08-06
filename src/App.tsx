import { useEffect, useMemo, useRef, useState } from "react";
import { Check, Eraser, EyeOff, RotateCcw, RotateCw } from "lucide-react";
import { copyAndVerify } from "./clipboard";
import { detect } from "./detectors";
import { AppDialog } from "./AppDialog";
import { htmlToPlainText, insertTextAtSelection } from "./html";
import { generateWithOllama } from "./ollama";
import {
  applyAction,
  mergeDetections,
  replaceAccepted,
  type ReviewAction,
  type ReviewSnapshot,
} from "./review";
import { ReviewBottomBar, type ClipboardStatus } from "./ReviewBottomBar";
import { ReviewWorkspace } from "./ReviewWorkspace";
import { HomeScreen } from "./HomeScreen";
import { SyntheticPanel, type SyntheticEntry } from "./SyntheticPanel";
import { createSyntheticMap, parseSyntheticMarkers, replaceSyntheticMarkers } from "./synthetic";
import type { Detection, DetectionType } from "./types";
import { TYPE_LABELS } from "./types";
import { useDialog } from "./useDialog";

const initialText =
  "Plak hier de tekst die je wilt controleren. Bijvoorbeeld: klantnummer 123456 of e-mail klant@example.com.";
const typeOptions = Object.entries(TYPE_LABELS) as [DetectionType, string][];

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

function App() {
  const [screen, setScreen] = useState<"home" | "review" | "synthetic">("home");
  const [text, setText] = useState(initialText);
  const [detections, setDetections] = useState<Detection[]>(() => detect(initialText));
  const [history, setHistory] = useState<ReviewSnapshot[]>([]);
  const [future, setFuture] = useState<ReviewSnapshot[]>([]);
  const [textEditBaseline, setTextEditBaseline] = useState<ReviewSnapshot | null>(null);
  const [filter, setFilter] = useState("all");
  const [message, setMessage] = useState("Klaar voor beoordeling");
  const [selectedType, setSelectedType] = useState<DetectionType>("person");
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const [toastKey, setToastKey] = useState(0);
  const [clipboardStatus, setClipboardStatus] = useState<ClipboardStatus>({ state: "idle" });
  const [syntheticInput, setSyntheticInput] = useState("");
  const [syntheticValues, setSyntheticValues] = useState<Map<string, string>>(new Map());
  const [ollamaModel, setOllamaModel] = useState("llama3.2");
  const [otherFormatHint, setOtherFormatHint] = useState("");
  const [aiBusy, setAiBusy] = useState(false);
  const [aiError, setAiError] = useState("");
  const [sessionSeed] = useState(() => Date.now());
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const textEditVersionRef = useRef(0);
  const { dialog, askConfirm, askPrompt } = useDialog();

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

  useEffect(() => {
    if (!textEditBaseline) return;
    const version = textEditVersionRef.current;
    const timeout = window.setTimeout(() => {
      if (version !== textEditVersionRef.current) return;
      setHistory((items) => [...items, textEditBaseline]);
      setFuture([]);
      setDetections(mergeDetections(textEditBaseline.detections, detect(text), text));
      setTextEditBaseline(null);
      showToast("Nieuwe tekst gedetecteerd");
    }, 200);
    return () => window.clearTimeout(timeout);
  }, [text, textEditBaseline]);

  const freshDetections = () =>
    textEditBaseline
      ? mergeDetections(textEditBaseline.detections, detect(text), text)
      : detections;

  const commitDetections = (next: Detection[]) => {
    textEditVersionRef.current += 1;
    setHistory((items) => [...items, textEditBaseline ?? { text, detections }]);
    setFuture([]);
    setTextEditBaseline(null);
    setDetections(next);
  };

  const update = (action: ReviewAction) => {
    commitDetections(applyAction(freshDetections(), action));
  };

  const onTextChange = (value: string) => {
    textEditVersionRef.current += 1;
    if (!textEditBaseline) setTextEditBaseline({ text, detections });
    setText(value);
    setDetections([]);
    setFuture([]);
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    const input = event.currentTarget;
    const start = input.selectionStart ?? 0;
    const end = input.selectionEnd ?? 0;
    const html = event.clipboardData.getData("text/html");
    const plain = event.clipboardData.getData("text/plain");
    const pasted = html ? htmlToPlainText(html) : plain;
    if (!pasted) return;
    onTextChange(insertTextAtSelection(text, pasted, start, end));
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
    const current = freshDetections();
    commitDetections([...current, manual].sort((a, b) => a.start - b.start));
    showToast("Handmatige markering toegevoegd");
  };

  const undo = () => {
    if (textEditBaseline) {
      textEditVersionRef.current += 1;
      setText(textEditBaseline.text);
      setDetections(textEditBaseline.detections);
      setTextEditBaseline(null);
      showToast("Tekstwijziging ongedaan gemaakt");
      return;
    }
    const previous = history.at(-1);
    if (!previous) return;
    setFuture((items) => [...items, { text, detections }]);
    setText(previous.text);
    setDetections(previous.detections);
    setTextEditBaseline(null);
    setHistory((items) => items.slice(0, -1));
    showToast("Actie ongedaan gemaakt");
  };

  const redo = () => {
    const next = future.at(-1);
    if (!next) return;
    setHistory((items) => [...items, { text, detections }]);
    setText(next.text);
    setDetections(next.detections);
    setTextEditBaseline(null);
    setFuture((items) => items.slice(0, -1));
    showToast("Actie opnieuw toegepast");
  };

  const tokens = useMemo(() => createTokens(detections), [detections]);
  const pending = detections.filter((item) => item.decision === "pending").length;
  const filtered = detections.filter(
    (item) =>
      filter === "all" ||
      item.decision === filter ||
      item.type === filter ||
      (filter === "low" && item.confidence < 0.7),
  );
  const acceptedCount = detections.filter(
    (item) => item.decision === "accepted" || item.decision === "edited",
  ).length;

  const syntheticMarkers = useMemo(() => parseSyntheticMarkers(syntheticInput), [syntheticInput]);
  const syntheticEntries = useMemo<SyntheticEntry[]>(
    () =>
      syntheticMarkers.map((marker) => ({
        key: marker.token,
        token: marker.token,
        type: marker.type,
        value: marker.token,
        replacement: syntheticValues.get(marker.token) ?? "",
      })),
    [syntheticMarkers, syntheticValues],
  );
  const syntheticOutput = replaceSyntheticMarkers(syntheticInput, syntheticValues);

  const copyOutput = async () => {
    const currentDetections = freshDetections();
    if (textEditBaseline) commitDetections(currentDetections);
    const currentPending = currentDetections.filter((item) => item.decision === "pending").length;
    if (
      currentPending > 0 &&
      !(await askConfirm(
        `${currentPending} kandidaat${currentPending === 1 ? " is" : "en zijn"} nog niet beoordeeld. Toch kopiëren?`,
        "Onbeoordeelde kandidaten",
      ))
    )
      return;
    setClipboardStatus({ state: "copying" });
    try {
      const currentTokens = createTokens(currentDetections);
      await copyAndVerify(replaceAccepted(text, currentDetections, currentTokens));
      const count = currentDetections.filter(
        (item) => item.decision === "accepted" || item.decision === "edited",
      ).length;
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

  const acceptPending = async () => {
    const current = freshDetections();
    const open = current.filter((item) => item.decision === "pending");
    if (!open.length) {
      showToast("Geen openstaande kandidaten");
      return;
    }
    if (
      open.length >= 10 &&
      !(await askConfirm(
        `Dit accepteert ${open.length} openstaande kandidaten. Doorgaan?`,
        "Openstaande kandidaten accepteren",
      ))
    )
      return;
    commitDetections(
      current.map((item) =>
        item.decision === "pending" ? { ...item, decision: "accepted" as const } : item,
      ),
    );
    showToast(`${open.length} openstaande kandidaten geaccepteerd`);
  };

  const forceAll = async () => {
    const current = freshDetections();
    if (!current.length) {
      showToast("Geen kandidaten om te accepteren");
      return;
    }
    if (
      !(await askConfirm(
        "Dit overschrijft ook genegeerde kandidaten. Weet je het zeker?",
        "Forceer alle kandidaten",
      ))
    )
      return;
    commitDetections(current.map((item) => ({ ...item, decision: "accepted" as const })));
    showToast(`${current.length} kandidaten geaccepteerd`);
  };

  const generateStandardReplacements = () => {
    if (!syntheticMarkers.length) {
      showToast("Plak eerst de veilige tekst uit laag 1");
      return;
    }
    const generated = createSyntheticMap(
      syntheticMarkers.map((marker) => ({ type: marker.type, value: marker.token })),
      sessionSeed,
    );
    setSyntheticValues((current) => new Map([...current, ...generated]));
    showToast(`${generated.size} standaardvervanger${generated.size === 1 ? "" : "s"} gegenereerd`);
  };

  const generateOther = async (entry: SyntheticEntry) => {
    if (!ollamaModel.trim()) {
      setAiError("Vul eerst de naam van een lokaal Ollama-model in.");
      return;
    }
    setAiBusy(true);
    setAiError("");
    try {
      const replacement = await generateWithOllama(
        entry.token,
        otherFormatHint,
        ollamaModel.trim(),
      );
      setSyntheticValues((current) => new Map(current).set(entry.token, replacement));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Onbekende Ollama-fout";
      setAiError(
        `${errorMessage}. Controleer of Ollama draait en het model lokaal beschikbaar is.`,
      );
    } finally {
      setAiBusy(false);
    }
  };

  const copySynthetic = async () => {
    if (!syntheticEntries.length) {
      showToast("Er zijn nog geen markers om te vervangen");
      return;
    }
    if (syntheticEntries.some((entry) => !entry.replacement.trim())) {
      showToast("Genereer eerst alle vervangers voordat je kopieert");
      return;
    }
    setClipboardStatus({ state: "copying" });
    try {
      await copyAndVerify(syntheticOutput);
      const successMessage = `${syntheticEntries.length} synthetische vervangers gekopieerd`;
      setClipboardStatus({ state: "success", message: successMessage });
      showToast(successMessage);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "onbekende clipboardfout";
      setClipboardStatus({ state: "error", message: "Kopiëren mislukt" });
      console.error("Synthetic clipboard copy failed:", errorMessage);
      showToast("Kopiëren is niet gelukt");
    }
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
        <HomeScreen onStart={() => setScreen("review")} />
      ) : (
        <>
          <nav className="workspace-tabs" aria-label="Werklaag">
            <button
              type="button"
              className={screen === "review" ? "active" : ""}
              onClick={() => setScreen("review")}
            >
              01 Review
            </button>
            <button
              type="button"
              className={screen === "synthetic" ? "active" : ""}
              onClick={() => setScreen("synthetic")}
              disabled={!acceptedCount}
            >
              02 Synthetisch
            </button>
          </nav>
          {screen === "review" ? (
            <>
              <ReviewWorkspace
                text={text}
                detections={detections}
                filtered={filtered}
                tokens={tokens}
                filter={filter}
                pending={pending}
                selectedType={selectedType}
                textareaRef={textareaRef}
                onTextChange={onTextChange}
                onPaste={handlePaste}
                onScroll={(event) => {
                  const layer = event.currentTarget.previousElementSibling as HTMLElement;
                  layer.scrollTop = event.currentTarget.scrollTop;
                  layer.scrollLeft = event.currentTarget.scrollLeft;
                }}
                onFilterChange={setFilter}
                onAddManual={addManual}
                onUpdate={update}
                onPrompt={askPrompt}
                onToast={showToast}
              />
              <ReviewBottomBar
                typeOptions={typeOptions}
                selectedType={selectedType}
                acceptedCount={acceptedCount}
                clipboardStatus={clipboardStatus}
                onTypeChange={setSelectedType}
                onAcceptPending={() => void acceptPending()}
                onForceAll={() => void forceAll()}
                onCopy={() => void copyOutput()}
              />
            </>
          ) : (
            <SyntheticPanel
              entries={syntheticEntries}
              sourceText={syntheticInput}
              syntheticText={syntheticOutput}
              model={ollamaModel}
              formatHint={otherFormatHint}
              aiBusy={aiBusy}
              aiError={aiError}
              onSourceTextChange={(value) => {
                setSyntheticInput(value);
                setAiError("");
              }}
              onModelChange={setOllamaModel}
              onFormatHintChange={setOtherFormatHint}
              onGenerateAll={generateStandardReplacements}
              onGenerateOther={(entry) => void generateOther(entry)}
              onReplacementChange={(entry, value) =>
                setSyntheticValues((current) => new Map(current).set(entry.token, value))
              }
              onCopy={() => void copySynthetic()}
            />
          )}
        </>
      )}
      {feedbackVisible && (
        <div className="feedback-toast" role="status">
          <Check size={16} />
          <span>{message}</span>
        </div>
      )}
      <AppDialog dialog={dialog} />
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
