import type { Detection, DetectionType } from "./types";

export type TokenRegistry = {
  byIdentity: Map<string, string>;
  nextByType: Map<DetectionType, number>;
};

export function tokenIdentity(type: DetectionType, value: string): string {
  return `${type}:${value}`;
}

export function createTokenRegistry(): TokenRegistry {
  return { byIdentity: new Map(), nextByType: new Map() };
}

export function assignStableTokens(
  items: Detection[],
  registry: TokenRegistry,
): Map<string, string> {
  const current = new Map<string, string>();
  for (const item of items) {
    if (item.decision !== "accepted" && item.decision !== "edited") continue;
    const identity = tokenIdentity(item.type, item.value);
    let token = registry.byIdentity.get(identity);
    if (!token) {
      const next = (registry.nextByType.get(item.type) ?? 0) + 1;
      registry.nextByType.set(item.type, next);
      token = `${item.type.toUpperCase()}_${next}`;
      registry.byIdentity.set(identity, token);
    }
    current.set(identity, token);
  }
  return current;
}
