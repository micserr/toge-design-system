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
  >
    <spr-chips class="spr-w-full" label="Chips" />
  </spr-dropdown>
  <spr-dropdown 
    id="sample-dropdownBasic3" 
    v-model="dropdownModel.dropdownBasic3" 
    :menu-list="menuList" 
    width="100px" 
    popper-width="200px" 
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
]);
</script>
```

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
</div>

```vue
<template>
  <!-- Auto placement -->
  <spr-dropdown id="dropdown-auto" v-model="selectedValue" :menu-list="menuList" placement="auto" popper-width="200px">
    <spr-button class="spr-w-full" tone="success" has-icon>
      <span>Auto</span>
      <Icon icon="ph:caret-down" />
    </spr-button>
  </spr-dropdown>

  <!-- Top placement -->
  <spr-dropdown id="dropdown-top" v-model="selectedValue" :menu-list="menuList" placement="top" popper-width="200px">
    <spr-button class="spr-w-full" tone="success" has-icon>
      <span>Top</span>
      <Icon icon="ph:caret-down" />
    </spr-button>
  </spr-dropdown>
</template>
```

## Width and Popper Width

The Dropdown component provides two ways to control the sizing:

- `width`: Controls the overall width of the dropdown wrapper (including the trigger element)
- `popper-width`: Controls the width of just the dropdown menu that appears when clicked

<div>
  <spr-dropdown
    id="sample-dropdownWidth"
    v-model="dropdownModel.dropdownWidth"
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
    :menu-list="menuList"
    width="50%"
    popper-width="500px"
  >
    <spr-button class="spr-w-full" tone="success" has-icon>
      <span>Button</span>
      <Icon icon="ph:caret-down" />
    </spr-button>
  </spr-dropdown>
</template>
```

## Popper Strategy

When using dropdowns inside positioned elements like modals or fixed panels, you may need to change the positioning strategy. The `popper-strategy` prop controls how the dropdown menu is positioned:

- `absolute` (default): Positions the dropdown relative to its nearest positioned ancestor
- `fixed`: Positions the dropdown relative to the viewport, ignoring parent element positioning

<spr-button tone="success" @click="modalModel = true">Open Modal</spr-button>

<spr-modal v-model="modalModel" title="Dropdown with Modal">
  <spr-dropdown
    id="sample-dropdownStrategy"
    v-model="dropdownModel.dropdownStrategy"
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
      wrapper-position="initial"
      popper-strategy="fixed"
      width="100px"
    >
      <spr-button class="spr-w-full" tone="success" has-icon>
        <span>Button</span>
        <Icon icon="ph:caret-down" />
      </spr-button>
    </spr-dropdown>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
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

## Custom Popper Content

You can customize the content of the dropdown menu by using the `popper` slot. This allows you to include any custom HTML or components inside the dropdown.

<div>
  <spr-dropdown
    id="sample-dropdownCustomPopper"
    width="150px"
    :triggers="['hover', 'click']"
    :popper-triggers="['hover', 'click']"
    popper-width="500px"
  >
    <spr-button class="spr-w-full" tone="success" has-icon>
      <span>Custom Popper</span>
      <Icon icon="ph:caret-down" /> 
    </spr-button>
    <template #popper>
      <h5 class="spr-text-center">This is a custom popper!</h5>
    </template>
  </spr-dropdown>
</div>

