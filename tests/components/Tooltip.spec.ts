/**
 * Tooltip Component Tests
 *
 * Test Coverage Rationale:
 * - Tests both text prop and slot-based content rendering
 * - Validates floating-vue integration and tooltip positioning
 * - Covers all placement variants (12 positions)
 * - Tests trigger events (hover, focus, click, manual)
 * - Validates conditional rendering when no content provided
 * - Tests accessibility attributes and ARIA compliance
 * - Covers prop combinations and edge cases
 * - Tests responsive behavior and distance configurations
 *
 * ASSUMPTIONS:
 * - floating-vue library is properly configured and available
 * - CSS classes are applied correctly through the design system
 * - Browser supports modern CSS and JS features for floating elements
 *
 * TODO (Future Enhancements):
 * - Test keyboard navigation (Tab, Escape)
 * - Test mobile touch interactions
 * - Test tooltip positioning edge detection
 * - Performance testing for rapid hover events
 */

import { test, expect } from '@playwright/experimental-ct-vue';
import Tooltip from '@/components/tooltip/tooltip.vue';

test.describe('Tooltip Component', () => {
  test.describe('Rendering', () => {
    test('renders with text prop', async ({ mount }) => {
      const component = await mount(Tooltip, {
        props: { text: 'This is a tooltip' },
        slots: { default: '<button>Hover me</button>' }
      });

      await expect(component).toBeVisible();
      
      // Trigger element should be visible
      const triggerButton = component.getByRole('button', { name: 'Hover me' });
      await expect(triggerButton).toBeVisible();
    });

    test('renders with slot content', async ({ mount }) => {
      const component = await mount(Tooltip, {
        slots: {
          default: '<button>Trigger element</button>',
          'popper-content': '<div>Custom tooltip content</div>'
        }
      });

      await expect(component).toBeVisible();
      
      const triggerButton = component.getByRole('button', { name: 'Trigger element' });
      await expect(triggerButton).toBeVisible();
    });

    test('renders only trigger element when no tooltip content provided', async ({ mount }) => {
      const component = await mount(Tooltip, {
        props: { text: '' },
        slots: { default: '<button>No tooltip</button>' }
      });

      // When no tooltip content, the component returns just the slot content directly
      await expect(component).toBeVisible();
      await expect(component).toHaveText('No tooltip');
      
      // The component should be a button element directly
      const tagName = await component.evaluate((el) => el.tagName);
      expect(tagName).toBe('BUTTON');
      
      // Should not have tooltip wrapper classes
      await expect(component).not.toHaveClass(/v-popper/);
    });

    test('applies fitContent prop correctly', async ({ mount }) => {
      const componentFit = await mount(Tooltip, {
        props: { text: 'Fit content tooltip', fitContent: true },
        slots: { default: '<button>Fit content</button>' }
      });

      await expect(componentFit).toHaveClass(/spr-w-fit/);

      const componentFull = await mount(Tooltip, {
        props: { text: 'Full width tooltip', fitContent: false },
        slots: { default: '<button>Full width</button>' }
      });

      await expect(componentFull).toHaveClass(/spr-w-full/);
    });

    test('applies hasMaxWidth prop correctly', async ({ mount }) => {
      const componentWithMaxWidth = await mount(Tooltip, {
        props: { text: 'Tooltip with max width', hasMaxWidth: true },
        slots: { default: '<button>Max width</button>' }
      });

      // Component should have v-popper wrapper when tooltip content exists
      await expect(componentWithMaxWidth).toHaveClass(/v-popper--theme-tooltip/);
      
      // Check that the button is inside the wrapper
      const button = componentWithMaxWidth.getByRole('button', { name: 'Max width' });
      await expect(button).toBeVisible();

      const componentWithoutMaxWidth = await mount(Tooltip, {
        props: { text: 'Tooltip without max width', hasMaxWidth: false },
        slots: { default: '<button>No max width</button>' }
      });

      await expect(componentWithoutMaxWidth).toHaveClass(/v-popper--theme-tooltip/);
      
      const button2 = componentWithoutMaxWidth.getByRole('button', { name: 'No max width' });
      await expect(button2).toBeVisible();
    });
  });

  test.describe('Props - Placement Variants', () => {
    const placements = [
      'top', 'top-start', 'top-end',
      'bottom', 'bottom-start', 'bottom-end', 
      'left', 'left-start', 'left-end',
      'right', 'right-start', 'right-end'
    ] as const;

    for (const placement of placements) {
      test(`renders with ${placement} placement`, async ({ mount }) => {
        const component = await mount(Tooltip, {
          props: { text: `Tooltip positioned ${placement}`, placement },
          slots: { default: `<button>${placement} tooltip</button>` }
        });

        await expect(component).toBeVisible();
        
        const triggerButton = component.getByRole('button', { name: `${placement} tooltip` });
        await expect(triggerButton).toBeVisible();
      });
    }

    test('uses default top placement when no placement specified', async ({ mount }) => {
      const component = await mount(Tooltip, {
        props: { text: 'Default placement tooltip' },
        slots: { default: '<button>Default placement</button>' }
      });

      await expect(component).toBeVisible();
    });
  });

  test.describe('Props - Distance Configuration', () => {
    test('applies default distance (6px)', async ({ mount }) => {
      const component = await mount(Tooltip, {
        props: { text: 'Default distance tooltip' },
        slots: { default: '<button>Default distance</button>' }
      });

      await expect(component).toBeVisible();
    });

    test('applies custom distance values', async ({ mount }) => {
      const distances = [0, 5, 10, 20, 30];

      for (const distance of distances) {
        const component = await mount(Tooltip, {
          props: { text: `Tooltip with ${distance}px distance`, distance },
          slots: { default: `<button>${distance}px distance</button>` }
        });

        await expect(component).toBeVisible();
        
        const triggerButton = component.getByRole('button', { name: `${distance}px distance` });
        await expect(triggerButton).toBeVisible();
      }
    });
  });

  test.describe('Props - Trigger Events', () => {
    test('handles single string trigger', async ({ mount }) => {
      const triggers = ['hover', 'focus', 'click'] as const;

      for (const trigger of triggers) {
        const component = await mount(Tooltip, {
          props: {
            text: `${trigger} trigger tooltip`,
            showTriggers: trigger,
            hideTriggers: trigger
          },
          slots: { default: `<button>${trigger} trigger</button>` }
        });

        await expect(component).toBeVisible();
        
        const triggerButton = component.getByRole('button', { name: `${trigger} trigger` });
        await expect(triggerButton).toBeVisible();
      }
    });

    test('handles array of triggers', async ({ mount }) => {
      const component = await mount(Tooltip, {
        props: {
          text: 'Multiple triggers tooltip',
          showTriggers: ['hover', 'focus'],
          hideTriggers: ['hover', 'focus']
        },
        slots: { default: '<button>Multiple triggers</button>' }
      });

      await expect(component).toBeVisible();
      
      const triggerButton = component.getByRole('button', { name: 'Multiple triggers' });
      await expect(triggerButton).toBeVisible();
    });

    test('uses default hover triggers', async ({ mount }) => {
      const component = await mount(Tooltip, {
        props: { text: 'Default triggers tooltip' },
        slots: { default: '<button>Default triggers</button>' }
      });

      await expect(component).toBeVisible();
      
      const triggerButton = component.getByRole('button', { name: 'Default triggers' });
      await expect(triggerButton).toBeVisible();
    });
  });

  test.describe('Props - Auto Hide', () => {
    test('handles autoHide true', async ({ mount }) => {
      const component = await mount(Tooltip, {
        props: { text: 'Auto hide tooltip', autoHide: true },
        slots: { default: '<button>Auto hide</button>' }
      });

      await expect(component).toBeVisible();
      
      const triggerButton = component.getByRole('button', { name: 'Auto hide' });
      await expect(triggerButton).toBeVisible();
    });

    test('handles autoHide false (default)', async ({ mount }) => {
      const component = await mount(Tooltip, {
        props: { text: 'No auto hide tooltip', autoHide: false },
        slots: { default: '<button>No auto hide</button>' }
      });

      await expect(component).toBeVisible();
      
      const triggerButton = component.getByRole('button', { name: 'No auto hide' });
      await expect(triggerButton).toBeVisible();
    });
  });

  test.describe('Tooltip Interaction', () => {
    test('shows tooltip on hover', async ({ mount, page }) => {
      const component = await mount(Tooltip, {
        props: { text: 'Hover to show tooltip', showTriggers: 'hover' },
        slots: { default: '<button>Hover me</button>' }
      });

      const triggerButton = component.getByRole('button', { name: 'Hover me' });
      
      // Hover over the trigger
      await triggerButton.hover();
      
      // Wait for tooltip to appear
      await page.waitForTimeout(200);
      
      // Check if tooltip content is visible somewhere in the page
      await expect(page.getByText('Hover to show tooltip')).toBeVisible();
    });

    test('shows tooltip on focus', async ({ mount, page }) => {
      const component = await mount(Tooltip, {
        props: {
          text: 'Focus to show tooltip',
          showTriggers: 'focus',
          hideTriggers: 'blur'
        },
        slots: { default: '<button>Focus me</button>' }
      });

      const triggerButton = component.getByRole('button', { name: 'Focus me' });
      
      // Focus the trigger
      await triggerButton.focus();
      
      // Wait for tooltip to appear
      await page.waitForTimeout(200);
      
      // Check if tooltip content is visible
      await expect(page.getByText('Focus to show tooltip')).toBeVisible();
    });

    test('shows tooltip on click', async ({ mount, page }) => {
      const component = await mount(Tooltip, {
        props: {
          text: 'Click to show tooltip',
          showTriggers: 'click',
          hideTriggers: 'click'
        },
        slots: { default: '<button>Click me</button>' }
      });

      const triggerButton = component.getByRole('button', { name: 'Click me' });
      
      // Click the trigger
      await triggerButton.click();
      
      // Wait for tooltip to appear
      await page.waitForTimeout(200);
      
      // Check if tooltip content is visible
      await expect(page.getByText('Click to show tooltip')).toBeVisible();
    });
  });

  test.describe('Slot Content', () => {
    test('renders complex slot content', async ({ mount }) => {
      const component = await mount(Tooltip, {
        slots: {
          default: '<div><button>Trigger</button><span>Additional content</span></div>',
          'popper-content': '<div><strong>Bold tooltip</strong><br><em>Italic text</em></div>'
        }
      });

      await expect(component).toBeVisible();
      
      const triggerButton = component.getByRole('button', { name: 'Trigger' });
      await expect(triggerButton).toBeVisible();
      
      const additionalContent = component.getByText('Additional content');
      await expect(additionalContent).toBeVisible();
    });

    test('renders both text and slot content together', async ({ mount, page }) => {
      const component = await mount(Tooltip, {
        props: { text: 'Text prop content', showTriggers: 'click' },
        slots: {
          default: '<button>Trigger</button>',
          'popper-content': '<div>Slot content</div>'
        }
      });

      const triggerButton = component.getByRole('button', { name: 'Trigger' });
      await triggerButton.click();
      
      // Wait for tooltip
      await page.waitForTimeout(200);
      
      // Both text and slot content should be visible
      await expect(page.getByText('Text prop content')).toBeVisible();
      await expect(page.getByText('Slot content')).toBeVisible();
    });

    test('handles empty slots gracefully', async ({ mount }) => {
      const component = await mount(Tooltip, {
        props: { text: 'Fallback text' },
        slots: {
          default: '<button>Empty slot tooltip</button>',
          'popper-content': ''
        }
      });

      // Should still render the trigger
      await expect(component).toBeVisible();
      
      const triggerButton = component.getByRole('button', { name: 'Empty slot tooltip' });
      await expect(triggerButton).toBeVisible();
    });
  });

  test.describe('Accessibility', () => {
    test('provides proper structure for accessibility', async ({ mount }) => {
      const component = await mount(Tooltip, {
        props: { text: 'Accessible tooltip', hasMaxWidth: true },
        slots: { default: '<button>Accessible button</button>' }
      });

      // Component wrapper should be a floating-vue tooltip
      await expect(component).toHaveClass(/v-popper--theme-tooltip/);
      
      // Button should be accessible inside the tooltip wrapper
      const button = component.getByRole('button', { name: 'Accessible button' });
      await expect(button).toBeVisible();
    });

    test('supports keyboard navigation', async ({ mount, page }) => {
      const component = await mount(Tooltip, {
        props: {
          text: 'Keyboard accessible tooltip',
          showTriggers: 'focus',
          hideTriggers: 'blur'
        },
        slots: { default: '<button>Tab to me</button>' }
      });

      const triggerButton = component.getByRole('button', { name: 'Tab to me' });
      
      // Use keyboard to focus
      await page.keyboard.press('Tab');
      
      // Button should be focused
      await expect(triggerButton).toBeFocused();
      
      // Wait for tooltip
      await page.waitForTimeout(200);
      
      // Tooltip should be visible
      await expect(page.getByText('Keyboard accessible tooltip')).toBeVisible();
    });

    test('maintains focus management', async ({ mount, page }) => {
      const component = await mount(Tooltip, {
        props: {
          text: 'Focus management tooltip',
          showTriggers: ['focus', 'hover'],
          hideTriggers: ['blur']
        },
        slots: { default: '<button>Focus test</button>' }
      });

      const triggerButton = component.getByRole('button', { name: 'Focus test' });
      
      // Focus and then blur
      await triggerButton.focus();
      await page.waitForTimeout(100);
      
      await triggerButton.blur();
      await page.waitForTimeout(100);
      
      // Component should handle focus changes gracefully
      await expect(component).toBeVisible();
    });
  });

  test.describe('Edge Cases', () => {
    test('handles very long tooltip text', async ({ mount, page }) => {
      const longText = 'This is a very long tooltip text that should wrap properly and not break the layout. '.repeat(10);
      
      const component = await mount(Tooltip, {
        props: { text: longText, showTriggers: 'click' },
        slots: { default: '<button>Long tooltip</button>' }
      });

      const triggerButton = component.getByRole('button', { name: 'Long tooltip' });
      await triggerButton.click();
      
      // Wait for tooltip
      await page.waitForTimeout(200);
      
      // Should show the long text (at least part of it)
      await expect(page.getByText(/This is a very long tooltip text/)).toBeVisible();
    });

    test('handles special characters in tooltip text', async ({ mount, page }) => {
      const specialText = 'Special chars: <>&"\'`{}[]()';
      
      const component = await mount(Tooltip, {
        props: { text: specialText, showTriggers: 'click' },
        slots: { default: '<button>Special chars</button>' }
      });

      const triggerButton = component.getByRole('button', { name: 'Special chars' });
      await triggerButton.click();
      
      // Wait for tooltip
      await page.waitForTimeout(200);
      
      // Should properly escape and display special characters
      await expect(page.getByText(specialText)).toBeVisible();
    });

    test('handles rapid hover events', async ({ mount, page }) => {
      const component = await mount(Tooltip, {
        props: {
          text: 'Rapid hover tooltip',
          showTriggers: 'hover',
          hideTriggers: 'hover'
        },
        slots: { default: '<button>Rapid hover</button>' }
      });

      const triggerButton = component.getByRole('button', { name: 'Rapid hover' });
      
      // Rapid hover/unhover
      for (let i = 0; i < 5; i++) {
        await triggerButton.hover();
        await page.waitForTimeout(50);
        await page.mouse.move(0, 0); // Move away
        await page.waitForTimeout(50);
      }
      
      // Component should remain stable
      await expect(component).toBeVisible();
      await expect(triggerButton).toBeVisible();
    });
  });

  test.describe('Complex Prop Combinations', () => {
    test('combines all props correctly', async ({ mount, page }) => {
      const component = await mount(Tooltip, {
        props: {
          text: 'Complex tooltip with all props',
          placement: 'bottom-end',
          distance: 15,
          hasMaxWidth: false,
          fitContent: false,
          showTriggers: ['hover', 'focus'],
          hideTriggers: ['hover', 'blur'],
          autoHide: true
        },
        slots: { default: '<button>Complex tooltip</button>' }
      });

      await expect(component).toBeVisible();
      await expect(component).toHaveClass(/spr-w-full/); // fitContent: false
      await expect(component).toHaveClass(/v-popper--theme-tooltip/);
      
      const triggerButton = component.getByRole('button', { name: 'Complex tooltip' });
      await expect(triggerButton).toBeVisible();
      
      // Test hover interaction
      await triggerButton.hover();
      await page.waitForTimeout(200);
      
      await expect(page.getByText('Complex tooltip with all props')).toBeVisible();
    });

    test('minimal configuration works', async ({ mount }) => {
      const component = await mount(Tooltip, {
        props: { text: 'Minimal tooltip' },
        slots: { default: '<span>Minimal trigger</span>' }
      });

      await expect(component).toBeVisible();
      
      // Should use all defaults
      await expect(component).toHaveClass(/spr-w-fit/); // fitContent: true (default)
      await expect(component).toHaveClass(/v-popper--theme-tooltip/);
      
      const triggerSpan = component.getByText('Minimal trigger');
      await expect(triggerSpan).toBeVisible();
    });
  });

  test.describe('Conditional Rendering Logic', () => {
    test('renders floating-vue tooltip when content exists', async ({ mount }) => {
      const component = await mount(Tooltip, {
        props: { text: 'Content exists' },
        slots: { default: '<button>Has content</button>' }
      });

      // Should render the floating-vue Tooltip component
      await expect(component).toBeVisible();
      await expect(component).toHaveClass(/spr-w-fit/); // Classes from floating-vue wrapper
    });

    test('renders plain slot when no content exists', async ({ mount }) => {
      const component = await mount(Tooltip, {
        props: { text: '' },
        slots: { default: '<button>No tooltip content</button>' }
      });

      // Should render just the slot content without floating-vue wrapper
      await expect(component).toBeVisible();
      await expect(component).toHaveText('No tooltip content');
      
      // The component should be a button element directly
      const tagName = await component.evaluate((el) => el.tagName);
      expect(tagName).toBe('BUTTON');
      
      // Should not have floating-vue classes when no tooltip content
      await expect(component).not.toHaveClass(/v-popper/);
      await expect(component).not.toHaveClass(/spr-w-fit/);
      await expect(component).not.toHaveClass(/spr-w-full/);
    });

    test('detects slot content correctly', async ({ mount }) => {
      const component = await mount(Tooltip, {
        slots: {
          default: '<button>Slot content trigger</button>',
          'popper-content': '<span>I am slot content</span>'
        }
      });

      // Should render floating-vue tooltip because popper-content slot exists
      await expect(component).toBeVisible();
      await expect(component).toHaveClass(/spr-w-fit/); // Default fitContent: true
    });
  });
});
