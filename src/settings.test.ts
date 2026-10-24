import { describe, expect, it } from "vitest";
import { DEFAULT_SETTINGS, loadSettings, saveSettings } from "./settings";

function createStorage() {
  const values = new Map<string, string>();
  return {
    getItem: (key: string) => values.get(key) ?? null,
    setItem: (key: string, value: string) => {
      values.set(key, value);
    },
  } as unknown as Storage;
}

describe("persistent settings", () => {
  it("returns safe defaults when no settings have been saved", () => {
    expect(loadSettings(createStorage())).toEqual(DEFAULT_SETTINGS);
  });

  it("persists language and clipboard preferences", () => {
    const storage = createStorage();
    const settings = {
      syntheticLocale: "en" as const,
      clipboardClearAfter: 30_000 as const,
      replacementModel: "amnesia-qwen:4b",
      chatModel: "qwen3:4b",
    };
    saveSettings(settings, storage);
    expect(loadSettings(storage)).toEqual(settings);
  });

  it("migreert de oude chatdefault mistral:latest naar de huidige default", () => {
    const storage = createStorage();
    storage.setItem(
      "amnesia-protocol.settings.v1",
      JSON.stringify({ chatModel: "mistral:latest", replacementModel: "amnesia-qwen:4b" }),
    );
    const loaded = loadSettings(storage);
    expect(loaded.chatModel).toBe(DEFAULT_SETTINGS.chatModel);
    expect(loaded.replacementModel).toBe("amnesia-qwen:4b");
  });

  it("sanitizes invalid persisted values", () => {
    const storage = createStorage();
    storage.setItem(
      "amnesia-protocol.settings.v1",
      JSON.stringify({ syntheticLocale: "fr", clipboardClearAfter: 123 }),
    );
    expect(loadSettings(storage)).toEqual(DEFAULT_SETTINGS);
  });
});
