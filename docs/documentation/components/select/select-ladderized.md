---
title: Ladderized Select
outline: deep
---

# Ladderized Select

Ladderized select is for selecting options organized in hierarchical groups. It is ideal for large or categorized lists, and supports deeply nested sublevels and subtext for each item.

## Basic Usage

<div class="spr-grid spr-gap-4">
  <spr-select-ladderized
    id="ladderized-select-basic"
    v-model="laderrizedSelectModel.basicLadderizedSelect"
    :menu-list="menuList"
    label="Ladderized Select"
    placeholder="Select an item"
  />

  <code class="spr-font-medium">
    V-Model Value: {{ laderrizedSelectModel.basicLadderizedSelect  }}
  </code>
</div>

```vue
<template>
  <spr-select-ladderized
    id="ladderized-select"
    v-model="laderrizedSelectModel"
    :menu-list="menuList"
    label="Ladderized Select"
    placeholder="Select an item"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const laderrizedSelectModel = ref([]);

const menuList = ref([
  {
    text: 'Tiger',
    value: 'tiger',
    subtext: 'Rawr of the jungle',
  },
  {
    text: 'Lion',
    value: 'lion',
    subtext: 'King of the jungle',
    sublevel: [
      {
        text: 'Cub',
        value: 'cub',
        subtext: 'Young lion',
        sublevel: [
          { text: 'Cub 1', value: 'cub1' },
          { text: 'Cub 2', value: 'cub2' },
        ],
      },
      {
        text: 'Pride Member',
        value: 'pride-member',
        subtext: 'Member of a lion pride',
      },
    ],
  },
  {
    text: 'Elephant',
    value: 'elephant',
    subtext: 'Largest land animal',
    sublevel: [
      {
        text: 'Calf',
        value: 'calf',
        subtext: 'Young elephant',
      },
    ],
  },
  {
    text: 'Giraffe',
    value: 'giraffe',
    subtext: 'Tallest living terrestrial animal',
    sublevel: [
      {
        text: 'Calf',
        value: 'giraffe-calf',
        subtext: 'Young giraffe',
      },
      {
        text: 'Adult',
        value: 'giraffe-adult',
        subtext: 'Mature giraffe',
      },
    ],
  },
  {
    text: 'Zebra',
    value: 'zebra',
    subtext: 'Known for distinctive black and white stripes',
    sublevel: [
      {
        text: 'Foal',
        value: 'zebra-foal',
        subtext: 'Young zebra',
      },
      {
        text: 'Mare',
        value: 'zebra-mare',
        subtext: 'Adult female zebra',
      },
    ],
  },
]);
</script>
```

The menu list can contain nested sublevels, allowing for complex hierarchies. Each item's `sublevel` property can itself contain further sublevels, supporting infinite nesting. Each item can have a `text`, `value`, and optional `subtext` for additional information.

Here is an basic json structure of the menu list:

```json
[
  {
    "text": <Text>,
    "value": <Value>,
    "subtext": <Sub Text>,
    "sublevel": [
      {
        "text": <Text>,
        "value": <Value>,
        "subtext": <Sub Text>,
        "sublevel": [
          {
            "text": <Text>,
            "value": <Value>,
            "subtext": <Sub Text>,
            "sublevel": [...]
          },
        ]
      },
      ...
    ]
  }
  ...
]
```

## Pre-Selected Items

To preselect an item in the ladderized select, the model value array should represent the path to the item in order. For example:

```js
['lion', 'cub', 'cub1'];
```

1. The first value is the parent menu (`lion`).
2. The second value is the submenu of `lion` (`cub`).
3. The third value is the submenu of `cub` (`cub1`).

<div class="spr-grid spr-gap-4">
  <spr-select-ladderized
    id="ladderized-select-preselected"
    v-model="laderrizedSelectModel.preSelectedLadderizedSelect"
    :menu-list="menuList"
    label="Ladderized Select"
    placeholder="Select an item"
  />

  <code class="spr-font-medium">
    V-Model Value: {{ laderrizedSelectModel.preSelectedLadderizedSelect  }}
  </code>
</div>

## Searchable Menu

To enable searching through the options, set the `searchable-menu` prop to `true`. This allows users to filter options by typing in the input field.

You can also pass a `searchable-menu-placeholder` prop to customize the placeholder text for the search input.

<div class="spr-grid spr-gap-4">
  <spr-select-ladderized
    id="ladderized-select-searchable"
    v-model="laderrizedSelectModel.searchableMenuLadderized"
    :menu-list="menuList"
    label="Ladderized Select"
    placeholder="Select an item"
    searchable-menu
    searchable-menu-placeholder="Search an item in the menu..."
  />

  <code class="spr-font-medium">
    V-Model Value: {{ laderrizedSelectModel.searchableMenuLadderized  }}
  </code>
