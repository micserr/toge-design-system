# List

The List component allows users to select one or more items from a list, offering both single and multiple selection options for improved flexibility and user interaction.

## Basic Usage

<div 
  :class="[
    'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
    'spr-border spr-border-solid spr-border-color-weak'
  ]"
>
  <spr-list :menu-list="menuList" />
</div>

```vue
<template>
  <div
    :class="[
      'spr-max-h-[300px] spr-overflow-auto spr-rounded-md spr-p-2',
      'spr-border-color-weak spr-border spr-border-solid',
    ]"
  >
    <spr-list :menu-list="menuList" />
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
</script>
```

## Pre-Selected Items

You can pre-select items by using `v-model` in the component and passing an array of strings that correspond to either the `text` or `value` of the item.

<div 
  :class="[
    'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
    'spr-border spr-border-solid spr-border-color-weak'
  ]"
>
  <spr-list v-model="preselectedItem" :menu-list="menuListWithNumber" />
</div>

```vue
<template>
  <div
    :class="[
      'spr-max-h-[300px] spr-overflow-auto spr-rounded-md spr-p-2',
      'spr-border-color-weak spr-border spr-border-solid',
    ]"
  >
    <spr-list v-model="preselectedItem" :menu-list="menuListWithNumber" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const preselectedItem = ref(['apple', 'Banana', 89]);

const menuListWithNumber = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Kiwi', value: 'kiwi' },
  { text: 'Lemon', value: 'lemon' },
  { text: 'Banana', value: 'banana' },
  { text: 'Jackfruit', value: 'jackfruit' },
  { text: 'Cherry', value: 89 },
  { text: 'Mango', value: 'mango' },
]);
</script>
```

## Grouped Items

You can group items by passing the `group-items-by` prop. The value of this prop can be either `A-Z` or `Z-A` to determine the grouping order.

<div class="spr-grid spr-gap-4">
  <div>
    <h5 class="spr-mb-2">Grouped by A-Z</h5>
    <div 
      :class="[
        'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
        'spr-border spr-border-solid spr-border-color-weak'
      ]"
    >
      <spr-list :menu-list="menuList" group-items-by="A-Z" />
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
      <spr-list :menu-list="menuList" group-items-by="Z-A" />
    </div>
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
      <spr-list :menu-list="menuList" group-items-by="A-Z" />
    </div>

    <div
      :class="[
        'spr-max-h-[300px] spr-overflow-auto spr-rounded-md spr-p-2',
        'spr-border-color-weak spr-border spr-border-solid',
      ]"
    >
      <spr-list :menu-list="menuList" group-items-by="Z-A" />
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
</script>
```

## Multi Select

You can enable multi-selection of an item by passing the `multi-select` prop, which can be either `true` or `false`.

<div class="spr-grid spr-gap-4">
  <div 
    :class="[
      'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
      'spr-border spr-border-solid spr-border-color-weak'
    ]"
  >
    <spr-list :menu-list="menuList" multi-select />
  </div>

  <div 
    :class="[
      'spr-p-2 spr-rounded-md spr-max-h-[300px] spr-overflow-auto',
      'spr-border spr-border-solid spr-border-color-weak'
    ]"
  >
    <spr-list :menu-list="menuList" group-items-by="A-Z" multi-select />
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
      <spr-list :menu-list="menuList" multi-select />
    </div>

    <div
      :class="[
        'spr-max-h-[300px] spr-overflow-auto spr-rounded-md spr-p-2',
        'spr-border-color-weak spr-border spr-border-solid',
      ]"
    >
      <spr-list :menu-list="menuList" group-items-by="A-Z" multi-select />
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
</script>
```

## Get Selected Item

You can retrieve the data of the selected item using the `@get-selected-item` emit. If the component is set to single select, it will pass an object containing the `text` and `value` properties. If the component is set to `multi-select`, it will pass an array of objects, each containing `text` and `value` properties.

<div class="spr-grid spr-gap-4">
  <div>
    <h5 class="spr-mb-2">Single Select</h5>
    <div
      :class="[
        'spr-max-h-[300px] spr-overflow-auto spr-rounded-md spr-p-2',
        'spr-border-color-weak spr-border spr-border-solid',
      ]"
    >
      <spr-list :menu-list="menuList" @get-selected-item="handleSingleSelect" />
    </div>
    <div class="spr-mt-3 spr-p-4 spr-bg-blue-100">
      <h5>Output:</h5>
      <pre>{{ JSON.stringify(singleSelectOutput) }}</pre>
    </div>
  </div>
  <div>
    <h5 class="spr-mb-2">Multi Select</h5>
    <div
      :class="[
        'spr-max-h-[300px] spr-overflow-auto spr-rounded-md spr-p-2',
        'spr-border-color-weak spr-border spr-border-solid',
      ]"
    >
      <spr-list :menu-list="menuList" @get-selected-item="handleMultiSelect" multi-select />
    </div>
    <div class="spr-mt-3 spr-p-4 spr-bg-blue-100">
      <h5>Output:</h5>
      <pre>{{ JSON.stringify(multiSelectOutput, null, 2) }}</pre>
    </div>
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
      <spr-list :menu-list="menuList" @get-selected-item="handleSingleSelect" />
    </div>

    <div
      :class="[
        'spr-max-h-[300px] spr-overflow-auto spr-rounded-md spr-p-2',
        'spr-border-color-weak spr-border spr-border-solid',
      ]"
    >
      <spr-list :menu-list="menuList" @get-selected-item="handleMultiSelect" multi-select />
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

const handleSingleSelect = (data) => {
  console.log(data);
};

const handleMultiSelect = (data) => {
  console.log(data);
};
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
      <td>array</td>
      <td>-</td>
    </tr>
    <tr>
      <td>menu-list</td>
      <td>The list of items to display in the menu. Each item should contain `text` and `value` properties.</td>
      <td>array</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>group-items-by</td>
      <td>Groups the items in the list by their `text` or `value`. Can be set to `A-Z` or `Z-A` to define grouping order.</td>
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
      <td>@get-selected-item</td>
      <td>
        Event emitted when an item is selected. It passes either a single object 
        (for single selection) or an array of objects (for multi-selection), 
        each containing `text` and `value` properties.
      </td>
      <td>event</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

<script lang="ts" setup> 
import { ref } from 'vue';

import SprList from "@/components/list/list.vue"

const preselectedItem = ref(['apple', 'Banana', 89]);

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

const menuListWithNumber = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Kiwi', value: 'kiwi' },
  { text: 'Lemon', value: 'lemon' },
  { text: 'Banana', value: 'banana' },
  { text: 'Jackfruit', value: 'jackfruit' },
  { text: 'Cherry', value: 89 },
  { text: 'Mango', value: 'mango' },
]);

const singleSelectOutput = ref({});
const multiSelectOutput = ref([]);

const handleSingleSelect = (data) => {
  singleSelectOutput.value = data;
}

const handleMultiSelect = (data) => {
  multiSelectOutput.value = data;
}
</script>
