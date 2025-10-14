---
title: Button Dropdown
descripttion: The Button Dropdown component combines a primary action button with a dropdown menu for additional options, supporting various tones, sizes, and variants.
outline: deep
---

# Button Dropdown

The Button Dropdown component combines two buttons with a dropdown menu, allowing users to trigger a primary action or select from a list of related options. This component is ideal for scenarios where a single button action is accompanied by additional, secondary actions accessible via a dropdown. It supports customization for tone, size, variant, and can be disabled as needed.

## Basic Usage

<div class="spr-flex spr-items-center spr-gap-2">
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
</div>

```vue
<template>
  <div class="spr-flex spr-items-center spr-gap-2">
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
  </div>
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
    onClickFn: () => {
      alert('Add was clicked.');
    },
  },
  {
    text: 'Delete',
    value: 'delete',
    icon: 'ph:trash',
    textColor: 'spr-text-color-danger-base',
    onClickFn: () => {
      alert('Delete was clicked.');
    },
  },
]);

const mainButtonClicked = () => {
  alert('Main button was clicked.');
};
</script>
```

## Tone

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button-dropdown
    dropdown-id="example2"
    v-model="selectedNeutral"
    :menu-list="menuList"
    tone="neutral"
  >
    Neutral
  </spr-button-dropdown>
  <spr-button-dropdown
    dropdown-id="example3"
    v-model="selectedSuccess"
    :menu-list="menuList"
    tone="success"
  >
    Success
  </spr-button-dropdown>
</div>

```vue
<spr-button-dropdown dropdown-id="example2" v-model="selectedNeutral" :menu-list="menuList" tone="neutral">
  Neutral
</spr-button-dropdown>
<spr-button-dropdown dropdown-id="example3" v-model="selectedSuccess" :menu-list="menuList" tone="success">
  Success
</spr-button-dropdown>
```

## Sizes

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button-dropdown
    v-model="selectedSmall"
    dropdown-id="example4"
    :menu-list="menuList"
    size="small"
  >
    Small
  </spr-button-dropdown>
  <spr-button-dropdown
    v-model="selectedMedium"
    dropdown-id="example5"
    :menu-list="menuList"
  >
    Medium
  </spr-button-dropdown>
  <spr-button-dropdown
    v-model="selectedLarge"
    dropdown-id="example6"
    :menu-list="menuList"
    size="large"
  >
    Large
  </spr-button-dropdown>
</div>

```vue
<spr-button-dropdown v-model="selectedSmall" dropdown-id="example4" :menu-list="menuList" size="small">
  Small
</spr-button-dropdown>
<spr-button-dropdown v-model="selectedMedium" dropdown-id="example5" :menu-list="menuList">
  Medium
</spr-button-dropdown>
<spr-button-dropdown v-model="selectedLarge" dropdown-id="example6" :menu-list="menuList" size="large">
  Large
</spr-button-dropdown>
```

## Variant

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button-dropdown
    v-model="selectedPrimary"
    dropdown-id="example7"
    :menu-list="menuList"
    variant="primary"
  >
    Primary
  </spr-button-dropdown>
  <spr-button-dropdown
    v-model="selectedSecondary"
    dropdown-id="example8"
    :menu-list="menuList"
    variant="secondary"
  >
    Secondary
  </spr-button-dropdown>
</div>

```vue
<spr-button-dropdown v-model="selectedPrimary" dropdown-id="example7" :menu-list="menuList" variant="primary">
  Primary
</spr-button-dropdown>
<spr-button-dropdown v-model="selectedSecondary" dropdown-id="example8" :menu-list="menuList" variant="secondary">
  Secondary
</spr-button-dropdown>
```

## Disabled

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-button-dropdown
    v-model="selectedDisabled"
    dropdown-id="example9"
    :menu-list="menuList"
    disabled
  >
    Disabled
  </spr-button-dropdown>
  <spr-button-dropdown
    v-model="selectedDisabled"
    dropdown-id="example9"
    :menu-list="menuList"
    variant="secondary"
    disabled
  >
    Disabled
  </spr-button-dropdown>
</div>

```vue
<spr-button-dropdown v-model="selectedDisabled" dropdown-id="example9" :menu-list="menuList" disabled>
  Disabled
</spr-button-dropdown>
<spr-button-dropdown
  v-model="selectedDisabled"
  dropdown-id="example9"
  :menu-list="menuList"
  variant="secondary"
  disabled
>
  Disabled
</spr-button-dropdown>
```

## API Reference

