import { describe, expect, it } from "vitest";
import { detect } from "./detectors";
import { mergeDetections, replaceAccepted } from "./review";

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

describe("mergeDetections", () => {
  it("keeps a manual mark at its old offset when the slice still matches", () => {
    const previous = [
      {
        id: "manual-1",
        start: 7,
        end: 12,
        value: "tekst",
        type: "other" as const,
        confidence: 1,
        detector: "manual" as const,
        decision: "accepted" as const,
      },
    ];
    const merged = mergeDetections(previous, [], "Nieuwe tekst");
    expect(merged[0]).toMatchObject({ start: 7, end: 12, value: "tekst", decision: "accepted" });
  });

  it("drops a manual mark when its value has multiple ambiguous matches", () => {
    const previous = [
      {
        id: "manual-1",
        start: 10,
        end: 15,
        value: "tekst",
        type: "other" as const,
        confidence: 1,
        detector: "manual" as const,
        decision: "accepted" as const,
      },
    ];
    expect(mergeDetections(previous, [], "tekst en tekst")).toEqual([]);
  });
});
