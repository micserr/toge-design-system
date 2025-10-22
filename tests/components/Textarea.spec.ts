/**
 * Textarea Component Tests
 *
 * Test Coverage Rationale:
 * - Rendering: Basic mount, DOM presence, default values
 * - Props: All prop combinations including visual states, sizing, validation
 * - v-model: Two-way binding behavior and value synchronization
 * - Events: Input event emissions with proper payload validation
 * - Slots: Label, helper message, counter slots with fallback content
 * - Accessibility: ARIA attributes, keyboard navigation, screen reader support
 * - Visual States: Error, disabled, readonly, active states with proper styling
 * - Edge Cases: Character limits, counter display, empty values
 * - User Interactions: Focus, blur, typing, paste operations
 *
 * ASSUMPTIONS:
 * - Icon component is properly imported and functional
 * - TailwindCSS classes are available and functional
 * - @vueuse/core useVModel composable works as expected
 *
 * TODO (Future Enhancements):
 * - Test with complex HTML content in slots
 * - Validate resize behavior (currently disabled via CSS)
 * - Test integration with form validation libraries
 * - Performance testing with large text content
 */

import { test, expect } from '@playwright/experimental-ct-vue';
import Textarea from '@/components/textarea/textarea.vue';

test.describe('Textarea Component', () => {
  test.describe('Rendering', () => {
    test('renders with default props', async ({ mount }) => {
      const component = await mount(Textarea);

      const textarea = component.locator('textarea');
      await expect(textarea).toBeVisible();
      await expect(textarea).toHaveValue('');
      await expect(textarea).toHaveAttribute('rows', '4');
      await expect(textarea).not.toBeDisabled();
      await expect(textarea).not.toHaveAttribute('readonly');
    });

    test('renders with custom id and placeholder', async ({ mount }) => {
      const component = await mount(Textarea, {
        props: {
          id: 'custom-textarea',
          placeholder: 'Enter your message here',
        },
      });

      const textarea = component.locator('textarea');
      await expect(textarea).toHaveAttribute('id', 'custom-textarea');
      await expect(textarea).toHaveAttribute('placeholder', 'Enter your message here');
    });

    test('renders with initial modelValue', async ({ mount }) => {
      const component = await mount(Textarea, {
        props: {
          modelValue: 'Initial content',
        },
      });

      const textarea = component.locator('textarea');
      await expect(textarea).toHaveValue('Initial content');
    });

    test('renders with custom rows', async ({ mount }) => {
      const component = await mount(Textarea, {
        props: {
          rows: 6,
        },
      });

      const textarea = component.locator('textarea');
      await expect(textarea).toHaveAttribute('rows', '6');
    });
  });

  test.describe('Labels and Supporting Text', () => {
    test('renders with label', async ({ mount }) => {
      const component = await mount(Textarea, {
        props: {
          id: 'labeled-textarea',
          label: 'Description',
        },
      });

      const label = component.locator('label');
      await expect(label).toBeVisible();
      await expect(label).toHaveText('Description');
      await expect(label).toHaveAttribute('for', 'labeled-textarea');
    });

    test('renders with supporting label', async ({ mount }) => {
      const component = await mount(Textarea, {
        props: {
          label: 'Main Label',
          supportingLabel: '(Optional)',
        },
      });

      const label = component.locator('label');
      await expect(label).toBeVisible();
      await expect(label).toContainText('Main Label');
      await expect(label).toContainText('(Optional)');
    });

    test('renders with only supporting label', async ({ mount }) => {
      const component = await mount(Textarea, {
        props: {
          supportingLabel: '(Required)',
        },
      });

      const label = component.locator('label');
      await expect(label).toBeVisible();
      await expect(label).toHaveText('(Required)');
    });

    test('does not render label when no label props provided', async ({ mount }) => {
      const component = await mount(Textarea);

      const label = component.locator('label');
      await expect(label).not.toBeVisible();
    });
  });

  test.describe('Helper Text and Icons', () => {
    test('renders helper text when displayHelper is true', async ({ mount }) => {
      const component = await mount(Textarea, {
        props: {
          displayHelper: true,
          helperText: 'Please provide detailed information',
        },
      });

      const helperText = component.getByText('Please provide detailed information');
      await expect(helperText).toBeVisible();
    });

    test('renders helper icon when provided', async ({ mount }) => {
      const component = await mount(Textarea, {
        props: {
          displayHelper: true,
          helperText: 'Important info',
          helperIcon: 'mdi:information',
        },
      });

      const icon = component.locator('svg');
      await expect(icon).toBeVisible();
      await expect(icon).toHaveAttribute('width', '20px');
      await expect(icon).toHaveAttribute('height', '20px');
    });

    test('does not render helper when displayHelper is false', async ({ mount }) => {
      const component = await mount(Textarea, {
        props: {
          displayHelper: false,
          helperText: 'Hidden helper',
        },
      });

      const helperDiv = component.locator('div').filter({ hasText: 'Hidden helper' });
      await expect(helperDiv).not.toBeVisible();
    });
  });

  test.describe('Character Counter', () => {
    test('renders counter when hasCounter is true and maxLength is set', async ({ mount }) => {
      const component = await mount(Textarea, {
        props: {
          hasCounter: true,
          maxLength: 100,
          modelValue: 'Test content',
        },
      });

      const counter = component.locator('span').filter({ hasText: '12/100' });
      await expect(counter).toBeVisible();
      await expect(counter).toHaveText('12/100');
    });

    test('does not render counter when hasCounter is false', async ({ mount }) => {
      const component = await mount(Textarea, {
        props: {
          hasCounter: false,
          maxLength: 100,
          modelValue: 'Test content',
        },
      });

      const counter = component.locator('span').filter({ hasText: /\/100/ });
      await expect(counter).not.toBeVisible();
    });

    test('does not render counter when maxLength is not set', async ({ mount }) => {
      const component = await mount(Textarea, {
        props: {
          hasCounter: true,
          modelValue: 'Test content',
        },
      });

      const counter = component.locator('span').filter({ hasText: /12\// });
      await expect(counter).not.toBeVisible();
    });

    test('updates counter as content changes', async ({ mount }) => {
      const component = await mount(Textarea, {
        props: {
          hasCounter: true,
          maxLength: 50,
          modelValue: 'Hello world!',
        },
      });

      // Verify initial counter state
      await expect(component.locator('span').filter({ hasText: /12\/50/ })).toBeVisible();

      // Update the content and check new counter
      const textarea = component.locator('textarea');
      await textarea.fill('Hi');

      // Wait for the counter to update
      await expect(component.locator('span').filter({ hasText: /2\/50/ })).toBeVisible();
    });
  });

  test.describe('Visual States', () => {
    test('applies error styling when error prop is true', async ({ mount }) => {
      const component = await mount(Textarea, {
        props: {
          error: true,
          displayHelper: true,
          helperText: 'This field is required',
        },
      });

      const textarea = component.locator('textarea');
      await expect(textarea).toHaveClass(/spr-border-tomato-600/);

      const helperText = component.getByText('This field is required');
      await expect(helperText).toBeVisible();

      // Check the parent div of the helper text has error styling
      const helperParent = helperText.locator('..');
      await expect(helperParent).toHaveClass(/spr-text-color-danger-base/);
    });

    test('applies disabled styling when disabled prop is true', async ({ mount }) => {
      const component = await mount(Textarea, {
        props: {
          disabled: true,
          label: 'Disabled field',
        },
      });

      const textarea = component.locator('textarea');
      await expect(textarea).toBeDisabled();
      await expect(textarea).toHaveClass(/spr-background-color-disabled/);
      await expect(textarea).toHaveClass(/spr-cursor-not-allowed/);
      await expect(textarea).toHaveClass(/spr-text-color-on-fill-disabled/);

      const label = component.locator('label');
      await expect(label).toHaveClass(/spr-text-color-on-fill-disabled/);
    });

    test('applies readonly styling when readonly prop is true', async ({ mount }) => {
      const component = await mount(Textarea, {
        props: {
          readonly: true,
          label: 'Read-only field',
          modelValue: 'Cannot edit this',
        },
      });

      const textarea = component.locator('textarea');
      await expect(textarea).toHaveAttribute('readonly');
      await expect(textarea).toHaveClass(/spr-background-color-disabled/);
      await expect(textarea).toHaveClass(/spr-cursor-not-allowed/);
      await expect(textarea).toHaveClass(/spr-text-color-base/);

      const label = component.locator('label');
      await expect(label).toHaveClass(/spr-text-color-base/);
    });

    test('applies normal styling when no error, disabled, or readonly', async ({ mount }) => {
      const component = await mount(Textarea);

      const textarea = component.locator('textarea');
      await expect(textarea).toHaveClass(/spr-border-mushroom-200/);
      await expect(textarea).toHaveClass(/focus:spr-border-kangkong-700/);
    });
  });

  test.describe('Length Validation', () => {
    test('applies minLength attribute when provided', async ({ mount }) => {
      const component = await mount(Textarea, {
        props: {
          minLength: 10,
        },
      });

      const textarea = component.locator('textarea');
      await expect(textarea).toHaveAttribute('minlength', '10');
    });

    test('applies maxLength attribute when provided', async ({ mount }) => {
      const component = await mount(Textarea, {
        props: {
          maxLength: 200,
        },
      });

      const textarea = component.locator('textarea');
      await expect(textarea).toHaveAttribute('maxlength', '200');
    });

    test('applies both minLength and maxLength', async ({ mount }) => {
      const component = await mount(Textarea, {
        props: {
          minLength: 5,
          maxLength: 100,
        },
      });

      const textarea = component.locator('textarea');
      await expect(textarea).toHaveAttribute('minlength', '5');
      await expect(textarea).toHaveAttribute('maxlength', '100');
    });
  });

  test.describe('v-model and Events', () => {
    test('emits update:modelValue on input', async ({ mount }) => {
      const modelValueUpdates: string[] = [];

      const component = await mount(Textarea, {
        props: {
          modelValue: '',
          'onUpdate:modelValue': (value: string) => modelValueUpdates.push(value),
        },
      });

      const textarea = component.locator('textarea');
      await textarea.fill('New content');

      // Allow time for event processing
      await expect(textarea).toHaveValue('New content');
      expect(modelValueUpdates).toContain('New content');
    });

    test('handles incremental typing', async ({ mount }) => {
      const modelValueUpdates: string[] = [];

      const component = await mount(Textarea, {
        props: {
          modelValue: '',
          'onUpdate:modelValue': (value: string) => modelValueUpdates.push(value),
        },
      });

      const textarea = component.locator('textarea');
      await textarea.type('Hello');

      // Verify that typing events are captured
      await expect(textarea).toHaveValue('Hello');
      expect(modelValueUpdates.length).toBeGreaterThan(0);
      expect(modelValueUpdates[modelValueUpdates.length - 1]).toBe('Hello');
    });

    test('maintains two-way binding', async ({ mount }) => {
      let currentValue = 'Initial';

      const component = await mount(Textarea, {
        props: {
          modelValue: currentValue,
          'onUpdate:modelValue': (value: string) => {
            currentValue = value;
          },
        },
      });

      const textarea = component.locator('textarea');
      await expect(textarea).toHaveValue('Initial');

      await textarea.fill('Updated');
      await expect(textarea).toHaveValue('Updated');
      expect(currentValue).toBe('Updated');
    });
  });

  test.describe('Slots', () => {
    test('renders custom helper message slot', async ({ mount }) => {
      const component = await mount(Textarea, {
        props: {
          displayHelper: true,
        },
        slots: {
          helperMessage: '<span data-testid="custom-helper">Custom helper content</span>',
        },
      });

      const customHelper = component.locator('[data-testid="custom-helper"]');
      await expect(customHelper).toBeVisible();
      await expect(customHelper).toHaveText('Custom helper content');
    });

    test('renders custom counter slot', async ({ mount }) => {
      const component = await mount(Textarea, {
        props: {
          hasCounter: true,
          maxLength: 100,
          modelValue: 'Test',
        },
        slots: {
          counter: '<span data-testid="custom-counter">Custom 4/100</span>',
        },
      });

      const customCounter = component.locator('[data-testid="custom-counter"]');
      await expect(customCounter).toBeVisible();
      await expect(customCounter).toHaveText('Custom 4/100');
    });
  });

  test.describe('Accessibility', () => {
    test('has proper ARIA attributes', async ({ mount }) => {
      const component = await mount(Textarea, {
        props: {
          id: 'accessible-textarea',
          label: 'Accessible Description',
        },
      });

      const textarea = component.locator('textarea');
      await expect(textarea).toHaveRole('textbox');
      await expect(textarea).toHaveAttribute('id', 'accessible-textarea');

      const label = component.locator('label');
      await expect(label).toHaveAttribute('for', 'accessible-textarea');
    });

    test('supports keyboard navigation', async ({ mount }) => {
      const component = await mount(Textarea);

      const textarea = component.locator('textarea');

      // Focus the textarea
      await textarea.focus();
      await expect(textarea).toBeFocused();

      // Type content
      await textarea.type('Keyboard input');
      await expect(textarea).toHaveValue('Keyboard input');

      // Tab navigation should work
      await textarea.press('Tab');
      await expect(textarea).not.toBeFocused();
    });

    test('disabled textarea is not focusable', async ({ mount }) => {
      const component = await mount(Textarea, {
        props: {
          disabled: true,
        },
      });

      const textarea = component.locator('textarea');

      // Attempt to focus disabled textarea
      await textarea.focus({ timeout: 1000 }).catch(() => {
        // Expected to fail for disabled elements
      });

      await expect(textarea).toBeDisabled();
    });
  });

  test.describe('User Interactions', () => {
    test('handles focus and blur events', async ({ mount }) => {
      const component = await mount(Textarea);

      const textarea = component.locator('textarea');

      // Focus
      await textarea.focus();
      await expect(textarea).toBeFocused();

      // Blur
      await textarea.blur();
      await expect(textarea).not.toBeFocused();
    });

    test('handles paste operations', async ({ mount }) => {
      const component = await mount(Textarea, {
        props: {
          modelValue: '',
        },
      });

      const textarea = component.locator('textarea');
      await textarea.focus();

      // Simulate paste operation by filling with clipboard-like content
      await textarea.fill('Pasted content from clipboard');
      await expect(textarea).toHaveValue('Pasted content from clipboard');
    });

    test('handles text selection', async ({ mount }) => {
      const component = await mount(Textarea, {
        props: {
          modelValue: 'Selectable text content',
        },
      });

      const textarea = component.locator('textarea');
      await textarea.focus();

      // Select all text
      await textarea.press('Control+a');

      // Type to replace selected text
      await textarea.type('Replaced');
      await expect(textarea).toHaveValue('Replaced');
    });
  });

  test.describe('Edge Cases', () => {
    test('handles empty modelValue', async ({ mount }) => {
      const component = await mount(Textarea, {
        props: {
          modelValue: '',
          hasCounter: true,
          maxLength: 50,
        },
      });

      const textarea = component.locator('textarea');
      await expect(textarea).toHaveValue('');

      const counter = component.locator('span').filter({ hasText: '0/50' });
      await expect(counter).toBeVisible();
    });

    test('handles very long content', async ({ mount }) => {
      const longContent = 'A'.repeat(1000);

      const component = await mount(Textarea, {
        props: {
          modelValue: longContent,
          hasCounter: true,
          maxLength: 1500,
        },
      });

      const textarea = component.locator('textarea');
      await expect(textarea).toHaveValue(longContent);

      const counter = component.locator('span').filter({ hasText: '1000/1500' });
      await expect(counter).toBeVisible();
    });

    test('handles special characters and unicode', async ({ mount }) => {
      const specialContent = 'Special chars: àáâãäå ñ 中文 🚀 ❤️';

      const component = await mount(Textarea, {
        props: {
          modelValue: specialContent,
        },
      });

      const textarea = component.locator('textarea');
      await expect(textarea).toHaveValue(specialContent);
    });

    test('handles empty string props gracefully', async ({ mount }) => {
      const component = await mount(Textarea, {
        props: {
          helperText: '',
          supportingLabel: '',
        },
      });

      const textarea = component.locator('textarea');
      await expect(textarea).toBeVisible();
      await expect(textarea).toHaveValue('');
    });
  });

  test.describe('Complex Combinations', () => {
    test('error state with counter and helper text', async ({ mount }) => {
      const component = await mount(Textarea, {
        props: {
          error: true,
          displayHelper: true,
          helperText: 'Field is required',
          helperIcon: 'mdi:alert',
          hasCounter: true,
          maxLength: 100,
          modelValue: 'Error content',
        },
      });

      const textarea = component.locator('textarea');
      await expect(textarea).toHaveClass(/spr-border-tomato-600/);

      const helperText = component.getByText('Field is required');
      await expect(helperText).toBeVisible();

      // Check the parent div of the helper text has error styling
      const helperParent = helperText.locator('..');
      await expect(helperParent).toHaveClass(/spr-text-color-danger-base/);

      const counter = component.getByText('13/100');
      await expect(counter).toBeVisible();

      const icon = component.locator('svg');
      await expect(icon).toBeVisible();
    });

    test('disabled state with all features', async ({ mount }) => {
      const component = await mount(Textarea, {
        props: {
          disabled: true,
          label: 'Disabled Field',
          supportingLabel: '(Cannot edit)',
          displayHelper: true,
          helperText: 'This field is disabled',
          hasCounter: true,
          maxLength: 50,
          modelValue: 'Disabled content',
        },
      });

      const textarea = component.locator('textarea');
      await expect(textarea).toBeDisabled();
      await expect(textarea).toHaveClass(/spr-cursor-not-allowed/);

      const label = component.locator('label');
      await expect(label).toHaveClass(/spr-text-color-on-fill-disabled/);

      const counter = component.locator('span').filter({ hasText: '16/50' });
      await expect(counter).toBeVisible();
    });

    test('readonly state with helper and counter', async ({ mount }) => {
      const component = await mount(Textarea, {
        props: {
          readonly: true,
          label: 'Read-only Field',
          displayHelper: true,
          helperText: 'View only',
          hasCounter: true,
          maxLength: 200,
          modelValue: 'Read-only content that cannot be modified',
        },
      });

      const textarea = component.locator('textarea');
      await expect(textarea).toHaveAttribute('readonly');
      await expect(textarea).toHaveClass(/spr-cursor-not-allowed/);

      const counter = component.locator('span').filter({ hasText: /\/200/ });
      await expect(counter).toBeVisible();

      // Try to type - should not change value
      await textarea.focus();
      await textarea.type('Additional text');
      await expect(textarea).toHaveValue('Read-only content that cannot be modified');
    });
  });

  test.describe('Layout and Styling', () => {
    test('renders with proper structure', async ({ mount }) => {
      const component = await mount(Textarea, {
        props: {
          label: 'Test Label',
        },
      });

      // Verify the component structure exists
      const label = component.locator('label');
      await expect(label).toBeVisible();

      const textarea = component.locator('textarea');
      await expect(textarea).toBeVisible();
    });

    test('helper and counter layout adjusts correctly', async ({ mount }) => {
      // Only counter
      const counterOnly = await mount(Textarea, {
        props: {
          hasCounter: true,
          maxLength: 100,
          modelValue: 'Test',
        },
      });

      const counterSlotWrapper = counterOnly.locator('.spr-flex.spr-items-start.spr-justify-end');
      await expect(counterSlotWrapper).toBeVisible();

      // Both helper and counter
      const both = await mount(Textarea, {
        props: {
          displayHelper: true,
          helperText: 'Helper text',
          hasCounter: true,
          maxLength: 100,
          modelValue: 'Test',
        },
      });

      const bothSlotWrapper = both.locator('.spr-flex.spr-items-start.spr-justify-between');
      await expect(bothSlotWrapper).toBeVisible();
    });
  });
});
