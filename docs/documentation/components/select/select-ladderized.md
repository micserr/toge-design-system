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
    :options="options"
    label="Ladderized Select"
    placeholder="Select an item"
  />

  <code class="spr-font-medium">
    V-Model: {{ laderrizedSelectModel.basicLadderizedSelect  }}
  </code>
</div>

```vue
<template>
  <spr-select-ladderized
    id="ladderized-select"
    v-model="laderrizedSelectModel"
    :options="options"
    label="Ladderized Select"
    placeholder="Select an item"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const laderrizedSelectModel = ref([]);

const options = ref([
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
  {
    text: 'Ant',
    value: 'ant',
    subtext: 'Highly organized social insect',
    sublevel: [
      {
        text: 'Colony',
        value: 'ant-colony',
        subtext: 'Entire ant community',
        sublevel: [
          {
            text: 'Queen Chamber',
            value: 'queen-chamber',
            subtext: 'Where the queen resides',
            sublevel: [
              {
                text: 'Queen Ant',
                value: 'queen-ant',
                subtext: 'Reproductive female',
                sublevel: [
                  {
                    text: 'Egg Layer',
                    value: 'egg-layer',
                    subtext: 'Primary role of the queen',
                    sublevel: [
                      {
                        text: 'New Eggs',
                        value: 'new-eggs',
                        subtext: 'Recently laid eggs',
                      },
                      {
                        text: 'Developing Larvae',
                        value: 'developing-larvae',
                        subtext: 'Eggs growing into ants',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            text: 'Worker Section',
            value: 'worker-section',
            subtext: 'Worker ants operate here',
            sublevel: [
              {
                text: 'Foragers',
                value: 'foragers',
                subtext: 'Collect food',
              },
              {
                text: 'Nurses',
                value: 'nurses',
                subtext: 'Care for larvae',
              },
            ],
          },
          {
            text: 'Soldier Post',
            value: 'soldier-post',
            subtext: 'Guards of the colony',
          },
        ],
      },
    ],
  },
]);
</script>
```

The options can contain nested sublevels, allowing for complex hierarchies. Each item's `sublevel` property can itself contain further sublevels, supporting infinite nesting. Each item can have a `text`, `value`, and optional `subtext` for additional information.

Here is an basic json structure of the options:

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

1. The first value is the parent options (`lion`).
2. The second value is the sub-options of `lion` (`cub`).
3. The third value is the sub-options of `cub` (`cub1`).

<div class="spr-grid spr-gap-4">
  <spr-select-ladderized
    id="ladderized-select-preselected"
    v-model="laderrizedSelectModel.preSelectedLadderizedSelect"
    :options="options"
    label="Ladderized Select"
    placeholder="Select an item"
  />

  <code class="spr-font-medium">
    V-Model: {{ laderrizedSelectModel.preSelectedLadderizedSelect  }}
  </code>
</div>

## Text Seperator

You can customize the separator between values in the ladderized text input by passing the `text-seperator` prop. The default separator is ' > '.

<div class="spr-grid spr-gap-4">
   <spr-select-ladderized
    id="ladderized-select-text-seperator1"
    v-model="laderrizedSelectModel.textSeperatorLadderizedSelect1"
    :options="options"
    label="Ladderized Select"
    placeholder="Select an item"
  />
  <spr-select-ladderized
    id="ladderized-select-text-seperator2"
    v-model="laderrizedSelectModel.textSeperatorLadderizedSelect2"
    :options="options"
    text-seperator=", "
    label="Ladderized Select"
    placeholder="Select an item"
  />
</div>

```vue
<template>
  <spr-select-ladderized
    id="ladderized-select"
    v-model="laderrizedSelectModel"
    :options="options"
    label="Ladderized Select"
    placeholder="Select an item"
  />

  <spr-select-ladderized
    id="ladderized-select"
    v-model="laderrizedSelectModel"
    :options="options"
    label="Ladderized Select"
    placeholder="Select an item"
    text-seperator=", "
  />
</template>
```

## Prepend Text

You can prepend text in the ladderized text input by passing the `prepend-text` prop.

<div class="spr-grid spr-gap-4">
   <spr-select-ladderized
    id="ladderized-select-prepend-text"
    v-model="laderrizedSelectModel.prependTextLadderizedSelect"
    :options="options"
    label="Ladderized Select"
    placeholder="Select an item"
    prepend-text
  />

  <code class="spr-font-medium">
    V-Model: {{ laderrizedSelectModel.prependTextLadderizedSelect  }}
  </code>
