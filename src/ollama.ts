export type OllamaGenerateResponse = {
  response?: string;
};

export async function generateWithOllama(
  value: string,
  formatHint: string,
  model: string,
  endpoint = "http://localhost:11434/api/generate",
): Promise<string> {
  const formatInstruction = formatHint.trim()
    ? `Gebruik dit gewenste formaat of deze beschrijving: ${formatHint.trim()}`
    : "Behoud het soort waarde en de globale vorm van het origineel.";
  const prompt = [
    "Vervang de volgende gevoelige waarde door een realistische, volledig fictieve Nederlandse waarde.",
    "Geef uitsluitend de vervangende waarde terug, zonder uitleg, aanhalingstekens of opmaak.",
    formatInstruction,
    `Originele waarde: ${value}`,
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
): Promise<string[]> {
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error(`Ollama antwoordde met HTTP ${response.status}`);
  }
  const payload = (await response.json()) as {
    models?: Array<{ name?: string }>;
  };
  return (payload.models ?? [])
    .map((model) => model.name)
    .filter((name): name is string => Boolean(name));
}
