---
outline: 'deep'
description: 'The Dropdown component provides a flexible way to display a menu of options when a user interacts with a trigger element. Dropdowns are commonly used for navigation menus, action lists, and other UI interactions where you want to conserve space while providing multiple options. They are distinct from form selection controls and are not intended for form field selection.'
---

# Dropdown

The Dropdown component provides a flexible way to display a menu of options when a user interacts with a trigger element. Dropdowns are commonly used for navigation menus, action lists, and other UI interactions where you want to conserve space while providing multiple options. They are distinct from form selection controls and are not intended for form field selection.

## Basic Usage

The Dropdown component can be used with various trigger elements, such as buttons, chips, or lozenges. The content inside the dropdown slot becomes the trigger element that opens the dropdown menu when clicked.

<div class="spr-flex spr-items-center spr-gap-4">
  <spr-dropdown 
    id="sample-dropdownBasic1" 
    v-model="dropdownModel.dropdownBasic1" 
    :menu-list="menuList" 
    width="100px" 
    popper-width="200px" 
    dropdown
  >
    <spr-button class="spr-w-full" tone="success" has-icon>
      <span>Button</span>
      <Icon icon="ph:caret-down" />
    </spr-button>
  </spr-dropdown>
  <spr-dropdown 
    id="sample-dropdownBasic2" 
    v-model="dropdownModel.dropdownBasic2" 
    :menu-list="menuList" 
    width="100px" 
    popper-width="200px" 
    dropdown
  >
    <spr-chips class="spr-w-full" label="Chips" />
  </spr-dropdown>
  <spr-dropdown 
    id="sample-dropdownBasic3" 
    v-model="dropdownModel.dropdownBasic3" 
    :menu-list="menuList" 
    width="100px" 
    popper-width="200px" 
    dropdown
  >
    <spr-lozenge class="spr-w-full" label="Lozange" />
  </spr-dropdown>
</div>

```vue
<template>
  <div class="spr-flex spr-items-center spr-gap-4">
    <!-- Button trigger dropdown -->
    <spr-dropdown
      id="sample-dropdownBasic1"
      v-model="dropdownModel.dropdownBasic1"
      :menu-list="menuList"
      width="100px"
      popper-width="200px"
      dropdown
    >
      <spr-button class="spr-w-full" tone="success" has-icon>
        <span>Button</span>
        <Icon icon="ph:caret-down" />
      </spr-button>
    </spr-dropdown>
    
    <!-- Chips trigger dropdown -->
    <spr-dropdown
      id="sample-dropdownBasic2"
      v-model="dropdownModel.dropdownBasic2"
      :menu-list="menuList"
      width="100px"
      popper-width="200px"
      dropdown
    >
      <spr-chips class="spr-w-full" label="Chips" />
    </spr-dropdown>
    
    <!-- Lozenge trigger dropdown -->
    <spr-dropdown
      id="sample-dropdownBasic3"
      v-model="dropdownModel.dropdownBasic3"
      :menu-list="menuList"
      width="100px"
      popper-width="200px"
      dropdown
    >
      <spr-lozenge class="spr-w-full" label="Lozange" />
    </spr-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { Icon } from '@iconify/vue';

const dropdownModel = ref({
  dropdownBasic1: '',
  dropdownBasic2: '',
  dropdownBasic3: '',
});

const menuList = ref([
  { text: 'Google', value: 'https://www.google.com' },
  { text: 'GitHub', value: 'https://github.com' },
  { text: 'Gmail', value: 'https://mail.google.com' },
  // Additional items...
]);

// Optional: Handle selections to open URLs in new tabs
const handleDropdownLink = (newValue, key) => {
  if (newValue) {
    window.open(newValue, '_blank', 'noopener,noreferrer');
    dropdownModel.value[key] = null;
  }
};

watch(
  () => dropdownModel.value.dropdownBasic1,
  (newValue) => handleDropdownLink(newValue, 'dropdownBasic1'),
);

// Similar watchers for other dropdown models...
</script>
```

:::tip Important Properties
- `id`: A unique identifier required for proper functioning of the dropdown
- `v-model`: Binds the selected value(s) from the dropdown
- `menu-list`: An array of options to display in the dropdown menu
- `dropdown`: Set to `true` to enable dropdown behavior (as opposed to select behavior)
:::

## Grouped Items By

The Dropdown component supports organizing menu items into groups based on alphabetical order. You can group items by `A-Z` (alphabetical) or `Z-A` (reverse alphabetical) by using the `group-items-by` prop.

