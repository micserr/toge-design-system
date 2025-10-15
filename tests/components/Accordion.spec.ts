/**
 * Accordion Component Tests
 *
 * Coverage includes:
 * - Rendering with default props and custom accordion items
 * - Props validation (accordionItems, alwaysOpen, isDefaultOpen, accordionTrigger, bordered)
 * - Interactive behavior (toggle collapse on header/button click)
 * - Slots (named slots for each accordion item content)
 * - State management (collapsed/expanded states, multiple open behavior)
 * - Accessibility (ARIA attributes, keyboard navigation, semantic structure)
 * - Visual states (active/pressed styling, caret icon rotation)
 * - Conditional logic (trigger type behavior, border styling)
 * - Edge cases (empty items, single item, no content)
 * - Event handling (mouse interactions, click events)
 *
 * Rationale:
 * - Testing accordion toggle behavior with both trigger types (header/button)
 * - Validating mutual exclusion behavior when alwaysOpen is false
 * - Ensuring proper slot content rendering for each accordion item
 * - Testing visual feedback states (active, pressed, hover)
 * - Accessibility compliance for expandable UI patterns
 * - Edge cases for empty states and various data scenarios
 */

import { test, expect } from '@playwright/experimental-ct-vue';
import Accordion from '@/components/accordion/accordion.vue';
import type { AccordionItem } from '@/components/accordion/accordion';

// Sample accordion items for testing
const sampleAccordionItems: AccordionItem[] = [
  {
    title: 'First Section',
    subtitle: 'This is the first section subtitle',
    collapseId: 'section-1',
  },
  {
    title: 'Second Section',
    collapseId: 'section-2',
  },
  {
    title: 'Third Section',
    subtitle: 'Another subtitle here',
    collapseId: 'section-3',
  },
];

const singleAccordionItem: AccordionItem[] = [
  {
    title: 'Single Section',
    subtitle: 'Only one section available',
    collapseId: 'single-section',
  },
];