### Props

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>modelValue</td>
      <td>Currently selected menu item(s). Used with <code>v-model</code> for two-way binding to track selections in the dropdown menu.</td>
      <td>MenuListType[] | string[] | Record&lt;string, unknown&gt;[]</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>menuList</td>
      <td>
        Array of options to display in the dropdown menu. Each item can include:
        <ul>
          <li><code>text</code>: Display text for the menu item</li>
          <li><code>value</code>: Unique identifier for the menu item</li>
          <li><code>icon</code>: Optional Iconify icon name</li>
          <li><code>iconColor</code>: Optional CSS class for icon color</li>
          <li><code>textColor</code>: Optional CSS class for text color</li>
          <li><code>onClickFn</code>: Optional callback function when item is clicked</li>
          <li><code>disabled</code>: Optional boolean to disable specific menu items</li>
        </ul>
      </td>
      <td>MenuListType[] | string[] | Record&lt;string, unknown&gt;[]</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>dropdownId</td>
      <td>Required unique identifier for the dropdown component. Used for accessibility and state management.</td>
      <td>string</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>tone</td>
      <td>
        Controls the color theme of the button dropdown. Options:
        <ul>
          <li><code>neutral</code>: Standard appearance</li>
          <li><code>success</code>: Green appearance for positive actions</li>
        </ul>
        Note: Unlike the standard button component, danger tone is not available for button-dropdown.
      </td>
      <td>'neutral' | 'success'</td>
      <td>'neutral'</td>
    </tr>
    <tr>
      <td>variant</td>
      <td>
        Controls the visual style of the button dropdown. Options:
        <ul>
          <li><code>primary</code>: Solid background with stronger emphasis</li>
          <li><code>secondary</code>: Outlined style with medium emphasis</li>
        </ul>
        Note: Unlike the standard button component, tertiary variant is not available.
      </td>
      <td>'primary' | 'secondary'</td>
      <td>'primary'</td>
    </tr>
    <tr>
      <td>size</td>
      <td>Controls the size of the button dropdown, affecting padding, font size, and overall dimensions.</td>
      <td>'small' | 'medium' | 'large'</td>
      <td>'medium'</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>When set to <code>true</code>, both the main button and dropdown trigger become non-interactive and appear visually disabled.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>width</td>
      <td>Sets the width of the entire button dropdown component. Can be any valid CSS width value.</td>
      <td>string</td>
      <td>'fit-content'</td>
    </tr>
    <tr>
      <td>popperWidth</td>
      <td>Sets the width of the dropdown menu container. Can be any valid CSS width value.</td>
      <td>string</td>
      <td>'fit-content'</td>
    </tr>
    <tr>
      <td>popperInnerWidth</td>
      <td>Sets the width of the content inside the dropdown menu. Useful for fine-tuning the layout.</td>
      <td>string</td>
      <td>'unset'</td>
    </tr>
    <tr>
      <td>placement</td>
      <td>
        Controls the position of the dropdown menu relative to the button. Common values:
        <ul>
          <li><code>bottom</code>: Opens below the button (default)</li>
          <li><code>top</code>: Opens above the button</li>
          <li><code>left</code>: Opens to the left of the button</li>
          <li><code>right</code>: Opens to the right of the button</li>
        </ul>
        Variants with <code>-start</code> or <code>-end</code> align the menu to the beginning or end of the button.
      </td>
      <td>
        'auto' | 'auto-start' | 'auto-end' | 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end'
      </td>
      <td>'bottom'</td>
    </tr>
  </tbody>
</table>

### Events

<table>
  <thead>
    <tr>
      <th>Event</th>
      <th>Payload</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>click</td>
      <td>MouseEvent</td>
      <td>Emitted when the main (left) button is clicked. This event allows you to trigger a primary action when the main button is clicked, separate from the dropdown functionality.</td>
    </tr>
    <tr>
      <td>update:modelValue</td>
      <td>MenuListType[] | string[] | Record&lt;string, unknown&gt;[]</td>
      <td>Emitted when a selection is made in the dropdown menu. Used for v-model binding to update the selected values. The payload contains the complete selection data.</td>
    </tr>
  </tbody>
</table>

### Slots

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>default</td>
      <td>
        <p>Content for the main (left) button. This can include text, icons, or other elements.</p>
        <p>The dropdown button (right) always displays a caret-down icon and cannot be customized through slots.</p>
      </td>
    </tr>
  </tbody>
</table>

### Component Structure

The Button Dropdown consists of three main parts:

1. **Main Button**: The larger button on the left that triggers the primary action via the `click` event
2. **Dropdown Trigger**: The smaller button on the right with a caret icon that opens the dropdown menu
3. **Dropdown Menu**: The menu that appears when the dropdown trigger is clicked, containing the options specified in `menuList`

### MenuListType Interface

```typescript
// Key structure of objects that can be used in the menuList prop
type MenuListType = {
  text: string; // Display text for the menu item
  value: string | number; // Unique identifier for the item
  icon?: string; // Optional Iconify icon name
  iconColor?: string; // CSS class for icon color
  textColor?: string; // CSS class for text color
  onClickFn?: () => void; // Function to call when item is clicked
  disabled?: boolean; // Whether the item is disabled
  // Additional optional properties
  subtext?: string; // Secondary text line
  subvalue?: string; // Secondary value
  sublevel?: MenuListType[]; // Nested menu items (for hierarchical menus)
  group?: string; // Grouping identifier
};
```

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="payroll" theme="dark" width="50px" />
</div>

<script setup lang="ts">
import SprButtonDropdown from "@/components/button/button-dropdown/button-dropdown.vue";
import { ref } from "vue";

const menuList = ref([
  { text: 'Add', value: 'add', icon:  'ph:check', iconColor: 'spr-text-color-supporting', onClickFn: () => {alert("Add was clicked.")}},
  { text: 'Delete', value: 'delete', icon: 'ph:trash', textColor: 'spr-text-color-danger-base', onClickFn: () => {alert("Delete was clicked.")} },
]);

const mainButtonClicked = () => { alert("Main button was clicked.") }
</script>
