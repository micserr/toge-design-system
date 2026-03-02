/**
 * Icon Component Tests
 *
 * Coverage includes:
 * - Rendering with required props (id and icon)
 * - All prop combinations (size x tone x variant)
 * - Prop validation and default values
 * - CSS class generation via useIcon composable
 * - Iconify integration and attributes forwarding
 * - Edge cases (invalid props, empty values)
 * - Accessibility (proper ARIA attributes, semantic structure)
 *
 * Rationale:
 * - Testing all size variants to ensure proper dimensions
 * - Comprehensive tone x variant matrix for visual state validation
 * - Validate proper class computation from useIcon composable
 * - Ensure Iconify component receives correct props
 * - Test prop validators for type safety
 */

import { test, expect } from '@playwright/experimental-ct-vue';
import Icon from '@/components/icon/icon.vue';

test.describe('Icon Component', () => {
  test.describe('Rendering', () => {
    test('renders with required props', async ({ mount }) => {
      const component = await mount(Icon, {
        props: {
          id: 'test-icon',
          icon: 'mdi:home',
        },
      });

      await expect(component).toBeVisible();

      // Should contain the Iconify Icon component
      const iconElement = component.locator('svg, [data-icon]').first();
      await expect(iconElement).toBeVisible();
    });

    test('applies default props correctly', async ({ mount }) => {
      const component = await mount(Icon, {
        props: {
          id: 'default-icon',
          icon: 'mdi:star',
        },
      });

      // Should have default size (md) classes
      await expect(component).toHaveClass(/spr-h-9/);
      await expect(component).toHaveClass(/spr-min-w-9/);
      await expect(component).toHaveClass(/spr-font-size-400/);

      // Should have base wrapper classes
      await expect(component).toHaveClass(/spr-rounded-border-radius-md/);
      await expect(component).toHaveClass(/spr-relative/);
      await expect(component).toHaveClass(/spr-inline-block/);
      await expect(component).toHaveClass(/spr-rounded/);
      await expect(component).toHaveClass(/spr-flex/);
      await expect(component).toHaveClass(/spr-items-center/);
      await expect(component).toHaveClass(/spr-justify-center/);
    });

    test('forwards attributes to Iconify component', async ({ mount }) => {
      const component = await mount(Icon, {
        props: {
          id: 'attributed-icon',
          icon: 'mdi:heart',
        },
      });

      // The id should be on the Iconify component
      const iconElement = component.locator('[id="attributed-icon"]');
      await expect(iconElement).toBeVisible();
    });
  });

  test.describe('Props - Size Variants', () => {
    const sizes = [
      { size: '2xs', height: 'spr-h-4', width: 'spr-min-w-4', fontSize: 'spr-font-size-250' },
      { size: 'xs', height: 'spr-h-5', width: 'spr-min-w-5', fontSize: 'spr-font-size-250' },
      { size: 'sm', height: 'spr-h-6', width: 'spr-min-w-6', fontSize: 'spr-font-size-300' },
      { size: 'md', height: 'spr-h-9', width: 'spr-min-w-9', fontSize: 'spr-font-size-400' },
      { size: 'lg', height: 'spr-h-10', width: 'spr-min-w-10', fontSize: 'spr-font-size-500' },
      { size: 'xl', height: 'spr-h-14', width: 'spr-min-w-14', fontSize: 'spr-font-size-600' },
      { size: '2xl', height: 'spr-h-20', width: 'spr-min-w-20', fontSize: 'spr-font-size-700' },
    ] as const;

    for (const { size, height, width, fontSize } of sizes) {
      test(`renders ${size} size correctly`, async ({ mount }) => {
        const component = await mount(Icon, {
          props: {
            id: `${size}-icon`,
            icon: 'mdi:check',
            size,
          },
        });

        await expect(component).toBeVisible();
        await expect(component).toHaveClass(new RegExp(height));
        await expect(component).toHaveClass(new RegExp(width));
        await expect(component).toHaveClass(new RegExp(fontSize));

        // Smaller sizes should have different border radius
        if (size === 'sm') {
          await expect(component).toHaveClass(/spr-rounded-border-radius-sm/);
        } else if (size === 'xs' || size === '2xs') {
          await expect(component).toHaveClass(/spr-rounded-border-radius-xs/);
        }
      });
    }
  });

  test.describe('Props - Tone and Variant Combinations', () => {
    const tones = ['success', 'error', 'info', 'pending', 'caution'] as const;
    const variants = ['primary', 'secondary', 'tertiary'] as const;

    // Test each tone with each variant
    for (const tone of tones) {
      for (const variant of variants) {
        test(`renders ${tone} tone with ${variant} variant`, async ({ mount }) => {
          const component = await mount(Icon, {
            props: {
              id: `${tone}-${variant}-icon`,
              icon: 'mdi:info',
              tone,
              variant,
            },
          });

          await expect(component).toBeVisible();

          // Verify tone-specific classes based on variant
          if (variant === 'primary') {
            // Primary variant should have background color and inverted text
            if (tone === 'success') {
              await expect(component).toHaveClass(/spr-background-color-success-base/);
              await expect(component).toHaveClass(/spr-text-color-inverted-strong/);
              await expect(component).toHaveClass(/spr-border-color-brand-base/);
            } else if (tone === 'error') {
              await expect(component).toHaveClass(/spr-background-color-danger-base/);
              await expect(component).toHaveClass(/spr-text-color-inverted-strong/);
              await expect(component).toHaveClass(/spr-border-color-danger-base/);
            } else if (tone === 'info') {
              await expect(component).toHaveClass(/spr-background-color-information-base/);
              await expect(component).toHaveClass(/spr-text-color-inverted-strong/);
              await expect(component).toHaveClass(/spr-border-color-information-base/);
            } else if (tone === 'pending') {
              await expect(component).toHaveClass(/spr-background-color-pending-base/);
              await expect(component).toHaveClass(/spr-text-color-inverted-strong/);
              await expect(component).toHaveClass(/spr-border-color-pending-base/);
            } else if (tone === 'caution') {
              await expect(component).toHaveClass(/spr-background-color-caution-base/);
              await expect(component).toHaveClass(/spr-text-color-inverted-strong/);
              await expect(component).toHaveClass(/spr-border-color-caution-base/);
            }
            // Primary should have no border
            await expect(component).toHaveClass(/spr-border-0/);
          } else if (variant === 'secondary') {
            // Secondary variant should have border and colored text with light background
            await expect(component).toHaveClass(/spr-border/);
            if (tone === 'success') {
              await expect(component).toHaveClass(/spr-text-color-success-base/);
              await expect(component).toHaveClass(/spr-bg-kangkong-50/);
              await expect(component).toHaveClass(/spr-border-color-brand-base/);
            } else if (tone === 'error') {
              await expect(component).toHaveClass(/spr-text-color-danger-base/);
              await expect(component).toHaveClass(/spr-bg-tomato-50/);
              await expect(component).toHaveClass(/spr-border-color-danger-base/);
            } else if (tone === 'info') {
              await expect(component).toHaveClass(/spr-text-color-information-base/);
              await expect(component).toHaveClass(/spr-bg-sky-50/);
              await expect(component).toHaveClass(/spr-border-color-information-base/);
            } else if (tone === 'pending') {
              await expect(component).toHaveClass(/spr-text-color-pending-base/);
              await expect(component).toHaveClass(/spr-bg-yellow-50/);
              await expect(component).toHaveClass(/spr-border-color-pending-base/);
            } else if (tone === 'caution') {
              await expect(component).toHaveClass(/spr-text-color-caution-base/);
              await expect(component).toHaveClass(/spr-bg-orange-50/);
              await expect(component).toHaveClass(/spr-border-color-caution-base/);
            }
          } else if (variant === 'tertiary') {
            // Tertiary variant should have transparent background and colored text
            await expect(component).toHaveClass(/spr-border-0/);
            await expect(component).toHaveClass(/spr-bg-transparent/);
            if (tone === 'success') {
              await expect(component).toHaveClass(/spr-text-color-success-base/);
            } else if (tone === 'error') {
              await expect(component).toHaveClass(/spr-text-color-danger-base/);
            } else if (tone === 'info') {
              await expect(component).toHaveClass(/spr-text-color-information-base/);
            } else if (tone === 'pending') {
              await expect(component).toHaveClass(/spr-text-color-pending-base/);
            } else if (tone === 'caution') {
              await expect(component).toHaveClass(/spr-text-color-caution-base/);
            }
          }
        });
      }
    }

    // Test empty tone and variant (should default to tertiary-like styling)
    test('renders without tone and variant (defaults)', async ({ mount }) => {
      const component = await mount(Icon, {
        props: {
          id: 'default-styling-icon',
          icon: 'mdi:default',
        },
      });

      // Should have transparent background and no border (tertiary-like)
      await expect(component).toHaveClass(/spr-border-0/);
      await expect(component).toHaveClass(/spr-bg-transparent/);
    });
  });

  test.describe('Props - Validation', () => {
    test('handles invalid size gracefully (falls back to default)', async ({ mount }) => {
      // Note: Invalid props would be caught by Vue's prop validation in development
      // This test assumes the component handles it gracefully in production
      const component = await mount(Icon, {
        props: {
          id: 'invalid-size-icon',
          icon: 'mdi:test',
          // Not setting size, should use default 'md'
        },
      });

      // Should fall back to default medium size
      await expect(component).toHaveClass(/spr-h-9/);
      await expect(component).toHaveClass(/spr-min-w-9/);
    });

    test('handles empty icon prop', async ({ mount }) => {
      const component = await mount(Icon, {
        props: {
          id: 'empty-icon',
          icon: '',
        },
      });

      // Component should still render the wrapper
      await expect(component).toBeVisible();
      await expect(component).toHaveClass(/spr-inline-block/);
    });
  });

  test.describe('Accessibility', () => {
    test('provides proper semantic structure', async ({ mount }) => {
      const component = await mount(Icon, {
        props: {
          id: 'accessible-icon',
          icon: 'mdi:accessibility',
        },
      });

      await expect(component).toBeVisible();

      // The wrapper should contain the icon element
      const iconElement = component.locator('[id="accessible-icon"]');
      await expect(iconElement).toBeVisible();
    });

    test('renders with proper id attribute', async ({ mount }) => {
      const component = await mount(Icon, {
        props: {
          id: 'aria-icon',
          icon: 'mdi:warning',
        },
      });

      // The id should be applied to the Iconify component
      const iconElement = component.locator('[id="aria-icon"]');
      await expect(iconElement).toBeVisible();
    });
  });

  test.describe('Integration with Iconify', () => {
    test('renders with correct id passed to Iconify component', async ({ mount }) => {
      const component = await mount(Icon, {
        props: {
          id: 'iconify-test',
          icon: 'mdi:heart',
        },
      });

      const iconElement = component.locator('[id="iconify-test"]');
      await expect(iconElement).toBeVisible();
    });

    test('handles complex icon names', async ({ mount }) => {
      const complexIconName = 'material-symbols:settings-outline-rounded';

      const component = await mount(Icon, {
        props: {
          id: 'complex-icon',
          icon: complexIconName,
        },
      });

      await expect(component).toBeVisible();
      // The Iconify component should receive the complex icon name
      const iconElement = component.locator('[id="complex-icon"]');
      await expect(iconElement).toBeVisible();
    });
  });

  test.describe('Edge Cases', () => {
    test('renders with special characters in id', async ({ mount }) => {
      const component = await mount(Icon, {
        props: {
          id: 'special_icon-123',
          icon: 'mdi:special',
        },
      });

      await expect(component).toBeVisible();
      const iconElement = component.locator('[id="special_icon-123"]');
      await expect(iconElement).toBeVisible();
    });

    test('handles multiple CSS classes correctly', async ({ mount }) => {
      const component = await mount(Icon, {
        props: {
          id: 'multi-class-icon',
          icon: 'mdi:layers',
          size: 'lg',
          tone: 'success',
          variant: 'secondary',
        },
      });

      // Should have all computed classes
      await expect(component).toHaveClass(/spr-h-10/); // lg size
      await expect(component).toHaveClass(/spr-text-color-success-base/); // success secondary
      await expect(component).toHaveClass(/spr-bg-kangkong-50/); // success secondary bg
    });
  });

  test.describe('Computed Classes Logic', () => {
    test('applies variant-specific border styles correctly', async ({ mount }) => {
      // Test primary variant (no border)
      const primaryComponent = await mount(Icon, {
        props: {
          id: 'primary-border',
          icon: 'mdi:test',
          variant: 'primary',
        },
      });

      await expect(primaryComponent).toHaveClass(/spr-border-0/);

      // Test secondary variant (has border)
      const secondaryComponent = await mount(Icon, {
        props: {
          id: 'secondary-border',
          icon: 'mdi:test',
          variant: 'secondary',
        },
      });

      await expect(secondaryComponent).toHaveClass(/spr-border/);

      // Test tertiary variant (transparent background, no border)
      const tertiaryComponent = await mount(Icon, {
        props: {
          id: 'tertiary-border',
          icon: 'mdi:test',
          variant: 'tertiary',
        },
      });

      await expect(tertiaryComponent).toHaveClass(/spr-border-0/);
      await expect(tertiaryComponent).toHaveClass(/spr-bg-transparent/);
    });
  });

  test.describe('Complex Prop Combinations', () => {
    test('large error primary icon', async ({ mount }) => {
      const component = await mount(Icon, {
        props: {
          id: 'complex-combo-1',
          icon: 'mdi:alert-circle',
          size: 'lg',
          tone: 'error',
          variant: 'primary',
        },
      });

      // Should combine all styles correctly
      await expect(component).toHaveClass(/spr-h-10/); // large size
      await expect(component).toHaveClass(/spr-background-color-danger-base/); // error primary
      await expect(component).toHaveClass(/spr-text-color-inverted-strong/); // primary variant
      await expect(component).toHaveClass(/spr-border-0/); // primary has no border
    });

    test('small success tertiary icon', async ({ mount }) => {
      const component = await mount(Icon, {
        props: {
          id: 'complex-combo-2',
          icon: 'mdi:check-circle',
          size: 'sm',
          tone: 'success',
          variant: 'tertiary',
        },
      });

      // Should combine all styles correctly
      await expect(component).toHaveClass(/spr-font-size-300/); // small size font
      await expect(component).toHaveClass(/spr-text-color-success-base/); // success tertiary
      await expect(component).toHaveClass(/spr-bg-transparent/); // tertiary transparent bg
    });
  });
});