</div>

```vue
<template>
  <spr-select-ladderized
    id="ladderized-select"
    v-model="laderrizedSelectModel"
    :options="options"
    label="Ladderized Select"
    placeholder="Select an item"
    prepend-text
  />
</template>
```

## Search

To enable searching through the options, set the `searchable-options` prop to `true`. This allows users to filter options by typing in the input field.

You can also pass a `searchable-options-placeholder` prop to customize the placeholder text for the search input.

<div class="spr-grid spr-gap-4">
  <spr-select-ladderized
    id="ladderized-select-searchable"
    v-model="laderrizedSelectModel.searchableOptionsLadderizedSelect"
    :options="options"
    label="Ladderized Select"
    placeholder="Select an item"
    searchable-options
    searchable-options-placeholder="Search an item..."
  />

  <code class="spr-font-medium">
    V-Model: {{ laderrizedSelectModel.searchableOptionsLadderizedSelect  }}
  </code>
</div>

```vue
<template>
  <spr-select-ladderized
    id="ladderized-select"
    v-model="laderrizedSelectModel"
    :options="options"
    label="Ladderized Select"
    placeholder="Select an item"
    searchable-options
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
      label="Auto"
      placeholder="Select an item"
      :options="options"
      placement="auto"
      popper-width="200px"
    />
    <spr-select-ladderized
      id="ladderized-select-placement-auto-start"
      v-model="laderrizedSelectModel.placementsLadderizedSelect"
      label="Auto Start"
      placeholder="Select an item"
      :options="options"
      placement="auto-start"
      popper-width="200px"
    />
    <spr-select-ladderized
      id="ladderized-select-placement-auto-end"
      v-model="laderrizedSelectModel.placementsLadderizedSelect"
      label="Auto End"
      placeholder="Select an item"
      :options="options"
      placement="auto-end"
      popper-width="200px"
    />
  </div>
  <div class="spr-flex spr-gap-4">
    <spr-select-ladderized
      id="ladderized-select-placement-top"
      v-model="laderrizedSelectModel.placementsLadderizedSelect"
      label="Top"
      placeholder="Select an item"
      :options="options"
      placement="top"
      popper-width="200px"
    />
    <spr-select-ladderized
      id="ladderized-select-placement-top-start"
      v-model="laderrizedSelectModel.placementsLadderizedSelect"
      label="Top Start"
      placeholder="Select an item"
      :options="options"
      placement="top-start"
      popper-width="200px"
    />
    <spr-select-ladderized
      id="ladderized-select-placement-top-end"
      v-model="laderrizedSelectModel.placementsLadderizedSelect"
      label="Top End"
      placeholder="Select an item"
      :options="options"
      placement="top-end"
      popper-width="200px"
    />
  </div>
  <div class="spr-flex spr-gap-4">
    <spr-select-ladderized
      id="ladderized-select-placement-right"
      v-model="laderrizedSelectModel.placementsLadderizedSelect"
      label="Right"
      placeholder="Select an item"
      :options="options"
      placement="right"
      popper-width="200px"
    />
    <spr-select-ladderized
      id="ladderized-select-placement-right-start"
      v-model="laderrizedSelectModel.placementsLadderizedSelect"
      label="Right Start"
      placeholder="Select an item"
      :options="options"
      placement="right-start"
      popper-width="200px"
    />
    <spr-select-ladderized
      id="ladderized-select-placement-right-end"
      v-model="laderrizedSelectModel.placementsLadderizedSelect"
      label="Right End"
      placeholder="Select an item"
      :options="options"
      placement="right-end"
      popper-width="200px"
    />
  </div>
  <div class="spr-flex spr-gap-4">
    <spr-select-ladderized
      id="ladderized-select-placement-bottom"
      v-model="laderrizedSelectModel.placementsLadderizedSelect"
      label="Bottom"
      placeholder="Select an item"
      :options="options"
      placement="bottom"
      popper-width="200px"
    />
    <spr-select-ladderized
      id="ladderized-select-placement-bottom-start"
      v-model="laderrizedSelectModel.placementsLadderizedSelect"
      label="Bottom Start"
      placeholder="Select an item"
      :options="options"
      placement="bottom-start"
      popper-width="200px"
    />
    <spr-select-ladderized
      id="ladderized-select-placement-bottom-end"
      v-model="laderrizedSelectModel.placementsLadderizedSelect"
      label="Bottom End"
      placeholder="Select an item"
      :options="options"
      placement="bottom-end"
      popper-width="200px"
    />
  </div>
  <div class="spr-flex spr-gap-4">
    <spr-select-ladderized
      id="ladderized-select-placement-left"
      v-model="laderrizedSelectModel.placementsLadderizedSelect"
      label="Left"
      placeholder="Select an item"
      :options="options"
      placement="left"
      popper-width="200px"
    />
    <spr-select-ladderized
      id="ladderized-select-placement-left-start"
      v-model="laderrizedSelectModel.placementsLadderizedSelect"
      label="Left Start"
      placeholder="Select an item"
      :options="options"
      placement="left-start"
      popper-width="200px"
    />
    <spr-select-ladderized
      id="ladderized-select-placement-left-end"
      v-model="laderrizedSelectModel.placementsLadderizedSelect"
      label="Left End"
      placeholder="Select an item"
      :options="options"
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
    :options="options"
    label="Ladderized Select"
    placeholder="Select an item"
    clearable
  />

  <code class="spr-font-medium">
    V-Model: {{ laderrizedSelectModel.clearableLadderizedSelect  }}
  </code>
</div>

```vue
<template>
  <spr-select-ladderized
    id="ladderized-select"
    v-model="laderrizedSelectModel"
    :options="options"
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
    :options="options"
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
    :options="options"
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
    :options="options"
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
      :options="options"
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
      <td><code>options</code></td>
      <td>List of options (with optional sublevel for hierarchy)</td>
      <td>Array</td>
      <td><code>[]</code></td>
    </tr>
    <tr>
      <td><code>label</code></td>
      <td>Label for the select input.</td>
      <td>String</td>
      <td>''</td>
    </tr>
    <tr>
      <td><code>supporting-label</code></td>
      <td>Text beside label that has a supporting style</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td><code>placeholder</code></td>
      <td>Input placeholder</td>
      <td>String</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td><code>text-seperator</code></td>
      <td>Customize the seperator between value in ladderized text input</td>
      <td>String</td>
      <td><code>' > '</code></td>
    </tr>
    <tr>
      <td><code>prepend-text</code></td>
      <td>Prepend the text in the ladderized text input</td>
      <td>Boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>helper-text</code></td>
      <td>Helper text below input</td>
      <td>String</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td><code>helper-icon</code></td>
      <td>Icon for helper text</td>
      <td>String</td>
      <td><code>null</code></td>
    </tr>
    <tr>
      <td><code>display-helper</code></td>
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
      <td><code>wrapper-position</code></td>
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
      <td><code>popper-width</code></td>
      <td>Width of the select popper</td>
      <td>String</td>
      <td><code>100%</code></td>
    </tr>
    <tr>
      <td><code>popper-strategy</code></td>
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
      <td><code>remove-current-level-in-back-label</code></td>
      <td>Hide current level in back label</td>
      <td>Boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>searchable-options</code></td>
      <td>Enable search input for filtering options</td>
      <td>Boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>searchable-options-placeholder</code></td>
      <td>Placeholder of the searh options</td>
      <td>String</td>
      <td><code>'Search...'</code></td>
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
    <tr>
      <td>@popper-state</td>
      <td>Bolean</td>
      <td>Event emitted when you open or close the popper</td>
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
  searchableOptionsLadderizedSelect: [],
  preSelectedLadderizedSelect: [ "lion", "cub", "cub1" ],
  textSeperatorLadderizedSelect1: [],
  textSeperatorLadderizedSelect2: [],
  prependTextLadderizedSelect: [],
  placementsLadderizedSelect: [],
  clearableLadderizedSelect: [],
  widthLadderizedSelect: [],
  strategyLadderizedSelect: [],
});