</div>

```vue
<template>
  <spr-select-ladderized
    id="ladderized-select"
    v-model="laderrizedSelectModel"
    :menu-list="menuList"
    label="Ladderized Select"
    placeholder="Select an item"
    searchable-menu
  />
</template>
```

## Placements

Placement refers to where the select popper will be positioned relative to its trigger element (e.g., button, input field). Pass the `placement` props to modify the placement of the select popper.

The available placement options are: `auto`, `auto-start`, `auto-end`, `top`, `top-start`, `top-end`, `right`, `right-start`, `right-end`, `bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, and `left-end`.

The default placement is `bottom`.

<div class="spr-grid spr-gap-4">
  <div class="spr-flex spr-gap-4">
    <spr-select-ladderized
      id="ladderized-select-placement-auto"
      v-model="laderrizedSelectModel.placementsLadderizedSelect"
      label="Ladderized Select"
      placeholder="Select an item"
      :menu-list="menuList"
      placement="auto"
      popper-width="200px"
    />
    <spr-select-ladderized
      id="ladderized-select-placement-auto-start"
      v-model="laderrizedSelectModel.placementsLadderizedSelect"
      label="Ladderized Select"
      placeholder="Select an item"
      :menu-list="menuList"
      placement="auto-start"
      popper-width="200px"
    />
    <spr-select-ladderized
      id="ladderized-select-placement-auto-end"
      v-model="laderrizedSelectModel.placementsLadderizedSelect"
      label="Ladderized Select"
      placeholder="Select an item"
      :menu-list="menuList"
      placement="auto-end"
      popper-width="200px"
    />
  </div>
  <div class="spr-flex spr-gap-4">
    <spr-select-ladderized
      id="ladderized-select-placement-top"
      v-model="laderrizedSelectModel.placementsLadderizedSelect"
      label="Ladderized Select"
      placeholder="Select an item"
      :menu-list="menuList"
      placement="top"
      popper-width="200px"
    />
    <spr-select-ladderized
      id="ladderized-select-placement-top-start"
      v-model="laderrizedSelectModel.placementsLadderizedSelect"
      label="Ladderized Select"
      placeholder="Select an item"
      :menu-list="menuList"
      placement="top-start"
      popper-width="200px"
    />
    <spr-select-ladderized
      id="ladderized-select-placement-top-end"
      v-model="laderrizedSelectModel.placementsLadderizedSelect"
      label="Ladderized Select"
      placeholder="Select an item"
      :menu-list="menuList"
      placement="top-end"
      popper-width="200px"
    />
  </div>
  <div class="spr-flex spr-gap-4">
    <spr-select-ladderized
      id="ladderized-select-placement-right"
      v-model="laderrizedSelectModel.placementsLadderizedSelect"
      label="Ladderized Select"
      placeholder="Select an item"
      :menu-list="menuList"
      placement="right"
      popper-width="200px"
    />
    <spr-select-ladderized
      id="ladderized-select-placement-right-start"
      v-model="laderrizedSelectModel.placementsLadderizedSelect"
      label="Ladderized Select"
      placeholder="Select an item"
      :menu-list="menuList"
      placement="right-start"
      popper-width="200px"
    />
    <spr-select-ladderized
      id="ladderized-select-placement-right-end"
      v-model="laderrizedSelectModel.placementsLadderizedSelect"
      label="Ladderized Select"
      placeholder="Select an item"
      :menu-list="menuList"
      placement="right-end"
      popper-width="200px"
    />
  </div>
  <div class="spr-flex spr-gap-4">
    <spr-select-ladderized
      id="ladderized-select-placement-bottom"
      v-model="laderrizedSelectModel.placementsLadderizedSelect"
      label="Ladderized Select"
      placeholder="Select an item"
      :menu-list="menuList"
      placement="bottom"
      popper-width="200px"
    />
    <spr-select-ladderized
      id="ladderized-select-placement-bottom-start"
      v-model="laderrizedSelectModel.placementsLadderizedSelect"
      label="Ladderized Select"
      placeholder="Select an item"
      :menu-list="menuList"
      placement="bottom-start"
      popper-width="200px"
    />
    <spr-select-ladderized
      id="ladderized-select-placement-bottom-end"
      v-model="laderrizedSelectModel.placementsLadderizedSelect"
      label="Ladderized Select"
      placeholder="Select an item"
      :menu-list="menuList"
      placement="bottom-end"
      popper-width="200px"
    />
  </div>
  <div class="spr-flex spr-gap-4">
    <spr-select-ladderized
      id="ladderized-select-placement-left"
      v-model="laderrizedSelectModel.placementsLadderizedSelect"
      label="Ladderized Select"
      placeholder="Select an item"
      :menu-list="menuList"
      placement="left"
      popper-width="200px"
    />
    <spr-select-ladderized
      id="ladderized-select-placement-left-start"
      v-model="laderrizedSelectModel.placementsLadderizedSelect"
      label="Ladderized Select"
      placeholder="Select an item"
      :menu-list="menuList"
      placement="left-start"
      popper-width="200px"
    />
    <spr-select-ladderized
      id="ladderized-select-placement-left-end"
      v-model="laderrizedSelectModel.placementsLadderizedSelect"
      label="Ladderized Select"
      placeholder="Select an item"
      :menu-list="menuList"
      placement="left-end"
      popper-width="200px"
    />
  </div>
</div>

## Clearable

To allow users to clear the selected value, set the `clearable` prop to `true`. This will display a clear (x) icon next to the selected value, which can be clicked to reset the selection.

<div class="spr-grid spr-gap-4">
  <spr-select-ladderized
    id="ladderized-select-clearable"
    v-model="laderrizedSelectModel.clearableLadderizedSelect"
    :menu-list="menuList"
    label="Ladderized Select"
    placeholder="Select an item"
    clearable
  />

  <code class="spr-font-medium">
    V-Model Value: {{ laderrizedSelectModel.clearableLadderizedSelect  }}
  </code>
</div>

```vue
<template>
  <spr-select-ladderized
    id="ladderized-select"
    v-model="laderrizedSelectModel"
    :menu-list="menuList"
    label="Ladderized Select"
    placeholder="Select an item"
    clearable
  />
