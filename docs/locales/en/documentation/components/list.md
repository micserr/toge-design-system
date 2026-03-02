---
title: List
description: A versatile and customizable list component that supports single and multi-select, grouping, searching, hierarchical structures (ladderized), and lozenge display modes. Perfect for building accessible dropdown menus and selection interfaces.
outline: deep
---

# List

The List component is a powerful and flexible UI element designed for displaying and selecting items from a list. It supports a wide range of features including single and multi-select modes, item grouping, search functionality, hierarchical navigation, and lozenge display formats.

## Basic Usage

The most basic usage involves binding your selection to `v-model` and providing a list of items via the `menu-list` prop. Each item must have at minimum a `text` (display label) and `value` (unique identifier) property.

<div 
  :class="[
    'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
    'spr-border spr-border-solid spr-border-color-weak'
  ]"
>
  <spr-list v-model="listModels.basicUsage" :menu-list="menuList" />
</div>

```vue
<template>
  <div
    :class="[
      'spr-max-h-[300px] spr-overflow-auto spr-rounded-md spr-p-2',
      'spr-border-color-weak spr-border spr-border-solid',
    ]"
  >
    <spr-list v-model="selectedItems" :menu-list="menuList" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedItems = ref([]);

const menuList = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
  { text: 'Date', value: 'date' },
  { text: 'Elderberry', value: 'elderberry' },
  { text: 'Fig', value: 'fig' },
  { text: 'Grape', value: 'grape' },
  { text: 'Honeydew', value: 'honeydew' },
  { text: 'Kiwi', value: 'kiwi' },
  { text: 'Mango', value: 'mango' },
]);
</script>
```

## Multi-Select

Enable multiple item selection by adding the `multi-select` prop. This displays checkboxes next to each item, allowing users to select multiple items simultaneously.

<div
  :class="[
    'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
    'spr-border spr-border-solid spr-border-color-weak'
  ]"
>
  <spr-list v-model="listModels.multiSelect" :menu-list="menuList" multi-select />
</div>

```vue
<template>
  <div
    :class="[
      'spr-max-h-[300px] spr-overflow-auto spr-rounded-md spr-p-2',
      'spr-border-color-weak spr-border spr-border-solid',
    ]"
  >
    <spr-list v-model="selectedItems" :menu-list="menuList" multi-select />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedItems = ref([]);

const menuList = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
  { text: 'Date', value: 'date' },
  { text: 'Elderberry', value: 'elderberry' },
]);
</script>
```

## Select All / Unselect All

When using multi-select mode, a "Select All" / "Unselect All" button is automatically provided. This button allows users to quickly select or deselect all available items in the list.

### Features:

- **Automatic Toggle**: The button text automatically changes based on the current selection state
- **Smart Selection**: Only enabled (non-disabled) items are affected by the select all action
- **Works with Filtering**: When items are filtered through search, select all only affects the visible items
- **Group Awareness**: Works correctly with both grouped and non-grouped lists

<div
  :class="[
    'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
    'spr-border spr-border-solid spr-border-color-weak'
  ]"
>
  <spr-list v-model="listModels.selectAll" :menu-list="selectAllMenuList" multi-select allow-select-all display-list-item-selected />
</div>

```vue
<template>
  <div
    :class="[
      'spr-max-h-[300px] spr-overflow-auto spr-rounded-md spr-p-2',
      'spr-border-color-weak spr-border spr-border-solid',
    ]"
  >
    <spr-list v-model="selectedItems" :menu-list="menuList" multi-select allow-select-all display-list-item-selected />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedItems = ref([]);

const menuList = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
  { text: 'Date', value: 'date' },
  { text: 'Elderberry', value: 'elderberry' },
  { text: 'Fig', value: 'fig' },
  { text: 'Grape', value: 'grape' },
  { text: 'Honeydew', value: 'honeydew' },
]);
</script>
```

The select all button appears when:

- `multi-select` prop is enabled
- OR `display-list-item-selected` prop is enabled
- OR `searchable-menu` prop is enabled

