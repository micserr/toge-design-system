/**
 * Input Email Component Tests
 *
 * Test Coverage Rationale:
 * - Input Email is a specialized wrapper around the base Input component
 * - It automatically sets up an envelope icon in the prefix slot
 * - Inherits all functionality from the base Input component through v-bind="$attrs"
 * - Forwards all slots to the base component while overriding the prefix slot
 * - Primary focus is on the email-specific functionality and icon presentation
 * - Tests ensure proper slot forwarding and that the email icon is always present
 * - Validates that all base Input props and events work correctly with the email variant
 *
 * ASSUMPTIONS:
 * - Base Input component functionality is thoroughly tested in Input.spec.ts
 * - Focus here is on the email-specific wrapper behavior
 * - Iconify Icon component is properly installed and functional
 * - The ph:envelope icon is available in the icon set
 *
 * TODO (Future Enhancements):
 * - Add email validation feedback tests when validation logic is added
 * - Test with different icon sets if configurable icons are supported
 * - Add tests for custom email input behaviors if added in the future
 */

import { test, expect } from '@playwright/experimental-ct-vue';
import InputEmail from '@/components/input/input-email/input-email.vue';

test.describe('Input Email Component', () => {
  test.describe('Rendering', () => {
    test('renders with envelope icon in prefix slot', async ({ mount }) => {
      const component = await mount(InputEmail as any);

      const input = component.locator('input');
      const icon = component.locator('svg').first();

      await expect(input).toBeVisible();
      await expect(input).toHaveAttribute('type', 'text'); // Default from base Input
      await expect(icon).toBeVisible();

      // Verify the envelope icon is present
      const iconContainer = component
        .locator(
          '[class*="spr-flex"][class*="spr-items-center"][class*="spr-justify-center"][class*="spr-h-8"][class*="spr-px-2"]',
        )
        .first();
      await expect(iconContainer).toBeVisible();
    });

    test('renders with default Input styling and behavior', async ({ mount }) => {
      const component = await mount(InputEmail as any, {
        props: {
          placeholder: 'Enter your email address',
        } as any,
      });

      const input = component.locator('input');
      await expect(input).toBeVisible();
      await expect(input).toHaveAttribute('placeholder', 'Enter your email address');
      await expect(input).not.toBeDisabled();
      await expect(input).toHaveValue('');
    });

    test('renders with label and envelope icon', async ({ mount }) => {
      const component = await mount(InputEmail as any, {
        props: {
          id: 'email-input',
          label: 'Email Address',
          placeholder: 'user@example.com',
        } as any,
      });

      const label = component.locator('label');
      const input = component.locator('input');
      const icon = component.locator('svg').first();

      await expect(label).toBeVisible();
      await expect(label).toContainText('Email Address');
      await expect(label).toHaveAttribute('for', 'email-input');
      await expect(input).toHaveAttribute('id', 'email-input');
      await expect(input).toHaveAttribute('placeholder', 'user@example.com');
      await expect(icon).toBeVisible();
    });
  });

  test.describe('Props Forwarding', () => {
    test('forwards all base Input props correctly', async ({ mount }) => {
      const component = await mount(InputEmail as any, {
        props: {
          id: 'test-email',
          label: 'Email Address',
          supportingLabel: '(required)',
          type: 'email', // Should override default text type
          placeholder: 'Enter email',
          disabled: false,
          readonly: false,
          error: false,
          maxLength: 100,
          displayHelper: true,
          helperText: 'Enter a valid email address',
          showCharCount: true,
        } as any,
      });

      const input = component.locator('input');
      const label = component.locator('label');
      const charCount = component.getByText('0/100');
      const helperText = component.getByText('Enter a valid email address');

      await expect(input).toHaveAttribute('type', 'email');
      await expect(input).toHaveAttribute('id', 'test-email');
      await expect(input).toHaveAttribute('placeholder', 'Enter email');
      await expect(input).toHaveAttribute('maxlength', '100');
      await expect(label).toContainText('Email Address');
      await expect(label).toContainText('(required)');
      await expect(charCount).toBeVisible();
      await expect(helperText).toBeVisible();
    });

    test('forwards disabled state correctly', async ({ mount }) => {
      const component = await mount(InputEmail as any, {
        props: {
          disabled: true,
          label: 'Email Address',
        } as any,
      });

      const input = component.locator('input');
      const label = component.locator('label');

      await expect(input).toBeDisabled();
      await expect(component.locator('.spr-background-color-disabled')).toBeVisible();
      await expect(label).toHaveClass(/spr-text-color-on-fill-disabled/);
    });

    test('forwards error state correctly', async ({ mount }) => {
      const component = await mount(InputEmail as any, {
        props: {
          error: true,
          displayHelper: true,
          helperText: 'Invalid email format',
        } as any,
      });

      await expect(component.locator('.spr-border-color-danger-base')).toBeVisible();

      const helperText = component.locator('.spr-text-color-danger-base').filter({ hasText: 'Invalid email format' });
      await expect(helperText).toBeVisible();
    });

    test('forwards readonly state correctly', async ({ mount }) => {
      const component = await mount(InputEmail as any, {
        props: {
          readonly: true,
          modelValue: 'user@example.com',
        } as any,
      });

      const input = component.locator('input');
      await expect(input).toHaveAttribute('readonly');
      await expect(input).toHaveValue('user@example.com');
    });
  });

  test.describe('v-model and Events', () => {
    test('supports two-way binding with modelValue', async ({ mount }) => {
      const component = await mount(InputEmail as any, {
        props: {
          modelValue: 'test@example.com',
        } as any,
      });

      const input = component.locator('input');
      await expect(input).toHaveValue('test@example.com');
    });

    test('emits update:modelValue when user types', async ({ mount }) => {
      let emittedValue: string | number | undefined;

      const component = await mount(InputEmail as any, {
        props: {
          'onUpdate:modelValue': (value: string | number) => {
            emittedValue = value;
          },
        } as any,
      });

      const input = component.locator('input');
      await input.fill('user@example.com');

      await component.waitFor();
      expect(emittedValue).toBe('user@example.com');
    });

    test('handles progressive email typing', async ({ mount }) => {
      const emittedValues: (string | number)[] = [];

      const component = await mount(InputEmail as any, {
        props: {
          'onUpdate:modelValue': (value: string | number) => {
            emittedValues.push(value);
          },
        } as any,
      });

      const input = component.locator('input');

      // Progressive typing of an email
      await input.fill('u');
      await component.waitFor();
      await input.fill('user');
      await component.waitFor();
      await input.fill('user@');
      await component.waitFor();
      await input.fill('user@example.com');
      await component.waitFor();

      expect(emittedValues.length).toBeGreaterThan(0);
      expect(emittedValues).toContain('user@example.com');
    });
  });

  test.describe('Slot Forwarding', () => {
    test('forwards trailing slot while preserving prefix icon', async ({ mount }) => {
      const component = await mount(InputEmail as any, {
        slots: {
          trailing: '<button data-testid="verify-btn">Verify</button>',
        },
      });

      const trailingBtn = component.locator('[data-testid="verify-btn"]');
      const envelopeIcon = component.locator('svg').first();

      await expect(trailingBtn).toBeVisible();
      await expect(trailingBtn).toHaveText('Verify');
      await expect(envelopeIcon).toBeVisible(); // Prefix icon should still be there
    });

    test('forwards icon slot while preserving prefix icon', async ({ mount }) => {
      const component = await mount(InputEmail as any, {
        slots: {
          icon: '<span data-testid="status-icon">✓</span>',
        },
      });

      const statusIcon = component.locator('[data-testid="status-icon"]');
      const envelopeIcon = component.locator('svg').first();

      await expect(statusIcon).toBeVisible();
      await expect(statusIcon).toHaveText('✓');
      await expect(envelopeIcon).toBeVisible(); // Prefix icon should still be there
    });

    test('forwards helperMessage slot', async ({ mount }) => {
      const component = await mount(InputEmail as any, {
        props: {
          displayHelper: true,
        } as any,
        slots: {
          helperMessage: '<span data-testid="custom-helper">Please enter a valid email address</span>',
        },
      });

      const customHelper = component.locator('[data-testid="custom-helper"]');
      await expect(customHelper).toBeVisible();
      await expect(customHelper).toHaveText('Please enter a valid email address');
    });

    test('handles conflicting prefix slot (known limitation)', async ({ mount }) => {
      // When someone passes a prefix slot, there's a conflict with our envelope icon
      // This is a known limitation of the current implementation
      const component = await mount(InputEmail as any, {
        slots: {
          prefix: '<span data-testid="custom-prefix">@</span>',
        },
      });

      // Due to Vue slot behavior, the custom prefix is visible
      const customPrefix = component.locator('[data-testid="custom-prefix"]');
      await expect(customPrefix).toBeVisible();

      // The envelope icon may not render due to slot conflict
      // This test documents the current behavior rather than the ideal behavior
      const input = component.locator('input');
      await expect(input).toBeVisible(); // At least the input still works
    });
  });

  test.describe('Character Count with Email', () => {
    test('displays character count for email addresses', async ({ mount }) => {
      const component = await mount(InputEmail as any, {
        props: {
          showCharCount: true,
          modelValue: 'user@example.com',
        } as any,
      });

      const charCount = component.getByText('16');
      await expect(charCount).toBeVisible();
    });

    test('character count works with maxLength for emails', async ({ mount }) => {
      const emailValue = 'very.long.email.address@example.domain.com';
      const component = await mount(InputEmail as any, {
        props: {
          showCharCount: true,
          maxLength: 50,
          modelValue: emailValue,
        } as any,
      });

      // Email is 42 characters long
      const charCount = component.getByText('42/50');
      await expect(charCount).toBeVisible();
    });

    test('shows warning when email exceeds character limit', async ({ mount }) => {
      const emailValue = 'very.long.email.address@example.com';
      const component = await mount(InputEmail as any, {
        props: {
          showCharCount: true,
          maxLength: 20,
          modelValue: emailValue,
        } as any,
      });

      // Email is 35 characters, which exceeds limit of 20
      const charCount = component.getByText('35/20');
      await expect(charCount).toHaveClass(/spr-text-color-danger-base/);
    });
  });

  test.describe('Email Type Behavior', () => {
    test('works with email input type for validation', async ({ mount }) => {
      const component = await mount(InputEmail as any, {
        props: {
          type: 'email',
          label: 'Email Address',
        } as any,
      });

      const input = component.locator('input');
      await expect(input).toHaveAttribute('type', 'email');

      // Test valid email
      await input.fill('user@example.com');
      await expect(input).toHaveValue('user@example.com');

      // Browser would handle email validation
    });

    test('email type with validation states', async ({ mount }) => {
      const component = await mount(InputEmail as any, {
        props: {
          type: 'email',
          error: true,
          displayHelper: true,
          helperText: 'Please enter a valid email address',
          helperIcon: 'ph:warning',
        } as any,
      });

      const input = component.locator('input');
      const helperText = component
        .locator('.spr-text-color-danger-base')
        .filter({ hasText: 'Please enter a valid email address' });
      const warningIcon = component.locator('svg').nth(1); // Second icon (first is envelope)

      await expect(input).toHaveAttribute('type', 'email');
      await expect(component.locator('.spr-border-color-danger-base')).toBeVisible();
      await expect(helperText).toBeVisible();
      await expect(warningIcon).toBeVisible();
    });
  });

  test.describe('Icon Styling and States', () => {
    test('envelope icon styling in normal state', async ({ mount }) => {
      const component = await mount(InputEmail as any);

      const iconContainer = component
        .locator(
          '[class*="spr-flex"][class*="spr-items-center"][class*="spr-justify-center"][class*="spr-h-8"][class*="spr-px-2"]',
        )
        .first();
      await expect(iconContainer).toHaveClass(/spr-text-mushroom-300/);
    });

    test('envelope icon styling in error state', async ({ mount }) => {
      const component = await mount(InputEmail as any, {
        props: {
          error: true,
        } as any,
      });

      const iconContainer = component
        .locator(
          '[class*="spr-flex"][class*="spr-items-center"][class*="spr-justify-center"][class*="spr-h-8"][class*="spr-px-2"]',
        )
        .first();
      await expect(iconContainer).toHaveClass(/spr-text-tomato-600/);
    });

    test('envelope icon remains visible in disabled state', async ({ mount }) => {
      const component = await mount(InputEmail as any, {
        props: {
          disabled: true,
          label: 'Email Address',
        } as any,
      });

      const input = component.locator('input');
      const icon = component.locator('svg').first();

      await expect(input).toBeDisabled();
      await expect(icon).toBeVisible();
    });
  });

  test.describe('Focus and Interaction', () => {
    test('supports keyboard navigation', async ({ mount }) => {
      const component = await mount(InputEmail as any, {
        props: {
          label: 'Email Address',
        } as any,
      });

      const input = component.locator('input');

      await input.focus();
      await expect(input).toBeFocused();

      await input.press('KeyU');
      await expect(input).toHaveValue('u');

      await input.press('Tab');
      await expect(input).not.toBeFocused();
    });

    test('focus state styling with envelope icon', async ({ mount }) => {
      const component = await mount(InputEmail as any);

      const input = component.locator('input');

      await input.focus();
      await expect(input).toBeFocused();

      // The input container should show focus styling
      // The envelope icon remains visible during focus
      const icon = component.locator('svg').first();
      await expect(icon).toBeVisible();
    });

    test('click on input area focuses input', async ({ mount }) => {
      const component = await mount(InputEmail as any);

      const input = component.locator('input');

      await input.click();
      await expect(input).toBeFocused();
    });
  });

  test.describe('Accessibility', () => {
    test('maintains proper label association', async ({ mount }) => {
      const component = await mount(InputEmail as any, {
        props: {
          id: 'email-field',
          label: 'Email Address',
        } as any,
      });

      const label = component.locator('label');
      const input = component.locator('input');

      await expect(label).toHaveAttribute('for', 'email-field');
      await expect(input).toHaveAttribute('id', 'email-field');
    });

    test('envelope icon does not interfere with screen readers', async ({ mount }) => {
      const component = await mount(InputEmail as any, {
        props: {
          label: 'Email Address',
          'aria-describedby': 'email-help',
        } as any,
      });

      const input = component.locator('input');

      // Icon should be decorative and not interfere with accessibility
      await expect(input).toHaveAttribute('aria-describedby', 'email-help');
    });

    test('supports ARIA attributes', async ({ mount }) => {
      const component = await mount(InputEmail as any, {
        props: {
          'aria-required': 'true',
          'aria-invalid': 'false',
          'aria-describedby': 'email-help',
        } as any,
      });

      const input = component.locator('input');

      await expect(input).toHaveAttribute('aria-required', 'true');
      await expect(input).toHaveAttribute('aria-invalid', 'false');
      await expect(input).toHaveAttribute('aria-describedby', 'email-help');
    });
  });

  test.describe('Edge Cases', () => {
    test('handles empty email input', async ({ mount }) => {
      const component = await mount(InputEmail as any, {
        props: {
          modelValue: '',
          showCharCount: true,
        } as any,
      });

      const input = component.locator('input');
      const charCount = component.getByText('0');

      await expect(input).toHaveValue('');
      await expect(charCount).toBeVisible();
    });

    test('handles very long email addresses', async ({ mount }) => {
      const longEmail = 'a'.repeat(50) + '@' + 'b'.repeat(50) + '.com';

      const component = await mount(InputEmail as any, {
        props: {
          modelValue: longEmail,
          showCharCount: true,
        } as any,
      });

      const input = component.locator('input');
      const charCount = component.getByText('105');

      await expect(input).toHaveValue(longEmail);
      await expect(charCount).toBeVisible();
    });

    test('handles special characters in email', async ({ mount }) => {
      let emittedValue: string | number | undefined;

      const component = await mount(InputEmail as any, {
        props: {
          'onUpdate:modelValue': (value: string | number) => {
            emittedValue = value;
          },
        } as any,
      });

      const input = component.locator('input');
      const emailWithSpecialChars = 'user+tag@sub-domain.example.com';

      await input.fill(emailWithSpecialChars);
      await component.waitFor();

      expect(emittedValue).toBe(emailWithSpecialChars);
    });

    test('maintains icon visibility with null/undefined values', async ({ mount }) => {
      const component = await mount(InputEmail as any, {
        props: {
          modelValue: undefined,
        } as any,
      });

      const input = component.locator('input');
      const icon = component.locator('svg').first();

      await expect(input).toHaveValue('');
      await expect(icon).toBeVisible();
    });
  });

  test.describe('Complex Scenarios', () => {
    test('email input with all features enabled', async ({ mount }) => {
      const component = await mount(InputEmail as any, {
        props: {
          id: 'comprehensive-email',
          label: 'Email Address',
          supportingLabel: '(required)',
          type: 'email',
          placeholder: 'user@example.com',
          maxLength: 100,
          showCharCount: true,
          displayHelper: true,
          helperText: 'We will never share your email',
          helperIcon: 'ph:info',
        } as any,
        slots: {
          trailing: '<button data-testid="verify">Verify</button>',
          icon: '<span data-testid="status">📧</span>',
        },
      });

      const input = component.locator('input');
      const label = component.locator('label');
      const envelopeIcon = component.locator('svg').first();
      const helperText = component.getByText('We will never share your email');
      const charCount = component.getByText('0/100');
      const verifyBtn = component.locator('[data-testid="verify"]');
      const statusIcon = component.locator('[data-testid="status"]');

      await expect(input).toHaveAttribute('type', 'email');
      await expect(input).toHaveAttribute('id', 'comprehensive-email');
      await expect(input).toHaveAttribute('placeholder', 'user@example.com');
      await expect(input).toHaveAttribute('maxlength', '100');
      await expect(label).toContainText('Email Address');
      await expect(label).toContainText('(required)');
      await expect(envelopeIcon).toBeVisible();
      await expect(helperText).toBeVisible();
      await expect(charCount).toBeVisible();
      await expect(verifyBtn).toBeVisible();
      await expect(statusIcon).toBeVisible();
    });

    test('error state with email validation feedback', async ({ mount }) => {
      const component = await mount(InputEmail as any, {
        props: {
          type: 'email',
          error: true,
          displayHelper: true,
          helperText: 'Please enter a valid email address',
          helperIcon: 'ph:warning',
          showCharCount: true,
          maxLength: 50,
          modelValue: 'invalid-email',
        } as any,
      });

      const input = component.locator('input');
      const helperText = component
        .locator('.spr-text-color-danger-base')
        .filter({ hasText: 'Please enter a valid email address' });
      const charCount = component.getByText('13/50');
      const envelopeIcon = component.locator('svg').first();

      await expect(input).toHaveAttribute('type', 'email');
      await expect(input).toHaveValue('invalid-email');
      await expect(component.locator('.spr-border-color-danger-base')).toBeVisible();
      await expect(helperText).toBeVisible();
      await expect(charCount).toBeVisible();
      await expect(envelopeIcon).toBeVisible(); // Envelope icon still visible
      await expect(envelopeIcon.locator('..')).toHaveClass(/spr-text-tomato-600/); // Error styling on icon container
    });

    test('disabled email input with pre-filled value', async ({ mount }) => {
      const component = await mount(InputEmail as any, {
        props: {
          disabled: true,
          modelValue: 'readonly@example.com',
          label: 'Current Email',
          displayHelper: true,
          helperText: 'Contact support to change your email',
          showCharCount: true,
        } as any,
      });

      const input = component.locator('input');
      const label = component.locator('label');
      const helperText = component.getByText('Contact support to change your email');
      const charCount = component.getByText('20');
      const icon = component.locator('svg').first();

      await expect(input).toBeDisabled();
      await expect(input).toHaveValue('readonly@example.com');
      await expect(label).toHaveClass(/spr-text-color-on-fill-disabled/);
      await expect(helperText).toBeVisible();
      await expect(charCount).toBeVisible();
      await expect(icon).toBeVisible();
      await expect(component.locator('.spr-background-color-disabled')).toBeVisible();
    });
  });
});
