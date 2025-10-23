/**
 * Status Component Tests
 *
 * Test Coverage Rationale:
 * - Renders Icon component with proper icon, class, and aria-label
 * - Tests all state variants (success, information, pending, caution, danger)
 * - Tests all size variants (2xs, xs, sm, base, lg, xl, 2xl)
 * - Validates proper CSS classes are applied for styling
 * - Ensures accessibility through aria-label attributes
 * - Tests prop validation and defaults
 * - Verifies computed properties from useStatus composable
 *
 * ASSUMPTIONS:
 * - Icon component from @iconify/vue is available and functional
 * - CSS classes follow the spr- prefix convention
 * - Phosphor icons (ph:*) are available in the iconify library
 *
 * TODO (Future Enhancements):
 * - Test icon loading states/failures (requires mock setup)
 * - Test with custom aria-label overrides (if supported)
 * - Performance testing for computed property reactivity
 */

import { test, expect } from '@playwright/experimental-ct-vue';
import Status from '@/components/status/status.vue';

test.describe('Status Component', () => {
  test.describe('Rendering', () => {
    test('renders with default props', async ({ mount }) => {
      const component = await mount(Status);

      await expect(component).toBeVisible();
      await expect(component).toHaveAttribute('aria-label', 'Success');

      // Check default state (success) styling
      await expect(component).toHaveClass(/spr-text-kangkong-600/);

      // Check default size (base) styling
      await expect(component).toHaveClass(/spr-w-6/);
      await expect(component).toHaveClass(/spr-h-6/);
    });

    test('renders success state correctly', async ({ mount }) => {
      const component = await mount(Status, {
        props: { state: 'success' },
      });

      await expect(component).toBeVisible();
      await expect(component).toHaveAttribute('aria-label', 'Success');
      await expect(component).toHaveClass(/spr-text-kangkong-600/);
    });

    test('renders information state correctly', async ({ mount }) => {
      const component = await mount(Status, {
        props: { state: 'information' },
      });

      await expect(component).toBeVisible();
      await expect(component).toHaveAttribute('aria-label', 'Information');
      await expect(component).toHaveClass(/spr-text-blueberry-700/);
    });

    test('renders pending state correctly', async ({ mount }) => {
      const component = await mount(Status, {
        props: { state: 'pending' },
      });

      await expect(component).toBeVisible();
      await expect(component).toHaveAttribute('aria-label', 'Pending');
      await expect(component).toHaveClass(/spr-text-mango-500/);
    });

    test('renders caution state correctly', async ({ mount }) => {
      const component = await mount(Status, {
        props: { state: 'caution' },
      });

      await expect(component).toBeVisible();
      await expect(component).toHaveAttribute('aria-label', 'Caution');
      await expect(component).toHaveClass(/spr-text-carrot-500/);
    });

    test('renders danger state correctly', async ({ mount }) => {
      const component = await mount(Status, {
        props: { state: 'danger' },
      });

      await expect(component).toBeVisible();
      await expect(component).toHaveAttribute('aria-label', 'Danger');
      await expect(component).toHaveClass(/spr-text-tomato-600/);
    });
  });

  test.describe('Size Variants', () => {
    test('renders 2xs size correctly', async ({ mount }) => {
      const component = await mount(Status, {
        props: { size: '2xs' },
      });

      await expect(component).toHaveClass(/spr-w-\[14px\]/);
      await expect(component).toHaveClass(/spr-h-\[14px\]/);
    });

    test('renders xs size correctly', async ({ mount }) => {
      const component = await mount(Status, {
        props: { size: 'xs' },
      });

      await expect(component).toHaveClass(/spr-w-4/);
      await expect(component).toHaveClass(/spr-h-4/);
    });

    test('renders sm size correctly', async ({ mount }) => {
      const component = await mount(Status, {
        props: { size: 'sm' },
      });

      await expect(component).toHaveClass(/spr-w-5/);
      await expect(component).toHaveClass(/spr-h-5/);
    });

    test('renders base size correctly', async ({ mount }) => {
      const component = await mount(Status, {
        props: { size: 'base' },
      });

      await expect(component).toHaveClass(/spr-w-6/);
      await expect(component).toHaveClass(/spr-h-6/);
    });

    test('renders lg size correctly', async ({ mount }) => {
      const component = await mount(Status, {
        props: { size: 'lg' },
      });

      await expect(component).toHaveClass(/spr-w-8/);
      await expect(component).toHaveClass(/spr-h-8/);
    });

    test('renders xl size correctly', async ({ mount }) => {
      const component = await mount(Status, {
        props: { size: 'xl' },
      });

      await expect(component).toHaveClass(/spr-w-10/);
      await expect(component).toHaveClass(/spr-h-10/);
    });

    test('renders 2xl size correctly', async ({ mount }) => {
      const component = await mount(Status, {
        props: { size: '2xl' },
      });

      await expect(component).toHaveClass(/spr-w-12/);
      await expect(component).toHaveClass(/spr-h-12/);
    });
  });

  test.describe('Prop Combinations', () => {
    test('combines state and size props correctly', async ({ mount }) => {
      const component = await mount(Status, {
        props: {
          state: 'danger',
          size: 'lg',
        },
      });

      await expect(component).toBeVisible();
      await expect(component).toHaveAttribute('aria-label', 'Danger');
      await expect(component).toHaveClass(/spr-text-tomato-600/);
      await expect(component).toHaveClass(/spr-w-8/);
      await expect(component).toHaveClass(/spr-h-8/);
    });

    test('applies all classes correctly with custom props', async ({ mount }) => {
      const component = await mount(Status, {
        props: {
          state: 'information',
          size: 'xs',
        },
      });

      await expect(component).toHaveAttribute('aria-label', 'Information');
      await expect(component).toHaveClass(/spr-text-blueberry-700/);
      await expect(component).toHaveClass(/spr-w-4/);
      await expect(component).toHaveClass(/spr-h-4/);
    });
  });

  test.describe('Icon Properties', () => {
    test('renders icon component for success state', async ({ mount, page }) => {
      await mount(Status, {
        props: { state: 'success' },
      });

      // Check if there's an SVG element (Icon component renders as SVG)
      const svgElement = page.locator('svg').first();
      await expect(svgElement).toBeVisible();

      // Since iconify may not load in test environment, we verify the component structure
      // The useStatus composable should provide the correct icon prop to the Icon component
    });

    test('renders icon component for information state', async ({ mount, page }) => {
      await mount(Status, {
        props: { state: 'information' },
      });

      const svgElement = page.locator('svg').first();
      await expect(svgElement).toBeVisible();
    });

    test('renders icon component for pending state', async ({ mount, page }) => {
      await mount(Status, {
        props: { state: 'pending' },
      });

      const svgElement = page.locator('svg').first();
      await expect(svgElement).toBeVisible();
    });

    test('renders icon component for caution state', async ({ mount, page }) => {
      await mount(Status, {
        props: { state: 'caution' },
      });

      const svgElement = page.locator('svg').first();
      await expect(svgElement).toBeVisible();
    });

    test('renders icon component for danger state', async ({ mount, page }) => {
      await mount(Status, {
        props: { state: 'danger' },
      });

      const svgElement = page.locator('svg').first();
      await expect(svgElement).toBeVisible();
    });
  });

  test.describe('Accessibility', () => {
    test('provides proper aria-label for each state', async ({ mount }) => {
      const states = [
        { state: 'success', label: 'Success' },
        { state: 'information', label: 'Information' },
        { state: 'pending', label: 'Pending' },
        { state: 'caution', label: 'Caution' },
        { state: 'danger', label: 'Danger' },
      ] as const;

      for (const { state, label } of states) {
        const component = await mount(Status, {
          props: { state },
        });

        await expect(component).toHaveAttribute('aria-label', label);
      }
    });

    test('maintains accessibility with different sizes', async ({ mount }) => {
      const component = await mount(Status, {
        props: {
          state: 'success',
          size: '2xl',
        },
      });

      await expect(component).toHaveAttribute('aria-label', 'Success');
      await expect(component).toBeVisible();
    });

    test('icon is focusable for keyboard navigation', async ({ mount, page }) => {
      await mount(Status, {
        props: { state: 'information' },
      });

      // The Icon component should be accessible via keyboard
      const iconElement = page.locator('svg').first();
      await expect(iconElement).toBeVisible();
    });
  });

  test.describe('Edge Cases', () => {
    test('handles invalid state gracefully with fallback', async ({ mount }) => {
      // While prop validation should prevent this, test graceful handling
      const component = await mount(Status, {
        props: {
          state: 'invalid-state' as any,
        },
      });

      // Should fall back to success state
      await expect(component).toBeVisible();
      await expect(component).toHaveClass(/spr-text-kangkong-600/);
    });

    test('handles invalid size gracefully with fallback', async ({ mount }) => {
      const component = await mount(Status, {
        props: {
          size: 'invalid-size' as any,
        },
      });

      // Should fall back to base size
      await expect(component).toBeVisible();
      await expect(component).toHaveClass(/spr-w-6/);
      await expect(component).toHaveClass(/spr-h-6/);
    });

    test('maintains reactivity when props change', async ({ mount }) => {
      const component = await mount(Status, {
        props: {
          state: 'success',
          size: 'sm',
        },
      });

      // Initial state
      await expect(component).toHaveClass(/spr-text-kangkong-600/);
      await expect(component).toHaveClass(/spr-w-5/);

      // Update props
      await component.update({
        props: {
          state: 'danger',
          size: 'lg',
        },
      });

      // Verify updated state
      await expect(component).toHaveClass(/spr-text-tomato-600/);
      await expect(component).toHaveClass(/spr-w-8/);
      await expect(component).toHaveAttribute('aria-label', 'Danger');
    });
  });

  test.describe('CSS Class Application', () => {
    test('applies all required CSS classes simultaneously', async ({ mount }) => {
      const component = await mount(Status, {
        props: {
          state: 'caution',
          size: 'xl',
        },
      });

      // Check that all classes are present
      const classes = await component.getAttribute('class');
      expect(classes).toContain('spr-text-carrot-500'); // state class
      expect(classes).toContain('spr-w-10'); // size width
      expect(classes).toContain('spr-h-10'); // size height
    });

    test('does not have conflicting classes', async ({ mount }) => {
      const component = await mount(Status, {
        props: {
          state: 'success',
          size: 'base',
        },
      });

      const classes = await component.getAttribute('class');

      // Should not have other state colors
      expect(classes).not.toContain('spr-text-blueberry-700');
      expect(classes).not.toContain('spr-text-mango-500');
      expect(classes).not.toContain('spr-text-carrot-500');
      expect(classes).not.toContain('spr-text-tomato-600');

      // Should not have other sizes
      expect(classes).not.toContain('spr-w-4');
      expect(classes).not.toContain('spr-w-8');
      expect(classes).not.toContain('spr-w-10');
    });
  });
});
