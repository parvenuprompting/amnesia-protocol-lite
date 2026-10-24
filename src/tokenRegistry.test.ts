import { describe, expect, it } from "vitest";
import { assignStableTokens, createTokenRegistry, tokenIdentity } from "./tokenRegistry";
import type { Detection } from "./types";

function detection(id: string, type: Detection["type"], value: string): Detection {
  return {
    id,
    type,
    value,
    start: 0,
    end: value.length,
    confidence: 1,
    detector: "manual",
    decision: "accepted",
  };
}

describe("stable token registry", () => {
  it("never renumbers or reuses an identity after edits and undo-like snapshots", () => {
    const registry = createTokenRegistry();
    const first = detection("1", "email", "first@example.com");
    const second = detection("2", "email", "second@example.com");

    expect(assignStableTokens([first, second], registry)).toEqual(
      new Map([
        [tokenIdentity("email", first.value), "EMAIL_1"],
        [tokenIdentity("email", second.value), "EMAIL_2"],
      ]),
    );
    expect(assignStableTokens([second], registry).get(tokenIdentity("email", second.value))).toBe(
      "EMAIL_2",
    );
    const third = detection("3", "email", "third@example.com");
    expect(
      assignStableTokens([second, third], registry).get(tokenIdentity("email", third.value)),
    ).toBe("EMAIL_3");
    expect(assignStableTokens([first], registry).get(tokenIdentity("email", first.value))).toBe(
      "EMAIL_1",
    );
  });

  it("separates identical values by detection type", () => {
    const registry = createTokenRegistry();
    const value = "same-value";
    const tokens = assignStableTokens(
      [detection("1", "other", value), detection("2", "reference", value)],
      registry,
    );
    expect(tokens.get(tokenIdentity("other", value))).toBe("OTHER_1");
    expect(tokens.get(tokenIdentity("reference", value))).toBe("REFERENCE_1");
  });
});
