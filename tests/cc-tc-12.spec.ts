// Placeholder spec to satisfy repository requirement for at least one test spec file.
// Cucumber tests are executed via `npm test` (cucumber-js).
import { test, expect } from '@playwright/test';

test('cucumber runner placeholder', async ({ page }) => {
  await page.goto('about:blank');
  await expect(page).toHaveURL('about:blank');
});
