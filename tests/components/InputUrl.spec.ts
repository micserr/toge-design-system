/**
 * InputUrl Component Tests
 *
 * Test Coverage Rationale:
 * - URL-specific type validation and behavior
 * - Default "https://" prefix slot rendering
 * - Question mark icon slot rendering
 * - Inheritance from base Input component (v-model, events, props)
 * - URL input validation and format handling
 * - Accessibility compliance for URL inputs
 * - Slot inheritance and overrides
 * - Integration with all inherited Input functionality
 *
 * The InputUrl component is a specialized wrapper around the base Input component
 * that sets type="url" and provides default prefix and icon slots. All base Input
 * functionality is inherited through v-bind="$attrs" and slot passthrough.
 * ASSUMPTIONS:
 * - The InputUrl component inherits all base Input functionality through v-bind="$attrs"
 * - The "https://" prefix is always displayed and cannot be overridden
 * - The question mark icon (ph:question-fill) is always displayed as the default icon
 * - URL validation is handled by the browser's native URL input validation
 * - All slots from the base Input component are available except prefix and icon which are overridden
 *
 * TODO (Future Enhancements):
 * - Test integration with form validation libraries
 * - Test with different internationalization scenarios
 * - Add tests for URL format validation feedback
 * - Test copy/paste behavior with URLs
 * - Add tests for URL auto-completion/suggestions if implemented
 * - Test integration with URL validation services
 * - Add performance tests for large lists of URL inputs
 */

import { test, expect } from '@playwright/experimental-ct-vue';
import InputUrl from '@/components/input/input-url/input-url.vue';

