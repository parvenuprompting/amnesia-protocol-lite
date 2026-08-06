import { useEffect, useRef } from "react";
import type { DialogState } from "./dialog";

type AppDialogProps = {
  dialog: DialogState;
};

export function AppDialog({ dialog }: AppDialogProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dialog.open) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const modal = modalRef.current;
    const focusable = () =>
      Array.from(
        modal?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      );
    focusable()[0]?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        dialog.onCancel();
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusable();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, [dialog]);

  if (!dialog.open) return null;

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" data-testid="modal">
      <div className="modal" ref={modalRef}>
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
  );
}
