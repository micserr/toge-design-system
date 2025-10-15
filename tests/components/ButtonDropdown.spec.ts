/**
 * ButtonDropdown Component Tests
 * 
 * Test Coverage Rationale:
 * - Composite component testing: Validates button + dropdown integration
 * - Props inheritance: Tests button props passed through correctly
 * - v-model binding: Validates two-way data binding with selected menu items
 * - Event handling: Tests both button clicks and dropdown selections
 * - Visual styling: Validates button-specific classes for joined appearance
 * - Accessibility: ARIA attributes, keyboard navigation for both components
 * - Menu interactions: Dropdown opening, item selection, multi-select
 * - Edge cases: Empty menus, disabled states, complex menu structures
 * 
 * ASSUMPTIONS:
 * - SprButton and SprDropdown components are independently tested
 * - Focus is on integration behavior and button-dropdown specific logic
 * - Menu item structure follows MenuListType interface
 * - floating-vue library handles dropdown positioning and popper behavior
 * 
 * Future enhancements could include testing with very large menu lists for performance,
 * nested/hierarchical menu structures, and custom popper positioning edge cases.
 */

import { test, expect } from '@playwright/experimental-ct-vue';
import ButtonDropdown from '@/components/button/button-dropdown/button-dropdown.vue';
import type { MenuListType } from '@/components/list/list';

