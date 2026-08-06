import { describe, expect, it } from "vitest";
import { detect } from "./detectors";
import { replaceAccepted } from "./review";

describe("replaceAccepted", () => {
  it("preserves blank lines while replacing accepted candidates", () => {
    const detections = detect("Regel 1\n\nsecret@example.com\nRegel 3").map((item) => ({
      ...item,
      decision: "accepted" as const,
    }));
    const tokens = new Map([["secret@example.com", "EMAIL_1"]]);
    const output = replaceAccepted("Regel 1\n\nsecret@example.com\nRegel 3", detections, tokens);
    expect(output).toBe("Regel 1\n\nEMAIL_1\nRegel 3");
  });
});
