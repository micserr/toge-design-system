---
title: Button — Accessibility
description: ARIA attributes, keyboard interaction, focus management, and accessibility best practices for the Sprout Button component.
outline: deep
---

# Button

The Button component is a versatile and commonly used element in user interfaces, designed to trigger actions or events when clicked. It can be customized in various ways, including size, tone, and variant, to suit different design needs.

<ComponentTabBar component-name="button" :tabs="[
  { label: 'Live Example', slug: '' },
  { label: 'Code Docu', slug: 'code' },
  { label: 'Guidelines', slug: 'guidelines' },
  { label: 'UI Specs', slug: 'ui-specs' },
  { label: 'Accessibility', slug: 'accessibility' },
]" />

## Accessibility

The Button component is built on the native `<button>` HTML element, providing built-in keyboard navigation, focus management, and screen reader support.

### ARIA Attributes

| Attribute | Behavior |
|-----------|----------|
| `role` | Implicit `button` role from the native `<button>` element — no manual role needed. |
| `aria-disabled` | Automatically set to `"true"` when the `disabled` prop is `true`. |
| `aria-label` | Must be manually added for icon-only buttons to provide a text alternative. |
| `type` | Defaults to `"button"` to prevent accidental form submissions. Set to `"submit"` explicitly when needed. |

### Keyboard Interaction

| Key | Action |
|-----|--------|
| `Tab` | Moves focus to the button. Disabled buttons remain in the tab order with `aria-disabled`. |
| `Enter` | Activates the button (native behavior). |
| `Space` | Activates the button (native behavior). |

### Focus Management

The button provides a visible focus indicator using a 2px outline with a 4px offset (`spr-outline-2 spr-outline-offset-4`). This ensures:

- Focus is clearly visible for keyboard users
- The outline does not overlap the button content
- Focus state is consistent across all tones and variants

<div class="spr-flex spr-items-center spr-gap-4 spr-mt-4 spr-mb-4">
  <spr-button state="focus">Focused Neutral</spr-button>
  <spr-button tone="success" state="focus">Focused Success</spr-button>
  <spr-button tone="danger" state="focus">Focused Danger</spr-button>
</div>

### Color Contrast

All button states maintain WCAG 2.1 AA contrast ratios:

- **Primary variant** — Text on filled backgrounds meets minimum 4.5:1 contrast
- **Secondary variant** — Border and text colors meet minimum 3:1 contrast against the background
- **Tertiary variant** — Text color meets minimum 4.5:1 contrast against the page background
- **Disabled state** — Uses muted tokens to indicate non-interactivity while remaining perceivable

### For Designers

- Ensure sufficient color contrast between button text and background in all states
- Provide visible focus indicators — the 4px outline offset should not be removed or reduced
- Include hover and pressed states in all designs so developers can implement complete interaction feedback
- When using icon-only buttons, always include a text alternative in the design spec (for `aria-label`)
- Avoid relying solely on color to communicate meaning — the variant shape (filled, outlined, text-only) provides an additional visual signal

### For Developers

#### Standard Button

No additional attributes needed — the native `<button>` element handles everything:

```html
<spr-button @click="save">Save Changes</spr-button>
```

#### Icon-Only Button

Always provide `aria-label` for screen readers:

```html
<spr-button hasIcon aria-label="Delete item">
  <Icon icon="ph:trash" />
</spr-button>
```

#### Disabled Button with Context

When disabling a button, provide nearby context explaining why:

```html
<spr-button disabled>Submit</spr-button>
<p class="spr-text-xs spr-text-color-subtle spr-mt-1">
  Complete all required fields to submit.
</p>
```

#### Loading State

If implementing a loading pattern, maintain the button in the DOM and communicate the state:

```vue
<spr-button :disabled="isLoading" :aria-busy="isLoading">
  {{ isLoading ? 'Saving...' : 'Save' }}
</spr-button>
```

### Testing Checklist

- Button is reachable via `Tab` key
- Button activates with `Enter` and `Space`
- Focus indicator is clearly visible on all backgrounds
- Screen reader announces the button label correctly
- Icon-only buttons have descriptive `aria-label`
- Disabled buttons announce as disabled to screen readers
- Button type is correct (`button` for actions, `submit` for forms)