<div class="spr-grid spr-gap-4">
  <spr-dropdown
    id="sample-dropdownGroupedItemsBy"
    v-model="dropdownModel.dropdownGroupedItemsBy"
    :menu-list="menuList"
    width="100px"
    popper-width="200px"
    group-items-by="A-Z"
    dropdown
  >
    <spr-button class="spr-w-full" tone="success" has-icon>
      <span>Button</span>
      <Icon icon="ph:caret-down" />
    </spr-button>
  </spr-dropdown>
</div>

```vue
<template>
  <div class="spr-grid spr-gap-4">
    <spr-dropdown
      id="sample-dropdownGroupedItemsBy"
      v-model="dropdownModel.dropdownGroupedItemsBy"
      :menu-list="menuList"
      width="100px"
      popper-width="200px"
      group-items-by="A-Z"  <!-- Options: 'A-Z' or 'Z-A' -->
      dropdown
    >
      <spr-button class="spr-w-full" tone="success" has-icon>
        <span>Button</span>
        <Icon icon="ph:caret-down" />
      </spr-button>
    </spr-dropdown>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const dropdownModel = ref({
  dropdownGroupedItemsBy: ''
});

const menuList = ref([
  { text: 'Google', value: 'https://www.google.com' },
  { text: 'GitHub', value: 'https://github.com' },
  // Additional items...
]);
</script>
```

:::tip Grouping Benefits
Grouping items alphabetically helps users find options more easily when you have a large number of menu items. This is especially useful for navigation menus or application switching dropdowns.
:::

## Pre-Selected Items

You can set a default selected value in the dropdown by initializing the `v-model` with a value that matches one of the options in your `menu-list`. This is useful when you want to show a pre-selected option or restore a previously selected value.

<div class="spr-grid spr-gap-4">
  <spr-dropdown
    id="sample-dropdownPreSelectedItems"
    v-model="dropdownModel.dropdownPreSelectedItems"
    :menu-list="menuList"
    width="100px"
    popper-width="200px"
    dropdown
  >
    <spr-button class="spr-w-full" tone="success" has-icon>
      <span>Button</span>
      <Icon icon="ph:caret-down" />
    </spr-button>
  </spr-dropdown>
  <code class="spr-font-medium">
    V-Model: {{ dropdownModel.dropdownPreSelectedItems ? dropdownModel.dropdownPreSelectedItems : `""` }}
  </code>
</div>

```vue
<template>
  <div class="spr-grid spr-gap-4">
    <spr-dropdown
      id="sample-dropdownPreSelectedItems"
      v-model="dropdownPreSelectedItems"
      :menu-list="menuList"
      width="100px"
      popper-width="200px"
      dropdown
    >
      <spr-button class="spr-w-full" tone="success" has-icon>
        <span>Button</span>
        <Icon icon="ph:caret-down" />
      </spr-button>
    </spr-dropdown>
    
    <!-- Display the current selected value -->
    <code class="spr-font-medium">
      V-Model: {{ dropdownPreSelectedItems ? dropdownPreSelectedItems : `""` }}
    </code>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Pre-select Yahoo by setting its value
const dropdownPreSelectedItems = ref('https://www.yahoo.com');

const menuList = ref([
  { text: 'Google', value: 'https://www.google.com' },
  { text: 'Yahoo', value: 'https://www.yahoo.com' },
  // Additional items...
]);
</script>
```

:::tip Value Types
The `v-model` for the dropdown component supports various value types including:
- Single primitive values (strings, numbers)
- Objects
- Arrays (for multi-select dropdowns)
:::

## Placements

The dropdown menu can be positioned in various ways relative to the trigger element. The `placement` prop controls where the dropdown menu appears.

Available placement options:
- `auto`, `auto-start`, `auto-end` - Automatically determine the best placement
- `top`, `top-start`, `top-end` - Position above the trigger
- `right`, `right-start`, `right-end` - Position to the right of the trigger
- `bottom`, `bottom-start`, `bottom-end` - Position below the trigger (default)
- `left`, `left-start`, `left-end` - Position to the left of the trigger

