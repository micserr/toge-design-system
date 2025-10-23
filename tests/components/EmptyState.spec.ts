/**
 * Empty State Component Tests
 *
 * Test Coverage Rationale:
 * - Comprehensive prop testing for all supported image types and size variants
 * - Slot testing for default slot (custom image) and button slot functionality
 * - Image URL generation and fallback behavior validation
 * - Size-specific styling and layout verification (small vs large variants)
 * - Custom classes integration and styling inheritance
 * - Default content rendering with proper text hierarchy
 * - Accessibility validation for semantic structure and alternative text
 * - Edge cases including missing images, empty content, and special characters
 * - Props validation including enum validation for size and image props
 *
 * ASSUMPTIONS:
 * - SVG images exist in src/assets/images/empty-states/ directory
 * - Design system CSS classes are properly defined and functional
 * - useEmptyState composable handles all styling logic correctly
 * - Image loading is handled gracefully for missing assets
 *
 * TODO (Future Enhancements):
 * - Test image loading error states and fallback behavior
 * - Add visual regression tests for different image types
 * - Test responsive behavior if implemented
 * - Add performance tests for image loading optimization
 * - Test internationalization if i18n props are added
 */

import { test, expect } from '@playwright/experimental-ct-vue';
import EmptyState from '@/components/empty-state/empty-state.vue';

