/**
 * InputSearch Component Tests
 *
 * Coverage includes:
 * - Rendering with search icon
 * - Icon behavior and positioning
 * - Basic functionality through DOM interactions
 *
 * Rationale:
 * - InputSearch is a wrapper around Input with a built-in magnifying glass icon
 * - Uses v-bind="$attrs" for attribute inheritance, so no explicit props
 * - Icon must be consistently present
 * - Testing focuses on rendered output and basic interactions
 */

import { test, expect } from '@playwright/experimental-ct-vue';
import InputSearch from '@/components/input/input-search/input-search.vue';

test.describe('InputSearch Component', () => {
  test.describe('Basic Rendering', () => {
    test('renders with default behavior and magnifying glass icon', async ({ mount }) => {
      const component = await mount(InputSearch);

      // Check that the underlying input is rendered
      const input = component.locator('input');
      await expect(input).toBeVisible();
      await expect(input).toHaveAttribute('type', 'text');

      // Check that magnifying glass icon is present
      const icon = component.locator('svg');
      await expect(icon).toBeVisible();

      // Should have default input behavior
      await expect(input).not.toBeDisabled();
      await expect(input).toHaveValue('');
    });

    test('icon is positioned correctly in icon slot', async ({ mount }) => {
      const component = await mount(InputSearch);

      // The icon should be in the icon slot of the input component
      // Look for the actual div structure instead of a specific class
      const icon = component.locator('svg');

      await expect(icon).toBeVisible();

      // Verify the icon is within the input structure
      const iconParent = icon.locator('..');
      await expect(iconParent).toBeVisible();
    });

    test('input is functional and accepts typing', async ({ mount }) => {
      const component = await mount(InputSearch);

      const input = component.locator('input');
      const icon = component.locator('svg');

      // Icon should be present
      await expect(icon).toBeVisible();

      // Input should be focusable and typeable
      await input.click();
      await input.fill('search query');

      await expect(input).toHaveValue('search query');

      // Icon should still be visible after input
      await expect(icon).toBeVisible();
    });
  });

  test.describe('Icon Behavior', () => {
    test('magnifying glass icon is always present', async ({ mount }) => {
      const component = await mount(InputSearch);

      const icon = component.locator('svg');
      await expect(icon).toBeVisible();

      // Should be magnifying glass icon - check for svg element
      await expect(icon).toHaveCount(1);
    });

    test('icon remains visible during input changes', async ({ mount }) => {
      const component = await mount(InputSearch);

      const input = component.locator('input');
      const icon = component.locator('svg');

      // Rapidly change input values
      await input.fill('a');
      await expect(icon).toBeVisible();

      await input.fill('ab');
      await expect(icon).toBeVisible();

      await input.fill('abc');
      await expect(icon).toBeVisible();

      await input.fill('');
      await expect(icon).toBeVisible();

      await input.fill('search');
      await expect(icon).toBeVisible();
    });

    test('handles special characters in search query', async ({ mount }) => {
      const component = await mount(InputSearch);

      const input = component.locator('input');
      const icon = component.locator('svg');

      // Test special characters
      const specialQuery = '@#$%^&*()[]{}|\\:";\'<>?,./~`';
      await input.fill(specialQuery);

      await expect(input).toHaveValue(specialQuery);
      await expect(icon).toBeVisible();
    });
  });

  test.describe('Basic Functionality', () => {
    test('supports focus and keyboard navigation', async ({ mount }) => {
      const component = await mount(InputSearch);

      const input = component.locator('input');
      const icon = component.locator('svg');

      await input.focus();
      await expect(input).toBeFocused();
      await expect(icon).toBeVisible();

      // Typing should work normally
      await input.type('hi');
      await expect(input).toHaveValue('hi');
      await expect(icon).toBeVisible();
    });

    test('handles empty and cleared values', async ({ mount }) => {
      const component = await mount(InputSearch);

      const input = component.locator('input');
      const icon = component.locator('svg');

      // Type something then clear it
      await input.fill('search text');
      await expect(input).toHaveValue('search text');

      await input.fill('');
      await expect(input).toHaveValue('');

      // Icon should still be present
      await expect(icon).toBeVisible();
    });

    test('input element is properly accessible', async ({ mount }) => {
      const component = await mount(InputSearch);

      const input = component.locator('input');

      // Should be focusable and interactive
      await expect(input).toBeVisible();
      await expect(input).toBeEnabled();

      // Should be able to focus and type
      await input.focus();
      await expect(input).toBeFocused();
    });
  });

  test.describe('Component Structure', () => {
    test('maintains consistent DOM structure', async ({ mount }) => {
      const component = await mount(InputSearch);

      // Should have the main container (div with flex classes)
      const container = component.locator('div').first();
      await expect(container).toBeVisible();

      // Should have input element
      const input = component.locator('input');
      await expect(input).toBeVisible();

      // Should have icon
      const icon = component.locator('svg');
      await expect(icon).toBeVisible();
    });

    test('icon slot contains only the magnifying glass icon', async ({ mount }) => {
      const component = await mount(InputSearch);

      // InputSearch should always show magnifying glass icon
      // The icon slot is pre-filled and should contain exactly one icon
      const icon = component.locator('svg');
      await expect(icon).toBeVisible();
      await expect(icon).toHaveCount(1); // Only one icon should be present
    });
  });
});
