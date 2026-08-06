import { describe, expect, it, vi } from "vitest";
import { clearClipboardIfMatches, copyAndVerify } from "./clipboard";

describe("clipboard adapter", () => {
  it("writes and verifies the copied text", async () => {
    const api = { writeText: vi.fn(async () => undefined), readText: vi.fn(async () => "EMAIL_1") };
    await expect(copyAndVerify("EMAIL_1", api)).resolves.toBeUndefined();
    expect(api.writeText).toHaveBeenCalledWith("EMAIL_1");
    expect(api.readText).toHaveBeenCalledOnce();
  });

  it("fails when clipboard readback differs", async () => {
    const api = { writeText: vi.fn(async () => undefined), readText: vi.fn(async () => "wrong") };
    await expect(copyAndVerify("EMAIL_1", api)).rejects.toThrow("readback");
  });

  it("propagates write errors without pretending success", async () => {
    const api = {
      writeText: vi.fn(async () => {
        throw new Error("permission denied");
      }),
      readText: vi.fn(),
    };
    await expect(copyAndVerify("EMAIL_1", api)).rejects.toThrow("permission denied");
    expect(api.readText).not.toHaveBeenCalled();
  });

  it("clears the clipboard only when its content still matches", async () => {
    const api = {
      writeText: vi.fn(async () => undefined),
      readText: vi.fn().mockResolvedValueOnce("EMAIL_1").mockResolvedValueOnce(""),
    };
    await expect(clearClipboardIfMatches("EMAIL_1", api)).resolves.toBe(true);
    expect(api.writeText).toHaveBeenCalledWith("");
  });

  it("does not overwrite clipboard content changed by another app", async () => {
    const api = { writeText: vi.fn(), readText: vi.fn(async () => "new clipboard content") };
    await expect(clearClipboardIfMatches("EMAIL_1", api)).resolves.toBe(false);
    expect(api.writeText).not.toHaveBeenCalled();
  });
});
