import { useState } from "react";
import { copyAndVerify, type ClipboardStatus } from "./clipboard";

export function useClipboard(onToast: (message: string) => void) {
  const [status, setStatus] = useState<ClipboardStatus>({ state: "idle" });

  const copy = async (text: string, successMessage: string) => {
    setStatus({ state: "copying" });
    try {
      await copyAndVerify(text);
      setStatus({ state: "success", message: successMessage });
      onToast(successMessage);
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
