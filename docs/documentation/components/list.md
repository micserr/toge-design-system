---
outline: 'deep'
---

# List

## Basic Usage

The list component uses the `v-model` directive to bind the selected items to a variable. The `menu-list` prop is used to pass the list of items to display in the menu. Each item in the list should contain `text` and `value` properties.

<div 
  :class="[
    'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
    'spr-border spr-border-solid spr-border-color-weak'
  ]"
>
  <spr-list v-model="singleSelectOutput.example1" :menu-list="menuList" />
</div>
<div class="spr-my-3 spr-p-4 spr-bg-blue-100">
  <h5>Output:</h5>
  <span>{{ singleSelectOutput.example1 }}</span>
</div>

```vue
<template>
  <div
    :class="[
      'spr-max-h-[300px] spr-overflow-auto spr-rounded-md spr-p-2',
      'spr-border-color-weak spr-border spr-border-solid',
    ]"
  >
    <spr-list v-model="singleSelectOutput" :menu-list="menuList" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const singleSelectOutput = ref([]);

const menuList = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
  { text: 'Date', value: 'date' },
  { text: 'Elderberry', value: 'elderberry' },
  { text: 'Fig', value: 'fig' },
  { text: '5 Grape', value: 'grape' },
  { text: 'Honeydew', value: 'honeydew' },
  { text: 'Indian Fig', value: 'indian_fig' },
  { text: 'Jackfruit', value: 'jackfruit' },
  { text: 'Kiwi', value: 'kiwi' },
  { text: 'Lemon', value: 'lemon' },
  { text: 'Mango', value: 'mango' },
  { text: 'Nectarine', value: 'nectarine' },
  { text: '89 Watermelon', value: 'watermelon' },
  { text: 'Xigua', value: 'xigua' },
  { text: 'Yunnan Hackberry', value: 'yunnan_hackberry' },
  { text: '1 Zucchini', value: 'zucchini' },
  { text: 'Apricot', value: 'apricot' },
  { text: 'Blueberry', value: 'blueberry' },
  { text: 'Cantaloupe', value: 'cantaloupe' },
  { text: 'Dragonfruit', value: 'dragonfruit' },
  { text: 'Pineapple', value: 'pineapple' },
]);
</script>
```

::: tip NOTE
The `menu-list` is an array of `MenuListType` as defined below:

```ts
type MenuListType = {
  text: string;
  value: string;
  subtext?: string;
  group?: string; // Property to group items
  sublevel?: MenuListType[]; // Property used for ladderized list
  disabled?: boolean;
  _originalObject?: Record<string, unknown>; // Store original object reference when mapping complex objects
  icon?: string; // String value for Iconify
  iconColor?: string;
  textColor?: string;
  onClickFn?: () => void;
};
```

:::

## Pre-Selected Items

You can pre-select items by using `pre-selected-items` in the component and passing an array of strings that correspond to the`value` of the item.

<div 
  :class="[
    'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
    'spr-border spr-border-solid spr-border-color-weak'
  ]"
>
  <spr-list v-model="singleSelectOutput.example2" :menu-list="menuList" :pre-selected-items="preselectedItems" />
</div>
<div class="spr-my-3 spr-p-4 spr-bg-blue-100">
  <h5>Output:</h5>
  <span>{{ singleSelectOutput.example2 }}</span>
</div>

