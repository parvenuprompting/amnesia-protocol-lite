const blockTags = new Set([
  "address",
  "article",
  "aside",
  "blockquote",
  "div",
  "dl",
  "dt",
  "dd",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hr",
  "li",
  "main",
  "nav",
  "ol",
  "p",
  "pre",
  "section",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "tr",
  "ul",
]);

function extractText(node: Node): string {
  if (node.nodeType === Node.TEXT_NODE) {
    return node.textContent ?? "";
  }
  if (node.nodeType !== Node.ELEMENT_NODE) {
    return "";
  }
  const element = node as Element;
  const tag = element.tagName.toLowerCase();
  if (tag === "br") {
    return "\n";
  }
  if (tag === "script" || tag === "style" || tag === "noscript") {
    return "";
  }
  const isBlock = blockTags.has(tag);
  let result = isBlock ? "\n" : "";
  element.childNodes.forEach((child) => {
    result += extractText(child);
  });
  if (isBlock) {
    result += "\n";
  }
  return result;
}

function regexConvert(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p\s*>/gi, "\n\n")
    .replace(/<\/div\s*>/gi, "\n")
    .replace(/<\/li\s*>/gi, "\n")
    .replace(/<[^>]+>/g, "");
}

export function htmlToPlainText(html: string): string {
  let raw = "";
  if (typeof DOMParser !== "undefined") {
    try {
      const doc = new DOMParser().parseFromString(html, "text/html");
      raw = extractText(doc.body);
    } catch {
      raw = regexConvert(html);
    }
  } else {
    raw = regexConvert(html);
  }
  return normalizeWhitespace(raw);
}

export function normalizeWhitespace(text: string): string {
  return text
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function insertTextAtSelection(
  current: string,
  insertion: string,
  start: number,
  end: number,
): string {
  const before = current.slice(0, start);
  const after = current.slice(end);
  return before + insertion + after;
}