</template>
```

## Width and Popper Width

You can modify the width of the select component in two ways: by adjusting the width of the select wrapper or by changing the width of the select popper.

`Width` - Is the overall width wrapper of both parent element and popper element.

`Popper Width` - Width of only popper element

<div>
  <spr-select-ladderized
    id="ladderized-select-width"
    v-model="laderrizedSelectModel.widthLadderizedSelect"
    :menu-list="menuList"
    label="Ladderized Select"
    placeholder="Select an item"
    width="50%"
    popper-width="200px"
  />
</div>

```vue
<template>
  <spr-select-ladderized
    id="ladderized-select"
    v-model="laderrizedSelectModel"
    :menu-list="menuList"
    label="Ladderized Select"
    placeholder="Select an item"
    width="50%"
    popper-width="200px"
  />
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

<spr-modal v-model="modalModel" title="Select with Modal">
  <spr-select-ladderized
    id="ladderized-select-modal"
    v-model="laderrizedSelectModel.strategyLadderizedSelect"
    label="Ladderized Select"
    placeholder="Select an item"
    :menu-list="menuList"
    wrapper-position="initial"
    popper-strategy="fixed"
  />
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
</spr-modal>

```vue
<template>
  <spr-button tone="success" @click="modalModel = true">Open Modal</spr-button>

  <spr-modal v-model="modalModel" title="Select with Modal">
    <spr-select-ladderized
      id="ladderized-select"
      v-model="laderrizedSelectModel"
      label="Ladderized Select"
      placeholder="Select an item"
      :menu-list="menuList"
      wrapper-position="initial"
      popper-strategy="fixed"
    />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
    </p>
  </spr-modal>
</template>
```

## Active & Disabled

This is only applicable to selected components, such as form input fields. You can learn more in the <a href='/documentation/components/input.html' target='_blank'>Input Form</a>.