**Note**: Disabled items are automatically excluded from select all operations to ensure only interactive items are affected.

## Grouping Items

Group items using the `group-items-by` prop with values `'default'`, `'A-Z'`, or `'Z-A'`:

- **default**: Groups by the item's `group` property
- **A-Z**: Sorts alphabetically in ascending order
- **Z-A**: Sorts alphabetically in descending order

<div class="spr-grid spr-gap-4">
  <div
    :class="[
      'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
      'spr-border spr-border-solid spr-border-color-weak'
    ]"
  >
    <h5 class="spr-mb-2 spr-text-sm spr-font-medium">Grouped by default</h5>
    <spr-list v-model="listModels.groupingDefault" :menu-list="groupedMenuList" group-items-by="default" />
  </div>
  <div
    :class="[
      'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
      'spr-border spr-border-solid spr-border-color-weak'
    ]"
  >
    <h5 class="spr-mb-2 spr-text-sm spr-font-medium">Grouped by A-Z</h5>
    <spr-list v-model="listModels.groupingAlphabetical" :menu-list="groupedMenuList" group-items-by="A-Z" />
  </div>
</div>

```vue
<template>
  <spr-list v-model="selectedItems" :menu-list="menuList" group-items-by="default" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedItems = ref([]);

const menuList = ref([
  { text: 'Apple', value: 'apple', group: 'Fruits' },
  { text: 'Banana', value: 'banana', group: 'Fruits' },
  { text: 'Carrot', value: 'carrot', group: 'Vegetables' },
  { text: 'Date', value: 'date', group: 'Fruits' },
  { text: 'Eggplant', value: 'eggplant', group: 'Vegetables' },
]);
</script>
```

## Searchable List

Add search functionality with the `searchable-menu` prop. Users can filter items by typing in the search field.

<div
  :class="[
    'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
    'spr-border spr-border-solid spr-border-color-weak'
  ]"
>
  <spr-list v-model="listModels.searchableList" :menu-list="menuList" searchable-menu />
</div>

```vue
<template>
  <spr-list
    v-model="selectedItems"
    :menu-list="menuList"
    searchable-menu
    searchable-menu-placeholder="Search items..."
  />
</template>
```

## Radio List

Display a radio button selector for single-select lists using the `radio-list` prop. Radio buttons appear before the item text and icon, providing a clear visual indicator for single selection mode.

<div
  :class="[
    'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
    'spr-border spr-border-solid spr-border-color-weak'
  ]"
>
  <spr-list v-model="listModels.radioList" :menu-list="menuList" radio-list/>
</div>

```vue
<template>
  <spr-list v-model="selectedItems" :menu-list="menuList" radio-list />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedItems = ref([]);

const menuList = ref([
  { text: 'Option 1', value: 'option1' },
  { text: 'Option 2', value: 'option2' },
  { text: 'Option 3', value: 'option3' },
  { text: 'Option 4', value: 'option4' },
  { text: 'Option 5', value: 'option5' },
]);
</script>
```

## Subtext

Add descriptive subtext to list items by including the `subtext` property. This is useful for providing additional context or information about each item.

 <div
  :class="[
    'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
    'spr-border spr-border-solid spr-border-color-weak'
  ]"
>
  <spr-list v-model="listModels.subtext" :menu-list="itemsWithSubtext" />
</div>

```vue
<template>
  <spr-list v-model="selectedItems" :menu-list="itemsWithSubtext" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedItems = ref([]);

const itemsWithSubtext = ref([
  {
    text: 'Home',
    value: 'home',
    subtext: 'Go to home page',
  },
  {
    text: 'Settings',
    value: 'settings',
    subtext: 'Configure preferences',
  },
  {
    text: 'Users',
    value: 'users',
    subtext: 'Manage user accounts',
  },
]);
</script>
```

## Icons

### Default Item Icon

Apply a default icon to all items in the list using the `itemIcon` prop. This is useful when all items should display the same icon.

