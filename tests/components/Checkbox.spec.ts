/**
 * Checkbox Component Tests
 * 
 * Test Coverage Rationale:
 * - Comprehensive rendering tests for all prop combinations
 * - V-model two-way binding validation with both controlled and uncontrolled patterns
 * - Event emission testing with proper payload validation
 * - Accessibility compliance including ARIA states, keyboard navigation, and screen reader support
 * - Visual state testing for all interactive states (checked, unchecked, indeterminate, disabled)
 * - Edge cases including prop conflicts and boundary conditions
 * - Slot content validation for label and description display
 * - Focus management and keyboard interaction patterns
 * 
 * ASSUMPTIONS:
 * - Icon component (@iconify/vue) is properly mocked/available in test environment
 * - Tailwind/design system classes are available for visual state validation
 * - Component follows standard HTML checkbox accessibility patterns
 * 
 * TODO (Future Enhancements):
 * - Add visual regression testing for styled states
 * - Test integration with form validation libraries
 * - Add performance testing for large checkbox lists
 * - Test with screen reader simulation tools
 */

import { test, expect } from '@playwright/experimental-ct-vue';
import Checkbox from '@/components/checkbox/checkbox.vue';

test.describe('Checkbox Component', () => {
  test.describe('Rendering', () => {
    test('renders with default props', async ({ mount }) => {
      const component = await mount(Checkbox);
      
      await expect(component).toBeVisible();
      
      // Check default checkbox input
      const checkbox = component.locator('input[type="checkbox"]');
      await expect(checkbox).toBeVisible();
      await expect(checkbox).not.toBeChecked();
      await expect(checkbox).not.toBeDisabled();
      
      // Component itself is the label element - verify it contains a checkbox
      await expect(component.locator('input[type="checkbox"]')).toBeVisible();
      
      // No label or description text by default - should be empty
      await expect(component).toHaveText('');
    });

    test('renders with label text', async ({ mount }) => {
      const component = await mount(Checkbox, {
        props: { label: 'Accept terms and conditions' }
      });
      
      const labelText = component.locator('span').filter({ hasText: 'Accept terms and conditions' });
      await expect(labelText).toBeVisible();
      await expect(labelText).toHaveText('Accept terms and conditions');
    });

    test('renders with description text', async ({ mount }) => {
      const component = await mount(Checkbox, {
        props: { 
          label: 'Newsletter subscription',
          description: 'Receive weekly updates about new features and products'
        }
      });
      
      const label = component.locator('span').filter({ hasText: 'Newsletter subscription' });
      const description = component.locator('span').filter({ hasText: 'Receive weekly updates about new features and products' });
      
      await expect(label).toBeVisible();
      await expect(description).toBeVisible();
      await expect(description).toHaveText('Receive weekly updates about new features and products');
    });

    test('renders description without label', async ({ mount }) => {
      const component = await mount(Checkbox, {
        props: { description: 'Standalone description text' }
      });
      
      const description = component.locator('span').filter({ hasText: 'Standalone description text' });
      await expect(description).toBeVisible();
      
      // Label span should not exist
      const labels = component.locator('span').filter({ hasText: /^(?!Standalone description text).+/ });
      await expect(labels).toHaveCount(0);
    });
  });

  test.describe('Props - Boolean States', () => {
    test('renders checked state with modelValue', async ({ mount }) => {
      const component = await mount(Checkbox, {
        props: { 
          modelValue: true,
          label: 'Checked checkbox'
        }
      });
      
      const checkbox = component.locator('input[type="checkbox"]');
      await expect(checkbox).toBeChecked();
      
      // Check icon should be visible
      const checkIcon = component.locator('span.spr-opacity-100');
      await expect(checkIcon).toBeVisible();
    });

    test('renders checked state with checked prop', async ({ mount }) => {
      const component = await mount(Checkbox, {
        props: { 
          checked: true,
          label: 'Checked via prop'
        }
      });
      
      const checkbox = component.locator('input[type="checkbox"]');
      await expect(checkbox).toBeChecked();
    });

    test('combines modelValue and checked prop with OR logic', async ({ mount }) => {
      const component = await mount(Checkbox, {
        props: { 
          modelValue: false,
          checked: true,
          label: 'Combined logic test'
        }
      });
      
      const checkbox = component.locator('input[type="checkbox"]');
      // modelValue OR checked logic means false || true = true
      await expect(checkbox).toBeChecked();
    });

    test('renders disabled state correctly', async ({ mount }) => {
      const component = await mount(Checkbox, {
        props: { 
          disabled: true,
          label: 'Disabled checkbox'
        }
      });
      
      const checkbox = component.locator('input[type="checkbox"]');
      await expect(checkbox).toBeDisabled();
      
      // Label should have disabled styling
      const label = component.locator('span').filter({ hasText: 'Disabled checkbox' });
      await expect(label).toHaveClass(/spr-text-color-on-fill-disabled/);
    });

    test('renders disabled and checked state', async ({ mount }) => {
      const component = await mount(Checkbox, {
        props: { 
          disabled: true,
          modelValue: true,
          label: 'Disabled and checked'
        }
      });
      
      const checkbox = component.locator('input[type="checkbox"]');
      await expect(checkbox).toBeDisabled();
      await expect(checkbox).toBeChecked();
      
      // Should have disabled checked styling
      await expect(checkbox).toHaveClass(/spr-bg-white-300/);
      await expect(checkbox).toHaveClass(/spr-border-none/);
    });

    test('renders indeterminate state with correct icon', async ({ mount }) => {
      const component = await mount(Checkbox, {
        props: { 
          indeterminate: true,
          modelValue: true,
          label: 'Indeterminate checkbox'
        }
      });
      
      const checkbox = component.locator('input[type="checkbox"]');
      await expect(checkbox).toBeChecked();
      
      // Should have minus icon for indeterminate state
      // Note: We're testing the implementation detail that ph:minus-bold icon is used
      // This might need adjustment based on how @iconify/vue renders in tests
      const iconContainer = component.locator('span.spr-opacity-100');
      await expect(iconContainer).toBeVisible();
    });

    test('renders bordered state with proper styling', async ({ mount }) => {
      const component = await mount(Checkbox, {
        props: { 
          bordered: true,
          label: 'Bordered checkbox'
        }
      });
      
      // Should have bordered classes on the component (which is the label)
      await expect(component).toHaveClass(/spr-border/);
      await expect(component).toHaveClass(/spr-rounded-md/);
      await expect(component).toHaveClass(/spr-p-size-spacing-2xs/);
    });

    test('renders bordered and checked state with success styling', async ({ mount }) => {
      const component = await mount(Checkbox, {
        props: { 
          bordered: true,
          modelValue: true,
          label: 'Bordered and checked'
        }
      });
      
      await expect(component).toHaveClass(/spr-border-color-success-base/);
      await expect(component).toHaveClass(/spr-bg-kangkong-100/);
    });

    test('renders fullWidth correctly', async ({ mount }) => {
      const component = await mount(Checkbox, {
        props: { 
          fullWidth: true,
          bordered: true,
          label: 'Full width checkbox'
        }
      });
      
      // Should have full width when bordered
      await expect(component).toHaveClass(/spr-w-full/);
    });

    test('renders normal width when fullWidth is false', async ({ mount }) => {
      const component = await mount(Checkbox, {
        props: { 
          fullWidth: false,
          bordered: true,
          label: 'Normal width checkbox'
        }
      });
      
      // Should have fit width
      await expect(component).toHaveClass(/spr-w-fit/);
    });
  });

  test.describe('V-Model and Events', () => {
    test('emits update:modelValue on click', async ({ mount }) => {
      const updateEvents: boolean[] = [];

      const component = await mount(Checkbox, {
        props: {
          modelValue: false,
          label: 'Click to check',
          'onUpdate:modelValue': (value: boolean) => updateEvents.push(value)
        }
      });
      
      const checkbox = component.locator('input[type="checkbox"]');
      await checkbox.click();
      
      // Should emit true when clicking unchecked checkbox
      expect(updateEvents).toHaveLength(1);
      expect(updateEvents[0]).toBe(true);
    });

    test('emits update:modelValue with correct value when unchecking', async ({ mount }) => {
      const updateEvents: boolean[] = [];

      const component = await mount(Checkbox, {
        props: {
          modelValue: true,
          label: 'Click to uncheck',
          'onUpdate:modelValue': (value: boolean) => updateEvents.push(value)
        }
      });
      
      const checkbox = component.locator('input[type="checkbox"]');
      await checkbox.click();
      
      // Should emit false when clicking checked checkbox
      expect(updateEvents).toHaveLength(1);
      expect(updateEvents[0]).toBe(false);
    });

    test('does not emit events when disabled', async ({ mount }) => {
      const updateEvents: boolean[] = [];

      const component = await mount(Checkbox, {
        props: {
          disabled: true,
          modelValue: false,
          label: 'Disabled checkbox',
          'onUpdate:modelValue': (value: boolean) => updateEvents.push(value)
        }
      });
      
      const checkbox = component.locator('input[type="checkbox"]');
      
      // Try to click disabled checkbox - should not emit
      await checkbox.click({ force: true });
      
      expect(updateEvents).toHaveLength(0);
    });

    test('v-model reactivity updates checkbox state', async ({ mount }) => {
      const component = await mount(Checkbox, {
        props: {
          modelValue: false,
          label: 'Reactive checkbox'
        }
      });
      
      let checkbox = component.locator('input[type="checkbox"]');
      await expect(checkbox).not.toBeChecked();
      
      // Update the prop to simulate v-model change
      await component.update({
        props: {
          modelValue: true,
          label: 'Reactive checkbox'
        }
      });
      
      await expect(checkbox).toBeChecked();
    });
  });

  test.describe('User Interactions', () => {
    test('can be clicked on label to toggle', async ({ mount }) => {
      const updateEvents: boolean[] = [];

      const component = await mount(Checkbox, {
        props: {
          modelValue: false,
          label: 'Click label to toggle',
          'onUpdate:modelValue': (value: boolean) => updateEvents.push(value)
        }
      });
      
      // Click on the component (which is the label element)
      await component.click();
      
      // Should toggle the checkbox
      expect(updateEvents).toHaveLength(1);
      expect(updateEvents[0]).toBe(true);
      
      const checkbox = component.locator('input[type="checkbox"]');
      await expect(checkbox).toBeChecked();
    });

    test('handles keyboard interaction (Space key)', async ({ mount }) => {
      const updateEvents: boolean[] = [];

      const component = await mount(Checkbox, {
        props: {
          modelValue: false,
          label: 'Keyboard accessible',
          'onUpdate:modelValue': (value: boolean) => updateEvents.push(value)
        }
      });
      
      const checkbox = component.locator('input[type="checkbox"]');
      
      // Focus and press Space
      await checkbox.focus();
      await checkbox.press('Space');
      
      expect(updateEvents).toHaveLength(1);
      expect(updateEvents[0]).toBe(true);
    });

    test('supports tab navigation', async ({ mount }) => {
      const component = await mount(Checkbox, {
        props: {
          label: 'Tab navigation test'
        }
      });
      
      const checkbox = component.locator('input[type="checkbox"]');
      
      // Should be focusable
      await checkbox.focus();
      await expect(checkbox).toBeFocused();
    });

    test('disabled checkbox cannot be focused', async ({ mount }) => {
      const component = await mount(Checkbox, {
        props: {
          disabled: true,
          label: 'Disabled focus test'
        }
      });
      
      const checkbox = component.locator('input[type="checkbox"]');
      
      // Attempt to focus disabled checkbox
      await checkbox.focus();
      await expect(checkbox).not.toBeFocused();
    });
  });

  test.describe('Accessibility', () => {
    test('has proper role and attributes', async ({ mount }) => {
      const component = await mount(Checkbox, {
        props: {
          label: 'Accessible checkbox'
        }
      });
      
      const checkbox = component.locator('input[type="checkbox"]');
      
      // Should have checkbox role
      await expect(checkbox).toHaveAttribute('type', 'checkbox');
      
      // Should be keyboard accessible
      await checkbox.focus();
      await expect(checkbox).toBeFocused();
    });

    test('associates label correctly', async ({ mount }) => {
      const component = await mount(Checkbox, {
        props: {
          label: 'Associated label text'
        }
      });
      
      // Component is the label element and should contain the checkbox
      const checkbox = component.locator('input[type="checkbox"]');
      
      await expect(component).toContainText('Associated label text');
      await expect(checkbox).toBeVisible();
    });

    test('provides proper checked/unchecked states for screen readers', async ({ mount }) => {
      const component = await mount(Checkbox, {
        props: {
          modelValue: true,
          label: 'Screen reader test'
        }
      });
      
      const checkbox = component.locator('input[type="checkbox"]');
      await expect(checkbox).toBeChecked();
      
      // Update to unchecked
      await component.update({
        props: {
          modelValue: false,
          label: 'Screen reader test'
        }
      });
      
      await expect(checkbox).not.toBeChecked();
    });

    test('disabled state is properly communicated', async ({ mount }) => {
      const component = await mount(Checkbox, {
        props: {
          disabled: true,
          label: 'Disabled accessibility test'
        }
      });
      
      const checkbox = component.locator('input[type="checkbox"]');
      await expect(checkbox).toBeDisabled();
      
      // Should not be interactive
      await expect(checkbox).toHaveAttribute('disabled');
    });
  });

  test.describe('Visual States and Styling', () => {
    test('applies correct base classes', async ({ mount }) => {
      const component = await mount(Checkbox, {
        props: { label: 'Styled checkbox' }
      });
      
      const checkbox = component.locator('input[type="checkbox"]');
      
      // Base label classes (on the component itself)
      await expect(component).toHaveClass(/spr-flex/);
      await expect(component).toHaveClass(/spr-w-fit/);
      await expect(component).toHaveClass(/spr-select-none/);
      await expect(component).toHaveClass(/spr-cursor-pointer/);
      
      // Checkbox input classes
      await expect(checkbox).toHaveClass(/spr-h-\[20px\]/);
      await expect(checkbox).toHaveClass(/spr-w-\[20px\]/);
      await expect(checkbox).toHaveClass(/spr-appearance-none/);
      await expect(checkbox).toHaveClass(/spr-rounded-\[2\.5px\]/);
    });

    test('applies disabled styling correctly', async ({ mount }) => {
      const component = await mount(Checkbox, {
        props: { 
          disabled: true,
          label: 'Disabled styling'
        }
      });
      
      const checkbox = component.locator('input[type="checkbox"]');
      
      // Disabled cursor on the component (label)
      await expect(component).toHaveClass(/spr-cursor-not-allowed/);
      
      // Disabled checkbox colors
      await expect(checkbox).toHaveClass(/spr-border-color-on-fill-disabled/);
      await expect(checkbox).toHaveClass(/spr-background-color-disabled/);
    });

    test('applies checked styling correctly', async ({ mount }) => {
      const component = await mount(Checkbox, {
        props: { 
          modelValue: true,
          label: 'Checked styling'
        }
      });
      
      const checkbox = component.locator('input[type="checkbox"]');
      
      // Checked colors
      await expect(checkbox).toHaveClass(/spr-background-color-brand-base/);
      await expect(checkbox).toHaveClass(/spr-border-color-brand-base/);
      
      // Check icon visibility
      const checkIcon = component.locator('span.spr-opacity-100');
      await expect(checkIcon).toBeVisible();
    });

    test('has proper transition classes for smooth interactions', async ({ mount }) => {
      const component = await mount(Checkbox, {
        props: { label: 'Transition test' }
      });
      
      const checkbox = component.locator('input[type="checkbox"]');
      
      // Transition classes for smooth effects on the component (label)
      await expect(component).toHaveClass(/spr-transition/);
      await expect(component).toHaveClass(/spr-duration-150/);
      await expect(checkbox).toHaveClass(/spr-transition/);
    });
  });

  test.describe('Edge Cases', () => {
    test('handles empty label and description gracefully', async ({ mount }) => {
      const component = await mount(Checkbox, {
        props: {
          label: '',
          description: ''
        }
      });
      
      await expect(component).toBeVisible();
      
      // Grid container should not be present when no text content
      const textContainer = component.locator('.spr-grid');
      await expect(textContainer).toHaveCount(0);
    });

    test('handles very long label text', async ({ mount }) => {
      const longLabel = 'This is an extremely long checkbox label that tests how the component handles text wrapping and maintains proper alignment with the checkbox input element when the text spans multiple lines';
      
      const component = await mount(Checkbox, {
        props: {
          label: longLabel
        }
      });
      
      const labelText = component.locator('span').filter({ hasText: longLabel });
      await expect(labelText).toBeVisible();
      await expect(labelText).toHaveText(longLabel);
    });

    test('handles HTML entities in label and description', async ({ mount }) => {
      const component = await mount(Checkbox, {
        props: {
          label: 'Terms &amp; Conditions',
          description: 'Accept the &lt;terms&gt; and conditions'
        }
      });
      
      // Component displays HTML entities as provided (escaped)
      await expect(component).toContainText('Terms &amp; Conditions');
      await expect(component).toContainText('Accept the &lt;terms&gt; and conditions');
    });

    test('handles null/undefined prop values gracefully', async ({ mount }) => {
      const component = await mount(Checkbox, {
        props: {
          // Deliberately omit optional props to test defaults
        }
      });
      
      await expect(component).toBeVisible();
      
      const checkbox = component.locator('input[type="checkbox"]');
      await expect(checkbox).not.toBeChecked();
      await expect(checkbox).not.toBeDisabled();
    });

    test('rapid toggle interactions work correctly', async ({ mount }) => {
      const updateEvents: boolean[] = [];

      const component = await mount(Checkbox, {
        props: {
          modelValue: false,
          label: 'Rapid toggle test',
          'onUpdate:modelValue': (value: boolean) => updateEvents.push(value)
        }
      });
      
      const checkbox = component.locator('input[type="checkbox"]');
      
      // Perform rapid clicks
      await checkbox.click();
      await checkbox.click();
      await checkbox.click();
      
      // Should have proper sequence of events
      expect(updateEvents).toHaveLength(3);
      expect(updateEvents).toEqual([true, false, true]);
    });
  });

  test.describe('Prop Combinations', () => {
    test('bordered + disabled + checked combination', async ({ mount }) => {
      const component = await mount(Checkbox, {
        props: {
          bordered: true,
          disabled: true,
          modelValue: true,
          label: 'Complex state combination'
        }
      });
      
      const checkbox = component.locator('input[type="checkbox"]');
      
      // Should be bordered
      await expect(component).toHaveClass(/spr-border/);
      
      // Should be disabled
      await expect(checkbox).toBeDisabled();
      
      // Should be checked
      await expect(checkbox).toBeChecked();
      
      // Should have disabled styling
      await expect(component).toHaveClass(/spr-bg-white-100/);
    });

    test('fullWidth + bordered + checked with description', async ({ mount }) => {
      const component = await mount(Checkbox, {
        props: {
          fullWidth: true,
          bordered: true,
          modelValue: true,
          label: 'Full width checkbox',
          description: 'This checkbox spans the full width of its container'
        }
      });
      
      // Should be full width
      await expect(component).toHaveClass(/spr-w-full/);
      
      // Should have success border when checked
      await expect(component).toHaveClass(/spr-border-color-success-base/);
      
      // Should show both label and description
      await expect(component).toContainText('Full width checkbox');
      await expect(component).toContainText('This checkbox spans the full width of its container');
    });

    test('indeterminate + disabled combination', async ({ mount }) => {
      const component = await mount(Checkbox, {
        props: {
          indeterminate: true,
          disabled: true,
          modelValue: true,
          label: 'Indeterminate disabled'
        }
      });
      
      const checkbox = component.locator('input[type="checkbox"]');
      
      // Should be disabled and checked (indeterminate still shows as checked)
      await expect(checkbox).toBeDisabled();
      await expect(checkbox).toBeChecked();
      
      // Should have disabled checked styling
      await expect(checkbox).toHaveClass(/spr-bg-white-300/);
    });
  });
});
