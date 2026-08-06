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
  page.once("dialog", (dialog) => dialog.accept("dossier 123456"));
  await candidates.nth(1).getByRole("button", { name: "Waarde aanpassen" }).click();
  await editor.evaluate((element) => {
    const input = element as HTMLTextAreaElement;
    input.setSelectionRange(5, 20);
  });
  await page.getByRole("button", { name: /Markering toevoegen/ }).click();
  await expect(page.getByRole("status")).toHaveText("Handmatige markering toegevoegd");
  await page.getByRole("button", { name: "Undo" }).click();
  await expect(page.getByRole("status")).toHaveText("Actie ongedaan gemaakt");
  page.once("dialog", (dialog) => dialog.accept());
  await page.getByTestId("replace-all-copy").click();
  await expect(page.getByRole("status")).toHaveText(/items vervangen en gekopieerd/);
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
