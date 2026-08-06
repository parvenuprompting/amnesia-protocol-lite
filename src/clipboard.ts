import {
  readText as tauriReadText,
  writeText as tauriWriteText,
} from "@tauri-apps/plugin-clipboard-manager";

export type ClipboardApi = {
  writeText: (text: string) => Promise<void>;
  readText: () => Promise<string>;
};

export type ClipboardStatus =
  | { state: "idle" }
  | { state: "copying" }
  | { state: "success"; message: string }
  | { state: "error"; message: string };

export type ClipboardClearDelay = 0 | 30_000 | 60_000 | 300_000;

export const CLIPBOARD_CLEAR_OPTIONS: Array<[ClipboardClearDelay, string]> = [
  [0, "Nooit"],
  [30_000, "Na 30 seconden"],
  [60_000, "Na 60 seconden"],
  [300_000, "Na 5 minuten"],
];

export function isTauriRuntime() {
  return typeof window !== "undefined" && "__TAURI_INTERNALS__" in window;
}

export function getClipboardApi(): ClipboardApi {
  if (isTauriRuntime()) return { writeText: tauriWriteText, readText: tauriReadText };
  if (typeof navigator !== "undefined" && navigator.clipboard) return navigator.clipboard;
  throw new Error("Clipboard API is niet beschikbaar");
}

export async function copyAndVerify(text: string, api = getClipboardApi()) {
  await api.writeText(text);
  const copied = await api.readText();
  if (copied !== text) throw new Error("Clipboard readback komt niet overeen");
}

export async function clearClipboardIfMatches(expected: string, api = getClipboardApi()) {
  if ((await api.readText()) !== expected) return false;
  await copyAndVerify("", api);
  return true;
}
