export const CHAT_MAX_OUTPUT_TOKENS = 512;
export const CHAT_MAX_CONTEXT_TOKENS = 4_000;
export const CHAT_MAX_REQUESTS_PER_WINDOW = 5;
export const CHAT_RATE_WINDOW_MS = 60_000;
export const CHAT_MIN_INTERVAL_MS = 3_000;

export type ChatRole = "system" | "user" | "assistant";

export type ChatMessage = {
  role: ChatRole;
  content: string;
};

export function estimateTokens(text: string): number {
  return Math.ceil(text.trim().length / 4);
}

export function getChatRateLimitMessage(sentAt: number[], now = Date.now()): string | null {
  const recent = sentAt.filter((timestamp) => now - timestamp < CHAT_RATE_WINDOW_MS);
  const last = recent.at(-1);
  if (last !== undefined && now - last < CHAT_MIN_INTERVAL_MS) {
    const seconds = Math.ceil((CHAT_MIN_INTERVAL_MS - (now - last)) / 1000);
    return `Wacht nog ${seconds} seconde${seconds === 1 ? "" : "n"} voordat je een nieuwe vraag stelt.`;
  }
  if (recent.length >= CHAT_MAX_REQUESTS_PER_WINDOW) {
    return "De chatlimiet van 5 vragen per minuut is bereikt.";
  }
  return null;
}

export function trimChatHistory(messages: ChatMessage[], maxTokens: number): ChatMessage[] {
  const result: ChatMessage[] = [];
  let tokens = 0;
  for (let index = messages.length - 1; index >= 0; index--) {
    const messageTokens = estimateTokens(messages[index].content);
    if (tokens + messageTokens > maxTokens) break;
    result.unshift(messages[index]);
    tokens += messageTokens;
  }
  return result;
}