<div class="spr-grid spr-gap-4">
  <div class="spr-flex spr-gap-4">
    <spr-dropdown
      id="sample-dropdownPlacements0"
      v-model="dropdownModel.dropdownPlacements0"
      :menu-list="menuList"
      placement="auto"
      popper-width="200px"
    >
      <spr-button class="spr-w-full" tone="success" has-icon>
        <span>Auto</span>
        <Icon icon="ph:caret-down" />
      </spr-button>
    </spr-dropdown>
    <spr-dropdown
      id="sample-dropdownPlacements1"
      v-model="dropdownModel.dropdownPlacements1"
      :menu-list="menuList"
      placement="auto-start"
      popper-width="200px"
    >
      <spr-button class="spr-w-full" tone="success" has-icon>
        <span>Auto Start</span>
        <Icon icon="ph:caret-down" />
      </spr-button>
    </spr-dropdown>
    <spr-dropdown
      id="sample-dropdownPlacements2"
      v-model="dropdownModel.dropdownPlacements2"
      :menu-list="menuList"
      placement="auto-end"
      popper-width="200px"
    >
      <spr-button class="spr-w-full" tone="success" has-icon>
        <span>Auto End</span>
        <Icon icon="ph:caret-down" />
      </spr-button>
    </spr-dropdown>
  </div>
  <!-- Additional placement examples... -->
</div>

```vue
<template>
  <!-- Auto placement -->
  <spr-dropdown
    id="dropdown-auto"
    v-model="selectedValue"
    :menu-list="menuList"
    placement="auto"
    popper-width="200px"
  >
    <spr-button class="spr-w-full" tone="success" has-icon>
      <span>Auto</span>
      <Icon icon="ph:caret-down" />
    </spr-button>
  </spr-dropdown>
  
  <!-- Top placement -->
  <spr-dropdown
    id="dropdown-top"
    v-model="selectedValue"
    :menu-list="menuList"
    placement="top"
    popper-width="200px"
  >
    <spr-button class="spr-w-full" tone="success" has-icon>
      <span>Top</span>
      <Icon icon="ph:caret-down" />
    </spr-button>
  </spr-dropdown>
</template>
```

:::tip Responsive Placement
The `auto` placement options are particularly useful for responsive designs as they will automatically adjust based on available space, preventing dropdowns from being cut off at screen edges.
:::

## Width and Popper Width

The Dropdown component provides two ways to control the sizing:

- `width`: Controls the overall width of the dropdown wrapper (including the trigger element)
- `popper-width`: Controls the width of just the dropdown menu that appears when clicked

<div>
  <spr-dropdown
    id="sample-dropdownWidth"
    v-model="dropdownModel.dropdownWidth"
    placeholder="Select an option"
    :menu-list="menuList"
    width="50%"
    popper-width="500px"
  >
    <spr-button class="spr-w-full" tone="success" has-icon>
      <span>Button</span>
      <Icon icon="ph:caret-down" />
    </spr-button>
  </spr-dropdown>
</div>

```vue
<template>
  <spr-dropdown
    id="sample-dropdownWidth"
    v-model="dropdownWidth"
    placeholder="Select an option"
    :menu-list="menuList"
    width="50%"         <!-- Width of the trigger wrapper -->
    popper-width="500px"  <!-- Width of the dropdown menu -->
  >
    <spr-button class="spr-w-full" tone="success" has-icon>
      <span>Button</span>
      <Icon icon="ph:caret-down" />
    </spr-button>
  </spr-dropdown>
</template>
```

:::tip Size Units
Both width properties accept any valid CSS unit:
- Pixels: `"200px"`
- Percentage: `"50%"`
- Viewport units: `"50vw"`
- `"auto"` or `"100%"` for full width
:::

## Popper Strategy

When using dropdowns inside positioned elements like modals or fixed panels, you may need to change the positioning strategy. The `popper-strategy` prop controls how the dropdown menu is positioned:

- `absolute` (default): Positions the dropdown relative to its nearest positioned ancestor
- `fixed`: Positions the dropdown relative to the viewport, ignoring parent element positioning

<spr-button tone="success" @click="modalModel = true">Open Modal</spr-button>

<spr-modal v-model="modalModel" title="Dropdown with Modal">
  <spr-dropdown
    id="sample-dropdownStrategy"
    v-model="dropdownModel.dropdownStrategy"
    placeholder="Select an option"
    :menu-list="menuList"
    wrapper-position="initial"
    popper-strategy="fixed"
    width="100px"
  >
    <spr-button class="spr-w-full" tone="success" has-icon>
      <span>Button</span>
      <Icon icon="ph:caret-down" />
    </spr-button>
  </spr-dropdown>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
</spr-modal>

