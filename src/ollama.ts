import type { SyntheticLocale } from "./synthetic";
import type { ChatMessage } from "./chat";
import { buildReplacementUserMessage, REPLACEMENT_SYSTEM_PROMPT } from "./modelPrompt";
import { assertSyntheticValue } from "./syntheticSafety";

export type OllamaReplacementResponse = {
  message?: { content?: string; thinking?: string };
  thinking?: string;
};

export const OLLAMA_REQUEST_TIMEOUT_MS = 30_000;

async function fetchOllama(
  input: RequestInfo | URL,
  init: RequestInit,
  timeoutMs = OLLAMA_REQUEST_TIMEOUT_MS,
) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(input, { ...init, signal: controller.signal });
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new Error("Ollama antwoordde niet binnen 30 seconden");
    }
    throw error;
  } finally {
    window.clearTimeout(timeout);
  }
}

export type OllamaLocalModel = {
  name: string;
  size?: number;
  parameterSize?: string;
};

async function ollamaHttpError(response: Response): Promise<Error> {
  const body = await response.text();
  try {
    const payload = JSON.parse(body) as { error?: string };
    if (payload.error) return new Error(`Ollama: ${payload.error}`);
  } catch {
    // Keep the HTTP status when Ollama did not return JSON.
  }
  return new Error(`Ollama antwoordde met HTTP ${response.status}`);
}

export type OllamaPullProgress = {
  status: string;
  completed?: number;
  total?: number;
};

export type OllamaChatProgress = {
  content: string;
  done: boolean;
};

export type OllamaCatalogModel = {
  name: string;
  label: string;
  downloadSize: string;
  recommendedRam: string;
  description: string;
};

export const REPLACEMENT_OLLAMA_MODEL = "amnesia-qwen:4b";
export const PRIMARY_OLLAMA_MODEL = "mistral:latest";
export const LIGHTWEIGHT_CHAT_MODEL = "gemma3:1b";

export const OLLAMA_CATALOG: OllamaCatalogModel[] = [
  {
    name: "qwen3.5:4b",
    label: "Qwen 3.5 4B (basis)",
    downloadSize: "~3 GB",
    recommendedRam: "8 GB RAM",
    description: "Basismodel voor de lokale OTHER-modelproef; niet de getrainde Amnesia-adapter.",
  },
  {
    name: PRIMARY_OLLAMA_MODEL,
    label: "Mistral",
    downloadSize: "~4.1 GB",
    recommendedRam: "16 GB RAM",
    description: "Primair model voor chat en OTHER-vervangingen.",
  },
  {
    name: LIGHTWEIGHT_CHAT_MODEL,
    label: "Gemma 3 1B",
    downloadSize: "~0.8 GB",
    recommendedRam: "4 GB RAM",
    description: "Licht chatmodel voor kleinere Macs.",
  },
];

export async function generateWithOllama(
  marker: string,
  formatHint: string,
  model: string,
  endpoint = "http://localhost:11434/api/chat",
  locale: SyntheticLocale = "nl",
  seed?: number,
): Promise<string> {
  const request = buildReplacementRequest(marker, formatHint, model, locale, seed);

  const response = await fetchOllama(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw await ollamaHttpError(response);
  }

  const payload = (await response.json()) as OllamaReplacementResponse;
  if (payload.thinking?.trim() || payload.message?.thinking?.trim()) {
    throw new Error("Ollama gaf ondanks think:false een thinking-blok terug");
  }
  const generated = payload.message?.content ?? "";
  if (!generated) {
    throw new Error("Ollama gaf geen vervangende waarde terug");
  }
  if (/<\/?think(?:ing)?\b/i.test(generated)) {
    throw new Error("Ollama gaf ondanks think:false een thinking-blok terug");
  }
  return assertSyntheticValue(generated, locale);
}

export function buildReplacementRequest(
  marker: string,
  formatHint: string,
  model: string,
  locale: SyntheticLocale = "nl",
  seed?: number,
) {
  const options: {
    temperature: number;
    top_p: number;
    num_ctx: number;
    num_predict: number;
    seed?: number;
  } = { temperature: 0.1, top_p: 0.9, num_ctx: 2048, num_predict: 32 };
  if (seed !== undefined) options.seed = seed;
  return {
    model,
    messages: [
      { role: "system" as const, content: REPLACEMENT_SYSTEM_PROMPT },
      {
        role: "user" as const,
        content: buildReplacementUserMessage(marker, formatHint, locale),
      },
    ],
    think: false as const,
    stream: false as const,
    options,
  };
}

export async function listOllamaModels(
  endpoint = "http://localhost:11434/api/tags",
): Promise<OllamaLocalModel[]> {
  const response = await fetchOllama(endpoint, {});
  if (!response.ok) {
    throw new Error(`Ollama antwoordde met HTTP ${response.status}`);
  }
  const payload = (await response.json()) as {
    models?: Array<{
      name?: string;
      size?: number;
      remote_host?: string;
      details?: { parameter_size?: string };
    }>;
  };
  return (payload.models ?? [])
    .filter(
      (model): model is { name: string; size?: number; details?: { parameter_size?: string } } =>
        Boolean(model.name) && !model.remote_host,
    )
    .map((model) => ({
      name: model.name,
      size: model.size,
      parameterSize: model.details?.parameter_size,
    }));
}

export async function pullOllamaModel(
  model: string,
  onProgress?: (progress: OllamaPullProgress) => void,
  endpoint = "http://localhost:11434/api/pull",
): Promise<void> {
  const response = await fetchOllama(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ model, stream: true }),
  });
  if (!response.ok) throw await ollamaHttpError(response);
  if (!response.body) return;

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  while (true) {
    const { value, done } = await reader.read();
    buffer += decoder.decode(value ?? new Uint8Array(), { stream: !done });
    const lines = buffer.split("\n");
    buffer = lines.pop() ?? "";
    for (const line of lines) {
      if (!line.trim()) continue;
      const progress = JSON.parse(line) as OllamaPullProgress & { error?: string };
      if (progress.error) throw new Error(progress.error);
      onProgress?.(progress);
    }
    if (done) break;
  }
}

export async function chatWithOllama(
  model: string,
  messages: ChatMessage[],
  options: { numCtx: number; numPredict: number; temperature?: number },
  onProgress?: (progress: OllamaChatProgress) => void,
  endpoint = "http://localhost:11434/api/chat",
): Promise<string> {
  const response = await fetchOllama(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model,
      messages,
      think: false,
      stream: true,
      options: {
        num_ctx: options.numCtx,
        num_predict: options.numPredict,
        temperature: options.temperature ?? 0.2,
      },
    }),
  });
  if (!response.ok) throw await ollamaHttpError(response);
  if (!response.body) return "";

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let result = "";
  while (true) {
    const { value, done } = await reader.read();
    buffer += decoder.decode(value ?? new Uint8Array(), { stream: !done });
    const lines = buffer.split("\n");
    buffer = lines.pop() ?? "";
    for (const line of lines) {
      if (!line.trim()) continue;
      const payload = JSON.parse(line) as {
        message?: { content?: string };
        done?: boolean;
        error?: string;
      };
      if (payload.error) throw new Error(payload.error);
      const content = payload.message?.content ?? "";
      result += content;
      onProgress?.({ content, done: payload.done ?? false });
    }
    if (done) break;
  }
  return result.trim();
}
