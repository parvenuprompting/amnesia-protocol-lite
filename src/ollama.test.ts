import { afterEach, describe, expect, it, vi } from "vitest";
import {
  chatWithOllama,
  buildReplacementRequest,
  generateWithOllama,
  listOllamaModels,
  pullOllamaModel,
} from "./ollama";

describe("generateWithOllama", () => {
  afterEach(() => vi.restoreAllMocks());

  it("sends only the synthetic marker and format hint to the local model", async () => {
    const fetchMock = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValue(
        new Response(JSON.stringify({ message: { content: "PROJ-4821" } }), { status: 200 }),
      );

    const result = await generateWithOllama(
      "OTHER_1",
      "intern projectnummer met prefix PROJ-",
      "llama3.2",
    );
    const request = JSON.parse(String(fetchMock.mock.calls[0][1]?.body));

    expect(result).toBe("PROJ-4821");
    expect(fetchMock.mock.calls[0][0]).toBe("http://localhost:11434/api/chat");
    expect(request).toEqual(
      buildReplacementRequest("OTHER_1", "intern projectnummer met prefix PROJ-", "llama3.2", "nl"),
    );
    expect(request.think).toBe(false);
    expect(request).not.toHaveProperty("prompt");
  });

  it("uses the selected English language in the local prompt", async () => {
    const fetchMock = vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response(JSON.stringify({ message: { content: "Fictional Project" } }), {
        status: 200,
      }),
    );

    await generateWithOllama("OTHER_1", "fictional project name", "llama3.2", undefined, "en");
    const request = JSON.parse(String(fetchMock.mock.calls[0][1]?.body));

    expect(request.messages[1].content).toBe(
      "Marker: OTHER_1\nTaal: English\nGewenst formaat: fictional project name",
    );
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
    const request = JSON.parse(String(vi.mocked(fetch).mock.calls[0][1]?.body));
    expect(request.think).toBe(false);
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

  it("rejects contract violations instead of normalizing them", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response(JSON.stringify({ message: { content: "Hier is de waarde: PROJ-4821." } }), {
        status: 200,
      }),
    );
    await expect(generateWithOllama("OTHER_1", "project", "qwen")).rejects.toThrow(
      "eindigen op een punt",
    );
  });

  it("rejects thinking output even when the content itself is valid", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response(JSON.stringify({ message: { thinking: "reasoning", content: "PROJ-4821" } }), {
        status: 200,
      }),
    );
    await expect(generateWithOllama("OTHER_1", "project", "qwen")).rejects.toThrow("thinking-blok");
  });
});
