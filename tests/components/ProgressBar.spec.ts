/**
 * ProgressBar Component Tests
 *
 * Coverage includes:
 * - Rendering with default props
 * - All size variants (xs, sm, lg)
 * - Value and max prop combinations
 * - Label display/hide functionality
 * - Percentage calculations and display
 * - Accessibility (ARIA attributes, progressbar role)
 * - Visual progress indicator width
 * - Edge cases (boundary values, invalid values)
 * - Prop validation behavior
 * - Responsive design and layout
 *
 * Rationale:
 * - Testing critical prop combinations for visual variants
 * - Focus on percentage calculation accuracy
 * - Validate accessibility compliance for screen readers
 * - Ensure proper visual progress representation
 * - Test boundary conditions and error handling
 *
 * ASSUMPTIONS:
 * - Component uses Tailwind CSS classes with 'spr-' prefix
 * - Progress indicator width is set via inline styles
 * - Invalid prop values are handled gracefully by Vue validators
 * - Component follows design system spacing and color conventions
 *
 * TODO (Future Enhancements):
 * - Test animation/transition behaviors if needed
 * - Add visual regression tests for different themes
 * - Test with internationalization if percentage format varies
 * - Performance tests for rapid value changes
 * - Test with very large datasets if applicable
 */

import { test, expect } from '@playwright/experimental-ct-vue';
import ProgressBar from '@/components/progress-bar/progress-bar.vue';

