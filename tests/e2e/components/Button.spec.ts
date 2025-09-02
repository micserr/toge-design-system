import { test, expect, Page } from '@playwright/test';

const TEST_PATH = '/documentation/components/button/button.html';

test('Button component exist', async ({ page }) => {
  await page.goto(TEST_PATH);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Button/);
});

test('Button tones are rendered correctly', async ({ page }) => {
  await page.goto(TEST_PATH);

  const buttons = [
    { testId: 'button-tone-neutral', class: 'spr-background-color-base spr-text-color-strong' },
    { testId: 'button-tone-success', class: 'spr-background-color-brand-base spr-text-color-inverted-strong' },
    { testId: 'button-tone-danger', class: 'spr-background-color-danger-base spr-text-color-inverted-strong' },
  ];

  // Test:
  //  - Check if buttons exist
  //  - Check if tones are applied correctly
  for (const button of buttons) {
    await testButton(page, button);
  }
});

test('Button sizes are rendered correctly', async ({ page }) => {
  await page.goto(TEST_PATH);

  const buttons = [
    { testId: 'button-size-small', class: 'spr-min-w-6 spr-p-1.5 spr-leading-100 spr-font-size-100' },
    { testId: 'button-size-medium', class: 'spr-min-w-7 spr-p-2 spr-leading-100 spr-font-size-100' },
    {
      testId: 'button-size-large',
      class: 'spr-min-w-9 spr-px-2 spr-py-3 spr-leading-300 spr-font-size-200 spr-max-h-9',
    },
  ];

  // Test:
  //  - Check if buttons exist
  //  - Check if sizes are applied correctly
  for (const button of buttons) {
    await testButton(page, button);
  }
});

test('Button variant are rendered correctly', async ({ page }) => {
  await page.goto(TEST_PATH);

  const buttons = [
    { testId: 'button-tone-neutral-variant-primary', class: 'spr-background-color-base spr-border-transparent' },
    { testId: 'button-tone-neutral-variant-secondary', class: 'spr-background-color spr-border-color-base' },
    {
      testId: 'button-tone-neutral-variant-tertiary',
      class: '!border-none spr-border-transparent spr-border-white-50',
    },
    {
      testId: 'button-tone-success-variant-primary',
      class: 'spr-background-color-brand-base spr-text-color-inverted-strong spr-border-transparent',
    },
    {
      testId: 'button-tone-success-variant-secondary',
      class: 'spr-text-color-brand-base spr-border-color-brand-base spr-background-color',
    },
    {
      testId: 'button-tone-success-variant-tertiary',
      class: 'spr-text-color-brand-base !border-none spr-border-white-50',
    },
    {
      testId: 'button-tone-danger-variant-primary',
      class: 'spr-background-color-danger-base spr-text-color-inverted-strong spr-border-transparent',
    },
    {
      testId: 'button-tone-danger-variant-secondary',
      class: 'spr-text-color-danger-base spr-border-color-danger-base spr-background-color',
    },
    {
      testId: 'button-tone-danger-variant-tertiary',
      class: 'spr-text-color-danger-base !border-none spr-border-white-50',
    },
  ];

  // Test:
  //  - Check if buttons exist
  //  - Check if variants are applied correctly
  for (const button of buttons) {
    await testButton(page, button);
  }
});

// #region - Helper Functions
const testButton = async (page: Page, buttons: { testId: string; class: string }) => {
  const button = page.locator(`[data-testid="${buttons.testId}"]`);

  // Check if buttons exist
  await expect(button.first()).toBeVisible();

  // Check if classes/style are applied correctly
  await expect(button.first()).toContainClass(buttons.class);
};
// #endregion - Helper Functions