```vue
<template>
  <spr-list v-model="selectedItems" :menu-list="menuList" item-icon="ph:check" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedItems = ref([]);

const menuList = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
]);
</script>
```

### Item Icons

Add icons to individual list items by including the `icon` property. You can optionally customize the icon color with the `iconColor` property.

<div
  :class="[
    'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
    'spr-border spr-border-solid spr-border-color-weak'
  ]"
>
  <spr-list v-model="listModels.itemIcons" :menu-list="itemsWithIcons" />
</div>

```vue
<template>
  <spr-list v-model="selectedItems" :menu-list="itemsWithIcons" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedItems = ref([]);

const itemsWithIcons = ref([
  {
    text: 'Home',
    value: 'home',
    icon: 'ph:house',
  },
  {
    text: 'Settings',
    value: 'settings',
    icon: 'ph:gear',
    iconColor: 'spr-text-blue-500',
  },
  {
    text: 'Users',
    value: 'users',
    icon: 'ph:users',
  },
]);
</script>
```

### Icon Tone and Fill

Customize the appearance of default item icons using the `item-icon-tone` and `item-icon-fill` props. These allow you to apply color tones and fill styles similar to the lozenge component.

Available tones: 'plain', 'pending', 'information', 'success', 'danger', 'neutral', 'caution'

<div
  :class="[
    'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
    'spr-border spr-border-solid spr-border-color-weak'
  ]"
>
  <spr-list v-model="listModels.iconToneFill" :menu-list="menuList" item-icon="ph:star" item-icon-tone="success" :item-icon-fill="true" />
</div>

```vue
<template>
  <spr-list
    v-model="selectedItems"
    :menu-list="menuList"
    item-icon="ph:star"
    item-icon-tone="success"
    :item-icon-fill="true"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedItems = ref([]);

const menuList = ref([
  { text: 'Option 1', value: 'option1' },
  { text: 'Option 2', value: 'option2' },
  { text: 'Option 3', value: 'option3' },
]);
</script>
```

## Ladderized (Hierarchical) List

Create nested hierarchical lists using the `ladderized` prop and including `sublevel` properties in items.

<div class="spr-rounded-md spr-max-h-[300px] spr-border spr-border-solid spr-border-color-weak spr-overflow-hidden">
  <spr-ladderized-list v-model="listModels.hierarchicalList" :menu-list="hierarchicalData" />
</div>

```vue
<template>
  <spr-ladderized-list v-model="selectedItems" :menu-list="hierarchicalData" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedItems = ref([]);

const hierarchicalData = ref([
  {
    text: 'Fruits',
    value: 'fruits',
    sublevel: [
      { text: 'Apple', value: 'apple' },
      { text: 'Banana', value: 'banana' },
      { text: 'Cherry', value: 'cherry' },
    ],
  },
  {
    text: 'Vegetables',
    value: 'vegetables',
    sublevel: [
      { text: 'Carrot', value: 'carrot' },
      { text: 'Broccoli', value: 'broccoli' },
    ],
  },
]);
</script>
```

## Lozenge Display

The List component supports two different lozenge display modes:

### 1. Full Lozenge Mode (Item as Lozenge)

Display entire list items as lozenges by enabling the `lozenge` prop and providing `lozengeProps` for each item. The item becomes the lozenge itself.

<div
  :class="[
    'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
    'spr-border spr-border-solid spr-border-color-weak'
  ]"
>
  <spr-list v-model="lozengeListValue" :menu-list="lozengeMenuList" lozenge />
</div>

```vue
<template>
  <spr-list v-model="selectedItems" :menu-list="lozengeItems" lozenge />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedItems = ref([]);

const lozengeItems = ref([
  {
    text: 'Active',
    value: 'active',
    lozengeProps: {
      label: 'Active',
      tone: 'success',
      fill: true,
      icon: 'ph:check-circle',
    },
  },
  {
    text: 'Pending',
    value: 'pending',
    lozengeProps: {
      label: 'Pending',
      tone: 'neutral',
      fill: false,
      icon: 'ph:clock',
    },
  },
  {
    text: 'Disabled',
    value: 'disabled',
    lozengeProps: {
      label: 'Disabled',
      tone: 'negative',
      fill: true,
      icon: 'ph:x-circle',
    },
  },
]);
</script>
```

