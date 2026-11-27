import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/ci-intro');
  await page.getByRole('link', { name: 'Writing tests' }).click();
  await page.getByRole('link', { name: 'How to write the first test' }).click();
  await page.goto('https://playwright.dev/docs/ci-intro');
  await page.getByRole('link', { name: 'Writing tests' }).click();
  await page.getByRole('link', { name: 'How to write the first test' }).click();
  await page.getByRole('heading', { name: 'ActionsDirect link to Actions' }).click();
  await expect(page.getByText('Writing testsIntroduction')).toBeVisible();
  await page.getByRole('heading', { name: 'Writing tests' }).click();
});