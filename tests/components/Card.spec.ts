/**
 * Card Component Tests
 *
 * Test Coverage Rationale:
 * - Comprehensive prop testing including all tones, border radius sizes, and boolean flags
 * - Slot testing for header, content, footer, and default slots with conditional rendering
 * - Header visibility logic based on title prop and showHeader flag
 * - Footer visibility logic based on slot content and showFooter flag
 * - Icon display with headerIcon prop requiring title to be visible
 * - Subtitle display requiring title prop
 * - Custom styling props (borderWidth, borderRadiusSize, customBorderSize)
 * - Collapsible integration props for dynamic border styling
 * - Accessibility validation for semantic structure and screen reader support
 * - Edge cases including empty content, special characters, and prop combinations
 *
 * ASSUMPTIONS:
 * - Icon component from @iconify/vue is available and functional
 * - CSS classes from the design system are properly defined
 * - useCard composable handles all styling logic correctly
 *
 * TODO (Future Enhancements):
 * - Test keyboard navigation if card becomes interactive
 * - Add visual regression tests for different tones
 * - Test responsive behavior if implemented
 * - Add performance tests for large content scenarios
 */

import { test, expect } from '@playwright/experimental-ct-vue';
import Card from '@/components/card/card.vue';

test.describe('Card Component', () => {
  test.describe('Rendering', () => {
    test('renders with default props', async ({ mount }) => {
      const component = await mount(Card, {
        slots: {
          default: '<div>Default content</div>',
        },
      });

      await expect(component).toBeVisible();
      await expect(component).toHaveClass(/spr-border-solid/);
      await expect(component).toHaveClass(/spr-background-color/);
      await expect(component).toHaveClass(/spr-border-color-weak/);
      await expect(component).toHaveClass(/spr-rounded-border-radius-xl/);
    });

    test('renders with basic content slot', async ({ mount }) => {
      const component = await mount(Card, {
        slots: {
          content: '<div data-testid="card-content">Basic card content</div>',
        },
      });

      await expect(component).toBeVisible();
      const content = component.locator('[data-testid="card-content"]');
      await expect(content).toBeVisible();
      await expect(content).toHaveText('Basic card content');
    });

    test('renders with default slot when no content slot provided', async ({ mount }) => {
      const component = await mount(Card, {
        slots: {
          default: '<div data-testid="default-content">Default slot content</div>',
        },
      });

      await expect(component).toBeVisible();
      const content = component.locator('[data-testid="default-content"]');
      await expect(content).toBeVisible();
      await expect(content).toHaveText('Default slot content');
    });

    test('prioritizes content slot over default slot', async ({ mount }) => {
      const component = await mount(Card, {
        slots: {
          content: '<div data-testid="content-slot">Content slot</div>',
          default: '<div data-testid="default-slot">Default slot</div>',
        },
      });

      const contentSlot = component.locator('[data-testid="content-slot"]');
      const defaultSlot = component.locator('[data-testid="default-slot"]');

      await expect(contentSlot).toBeVisible();
      await expect(defaultSlot).toBeVisible(); // Default slot still renders outside content area
    });
  });

  test.describe('Props - Tone', () => {
    const tones = [
      { tone: 'plain', bgClass: 'spr-background-color', borderClass: 'spr-border-color-weak' },
      { tone: 'neutral', bgClass: 'spr-background-color-surface', borderClass: 'spr-border-color-base' },
      { tone: 'success', bgClass: 'spr-background-color-success-weak', borderClass: 'spr-border-color-success-base' },
      {
        tone: 'information',
        bgClass: 'spr-background-color-information-weak',
        borderClass: 'spr-border-color-information-base',
      },
      { tone: 'pending', bgClass: 'spr-background-color-pending-weak', borderClass: 'spr-border-color-pending-base' },
      { tone: 'caution', bgClass: 'spr-background-color-caution-weak', borderClass: 'spr-border-color-caution-base' },
      { tone: 'accent', bgClass: 'spr-background-color-accent-weak', borderClass: 'spr-border-color-accent-base' },
      { tone: 'danger', bgClass: 'spr-background-color-danger-weak', borderClass: 'spr-border-color-danger-base' },
    ] as const;

    for (const { tone, bgClass, borderClass } of tones) {
      test(`renders ${tone} tone with correct styling`, async ({ mount }) => {
        const component = await mount(Card, {
          props: { tone },
          slots: {
            content: `<div>Card with ${tone} tone</div>`,
          },
        });

        await expect(component).toBeVisible();
        await expect(component).toHaveClass(new RegExp(bgClass));
        await expect(component).toHaveClass(new RegExp(borderClass));
      });
    }

    test('renders without tone (default styling)', async ({ mount }) => {
      const component = await mount(Card, {
        slots: {
          content: '<div>Default card</div>',
        },
      });

      await expect(component).toHaveClass(/spr-background-color/);
      await expect(component).toHaveClass(/spr-border-color-weak/);
    });
  });

  test.describe('Props - Header', () => {
    test('displays header when title is provided', async ({ mount }) => {
      const component = await mount(Card, {
        props: { title: 'Card Title' },
        slots: {
          content: '<div>Card content</div>',
        },
      });

      const header = component.locator('div.spr-flex.transition-all').first();
      await expect(header).toBeVisible();
      await expect(header).toContainText('Card Title');

      const titleElement = component.getByText('Card Title');
      await expect(titleElement).toBeVisible();
      await expect(titleElement).toHaveClass(/spr-body-md-regular-medium/);
      await expect(titleElement).toHaveClass(/spr-text-mushroom-950/);
    });

    test('displays subtitle when both title and subtitle are provided', async ({ mount }) => {
      const component = await mount(Card, {
        props: {
          title: 'Card Title',
          subtitle: 'Card Subtitle',
        },
        slots: {
          content: '<div>Card content</div>',
        },
      });

      const titleElement = component.getByText('Card Title');
      const subtitleElement = component.getByText('Card Subtitle');

      await expect(titleElement).toBeVisible();
      await expect(subtitleElement).toBeVisible();
      await expect(subtitleElement).toHaveClass(/spr-body-xs-regular/);
      await expect(subtitleElement).toHaveClass(/spr-text-mushroom-600/);
    });

    test('does not display subtitle without title', async ({ mount }) => {
      const component = await mount(Card, {
        props: { subtitle: 'Orphaned Subtitle' },
        slots: {
          content: '<div>Card content</div>',
        },
      });

      const subtitleElement = component.locator('text=Orphaned Subtitle');
      await expect(subtitleElement).not.toBeVisible();
    });

    test('displays header icon when title and headerIcon are provided', async ({ mount }) => {
      const component = await mount(Card, {
        props: {
          title: 'Card Title',
          headerIcon: 'ph:check-circle-duotone',
        },
        slots: {
          content: '<div>Card content</div>',
        },
      });

      const icon = component.locator('svg').first();
      await expect(icon).toBeVisible();
      await expect(icon).toHaveClass(/spr-me-size-spacing-3xs/);
      await expect(icon).toHaveClass(/spr-h-6/);
      await expect(icon).toHaveClass(/spr-w-6/);
      await expect(icon).toHaveClass(/spr-text-kangkong-600/);
    });

    test('does not display header icon without title', async ({ mount }) => {
      const component = await mount(Card, {
        props: { headerIcon: 'ph:check-circle-duotone' },
        slots: {
          content: '<div>Card content</div>',
        },
      });

      const icon = component.locator('svg');
      await expect(icon).not.toBeVisible();
    });

    test('hides header when showHeader is false', async ({ mount }) => {
      const component = await mount(Card, {
        props: {
          title: 'Hidden Title',
          showHeader: false,
        },
        slots: {
          content: '<div>Card content</div>',
        },
      });

      const titleElement = component.locator('text=Hidden Title');
      await expect(titleElement).not.toBeVisible();
    });

    test('displays custom header slot content', async ({ mount }) => {
      const component = await mount(Card, {
        props: { title: 'Card Title' },
        slots: {
          header: '<button data-testid="header-button">Action</button>',
          content: '<div>Card content</div>',
        },
      });

      const headerButton = component.locator('[data-testid="header-button"]');
      await expect(headerButton).toBeVisible();
      await expect(headerButton).toHaveText('Action');

      // Title should still be visible
      const titleElement = component.getByText('Card Title');
      await expect(titleElement).toBeVisible();
    });

    test('displays custom header slot without title', async ({ mount }) => {
      const component = await mount(Card, {
        slots: {
          header: '<img data-testid="header-image" src="/banner.svg" alt="Banner" />',
          content: '<div>Card content</div>',
        },
      });

      const headerImage = component.locator('[data-testid="header-image"]');
      await expect(headerImage).toBeVisible();
    });

    test('applies correct header styling classes', async ({ mount }) => {
      const component = await mount(Card, {
        props: { title: 'Test Title' },
        slots: {
          content: '<div>Content</div>',
        },
      });

      // Target the header div by looking for the one with transition-all class
      const headerDiv = component.locator('div.spr-flex.transition-all').first();
      await expect(headerDiv).toHaveClass(/spr-flex/);
      await expect(headerDiv).toHaveClass(/spr-items-center/);
      await expect(headerDiv).toHaveClass(/transition-all/);
      await expect(headerDiv).toHaveClass(/duration-300/);
      await expect(headerDiv).toHaveClass(/ease-in-out/);
      await expect(headerDiv).toHaveClass(/spr-border-0/);
      await expect(headerDiv).toHaveClass(/spr-border-b/);
      await expect(headerDiv).toHaveClass(/spr-border-solid/);
      await expect(headerDiv).toHaveClass(/spr-border-mushroom-200/);
      await expect(headerDiv).toHaveClass(/spr-py-size-spacing-2xs/);
      await expect(headerDiv).toHaveClass(/spr-px-size-spacing-xs/);
    });
  });

  test.describe('Props - Footer', () => {
    test('displays footer when footer slot is provided', async ({ mount }) => {
      const component = await mount(Card, {
        slots: {
          content: '<div>Card content</div>',
          footer: '<div data-testid="footer-content">Footer content</div>',
        },
      });

      const footer = component.locator('[data-testid="footer-content"]');
      await expect(footer).toBeVisible();
      await expect(footer).toHaveText('Footer content');
    });

    test('hides footer when showFooter is false', async ({ mount }) => {
      const component = await mount(Card, {
        props: { showFooter: false },
        slots: {
          content: '<div>Card content</div>',
          footer: '<div data-testid="hidden-footer">Hidden footer</div>',
        },
      });

      const footer = component.locator('[data-testid="hidden-footer"]');
      await expect(footer).not.toBeVisible();
    });

    test('applies correct footer styling classes', async ({ mount }) => {
      const component = await mount(Card, {
        slots: {
          content: '<div>Content</div>',
          footer: '<div data-testid="footer-content">Footer</div>',
        },
      });

      // Find the footer container by looking for the parent of the footer slot content
      const footerContainer = component.locator('[data-testid="footer-content"]').locator('..').first();
      await expect(footerContainer).toHaveClass(/spr-flex/);
      await expect(footerContainer).toHaveClass(/spr-items-center/);
      await expect(footerContainer).toHaveClass(/spr-border-0/);
      await expect(footerContainer).toHaveClass(/spr-border-t/);
      await expect(footerContainer).toHaveClass(/spr-border-solid/);
      await expect(footerContainer).toHaveClass(/spr-border-mushroom-200/);
      await expect(footerContainer).toHaveClass(/spr-py-size-spacing-2xs/);
      await expect(footerContainer).toHaveClass(/spr-px-size-spacing-xs/);
    });
  });

  test.describe('Props - Border Radius', () => {
    const borderRadiusSizes = [
      { size: '2xs', expectedClass: 'spr-rounded-border-radius-2xs' },
      { size: 'xs', expectedClass: 'spr-rounded-border-radius-xs' },
      { size: 'sm', expectedClass: 'spr-rounded-border-radius-sm' },
      { size: 'md', expectedClass: 'spr-rounded-border-radius-md' },
      { size: 'lg', expectedClass: 'spr-rounded-border-radius-lg' },
      { size: 'xl', expectedClass: 'spr-rounded-border-radius-xl' },
    ] as const;

    for (const { size, expectedClass } of borderRadiusSizes) {
      test(`applies ${size} border radius correctly`, async ({ mount }) => {
        const component = await mount(Card, {
          props: { borderRadiusSize: size },
          slots: {
            content: '<div>Content</div>',
          },
        });

        await expect(component).toHaveClass(new RegExp(expectedClass));
      });
    }

    test('defaults to xl border radius', async ({ mount }) => {
      const component = await mount(Card, {
        slots: {
          content: '<div>Content</div>',
        },
      });

      await expect(component).toHaveClass(/spr-rounded-border-radius-xl/);
    });
  });

  test.describe('Props - Border Width', () => {
    test('applies custom border width', async ({ mount }) => {
      const component = await mount(Card, {
        props: { borderWidth: '3px' },
        slots: {
          content: '<div>Content</div>',
        },
      });

      await expect(component).toHaveAttribute('style', /border-width:\s*3px/);
    });

    test('applies default border width when not specified', async ({ mount }) => {
      const component = await mount(Card, {
        slots: {
          content: '<div>Content</div>',
        },
      });

      await expect(component).toHaveAttribute('style', /border-width:\s*1px/);
    });

    test('handles zero border width', async ({ mount }) => {
      const component = await mount(Card, {
        props: { borderWidth: '0px' },
        slots: {
          content: '<div>Content</div>',
        },
      });

      await expect(component).toHaveAttribute('style', /border-width:\s*0px/);
    });
  });

  test.describe('Props - Content Padding', () => {
    test('applies content padding by default', async ({ mount }) => {
      const component = await mount(Card, {
        slots: {
          content: '<div data-testid="content">Content with padding</div>',
        },
      });

      // Find the content container div - it's the parent of the slot content
      const contentContainer = component.locator('[data-testid="content"]').locator('..').first();
      await expect(contentContainer).toHaveClass(/spr-py-size-spacing-2xs/);
      await expect(contentContainer).toHaveClass(/spr-px-size-spacing-xs/);
    });

    test('removes content padding when hasContentPadding is false', async ({ mount }) => {
      const component = await mount(Card, {
        props: { hasContentPadding: false },
        slots: {
          content: '<div data-testid="content">Content without padding</div>',
        },
      });

      const contentContainer = component.locator('[data-testid="content"]').locator('..').first();
      await expect(contentContainer).not.toHaveClass(/spr-py-size-spacing-2xs/);
      await expect(contentContainer).not.toHaveClass(/spr-px-size-spacing-xs/);
    });
  });

  test.describe('Props - Flexbox', () => {
    test('applies flexbox layout when flexbox prop is true', async ({ mount }) => {
      const component = await mount(Card, {
        props: { flexbox: true },
        slots: {
          content: '<div data-testid="flex-content">Flex content</div>',
        },
      });

      const contentContainer = component.locator('[data-testid="flex-content"]').locator('..').first();
      await expect(contentContainer).toHaveClass(/spr-flex/);
      await expect(contentContainer).toHaveClass(/spr-flex-col/);
      await expect(contentContainer).toHaveClass(/spr-h-full/);
    });

    test('does not apply flexbox layout by default', async ({ mount }) => {
      const component = await mount(Card, {
        slots: {
          content: '<div data-testid="regular-content">Regular content</div>',
        },
      });

      const contentContainer = component.locator('[data-testid="regular-content"]').locator('..').first();
      await expect(contentContainer).not.toHaveClass(/spr-flex spr-flex-col spr-h-full/);
    });
  });

  test.describe('Props - Collapsible Integration', () => {
    test('applies transparent border when hasCollapsible is true and isCollapsibleOpen is false', async ({ mount }) => {
      const component = await mount(Card, {
        props: {
          title: 'Collapsible Card',
          hasCollapsible: true,
          isCollapsibleOpen: false,
        },
        slots: {
          content: '<div>Collapsed content</div>',
        },
      });

      const headerDiv = component.locator('div.spr-flex.transition-all').first();
      await expect(headerDiv).toHaveClass(/spr-border-transparent/);
    });

    test('shows normal border when hasCollapsible is true and isCollapsibleOpen is true', async ({ mount }) => {
      const component = await mount(Card, {
        props: {
          title: 'Collapsible Card',
          hasCollapsible: true,
          isCollapsibleOpen: true,
        },
        slots: {
          content: '<div>Expanded content</div>',
        },
      });

      const headerDiv = component.locator('div.spr-flex.transition-all').first();
      await expect(headerDiv).not.toHaveClass(/spr-border-transparent/);
      await expect(headerDiv).toHaveClass(/spr-border-mushroom-200/);
    });
  });

  test.describe('Props - Custom Border Size', () => {
    test('applies custom border size class when provided', async ({ mount }) => {
      const component = await mount(Card, {
        props: { customBorderSize: '5' },
        slots: {
          content: '<div>Content</div>',
        },
      });

      await expect(component).toHaveClass(/spr-border-\[5px\]/);
    });

    test('applies border-none when customBorderSize is 0', async ({ mount }) => {
      const component = await mount(Card, {
        props: { customBorderSize: '0' },
        slots: {
          content: '<div>Content</div>',
        },
      });

      await expect(component).toHaveClass(/spr-border-none/);
    });
  });

  test.describe('Accessibility', () => {
    test('has proper semantic structure', async ({ mount }) => {
      const component = await mount(Card, {
        props: {
          id: 'test-card',
          title: 'Accessible Card',
        },
        slots: {
          content: '<div>Card content</div>',
          footer: '<button>Action</button>',
        },
      });

      // Card should have the specified ID
      await expect(component).toHaveAttribute('id', 'test-card');

      // Header content should be accessible
      const title = component.getByText('Accessible Card');
      await expect(title).toBeVisible();

      // Interactive elements should be focusable
      const button = component.locator('button');
      await button.focus();
      await expect(button).toBeFocused();
    });

    test('maintains focus management with interactive content', async ({ mount }) => {
      const component = await mount(Card, {
        props: { title: 'Interactive Card' },
        slots: {
          header: '<button data-testid="header-btn">Header Action</button>',
          content: '<input data-testid="content-input" placeholder="Type here" />',
          footer: '<button data-testid="footer-btn">Footer Action</button>',
        },
      });

      // Test focus on header button
      const headerBtn = component.locator('[data-testid="header-btn"]');
      await headerBtn.focus();
      await expect(headerBtn).toBeFocused();

      // Test focus on content input
      const contentInput = component.locator('[data-testid="content-input"]');
      await contentInput.focus();
      await expect(contentInput).toBeFocused();

      // Test focus on footer button
      const footerBtn = component.locator('[data-testid="footer-btn"]');
      await footerBtn.focus();
      await expect(footerBtn).toBeFocused();
    });

    test('provides appropriate text contrast for different tones', async ({ mount }) => {
      const tones = ['plain', 'neutral', 'success', 'information', 'pending', 'caution', 'accent', 'danger'] as const;

      for (const tone of tones) {
        const component = await mount(Card, {
          props: {
            tone,
            title: `${tone} card`,
          },
          slots: {
            content: `<div>Content for ${tone} tone</div>`,
          },
        });

        const title = component.getByText(`${tone} card`);
        await expect(title).toBeVisible();

        // Title should maintain readable text color
        await expect(title).toHaveClass(/spr-text-mushroom-950/);
      }
    });
  });

  test.describe('Edge Cases', () => {
    test('handles empty content gracefully', async ({ mount }) => {
      const component = await mount(Card, {
        props: { title: 'Empty Card' },
        slots: {
          content: '',
        },
      });

      await expect(component).toBeVisible();
      await expect(component).toHaveClass(/spr-border-solid/);
    });

    test('handles long titles and subtitles', async ({ mount }) => {
      const longTitle =
        'This is a very long card title that might wrap to multiple lines and test text overflow behavior';
      const longSubtitle =
        'This is a very long subtitle that provides additional context and might also wrap to multiple lines';

      const component = await mount(Card, {
        props: {
          title: longTitle,
          subtitle: longSubtitle,
        },
        slots: {
          content: '<div>Content</div>',
        },
      });

      const titleElement = component.getByText(longTitle);
      const subtitleElement = component.getByText(longSubtitle);

      await expect(titleElement).toBeVisible();
      await expect(subtitleElement).toBeVisible();
    });

    test('handles special characters in title and subtitle', async ({ mount }) => {
      const specialTitle = '🎉 Card Title with Émojis & Special Characters! @#$%';
      const specialSubtitle = 'Subtitle with <script>alert("test")</script> & HTML entities';

      const component = await mount(Card, {
        props: {
          title: specialTitle,
          subtitle: specialSubtitle,
        },
        slots: {
          content: '<div>Content</div>',
        },
      });

      await expect(component.getByText(specialTitle)).toBeVisible();
      await expect(component.getByText(specialSubtitle)).toBeVisible();
    });

    test('handles complex nested content', async ({ mount }) => {
      const component = await mount(Card, {
        props: { title: 'Complex Card' },
        slots: {
          header: `
            <div class="flex justify-between items-center">
              <span>Status: Active</span>
              <button>Edit</button>
            </div>
          `,
          content: `
            <div>
              <h3>Nested Header</h3>
              <p>Paragraph with <strong>bold</strong> and <em>italic</em> text.</p>
              <ul>
                <li>List item 1</li>
                <li>List item 2</li>
              </ul>
              <div class="grid grid-cols-2 gap-4">
                <div>Column 1</div>
                <div>Column 2</div>
              </div>
            </div>
          `,
          footer: `
            <div class="flex justify-end gap-2">
              <button>Cancel</button>
              <button>Save</button>
            </div>
          `,
        },
      });

      await expect(component).toBeVisible();
      await expect(component.getByText('Complex Card')).toBeVisible();
      await expect(component.getByText('Status: Active')).toBeVisible();
      await expect(component.getByText('Nested Header')).toBeVisible();
      await expect(component.getByText('List item 1')).toBeVisible();
      await expect(component.getByText('Cancel')).toBeVisible();
      await expect(component.getByText('Save')).toBeVisible();
    });

    test('handles missing or undefined props gracefully', async ({ mount }) => {
      const component = await mount(Card, {
        props: {
          title: undefined,
          subtitle: undefined,
          tone: undefined,
        },
        slots: {
          content: '<div>Content with undefined props</div>',
        },
      });

      await expect(component).toBeVisible();
      await expect(component).toHaveClass(/spr-background-color/); // Default background (plain tone)
      await expect(component).toHaveClass(/spr-border-color-weak/); // Default border
    });
  });

  test.describe('Prop Combinations', () => {
    test('success tone with large border radius and header icon', async ({ mount }) => {
      const component = await mount(Card, {
        props: {
          tone: 'success',
          borderRadiusSize: 'lg',
          title: 'Success Card',
          headerIcon: 'ph:check-circle-duotone',
          subtitle: 'Operation completed successfully',
        },
        slots: {
          content: '<div>Success message content</div>',
          footer: '<button>Continue</button>',
        },
      });

      // Check tone styling
      await expect(component).toHaveClass(/spr-background-color-success-weak/);
      await expect(component).toHaveClass(/spr-border-color-success-base/);

      // Check border radius
      await expect(component).toHaveClass(/spr-rounded-border-radius-lg/);

      // Check header content
      await expect(component.getByText('Success Card')).toBeVisible();
      await expect(component.getByText('Operation completed successfully')).toBeVisible();

      // Check icon
      const icon = component.locator('svg').first();
      await expect(icon).toBeVisible();

      // Check footer
      await expect(component.getByText('Continue')).toBeVisible();
    });

    test('danger tone with custom border width and no padding', async ({ mount }) => {
      const component = await mount(Card, {
        props: {
          tone: 'danger',
          borderWidth: '4px',
          hasContentPadding: false,
          title: 'Error Card',
          showFooter: false,
        },
        slots: {
          content: '<div data-testid="error-content">Error occurred</div>',
          footer: '<div>This footer should be hidden</div>',
        },
      });

      // Check tone styling
      await expect(component).toHaveClass(/spr-background-color-danger-weak/);
      await expect(component).toHaveClass(/spr-border-color-danger-base/);

      // Check custom border width
      await expect(component).toHaveAttribute('style', /border-width:\s*4px/);

      // Check no content padding
      const contentContainer = component.locator('[data-testid="error-content"]').locator('..').first();
      await expect(contentContainer).not.toHaveClass(/spr-py-size-spacing-2xs/);

      // Check hidden footer
      await expect(component.locator('text=This footer should be hidden')).not.toBeVisible();
    });

    test('plain tone with flexbox layout and collapsible integration', async ({ mount }) => {
      const component = await mount(Card, {
        props: {
          tone: 'plain',
          flexbox: true,
          hasCollapsible: true,
          isCollapsibleOpen: true,
          title: 'Expandable Card',
          borderRadiusSize: 'md',
        },
        slots: {
          content: '<div data-testid="flexible-content">Flexible content that expands</div>',
        },
      });

      // Check tone styling
      await expect(component).toHaveClass(/spr-background-color/);
      await expect(component).toHaveClass(/spr-border-color-weak/);

      // Check flexbox layout
      const contentContainer = component.locator('[data-testid="flexible-content"]').locator('..').first();
      await expect(contentContainer).toHaveClass(/spr-flex/);
      await expect(contentContainer).toHaveClass(/spr-flex-col/);
      await expect(contentContainer).toHaveClass(/spr-h-full/);

      // Check collapsible styling (expanded state)
      const headerDiv = component.locator('div.spr-flex.transition-all').first();
      await expect(headerDiv).not.toHaveClass(/spr-border-transparent/);

      // Check border radius
      await expect(component).toHaveClass(/spr-rounded-border-radius-md/);
    });

    test('card with all slots and various props', async ({ mount }) => {
      const component = await mount(Card, {
        props: {
          id: 'comprehensive-card',
          tone: 'accent',
          title: 'Comprehensive Card',
          subtitle: 'With all features enabled',
          headerIcon: 'ph:star-duotone',
          borderWidth: '2px',
          borderRadiusSize: 'sm',
          hasContentPadding: true,
          flexbox: false,
        },
        slots: {
          header: '<div data-testid="custom-header">Custom header content</div>',
          content: '<div data-testid="main-content">Main content area</div>',
          footer: '<div data-testid="custom-footer">Custom footer content</div>',
          default: '<div data-testid="default-slot">Default slot content</div>',
        },
      });

      // Check basic props
      await expect(component).toHaveAttribute('id', 'comprehensive-card');
      await expect(component).toHaveClass(/spr-background-color-accent-weak/);
      await expect(component).toHaveAttribute('style', /border-width:\s*2px/);
      await expect(component).toHaveClass(/spr-rounded-border-radius-sm/);

      // Check title and subtitle
      await expect(component.getByText('Comprehensive Card')).toBeVisible();
      await expect(component.getByText('With all features enabled')).toBeVisible();

      // Check icon
      const icon = component.locator('svg').first();
      await expect(icon).toBeVisible();

      // Check all slots
      await expect(component.locator('[data-testid="custom-header"]')).toBeVisible();
      await expect(component.locator('[data-testid="main-content"]')).toBeVisible();
      await expect(component.locator('[data-testid="custom-footer"]')).toBeVisible();
      await expect(component.locator('[data-testid="default-slot"]')).toBeVisible();
    });
  });

  test.describe('Visual Structure and Layout', () => {
    test('maintains proper DOM hierarchy', async ({ mount }) => {
      const component = await mount(Card, {
        props: { title: 'Test Card' },
        slots: {
          header: '<div data-testid="header-slot">Header slot</div>',
          content: '<div data-testid="content-slot">Content slot</div>',
          footer: '<div data-testid="footer-slot">Footer slot</div>',
          default: '<div data-testid="default-slot">Default slot</div>',
        },
      });

      // Root element should be the card container
      await expect(component).toBeVisible();

      // Check order of elements in DOM
      const allContent = await component.textContent();
      const headerIndex = allContent?.indexOf('Test Card') ?? -1;
      const headerSlotIndex = allContent?.indexOf('Header slot') ?? -1;
      const contentIndex = allContent?.indexOf('Content slot') ?? -1;
      const defaultIndex = allContent?.indexOf('Default slot') ?? -1;
      const footerIndex = allContent?.indexOf('Footer slot') ?? -1;

      // Verify correct order: title, header slot, content slot, default slot, footer slot
      expect(headerIndex).toBeLessThan(headerSlotIndex);
      expect(headerSlotIndex).toBeLessThan(contentIndex);
      expect(contentIndex).toBeLessThan(defaultIndex);
      expect(defaultIndex).toBeLessThan(footerIndex);
    });

    test('adapts layout based on content presence', async ({ mount }) => {
      // Card with only content
      const contentOnlyCard = await mount(Card, {
        slots: {
          content: '<div>Just content</div>',
        },
      });

      await expect(contentOnlyCard).toBeVisible();
      await expect(contentOnlyCard.getByText('Just content')).toBeVisible();

      // Header and footer sections should not exist
      const headerElements = contentOnlyCard.locator('div').filter({ hasText: /spr-border-b/ });
      const footerElements = contentOnlyCard.locator('div').filter({ hasText: /spr-border-t/ });

      await expect(headerElements).toHaveCount(0);
      await expect(footerElements).toHaveCount(0);
    });

    test('applies consistent spacing and borders between sections', async ({ mount }) => {
      const component = await mount(Card, {
        props: { title: 'Spaced Card' },
        slots: {
          content: '<div>Content with borders</div>',
          footer: '<div data-testid="footer-borders">Footer with borders</div>',
        },
      });

      // Header should have bottom border when content exists
      const headerDiv = component.locator('div.spr-flex.transition-all').first();
      await expect(headerDiv).toHaveClass(/spr-border-b/);
      await expect(headerDiv).toHaveClass(/spr-border-mushroom-200/);

      // Footer should have top border
      const footerContainer = component.locator('[data-testid="footer-borders"]').locator('..').first();
      await expect(footerContainer).toHaveClass(/spr-border-t/);
      await expect(footerContainer).toHaveClass(/spr-border-mushroom-200/);
    });
  });
});