### 2. Lozenge Badge (Item with Right-Side Lozenge)

Display a regular list item with a lozenge badge on the right side by using the `lozenge` property on individual items. This allows you to show metadata or status alongside the item text.

<div
  :class="[
    'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
    'spr-border spr-border-solid spr-border-color-weak'
  ]"
>
  <spr-list v-model="listModels.lozengeBadge" :menu-list="menuItemsWithLozenge" />
</div>

```vue
<template>
  <spr-list v-model="selectedItems" :menu-list="menuItems" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedItems = ref([]);

const menuItems = ref([
  {
    text: 'Task 1',
    value: 'task1',
    subtext: 'Due tomorrow',
    lozenge: {
      label: 'Pending',
      tone: 'neutral',
      fill: false,
    },
  },
  {
    text: 'Task 2',
    value: 'task2',
    subtext: 'Completed',
    lozenge: {
      label: 'Done',
      tone: 'success',
      fill: true,
    },
  },
  {
    text: 'Task 3',
    value: 'task3',
    subtext: 'In progress',
    lozenge: {
      label: 'Active',
      tone: 'success',
      fill: true,
    },
  },
]);
</script>
```

## Pre-Selected Items

Use `pre-selected-items` to set initial selections based on item values.

```vue
<template>
  <spr-list v-model="selectedItems" :menu-list="menuList" :pre-selected-items="['apple', 'banana']" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedItems = ref([]);

const menuList = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
]);
</script>
```

## Event Handling

Use `@update:model-value` to react to selection changes and retrieve the complete selected item objects.

<div
  :class="[
    'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
    'spr-border spr-border-solid spr-border-color-weak spr-mb-4'
  ]"
>
  <spr-list 
    v-model="listModels.eventHandling" 
    :menu-list="menuList" 
    @update:model-value="handleSelection"
  />
</div>
<div class="spr-p-4 spr-bg-blue-50 spr-rounded-md spr-border spr-border-blue-200">
  <p class="spr-text-sm">Selected: {{ selectedItemInfo }}</p>
</div>

```vue
<template>
  <spr-list v-model="selectedItems" :menu-list="menuList" @update:model-value="handleSelection" />
  <div v-if="selectedItem" class="spr-mt-4 spr-bg-blue-50 spr-p-4">
    <p>Selected Item: {{ selectedItem.text }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedItems = ref([]);
const selectedItem = ref(null);

const menuList = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
]);

const handleSelection = (items) => {
  selectedItem.value = items[0] || null;
};
</script>
```

---

## API Reference

### Props