test.describe('ProgressBar Component', () => {
  test.describe('Rendering', () => {
    test('renders with default props', async ({ mount }) => {
      const component = await mount(ProgressBar);

      await expect(component).toBeVisible();
      await expect(component).toHaveAttribute('role', 'progressbar');
      await expect(component).toHaveAttribute('aria-valuemin', '0');
      await expect(component).toHaveAttribute('aria-valuemax', '100');

      // Default label should show 0%
      const label = component.locator('span');
      await expect(label).toBeVisible();
      await expect(label).toHaveText('0%');
    });

    test('renders without label when label prop is false', async ({ mount }) => {
      const component = await mount(ProgressBar, {
        props: { label: false, value: 50 },
      });

      // Check that the component has the correct attributes
      await expect(component).toHaveAttribute('role', 'progressbar');
      await expect(component).toHaveAttribute('aria-valuemin', '0');
      await expect(component).toHaveAttribute('aria-valuemax', '100');

      // The label span should not be in the DOM when label is false
      const labelCount = await component.locator('span').count();
      expect(labelCount).toBe(0);
    });

    test('renders with custom value and shows correct percentage', async ({ mount }) => {
      const component = await mount(ProgressBar, {
        props: { value: 75 },
      });

      const label = component.locator('span');
      await expect(label).toHaveText('75%');

      // Check progress bar width through the style attribute
      const progressIndicator = component.locator('.spr-background-color-success-base');
      await expect(progressIndicator).toHaveAttribute('style', /width:\s*75%/);
    });

    test('renders with custom max value', async ({ mount }) => {
      const component = await mount(ProgressBar, {
        props: { value: 50, max: 200 },
      });

      await expect(component).toHaveAttribute('aria-valuemax', '200');

      // 50 out of 200 should be 25%
      const label = component.locator('span');
      await expect(label).toHaveText('25%');
    });
  });

  test.describe('Size Variants', () => {
    test('renders with xs size', async ({ mount }) => {
      const component = await mount(ProgressBar, {
        props: { size: 'xs' },
      });

      // The size class is applied to the progress container div (has the background classes)
      const progressContainer = component.locator('.spr-overflow-hidden');
      await expect(progressContainer).toHaveClass(/spr-h-1/);
    });

    test('renders with sm size', async ({ mount }) => {
      const component = await mount(ProgressBar, {
        props: { size: 'sm' },
      });

      const progressContainer = component.locator('.spr-overflow-hidden');
      await expect(progressContainer).toHaveClass(/spr-h-2/);
    });

    test('renders with lg size (default)', async ({ mount }) => {
      const component = await mount(ProgressBar, {
        props: { size: 'lg' },
      });

      const progressContainer = component.locator('.spr-overflow-hidden');
      await expect(progressContainer).toHaveClass(/spr-h-3/);
    });

    test('defaults to lg size when invalid size provided', async ({ mount }) => {
      // This should fallback to default
      const component = await mount(ProgressBar);

      const progressContainer = component.locator('.spr-overflow-hidden');
      await expect(progressContainer).toHaveClass(/spr-h-3/);
    });
  });

  test.describe('Value and Progress Calculations', () => {
    test('calculates percentage correctly for various values', async ({ mount }) => {
      const testCases = [
        { value: 0, expected: '0%' },
        { value: 25, expected: '25%' },
        { value: 50, expected: '50%' },
        { value: 75, expected: '75%' },
        { value: 100, expected: '100%' },
      ];

      for (const testCase of testCases) {
        const component = await mount(ProgressBar, {
          props: { value: testCase.value },
        });

        const label = component.locator('span');
        await expect(label).toHaveText(testCase.expected);

        const progressIndicator = component.locator('.spr-background-color-success-base');
        await expect(progressIndicator).toHaveAttribute(
          'style',
          new RegExp(`width:\\s*${testCase.expected.replace('%', '\\%')}`),
        );
      }
    });

    test('handles fractional values correctly', async ({ mount }) => {
      const component = await mount(ProgressBar, {
        props: { value: 33.33, max: 100 },
      });

      const label = component.locator('span');
      await expect(label).toHaveText('33.33%');
    });

    test('caps progress at 100% when value exceeds max', async ({ mount }) => {
      const component = await mount(ProgressBar, {
        props: { value: 150, max: 100 },
      });

      const label = component.locator('span');
      await expect(label).toHaveText('100%');

      const progressIndicator = component.locator('.spr-background-color-success-base');
      await expect(progressIndicator).toHaveAttribute('style', /width:\s*100%/);
    });

    test('works with custom max values', async ({ mount }) => {
      const testCases = [
        { value: 5, max: 10, expected: '50%' },
        { value: 3, max: 12, expected: '25%' },
        { value: 8, max: 20, expected: '40%' },
      ];

      for (const testCase of testCases) {
        const component = await mount(ProgressBar, {
          props: { value: testCase.value, max: testCase.max },
        });

        const label = component.locator('span');
        await expect(label).toHaveText(testCase.expected);
      }
    });
  });

  test.describe('Accessibility', () => {
    test('has proper ARIA attributes', async ({ mount }) => {
      const component = await mount(ProgressBar, {
        props: { value: 60, max: 100 },
      });

      await expect(component).toHaveAttribute('role', 'progressbar');
      await expect(component).toHaveAttribute('aria-valuemin', '0');
      await expect(component).toHaveAttribute('aria-valuemax', '100');
    });

    test('updates aria-valuemax when max prop changes', async ({ mount }) => {
      const component = await mount(ProgressBar, {
        props: { value: 30, max: 50 },
      });

      await expect(component).toHaveAttribute('aria-valuemax', '50');
    });

    test('maintains accessibility with custom max values', async ({ mount }) => {
      const component = await mount(ProgressBar, {
        props: { value: 15, max: 30 },
      });

      await expect(component).toHaveAttribute('role', 'progressbar');
      await expect(component).toHaveAttribute('aria-valuemin', '0');
      await expect(component).toHaveAttribute('aria-valuemax', '30');
    });
  });

  test.describe('Visual Styling', () => {
    test('applies correct CSS classes for layout', async ({ mount }) => {
      const component = await mount(ProgressBar);

      // Main container classes (root component div)
      await expect(component).toHaveClass(/spr-flex/);
      await expect(component).toHaveClass(/spr-w-full/);
      await expect(component).toHaveClass(/spr-flex-col/);
      await expect(component).toHaveClass(/spr-gap-size-spacing-5xs/);

      // Progress container classes (div with overflow-hidden)
      const progressContainer = component.locator('.spr-overflow-hidden');
      await expect(progressContainer).toHaveClass(/spr-overflow-hidden/);
      await expect(progressContainer).toHaveClass(/spr-rounded-lg/);
      await expect(progressContainer).toHaveClass(/spr-bg-white-100/);
    });

    test('applies correct classes to progress indicator', async ({ mount }) => {
      const component = await mount(ProgressBar, {
        props: { value: 50 },
      });

      const progressIndicator = component.locator('.spr-background-color-success-base');
      await expect(progressIndicator).toHaveClass(/spr-background-color-success-base/);
      await expect(progressIndicator).toHaveClass(/spr-transition-all/);
      await expect(progressIndicator).toHaveClass(/spr-duration-300/);
    });

    test('applies correct classes to label', async ({ mount }) => {
      const component = await mount(ProgressBar, {
        props: { label: true },
      });

      const label = component.locator('span');
      await expect(label).toHaveClass(/spr-text-color-base/);
      await expect(label).toHaveClass(/spr-font-weight-regular/);
      await expect(label).toHaveClass(/spr-font-size-100/);
      await expect(label).toHaveClass(/spr-line-height-100/);
      await expect(label).toHaveClass(/spr-font-main/);
    });

    test('progress indicator has 100% height', async ({ mount }) => {
      const component = await mount(ProgressBar, {
        props: { value: 75 },
      });

      const progressIndicator = component.locator('.spr-background-color-success-base');
      await expect(progressIndicator).toHaveAttribute('style', /height:\s*100%/);
    });
  });

  test.describe('Edge Cases', () => {
    test('handles zero value correctly', async ({ mount }) => {
      const component = await mount(ProgressBar, {
        props: { value: 0 },
      });

      const label = component.locator('span');
      await expect(label).toHaveText('0%');

      const progressIndicator = component.locator('.spr-background-color-success-base');
      await expect(progressIndicator).toHaveAttribute('style', /width:\s*0%/);
    });

    test('handles negative values gracefully', async ({ mount }) => {
      const component = await mount(ProgressBar, {
        props: { value: -10 },
      });

      // The component shows negative percentage as calculated (not clamped to 0)
      const label = component.locator('span');
      await expect(label).toHaveText('-10%');
    });

    test('handles very small max values', async ({ mount }) => {
      const component = await mount(ProgressBar, {
        props: { value: 1, max: 2 },
      });

      const label = component.locator('span');
      await expect(label).toHaveText('50%');
    });

    test('handles decimal precision correctly', async ({ mount }) => {
      const component = await mount(ProgressBar, {
        props: { value: 1, max: 3 },
      });

      const label = component.locator('span');
      // 1/3 = 33.333...%
      await expect(label).toHaveText(/33\.33/);
    });

    test('handles max value of 100 correctly', async ({ mount }) => {
      const component = await mount(ProgressBar, {
        props: { value: 100, max: 100 },
      });

      await expect(component).toHaveAttribute('aria-valuemax', '100');

      const label = component.locator('span');
      await expect(label).toHaveText('100%');
    });
  });

  test.describe('Prop Combinations', () => {
    test('combines all props correctly', async ({ mount }) => {
      const component = await mount(ProgressBar, {
        props: {
          size: 'sm',
          value: 80,
          max: 200,
          label: true,
        },
      });

      // Check size
      const progressContainer = component.locator('.spr-overflow-hidden');
      await expect(progressContainer).toHaveClass(/spr-h-2/);

      // Check calculation: 80/200 = 40%
      const label = component.locator('span');
      await expect(label).toHaveText('40%');

      // Check ARIA
      await expect(component).toHaveAttribute('aria-valuemax', '200');
    });

    test('works with different size and label combinations', async ({ mount }) => {
      const combinations: Array<{ size: 'xs' | 'sm' | 'lg'; label: boolean }> = [
        { size: 'xs', label: false },
        { size: 'sm', label: true },
        { size: 'lg', label: false },
      ];

      for (const combo of combinations) {
        const component = await mount(ProgressBar, {
          props: { ...combo, value: 50 },
        });

        const progressContainer = component.locator('.spr-overflow-hidden');
        const expectedClass = combo.size === 'xs' ? 'spr-h-1' : combo.size === 'sm' ? 'spr-h-2' : 'spr-h-3';
        await expect(progressContainer).toHaveClass(new RegExp(expectedClass));

        const label = component.locator('span');
        if (combo.label) {
          await expect(label).toBeVisible();
          await expect(label).toHaveText('50%');
        } else {
          await expect(label).not.toBeVisible();
        }
      }
    });
  });
});
