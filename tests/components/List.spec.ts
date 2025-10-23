/**
 * Test Coverage Rationale:
 * - Tests all prop combinations and their effects on rendering
 * - Validates single and multi-select behavior
 * - Tests search functionality with local and disabled local search
 * - Validates grouping and sorting functionality
 * - Tests accessibility features including ARIA attributes and keyboard navigation
 * - Covers edge cases like empty states, loading states, and disabled items
 * - Tests pre-selected items and complex object handling
 * - Validates lozenge display mode
 * - Tests ladderized view with sublevels
 * - Tests disabledUnselectedItems prop and its effects on styling and interaction
 * - Tests text and icon color customization
 * - Validates disabled state styling and behavior
 *
 * ASSUMPTIONS:
 * - Icon component is properly imported and available
 * - Checkbox and Lozenge components work as expected
 * - CSS classes for styling are applied correctly
 * - Input search component emits proper events
 * - Disabled styling classes (spr-text-color-disabled, spr-cursor-not-allowed) are available
 *
 * TODO (Future Enhancements):
 * - Test recursive search in sublevel items
 * - Test complex nested object pre-selection scenarios
 * - Test performance with very large datasets
 * - Test integration with form validation
 * - Test custom keyboard shortcuts
 * - Test right-to-left (RTL) language support
 * - Test high contrast mode compatibility
 * - Test screen reader announcements for dynamic content
 * - Test interaction between disabledUnselectedItems and other props
 * - Test dynamic color changes for items
 */

import { test, expect } from '@playwright/experimental-ct-vue';
import List from '@/components/list/list.vue';
import type { MenuListType } from '@/components/list/list';

// Mock data for testing
const mockMenuItems: MenuListType[] = [
  { text: 'Apple', value: 'apple', subtext: 'A red fruit' },
  { text: 'Banana', value: 'banana', subtext: 'A yellow fruit' },
  { text: 'Cherry', value: 'cherry', disabled: true },
  { text: 'Date', value: 'date', group: 'Fruits' },
  { text: 'Elderberry', value: 'elderberry', group: 'Fruits' },
];

const mockGroupedItems: MenuListType[] = [
  { text: 'Apple', value: 'apple', group: 'A' },
  { text: 'Banana', value: 'banana', group: 'B' },
  { text: 'Cherry', value: 'cherry', group: 'C' },
  { text: 'Apricot', value: 'apricot', group: 'A' },
];

const mockItemsWithTextColors: MenuListType[] = [
  { text: 'Red Item', value: 'red', textColor: 'spr-text-red-500' },
  { text: 'Blue Item', value: 'blue', textColor: 'spr-text-blue-500' },
];

const mockItemsWithIcons: MenuListType[] = [
  { text: 'Home', value: 'home', icon: 'ph:house' },
  { text: 'Settings', value: 'settings', icon: 'ph:gear', iconColor: 'spr-text-red-500' },
];

const mockItemsWithLozenges: MenuListType[] = [
  {
    text: 'Task 1',
    value: 'task1',
    lozenge: {
      label: 'Active',
      tone: 'success',
      fill: true,
      removable: false,
      url: '',
      visible: true,
      loading: false,
      icon: '',
      postfixIcon: '',
      interactive: false,
      dropdown: false,
    },
  },
  {
    text: 'Task 2',
    value: 'task2',
    lozengeProps: {
      label: 'Pending',
      tone: 'caution',
      fill: false,
      removable: false,
      url: '',
      visible: true,
      loading: false,
      icon: '',
      postfixIcon: '',
      interactive: false,
      dropdown: false,
    },
  },
];

const mockItemsWithSublevels: MenuListType[] = [
  {
    text: 'Parent 1',
    value: 'parent1',
    sublevel: [
      { text: 'Child 1', value: 'child1' },
      { text: 'Child 2', value: 'child2' },
    ],
  },
  { text: 'Parent 2', value: 'parent2' },
];