<table>
  <thead>
    <tr>
      <th>Prop</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>model-value</code> (v-model)</td>
      <td>Two-way binding for selected items containing full item objects</td>
      <td><code>MenuListType[]</code></td>
      <td><code>[]</code></td>
    </tr>
    <tr>
      <td><code>menu-list</code></td>
      <td>Array of items to display</td>
      <td><code>MenuListType[]</code></td>
      <td><code>[]</code> (required)</td>
    </tr>
    <tr>
      <td><code>group-items-by</code></td>
      <td>Grouping strategy: <code>'default'</code> (by group property), <code>'A-Z'</code> (ascending), or <code>'Z-A'</code> (descending)</td>
      <td><code>'default' | 'A-Z' | 'Z-A'</code></td>
      <td><code>undefined</code></td>
    </tr>
    <tr>
      <td><code>multi-select</code></td>
      <td>Enable multi-selection mode with checkboxes</td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>pre-selected-items</code></td>
      <td>Pre-select items by their values</td>
      <td><code>(string | number | Record&lt;string, unknown&gt;)[]</code></td>
      <td><code>[]</code></td>
    </tr>
    <tr>
      <td><code>searchable-menu</code></td>
      <td>Display search input for filtering items</td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>searchable-menu-placeholder</code></td>
      <td>Placeholder text for search input</td>
      <td><code>string</code></td>
      <td><code>'Search...'</code></td>
    </tr>
    <tr>
      <td><code>search-value</code></td>
      <td>External search value (two-way binding)</td>
      <td><code>string</code></td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td><code>menu-level</code></td>
      <td>Nesting level for hierarchical lists</td>
      <td><code>number</code></td>
      <td><code>0</code></td>
    </tr>
    <tr>
      <td><code>ladderized</code></td>
      <td>Enable hierarchical/ladderized list display</td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>disabled-local-search</code></td>
      <td>Disable local search filtering</td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>loading</code></td>
      <td>Show loading skeleton instead of items</td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>no-check</code></td>
      <td>Hide checkmark icon in single-select mode</td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>lozenge</code></td>
      <td>Display items as lozenges</td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>supporting-display-text</code></td>
      <td>Display custom text (e.g., "2 Selected")</td>
      <td><code>string</code></td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td><code>display-list-item-selected</code></td>
      <td>Display count of selected items when searchable</td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>sticky-search-offset</code></td>
      <td>Offset for sticky search header</td>
      <td><code>string | number</code></td>
      <td><code>0</code></td>
    </tr>
    <tr>
      <td><code>item-icon</code></td>
      <td>Default icon for all items</td>
      <td><code>string</code></td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td><code>item-icon-tone</code></td>
      <td>Tone/color for item icons: <code>'plain'</code>, <code>'pending'</code>, <code>'information'</code>, <code>'success'</code>, <code>'danger'</code>, <code>'neutral'</code>, or <code>'caution'</code></td>
      <td><code>string</code></td>
      <td><code>'plain'</code></td>
    </tr>
    <tr>
      <td><code>item-icon-fill</code></td>
      <td>Fill style for item icons (solid background)</td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>disabled-unselected-items</code></td>
      <td>Disable and gray out unselected items</td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>radio-list</code></td>
      <td>Display radio buttons for single-select mode (requires single-select, incompatible with multi-select)</td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>allow-deselect</code></td>
      <td>When true, allows deselection on selected item (requires single-select, incompatible with multi-select)</td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
    </tr>
  </tbody>
</table>

### Events

<table>
  <thead>
    <tr>
      <th>Event</th>
      <th>Description</th>
      <th>Payload</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>update:modelValue</code></td>
      <td>Emitted when selection changes</td>
      <td><code>MenuListType[]</code> - Array of selected item objects</td>
    </tr>
    <tr>
      <td><code>update:searchValue</code></td>
      <td>Emitted when search input changes</td>
      <td><code>string</code> - New search text</td>
    </tr>
    <tr>
      <td><code>@get-single-selected-item</code></td>
      <td>Emitted when item selected in single-select mode</td>
      <td><code>MenuListType</code> - Selected item object</td>
    </tr>
    <tr>
      <td><code>@get-single-deselected-item</code></td>
      <td>Emitted when item is deselected in allow-deselect mode</td>
      <td><code>MenuListType</code> - Deselected item object</td>
    </tr>
  </tbody>
</table>

<script lang="ts" setup>
import { ref } from 'vue';

import { Icon } from '@iconify/vue';

import SprList from "@/components/list/list.vue"
import SprLadderizedList from "@/components/list/ladderized-list/ladderized-list.vue"

import { MenuListType } from '@/components/list/list';

const listModels = ref({
  basicUsage: [],
  multiSelect: [],
  selectAll: [],
  groupingDefault: [],
  groupingAlphabetical: [],
  searchableList: [],
  radioList: [],
  subtext: [],
  itemIcons: [],
  iconToneFill: [],
  hierarchicalList: [],
  eventHandling: [],
  lozengeBadge: [],
});

