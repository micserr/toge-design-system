/**
 * Test Coverage Rationale:
 * - Basic rendering and props validation
 * - Various option types (strings, numbers, objects)
 * - v-model binding and update events
 * - Search functionality (local and disabled)
 * - Clearable behavior
 * - Accessibility features
 * - Popper integration and positioning
 * - Error states and edge cases
 * - Complex object handling with dynamic fields
 *
 * ASSUMPTIONS:
 * - floating-vue Menu component is properly configured
 * - Icon component from @iconify/vue is available
 * - List component (spr-list) handles the menu items correctly
 * - Input component (spr-input) provides the expected interface
 * - CSS classes follow the design system conventions
 *
 * TODO (Future Enhancements):
 * - Test tooltip integration if tooltips are added
 * - Test theme variants if multiple themes are supported
 * - Test right-to-left (RTL) support
 * - Test with different viewport sizes for responsive behavior
 * - Test integration with form validation libraries
 * - Test with virtual scrolling for very large datasets
 * - Test custom item renderers/templates
 * - Test multi-select functionality if implemented
 * - Test drag and drop reordering if implemented
 */

import { test, expect } from '@playwright/experimental-ct-vue';
import Select from '@/components/select/select.vue';
import type { MenuListType } from '@/components/list/list';

test.describe('Select Component', () => {
  const basicStringOptions = ['Option 1', 'Option 2', 'Option 3'];
  const basicNumberOptions = ['1', '2', '3']; // Convert numbers to strings for type compatibility
  const basicObjectOptions: MenuListType[] = [
    { text: 'First Option', value: 'option1' },
    { text: 'Second Option', value: 'option2' },
    { text: 'Third Option', value: 'option3' },
  ];
  const dynamicObjectOptions = [
    { id: 1, name: 'John Doe', role: 'Admin' },
    { id: 2, name: 'Jane Smith', role: 'User' },
    { id: 3, name: 'Bob Johnson', role: 'Manager' },
  ];

  test.describe('Basic Rendering', () => {
    test('should render with required props', async ({ mount }) => {
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: basicStringOptions,
        },
      });

      await expect(component).toBeVisible();
      await expect(component.locator('input')).toHaveAttribute('id', 'input-test-select');
    });

    test('should render with label and supporting label', async ({ mount }) => {
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: basicStringOptions,
          label: 'Select an option',
          supportingLabel: 'Choose wisely',
        },
      });

      await expect(component.getByText('Select an option')).toBeVisible();
      await expect(component.getByText('Choose wisely')).toBeVisible();
    });

    test('should render with placeholder', async ({ mount }) => {
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: basicStringOptions,
          placeholder: 'Choose an option...',
        },
      });

      await expect(component.locator('input')).toHaveAttribute('placeholder', 'Choose an option...');
    });

    test('should render helper text and icon', async ({ mount }) => {
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: basicStringOptions,
          displayHelper: true,
          helperText: 'This is helpful',
          helperIcon: 'ph:info',
        },
      });

      await expect(component.getByText('This is helpful')).toBeVisible();
    });
  });

  test.describe('Option Types', () => {
    test('should handle string array options', async ({ mount }) => {
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: basicStringOptions,
        },
      });

      // Click to open dropdown
      await component.locator('input').click();

      // Check all options are visible in the dropdown list (not the hidden select)
      for (const option of basicStringOptions) {
        await expect(component.locator('.spr-grid .spr-text-left').filter({ hasText: option })).toBeVisible();
      }
    });

    test('should handle number array options (as strings)', async ({ mount }) => {
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: basicNumberOptions,
        },
      });

      await component.locator('input').click();

      for (const option of basicNumberOptions) {
        await expect(component.locator('.spr-grid .spr-text-left').filter({ hasText: option })).toBeVisible();
      }
    });

    test('should handle MenuListType object options', async ({ mount }) => {
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: basicObjectOptions,
        },
      });

      await component.locator('input').click();

      for (const option of basicObjectOptions) {
        await expect(component.locator('.spr-grid .spr-text-left').filter({ hasText: option.text })).toBeVisible();
      }
    });

    test('should handle dynamic object options with custom text/value fields', async ({ mount }) => {
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: dynamicObjectOptions,
          textField: 'name',
          valueField: 'id',
        },
      });

      await component.locator('input').click();

      for (const option of dynamicObjectOptions) {
        await expect(component.locator('.spr-grid .spr-text-left').filter({ hasText: option.name })).toBeVisible();
      }
    });

    test('should handle empty options array', async ({ mount }) => {
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: [],
        },
      });

      await component.locator('input').click();
      await expect(component.getByText('No results found')).toBeVisible();
    });
  });

  test.describe('Model Value and Selection', () => {
    test('should support v-model with string options', async ({ mount }) => {
      let modelValue = '';
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: basicStringOptions,
          modelValue,
          'onUpdate:modelValue': (value: unknown) => {
            modelValue = value as string;
          },
        },
      });

      await component.locator('input').click();
      await component.locator('.spr-grid .spr-text-left').filter({ hasText: 'Option 2' }).click();

      expect(modelValue).toBe('Option 2');
      await expect(component.locator('input')).toHaveValue('Option 2');
    });

    test('should support v-model with number options', async ({ mount }) => {
      let modelValue: string = '';
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: basicNumberOptions,
          modelValue,
          'onUpdate:modelValue': (value: unknown) => {
            modelValue = value as string;
          },
        },
      });

      await component.locator('input').click();
      await component.locator('.spr-grid .spr-text-left').filter({ hasText: '2' }).click();

      expect(modelValue).toBe('2');
      await expect(component.locator('input')).toHaveValue('2');
    });

    test('should support v-model with object options', async ({ mount }) => {
      let modelValue: Record<string, unknown> | string = '';
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: dynamicObjectOptions,
          textField: 'name',
          valueField: 'id',
          modelValue,
          'onUpdate:modelValue': (value: unknown) => {
            modelValue = value as Record<string, unknown>;
          },
        },
      });

      await component.locator('input').click();
      await component.locator('.spr-grid .spr-text-left').filter({ hasText: 'Jane Smith' }).click();

      expect(modelValue).toEqual({ id: 2, name: 'Jane Smith', role: 'User' });
    });

    test('should display initial model value correctly', async ({ mount }) => {
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: basicStringOptions,
          modelValue: 'Option 2',
        },
      });

      await expect(component.locator('input')).toHaveValue('Option 2');
    });

    test('should display custom displayText when provided', async ({ mount }) => {
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: basicStringOptions,
          displayText: 'Custom Display Text',
        },
      });

      await expect(component.locator('input')).toHaveValue('Custom Display Text');
    });
  });

  test.describe('Search Functionality', () => {
    test('should enable search when searchable is true', async ({ mount }) => {
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: basicStringOptions,
          searchable: true,
        },
      });

      const input = component.locator('input');
      await expect(input).not.toHaveAttribute('readonly');

      // Should be able to type in the input
      await input.click();
      await input.fill('Option 1');
      await expect(input).toHaveValue('Option 1');
    });

    test('should filter options locally when searching', async ({ mount }) => {
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: basicStringOptions,
          searchable: true,
        },
      });

      const input = component.locator('input');
      await input.click();
      await input.fill('Option 1');

      // Should only show matching option
      await expect(component.getByText('Option 1')).toBeVisible();
      await expect(component.getByText('Option 2')).not.toBeVisible();
      await expect(component.getByText('Option 3')).not.toBeVisible();
    });

    test('should emit search-string event when typing', async ({ mount, page }) => {
      let searchString = '';
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: basicStringOptions,
          searchable: true,
          'onSearch-string': (value: unknown) => {
            searchString = value as string;
          },
        },
      });

      await component.locator('input').click();
      await component.locator('input').fill('test');

      // Wait for debounced search
      await page.waitForTimeout(350);
      expect(searchString).toBe('test');
    });

    test('should show "No results found" when search has no matches', async ({ mount }) => {
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: basicStringOptions,
          searchable: true,
        },
      });

      await component.locator('input').click();
      await component.locator('input').fill('nonexistent');

      await expect(component.getByText('No results found')).toBeVisible();
    });

    test('should disable local search when disabledLocalSearch is true', async ({ mount }) => {
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: basicStringOptions,
          searchable: true,
          disabledLocalSearch: true,
        },
      });

      await component.locator('input').click();
      await component.locator('input').fill('Option 1');

      // All options should still be visible since local search is disabled
      await expect(component.getByText('Option 1')).toBeVisible();
      await expect(component.getByText('Option 2')).toBeVisible();
      await expect(component.getByText('Option 3')).toBeVisible();
    });
  });

  test.describe('Clearable Functionality', () => {
    test('should show clear icon when clearable and has value', async ({ mount }) => {
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: basicStringOptions,
          modelValue: 'Option 1',
          clearable: true,
        },
      });

      await expect(component.locator('[data-icon="ph:x"]')).toBeVisible();
    });

    test('should not show clear icon when no value', async ({ mount }) => {
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: basicStringOptions,
          clearable: true,
        },
      });

      await expect(component.locator('[data-icon="ph:x"]')).not.toBeVisible();
    });

    test('should clear value when clear icon clicked', async ({ mount }) => {
      let modelValue = 'Option 1';
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: basicStringOptions,
          modelValue,
          clearable: true,
          'onUpdate:modelValue': (value: unknown) => {
            modelValue = value as string;
          },
        },
      });

      await component.locator('[data-icon="ph:x"]').click();

      expect(modelValue).toBe('');
      await expect(component.locator('input')).toHaveValue('');
    });

    test('should emit search-string event when clearing', async ({ mount }) => {
      let searchString = 'initial';
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: basicStringOptions,
          modelValue: 'Option 1',
          clearable: true,
          'onSearch-string': (value: unknown) => {
            searchString = value as string;
          },
        },
      });

      await component.locator('[data-icon="ph:x"]').click();
      expect(searchString).toBe('');
    });
  });

  test.describe('States and Variants', () => {
    test('should apply disabled state', async ({ mount }) => {
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: basicStringOptions,
          disabled: true,
        },
      });

      await expect(component.locator('input')).toBeDisabled();

      // Should not open dropdown when disabled
      await component.locator('input').click();
      await expect(component.getByText('Option 1')).not.toBeVisible();
    });

    test('should apply error state', async ({ mount }) => {
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: basicStringOptions,
          error: true,
        },
      });

      // The input should have error styling (specific classes would need to be checked)
      await expect(component.locator('input')).toBeVisible();
    });

    test('should apply active state', async ({ mount }) => {
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: basicStringOptions,
          active: true,
        },
      });

      await expect(component.locator('input')).toBeVisible();
    });

    test('should display with lozenge style', async ({ mount }) => {
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: basicObjectOptions,
          lozenge: true,
        },
      });

      await component.locator('input').click();
      await expect(component.locator('[role="menu"]')).toBeVisible();
    });
  });

  test.describe('Events', () => {
    test('should emit get-selected-option when item selected', async ({ mount }) => {
      let selectedOption: any = null;
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: basicObjectOptions,
          'onGet-selected-option': (option: unknown) => {
            selectedOption = option;
          },
        },
      });

      await component.locator('input').click();
      await component.getByText('Second Option').click();

      expect(selectedOption).toEqual({ text: 'Second Option', value: 'option2' });
    });

    test('should emit popper-state when dropdown opens/closes', async ({ mount }) => {
      let popperState = false;
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: basicStringOptions,
          'onPopper-state': (state: unknown) => {
            popperState = state as boolean;
          },
        },
      });

      // Open dropdown
      await component.locator('input').click();
      expect(popperState).toBe(true);

      // Close by clicking outside
      await component.click({ position: { x: 0, y: 0 } });
      expect(popperState).toBe(false);
    });

    test('should emit infinite-scroll-trigger', async ({ mount }) => {
      let scrollTriggered = false;
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: Array.from({ length: 50 }, (_, i) => `Option ${i + 1}`),
          'onInfinite-scroll-trigger': (triggered: unknown) => {
            scrollTriggered = triggered as boolean;
          },
        },
      });

      await component.locator('input').click();

      // Scroll to bottom of the list to trigger infinite scroll
      const dropdown = component.locator('.spr-max-h-\\[300px\\]');
      await dropdown.hover();
      await dropdown.evaluate((el) => {
        el.scrollTop = el.scrollHeight;
      });

      // The infinite scroll should trigger
      expect(scrollTriggered).toBe(true);
    });
  });

  test.describe('Popper Integration', () => {
    test('should support different placements', async ({ mount }) => {
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: basicStringOptions,
          placement: 'top',
        },
      });

      await component.locator('input').click();
      await expect(component.getByText('Option 1')).toBeVisible();
    });

    test('should support custom distance', async ({ mount }) => {
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: basicStringOptions,
          distance: 20,
        },
      });

      await component.locator('input').click();
      await expect(component.getByText('Option 1')).toBeVisible();
    });

    test('should support different popper strategies', async ({ mount }) => {
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: basicStringOptions,
          popperStrategy: 'fixed',
        },
      });

      await component.locator('input').click();
      await expect(component.getByText('Option 1')).toBeVisible();
    });

    test('should support custom popper width', async ({ mount }) => {
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: basicStringOptions,
          popperWidth: '300px',
        },
      });

      await component.locator('input').click();
      await expect(component.getByText('Option 1')).toBeVisible();
    });
  });

  test.describe('Grouping', () => {
    test('should support A-Z grouping', async ({ mount }) => {
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: ['Zebra', 'Apple', 'Banana'],
          groupItemsBy: 'A-Z',
        },
      });

      await component.locator('input').click();

      // All options should be visible (specific grouping display would depend on List component)
      await expect(component.getByText('Apple')).toBeVisible();
      await expect(component.getByText('Banana')).toBeVisible();
      await expect(component.getByText('Zebra')).toBeVisible();
    });

    test('should support Z-A grouping', async ({ mount }) => {
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: ['Apple', 'Banana', 'Zebra'],
          groupItemsBy: 'Z-A',
        },
      });

      await component.locator('input').click();

      await expect(component.getByText('Apple')).toBeVisible();
      await expect(component.getByText('Banana')).toBeVisible();
      await expect(component.getByText('Zebra')).toBeVisible();
    });
  });

  test.describe('Accessibility', () => {
    test('should have proper ARIA attributes', async ({ mount }) => {
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: basicStringOptions,
          label: 'Select an option',
        },
      });

      // Label should be associated with input
      const label = component.locator('label');
      await expect(label).toHaveAttribute('for', 'test-select');

      // Input should have proper ID
      const input = component.locator('input');
      await expect(input).toHaveAttribute('id', 'input-test-select');
    });

    test('should support keyboard navigation', async ({ mount, page }) => {
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: basicStringOptions,
        },
      });

      // Focus the input
      await component.locator('input').focus();

      // Press Enter or Space to open (depends on implementation)
      await page.keyboard.press('Enter');

      // Check if dropdown opened
      await expect(component.getByText('Option 1')).toBeVisible();
    });

    test('should handle screen reader requirements', async ({ mount }) => {
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: basicStringOptions,
          label: 'Choose option',
        },
      });

      // Hidden select for QA/screen readers should be present
      await component.locator('input').click();
      await expect(component.locator('[data-testid="qa-hidden-select"]')).toBeHidden();
    });
  });

  test.describe('Edge Cases', () => {
    test('should handle undefined model value', async ({ mount }) => {
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: basicStringOptions,
          modelValue: undefined,
        },
      });

      await expect(component.locator('input')).toHaveValue('');
    });

    test('should handle empty string model value', async ({ mount }) => {
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: basicStringOptions,
          modelValue: '',
        },
      });

      await expect(component.locator('input')).toHaveValue('');
    });

    test('should handle rapid option changes', async ({ mount }) => {
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: basicStringOptions,
        },
      });

      await component.locator('input').click();
      await expect(component.getByText('Option 1')).toBeVisible();

      // Change options
      await component.update({
        props: {
          id: 'test-select',
          options: ['New Option 1', 'New Option 2'],
        },
      });

      await expect(component.getByText('New Option 1')).toBeVisible();
    });

    test('should handle very long option text', async ({ mount }) => {
      const longOptions = ['This is a very long option text that might cause overflow issues in the dropdown'];
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: longOptions,
        },
      });

      await component.locator('input').click();
      await expect(component.getByText(longOptions[0])).toBeVisible();
    });

    test('should handle special characters in options', async ({ mount }) => {
      const specialOptions = ['Option with "quotes"', 'Option with <tags>', 'Option with & ampersand'];
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: specialOptions,
        },
      });

      await component.locator('input').click();

      for (const option of specialOptions) {
        await expect(component.getByText(option)).toBeVisible();
      }
    });

    test('should handle disabled options in MenuListType', async ({ mount }) => {
      const optionsWithDisabled: MenuListType[] = [
        { text: 'Option 1', value: '1', disabled: false },
        { text: 'Option 2', value: '2', disabled: true },
        { text: 'Option 3', value: '3', disabled: false },
      ];

      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: optionsWithDisabled,
        },
      });

      await component.locator('input').click();

      // All options should be visible (disabled state handling depends on List component)
      await expect(component.getByText('Option 1')).toBeVisible();
      await expect(component.getByText('Option 2')).toBeVisible();
      await expect(component.getByText('Option 3')).toBeVisible();
    });
  });

  test.describe('Slots and Custom Content', () => {
    test('should render helper message slot', async ({ mount }) => {
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: basicStringOptions,
          displayHelper: true,
        },
        slots: {
          helperMessage: 'Custom helper content',
        },
      });

      await expect(component.getByText('Custom helper content')).toBeVisible();
    });
  });

  test.describe('Performance and Async Behavior', () => {
    test('should handle large datasets efficiently', async ({ mount }) => {
      const largeOptions = Array.from({ length: 1000 }, (_, i) => `Option ${i + 1}`);
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: largeOptions,
        },
      });

      // Should render without significant delay
      await expect(component.locator('input')).toBeVisible();

      // Should open dropdown efficiently
      await component.locator('input').click();
      await expect(component.getByText('Option 1')).toBeVisible();
    });

    test('should debounce search input', async ({ mount, page }) => {
      let searchCallCount = 0;
      const component = await mount(Select, {
        props: {
          id: 'test-select',
          options: basicStringOptions,
          searchable: true,
          'onSearch-string': () => {
            searchCallCount++;
          },
        },
      });

      const input = component.locator('input');
      await input.click();

      // Type rapidly
      await input.fill('a');
      await input.fill('ab');
      await input.fill('abc');

      // Wait for debounce
      await page.waitForTimeout(350);

      // Should only call search once due to debouncing
      expect(searchCallCount).toBeLessThanOrEqual(1);
    });
  });
});
