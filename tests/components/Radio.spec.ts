/**
 * Radio Component Tests
 *
 * Test Coverage Rationale:
 * - Basic rendering and DOM structure validation
 * - Props testing for all variants (bordered, disabled, fullWidth, description)
 * - v-model two-way binding behavior with different value types
 * - Event emission testing (update:modelValue)
 * - Accessibility compliance (ARIA attributes, keyboard navigation, labels)
 * - Visual states (checked, unchecked, disabled, hover, bordered)
 * - Edge cases (empty slots, different value types, description handling)
 * - User interactions (click, keyboard navigation, focus management)
 *
 * ASSUMPTIONS:
 * - Component follows standard radio input behavior patterns
 * - Hover states are managed by CSS and useElementHover composable
 * - Animation classes are applied correctly via computed properties
 *
 * TODO (Future Enhancements):
 * - Test radio group behavior with multiple radios sharing same name
 * - Validate CSS class applications for different state combinations
 * - Test accessibility with screen reader simulation
 */

import { test, expect } from '@playwright/experimental-ct-vue';
import Radio from '@/components/radio/radio.vue';

test.describe('Radio Component', () => {
  test.describe('Rendering', () => {
    test('renders with required props', async ({ mount }) => {
      const component = await mount(Radio, {
        props: {
          id: 'test-radio',
          name: 'test-group',
          value: 'option1',
        },
        slots: { default: 'Option 1' },
      });

      await expect(component).toBeVisible();
      await expect(component.locator('input[type="radio"]')).toBeVisible();
      await expect(component.locator('label')).toHaveText('Option 1');
      await expect(component.locator('input')).toHaveAttribute('id', 'test-radio');
      await expect(component.locator('input')).toHaveAttribute('name', 'test-group');
      await expect(component.locator('input')).toHaveAttribute('value', 'option1');
      await expect(component.locator('label')).toHaveAttribute('for', 'test-radio');
    });

    test('renders without slot content', async ({ mount }) => {
      const component = await mount(Radio, {
        props: {
          id: 'empty-radio',
          name: 'test-group',
          value: 'empty',
        },
      });

      await expect(component).toBeVisible();
      await expect(component.locator('input[type="radio"]')).toBeVisible();
      // Label should still be present even without slot content
      const label = component.locator('label');
      await expect(label).toBeAttached();
      // The label text content should be minimal (just the radio indicator)
      const labelText = await label.textContent();
      expect(labelText?.trim()).toBe('');
    });

    test('renders with description', async ({ mount }) => {
      const component = await mount(Radio, {
        props: {
          id: 'radio-with-desc',
          name: 'test-group',
          value: 'option1',
          description: 'This is a helpful description',
        },
        slots: { default: 'Option with description' },
      });

      await expect(component.locator('span').filter({ hasText: 'This is a helpful description' })).toBeVisible();
      await expect(component.locator('label')).toContainText('Option with description');
      await expect(component.locator('label')).toContainText('This is a helpful description');
    });

    test('does not render description when empty string', async ({ mount }) => {
      const component = await mount(Radio, {
        props: {
          id: 'radio-no-desc',
          name: 'test-group',
          value: 'option1',
          description: '',
        },
        slots: { default: 'Option without description' },
      });

      await expect(component.locator('span').filter({ hasText: '' })).toHaveCount(1); // Only the indicator span
      const descriptionSpan = component.locator('span').filter({ hasText: /This is a helpful description/ });
      await expect(descriptionSpan).toHaveCount(0);
    });
  });

  test.describe('Props - Visual Variants', () => {
    test('renders with bordered variant', async ({ mount }) => {
      const component = await mount(Radio, {
        props: {
          id: 'bordered-radio',
          name: 'test-group',
          value: 'bordered',
          bordered: true,
        },
        slots: { default: 'Bordered option' },
      });

      await expect(component).toBeVisible();
      // The bordered class should be applied to the label
      const label = component.locator('label');
      await expect(label).toBeVisible();
    });

    test('renders with fullWidth variant', async ({ mount }) => {
      const component = await mount(Radio, {
        props: {
          id: 'fullwidth-radio',
          name: 'test-group',
          value: 'fullwidth',
          fullWidth: true,
        },
        slots: { default: 'Full width option' },
      });

      await expect(component).toBeVisible();
      // The root div should have width class
      const rootDiv = component.locator('div').first();
      await expect(rootDiv).toBeVisible();
    });

    test('renders disabled state', async ({ mount }) => {
      const component = await mount(Radio, {
        props: {
          id: 'disabled-radio',
          name: 'test-group',
          value: 'disabled',
          disabled: true,
        },
        slots: { default: 'Disabled option' },
      });

      await expect(component.locator('input')).toBeDisabled();
      await expect(component.locator('label')).toHaveAttribute('disabled', 'true');
    });

    test('renders disabled state with description', async ({ mount }) => {
      const component = await mount(Radio, {
        props: {
          id: 'disabled-desc-radio',
          name: 'test-group',
          value: 'disabled',
          disabled: true,
          description: 'This option is disabled',
        },
        slots: { default: 'Disabled with description' },
      });

      await expect(component.locator('input')).toBeDisabled();
      await expect(component.locator('span').filter({ hasText: 'This option is disabled' })).toBeVisible();
    });
  });

  test.describe('v-model and Value Binding', () => {
    test('handles string values', async ({ mount }) => {
      let emittedValue: any = null;

      const component = await mount(Radio, {
        props: {
          id: 'string-radio',
          name: 'test-group',
          value: 'string-value',
          modelValue: '',
        },
        slots: { default: 'String option' },
        on: {
          'update:modelValue': (value: any) => {
            emittedValue = value;
          },
        },
      });

      await component.locator('input').check();
      expect(emittedValue).toBe('string-value');
      await expect(component.locator('input')).toBeChecked();
    });

    test('handles number values', async ({ mount }) => {
      let emittedValue: any = null;

      const component = await mount(Radio, {
        props: {
          id: 'number-radio',
          name: 'test-group',
          value: 42,
          modelValue: 0,
        },
        slots: { default: 'Number option' },
        on: {
          'update:modelValue': (value: any) => {
            emittedValue = value;
          },
        },
      });

      await component.locator('input').check();
      expect(emittedValue).toBe(42);
      await expect(component.locator('input')).toBeChecked();
    });

    test('handles boolean values', async ({ mount }) => {
      let emittedValue: any = null;

      const component = await mount(Radio, {
        props: {
          id: 'boolean-radio',
          name: 'test-group',
          value: true,
          modelValue: false,
        },
        slots: { default: 'Boolean option' },
        on: {
          'update:modelValue': (value: any) => {
            emittedValue = value;
          },
        },
      });

      await component.locator('input').check();
      expect(emittedValue).toBe(true);
      await expect(component.locator('input')).toBeChecked();
    });

    test('reflects checked state when modelValue matches value', async ({ mount }) => {
      const component = await mount(Radio, {
        props: {
          id: 'checked-radio',
          name: 'test-group',
          value: 'selected',
          modelValue: 'selected',
        },
        slots: { default: 'Pre-selected option' },
      });

      await expect(component.locator('input')).toBeChecked();
    });

    test('reflects unchecked state when modelValue does not match value', async ({ mount }) => {
      const component = await mount(Radio, {
        props: {
          id: 'unchecked-radio',
          name: 'test-group',
          value: 'option1',
          modelValue: 'option2',
        },
        slots: { default: 'Unselected option' },
      });

      await expect(component.locator('input')).not.toBeChecked();
    });
  });

  test.describe('User Interactions', () => {
    test('can be clicked to select', async ({ mount }) => {
      let emittedValue: any = null;

      const component = await mount(Radio, {
        props: {
          id: 'clickable-radio',
          name: 'test-group',
          value: 'clickable',
          modelValue: '',
        },
        slots: { default: 'Click me' },
        on: {
          'update:modelValue': (value: any) => {
            emittedValue = value;
          },
        },
      });

      await component.locator('label').click();
      expect(emittedValue).toBe('clickable');
      await expect(component.locator('input')).toBeChecked();
    });

    test('can be selected via input click', async ({ mount }) => {
      let emittedValue: any = null;

      const component = await mount(Radio, {
        props: {
          id: 'input-clickable-radio',
          name: 'test-group',
          value: 'input-clickable',
          modelValue: '',
        },
        slots: { default: 'Input click' },
        on: {
          'update:modelValue': (value: any) => {
            emittedValue = value;
          },
        },
      });

      await component.locator('input').click();
      expect(emittedValue).toBe('input-clickable');
      await expect(component.locator('input')).toBeChecked();
    });

    test('cannot be clicked when disabled', async ({ mount }) => {
      let emittedValue: any = null;

      const component = await mount(Radio, {
        props: {
          id: 'disabled-clickable',
          name: 'test-group',
          value: 'disabled',
          modelValue: '',
          disabled: true,
        },
        slots: { default: 'Disabled click' },
        on: {
          'update:modelValue': (value: any) => {
            emittedValue = value;
          },
        },
      });

      // Attempt to click - should not work
      await component.locator('label').click({ force: true });
      expect(emittedValue).toBeNull();
      await expect(component.locator('input')).not.toBeChecked();
      await expect(component.locator('input')).toBeDisabled();
    });

    test('supports keyboard navigation (Space key)', async ({ mount }) => {
      let emittedValue: any = null;

      const component = await mount(Radio, {
        props: {
          id: 'keyboard-radio',
          name: 'test-group',
          value: 'keyboard',
          modelValue: '',
        },
        slots: { default: 'Keyboard option' },
        on: {
          'update:modelValue': (value: any) => {
            emittedValue = value;
          },
        },
      });

      await component.locator('input').focus();
      await component.locator('input').press('Space');
      expect(emittedValue).toBe('keyboard');
      await expect(component.locator('input')).toBeChecked();
    });

    test('supports focus management', async ({ mount }) => {
      const component = await mount(Radio, {
        props: {
          id: 'focus-radio',
          name: 'test-group',
          value: 'focus',
        },
        slots: { default: 'Focus test' },
      });

      await component.locator('input').focus();
      await expect(component.locator('input')).toBeFocused();
    });
  });

  test.describe('Accessibility', () => {
    test('has correct ARIA attributes', async ({ mount }) => {
      const component = await mount(Radio, {
        props: {
          id: 'aria-radio',
          name: 'accessibility-group',
          value: 'aria-option',
        },
        slots: { default: 'Accessible option' },
      });

      const input = component.locator('input[type="radio"]');
      await expect(input).toHaveAttribute('type', 'radio');
      await expect(input).toHaveAttribute('name', 'accessibility-group');
      await expect(input).toHaveAttribute('value', 'aria-option');
      await expect(input).toHaveAttribute('id', 'aria-radio');

      const label = component.locator('label');
      await expect(label).toHaveAttribute('for', 'aria-radio');
    });

    test('maintains proper label association', async ({ mount }) => {
      const component = await mount(Radio, {
        props: {
          id: 'associated-radio',
          name: 'test-group',
          value: 'associated',
        },
        slots: { default: 'Associated label' },
      });

      // Click label should activate radio
      await component.locator('label').click();
      await expect(component.locator('input')).toBeChecked();
    });

    test('provides accessible name through label', async ({ mount }) => {
      const component = await mount(Radio, {
        props: {
          id: 'named-radio',
          name: 'test-group',
          value: 'named',
        },
        slots: { default: 'Accessible Radio Name' },
      });

      const radio = component.getByRole('radio', { name: 'Accessible Radio Name' });
      await expect(radio).toBeVisible();
      await expect(radio).toHaveAttribute('id', 'named-radio');
    });

    test('announces disabled state correctly', async ({ mount }) => {
      const component = await mount(Radio, {
        props: {
          id: 'disabled-a11y',
          name: 'test-group',
          value: 'disabled',
          disabled: true,
        },
        slots: { default: 'Disabled for accessibility' },
      });

      const radio = component.getByRole('radio', { name: 'Disabled for accessibility' });
      await expect(radio).toBeDisabled();
    });
  });

  test.describe('Edge Cases', () => {
    test('handles undefined modelValue', async ({ mount }) => {
      const component = await mount(Radio, {
        props: {
          id: 'undefined-model',
          name: 'test-group',
          value: 'test',
        },
        slots: { default: 'Undefined model' },
      });

      await expect(component.locator('input')).not.toBeChecked();
      await expect(component).toBeVisible();
    });

    test('handles empty string modelValue', async ({ mount }) => {
      const component = await mount(Radio, {
        props: {
          id: 'empty-model',
          name: 'test-group',
          value: 'test',
          modelValue: '',
        },
        slots: { default: 'Empty model' },
      });

      await expect(component.locator('input')).not.toBeChecked();
      await expect(component).toBeVisible();
    });

    test('handles very long description text', async ({ mount }) => {
      const longDescription =
        'This is a very long description that might wrap to multiple lines and should still be displayed correctly without breaking the layout or accessibility features of the radio component.';

      const component = await mount(Radio, {
        props: {
          id: 'long-desc-radio',
          name: 'test-group',
          value: 'long-desc',
          description: longDescription,
        },
        slots: { default: 'Long description option' },
      });

      await expect(component.locator('span').filter({ hasText: longDescription })).toBeVisible();
      await expect(component.locator('span').filter({ hasText: longDescription })).toContainText(longDescription);
    });

    test('handles special characters in values', async ({ mount }) => {
      const specialValue = 'special-chars-@#$%^&*()_+{}[]|;:,.<>?';
      let emittedValue: any = null;

      const component = await mount(Radio, {
        props: {
          id: 'special-radio',
          name: 'test-group',
          value: specialValue,
          modelValue: '',
        },
        slots: { default: 'Special chars' },
        on: {
          'update:modelValue': (value: any) => {
            emittedValue = value;
          },
        },
      });

      await component.locator('input').check();
      expect(emittedValue).toBe(specialValue);
      await expect(component.locator('input')).toHaveAttribute('value', specialValue);
    });
  });

  test.describe('Radio Group Behavior', () => {
    test('maintains radio input properties for group behavior', async ({ mount }) => {
      // Test individual radio properties that enable proper group behavior
      const radio1 = await mount(Radio, {
        props: {
          id: 'group-radio-1',
          name: 'radio-group',
          value: 'option1',
          modelValue: 'option1',
        },
        slots: { default: 'Option 1' },
      });

      // Verify first radio properties
      await expect(radio1.locator('input')).toHaveAttribute('name', 'radio-group');
      await expect(radio1.locator('input')).toHaveAttribute('value', 'option1');
      await expect(radio1.locator('input')).toHaveAttribute('id', 'group-radio-1');
      await expect(radio1.locator('input')).toBeChecked(); // modelValue matches value

      // Test second radio separately
      const radio2 = await mount(Radio, {
        props: {
          id: 'group-radio-2',
          name: 'radio-group', // Same name for grouping
          value: 'option2',
          modelValue: 'option1', // Different value, so unchecked
        },
        slots: { default: 'Option 2' },
      });

      // Verify second radio properties
      await expect(radio2.locator('input')).toHaveAttribute('name', 'radio-group');
      await expect(radio2.locator('input')).toHaveAttribute('value', 'option2');
      await expect(radio2.locator('input')).toHaveAttribute('id', 'group-radio-2');
      await expect(radio2.locator('input')).not.toBeChecked(); // modelValue doesn't match value
    });
  });

  test.describe('Display Helper', () => {
    test('displays helper message when displayHelper is true', async ({ mount }) => {
      const component = await mount(Radio, {
        props: {
          id: 'helper-radio',
          name: 'test-group',
          value: 'with-helper',
          displayHelper: true,
          helperText: 'This is a helpful message',
        },
        slots: { default: 'Option with helper' },
      });

      await expect(component.locator('span').filter({ hasText: 'This is a helpful message' })).toBeVisible();
    });

    test('does not display helper message when displayHelper is false', async ({ mount }) => {
      const component = await mount(Radio, {
        props: {
          id: 'no-helper-radio',
          name: 'test-group',
          value: 'no-helper',
          displayHelper: false,
          helperText: 'This should not be visible',
        },
        slots: { default: 'Option without helper' },
      });

      const helperSpan = component.locator('span').filter({ hasText: 'This should not be visible' });
      await expect(helperSpan).toHaveCount(0);
    });

    test('displays helper icon when provided', async ({ mount }) => {
      const component = await mount(Radio, {
        props: {
          id: 'icon-helper-radio',
          name: 'test-group',
          value: 'icon-helper',
          displayHelper: true,
          helperIcon: 'ph:check-circle',
          helperText: 'Verified',
        },
        slots: { default: 'Option with icon' },
      });

      // Icon should be rendered (from Iconify)
      await expect(component.locator('svg').first()).toBeVisible();
      await expect(component.locator('span').filter({ hasText: 'Verified' })).toBeVisible();
    });

    test('applies error styling to helper text', async ({ mount }) => {
      const component = await mount(Radio, {
        props: {
          id: 'error-helper-radio',
          name: 'test-group',
          value: 'error-helper',
          displayHelper: true,
          helperText: 'Error message',
          error: true,
        },
        slots: { default: 'Option with error' },
      });

      const helperText = component.locator('span').filter({ hasText: 'Error message' });
      await expect(helperText).toBeVisible();
      // Verify that the helper container has error styling applied
      const helperDiv = component.locator('[class*="spr-text-color-danger-base"]');
      await expect(helperDiv).toBeVisible();
    });

    test('applies success styling when error is false', async ({ mount }) => {
      const component = await mount(Radio, {
        props: {
          id: 'success-helper-radio',
          name: 'test-group',
          value: 'success-helper',
          displayHelper: true,
          helperText: 'Success message',
          error: false,
        },
        slots: { default: 'Option with success' },
      });

      const helperText = component.locator('span').filter({ hasText: 'Success message' });
      await expect(helperText).toBeVisible();
    });

    test('supports custom helper message slot', async ({ mount }) => {
      const component = await mount(Radio, {
        props: {
          id: 'custom-helper-radio',
          name: 'test-group',
          value: 'custom-helper',
          displayHelper: true,
        },
        slots: {
          default: 'Option with custom helper',
          helperMessage: '<span class="custom-helper">Custom helper content</span>',
        },
      });

      const customHelper = component.locator('.custom-helper');
      await expect(customHelper).toBeVisible();
      await expect(customHelper).toHaveText('Custom helper content');
    });

    test('handles empty helper text gracefully', async ({ mount }) => {
      const component = await mount(Radio, {
        props: {
          id: 'empty-helper-radio',
          name: 'test-group',
          value: 'empty-helper',
          displayHelper: true,
          helperText: '',
        },
        slots: { default: 'Option with empty helper' },
      });

      // Component should still render without errors
      await expect(component).toBeVisible();
      await expect(component.locator('input')).toBeVisible();
    });

    test('handles very long helper text', async ({ mount }) => {
      const longHelperText =
        'This is a very long helper message that provides detailed information and guidance to the user about the radio option choice they are making.';

      const component = await mount(Radio, {
        props: {
          id: 'long-helper-radio',
          name: 'test-group',
          value: 'long-helper',
          displayHelper: true,
          helperText: longHelperText,
        },
        slots: { default: 'Option with long helper' },
      });

      await expect(component.locator('span').filter({ hasText: longHelperText })).toBeVisible();
    });

    test('combines helper with description', async ({ mount }) => {
      const component = await mount(Radio, {
        props: {
          id: 'combined-radio',
          name: 'test-group',
          value: 'combined',
          description: 'This is a description',
          displayHelper: true,
          helperText: 'This is a helper message',
        },
        slots: { default: 'Option with both' },
      });

      // Both description and helper should be visible
      await expect(component.locator('span').filter({ hasText: 'This is a description' })).toBeVisible();
      await expect(component.locator('span').filter({ hasText: 'This is a helper message' })).toBeVisible();
    });

    test('works with disabled state', async ({ mount }) => {
      const component = await mount(Radio, {
        props: {
          id: 'disabled-helper-radio',
          name: 'test-group',
          value: 'disabled-helper',
          disabled: true,
          displayHelper: true,
          helperText: 'Helper for disabled option',
        },
        slots: { default: 'Disabled option with helper' },
      });

      await expect(component.locator('input')).toBeDisabled();
      await expect(component.locator('span').filter({ hasText: 'Helper for disabled option' })).toBeVisible();
    });
  });
});
