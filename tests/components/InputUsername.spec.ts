/**
 * InputUsername Component Tests
 *
 * Coverage includes:
 * - Rendering with user icon in prefix slot
 * - Icon behavior and positioning
 * - Basic functionality through DOM interactions
 * - Slot forwarding while maintaining user icon
 * - Username-specific scenarios and edge cases
 *
 * Rationale:
 * - InputUsername is a wrapper around Input with a built-in user icon in prefix
 * - Uses v-bind="$attrs" for attribute inheritance, so no explicit props
 * - User icon must be consistently present in prefix slot
 * - Testing focuses on rendered output and basic interactions
 * - Ensures all base Input functionality works while user icon is preserved
 */

import { test, expect } from '@playwright/experimental-ct-vue';
import InputUsername from '@/components/input/input-username/input-username.vue';

test.describe('InputUsername Component', () => {
  test.describe('Basic Rendering', () => {
    test('renders with default behavior and user icon', async ({ mount }) => {
      const component = await mount(InputUsername);

      // Check that the underlying input is rendered
      const input = component.locator('input');
      await expect(input).toBeVisible();
      await expect(input).toHaveAttribute('type', 'text');

      // Check that user icon is present
      const icon = component.locator('svg');
      await expect(icon).toBeVisible();

      // Should have default input behavior
      await expect(input).not.toBeDisabled();
      await expect(input).toHaveValue('');
    });

    test('icon is positioned correctly in prefix slot', async ({ mount }) => {
      const component = await mount(InputUsername);

      // The icon should be in the prefix slot of the input component
      const icon = component.locator('svg');
      await expect(icon).toBeVisible();

      // Verify the icon is within the input structure
      const iconParent = icon.locator('..');
      await expect(iconParent).toBeVisible();
    });

    test('input is functional and accepts typing', async ({ mount }) => {
      const component = await mount(InputUsername);

      const input = component.locator('input');
      const icon = component.locator('svg');

      // Icon should be present
      await expect(icon).toBeVisible();

      // Input should be focusable and typeable
      await input.click();
      await input.fill('username123');

      await expect(input).toHaveValue('username123');

      // Icon should still be visible after input
      await expect(icon).toBeVisible();
    });

    test('supports slot forwarding while maintaining user icon', async ({ mount }) => {
      const component = await mount(InputUsername, {
        slots: {
          trailing: '<button data-testid="check-btn">Check</button>',
        },
      });

      const icon = component.locator('svg');
      const trailingButton = component.locator('[data-testid="check-btn"]');

      // Both user icon and trailing content should be visible
      await expect(icon).toBeVisible();
      await expect(trailingButton).toBeVisible();
      await expect(trailingButton).toHaveText('Check');
    });
  });

  test.describe('Icon Behavior', () => {
    test('user icon is always present', async ({ mount }) => {
      const component = await mount(InputUsername);

      const icon = component.locator('svg');
      await expect(icon).toBeVisible();

      // Should be user icon - check for svg element
      await expect(icon).toHaveCount(1);
    });

    test('icon remains visible during input changes', async ({ mount }) => {
      const component = await mount(InputUsername);

      const input = component.locator('input');
      const icon = component.locator('svg');

      // Rapidly change input values
      await input.fill('u');
      await expect(icon).toBeVisible();

      await input.fill('user');
      await expect(icon).toBeVisible();

      await input.fill('username');
      await expect(icon).toBeVisible();

      await input.fill('');
      await expect(icon).toBeVisible();

      await input.fill('john_doe');
      await expect(icon).toBeVisible();
    });

    test('handles various username formats', async ({ mount }) => {
      const component = await mount(InputUsername);

      const input = component.locator('input');
      const icon = component.locator('svg');

      const usernameFormats = [
        'john_doe',
        'user123',
        'test.user',
        'admin',
        'user-name',
        'user@domain.com',
        'CamelCaseUser',
      ];

      for (const username of usernameFormats) {
        await input.fill(username);
        await expect(input).toHaveValue(username);
        await expect(icon).toBeVisible();
      }
    });

    test('handles special characters in username', async ({ mount }) => {
      const component = await mount(InputUsername);

      const input = component.locator('input');
      const icon = component.locator('svg');

      // Test special characters commonly used in usernames
      const specialUsername = 'user@example.com';
      await input.fill(specialUsername);

      await expect(input).toHaveValue(specialUsername);
      await expect(icon).toBeVisible();
    });
  });

  test.describe('Basic Functionality', () => {
    test('supports focus and keyboard navigation', async ({ mount }) => {
      const component = await mount(InputUsername);

      const input = component.locator('input');
      const icon = component.locator('svg');

      await input.focus();
      await expect(input).toBeFocused();
      await expect(icon).toBeVisible();

      // Typing should work normally
      await input.type('testuser');
      await expect(input).toHaveValue('testuser');
      await expect(icon).toBeVisible();
    });

    test('handles empty and cleared values', async ({ mount }) => {
      const component = await mount(InputUsername);

      const input = component.locator('input');
      const icon = component.locator('svg');

      // Type something then clear it
      await input.fill('username');
      await expect(input).toHaveValue('username');

      await input.fill('');
      await expect(input).toHaveValue('');

      // Icon should still be present
      await expect(icon).toBeVisible();
    });

    test('input element is properly accessible', async ({ mount }) => {
      const component = await mount(InputUsername);

      const input = component.locator('input');

      // Should be focusable and interactive
      await expect(input).toBeVisible();
      await expect(input).toBeEnabled();

      // Should be able to focus and type
      await input.focus();
      await expect(input).toBeFocused();
    });

    test('works with keyboard navigation patterns', async ({ mount }) => {
      const component = await mount(InputUsername);

      const input = component.locator('input');
      const icon = component.locator('svg');

      // Tab to focus
      await input.focus();
      await expect(input).toBeFocused();

      // Type character by character
      await input.press('KeyU');
      await input.press('KeyS');
      await input.press('KeyE');
      await input.press('KeyR');

      await expect(input).toHaveValue('user');
      await expect(icon).toBeVisible();
    });
  });

  test.describe('Component Structure', () => {
    test('maintains consistent DOM structure', async ({ mount }) => {
      const component = await mount(InputUsername);

      // Should have the main container (div with flex classes)
      const container = component.locator('div').first();
      await expect(container).toBeVisible();

      // Should have input element
      const input = component.locator('input');
      await expect(input).toBeVisible();

      // Should have user icon
      const icon = component.locator('svg');
      await expect(icon).toBeVisible();
    });

    test('prefix slot contains only the user icon', async ({ mount }) => {
      const component = await mount(InputUsername);

      // InputUsername should always show user icon in prefix
      // The prefix slot is pre-filled and should contain exactly one icon
      const icon = component.locator('svg');
      await expect(icon).toBeVisible();
      await expect(icon).toHaveCount(1); // Only one icon should be present
    });

    test('supports multiple slots with user icon preserved', async ({ mount }) => {
      const component = await mount(InputUsername, {
        slots: {
          trailing: '<span data-testid="trailing">Trailing</span>',
          icon: '<span data-testid="icon-slot">×</span>',
        },
      });

      const userIcon = component.locator('svg');
      const trailing = component.locator('[data-testid="trailing"]');
      const iconSlot = component.locator('[data-testid="icon-slot"]');

      // All should be present
      await expect(userIcon).toBeVisible();
      await expect(trailing).toBeVisible();
      await expect(iconSlot).toBeVisible();

      await expect(trailing).toHaveText('Trailing');
      await expect(iconSlot).toHaveText('×');
    });
  });

  test.describe('Edge Cases', () => {
    test('handles very long usernames', async ({ mount }) => {
      const component = await mount(InputUsername);

      const input = component.locator('input');
      const icon = component.locator('svg');

      const longUsername = 'a'.repeat(100);
      await input.fill(longUsername);

      await expect(input).toHaveValue(longUsername);
      await expect(icon).toBeVisible();
    });

    test('maintains icon during rapid changes', async ({ mount }) => {
      const component = await mount(InputUsername);

      const input = component.locator('input');
      const icon = component.locator('svg');

      // Rapid sequential fills
      const values = ['a', 'ab', 'abc', 'abcd', '', 'user', 'username'];

      for (const value of values) {
        await input.fill(value);
        await expect(icon).toBeVisible();
      }
    });

    test('preserves icon across focus states', async ({ mount }) => {
      const component = await mount(InputUsername);

      const input = component.locator('input');
      const icon = component.locator('svg');

      // Focus
      await input.focus();
      await expect(input).toBeFocused();
      await expect(icon).toBeVisible();

      // Type
      await input.type('test');
      await expect(icon).toBeVisible();

      // Blur
      await input.blur();
      await expect(input).not.toBeFocused();
      await expect(icon).toBeVisible();
    });
  });
});

/**
 * ASSUMPTIONS:
 * - The ph:user icon from Iconify is available and renders correctly
 * - The base Input component functionality is stable and tested separately
 * - The v-bind="props" correctly forwards all props to the base component
 * - The slot forwarding mechanism works as expected with Vue 3 syntax
 *
 * TODO (Future Enhancements):
 * - Test integration with form validation libraries
 * - Test with different icon themes or customizable user icons
 * - Add performance tests for icon rendering with large datasets
 * - Test with internationalization (i18n) for different locales
 * - Add visual regression tests for icon positioning
 * - Test with different CSS frameworks or custom themes
 */