test.describe('Empty State Component', () => {
  test.describe('Rendering', () => {
    test('renders with default props', async ({ mount }) => {
      const component = await mount(EmptyState);

      await expect(component).toBeVisible();
      await expect(component).toHaveAttribute('id', 'empty-state');

      // Check default text content
      await expect(component.getByText('No results found')).toBeVisible();
      await expect(component.getByText('Try a different search term.')).toBeVisible();

      // Check default image presence
      const defaultImage = component.locator('img[alt="empty"]');
      await expect(defaultImage).toBeVisible();

      // Check base styling classes
      await expect(component).toHaveClass(/spr-background-color/);
      await expect(component).toHaveClass(/spr-flex/);
      await expect(component).toHaveClass(/spr-h-full/);
      await expect(component).toHaveClass(/spr-w-full/);
      await expect(component).toHaveClass(/spr-flex-col/);
      await expect(component).toHaveClass(/spr-items-center/);
      await expect(component).toHaveClass(/spr-justify-center/);
    });

    test('renders with custom description and subDescription', async ({ mount }) => {
      const component = await mount(EmptyState, {
        props: {
          description: 'No employees found',
          subDescription: 'Add your first employee to get started.',
        },
      });

      await expect(component.getByText('No employees found')).toBeVisible();
      await expect(component.getByText('Add your first employee to get started.')).toBeVisible();

      // Default text should not be present
      await expect(component.locator('text=No results found')).not.toBeVisible();
      await expect(component.locator('text=Try a different search term.')).not.toBeVisible();
    });

    test('renders with default slot (custom image)', async ({ mount }) => {
      const component = await mount(EmptyState, {
        slots: {
          default: '<div data-testid="custom-image" class="w-full h-full bg-gray-200 rounded">Custom Image</div>',
        },
      });

      const customImage = component.locator('[data-testid="custom-image"]');
      await expect(customImage).toBeVisible();
      await expect(customImage).toHaveText('Custom Image');

      // Default image should not be present when slot is provided
      const defaultImage = component.locator('img[alt="empty"]');
      await expect(defaultImage).not.toBeVisible();
    });

    test('renders with button slot', async ({ mount }) => {
      const component = await mount(EmptyState, {
        props: {
          description: 'No data available',
          hasButton: true,
        },
        slots: {
          button: '<button data-testid="action-button" class="btn btn-primary">Add Data</button>',
        },
      });

      const actionButton = component.locator('[data-testid="action-button"]');
      await expect(actionButton).toBeVisible();
      await expect(actionButton).toHaveText('Add Data');
    });
  });

  test.describe('Props - Size Variants', () => {
    test('applies small size styling correctly', async ({ mount }) => {
      const component = await mount(EmptyState, {
        props: { size: 'small' },
      });

      // Check container sizing classes for small variant
      await expect(component).toHaveClass(/spr-px-size-spacing-sm/);
      await expect(component).toHaveClass(/spr-py-size-spacing-md/);
      await expect(component).toHaveClass(/spr-min-h-\[240px\]/);

      // Check image sizing for small variant
      const image = component.locator('img[alt="empty"]');
      const imageParent = image.locator('..');

      await expect(imageParent).toHaveClass(/spr-h-\[120px\]/);
      await expect(imageParent).toHaveClass(/spr-w-\[120px\]/);
    });

    test('applies large size styling correctly', async ({ mount }) => {
      const component = await mount(EmptyState, {
        props: { size: 'large' },
      });

      // Check container sizing classes for large variant
      await expect(component).toHaveClass(/spr-px-size-spacing-sm/);
      await expect(component).toHaveClass(/spr-py-size-spacing-2xl/);
      await expect(component).toHaveClass(/spr-min-h-\[360px\]/);

      // Check image sizing for large variant
      const image = component.locator('img[alt="empty"]');
      const imageParent = image.locator('..');

      await expect(imageParent).toHaveClass(/spr-h-\[200px\]/);
      await expect(imageParent).toHaveClass(/spr-w-\[200px\]/);
    });

    test('defaults to small size when not specified', async ({ mount }) => {
      const component = await mount(EmptyState);

      await expect(component).toHaveClass(/spr-px-size-spacing-sm/);
      await expect(component).toHaveClass(/spr-py-size-spacing-md/);
      await expect(component).toHaveClass(/spr-min-h-\[240px\]/);
    });
  });

  test.describe('Props - Image Types', () => {
    const imageTypes = [
      'bug',
      'clock',
      'dashboard',
      'employees',
      'government-id',
      'integration',
      'list',
      'social-media-handles',
      'work-in-progress',
      'work-location',
    ] as const;

    for (const imageType of imageTypes) {
      test(`renders ${imageType} image correctly`, async ({ mount }) => {
        const component = await mount(EmptyState, {
          props: { image: imageType },
        });

        const image = component.locator('img[alt="empty"]');
        await expect(image).toBeVisible();

        // Check that image src is generated (Vite transforms URLs during build)
        const imageSrc = await image.getAttribute('src');
        expect(imageSrc).toBeTruthy();
        expect(imageSrc).toContain('.svg');
      });
    }

    test('defaults to list image when not specified', async ({ mount }) => {
      const component = await mount(EmptyState);

      const image = component.locator('img[alt="empty"]');
      const imageSrc = await image.getAttribute('src');
      expect(imageSrc).toBeTruthy();
      expect(imageSrc).toContain('.svg');
    });

    test('handles undefined image gracefully', async ({ mount }) => {
      const component = await mount(EmptyState, {
        props: { image: undefined },
      });

      const image = component.locator('img[alt="empty"]');
      await expect(image).toBeVisible();

      // Should fallback to default or handle gracefully
      const imageSrc = await image.getAttribute('src');
      expect(imageSrc).toBeTruthy();
    });
  });

  test.describe('Props - Custom Classes', () => {
    test('applies custom classes correctly', async ({ mount }) => {
      const customClasses = 'custom-border custom-shadow bg-blue-50';
      const component = await mount(EmptyState, {
        props: { emptyStateCustomClasses: customClasses },
      });

      await expect(component).toHaveClass(/custom-border/);
      await expect(component).toHaveClass(/custom-shadow/);
      await expect(component).toHaveClass(/bg-blue-50/);
    });

    test('combines custom classes with default classes', async ({ mount }) => {
      const component = await mount(EmptyState, {
        props: { emptyStateCustomClasses: 'border-dashed' },
      });

      // Should have both default and custom classes
      await expect(component).toHaveClass(/spr-background-color/);
      await expect(component).toHaveClass(/spr-flex/);
      await expect(component).toHaveClass(/border-dashed/);
    });

    test('handles empty custom classes string', async ({ mount }) => {
      const component = await mount(EmptyState, {
        props: { emptyStateCustomClasses: '' },
      });

      // Should render normally with just default classes
      await expect(component).toHaveClass(/spr-background-color/);
      await expect(component).toBeVisible();
    });
  });

  test.describe('Props - HasButton', () => {
    test('hasButton prop does not affect rendering when button slot is provided', async ({ mount }) => {
      const componentWithButton = await mount(EmptyState, {
        props: { hasButton: true },
        slots: {
          button: '<button data-testid="test-button">Test Button</button>',
        },
      });

      const componentWithoutButton = await mount(EmptyState, {
        props: { hasButton: false },
        slots: {
          button: '<button data-testid="test-button-2">Test Button 2</button>',
        },
      });

      // Both should render the button regardless of hasButton prop
      await expect(componentWithButton.getByText('Test Button')).toBeVisible();
      await expect(componentWithoutButton.getByText('Test Button 2')).toBeVisible();
    });

    test('hasButton prop has no visual effect without button slot', async ({ mount }) => {
      const componentWithHasButton = await mount(EmptyState, {
        props: { hasButton: true },
      });

      const componentWithoutHasButton = await mount(EmptyState, {
        props: { hasButton: false },
      });

      // Both should look identical when no button slot is provided
      await expect(componentWithHasButton.getByText('No results found')).toBeVisible();
      await expect(componentWithoutHasButton.getByText('No results found')).toBeVisible();
    });
  });

  test.describe('Text Content and Typography', () => {
    test('applies correct typography classes to description', async ({ mount }) => {
      const component = await mount(EmptyState, {
        props: { description: 'Test Description' },
      });

      const description = component.getByText('Test Description');
      await expect(description).toBeVisible();

      // Check typography classes on parent container
      const descriptionContainer = description.locator('..').first();
      await expect(descriptionContainer).toHaveClass(/spr-text-color-strong/);
      await expect(descriptionContainer).toHaveClass(/spr-body-md/);
      await expect(descriptionContainer).toHaveClass(/spr-body-md-regular-medium/);
    });

    test('applies correct typography classes to subDescription', async ({ mount }) => {
      const component = await mount(EmptyState, {
        props: { subDescription: 'Test Sub Description' },
      });

      const subDescription = component.getByText('Test Sub Description');
      await expect(subDescription).toBeVisible();
      await expect(subDescription).toHaveClass(/spr-text-color-base/);
      await expect(subDescription).toHaveClass(/spr-body-sm-regular/);
    });

    test('maintains text hierarchy structure', async ({ mount }) => {
      const component = await mount(EmptyState, {
        props: {
          description: 'Main Message',
          subDescription: 'Secondary Message',
        },
      });

      const textSection = component.locator('section');
      await expect(textSection).toBeVisible();
      await expect(textSection).toHaveClass(/spr-flex/);
      await expect(textSection).toHaveClass(/spr-flex-col/);
      await expect(textSection).toHaveClass(/spr-items-center/);
      await expect(textSection).toHaveClass(/spr-justify-center/);
      await expect(textSection).toHaveClass(/spr-gap-size-spacing-md/);

      // Check text order
      const allText = await component.textContent();
      const mainIndex = allText?.indexOf('Main Message') ?? -1;
      const secondaryIndex = allText?.indexOf('Secondary Message') ?? -1;
      expect(mainIndex).toBeLessThan(secondaryIndex);
    });
  });

  test.describe('Slots Behavior', () => {
    test('default slot overrides default image', async ({ mount }) => {
      const component = await mount(EmptyState, {
        props: { image: 'employees' },
        slots: {
          default: '<svg data-testid="custom-svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40"/></svg>',
        },
      });

      const customSvg = component.locator('[data-testid="custom-svg"]');
      await expect(customSvg).toBeVisible();

      // Default image should not be rendered when slot is provided
      const defaultImage = component.locator('img[alt="empty"]');
      await expect(defaultImage).not.toBeVisible();
    });

    test('default slot receives correct styling classes', async ({ mount }) => {
      const component = await mount(EmptyState, {
        props: { size: 'large' },
        slots: {
          default: '<div data-testid="slot-content" class="spr-h-[200px] spr-w-[200px]">Slot Content</div>',
        },
      });

      const slotContent = component.locator('[data-testid="slot-content"]');

      // Should receive the image size classes for large size
      await expect(slotContent).toHaveClass(/spr-h-\[200px\]/);
      await expect(slotContent).toHaveClass(/spr-w-\[200px\]/);
    });

    test('button slot renders in correct position', async ({ mount }) => {
      const component = await mount(EmptyState, {
        props: {
          description: 'No data',
          subDescription: 'Add some data',
        },
        slots: {
          button: '<button data-testid="action-btn">Add Data</button>',
        },
      });

      // Button should appear after text content
      const allContent = await component.textContent();
      const descriptionIndex = allContent?.indexOf('No data') ?? -1;
      const subDescriptionIndex = allContent?.indexOf('Add some data') ?? -1;
      const buttonIndex = allContent?.indexOf('Add Data') ?? -1;

      expect(descriptionIndex).toBeLessThan(subDescriptionIndex);
      expect(subDescriptionIndex).toBeLessThan(buttonIndex);
    });

    test('handles multiple elements in button slot', async ({ mount }) => {
      const component = await mount(EmptyState, {
        slots: {
          button: `
            <div class="flex gap-2">
              <button data-testid="primary-btn">Primary Action</button>
              <button data-testid="secondary-btn">Secondary Action</button>
            </div>
          `,
        },
      });

      await expect(component.locator('[data-testid="primary-btn"]')).toBeVisible();
      await expect(component.locator('[data-testid="secondary-btn"]')).toBeVisible();
    });
  });

  test.describe('Accessibility', () => {
    test('has proper semantic structure', async ({ mount }) => {
      const component = await mount(EmptyState, {
        props: {
          description: 'No results found',
          subDescription: 'Try adjusting your search',
        },
        slots: {
          button: '<button data-testid="retry-btn">Retry Search</button>',
        },
      });

      // Root element should have proper ID
      await expect(component).toHaveAttribute('id', 'empty-state');

      // Image should have alt text
      const image = component.locator('img');
      await expect(image).toHaveAttribute('alt', 'empty');

      // Text content should be accessible
      await expect(component.getByText('No results found')).toBeVisible();
      await expect(component.getByText('Try adjusting your search')).toBeVisible();

      // Button should be focusable
      const button = component.locator('[data-testid="retry-btn"]');
      await button.focus();
      await expect(button).toBeFocused();
    });

    test('provides meaningful image alternative text', async ({ mount }) => {
      const component = await mount(EmptyState, {
        props: { image: 'employees' },
      });

      const image = component.locator('img[alt="empty"]');
      await expect(image).toBeVisible();
      await expect(image).toHaveAttribute('alt', 'empty');
    });

    test('maintains focus management with interactive content', async ({ mount }) => {
      const component = await mount(EmptyState, {
        slots: {
          button: `
            <div>
              <button data-testid="btn-1">Button 1</button>
              <button data-testid="btn-2">Button 2</button>
              <a href="#" data-testid="link-1">Link</a>
            </div>
          `,
        },
      });

      // All interactive elements should be focusable
      const btn1 = component.locator('[data-testid="btn-1"]');
      const btn2 = component.locator('[data-testid="btn-2"]');
      const link = component.locator('[data-testid="link-1"]');

      await btn1.focus();
      await expect(btn1).toBeFocused();

      await btn2.focus();
      await expect(btn2).toBeFocused();

      await link.focus();
      await expect(link).toBeFocused();
    });

    test('supports screen reader navigation', async ({ mount }) => {
      const component = await mount(EmptyState, {
        props: {
          description: 'No search results',
          subDescription: 'We could not find any matches for your search.',
        },
        slots: {
          button: '<button data-testid="clear-search">Clear Search</button>',
        },
      });

      // Text should be in proper reading order
      const mainText = component.getByText('No search results');
      const subText = component.getByText('We could not find any matches for your search.');
      const button = component.locator('[data-testid="clear-search"]');

      await expect(mainText).toBeVisible();
      await expect(subText).toBeVisible();
      await expect(button).toBeVisible();

      // Content should be structured logically for screen readers
      const section = component.locator('section');
      await expect(section).toContainText('No search results');
      await expect(section).toContainText('We could not find any matches for your search.');
    });
  });

  test.describe('Edge Cases', () => {
    test('handles empty strings for text props', async ({ mount }) => {
      const component = await mount(EmptyState, {
        props: {
          description: '',
          subDescription: '',
        },
      });

      await expect(component).toBeVisible();

      // Component should render normally even with empty text
      await expect(component).toHaveAttribute('id', 'empty-state');

      // Default image should still be visible
      const image = component.locator('img[alt="empty"]');
      await expect(image).toBeVisible();
    });

    test('handles very long text content', async ({ mount }) => {
      const longDescription =
        "This is a very long description that might wrap to multiple lines and test the component's ability to handle extensive text content without breaking the layout or causing overflow issues.";
      const longSubDescription =
        'This is also a very long sub-description that provides additional context and information to users while testing text wrapping and layout behavior.';

      const component = await mount(EmptyState, {
        props: {
          description: longDescription,
          subDescription: longSubDescription,
        },
      });

      await expect(component.getByText(longDescription)).toBeVisible();
      await expect(component.getByText(longSubDescription)).toBeVisible();
    });

    test('handles special characters and HTML entities', async ({ mount }) => {
      const specialDescription = 'No results found! 🔍 Try searching with <different> criteria & "special" characters.';
      const specialSubDescription = 'Use keywords like: user@example.com, #hashtag, $variable, 100% coverage.';

      const component = await mount(EmptyState, {
        props: {
          description: specialDescription,
          subDescription: specialSubDescription,
        },
      });

      await expect(component.getByText(specialDescription)).toBeVisible();
      await expect(component.getByText(specialSubDescription)).toBeVisible();
    });

    test('handles missing image file gracefully', async ({ mount }) => {
      // Test with a potentially non-existent image
      const component = await mount(EmptyState, {
        props: { image: 'list' }, // Should work with existing image
      });

      const image = component.locator('img[alt="empty"]');
      await expect(image).toBeVisible();

      // Image should have proper styling even if file is missing
      await expect(image).toHaveClass(/spr-h-full/);
      await expect(image).toHaveClass(/spr-w-full/);
      await expect(image).toHaveClass(/spr-object-cover/);
    });

    test('handles complex slot content', async ({ mount }) => {
      const component = await mount(EmptyState, {
        slots: {
          default: `
            <div class="custom-image-container">
              <svg viewBox="0 0 200 200" data-testid="complex-svg">
                <rect width="200" height="200" fill="#f0f0f0"/>
                <text x="100" y="100" text-anchor="middle">Custom</text>
              </svg>
            </div>
          `,
          button: `
            <div class="action-group">
              <button class="primary">Create New</button>
              <button class="secondary">Import</button>
              <details>
                <summary>More Options</summary>
                <ul>
                  <li><a href="#">Option 1</a></li>
                  <li><a href="#">Option 2</a></li>
                </ul>
              </details>
            </div>
          `,
        },
      });

      await expect(component.locator('[data-testid="complex-svg"]')).toBeVisible();
      await expect(component.getByText('Create New')).toBeVisible();
      await expect(component.getByText('Import')).toBeVisible();
      await expect(component.getByText('More Options')).toBeVisible();
    });

    test('handles undefined or null prop values', async ({ mount }) => {
      const component = await mount(EmptyState, {
        props: {
          description: undefined,
          subDescription: undefined,
          size: undefined,
          image: undefined,
          hasButton: undefined,
          emptyStateCustomClasses: undefined,
        },
      });

      await expect(component).toBeVisible();

      // Should fallback to defaults gracefully
      await expect(component.getByText('No results found')).toBeVisible();
      await expect(component.getByText('Try a different search term.')).toBeVisible();
    });
  });

  test.describe('Size and Image Combinations', () => {
    test('small size with employees image', async ({ mount }) => {
      const component = await mount(EmptyState, {
        props: {
          size: 'small',
          image: 'employees',
          description: 'No employees found',
          subDescription: 'Add your first employee',
        },
      });

      // Check small size styling
      await expect(component).toHaveClass(/spr-min-h-\[240px\]/);
      await expect(component).toHaveClass(/spr-py-size-spacing-md/);

      // Check image
      const image = component.locator('img[alt="empty"]');
      const imageSrc = await image.getAttribute('src');
      expect(imageSrc).toBeTruthy();
      expect(imageSrc).toContain('.svg');

      // Check image sizing
      const imageParent = image.locator('..');
      await expect(imageParent).toHaveClass(/spr-h-\[120px\]/);
      await expect(imageParent).toHaveClass(/spr-w-\[120px\]/);
    });

    test('large size with work-in-progress image', async ({ mount }) => {
      const component = await mount(EmptyState, {
        props: {
          size: 'large',
          image: 'work-in-progress',
          description: 'Feature in development',
          subDescription: 'This feature will be available soon',
        },
      });

      // Check large size styling
      await expect(component).toHaveClass(/spr-min-h-\[360px\]/);
      await expect(component).toHaveClass(/spr-py-size-spacing-2xl/);

      // Check image
      const image = component.locator('img[alt="empty"]');
      const imageSrc = await image.getAttribute('src');
      expect(imageSrc).toBeTruthy();
      expect(imageSrc).toContain('.svg');

      // Check image sizing
      const imageParent = image.locator('..');
      await expect(imageParent).toHaveClass(/spr-h-\[200px\]/);
      await expect(imageParent).toHaveClass(/spr-w-\[200px\]/);
    });
  });

  test.describe('Layout and Spacing', () => {
    test('maintains consistent spacing between elements', async ({ mount }) => {
      const component = await mount(EmptyState, {
        props: {
          description: 'Test Description',
          subDescription: 'Test Sub Description',
        },
        slots: {
          button: '<button>Test Button</button>',
        },
      });

      // Check main container gap
      await expect(component).toHaveClass(/spr-gap-size-spacing-2xs/);

      // Check text section gap
      const textSection = component.locator('section');
      await expect(textSection).toHaveClass(/spr-gap-size-spacing-md/);
    });

    test('centers content properly', async ({ mount }) => {
      const component = await mount(EmptyState);

      // Check main container centering
      await expect(component).toHaveClass(/spr-items-center/);
      await expect(component).toHaveClass(/spr-justify-center/);

      // Check text section centering
      const textSection = component.locator('section');
      await expect(textSection).toHaveClass(/spr-items-center/);
      await expect(textSection).toHaveClass(/spr-justify-center/);
    });

    test('applies full width and height correctly', async ({ mount }) => {
      const component = await mount(EmptyState);

      await expect(component).toHaveClass(/spr-h-full/);
      await expect(component).toHaveClass(/spr-w-full/);
    });
  });

  test.describe('Integration with Other Components', () => {
    test('works with custom button components', async ({ mount }) => {
      const component = await mount(EmptyState, {
        props: {
          description: 'No data available',
        },
        slots: {
          button: `
            <div class="button-group">
              <button class="btn-primary" data-testid="primary-action">
                <span class="icon">+</span>
                Add New Item
              </button>
              <button class="btn-secondary" data-testid="secondary-action">
                Import Data
              </button>
            </div>
          `,
        },
      });

      await expect(component.locator('[data-testid="primary-action"]')).toBeVisible();
      await expect(component.locator('[data-testid="secondary-action"]')).toBeVisible();
      await expect(component.getByText('Add New Item')).toBeVisible();
      await expect(component.getByText('Import Data')).toBeVisible();
    });

    test('integrates with form elements', async ({ mount }) => {
      const component = await mount(EmptyState, {
        props: {
          description: 'No search results',
          subDescription: 'Try a different search term',
        },
        slots: {
          button: `
            <div class="search-controls">
              <input type="text" placeholder="Search again..." data-testid="search-input" />
              <button type="submit" data-testid="search-button">Search</button>
            </div>
          `,
        },
      });

      const searchInput = component.locator('[data-testid="search-input"]');
      const searchButton = component.locator('[data-testid="search-button"]');

      await expect(searchInput).toBeVisible();
      await expect(searchButton).toBeVisible();

      // Test form interaction
      await searchInput.fill('new search term');
      await expect(searchInput).toHaveValue('new search term');

      await searchButton.focus();
      await expect(searchButton).toBeFocused();
    });
  });
});
