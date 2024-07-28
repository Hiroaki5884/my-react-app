import { test, expect } from "@playwright/test";

test("email and password validation", async ({ page }) => {
  await page.goto("http://localhost:5173/login");

  await page.fill('input[name="email"]', "invalid-email");
  await page.click('button[type="submit"]');
  await expect(
    page.locator("div").filter({ hasText: "Invalid email format" })
  ).toBeVisible();

  await page.fill('input[name="email"]', "test@example.com");
  await page.click('button[type="submit"]');
  await expect(
    page.locator("div").filter({ hasText: "Required" })
  ).toBeVisible();
});