```vue
<template>
  <div
    :class="[
      'spr-max-h-[300px] spr-overflow-auto spr-rounded-md spr-p-2',
      'spr-border-color-weak spr-border spr-border-solid',
    ]"
  >
    <spr-list v-model="singleSelectOutput" :menu-list="menuList" :pre-selected-items="preselectedItem" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const singleSelectOutput = ref([]);
const preselectedItem = ref(['apple']);

const menuList = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
  { text: 'Date', value: 'date' },
  { text: 'Elderberry', value: 'elderberry' },
  { text: 'Fig', value: 'fig' },
  { text: '5 Grape', value: 'grape' },
  { text: 'Honeydew', value: 'honeydew' },
  { text: 'Indian Fig', value: 'indian_fig' },
  { text: 'Jackfruit', value: 'jackfruit' },
  { text: 'Kiwi', value: 'kiwi' },
  { text: 'Lemon', value: 'lemon' },
  { text: 'Mango', value: 'mango' },
  { text: 'Nectarine', value: 'nectarine' },
  { text: '89 Watermelon', value: 'watermelon' },
  { text: 'Xigua', value: 'xigua' },
  { text: 'Yunnan Hackberry', value: 'yunnan_hackberry' },
  { text: '1 Zucchini', value: 'zucchini' },
  { text: 'Apricot', value: 'apricot' },
  { text: 'Blueberry', value: 'blueberry' },
  { text: 'Cantaloupe', value: 'cantaloupe' },
  { text: 'Dragonfruit', value: 'dragonfruit' },
  { text: 'Pineapple', value: 'pineapple' },
]);
</script>
```

## Grouped Items

You can group items by passing the `group-items-by` prop. The value of this prop can be either `default`,`A-Z` or `Z-A`. `default` will group the list by the individual item group.

<div class="spr-grid spr-gap-4">
  <div>
    <h5 class="spr-mb-2">Grouped by default</h5>
    <div 
      :class="[
        'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
        'spr-border spr-border-solid spr-border-color-weak'
      ]"
    >
      <spr-list v-model="singleSelectOutput.example3" :menu-list="groupedMenuList" group-items-by="default" />
    </div>
  </div>
  <div>
    <h5 class="spr-mb-2">Grouped by A-Z</h5>
    <div 
      :class="[
        'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
        'spr-border spr-border-solid spr-border-color-weak'
      ]"
    >
      <spr-list v-model="singleSelectOutput.example4" :menu-list="groupedMenuList" group-items-by="A-Z" />
    </div>
  </div>
  <div>
    <h5 class="spr-mb-2">Grouped by Z-A:</h5>
    <div 
      :class="[
        'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
        'spr-border spr-border-solid spr-border-color-weak'
      ]"
    >
      <spr-list v-model="singleSelectOutput.example5" :menu-list="groupedMenuList" group-items-by="Z-A" />
    </div>
  </div>
</div>

```vue
<template>
  <div class="spr-grid spr-gap-4">
    <div>
      <h5 class="spr-mb-2">Grouped by default</h5>
      <div
        :class="[
          'spr-max-h-[300px] spr-overflow-auto spr-rounded-md spr-p-2',
          'spr-border-color-weak spr-border spr-border-solid',
        ]"
      >
        <spr-list v-model="singleSelectOutput.example3" :menu-list="groupedMenuList" group-items-by="default" />
      </div>
    </div>
    <div>
      <h5 class="spr-mb-2">Grouped by A-Z</h5>
      <div
        :class="[
          'spr-max-h-[300px] spr-overflow-auto spr-rounded-md spr-p-2',
          'spr-border-color-weak spr-border spr-border-solid',
        ]"
      >
        <spr-list v-model="singleSelectOutput.example4" :menu-list="groupedMenuList" group-items-by="A-Z" />
      </div>
    </div>
    <div>
      <h5 class="spr-mb-2">Grouped by Z-A:</h5>
      <div
        :class="[
          'spr-max-h-[300px] spr-overflow-auto spr-rounded-md spr-p-2',
          'spr-border-color-weak spr-border spr-border-solid',
        ]"
      >
        <spr-list v-model="singleSelectOutput.example5" :menu-list="groupedMenuList" group-items-by="Z-A" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const groupedMenuList = ref([
  { text: 'Apple', value: 'apple', group: 'Fruits' },
  { text: 'Banana', value: 'banana', group: 'Fruits' },
  { text: 'Carrot', value: 'carrot', group: 'Vegetables' },
  { text: 'Date', value: 'date', group: 'Fruits' },
  { text: 'Eggplant', value: 'eggplant', group: 'Vegetables' },
  { text: 'Fig', value: 'fig', group: 'Fruits' },
  { text: 'Grape', value: 'grape', group: 'Fruits' },
  { text: 'Honeydew', value: 'honeydew', group: 'Fruits' },
  { text: 'Indian Fig', value: 'indian_fig', group: 'Fruits' },
  { text: 'Jackfruit', value: 'jackfruit', group: 'Fruits' },
  { text: 'Kale', value: 'kale', group: 'Vegetables' },
  { text: 'Lemon', value: 'lemon', group: 'Fruits' },
  { text: 'Mango', value: 'mango', group: 'Fruits' },
  { text: 'Nectarine', value: 'nectarine', group: 'Fruits' },
  { text: 'Okra', value: 'okra', group: 'Vegetables' },
  { text: 'Peach', value: 'peach', group: 'Fruits' },
  { text: 'Quince', value: 'quince', group: 'Fruits' },
  { text: 'Radish', value: 'radish', group: 'Vegetables' },
  { text: 'Spinach', value: 'spinach', group: 'Vegetables' },
  { text: 'Tomato', value: 'tomato', group: 'Vegetables' },
  { text: 'Ugli Fruit', value: 'ugli_fruit', group: 'Fruits' },
  { text: 'Watermelon', value: 'watermelon', group: 'Fruits' },
  { text: 'Xigua', value: 'xigua', group: 'Fruits' },
  { text: 'Yam', value: 'yam', group: 'Vegetables' },
  { text: 'Zucchini', value: 'zucchini', group: 'Vegetables' },
]);

const singleSelectOutput = ref({
  example3: [],
  example4: [],
  example5: [],
});
</script>
```

