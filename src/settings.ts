import { useCallback, useEffect, useState } from "react";
import type { ClipboardClearDelay } from "./clipboard";
import type { SyntheticLocale } from "./synthetic";

export type AppSettings = {
  preferredModel: string;
  syntheticLocale: SyntheticLocale;
  clipboardClearAfter: ClipboardClearDelay;
};

export const DEFAULT_SETTINGS: AppSettings = {
  preferredModel: "llama3.2",
  syntheticLocale: "nl",
  clipboardClearAfter: 60_000,
};

const SETTINGS_KEY = "amnesia-protocol.settings.v1";

export function loadSettings(
  storage: Storage | null = typeof localStorage === "undefined" ? null : localStorage,
): AppSettings {
  if (!storage) return DEFAULT_SETTINGS;
  try {
    const parsed = JSON.parse(
      storage.getItem(SETTINGS_KEY) ?? "null",
    ) as Partial<AppSettings> | null;
    return {
      ...DEFAULT_SETTINGS,
      ...parsed,
      clipboardClearAfter: [0, 30_000, 60_000, 300_000].includes(
        parsed?.clipboardClearAfter ?? DEFAULT_SETTINGS.clipboardClearAfter,
      )
        ? ((parsed?.clipboardClearAfter ??
            DEFAULT_SETTINGS.clipboardClearAfter) as ClipboardClearDelay)
        : DEFAULT_SETTINGS.clipboardClearAfter,
      syntheticLocale: parsed?.syntheticLocale === "en" ? "en" : "nl",
      preferredModel:
        typeof parsed?.preferredModel === "string" && parsed.preferredModel.trim()
          ? parsed.preferredModel
          : DEFAULT_SETTINGS.preferredModel,
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
