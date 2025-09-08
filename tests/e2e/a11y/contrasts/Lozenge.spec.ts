import { test, expect, Page, Locator } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

import type { Result } from 'axe-core';

const TEST_PATH = '/documentation/components/lozenge.html';

test('Lozenge tones should not have any contrast-related accessibility issues', async ({ page }) => {
  await page.goto(TEST_PATH);

  const lozengeTestIds = [
    'lozenge-tone-plain',
    'lozenge-tone-pending',
    'lozenge-tone-information',
    'lozenge-tone-success',
    'lozenge-tone-neutral',
    'lozenge-tone-danger',
    'lozenge-tone-caution',
  ];

  // Test:
  //  - Check if lozenges exist
  //  - Check if lozenges tones contrast are correctly rendered
  for (const lozengeTestId of lozengeTestIds) {
    await testLozenge(page, lozengeTestId);
  }
});

test('Lozenge fills should not have any contrast-related accessibility issues', async ({ page }) => {
  await page.goto(TEST_PATH);

  const lozengeTestIds = [
    'lozenge-fill-plain',
    'lozenge-fill-pending',
    'lozenge-fill-information',
    'lozenge-fill-success',
    'lozenge-fill-neutral',
    'lozenge-fill-danger',
    'lozenge-fill-caution',
  ];

  // Test:
  //  - Check if lozenges exist
  //  - Check if lozenges fills contrast are correctly rendered
  for (const lozengeTestId of lozengeTestIds) {
    await testLozenge(page, lozengeTestId);
  }
});

// #region - Helper Functions
const testLozenge = async (page: Page, lozengeTestId: string): Promise<void> => {
  const lozenge: Locator = page.locator(`[data-testid="${lozengeTestId}"]`);

  // Check if lozenge exist
  await expect(lozenge.first()).toBeVisible();

  // Analyze each lozenge
  const results = await new AxeBuilder({ page }).include(`[data-testid="${lozengeTestId}"]`).analyze();

  // Check for contrast-related violations
  const contrastViolations = results.violations.filter((violation: Result) => violation.id === 'color-contrast');

  if (contrastViolations.length > 0) {
    console.error(`Lozenge (${lozengeTestId}) - contrast violations:`, contrastViolations);
  }

  expect(contrastViolations.length).toBe(0);
};
// #endregion - Helper Functions