```vue
<template>
  <spr-button tone="success" @click="modalModel = true">Open Modal</spr-button>

  <spr-modal v-model="modalModel" title="Dropdown with Modal">
    <spr-dropdown
      id="sample-dropdownStrategy"
      v-model="dropdownStrategy"
      :menu-list="menuList"
      wrapper-position="initial"  <!-- Important when using with modals -->
      popper-strategy="fixed"     <!-- Use fixed strategy in modals -->
      width="100px"
    >
      <spr-button class="spr-w-full" tone="success" has-icon>
        <span>Button</span>
        <Icon icon="ph:caret-down" />
      </spr-button>
    </spr-dropdown>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit...
    </p>
  </spr-modal>
</template>

<script setup>
import { ref } from 'vue';

const modalModel = ref(false);
const dropdownStrategy = ref('');
</script>
```

:::warning Important Note
When using the `fixed` popper strategy, you should also set `wrapper-position="initial"` to override the default `relative` positioning. This prevents positioning conflicts within complex layouts like modals.
:::

## Menu List Data Formats

The Dropdown component is flexible and supports various data formats for the `menu-list` prop:

### Array of Objects with text/value Properties

```js
const menuList = [
  { text: 'Google', value: 'https://www.google.com' },
  { text: 'GitHub', value: 'https://github.com' },
];
```

### Array of Strings

```js
const menuList = ['Google', 'GitHub', 'Gmail'];
// Automatically converted to { text: 'Google', value: 'Google' }, etc.
```

### Array of Custom Objects

```js
const menuList = [
  { name: 'John Doe', id: 1, department: 'Engineering' },
  { name: 'Jane Smith', id: 2, department: 'Marketing' },
];

// Use textField and valueField props to specify which properties to use
<spr-dropdown
  :menu-list="menuList"
  text-field="name"     // Display name property as text
  value-field="id"      // Use id property as the value
/>
```

## Multi-Select Dropdown

To create a dropdown that allows selecting multiple items, set the `multi-select` prop to `true`. The `v-model` will be an array containing all selected values.

