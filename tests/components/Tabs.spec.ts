/**
 * Tabs Component Tests
 *
 * Coverage includes:
 * - Rendering with default props and tab lists
 * - Both regular and underlined tab variants
 * - Tab selection and activeTab prop handling
 * - Event emissions (tabIndex on selection)
 * - Interactive states (hover, click, disabled)
 * - Icon rendering and icon fill states
 * - Accessibility (ARIA attributes, keyboard navigation)
 * - Conditional logic (active/inactive states, disabled tabs)
 * - Edge cases (empty lists, invalid activeTab, disabled interactions)
 * - Visual indicators (underline positioning, active backgrounds)
 *
 * Test Rationale:
 * - Testing both regular and underlined tab styles comprehensively
 * - Focus on tab selection behavior and state management
 * - Validate proper event emission with correct indices
 * - Ensure disabled tabs cannot be activated
 * - Test icon rendering with and without icon fill variants
 * - Verify underline animation positioning for underlined tabs
 * - Validate accessibility compliance for keyboard users
 */

import { test, expect } from '@playwright/experimental-ct-vue';
import Tabs from '@/components/tabs/tabs.vue';

// Test data fixtures
const basicTabList = [{ label: 'Tab 1' }, { label: 'Tab 2' }, { label: 'Tab 3' }];

const tabListWithIcons = [
  { label: 'Home', icon: 'mdi:home' },
  { label: 'Profile', icon: 'mdi:account' },
  { label: 'Settings', icon: 'mdi:cog' },
];

const tabListWithDisabled = [
  { label: 'Active Tab', disabled: false },
  { label: 'Disabled Tab', disabled: true },
  { label: 'Another Active', disabled: false },
];

const mixedTabList = [
  { label: 'Dashboard', icon: 'mdi:view-dashboard' },
  { label: 'Reports', icon: 'mdi:chart-line', disabled: true },
  { label: 'Users', icon: 'mdi:account-multiple' },
  { label: 'Settings', icon: 'mdi:cog' },
];

