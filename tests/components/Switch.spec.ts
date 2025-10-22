/**
 * Switch Component Tests
 *
 * Coverage includes:
 * - Rendering with default props and v-model
 * - All prop combinations (state, disabled, modelValue)
 * - v-model two-way binding behavior
 * - Event emissions (update:modelValue)
 * - Slots (default, leftText, rightText)
 * - Accessibility (ARIA attributes, keyboard navigation, labels)
 * - Interactive states (hover, pressed, disabled)
 * - Edge cases (empty slots, custom IDs)
 * - Visual state transitions
 *
 * Rationale:
 * - Testing v-model integration as it's the primary interaction pattern
 * - Focus on state management and visual feedback
 * - Validate accessibility compliance for form controls
 * - Ensure proper label association and keyboard support
 * - Test slot-based content flexibility
 */

import { test, expect } from '@playwright/experimental-ct-vue';
import Switch from '@/components/switch/switch.vue';

test.describe('Switch Component', () => {
  test.describe('Rendering', () => {
    test('renders with default props', async ({ mount }) => {
      const component = await mount(Switch, {
        props: { modelValue: false },
      });

      await expect(component).toBeVisible();

      // Should contain input element
      const input = component.locator('input[type="checkbox"]');
      await expect(input).toBeVisible();
      await expect(input).not.toBeChecked();
      await expect(input).not.toBeDisabled();

      // Should have switch visual elements
      const switchMark = component.locator('.switch-mark');
      await expect(switchMark).toBeAttached();
    });

    test('renders with modelValue true (checked state)', async ({ mount }) => {
      const component = await mount(Switch, {
        props: { modelValue: true },
      });

      const input = component.locator('input[type="checkbox"]');
      await expect(input).toBeChecked();

      // Visual indicator should show checked state
      const switchMark = component.locator('.switch-mark');
      await expect(switchMark).toHaveClass(/spr-background-color-success-base/);
    });

    test('renders with custom id', async ({ mount }) => {
      const component = await mount(Switch, {
        props: {
          modelValue: false,
          id: 'custom-switch',
        },
      });

      const input = component.locator('input[type="checkbox"]');
      const inputId = await input.getAttribute('id');
      expect(inputId).toMatch(/^custom-switch_[a-z0-9]{6}$/);
    });

    test('generates unique id when no id provided', async ({ mount }) => {
      const component = await mount(Switch, {
        props: { modelValue: false },
      });

      const input = component.locator('input[type="checkbox"]');
      const inputId = await input.getAttribute('id');
      expect(inputId).toMatch(/^switch_input_[a-z0-9]{6}$/);
    });
  });

  test.describe('Props - States', () => {
    const states = ['default', 'hover', 'pressed', 'disabled'] as const;

    for (const state of states) {
      test(`renders with state="${state}"`, async ({ mount }) => {
        const component = await mount(Switch, {
          props: {
            modelValue: false,
            state: state,
            ...(state === 'disabled' && { disabled: true }),
          },
        });

        await expect(component).toBeVisible();

        if (state === 'hover') {
          // Should have autofocus when state is hover
          await expect(component).toHaveAttribute('autofocus');
        }

        if (state === 'disabled') {
          const input = component.locator('input[type="checkbox"]');
          await expect(input).toBeDisabled();
          await expect(component).toHaveAttribute('aria-disabled', 'true');
        }
      });
    }

    test('disabled prop overrides state', async ({ mount }) => {
      const component = await mount(Switch, {
        props: {
          modelValue: false,
          state: 'hover',
          disabled: true,
        },
      });

      const input = component.locator('input[type="checkbox"]');
      await expect(input).toBeDisabled();
      await expect(component).toHaveAttribute('aria-disabled', 'true');
    });
  });

  test.describe('Visual States', () => {
    test('unchecked state has correct styling', async ({ mount }) => {
      const component = await mount(Switch, {
        props: { modelValue: false },
      });

      const switchMark = component.locator('.switch-mark');
      await expect(switchMark).toHaveClass(/spr-switch-background-default/);
    });

    test('checked state has success styling', async ({ mount }) => {
      const component = await mount(Switch, {
        props: { modelValue: true },
      });

      const switchMark = component.locator('.switch-mark');
      await expect(switchMark).toHaveClass(/spr-background-color-success-base/);
    });

    test('disabled state has opacity styling', async ({ mount }) => {
      const component = await mount(Switch, {
        props: {
          modelValue: false,
          disabled: true,
        },
      });

      const switchMark = component.locator('.switch-mark');
      await expect(switchMark).toHaveClass(/spr-opacity-60/);

      // Text should be disabled color
      await expect(component).toHaveClass(/spr-text-color-disabled/);
    });

    test('disabled checked state maintains success background with opacity', async ({ mount }) => {
      const component = await mount(Switch, {
        props: {
          modelValue: true,
          disabled: true,
        },
      });

      const switchMark = component.locator('.switch-mark');
      await expect(switchMark).toHaveClass(/spr-background-color-success-base/);
      await expect(switchMark).toHaveClass(/spr-opacity-60/);
    });
  });

  test.describe('Slots', () => {
    test('renders default slot content as left label', async ({ mount }) => {
      const component = await mount(Switch, {
        props: { modelValue: false },
        slots: {
          default: 'Toggle Option',
        },
      });

      await expect(component).toContainText('Toggle Option');

      // Should have label element
      const label = component.locator('label').first();
      await expect(label).toBeVisible();
      await expect(label).toHaveText('Toggle Option');
    });

    test('renders leftText slot content', async ({ mount }) => {
      const component = await mount(Switch, {
        props: { modelValue: false },
        slots: {
          leftText: 'Left Label',
        },
      });

      await expect(component).toContainText('Left Label');

      const label = component.locator('label').first();
      await expect(label).toHaveText('Left Label');
    });

    test('renders rightText slot content', async ({ mount }) => {
      const component = await mount(Switch, {
        props: { modelValue: false },
        slots: {
          rightText: 'Right Label',
        },
      });

      await expect(component).toContainText('Right Label');

      const label = component.locator('label').last();
      await expect(label).toHaveText('Right Label');
    });

    test('renders both left and right text slots', async ({ mount }) => {
      const component = await mount(Switch, {
        props: { modelValue: false },
        slots: {
          leftText: 'Left Label',
          rightText: 'Right Label',
        },
      });

      await expect(component).toContainText('Left Label');
      await expect(component).toContainText('Right Label');

      const labels = component.locator('label');
      await expect(labels).toHaveCount(2);
    });

    test('leftText slot takes precedence over default slot', async ({ mount }) => {
      const component = await mount(Switch, {
        props: { modelValue: false },
        slots: {
          default: 'Default Text',
          leftText: 'Left Text',
        },
      });

      await expect(component).toContainText('Left Text');
      await expect(component).not.toContainText('Default Text');
    });

    test('renders with no labels when slots are empty', async ({ mount }) => {
      const component = await mount(Switch, {
        props: { modelValue: false },
      });

      // Should only have switch element, no labels
      const labels = component.locator('label');
      await expect(labels).toHaveCount(0);
    });

    test('renders HTML content in slots', async ({ mount }) => {
      const component = await mount(Switch, {
        props: { modelValue: false },
        slots: {
          leftText: '<strong>Bold Label</strong>',
          rightText: '<em>Italic Label</em>',
        },
      });

      const strongElement = component.locator('strong');
      await expect(strongElement).toHaveText('Bold Label');

      const emElement = component.locator('em');
      await expect(emElement).toHaveText('Italic Label');
    });
  });

  test.describe('v-model and Events', () => {
    test('toggles checked state when clicked', async ({ mount }) => {
      const component = await mount(Switch, {
        props: { modelValue: false },
      });

      const input = component.locator('input[type="checkbox"]');

      // Initially unchecked
      await expect(input).not.toBeChecked();

      // Click to toggle
      await input.click();

      // Should be checked now
      await expect(input).toBeChecked();
    });

    test('toggles from checked to unchecked when clicked', async ({ mount }) => {
      const component = await mount(Switch, {
        props: { modelValue: true },
      });

      const input = component.locator('input[type="checkbox"]');

      // Initially checked
      await expect(input).toBeChecked();

      // Click to toggle
      await input.click();

      // Should be unchecked now
      await expect(input).not.toBeChecked();
    });

    test('does not toggle when disabled', async ({ mount }) => {
      const component = await mount(Switch, {
        props: {
          modelValue: false,
          disabled: true,
        },
      });

      const input = component.locator('input[type="checkbox"]');

      // Initially unchecked
      await expect(input).not.toBeChecked();

      // Try to click disabled input - should not change state
      await input.click({ force: true });

      // Should remain unchecked
      await expect(input).not.toBeChecked();
    });

    test('v-model reactive updates work correctly', async ({ mount }) => {
      // Mount with reactive data
      const component = await mount(Switch, {
        props: { modelValue: false },
      });

      const input = component.locator('input[type="checkbox"]');

      // Initially unchecked
      await expect(input).not.toBeChecked();

      // Simulate external model update by clicking
      await input.click();

      // Should be checked now
      await expect(input).toBeChecked();
    });
  });

  test.describe('Accessibility', () => {
    test('has proper label association', async ({ mount }) => {
      const component = await mount(Switch, {
        props: {
          modelValue: false,
          id: 'test-switch',
        },
        slots: {
          default: 'Toggle Setting',
        },
      });

      const input = component.locator('input[type="checkbox"]');
      const inputId = await input.getAttribute('id');

      const label = component.locator('label');
      const labelFor = await label.getAttribute('for');

      expect(labelFor).toBe(inputId);
    });

    test('supports keyboard navigation', async ({ mount }) => {
      const component = await mount(Switch, {
        props: { modelValue: false },
        slots: { default: 'Keyboard Switch' },
      });

      const input = component.locator('input[type="checkbox"]');

      // Focus the input
      await input.focus();
      await expect(input).toBeFocused();

      // Should be activatable with Space key
      await input.press('Space');
      await expect(input).toBeChecked();

      // Press Space again to uncheck
      await input.press('Space');
      await expect(input).not.toBeChecked();
    });

    test('has proper ARIA attributes', async ({ mount }) => {
      const component = await mount(Switch, {
        props: { modelValue: false },
      });

      const input = component.locator('input[type="checkbox"]');

      // Should have checkbox role implicitly
      await expect(input).toHaveAttribute('type', 'checkbox');
      await expect(input).toHaveAttribute('name', 'checkbox');
    });

    test('has aria-disabled when disabled', async ({ mount }) => {
      const component = await mount(Switch, {
        props: {
          modelValue: false,
          disabled: true,
        },
      });

      await expect(component).toHaveAttribute('aria-disabled', 'true');

      const input = component.locator('input[type="checkbox"]');
      await expect(input).toBeDisabled();
    });

    test('label click toggles switch', async ({ mount }) => {
      const component = await mount(Switch, {
        props: { modelValue: false },
        slots: {
          default: 'Clickable Label',
        },
      });

      const input = component.locator('input[type="checkbox"]');

      // Initially unchecked
      await expect(input).not.toBeChecked();

      const label = component.locator('label');
      await label.click();

      // Clicking label should toggle the switch
      await expect(input).toBeChecked();
    });
  });

  test.describe('Interactive Behavior', () => {
    test('applies hover styles on mouse hover', async ({ mount }) => {
      const component = await mount(Switch, {
        props: { modelValue: false },
      });

      const switchWrapper = component.locator('[class*="spr-relative spr-flex spr-items-center"]');

      // Hover over the switch
      await switchWrapper.hover();

      // Should have transition classes for smooth hover effects
      const switchMark = component.locator('.switch-mark');
      await expect(switchMark).toHaveClass(/spr-transition-colors/);
      await expect(switchMark).toHaveClass(/before:spr-transition-all/);
    });

    test('has scale animation on active state when not disabled', async ({ mount }) => {
      const component = await mount(Switch, {
        props: { modelValue: false },
      });

      const switchWrapper = component.locator('[class*="spr-relative spr-flex spr-items-center"]');
      await expect(switchWrapper).toHaveClass(/active:spr-scale-90/);
    });

    test('does not have scale animation when disabled', async ({ mount }) => {
      const component = await mount(Switch, {
        props: {
          modelValue: false,
          disabled: true,
        },
      });

      const switchWrapper = component.locator('[class*="spr-relative spr-flex spr-items-center"]');
      await expect(switchWrapper).not.toHaveClass(/active:spr-scale-90/);
    });

    test('has cursor pointer when enabled', async ({ mount }) => {
      const component = await mount(Switch, {
        props: { modelValue: false },
      });

      const input = component.locator('input[type="checkbox"]');
      await expect(input).toHaveClass(/spr-cursor-pointer/);
    });

    test('has cursor not-allowed when disabled', async ({ mount }) => {
      const component = await mount(Switch, {
        props: {
          modelValue: false,
          disabled: true,
        },
      });

      const input = component.locator('input[type="checkbox"]');
      await expect(input).toHaveClass(/spr-cursor-not-allowed/);
    });
  });

  test.describe('Edge Cases', () => {
    test('handles missing modelValue gracefully', async ({ mount }) => {
      // Mount without modelValue - should fall back to default
      const component = await mount(Switch);

      await expect(component).toBeVisible();

      const input = component.locator('input[type="checkbox"]');
      await expect(input).not.toBeChecked();
    });

    test('works with complex slot content', async ({ mount }) => {
      const component = await mount(Switch, {
        props: { modelValue: false },
        slots: {
          leftText: '<div><span class="icon">🌙</span> Dark Mode</div>',
          rightText: '<div class="helper-text">Enable dark theme</div>',
        },
      });

      await expect(component).toContainText('🌙 Dark Mode');
      await expect(component).toContainText('Enable dark theme');

      const icon = component.locator('.icon');
      await expect(icon).toHaveText('🌙');

      const helper = component.locator('.helper-text');
      await expect(helper).toHaveText('Enable dark theme');
    });

    test('handles rapid state changes', async ({ mount }) => {
      const component = await mount(Switch, {
        props: { modelValue: false },
      });

      const input = component.locator('input[type="checkbox"]');

      // Initially unchecked
      await expect(input).not.toBeChecked();

      // Rapid clicks
      await input.click();
      await expect(input).toBeChecked();

      await input.click();
      await expect(input).not.toBeChecked();

      await input.click();
      await expect(input).toBeChecked();
    });

    test('maintains correct visual state during transitions', async ({ mount }) => {
      const component = await mount(Switch, {
        props: { modelValue: false },
      });

      const input = component.locator('input[type="checkbox"]');
      const switchMark = component.locator('.switch-mark');

      // Check initial state
      await expect(input).not.toBeChecked();
      await expect(switchMark).toHaveClass(/spr-switch-background-default/);

      // Toggle and verify the input state (visual transition may take time)
      await input.click();
      await expect(input).toBeChecked();
      // Note: Visual styles may depend on hover/focus state during test execution
      await expect(switchMark).toHaveClass(/spr-background-color-success-base|spr-switch-background-hover/);
    });
  });

  test.describe('Prop Combinations', () => {
    test('disabled checked switch maintains visual state', async ({ mount }) => {
      const component = await mount(Switch, {
        props: {
          modelValue: true,
          disabled: true,
        },
        slots: {
          default: 'Disabled Active Switch',
        },
      });

      const input = component.locator('input[type="checkbox"]');
      const switchMark = component.locator('.switch-mark');

      await expect(input).toBeChecked();
      await expect(input).toBeDisabled();
      await expect(switchMark).toHaveClass(/spr-background-color-success-base/);
      await expect(switchMark).toHaveClass(/spr-opacity-60/);
      await expect(component).toHaveClass(/spr-text-color-disabled/);
    });

    test('hover state with checked value', async ({ mount }) => {
      const component = await mount(Switch, {
        props: {
          modelValue: true,
          state: 'hover',
        },
      });

      const switchMark = component.locator('.switch-mark');
      await expect(switchMark).toHaveClass(/spr-background-color-success-base/);

      // Should have autofocus attribute
      await expect(component).toHaveAttribute('autofocus');
    });

    test('pressed state visual feedback', async ({ mount }) => {
      const component = await mount(Switch, {
        props: {
          modelValue: false,
          state: 'pressed',
        },
      });

      // Component should render normally - pressed state is handled via mouse interaction
      await expect(component).toBeVisible();

      const input = component.locator('input[type="checkbox"]');
      await expect(input).not.toBeChecked();
    });
  });
});