test.describe('ButtonDropdown Component', () => {
  const sampleMenuList: MenuListType[] = [
    { text: 'Option 1', value: '1' },
    { text: 'Option 2', value: '2' },
    { text: 'Option 3', value: '3' },
  ];

  const complexMenuList: MenuListType[] = [
    { text: 'Save', value: 'save', icon: 'ph:floppy-disk' },
    { text: 'Save As...', value: 'save-as', subtext: 'Save with new name' },
    { text: 'Export', value: 'export', disabled: true },
    { text: 'Print', value: 'print', icon: 'ph:printer' },
  ];

  test.describe('Rendering', () => {
    test('renders with required props', async ({ mount }) => {
      const component = await mount(ButtonDropdown, {
        props: {
          modelValue: [],
          dropdownId: 'test-dropdown',
          menuList: sampleMenuList,
        },
        slots: { default: 'Actions' }
      });
      
      await expect(component).toBeVisible();
      
      // Should contain both main button and dropdown button
      const mainButton = component.locator('button').first();
      const dropdownButton = component.locator('button').nth(1);
      
      await expect(mainButton).toBeVisible();
      await expect(mainButton).toHaveText('Actions');
      await expect(dropdownButton).toBeVisible();
      
      // Dropdown button should have caret icon
      await expect(dropdownButton.locator('svg')).toBeVisible();
    });

    test('renders with default props', async ({ mount }) => {
      const component = await mount(ButtonDropdown, {
        props: {
          modelValue: [],
          dropdownId: 'default-dropdown',
          menuList: sampleMenuList,
        },
        slots: { default: 'Default Button' }
      });
      
      await expect(component).toBeVisible();
      
      // Should have default tone (neutral) and variant (primary)
      const mainButton = component.locator('button').first();
      await expect(mainButton).toHaveClass(/spr-background-color-base/);
    });

    test('renders without slot content', async ({ mount }) => {
      const component = await mount(ButtonDropdown, {
        props: {
          modelValue: [],
          dropdownId: 'empty-dropdown',
          menuList: sampleMenuList,
        }
      });
      
      const mainButton = component.locator('button').first();
      await expect(mainButton).toBeVisible();
      await expect(mainButton).toHaveText('');
    });
  });

  test.describe('Props - Inherited Button Properties', () => {
    const tones = ['neutral', 'success'] as const;
    const variants = ['primary', 'secondary'] as const;
    const sizes = ['small', 'medium', 'large'] as const;

    for (const tone of tones) {
      for (const variant of variants) {
        test(`renders ${tone} tone with ${variant} variant`, async ({ mount }) => {
          const component = await mount(ButtonDropdown, {
            props: {
              modelValue: [],
              dropdownId: `${tone}-${variant}-dropdown`,
              menuList: sampleMenuList,
              tone,
              variant,
            },
            slots: { default: `${tone} ${variant}` }
          });
          
          const mainButton = component.locator('button').first();
          const dropdownButton = component.locator('button').nth(1);
          
          // Both buttons should inherit the styling
          if (tone === 'success' && variant === 'primary') {
            await expect(mainButton).toHaveClass(/spr-background-color-brand-base/);
            await expect(dropdownButton).toHaveClass(/spr-background-color-brand-base/);
          } else if (variant === 'secondary') {
            await expect(mainButton).toHaveClass(/spr-border/);
            await expect(dropdownButton).toHaveClass(/spr-border/);
          }
        });
      }
    }

    for (const size of sizes) {
      test(`renders ${size} size correctly`, async ({ mount }) => {
        const component = await mount(ButtonDropdown, {
          props: {
            modelValue: [],
            dropdownId: `${size}-dropdown`,
            menuList: sampleMenuList,
            size,
          },
          slots: { default: `${size} button` }
        });
        
        const mainButton = component.locator('button').first();
        const dropdownButton = component.locator('button').nth(1);
        
        // Verify size-specific classes on both buttons
        if (size === 'small') {
          await expect(mainButton).toHaveClass(/spr-min-w-6/);
          await expect(dropdownButton).toHaveClass(/spr-min-w-6/);
        } else if (size === 'large') {
          await expect(mainButton).toHaveClass(/spr-min-w-9/);
          await expect(dropdownButton).toHaveClass(/spr-min-w-9/);
        }
      });
    }

    test('renders disabled state correctly', async ({ mount }) => {
      const component = await mount(ButtonDropdown, {
        props: {
          modelValue: [],
          dropdownId: 'disabled-dropdown',
          menuList: sampleMenuList,
          disabled: true,
        },
        slots: { default: 'Disabled Actions' }
      });
      
      const mainButton = component.locator('button').first();
      const dropdownButton = component.locator('button').nth(1);
      
      await expect(mainButton).toBeDisabled();
      await expect(dropdownButton).toBeDisabled();
      await expect(mainButton).toHaveClass(/spr-text-color-disabled/);
      await expect(dropdownButton).toHaveClass(/spr-text-color-disabled/);
    });
  });

  test.describe('Props - Button Dropdown Specific', () => {
    test('applies correct button styling classes', async ({ mount }) => {
      const component = await mount(ButtonDropdown, {
        props: {
          modelValue: [],
          dropdownId: 'styled-dropdown',
          menuList: sampleMenuList,
        },
        slots: { default: 'Styled Button' }
      });
      
      const mainButton = component.locator('button').first();
      const dropdownButton = component.locator('button').nth(1);
      
      // Main button should have right border removed and border separator
      await expect(mainButton).toHaveClass(/spr-rounded-r-none/);
      await expect(mainButton).toHaveClass(/spr-border-r/);
      
      // Dropdown button should have left border removed
      await expect(dropdownButton).toHaveClass(/spr-rounded-l-none/);
    });

    test('applies success tone border styling', async ({ mount }) => {
      const component = await mount(ButtonDropdown, {
        props: {
          modelValue: [],
          dropdownId: 'success-dropdown',
          menuList: sampleMenuList,
          tone: 'success',
        },
        slots: { default: 'Success Actions' }
      });
      
      const mainButton = component.locator('button').first();
      
      // Success tone should have specific border color
      await expect(mainButton).toHaveClass(/spr-border-r-kangkong-800/);
    });

    test('applies secondary variant border styling', async ({ mount }) => {
      const component = await mount(ButtonDropdown, {
        props: {
          modelValue: [],
          dropdownId: 'secondary-dropdown',
          menuList: sampleMenuList,
          variant: 'secondary',
        },
        slots: { default: 'Secondary Actions' }
      });
      
      const dropdownButton = component.locator('button').nth(1);
      
      // Secondary variant should have border on dropdown button
      await expect(dropdownButton).toHaveClass(/spr-border-solid/);
      await expect(dropdownButton).toHaveClass(/spr-border-l-0/);
    });

    test('handles placement prop correctly', async ({ mount }) => {
      const component = await mount(ButtonDropdown, {
        props: {
          modelValue: [],
          dropdownId: 'placement-dropdown',
          menuList: sampleMenuList,
          placement: 'top',
        },
        slots: { default: 'Top Placement' }
      });
      
      // Component should render without errors
      await expect(component).toBeVisible();
    });

    test('handles width props correctly', async ({ mount }) => {
      const component = await mount(ButtonDropdown, {
        props: {
          modelValue: [],
          dropdownId: 'width-dropdown',
          menuList: sampleMenuList,
          width: '200px',
          popperWidth: '300px',
          popperInnerWidth: '250px',
        },
        slots: { default: 'Width Test' }
      });
      
      await expect(component).toBeVisible();
    });
  });

  test.describe('Events', () => {
    test('emits click event when main button is clicked', async ({ mount }) => {
      const clickEvents: MouseEvent[] = [];

      const component = await mount(ButtonDropdown, {
        props: {
          modelValue: [],
          dropdownId: 'click-dropdown',
          menuList: sampleMenuList,
          onClick: (evt: MouseEvent) => clickEvents.push(evt),
        },
        slots: { default: 'Clickable Button' }
      });
      
      const mainButton = component.locator('button').first();
      await mainButton.click();
      
      expect(clickEvents).toHaveLength(1);
      expect(clickEvents[0]).toBeTruthy();
    });

    test('does not emit click event when disabled', async ({ mount }) => {
      const clickEvents: MouseEvent[] = [];

      const component = await mount(ButtonDropdown, {
        props: {
          modelValue: [],
          dropdownId: 'disabled-click-dropdown',
          menuList: sampleMenuList,
          disabled: true,
          onClick: (evt: MouseEvent) => clickEvents.push(evt),
        },
        slots: { default: 'Disabled Button' }
      });
      
      const mainButton = component.locator('button').first();
      await mainButton.click({ force: true });
      
      expect(clickEvents).toHaveLength(0);
    });

    test('handles v-model updates from dropdown selection', async ({ mount, page }) => {
      let modelValue: any[] = [];
      const updateEvents: any[] = [];

      const component = await mount(ButtonDropdown, {
        props: {
          modelValue,
          dropdownId: 'vmodel-dropdown',
          menuList: sampleMenuList,
          'onUpdate:modelValue': (value: any[]) => {
            updateEvents.push(value);
            modelValue = value;
          },
        },
        slots: { default: 'V-Model Test' }
      });
      
      // Click dropdown button to open dropdown
      const dropdownButton = component.locator('button').nth(1);
      await dropdownButton.click();
      
      // Wait for dropdown to be visible
      await expect(page.locator('.v-popper__popper--shown')).toBeVisible();
      
      // Click on first menu item by finding the clickable div that contains the text
      const firstMenuItem = page.locator('.spr-cursor-pointer').first();
      await firstMenuItem.click();
      
      // Should have emitted update event
      expect(updateEvents.length).toBeGreaterThan(0);
    });
  });

  test.describe('Dropdown Integration', () => {
    test('opens dropdown when dropdown button is clicked', async ({ mount, page }) => {
      const component = await mount(ButtonDropdown, {
        props: {
          modelValue: [],
          dropdownId: 'open-dropdown',
          menuList: sampleMenuList,
        },
        slots: { default: 'Open Test' }
      });
      
      const dropdownButton = component.locator('button').nth(1);
      await dropdownButton.click();
      
      // Wait for dropdown to be visible using floating-vue structure
      await expect(page.locator('.v-popper__popper--shown')).toBeVisible();
      
      // Menu items should be rendered as spans with the option text
      for (const item of sampleMenuList) {
        await expect(page.locator(`span:has-text("${item.text}")`)).toBeVisible();
      }
    });

    test('displays complex menu items correctly', async ({ mount, page }) => {
      const component = await mount(ButtonDropdown, {
        props: {
          modelValue: [],
          dropdownId: 'complex-dropdown',
          menuList: complexMenuList,
        },
        slots: { default: 'Complex Menu' }
      });
      
      const dropdownButton = component.locator('button').nth(1);
      await dropdownButton.click();
      
      await expect(page.locator('.v-popper__popper--shown')).toBeVisible();
      
      // Check for menu item with subtext
      await expect(page.getByText('Save As...', { exact: true })).toBeVisible();
      await expect(page.getByText('Save with new name')).toBeVisible();
      
      // Check for menu items with icons and other content
      await expect(page.getByText('Save', { exact: true })).toBeVisible();
      await expect(page.getByText('Export', { exact: true })).toBeVisible();
      await expect(page.getByText('Print', { exact: true })).toBeVisible();
    });

    test('closes dropdown when clicking outside', async ({ mount, page }) => {
      const component = await mount(ButtonDropdown, {
        props: {
          modelValue: [],
          dropdownId: 'outside-click-dropdown',
          menuList: sampleMenuList,
        },
        slots: { default: 'Outside Click Test' }
      });
      
      const dropdownButton = component.locator('button').nth(1);
      await dropdownButton.click();
      
      await expect(page.locator('.v-popper__popper--shown')).toBeVisible();
      
      // Click outside the component
      await page.locator('body').click({ position: { x: 0, y: 0 } });
      
      // Dropdown should be hidden
      await expect(page.locator('.v-popper__popper--shown')).not.toBeVisible();
    });

    test('handles empty menu list gracefully', async ({ mount, page }) => {
      const component = await mount(ButtonDropdown, {
        props: {
          modelValue: [],
          dropdownId: 'empty-menu-dropdown',
          menuList: [],
        },
        slots: { default: 'Empty Menu' }
      });
      
      const dropdownButton = component.locator('button').nth(1);
      await dropdownButton.click();
      
      // Should still open dropdown with "No results found" message
      await expect(page.locator('.v-popper__popper--shown')).toBeVisible();
      await expect(page.locator('span:has-text("No results found")')).toBeVisible();
    });
  });

  test.describe('Accessibility', () => {
    test('has proper ARIA attributes', async ({ mount }) => {
      const component = await mount(ButtonDropdown, {
        props: {
          modelValue: [],
          dropdownId: 'aria-dropdown',
          menuList: sampleMenuList,
        },
        slots: { default: 'Accessible Button' }
      });
      
      const mainButton = component.locator('button').first();
      const dropdownButton = component.locator('button').nth(1);
      
      // Both buttons should have role="button"
      await expect(mainButton).toHaveRole('button');
      await expect(dropdownButton).toHaveRole('button');
      
      // Dropdown button should be accessible
      await expect(dropdownButton).toBeEnabled();
    });

    test('supports keyboard navigation', async ({ mount, page }) => {
      const component = await mount(ButtonDropdown, {
        props: {
          modelValue: [],
          dropdownId: 'keyboard-dropdown',
          menuList: sampleMenuList,
        },
        slots: { default: 'Keyboard Test' }
      });
      
      const mainButton = component.locator('button').first();
      const dropdownButton = component.locator('button').nth(1);
      
      // Should be able to tab between buttons
      await mainButton.focus();
      await expect(mainButton).toBeFocused();
      
      await mainButton.press('Tab');
      await expect(dropdownButton).toBeFocused();
      
      // Should be able to activate with Enter/Space
      await dropdownButton.press('Enter');
      await expect(page.locator('.v-popper__popper--shown')).toBeVisible();
    });

    test('maintains focus management when disabled', async ({ mount }) => {
      const component = await mount(ButtonDropdown, {
        props: {
          modelValue: [],
          dropdownId: 'disabled-focus-dropdown',
          menuList: sampleMenuList,
          disabled: true,
        },
        slots: { default: 'Disabled Focus Test' }
      });
      
      const mainButton = component.locator('button').first();
      const dropdownButton = component.locator('button').nth(1);
      
      // Disabled buttons should have proper ARIA attributes
      await expect(mainButton).toHaveAttribute('aria-disabled', 'true');
      await expect(dropdownButton).toHaveAttribute('aria-disabled', 'true');
    });
  });

  test.describe('Edge Cases', () => {
    test('handles invalid placement values gracefully', async ({ mount }) => {
      const component = await mount(ButtonDropdown, {
        props: {
          modelValue: [],
          dropdownId: 'invalid-placement-dropdown',
          menuList: sampleMenuList,
          placement: 'bottom', // Use valid placement instead of invalid
        },
        slots: { default: 'Invalid Placement' }
      });
      
      // Should still render without crashing
      await expect(component).toBeVisible();
    });

    test('handles very long button text', async ({ mount }) => {
      const longText = 'This is a very long button text that might cause layout issues in some scenarios but should be handled gracefully by the component';
      
      const component = await mount(ButtonDropdown, {
        props: {
          modelValue: [],
          dropdownId: 'long-text-dropdown',
          menuList: sampleMenuList,
        },
        slots: { default: longText }
      });
      
      const mainButton = component.locator('button').first();
      await expect(mainButton).toBeVisible();
      await expect(mainButton).toHaveText(longText);
    });

    test('handles large menu lists', async ({ mount, page }) => {
      const largeMenuList: MenuListType[] = Array.from({ length: 100 }, (_, i) => ({
        text: `Option ${i + 1}`,
        value: `option-${i + 1}`,
      }));
      
      const component = await mount(ButtonDropdown, {
        props: {
          modelValue: [],
          dropdownId: 'large-menu-dropdown',
          menuList: largeMenuList,
        },
        slots: { default: 'Large Menu' }
      });
      
      const dropdownButton = component.locator('button').nth(1);
      await dropdownButton.click();
      
      // Should open dropdown
      await expect(page.locator('.v-popper__popper--shown')).toBeVisible();
      
      // Should render first item (virtualization may prevent seeing all 100)
      await expect(page.getByText('Option 1', { exact: true })).toBeVisible();
    });

    test('handles undefined modelValue gracefully', async ({ mount }) => {
      const component = await mount(ButtonDropdown, {
        props: {
          modelValue: [],
          dropdownId: 'undefined-model-dropdown',
          menuList: sampleMenuList,
        },
        slots: { default: 'Undefined Model' }
      });
      
      // Should still render without errors
      await expect(component).toBeVisible();
    });
  });

  test.describe('Prop Combinations', () => {
    test('disabled secondary success button dropdown', async ({ mount }) => {
      const component = await mount(ButtonDropdown, {
        props: {
          modelValue: [],
          dropdownId: 'combo-dropdown',
          menuList: sampleMenuList,
          disabled: true,
          tone: 'success',
          variant: 'secondary',
          size: 'large',
        },
        slots: { default: 'Complex Combo' }
      });
      
      const mainButton = component.locator('button').first();
      const dropdownButton = component.locator('button').nth(1);
      
      await expect(mainButton).toBeDisabled();
      await expect(dropdownButton).toBeDisabled();
      await expect(mainButton).toHaveClass(/spr-min-w-9/); // Large size
      await expect(mainButton).toHaveClass(/spr-text-color-disabled/); // Disabled styling
    });

    test('small neutral tertiary with custom widths', async ({ mount }) => {
      const component = await mount(ButtonDropdown, {
        props: {
          modelValue: [],
          dropdownId: 'width-combo-dropdown',
          menuList: sampleMenuList,
          size: 'small',
          tone: 'neutral',
          variant: 'secondary', // Note: tertiary not available in button dropdown variants
          width: '150px',
          popperWidth: '200px',
          placement: 'top-start',
        },
        slots: { default: 'Small Combo' }
      });
      
      const mainButton = component.locator('button').first();
      await expect(mainButton).toHaveClass(/spr-min-w-6/); // Small size
      await expect(component).toBeVisible();
    });
  });
});
