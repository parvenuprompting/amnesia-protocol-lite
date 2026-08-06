import { useCallback, useEffect, useMemo, useState } from "react";
import { Check, Eraser, EyeOff, RotateCcw, RotateCw, Settings } from "lucide-react";
import { AppDialog } from "./AppDialog";
import {
  CHAT_MAX_CONTEXT_TOKENS,
  CHAT_MAX_OUTPUT_TOKENS,
  CHAT_MAX_REQUESTS_PER_WINDOW,
  CHAT_RATE_WINDOW_MS,
  estimateTokens,
  getChatRateLimitMessage,
  trimChatHistory,
  type ChatMessage,
} from "./chat";
import { ChatPanel } from "./ChatPanel";
import { HomeScreen } from "./HomeScreen";
import {
  generateWithOllama,
  chatWithOllama,
  listOllamaModels,
  OLLAMA_CATALOG,
  PRIMARY_OLLAMA_MODEL,
  pullOllamaModel,
  resolveOllamaModel,
  type OllamaPullProgress,
} from "./ollama";
import { ReviewBottomBar } from "./ReviewBottomBar";
import { ReviewWorkspace } from "./ReviewWorkspace";
import { SettingsPanel } from "./SettingsPanel";
import { SyntheticPanel, type SyntheticEntry } from "./SyntheticPanel";
import { createSyntheticMap, parseSyntheticMarkers, replaceSyntheticMarkers } from "./synthetic";
import { useDialog } from "./useDialog";
import { useClipboard } from "./useClipboard";
import { reviewTypeOptions, useReviewState } from "./useReviewState";
import { useAppSettings } from "./settings";

const initialText =
  "Plak hier de tekst die je wilt controleren. Bijvoorbeeld: klantnummer 123456 of e-mail klant@example.com.";