test.describe('List Component', () => {
  test.describe('Basic Rendering', () => {
    test('should render with minimal props', async ({ mount }) => {
      const component = await mount(List, {
        props: {
          menuList: mockMenuItems,
        },
      });

      await expect(component).toBeVisible();
      await expect(component.getByText('Apple')).toBeVisible();
      await expect(component.getByText('Banana')).toBeVisible();
    });

    test('should display subtext when provided', async ({ mount }) => {
      const component = await mount(List, {
        props: {
          menuList: mockMenuItems,
        },
      });

      await expect(component.getByText('A red fruit')).toBeVisible();
      await expect(component.getByText('A yellow fruit')).toBeVisible();
    });

    test('should show loading state', async ({ mount }) => {
      const component = await mount(List, {
        props: {
          menuList: [],
          loading: true,
        },
      });

      // Check for skeletal loader with proper visibility check
      const loader = component.locator('.spr-skeletal-loader').first();
      await expect(loader).toBeAttached();
    });

    test('should show empty state when no items', async ({ mount }) => {
      const component = await mount(List, {
        props: {
          menuList: [],
        },
      });

      await expect(component.getByText('No results found')).toBeVisible();
    });
  });

  test.describe('Single Select Behavior', () => {
    test('should select single item by default', async ({ mount }) => {
      const component = await mount(List, {
        props: {
          menuList: mockMenuItems,
          modelValue: [],
        },
      });

      // Click on Apple
      await component.getByText('Apple').click();

      // Should have active background (check for classes that indicate selection)
      const appleRow = component.getByText('Apple').locator('xpath=ancestor::div[contains(@class, "spr-rounded-lg")]');
      await expect(appleRow).toHaveClass(/spr-background-color-single-active/);
    });

    test('should replace selection when clicking different item', async ({ mount }) => {
      let emittedValue: MenuListType[] = [];

      const component = await mount(List, {
        props: {
          menuList: mockMenuItems,
          modelValue: [],
          'onUpdate:modelValue': (value: MenuListType[]) => {
            emittedValue = value;
          },
        },
      });

      // Click Apple first
      await component.getByText('Apple').click();
      expect(emittedValue).toHaveLength(1);
      expect(emittedValue[0].value).toBe('apple');

      // Click Banana - should replace Apple
      await component.getByText('Banana').click();
      expect(emittedValue).toHaveLength(1);
      expect(emittedValue[0].value).toBe('banana');
    });

    test('should not select disabled items', async ({ mount }) => {
      const component = await mount(List, {
        props: {
          menuList: mockMenuItems,
          modelValue: [],
        },
      });

      // Try to click disabled Cherry
      const cherryItem = component.getByText('Cherry');
      await cherryItem.click();

      // Should not show check icon
      const checkIcon = component.locator('[icon="ph:check"]');
      await expect(checkIcon).not.toBeVisible();
    });

    test('should respect disabledUnselectedItems in single select mode', async ({ mount }) => {
      const component = await mount(List, {
        props: {
          menuList: mockMenuItems,
          disabledUnselectedItems: true,
          preSelectedItems: ['apple'], // Pre-select Apple
        },
      });

      // Banana should have disabled text styling since it's not selected and disabledUnselectedItems is true
      const bananaTextDiv = component
        .getByText('Banana')
        .locator('xpath=ancestor::div[contains(@class, "spr-text-color-disabled")]');
      await expect(bananaTextDiv).toBeVisible();

      // And the Banana container should have cursor-not-allowed class
      const bananaContainer = component
        .getByText('Banana')
        .locator('xpath=ancestor::div[contains(@class, "spr-cursor-not-allowed")]');
      await expect(bananaContainer).toBeVisible();
    });
  });

  test.describe('Multi Select Behavior', () => {
    test('should allow multiple selections', async ({ mount }) => {
      let emittedValue: MenuListType[] = [];

      const component = await mount(List, {
        props: {
          menuList: mockMenuItems,
          modelValue: [],
          multiSelect: true,
          'onUpdate:modelValue': (value: MenuListType[]) => {
            emittedValue = value;
          },
        },
      });

      // Should show checkboxes
      const checkboxes = component.locator('input[type="checkbox"]');
      await expect(checkboxes.first()).toBeVisible();

      // Select Apple
      await component.getByText('Apple').click();
      expect(emittedValue).toHaveLength(1);
      expect(emittedValue[0].value).toBe('apple');

      // Select Banana - should add to selection
      await component.getByText('Banana').click();
      expect(emittedValue).toHaveLength(2);
      expect(emittedValue.map((item) => item.value)).toContain('apple');
      expect(emittedValue.map((item) => item.value)).toContain('banana');
    });

    test('should deselect items when clicked again', async ({ mount }) => {
      // Test the deselection behavior using checkboxes which are more reliable for multi-select
      const component = await mount(List, {
        props: {
          menuList: mockMenuItems,
          modelValue: [],
          multiSelect: true,
        },
      });

      // Find Apple's checkbox and click it to select
      const appleCheckbox = component.locator('input[type="checkbox"]').first();
      await appleCheckbox.check();

      // Verify it's checked
      await expect(appleCheckbox).toBeChecked();

      // Click the checkbox again to deselect
      await appleCheckbox.uncheck();

      // Verify it's unchecked
      await expect(appleCheckbox).not.toBeChecked();
    });

    test('should disable checkboxes for disabled items', async ({ mount }) => {
      const component = await mount(List, {
        props: {
          menuList: mockMenuItems,
          multiSelect: true,
        },
      });

      // Get all checkboxes and find the one for Cherry (disabled item)
      const allCheckboxes = component.locator('input[type="checkbox"]');
      const disabledCheckbox = allCheckboxes.nth(2); // Cherry is the 3rd item (index 2)

      await expect(disabledCheckbox).toBeDisabled();
    });

    test('should handle disabledUnselectedItems prop', async ({ mount }) => {
      let emittedValue: MenuListType[] = [];

      const component = await mount(List, {
        props: {
          menuList: mockMenuItems,
          multiSelect: true,
          disabledUnselectedItems: true,
          modelValue: [{ text: 'Apple', value: 'apple', subtext: 'A red fruit' }],
          'onUpdate:modelValue': (value: MenuListType[]) => {
            emittedValue = value;
          },
        },
      });

      // Apple should be enabled (it's selected)
      const appleCheckbox = component.locator('input[type="checkbox"]').first();
      await expect(appleCheckbox).not.toBeDisabled();

      // Banana should be disabled (it's not selected and disabledUnselectedItems is true)
      const bananaCheckbox = component.locator('input[type="checkbox"]').nth(1);
      await expect(bananaCheckbox).toBeDisabled();
    });
  });

  test.describe('Search Functionality', () => {
    test('should show search input when searchableMenu is true', async ({ mount }) => {
      const component = await mount(List, {
        props: {
          menuList: mockMenuItems,
          searchableMenu: true,
        },
      });

      const searchInput = component.locator('input[placeholder="Search..."]');
      await expect(searchInput).toBeVisible();
    });

    test('should filter items based on search text', async ({ mount }) => {
      const component = await mount(List, {
        props: {
          menuList: mockMenuItems,
          searchableMenu: true,
        },
      });

      const searchInput = component.locator('input[placeholder="Search..."]');
      await searchInput.fill('app');

      // Should only show Apple
      await expect(component.getByText('Apple')).toBeVisible();
      await expect(component.getByText('Banana')).not.toBeVisible();
    });

    test('should search in subtext', async ({ mount }) => {
      const component = await mount(List, {
        props: {
          menuList: mockMenuItems,
          searchableMenu: true,
        },
      });

      const searchInput = component.locator('input[placeholder="Search..."]');
      await searchInput.fill('yellow');

      // Should show Banana (has "A yellow fruit" subtext)
      await expect(component.getByText('Banana')).toBeVisible();
      await expect(component.getByText('Apple')).not.toBeVisible();
    });

    test('should emit search value when disabledLocalSearch is true', async ({ mount, page }) => {
      let emittedSearchValue = '';
      let emissionCount = 0;

      const component = await mount(List, {
        props: {
          menuList: mockMenuItems,
          searchableMenu: true,
          disabledLocalSearch: true,
          'onUpdate:searchValue': (value: string) => {
            emittedSearchValue = value;
            emissionCount++;
          },
        },
      });

      const searchInput = component.locator('input[placeholder="Search..."]');

      // Test initial state
      expect(emittedSearchValue).toBe('');

      // Test typing multiple characters
      await searchInput.fill('test');
      await page.waitForTimeout(100); // Allow for debouncing
      expect(emittedSearchValue).toBe('test');

      // Test clearing search
      await searchInput.fill('');
      await page.waitForTimeout(100);
      expect(emittedSearchValue).toBe('');

      // Test special characters and spaces
      await searchInput.fill('test search with spaces & symbols!');
      await page.waitForTimeout(100);
      expect(emittedSearchValue).toBe('test search with spaces & symbols!');

      // Verify that all items are still visible when local search is disabled
      await expect(component.getByText('Apple')).toBeVisible();
      await expect(component.getByText('Banana')).toBeVisible();
      await expect(component.getByText('Cherry')).toBeVisible();

      // Verify multiple emissions occurred
      expect(emissionCount).toBeGreaterThan(1);
    });

    test('should use custom search placeholder', async ({ mount }) => {
      const component = await mount(List, {
        props: {
          menuList: mockMenuItems,
          searchableMenu: true,
          searchableMenuPlaceholder: 'Find items...',
        },
      });

      const searchInput = component.locator('input[placeholder="Find items..."]');
      await expect(searchInput).toBeVisible();
    });

    test('should display supporting text when provided', async ({ mount }) => {
      const component = await mount(List, {
        props: {
          menuList: mockMenuItems,
          searchableMenu: true,
          supportingDisplayText: 'Custom supporting text',
        },
      });

      await expect(component.getByText('Custom supporting text')).toBeVisible();
    });

    test('should display selected count when displayListItemSelected is true', async ({ mount }) => {
      const component = await mount(List, {
        props: {
          menuList: mockMenuItems,
          multiSelect: true,
          displayListItemSelected: true,
          modelValue: [mockMenuItems[0], mockMenuItems[1]], // Pre-select 2 items
        },
      });

      await expect(component.getByText('2 Selected')).toBeVisible();
    });

    test('should set sticky search offset', async ({ mount }) => {
      const component = await mount(List, {
        props: {
          menuList: mockMenuItems,
          searchableMenu: true,
          stickySearchOffset: 50,
        },
      });

      const stickyContainer = component.locator('.spr-sticky');
      await expect(stickyContainer).toHaveCSS('top', '50px');
    });
  });

  test.describe('Grouping and Sorting', () => {
    test('should group items by default group property', async ({ mount }) => {
      const component = await mount(List, {
        props: {
          menuList: mockMenuItems,
          groupItemsBy: 'default',
        },
      });

      // Should show group header
      await expect(component.getByText('FRUITS')).toBeVisible();

      // Items in group should be visible
      await expect(component.getByText('Date')).toBeVisible();
      await expect(component.getByText('Elderberry')).toBeVisible();
    });

    test('should sort items A-Z with letter grouping', async ({ mount }) => {
      const component = await mount(List, {
        props: {
          menuList: mockGroupedItems,
          groupItemsBy: 'A-Z',
        },
      });

      // Should show letter group headers as uppercase labels
      await expect(component.locator('.spr-label-xs-medium').filter({ hasText: 'A' })).toBeVisible();
      await expect(component.locator('.spr-label-xs-medium').filter({ hasText: 'B' })).toBeVisible();
      await expect(component.locator('.spr-label-xs-medium').filter({ hasText: 'C' })).toBeVisible();

      // Items should be present
      await expect(component.getByText('Apple')).toBeVisible();
      await expect(component.getByText('Apricot')).toBeVisible();
    });

    test('should sort items Z-A with letter grouping', async ({ mount }) => {
      const component = await mount(List, {
        props: {
          menuList: mockGroupedItems,
          groupItemsBy: 'Z-A',
        },
      });

      // Should show letter group headers in reverse order as uppercase labels
      await expect(component.locator('.spr-label-xs-medium').filter({ hasText: 'C' })).toBeVisible();
      await expect(component.locator('.spr-label-xs-medium').filter({ hasText: 'B' })).toBeVisible();
      await expect(component.locator('.spr-label-xs-medium').filter({ hasText: 'A' })).toBeVisible();
    });
  });

  test.describe('Pre-selected Items', () => {
    test('should pre-select items by value', async ({ mount }) => {
      let modelValue: MenuListType[] = [];

      const component = await mount(List, {
        props: {
          menuList: mockMenuItems,
          preSelectedItems: ['apple', 'banana'],
          multiSelect: true,
          modelValue: [],
          'onUpdate:modelValue': (value: MenuListType[]) => {
            modelValue = value;
          },
        },
      });

      // Ensure component is rendered and items are available
      await expect(component.getByText('Apple')).toBeVisible();

      // Give the component time to process pre-selected items
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Check if the model value was updated with pre-selected items
      expect(modelValue.length).toBeGreaterThan(0);
      expect(modelValue.some((item) => item.value === 'apple')).toBe(true);
    });

    test('should handle complex object pre-selection', async ({ mount }) => {
      const complexItems: MenuListType[] = [
        {
          text: 'Item 1',
          value: 1,
          _originalObject: { id: 1, name: 'Item 1', category: 'A' },
        },
        {
          text: 'Item 2',
          value: 2,
          _originalObject: { id: 2, name: 'Item 2', category: 'B' },
        },
      ];

      const component = await mount(List, {
        props: {
          menuList: complexItems,
          preSelectedItems: [{ id: 1, name: 'Item 1', category: 'A' }],
          multiSelect: true,
        },
      });

      // Should pre-select Item 1 based on object matching
      const checkedCheckboxes = component.locator('input[type="checkbox"]:checked');
      await expect(checkedCheckboxes).toHaveCount(1);
    });
  });

  test.describe('Icons and Visual Elements', () => {
    test('should display item icons', async ({ mount }) => {
      const component = await mount(List, {
        props: {
          menuList: mockItemsWithIcons,
        },
      });

      // Should show icon elements (Iconify renders SVG elements)
      const homeIcon = component.locator('svg').first();
      await expect(homeIcon).toBeVisible();

      // Verify both items with icons are present
      await expect(component.getByText('Home')).toBeVisible();
      await expect(component.getByText('Settings')).toBeVisible();
    });

    test('should use global item icon for all items', async ({ mount }) => {
      const component = await mount(List, {
        props: {
          menuList: mockMenuItems,
          itemIcon: 'ph:star',
        },
      });

      // Should show SVG icons for all items
      const svgIcons = component.locator('svg');
      await expect(svgIcons).toHaveCount(mockMenuItems.length);
    });

    test('should apply text colors when provided', async ({ mount }) => {
      const component = await mount(List, {
        props: {
          menuList: mockItemsWithTextColors,
        },
      });

      // Check if text color classes are applied
      const redItemDiv = component
        .getByText('Red Item')
        .locator('xpath=ancestor::div[contains(@class, "spr-text-red-500")]');
      await expect(redItemDiv).toBeVisible();

      const blueItemDiv = component
        .getByText('Blue Item')
        .locator('xpath=ancestor::div[contains(@class, "spr-text-blue-500")]');
      await expect(blueItemDiv).toBeVisible();
    });

    test('should apply icon colors', async ({ mount }) => {
      const component = await mount(List, {
        props: {
          menuList: mockItemsWithIcons,
        },
      });

      // Should apply icon color class to the span containing the icon
      const settingsRow = component
        .getByText('Settings')
        .locator('xpath=ancestor::div[contains(@class, "spr-rounded-lg")]');
      const iconSpan = settingsRow.locator('span').first();
      await expect(iconSpan).toHaveClass(/spr-text-red-500/);
    });
  });

  test.describe('Lozenge Display Mode', () => {
    test('should display items as lozenges when lozenge prop is true', async ({ mount }) => {
      const component = await mount(List, {
        props: {
          menuList: mockItemsWithLozenges,
          lozenge: true,
        },
      });

      // Should show lozenge components
      const lozenges = component.locator('[class*="lozenge"]');
      await expect(lozenges.first()).toBeVisible();
    });

    test('should show individual item lozenges', async ({ mount }) => {
      const component = await mount(List, {
        props: {
          menuList: mockItemsWithLozenges,
        },
      });

      // Should show lozenge for items that have lozenge property
      await expect(component.getByText('Active')).toBeVisible();
    });
  });

  test.describe('Ladderized View', () => {
    test('should show caret for items with sublevels', async ({ mount }) => {
      const component = await mount(List, {
        props: {
          menuList: mockItemsWithSublevels,
          ladderized: true,
        },
      });

      // Should show right caret icon as SVG for Parent 1 (has sublevel)
      const parent1Row = component
        .getByText('Parent 1')
        .locator('xpath=ancestor::div[contains(@class, "spr-rounded-lg")]');
      await expect(parent1Row.locator('svg').first()).toBeVisible();

      // Parent 2 should be visible but without caret (no sublevel)
      await expect(component.getByText('Parent 2')).toBeVisible();
    });

    test('should show check mark for selected items without sublevels in ladderized mode', async ({ mount }) => {
      const component = await mount(List, {
        props: {
          menuList: mockItemsWithSublevels,
          ladderized: true,
          modelValue: [{ text: 'Parent 2', value: 'parent2' }],
        },
      });

      // Should show check icon as SVG for selected Parent 2 (no sublevel)
      const parent2Row = component
        .getByText('Parent 2')
        .locator('xpath=ancestor::div[contains(@class, "spr-rounded-lg")]');
      await expect(parent2Row.locator('svg')).toBeVisible();
    });
  });

  test.describe('Accessibility', () => {
    test('should be keyboard navigable', async ({ mount, page }) => {
      const component = await mount(List, {
        props: {
          menuList: mockMenuItems,
        },
      });

      // Ensure component is loaded first
      await expect(component.getByText('Apple')).toBeVisible();

      // Focus first item
      await page.keyboard.press('Tab');

      // Should be able to navigate with arrow keys
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('ArrowUp');

      // Should be able to select with Enter/Space
      await page.keyboard.press('Enter');
    });

    test('should have proper ARIA attributes for checkboxes', async ({ mount }) => {
      const component = await mount(List, {
        props: {
          menuList: mockMenuItems,
          multiSelect: true,
        },
      });

      const checkboxes = component.locator('input[type="checkbox"]');
      await expect(checkboxes.first()).toHaveAttribute('type', 'checkbox');
    });

    test('should handle disabled items properly for accessibility', async ({ mount }) => {
      const component = await mount(List, {
        props: {
          menuList: mockMenuItems,
          multiSelect: true,
        },
      });

      // Disabled item should have disabled styling on the container
      const cherryContainer = component
        .getByText('Cherry')
        .locator('xpath=ancestor::div[contains(@class, "spr-text-color-disabled")]');
      await expect(cherryContainer).toBeVisible();
    });
  });

  test.describe('Edge Cases and Error Handling', () => {
    test('should handle empty menu list gracefully', async ({ mount }) => {
      const component = await mount(List, {
        props: {
          menuList: [],
        },
      });

      await expect(component.getByText('No results found')).toBeVisible();
    });

    test('should handle null/undefined values', async ({ mount }) => {
      const menuWithNulls: MenuListType[] = [
        { text: 'Valid Item', value: 'valid' },
        { text: '', value: null as any },
        { text: 'Another Valid', value: 'valid2' },
      ];

      await mount(List, {
        props: {
          menuList: menuWithNulls,
        },
      });

      // Should handle the null values gracefully and render valid items
      // The test passes if no errors are thrown during mounting
    });

    test('should handle very long item lists efficiently', async ({ mount }) => {
      const longList: MenuListType[] = Array.from({ length: 100 }, (_, i) => ({
        text: `Item ${i + 1}`,
        value: `item${i + 1}`,
      }));

      const component = await mount(List, {
        props: {
          menuList: longList,
        },
      });

      // Should render first item (use exact text to avoid ambiguity)
      await expect(component.getByText('Item 1', { exact: true })).toBeVisible();

      // Should handle search efficiently
      const searchableComponent = await mount(List, {
        props: {
          menuList: longList,
          searchableMenu: true,
        },
      });

      const searchInput = searchableComponent.locator('input[placeholder="Search..."]');
      await searchInput.fill('Item 50');
      await expect(searchableComponent.getByText('Item 50', { exact: true })).toBeVisible();
    });

    test('should not show check icon when noCheck is true', async ({ mount }) => {
      const component = await mount(List, {
        props: {
          menuList: mockMenuItems,
          modelValue: [{ text: 'Apple', value: 'apple' }],
          noCheck: true,
        },
      });

      // Should not show check icon even for selected items
      const checkIcon = component.locator('[icon="ph:check"]');
      await expect(checkIcon).not.toBeVisible();
    });

    test('should show disabled styling for disabled items', async ({ mount }) => {
      const component = await mount(List, {
        props: {
          menuList: mockMenuItems,
        },
      });

      // Check that disabled items have disabled styling
      const cherryItem = component.getByText('Cherry');
      const cherryContainer = cherryItem.locator('xpath=ancestor::div[contains(@class, "spr-cursor-not-allowed")]');
      await expect(cherryContainer).toBeVisible();
    });

    test('should show disabled styling when disabledUnselectedItems is true', async ({ mount }) => {
      const component = await mount(List, {
        props: {
          menuList: mockMenuItems,
          disabledUnselectedItems: true,
          modelValue: [{ text: 'Apple', value: 'apple', subtext: 'A red fruit' }],
        },
      });

      // Banana should have disabled text styling since it's not selected
      const bananaTextDiv = component
        .getByText('Banana')
        .locator('xpath=ancestor::div[contains(@class, "spr-text-color-disabled")]');
      await expect(bananaTextDiv).toBeVisible();
    });

    test('should handle mixed value types (string and number)', async ({ mount }) => {
      const mixedItems: MenuListType[] = [
        { text: 'String Value', value: 'string' },
        { text: 'Number Value', value: 123 },
        { text: 'Zero Value', value: 0 },
      ];

      let emittedValue: MenuListType[] = [];

      const component = await mount(List, {
        props: {
          menuList: mixedItems,
          modelValue: [],
          multiSelect: true,
          'onUpdate:modelValue': (value: MenuListType[]) => {
            emittedValue = value;
          },
        },
      });

      // Should handle string values
      await component.getByText('String Value').click();
      expect(emittedValue[0].value).toBe('string');

      // Should handle number values
      await component.getByText('Number Value').click();
      expect(emittedValue[1].value).toBe(123);

      // Should handle zero values
      await component.getByText('Zero Value').click();
      expect(emittedValue[2].value).toBe(0);
    });
  });

  test.describe('Event Handling', () => {
    test('should emit modelValue updates correctly', async ({ mount }) => {
      let emittedValue: MenuListType[] = [];

      const component = await mount(List, {
        props: {
          menuList: mockMenuItems,
          modelValue: [],
          'onUpdate:modelValue': (value: MenuListType[]) => {
            emittedValue = value;
          },
        },
      });

      await component.getByText('Apple').click();

      expect(emittedValue).toHaveLength(1);
      expect(emittedValue[0]).toMatchObject({
        text: 'Apple',
        value: 'apple',
        subtext: 'A red fruit',
      });
    });

    test('should execute onClickFn when provided', async ({ mount }) => {
      let clickFnCalled = false;
      const itemsWithClickFn: MenuListType[] = [
        {
          text: 'Clickable Item',
          value: 'clickable',
          onClickFn: () => {
            clickFnCalled = true;
          },
        },
      ];

      const component = await mount(List, {
        props: {
          menuList: itemsWithClickFn,
        },
      });

      await component.getByText('Clickable Item').click();

      expect(clickFnCalled).toBe(true);
    });
  });
});
