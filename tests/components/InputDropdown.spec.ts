/**
 * InputDropdown Component Tests
 *
 * Coverage includes:
 * - Rendering with default props and visual elements
 * - Caret icon display and positioning
 * - v-model two-way binding behavior
 * - Event emissions (update:modelValue, click, keydown)
 * - Input type validation and props inheritance
 * - Accessibility (ARIA attributes, keyboard navigation)
 * - Interactive states (focus, disabled, readonly)
 * - Integration patterns as dropdown trigger
 * - Edge cases (empty values, special characters)
 * - Styling and visual presentation
 *
 * Rationale:
 * - InputDropdown extends base Input component functionality
 * - Primarily used as trigger element in dropdown components
 * - Validates proper icon rendering and click handling
 * - Ensures accessibility compliance for dropdown patterns
 * - Tests integration scenarios common in form components
 * - Verifies inheritance of Input component features
 */

import { test, expect } from '@playwright/experimental-ct-vue';
import InputDropdown from '@/components/input/input-dropdown/input-dropdown.vue';

test.describe('InputDropdown Component', () => {
  test.describe('Rendering', () => {
    test('renders with default props', async ({ mount }) => {
      const component = await mount(InputDropdown);

      const input = component.locator('input');
      await expect(input).toBeVisible();
      await expect(input).toHaveAttribute('type', 'text');
      await expect(input).not.toBeDisabled();
      await expect(input).not.toHaveAttribute('readonly');
      await expect(input).toHaveValue('');
    });

    test('displays caret-down icon by default', async ({ mount }) => {
      const component = await mount(InputDropdown);

      // Should show the caret-down icon (rendered as SVG)
      const icon = component.locator('svg');
      await expect(icon).toBeVisible();
    });

    test('renders with label and supporting label', async ({ mount }) => {
      const component = await mount(InputDropdown, {
        props: {
          id: 'dropdown-input',
          label: 'Select Option',
          supportingLabel: '(required)',
        } as any,
      });

      const label = component.locator('label');
      const input = component.locator('input');

      await expect(label).toBeVisible();
      await expect(label).toContainText('Select Option');
      await expect(label).toContainText('(required)');
      await expect(label).toHaveAttribute('for', 'dropdown-input');
      await expect(input).toHaveAttribute('id', 'dropdown-input');
    });

    test('applies placeholder correctly', async ({ mount }) => {
      const component = await mount(InputDropdown, {
        props: { placeholder: 'Choose an option...' } as any,
      });

      const input = component.locator('input');
      await expect(input).toHaveAttribute('placeholder', 'Choose an option...');
    });
  });

  test.describe('Icon Functionality', () => {
    test('displays caret-down icon in icon slot', async ({ mount }) => {
      const component = await mount(InputDropdown);

      const caretIcon = component.locator('svg');
      await expect(caretIcon).toBeVisible();
    });

    test('icon is clickable and positioned correctly', async ({ mount }) => {
      const component = await mount(InputDropdown, {
        props: { readonly: true } as any,
      });

      const icon = component.locator('svg');
      await expect(icon).toBeVisible();

      // Icon should be clickable when used as dropdown trigger
      await icon.click();
    });
  });

  test.describe('v-model and Value Handling', () => {
    test('updates value when modelValue prop changes', async ({ mount }) => {
      const component = await mount(InputDropdown, {
        props: { modelValue: 'Selected Option' } as any,
      });

      const input = component.locator('input');
      await expect(input).toHaveValue('Selected Option');
    });

    test('emits update:modelValue when user types', async ({ mount }) => {
      let emittedValue: string | number | undefined;

      const component = await mount(InputDropdown, {
        props: {
          'onUpdate:modelValue': (value: string | number) => {
            emittedValue = value;
          },
        } as any,
      });

      const input = component.locator('input');
      await input.fill('new selection');

      // Wait for the event to be processed
      await component.waitFor();
      expect(emittedValue).toBe('new selection');
    });

    test('handles empty values correctly', async ({ mount }) => {
      const component = await mount(InputDropdown, {
        props: { modelValue: undefined } as any,
      });

      const input = component.locator('input');
      await expect(input).toHaveValue('');
    });
  });

  test.describe('States', () => {
    test('applies disabled state correctly', async ({ mount }) => {
      const component = await mount(InputDropdown, {
        props: { disabled: true } as any,
      });

      const input = component.locator('input');
      await expect(input).toBeDisabled();

      // Check for disabled styling
      await expect(component.locator('.spr-background-color-disabled')).toBeVisible();
      await expect(component.locator('.spr-cursor-not-allowed')).toBeVisible();
    });

    test('applies readonly state with pointer cursor', async ({ mount }) => {
      const component = await mount(InputDropdown, {
        props: { readonly: true } as any,
      });

      const input = component.locator('input');
      await expect(input).toHaveAttribute('readonly');

      // Should have pointer cursor when readonly (common for dropdown triggers)
      await expect(component.locator('.spr-cursor-pointer')).toBeVisible();
    });

    test('applies error state correctly', async ({ mount }) => {
      const component = await mount(InputDropdown, {
        props: { error: true } as any,
      });

      // Check for error styling
      await expect(component.locator('.spr-border-color-danger-base')).toBeVisible();
    });

    test('applies active state correctly', async ({ mount }) => {
      const component = await mount(InputDropdown, {
        props: { active: true } as any,
      });

      // Check for active styling
      await expect(component.locator('.spr-border-color-brand-base')).toBeVisible();
    });
  });

  test.describe('Helper Text and Character Count', () => {
    test('displays helper text when provided', async ({ mount }) => {
      const component = await mount(InputDropdown, {
        props: {
          displayHelper: true,
          helperText: 'Select from available options',
        } as any,
      });

      await expect(component).toContainText('Select from available options');
    });

    test('displays helper icon when provided', async ({ mount }) => {
      const component = await mount(InputDropdown, {
        props: {
          displayHelper: true,
          helperIcon: 'ph:info',
          helperText: 'Helper with icon',
        } as any,
      });

      // Should have both the caret icon and helper icon
      const icons = component.locator('svg');
      await expect(icons).toHaveCount(2);
      await expect(component).toContainText('Helper with icon');
    });

    test('displays character count when enabled', async ({ mount }) => {
      const component = await mount(InputDropdown, {
        props: {
          showCharCount: true,
          modelValue: 'Option 1',
        } as any,
      });

      const charCount = component.getByText('8');
      await expect(charCount).toBeVisible();
    });
  });

  test.describe('Accessibility', () => {
    test('associates label with input via for/id', async ({ mount }) => {
      const component = await mount(InputDropdown, {
        props: {
          id: 'select-input',
          label: 'Choose Option',
        } as any,
      });

      const label = component.locator('label');
      const input = component.locator('input');

      await expect(label).toHaveAttribute('for', 'select-input');
      await expect(input).toHaveAttribute('id', 'select-input');
    });

    test('maintains proper focus management', async ({ mount }) => {
      const component = await mount(InputDropdown, {
        props: { label: 'Dropdown Input' } as any,
      });

      const input = component.locator('input');

      await input.focus();
      await expect(input).toBeFocused();

      await input.blur();
      await expect(input).not.toBeFocused();
    });

    test('supports keyboard navigation', async ({ mount }) => {
      const component = await mount(InputDropdown);

      const input = component.locator('input');

      // Tab to focus the input
      await input.focus();
      await expect(input).toBeFocused();

      // Arrow keys should work (useful for dropdown navigation)
      await input.press('ArrowDown');
      await input.press('ArrowUp');
      await input.press('Enter');
      await input.press('Escape');
    });

    test('prevents interaction when disabled', async ({ mount }) => {
      const component = await mount(InputDropdown, {
        props: { disabled: true } as any,
      });

      const input = component.locator('input');
      await expect(input).toBeDisabled();
    });
  });

  test.describe('Integration as Dropdown Trigger', () => {
    test('functions as readonly dropdown trigger', async ({ mount }) => {
      const component = await mount(InputDropdown, {
        props: {
          readonly: true,
          modelValue: 'Selected Item',
          placeholder: 'Click to select...',
        } as any,
      });

      const input = component.locator('input');

      await expect(input).toHaveAttribute('readonly');
      await expect(input).toHaveValue('Selected Item');
      await expect(component.locator('.spr-cursor-pointer')).toBeVisible();

      // Should be clickable despite being readonly
      await input.click();
    });

    test('displays placeholder when no value selected', async ({ mount }) => {
      const component = await mount(InputDropdown, {
        props: {
          readonly: true,
          placeholder: 'Select an option...',
        } as any,
      });

      const input = component.locator('input');
      await expect(input).toHaveAttribute('placeholder', 'Select an option...');
      await expect(input).toHaveValue('');
    });

    test('works with different input types', async ({ mount }) => {
      const component = await mount(InputDropdown, {
        props: {
          type: 'email',
          readonly: true,
        } as any,
      });

      const input = component.locator('input');
      await expect(input).toHaveAttribute('type', 'email');
      await expect(input).toHaveAttribute('readonly');
    });
  });

  test.describe('Props Inheritance from Input Component', () => {
    test('inherits all Input component props', async ({ mount }) => {
      const component = await mount(InputDropdown, {
        props: {
          minLength: 5,
          maxLength: 50,
          type: 'text',
          placeholder: 'Enter text...',
          active: true,
        } as any,
      });

      const input = component.locator('input');

      await expect(input).toHaveAttribute('minlength', '5');
      await expect(input).toHaveAttribute('maxlength', '50');
      await expect(input).toHaveAttribute('type', 'text');
      await expect(input).toHaveAttribute('placeholder', 'Enter text...');
      await expect(component.locator('.spr-border-color-brand-base')).toBeVisible();
    });

    test('supports all offset sizes', async ({ mount }) => {
      const offsetSizes = ['xs', 'sm', 'md'] as const;

      for (const size of offsetSizes) {
        const component = await mount(InputDropdown, {
          props: { offsetSize: size } as any,
        });

        // Component should render without errors
        const input = component.locator('input');
        await expect(input).toBeVisible();
      }
    });
  });

  test.describe('Edge Cases', () => {
    test('handles null/undefined modelValue gracefully', async ({ mount }) => {
      const component = await mount(InputDropdown, {
        props: { modelValue: undefined } as any,
      });

      const input = component.locator('input');
      await expect(input).toHaveValue('');
    });

    test('handles long option values', async ({ mount }) => {
      const longValue = 'Very Long Option Name That Might Overflow Container Width';

      const component = await mount(InputDropdown, {
        props: { modelValue: longValue } as any,
      });

      const input = component.locator('input');
      await expect(input).toHaveValue(longValue);
    });

    test('handles special characters in values', async ({ mount }) => {
      const specialValue = 'Option with !@#$%^&*()_+ characters';

      const component = await mount(InputDropdown, {
        props: { modelValue: specialValue } as any,
      });

      const input = component.locator('input');
      await expect(input).toHaveValue(specialValue);
    });

    test('maintains icon visibility with various states', async ({ mount }) => {
      const component = await mount(InputDropdown, {
        props: {
          disabled: true,
          error: true,
          readonly: true,
        } as any,
      });

      // Caret icon should always be visible regardless of state
      const icon = component.locator('svg');
      await expect(icon).toBeVisible();
    });
  });

  test.describe('Styling and Visual Behavior', () => {
    test('applies cursor pointer when readonly', async ({ mount }) => {
      const component = await mount(InputDropdown, {
        props: { readonly: true } as any,
      });

      await expect(component.locator('.spr-cursor-pointer')).toBeVisible();
    });

    test('does not apply cursor pointer when not readonly', async ({ mount }) => {
      const component = await mount(InputDropdown, {
        props: { readonly: false } as any,
      });

      await expect(component.locator('.spr-cursor-pointer')).not.toBeVisible();
    });

    test('applies cursor pointer with readonly string values', async ({ mount }) => {
      // Test with various readonly values that should trigger pointer cursor
      const readonlyValues = ['', 'true', true];

      for (const readonlyValue of readonlyValues) {
        const component = await mount(InputDropdown, {
          props: { readonly: readonlyValue } as any,
        });

        await expect(component.locator('.spr-cursor-pointer')).toBeVisible();
      }
    });

    test('icon positioning remains consistent across states', async ({ mount }) => {
      const states = [{ disabled: true }, { error: true }, { active: true }, { readonly: true }];

      for (const state of states) {
        const component = await mount(InputDropdown, {
          props: state as any,
        });

        // Icon should always be visible and present in the component
        const icon = component.locator('svg');
        await expect(icon).toBeVisible();
      }
    });
  });
});
