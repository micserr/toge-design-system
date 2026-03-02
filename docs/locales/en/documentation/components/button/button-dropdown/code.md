---
title: Button Dropdown — Code Documentation
description: Code examples, demos, and API reference for the Sprout Button Dropdown component.
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

<script setup>
import SprButtonDropdown from '@/components/button/button-dropdown/button-dropdown.vue';
import { ref } from 'vue';

const menuList = ref([
  { text: 'Add', value: 'add', icon: 'ph:check', iconColor: 'spr-text-color-supporting', onClickFn: () => { alert('Add was clicked.') } },
  { text: 'Delete', value: 'delete', icon: 'ph:trash', textColor: 'spr-text-color-danger-base', onClickFn: () => { alert('Delete was clicked.') } },
]);
const selected = ref([]);
const mainButtonClicked = () => { alert('Main button was clicked.') };
</script>

## Code Documentation

### Import

```vue
<script lang="ts" setup>
import SprButtonDropdown from "@/components/button/button-dropdown/button-dropdown.vue";
</script>
```

### Basic Usage

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button-dropdown
    dropdown-id="code-example1"
    v-model="selected"
    :menu-list="menuList"
    width="160px"
    popper-width="160px"
    @click="mainButtonClicked"
  >
    Button Dropdown
  </spr-button-dropdown>
</div>

```vue
<template>
  <spr-button-dropdown
    dropdown-id="example1"
    v-model="selected"
    :menu-list="menuList"
    width="160px"
    popper-width="160px"
    @click="mainButtonClicked"
  >
    Button Dropdown
  </spr-button-dropdown>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const selected = ref([]);
const menuList = ref([
  {
    text: 'Add',
    value: 'add',
    icon: 'ph:check',
    iconColor: 'spr-text-color-supporting',
    onClickFn: () => { alert('Add was clicked.') },
  },
  {
    text: 'Delete',
    value: 'delete',
    icon: 'ph:trash',
    textColor: 'spr-text-color-danger-base',
    onClickFn: () => { alert('Delete was clicked.') },
  },
]);

const mainButtonClicked = () => { alert('Main button was clicked.') };
</script>
```

### Tone

Controls the button dropdown's color theme. Available tones: `neutral` (default) and `success`.

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button-dropdown dropdown-id="code-example2" v-model="selected" :menu-list="menuList" tone="neutral">
    Neutral
  </spr-button-dropdown>
  <spr-button-dropdown dropdown-id="code-example3" v-model="selected" :menu-list="menuList" tone="success">
    Success
  </spr-button-dropdown>
</div>

```html
<spr-button-dropdown dropdown-id="example2" v-model="selected" :menu-list="menuList" tone="neutral">
  Neutral
</spr-button-dropdown>
<spr-button-dropdown dropdown-id="example3" v-model="selected" :menu-list="menuList" tone="success">
  Success
</spr-button-dropdown>
```

### Sizes

Defines the button dropdown's physical dimensions.

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button-dropdown v-model="selected" dropdown-id="code-example4" :menu-list="menuList" size="small">
    Small
  </spr-button-dropdown>
  <spr-button-dropdown v-model="selected" dropdown-id="code-example5" :menu-list="menuList">
    Medium
  </spr-button-dropdown>
  <spr-button-dropdown v-model="selected" dropdown-id="code-example6" :menu-list="menuList" size="large">
    Large
  </spr-button-dropdown>
</div>

```html
<spr-button-dropdown v-model="selected" dropdown-id="example4" :menu-list="menuList" size="small">
  Small
</spr-button-dropdown>
<spr-button-dropdown v-model="selected" dropdown-id="example5" :menu-list="menuList">
  Medium
</spr-button-dropdown>
<spr-button-dropdown v-model="selected" dropdown-id="example6" :menu-list="menuList" size="large">
  Large
</spr-button-dropdown>
```

### Variant

