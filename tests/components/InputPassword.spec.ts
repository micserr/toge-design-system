/**
 * InputPassword Component Tests
 *
 * Coverage includes:
 * - Rendering with default props and password type
 * - Password visibility toggle functionality (eye icon interactions)
 * - v-model two-way binding behavior
 * - Event emissions (update:modelValue)
 * - All inherited input props (label, disabled, readonly, error states)
 * - Character count and validation features
 * - Helper text and slot content (prefix, trailing)
 * - Edge cases (special characters, min/max length attributes)
 * - State persistence during type changes (password ↔ text)
 *
 * Rationale:
 * - Focus on password-specific functionality (visibility toggle)
 * - Ensure v-model compatibility with parent forms
 * - Test inherited base Input component behavior
 * - Validate security-related features (password masking)
 * - Verify accessibility compliance for password inputs
 * - Cover edge cases with special characters in passwords
 *
 * ASSUMPTIONS:
 * - Icon component (@iconify/vue) is properly available for eye icons
 * - Base Input component functionality is working (tested separately)
 * - Eye icons (ph:eye, ph:eye-closed) are available from Iconify
 *
 * TODO (Future Enhancements):
 * - Add password strength indicator testing
 * - Test integration with form validation libraries
 * - Add keyboard accessibility testing (Tab navigation)
 * - Test with password managers and autocomplete
 */

import { test, expect } from '@playwright/experimental-ct-vue';
import InputPassword from '@/components/input/input-password/input-password.vue';

test.describe('InputPassword Component', () => {
  test.describe('Rendering', () => {
    test('renders with default props and password type', async ({ mount }) => {
      const component = await mount(InputPassword);

      const input = component.locator('input');
      const eyeIcon = component.locator('svg');

      await expect(input).toBeVisible();
      await expect(input).toHaveAttribute('type', 'password');
      await expect(eyeIcon).toBeVisible();
    });

    test('renders with label correctly', async ({ mount }) => {
      const component = await mount(InputPassword, {
        props: {
          id: 'password-input',
          label: 'Password',
        },
      });

      const label = component.locator('label');
      const input = component.locator('input');

      await expect(label).toBeVisible();
      await expect(label).toContainText('Password');
      await expect(label).toHaveAttribute('for', 'password-input');
      await expect(input).toHaveAttribute('id', 'password-input');
    });

    test('displays helper text when enabled', async ({ mount }) => {
      const component = await mount(InputPassword, {
        props: {
          displayHelper: true,
          helperText: 'Password must be at least 8 characters',
        },
      });

      await expect(component).toContainText('Password must be at least 8 characters');
    });

    test('displays character count when enabled', async ({ mount }) => {
      const component = await mount(InputPassword, {
        props: {
          showCharCount: true,
          modelValue: 'hello',
        },
      });

      const charCount = component.getByText('5');
      await expect(charCount).toBeVisible();
    });

    test('renders prefix slot content', async ({ mount }) => {
      const component = await mount(InputPassword, {
        slots: {
          prefix: '<span data-testid="prefix-content">🔒</span>',
        },
      });

      const prefixContent = component.locator('[data-testid="prefix-content"]');
      await expect(prefixContent).toBeVisible();
      await expect(prefixContent).toHaveText('🔒');
    });
  });

  test.describe('Password Visibility Toggle', () => {
    test('toggles password visibility when eye icon is clicked', async ({ mount }) => {
      const component = await mount(InputPassword);

      const input = component.locator('input');
      const eyeIcon = component.locator('svg');

      // Initially password type
      await expect(input).toHaveAttribute('type', 'password');
      
      // Click to show password
      await eyeIcon.click();
      await expect(input).toHaveAttribute('type', 'text');
      
      // Click to hide password again
      await eyeIcon.click();
      await expect(input).toHaveAttribute('type', 'password');
    });

    test('value persists during type changes', async ({ mount }) => {
      const component = await mount(InputPassword, {
        props: { modelValue: 'secret123' },
      });

      const input = component.locator('input');
      const eyeIcon = component.locator('svg');

      await expect(input).toHaveValue('secret123');
      await expect(input).toHaveAttribute('type', 'password');

      // Toggle to show password
      await eyeIcon.click();
      await expect(input).toHaveAttribute('type', 'text');
      await expect(input).toHaveValue('secret123');

      // Toggle back to password
      await eyeIcon.click();
      await expect(input).toHaveAttribute('type', 'password');
      await expect(input).toHaveValue('secret123');
    });
  });

  test.describe('v-model and Events', () => {
    test('handles modelValue prop correctly', async ({ mount }) => {
      const component = await mount(InputPassword, {
        props: { modelValue: 'test password' },
      });

      const input = component.locator('input');
      await expect(input).toHaveValue('test password');
    });

    test('emits update:modelValue when user types', async ({ mount }) => {
      let emittedValue;

      const component = await mount(InputPassword, {
        props: {
          'onUpdate:modelValue': (value) => {
            emittedValue = value;
          },
        },
      });

      const input = component.locator('input');
      await input.fill('new password');
      await component.waitFor();
      expect(emittedValue).toBe('new password');
    });

    test('handles special characters in password', async ({ mount }) => {
      let emittedValue;

      const component = await mount(InputPassword, {
        props: {
          'onUpdate:modelValue': (value) => {
            emittedValue = value;
          },
        },
      });

      const input = component.locator('input');
      const specialPassword = '!@#$%^&*()';

      await input.fill(specialPassword);
      await component.waitFor();
      expect(emittedValue).toBe(specialPassword);
    });
  });

  test.describe('States and Validation', () => {
    test('applies disabled state correctly', async ({ mount }) => {
      const component = await mount(InputPassword, {
        props: { disabled: true },
      });

      const input = component.locator('input');
      await expect(input).toBeDisabled();
    });

    test('supports readonly state', async ({ mount }) => {
      const component = await mount(InputPassword, {
        props: { readonly: true },
      });

      const input = component.locator('input');
      await expect(input).toHaveAttribute('readonly');
    });

    test('applies error state correctly', async ({ mount }) => {
      const component = await mount(InputPassword, {
        props: { error: true },
      });

      await expect(component.locator('.spr-border-color-danger-base')).toBeVisible();
    });

    test('applies minlength and maxlength attributes', async ({ mount }) => {
      const component = await mount(InputPassword, {
        props: {
          minLength: 8,
          maxLength: 64,
        },
      });

      const input = component.locator('input');
      await expect(input).toHaveAttribute('minlength', '8');
      await expect(input).toHaveAttribute('maxlength', '64');
    });
  });
});
