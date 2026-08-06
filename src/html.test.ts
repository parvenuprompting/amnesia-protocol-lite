import { describe, expect, it } from "vitest";
import { htmlToPlainText, insertTextAtSelection, normalizeWhitespace } from "./html";

describe("htmlToPlainText", () => {
  it("preserves blank lines between paragraphs", () => {
    const result = htmlToPlainText("<p>Regel 1</p><p>Regel 2</p>");
    expect(result).toBe("Regel 1\n\nRegel 2");
  });

  it("converts <br> to single newlines", () => {
    const result = htmlToPlainText("Regel 1<br>Regel 2");
    expect(result).toBe("Regel 1\nRegel 2");
  });

  it("converts <div> blocks to newlines", () => {
    const result = htmlToPlainText(
      "<div>Factuurdatum 15 maart 2026</div><div>Bedrag € 100,00</div>",
    );
    expect(result).toBe("Factuurdatum 15 maart 2026\n\nBedrag € 100,00");
  });

  it("preserves table columns with tab separators", () => {
    const result = htmlToPlainText(
      "<table><tr><th>Naam</th><th>Bedrag</th></tr><tr><td>EMAIL_1</td><td>100</td></tr></table>",
    );
    expect(result).toBe("Naam\tBedrag\nEMAIL_1\t100");
  });

  it("decodes HTML entities", () => {
    const result = htmlToPlainText("<p>Bedrag &euro; 100,00</p>");
    expect(result).toBe("Bedrag € 100,00");
  });

  it("removes script and style content", () => {
    const result = htmlToPlainText("<p>Tekst</p><script>alert('x')</script><style>.x{}</style>");
    expect(result).toBe("Tekst");
  });
});

describe("normalizeWhitespace", () => {
  it("normalizes mixed line endings", () => {
    expect(normalizeWhitespace("a\r\nb\rc")).toBe("a\nb\nc");
  });

  it("collapses excessive blank lines to one blank line", () => {
    expect(normalizeWhitespace("a\n\n\n\nb")).toBe("a\n\nb");
  });
});

describe("insertTextAtSelection", () => {
  it("inserts text between selection boundaries", () => {
    expect(insertTextAtSelection("Hallo  wereld", "mooie", 6, 6)).toBe("Hallo mooie wereld");
  });

  it("replaces selected text", () => {
    expect(insertTextAtSelection("Hallo wereld", "iedereen", 6, 12)).toBe("Hallo iedereen");
  });
});
