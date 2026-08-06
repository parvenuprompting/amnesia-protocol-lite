import { afterEach, describe, expect, it, vi } from "vitest";
import { generateWithOllama } from "./ollama";

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
});
