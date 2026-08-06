import {
  readText as tauriReadText,
  writeText as tauriWriteText,
} from "@tauri-apps/plugin-clipboard-manager";

export type ClipboardApi = {
  writeText: (text: string) => Promise<void>;
  readText: () => Promise<string>;
};

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