function App() {
  const [screen, setScreen] = useState<"home" | "review" | "synthetic" | "chat">("home");
  const { settings, updateSettings } = useAppSettings();
  const [message, setMessage] = useState("Klaar voor beoordeling");
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const [toastKey, setToastKey] = useState(0);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [syntheticInput, setSyntheticInput] = useState("");
  const [syntheticValues, setSyntheticValues] = useState<Map<string, string>>(new Map());
  const [otherFormatHint, setOtherFormatHint] = useState("");
  const [localModels, setLocalModels] = useState<{ name: string; parameterSize?: string }[]>([]);
  const [ollamaStatus, setOllamaStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [ollamaError, setOllamaError] = useState("");
  const [downloadModel, setDownloadModel] = useState(OLLAMA_CATALOG[0].name);
  const [pullBusy, setPullBusy] = useState(false);
  const [pullProgress, setPullProgress] = useState("");
  const [aiBusy, setAiBusy] = useState(false);
  const [aiError, setAiError] = useState("");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [chatInput, setChatInput] = useState("");
  const [chatContext, setChatContext] = useState("");
  const [chatSentAt, setChatSentAt] = useState<number[]>([]);
  const [chatBusy, setChatBusy] = useState(false);
  const [chatError, setChatError] = useState("");
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
  const clipboard = useClipboard(showToast, settings.clipboardClearAfter);
  const hardwareInfo = useMemo(() => {
    const cores = navigator.hardwareConcurrency
      ? `${navigator.hardwareConcurrency} CPU-cores`
      : "hardware onbekend";
    const deviceMemory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
    const memory = deviceMemory
      ? `${deviceMemory} GB RAM gerapporteerd`
      : "RAM niet beschikbaar via macOS-webview";
    return `${cores}, ${memory}`;
  }, []);
  const activeModel = useMemo(() => resolveOllamaModel(localModels), [localModels]);

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
      settings.syntheticLocale,
    );
    setSyntheticValues((current) => new Map([...current, ...generated]));
    showToast(`${generated.size} standaardvervanger${generated.size === 1 ? "" : "s"} gegenereerd`);
  };

  const generateOther = async (entry: SyntheticEntry) => {
    if (!activeModel) {
      setAiError("Installeer eerst Mistral of Gemma 3 1B via Instellingen.");
      return;
    }
    setAiBusy(true);
    setAiError("");
    try {
      const replacement = await generateWithOllama(
        entry.token,
        otherFormatHint,
        activeModel.name,
        undefined,
        settings.syntheticLocale,
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

  const refreshModels = useCallback(async () => {
    setOllamaStatus("loading");
    setOllamaError("");
    try {
      const models = await listOllamaModels();
      setLocalModels(models);
      setOllamaStatus("ready");
    } catch (error) {
      setOllamaStatus("error");
      setOllamaError(
        error instanceof Error ? error.message : "Lokale modellen konden niet worden opgehaald",
      );
    }
  }, []);

  useEffect(() => {
    if (!settingsOpen) return;
    void refreshModels();
  }, [refreshModels, settingsOpen]);

  useEffect(() => {
    if (screen !== "chat" || ollamaStatus !== "idle") return;
    void refreshModels();
  }, [ollamaStatus, refreshModels, screen]);

  const pullModel = async () => {
    const selected = OLLAMA_CATALOG.find((item) => item.name === downloadModel);
    if (!selected) return;
    if (
      !(await askConfirm(
        `${selected.label} downloadt ongeveer ${selected.downloadSize} en gebruikt aanbevolen ${selected.recommendedRam}. Dit vereist een internetverbinding via Ollama en lokale schijfruimte. Doorgaan?`,
        "Lokaal Ollama-model downloaden",
      ))
    )
      return;
    setPullBusy(true);
    setPullProgress("starten");
    setOllamaError("");
    try {
      await pullOllamaModel(downloadModel, (progress: OllamaPullProgress) => {
        const percentage =
          progress.total && progress.completed
            ? ` ${Math.round((progress.completed / progress.total) * 100)}%`
            : "";
        setPullProgress(`${progress.status}${percentage}`);
      });
      await refreshModels();
      showToast(`${downloadModel} is lokaal geïnstalleerd`);
    } catch (error) {
      setOllamaStatus("error");
      setOllamaError(error instanceof Error ? error.message : "Modeldownload mislukt");
    } finally {
      setPullBusy(false);
      setPullProgress("");
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

  const attachChatContext = () => {
    if (!syntheticEntries.length || syntheticEntries.some((entry) => !entry.replacement.trim())) {
      showToast("Genereer eerst volledige synthetische output");
      return;
    }
    setChatContext(syntheticOutput);
    showToast("Synthetische output als chatcontext toegevoegd");
  };

  const sendChat = async () => {
    const question = chatInput.trim();
    if (!question || chatBusy) return;
    const now = Date.now();
    const rateError = getChatRateLimitMessage(chatSentAt, now);
    if (rateError) {
      setChatError(rateError);
      return;
    }
    if (estimateTokens(question) > CHAT_MAX_CONTEXT_TOKENS) {
      setChatError(
        `Je vraag is te lang. Gebruik maximaal ongeveer ${CHAT_MAX_CONTEXT_TOKENS} tokens.`,
      );
      return;
    }

    const userMessage: ChatMessage = { role: "user", content: question };
    const systemContent = [
      "Je bent een lokale, behulpzame assistent in Amnesia Protocol.",
      "Geef beknopte, duidelijke antwoorden. Verzin geen persoonlijke gegevens.",
      chatContext
        ? `De gebruiker heeft deze synthetische tekst als context toegevoegd:\n${chatContext}`
        : "Er is geen documentcontext toegevoegd.",
    ].join("\n\n");
    const history = trimChatHistory(
      chatMessages,
      CHAT_MAX_CONTEXT_TOKENS - estimateTokens(systemContent),
    );
    const requestMessages: ChatMessage[] = [
      { role: "system", content: systemContent },
      ...history,
      userMessage,
    ];
    setChatInput("");
    setChatError("");
    setChatSentAt((items) => [
      ...items.filter((timestamp) => now - timestamp < CHAT_RATE_WINDOW_MS),
      now,
    ]);
    setChatMessages((items) => [...items, userMessage, { role: "assistant", content: "" }]);
    setChatBusy(true);
    let answer = "";
    try {
      await chatWithOllama(
        activeModel?.name ?? PRIMARY_OLLAMA_MODEL,
        requestMessages,
        { numCtx: CHAT_MAX_CONTEXT_TOKENS, numPredict: CHAT_MAX_OUTPUT_TOKENS },
        (progress) => {
          answer += progress.content;
          setChatMessages((items) => {
            const next = [...items];
            next[next.length - 1] = { role: "assistant", content: answer };
            return next;
          });
        },
      );
    } catch (error) {
      setChatMessages((items) => items.slice(0, -1));
      setChatError(error instanceof Error ? error.message : "Chatantwoord mislukt");
    } finally {
      setChatBusy(false);
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
          <button
            className="icon-button"
            onClick={() => setSettingsOpen(true)}
            aria-label="Instellingen"
            title="Instellingen"
          >
            <Settings size={16} />
          </button>
        </div>
      </header>
      {screen === "home" ? (
        <HomeScreen onStart={() => setScreen("review")} onStartChat={() => setScreen("chat")} />
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
            <button
              type="button"
              className={screen === "chat" ? "active" : ""}
              onClick={() => setScreen("chat")}
            >
              03 Chat
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
                onTypeChange={review.setSelectedType}
                onAcceptPending={() => void review.acceptPending()}
                onForceAll={() => void review.forceAll()}
                onCopy={() => void copyOutput()}
              />
            </>
          ) : screen === "synthetic" ? (
            <SyntheticPanel
              entries={syntheticEntries}
              sourceText={syntheticInput}
              syntheticText={syntheticOutput}
              formatHint={otherFormatHint}
              aiBusy={aiBusy}
              aiError={aiError}
              onSourceTextChange={(value) => {
                setSyntheticInput(value);
                setAiError("");
              }}
              onFormatHintChange={setOtherFormatHint}
              onGenerateAll={generateStandardReplacements}
              onGenerateOther={(entry) => void generateOther(entry)}
              onReplacementChange={(entry, value) =>
                setSyntheticValues((current) => new Map(current).set(entry.token, value))
              }
              onCopy={() => void copySynthetic()}
            />
          ) : (
            <ChatPanel
              messages={chatMessages}
              input={chatInput}
              model={activeModel?.name ?? "Geen lokaal model"}
              contextAttached={Boolean(chatContext)}
              contextLength={chatContext.length}
              rateStatus={`${chatSentAt.filter((timestamp) => Date.now() - timestamp < CHAT_RATE_WINDOW_MS).length}/${CHAT_MAX_REQUESTS_PER_WINDOW} vragen deze minuut`}
              busy={chatBusy}
              error={chatError}
              onInputChange={(value) => {
                setChatInput(value);
                setChatError("");
              }}
              onSend={() => void sendChat()}
              onClear={() => {
                setChatMessages([]);
                setChatError("");
              }}
              onAttachContext={attachChatContext}
              onDetachContext={() => setChatContext("")}
              onCopyMessage={(content) => void clipboard.copy(content, "Chatantwoord gekopieerd")}
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
      {settingsOpen && (
        <SettingsPanel
          syntheticLocale={settings.syntheticLocale}
          clipboardClearAfter={settings.clipboardClearAfter}
          localModels={localModels}
          ollamaStatus={ollamaStatus}
          ollamaError={ollamaError}
          downloadModel={downloadModel}
          pullBusy={pullBusy}
          pullProgress={pullProgress}
          hardwareInfo={hardwareInfo}
          onLocaleChange={(value) => updateSettings({ syntheticLocale: value })}
          onClipboardClearAfterChange={(value) => updateSettings({ clipboardClearAfter: value })}
          onRefreshModels={() => void refreshModels()}
          onDownloadModelChange={setDownloadModel}
          onPullModel={() => void pullModel()}
          onClose={() => setSettingsOpen(false)}
        />
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