const menuList = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
  { text: 'Date', value: 'date' },
  { text: 'Elderberry', value: 'elderberry' },
  { text: 'Fig', value: 'fig' },
  { text: 'Grape', value: 'grape' },
  { text: 'Honeydew', value: 'honeydew' },
  { text: 'Kiwi', value: 'kiwi' },
  { text: 'Mango', value: 'mango' },
]);

const groupedMenuList = ref([
  { text: 'Apple', value: 'apple', group: 'Fruits' },
  { text: 'Banana', value: 'banana', group: 'Fruits' },
  { text: 'Carrot', value: 'carrot', group: 'Vegetables' },
  { text: 'Date', value: 'date', group: 'Fruits' },
  { text: 'Eggplant', value: 'eggplant', group: 'Vegetables' },
  { text: 'Fig', value: 'fig', group: 'Fruits' },
  { text: 'Grape', value: 'grape', group: 'Fruits' },
  { text: 'Honeydew', value: 'honeydew', group: 'Fruits' },
  { text: 'Kale', value: 'kale', group: 'Vegetables' },
  { text: 'Lemon', value: 'lemon', group: 'Fruits' },
]);

const selectAllMenuList = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
  { text: 'Date', value: 'date' },
  { text: 'Elderberry', value: 'elderberry' },
  { text: 'Fig', value: 'fig' },
  { text: 'Grape', value: 'grape' },
  { text: 'Honeydew', value: 'honeydew' },
  { text: 'Kiwi', value: 'kiwi' },
  { text: 'Mango', value: 'mango' },
]);

const hierarchicalData = ref([
  {
    text: 'Fruits',
    value: 'fruits',
    sublevel: [
      { text: 'Apple', value: 'apple' },
      { text: 'Banana', value: 'banana' },
      { text: 'Cherry', value: 'cherry' },
    ],
  },
  {
    text: 'Vegetables',
    value: 'vegetables',
    sublevel: [
      { text: 'Carrot', value: 'carrot' },
      { text: 'Broccoli', value: 'broccoli' },
    ],
  },
]);

const lozengeMenuList = ref([
  {
    text: 'Active',
    value: 'active',
    lozengeProps: {
      label: 'Active',
      tone: 'success',
      fill: true,
    },
  },
  {
    text: 'Pending',
    value: 'pending',
    lozengeProps: {
      label: 'Pending',
      tone: 'neutral',
      fill: false,
    },
  },
]);

const itemsWithSubtext = ref([
  {
    text: 'Home',
    value: 'home',
    subtext: 'Go to home page',
  },
  {
    text: 'Settings',
    value: 'settings',
    subtext: 'Configure preferences',
  },
  {
    text: 'Users',
    value: 'users',
    subtext: 'Manage user accounts',
  },
]);

const itemsWithIcons = ref([
  {
    text: 'Home',
    value: 'home',
    icon: 'ph:house',
  },
  {
    text: 'Settings',
    value: 'settings',
    icon: 'ph:gear',
    iconColor: 'spr-text-blue-500',
  },
  {
    text: 'Users',
    value: 'users',
    icon: 'ph:users',
  },
]); 

const menuItemsWithLozenge = ref([
  {
    text: 'Task 1',
    value: 'task1',
    subtext: 'Due tomorrow',
    lozenge: {
      label: 'Pending',
      tone: 'neutral',
      fill: false,
    },
  },
  {
    text: 'Task 2',
    value: 'task2',
    subtext: 'Completed',
    lozenge: {
      label: 'Done',
      tone: 'success',
      fill: true,
    },
  },
  {
    text: 'Task 3',
    value: 'task3',
    subtext: 'In progress',
    lozenge: {
      label: 'Active',
      tone: 'success',
      fill: true,
    },
  },
]);

const lozengeListValue = ref([]);
const selectedItemInfo = ref('None selected');

const handleSelection = (items) => {
  if (items.length > 0) {
    selectedItemInfo.value = items[0].text;
  } else {
    selectedItemInfo.value = 'None selected';
  }
};
</script>
