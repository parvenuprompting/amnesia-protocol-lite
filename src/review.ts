import { resolveOverlaps } from "./detectors";
import type { Decision, Detection, DetectionType } from "./types";

export type ReviewAction = { id: string; decision: Decision; value?: string; type?: DetectionType };
export type ReviewSnapshot = { text: string; detections: Detection[] };

function restoreManualStart(item: Detection, text: string): number | null {
  if (
    item.start >= 0 &&
    item.end <= text.length &&
    text.slice(item.start, item.end) === item.value
  ) {
    return item.start;
  }
  const first = text.indexOf(item.value);
  if (first === -1 || text.indexOf(item.value, first + item.value.length) !== -1) return null;
  return first;
}

export function mergeDetections(
  previous: Detection[],
  fresh: Detection[],
  text: string,
): Detection[] {
  const decided = new Map(
    previous
      .filter((item) => item.decision !== "pending")
      .map((item) => [`${item.type}:${item.value}`, item]),
  );
  const mergedFresh = fresh.map((item) => {
    const match = decided.get(`${item.type}:${item.value}`);
    return match ? { ...item, decision: match.decision } : item;
  });
  const stillPresentManual = previous
    .filter((item) => item.detector === "manual")
    .map((item) => {
      const start = restoreManualStart(item, text);
      if (start === null) return null;
      return { ...item, start, end: start + item.value.length };
    })
    .filter((item): item is Detection => item !== null);
  const resolved = resolveOverlaps([...mergedFresh, ...stillPresentManual]);
  const manualByKey = new Map(
    stillPresentManual.map((item) => [
      `${item.start}:${item.end}:${item.type}:${item.value}`,
      item,
    ]),
  );
  return resolved.map((item, index) => {
    if (item.detector === "manual") {
      return (
        manualByKey.get(`${item.start}:${item.end}:${item.type}:${item.value}`) ?? {
          ...item,
          id: `manual-${index + 1}`,
          decision: "pending" as const,
        }
      );
    }
    const freshItem = mergedFresh.find(
      (candidate) =>
        candidate.start === item.start &&
        candidate.end === item.end &&
        candidate.type === item.type &&
        candidate.value === item.value,
    );
    return {
      ...item,
      id: freshItem?.id ?? `detection-${index + 1}`,
      decision: freshItem?.decision ?? "pending",
    };
  });
}

export function applyAction(detections: Detection[], action: ReviewAction): Detection[] {
  return detections.map((item) =>
    item.id === action.id
      ? {
          ...item,
          decision: action.decision,
          value: action.value ?? item.value,
          type: action.type ?? item.type,
        }
      : item,
  );
}

export function replaceAccepted(
  text: string,
  detections: Detection[],
  tokens: Map<string, string>,
) {
  return [...detections]
    .filter((item) => item.decision === "accepted" || item.decision === "edited")
    .sort((a, b) => b.start - a.start)
    .reduce(
      (result, item) =>
        result.slice(0, item.start) +
        (tokens.get(item.value) ?? item.value) +
        result.slice(item.end),
      text,
    );
}
