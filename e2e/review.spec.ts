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
  const emailCandidate = page.locator(".candidate").filter({ hasText: "klant@example.com" });
  const customerCandidate = page.locator(".candidate").filter({ hasText: "123456" });
  await emailCandidate.getByRole("button", { name: "Genereer token" }).click();
  await expect(emailCandidate).toHaveClass(/accepted/);
  await expect(emailCandidate.getByText("EMAIL_1", { exact: true })).toBeVisible();
  await customerCandidate.getByRole("button", { name: "Negeren" }).click();
  await expect(customerCandidate).toHaveClass(/rejected/);
  await page.getByRole("button", { name: "Kopieer veilige tekst" }).click();
  await expect(page.getByTestId("clipboard-status")).toHaveText(/markeringen gekopieerd/);
  await expect(page.evaluate(() => navigator.clipboard.readText())).resolves.toContain("EMAIL_1");
  await editor.fill("Mail klant@example.com voor klantnummer 123456 aangepast.");
  await expect(emailCandidate).toHaveClass(/accepted/);
  await expect(customerCandidate).toHaveClass(/rejected/);
  await customerCandidate.getByRole("button", { name: "Waarde aanpassen" }).click();
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
  await page.getByTestId("force-all").click();
  await page.getByTestId("modal-ok").click();
  await expect(page.getByRole("status")).toHaveText(/kandidaten geaccepteerd/);
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

test("start een lokale chat vanaf de homepage", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Start lokale chat" }).click();
  await expect(page.getByText("LOKALE CHAT", { exact: true })).toBeVisible();
  await expect(page.getByText("Vraag het lokale model", { exact: true })).not.toBeVisible();
});

test("opent instellingen vanaf de topbar", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Instellingen" }).click();
  await expect(page.getByRole("dialog", { name: "Instellingen" })).toBeVisible();
  await expect(page.getByText("Mistral", { exact: true })).toBeVisible();
  await page.getByRole("button", { name: "Sluit instellingen" }).click();
  await expect(page.getByRole("dialog", { name: "Instellingen" })).not.toBeVisible();
});

test("accepteert alleen openstaande kandidaten", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Start een nieuwe controle/ }).click();
  await page
    .getByRole("textbox", { name: "Brontekst" })
    .fill("Mail klant@example.com voor klantnummer 123456.");
  const candidates = page.locator(".candidate");
  await candidates.nth(0).getByRole("button", { name: "Negeren" }).click();
  await page.getByTestId("accept-pending").click();
  await expect(candidates.nth(0)).toHaveClass(/rejected/);
  await expect(candidates.nth(1)).toHaveClass(/accepted/);
});

test("undo herstelt tekst en detecties samen", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Start een nieuwe controle/ }).click();
  const editor = page.getByRole("textbox", { name: "Brontekst" });
  await editor.fill("Eerste klant@example.com");
  await expect(page.getByRole("complementary").getByText("E-mail", { exact: true })).toBeVisible();
  await editor.fill("Tweede andere@example.com");
  await page.getByRole("button", { name: "Undo" }).click();
  await expect(editor).toHaveValue("Eerste klant@example.com");
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
  const candidate = page.locator(".candidate").filter({ hasText: "klant@example.com" });
  await candidate.getByRole("button", { name: "Genereer token" }).click();
  await expect(candidate).toHaveClass(/accepted/);
  await page.getByRole("button", { name: "Kopieer veilige tekst" }).click();
  const copyConfirmation = page.getByTestId("modal-ok");
  if (await copyConfirmation.isVisible()) await copyConfirmation.click();
  await expect(page.getByTestId("clipboard-status")).toHaveText(/markeringen gekopieerd/);
  const copiedText = await page.evaluate(() => navigator.clipboard.readText());
  await page.getByRole("button", { name: "02 Synthetisch" }).click();

  const sourceText = page.getByRole("textbox", { name: "Veilige tekst voor synthetische laag" });
  const syntheticText = page.getByRole("textbox", { name: "Synthetische tekst" });
  await expect(sourceText).toHaveValue("");
  await sourceText.fill(copiedText);
  await expect(syntheticText).toHaveValue("Stuur dit naar EMAIL_1.");
  await page.getByRole("button", { name: "Genereer standaardvervangers" }).click();
  await expect(syntheticText).not.toHaveValue("Stuur dit naar EMAIL_1.");
  await expect(syntheticText).toHaveValue(/@/);
  await expect(page.getByText("Fictieve vervangers", { exact: false })).toBeVisible();
  await expect(page.getByText("EMAIL_1", { exact: true })).toBeVisible();
});
