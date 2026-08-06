import { afterEach, describe, expect, it, vi } from "vitest";
import {
  chatWithOllama,
  generateWithOllama,
  listOllamaModels,
  pullOllamaModel,
  resolveOllamaModel,
  normalizeGeneratedValue,
} from "./ollama";

describe("generateWithOllama", () => {
  afterEach(() => vi.restoreAllMocks());

  it("sends only the synthetic marker and format hint to the local model", async () => {
    const fetchMock = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValue(new Response(JSON.stringify({ response: "PROJ-4821" }), { status: 200 }));

    const result = await generateWithOllama(
      "OTHER_1",
      "intern projectnummer met prefix PROJ-",
      "llama3.2",
    );
    const request = JSON.parse(String(fetchMock.mock.calls[0][1]?.body));

    expect(result).toBe("PROJ-4821");
    expect(fetchMock.mock.calls[0][0]).toBe("http://localhost:11434/api/generate");
    expect(request.model).toBe("llama3.2");
    expect(request.prompt).toContain("Marker: OTHER_1");
    expect(request.prompt).toContain("PROJ-");
    expect(request.prompt).not.toContain("klant@example.com");
  });

  it("uses the selected English language in the local prompt", async () => {
    const fetchMock = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValue(
        new Response(JSON.stringify({ response: "Fictional Project" }), { status: 200 }),
      );

    await generateWithOllama("OTHER_1", "fictional project name", "llama3.2", undefined, "en");
    const request = JSON.parse(String(fetchMock.mock.calls[0][1]?.body));

    expect(request.prompt).toContain("in English");
  });

  it("lists local models from Ollama", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response(
        JSON.stringify({
          models: [
            { name: "llama3.2", size: 2_000_000_000, details: { parameter_size: "3B" } },
            { name: "cloud-model:cloud", remote_host: "https://ollama.com:443" },
          ],
        }),
        { status: 200 },
      ),
    );

    await expect(listOllamaModels()).resolves.toEqual([
      { name: "llama3.2", size: 2_000_000_000, parameterSize: "3B" },
    ]);
  });

  it("reports streamed model download progress", async () => {
    const stream = new ReadableStream({
      start(controller) {
        controller.enqueue(
          new TextEncoder().encode('{"status":"downloading","completed":50,"total":100}\n'),
        );
        controller.enqueue(new TextEncoder().encode('{"status":"success"}\n'));
        controller.close();
      },
    });
    vi.spyOn(globalThis, "fetch").mockResolvedValue(new Response(stream, { status: 200 }));
    const progress: string[] = [];

    await pullOllamaModel("llama3.2", (item) => progress.push(item.status));
    expect(progress).toEqual(["downloading", "success"]);
  });

  it("streams chat response content to the caller", async () => {
    const stream = new ReadableStream({
      start(controller) {
        controller.enqueue(
          new TextEncoder().encode('{"message":{"content":"Hallo"},"done":false}\n'),
        );
        controller.enqueue(
          new TextEncoder().encode('{"message":{"content":" wereld"},"done":true}\n'),
        );
        controller.close();
      },
    });
    vi.spyOn(globalThis, "fetch").mockResolvedValue(new Response(stream, { status: 200 }));
    const chunks: string[] = [];

    await expect(
      chatWithOllama(
        "llama3.2",
        [{ role: "user", content: "Hallo" }],
        { numCtx: 4000, numPredict: 512 },
        (progress) => chunks.push(progress.content),
      ),
    ).resolves.toBe("Hallo wereld");
    expect(chunks).toEqual(["Hallo", " wereld"]);
  });

  it("preserves the Ollama error when a model is missing", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response(JSON.stringify({ error: "model 'llama3.2' not found" }), { status: 404 }),
    );

    await expect(
      chatWithOllama("llama3.2", [{ role: "user", content: "Hallo" }], {
        numCtx: 4000,
        numPredict: 512,
      }),
    ).rejects.toThrow("model 'llama3.2' not found");
  });

  it("normalizes explanatory and fenced OTHER responses", () => {
    expect(normalizeGeneratedValue("Hier is de waarde: `PROJ-4821`\nGebruik deze waarde.")).toBe(
      "PROJ-4821",
    );
    expect(normalizeGeneratedValue("```text\nfictional@example.com\n``` ")).toBe(
      "fictional@example.com",
    );
  });

  it("accepts Dolphin Mistral as a primary Mistral-family model", () => {
    expect(
      resolveOllamaModel([{ name: "dolphin-mistral:latest", parameterSize: "7B" }]),
    ).toMatchObject({
      name: "dolphin-mistral:latest",
      fallback: false,
      label: "Dolphin Mistral",
    });
  });

  it("uses Gemma 3 1B only when no Mistral-family model is installed", () => {
    expect(resolveOllamaModel([{ name: "gemma3:1b", parameterSize: "1B" }])).toMatchObject({
      name: "gemma3:1b",
      fallback: true,
      label: "Gemma 3 1B",
    });
  });
});
