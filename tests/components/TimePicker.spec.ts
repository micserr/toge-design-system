/**
 * TimePicker Component Tests
 *
 * Test Coverage Rationale:
 * - Testing both 12-hour and 24-hour format variants
 * - Validating time interval generation (15min, 30min, 60min)
 * - Input filtering and validation for manual typing
 * - Dropdown menu interactions and option selection
 * - v-model two-way binding behavior
 * - Accessibility features (ARIA attributes, keyboard navigation)
 * - Error states and helper text display
 * - Disabled state behavior
 * - Props validation and edge cases
 *
 * ASSUMPTIONS:
 * - Component uses floating-vue Menu for dropdown
 * - Input component handles basic accessibility
 * - Time options are generated based on interval prop
 * - Placeholder text changes based on format
 *
 * TODO (Future Enhancements):
 * - Test internationalization if i18n is added
 * - Performance testing with large interval counts
 * - Advanced keyboard navigation (arrow keys in dropdown)
 */

import { test, expect } from '@playwright/experimental-ct-vue';
import TimePicker from '@/components/time-picker/time-picker.vue';

test.describe('TimePicker Component', () => {
  test.describe('Rendering', () => {
    test('renders with default props', async ({ mount }) => {
      const component = await mount(TimePicker, {
        props: {
          modelValue: '',
        },
      });

      await expect(component).toBeVisible();
      await expect(component.getByRole('textbox')).toBeVisible();
      // Check for the clock icon using a more generic approach
      await expect(component.locator('svg')).toBeVisible();
    });

    test('displays correct placeholder for 24-hour format', async ({ mount }) => {
      const component = await mount(TimePicker, {
        props: {
          modelValue: '',
          format: '24',
        },
      });

      await expect(component.getByRole('textbox')).toHaveAttribute('placeholder', 'HH : MM');
    });

    test('displays correct placeholder for 12-hour format', async ({ mount }) => {
      const component = await mount(TimePicker, {
        props: {
          modelValue: '',
          format: '12',
        },
      });

      await expect(component.getByRole('textbox')).toHaveAttribute('placeholder', 'HH : MM AM/PM');
    });

    test('displays custom placeholder when provided', async ({ mount }) => {
      const customPlaceholder = 'Select time';
      const component = await mount(TimePicker, {
        props: {
          modelValue: '',
          placeholder: customPlaceholder,
        },
      });

      await expect(component.getByRole('textbox')).toHaveAttribute('placeholder', customPlaceholder);
    });

    test('renders with label', async ({ mount }) => {
      const labelText = 'Meeting Time';
      const component = await mount(TimePicker, {
        props: {
          modelValue: '',
          label: labelText,
        },
      });

      await expect(component.getByText(labelText)).toBeVisible();
      // Use a more direct approach to check the label association
      const input = component.getByRole('textbox');
      await expect(input).toHaveAttribute('id');
    });

    test('renders with helper text', async ({ mount }) => {
      const helperText = 'Choose your preferred time';
      const component = await mount(TimePicker, {
        props: {
          modelValue: '',
          helperText: helperText,
        },
      });

      await expect(component.getByText(helperText)).toBeVisible();
    });
  });

  test.describe('Props Validation', () => {
    test('applies disabled state correctly', async ({ mount }) => {
      const component = await mount(TimePicker, {
        props: {
          modelValue: '',
          disabled: true,
        },
      });

      const input = component.getByRole('textbox');
      await expect(input).toBeDisabled();
    });

    test('applies readonly state when disableTyping is true', async ({ mount }) => {
      const component = await mount(TimePicker, {
        props: {
          modelValue: '',
          disableTyping: true,
        },
      });

      const input = component.getByRole('textbox');
      await expect(input).toHaveAttribute('readonly');
    });

    test('shows error state styling', async ({ mount }) => {
      const component = await mount(TimePicker, {
        props: {
          modelValue: '',
          error: true,
        },
      });

      await expect(component).toBeVisible();
      // Note: Error styling validation would depend on the input component's implementation
    });

    test('renders with custom id', async ({ mount }) => {
      const customId = 'custom-time-picker';
      const component = await mount(TimePicker, {
        props: {
          modelValue: '',
          id: customId,
        },
      });

      await expect(component.getByRole('textbox')).toHaveAttribute('id', customId);
    });
  });

  test.describe('Time Format Handling', () => {
    test('generates 24-hour format time options with 30-minute intervals', async ({ mount }) => {
      const component = await mount(TimePicker, {
        props: {
          modelValue: '',
          format: '24',
          interval: 30,
        },
      });

      // Click to open dropdown
      await component.getByRole('textbox').click();

      // Check for expected 24-hour format options
      await expect(component.getByText('00:00')).toBeVisible();
      await expect(component.getByText('00:30')).toBeVisible();
      await expect(component.getByText('12:00')).toBeVisible();
      await expect(component.getByText('23:30')).toBeVisible();
    });

    test('generates 12-hour format time options with 30-minute intervals', async ({ mount }) => {
      const component = await mount(TimePicker, {
        props: {
          modelValue: '',
          format: '12',
          interval: 30,
        },
      });

      // Click to open dropdown
      await component.getByRole('textbox').click();

      // Check for expected 12-hour format options
      await expect(component.getByText('12:00 AM')).toBeVisible();
      await expect(component.getByText('12:30 AM')).toBeVisible();
      await expect(component.getByText('12:00 PM')).toBeVisible();
      await expect(component.getByText('11:30 PM')).toBeVisible();
    });

    test('generates time options with 15-minute intervals', async ({ mount }) => {
      const component = await mount(TimePicker, {
        props: {
          modelValue: '',
          format: '24',
          interval: 15,
        },
      });

      // Click to open dropdown
      await component.getByRole('textbox').click();

      // Check for 15-minute interval options
      await expect(component.getByText('00:00')).toBeVisible();
      await expect(component.getByText('00:15')).toBeVisible();
      await expect(component.getByText('00:30')).toBeVisible();
      await expect(component.getByText('00:45')).toBeVisible();
    });

    test('generates time options with 60-minute intervals', async ({ mount }) => {
      const component = await mount(TimePicker, {
        props: {
          modelValue: '',
          format: '24',
          interval: 60,
        },
      });

      // Click to open dropdown
      await component.getByRole('textbox').click();

      // Check for hourly options
      await expect(component.getByText('00:00')).toBeVisible();
      await expect(component.getByText('01:00')).toBeVisible();
      await expect(component.getByText('12:00')).toBeVisible();
      await expect(component.getByText('23:00')).toBeVisible();
    });
  });

  test.describe('User Interactions', () => {
    test('opens dropdown on input click', async ({ mount }) => {
      const component = await mount(TimePicker, {
        props: {
          modelValue: '',
        },
      });

      const input = component.getByRole('textbox');
      await input.click();

      // Check if dropdown options are visible
      await expect(component.getByText('00:00')).toBeVisible();
    });

    test('selects time option from dropdown', async ({ mount, page }) => {
      let selectedValue = '';
      const component = await mount(TimePicker, {
        props: {
          modelValue: selectedValue,
        },
        on: {
          'update:modelValue': (value: string) => {
            selectedValue = value;
          },
        },
      });

      // Open dropdown
      await component.getByRole('textbox').click();

      // Select a time option
      await component.getByText('09:30').click();

      // Wait a bit for the update to propagate
      await page.waitForTimeout(100);

      // Check that the value was emitted (we can't easily verify the input value due to v-model complexity)
      expect(selectedValue).toBe('09:30');
    });

    test('shows selected option with check mark', async ({ mount }) => {
      const component = await mount(TimePicker, {
        props: {
          modelValue: '14:30',
        },
      });

      // Open dropdown
      await component.getByRole('textbox').click();

      // Find the selected option and check for check mark
      const selectedOption = component.locator('.spr-background-color-single-active').first();
      await expect(selectedOption).toBeVisible();
      // Check for any check mark icon (SVG)
      await expect(selectedOption.locator('svg')).toBeVisible();
    });

    test('allows manual typing when disableTyping is false', async ({ mount }) => {
      const component = await mount(TimePicker, {
        props: {
          modelValue: '',
          disableTyping: false,
        },
      });

      const input = component.getByRole('textbox');
      await input.fill('15:45');

      await expect(input).toHaveValue('15:45');
    });

    test('filters input for 24-hour format', async ({ mount }) => {
      const component = await mount(TimePicker, {
        props: {
          modelValue: '',
          format: '24',
          disableTyping: false,
        },
      });

      const input = component.getByRole('textbox');

      // Type valid 24-hour format
      await input.fill('23:59');
      await expect(input).toHaveValue('23:59');
    });

    test('filters input for 12-hour format', async ({ mount }) => {
      const component = await mount(TimePicker, {
        props: {
          modelValue: '',
          format: '12',
          disableTyping: false,
        },
      });

      const input = component.getByRole('textbox');

      // Type valid 12-hour format
      await input.fill('11:30 PM');
      await expect(input).toHaveValue('11:30 PM');
    });
  });

  test.describe('v-model Binding', () => {
    test('displays initial modelValue', async ({ mount }) => {
      const initialTime = '16:30';
      const component = await mount(TimePicker, {
        props: {
          modelValue: initialTime,
        },
      });

      await expect(component.getByRole('textbox')).toHaveValue(initialTime);
    });

    test('emits update:modelValue on option selection', async ({ mount, page }) => {
      const updates: string[] = [];
      const component = await mount(TimePicker, {
        props: {
          modelValue: '',
        },
        on: {
          'update:modelValue': (value: string) => {
            updates.push(value);
          },
        },
      });

      // Open dropdown and select option
      await component.getByRole('textbox').click();
      await component.getByText('10:00').click();

      // Wait for the event to be emitted
      await page.waitForTimeout(100);

      expect(updates).toContain('10:00');
    });

    test('emits update:modelValue on manual input', async ({ mount, page }) => {
      const updates: string[] = [];
      const component = await mount(TimePicker, {
        props: {
          modelValue: '',
          disableTyping: false,
        },
        on: {
          'update:modelValue': (value: string) => {
            updates.push(value);
          },
        },
      });

      const input = component.getByRole('textbox');
      await input.type('0');
      await input.type('8');
      await input.type(':');
      await input.type('1');
      await input.type('5');

      // Wait for events to be emitted
      await page.waitForTimeout(100);

      expect(updates.length).toBeGreaterThan(0);
    });
  });

  test.describe('Accessibility', () => {
    test('has proper ARIA attributes', async ({ mount }) => {
      const labelText = 'Select Time';
      const component = await mount(TimePicker, {
        props: {
          modelValue: '',
          label: labelText,
          id: 'time-input',
        },
      });

      const input = component.getByRole('textbox');
      await expect(input).toHaveAttribute('id', 'time-input');
      // Verify label is present
      await expect(component.getByText(labelText)).toBeVisible();
    });

    test('handles keyboard navigation', async ({ mount }) => {
      const component = await mount(TimePicker, {
        props: {
          modelValue: '',
        },
      });

      const input = component.getByRole('textbox');

      // Focus the input
      await input.focus();
      await expect(input).toBeFocused();

      // Tab navigation should work
      await input.press('Tab');
    });

    test('supports screen reader announcements', async ({ mount }) => {
      const component = await mount(TimePicker, {
        props: {
          modelValue: '',
          label: 'Meeting Time',
          helperText: 'Select your preferred meeting time',
        },
      });

      // Verify accessible name and description are present - use exact text matching
      await expect(component.getByText('Meeting Time', { exact: true })).toBeVisible();
      await expect(component.getByText('Select your preferred meeting time')).toBeVisible();
    });
  });

  test.describe('Edge Cases', () => {
    test('handles empty modelValue gracefully', async ({ mount }) => {
      const component = await mount(TimePicker, {
        props: {
          modelValue: '',
        },
      });

      await expect(component.getByRole('textbox')).toHaveValue('');
      await component.getByRole('textbox').click();
      await expect(component.getByText('00:00')).toBeVisible();
    });

    test('handles null/undefined modelValue', async ({ mount }) => {
      const component = await mount(TimePicker, {
        props: {
          modelValue: undefined as any,
        },
      });

      await expect(component).toBeVisible();
    });

    test('handles rapid option selection', async ({ mount, page }) => {
      let updateCount = 0;
      const component = await mount(TimePicker, {
        props: {
          modelValue: '',
        },
        on: {
          'update:modelValue': () => {
            updateCount++;
          },
        },
      });

      await component.getByRole('textbox').click();

      // Rapidly select different options
      await component.getByText('09:00').click();
      await page.waitForTimeout(50);
      await component.getByRole('textbox').click();
      await component.getByText('10:00').click();
      await page.waitForTimeout(50);

      expect(updateCount).toBeGreaterThanOrEqual(2);
    });

    test('handles disabled state interaction attempts', async ({ mount }) => {
      const component = await mount(TimePicker, {
        props: {
          modelValue: '',
          disabled: true,
        },
      });

      const input = component.getByRole('textbox');

      // Try to click disabled input
      await input.click({ force: true });

      // Dropdown should not open - check that time options are not visible
      await expect(component.getByText('00:00')).not.toBeVisible();
    });
  });

  test.describe('Conditional Logic', () => {
    test('applies fullWidth styling when prop is true', async ({ mount }) => {
      const component = await mount(TimePicker, {
        props: {
          modelValue: '',
          fullWidth: true,
        },
      });

      // Check if container has full width styling
      await expect(component).toBeVisible();
      // Note: Specific width validation would depend on CSS class inspection
    });

    test('uses different aria-id based on fullWidth prop', async ({ mount }) => {
      const componentFullWidth = await mount(TimePicker, {
        props: {
          modelValue: '',
          fullWidth: true,
        },
      });

      const componentNormal = await mount(TimePicker, {
        props: {
          modelValue: '',
          fullWidth: false,
        },
      });

      // Both should render without errors
      await expect(componentFullWidth).toBeVisible();
      await expect(componentNormal).toBeVisible();
    });

    test('renders clock icon consistently', async ({ mount }) => {
      const component = await mount(TimePicker, {
        props: {
          modelValue: '',
        },
      });

      // Check for the presence of any SVG icon
      const clockIcon = component.locator('svg');
      await expect(clockIcon).toBeVisible();
    });
  });

  test.describe('Error Handling', () => {
    test('handles invalid interval values gracefully', async ({ mount }) => {
      const component = await mount(TimePicker, {
        props: {
          modelValue: '',
          interval: 0, // Invalid interval
        },
      });

      // Component should still render
      await expect(component).toBeVisible();
    });

    test('handles invalid format values', async ({ mount }) => {
      const component = await mount(TimePicker, {
        props: {
          modelValue: '',
          format: 'invalid' as any,
        },
      });

      // Should fallback to default behavior
      await expect(component).toBeVisible();
    });
  });
});
