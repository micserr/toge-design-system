---
title: Ladderized Select
outline: deep
---

# Ladderized Select

Ladderized select is for selecting options organized in hierarchical groups. It is ideal for large or categorized lists, and supports deeply nested sublevels and subtext for each item.

## Basic Usage

<spr-select-ladderized
  id="ladderized-animals"
  v-model="selected"
  :menu-list="menuList"
  label="Ladderized Select"
  placeholder="Select an animal or sublevel..."
/>

```vue
<template>
  <spr-select-ladderized
    id="ladderized-animals"
    v-model="selected"
    :menu-list="menuList"
    label="Ladderized Select"
    placeholder="Select an animal or sublevel..."
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selected = ref([]);
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

## Features

- Supports any level of nested sublevels (hierarchical data)
- Displays `subtext` for each item (if provided)
- Searchable and clearable (see props)
- Keyboard and mouse navigation

## Props

| Prop                            | Type    | Default    | Description                              |
| ------------------------------- | ------- | ---------- | ---------------------------------------- |
| `id`                            | String  | —          | Unique id for the dropdown               |
| `modelValue`                    | Array   | `[]`       | Selected value(s) (v-model)              |
| `menuList`                      | Array   | `[]`       | List of options (with optional sublevel) |
| `label`                         | String  | `''`       | Input label                              |
| `placeholder`                   | String  | `''`       | Input placeholder                        |
| `helperText`                    | String  | `''`       | Helper text below input                  |
| `helperIcon`                    | String  | `null`     | Icon for helper text                     |
| `displayHelper`                 | Boolean | `false`    | Show helper text                         |
| `clearable`                     | Boolean | `false`    | Show clear (x) icon                      |
| `searchable`                    | Boolean | `false`    | Enable search input                      |
| `placement`                     | String  | `bottom`   | Popper placement (e.g., 'bottom', 'top') |
| `wrapperPosition`               | String  | `relative` | CSS position of wrapper                  |
| `width`                         | String  | `100%`     | Width of the dropdown wrapper            |
| `popperWidth`                   | String  | `100%`     | Width of the dropdown popper             |
| `popperStrategy`                | String  | `absolute` | Popper positioning strategy              |
| `disabled`                      | Boolean | `false`    | Disable the dropdown                     |
| `removeCurrentLevelInBackLabel` | Boolean | `false`    | Hide current level in back label         |

## Events

- `@update:modelValue` — Emitted when the selection changes.

---

For advanced usage, see the source code or extend the component with your own features.

<script lang="ts" setup>
import { ref } from 'vue';
import SprSelectLadderized from "@/components/select/select-ladderized/select-ladderized.vue";

const selected = ref([]);
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
