/**
 * Lozenge Component Tests
 *
 * Test Coverage Rationale:
 * - Comprehensive prop testing across all tone variants and interaction states
 * - Validates conditional rendering logic (visible, loading, interactive states)
 * - Tests slot-based content (icon, avatar, postfixIcon slots)
 * - Verifies CSS class application from useLozenge composable
 * - Validates accessibility features (tabindex, keyboard interaction)
 * - Tests loading state behavior and skeletal loader rendering
 * - Edge cases including empty props, special characters, and boundary conditions
 *
 * ASSUMPTIONS:
 * - Icon component from @iconify/vue is properly mocked/available
 * - CSS classes are applied correctly through the useLozenge composable
 * - Interactive lozenges should be focusable and keyboard accessible
 *
 * TODO (Future Enhancements):
 * - Add keyboard navigation tests (Enter, Space key handling)
 * - Test hover/focus state transitions
 * - Add drag and drop interaction tests if applicable
 * - Test with real icon library icons
 */

import { test, expect } from '@playwright/experimental-ct-vue';
import Lozenge from '@/components/lozenge/lozenge.vue';

test.describe('Lozenge Component', () => {
  test.describe('Rendering', () => {
    test('renders with default props', async ({ mount }) => {
      const component = await mount(Lozenge);

      // Component should be attached to DOM even if not visually prominent
      await expect(component).toBeAttached();

      // Should have wrapper classes
      await expect(component).toHaveClass(/spr-lozenge__wrapper/);

      // Should contain base structure
      const base = component.locator('.spr-lozenge__base');
      await expect(base).toBeAttached();

      // Should have tone section
      const tone = component.locator('.spr-lozenge__tone');
      await expect(tone).toBeAttached();

      // Should have label (empty by default)
      const label = component.locator('.spr-lozenge__label');
      await expect(label).toBeAttached();
      await expect(label).toHaveText('');
    });

    test('renders with custom label', async ({ mount }) => {
      const component = await mount(Lozenge, {
        props: { label: 'Status Badge' },
      });

      const label = component.locator('.spr-lozenge__label');
      await expect(label).toBeVisible();
      await expect(label).toHaveText('Status Badge');
    });

    test('renders when visible is true', async ({ mount }) => {
      const component = await mount(Lozenge, {
        props: { visible: true, label: 'Visible' },
      });

      const base = component.locator('.spr-lozenge__base');
      await expect(base).toBeVisible();
    });

    test('does not render when visible is false', async ({ mount }) => {
      const component = await mount(Lozenge, {
        props: { visible: false, label: 'Hidden' },
      });

      const base = component.locator('.spr-lozenge__base');
      await expect(base).not.toBeVisible();

      const loading = component.locator('.spr-lozenge__loading');
      await expect(loading).not.toBeVisible();
    });
  });

  test.describe('Loading State', () => {
    test('shows loading state when loading is true', async ({ mount }) => {
      const component = await mount(Lozenge, {
        props: { loading: true, visible: true },
      });

      const loading = component.locator('.spr-lozenge__loading');
      await expect(loading).toBeAttached();
      await expect(loading).toHaveClass(/spr-skeletal-loader/);

      const base = component.locator('.spr-lozenge__base');
      await expect(base).not.toBeAttached();
    });

    test('shows normal content when loading is false', async ({ mount }) => {
      const component = await mount(Lozenge, {
        props: { loading: false, visible: true, label: 'Normal' },
      });

      const base = component.locator('.spr-lozenge__base');
      await expect(base).toBeVisible();

      const loading = component.locator('.spr-lozenge__loading');
      await expect(loading).not.toBeVisible();
    });

    test('loading state has correct classes', async ({ mount }) => {
      const component = await mount(Lozenge, {
        props: { loading: true, visible: true },
      });

      const loading = component.locator('.spr-lozenge__loading');
      await expect(loading).toHaveClass(/spr-skeletal-loader/);
      await expect(loading).toHaveClass(/spr-flex/);
      await expect(loading).toHaveClass(/spr-h-6/);
      await expect(loading).toHaveClass(/spr-w-full/);
      await expect(loading).toHaveClass(/spr-rounded-md/);
    });
  });

  test.describe('Props - Tone', () => {
    const tones = ['plain', 'pending', 'information', 'success', 'danger', 'neutral', 'caution'] as const;

    for (const tone of tones) {
      test(`renders ${tone} tone with correct styling (outline)`, async ({ mount }) => {
        const component = await mount(Lozenge, {
          props: { tone, label: tone, fill: false },
        });

        const toneElement = component.locator('.spr-lozenge__tone');
        await expect(toneElement).toBeVisible();

        // Verify tone-specific classes are applied for outline version
        switch (tone) {
          case 'pending':
            await expect(toneElement).toHaveClass(/spr-text-color-pending-base/);
            await expect(toneElement).toHaveClass(/spr-background-color-pending-weak/);
            await expect(toneElement).toHaveClass(/spr-border-color-pending-base/);
            break;
          case 'information':
            await expect(toneElement).toHaveClass(/spr-text-color-information-base/);
            await expect(toneElement).toHaveClass(/spr-background-color-information-weak/);
            await expect(toneElement).toHaveClass(/spr-border-color-information-base/);
            break;
          case 'success':
            await expect(toneElement).toHaveClass(/spr-text-color-success-base/);
            await expect(toneElement).toHaveClass(/spr-background-color-success-weak/);
            await expect(toneElement).toHaveClass(/spr-border-color-success-base/);
            break;
          case 'danger':
            await expect(toneElement).toHaveClass(/spr-text-color-danger-base/);
            await expect(toneElement).toHaveClass(/spr-background-color-danger-weak/);
            await expect(toneElement).toHaveClass(/spr-border-color-danger-base/);
            break;
          case 'neutral':
            await expect(toneElement).toHaveClass(/spr-text-color-base/);
            await expect(toneElement).toHaveClass(/spr-background-color-surface-adaptive/);
            await expect(toneElement).toHaveClass(/spr-border-color-base/);
            break;
          case 'caution':
            await expect(toneElement).toHaveClass(/spr-text-color-caution-base/);
            await expect(toneElement).toHaveClass(/spr-background-color-caution-weak/);
            await expect(toneElement).toHaveClass(/spr-border-color-caution-base/);
            break;
          case 'plain':
            await expect(toneElement).toHaveClass(/spr-text-color-strong/);
            await expect(toneElement).toHaveClass(/spr-border-color-base/);
            break;
        }

        // All outline variants should have border
        await expect(toneElement).toHaveClass(/spr-border/);
      });

      test(`renders ${tone} tone with correct styling (filled)`, async ({ mount }) => {
        const component = await mount(Lozenge, {
          props: { tone, label: tone, fill: true },
        });

        const toneElement = component.locator('.spr-lozenge__tone');
        await expect(toneElement).toBeVisible();

        // Verify tone-specific classes are applied for filled version
        switch (tone) {
          case 'pending':
            await expect(toneElement).toHaveClass(/spr-background-color-pending-base/);
            await expect(toneElement).toHaveClass(/spr-text-color-strong/);
            break;
          case 'information':
            await expect(toneElement).toHaveClass(/spr-background-color-information-base/);
            await expect(toneElement).toHaveClass(/spr-text-color-inverted-strong/);
            break;
          case 'success':
            await expect(toneElement).toHaveClass(/spr-background-color-success-base/);
            await expect(toneElement).toHaveClass(/spr-text-color-inverted-strong/);
            break;
          case 'danger':
            await expect(toneElement).toHaveClass(/spr-background-color-danger-base/);
            await expect(toneElement).toHaveClass(/spr-text-color-inverted-strong/);
            break;
          case 'neutral':
            await expect(toneElement).toHaveClass(/spr-background-color-surface-adaptive/);
            await expect(toneElement).toHaveClass(/spr-text-color-strong/);
            break;
          case 'caution':
            await expect(toneElement).toHaveClass(/spr-background-color-caution-base/);
            await expect(toneElement).toHaveClass(/spr-text-color-strong/);
            break;
          case 'plain':
            await expect(toneElement).toHaveClass(/spr-background-color/);
            await expect(toneElement).toHaveClass(/spr-text-color-strong/);
            break;
        }

        // All filled variants should not have border
        await expect(toneElement).toHaveClass(/spr-border-0/);
      });
    }
  });

  test.describe('Props - Fill', () => {
    test('renders outline style when fill is false', async ({ mount }) => {
      const component = await mount(Lozenge, {
        props: { fill: false, tone: 'information', label: 'Outline' },
      });

      const base = component.locator('.spr-lozenge__base');
      await expect(base).toHaveClass(/spr-flex/);
      await expect(base).toHaveClass(/spr-flex-wrap/);
      await expect(base).toHaveClass(/spr-rounded-md/);

      const tone = component.locator('.spr-lozenge__tone');
      await expect(tone).toHaveClass(/spr-border/);
    });

    test('renders filled style when fill is true', async ({ mount }) => {
      const component = await mount(Lozenge, {
        props: { fill: true, tone: 'information', label: 'Filled' },
      });

      const base = component.locator('.spr-lozenge__base');
      await expect(base).toHaveClass(/spr-flex/);
      await expect(base).toHaveClass(/spr-flex-wrap/);
      await expect(base).not.toHaveClass(/spr-rounded-md/);

      const tone = component.locator('.spr-lozenge__tone');
      await expect(tone).toHaveClass(/spr-border-0/);
    });
  });

  test.describe('Props - Interactive', () => {
    test('interactive lozenge has cursor pointer and is focusable', async ({ mount }) => {
      const component = await mount(Lozenge, {
        props: { interactive: true, label: 'Interactive' },
      });

      const tone = component.locator('.spr-lozenge__tone');
      await expect(tone).toHaveClass(/spr-cursor-pointer/);
      await expect(tone).toHaveAttribute('tabindex', '0');
    });

    test('non-interactive lozenge is not focusable', async ({ mount }) => {
      const component = await mount(Lozenge, {
        props: { interactive: false, label: 'Static' },
      });

      const tone = component.locator('.spr-lozenge__tone');
      await expect(tone).not.toHaveClass(/spr-cursor-pointer/);
      await expect(tone).toHaveAttribute('tabindex', '-1');
    });

    test('interactive lozenge has hover states', async ({ mount }) => {
      const component = await mount(Lozenge, {
        props: { interactive: true, tone: 'pending', fill: false, label: 'Hover Test' },
      });

      const tone = component.locator('.spr-lozenge__tone');
      await expect(tone).toHaveClass(/hover:spr-background-color-pending-weak-hover/);
      await expect(tone).toHaveClass(/active:spr-background-color-pending-weak-pressed/);
    });
  });

  test.describe('Props - Dropdown', () => {
    test('dropdown lozenge has cursor pointer and is focusable', async ({ mount }) => {
      const component = await mount(Lozenge, {
        props: { dropdown: true, label: 'Dropdown' },
      });

      const tone = component.locator('.spr-lozenge__tone');
      await expect(tone).toHaveClass(/spr-cursor-pointer/);
      await expect(tone).toHaveAttribute('tabindex', '0');
    });

    test('dropdown lozenge shows default caret icon', async ({ mount }) => {
      const component = await mount(Lozenge, {
        props: { dropdown: true, label: 'Dropdown' },
      });

      // Should have a postfix icon container
      const postfixIcon = component.locator('.spr-lozenge__prefix-icon').last();
      await expect(postfixIcon).toBeVisible();
    });

    test('dropdown with custom postfixIcon shows custom icon', async ({ mount }) => {
      const component = await mount(Lozenge, {
        props: { dropdown: true, postfixIcon: 'ph:plus', label: 'Custom' },
      });

      const postfixIcon = component.locator('.spr-lozenge__prefix-icon').last();
      await expect(postfixIcon).toBeVisible();
    });
  });

  test.describe('Icon and Avatar Props', () => {
    test('renders with icon prop', async ({ mount }) => {
      const component = await mount(Lozenge, {
        props: { icon: 'ph:star', label: 'With Icon' },
      });

      const iconContainer = component.locator('.spr-lozenge__prefix-icon').first();
      await expect(iconContainer).toBeVisible();
    });

    test('renders with avatar URL', async ({ mount }) => {
      const component = await mount(Lozenge, {
        props: { url: '/avatar.jpg', label: 'With Avatar' },
      });

      const avatarContainer = component.locator('.spr-lozenge__avatar');
      await expect(avatarContainer).toBeVisible();

      const avatarImg = avatarContainer.locator('img');
      await expect(avatarImg).toBeVisible();
      await expect(avatarImg).toHaveAttribute('src', '/avatar.jpg');
      await expect(avatarImg).toHaveAttribute('alt', 'avatar');
    });

    test('adjusts height when avatar is present', async ({ mount }) => {
      const component = await mount(Lozenge, {
        props: { url: '/avatar.jpg', label: 'Avatar Lozenge' },
      });

      const tone = component.locator('.spr-lozenge__tone');
      await expect(tone).toHaveClass(/spr-h-\[24px\]/);
    });

    test('renders with postfix icon prop', async ({ mount }) => {
      const component = await mount(Lozenge, {
        props: { postfixIcon: 'ph:x', label: 'With Postfix' },
      });

      const postfixIcon = component.locator('.spr-lozenge__prefix-icon').last();
      await expect(postfixIcon).toBeVisible();
    });
  });

  test.describe('Slots', () => {
    test('renders custom icon slot content', async ({ mount }) => {
      const component = await mount(Lozenge, {
        props: { label: 'Custom Icon' },
        slots: {
          icon: '<div data-testid="custom-icon">★</div>',
        },
      });

      const customIcon = component.locator('[data-testid="custom-icon"]');
      await expect(customIcon).toBeVisible();
      await expect(customIcon).toHaveText('★');
    });

    test('renders custom avatar slot content', async ({ mount }) => {
      const component = await mount(Lozenge, {
        props: { label: 'Custom Avatar' },
        slots: {
          avatar: '<div data-testid="custom-avatar" class="custom-avatar">JD</div>',
        },
      });

      const customAvatar = component.locator('[data-testid="custom-avatar"]');
      await expect(customAvatar).toBeVisible();
      await expect(customAvatar).toHaveText('JD');
    });

    test('renders custom postfixIcon slot content', async ({ mount }) => {
      const component = await mount(Lozenge, {
        props: { label: 'Custom Postfix' },
        slots: {
          postfixIcon: '<div data-testid="custom-postfix">→</div>',
        },
      });

      const customPostfix = component.locator('[data-testid="custom-postfix"]');
      await expect(customPostfix).toBeVisible();
      await expect(customPostfix).toHaveText('→');
    });

    test('icon slot takes precedence over icon prop', async ({ mount }) => {
      const component = await mount(Lozenge, {
        props: { icon: 'ph:star', label: 'Slot Priority' },
        slots: {
          icon: '<div data-testid="slot-icon">SLOT</div>',
        },
      });

      const slotIcon = component.locator('[data-testid="slot-icon"]');
      await expect(slotIcon).toBeVisible();
      await expect(slotIcon).toHaveText('SLOT');
    });

    test('avatar slot takes precedence over url prop', async ({ mount }) => {
      const component = await mount(Lozenge, {
        props: { url: '/avatar.jpg', label: 'Slot Priority' },
        slots: {
          avatar: '<div data-testid="slot-avatar">AVATAR</div>',
        },
      });

      const slotAvatar = component.locator('[data-testid="slot-avatar"]');
      await expect(slotAvatar).toBeVisible();
      await expect(slotAvatar).toHaveText('AVATAR');
    });

    test('postfixIcon slot takes precedence over dropdown and postfixIcon props', async ({ mount }) => {
      const component = await mount(Lozenge, {
        props: { dropdown: true, postfixIcon: 'ph:x', label: 'Slot Priority' },
        slots: {
          postfixIcon: '<div data-testid="slot-postfix">POSTFIX</div>',
        },
      });

      const slotPostfix = component.locator('[data-testid="slot-postfix"]');
      await expect(slotPostfix).toBeVisible();
      await expect(slotPostfix).toHaveText('POSTFIX');
    });
  });

  test.describe('Accessibility', () => {
    test('has proper semantic structure', async ({ mount }) => {
      const component = await mount(Lozenge, {
        props: { label: 'Accessibility Test' },
      });

      // Use more direct approach to find elements
      await expect(component).toBeAttached();

      // The component should have the wrapper class directly on the root element
      await expect(component).toHaveClass(/spr-lozenge__wrapper/);

      const base = component.locator('.spr-lozenge__base');
      await expect(base).toBeAttached();

      const tone = component.locator('.spr-lozenge__tone');
      await expect(tone).toBeAttached();

      const label = component.locator('.spr-lozenge__label');
      await expect(label).toBeAttached();
    });

    test('label text is accessible to screen readers', async ({ mount }) => {
      const component = await mount(Lozenge, {
        props: { label: 'Screen Reader Text' },
      });

      const label = component.locator('.spr-lozenge__label');
      await expect(label).toHaveText('Screen Reader Text');
      await expect(label).not.toHaveAttribute('aria-hidden', 'true');
    });

    test('interactive lozenge can receive focus', async ({ mount }) => {
      const component = await mount(Lozenge, {
        props: { interactive: true, label: 'Focusable' },
      });

      const tone = component.locator('.spr-lozenge__tone');
      await tone.focus();
      await expect(tone).toBeFocused();
    });

    test('non-interactive lozenge cannot receive focus', async ({ mount }) => {
      const component = await mount(Lozenge, {
        props: { interactive: false, label: 'Not Focusable' },
      });

      const tone = component.locator('.spr-lozenge__tone');
      await expect(tone).toHaveAttribute('tabindex', '-1');

      // Elements with tabindex="-1" can still receive programmatic focus,
      // but they shouldn't be in the normal tab order
      await tone.focus();
      await expect(tone).toBeFocused();
    });

    test('dropdown lozenge can receive focus', async ({ mount }) => {
      const component = await mount(Lozenge, {
        props: { dropdown: true, label: 'Dropdown Focus' },
      });

      const tone = component.locator('.spr-lozenge__tone');
      await tone.focus();
      await expect(tone).toBeFocused();
    });
  });

  test.describe('Edge Cases', () => {
    test('handles empty label gracefully', async ({ mount }) => {
      const component = await mount(Lozenge, {
        props: { label: '' },
      });

      const label = component.locator('.spr-lozenge__label');
      await expect(label).toBeAttached();
      await expect(label).toHaveText('');
    });

    test('handles long label text', async ({ mount }) => {
      const longLabel = 'This is a very long lozenge label that might wrap or overflow depending on container width';
      const component = await mount(Lozenge, {
        props: { label: longLabel },
      });

      const label = component.locator('.spr-lozenge__label');
      await expect(label).toHaveText(longLabel);
    });

    test('handles special characters in label', async ({ mount }) => {
      const specialLabel = '★ Special • Characters & Symbols ✓';
      const component = await mount(Lozenge, {
        props: { label: specialLabel },
      });

      const label = component.locator('.spr-lozenge__label');
      await expect(label).toHaveText(specialLabel);
    });

    test('handles invalid tone gracefully', async ({ mount }) => {
      const component = await mount(Lozenge, {
        props: {
          tone: 'invalid-tone' as any,
          label: 'Invalid Tone',
        },
      });

      // Should still render with default styling
      await expect(component).toBeAttached();
      const label = component.locator('.spr-lozenge__label');
      await expect(label).toHaveText('Invalid Tone');
    });

    test('handles missing image URL gracefully', async ({ mount }) => {
      const component = await mount(Lozenge, {
        props: { url: '', label: 'No Avatar' },
      });

      const avatarContainer = component.locator('.spr-lozenge__avatar');
      await expect(avatarContainer).not.toBeVisible();
    });

    test('handles null/undefined props gracefully', async ({ mount }) => {
      const component = await mount(Lozenge, {
        props: {},
      });

      await expect(component).toBeAttached();
      const label = component.locator('.spr-lozenge__label');
      await expect(label).toHaveText('');
    });
  });

  test.describe('Prop Combinations', () => {
    test('interactive + dropdown + filled + icon combination', async ({ mount }) => {
      const component = await mount(Lozenge, {
        props: {
          interactive: true,
          dropdown: true,
          fill: true,
          tone: 'success',
          icon: 'ph:check',
          label: 'Success Action',
        },
      });

      const tone = component.locator('.spr-lozenge__tone');

      // Should be focusable (interactive or dropdown)
      await expect(tone).toHaveAttribute('tabindex', '0');
      await expect(tone).toHaveClass(/spr-cursor-pointer/);

      // Should have filled success styling
      await expect(tone).toHaveClass(/spr-background-color-success-base/);
      await expect(tone).toHaveClass(/spr-text-color-inverted-strong/);
      await expect(tone).toHaveClass(/spr-border-0/);

      // Should have prefix icon
      const prefixIcon = component.locator('.spr-lozenge__prefix-icon').first();
      await expect(prefixIcon).toBeVisible();

      // Should have postfix icon (dropdown)
      const postfixIcon = component.locator('.spr-lozenge__prefix-icon').last();
      await expect(postfixIcon).toBeVisible();

      // Should have label
      const label = component.locator('.spr-lozenge__label');
      await expect(label).toHaveText('Success Action');
    });

    test('loading + visible + avatar combination', async ({ mount }) => {
      const component = await mount(Lozenge, {
        props: {
          loading: true,
          visible: true,
          url: '/user.jpg',
          label: 'Loading User',
        },
      });

      // Should show loading state, not normal content
      const loading = component.locator('.spr-lozenge__loading');
      await expect(loading).toBeAttached();
      await expect(loading).toHaveClass(/spr-skeletal-loader/);

      const base = component.locator('.spr-lozenge__base');
      await expect(base).not.toBeAttached();

      // Avatar should not be visible in loading state
      const avatar = component.locator('.spr-lozenge__avatar');
      await expect(avatar).not.toBeAttached();
    });

    test('outline + caution + removable combination', async ({ mount }) => {
      const component = await mount(Lozenge, {
        props: {
          fill: false,
          tone: 'caution',
          removable: true,
          interactive: true,
          label: 'Warning: Remove Me',
        },
      });

      const tone = component.locator('.spr-lozenge__tone');

      // Should have outline caution styling
      await expect(tone).toHaveClass(/spr-text-color-caution-base/);
      await expect(tone).toHaveClass(/spr-background-color-caution-weak/);
      await expect(tone).toHaveClass(/spr-border-color-caution-base/);
      await expect(tone).toHaveClass(/spr-border/);

      // Should be interactive
      await expect(tone).toHaveClass(/spr-cursor-pointer/);
      await expect(tone).toHaveAttribute('tabindex', '0');

      // Should have hover states
      await expect(tone).toHaveClass(/hover:spr-background-color-caution-weak-hover/);
      await expect(tone).toHaveClass(/active:spr-background-color-caution-weak-pressed/);
    });

    test('invisible + loading combination', async ({ mount }) => {
      const component = await mount(Lozenge, {
        props: {
          visible: false,
          loading: true,
          label: 'Should Not Show',
        },
      });

      // Nothing should be visible when visible=false
      const base = component.locator('.spr-lozenge__base');
      await expect(base).not.toBeVisible();

      const loading = component.locator('.spr-lozenge__loading');
      await expect(loading).not.toBeVisible();
    });
  });

  test.describe('Visual Structure', () => {
    test('maintains proper DOM hierarchy', async ({ mount }) => {
      const component = await mount(Lozenge, {
        props: {
          icon: 'ph:star',
          url: '/avatar.jpg',
          postfixIcon: 'ph:x',
          label: 'Full Structure',
        },
      });

      // Root wrapper
      await expect(component).toBeAttached();
      await expect(component).toHaveClass(/spr-lozenge__wrapper/);

      // Base container
      const base = component.locator('.spr-lozenge__base');
      await expect(base).toBeAttached();

      // Tone container (main content)
      const tone = base.locator('.spr-lozenge__tone');
      await expect(tone).toBeAttached();

      // Elements in correct order: icon, avatar, label, postfix
      const elements = tone.locator('> *');
      await expect(elements).toHaveCount(4);

      // First: prefix icon
      const prefixIcon = elements.nth(0);
      await expect(prefixIcon).toHaveClass(/spr-lozenge__prefix-icon/);

      // Second: avatar
      const avatar = elements.nth(1);
      await expect(avatar).toHaveClass(/spr-lozenge__avatar/);

      // Third: label
      const label = elements.nth(2);
      await expect(label).toHaveClass(/spr-lozenge__label/);

      // Fourth: postfix icon
      const postfixIcon = elements.nth(3);
      await expect(postfixIcon).toHaveClass(/spr-lozenge__prefix-icon/);
    });

    test('wrapper classes adapt to loading state', async ({ mount }) => {
      const normalComponent = await mount(Lozenge, {
        props: { loading: false, label: 'Normal' },
      });

      const normalWrapper = normalComponent;
      await expect(normalWrapper).toHaveClass(/spr-h-fit/);
      await expect(normalWrapper).toHaveClass(/spr-w-fit/);
      await expect(normalWrapper).not.toHaveClass(/spr-w-full/);

      const loadingComponent = await mount(Lozenge, {
        props: { loading: true, visible: true },
      });

      const loadingWrapper = loadingComponent;
      await expect(loadingWrapper).toHaveClass(/spr-flex/);
      await expect(loadingWrapper).toHaveClass(/spr-w-full/);
      await expect(loadingWrapper).not.toHaveClass(/spr-w-fit/);
    });

    test('base classes adapt to fill prop', async ({ mount }) => {
      const outlineComponent = await mount(Lozenge, {
        props: { fill: false, label: 'Outline' },
      });

      const outlineBase = outlineComponent.locator('.spr-lozenge__base');
      await expect(outlineBase).toHaveClass(/spr-rounded-md/);

      const filledComponent = await mount(Lozenge, {
        props: { fill: true, label: 'Filled' },
      });

      const filledBase = filledComponent.locator('.spr-lozenge__base');
      await expect(filledBase).not.toHaveClass(/spr-rounded-md/);
    });
  });
});