## Multi Select

You can enable multiple selection of items by passing the `multi-select` prop, which can be either `true` or `false`.

<div class="spr-grid spr-gap-4">
  <div 
    :class="[
      'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
      'spr-border spr-border-solid spr-border-color-weak'
    ]"
  >
    <spr-list v-model="singleSelectOutput.example6" :menu-list="menuList" multi-select />
  </div>

  <div 
    :class="[
      'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
      'spr-border spr-border-solid spr-border-color-weak'
    ]"
  >
    <spr-list v-model="singleSelectOutput.example7" :menu-list="menuList" group-items-by="A-Z" multi-select />
  </div>
</div>

```vue
<template>
  <div class="spr-grid spr-gap-4">
    <div
      :class="[
        'spr-max-h-[300px] spr-overflow-auto spr-rounded-md spr-p-2',
        'spr-border-color-weak spr-border spr-border-solid',
      ]"
    >
      <spr-list v-model="singleSelectOutput.example6" :menu-list="menuList" multi-select />
    </div>

    <div
      :class="[
        'spr-max-h-[300px] spr-overflow-auto spr-rounded-md spr-p-2',
        'spr-border-color-weak spr-border spr-border-solid',
      ]"
    >
      <spr-list v-model="singleSelectOutput.example7" :menu-list="menuList" group-items-by="A-Z" multi-select />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const singleSelectOutput = ref({
  example6: [],
  example7: [],
});

const menuList = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
  { text: 'Date', value: 'date' },
  { text: 'Elderberry', value: 'elderberry' },
  { text: 'Fig', value: 'fig' },
  { text: '5 Grape', value: 'grape' },
  { text: 'Honeydew', value: 'honeydew' },
  { text: 'Indian Fig', value: 'indian_fig' },
  { text: 'Jackfruit', value: 'jackfruit' },
  { text: 'Kiwi', value: 'kiwi' },
  { text: 'Lemon', value: 'lemon' },
  { text: 'Mango', value: 'mango' },
  { text: 'Nectarine', value: 'nectarine' },
  { text: '89 Watermelon', value: 'watermelon' },
  { text: 'Xigua', value: 'xigua' },
  { text: 'Yunnan Hackberry', value: 'yunnan_hackberry' },
  { text: '1 Zucchini', value: 'zucchini' },
  { text: 'Apricot', value: 'apricot' },
  { text: 'Blueberry', value: 'blueberry' },
  { text: 'Cantaloupe', value: 'cantaloupe' },
  { text: 'Dragonfruit', value: 'dragonfruit' },
  { text: 'Pineapple', value: 'pineapple' },
]);
</script>
```