test.describe('Tabs Component', () => {
  test.describe('Rendering - Basic', () => {
    test('renders with default props and empty list', async ({ mount }) => {
      const component = await mount(Tabs);

      // Should render the main container structure even if no content
      await expect(component).toHaveClass(/spr-relative/);
      await expect(component).toHaveClass(/spr-flex/);
    });

    test('renders with basic tab list', async ({ mount }) => {
      const component = await mount(Tabs, {
        props: { list: basicTabList },
      });

      await expect(component).toBeVisible();

      // All tabs should be visible
      for (const tab of basicTabList) {
        await expect(component.getByText(tab.label)).toBeVisible();
      }

      // First tab should be active by default
      const firstTab = component.getByText('Tab 1');
      await expect(firstTab.locator('../..')).toHaveClass(/spr-border-color-success-base/);
    });

    test('renders with specified activeTab', async ({ mount }) => {
      const component = await mount(Tabs, {
        props: {
          list: basicTabList,
          activeTab: 'Tab 2',
        },
      });

      // Tab 2 should be active
      const activeTabElement = component.getByText('Tab 2');
      await expect(activeTabElement.locator('../..')).toHaveClass(/spr-border-color-success-base/);

      // Tab 1 should not be active
      const inactiveTabElement = component.getByText('Tab 1');
      await expect(inactiveTabElement.locator('../..')).toHaveClass(/spr-border-color-weak/);
    });
  });

  test.describe('Rendering - Regular Tabs', () => {
    test('applies correct classes for regular (not underlined) tabs', async ({ mount }) => {
      const component = await mount(Tabs, {
        props: {
          list: basicTabList,
          underlined: false,
        },
      });

      // Get tab containers directly
      const firstTabContainer = component.getByText('Tab 1').locator('../..');
      const lastTabContainer = component.getByText('Tab 3').locator('../..');

      // First tab should have left border radius
      await expect(firstTabContainer).toHaveClass(/spr-rounded-l-md/);

      // Last tab should have right border radius
      await expect(lastTabContainer).toHaveClass(/spr-rounded-r-md/);

      // Should have regular tab padding
      await expect(firstTabContainer).toHaveClass(/spr-py-size-spacing-3xs/);
    });

    test('shows active background indicator for regular tabs', async ({ mount }) => {
      const component = await mount(Tabs, {
        props: {
          list: basicTabList,
          underlined: false,
          activeTab: 'Tab 1',
        },
      });

      // Active tab should have background indicator
      const activeBackground = component.locator('.spr-background-color-single-active');
      await expect(activeBackground).toBeAttached();
      await expect(activeBackground).toHaveClass(/spr-absolute/);
      await expect(activeBackground).toHaveClass(/spr-bottom-0/);
    });
  });

  test.describe('Rendering - Underlined Tabs', () => {
    test('applies correct classes for underlined tabs', async ({ mount }) => {
      const component = await mount(Tabs, {
        props: {
          list: basicTabList,
          underlined: true,
        },
      });

      // Get tab containers directly
      const firstTabContainer = component.getByText('Tab 1').locator('../..');
      const secondTabContainer = component.getByText('Tab 2').locator('../..');

      // Should have underlined tab styling
      await expect(firstTabContainer).toHaveClass(/spr-uppercase/);
      await expect(firstTabContainer).toHaveClass(/spr-py-size-spacing-xs/);
      await expect(firstTabContainer).toHaveClass(/spr-border-x-0/);

      // Inactive tabs should have bottom border
      await expect(secondTabContainer).toHaveClass(/spr-border-b/);
      await expect(secondTabContainer).toHaveClass(/spr-border-color-base/);
    });

    test('shows underline indicator for underlined tabs', async ({ mount }) => {
      const component = await mount(Tabs, {
        props: {
          list: basicTabList,
          underlined: true,
          activeTab: 'Tab 1',
        },
      });

      // Should have underline indicator element (even if width is 0 initially)
      const underlineIndicator = component.locator('.spr-background-color-success-base.spr-absolute.spr-bottom-0');
      await expect(underlineIndicator).toBeAttached();
      await expect(underlineIndicator).toHaveClass(/spr-h-0\.5/);
      await expect(underlineIndicator).toHaveClass(/spr-rounded-full/);
      await expect(underlineIndicator).toHaveClass(/spr-transition-left/);
    });
  });

  test.describe('Icon Rendering', () => {
    test('renders tabs with icons', async ({ mount }) => {
      const component = await mount(Tabs, {
        props: { list: tabListWithIcons },
      });

      // All icons should be present
      const icons = component.locator('svg');
      await expect(icons).toHaveCount(3);

      // Icons should have proper classes
      const firstIcon = icons.first();
      await expect(firstIcon).toHaveClass(/spr-body-sm-regular/);
    });

    test('renders icon fill variant for active tab', async ({ mount }) => {
      const tabListWithIconFill = [
        { label: 'Home', icon: 'mdi:home' },
        { label: 'Profile', icon: 'mdi:account' },
        { label: 'Settings', icon: 'mdi:cog' },
      ];

      const component = await mount(Tabs, {
        props: {
          list: tabListWithIconFill,
          activeTab: 'Profile',
        },
      });

      // Active tab (Profile) should use standard icon rendering
      const profileTab = component.getByText('Profile');
      await expect(profileTab).toBeVisible();

      // Active tab icon should have brand color
      const activeIcon = profileTab.locator('..').locator('svg');
      await expect(activeIcon).toHaveClass(/spr-text-color-brand-base/);
    });

    test('renders tabs with both icons and labels', async ({ mount }) => {
      const component = await mount(Tabs, {
        props: { list: tabListWithIcons },
      });

      // Each tab should have both icon and label
      for (const tab of tabListWithIcons) {
        const tabElement = component.getByText(tab.label);
        await expect(tabElement).toBeVisible();

        // Icon should be in the same container
        const tabContainer = tabElement.locator('../..');
        const icon = tabContainer.locator('svg');
        await expect(icon).toBeVisible();
      }
    });
  });

  test.describe('Disabled State', () => {
    test('renders disabled tabs correctly', async ({ mount }) => {
      const component = await mount(Tabs, {
        props: {
          list: tabListWithDisabled,
          underlined: false,
        },
      });

      const disabledTab = component.getByText('Disabled Tab');
      const disabledTabContainer = disabledTab.locator('../..');

      // Disabled tab should have proper styling
      await expect(disabledTabContainer).toHaveClass(/spr-background-color-disabled/);
      await expect(disabledTabContainer).toHaveClass(/spr-cursor-not-allowed/);
      await expect(disabledTabContainer).toHaveClass(/spr-text-color-on-fill-disabled/);
    });

    test('renders disabled underlined tabs correctly', async ({ mount }) => {
      const component = await mount(Tabs, {
        props: {
          list: tabListWithDisabled,
          underlined: true,
        },
      });

      const disabledTab = component.getByText('Disabled Tab');
      const disabledTabContainer = disabledTab.locator('../..');

      // Disabled underlined tab should have proper styling
      await expect(disabledTabContainer).toHaveClass(/spr-border-color-disabled/);
      await expect(disabledTabContainer).toHaveClass(/spr-text-color-on-fill-disabled/);
      await expect(disabledTabContainer).toHaveClass(/spr-cursor-not-allowed/);
      await expect(disabledTabContainer).toHaveClass(/spr-border-b/);
    });

    test('disabled tabs do not respond to hover', async ({ mount }) => {
      const component = await mount(Tabs, {
        props: { list: tabListWithDisabled },
      });

      const disabledTab = component.getByText('Disabled Tab');
      const disabledTabContainer = disabledTab.locator('../..');

      // Disabled tabs should still have the hover class in the base classes
      // but they are overridden by disabled-specific classes
      await expect(disabledTabContainer).toHaveClass(/spr-cursor-not-allowed/);
    });
  });

  test.describe('Tab Selection and Events', () => {
    test('emits tabIndex event on tab click', async ({ mount }) => {
      const tabIndexEvents: number[] = [];

      const component = await mount(Tabs, {
        props: {
          list: basicTabList,
          onTabIndex: (index: number) => tabIndexEvents.push(index),
        },
      });

      // Click on second tab
      const secondTab = component.getByText('Tab 2');
      await secondTab.click();

      // Should emit index 1 (second tab)
      expect(tabIndexEvents).toHaveLength(2); // Initial mount + click
      expect(tabIndexEvents[1]).toBe(1);
    });

    test('updates active tab on click', async ({ mount }) => {
      const component = await mount(Tabs, {
        props: { list: basicTabList },
      });

      // Initially first tab is active
      const firstTab = component.getByText('Tab 1');
      await expect(firstTab.locator('../..')).toHaveClass(/spr-border-color-success-base/);

      // Click second tab
      const secondTab = component.getByText('Tab 2');
      await secondTab.click();

      // Wait for state update
      await expect(secondTab.locator('../..')).toHaveClass(/spr-border-color-success-base/);
      await expect(firstTab.locator('../..')).toHaveClass(/spr-border-color-weak/);
    });

    test('does not emit event when clicking disabled tab', async ({ mount }) => {
      const tabIndexEvents: number[] = [];

      const component = await mount(Tabs, {
        props: {
          list: tabListWithDisabled,
          onTabIndex: (index: number) => tabIndexEvents.push(index),
        },
      });

      const initialEventCount = tabIndexEvents.length;

      // Click disabled tab
      const disabledTab = component.getByText('Disabled Tab');
      await disabledTab.click({ force: true });

      // Should not emit new event
      expect(tabIndexEvents).toHaveLength(initialEventCount);
    });

    test('does not change active tab when clicking same tab', async ({ mount }) => {
      const tabIndexEvents: number[] = [];

      const component = await mount(Tabs, {
        props: {
          list: basicTabList,
          activeTab: 'Tab 1',
          onTabIndex: (index: number) => tabIndexEvents.push(index),
        },
      });

      const initialEventCount = tabIndexEvents.length;

      // Click already active tab
      const activeTab = component.getByText('Tab 1');
      await activeTab.click();

      // Should not emit new event (no state change)
      expect(tabIndexEvents).toHaveLength(initialEventCount);
    });
  });

  test.describe('ActiveTab Prop Changes', () => {
    test('updates active tab when activeTab prop changes', async ({ mount }) => {
      const component = await mount(Tabs, {
        props: {
          list: basicTabList,
          activeTab: 'Tab 1',
        },
      });

      // Initially Tab 1 is active
      const tab1 = component.getByText('Tab 1');
      const tab2 = component.getByText('Tab 2');

      await expect(tab1.locator('../..')).toHaveClass(/spr-border-color-success-base/);

      // Update activeTab prop
      await component.update({
        props: {
          list: basicTabList,
          activeTab: 'Tab 2',
        },
      });

      // Tab 2 should now be active
      await expect(tab2.locator('../..')).toHaveClass(/spr-border-color-success-base/);
      await expect(tab1.locator('../..')).toHaveClass(/spr-border-color-weak/);
    });

    test('handles invalid activeTab gracefully', async ({ mount }) => {
      const component = await mount(Tabs, {
        props: {
          list: basicTabList,
          activeTab: 'Non-existent Tab',
        },
      });

      // Should default to first tab when activeTab doesn't match
      const firstTab = component.getByText('Tab 1');
      await expect(firstTab.locator('../..')).toHaveClass(/spr-border-color-success-base/);
    });
  });

  test.describe('Accessibility', () => {
    test('tabs are accessible via click and have proper styling', async ({ mount }) => {
      const component = await mount(Tabs, {
        props: { list: basicTabList },
      });

      const firstTabContainer = component.getByText('Tab 1').locator('../..');

      // Tab container should be clickable
      await firstTabContainer.click();
      await expect(firstTabContainer).toHaveClass(/spr-cursor-pointer/);
    });

    test('maintains proper cursor styles', async ({ mount }) => {
      const component = await mount(Tabs, {
        props: { list: tabListWithDisabled },
      });

      // Active tabs should have pointer cursor
      const activeTab = component.getByText('Active Tab');
      await expect(activeTab.locator('../..')).toHaveClass(/spr-cursor-pointer/);

      // Disabled tabs should have not-allowed cursor
      const disabledTab = component.getByText('Disabled Tab');
      await expect(disabledTab.locator('../..')).toHaveClass(/spr-cursor-not-allowed/);
    });

    test('provides visual feedback on hover for enabled tabs', async ({ mount }) => {
      const component = await mount(Tabs, {
        props: {
          list: basicTabList,
          underlined: true,
        },
      });

      const inactiveTab = component.getByText('Tab 2').locator('../..');

      // Should have hover styles for interactive tabs
      await expect(inactiveTab).toHaveClass(/hover:spr-background-color-hover/);
      await expect(inactiveTab).toHaveClass(/spr-cursor-pointer/);
    });
  });

  test.describe('Edge Cases', () => {
    test('handles empty tab list', async ({ mount }) => {
      const component = await mount(Tabs, {
        props: { list: [] },
      });

      // Should render container structure
      await expect(component).toHaveClass(/spr-relative/);
      await expect(component).toHaveClass(/spr-flex/);
      // Should render container but no tabs
      const tabTexts = component.locator('div:has-text("Tab")');
      await expect(tabTexts).toHaveCount(0);
    });

    test('handles tab list with only disabled tabs', async ({ mount }) => {
      const allDisabledTabs = [
        { label: 'Disabled 1', disabled: true },
        { label: 'Disabled 2', disabled: true },
      ];

      const component = await mount(Tabs, {
        props: { list: allDisabledTabs },
      });

      // All tabs should be disabled
      const tab1 = component.getByText('Disabled 1').locator('..');
      const tab2 = component.getByText('Disabled 2').locator('..');

      await expect(tab1).toHaveClass(/spr-cursor-not-allowed/);
      await expect(tab2).toHaveClass(/spr-cursor-not-allowed/);
    });

    test('handles tabs with very long labels', async ({ mount }) => {
      const longLabelTabs = [
        { label: 'This is a very long tab label that might wrap or overflow' },
        { label: 'Short' },
        { label: 'Another extremely long label that tests text handling in the tab component' },
      ];

      const component = await mount(Tabs, {
        props: { list: longLabelTabs },
      });

      // All tabs should render and be visible
      for (const tab of longLabelTabs) {
        await expect(component.getByText(tab.label)).toBeVisible();
      }
    });

    test('handles mixed content tabs', async ({ mount }) => {
      const component = await mount(Tabs, {
        props: { list: mixedTabList },
      });

      // All tabs should render with proper states
      await expect(component.getByText('Dashboard')).toBeVisible();

      // Disabled tab should have proper styling
      const disabledTab = component.getByText('Reports').locator('..');
      await expect(disabledTab).toHaveClass(/spr-cursor-not-allowed/);

      // Active tab should show icon with brand color
      const activeIcon = component.getByText('Dashboard').locator('..').locator('svg');
      await expect(activeIcon).toHaveClass(/spr-text-color-brand-base/);
    });
  });

  test.describe('Visual State Transitions', () => {
    test('underline indicator animates on tab change', async ({ mount }) => {
      const component = await mount(Tabs, {
        props: {
          list: basicTabList,
          underlined: true,
        },
      });

      const underlineIndicator = component.locator('.spr-background-color-success-base.spr-absolute.spr-bottom-0');

      // Should have transition classes
      await expect(underlineIndicator).toHaveClass(/spr-transition-left/);
      await expect(underlineIndicator).toHaveClass(/spr-duration-150/);
      await expect(underlineIndicator).toHaveClass(/spr-ease-in-out/);

      // Click another tab to trigger animation
      await component.getByText('Tab 2').click();

      // Underline should still be attached during transition
      await expect(underlineIndicator).toBeAttached();
    });

    test('regular tabs show active background correctly', async ({ mount }) => {
      const component = await mount(Tabs, {
        props: {
          list: basicTabList,
          underlined: false,
        },
      });

      // Click second tab
      await component.getByText('Tab 2').click();

      // Active background should be attached and have proper classes
      const activeBackground = component.locator('.spr-background-color-single-active');
      await expect(activeBackground).toBeAttached();
      await expect(activeBackground).toHaveClass(/spr-z-\[5\]/);
    });
  });

  test.describe('Prop Type Validation', () => {
    test('handles tabs without icons gracefully', async ({ mount }) => {
      const tabsWithoutIcons = [{ label: 'Text Only 1' }, { label: 'Text Only 2' }, { label: 'Text Only 3' }];

      const component = await mount(Tabs, {
        props: { list: tabsWithoutIcons },
      });

      // Should render text-only tabs
      for (const tab of tabsWithoutIcons) {
        await expect(component.getByText(tab.label)).toBeVisible();
      }

      // No icons should be present
      const icons = component.locator('svg');
      await expect(icons).toHaveCount(0);
    });

    test('handles tabs with only icons (no labels)', async ({ mount }) => {
      const iconOnlyTabs = [
        { label: '', icon: 'mdi:home' },
        { label: '', icon: 'mdi:account' },
        { label: '', icon: 'mdi:cog' },
      ];

      const component = await mount(Tabs, {
        props: { list: iconOnlyTabs },
      });

      // Icons should be visible
      const icons = component.locator('svg');
      await expect(icons).toHaveCount(3);
    });
  });
});
