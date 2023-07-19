import { test, expect } from '@playwright/test';

const SEARCH_ITEMS = [
  'Assertions',
  'Browsers',
  'Locators',
];

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
  await page.getByPlaceholder('Search docs').fill('Assertions');
  await page.getByPlaceholder('Search docs').press('Enter');
});
