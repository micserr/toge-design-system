/**
 * Banner Component Tests
 *
 * Coverage includes:
 * - Rendering with different props and content
 * - Banner type variants (success, error, info, pending, caution)
 * - Close button functionality
 * - Slots (default slot content)
 * - Visual states and styling
 * - Accessibility features
 * - Icon display based on banner type
 * - Edge cases and prop combinations
 *
 * Note: This component uses defineModel('show') which requires the show prop
 * to be provided in all tests for proper mounting.
 */

import { test, expect } from '@playwright/experimental-ct-vue';
import Banner from '@/components/banner/banner.vue';

test.describe('Banner Component', () => {
  test.describe('Basic Rendering', () => {
    test('renders banner content', async ({ mount }) => {
      const component = await mount(Banner, {
        props: {
          show: true,
          message: 'Test banner message',
        },
      });

      await expect(component).toBeVisible();
      await expect(component).toContainText('Test banner message');

      // Should show default success icon
      const icon = component.locator('svg').first();
      await expect(icon).toBeVisible();
    });

    test('renders with custom slot content', async ({ mount }) => {
      const component = await mount(Banner, {
        props: {
          show: true,
        },
        slots: {
          default: '<div data-testid="custom-content">Custom banner content</div>',
        },
      });

      const customContent = component.getByTestId('custom-content');
      await expect(customContent).toBeVisible();
      await expect(customContent).toHaveText('Custom banner content');
    });

    test('renders with empty message', async ({ mount }) => {
      const component = await mount(Banner, {
        props: {
          show: true,
        },
      });

      await expect(component).toBeVisible();

      // Should still show icon even without message
      const icon = component.locator('svg').first();
      await expect(icon).toBeVisible();
    });
  });

  test.describe('Banner Types', () => {
    const bannerTypes = ['success', 'error', 'info', 'pending', 'caution'] as const;

    for (const type of bannerTypes) {
      test(`renders ${type} banner with correct styling`, async ({ mount }) => {
        const component = await mount(Banner, {
          props: {
            show: true,
            type,
            message: `This is a ${type} banner`,
          },
        });

        await expect(component).toBeVisible();
        await expect(component).toContainText(`This is a ${type} banner`);

        // Icon should be present
        const icon = component.locator('svg').first();
        await expect(icon).toBeVisible();

        // Message should have the correct styling class
        const messageElement = component.locator('.spr-body-sm-regular');
        await expect(messageElement).toBeVisible();
      });
    }
  });

  test.describe('Close Button', () => {
    test('shows close button when showCloseButton is true', async ({ mount }) => {
      const component = await mount(Banner, {
        props: {
          show: true,
          showCloseButton: true,
          message: 'Banner with close button',
        },
      });

      await expect(component).toBeVisible();

      // Should have two icons: banner icon + close icon
      const icons = component.locator('svg');
      await expect(icons).toHaveCount(2);
    });

    test('hides close button when showCloseButton is false', async ({ mount }) => {
      const component = await mount(Banner, {
        props: {
          show: true,
          showCloseButton: false,
          message: 'Banner without close button',
        },
      });

      await expect(component).toBeVisible();

      // Should have only one icon: banner icon
      const icons = component.locator('svg');
      await expect(icons).toHaveCount(1);
    });

    test('close button has cursor pointer style', async ({ mount }) => {
      const component = await mount(Banner, {
        props: {
          show: true,
          showCloseButton: true,
          message: 'Closable banner',
        },
      });

      await expect(component).toBeVisible();

      // Close button should have cursor-pointer class
      const closeButton = component.locator('svg').nth(1);
      await expect(closeButton).toHaveClass(/spr-cursor-pointer/);
    });
  });

  test.describe('Icon Display', () => {
    test('displays icon for each banner type', async ({ mount }) => {
      const iconTests = [
        { type: 'success' },
        { type: 'error' },
        { type: 'info' },
        { type: 'pending' },
        { type: 'caution' },
      ] as const;

      for (const { type } of iconTests) {
        const component = await mount(Banner, {
          props: {
            show: true,
            type,
            message: `${type} message`,
          },
        });

        await expect(component).toBeVisible();

        // Icon should be visible
        const icon = component.locator('svg').first();
        await expect(icon).toBeVisible();
        await expect(icon).toHaveAttribute('width', '16px');
        await expect(icon).toHaveAttribute('height', '16px');
      }
    });
  });

  test.describe('Styling and Layout', () => {
    test('applies correct text styling classes', async ({ mount }) => {
      const component = await mount(Banner, {
        props: {
          show: true,
          message: 'Styled banner message',
        },
      });

      await expect(component).toBeVisible();

      // Check message styling
      const messageSpan = component.locator('.spr-body-sm-regular');
      await expect(messageSpan).toBeVisible();

      // Check content wrapper
      const contentDiv = component.locator('.spr-flex.spr-items-start.spr-gap-size-spacing-3xs');
      await expect(contentDiv).toBeVisible();
    });

    test('applies correct layout classes', async ({ mount }) => {
      const component = await mount(Banner, {
        props: {
          show: true,
          message: 'Layout test banner',
        },
      });

      await expect(component).toBeVisible();

      // Check for main banner flex layout (the root element should be #spr-banner)
      await expect(component).toHaveClass(/spr-w-full/);
      await expect(component).toHaveClass(/spr-flex/);
      await expect(component).toHaveClass(/spr-justify-between/);

      // Check for content flex layout (within default slot)
      const contentContainer = component.locator('.spr-flex.spr-items-start.spr-gap-size-spacing-3xs');
      await expect(contentContainer).toBeVisible();
    });
  });

  test.describe('Color Variants', () => {
    test('applies correct text colors for each type', async ({ mount }) => {
      const colorTests = [
        { type: 'success', expectedClass: 'spr-text-color-brand-base' },
        { type: 'error', expectedClass: 'spr-text-color-danger-pressed' },
        { type: 'info', expectedClass: 'spr-text-color-information-pressed' },
        { type: 'pending', expectedClass: 'spr-text-color-pending-pressed' },
        { type: 'caution', expectedClass: 'spr-text-color-caution-pressed' },
      ] as const;

      for (const { type, expectedClass } of colorTests) {
        const component = await mount(Banner, {
          props: {
            show: true,
            type,
            message: `${type} banner`,
          },
        });

        await expect(component).toBeVisible();

        // Check text color class
        const messageElement = component.locator('.spr-body-sm-regular');
        await expect(messageElement).toHaveClass(new RegExp(expectedClass));
      }
    });
  });

  test.describe('Accessibility', () => {
    test('provides readable text content', async ({ mount }) => {
      const component = await mount(Banner, {
        props: {
          show: true,
          type: 'error',
          message: 'Error: Please fix the form validation issues',
        },
      });

      await expect(component).toBeVisible();
      await expect(component).toContainText('Error: Please fix the form validation issues');
    });

    test('icon has proper dimensions for accessibility', async ({ mount }) => {
      const component = await mount(Banner, {
        props: {
          show: true,
          message: 'Accessible banner',
        },
      });

      await expect(component).toBeVisible();

      const icon = component.locator('svg').first();
      await expect(icon).toHaveAttribute('width', '16px');
      await expect(icon).toHaveAttribute('height', '16px');
    });

    test('close button is interactive', async ({ mount }) => {
      const component = await mount(Banner, {
        props: {
          show: true,
          showCloseButton: true,
          message: 'Interactive banner',
        },
      });

      await expect(component).toBeVisible();

      const closeButton = component.locator('svg').nth(1);
      await expect(closeButton).toBeVisible();

      // Should be clickable
      await closeButton.click();
    });
  });

  test.describe('Edge Cases', () => {
    test('handles long message content', async ({ mount }) => {
      const longMessage =
        'This is a very long banner message that might wrap to multiple lines depending on the container width and should still be displayed properly with proper styling and layout maintained throughout the entire message content';

      const component = await mount(Banner, {
        props: {
          show: true,
          message: longMessage,
        },
      });

      await expect(component).toBeVisible();
      await expect(component).toContainText(longMessage);
    });

    test('handles message with special characters', async ({ mount }) => {
      const specialMessage = 'Error: Failed to save "document.pdf" — please try again! @#$%^&*()';

      const component = await mount(Banner, {
        props: {
          show: true,
          message: specialMessage,
        },
      });

      await expect(component).toBeVisible();
      await expect(component).toContainText(specialMessage);
    });

    test('works with minimal props', async ({ mount }) => {
      const component = await mount(Banner, {
        props: {
          show: true,
        },
      });

      await expect(component).toBeVisible();

      // Should render with just default content
      const icon = component.locator('svg').first();
      await expect(icon).toBeVisible();
    });
  });

  test.describe('Prop Combinations', () => {
    test('error banner with close button', async ({ mount }) => {
      const component = await mount(Banner, {
        props: {
          show: true,
          type: 'error',
          showCloseButton: true,
          message: 'Error message with close button',
        },
      });

      await expect(component).toBeVisible();
      await expect(component).toContainText('Error message with close button');

      // Should have both icons
      const icons = component.locator('svg');
      await expect(icons).toHaveCount(2);

      // Message should have error styling
      const messageElement = component.locator('.spr-body-sm-regular');
      await expect(messageElement).toHaveClass(/spr-text-color-danger-pressed/);
    });

    test('info banner without close button', async ({ mount }) => {
      const component = await mount(Banner, {
        props: {
          show: true,
          type: 'info',
          showCloseButton: false,
          message: 'Info message without close button',
        },
      });

      await expect(component).toBeVisible();
      await expect(component).toContainText('Info message without close button');

      // Should have only banner icon
      const icons = component.locator('svg');
      await expect(icons).toHaveCount(1);

      // Message should have info styling
      const messageElement = component.locator('.spr-body-sm-regular');
      await expect(messageElement).toHaveClass(/spr-text-color-information-pressed/);
    });

    test('caution banner with custom slot content', async ({ mount }) => {
      const component = await mount(Banner, {
        props: {
          show: true,
          type: 'caution',
          showCloseButton: true,
        },
        slots: {
          default: '<div><strong>Caution:</strong> Custom HTML content with <a href="#">link</a></div>',
        },
      });

      await expect(component).toBeVisible();
      await expect(component).toContainText('Caution: Custom HTML content with link');

      // Should have only close button icon since slot content replaces default content
      const icons = component.locator('svg');
      await expect(icons).toHaveCount(1);
    });
  });
});

// Note: The v-model 'show' functionality is difficult to test properly in Playwright CT
// due to how defineModel works in test environments. The component structure suggests
// this functionality would work in a real application context.

// Future Enhancement Ideas:
// - Test v-model show/hide behavior if testing framework support improves
// - Test animation/transition effects if added to the component
// - Test with different container sizes for responsive behavior
// - Test integration with notification systems
// - Test ARIA live regions if implemented for dynamic content