## Get Selected Item

You can retrieve the data of the selected item using the `@update:model-value` emit.

<div class="spr-grid spr-gap-4">
  <div 
    :class="[
      'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
      'spr-border spr-border-solid spr-border-color-weak'
    ]"
  >
    <spr-list v-model="singleSelectOutput.example8" :menu-list="menuList" @update:model-value="handleSingleSelect" />
  </div>
  <div class="spr-my-3 spr-p-4 spr-bg-blue-100">
    <h5>Output:</h5>
    <span>{{ singleSelectText }}</span>
  </div>

  <div 
    :class="[
      'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
      'spr-border spr-border-solid spr-border-color-weak'
    ]"
  >
    <spr-list v-model="singleSelectOutput.example9" :menu-list="menuList" group-items-by="A-Z" multi-select @update:model-value="handleMultiSelect" />
  </div>
  <div class="spr-my-3 spr-p-4 spr-bg-blue-100">
    <h5>Output:</h5>
    <span>{{ multipleSelectText }}</span>
  </div>
</div>

```vue
<template>
  <div class="spr-grid spr-gap-4">
    <div
      :class="[
        'spr-max-h-[300px] spr-overflow-auto spr-rounded-md spr-p-2',
        'spr-border-color-weak spr-border spr-border-solid',
      ]"
    >
      <spr-list v-model="singleSelectOutput.example8" :menu-list="menuList" @update:model-value="handleSingleSelect" />
    </div>
    <div class="spr-my-3 spr-bg-blue-100 spr-p-4">
      <h5>Output:</h5>
      <span>{{ singleSelectText }}</span>
    </div>

    <div
      :class="[
        'spr-max-h-[300px] spr-overflow-auto spr-rounded-md spr-p-2',
        'spr-border-color-weak spr-border spr-border-solid',
      ]"
    >
      <spr-list
        v-model="singleSelectOutput.example9"
        :menu-list="menuList"
        group-items-by="A-Z"
        multi-select
        @update:model-value="handleMultiSelect"
      />
    </div>
    <div class="spr-my-3 spr-bg-blue-100 spr-p-4">
      <h5>Output:</h5>
      <span>{{ multipleSelectText }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const menuList = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
  { text: 'Date', value: 'date' },
  { text: 'Elderberry', value: 'elderberry' },
  { text: 'Fig', value: 'fig' },
  { text: '5 Grape', value: 'grape' },
  { text: 'Honeydew', value: 'honeydew' },
  { text: 'Indian Fig', value: 'indian_fig' },
  { text: 'Jackfruit', value: 'jackfruit' },
  { text: 'Kiwi', value: 'kiwi' },
  { text: 'Lemon', value: 'lemon' },
  { text: 'Mango', value: 'mango' },
  { text: 'Nectarine', value: 'nectarine' },
  { text: '89 Watermelon', value: 'watermelon' },
  { text: 'Xigua', value: 'xigua' },
  { text: 'Yunnan Hackberry', value: 'yunnan_hackberry' },
  { text: '1 Zucchini', value: 'zucchini' },
  { text: 'Apricot', value: 'apricot' },
  { text: 'Blueberry', value: 'blueberry' },
  { text: 'Cantaloupe', value: 'cantaloupe' },
  { text: 'Dragonfruit', value: 'dragonfruit' },
  { text: 'Pineapple', value: 'pineapple' },
]);

const singleSelectOutput = ref({
  example8: [],
  example9: [],
});

const singleSelectText = ref('No selected item');
const handleSingleSelect = (data) => {
  singleSelectText.value = data[0].text;
};

const multipleSelectText = ref('No selected items');
const handleMultiSelect = (data) => {
  multipleSelectText.value = data.map((item) => item.text).join(', ');
};
</script>
```