To disable the popper from showing when the wrapper is clicked, pass the disabled prop.

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
      <td><code>id</code></td>
      <td>Unique id for the select. Required to bind popper within the select.</td>
      <td>String</td>
      <td>—</td>
    </tr>
    <tr>
      <td><code>v-model</code></td>
      <td>
        Value binding for the select. Accepts array of strings.
      </td>
      <td>Array</td>
      <td><code>[]</code></td>
    </tr>
    <tr>
      <td><code>menu-list</code></td>
      <td>List of options (with optional sublevel for hierarchy)</td>
      <td>Array</td>
      <td><code>[]</code></td>
    </tr>
    <tr>
      <td><code>label</code></td>
      <td>Input label</td>
      <td>String</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td><code>placeholder</code></td>
      <td>Input placeholder</td>
      <td>String</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td><code>helperText</code></td>
      <td>Helper text below input</td>
      <td>String</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td><code>helperIcon</code></td>
      <td>Icon for helper text</td>
      <td>String</td>
      <td><code>null</code></td>
    </tr>
    <tr>
      <td><code>displayHelper</code></td>
      <td>Show helper text</td>
      <td>Boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>clearable</code></td>
      <td>Show clear (x) icon to remove the selected value</td>
      <td>Boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>placement</code></td>
      <td>Popper placement (e.g., 'bottom', 'top', 'auto', etc.)</td>
      <td>String</td>
      <td><code>bottom</code></td>
    </tr>
    <tr>
      <td><code>wrapperPosition</code></td>
      <td>CSS position of wrapper</td>
      <td>String</td>
      <td><code>relative</code></td>
    </tr>
    <tr>
      <td><code>width</code></td>
      <td>Width of the select wrapper</td>
      <td>String</td>
      <td><code>100%</code></td>
    </tr>
    <tr>
      <td><code>popperWidth</code></td>
      <td>Width of the select popper</td>
      <td>String</td>
      <td><code>100%</code></td>
    </tr>
    <tr>
      <td><code>popperStrategy</code></td>
      <td>Popper positioning strategy ('absolute' or 'fixed')</td>
      <td>String</td>
      <td><code>absolute</code></td>
    </tr>
    <tr>
      <td><code>disabled</code></td>
      <td>Disable the select</td>
      <td>Boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>removeCurrentLevelInBackLabel</code></td>
      <td>Hide current level in back label</td>
      <td>Boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>searchable-menu</code></td>
      <td>Enable search input for filtering options</td>
      <td>Boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>searchable-menu-placeholder</code></td>
      <td>Placeholder of the searh menu</td>
      <td>String</td>
      <td><code>'Search...'</code></td>
    </tr>
    <tr>
      <td><code>display-text</code></td>
      <td>Display value in the input (useful for API-driven selects)</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td><code>text-field</code></td>
      <td>Field name for display text in menu list</td>
      <td>String</td>
      <td><code>'text'</code></td>
    </tr>
    <tr>
      <td><code>value-field</code></td>
      <td>Field name for value in menu list</td>
      <td>String</td>
      <td><code>'value'</code></td>
    </tr>
  </tbody>
</table>

## Events

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
      <td><code>@update:modelValue</code></td>
      <td>Array | String | Number | Object</td>
      <td>Emitted when the selection changes. Payload is the new selected value(s).</td>
    </tr>
  </tbody>
</table>

<script lang="ts" setup>
import { ref } from 'vue';

import SprSelectLadderized from "@/components/select/select-ladderized/select-ladderized.vue";
import SprInput from "@/components/input/input.vue";
import SprButton from "@/components/button/button.vue";
import SprModal from "@/components/modal/modal.vue"

const laderrizedSelectModel = ref({
  basicLadderizedSelect: [],
  searchableMenuLadderized: [],
  preSelectedLadderizedSelect: [ "lion", "cub", "cub1" ],
  placementsLadderizedSelect: [],
  clearableLadderizedSelect: [],
  widthLadderizedSelect: [],
  strategyLadderizedSelect: [],
});

const menuList = ref([
  {
    text: 'Tiger',
    value: 'tiger',
    subtext: 'Rawr of the jungle',
  },
  {
    text: 'Lion',
    value: 'lion',
    subtext: 'King of the jungle',
    sublevel: [
      {
        text: 'Cub',
        value: 'cub',
        subtext: 'Young lion',
        sublevel: [
          { text: 'Cub 1', value: 'cub1' },
          { text: 'Cub 2', value: 'cub2' },
        ],
      },
      {
        text: 'Pride Member',
        value: 'pride-member',
        subtext: 'Member of a lion pride',
      },
    ],
  },
  {
    text: 'Elephant',
    value: 'elephant',
    subtext: 'Largest land animal',
    sublevel: [
      {
        text: 'Calf',
        value: 'calf',
        subtext: 'Young elephant',
      },
    ],
  },
  {
    text: 'Giraffe',
    value: 'giraffe',
    subtext: 'Tallest living terrestrial animal',
    sublevel: [
      {
        text: 'Calf',
        value: 'giraffe-calf',
        subtext: 'Young giraffe',
      },
      {
        text: 'Adult',
        value: 'giraffe-adult',
        subtext: 'Mature giraffe',
      },
    ],
  },
  {
    text: 'Zebra',
    value: 'zebra',
    subtext: 'Known for distinctive black and white stripes',
    sublevel: [
      {
        text: 'Foal',
        value: 'zebra-foal',
        subtext: 'Young zebra',
      },
      {
        text: 'Mare',
        value: 'zebra-mare',
        subtext: 'Adult female zebra',
      },
    ],
  },
]);

const modalModel = ref(false);
</script>
