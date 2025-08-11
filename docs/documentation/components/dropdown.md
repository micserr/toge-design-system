---
outline: 'deep'
---

# Dropdown

Dropdowns appear when the user interacts with a trigger element (such as a button, link, or icon) and are used for navigation menus, action lists, and other UI interactions. They are not intended for form field selection.

## Basic Usage

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
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const dropdownModel = ref({
  dropdownBasic1: '',
  dropdownBasic2: '',
  dropdownBasic3: '',
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

watch(
  () => dropdownModel.value.dropdownBasic2,
  (newValue) => handleDropdownLink(newValue, 'dropdownBasic2'),
);

watch(
  () => dropdownModel.value.dropdownBasic3,
  (newValue) => handleDropdownLink(newValue, 'dropdownBasic3'),
);
</script>
```

## Grouped Items By

You can group items by `default`, `A-Z` or `Z-A` order by passing the `group-items-by` prop and specifying the desired grouping type.

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
      v-model="dropdownGroupedItemsBy"
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
</template>
```

## Pre-Selected Items

Pre-selected items are options that are automatically selected when the dopdown is first displayed. The `v-model` for the select component supports:

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
      id="sample-select"
      v-model="dropdownPreSelectedItems"
      :menu-list="menuList"
      group-items-by="A-Z"
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

const dropdownPreSelectedItems = ref('https://www.yahoo.com');
</script>
```

## Placements

Placement refers to where the select popper will be positioned relative to its trigger element (e.g., button, input field). Pass the `placement` props to modify the placement of the select popper.

The available placement options are: `auto`, `auto-start`, `auto-end`, `top`, `top-start`, `top-end`, `right`, `right-start`, `right-end`, `bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, and `left-end`.

The default placement is `bottom`.

<div class="spr-grid spr-gap-4">
  <div class="spr-flex spr-gap-4">
    <spr-dropdown
      id="sample-dropdownPlacements"
      v-model="dropdownModel.dropdownPlacements"
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
      id="sample-dropdownPlacements"
      v-model="dropdownModel.dropdownPlacements"
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
      id="sample-dropdownPlacements"
      v-model="dropdownModel.dropdownPlacements"
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
  <div class="spr-flex spr-gap-4">
    <spr-dropdown
      id="sample-dropdownPlacements"
      v-model="dropdownModel.dropdownPlacements"
      :menu-list="menuList"
      placement="top"
      popper-width="200px"
    >
      <spr-button class="spr-w-full" tone="success" has-icon>
        <span>Top</span>
        <Icon icon="ph:caret-down" />
      </spr-button>
    </spr-dropdown>
    <spr-dropdown
      id="sample-dropdownPlacements"
      v-model="dropdownModel.dropdownPlacements"
      :menu-list="menuList"
      placement="top-start"
      popper-width="200px"
    >
      <spr-button class="spr-w-full" tone="success" has-icon>
        <span>Top Start</span>
        <Icon icon="ph:caret-down" />
      </spr-button>
    </spr-dropdown>
    <spr-dropdown
      id="sample-dropdownPlacements"
      v-model="dropdownModel.dropdownPlacements"
      :menu-list="menuList"
      placement="top-end"
      popper-width="200px"
    >
      <spr-button class="spr-w-full" tone="success" has-icon>
        <span>Top End</span>
        <Icon icon="ph:caret-down" />
      </spr-button>
    </spr-dropdown>
  </div>
  <div class="spr-flex spr-gap-4">
    <spr-dropdown
      id="sample-dropdownPlacements"
      v-model="dropdownModel.dropdownPlacements"
      :menu-list="menuList"
      placement="right"
      popper-width="200px"
    >
      <spr-button class="spr-w-full" tone="success" has-icon>
        <span>Right</span>
        <Icon icon="ph:caret-down" />
      </spr-button>
    </spr-dropdown>
    <spr-dropdown
      id="sample-dropdownPlacements"
      v-model="dropdownModel.dropdownPlacements"
      :menu-list="menuList"
      placement="right-start"
      popper-width="200px"
    >
      <spr-button class="spr-w-full" tone="success" has-icon>
        <span>Right Start</span>
        <Icon icon="ph:caret-down" />
      </spr-button>
    </spr-dropdown>
    <spr-dropdown
      id="sample-dropdownPlacements"
      v-model="dropdownModel.dropdownPlacements"
      :menu-list="menuList"
      placement="right-end"
      popper-width="200px"
    >
      <spr-button class="spr-w-full" tone="success" has-icon>
        <span>Right End</span>
        <Icon icon="ph:caret-down" />
      </spr-button>
    </spr-dropdown>
  </div>
  <div class="spr-flex spr-gap-4">
    <spr-dropdown
      id="sample-dropdownPlacements"
      v-model="dropdownModel.dropdownPlacements"
      :menu-list="menuList"
      placement="bottom"
      popper-width="200px"
    >
      <spr-button class="spr-w-full" tone="success" has-icon>
        <span>Bottom</span>
        <Icon icon="ph:caret-down" />
      </spr-button>
    </spr-dropdown>
    <spr-dropdown
      id="sample-dropdownPlacements"
      v-model="dropdownModel.dropdownPlacements"
      :menu-list="menuList"
      placement="bottom-start"
      popper-width="200px"
    >
      <spr-button class="spr-w-full" tone="success" has-icon>
        <span>Bottom Start</span>
        <Icon icon="ph:caret-down" />
      </spr-button>
    </spr-dropdown>
    <spr-dropdown
      id="sample-dropdownPlacements"
      v-model="dropdownModel.dropdownPlacements"
      :menu-list="menuList"
      placement="bottom-end"
      popper-width="200px"
    >
      <spr-button class="spr-w-full" tone="success" has-icon>
        <span>Bottom End</span>
        <Icon icon="ph:caret-down" />
      </spr-button>
    </spr-dropdown>
  </div>
  <div class="spr-flex spr-gap-4">
    <spr-dropdown
      id="sample-dropdownPlacements"
      v-model="dropdownModel.dropdownPlacements"
      :menu-list="menuList"
      placement="left"
      popper-width="200px"
    >
      <spr-button class="spr-w-full" tone="success" has-icon>
        <span>Left</span>
        <Icon icon="ph:caret-down" />
      </spr-button>
    </spr-dropdown>
    <spr-dropdown
      id="sample-dropdownPlacements"
      v-model="dropdownModel.dropdownPlacements"
      :menu-list="menuList"
      placement="left-start"
      popper-width="200px"
    >
      <spr-button class="spr-w-full" tone="success" has-icon>
        <span>Left Start</span>
        <Icon icon="ph:caret-down" />
      </spr-button>
    </spr-dropdown>
    <spr-dropdown
      id="sample-dropdownPlacements"
      v-model="dropdownModel.dropdownPlacements"
      :menu-list="menuList"
      placement="left-end"
      popper-width="200px"
    >
      <spr-button class="spr-w-full" tone="success" has-icon>
        <span>Left End</span>
        <Icon icon="ph:caret-down" />
      </spr-button>
    </spr-dropdown>
  </div>
</div>

## Width and Popper Width

You can modify the width of the dropdown component in two ways: by adjusting the width of the dropdown wrapper or by changing the width of the dropdown popper.

`Width` - Is the overall width wrapper of both parent element and popper element.

`Popper Width` - Width of only popper element

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

The Popper strategy is primarily used when working with elements like modal. It helps control the positioning behavior of popper. The strategy ensures that the popper element is dynamically positioned based on the viewport, the reference element, or other factors such as scrolling or resizing.

By default, the Popper strategy is set to `absolute`, which positions the popper element relative to the nearest positioned ancestor (usually the body element). However, you can change the `strategy` to `fixed`, which positions the popper element relative to the viewport, ensuring that it remains in place even when the page is scrolled.

Pass the prop `popper-strategy` to change the behavior position of the popper.

::: info Important to note:
Do not forget to pass prop `wrapperPosition` to overwrite `relative` position into `initial`.
:::

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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
    </p>
  </spr-modal>
</template>
```

## API Reference

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
      <td>Required to bind popper within the select</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>v-model</td>
      <td>Value binding for the select. Accepts:<br>
        <ul>
          <li><b>Single primitive values:</b> String ('apple'), Number (42)</li>
          <li><b>Single object values:</b> Full objects ({ id: 1, name: 'John' })</li>
          <li><b>Array of values:</b> Array of strings, numbers, or objects</li>
        </ul>
        The returned value type will match the input type (preserving strings, numbers, and objects).
      </td>
      <td>String | Number | Object | Array</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>menu-list</td>
      <td>List of options composed of <code>text</code> and <code>value</code> properties, or array of strings/objects</td>
      <td>optionsType[] | string[] | object[]</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>group-items-by</td>
      <td>Group items by order: 'A-Z', 'Z-A'</td>
      <td>'A-Z' | 'Z-A'</td>
      <td>-</td>
    </tr>
    <tr>
      <td>placeholder</td>
      <td>Placeholder text for the input</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>label</td>
      <td>Label text for the input</td>
      <td>String</td>
      <td>''</td>
    </tr>
    <tr>
      <td>placement</td>
      <td>Placement of the select popper (e.g., 'bottom', 'top', 'left', 'right')</td>
      <td>String</td>
      <td>'bottom'</td>
    </tr>
    <tr>
      <td>popper-strategy</td>
      <td>Defines how the select's popper is positioned: 'absolute' or 'fixed'</td>
      <td>String</td>
      <td>'absolute'</td>
    </tr>
    <tr>
      <td>popper-width</td>
      <td>Width of the select's popper</td>
      <td>String</td>
      <td>'100%'</td>
    </tr>
    <tr>
      <td>width</td>
      <td>Width of the select component wrapper</td>
      <td>String</td>
      <td>'100%'</td>
    </tr>
    <tr>
      <td>wrapper-position</td>
      <td>CSS position of the select wrapper</td>
      <td>String</td>
      <td>'relative'</td>
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
      <td>@update:model-value</td>
      <td>Event emitted when the model value changes</td>
      <td>Any</td>
    </tr>
  </tbody>
</table>

## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark"  width="50px" />
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
  dropdownPlacements: '',
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
