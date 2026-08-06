import { useEffect, useRef, useState } from "react";
import {
  clearClipboardIfMatches,
  copyAndVerify,
  type ClipboardClearDelay,
  type ClipboardStatus,
} from "./clipboard";

export function useClipboard(onToast: (message: string) => void, clearAfter: ClipboardClearDelay) {
  const [status, setStatus] = useState<ClipboardStatus>({ state: "idle" });
  const clearTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (clearTimerRef.current !== null) window.clearTimeout(clearTimerRef.current);
    };
  }, []);

  const copy = async (text: string, successMessage: string) => {
    if (clearTimerRef.current !== null) window.clearTimeout(clearTimerRef.current);
    setStatus({ state: "copying" });
    try {
      await copyAndVerify(text);
      setStatus({ state: "success", message: successMessage });
      onToast(successMessage);
      if (clearAfter > 0) {
        clearTimerRef.current = window.setTimeout(async () => {
          try {
            if (await clearClipboardIfMatches(text)) onToast("Klembord automatisch geleegd");
          } catch (error) {
            console.error("Clipboard clear failed:", error);
          }
        }, clearAfter);
      }
      return true;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "onbekende clipboardfout";
      console.error("Clipboard copy failed:", errorMessage);
      setStatus({ state: "error", message: "Kopiëren mislukt" });
      onToast("Kopiëren is niet gelukt");
      return false;
    }
  };

  return { status, copy };
}
