/**
 * Badge Component Tests
 * 
 * Coverage includes:
 * - Rendering with default props and custom props
 * - All prop combinations (variant x size x position)
 * - Slots (default slot content with various elements)
 * - Conditional logic (text display based on size)
 * - CSS class application from useBadge composable
 * - Position-relative behavior for top/bottom positions
 * - Accessibility (semantic HTML, ARIA roles)
 * - Edge cases (empty text, special characters, numbers)
 * - Visual state validation (variant colors, sizes, positioning)
 * 
 * Rationale:
 * - Testing all variant/size/position combinations as they affect visual appearance
 * - Focus on conditional text rendering logic for tiny badges
 * - Validate CSS class generation from the useBadge composable
 * - Ensure slot content positioning works correctly with different badge positions
 * - Test accessibility compliance for badge context usage
 */

import { test, expect } from '@playwright/experimental-ct-vue';
import Badge from '@/components/badge/badge.vue';

test.describe('Badge Component', () => {
  test.describe('Rendering', () => {
    test('renders with default props', async ({ mount }) => {
      const component = await mount(Badge);
      
      await expect(component).toBeVisible();
      
      // Default props: text="0", variant="brand", size="small", position="default"
      const badgeText = component.locator('div').filter({ hasText: '0' }).last();
      await expect(badgeText).toBeVisible();
      await expect(badgeText).toHaveText('0');
      
      // Should have default styling classes
      await expect(component).toHaveClass(/spr-flex spr-gap-2/);
    });

    test('renders with custom text', async ({ mount }) => {
      const component = await mount(Badge, {
        props: { text: '42' }
      });
      
      const badgeText = component.locator('div').filter({ hasText: '42' }).last();
      await expect(badgeText).toBeVisible();
      await expect(badgeText).toHaveText('42');
    });

    test('renders with slot content', async ({ mount }) => {
      const component = await mount(Badge, {
        slots: { 
          default: '<button data-testid="badge-target">Notifications</button>' 
        }
      });
      
      const slotContent = component.locator('[data-testid="badge-target"]');
      await expect(slotContent).toBeVisible();
      await expect(slotContent).toHaveText('Notifications');
    });

    test('renders with complex slot content', async ({ mount }) => {
      const component = await mount(Badge, {
        props: { text: '3', variant: 'danger', position: 'top' },
        slots: { 
          default: `
            <div data-testid="avatar">
              <img src="/avatar.jpg" alt="User Avatar" />
              <span>John Doe</span>
            </div>
          ` 
        }
      });
      
      const avatar = component.locator('[data-testid="avatar"]');
      await expect(avatar).toBeVisible();
    });
  });

  test.describe('Props - Variant', () => {
    const variants = ['danger', 'disabled', 'information', 'brand'] as const;

    for (const variant of variants) {
      test(`renders ${variant} variant with correct styling`, async ({ mount }) => {
        const component = await mount(Badge, {
          props: { variant, text: variant }
        });
        
        await expect(component).toBeVisible();
        
        const badge = component.locator('div').filter({ hasText: variant }).last();
        
        // Verify variant-specific classes are applied
        switch (variant) {
          case 'danger':
            await expect(badge).toHaveClass(/spr-background-color-danger-base/);
            await expect(badge).toHaveClass(/spr-text-color-inverted-strong/);
            break;
          case 'disabled':
            await expect(badge).toHaveClass(/spr-background-color-disabled/);
            await expect(badge).toHaveClass(/spr-text-color-on-fill-disabled/);
            break;
          case 'information':
            await expect(badge).toHaveClass(/spr-background-color-information-base/);
            await expect(badge).toHaveClass(/spr-text-color-inverted-strong/);
            break;
          case 'brand':
            await expect(badge).toHaveClass(/spr-background-color-brand-base/);
            await expect(badge).toHaveClass(/spr-text-color-inverted-strong/);
            break;
        }
      });
    }
  });

  test.describe('Props - Size', () => {
    const sizes = ['small', 'big', 'tiny'] as const;

    for (const size of sizes) {
      test(`renders ${size} size with correct styling`, async ({ mount }) => {
        const component = await mount(Badge, {
          props: { size, text: size === 'tiny' ? '1' : size },
          slots: size === 'tiny' ? { default: '<span>Item</span>' } : undefined
        });
        
        // For tiny badges, check if component exists rather than visibility
        if (size === 'tiny') {
          await expect(component).toBeAttached();
        } else {
          await expect(component).toBeVisible();
        }
        
        const badgeContent = component.locator('div').last(); // The innermost badge div
        
        // Verify size-specific classes are applied
        switch (size) {
          case 'big':
            await expect(badgeContent).toHaveClass(/spr-h-\[20px\]/);
            await expect(badgeContent).toHaveClass(/spr-min-w-\[20px\]/);
            await expect(badgeContent).toHaveClass(/spr-label-sm-medium/);
            break;
          case 'small':
            await expect(badgeContent).toHaveClass(/spr-h-\[16px\]/);
            await expect(badgeContent).toHaveClass(/spr-min-w-\[16px\]/);
            await expect(badgeContent).toHaveClass(/spr-label-xs-medium/);
            break;
          case 'tiny':
            await expect(badgeContent).toHaveClass(/spr-h-\[10px\]/);
            await expect(badgeContent).toHaveClass(/spr-min-w-\[10px\]/);
            await expect(badgeContent).toHaveClass(/spr-rounded-full/);
            break;
        }
      });
    }

    test('tiny size hides text content', async ({ mount }) => {
      const component = await mount(Badge, {
        props: { size: 'tiny', text: '99+' }
      });
      
      // For tiny badges, text should be empty regardless of the text prop
      const badgeContent = component.locator('div').last();
      await expect(badgeContent).toHaveText('');
      await expect(badgeContent).not.toContainText('99+');
    });

    test('small and big sizes display text content', async ({ mount }) => {
      const testText = 'TEST';
      
      for (const size of ['small', 'big'] as const) {
        const component = await mount(Badge, {
          props: { size, text: testText }
        });
        
        const badgeContent = component.locator('div').filter({ hasText: testText }).last();
        await expect(badgeContent).toHaveText(testText);
      }
    });
  });

  test.describe('Props - Position', () => {
    const sizes = ['small', 'big', 'tiny'] as const;

    test('default position renders with flex layout', async ({ mount }) => {
      const component = await mount(Badge, {
        props: { position: 'default' },
        slots: { default: '<div data-testid="content">Content</div>' }
      });
      
      const badgeContainer = component.locator('div').nth(1); // Second div is the badge container (after slot content)
      await expect(badgeContainer).toHaveClass(/spr-flex/);
      await expect(badgeContainer).toHaveClass(/spr-items-center/);
      await expect(badgeContainer).toHaveClass(/spr-gap-2/);
    });

    test('top and bottom positions render with relative positioning', async ({ mount }) => {
      for (const position of ['top', 'bottom'] as const) {
        const component = await mount(Badge, {
          props: { position },
          slots: { default: '<div data-testid="content">Content</div>' }
        });
        
        const badgeContainer = component.locator('div').nth(1); // Second div is the badge container (after slot content)
        await expect(badgeContainer).toHaveClass(/spr-relative/);
      }
    });

    for (const position of ['top', 'bottom'] as const) {
      for (const size of sizes) {
        test(`${position} position with ${size} size applies correct absolute positioning`, async ({ mount }) => {
          const component = await mount(Badge, {
            props: { position, size, text: size === 'tiny' ? '' : 'X' },
            slots: { default: '<div data-testid="content">Content</div>' }
          });
          
          const positionSection = component.locator('section');
          
          // Verify position-specific classes based on size
          if (position === 'top') {
            switch (size) {
              case 'tiny':
                await expect(positionSection).toHaveClass(/spr-absolute -spr-top-1 spr-right-1/);
                break;
              case 'small':
                await expect(positionSection).toHaveClass(/spr-absolute -spr-top-2 -spr-right-1/);
                break;
              case 'big':
                await expect(positionSection).toHaveClass(/spr-absolute -spr-top-3 -spr-right-2/);
                break;
            }
          } else { // bottom
            switch (size) {
              case 'tiny':
                await expect(positionSection).toHaveClass(/spr-absolute -spr-bottom-1 spr-right-1/);
                break;
              case 'small':
                await expect(positionSection).toHaveClass(/spr-absolute -spr-bottom-2 -spr-right-1/);
                break;
              case 'big':
                await expect(positionSection).toHaveClass(/spr-absolute -spr-bottom-3 -spr-right-2/);
                break;
            }
          }
        });
      }
    }
  });

  test.describe('Accessibility', () => {
    test('has proper semantic structure', async ({ mount }) => {
      const component = await mount(Badge, {
        props: { text: '5' },
        slots: { default: '<button>Messages</button>' }
      });
      
      // Badge should be a div container
      const mainContainer = component.locator('div').first();
      await expect(mainContainer).toBeVisible();
      
      // Slot content should be preserved for screen readers
      const button = component.locator('button');
      await expect(button).toBeVisible();
      await expect(button).toHaveText('Messages');
    });

    test('badge content is readable by screen readers', async ({ mount }) => {
      const component = await mount(Badge, {
        props: { text: '12' }
      });
      
      const badgeText = component.locator('div').filter({ hasText: '12' }).last();
      await expect(badgeText).toBeVisible();
      await expect(badgeText).toHaveText('12');
      
      // Badge text should be accessible to screen readers
      // (no aria-hidden or similar accessibility-blocking attributes)
      await expect(badgeText).not.toHaveAttribute('aria-hidden', 'true');
    });

    test('maintains focus management with interactive slot content', async ({ mount }) => {
      const component = await mount(Badge, {
        props: { text: '3', position: 'top' },
        slots: { 
          default: '<button data-testid="focusable">Click me</button>' 
        }
      });
      
      const button = component.locator('[data-testid="focusable"]');
      await button.focus();
      await expect(button).toBeFocused();
    });
  });

  test.describe('Edge Cases', () => {
    test('handles empty text gracefully', async ({ mount }) => {
      const component = await mount(Badge, {
        props: { text: '' }
      });
      
      const badgeContent = component.locator('div').last();
      await expect(badgeContent).toHaveText('');
    });

    test('handles long text content', async ({ mount }) => {
      const longText = 'This is a very long badge text that might overflow';
      const component = await mount(Badge, {
        props: { text: longText, size: 'big' }
      });
      
      const badgeContent = component.locator('div').filter({ hasText: longText }).last();
      await expect(badgeContent).toHaveText(longText);
    });

    test('handles special characters and numbers', async ({ mount }) => {
      const specialTexts = ['99+', '•', '★', '⚠️', '1000', '∞'];
      
      for (const text of specialTexts) {
        const component = await mount(Badge, {
          props: { text, size: 'small' } // Ensure text is visible
        });
        
        const badgeContent = component.locator('div').filter({ hasText: text }).last();
        await expect(badgeContent).toHaveText(text);
      }
    });

    test('handles no slot content', async ({ mount }) => {
      const component = await mount(Badge, {
        props: { text: '1' }
      });
      
      await expect(component).toBeVisible();
      const badgeText = component.locator('div').filter({ hasText: '1' }).last();
      await expect(badgeText).toHaveText('1');
    });

    test('handles null/undefined props gracefully', async ({ mount }) => {
      // Component should handle missing props by using defaults
      const component = await mount(Badge, {
        props: {}
      });
      
      await expect(component).toBeVisible();
      // Should default to text="0"
      const badgeText = component.locator('div').filter({ hasText: '0' }).last();
      await expect(badgeText).toHaveText('0');
    });
  });

  test.describe('Prop Combinations', () => {
    test('danger variant with tiny size and top position', async ({ mount }) => {
      const component = await mount(Badge, {
        props: {
          variant: 'danger',
          size: 'tiny',
          position: 'top'
        },
        slots: { default: '<div data-testid="avatar">Avatar</div>' }
      });
      
      const badgeContent = component.locator('div').last();
      const positionSection = component.locator('section');
      
      // Should have danger styling
      await expect(badgeContent).toHaveClass(/spr-background-color-danger-base/);
      await expect(badgeContent).toHaveClass(/spr-text-color-inverted-strong/);
      
      // Should have tiny size styling
      await expect(badgeContent).toHaveClass(/spr-h-\[10px\]/);
      await expect(badgeContent).toHaveClass(/spr-rounded-full/);
      
      // Should have top positioning
      await expect(positionSection).toHaveClass(/spr-absolute -spr-top-1 spr-right-1/);
      
      // Should have empty text (tiny size behavior)
      await expect(badgeContent).toHaveText('');
    });

    test('information variant with big size and bottom position', async ({ mount }) => {
      const component = await mount(Badge, {
        props: {
          variant: 'information',
          size: 'big',
          position: 'bottom',
          text: 'NEW'
        },
        slots: { default: '<button>Feature</button>' }
      });
      
      const badgeContent = component.locator('div').last();
      const positionSection = component.locator('section');
      
      // Should have information styling
      await expect(badgeContent).toHaveClass(/spr-background-color-information-base/);
      await expect(badgeContent).toHaveClass(/spr-text-color-inverted-strong/);
      
      // Should have big size styling
      await expect(badgeContent).toHaveClass(/spr-h-\[20px\]/);
      await expect(badgeContent).toHaveClass(/spr-label-sm-medium/);
      
      // Should have bottom positioning
      await expect(positionSection).toHaveClass(/spr-absolute -spr-bottom-3 -spr-right-2/);
      
      // Should display text (not tiny size)
      await expect(badgeContent).toHaveText('NEW');
    });

    test('disabled variant with default position maintains styling', async ({ mount }) => {
      const component = await mount(Badge, {
        props: {
          variant: 'disabled',
          position: 'default',
          text: '0'
        },
        slots: { default: '<span>Disabled Feature</span>' }
      });
      
      const badgeContainer = component.locator('div').nth(0); // First div when no slots
      const badgeContent = component.locator('div').nth(1); // Second div is the badge content
      
      // Should have default position flex layout
      await expect(badgeContainer).toHaveClass(/spr-flex/);
      await expect(badgeContainer).toHaveClass(/spr-items-center/);
      await expect(badgeContainer).toHaveClass(/spr-gap-2/);
      
      // Should have disabled styling
      await expect(badgeContent).toHaveClass(/spr-background-color-disabled/);
      await expect(badgeContent).toHaveClass(/spr-text-color-on-fill-disabled/);
    });
  });

  test.describe('Visual Structure', () => {
    test('maintains proper DOM hierarchy', async ({ mount }) => {
      const component = await mount(Badge, {
        props: { text: 'Test', position: 'top' },
        slots: { default: '<div data-testid="content">Content</div>' }
      });
      
      // Root component should contain slot content and badge
      await expect(component).toBeVisible();
      
      // Slot content should be first child
      const slotContent = component.locator('[data-testid="content"]');
      await expect(slotContent).toBeVisible();
      
      // Badge container should be second div (after slot content)
      const badgeContainer = component.locator('div').nth(1);
      await expect(badgeContainer).toHaveClass(/spr-relative/); // For top position
      
      // Position section inside badge container
      const positionSection = badgeContainer.locator('section');
      await expect(positionSection).toBeVisible();
      
      // Badge content inside position section
      const badgeContent = positionSection.locator('div');
      await expect(badgeContent).toBeVisible();
    });

    test('layout adapts correctly to position changes', async ({ mount }) => {
      // Test default position layout
      const defaultComponent = await mount(Badge, {
        props: { position: 'default' },
        slots: { default: '<span>Item</span>' }
      });
      
      const defaultBadgeContainer = defaultComponent.locator('div').nth(0);
      await expect(defaultBadgeContainer).toHaveClass(/spr-flex/);
      await expect(defaultBadgeContainer).toHaveClass(/spr-items-center/);
      await expect(defaultBadgeContainer).toHaveClass(/spr-gap-2/);
      await expect(defaultBadgeContainer).not.toHaveClass(/spr-relative/);
      
      // Test positioned layout
      const positionedComponent = await mount(Badge, {
        props: { position: 'top' },
        slots: { default: '<span>Item</span>' }
      });
      
      const positionedBadgeContainer = positionedComponent.locator('div').nth(0); // First div when no slots
      await expect(positionedBadgeContainer).toHaveClass(/spr-relative/);
      await expect(positionedBadgeContainer).not.toHaveClass(/spr-gap-2/);
    });
  });
});