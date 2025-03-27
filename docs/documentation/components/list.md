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
      'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
      'spr-border spr-border-solid spr-border-color-weak'
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

const singleSelectText = ref("No selected item")
const handleSingleSelect = (data) => {
  singleSelectText.value = data[0].text;
}

const multipleSelectText = ref("No selected items");
const handleMultiSelect = (data) => {
  multipleSelectText.value = data.map((item) => item.text).join(", ");
}
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
        'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
        'spr-border spr-border-solid spr-border-color-weak'
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
    text: "Lion",
    value: "lion",
    subtext: "King of the jungle",
  },
  {
    text: "Elephant",
    value: "elephant",
    subtext: "Largest land animal",
  },
  {
    text: "Giraffe",
    value: "giraffe",
    subtext: "Tallest living terrestrial animal",
  },
  {
    text: "Zebra",
    value: "zebra",
    subtext: "Known for distinctive black and white stripes",
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
    <div class="spr-rounded-md spr-max-h-[300px] spr-border spr-border-solid spr-border-color-weak spr-overflow-hidden">
      <spr-ladderized-list v-model="singleSelectOutput" :menu-list="mockDropdownData" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const singleSelectOutput = ref([]);
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
</script>
```


## List API

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
      <td>v-model</td>
      <td>Two-way binding for the selected items. It automatically updates the selected items in the component as an array.</td>
      <td>MenuListType[]</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>menu-list</td>
      <td>The list of items to display in the menu. Each item should contain `text` and `value` properties.</td>
      <td>MenuListType[]</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>group-items-by</td>
      <td>Groups the items in the list by their `text`. Can be set to `default`, `A-Z` or `Z-A` to define grouping order.</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td>multi-select</td>
      <td>Enables multi-selection of items. If set to `true`, multiple items can be selected at once.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>pre-selected-items</td>
      <td>Pre-selects items in the list. Pass an array of strings that correspond to the `value` of the item.</td>
      <td>string[]</td>
      <td>[]</td>
    </tr>
  </tbody>
</table>

<script lang="ts" setup> 
import { ref } from 'vue';

import SprList from "@/components/list/list.vue"
import SprLadderizedList from "@/components/list/ladderized-list/ladderized-list.vue"

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
