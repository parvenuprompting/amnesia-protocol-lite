import type { SyntheticLocale } from "./synthetic";
import type { ChatMessage } from "./chat";

export type OllamaGenerateResponse = {
  response?: string;
};

export type OllamaLocalModel = {
  name: string;
  size?: number;
  parameterSize?: string;
};

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

export const OLLAMA_CATALOG: OllamaCatalogModel[] = [
  {
    name: "llama3.2",
    label: "Llama 3.2",
    downloadSize: "~2 GB",
    recommendedRam: "8 GB RAM",
    description: "Klein en geschikt als standaardmodel voor korte vervangingen.",
  },
  {
    name: "qwen2.5:7b",
    label: "Qwen 2.5 7B",
    downloadSize: "~4.7 GB",
    recommendedRam: "16 GB RAM",
    description: "Sterk meertalig model, maar merkbaar zwaarder.",
  },
  {
    name: "mistral:7b",
    label: "Mistral 7B",
    downloadSize: "~4.1 GB",
    recommendedRam: "16 GB RAM",
    description: "Goede algemene kwaliteit met hogere geheugendruk.",
  },
  {
    name: "llama3.1:8b",
    label: "Llama 3.1 8B",
    downloadSize: "~4.9 GB",
    recommendedRam: "16 GB RAM",
    description: "Groter model voor rijkere context, niet ideaal voor oudere Macs.",
  },
];

export async function generateWithOllama(
  marker: string,
  formatHint: string,
  model: string,
  endpoint = "http://localhost:11434/api/generate",
  locale: SyntheticLocale = "nl",
): Promise<string> {
  const language = locale === "en" ? "English" : "Nederlands";
  const formatInstruction = formatHint.trim()
    ? `Gebruik dit gewenste formaat of deze beschrijving: ${formatHint.trim()}`
    : "Behoud het soort waarde en de globale vorm van het origineel.";
  const prompt = [
    `Genereer voor de volgende marker een realistische, volledig fictieve waarde in ${language}.`,
    "Geef uitsluitend de vervangende waarde terug, zonder uitleg, aanhalingstekens of opmaak.",
    formatInstruction,
    `Marker: ${marker}`,
  ].join("\n");

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ model, prompt, stream: false }),
  });

  if (!response.ok) {
    throw new Error(`Ollama antwoordde met HTTP ${response.status}`);
  }

  const payload = (await response.json()) as OllamaGenerateResponse;
  const generated = payload.response?.trim();
  if (!generated) {
    throw new Error("Ollama gaf geen vervangende waarde terug");
  }
  return generated.replace(/^['"`]|['"`]$/g, "").trim();
}

export async function listOllamaModels(
  endpoint = "http://localhost:11434/api/tags",
): Promise<OllamaLocalModel[]> {
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error(`Ollama antwoordde met HTTP ${response.status}`);
  }
  const payload = (await response.json()) as {
    models?: Array<{ name?: string; size?: number; details?: { parameter_size?: string } }>;
  };
  return (payload.models ?? [])
    .filter(
      (model): model is { name: string; size?: number; details?: { parameter_size?: string } } =>
        Boolean(model.name),
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
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ model, stream: true }),
  });
  if (!response.ok) throw new Error(`Ollama antwoordde met HTTP ${response.status}`);
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
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model,
      messages,
      stream: true,
      options: {
        num_ctx: options.numCtx,
        num_predict: options.numPredict,
        temperature: options.temperature ?? 0.2,
      },
    }),
  });
  if (!response.ok) throw new Error(`Ollama antwoordde met HTTP ${response.status}`);
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
