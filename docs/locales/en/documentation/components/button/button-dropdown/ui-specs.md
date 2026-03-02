---
title: Button Dropdown — UI Specs
description: Anatomy, sizing, spacing, and design token specifications for the Sprout Button Dropdown component.
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

## UI Specs

### Key Features

- 2 tones: `neutral`, `success`
- 3 sizes: `small`, `medium`, `large`
- 2 variants: `primary`, `secondary`
- Composed of a main button + dropdown trigger button + dropdown menu
- Customizable dropdown width and placement
- Menu items support icons, text colors, click handlers, and disabled states

### Anatomy

The Button Dropdown is composed of three main parts:

| # | Part | Description | Required |
|---|------|-------------|----------|
| 1 | Main Button | The larger button on the left that triggers the primary action via the `click` event. | Yes |
| 2 | Dropdown Trigger | The smaller button on the right with a caret-down icon that opens the dropdown menu. | Yes |
| 3 | Dropdown Menu | The popover menu that appears when the trigger is clicked, containing the items from `menuList`. | Yes |

### Component Structure

<div class="spr-flex spr-items-center spr-gap-2 spr-mt-4 spr-mb-4">
  <spr-button-dropdown dropdown-id="specs-1" v-model="selected" :menu-list="menuList" width="180px" popper-width="180px">
    Main Action
  </spr-button-dropdown>
</div>

The main button has `spr-rounded-r-none` (right corners removed) and a right border separator. The dropdown trigger has `spr-rounded-l-none` (left corners removed) to create a seamless joined appearance.

### Sizing

#### Size Reference

<div class="spr-flex spr-items-end spr-gap-4 spr-mt-4 spr-mb-4">
  <div class="spr-text-center">
    <spr-button-dropdown dropdown-id="specs-s" v-model="selected" :menu-list="menuList" size="small">Small</spr-button-dropdown>
    <div class="spr-mt-2 spr-text-xs spr-text-color-subtle">Small</div>
  </div>
  <div class="spr-text-center">
    <spr-button-dropdown dropdown-id="specs-m" v-model="selected" :menu-list="menuList">Medium</spr-button-dropdown>
    <div class="spr-mt-2 spr-text-xs spr-text-color-subtle">Medium</div>
  </div>
  <div class="spr-text-center">
    <spr-button-dropdown dropdown-id="specs-l" v-model="selected" :menu-list="menuList" size="large">Large</spr-button-dropdown>
    <div class="spr-mt-2 spr-text-xs spr-text-color-subtle">Large</div>
  </div>
</div>

Sizing inherits from the base Button component. Both the main button and dropdown trigger scale together.

### Spacing & Layout

| Property | Value | Description |
|----------|-------|-------------|
| Container | `spr-flex spr-h-fit spr-flex-row` | Horizontal flex layout, height fits content |
| Main button right border | 1px | Separator between main button and dropdown trigger |
| Main button corners | `spr-rounded-r-none` | Right corners removed |
| Dropdown trigger corners | `spr-rounded-l-none` | Left corners removed |
| Default width | `fit-content` | Both component and popper width default to fit-content |

### Design Tokens

#### Border Separator Colors

| Tone | Enabled | Disabled |
|------|---------|----------|
| Neutral | `spr-border-r-mushroom-200` | `spr-border-r-mushroom-200` |
| Success | `spr-border-r-kangkong-800` | `spr-border-r-mushroom-200` |

#### Variant Styles

| Variant | Main Button | Dropdown Trigger |
|---------|-------------|------------------|
| Primary | Solid background, right border visible | Solid background, transparent left border |
| Secondary | Outlined, solid border on all sides | Outlined, no left border (shared with main) |

#### Disabled State

| Variant | Style |
|---------|-------|
| Primary | `spr-border-solid spr-border-l-0 spr-border-t-0 spr-border-b-0` on main button |
| Secondary | Standard disabled styles inherited from Button |

### States

<div class="spr-mt-4 spr-mb-4">
  <div class="spr-flex spr-items-center spr-gap-4 spr-mb-3">
    <div class="spr-w-20 spr-text-xs spr-font-medium spr-text-color-subtle">Neutral</div>
    <spr-button-dropdown dropdown-id="specs-state-1" v-model="selected" :menu-list="menuList">Button</spr-button-dropdown>
    <spr-button-dropdown dropdown-id="specs-state-2" v-model="selected" :menu-list="menuList" variant="secondary">Button</spr-button-dropdown>
  </div>
  <div class="spr-flex spr-items-center spr-gap-4 spr-mb-3">
    <div class="spr-w-20 spr-text-xs spr-font-medium spr-text-color-subtle">Success</div>
    <spr-button-dropdown dropdown-id="specs-state-3" v-model="selected" :menu-list="menuList" tone="success">Button</spr-button-dropdown>
    <spr-button-dropdown dropdown-id="specs-state-4" v-model="selected" :menu-list="menuList" tone="success" variant="secondary">Button</spr-button-dropdown>
  </div>
  <div class="spr-flex spr-items-center spr-gap-4 spr-mb-3">
    <div class="spr-w-20 spr-text-xs spr-font-medium spr-text-color-subtle">Disabled</div>
    <spr-button-dropdown dropdown-id="specs-state-5" v-model="selected" :menu-list="menuList" disabled>Button</spr-button-dropdown>
    <spr-button-dropdown dropdown-id="specs-state-6" v-model="selected" :menu-list="menuList" variant="secondary" disabled>Button</spr-button-dropdown>
  </div>
</div>

### Dropdown Menu

The dropdown menu uses the `SprDropdown` component internally with `no-check-in-list` enabled. The menu placement can be customized with the `placement` prop, supporting all Popper.js placement options (`top`, `bottom`, `left`, `right` and their `-start`/`-end` variants).

<script setup>
import SprButtonDropdown from '@/components/button/button-dropdown/button-dropdown.vue';
import { ref } from 'vue';

const menuList = ref([
  { text: 'Add', value: 'add', icon: 'ph:check', iconColor: 'spr-text-color-supporting', onClickFn: () => { alert('Add was clicked.') } },
  { text: 'Delete', value: 'delete', icon: 'ph:trash', textColor: 'spr-text-color-danger-base', onClickFn: () => { alert('Delete was clicked.') } },
]);
const selected = ref([]);
</script>
