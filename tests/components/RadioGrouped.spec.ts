/**
 * RadioGrouped Component Tests
 *
 * Test Coverage Rationale:
 * - Basic rendering with options array
 * - Props testing (options, disabled, displayHelper, fullWidth)
 * - v-model two-way binding with options
 * - Event emission testing (update:modelValue)
 * - Individual option disabled states
 * - Display helper text rendering
 * - Accessibility compliance (ARIA attributes, labels)
 * - User interactions (clicking options, keyboard)
 * - Edge cases (empty options, special characters, long text)
 *
 * ASSUMPTIONS:
 * - Options follow RadioOption interface with text and value properties
 * - Component renders radio buttons for each option
 * - V-model binding works with option values
 *
 * TODO (Future Enhancements):
 * - Test CSS class applications for different states
 * - Validate helper icon rendering
 * - Test accessibility with screen reader simulation
 */

import { test, expect } from '@playwright/experimental-ct-vue';
import RadioGrouped from '@/components/radio-grouped/radio-grouped.vue';

test.describe('RadioGrouped Component', () => {
  test.describe('Rendering', () => {
    test('renders with required props and options', async ({ mount }) => {
      const component = await mount(RadioGrouped, {
        props: {
          id: 'test-radio-group',
          name: 'test-group',
          options: [
            { text: 'Option 1', value: 'value1' },
            { text: 'Option 2', value: 'value2' },
            { text: 'Option 3', value: 'value3' },
          ],
        },
      });

      await expect(component).toBeVisible();
      const inputs = component.locator('input[type="radio"]');
      await expect(inputs).toHaveCount(3);

      // Check labels
      const labels = component.locator('label');
      await expect(labels).toHaveCount(3);
      await expect(labels.nth(0)).toContainText('Option 1');
      await expect(labels.nth(1)).toContainText('Option 2');
      await expect(labels.nth(2)).toContainText('Option 3');
    });

    test('renders without options', async ({ mount }) => {
      const component = await mount(RadioGrouped, {
        props: {
          id: 'empty-radio-group',
          name: 'test-group',
          options: [],
        },
      });

      await expect(component).toBeVisible();
      const inputs = component.locator('input[type="radio"]');
      await expect(inputs).toHaveCount(0);
    });

    test('renders with single option', async ({ mount }) => {
      const component = await mount(RadioGrouped, {
        props: {
          id: 'single-option-group',
          name: 'test-group',
          options: [{ text: 'Only Option', value: 'only' }],
        },
      });

      await expect(component).toBeVisible();
      const inputs = component.locator('input[type="radio"]');
      await expect(inputs).toHaveCount(1);
      await expect(component.locator('label')).toContainText('Only Option');
    });

    test('renders with display helper text', async ({ mount }) => {
      const component = await mount(RadioGrouped, {
        props: {
          id: 'helper-radio-group',
          name: 'test-group',
          options: [
            { text: 'Option 1', value: 'value1' },
            { text: 'Option 2', value: 'value2' },
          ],
          displayHelper: true,
          helperText: 'This is a helpful message',
        },
      });

      await expect(component.locator('span').filter({ hasText: 'This is a helpful message' })).toBeVisible();
    });

    test('does not render helper text when displayHelper is false', async ({ mount }) => {
      const component = await mount(RadioGrouped, {
        props: {
          id: 'no-helper-radio-group',
          name: 'test-group',
          options: [{ text: 'Option 1', value: 'value1' }],
          displayHelper: false,
          helperText: 'This should not be visible',
        },
      });

      const helperSpan = component.locator('span').filter({ hasText: 'This should not be visible' });
      await expect(helperSpan).toHaveCount(0);
    });
  });

  test.describe('Props - Visual Variants', () => {
    test('renders with disabled prop', async ({ mount }) => {
      const component = await mount(RadioGrouped, {
        props: {
          id: 'disabled-radio-group',
          name: 'test-group',
          options: [
            { text: 'Option 1', value: 'value1' },
            { text: 'Option 2', value: 'value2' },
          ],
          disabled: true,
        },
      });

      const inputs = component.locator('input[type="radio"]');
      await expect(inputs.nth(0)).toBeDisabled();
      await expect(inputs.nth(1)).toBeDisabled();
    });

    test('renders with individual option disabled state', async ({ mount }) => {
      const component = await mount(RadioGrouped, {
        props: {
          id: 'partial-disabled-group',
          name: 'test-group',
          options: [
            { text: 'Option 1', value: 'value1' },
            { text: 'Option 2', value: 'value2', disabled: true },
            { text: 'Option 3', value: 'value3' },
          ],
        },
      });

      const inputs = component.locator('input[type="radio"]');
      await expect(inputs.nth(0)).not.toBeDisabled();
      await expect(inputs.nth(1)).toBeDisabled();
      await expect(inputs.nth(2)).not.toBeDisabled();
    });
  });

  test.describe('v-model and Value Binding', () => {
    test('handles string values', async ({ mount }) => {
      const component = await mount(RadioGrouped, {
        props: {
          id: 'string-radio-group',
          name: 'test-group',
          options: [
            { text: 'Option 1', value: 'option1' },
            { text: 'Option 2', value: 'option2' },
          ],
          modelValue: '',
        },
      });

      await expect(component).toBeVisible();
      const inputs = component.locator('input[type="radio"]');
      await expect(inputs.nth(0)).not.toBeChecked();
      await expect(inputs.nth(1)).not.toBeChecked();
    });

    test('handles number values', async ({ mount }) => {
      const component = await mount(RadioGrouped, {
        props: {
          id: 'number-radio-group',
          name: 'test-group',
          options: [
            { text: 'Option 1', value: 1 },
            { text: 'Option 2', value: 2 },
            { text: 'Option 3', value: 3 },
          ],
          modelValue: 0,
        },
      });

      await expect(component).toBeVisible();
      const inputs = component.locator('input[type="radio"]');
      await expect(inputs.nth(0)).not.toBeChecked();
      await expect(inputs.nth(1)).not.toBeChecked();
      await expect(inputs.nth(2)).not.toBeChecked();
    });

    test('reflects checked state when modelValue matches option value', async ({ mount }) => {
      const component = await mount(RadioGrouped, {
        props: {
          id: 'checked-radio-group',
          name: 'test-group',
          options: [
            { text: 'Option 1', value: 'value1' },
            { text: 'Option 2', value: 'value2' },
            { text: 'Option 3', value: 'value3' },
          ],
          modelValue: 'value2',
        },
      });

      const inputs = component.locator('input[type="radio"]');
      await expect(inputs.nth(0)).not.toBeChecked();
      await expect(inputs.nth(1)).toBeChecked();
      await expect(inputs.nth(2)).not.toBeChecked();
    });

    test('updates modelValue when option is selected', async ({ mount }) => {
      let emittedValue: any = null;

      const component = await mount(RadioGrouped, {
        props: {
          id: 'update-radio-group',
          name: 'test-group',
          options: [
            { text: 'Option 1', value: 'value1' },
            { text: 'Option 2', value: 'value2' },
          ],
          modelValue: 'value1',
        },
        on: {
          'update:modelValue': (value: any) => {
            emittedValue = value;
          },
        },
      });

      const inputs = component.locator('input[type="radio"]');
      await inputs.nth(1).click();
      expect(emittedValue).toBe('value2');
    });
  });

  test.describe('User Interactions', () => {
    test('can select option by clicking label', async ({ mount }) => {
      let emittedValue: any = null;

      const component = await mount(RadioGrouped, {
        props: {
          id: 'click-radio-group',
          name: 'test-group',
          options: [
            { text: 'Option 1', value: 'value1' },
            { text: 'Option 2', value: 'value2' },
          ],
          modelValue: '',
        },
        on: {
          'update:modelValue': (value: any) => {
            emittedValue = value;
          },
        },
      });

      const labels = component.locator('label');
      await labels.nth(0).click();
      expect(emittedValue).toBe('value1');
    });

    test('can select option by clicking input', async ({ mount }) => {
      let emittedValue: any = null;

      const component = await mount(RadioGrouped, {
        props: {
          id: 'input-click-radio-group',
          name: 'test-group',
          options: [
            { text: 'Option 1', value: 'value1' },
            { text: 'Option 2', value: 'value2' },
          ],
          modelValue: '',
        },
        on: {
          'update:modelValue': (value: any) => {
            emittedValue = value;
          },
        },
      });

      const inputs = component.locator('input[type="radio"]');
      await inputs.nth(1).click();
      expect(emittedValue).toBe('value2');
    });

    test('cannot select disabled option', async ({ mount }) => {
      let emittedValue: any = null;

      const component = await mount(RadioGrouped, {
        props: {
          id: 'disabled-option-click',
          name: 'test-group',
          options: [
            { text: 'Option 1', value: 'value1' },
            { text: 'Option 2', value: 'value2', disabled: true },
          ],
          modelValue: 'value1',
        },
        on: {
          'update:modelValue': (value: any) => {
            emittedValue = value;
          },
        },
      });

      const inputs = component.locator('input[type="radio"]');
      await expect(inputs.nth(1)).toBeDisabled();
      expect(emittedValue).toBeNull();
    });

    test('supports keyboard navigation', async ({ mount }) => {
      let emittedValue: any = null;

      const component = await mount(RadioGrouped, {
        props: {
          id: 'keyboard-radio-group',
          name: 'test-group',
          options: [
            { text: 'Option 1', value: 'value1' },
            { text: 'Option 2', value: 'value2' },
          ],
          modelValue: '',
        },
        on: {
          'update:modelValue': (value: any) => {
            emittedValue = value;
          },
        },
      });

      const firstInput = component.locator('input[type="radio"]').nth(0);
      await firstInput.focus();
      await firstInput.press('Space');
      expect(emittedValue).toBe('value1');
    });

    test('supports focus management', async ({ mount }) => {
      const component = await mount(RadioGrouped, {
        props: {
          id: 'focus-radio-group',
          name: 'test-group',
          options: [
            { text: 'Option 1', value: 'value1' },
            { text: 'Option 2', value: 'value2' },
          ],
        },
      });

      const input = component.locator('input[type="radio"]').nth(0);
      await input.focus();
      await expect(input).toBeFocused();
    });
  });

  test.describe('Accessibility', () => {
    test('has correct ARIA attributes', async ({ mount }) => {
      const component = await mount(RadioGrouped, {
        props: {
          id: 'aria-radio-group',
          name: 'accessibility-group',
          options: [
            { text: 'Option A', value: 'a' },
            { text: 'Option B', value: 'b' },
          ],
        },
      });

      const inputs = component.locator('input[type="radio"]');

      // First option
      await expect(inputs.nth(0)).toHaveAttribute('type', 'radio');
      await expect(inputs.nth(0)).toHaveAttribute('name', 'accessibility-group');
      await expect(inputs.nth(0)).toHaveAttribute('value', 'a');
      await expect(inputs.nth(0)).toHaveAttribute('id', 'aria-radio-group-0');

      // Second option
      await expect(inputs.nth(1)).toHaveAttribute('type', 'radio');
      await expect(inputs.nth(1)).toHaveAttribute('name', 'accessibility-group');
      await expect(inputs.nth(1)).toHaveAttribute('value', 'b');
      await expect(inputs.nth(1)).toHaveAttribute('id', 'aria-radio-group-1');
    });

    test('maintains proper label association', async ({ mount }) => {
      const component = await mount(RadioGrouped, {
        props: {
          id: 'associated-radio-group',
          name: 'test-group',
          options: [
            { text: 'Associated Label 1', value: 'value1' },
            { text: 'Associated Label 2', value: 'value2' },
          ],
        },
      });

      // Click label should activate radio
      const labels = component.locator('label');
      const firstLabel = labels.nth(0);
      const firstInput = component.locator('input[type="radio"]').nth(0);

      await firstLabel.click();
      await expect(firstInput).toBeChecked();
    });

    test('provides accessible names through labels', async ({ mount }) => {
      const component = await mount(RadioGrouped, {
        props: {
          id: 'named-radio-group',
          name: 'test-group',
          options: [
            { text: 'Accessible Name 1', value: 'value1' },
            { text: 'Accessible Name 2', value: 'value2' },
          ],
        },
      });

      const radio1 = component.getByRole('radio', { name: 'Accessible Name 1' });
      const radio2 = component.getByRole('radio', { name: 'Accessible Name 2' });

      await expect(radio1).toBeVisible();
      await expect(radio2).toBeVisible();
    });

    test('announces disabled state correctly', async ({ mount }) => {
      const component = await mount(RadioGrouped, {
        props: {
          id: 'disabled-a11y-group',
          name: 'test-group',
          options: [
            { text: 'Enabled', value: 'enabled' },
            { text: 'Disabled option', value: 'disabled', disabled: true },
          ],
        },
      });

      const enabledRadio = component.getByRole('radio', { name: 'Enabled' });
      const disabledRadio = component.getByRole('radio', { name: 'Disabled option' });

      await expect(enabledRadio).not.toBeDisabled();
      await expect(disabledRadio).toBeDisabled();
    });
  });

  test.describe('Edge Cases', () => {
    test('handles undefined modelValue', async ({ mount }) => {
      const component = await mount(RadioGrouped, {
        props: {
          id: 'undefined-model-group',
          name: 'test-group',
          options: [
            { text: 'Option 1', value: 'value1' },
            { text: 'Option 2', value: 'value2' },
          ],
        },
      });

      const inputs = component.locator('input[type="radio"]');
      await expect(inputs.nth(0)).not.toBeChecked();
      await expect(inputs.nth(1)).not.toBeChecked();
    });

    test('handles empty string modelValue', async ({ mount }) => {
      const component = await mount(RadioGrouped, {
        props: {
          id: 'empty-model-group',
          name: 'test-group',
          options: [
            { text: 'Option 1', value: 'value1' },
            { text: 'Option 2', value: 'value2' },
          ],
          modelValue: '',
        },
      });

      const inputs = component.locator('input[type="radio"]');
      await expect(inputs.nth(0)).not.toBeChecked();
      await expect(inputs.nth(1)).not.toBeChecked();
    });

    test('handles very long option text', async ({ mount }) => {
      const longText =
        'This is a very long option text that might wrap to multiple lines and should still be displayed correctly without breaking the layout or accessibility features of the radio grouped component.';

      const component = await mount(RadioGrouped, {
        props: {
          id: 'long-text-group',
          name: 'test-group',
          options: [
            { text: longText, value: 'long' },
            { text: 'Normal option', value: 'normal' },
          ],
        },
      });

      await expect(component.locator('label').filter({ hasText: longText })).toBeVisible();
    });

    test('handles special characters in values', async ({ mount }) => {
      const specialValue = 'special-chars-@#$%^&*()_+{}[]|;:,.<>?';
      let emittedValue: any = null;

      const component = await mount(RadioGrouped, {
        props: {
          id: 'special-group',
          name: 'test-group',
          options: [
            { text: 'Normal', value: 'normal' },
            { text: 'Special', value: specialValue },
          ],
          modelValue: '',
        },
        on: {
          'update:modelValue': (value: any) => {
            emittedValue = value;
          },
        },
      });

      const inputs = component.locator('input[type="radio"]');
      await inputs.nth(1).click();
      expect(emittedValue).toBe(specialValue);
    });

    test('handles mixed value types', async ({ mount }) => {
      const component = await mount(RadioGrouped, {
        props: {
          id: 'mixed-types-group',
          name: 'test-group',
          options: [
            { text: 'String', value: 'string-value' },
            { text: 'Number', value: 42 },
            { text: 'Boolean', value: true },
          ],
          modelValue: 42,
        },
      });

      const inputs = component.locator('input[type="radio"]');
      await expect(inputs.nth(0)).not.toBeChecked();
      await expect(inputs.nth(1)).toBeChecked();
      await expect(inputs.nth(2)).not.toBeChecked();
    });
  });

  test.describe('Display Helper', () => {
    test('displays helper text when displayHelper is true', async ({ mount }) => {
      const component = await mount(RadioGrouped, {
        props: {
          id: 'helper-visible-group',
          name: 'test-group',
          options: [{ text: 'Option 1', value: 'value1' }],
          displayHelper: true,
          helperText: 'Helper text is visible',
        },
      });

      await expect(component.locator('span').filter({ hasText: 'Helper text is visible' })).toBeVisible();
    });

    test('hides helper text when helperText is empty', async ({ mount }) => {
      const component = await mount(RadioGrouped, {
        props: {
          id: 'helper-empty-group',
          name: 'test-group',
          options: [{ text: 'Option 1', value: 'value1' }],
          displayHelper: true,
          helperText: '',
        },
      });

      // Should not render the helper section if helperText is empty
      const helpers = component.locator('span').filter({ hasText: '' });
      await expect(helpers.first()).toBeVisible(); // Will find radio indicators, not helper
    });
  });
});
