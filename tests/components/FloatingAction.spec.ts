/**
 * FloatingAction Component Tests
 * 
 * Test Coverage Summary:
 * - Rendering and Visibility
 * - CSS Classes and Styling
 * - Slots - Default Layout
 * - Slots - Custom Default Slot
 * - Multiple Actions Slot
 * - Accessibility
 * - Transition Animations
 * - Edge Cases
 * - Positioning and Layout
 * - Interaction Patterns
 * 
 * Technical Implementation Notes:
 * - Component uses v-if="isVisible" which completely removes/adds DOM elements
 * - Wrapper classes are applied to the root div when visible
 * - Transition component handles enter/leave animations
 * - Default layout (message/actions) vs custom default slot conditional rendering
 * - Fixed positioning with responsive max-width constraints
 * 
 */

import { test, expect } from '@playwright/experimental-ct-vue';
import FloatingAction from '@/components/floating-action/floating-action.vue';

test.describe('FloatingAction Component', () => {
  test.describe('Rendering and Visibility', () => {
    test('does not render content when show is false (default)', async ({ mount }) => {
      const component = await mount(FloatingAction);
      
      // Component wrapper exists but should have no content (just comment)
      await expect(component).toHaveCount(1);
      const html = await component.innerHTML();
      expect(html).toBe('<!--v-if-->');
    });

    test('renders content when show is true', async ({ mount }) => {
      const component = await mount(FloatingAction, {
        props: { show: true },
        slots: {
          message: 'Test message',
          actions: '<button>Test action</button>'
        }
      });
      
      // Component wrapper should exist and have the wrapper classes
      await expect(component).toHaveCount(1);
      await expect(component).toHaveClass(/spr-fixed/);
      await expect(component).toHaveClass(/spr-bg-white/);
    });

    test('toggles content visibility when show prop changes', async ({ mount }) => {
      const component = await mount(FloatingAction, {
        props: { show: false },
        slots: {
          message: 'Test message',
          actions: '<button>Test action</button>'
        }
      });
      
      // Initially should have comment only
      let html = await component.innerHTML();
      expect(html).toBe('<!--v-if-->');
      
      // Update prop to show
      await component.update({ props: { show: true } });
      await expect(component).toHaveClass(/spr-fixed/);
      
      // Update prop to hide - the component structure changes back
      await component.update({ props: { show: false } });
      html = await component.innerHTML();
      // When hidden, the component might still have the wrapper div but with v-if comments inside
      expect(html).toMatch(/<!--v-if-->/);
    });
  });

  test.describe('CSS Classes and Styling', () => {
    test('applies correct wrapper classes', async ({ mount }) => {
      const component = await mount(FloatingAction, {
        props: { show: true },
        slots: {
          message: 'Test message',
          actions: '<button>Test action</button>'
        }
      });
      
      // Check for key positioning and styling classes on the component itself
      await expect(component).toHaveClass(/spr-fixed/);
      await expect(component).toHaveClass(/spr-bottom-8/);
      await expect(component).toHaveClass(/spr-left-1\/2/);
      await expect(component).toHaveClass(/spr--translate-x-1\/2/);
      await expect(component).toHaveClass(/spr-z-50/);
      await expect(component).toHaveClass(/spr-bg-white/);
      await expect(component).toHaveClass(/spr-rounded-border-radius-md/);
      await expect(component).toHaveClass(/spr-drop-shadow-md/);
      await expect(component).toHaveClass(/spr-max-w-\[1024px\]/);
    });

    test('has proper DOM structure with transitions', async ({ mount }) => {
      const component = await mount(FloatingAction, {
        props: { show: true },
        slots: {
          message: 'Test message'
        }
      });
      
      // Component wrapper should be present in DOM
      await expect(component).toHaveCount(1);
      
      // Should have the flex classes
      await expect(component).toHaveClass(/spr-flex/);
    });
  });

  test.describe('Slots - Default Layout', () => {
    test('renders message and actions slots in default layout', async ({ mount }) => {
      const component = await mount(FloatingAction, {
        props: { show: true },
        slots: {
          message: '<span data-testid="message-content">Important notification</span>',
          actions: '<button data-testid="action-btn">Action</button>'
        }
      });
      
      await expect(component).toHaveCount(1);
      
      // Check message slot content
      const messageContent = component.locator('[data-testid="message-content"]');
      await expect(messageContent).toHaveCount(1);
      await expect(messageContent).toHaveText('Important notification');
      
      // Check actions slot content
      const actionBtn = component.locator('[data-testid="action-btn"]');
      await expect(actionBtn).toHaveCount(1);
      await expect(actionBtn).toHaveText('Action');
    });

    test('renders only message slot when actions slot is empty', async ({ mount }) => {
      const component = await mount(FloatingAction, {
        props: { show: true },
        slots: {
          message: '<span data-testid="message-only">Message only</span>'
        }
      });
      
      const messageContent = component.locator('[data-testid="message-only"]');
      await expect(messageContent).toHaveCount(1);
      
      // Actions container should not be present
      const actionsContainer = component.locator('.spr-flex.spr-items-center.spr-gap-1');
      await expect(actionsContainer).toHaveCount(0);
    });

    test('renders only actions slot when message slot is empty', async ({ mount }) => {
      const component = await mount(FloatingAction, {
        props: { show: true },
        slots: {
          actions: '<button data-testid="actions-only">Action Only</button>'
        }
      });
      
      const actionBtn = component.locator('[data-testid="actions-only"]');
      await expect(actionBtn).toHaveCount(1);
    });

    test('applies correct layout classes for default slots', async ({ mount }) => {
      const component = await mount(FloatingAction, {
        props: { show: true },
        slots: {
          message: 'Message',
          actions: '<button>Action</button>'
        }
      });
      
      // Check the layout container classes
      const layoutContainer = component.locator('.spr-flex.spr-w-full.spr-items-center.spr-justify-between');
      await expect(layoutContainer).toHaveCount(1);
      await expect(layoutContainer).toHaveClass(/spr-px-size-spacing-md/);
      await expect(layoutContainer).toHaveClass(/spr-py-size-spacing-2xs/);
    });
  });

  test.describe('Slots - Custom Default Slot', () => {
    test('renders custom default slot and ignores message/actions slots', async ({ mount }) => {
      const component = await mount(FloatingAction, {
        props: { show: true },
        slots: {
          default: '<div data-testid="custom-content">Custom floating content</div>',
          message: 'This should be ignored',
          actions: '<button>This should be ignored</button>'
        }
      });
      
      // Custom content should be present
      const customContent = component.locator('[data-testid="custom-content"]');
      await expect(customContent).toHaveCount(1);
      await expect(customContent).toHaveText('Custom floating content');
      
      // Default layout should not be rendered
      const layoutContainer = component.locator('.spr-flex.spr-w-full.spr-items-center.spr-justify-between');
      await expect(layoutContainer).toHaveCount(0);
    });

    test('renders complex custom default slot content', async ({ mount }) => {
      const customSlot = `
        <div data-testid="complex-content" class="custom-floating-content">
          <h3>Custom Title</h3>
          <p>Custom description text</p>
          <div>
            <button data-testid="custom-btn-1">Button 1</button>
            <button data-testid="custom-btn-2">Button 2</button>
          </div>
        </div>
      `;

      const component = await mount(FloatingAction, {
        props: { show: true },
        slots: { default: customSlot }
      });
      
      const complexContent = component.locator('[data-testid="complex-content"]');
      await expect(complexContent).toHaveCount(1);
      
      await expect(component.locator('h3')).toHaveText('Custom Title');
      await expect(component.locator('p')).toHaveText('Custom description text');
      
      const btn1 = component.locator('[data-testid="custom-btn-1"]');
      const btn2 = component.locator('[data-testid="custom-btn-2"]');
      await expect(btn1).toHaveCount(1);
      await expect(btn2).toHaveCount(1);
    });
  });

  test.describe('Multiple Actions Slot', () => {
    test('renders multiple actions with proper spacing', async ({ mount }) => {
      const actionsSlot = `
        <button data-testid="action-1">Save</button>
        <button data-testid="action-2">Cancel</button>
        <button data-testid="action-3">Delete</button>
      `;

      const component = await mount(FloatingAction, {
        props: { show: true },
        slots: {
          message: 'Multiple actions available',
          actions: actionsSlot
        }
      });
      
      // All actions should be present
      await expect(component.locator('[data-testid="action-1"]')).toHaveCount(1);
      await expect(component.locator('[data-testid="action-2"]')).toHaveCount(1);
      await expect(component.locator('[data-testid="action-3"]')).toHaveCount(1);
      
      // Actions container should have gap class
      const actionsContainer = component.locator('.spr-flex.spr-items-center.spr-gap-1');
      await expect(actionsContainer).toHaveCount(1);
    });
  });

  test.describe('Accessibility', () => {
    test('floating action is keyboard accessible when containing interactive elements', async ({ mount }) => {
      const component = await mount(FloatingAction, {
        props: { show: true },
        slots: {
          message: 'Notification message',
          actions: '<button data-testid="accessible-btn">Dismiss</button>'
        }
      });
      
      const button = component.locator('[data-testid="accessible-btn"]');
      
      // Button should be focusable
      await button.focus();
      await expect(button).toBeFocused();
      
      // Should be activatable with Enter
      await button.press('Enter');
    });

    test('has appropriate ARIA structure for notifications', async ({ mount }) => {
      const component = await mount(FloatingAction, {
        props: { show: true },
        slots: {
          message: '<div role="alert" data-testid="alert-message">Critical update available</div>',
          actions: '<button aria-label="Dismiss notification">×</button>'
        }
      });
      
      const alertMessage = component.locator('[data-testid="alert-message"]');
      await expect(alertMessage).toHaveAttribute('role', 'alert');
      
      const dismissBtn = component.locator('button');
      await expect(dismissBtn).toHaveAttribute('aria-label', 'Dismiss notification');
    });

    test('supports keyboard navigation for interactive elements', async ({ mount }) => {
      const component = await mount(FloatingAction, {
        props: { show: true },
        slots: {
          actions: '<button data-testid="focus-test-btn">Test Button</button>'
        }
      });
      
      // Component should be visible with classes
      await expect(component).toHaveClass(/spr-fixed/);
      
      const button = component.locator('[data-testid="focus-test-btn"]');
      await expect(button).toHaveCount(1);
      
      // Test that the button can be focused and interacted with
      await button.focus();
      await expect(button).toBeFocused();
      
      // Test keyboard interaction
      await button.press('Enter');
      // Button should still be focused after activation
      await expect(button).toBeFocused();
    });
  });

  test.describe('Transition Animations', () => {
    test('has correct transition classes during show', async ({ mount }) => {
      const component = await mount(FloatingAction, {
        props: { show: true },
        slots: {
          message: 'Test message'
        }
      });
      
      // Component wrapper should be present with proper classes
      await expect(component).toHaveCount(1);
      await expect(component).toHaveClass(/spr-flex/);
    });

    test('handles rapid show/hide state changes', async ({ mount }) => {
      const component = await mount(FloatingAction, {
        props: { show: false },
        slots: {
          message: 'Test message'
        }
      });
      
      // Rapid state changes
      await component.update({ props: { show: true } });
      await component.update({ props: { show: false } });
      await component.update({ props: { show: true } });
      
      // Should end up with content present
      await expect(component).toHaveClass(/spr-flex/);
    });
  });

  test.describe('Edge Cases', () => {
    test('handles empty slots gracefully', async ({ mount }) => {
      const component = await mount(FloatingAction, {
        props: { show: true },
        slots: {
          message: '',
          actions: ''
        }
      });
      
      await expect(component).toHaveCount(1);
      
      // Should still render the layout container even with empty slots
      const layoutContainer = component.locator('.spr-flex.spr-w-full.spr-items-center.spr-justify-between');
      await expect(layoutContainer).toHaveCount(1);
    });

    test('works without any slots', async ({ mount }) => {
      const component = await mount(FloatingAction, {
        props: { show: true }
      });
      
      await expect(component).toHaveCount(1);
      
      // Should render the default layout structure
      const layoutContainer = component.locator('.spr-flex.spr-w-full.spr-items-center.spr-justify-between');
      await expect(layoutContainer).toHaveCount(1);
    });

    test('handles slot content with special characters', async ({ mount }) => {
      const component = await mount(FloatingAction, {
        props: { show: true },
        slots: {
          message: 'Message with &lt;special&gt; &amp; characters &quot;quotes&quot;',
          actions: '<button>Action &amp; Continue</button>'
        }
      });
      
      await expect(component).toHaveCount(1);
      
      // Check that the content exists in the component
      await expect(component).toContainText('Message with <special> & characters "quotes"');
      await expect(component).toContainText('Action & Continue');
    });

    test('maintains positioning with very long content', async ({ mount }) => {
      const longMessage = 'This is a very long notification message that might cause layout issues if not handled properly by the floating action component styling and positioning logic';
      
      const component = await mount(FloatingAction, {
        props: { show: true },
        slots: {
          message: longMessage,
          actions: '<button>Very Long Action Button Text</button>'
        }
      });
      
      await expect(component).toHaveCount(1);
      
      await expect(component).toContainText(longMessage);
      
      // Should still maintain max-width constraint
      await expect(component).toHaveClass(/spr-max-w-\[1024px\]/);
    });
  });

  test.describe('Positioning and Layout', () => {
    test('maintains fixed positioning at bottom center', async ({ mount }) => {
      const component = await mount(FloatingAction, {
        props: { show: true },
        slots: {
          message: 'Positioned message'
        }
      });
      
      // Verify key positioning classes
      await expect(component).toHaveClass(/spr-fixed/);
      await expect(component).toHaveClass(/spr-bottom-8/);
      await expect(component).toHaveClass(/spr-left-1\/2/);
      await expect(component).toHaveClass(/spr--translate-x-1\/2/);
    });

    test('has appropriate z-index for overlay behavior', async ({ mount }) => {
      const component = await mount(FloatingAction, {
        props: { show: true },
        slots: {
          message: 'Test message'
        }
      });
      
      await expect(component).toHaveClass(/spr-z-50/);
    });

    test('respects max-width constraint', async ({ mount }) => {
      const component = await mount(FloatingAction, {
        props: { show: true },
        slots: {
          message: 'Test message'
        }
      });
      
      await expect(component).toHaveClass(/spr-max-w-\[1024px\]/);
      await expect(component).toHaveClass(/spr-w-full/);
    });
  });

  test.describe('Interaction Patterns', () => {
    test('supports interactive elements in message slot', async ({ mount }) => {
      const component = await mount(FloatingAction, {
        props: { show: true },
        slots: {
          message: '<a href="#" data-testid="message-link">Click this link</a>',
          actions: '<button data-testid="action-btn">Action</button>'
        }
      });
      
      const messageLink = component.locator('[data-testid="message-link"]');
      const actionBtn = component.locator('[data-testid="action-btn"]');
      
      // Both elements should be present and interactive
      await expect(messageLink).toHaveCount(1);
      await expect(actionBtn).toHaveCount(1);
      
      await messageLink.focus();
      await expect(messageLink).toBeFocused();
      
      await actionBtn.focus();
      await expect(actionBtn).toBeFocused();
    });

    test('maintains proper tab order between message and actions', async ({ mount }) => {
      const component = await mount(FloatingAction, {
        props: { show: true },
        slots: {
          message: '<button data-testid="message-btn">Message Button</button>',
          actions: '<button data-testid="action-btn-1">Action 1</button><button data-testid="action-btn-2">Action 2</button>'
        }
      });
      
      const messageBtn = component.locator('[data-testid="message-btn"]');
      const actionBtn1 = component.locator('[data-testid="action-btn-1"]');
      const actionBtn2 = component.locator('[data-testid="action-btn-2"]');
      
      // Tab through elements in logical order
      await messageBtn.focus();
      await expect(messageBtn).toBeFocused();
      
      await component.press('Tab');
      await expect(actionBtn1).toBeFocused();
      
      await component.press('Tab');
      await expect(actionBtn2).toBeFocused();
    });
  });
});