## List with Subtext

You can add subtext to the list items by including the `subtext` property in the object from the `menu-list` array.

<div class="spr-grid spr-gap-4">
  <div 
    :class="[
      'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
      'spr-border spr-border-solid spr-border-color-weak'
    ]"
  >
    <spr-list v-model="singleSelectOutput.example10" :menu-list="mockDropdownData" />
  </div>
</div>

```vue
<template>
  <div class="spr-grid spr-gap-4">
    <div
      :class="[
        'spr-max-h-[300px] spr-overflow-auto spr-rounded-md spr-p-2',
        'spr-border-color-weak spr-border spr-border-solid',
      ]"
    >
      <spr-list v-model="singleSelectOutput" :menu-list="mockDropdownData" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const singleSelectOutput = ref([]);
const mockDropdownData = [
  {
    text: 'Lion',
    value: 'lion',
    subtext: 'King of the jungle',
  },
  {
    text: 'Elephant',
    value: 'elephant',
    subtext: 'Largest land animal',
  },
  {
    text: 'Giraffe',
    value: 'giraffe',
    subtext: 'Tallest living terrestrial animal',
  },
  {
    text: 'Zebra',
    value: 'zebra',
    subtext: 'Known for distinctive black and white stripes',
  },
];
</script>
```

## Ladderized List

Ladderized list is a variation of the list component that allows you to display items in a hierarchical structure. You can pass the `sublevel` property in the object from the `menu-list` array to create a ladderized list.

<div class="spr-grid spr-gap-4">
  <div class="spr-rounded-md spr-max-h-[300px] spr-border spr-border-solid spr-border-color-weak spr-overflow-hidden">
    <spr-ladderized-list v-model="singleSelectOutput.example11" :menu-list="mockDropdownData" />
  </div>
</div>

```vue
<template>
  <div class="spr-grid spr-gap-4">
    <div class="spr-border-color-weak spr-max-h-[300px] spr-overflow-hidden spr-rounded-md spr-border spr-border-solid">
      <spr-ladderized-list v-model="singleSelectOutput" :menu-list="mockDropdownData" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const singleSelectOutput = ref([]);
const mockDropdownData = [
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
          {
            text: 'Cub 1',
            value: 'cub1',
          },
          {
            text: 'Cub 2',
            value: 'cub2',
          },
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
];
</script>
```

## No Check

<div 
  :class="[
    'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
    'spr-border spr-border-solid spr-border-color-weak'
  ]"
>
  <spr-list v-model="singleSelectOutput.example1" :menu-list="menuList" noCheck/>
</div>
<div class="spr-my-3 spr-p-4 spr-bg-blue-100">
  <h5>Output:</h5>
  <span>{{ singleSelectOutput.example1 }}</span>
</div>

