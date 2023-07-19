import { test, expect } from '@playwright/test';

const SEARCH_ITEMS = [
  'Assertions',
  'Browsers',
  'Locators',
];

test.describe("Homepage tests", () => { 

test("Get started", async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/)
  // Click the get started link
  await page.getByRole("link", { name: "Get started"}).click();
  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);  
});

test("Page search function", async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByLabel('Search').click();
  await page.getByPlaceholder('Search docs').fill(SEARCH_ITEMS[0]);
  await page.getByRole('link', { name: 'Assertions', exact: true }).click();
  await expect(page).toHaveURL(/.*test-assertions/)
});

});