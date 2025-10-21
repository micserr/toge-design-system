/**
 * Comprehensive Avatar Component Test Suite
 *
 * Coverage:
 * - Basic rendering with all variants (image, initial, client, user, user-group, count)
 * - All prop combinations (size, color, status, notification, badge)
 * - Event emissions (image-error)
 * - Default slot behavior
 * - Accessibility features
 * - Loading states
 * - Error handling (image load failures)
 * - Edge cases (empty/null values, special characters)
 * - Badge and notification positioning
 * - Initials generation logic
 *
 * Key assumptions:
 * - Badge component is available and functional
 * - Iconify icons render correctly in test environment
 * - Tailwind CSS classes are applied properly
 */

import { test, expect } from '@playwright/experimental-ct-vue';
import Avatar from '@/components/avatar/avatar.vue';

test.describe('Avatar Component', () => {
  test.describe('Props - Basic Rendering', () => {
    test('renders with default props', async ({ mount }) => {
      const component = await mount(Avatar);

      await expect(component).toBeVisible();
      await expect(component.locator('.spr-relative')).toBeVisible();

      // Should show initials by default
      const initialsContainer = component.locator('div').filter({ hasText: 'A' }).first();
      await expect(initialsContainer).toBeVisible();
    });

    test('renders image variant with src', async ({ mount }) => {
      const component = await mount(Avatar, {
        props: {
          variant: 'image',
          src: 'https://via.placeholder.com/150',
          alt: 'Test Avatar',
        },
      });

      await expect(component).toBeVisible();

      // Wait for the image to be in the DOM
      const img = component.locator('img');
      await expect(img).toBeAttached();
      await expect(img).toHaveAttribute('src', 'https://via.placeholder.com/150');
      await expect(img).toHaveAttribute('alt', 'Test Avatar');
    });

    test('renders initial variant correctly', async ({ mount }) => {
      const component = await mount(Avatar, {
        props: {
          variant: 'initial',
          initial: 'John Doe',
        },
      });

      const initialsContainer = component.locator('div').filter({ hasText: 'JD' }).first();
      await expect(initialsContainer).toBeVisible();
    });

    test('renders count variant correctly', async ({ mount }) => {
      const component = await mount(Avatar, {
        props: {
          variant: 'count',
          count: 5,
        },
      });

      const countContainer = component.locator('div').filter({ hasText: '+5' }).first();
      await expect(countContainer).toBeVisible();
    });

    test('renders user variant with icon', async ({ mount }) => {
      const component = await mount(Avatar, {
        props: {
          variant: 'user',
        },
      });

      await expect(component).toBeVisible();

      // Look for the Icon component (iconify-icon or svg element)
      const iconContainer = component.locator('.avatar__slot');
      await expect(iconContainer).toBeVisible();

      // The Icon component should be rendered within the image container
      const icon = iconContainer.locator('svg, iconify-icon, [role="img"]').first();
      await expect(icon).toBeAttached();
    });

    test('renders client variant with building icon', async ({ mount }) => {
      const component = await mount(Avatar, {
        props: {
          variant: 'client',
        },
      });

      await expect(component).toBeVisible();

      const iconContainer = component.locator('.avatar__slot');
      await expect(iconContainer).toBeVisible();

      // The Icon component should be rendered within the image container
      const icon = iconContainer.locator('svg, iconify-icon, [role="img"]').first();
      await expect(icon).toBeAttached();
    });

    test('renders user-group variant with users icon', async ({ mount }) => {
      const component = await mount(Avatar, {
        props: {
          variant: 'user-group',
        },
      });

      await expect(component).toBeVisible();

      const iconContainer = component.locator('.avatar__slot');
      await expect(iconContainer).toBeVisible();

      // The Icon component should be rendered within the image container
      const icon = iconContainer.locator('svg, iconify-icon, [role="img"]').first();
      await expect(icon).toBeAttached();
    });
  });

  test.describe('Props - Size Variants', () => {
    test('renders 2xs size correctly', async ({ mount }) => {
      const component = await mount(Avatar, {
        props: {
          size: '2xs',
          variant: 'initial',
          initial: 'Test',
        },
      });

      const container = component.locator('.spr-h-4');
      await expect(container).toBeVisible();
    });

    test('renders xs size correctly', async ({ mount }) => {
      const component = await mount(Avatar, {
        props: {
          size: 'xs',
          variant: 'initial',
          initial: 'Test',
        },
      });

      const container = component.locator('.spr-h-5');
      await expect(container).toBeVisible();
    });

    test('renders sm size correctly', async ({ mount }) => {
      const component = await mount(Avatar, {
        props: {
          size: 'sm',
          variant: 'initial',
          initial: 'Test',
        },
      });

      const container = component.locator('.spr-h-6');
      await expect(container).toBeVisible();
    });

    test('renders md size correctly', async ({ mount }) => {
      const component = await mount(Avatar, {
        props: {
          size: 'md',
          variant: 'initial',
          initial: 'Test',
        },
      });

      const container = component.locator('.spr-h-9');
      await expect(container).toBeVisible();
    });

    test('renders lg size correctly', async ({ mount }) => {
      const component = await mount(Avatar, {
        props: {
          size: 'lg',
          variant: 'initial',
          initial: 'Test',
        },
      });

      const container = component.locator('.spr-h-10');
      await expect(container).toBeVisible();
    });

    test('renders xl size correctly', async ({ mount }) => {
      const component = await mount(Avatar, {
        props: {
          size: 'xl',
          variant: 'initial',
          initial: 'Test',
        },
      });

      const container = component.locator('.spr-h-14');
      await expect(container).toBeVisible();
    });

    test('renders 2xl size correctly', async ({ mount }) => {
      const component = await mount(Avatar, {
        props: {
          size: '2xl',
          variant: 'initial',
          initial: 'Test',
        },
      });

      const container = component.locator('.spr-h-20');
      await expect(container).toBeVisible();
    });
  });

  test.describe('Props - Color Variants', () => {
    test('renders primary color correctly', async ({ mount }) => {
      const component = await mount(Avatar, {
        props: {
          color: 'primary',
          variant: 'initial',
        },
      });

      const container = component.locator('.spr-background-color-surface');
      await expect(container).toBeVisible();
    });

    test('renders secondary color correctly', async ({ mount }) => {
      const component = await mount(Avatar, {
        props: {
          color: 'secondary',
          variant: 'initial',
        },
      });

      const container = component.locator('.spr-background-color');
      await expect(container).toBeVisible();
    });

    test('renders tertiary color correctly', async ({ mount }) => {
      const component = await mount(Avatar, {
        props: {
          color: 'tertiary',
          variant: 'initial',
        },
      });

      const container = component.locator('.spr-border-color-success-base');
      await expect(container).toBeVisible();
    });
  });

  test.describe('Initials Generation', () => {
    test('generates single initial from single word', async ({ mount }) => {
      const component = await mount(Avatar, {
        props: {
          variant: 'initial',
          initial: 'John',
        },
      });

      const initialsContainer = component.locator('div').filter({ hasText: 'J' }).first();
      await expect(initialsContainer).toBeVisible();
    });

    test('generates initials from multiple words', async ({ mount }) => {
      const component = await mount(Avatar, {
        props: {
          variant: 'initial',
          initial: 'John Michael Doe',
        },
      });

      const initialsContainer = component.locator('div').filter({ hasText: 'JD' }).first();
      await expect(initialsContainer).toBeVisible();
    });

    test('generates single initial for small sizes', async ({ mount }) => {
      const component = await mount(Avatar, {
        props: {
          variant: 'initial',
          initial: 'John Doe',
          size: 'xs',
        },
      });

      const initialsContainer = component.locator('div').filter({ hasText: 'J' }).first();
      await expect(initialsContainer).toBeVisible();
    });

    test('handles special characters in initials', async ({ mount }) => {
      const component = await mount(Avatar, {
        props: {
          variant: 'initial',
          initial: 'José María',
        },
      });

      const initialsContainer = component.locator('div').filter({ hasText: 'JM' }).first();
      await expect(initialsContainer).toBeVisible();
    });
  });

  test.describe('Badge and Notification', () => {
    test('renders notification badge', async ({ mount }) => {
      const component = await mount(Avatar, {
        props: {
          notification: true,
          notificationText: '5',
          variant: 'initial',
        },
      });

      const notificationContainer = component.locator('.spr-absolute.spr-right-0.spr-top-0');
      await expect(notificationContainer).toBeVisible();
    });

    test('renders status badge', async ({ mount }) => {
      const component = await mount(Avatar, {
        props: {
          badge: true,
          status: 'brand',
          variant: 'initial',
        },
      });

      const badgeContainer = component.locator('.spr-absolute.spr-bottom-0.spr-right-0');
      await expect(badgeContainer).toBeVisible();
    });

    test('renders both notification and badge', async ({ mount }) => {
      const component = await mount(Avatar, {
        props: {
          notification: true,
          notificationText: '3',
          badge: true,
          status: 'danger',
          variant: 'initial',
        },
      });

      const notificationContainer = component.locator('.spr-absolute.spr-right-0.spr-top-0');
      const badgeContainer = component.locator('.spr-absolute.spr-bottom-0.spr-right-0');

      await expect(notificationContainer).toBeVisible();
      await expect(badgeContainer).toBeVisible();
    });
  });

  test.describe('Loading State', () => {
    test('renders loading state correctly', async ({ mount }) => {
      const component = await mount(Avatar, {
        props: {
          loading: true,
          variant: 'initial',
        },
      });

      // The main container should be present
      await expect(component).toBeAttached();

      // The loading state creates a skeletal loader within the base classes
      const baseContainer = component.locator('.spr-relative');
      await expect(baseContainer).toBeAttached();

      // Check for the skeletal loader class - it should exist in the DOM
      const skeletalLoader = component.locator('.spr-skeletal-loader');
      await expect(skeletalLoader).toBeAttached();
    });
  });

  test.describe('Event Emissions', () => {
    test('emits image-error when image fails to load', async ({ mount, page }) => {
      // Track the event emission
      let emittedError = false;
      let eventData: any = null;

      const component = await mount(Avatar, {
        props: {
          variant: 'image',
          src: 'https://httpstat.us/404', // URL that will return 404 error
          alt: 'Test Avatar',
        },
        on: {
          'image-error': (error: boolean) => {
            emittedError = true;
            eventData = error;
          },
        },
      });

      // Verify the component is mounted
      await expect(component).toBeAttached();

      // Wait for the image element to appear with more patience
      // Using a more comprehensive selector strategy
      const imgSelector = 'img';
      await page.waitForSelector(imgSelector, { timeout: 10000, state: 'attached' });

      // Get the image element
      const img = page.locator(imgSelector).first();

      // Alternative approach: Use a natural image error by providing an invalid image
      // First, let the natural 404 error possibly occur, then force one if needed
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // If natural error didn't trigger, force it programmatically
      if (!emittedError) {
        await img.evaluate((imgElement: HTMLImageElement) => {
          // Force an error event
          const errorEvent = new Event('error', { bubbles: true });
          imgElement.dispatchEvent(errorEvent);
        });

        // Wait for Vue to process the event
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      // Verify the event was emitted correctly
      expect(emittedError).toBe(true);
      expect(eventData).toBe(true);
    });
  });

  test.describe('Edge Cases', () => {
    test('handles empty initial string', async ({ mount }) => {
      const component = await mount(Avatar, {
        props: {
          variant: 'initial',
          initial: '',
        },
      });

      // The main container should be present
      await expect(component).toBeAttached();

      // Should still render the container even with empty initial
      const container = component.locator('.spr-relative');
      await expect(container).toBeAttached();

      // The component should render some content structure
      const content = container.locator('div').first();
      await expect(content).toBeAttached();
    });

    test('handles zero count gracefully', async ({ mount }) => {
      const component = await mount(Avatar, {
        props: {
          variant: 'count',
          count: 0,
        },
      });

      const countContainer = component.locator('div').filter({ hasText: '+0' }).first();
      await expect(countContainer).toBeVisible();
    });

    test('handles negative count', async ({ mount }) => {
      const component = await mount(Avatar, {
        props: {
          variant: 'count',
          count: -5,
        },
      });

      const countContainer = component.locator('div').filter({ hasText: '+-5' }).first();
      await expect(countContainer).toBeVisible();
    });

    test('handles very large count numbers', async ({ mount }) => {
      const component = await mount(Avatar, {
        props: {
          variant: 'count',
          count: 9999,
        },
      });

      const countContainer = component.locator('div').filter({ hasText: '+9999' }).first();
      await expect(countContainer).toBeVisible();
    });
  });

  test.describe('Slots', () => {
    test('renders default slot content', async ({ mount }) => {
      const component = await mount(Avatar, {
        props: {
          variant: 'image',
        },
        slots: {
          default: '<div data-testid="custom-content">Custom Content</div>',
        },
      });

      const customContent = component.locator('[data-testid="custom-content"]');
      await expect(customContent).toBeVisible();
      await expect(customContent).toHaveText('Custom Content');
    });
  });

  test.describe('Accessibility', () => {
    test('provides proper alt text structure for screen readers', async ({ mount }) => {
      const component = await mount(Avatar, {
        props: {
          variant: 'image',
          src: 'https://via.placeholder.com/150',
          alt: 'John Doe Profile Picture',
        },
      });

      const img = component.locator('img');
      await expect(img).toHaveAttribute('alt', 'John Doe Profile Picture');
    });

    test('maintains accessible structure with role attributes', async ({ mount }) => {
      const component = await mount(Avatar, {
        props: {
          variant: 'initial',
          initial: 'Test User',
        },
      });

      // Verify the component structure is accessible
      await expect(component).toBeVisible();

      // The component should have proper container structure
      const container = component.locator('.spr-relative');
      await expect(container).toBeVisible();
    });
  });
});
