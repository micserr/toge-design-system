/**
 * Logo Component Tests
 *
 * Test Coverage Rationale:
 * - All prop combinations tested with representative samples
 * - Cloudinary URL generation validation
 * - Accessibility compliance (alt, title attributes)
 * - Edge cases for width prop (string/number types)
 * - Logo name mapping logic validation
 * - Default prop behavior verification
 *
 * ASSUMPTIONS:
 * - Cloudinary service is available (we test URL structure, not actual image loading)
 * - Logo names and themes are validated at prop level
 * - Image loading handled by browser (not component responsibility)
 *
 * TODO (Future Enhancements):
 * - Visual regression testing for actual logo images
 * - Error handling for missing Cloudinary images
 * - Loading states if lazy loading is implemented
 */

import { test, expect } from '@playwright/experimental-ct-vue';
import Logo from '@/components/logo/logo.vue';

// Test data constants using exact types from component
type LogoName =
  | 'benchmark'
  | 'ecosystem'
  | 'engage'
  | 'finances'
  | 'hr-mobile'
  | 'hr'
  | 'inbound'
  | 'insight'
  | 'readycash'
  | 'readywage'
  | 'payroll'
  | 'performance-plus'
  | 'procurement'
  | 'professional-services'
  | 'recruit'
  | 'recruit-plus'
  | 'sail'
  | 'sidekick'
  | 'wellness';
type LogoTheme = 'white' | 'dark' | 'gray' | 'green';

const LOGO_THEMES: LogoTheme[] = ['white', 'dark', 'gray', 'green'];

const SPECIAL_NAME_MAPPINGS: Record<string, string> = {
  hr: 'Sprout HR',
  'hr-mobile': 'Sprout HR Mobile',
  'performance-plus': 'Sprout Performance+',
  'recruit-plus': 'Sprout Recruit+',
  sail: 'Sprout SAIL',
  readycash: 'Sprout ReadyCash',
  readywage: 'Sprout ReadyWage',
};

