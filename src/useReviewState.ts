import { useEffect, useMemo, useRef, useState, type ClipboardEvent } from "react";
import { detect } from "./detectors";
import { htmlToPlainText, insertTextAtSelection } from "./html";
import {
  applyAction,
  mergeDetections,
  replaceAccepted,
  type ReviewAction,
  type ReviewSnapshot,
} from "./review";
import type { Detection, DetectionType } from "./types";
import { TYPE_LABELS } from "./types";

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

type UseReviewStateOptions = {
  initialText: string;
  onToast: (message: string) => void;
  askConfirm: (message: string, title?: string) => Promise<boolean>;
  detector?: (text: string) => Detection[];
};

export function useReviewState({
  initialText,
  onToast,
  askConfirm,
  detector = detect,
}: UseReviewStateOptions) {
  const [text, setText] = useState(initialText);
  const [detections, setDetections] = useState<Detection[]>(() => detector(initialText));
  const [detectText, setDetectText] = useState<(text: string) => Detection[]>(() => detector);
  const [history, setHistory] = useState<ReviewSnapshot[]>([]);
  const [future, setFuture] = useState<ReviewSnapshot[]>([]);
  const [textEditBaseline, setTextEditBaseline] = useState<ReviewSnapshot | null>(null);
  const [filter, setFilter] = useState("all");
  const [selectedType, setSelectedType] = useState<DetectionType>("person");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const textEditVersionRef = useRef(0);

  useEffect(() => {
    if (!textEditBaseline) return;
    const version = textEditVersionRef.current;
    const timeout = window.setTimeout(() => {
      if (version !== textEditVersionRef.current) return;
      setHistory((items) => [...items, textEditBaseline]);
      setFuture([]);
      setDetections(mergeDetections(textEditBaseline.detections, detectText(text), text));
      setTextEditBaseline(null);
      onToast("Nieuwe tekst gedetecteerd");
    }, 200);
    return () => window.clearTimeout(timeout);
  }, [detectText, onToast, text, textEditBaseline]);

  const freshDetections = () =>
    textEditBaseline
      ? mergeDetections(textEditBaseline.detections, detectText(text), text)
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

  const handlePaste = (event: ClipboardEvent<HTMLTextAreaElement>) => {
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
      onToast("Selecteer eerst tekst in het invoerveld");
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
    commitDetections([...freshDetections(), manual].sort((a, b) => a.start - b.start));
    onToast("Handmatige markering toegevoegd");
  };

  const undo = () => {
    if (textEditBaseline) {
      textEditVersionRef.current += 1;
      setText(textEditBaseline.text);
      setDetections(textEditBaseline.detections);
      setTextEditBaseline(null);
      onToast("Tekstwijziging ongedaan gemaakt");
      return;
    }
    const previous = history.at(-1);
    if (!previous) return;
    setFuture((items) => [...items, { text, detections }]);
    setText(previous.text);
    setDetections(previous.detections);
    setTextEditBaseline(null);
    setHistory((items) => items.slice(0, -1));
    onToast("Actie ongedaan gemaakt");
  };

  const redo = () => {
    const next = future.at(-1);
    if (!next) return;
    setHistory((items) => [...items, { text, detections }]);
    setText(next.text);
    setDetections(next.detections);
    setTextEditBaseline(null);
    setFuture((items) => items.slice(0, -1));
    onToast("Actie opnieuw toegepast");
  };

  const resetDocument = (nextText: string, nextDetector: (text: string) => Detection[]) => {
    textEditVersionRef.current += 1;
    setDetectText(() => nextDetector);
    setText(nextText);
    setDetections(nextDetector(nextText));
    setHistory([]);
    setFuture([]);
    setTextEditBaseline(null);
  };

  const acceptPending = async () => {
    const current = freshDetections();
    const open = current.filter((item) => item.decision === "pending");
    if (!open.length) {
      onToast("Geen openstaande kandidaten");
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
    onToast(`${open.length} openstaande kandidaten geaccepteerd`);
  };

  const forceAll = async () => {
    const current = freshDetections();
    if (!current.length) {
      onToast("Geen kandidaten om te accepteren");
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
    onToast(`${current.length} kandidaten geaccepteerd`);
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

  const prepareOutput = () => {
    const currentDetections = freshDetections();
    if (textEditBaseline) commitDetections(currentDetections);
    const currentTokens = createTokens(currentDetections);
    return {
      text,
      detections: currentDetections,
      output: replaceAccepted(text, currentDetections, currentTokens),
    };
  };

  return {
    text,
    detections,
    history,
    future,
    filter,
    selectedType,
    textareaRef,
    tokens,
    pending,
    filtered,
    acceptedCount,
    onTextChange,
    handlePaste,
    addManual,
    update,
    undo,
    redo,
    acceptPending,
    forceAll,
    resetDocument,
    prepareOutput,
    setFilter,
    setSelectedType,
  };
}

export const reviewTypeOptions = Object.entries(TYPE_LABELS) as [DetectionType, string][];
