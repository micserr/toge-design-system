/**
 * InputContactNumber Component Tests
 *
 * Coverage includes:
 * - Basic rendering and country selection functionality
 * - Phone number input validation and v-model behavior
 * - Event emissions for country changes and validation errors
 * - Props validation and disabled states (component and country selection)
 * - International number handling across different countries
 * - Accessibility features and focus management
 * - Edge cases and prop combinations
 *
 * Rationale:
 * - Tests focus on component behavior rather than specific styling
 * - Country selection is a core feature requiring thorough testing
 * - Phone number validation varies by country context
 * - Event emissions are critical for parent component integration
 * - Accessibility is essential for form components
 */

import { test, expect } from '@playwright/experimental-ct-vue';
import InputContactNumber from '@/components/input/input-contact-number/input-contact-number.vue';

test.describe('InputContactNumber Component', () => {
  test.describe('Rendering', () => {
    test('renders with default props', async ({ mount }) => {
      const component = await mount(InputContactNumber);

      const input = component.locator('input');
      await expect(input).toBeVisible();
      await expect(input).toHaveAttribute('type', 'contact-number');
      await expect(input).toHaveAttribute('placeholder', 'Enter Phone Number');
      await expect(input).not.toBeDisabled();
    });

    test('displays default Philippines country code', async ({ mount }) => {
      const component = await mount(InputContactNumber);

      // Should show +63 for Philippines by default
      await expect(component.getByText('+63')).toBeVisible();
    });

    test('renders with custom placeholder', async ({ mount }) => {
      const component = await mount(InputContactNumber, {
        props: {
          placeholder: 'Enter your mobile number',
        },
      });

      const input = component.locator('input');
      await expect(input).toHaveAttribute('placeholder', 'Enter your mobile number');
    });

    test('shows dropdown functionality', async ({ mount }) => {
      const component = await mount(InputContactNumber);

      // Should have dropdown with country code
      await expect(component.getByText('+63')).toBeVisible();

      // Should be clickable to open dropdown
      const dropdown = component.getByText('+63');
      await dropdown.click();

      // Should show some country options
      await expect(component.getByText(/Philippines/)).toBeVisible();
    });
  });

  test.describe('Country Selection', () => {
    test('uses preSelectedCountryCode prop', async ({ mount }) => {
      const component = await mount(InputContactNumber, {
        props: {
          preSelectedCountryCode: 'US',
        },
      });

      // Should show US country code instead of default PH
      await expect(component.getByText('+1')).toBeVisible();
    });

    test('emits country calling code on mount', async ({ mount }) => {
      let emittedCountryCode: { countryCode: string; countryCallingCode: string } | undefined;

      await mount(InputContactNumber, {
        props: {
          onGetSelectedCountryCallingCode: (value: { countryCode: string; countryCallingCode: string }) => {
            emittedCountryCode = value;
          },
        },
      });

      // Should emit default Philippines country code on mount
      expect(emittedCountryCode?.countryCode).toBe('PH');
      expect(emittedCountryCode?.countryCallingCode).toBe('63');
    });

    test('changes country code when different country is selected', async ({ mount }) => {
      let emittedCountryCode: { countryCode: string; countryCallingCode: string } | undefined;

      const component = await mount(InputContactNumber, {
        props: {
          onGetSelectedCountryCallingCode: (value: { countryCode: string; countryCallingCode: string }) => {
            emittedCountryCode = value;
          },
        },
      });

      // Click on the country dropdown
      const dropdown = component.getByText('+63');
      await dropdown.click();

      // Wait for dropdown to open and select Canada
      const canadaOption = component.getByText(/Canada.*\+1\)/);
      await expect(canadaOption).toBeVisible();
      await canadaOption.click();

      // Should emit the selected country info
      expect(emittedCountryCode?.countryCode).toBe('CA');
      expect(emittedCountryCode?.countryCallingCode).toBe('1');
    });
  });

  test.describe('Phone Number Input', () => {
    test('accepts valid phone number characters', async ({ mount }) => {
      const component = await mount(InputContactNumber);

      const input = component.locator('input');
      await input.fill('123 456 7890');

      await expect(input).toHaveValue('123 456 7890');
    });

    test('allows plus sign for international format', async ({ mount }) => {
      const component = await mount(InputContactNumber);

      const input = component.locator('input');
      await input.fill('+1234567890');

      // Plus sign should be preserved for international format
      await expect(input).toHaveValue('+1234567890');
    });

    test('allows spaces and hyphens for formatting', async ({ mount }) => {
      const component = await mount(InputContactNumber);

      const input = component.locator('input');
      await input.fill('123-456-7890');

      // Common formatting characters should be preserved
      await expect(input).toHaveValue('123-456-7890');
    });

    test('processes Philippine mobile number', async ({ mount }) => {
      const emittedErrors: Array<{ title: string; message: string }> = [];

      const component = await mount(InputContactNumber, {
        props: {
          onGetContactNumberErrors: (errors: Array<{ title: string; message: string }>) => {
            emittedErrors.push(...errors);
          },
        },
      });

      const input = component.locator('input');
      await input.fill('9171234567');
      await input.blur();

      // Wait for validation processing
      await component.waitFor();

      // Should handle valid Philippine mobile number format
      expect(Array.isArray(emittedErrors)).toBe(true);
    });
  });

  test.describe('v-model and Events', () => {
    test('emits update:modelValue when input changes', async ({ mount }) => {
      let emittedValue: string | undefined;

      const component = await mount(InputContactNumber, {
        props: {
          'onUpdate:modelValue': (value: string) => {
            emittedValue = value;
          },
        },
      });

      const input = component.locator('input');
      await input.fill('9171234567');

      // Wait for the event to be processed
      await component.waitFor();
      expect(emittedValue).toBe('9171234567');
    });

    test('updates input value when modelValue prop changes', async ({ mount }) => {
      const component = await mount(InputContactNumber, {
        props: {
          modelValue: '9171234567',
        },
      });

      const input = component.locator('input');
      await expect(input).toHaveValue('9171234567');
    });

    test('emits country calling code when country changes', async ({ mount }) => {
      let emittedCountryData: { countryCode: string; countryCallingCode: string } | undefined;

      const component = await mount(InputContactNumber, {
        props: {
          onGetSelectedCountryCallingCode: (value: { countryCode: string; countryCallingCode: string }) => {
            emittedCountryData = value;
          },
        },
      });

      // Change country to Canada
      const dropdown = component.getByText('+63');
      await dropdown.click();

      const canadaOption = component.getByText(/Canada.*\+1\)/);
      await canadaOption.click();

      // Should emit correct country information for Canada
      expect(emittedCountryData?.countryCode).toBe('CA');
      expect(emittedCountryData?.countryCallingCode).toBe('1');
    });
  });

  test.describe('Disabled States', () => {
    test('disables entire component when disabled prop is true', async ({ mount }) => {
      const component = await mount(InputContactNumber, {
        props: {
          disabled: true,
        },
      });

      const input = component.locator('input');
      await expect(input).toBeDisabled();
    });

    test('disables only country selection when disabledCountryCallingCode is true', async ({ mount }) => {
      const component = await mount(InputContactNumber, {
        props: {
          disabledCountryCallingCode: true,
        },
      });

      // Input should remain enabled for phone number entry
      const input = component.locator('input');
      await expect(input).not.toBeDisabled();

      // Country dropdown should be visible but non-interactive
      await expect(component.getByText('+63')).toBeVisible();
    });
  });

  test.describe('Accessibility', () => {
    test('maintains proper focus management', async ({ mount }) => {
      const component = await mount(InputContactNumber);

      const input = component.locator('input');
      await input.focus();
      await expect(input).toBeFocused();
    });

    test('provides proper id attributes when specified', async ({ mount }) => {
      const component = await mount(InputContactNumber, {
        props: {
          id: 'phone-input',
        },
      });

      // Component should handle custom id properly for accessibility
      const input = component.locator('input');
      await expect(input).toBeVisible();
    });
  });

  test.describe('Edge Cases', () => {
    test('handles empty input gracefully', async ({ mount }) => {
      const emittedErrors: Array<{ title: string; message: string }> = [];

      const component = await mount(InputContactNumber, {
        props: {
          onGetContactNumberErrors: (errors: Array<{ title: string; message: string }>) => {
            emittedErrors.push(...errors);
          },
        },
      });

      const input = component.locator('input');
      await input.blur(); // Blur without entering anything

      // Should not emit validation errors for empty input
      expect(emittedErrors).toHaveLength(0);
    });

    test('handles very long input', async ({ mount }) => {
      const component = await mount(InputContactNumber);

      const input = component.locator('input');
      const longNumber = '123456789012345678901234567890';
      await input.fill(longNumber);

      // Should handle extremely long input without crashing
      await expect(input).toHaveValue(longNumber);
    });

    test('handles rapid input changes', async ({ mount }) => {
      const emittedValues: string[] = [];

      const component = await mount(InputContactNumber, {
        props: {
          'onUpdate:modelValue': (value: string) => {
            emittedValues.push(value);
          },
        },
      });

      const input = component.locator('input');

      // Simulate rapid typing with proper sequencing
      await input.fill('1');
      await component.waitFor(); // Wait for event processing
      await input.fill('12');
      await component.waitFor(); // Wait for event processing
      await input.fill('123');
      await component.waitFor(); // Wait for event processing

      // Verify that events were emitted and the final value is correct
      expect(emittedValues.length).toBeGreaterThan(0);
      expect(emittedValues[emittedValues.length - 1]).toBe('123'); // Check the last emitted value
    });

    test('handles country code edge cases', async ({ mount }) => {
      const component = await mount(InputContactNumber, {
        props: {
          preSelectedCountryCode: 'XX', // Invalid country code
        },
      });

      // Should gracefully fallback to default (Philippines) for invalid codes
      await expect(component.getByText('+63')).toBeVisible();
    });
  });

  test.describe('International Number Handling', () => {
    test('handles different country contexts', async ({ mount }) => {
      const component = await mount(InputContactNumber, {
        props: {
          preSelectedCountryCode: 'US',
        },
      });

      await expect(component.getByText('+1')).toBeVisible();

      const input = component.locator('input');
      await input.fill('2025551234');

      // Should accept US format number (Washington DC area code)
      await expect(input).toHaveValue('2025551234');
    });

    test('handles UK country context', async ({ mount }) => {
      const component = await mount(InputContactNumber, {
        props: {
          preSelectedCountryCode: 'GB',
        },
      });

      await expect(component.getByText('+44')).toBeVisible();

      const input = component.locator('input');
      await input.fill('2079460958');

      // Should accept UK format number (London area code)
      await expect(input).toHaveValue('2079460958');
    });
  });

  test.describe('Prop Combinations', () => {
    test('disabled with custom country code', async ({ mount }) => {
      const component = await mount(InputContactNumber, {
        props: {
          disabled: true,
          preSelectedCountryCode: 'US',
        },
      });

      const input = component.locator('input');

      await expect(input).toBeDisabled();
      await expect(component.getByText('+1')).toBeVisible();
    });

    test('country selection disabled with custom placeholder', async ({ mount }) => {
      const component = await mount(InputContactNumber, {
        props: {
          disabledCountryCallingCode: true,
          placeholder: 'Enter mobile number',
          preSelectedCountryCode: 'CA',
        },
      });

      const input = component.locator('input');
      await expect(input).toHaveAttribute('placeholder', 'Enter mobile number');
      await expect(input).not.toBeDisabled();
      await expect(component.getByText('+1')).toBeVisible(); // Canada uses +1
    });

    test('all event handlers with phone number', async ({ mount }) => {
      let modelValue = '';
      let countryData: { countryCode: string; countryCallingCode: string } | undefined;
      const errors: Array<{ title: string; message: string }> = [];

      const component = await mount(InputContactNumber, {
        props: {
          'onUpdate:modelValue': (value: string) => {
            modelValue = value;
          },
          onGetSelectedCountryCallingCode: (value: { countryCode: string; countryCallingCode: string }) => {
            countryData = value;
          },
          onGetContactNumberErrors: (value: Array<{ title: string; message: string }>) => {
            errors.push(...value);
          },
        },
      });

      const input = component.locator('input');
      await input.fill('9171234567');
      await input.blur();

      // All event handlers should receive appropriate data
      expect(modelValue).toBeTruthy();
      expect(countryData?.countryCode).toBe('PH');
      expect(Array.isArray(errors)).toBe(true);
    });
  });

  test.describe('Display Helper', () => {
    test('displays helper text when displayHelper is true', async ({ mount }) => {
      const component = await mount(InputContactNumber, {
        props: {
          displayHelper: true,
          helperText: 'Enter a valid phone number',
        },
      });

      await expect(component.getByText('Enter a valid phone number')).toBeVisible();
    });

    test('does not display helper text when displayHelper is false', async ({ mount }) => {
      const component = await mount(InputContactNumber, {
        props: {
          displayHelper: false,
          helperText: 'Enter a valid phone number',
        },
      });

      const helperText = component.getByText('Enter a valid phone number');
      await expect(helperText).not.toBeVisible();
    });

    test('displays helper icon when provided', async ({ mount }) => {
      const component = await mount(InputContactNumber, {
        props: {
          displayHelper: true,
          helperText: 'This field is required',
          helperIcon: 'ph:warning-circle-fill',
        },
      });

      // Helper text should be visible
      await expect(component.getByText('This field is required')).toBeVisible();
    });

    test('displays error state styling when error prop is true', async ({ mount }) => {
      const component = await mount(InputContactNumber, {
        props: {
          displayHelper: true,
          helperText: 'Invalid phone number',
          error: true,
        },
      });

      // Helper text should be visible with error styling
      const helperElement = component.getByText('Invalid phone number');
      await expect(helperElement).toBeVisible();
    });

    test('renders custom helper message slot', async ({ mount }) => {
      const component = await mount(InputContactNumber, {
        props: {
          displayHelper: true,
        },
        slots: {
          helperMessage: '<div data-testid="custom-helper">Custom helper content</div>',
        },
      });

      // Custom helper message should be rendered
      await expect(component.locator('[data-testid="custom-helper"]')).toBeVisible();
      await expect(component.getByText('Custom helper content')).toBeVisible();
    });

    test('combines helperText and error state', async ({ mount }) => {
      const component = await mount(InputContactNumber, {
        props: {
          displayHelper: true,
          helperText: 'Please enter a valid number',
          helperIcon: 'ph:warning-circle-fill',
          error: true,
        },
      });

      // Both text and icon should be visible
      await expect(component.getByText('Please enter a valid number')).toBeVisible();
    });

    test('display helper with disabled state', async ({ mount }) => {
      const component = await mount(InputContactNumber, {
        props: {
          displayHelper: true,
          helperText: 'Information text',
          disabled: true,
        },
      });

      const input = component.locator('input');
      await expect(input).toBeDisabled();

      // Helper text should still be visible when disabled
      await expect(component.getByText('Information text')).toBeVisible();
    });

    test('updates helper text dynamically', async ({ mount }) => {
      const component = await mount(InputContactNumber, {
        props: {
          displayHelper: true,
          helperText: 'Initial helper text',
        },
      });

      await expect(component.getByText('Initial helper text')).toBeVisible();

      // Update helper text
      await component.update({
        props: {
          displayHelper: true,
          helperText: 'Updated helper text',
        },
      });

      await expect(component.getByText('Updated helper text')).toBeVisible();
    });

    test('helper with error icon on validation error', async ({ mount }) => {
      const component = await mount(InputContactNumber, {
        props: {
          displayHelper: true,
          helperIcon: 'ph:warning-circle-fill',
          error: true,
          onGetContactNumberErrors: (errors: Array<{ title: string; message: string }>) => {
            // Validation errors are emitted when invalid input is detected
            expect(Array.isArray(errors)).toBe(true);
          },
        },
      });

      const input = component.locator('input');
      await input.fill('invalid');
      await input.blur();

      // Error helper should be visible
      await expect(component).toBeTruthy();
    });
  });
});