Controls the visual emphasis level. Available variants: `primary` (default) and `secondary`.

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button-dropdown v-model="selected" dropdown-id="code-example7" :menu-list="menuList" variant="primary">
    Primary
  </spr-button-dropdown>
  <spr-button-dropdown v-model="selected" dropdown-id="code-example8" :menu-list="menuList" variant="secondary">
    Secondary
  </spr-button-dropdown>
</div>

```html
<spr-button-dropdown v-model="selected" dropdown-id="example7" :menu-list="menuList" variant="primary">
  Primary
</spr-button-dropdown>
<spr-button-dropdown v-model="selected" dropdown-id="example8" :menu-list="menuList" variant="secondary">
  Secondary
</spr-button-dropdown>
```

### Disabled

Prevents user interaction on both the main button and dropdown trigger.

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button-dropdown v-model="selected" dropdown-id="code-example9" :menu-list="menuList" disabled>
    Disabled
  </spr-button-dropdown>
  <spr-button-dropdown v-model="selected" dropdown-id="code-example10" :menu-list="menuList" variant="secondary" disabled>
    Disabled
  </spr-button-dropdown>
</div>

```html
<spr-button-dropdown v-model="selected" dropdown-id="example9" :menu-list="menuList" disabled>
  Disabled
</spr-button-dropdown>
<spr-button-dropdown v-model="selected" dropdown-id="example10" :menu-list="menuList" variant="secondary" disabled>
  Disabled
</spr-button-dropdown>
```

## API Reference

### Props

| Name | Description | Type | Default |
|------|-------------|------|---------|
| `modelValue` | Currently selected menu item(s). Used with `v-model` for two-way binding. | `MenuListType[] \| string[] \| Record<string, unknown>[]` | `[]` |
| `menuList` | Array of options to display in the dropdown menu. | `MenuListType[] \| string[] \| Record<string, unknown>[]` | `[]` |
| `dropdownId` | Required unique identifier for the dropdown component. | `string` | Required |
| `tone` | Controls the color theme. | `'neutral' \| 'success'` | `'neutral'` |
| `variant` | Controls the visual style. | `'primary' \| 'secondary'` | `'primary'` |
| `size` | Controls the size of the button dropdown. | `'small' \| 'medium' \| 'large'` | `'medium'` |
| `disabled` | Prevents user interaction on both buttons. | `boolean` | `false` |
| `width` | Sets the width of the entire button dropdown. | `string` | `'fit-content'` |
| `popperWidth` | Sets the width of the dropdown menu container. | `string` | `'fit-content'` |
| `popperInnerWidth` | Sets the width of the content inside the dropdown menu. | `string` | `'unset'` |
| `placement` | Controls the position of the dropdown menu relative to the button. | `'bottom' \| 'top' \| 'left' \| 'right' \| ...` | `'bottom'` |

### Events

| Name | Description | Parameters |
|------|-------------|------------|
| `click` | Emitted when the main (left) button is clicked. | `(event: MouseEvent)` |
| `update:modelValue` | Emitted when a selection is made in the dropdown menu. | `MenuListType[] \| string[] \| Record<string, unknown>[]` |

### Slots

| Name | Description |
|------|-------------|
| `default` | Content for the main (left) button. The dropdown button (right) always displays a caret-down icon. |

### MenuListType Interface

```typescript
type MenuListType = {
  text: string;           // Display text for the menu item
  value: string | number; // Unique identifier for the item
  icon?: string;          // Optional Iconify icon name
  iconColor?: string;     // CSS class for icon color
  textColor?: string;     // CSS class for text color
  onClickFn?: () => void; // Function to call when item is clicked
  disabled?: boolean;     // Whether the item is disabled
  subtext?: string;       // Secondary text line
  subvalue?: string;      // Secondary value
  sublevel?: MenuListType[]; // Nested menu items
  group?: string;         // Grouping identifier
};
```