```vue
<template>
  <spr-dropdown
    id="multi-select-dropdown"
    v-model="selectedValues"
    :menu-list="menuList"
    :multi-select="true"
    dropdown
  >
    <spr-button class="spr-w-full" tone="success">
      Select Multiple Items
    </spr-button>
  </spr-dropdown>
</template>

<script setup>
import { ref } from 'vue';

// Initialize with pre-selected values
const selectedValues = ref(['https://www.google.com', 'https://github.com']);

const menuList = ref([
  { text: 'Google', value: 'https://www.google.com' },
  { text: 'GitHub', value: 'https://github.com' },
  // Additional items...
]);
</script>
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
      <td>id</td>
      <td><strong>Required.</strong> Unique identifier for the dropdown, used to bind the popper to the correct element</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td>modelValue</td>
      <td>The selected value(s) in the dropdown. Bound with <code>v-model</code></td>
      <td>string | number | object | Array</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>menuList</td>
      <td>List of options to display in the dropdown menu. Can be formatted as:<br>
        - Array of objects with <code>text</code> and <code>value</code> properties<br>
        - Array of strings<br>
        - Array of custom objects (use with <code>textField</code> and <code>valueField</code>)
      </td>
      <td>array</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>textField</td>
      <td>When using custom objects in <code>menuList</code>, specifies which property to use for display text</td>
      <td>string</td>
      <td>'text'</td>
    </tr>
    <tr>
      <td>valueField</td>
      <td>When using custom objects in <code>menuList</code>, specifies which property to use for the value</td>
      <td>string</td>
      <td>'value'</td>
    </tr>
    <tr>
      <td>searchString</td>
      <td>Search term to filter the dropdown options</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>multiSelect</td>
      <td>When true, allows selecting multiple options from the dropdown</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>groupItemsBy</td>
      <td>Groups the dropdown items alphabetically</td>
      <td>'A-Z' | 'Z-A'</td>
      <td>-</td>
    </tr>
    <tr>
      <td>placement</td>
      <td>Controls the position of the dropdown menu relative to the trigger</td>
      <td>'auto' | 'auto-start' | 'auto-end' | 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end'</td>
      <td>'bottom'</td>
    </tr>
    <tr>
      <td>wrapperPosition</td>
      <td>CSS position value for the dropdown wrapper</td>
      <td>string</td>
      <td>'relative'</td>
    </tr>
    <tr>
      <td>width</td>
      <td>Width of the dropdown wrapper (including the trigger element)</td>
      <td>string</td>
      <td>'100%'</td>
    </tr>
    <tr>
      <td>popperWidth</td>
      <td>Width of the dropdown menu that appears when triggered</td>
      <td>string</td>
      <td>'100%'</td>
    </tr>
    <tr>
      <td>popperInnerWidth</td>
      <td>Width of the inner content area of the dropdown menu</td>
      <td>string</td>
      <td>'unset'</td>
    </tr>
    <tr>
      <td>popperStrategy</td>
      <td>Positioning strategy for the dropdown menu, especially important in modals</td>
      <td>'absolute' | 'fixed'</td>
      <td>'absolute'</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>When true, disables the dropdown from being opened</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>ladderized</td>
      <td>When true, enables hierarchical dropdown options (nested menus)</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>removeCurrentLevelInBackLabel</td>
      <td>For ladderized dropdowns, controls the back label behavior</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>noCheckInList</td>
      <td>When true, hides the checkmark icons in the dropdown list</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>dropdown</td>
      <td>When true, enables dropdown-specific behavior (as opposed to select behavior)</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>lozenge</td>
      <td>When true, enables lozenge list display.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

### Events

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Parameters</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>update:modelValue</td>
      <td>Emitted when the selected value(s) change</td>
      <td>The new selected value(s)</td>
    </tr>
    <tr>
      <td>infinite-scroll-trigger</td>
      <td>Emitted when the user scrolls to the bottom of the dropdown list, useful for implementing lazy loading</td>
      <td>Boolean</td>
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
      <td>The trigger element that opens the dropdown when clicked (typically a button, chips, or lozenge)</td>
    </tr>
  </tbody>
</table>

## Product Uses

These Sprout products use the Dropdown component:

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark" width="50px" />
  <spr-logo name="sidekick" theme="dark" width="50px" />
</div>

<script lang="ts" setup>
import { ref, watch, onMounted } from "vue";

import { Icon } from '@iconify/vue';

import SprDropdown from "@/components/dropdown/dropdown.vue";
import SprButton from "@/components/button/button.vue";
import SprChips from "@/components/chips/chips.vue";
import SprLozenge from "@/components/lozenge/lozenge.vue"
import SprModal from "@/components/modal/modal.vue"
import SprLogo from "@/components/logo/logo.vue";

const dropdownModel = ref({
  dropdownBasic1: '',
  dropdownBasic2: '',
  dropdownBasic3: '',
  dropdownGroupedItemsBy: '',
  dropdownPreSelectedItems:  'https://www.yahoo.com',
  dropdownPlacements0: '',
  dropdownPlacements1: '',
  dropdownPlacements2: '',
  dropdownWidth: '',
  dropdownStrategy: '',
});

const menuList = ref([
  { text: 'Google', value: 'https://www.google.com' },
  { text: 'GitHub', value: 'https://github.com' },
  { text: 'Gmail', value: 'https://mail.google.com' },
  { text: 'GoDaddy', value: 'https://www.godaddy.com' },
  { text: 'GIMP', value: 'https://www.gimp.org' },
  { text: 'YouTube', value: 'https://www.youtube.com' },
  { text: 'Yahoo', value: 'https://www.yahoo.com' },
  { text: 'Wikipedia', value: 'https://www.wikipedia.org' },
  { text: 'WordPress', value: 'https://wordpress.com' },
  { text: 'Walmart', value: 'https://www.walmart.com' },
  { text: 'Stack Overflow', value: 'https://stackoverflow.com' },
  { text: 'Slack', value: 'https://slack.com' },
  { text: 'Spotify', value: 'https://www.spotify.com' },
  { text: 'Twitter', value: 'https://twitter.com' },
  { text: 'Trello', value: 'https://trello.com' },
  { text: 'Tumblr', value: 'https://www.tumblr.com' },
  { text: 'Facebook', value: 'https://facebook.com' },
  { text: 'Figma', value: 'https://www.figma.com' },
  { text: 'Flickr', value: 'https://www.flickr.com' },
  { text: 'Reddit', value: 'https://www.reddit.com' },
  { text: 'LinkedIn', value: 'https://www.linkedin.com' },
  { text: 'Amazon', value: 'https://www.amazon.com' },
  { text: 'Adobe', value: 'https://www.adobe.com' },
  { text: 'Airbnb', value: 'https://www.airbnb.com' },
]);

const modalModel = ref(false);

const handleDropdownLink = (newValue, key) => {
  if (newValue) {
    window.open(newValue, '_blank', 'noopener,noreferrer');
    dropdownModel.value[key] = null;
  }
}

watch(() => dropdownModel.value.dropdownBasic1, (newValue) => handleDropdownLink(newValue, 'dropdownBasic1'));

watch(() => dropdownModel.value.dropdownBasic2, (newValue) => handleDropdownLink(newValue, 'dropdownBasic2'));

watch(() => dropdownModel.value.dropdownBasic3, (newValue) => handleDropdownLink(newValue, 'dropdownBasic3'));
</script>
