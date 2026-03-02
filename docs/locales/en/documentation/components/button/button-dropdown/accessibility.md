---
title: Button Dropdown — Accessibility
description: ARIA attributes, keyboard interaction, and accessibility best practices for the Sprout Button Dropdown component.
outline: deep
---

# Button Dropdown

The Button Dropdown component combines two buttons with a dropdown menu, allowing users to trigger a primary action or select from a list of related options. This component is ideal for scenarios where a single button action is accompanied by additional, secondary actions accessible via a dropdown. It supports customization for tone, size, variant, and can be disabled as needed.

<ComponentTabBar component-name="button-dropdown" parent="button" :tabs="[
  { label: 'Live Example', slug: '' },
  { label: 'Code Docu', slug: 'code' },
  { label: 'Guidelines', slug: 'guidelines' },
  { label: 'UI Specs', slug: 'ui-specs' },
  { label: 'Accessibility', slug: 'accessibility' },
]" />

## Accessibility

The Button Dropdown component consists of two interactive elements — a main action button and a dropdown trigger — each built on native `<button>` elements for built-in keyboard and screen reader support.

### ARIA Attributes

| Attribute | Element | Behavior |
|-----------|---------|----------|
| `role` | Both buttons | Implicit `button` role from native `<button>` elements. |
| `aria-disabled` | Both buttons | Automatically set to `"true"` when the `disabled` prop is `true`. |
| `aria-haspopup` | Dropdown trigger | Indicates the trigger opens a menu. Handled by the internal `SprDropdown`. |
| `aria-expanded` | Dropdown trigger | Reflects whether the dropdown menu is currently open. |
| `id` | Dropdown | Set via the required `dropdownId` prop for accessibility and state management. |

### Keyboard Interaction

| Key | Action |
|-----|--------|
| `Tab` | Moves focus between the main button and dropdown trigger. Both are in the tab order. |
| `Enter` | On main button: triggers the primary `click` action. On dropdown trigger: toggles the dropdown menu. |
| `Space` | Same behavior as Enter for both buttons. |
| `Escape` | Closes the dropdown menu if open and returns focus to the trigger. |
| `Arrow Down` | When dropdown is open, moves focus through menu items. |
| `Arrow Up` | When dropdown is open, moves focus backward through menu items. |

### Focus Management

- Both the main button and dropdown trigger receive visible focus indicators inherited from the base Button component
- When the dropdown menu opens, focus management is handled by the internal `SprDropdown` component
- When the dropdown closes (via Escape or selection), focus returns to the dropdown trigger button
- Disabled Button Dropdowns remain perceivable but non-interactive

### Color Contrast

All button states maintain WCAG 2.1 AA contrast ratios:

- **Primary variant** — Text on filled backgrounds meets minimum 4.5:1 contrast
- **Secondary variant** — Border and text colors meet minimum 3:1 contrast against the background
- **Disabled state** — Uses muted tokens to indicate non-interactivity while remaining perceivable
- **Menu items** — Text and icons within the dropdown menu maintain sufficient contrast

### For Designers

- The two buttons (main + trigger) should be visually connected — they share a seamless border treatment
- Ensure the dropdown menu is visible and does not clip against viewport edges
- Use the `placement` prop to position the menu where there's sufficient space
- Destructive menu items should use `spr-text-color-danger-base` for clear visual signaling
- Include focus and hover states for both buttons and menu items in all designs

### For Developers

#### Standard Button Dropdown

```vue
<spr-button-dropdown
  dropdown-id="save-options"
  v-model="selected"
  :menu-list="menuList"
  @click="handleSave"
>
  Save
</spr-button-dropdown>
```

#### With Descriptive Menu Items

Provide clear, action-oriented labels for each menu item:

```typescript
const menuList = ref([
  {
    text: 'Save as Draft',
    value: 'draft',
    icon: 'ph:file-text',
    onClickFn: () => saveDraft(),
  },
  {
    text: 'Save and Close',
    value: 'save-close',
    icon: 'ph:check-circle',
    onClickFn: () => saveAndClose(),
  },
  {
    text: 'Discard Changes',
    value: 'discard',
    icon: 'ph:trash',
    textColor: 'spr-text-color-danger-base',
    onClickFn: () => confirmDiscard(),
  },
]);
```

#### Disabled State

When disabling, both the main button and dropdown trigger become non-interactive:

```html
<spr-button-dropdown
  dropdown-id="disabled-example"
  v-model="selected"
  :menu-list="menuList"
  disabled
>
  Save
</spr-button-dropdown>
```

### Testing Checklist

- Both main button and dropdown trigger are reachable via `Tab` key
- Main button activates with `Enter` and `Space`
- Dropdown trigger opens menu with `Enter` and `Space`
- Menu items are navigable with `Arrow Down` and `Arrow Up`
- `Escape` closes the dropdown and returns focus to the trigger
- Screen reader announces both buttons correctly
- Disabled state is announced to screen readers
- Menu items with `textColor` still maintain sufficient contrast
- The `dropdownId` prop is unique across all instances on the page
