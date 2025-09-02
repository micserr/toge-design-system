import { test, expect, Page, Locator } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

import type { Result } from 'axe-core';

const TEST_PATH = '/documentation/components/button/button.html';

test('Button tones should not have any contrast-related accessibility issues', async ({ page }) => {
  await page.goto(TEST_PATH);

  const buttonTestIds = ['button-tone-neutral', 'button-tone-success', 'button-tone-danger'];

  // Test:
  //  - Check if buttons exist
  //  - Check if button tones contrast are correctly rendered
  for (const buttonTestId of buttonTestIds) {
    await testButton(page, buttonTestId);
  }
});

test('Button variation should not have any contrast-related accessibility issues', async ({ page }) => {
  await page.goto(TEST_PATH);

  const buttonTestIds = [
    'button-tone-neutral-variant-primary',
    'button-tone-neutral-variant-secondary',
    'button-tone-neutral-variant-tertiary',
    'button-tone-success-variant-primary',
    'button-tone-success-variant-secondary',
    'button-tone-success-variant-tertiary',
    'button-tone-danger-variant-primary',
    'button-tone-danger-variant-secondary',
    'button-tone-danger-variant-tertiary',
  ];

  // Test:
  //  - Check if buttons exist
  //  - Check if button variations contrast are correctly rendered
  for (const buttonTestId of buttonTestIds) {
    await testButton(page, buttonTestId);
  }
});

// #region - Helper Functions
const testButton = async (page: Page, buttonTestId: string): Promise<void> => {
  const button: Locator = page.locator(`[data-testid="${buttonTestId}"]`);

  // Check if buttons exist
  await expect(button.first()).toBeVisible();

  // Analyze each button
  const results = await new AxeBuilder({ page }).include(`[data-testid="${buttonTestId}"]`).analyze();

  // Check for contrast-related violations
  const contrastViolations = results.violations.filter((violation: Result) => violation.id === 'color-contrast');

  if (contrastViolations.length > 0) {
    console.error(`Button (${buttonTestId}) - contrast violations:`, contrastViolations);
  }

  expect(contrastViolations.length).toBe(0);
};
// #endregion - Helper Functions