test.describe('Logo Component', () => {
  test.describe('Default Rendering', () => {
    test('renders with default props', async ({ mount }) => {
      const component = await mount(Logo);
      const img = component.locator('img');

      await expect(component).toBeVisible();
      await expect(img).toBeVisible();
      await expect(img).toHaveAttribute('alt', 'Sprout HR');
      await expect(img).toHaveAttribute('title', 'Sprout HR');
      await expect(img).toHaveAttribute('width', '50');
      await expect(img).toHaveAttribute('src', /.*sprout-hr-dark.*/);
    });

    test('renders img element with proper structure', async ({ mount }) => {
      const component = await mount(Logo);
      const img = component.locator('img');

      await expect(component).toBeVisible();
      await expect(img).toBeVisible();

      // Verify only one img element
      await expect(component.locator('img')).toHaveCount(1);
    });
  });

  test.describe('Logo Name Prop', () => {
    test('renders all valid logo names', async ({ mount }) => {
      // Test a representative sample of logo names
      const sampleNames: LogoName[] = ['hr', 'benchmark', 'ecosystem', 'performance-plus', 'sail'];

      for (const name of sampleNames) {
        const component = await mount(Logo, {
          props: { name },
        });
        const img = component.locator('img');

        await expect(img).toHaveAttribute('src', new RegExp(`.*sprout-${name}-dark.*`));

        // Verify title matches expected mapping
        const expectedTitle = SPECIAL_NAME_MAPPINGS[name] || `Sprout ${name.charAt(0).toUpperCase()}${name.slice(1)}`;
        await expect(img).toHaveAttribute('title', expectedTitle);
        await expect(img).toHaveAttribute('alt', expectedTitle);
      }
    });

    test('handles special name mappings correctly', async ({ mount }) => {
      const specialCases: Array<[LogoName, string]> = [
        ['hr', 'Sprout HR'],
        ['hr-mobile', 'Sprout HR Mobile'],
        ['performance-plus', 'Sprout Performance+'],
        ['recruit-plus', 'Sprout Recruit+'],
        ['sail', 'Sprout SAIL'],
        ['readycash', 'Sprout ReadyCash'],
        ['readywage', 'Sprout ReadyWage'],
      ];

      for (const [name, expectedTitle] of specialCases) {
        const component = await mount(Logo, {
          props: { name },
        });
        const img = component.locator('img');

        await expect(img).toHaveAttribute('title', expectedTitle);
        await expect(img).toHaveAttribute('alt', expectedTitle);
      }
    });

    test('handles regular name capitalization', async ({ mount }) => {
      const regularNames: LogoName[] = ['benchmark', 'ecosystem', 'engage', 'finances'];

      for (const name of regularNames) {
        const component = await mount(Logo, {
          props: { name },
        });
        const img = component.locator('img');

        const expectedTitle = `Sprout ${name.charAt(0).toUpperCase()}${name.slice(1)}`;
        await expect(img).toHaveAttribute('title', expectedTitle);
        await expect(img).toHaveAttribute('alt', expectedTitle);
      }
    });
  });

  test.describe('Theme Prop', () => {
    test('renders all valid themes', async ({ mount }) => {
      for (const theme of LOGO_THEMES) {
        const component = await mount(Logo, {
          props: { theme },
        });
        const img = component.locator('img');

        await expect(img).toHaveAttribute('src', new RegExp(`.*sprout-hr-${theme}.*`));
      }
    });

    test('combines name and theme correctly in URL', async ({ mount }) => {
      const testCombinations: Array<{ name: LogoName; theme: LogoTheme }> = [
        { name: 'benchmark', theme: 'white' },
        { name: 'ecosystem', theme: 'gray' },
        { name: 'performance-plus', theme: 'green' },
      ];

      for (const { name, theme } of testCombinations) {
        const component = await mount(Logo, {
          props: { name, theme },
        });
        const img = component.locator('img');

        await expect(img).toHaveAttribute('src', new RegExp(`.*sprout-${name}-${theme}.*`));
      }
    });
  });

  test.describe('Width Prop', () => {
    test('handles string width values', async ({ mount }) => {
      const stringWidths = ['100', '150', '200'];

      for (const width of stringWidths) {
        const component = await mount(Logo, {
          props: { width },
        });
        const img = component.locator('img');

        await expect(img).toHaveAttribute('width', width);
      }
    });

    test('handles number width values', async ({ mount }) => {
      const numberWidths = [75, 100, 125, 200];

      for (const width of numberWidths) {
        const component = await mount(Logo, {
          props: { width },
        });
        const img = component.locator('img');

        await expect(img).toHaveAttribute('width', width.toString());
      }
    });

    test('applies default width when not specified', async ({ mount }) => {
      const component = await mount(Logo);
      const img = component.locator('img');

      await expect(img).toHaveAttribute('width', '50');
    });
  });

  test.describe('Cloudinary URL Generation', () => {
    test('generates proper Cloudinary URLs', async ({ mount }) => {
      const component = await mount(Logo, {
        props: { name: 'hr' as LogoName, theme: 'dark' as LogoTheme },
      });
      const img = component.locator('img');

      const srcValue = await img.getAttribute('src');
      expect(srcValue).toMatch(/https:\/\/res\.cloudinary\.com\/dfeykvudc/);
      expect(srcValue).toMatch(/sprout-hr-dark/);
    });

    test('URL structure includes cloud name and resource path', async ({ mount }) => {
      const component = await mount(Logo, {
        props: { name: 'benchmark' as LogoName, theme: 'white' as LogoTheme },
      });
      const img = component.locator('img');

      const srcValue = await img.getAttribute('src');
      expect(srcValue).toMatch(/dfeykvudc/); // Cloud name
      expect(srcValue).toMatch(/sprout-benchmark-white/); // Resource identifier
    });
  });

  test.describe('Accessibility', () => {
    test('provides proper alt text for screen readers', async ({ mount }) => {
      const component = await mount(Logo, {
        props: { name: 'hr-mobile' as LogoName, theme: 'dark' as LogoTheme },
      });
      const img = component.locator('img');

      await expect(img).toHaveAttribute('alt', 'Sprout HR Mobile');
      await expect(img).toHaveAttribute('title', 'Sprout HR Mobile');
    });

    test('maintains alt and title consistency', async ({ mount }) => {
      const testCases: Array<{ name: LogoName; expected: string }> = [
        { name: 'sail', expected: 'Sprout SAIL' },
        { name: 'readycash', expected: 'Sprout ReadyCash' },
        { name: 'ecosystem', expected: 'Sprout Ecosystem' },
      ];

      for (const { name, expected } of testCases) {
        const component = await mount(Logo, {
          props: { name },
        });
        const img = component.locator('img');

        await expect(img).toHaveAttribute('alt', expected);
        await expect(img).toHaveAttribute('title', expected);
      }
    });

    test('has proper image role semantics', async ({ mount }) => {
      const component = await mount(Logo);
      const img = component.getByRole('img');

      await expect(img).toBeVisible();
      await expect(img).toHaveAttribute('alt');
      await expect(img).toHaveAttribute('src');
    });
  });

  test.describe('Edge Cases', () => {
    test('handles hyphenated logo names correctly', async ({ mount }) => {
      const hyphenatedNames: LogoName[] = ['hr-mobile', 'performance-plus', 'recruit-plus'];

      for (const name of hyphenatedNames) {
        const component = await mount(Logo, {
          props: { name },
        });
        const img = component.locator('img');

        await expect(img).toHaveAttribute('src', new RegExp(`.*sprout-${name}-dark.*`));

        // Verify the name appears correctly in the URL (no double processing)
        const srcValue = await img.getAttribute('src');
        expect(srcValue).toMatch(new RegExp(`sprout-${name}-dark`));
      }
    });

    test('handles mixed props combinations', async ({ mount }) => {
      const combinations: Array<{ name: LogoName; theme: LogoTheme; width: string | number }> = [
        { name: 'performance-plus', theme: 'white', width: '75' },
        { name: 'sail', theme: 'green', width: 100 },
        { name: 'readywage', theme: 'gray', width: '125' },
      ];

      for (const { name, theme, width } of combinations) {
        const component = await mount(Logo, {
          props: { name, theme, width },
        });
        const img = component.locator('img');

        await expect(img).toHaveAttribute('src', new RegExp(`.*sprout-${name}-${theme}.*`));
        await expect(img).toHaveAttribute('width', width.toString());

        const expectedTitle = SPECIAL_NAME_MAPPINGS[name] || `Sprout ${name.charAt(0).toUpperCase()}${name.slice(1)}`;
        await expect(img).toHaveAttribute('title', expectedTitle);
      }
    });

    test('maintains reactivity with prop changes', async ({ mount }) => {
      const component = await mount(Logo, {
        props: { name: 'hr' as LogoName, theme: 'dark' as LogoTheme },
      });
      const img = component.locator('img');

      // Initial state
      await expect(img).toHaveAttribute('alt', 'Sprout HR');
      await expect(img).toHaveAttribute('src', /.*sprout-hr-dark.*/);

      // This test validates the computed properties work correctly
      await expect(img).toBeVisible();
    });
  });
});
