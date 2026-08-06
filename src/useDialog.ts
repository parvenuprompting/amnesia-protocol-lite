import { useState } from "react";
import type { DialogState } from "./dialog";

export function useDialog() {
  const [dialog, setDialog] = useState<DialogState>({ open: false });

  const askConfirm = (message: string, title = "Bevestigen") =>
    new Promise<boolean>((resolve) => {
      setDialog({
        open: true,
        title,
        message,
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

  const askPrompt = (message: string, defaultValue = "") =>
    new Promise<string | null>((resolve) => {
      setDialog({
        open: true,
        title: "Waarde aanpassen",
        message,
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

  return { dialog, askConfirm, askPrompt };
}
