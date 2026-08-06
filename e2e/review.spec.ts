import { test, expect } from "@playwright/test";

test("plakken, reviewen, handmatig markeren en undo", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /Maak gevoelige tekst/ })).toBeVisible();
  await expect(page.getByText("Geen data verlaat deze app.", { exact: true })).toBeVisible();
  await page.getByRole("button", { name: /Start een nieuwe controle/ }).click();
  await expect(page.getByRole("heading", { name: /Maak gevoelige tekst/ })).not.toBeVisible();
  const editor = page.getByRole("textbox", { name: "Brontekst" });
  await editor.fill("Mail klant@example.com voor klantnummer 123456.");
  await expect(page.getByRole("complementary").getByText("E-mail", { exact: true })).toBeVisible();
  await expect(
    page.getByRole("complementary").getByText("Klantnummer", { exact: true }),
  ).toBeVisible();
  const candidates = page.locator(".candidate");
  await candidates.nth(0).getByRole("button", { name: "Genereer token" }).click();
  await candidates.nth(1).getByRole("button", { name: "Negeren" }).click();
  await expect(candidates.nth(0)).toHaveClass(/accepted/);
  await expect(candidates.nth(0).getByText("EMAIL_1", { exact: true })).toBeVisible();
  await expect(candidates.nth(1)).toHaveClass(/rejected/);
  await page.getByRole("button", { name: "Kopieer veilige tekst" }).click();
  await expect(page.getByTestId("clipboard-status")).toHaveText(/markeringen gekopieerd/);
  await expect(page.evaluate(() => navigator.clipboard.readText())).resolves.toContain("EMAIL_1");
  await editor.fill("Mail klant@example.com voor klantnummer 123456 aangepast.");
  await expect(candidates.nth(0)).toHaveClass(/accepted/);
  await expect(candidates.nth(1)).toHaveClass(/rejected/);
  await candidates.nth(1).getByRole("button", { name: "Waarde aanpassen" }).click();
  await page.getByTestId("modal-input").fill("dossier 123456");
  await page.getByTestId("modal-ok").click();
  await editor.evaluate((element) => {
    const input = element as HTMLTextAreaElement;
    input.setSelectionRange(5, 20);
  });
  await page.getByRole("button", { name: /Markering toevoegen/ }).click();
  await expect(page.getByRole("status")).toHaveText("Handmatige markering toegevoegd");
  await page.getByRole("button", { name: "Undo" }).click();
  await expect(page.getByRole("status")).toHaveText("Actie ongedaan gemaakt");
  await page.getByTestId("replace-all").click();
  await page.getByTestId("modal-ok").click();
  await expect(page.getByRole("status")).toHaveText(/items vervangen\. Controleer de tekst/);
  await expect(page.evaluate(() => navigator.clipboard.readText())).resolves.not.toContain(
    "CUSTOMER_1",
  );
  await page.getByRole("button", { name: "Kopieer veilige tekst" }).click();
  await expect(page.getByTestId("clipboard-status")).toHaveText(/markeringen gekopieerd/);
  await expect(page.evaluate(() => navigator.clipboard.readText())).resolves.toContain(
    "CUSTOMER_1",
  );
  await page.screenshot({ path: "test-results/amnesia-review.png", fullPage: true });
});

test("werkt verder zonder netwerkverbinding", async ({ page, context }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Start een nieuwe controle/ }).click();
  await context.setOffline(true);
  await page.getByRole("textbox", { name: "Brontekst" }).fill("offline@example.com");
  await expect(page.getByRole("complementary").getByText("E-mail", { exact: true })).toBeVisible();
});

test("plakt HTML met lege regels en ondersteunt handmatige Overig-markering", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Start een nieuwe controle/ }).click();
  const editor = page.getByRole("textbox", { name: "Brontekst" });
  await editor.fill("");
  await editor.evaluate((element, html) => {
    const input = element as HTMLTextAreaElement;
    const dataTransfer = new DataTransfer();
    dataTransfer.setData("text/html", html);
    dataTransfer.setData("text/plain", "Regel 1 Regel 2");
    input.dispatchEvent(
      new ClipboardEvent("paste", {
        clipboardData: dataTransfer,
        bubbles: true,
        cancelable: true,
      }),
    );
  }, "<p>Regel 1</p><p>Regel 2</p>");
  await expect(editor).toHaveValue("Regel 1\n\nRegel 2");
  await editor.evaluate((element) => {
    const input = element as HTMLTextAreaElement;
    input.setSelectionRange(0, 6);
  });
  await page.getByLabel("Type handmatig label").selectOption("other");
  await page.getByRole("button", { name: /Markering toevoegen/ }).click();
  await expect(page.getByRole("complementary").getByText("Overig", { exact: true })).toBeVisible();
});

test("genereert een tweede lokale synthetische laag", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Start een nieuwe controle/ }).click();
  const editor = page.getByRole("textbox", { name: "Brontekst" });
  await editor.fill("Stuur dit naar klant@example.com.");
  await page.locator(".candidate").getByRole("button", { name: "Genereer token" }).click();
  await page.getByRole("button", { name: "02 Synthetisch" }).click();

  const syntheticText = page.getByRole("textbox", { name: "Synthetische tekst" });
  await expect(syntheticText).not.toHaveValue("Stuur dit naar klant@example.com.");
  await expect(syntheticText).toHaveValue(/@/);
  await expect(page.getByText("Fictieve vervangers", { exact: false })).toBeVisible();
  await expect(page.getByText("EMAIL_1", { exact: true })).toBeVisible();
});
