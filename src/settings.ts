import { useCallback, useEffect, useState } from "react";
import type { ClipboardClearDelay } from "./clipboard";
import type { SyntheticLocale } from "./synthetic";
import { PRIMARY_OLLAMA_MODEL, REPLACEMENT_OLLAMA_MODEL } from "./ollama";

export type AppSettings = {
  syntheticLocale: SyntheticLocale;
  clipboardClearAfter: ClipboardClearDelay;
  replacementModel: string;
  chatModel: string;
};

export const DEFAULT_SETTINGS: AppSettings = {
  syntheticLocale: "nl",
  clipboardClearAfter: 60_000,
  replacementModel: REPLACEMENT_OLLAMA_MODEL,
  chatModel: PRIMARY_OLLAMA_MODEL,
};

const SETTINGS_KEY = "amnesia-protocol.settings.v1";

function savedModel(value: unknown, fallback: string): string {
  return typeof value === "string" && /^[a-zA-Z0-9][a-zA-Z0-9._:/-]{0,127}$/.test(value)
    ? value
    : fallback;
}

export function loadSettings(
  storage: Storage | null = typeof localStorage === "undefined" ? null : localStorage,
): AppSettings {
  if (!storage) return DEFAULT_SETTINGS;
  try {
    const parsed = JSON.parse(
      storage.getItem(SETTINGS_KEY) ?? "null",
    ) as Partial<AppSettings> | null;
    return {
      syntheticLocale: parsed?.syntheticLocale === "en" ? "en" : DEFAULT_SETTINGS.syntheticLocale,
      clipboardClearAfter: [0, 30_000, 60_000, 300_000].includes(
        parsed?.clipboardClearAfter ?? DEFAULT_SETTINGS.clipboardClearAfter,
      )
        ? ((parsed?.clipboardClearAfter ??
            DEFAULT_SETTINGS.clipboardClearAfter) as ClipboardClearDelay)
        : DEFAULT_SETTINGS.clipboardClearAfter,
      replacementModel: savedModel(parsed?.replacementModel, DEFAULT_SETTINGS.replacementModel),
      chatModel: savedModel(parsed?.chatModel, DEFAULT_SETTINGS.chatModel),
    };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function saveSettings(
  settings: AppSettings,
  storage: Storage | null = typeof localStorage === "undefined" ? null : localStorage,
) {
  storage?.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

export function useAppSettings() {
  const [settings, setSettings] = useState<AppSettings>(() => loadSettings());

  useEffect(() => {
    saveSettings(settings);
  }, [settings]);

  const updateSettings = useCallback((patch: Partial<AppSettings>) => {
    setSettings((current) => ({ ...current, ...patch }));
  }, []);

  return { settings, updateSettings };
}