```vue
<template>
  <spr-dropdown
    id="sample-dropdownCustomPopper"
    width="150px"
    :triggers="['hover', 'click']"
    :popper-triggers="['hover', 'click']"
    popper-width="500px"
  >
    <spr-button class="spr-w-full" tone="success" has-icon>
      <span>Custom Popper</span>
      <Icon icon="ph:caret-down" />
    </spr-button>

    <template #popper>
      <h5 class="spr-text-center">This is a custom popper!</h5>
    </template>
  </spr-dropdown>
</template>
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
      <td><code>id</code></td>
      <td><strong>Required.</strong> Unique identifier for the dropdown, used to bind the popper to the correct element</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td><code>model-value</code></td>
      <td>The selected value(s) in the dropdown. Bound with <code>v-model</code></td>
      <td>string | number | object | Array</td>
      <td>[]</td>
    </tr>
    <tr>
      <td><code>menu-list</code></td>
      <td>List of options to display in the dropdown menu. Can be formatted as:<br>
        - Array of objects with <code>text</code> and <code>value</code> properties<br>
        - Array of strings<br>
        - Array of custom objects (use with <code>textField</code> and <code>valueField</code>)
      </td>
      <td>array</td>
      <td>[]</td>
    </tr>
    <tr>
      <td><code>text-field</code></td>
      <td>When using custom objects in <code>menuList</code>, specifies which property to use for display text</td>
      <td>string</td>
      <td>'text'</td>
    </tr>
    <tr>
      <td><code>value-field</code></td>
      <td>When using custom objects in <code>menuList</code>, specifies which property to use for the value</td>
      <td>string</td>
      <td>'value'</td>
    </tr>
    <tr>
      <td><code>search-string</code></td>
      <td>Search term to filter the dropdown options</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td><code>multiSelect</code></td>
      <td>When true, allows selecting multiple options from the dropdown</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>group-items-by</code></td>
      <td>Groups the dropdown items alphabetically</td>
      <td>'A-Z' | 'Z-A'</td>
      <td>-</td>
    </tr>
    <tr>
      <td><code>placement</code></td>
      <td>Controls the position of the dropdown menu relative to the trigger</td>
      <td>'auto' | 'auto-start' | 'auto-end' | 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end'</td>
      <td>'bottom'</td>
    </tr>
    <tr>
      <td><code>wrapper-position</code></td>
      <td>CSS position value for the dropdown wrapper</td>
      <td>string</td>
      <td>'relative'</td>
    </tr>
    <tr>
      <td><code>width</code></td>
      <td>Width of the dropdown wrapper (including the trigger element)</td>
      <td>string</td>
      <td>'100%'</td>
    </tr>
    <tr>
      <td><code>popper-width</code></td>
      <td>Width of the dropdown menu that appears when triggered</td>
      <td>string</td>
      <td>'100%'</td>
    </tr>
    <tr>
      <td><code>popper-inner-width</code></td>
      <td>Width of the inner content area of the dropdown menu</td>
      <td>string</td>
      <td>'unset'</td>
    </tr>
    <tr>
      <td><code>popper-strategy</code></td>
      <td>Positioning strategy for the dropdown menu, especially important in modals</td>
      <td>'absolute' | 'fixed'</td>
      <td>'absolute'</td>
    </tr>
    <tr>
      <td><code>disabled</code></td>
      <td>When true, disables the dropdown from being opened</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>ladderized</code></td>
      <td>When true, enables hierarchical dropdown options (nested menus)</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>remove-current-level-in-back-label</code></td>
      <td>For ladderized dropdowns, controls the back label behavior</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>no-check-in-list</code></td>
      <td>When true, hides the checkmark icons in the dropdown list</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>lozenge</code></td>
      <td>When true, enables lozenge list display.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>triggers</code></td>
      <td>Array of events that will trigger the dropdown to open</td>
      <td>'click' | 'hover' | 'focus' | 'touch'[]</td>
      <td>['click']</td>
    </tr>
    <tr>
      <td><code>popper-triggers</code></td>
      <td>Array of events that will trigger the dropdown menu (popper element) to open</td>
      <td>'click' | 'hover' | 'focus' | 'touch'[]</td>
      <td>[]</td>
    </tr>
    <tr>
      <td><code>auto-hide</code></td>
      <td>When true, automatically hides the dropdown when clicking outside it</td>
      <td>boolean</td>
      <td>true</td>
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
      <td>@infinite-scroll-trigger</td>
      <td>Emitted when the user scrolls to the bottom of the dropdown list, useful for implementing lazy loading</td>
      <td>Boolean</td>
    </tr>
    <tr>
      <td>@popper-state</td>
      <td>Event emitted when you open or close the popper</td>
      <td>Bolean</td>
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
    <tr>
      <td>popper</td>
      <td>Custom elements for popper content.</td>
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