```vue
<template>
  <div
    :class="[
      'spr-max-h-[300px] spr-overflow-auto spr-rounded-md spr-p-2',
      'spr-border-color-weak spr-border spr-border-solid',
    ]"
  >
    <spr-list v-model="singleSelectOutput" :menu-list="menuList" noCheck />
  </div>
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
      <td>modelValue</td>
      <td>Two-way binding for the selected items. Contains the complete item objects of all selected items, not just their values. Used with v-model for reactivity.</td>
      <td>MenuListType[]</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>menuList</td>
      <td>The list of items to display in the component. Each item should contain at minimum <code>text</code> and <code>value</code> properties, with optional properties like <code>subtext</code>, <code>group</code>, <code>icon</code>, etc.</td>
      <td>MenuListType[]</td>
      <td>[] (required)</td>
    </tr>
    <tr>
      <td>groupItemsBy</td>
      <td>Controls how items are grouped in the list:
        <ul>
          <li><code>default</code>: Groups items by their <code>group</code> property</li>
          <li><code>A-Z</code>: Sorts items alphabetically by <code>text</code> in ascending order</li>
          <li><code>Z-A</code>: Sorts items alphabetically by <code>text</code> in descending order</li>
        </ul>
      </td>
      <td>'default' | 'A-Z' | 'Z-A'</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>multiSelect</td>
      <td>Enables multi-selection mode, allowing users to select multiple items simultaneously. When enabled, checkboxes appear next to each item.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>preSelectedItems</td>
      <td>Pre-selects items in the list based on their values. Pass an array of strings or numbers that correspond to the <code>value</code> properties of items to be pre-selected.</td>
      <td>(string | number | Record&lt;string, unknown&gt;)[]</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>searchableMenu</td>
      <td>Enables a search input field at the top of the list for filtering items. When enabled, users can type to filter the list items by their text values.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>searchableMenuPlaceholder</td>
      <td>Placeholder text for the search input field when <code>searchableMenu</code> is enabled.</td>
      <td>string</td>
      <td>'Search...'</td>
    </tr>
    <tr>
      <td>searchValue</td>
      <td>External search value to filter the list. Can be used to control the search from outside the component.</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>menuLevel</td>
      <td>Indicates the nesting level of the list. Used internally for ladderized lists to track hierarchy.</td>
      <td>number</td>
      <td>0</td>
    </tr>
    <tr>
      <td>ladderized</td>
      <td>Enables ladderized (hierarchical) list mode. When enabled, items with <code>sublevel</code> properties will display nested lists.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>disabledLocalSearch</td>
      <td>Disables the local search/filtering functionality even when <code>searchableMenu</code> is true. Useful when implementing custom search logic externally.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>loading</td>
      <td>Displays a loading indicator instead of list items. Use this when fetching data asynchronously.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>noCheck</td>
      <td>Hides the checkmark icon that appears next to selected items in single-select mode. Has no effect in multi-select mode.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>dropdown</td>
      <td>Internal prop used to indicate the list is being used within a dropdown component. Affects certain visual behaviors.</td>
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
      <td>Emitted when the selection changes. Provides the complete selected items with all their properties, not just values. Used for v-model binding.</td>
      <td>(value: MenuListType[]): Array of the complete selected item objects</td>
    </tr>
    <tr>
      <td>update:searchValue</td>
      <td>Emitted when the search input value changes. Used for controlling the search externally.</td>
      <td>(value: string): The new search text value</td>
    </tr>
  </tbody>
</table>


### MenuListType Interface

The List component accepts items conforming to the `MenuListType` interface:

```typescript
type MenuListType = {
  text: string;                                    // Display text for the item (required)
  value: string | number;                          // Unique identifier for the item (required)
  subtext?: string;                                // Optional secondary text displayed below main text
  group?: string;                                  // Optional group identifier for grouping items
  sublevel?: MenuListType[];                       // Optional nested items for ladderized lists
  disabled?: boolean;                              // Optional flag to disable the item
  _originalObject?: Record<string, unknown>;       // Optional reference to original object
  icon?: string;                                   // Optional Iconify icon name
  iconColor?: string;                              // Optional CSS class for icon color
  textColor?: string;                              // Optional CSS class for text color
  onClickFn?: () => void;                          // Optional click handler function
};
```

## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark"  width="50px" />
  <spr-logo name="payroll" theme="dark"  width="50px" />
</div>

<script lang="ts" setup> 
import { ref } from 'vue';

import SprList from "@/components/list/list.vue"
import SprLadderizedList from "@/components/list/ladderized-list/ladderized-list.vue"
import SprLogo from "@/components/logo/logo.vue";

const preselectedItem = ref(['apple']);

const menuList = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
  { text: 'Date', value: 'date' },
  { text: 'Elderberry', value: 'elderberry' },
  { text: 'Fig', value: 'fig' },
  { text: '5 Grape', value: 'grape' },
  { text: 'Honeydew', value: 'honeydew' },
  { text: 'Indian Fig', value: 'indian_fig' },
  { text: 'Jackfruit', value: 'jackfruit' },
  { text: 'Kiwi', value: 'kiwi' },
  { text: 'Lemon', value: 'lemon' },
  { text: 'Mango', value: 'mango' },
  { text: 'Nectarine', value: 'nectarine' },
  { text: '89 Watermelon', value: 'watermelon' },
  { text: 'Xigua', value: 'xigua' },
  { text: 'Yunnan Hackberry', value: 'yunnan_hackberry' },
  { text: '1 Zucchini', value: 'zucchini' },
  { text: 'Apricot', value: 'apricot' },
  { text: 'Blueberry', value: 'blueberry' },
  { text: 'Cantaloupe', value: 'cantaloupe' },
  { text: 'Dragonfruit', value: 'dragonfruit' },
  { text: 'Pineapple', value: 'pineapple' },
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
  { text: 'Indian Fig', value: 'indian_fig', group: 'Fruits' },
  { text: 'Jackfruit', value: 'jackfruit', group: 'Fruits' },
  { text: 'Kale', value: 'kale', group: 'Vegetables' },
  { text: 'Lemon', value: 'lemon', group: 'Fruits' },
  { text: 'Mango', value: 'mango', group: 'Fruits' },
  { text: 'Nectarine', value: 'nectarine', group: 'Fruits' },
  { text: 'Okra', value: 'okra', group: 'Vegetables' },
  { text: 'Peach', value: 'peach', group: 'Fruits' },
  { text: 'Quince', value: 'quince', group: 'Fruits' },
  { text: 'Radish', value: 'radish', group: 'Vegetables' },
  { text: 'Spinach', value: 'spinach', group: 'Vegetables' },
  { text: 'Tomato', value: 'tomato', group: 'Vegetables' },
  { text: 'Ugli Fruit', value: 'ugli_fruit', group: 'Fruits' },
  { text: 'Watermelon', value: 'watermelon', group: 'Fruits' },
  { text: 'Xigua', value: 'xigua', group: 'Fruits' },
  { text: 'Yam', value: 'yam', group: 'Vegetables' },
  { text: 'Zucchini', value: 'zucchini', group: 'Vegetables' },
]);

const mockDropdownData = [
  {
    text: "Lion",
    value: "lion",
    subtext: "King of the jungle",
    sublevel: [
      {
        text: "Cub",
        value: "cub",
        subtext: "Young lion",
        sublevel: [
          {
            text: "Cub 1",
            value: "cub1",
            
          },
          {
            text: "Cub 2",
            value: "cub2",
          },
        ],
      },
      {
        text: "Pride Member",
        value: "pride-member",
        subtext: "Member of a lion pride",
      },
    ],
  },
  {
    text: "Elephant",
    value: "elephant",
    subtext: "Largest land animal",
    sublevel: [
      {
        text: "Calf",
        value: "calf",
        subtext: "Young elephant",
      },
    ],
  },
  {
    text: "Giraffe",
    value: "giraffe",
    subtext: "Tallest living terrestrial animal",
    sublevel: [
      {
        text: "Calf",
        value: "giraffe-calf",
        subtext: "Young giraffe",
      },
      {
        text: "Adult",
        value: "giraffe-adult",
        subtext: "Mature giraffe",
      },
    ],
  },
  {
    text: "Zebra",
    value: "zebra",
    subtext: "Known for distinctive black and white stripes",
    sublevel: [
      {
        text: "Foal",
        value: "zebra-foal",
        subtext: "Young zebra",
      },
      {
        text: "Mare",
        value: "zebra-mare",
        subtext: "Adult female zebra",
      },
    ],
  },
];

const preselectedItems = ref(['apple']);
const singleSelectOutput = ref({
  example1: [],
  example2: [],
  example3: [],
  example4: [],
  example5: [],
  example6: [],
  example7: [],
  example8: [],
  example9: [],
  example10: [],
  example11: [],
});

const singleSelectText = ref("No selected item")
const handleSingleSelect = (data) => {
  singleSelectText.value = data[0].text;
}

const multipleSelectText = ref("No selected items");
const handleMultiSelect = (data) => {
  multipleSelectText.value = data.map((item) => item.text).join(", ");
}
</script>