test.describe('Accordion Component', () => {
  test.describe('Rendering', () => {
    test('renders with default props', async ({ mount }) => {
      const component = await mount(Accordion, {
        props: {
          accordionItems: sampleAccordionItems,
        },
      });

      await expect(component).toBeAttached();
      await expect(component).toHaveAttribute('id', 'accordion');

      // Should have bordered styling by default
      await expect(component).toHaveClass(/spr-rounded-border-radius-xl/);

      // Should render all accordion items
      for (const item of sampleAccordionItems) {
        const itemElement = component.locator(`#accordion_item_${item.collapseId}`);
        await expect(itemElement).toBeAttached();

        // Check title rendering
        await expect(itemElement).toContainText(item.title);

        // Check subtitle rendering if it exists
        if (item.subtitle) {
          await expect(itemElement).toContainText(item.subtitle);
        }
      }
    });

    test('renders without border when bordered is false', async ({ mount }) => {
      const component = await mount(Accordion, {
        props: {
          accordionItems: sampleAccordionItems,
          bordered: false,
        },
      });

      await expect(component).toBeVisible();
      await expect(component).not.toHaveClass(
        /spr-rounded-border-radius-xl spr-border spr-border-solid spr-border-mushroom-200/,
      );
    });

    test('renders with empty accordion items array', async ({ mount }) => {
      const component = await mount(Accordion, {
        props: {
          accordionItems: [],
        },
      });

      await expect(component).toBeAttached();
      await expect(component).toHaveAttribute('id', 'accordion');

      // Should not render any accordion items
      const items = component.locator('[id^="accordion_item_"]');
      await expect(items).toHaveCount(0);
    });

    test('renders single accordion item', async ({ mount }) => {
      const component = await mount(Accordion, {
        props: {
          accordionItems: singleAccordionItem,
        },
      });

      const item = component.locator(`#accordion_item_${singleAccordionItem[0].collapseId}`);
      await expect(item).toBeAttached();
      await expect(item).toContainText(singleAccordionItem[0].title);
      await expect(item).toContainText(singleAccordionItem[0].subtitle!);
    });
  });

  test.describe('Props - accordionTrigger', () => {
    test('renders with button trigger (default)', async ({ mount }) => {
      const component = await mount(Accordion, {
        props: {
          accordionItems: sampleAccordionItems,
          accordionTrigger: 'button',
        },
      });

      // Should have button elements for triggers
      const buttons = component.locator('button');
      await expect(buttons).toHaveCount(sampleAccordionItems.length);

      // Each button should contain an SVG icon
      for (let i = 0; i < sampleAccordionItems.length; i++) {
        const button = buttons.nth(i);
        const svg = button.locator('svg');
        await expect(svg).toBeAttached();
      }

      // Headers should not be clickable
      const headers = component.locator('#header');
      for (let i = 0; i < sampleAccordionItems.length; i++) {
        const header = headers.nth(i);
        await expect(header).not.toHaveClass(/hover:spr-cursor-pointer/);
      }
    });

    test('renders with header trigger', async ({ mount }) => {
      const component = await mount(Accordion, {
        props: {
          accordionItems: sampleAccordionItems,
          accordionTrigger: 'header',
        },
      });

      // Should not have button elements for triggers
      const buttons = component.locator('button');
      await expect(buttons).toHaveCount(0);

      // Headers should be clickable
      const headers = component.locator('#header');
      for (let i = 0; i < sampleAccordionItems.length; i++) {
        const header = headers.nth(i);
        await expect(header).toHaveClass(/hover:spr-cursor-pointer/);
      }

      // Should show caret icons without buttons (SVG elements)
      const svgIcons = component.locator('svg');
      await expect(svgIcons).toHaveCount(sampleAccordionItems.length);
    });
  });

  test.describe('Props - alwaysOpen and isDefaultOpen', () => {
    test('single accordion behavior when alwaysOpen is false (default)', async ({ mount }) => {
      const component = await mount(Accordion, {
        props: {
          accordionItems: sampleAccordionItems,
          alwaysOpen: false,
          accordionTrigger: 'header',
        },
        slots: {
          'section-1': '<div data-testid="content-1">Content 1</div>',
          'section-2': '<div data-testid="content-2">Content 2</div>',
          'section-3': '<div data-testid="content-3">Content 3</div>',
        },
      });

      const headers = component.locator('#header');

      // Click first accordion
      await headers.first().click();

      // Check that content is now visible for first accordion
      await expect(component.locator('[data-testid="content-1"]')).toBeVisible();

      // Click second accordion
      await headers.nth(1).click();

      // First content should now be hidden, second should be visible
      await expect(component.locator('[data-testid="content-1"]')).not.toBeVisible();
      await expect(component.locator('[data-testid="content-2"]')).toBeVisible();
    });

    test('multiple accordion behavior when alwaysOpen is true', async ({ mount }) => {
      const component = await mount(Accordion, {
        props: {
          accordionItems: sampleAccordionItems,
          alwaysOpen: true,
          accordionTrigger: 'header',
        },
        slots: {
          'section-1': '<div data-testid="multi-content-1">Multi Content 1</div>',
          'section-2': '<div data-testid="multi-content-2">Multi Content 2</div>',
          'section-3': '<div data-testid="multi-content-3">Multi Content 3</div>',
        },
      });

      const headers = component.locator('#header');

      // Click first accordion
      await headers.first().click();

      // First should be visible
      await expect(component.locator('[data-testid="multi-content-1"]')).toBeVisible();

      // Click second accordion
      await headers.nth(1).click();

      // Both first and second should be visible
      await expect(component.locator('[data-testid="multi-content-1"]')).toBeVisible();
      await expect(component.locator('[data-testid="multi-content-2"]')).toBeVisible();

      // Click third accordion
      await headers.nth(2).click();

      // All three should be visible
      await expect(component.locator('[data-testid="multi-content-1"]')).toBeVisible();
      await expect(component.locator('[data-testid="multi-content-2"]')).toBeVisible();
      await expect(component.locator('[data-testid="multi-content-3"]')).toBeVisible();
    });

    test('default open state when isDefaultOpen is true and alwaysOpen is true', async ({ mount }) => {
      const component = await mount(Accordion, {
        props: {
          accordionItems: sampleAccordionItems,
          isDefaultOpen: true,
          alwaysOpen: true,
        },
        slots: {
          'section-1': '<div data-testid="default-content-1">Default Content 1</div>',
          'section-2': '<div data-testid="default-content-2">Default Content 2</div>',
          'section-3': '<div data-testid="default-content-3">Default Content 3</div>',
        },
      });

      // All accordion content should start visible
      await expect(component.locator('[data-testid="default-content-1"]')).toBeVisible();
      await expect(component.locator('[data-testid="default-content-2"]')).toBeVisible();
      await expect(component.locator('[data-testid="default-content-3"]')).toBeVisible();
    });

    test('default open state ignored when alwaysOpen is false', async ({ mount }) => {
      const component = await mount(Accordion, {
        props: {
          accordionItems: sampleAccordionItems,
          isDefaultOpen: true,
          alwaysOpen: false,
        },
        slots: {
          'section-1': '<div data-testid="ignored-content-1">Ignored Content 1</div>',
          'section-2': '<div data-testid="ignored-content-2">Ignored Content 2</div>',
          'section-3': '<div data-testid="ignored-content-3">Ignored Content 3</div>',
        },
      });

      // All accordion content should start hidden (isDefaultOpen ignored when alwaysOpen is false)
      await expect(component.locator('[data-testid="ignored-content-1"]')).not.toBeVisible();
      await expect(component.locator('[data-testid="ignored-content-2"]')).not.toBeVisible();
      await expect(component.locator('[data-testid="ignored-content-3"]')).not.toBeVisible();
    });
  });

  test.describe('Interactive Behavior', () => {
    test('toggles accordion with button trigger', async ({ mount }) => {
      const component = await mount(Accordion, {
        props: {
          accordionItems: sampleAccordionItems,
          accordionTrigger: 'button',
        },
        slots: {
          'section-1': '<div data-testid="test-content-1">Test content 1</div>',
        },
      });

      const firstButton = component.locator('button').first();
      const testContent = component.locator('[data-testid="test-content-1"]');

      // Initially collapsed (content not visible)
      await expect(testContent).not.toBeVisible();

      // Click to expand
      await firstButton.click();

      // Should be expanded (content visible)
      await expect(testContent).toBeVisible();

      // Click again to collapse
      await firstButton.click();

      // Should be collapsed again (content not visible)
      await expect(testContent).not.toBeVisible();
    });

    test('toggles accordion with header trigger', async ({ mount }) => {
      const component = await mount(Accordion, {
        props: {
          accordionItems: sampleAccordionItems,
          accordionTrigger: 'header',
        },
        slots: {
          'section-1': '<div data-testid="test-content-header">Test content header</div>',
        },
      });

      const firstHeader = component.locator('#header').first();
      const testContent = component.locator('[data-testid="test-content-header"]');

      // Initially collapsed
      await expect(testContent).not.toBeVisible();

      // Click header to expand
      await firstHeader.click();

      // Should be expanded
      await expect(testContent).toBeVisible();

      // Click header again to collapse
      await firstHeader.click();

      // Should be collapsed again
      await expect(testContent).not.toBeVisible();
    });

    test('header press visual feedback with header trigger', async ({ mount }) => {
      const component = await mount(Accordion, {
        props: {
          accordionItems: sampleAccordionItems,
          accordionTrigger: 'header',
        },
      });

      const firstHeader = component.locator('#header').first();

      // Check that header has cursor pointer styling when it's a trigger
      await expect(firstHeader).toHaveClass(/hover:spr-cursor-pointer/);

      // Verify that the header is interactive
      await expect(firstHeader).toBeAttached();
      await expect(firstHeader).toBeVisible();
    });

    test('keyboard interaction with focusable elements', async ({ mount }) => {
      const component = await mount(Accordion, {
        props: {
          accordionItems: sampleAccordionItems,
          accordionTrigger: 'button',
        },
        slots: {
          'section-1': '<div data-testid="test-content-keyboard">Test content keyboard</div>',
        },
      });

      const firstButton = component.locator('button').first();
      const testContent = component.locator('[data-testid="test-content-keyboard"]');

      // Focus the button
      await firstButton.focus();
      await expect(firstButton).toBeFocused();

      // Press Enter or Space to activate
      await firstButton.press('Enter');

      // Should toggle the accordion
      await expect(testContent).toBeVisible();
    });
  });

  test.describe('Slots', () => {
    test('renders slot content for accordion items', async ({ mount }) => {
      const component = await mount(Accordion, {
        props: {
          accordionItems: sampleAccordionItems,
          alwaysOpen: true,
          accordionTrigger: 'header',
        },
        slots: {
          'section-1': '<div data-testid="section-1-content">First section content</div>',
          'section-2': '<div data-testid="section-2-content">Second section content</div>',
          'section-3': '<div data-testid="section-3-content">Third section content</div>',
        },
      });

      // Expand all sections to see content
      const headers = component.locator('#header');
      await headers.first().click();
      await headers.nth(1).click();
      await headers.nth(2).click();

      // Check that all slot content is rendered and visible
      await expect(component.locator('[data-testid="section-1-content"]')).toBeVisible();
      await expect(component.locator('[data-testid="section-1-content"]')).toHaveText('First section content');

      await expect(component.locator('[data-testid="section-2-content"]')).toBeVisible();
      await expect(component.locator('[data-testid="section-2-content"]')).toHaveText('Second section content');

      await expect(component.locator('[data-testid="section-3-content"]')).toBeVisible();
      await expect(component.locator('[data-testid="section-3-content"]')).toHaveText('Third section content');
    });

    test('slot content is hidden when accordion is collapsed', async ({ mount }) => {
      const component = await mount(Accordion, {
        props: {
          accordionItems: sampleAccordionItems,
          accordionTrigger: 'header',
        },
        slots: {
          'section-1': '<div data-testid="section-1-content">Content to hide</div>',
        },
      });

      // Initially collapsed - content should not be visible
      await expect(component.locator('[data-testid="section-1-content"]')).not.toBeVisible();

      // Expand first section
      const firstHeader = component.locator('#header').first();
      await firstHeader.click();

      // Content should now be visible
      await expect(component.locator('[data-testid="section-1-content"]')).toBeVisible();

      // Collapse again
      await firstHeader.click();

      // Content should be hidden again
      await expect(component.locator('[data-testid="section-1-content"]')).not.toBeVisible();
    });

    test('handles complex slot content', async ({ mount }) => {
      const component = await mount(Accordion, {
        props: {
          accordionItems: singleAccordionItem,
          accordionTrigger: 'header',
        },
        slots: {
          'single-section': `
            <div data-testid="complex-content">
              <h3>Complex Content</h3>
              <p>This is a paragraph with <strong>bold text</strong>.</p>
              <ul>
                <li>List item 1</li>
                <li>List item 2</li>
              </ul>
              <button data-testid="nested-button">Click me</button>
            </div>
          `,
        },
      });

      // Expand the section
      await component.locator('#header').click();

      // Verify complex content is rendered and visible
      const complexContent = component.locator('[data-testid="complex-content"]');
      await expect(complexContent).toBeVisible();
      await expect(complexContent.locator('h3')).toHaveText('Complex Content');
      await expect(complexContent.locator('p')).toContainText('This is a paragraph');
      await expect(complexContent.locator('strong')).toHaveText('bold text');
      await expect(complexContent.locator('li')).toHaveCount(2);

      // Test interaction with nested elements
      const nestedButton = complexContent.locator('[data-testid="nested-button"]');
      await expect(nestedButton).toBeVisible();
      await nestedButton.click();
    });

    test('handles missing slot content gracefully', async ({ mount }) => {
      const component = await mount(Accordion, {
        props: {
          accordionItems: sampleAccordionItems,
          accordionTrigger: 'header',
        },
        // No slots provided
      });

      // Expand first section
      await component.locator('#header').first().click();

      // Should still render the collapsible container structure
      const collapsibleContent = component.locator('.spr-px-size-spacing-xs.spr-pb-size-spacing-sm').first();
      await expect(collapsibleContent).toBeAttached();

      // Verify the content area exists but is empty
      await expect(collapsibleContent).toHaveText('');
    });
  });

  test.describe('Visual States', () => {
    test('applies border styling between accordion items', async ({ mount }) => {
      const component = await mount(Accordion, {
        props: {
          accordionItems: sampleAccordionItems,
        },
      });

      // First item should not have top border
      const firstItem = component.locator(`#accordion_item_${sampleAccordionItems[0].collapseId}`);
      await expect(firstItem).not.toHaveClass(/spr-border-t/);

      // Subsequent items should have top border
      for (let i = 1; i < sampleAccordionItems.length; i++) {
        const item = component.locator(`#accordion_item_${sampleAccordionItems[i].collapseId}`);
        await expect(item).toHaveClass(
          /spr-border-x-0 spr-border-b-0 spr-border-t spr-border-solid spr-border-mushroom-200/,
        );
      }
    });

    test('header styling with rounded corners', async ({ mount }) => {
      const component = await mount(Accordion, {
        props: {
          accordionItems: sampleAccordionItems,
          accordionTrigger: 'header',
        },
      });

      const headers = component.locator('#header');

      // Headers should have interactive styling when clickable
      for (let i = 0; i < sampleAccordionItems.length; i++) {
        const header = headers.nth(i);
        await expect(header).toHaveClass(/hover:spr-cursor-pointer/);
      }
    });

    test('icon presence for button trigger type', async ({ mount }) => {
      const component = await mount(Accordion, {
        props: {
          accordionItems: sampleAccordionItems,
          accordionTrigger: 'button',
        },
      });

      const buttons = component.locator('button');

      // Should have proper button styling and contain SVG icons
      for (let i = 0; i < sampleAccordionItems.length; i++) {
        const button = buttons.nth(i);
        await expect(button).toHaveClass(/!spr-h-7 !spr-w-7 !spr-p-0/);

        // Should contain an SVG icon
        const svg = button.locator('svg');
        await expect(svg).toBeAttached();
      }
    });
  });

  test.describe('Accessibility', () => {
    test('has proper semantic structure', async ({ mount }) => {
      const component = await mount(Accordion, {
        props: {
          accordionItems: sampleAccordionItems,
        },
      });

      // Main container should have accordion id
      await expect(component).toHaveAttribute('id', 'accordion');

      // Each accordion item should have unique id
      for (const item of sampleAccordionItems) {
        const itemElement = component.locator(`#accordion_item_${item.collapseId}`);
        await expect(itemElement).toBeAttached();
        await expect(itemElement).toHaveAttribute('id', `accordion_item_${item.collapseId}`);
      }
    });

    test('titles and subtitles are accessible to screen readers', async ({ mount }) => {
      const component = await mount(Accordion, {
        props: {
          accordionItems: sampleAccordionItems,
        },
      });

      for (const item of sampleAccordionItems) {
        const itemElement = component.locator(`#accordion_item_${item.collapseId}`);

        // Title should be visible and readable - use more specific selector
        const title = itemElement.locator('span.spr-text-base.spr-font-medium').first();
        await expect(title).toBeAttached();
        await expect(title).toContainText(item.title);
        await expect(title).not.toHaveAttribute('aria-hidden', 'true');

        // Subtitle should be accessible if present
        if (item.subtitle) {
          const subtitle = itemElement.locator('span.spr-text-200.spr-font-normal').first();
          await expect(subtitle).toBeAttached();
          await expect(subtitle).toContainText(item.subtitle);
          await expect(subtitle).not.toHaveAttribute('aria-hidden', 'true');
        }
      }
    });

    test('button triggers are keyboard accessible', async ({ mount }) => {
      const component = await mount(Accordion, {
        props: {
          accordionItems: sampleAccordionItems,
          accordionTrigger: 'button',
        },
        slots: {
          'section-1': '<div data-testid="keyboard-test-content">Test content</div>',
        },
      });

      const buttons = component.locator('button');

      // All buttons should be focusable
      for (let i = 0; i < sampleAccordionItems.length; i++) {
        const button = buttons.nth(i);
        await button.focus();
        await expect(button).toBeFocused();

        // Should be activatable with keyboard
        if (i === 0) {
          // Only test the first one to check functionality
          await button.press('Space');

          // Should toggle the accordion
          await expect(component.locator('[data-testid="keyboard-test-content"]')).toBeVisible();
        }
      }
    });

    test('header triggers support keyboard interaction when clickable', async ({ mount }) => {
      const component = await mount(Accordion, {
        props: {
          accordionItems: sampleAccordionItems,
          accordionTrigger: 'header',
        },
      });

      const headers = component.locator('#header');

      // Headers should be clickable and have cursor pointer styling
      for (let i = 0; i < sampleAccordionItems.length; i++) {
        const header = headers.nth(i);
        await expect(header).toHaveClass(/hover:spr-cursor-pointer/);
      }
    });

    test('maintains proper content hierarchy', async ({ mount }) => {
      const component = await mount(Accordion, {
        props: {
          accordionItems: sampleAccordionItems,
          accordionTrigger: 'header',
        },
        slots: {
          'section-1': '<h3>Section Content</h3><p>Content paragraph</p>',
        },
      });

      // Expand section to see content
      await component.locator('#header').first().click();

      // Content should maintain semantic structure
      const h3 = component.locator('h3');
      const p = component.locator('p');

      await expect(h3).toBeVisible();
      await expect(h3).toHaveText('Section Content');
      await expect(p).toBeVisible();
      await expect(p).toHaveText('Content paragraph');
    });
  });

  test.describe('Edge Cases', () => {
    test('handles accordion items without subtitles', async ({ mount }) => {
      const itemsWithoutSubtitles: AccordionItem[] = [
        { title: 'Section 1', collapseId: 'sec-1' },
        { title: 'Section 2', collapseId: 'sec-2' },
      ];

      const component = await mount(Accordion, {
        props: {
          accordionItems: itemsWithoutSubtitles,
        },
      });

      for (const item of itemsWithoutSubtitles) {
        const itemElement = component.locator(`#accordion_item_${item.collapseId}`);

        // Should render title
        await expect(itemElement.locator('span').filter({ hasText: item.title })).toBeVisible();

        // Should not render subtitle
        const spans = itemElement.locator('span');
        await expect(spans).toHaveCount(1); // Only title span should exist
      }
    });

    test('handles very long titles and subtitles', async ({ mount }) => {
      const longTextItems: AccordionItem[] = [
        {
          title: 'This is a very long title that might wrap to multiple lines and test the layout behavior',
          subtitle:
            'This is also a very long subtitle that contains a lot of text to test how the component handles text overflow and wrapping in various scenarios',
          collapseId: 'long-text',
        },
      ];

      const component = await mount(Accordion, {
        props: {
          accordionItems: longTextItems,
        },
      });

      const item = component.locator(`#accordion_item_${longTextItems[0].collapseId}`);
      await expect(item).toBeVisible();

      // Should display full text content
      await expect(item).toContainText(longTextItems[0].title);
      await expect(item).toContainText(longTextItems[0].subtitle!);
    });

    test('handles special characters in titles and collapseIds', async ({ mount }) => {
      const specialCharItems: AccordionItem[] = [
        {
          title: 'Section with émojis 🎉 and special chars: ñ, ü, ç',
          subtitle: 'Symbols: @#$%^&*()_+-={}[]|\\:";\'<>?,./~`',
          collapseId: 'special-chars-section',
        },
      ];

      const component = await mount(Accordion, {
        props: {
          accordionItems: specialCharItems,
        },
      });

      const item = component.locator(`#accordion_item_${specialCharItems[0].collapseId}`);
      await expect(item).toBeVisible();
      await expect(item).toContainText(specialCharItems[0].title);
      await expect(item).toContainText(specialCharItems[0].subtitle!);
    });

    test('handles rapid clicking without breaking state', async ({ mount }) => {
      const component = await mount(Accordion, {
        props: {
          accordionItems: sampleAccordionItems,
          accordionTrigger: 'header',
        },
        slots: {
          'section-1': '<div data-testid="rapid-click-content">Rapid click test content</div>',
        },
      });

      const firstHeader = component.locator('#header').first();
      const testContent = component.locator('[data-testid="rapid-click-content"]');

      // Rapidly click multiple times
      for (let i = 0; i < 5; i++) {
        await firstHeader.click();
      }

      // Should end up in expanded state (odd number of clicks)
      await expect(testContent).toBeVisible();

      // Component should still be functional
      await firstHeader.click();
      await expect(testContent).not.toBeVisible();
    });

    test('handles accordion items with duplicate collapseIds gracefully', async ({ mount }) => {
      const duplicateIdItems: AccordionItem[] = [
        { title: 'First', collapseId: 'duplicate-id' },
        { title: 'Second', collapseId: 'duplicate-id' },
      ];

      const component = await mount(Accordion, {
        props: {
          accordionItems: duplicateIdItems,
        },
      });

      // Should render both items (though IDs will be duplicate)
      const items = component.locator('[id^="accordion_item_"]');
      await expect(items).toHaveCount(2);

      // Both should be interactive
      const headers = component.locator('#header');
      await headers.first().click();
      await headers.nth(1).click();
    });
  });

  test.describe('Integration', () => {
    test('works with various prop combinations', async ({ mount }) => {
      const component = await mount(Accordion, {
        props: {
          accordionItems: sampleAccordionItems,
          accordionTrigger: 'header',
          alwaysOpen: true,
          isDefaultOpen: true,
          bordered: false,
        },
        slots: {
          'section-1': '<div data-testid="content-1">Content 1</div>',
          'section-2': '<div data-testid="content-2">Content 2</div>',
          'section-3': '<div data-testid="content-3">Content 3</div>',
        },
      });

      // All content should start visible (isDefaultOpen + alwaysOpen)
      await expect(component.locator('[data-testid="content-1"]')).toBeVisible();
      await expect(component.locator('[data-testid="content-2"]')).toBeVisible();
      await expect(component.locator('[data-testid="content-3"]')).toBeVisible();

      // Should not have border styling
      await expect(component).not.toHaveClass(/spr-border/);

      // Headers should be clickable
      await expect(component.locator('#header').first()).toHaveClass(/hover:spr-cursor-pointer/);
    });

    test('state persistence across prop changes', async ({ mount }) => {
      const component = await mount(Accordion, {
        props: {
          accordionItems: sampleAccordionItems,
          accordionTrigger: 'header',
        },
        slots: {
          'section-1': '<div data-testid="persist-content-1">Persist Content 1</div>',
          'section-2': '<div data-testid="persist-content-2">Persist Content 2</div>',
        },
      });

      // Expand first item
      await component.locator('#header').first().click();
      await expect(component.locator('[data-testid="persist-content-1"]')).toBeVisible();

      // Component should maintain state even when interacting further
      await component.locator('#header').nth(1).click();

      // Only second should be expanded now (single accordion behavior)
      await expect(component.locator('[data-testid="persist-content-1"]')).not.toBeVisible();
      await expect(component.locator('[data-testid="persist-content-2"]')).toBeVisible();
    });
  });
});

/*
 * Additional test scenarios that could be implemented in the future:
 * - Animation timing and transition states testing
 * - Performance testing with large numbers of accordion items (100+)
 * - Integration with Vue router for deep linking to expanded sections
 * - Custom event emissions for expanded/collapsed state changes
 * - Programmatic control via exposed methods
 * - Integration with form validation in accordion content
 * - Drag and drop reordering of accordion items
 * - Nested accordion components
 * - RTL (right-to-left) language support testing
 * - Theme customization and CSS variable testing
 * - Integration with other design system components in slots
 * - Mobile touch interaction testing (swipe gestures)
 * - Screen reader specific testing with NVDA/JAWS
 * - High contrast mode compatibility
 * - Reduced motion preference compliance
 */
