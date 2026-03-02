---
title: Button Dropdown — Guidelines
description: Usage guidelines, variant selection, and best practices for the Sprout Button Dropdown component.
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

## Guidelines

### When to Use

Use the Button Dropdown when you need to offer a primary action alongside a set of related secondary actions. Common scenarios include:

- **Save with options** — "Save" as the primary action, with "Save as Draft", "Save and Close" in the dropdown
- **Create with variants** — "Create" as the main action, with "Create from Template", "Import" in the dropdown
- **Actions with alternatives** — When one action is dominant but alternatives should be accessible

### When NOT to Use

- **Single action** — Use a standard Button if there's only one action
- **Equal-weight actions** — If all actions are equally important, use separate buttons instead
- **Navigation** — Don't use Button Dropdown for navigation menus; use a dedicated nav component
- **Too many options** — If the dropdown has more than 5-7 items, consider a different pattern like a menu or command palette

### Variant Selection Guide

| Variant | Emphasis | When to Use |
|---------|----------|-------------|
| **Primary** | Highest | The main action group on the page. The dropdown contains related actions. |
| **Secondary** | Medium | Supporting action groups. Good for non-critical action sets. |

<div class="spr-flex spr-items-center spr-gap-2 spr-mt-4">
  <spr-button-dropdown dropdown-id="guide-1" v-model="selected" :menu-list="menuList" variant="primary">Primary</spr-button-dropdown>
  <spr-button-dropdown dropdown-id="guide-2" v-model="selected" :menu-list="menuList" variant="secondary">Secondary</spr-button-dropdown>
</div>

### Tone Selection Guide

| Tone | Purpose | Example |
|------|---------|---------|
| **Neutral** | General-purpose action groups. | "Save", "Export", "Create" |
| **Success** | Positive or confirming action groups. | "Approve", "Publish", "Deploy" |

> **Note:** Unlike the standard Button, the `danger` tone is not available for Button Dropdown. Destructive actions should use a standard danger Button with a confirmation dialog instead.

<div class="spr-flex spr-items-center spr-gap-2 spr-mt-4">
  <spr-button-dropdown dropdown-id="guide-3" v-model="selected" :menu-list="menuList">Neutral</spr-button-dropdown>
  <spr-button-dropdown dropdown-id="guide-4" v-model="selected" :menu-list="menuList" tone="success">Success</spr-button-dropdown>
</div>

### Menu Item Best Practices

- **Use clear, action-oriented labels** — Each menu item should describe the action: "Save as Draft", "Export as PDF"
- **Use icons purposefully** — Icons help users scan options quickly, but only add them when they provide real clarity
- **Use text color for emphasis** — Apply `textColor: 'spr-text-color-danger-base'` for destructive items like "Delete"
- **Order by frequency** — Place the most commonly used options at the top of the menu
- **Limit menu items** — Keep the dropdown to 3-7 items for quick scanning

### Do's and Don'ts

#### Do

- Use one primary Button Dropdown per section to maintain clear hierarchy
- Place destructive options (like "Delete") at the bottom of the menu with danger text color
- Provide an `onClickFn` for each menu item to handle the action directly
- Use the `width` and `popperWidth` props to ensure the dropdown doesn't clip content

#### Don't

- Don't place multiple primary Button Dropdowns side by side
- Don't use the dropdown for navigation links — use proper navigation components
- Don't mix unrelated actions in the same dropdown menu
- Don't use the Button Dropdown when a simple Select component would be more appropriate (e.g., for form inputs)

<script setup>
import SprButtonDropdown from '@/components/button/button-dropdown/button-dropdown.vue';
import { ref } from 'vue';

const menuList = ref([
  { text: 'Add', value: 'add', icon: 'ph:check', iconColor: 'spr-text-color-supporting', onClickFn: () => { alert('Add was clicked.') } },
  { text: 'Delete', value: 'delete', icon: 'ph:trash', textColor: 'spr-text-color-danger-base', onClickFn: () => { alert('Delete was clicked.') } },
]);
const selected = ref([]);
</script>
