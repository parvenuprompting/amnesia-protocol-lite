import { useEffect, useMemo, useState } from "react";
import { Check, Eraser, EyeOff, RotateCcw, RotateCw } from "lucide-react";
import { AppDialog } from "./AppDialog";
import type { ClipboardClearDelay } from "./clipboard";
import { HomeScreen } from "./HomeScreen";
import { generateWithOllama } from "./ollama";
import { ReviewBottomBar } from "./ReviewBottomBar";
import { ReviewWorkspace } from "./ReviewWorkspace";
import { SyntheticPanel, type SyntheticEntry } from "./SyntheticPanel";
import {
  createSyntheticMap,
  parseSyntheticMarkers,
  replaceSyntheticMarkers,
  type SyntheticLocale,
} from "./synthetic";
import { useDialog } from "./useDialog";
import { useClipboard } from "./useClipboard";
import { reviewTypeOptions, useReviewState } from "./useReviewState";

const initialText =
  "Plak hier de tekst die je wilt controleren. Bijvoorbeeld: klantnummer 123456 of e-mail klant@example.com.";

function App() {
  const [screen, setScreen] = useState<"home" | "review" | "synthetic">("home");
  const [message, setMessage] = useState("Klaar voor beoordeling");
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const [toastKey, setToastKey] = useState(0);
  const [clipboardClearAfter, setClipboardClearAfter] = useState<ClipboardClearDelay>(60_000);
  const [syntheticInput, setSyntheticInput] = useState("");
  const [syntheticValues, setSyntheticValues] = useState<Map<string, string>>(new Map());
  const [ollamaModel, setOllamaModel] = useState("llama3.2");
  const [otherFormatHint, setOtherFormatHint] = useState("");
  const [syntheticLocale, setSyntheticLocale] = useState<SyntheticLocale>("nl");
  const [aiBusy, setAiBusy] = useState(false);
  const [aiError, setAiError] = useState("");
  const [sessionSeed] = useState(() => Date.now());
  const { dialog, askConfirm, askPrompt } = useDialog();

  const showToast = (msg: string) => {
    setMessage(msg);
    setToastKey((prev) => prev + 1);
    setFeedbackVisible(true);
  };

  const review = useReviewState({
    initialText,
    onToast: showToast,
    askConfirm,
  });
  const clipboard = useClipboard(showToast, clipboardClearAfter);

  useEffect(() => {
    if (!feedbackVisible) return;
    const timeout = window.setTimeout(() => setFeedbackVisible(false), 2400);
    return () => window.clearTimeout(timeout);
  }, [feedbackVisible, toastKey]);

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
    const { detections, output } = review.prepareOutput();
    const pending = detections.filter((item) => item.decision === "pending").length;
    if (
      pending > 0 &&
      !(await askConfirm(
        `${pending} kandidaat${pending === 1 ? " is" : "en zijn"} nog niet beoordeeld. Toch kopiëren?`,
        "Onbeoordeelde kandidaten",
      ))
    )
      return;
    const count = detections.filter(
      (item) => item.decision === "accepted" || item.decision === "edited",
    ).length;
    await clipboard.copy(output, `${count} markeringen gekopieerd`);
  };

  const generateStandardReplacements = () => {
    if (!syntheticMarkers.length) {
      showToast("Plak eerst de veilige tekst uit laag 1");
      return;
    }
    const generated = createSyntheticMap(
      syntheticMarkers.map((marker) => ({ type: marker.type, value: marker.token })),
      sessionSeed,
      syntheticLocale,
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
        undefined,
        syntheticLocale,
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
    await clipboard.copy(
      syntheticOutput,
      `${syntheticEntries.length} synthetische vervangers gekopieerd`,
    );
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
            onClick={review.undo}
            disabled={!review.history.length}
            aria-label="Undo"
          >
            <RotateCcw size={17} />
          </button>
          <button
            className="icon-button"
            onClick={review.redo}
            disabled={!review.future.length}
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
              disabled={!review.acceptedCount}
            >
              02 Synthetisch
            </button>
          </nav>
          {screen === "review" ? (
            <>
              <ReviewWorkspace
                text={review.text}
                detections={review.detections}
                filtered={review.filtered}
                tokens={review.tokens}
                filter={review.filter}
                pending={review.pending}
                selectedType={review.selectedType}
                textareaRef={review.textareaRef}
                onTextChange={review.onTextChange}
                onPaste={review.handlePaste}
                onScroll={(event) => {
                  const layer = event.currentTarget.previousElementSibling as HTMLElement;
                  layer.scrollTop = event.currentTarget.scrollTop;
                  layer.scrollLeft = event.currentTarget.scrollLeft;
                }}
                onFilterChange={review.setFilter}
                onAddManual={review.addManual}
                onUpdate={review.update}
                onPrompt={askPrompt}
                onToast={showToast}
              />
              <ReviewBottomBar
                typeOptions={reviewTypeOptions}
                selectedType={review.selectedType}
                acceptedCount={review.acceptedCount}
                clipboardStatus={clipboard.status}
                clipboardClearAfter={clipboardClearAfter}
                onTypeChange={review.setSelectedType}
                onAcceptPending={() => void review.acceptPending()}
                onForceAll={() => void review.forceAll()}
                onCopy={() => void copyOutput()}
                onClipboardClearAfterChange={setClipboardClearAfter}
              />
            </>
          ) : (
            <SyntheticPanel
              entries={syntheticEntries}
              sourceText={syntheticInput}
              syntheticText={syntheticOutput}
              model={ollamaModel}
              locale={syntheticLocale}
              formatHint={otherFormatHint}
              aiBusy={aiBusy}
              aiError={aiError}
              onSourceTextChange={(value) => {
                setSyntheticInput(value);
                setAiError("");
              }}
              onModelChange={setOllamaModel}
              onLocaleChange={setSyntheticLocale}
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