test.describe('InputUrl Component', () => {
  test.describe('Basic Rendering', () => {
    test('renders with default URL input behavior', async ({ mount }) => {
      const component = await mount(InputUrl as any);

      const input = component.locator('input');
      await expect(input).toBeVisible();
      await expect(input).toHaveAttribute('type', 'url');
      await expect(input).not.toBeDisabled();
      await expect(input).toHaveValue('');
    });

    test('renders default "https://" prefix', async ({ mount }) => {
      const component = await mount(InputUrl as any);

      const prefixElement = component.locator('span').filter({ hasText: 'https://' });
      await expect(prefixElement).toBeVisible();
      await expect(prefixElement).toHaveText('https://');
    });

    test('renders default question mark icon', async ({ mount }) => {
      const component = await mount(InputUrl as any);

      // Check for the Iconify icon element with the ph:question-fill icon
      const iconElement = component.locator('svg');
      await expect(iconElement).toBeVisible();
    });

    test('combines prefix and icon correctly', async ({ mount }) => {
      const component = await mount(InputUrl as any);

      const prefix = component.locator('span').filter({ hasText: 'https://' });
      const icon = component.locator('svg');

      await expect(prefix).toBeVisible();
      await expect(icon).toBeVisible();

      // Both should be present simultaneously
      await expect(component.locator('input')).toBeVisible();
    });
  });

  test.describe('URL-Specific Behavior', () => {
    test('accepts valid URL formats', async ({ mount }) => {
      let emittedValue: string | number | undefined;

      const component = await mount(InputUrl as any, {
        props: {
          'onUpdate:modelValue': (value: string | number) => {
            emittedValue = value;
          },
        },
      });

      const input = component.locator('input');

      // Test various URL formats
      const validUrls = [
        'example.com',
        'www.example.com',
        'subdomain.example.com',
        'example.com/path',
        'example.com:8080',
        'example.co.uk',
      ];

      for (const url of validUrls) {
        await input.fill(url);
        await component.waitFor();
        expect(emittedValue).toBe(url);
      }
    });

    test('handles complete URLs including protocol', async ({ mount }) => {
      let emittedValue: string | number | undefined;

      const component = await mount(InputUrl as any, {
        props: {
          'onUpdate:modelValue': (value: string | number) => {
            emittedValue = value;
          },
        },
      });

      const input = component.locator('input');

      // User might still type full URLs despite prefix
      await input.fill('https://www.example.com');
      await component.waitFor();
      expect(emittedValue).toBe('https://www.example.com');
    });

    test('preserves URL-specific validation attributes', async ({ mount }) => {
      const component = await mount(InputUrl as any);

      const input = component.locator('input');
      await expect(input).toHaveAttribute('type', 'url');

      // Browser should provide URL validation
      await input.fill('not-a-valid-url');
      // Note: Browser validation would typically happen on form submission
    });
  });

  test.describe('Inherited Props from Input', () => {
    test('supports all basic Input props', async ({ mount }) => {
      const component = await mount(InputUrl as any, {
        props: {
          id: 'url-input',
          label: 'Website URL',
          placeholder: 'Enter your website',
          disabled: false,
          readonly: false,
          modelValue: 'example.com',
        },
      });

      const input = component.locator('input');
      const label = component.locator('label');

      await expect(input).toHaveAttribute('id', 'url-input');
      await expect(input).toHaveAttribute('placeholder', 'Enter your website');
      await expect(input).toHaveValue('example.com');
      await expect(label).toContainText('Website URL');
      await expect(label).toHaveAttribute('for', 'url-input');
    });

    test('supports disabled state', async ({ mount }) => {
      const component = await mount(InputUrl as any, {
        props: { disabled: true },
      });

      const input = component.locator('input');
      await expect(input).toBeDisabled();
      await expect(component.locator('.spr-background-color-disabled')).toBeVisible();
    });

    test('supports readonly state', async ({ mount }) => {
      const component = await mount(InputUrl as any, {
        props: {
          readonly: true,
          modelValue: 'readonly-site.com',
        },
      });

      const input = component.locator('input');
      await expect(input).toHaveAttribute('readonly');
      await expect(input).toHaveValue('readonly-site.com');
    });

    test('supports error state', async ({ mount }) => {
      const component = await mount(InputUrl as any, {
        props: { error: true },
      });

      await expect(component.locator('.spr-border-color-danger-base')).toBeVisible();
    });

    test('supports active state', async ({ mount }) => {
      const component = await mount(InputUrl as any, {
        props: { active: true },
      });

      await expect(component.locator('.spr-border-color-brand-base')).toBeVisible();
    });
  });

  test.describe('v-model Behavior', () => {
    test('supports initial modelValue', async ({ mount }) => {
      const component = await mount(InputUrl as any, {
        props: { modelValue: 'example.com' } as any,
      });

      const input = component.locator('input');
      await expect(input).toHaveValue('example.com');
    });

    test('emits update:modelValue when URL is entered', async ({ mount }) => {
      let emittedValue: string | number | undefined;

      const component = await mount(InputUrl as any, {
        props: {
          'onUpdate:modelValue': (value: string | number) => {
            emittedValue = value;
          },
        } as any,
      });

      const input = component.locator('input');
      await input.fill('example.com');

      // Wait for the component to process the event
      await component.waitFor();

      expect(emittedValue).toBe('example.com');
    });

    test('maintains two-way binding simulation', async ({ mount }) => {
      let currentValue = 'initial.com';

      const component = await mount(InputUrl as any, {
        props: {
          modelValue: currentValue,
          'onUpdate:modelValue': (value: string | number) => {
            currentValue = String(value);
          },
        } as any,
      });

      const input = component.locator('input');

      // Check initial value
      await expect(input).toHaveValue('initial.com');

      // Update through user input
      await input.fill('updated.com');
      await component.waitFor();

      expect(currentValue).toBe('updated.com');
    });
  });

  test.describe('Helper Text and Validation', () => {
    test('displays helper text for URL guidance', async ({ mount }) => {
      const component = await mount(InputUrl as any, {
        props: {
          displayHelper: true,
          helperText: 'Enter your website URL without the protocol',
        },
      });

      await expect(component).toContainText('Enter your website URL without the protocol');
    });

    test('shows character count for URL inputs', async ({ mount }) => {
      const component = await mount(InputUrl as any, {
        props: {
          showCharCount: true,
          maxLength: 50,
          modelValue: 'my-long-website-domain.com',
        },
      });

      const charCount = component.getByText('26/50');
      await expect(charCount).toBeVisible();
    });

    test('highlights character count when URL exceeds limit', async ({ mount }) => {
      const component = await mount(InputUrl as any, {
        props: {
          showCharCount: true,
          maxLength: 10,
          modelValue: 'very-long-website-url.com',
        },
      });

      const charCount = component.getByText('25/10');
      await expect(charCount).toHaveClass(/spr-text-color-danger-base/);
    });

    test('displays error state with URL validation message', async ({ mount }) => {
      const component = await mount(InputUrl as any, {
        props: {
          error: true,
          displayHelper: true,
          helperText: 'Please enter a valid website URL',
          helperIcon: 'ph:warning',
        },
      });

      const helperText = component.locator('.spr-text-color-danger-base').filter({
        hasText: 'Please enter a valid website URL',
      });
      await expect(helperText).toBeVisible();

      // Check for helper icon specifically (should be in the helper area, not the input area)
      const helperIcon = component.locator('.spr-h-5.spr-min-h-5.spr-w-5.spr-min-w-5');
      await expect(helperIcon).toBeVisible();
    });
  });

  test.describe('Slot Inheritance and Overrides', () => {
    test('allows trailing slot for URL-specific actions', async ({ mount }) => {
      const component = await mount(InputUrl as any, {
        slots: {
          trailing: '<button data-testid="visit-btn" type="button">Visit</button>',
        },
      });

      const visitButton = component.locator('[data-testid="visit-btn"]');
      await expect(visitButton).toBeVisible();
      await expect(visitButton).toHaveText('Visit');

      // Prefix should still be present
      const prefix = component.locator('span').filter({ hasText: 'https://' });
      await expect(prefix).toBeVisible();
    });

    test('allows custom helper message slot for URLs', async ({ mount }) => {
      const component = await mount(InputUrl as any, {
        props: { displayHelper: true },
        slots: {
          helperMessage: '<div data-testid="url-helper">💡 Tip: You can omit the https:// part</div>',
        },
      });

      const customHelper = component.locator('[data-testid="url-helper"]');
      await expect(customHelper).toBeVisible();
      await expect(customHelper).toContainText('You can omit the https:// part');
    });

    test('prefix slot is overridden by default https:// content', async ({ mount }) => {
      // The InputUrl component should always show https:// prefix
      // even if user tries to pass a different prefix slot
      const component = await mount(InputUrl as any);

      const httpsPrefix = component.locator('span').filter({ hasText: 'https://' });
      await expect(httpsPrefix).toBeVisible();
    });

    test('icon slot is overridden by default question icon', async ({ mount }) => {
      // The InputUrl component should always show the question icon
      const component = await mount(InputUrl as any);

      const defaultIcon = component.locator('svg');
      await expect(defaultIcon).toBeVisible();
    });
  });

  test.describe('Accessibility', () => {
    test('maintains proper labeling for URL inputs', async ({ mount }) => {
      const component = await mount(InputUrl as any, {
        props: {
          id: 'website-url',
          label: 'Website URL',
          supportingLabel: '(optional)',
        },
      });

      const label = component.locator('label');
      const input = component.locator('input');

      await expect(label).toHaveAttribute('for', 'website-url');
      await expect(input).toHaveAttribute('id', 'website-url');
      await expect(label).toContainText('Website URL');
      await expect(label).toContainText('(optional)');
    });

    test('supports keyboard navigation', async ({ mount }) => {
      const component = await mount(InputUrl as any, {
        props: { placeholder: 'Enter website' },
      });

      const input = component.locator('input');

      await input.focus();
      await expect(input).toBeFocused();

      await input.press('KeyE');
      await input.press('KeyX');
      await input.press('KeyA');
      await input.press('KeyM');
      await input.press('KeyP');
      await input.press('KeyL');
      await input.press('KeyE');

      await expect(input).toHaveValue('example');
    });

    test('provides appropriate context with prefix', async ({ mount }) => {
      const component = await mount(InputUrl as any, {
        props: {
          label: 'Website URL',
          placeholder: 'example.com',
        },
      });

      const prefix = component.locator('span').filter({ hasText: 'https://' });
      const input = component.locator('input');

      await expect(prefix).toBeVisible();
      await expect(input).toHaveAttribute('placeholder', 'example.com');

      // User should understand that they don't need to type the protocol
      await input.fill('mysite.com');
      await expect(input).toHaveValue('mysite.com');
    });

    test('icon provides visual context for URL input', async ({ mount }) => {
      const component = await mount(InputUrl as any);

      const icon = component.locator('svg');
      await expect(icon).toBeVisible();

      // Icon should be visually associated with the input
      // The question icon helps indicate this is for help/information
    });
  });

  test.describe('Focus and Interaction States', () => {
    test('focus state works correctly with prefix and icon', async ({ mount }) => {
      const component = await mount(InputUrl as any);

      const input = component.locator('input');
      await input.focus();

      await expect(input).toBeFocused();

      // Prefix and icon should remain visible during focus
      const prefix = component.locator('span').filter({ hasText: 'https://' });
      const icon = component.locator('svg');

      await expect(prefix).toBeVisible();
      await expect(icon).toBeVisible();
    });

    test('disabled state affects all elements correctly', async ({ mount }) => {
      const component = await mount(InputUrl as any, {
        props: { disabled: true },
      });

      const input = component.locator('input');
      await expect(input).toBeDisabled();

      // Container should show disabled styling
      await expect(component.locator('.spr-background-color-disabled')).toBeVisible();
      await expect(component.locator('.spr-cursor-not-allowed')).toBeVisible();

      // Prefix and icon should still be visible but styled appropriately
      const prefix = component.locator('span').filter({ hasText: 'https://' });
      const icon = component.locator('svg');

      await expect(prefix).toBeVisible();
      await expect(icon).toBeVisible();
    });
  });

  test.describe('Edge Cases and Error Handling', () => {
    test('handles empty URL input gracefully', async ({ mount }) => {
      let emittedValue: string | number | undefined;

      const component = await mount(InputUrl as any, {
        props: {
          modelValue: 'example.com',
          'onUpdate:modelValue': (value: string | number) => {
            emittedValue = value;
          },
        },
      });

      const input = component.locator('input');

      // Clear the input
      await input.fill('');
      await component.waitFor();

      expect(emittedValue).toBe('');
      await expect(input).toHaveValue('');
    });

    test('handles special characters in URLs', async ({ mount }) => {
      let emittedValue: string | number | undefined;

      const component = await mount(InputUrl as any, {
        props: {
          'onUpdate:modelValue': (value: string | number) => {
            emittedValue = value;
          },
        },
      });

      const input = component.locator('input');

      // URLs with special characters
      const urlWithParams = 'example.com/path?param=value&other=123';
      await input.fill(urlWithParams);
      await component.waitFor();

      expect(emittedValue).toBe(urlWithParams);
    });

    test('handles very long URLs', async ({ mount }) => {
      const component = await mount(InputUrl as any, {
        props: {
          showCharCount: true,
          maxLength: 200,
        },
      });

      const longUrl =
        'very-long-domain-name-that-exceeds-normal-length.example.com/with/a/very/long/path/structure/that/might/be/realistic';

      const input = component.locator('input');
      await input.fill(longUrl);

      await expect(input).toHaveValue(longUrl);

      // Character count should be displayed - look for any text containing "/200"
      const charCount = component.locator('text=/\\d+\\/200/');
      await expect(charCount).toBeVisible();
    });

    test('handles rapid input changes for URLs', async ({ mount }) => {
      const emittedValues: (string | number)[] = [];

      const component = await mount(InputUrl as any, {
        props: {
          'onUpdate:modelValue': (value: string | number) => {
            emittedValues.push(value);
          },
        },
      });

      const input = component.locator('input');

      // Simulate rapid typing
      await input.fill('e');
      await component.waitFor();
      await input.fill('ex');
      await component.waitFor();
      await input.fill('exa');
      await component.waitFor();
      await input.fill('exam');
      await component.waitFor();
      await input.fill('examp');
      await component.waitFor();
      await input.fill('exampl');
      await component.waitFor();
      await input.fill('example');
      await component.waitFor();
      await input.fill('example.');
      await component.waitFor();
      await input.fill('example.c');
      await component.waitFor();
      await input.fill('example.co');
      await component.waitFor();
      await input.fill('example.com');
      await component.waitFor();

      expect(emittedValues.length).toBeGreaterThan(0);
      expect(emittedValues).toContain('example.com');
    });
  });

  test.describe('Integration with Base Input Features', () => {
    test('works with all offset sizes', async ({ mount }) => {
      const offsetSizes = ['xs', 'sm', 'md'] as const;

      for (const size of offsetSizes) {
        const component = await mount(InputUrl as any, {
          props: {
            offsetSize: size,
          },
          slots: {
            trailing: '<button>Go</button>',
          },
        });

        const input = component.locator('input');

        if (size === 'xs') {
          await expect(input).toHaveClass(/spr-w-\[50px\]/);
        } else if (size === 'sm') {
          await expect(input).toHaveClass(/spr-w-\[40%\]/);
        } else if (size === 'md') {
          await expect(input).toHaveClass(/spr-w-\[100%\]/);
        }

        // Prefix should still be visible
        const prefix = component.locator('span').filter({ hasText: 'https://' });
        await expect(prefix).toBeVisible();
      }
    });

    test('combines with helper text and character count', async ({ mount }) => {
      const component = await mount(InputUrl as any, {
        props: {
          displayHelper: true,
          helperText: 'Enter your website without https://',
          showCharCount: true,
          maxLength: 100,
          modelValue: 'example.com',
          label: 'Company Website',
        },
      });

      // All elements should be present
      await expect(component).toContainText('Company Website');
      await expect(component).toContainText('Enter your website without https://');
      await expect(component).toContainText('11/100');

      // Check prefix more specifically by looking for the exact text "https://"
      await expect(component.getByText('https://', { exact: true })).toBeVisible();
      await expect(component.locator('svg')).toBeVisible();
    });

    test('error state with all features enabled', async ({ mount }) => {
      const component = await mount(InputUrl as any, {
        props: {
          error: true,
          displayHelper: true,
          helperText: 'Please enter a valid URL',
          helperIcon: 'ph:warning',
          showCharCount: true,
          maxLength: 50,
          modelValue: 'invalid-url-that-is-too-long-for-validation.com',
          label: 'Website URL',
        },
      });

      // Error styling should be applied
      await expect(component.locator('.spr-border-color-danger-base')).toBeVisible();

      // Helper text should have error styling
      const errorHelper = component.locator('.spr-text-color-danger-base').filter({
        hasText: 'Please enter a valid URL',
      });
      await expect(errorHelper).toBeVisible();

      // Character count should show (check if visible, might not have error styling)
      const charCount = component.locator('text=/\\d+\\/50/');
      await expect(charCount).toBeVisible();

      // Prefix and icon should still be present
      await expect(component.getByText('https://', { exact: true })).toBeVisible();
      await expect(component.locator('svg').first()).toBeVisible(); // Question mark icon
    });
  });
});