const options = ref([
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
          { text: 'Cub 3', value: 'cub3' },
          { text: 'Cub 4', value: 'cub4' },
          { text: 'Cub 5', value: 'cub5' },
          { text: 'Cub 6', value: 'cub6' },
          { text: 'Cub 7', value: 'cub7' },
          { text: 'Cub 8', value: 'cub8' },
          { text: 'Cub 9', value: 'cub9' },
          { text: 'Cub 10', value: 'cub10' },
        ],
      },
      {
        text: 'Pride Member',
        value: 'pride-member',
        subtext: 'Member of a lion pride',
      },
      {
        text: 'Hunter',
        value: 'hunter',
        subtext: 'Lion that hunts prey',
      },
      {
        text: 'Guardian',
        value: 'guardian',
        subtext: 'Protects the pride',
      },
      {
        text: 'Elder',
        value: 'elder',
        subtext: 'Older, experienced lion',
      },
      {
        text: 'Nomad',
        value: 'nomad',
        subtext: 'Wanders independently',
      },
      {
        text: 'Scout',
        value: 'scout',
        subtext: 'Explores new territory',
      },
      {
        text: 'Alpha Male',
        value: 'alpha-male',
        subtext: 'Dominant male in pride',
      },
      {
        text: 'Matriarch',
        value: 'matriarch',
        subtext: 'Leading female',
      },
      {
        text: 'Sibling',
        value: 'sibling',
        subtext: 'Brother or sister lion',
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
  {
    text: 'Ant',
    value: 'ant',
    subtext: 'Highly organized social insect',
    sublevel: [
      {
        text: 'Colony',
        value: 'ant-colony',
        subtext: 'Entire ant community',
        sublevel: [
          {
            text: 'Queen Chamber',
            value: 'queen-chamber',
            subtext: 'Where the queen resides',
            sublevel: [
              {
                text: 'Queen Ant',
                value: 'queen-ant',
                subtext: 'Reproductive female',
                sublevel: [
                  {
                    text: 'Egg Layer',
                    value: 'egg-layer',
                    subtext: 'Primary role of the queen',
                    sublevel: [
                      { text: 'New Eggs', value: 'new-eggs', subtext: 'Recently laid eggs' },
                      { text: 'Developing Larvae', value: 'developing-larvae', subtext: 'Eggs growing into ants' },
                      { text: 'Stage 3 Larvae', value: 'larvae-3', subtext: 'Mid-stage larvae' },
                      { text: 'Stage 4 Larvae', value: 'larvae-4', subtext: 'Advanced stage' },
                      { text: 'Pupae', value: 'pupae', subtext: 'Ready to become ants' },
                      { text: 'Emerging Ants', value: 'emerging-ants', subtext: 'Breaking out of cocoon' },
                      { text: 'First Workers', value: 'first-workers', subtext: 'Initial group of helpers' },
                      { text: 'Secondary Workers', value: 'secondary-workers', subtext: 'Support group' },
                      { text: 'Royal Guards', value: 'royal-guards', subtext: 'Protect the queen' },
                      { text: 'Brood Carers', value: 'brood-carers', subtext: 'Care for developing young' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            text: 'Worker Section',
            value: 'worker-section',
            subtext: 'Worker ants operate here',
            sublevel: [
              { text: 'Foragers', value: 'foragers', subtext: 'Collect food' },
              { text: 'Nurses', value: 'nurses', subtext: 'Care for larvae' },
            ],
          },
          {
            text: 'Soldier Post',
            value: 'soldier-post',
            subtext: 'Guards of the colony',
          },
        ],
      },
    ],
  },

  // ✅ 10 More Parent Items
  {
    text: 'Leopard',
    value: 'leopard',
    subtext: 'Stealthy predator of the jungle',
  },
  {
    text: 'Cheetah',
    value: 'cheetah',
    subtext: 'Fastest land animal',
  },
  {
    text: 'Hippo',
    value: 'hippo',
    subtext: 'Large semi-aquatic mammal',
  },
  {
    text: 'Rhino',
    value: 'rhino',
    subtext: 'Horned herbivore',
  },
  {
    text: 'Hyena',
    value: 'hyena',
    subtext: 'Scavenger with strong jaws',
  },
  {
    text: 'Crocodile',
    value: 'crocodile',
    subtext: 'Apex aquatic predator',
  },
  {
    text: 'Ostrich',
    value: 'ostrich',
    subtext: 'Largest living bird',
  },
  {
    text: 'Meerkat',
    value: 'meerkat',
    subtext: 'Small mongoose known for standing upright',
  },
  {
    text: 'Warthog',
    value: 'warthog',
    subtext: 'Tusked wild pig',
  },
  {
    text: 'Baboons',
    value: 'baboons',
    subtext: 'Social primates of the savanna',
  },
]);

const modalModel = ref(false);
</script>
