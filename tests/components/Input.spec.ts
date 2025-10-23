/**
 * Input Component Tests
 *
 * Coverage includes:
 * - Rendering with default props
 * - All input types validation
 * - v-model two-way binding behavior
 * - Event emissions (update:modelValue)
 * - Slots (prefix, trailing, icon, helperMessage)
 * - Accessibility (ARIA attributes, keyboard navigation)
 * - Interactive states (focus, disabled, readonly, error)
 * - Character count and validation
 * - Helper text and icon display
 * - Edge cases (empty values, type conversions, boundary conditions)
 *
 * Rationale:
 * - Testing all input types to ensure type validation works
 * - Focus on v-model behavior as it's core functionality
 * - Validate character counting and limit enforcement
 * - Ensure proper accessibility compliance
 * - Test slot behavior for customization
 * - Cover error states and validation feedback
 */

import { test, expect } from '@playwright/experimental-ct-vue';
import Input from '@/components/input/input.vue';

test.describe('Input Component', () => {
  test.describe('Rendering', () => {
    test('renders with default props', async ({ mount }) => {
      const component = await mount(Input);

      const input = component.locator('input');
      await expect(input).toBeVisible();
      await expect(input).toHaveAttribute('type', 'text');
      await expect(input).not.toBeDisabled();
      await expect(input).not.toHaveAttribute('readonly');
      await expect(input).toHaveValue('');
    });

    test('renders with label and supporting label', async ({ mount }) => {
      const component = await mount(Input, {
        props: {
          id: 'test-input',
          label: 'Email Address',
          supportingLabel: '(required)',
        },
      });

      const label = component.locator('label');
      const input = component.locator('input');

      await expect(label).toBeVisible();
      await expect(label).toContainText('Email Address');
      await expect(label).toContainText('(required)');
      await expect(label).toHaveAttribute('for', 'test-input');
      await expect(input).toHaveAttribute('id', 'test-input');
    });

    test('renders without label when not provided', async ({ mount }) => {
      const component = await mount(Input, {
        props: { placeholder: 'Enter text...' },
      });

      const label = component.locator('label');
      const input = component.locator('input');

      await expect(label).not.toBeVisible();
      await expect(input).toHaveAttribute('placeholder', 'Enter text...');
    });

    test('applies placeholder correctly', async ({ mount }) => {
      const component = await mount(Input, {
        props: { placeholder: 'Enter your email' },
      });

      const input = component.locator('input');
      await expect(input).toHaveAttribute('placeholder', 'Enter your email');
    });
  });

  test.describe('Input Types', () => {
    const inputTypes = [
      'text',
      'email',
      'password',
      'number',
      'tel',
      'url',
      'search',
      'date',
      'time',
      'datetime-local',
      'month',
      'week',
    ] as const;

    for (const type of inputTypes) {
      test(`renders with type="${type}"`, async ({ mount }) => {
        const component = await mount(Input, {
          props: { type },
        });

        const input = component.locator('input');
        await expect(input).toHaveAttribute('type', type);
      });
    }

    test('applies number input styling for number type', async ({ mount }) => {
      const component = await mount(Input, {
        props: { type: 'number' },
      });

      const input = component.locator('input');
      await expect(input).toHaveClass(/number-input/);
    });
  });

  test.describe('v-model and Value Handling', () => {
    test('updates value when modelValue prop changes', async ({ mount }) => {
      const component = await mount(Input, {
        props: { modelValue: 'initial value' },
      });

      const input = component.locator('input');
      await expect(input).toHaveValue('initial value');
    });

    test('emits update:modelValue when user types', async ({ mount }) => {
      let emittedValue: string | number | undefined;

      const component = await mount(Input, {
        props: {
          'onUpdate:modelValue': (value: string | number) => {
            emittedValue = value;
          },
        },
      });

      const input = component.locator('input');
      await input.fill('test input');

      // Wait for the event to be processed
      await component.waitFor();
      expect(emittedValue).toBe('test input');
    });

    test('converts to number for number input type', async ({ mount }) => {
      let emittedValue: string | number | undefined;

      const component = await mount(Input, {
        props: {
          type: 'number',
          'onUpdate:modelValue': (value: string | number) => {
            emittedValue = value;
          },
        },
      });

      const input = component.locator('input');
      await input.fill('123');

      // Wait for the event to be processed
      await component.waitFor();
      expect(emittedValue).toBe(123);
    });

    test('handles empty number input correctly', async ({ mount }) => {
      let emittedValue: string | number | undefined;

      const component = await mount(Input, {
        props: {
          type: 'number',
          modelValue: '123', // Start with a value
          'onUpdate:modelValue': (value: string | number) => {
            emittedValue = value;
          },
        },
      });

      const input = component.locator('input');
      await input.fill('');

      // Wait for the event to be processed
      await component.waitFor();
      expect(emittedValue).toBe('');
    });
  });

  test.describe('Character Count', () => {
    test('displays character count when showCharCount is true', async ({ mount }) => {
      const component = await mount(Input, {
        props: {
          showCharCount: true,
          modelValue: 'hello',
        },
      });

      const charCount = component.getByText('5');
      await expect(charCount).toBeVisible();
    });

    test('displays character count with max length', async ({ mount }) => {
      const component = await mount(Input, {
        props: {
          showCharCount: true,
          maxLength: 100,
          modelValue: 'hello world',
        },
      });

      const charCount = component.getByText('11/100');
      await expect(charCount).toBeVisible();
    });

    test('highlights character count when at or over limit', async ({ mount }) => {
      const component = await mount(Input, {
        props: {
          showCharCount: true,
          maxLength: 5,
          modelValue: 'hello world',
        },
      });

      const charCount = component.getByText('11/5');
      await expect(charCount).toHaveClass(/spr-text-color-danger-base/);
    });

    test('does not display character count when showCharCount is false', async ({ mount }) => {
      const component = await mount(Input, {
        props: {
          showCharCount: false,
          modelValue: 'hello',
        },
      });

      // Character count should not be visible anywhere
      await expect(component.getByText('5')).not.toBeVisible();
    });
  });

  test.describe('Length Validation', () => {
    test('applies minlength attribute', async ({ mount }) => {
      const component = await mount(Input, {
        props: { minLength: 5 },
      });

      const input = component.locator('input');
      await expect(input).toHaveAttribute('minlength', '5');
    });

    test('applies maxlength attribute', async ({ mount }) => {
      const component = await mount(Input, {
        props: { maxLength: 100 },
      });

      const input = component.locator('input');
      await expect(input).toHaveAttribute('maxlength', '100');
    });
  });

  test.describe('States', () => {
    test('applies disabled state correctly', async ({ mount }) => {
      const component = await mount(Input, {
        props: { disabled: true },
      });

      const input = component.locator('input');

      await expect(input).toBeDisabled();
      // Check for disabled styling on the input container
      await expect(component.locator('.spr-background-color-disabled')).toBeVisible();
      await expect(component.locator('.spr-cursor-not-allowed')).toBeVisible();
    });

    test('applies readonly state correctly', async ({ mount }) => {
      const component = await mount(Input, {
        props: { readonly: true },
      });

      const input = component.locator('input');
      await expect(input).toHaveAttribute('readonly');
    });

    test('applies error state correctly', async ({ mount }) => {
      const component = await mount(Input, {
        props: { error: true },
      });

      // Check for error styling on the container
      await expect(component.locator('.spr-border-color-danger-base')).toBeVisible();
    });

    test('applies active state correctly', async ({ mount }) => {
      const component = await mount(Input, {
        props: { active: true },
      });

      // Check for active styling on the container
      await expect(component.locator('.spr-border-color-brand-base')).toBeVisible();
    });

    test('applies focus state correctly', async ({ mount }) => {
      const component = await mount(Input);

      const input = component.locator('input');
      await input.focus();

      // Input should be focused
      await expect(input).toBeFocused();
    });
  });

  test.describe('Helper Text and Icons', () => {
    test('displays helper text when displayHelper is true', async ({ mount }) => {
      const component = await mount(Input, {
        props: {
          displayHelper: true,
          helperText: 'This is helper text',
        },
      });

      await expect(component).toContainText('This is helper text');
    });

    test('displays helper icon when provided', async ({ mount }) => {
      const component = await mount(Input, {
        props: {
          displayHelper: true,
          helperIcon: 'ph:info',
          helperText: 'Helper with icon',
        },
      });

      const icon = component.locator('svg').first();
      await expect(icon).toBeVisible();
      await expect(component).toContainText('Helper with icon');
    });

    test('does not display helper when displayHelper is false', async ({ mount }) => {
      const component = await mount(Input, {
        props: {
          displayHelper: false,
          helperText: 'This should not show',
        },
      });

      await expect(component).not.toContainText('This should not show');
    });

    test('applies error styling to helper text when error is true', async ({ mount }) => {
      const component = await mount(Input, {
        props: {
          error: true,
          displayHelper: true,
          helperText: 'Error message',
        },
      });

      // Look for the specific helper text element with error styling
      const helperText = component.locator('.spr-text-color-danger-base').filter({ hasText: 'Error message' });
      await expect(helperText).toBeVisible();
    });
  });

  test.describe('Slots', () => {
    test('renders prefix slot content', async ({ mount }) => {
      const component = await mount(Input, {
        slots: {
          prefix: '<span data-testid="prefix-content">$</span>',
        },
      });

      const prefixContent = component.locator('[data-testid="prefix-content"]');
      await expect(prefixContent).toBeVisible();
      await expect(prefixContent).toHaveText('$');
    });

    test('renders trailing slot content', async ({ mount }) => {
      const component = await mount(Input, {
        slots: {
          trailing: '<button data-testid="trailing-btn">Search</button>',
        },
      });

      const trailingContent = component.locator('[data-testid="trailing-btn"]');
      await expect(trailingContent).toBeVisible();
      await expect(trailingContent).toHaveText('Search');
    });

    test('renders icon slot content', async ({ mount }) => {
      const component = await mount(Input, {
        slots: {
          icon: '<span data-testid="icon-content">📧</span>',
        },
      });

      const iconContent = component.locator('[data-testid="icon-content"]');
      await expect(iconContent).toBeVisible();
      await expect(iconContent).toHaveText('📧');
    });

    test('renders custom helper message slot', async ({ mount }) => {
      const component = await mount(Input, {
        props: { displayHelper: true },
        slots: {
          helperMessage: '<span data-testid="custom-helper">Custom helper message</span>',
        },
      });

      const customHelper = component.locator('[data-testid="custom-helper"]');
      await expect(customHelper).toBeVisible();
      await expect(customHelper).toHaveText('Custom helper message');
    });

    test('adjusts input width based on trailing slot presence', async ({ mount }) => {
      const component = await mount(Input, {
        props: { offsetSize: 'sm' },
        slots: {
          trailing: '<span>Trailing</span>',
        },
      });

      const input = component.locator('input');
      await expect(input).toHaveClass(/spr-w-\[40%\]/);
    });

    test('adjusts input padding based on slot presence', async ({ mount }) => {
      const component = await mount(Input, {
        slots: {
          prefix: '<span>$</span>',
        },
      });

      const input = component.locator('input');
      await expect(input).toHaveClass(/spr-pr-3/);
    });
  });

  test.describe('Offset Sizes', () => {
    const offsetSizes = ['xs', 'sm', 'md'] as const;

    for (const size of offsetSizes) {
      test(`applies correct input width for offsetSize="${size}" with trailing slot`, async ({ mount }) => {
        const component = await mount(Input, {
          props: { offsetSize: size },
          slots: {
            trailing: '<span>Trailing</span>',
          },
        });

        const input = component.locator('input');

        if (size === 'xs') {
          await expect(input).toHaveClass(/spr-w-\[50px\]/);
        } else if (size === 'sm') {
          await expect(input).toHaveClass(/spr-w-\[40%\]/);
        } else if (size === 'md') {
          await expect(input).toHaveClass(/spr-w-\[100%\]/);
        }
      });
    }
  });

  test.describe('Accessibility', () => {
    test('associates label with input via for/id', async ({ mount }) => {
      const component = await mount(Input, {
        props: {
          id: 'email-input',
          label: 'Email',
        },
      });

      const label = component.locator('label');
      const input = component.locator('input');

      await expect(label).toHaveAttribute('for', 'email-input');
      await expect(input).toHaveAttribute('id', 'email-input');
    });

    test('supports keyboard navigation', async ({ mount }) => {
      const component = await mount(Input);

      const input = component.locator('input');

      // Tab to focus the input
      await input.focus();
      await expect(input).toBeFocused();

      // Type in the input
      await input.press('KeyH');
      await expect(input).toHaveValue('h');
    });

    test('prevents interaction when disabled', async ({ mount }) => {
      const component = await mount(Input, {
        props: { disabled: true },
      });

      const input = component.locator('input');

      // Should not be focusable
      await expect(input).toBeDisabled();

      // The disableClickEvent should prevent interaction when disabled
    });

    test('maintains proper focus management', async ({ mount }) => {
      const component = await mount(Input, {
        props: { label: 'Test Input' },
      });

      const input = component.locator('input');

      await input.focus();
      await expect(input).toBeFocused();

      await input.blur();
      await expect(input).not.toBeFocused();
    });
  });

  test.describe('Edge Cases', () => {
    test('handles null/undefined modelValue gracefully', async ({ mount }) => {
      const component = await mount(Input, {
        props: { modelValue: undefined },
      });

      const input = component.locator('input');
      await expect(input).toHaveValue('');
    });

    test('handles very long input values', async ({ mount }) => {
      const longValue = 'A'.repeat(1000);

      const component = await mount(Input, {
        props: { modelValue: longValue },
      });

      const input = component.locator('input');
      await expect(input).toHaveValue(longValue);
    });

    test('handles special characters in input', async ({ mount }) => {
      let emittedValue: string | number | undefined;

      const component = await mount(Input, {
        props: {
          'onUpdate:modelValue': (value: string | number) => {
            emittedValue = value;
          },
        },
      });

      const input = component.locator('input');
      const specialText = '!@#$%^&*()_+{}|:"<>?[]\\;\'.,/';

      await input.fill(specialText);

      // Wait for the event to be processed
      await component.waitFor();
      expect(emittedValue).toBe(specialText);
    });

    test('handles rapid input changes', async ({ mount }) => {
      const emittedValues: (string | number)[] = [];

      const component = await mount(Input, {
        props: {
          'onUpdate:modelValue': (value: string | number) => {
            emittedValues.push(value);
          },
        },
      });

      const input = component.locator('input');

      // Fill input progressively and wait for each change
      await input.fill('a');
      await component.waitFor();
      await input.fill('ab');
      await component.waitFor();
      await input.fill('abc');
      await component.waitFor();

      // Should capture all progressive changes
      expect(emittedValues.length).toBeGreaterThan(0);
      expect(emittedValues).toContain('abc'); // Final value should always be present
    });

    test('maintains character count accuracy with unicode characters', async ({ mount }) => {
      const component = await mount(Input, {
        props: {
          showCharCount: true,
          modelValue: '🎉🎊🎈',
        },
      });

      // Each emoji is counted as 2 characters in JavaScript
      const charCount = component.getByText('6');
      await expect(charCount).toBeVisible();
    });
  });

  test.describe('Prop Combinations', () => {
    test('disabled input with error state', async ({ mount }) => {
      const component = await mount(Input, {
        props: {
          disabled: true,
          error: true,
          label: 'Disabled Error Input',
        },
      });

      const input = component.locator('input');
      const label = component.locator('label');

      await expect(input).toBeDisabled();
      await expect(component.locator('.spr-background-color-disabled')).toBeVisible();
      await expect(label).toHaveClass(/spr-text-color-on-fill-disabled/);
    });

    test('readonly input with helper and character count', async ({ mount }) => {
      const component = await mount(Input, {
        props: {
          readonly: true,
          displayHelper: true,
          helperText: 'This field is read-only',
          showCharCount: true,
          maxLength: 50,
          modelValue: 'Read-only value',
        },
      });

      const input = component.locator('input');

      await expect(input).toHaveAttribute('readonly');
      await expect(component).toContainText('This field is read-only');
      await expect(component).toContainText('15/50');
    });

    test('error state with helper icon and character count at limit', async ({ mount }) => {
      const component = await mount(Input, {
        props: {
          error: true,
          displayHelper: true,
          helperIcon: 'ph:warning',
          helperText: 'Invalid input',
          showCharCount: true,
          maxLength: 5,
          modelValue: 'toolong',
        },
      });

      const helperText = component.locator('.spr-text-color-danger-base').filter({ hasText: 'Invalid input' });
      const charCount = component.getByText('7/5');

      await expect(helperText).toBeVisible();
      await expect(charCount).toHaveClass(/spr-text-color-danger-base/);
      await expect(component.locator('svg')).toBeVisible();
    });

    test('all slots with various states', async ({ mount }) => {
      const component = await mount(Input, {
        props: {
          active: true,
          displayHelper: true,
          showCharCount: true,
          maxLength: 20,
          offsetSize: 'md',
        },
        slots: {
          prefix: '<span>$</span>',
          trailing: '<button>Go</button>',
          icon: '<span>📧</span>',
          helperMessage: '<span>Custom helper</span>',
        },
      });

      await expect(component.locator('span').filter({ hasText: '$' })).toBeVisible();
      await expect(component.locator('button').filter({ hasText: 'Go' })).toBeVisible();
      await expect(component.locator('span').filter({ hasText: '📧' })).toBeVisible();
      await expect(component.locator('span').filter({ hasText: 'Custom helper' })).toBeVisible();

      const input = component.locator('input');
      await expect(input).toHaveClass(/spr-w-\[100%\]/); // md offset size
    });
  });

  test.describe('Type Validation', () => {
    test('handles invalid type gracefully', async ({ mount }) => {
      // Mount with an invalid type - should fallback to default
      const component = await mount(Input, {
        props: { type: 'invalid-type' as never },
      });

      const input = component.locator('input');
      // Should still render and function
      await expect(input).toBeVisible();
    });

    test('validates email input behavior', async ({ mount }) => {
      const component = await mount(Input, {
        props: { type: 'email' },
      });

      const input = component.locator('input');
      await expect(input).toHaveAttribute('type', 'email');

      // Browser validation would handle email format
      await input.fill('test@example.com');
      await expect(input).toHaveValue('test@example.com');
    });

    test('validates url input with prefix slot', async ({ mount }) => {
      const component = await mount(Input, {
        props: { type: 'url' },
        slots: {
          prefix: '<span>https://</span>',
        },
      });

      const input = component.locator('input');
      const prefix = component.locator('span').filter({ hasText: 'https://' });

      await expect(input).toHaveAttribute('type', 'url');
      await expect(prefix).toBeVisible();
      // Test that URL input works with prefix
      await input.fill('example.com');
      await expect(input).toHaveValue('example.com');
    });
  });
});
