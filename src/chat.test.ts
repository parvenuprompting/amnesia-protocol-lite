import { describe, expect, it } from "vitest";
import {
  CHAT_MIN_INTERVAL_MS,
  CHAT_RATE_WINDOW_MS,
  estimateTokens,
  getChatRateLimitMessage,
  trimChatHistory,
} from "./chat";

describe("chat limits", () => {
  it("estimates tokens conservatively from text length", () => {
    expect(estimateTokens("12345678")).toBe(2);
  });

  it("enforces the minimum interval and five requests per minute", () => {
    const now = 100_000;
    expect(getChatRateLimitMessage([now - 1_000], now)).toContain("Wacht nog");
    expect(
      getChatRateLimitMessage(
        Array.from({ length: 5 }, (_, index) => now - index * CHAT_MIN_INTERVAL_MS - 1),
        now,
      ),
    ).toContain("5 vragen per minuut");
    expect(getChatRateLimitMessage([now - CHAT_RATE_WINDOW_MS - 1], now)).toBeNull();
  });

  it("keeps the newest messages within the context budget", () => {
    const messages = [
      { role: "user" as const, content: "a".repeat(80) },
      { role: "assistant" as const, content: "b".repeat(80) },
      { role: "user" as const, content: "c".repeat(80) },
    ];
    expect(trimChatHistory(messages, 20)).toEqual([messages[2]]);
  });
});
