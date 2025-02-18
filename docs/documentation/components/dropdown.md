# Dropdown

Dropdowns are toggleable, contextual overlays for displaying lists of items and more.

## Basic Usage

Here is a basic example of a dropdown. Since the dropdown is a wrapper component, you can put any component inside the dropdown. Then by handling the selected item, you can use the emit function `@get-selected-item`.

<p class="flex gap-1 items-center"> 
  <span>Selected Item:</span>
  <code>{{ inputTextModels.inputText1 ? inputTextModels.inputText1 : 'Not Selected Yet' }}</code>
</p>

<div>
  <spr-dropdown 
    :menu="menu" 
    dropdown-type="single-select" 
    placement="bottom" 
    @get-selected-item="item => handleSingleSelectedItem('inputText1', item)"
  >
    <spr-input v-model="inputTextModels.inputText1" label="Dropdown Label" placeholder="Select item..."  :readonly="true" />
  </spr-dropdown>
</div>

```vue
<template>
  <spr-dropdown
    :menu="menu"
    dropdown-type="single-select"
    placement="bottom"
    @get-selected-item="handleSingleSelectedItem"
  >
    <spr-input v-model="inputText" label="Dropdown Label" placeholder="Select item..." :readonly="true" />
  </spr-dropdown>
</template>

<script setup>
import { ref } from 'vue';

const inputText = ref('');

const menu = ref([
  { text: 'sample 1', value: 'sample1' },
  { text: 'sample 2', value: 'sample2' },
  { text: 'sample 3', value: 'sample3' },
  { text: 'sample 4', value: 'sample4' },
  { text: 'sample 5', value: 'sample5' },
  { text: 'sample 6', value: 'sample6' },
  { text: 'sample 7', value: 'sample7' },
  { text: 'sample 8', value: 'sample8' },
  { text: 'sample 9', value: 'sample9' },
  { text: 'sample 10', value: 'sample10' },
]);

const handleSingleSelectedItem = (item) => {
  console.log('Item:', item);

  inputText.value = item.text;
};
</script>
```

## Pre-selected Items

You can pre-select items by passing the `pre-selected-items` prop. This prop should be an array of strings that should compose the text of the menu item.

::: info Important to note:
Every time you pass the pre-selected-items prop, the `@get-selected-item` emit function is triggered, allowing you to populate the active item in the main element.
:::

<div>
  <spr-dropdown 
    :menu="menu" 
    :pre-selected-items="preSelectedItems" 
    dropdown-type="single-select" 
    placement="bottom" 
    @get-selected-item="item => handleSingleSelectedItem('inputText2', item)"
  >
    <spr-input v-model="inputTextModels.inputText2" label="Dropdown Label" placeholder="Select item..."  :readonly="true" />
  </spr-dropdown>
</div>

```vue
<template>
  <spr-dropdown
    :menu="menu"
    :pre-selected-items="preSelectedItems"
    dropdown-type="single-select"
    placement="bottom"
    @get-selected-item="handleSingleSelectedItem"
  >
    <spr-input v-model="inputText" label="Dropdown Label" placeholder="Select item..." :readonly="true" />
  </spr-dropdown>
</template>

<script setup>
import { ref } from 'vue';

const inputText = ref('');

const menu = ref([
  { text: 'sample 1', value: 'sample1' },
  { text: 'sample 2', value: 'sample2' },
  { text: 'sample 3', value: 'sample3' },
  { text: 'sample 4', value: 'sample4' },
  { text: 'sample 5', value: 'sample5' },
  { text: 'sample 6', value: 'sample6' },
  { text: 'sample 7', value: 'sample7' },
  { text: 'sample 8', value: 'sample8' },
  { text: 'sample 9', value: 'sample9' },
  { text: 'sample 10', value: 'sample10' },
]);

const preSelectedItems = ref(['sample 2']);

const handleSingleSelectedItem = (item) => {
  console.log('Item:', item);

  inputText.value = item.text;
};
</script>
```

## Placements

You can change the placement of the dropdown by passing the `placement` prop. The default value is `bottom`.

Here are the available placements:

<div class="flex gap-20 mb-10">
  <div>
    <ul class="!m-0">
      <li>auto</li>
      <li>auto-start</li>
      <li>auto-end</li>
      <li>top</li>
      <li>top-start</li>
      <li>top-end</li>
      <li>right</li>
      <li>right-start</li>
      <li>right-end</li>
    </ul>
  </div>
  <div>
    <ul class="!m-0">
      <li>bottom</li>
      <li>bottom-start</li>
      <li>bottom-end</li>
      <li>left</li>
      <li>left-start</li>
      <li>left-end</li>
    </ul>
  </div>
</div>

<div class="grid gap-6">
  <div class="flex gap-4 justify-between">
    <spr-dropdown 
      :menu="menu" 
      dropdown-type="single-select" 
      placement="auto" 
      @get-selected-item="item => handleSingleSelectedItem('inputText3', item)"
    >
      <spr-input v-model="inputTextModels.inputText3" label="Auto" placeholder="Select item..."  :readonly="true" />
    </spr-dropdown>
    <spr-dropdown 
      :menu="menu" 
      dropdown-type="single-select" 
      placement="auto-start" 
      @get-selected-item="item => handleSingleSelectedItem('inputText3', item)"
    >
      <spr-input v-model="inputTextModels.inputText3" label="Auto Start" placeholder="Select item..."  :readonly="true" />
    </spr-dropdown>
    <spr-dropdown 
      :menu="menu" 
      dropdown-type="single-select" 
      placement="auto-end" 
      @get-selected-item="item => handleSingleSelectedItem('inputText3', item)"
    >
      <spr-input v-model="inputTextModels.inputText3" label="Auto End" placeholder="Select item..."  :readonly="true" />
    </spr-dropdown>
  </div>
  <div class="flex gap-4 justify-between">
    <spr-dropdown 
      :menu="menu" 
      dropdown-type="single-select" 
      placement="top" 
      @get-selected-item="item => handleSingleSelectedItem('inputText3', item)"
    >
      <spr-input v-model="inputTextModels.inputText3" label="Top" placeholder="Select item..."  :readonly="true" />
    </spr-dropdown>
    <spr-dropdown 
      :menu="menu" 
      dropdown-type="single-select" 
      placement="top-start" 
      @get-selected-item="item => handleSingleSelectedItem('inputText3', item)"
    >
      <spr-input v-model="inputTextModels.inputText3" label="Top Start" placeholder="Select item..."  :readonly="true" />
    </spr-dropdown>
    <spr-dropdown 
      :menu="menu" 
      dropdown-type="single-select" 
      placement="top-end" 
      @get-selected-item="item => handleSingleSelectedItem('inputText3', item)"
    >
      <spr-input v-model="inputTextModels.inputText3" label="Top End" placeholder="Select item..."  :readonly="true" />
    </spr-dropdown>
  </div>
  <div class="flex gap-4 justify-between">
    <spr-dropdown 
      :menu="menu" 
      dropdown-type="single-select" 
      placement="right" 
      @get-selected-item="item => handleSingleSelectedItem('inputText3', item)"
    >
      <spr-input v-model="inputTextModels.inputText3" label="Right" placeholder="Select item..."  :readonly="true" />
    </spr-dropdown>
    <spr-dropdown 
      :menu="menu" 
      dropdown-type="single-select" 
      placement="right-start" 
      @get-selected-item="item => handleSingleSelectedItem('inputText3', item)"
    >
      <spr-input v-model="inputTextModels.inputText3" label="Right Start" placeholder="Select item..."  :readonly="true" />
    </spr-dropdown>
    <spr-dropdown 
      :menu="menu" 
      dropdown-type="single-select" 
      placement="right-end" 
      @get-selected-item="item => handleSingleSelectedItem('inputText3', item)"
    >
      <spr-input v-model="inputTextModels.inputText3" label="Right End" placeholder="Select item..."  :readonly="true" />
    </spr-dropdown>
  </div>
  <div class="flex gap-4 justify-between">
    <spr-dropdown 
      :menu="menu" 
      dropdown-type="single-select" 
      placement="bottom" 
      @get-selected-item="item => handleSingleSelectedItem('inputText3', item)"
    >
      <spr-input v-model="inputTextModels.inputText3" label="Bottom" placeholder="Select item..."  :readonly="true" />
    </spr-dropdown>
    <spr-dropdown 
      :menu="menu" 
      dropdown-type="single-select" 
      placement="bottom-start" 
      @get-selected-item="item => handleSingleSelectedItem('inputText3', item)"
    >
      <spr-input v-model="inputTextModels.inputText3" label="Bottom Start" placeholder="Select item..."  :readonly="true" />
    </spr-dropdown>
    <spr-dropdown 
      :menu="menu" 
      dropdown-type="single-select" 
      placement="bottom-end" 
      @get-selected-item="item => handleSingleSelectedItem('inputText3', item)"
    >
      <spr-input v-model="inputTextModels.inputText3" label="Bottom End" placeholder="Select item..."  :readonly="true" />
    </spr-dropdown>
  </div>
  <div class="flex gap-4 justify-between">
    <spr-dropdown 
      :menu="menu" 
      dropdown-type="single-select" 
      placement="left" 
      @get-selected-item="item => handleSingleSelectedItem('inputText3', item)"
    >
      <spr-input v-model="inputTextModels.inputText3" label="Left" placeholder="Select item..."  :readonly="true" />
    </spr-dropdown>
    <spr-dropdown 
      :menu="menu" 
      dropdown-type="single-select" 
      placement="left-start" 
      @get-selected-item="item => handleSingleSelectedItem('inputText3', item)"
    >
      <spr-input v-model="inputTextModels.inputText3" label="Left Start" placeholder="Select item..."  :readonly="true" />
    </spr-dropdown>
    <spr-dropdown 
      :menu="menu" 
      dropdown-type="single-select" 
      placement="left-end" 
      @get-selected-item="item => handleSingleSelectedItem('inputText3', item)"
    >
      <spr-input v-model="inputTextModels.inputText3" label="Left End" placeholder="Select item..."  :readonly="true" />
    </spr-dropdown>
  </div>
</div>

## Open Menu Manually

You can also manually open the menu by passing the `menu-opened` prop. This prop should be a boolean value.

```vue
<template>
  <spr-dropdown
    :menu="menu"
    dropdown-type="single-select"
    placement="bottom"
    menu-opened
    @get-selected-item="handleSingleSelectedItem"
  >
    <spr-input v-model="inputText" label="Dropdown Label" placeholder="Select item..." :readonly="true" />
  </spr-dropdown>
</template>
```

## Multi Select

Dropdowns also support multi-select. You can enable this feature by passing the `dropdown-type` prop with the value `multi-select`.

<p class="flex gap-1 items-center"> 
  <span class="w-[110px] min-w-[110px]">Selected Item:</span>
  <code>{{ inputTextModels.inputText4 ? inputTextModels.inputText4 : 'Not Selected Yet' }}</code>
</p>

<div>
  <spr-dropdown 
    :menu="menu" 
    dropdown-type="multi-select" 
    placement="bottom" 
    @get-selected-item="item => handleMultiSelectedItem('inputText4', item)"
  >
    <spr-input v-model="inputTextModels.inputText4" label="Dropdown Label" placeholder="Select item..."  :readonly="true" />
  </spr-dropdown>
</div>

```vue
<template>
  <spr-dropdown
    :menu="menu"
    dropdown-type="multi-select"
    placement="bottom"
    @get-selected-item="handleMultiSelectedItem"
  >
    <spr-input v-model="inputText" label="Dropdown Label" placeholder="Select item..." :readonly="true" />
  </spr-dropdown>
</template>

<script setup>
import { ref } from 'vue';

const inputText = ref('');

const menu = ref([
  { text: 'sample 1', value: 'sample1' },
  { text: 'sample 2', value: 'sample2' },
  { text: 'sample 3', value: 'sample3' },
  { text: 'sample 4', value: 'sample4' },
  { text: 'sample 5', value: 'sample5' },
  { text: 'sample 6', value: 'sample6' },
  { text: 'sample 7', value: 'sample7' },
  { text: 'sample 8', value: 'sample8' },
  { text: 'sample 9', value: 'sample9' },
  { text: 'sample 10', value: 'sample10' },
]);

const handleMultiSelectedItem = (item) => {
  console.log('Item:', item);

  if (Array.isArray(item)) {
    inputText.value = item.map((i) => i.text).join(', ');
  }
};
</script>
```

## Get Popper Sate

<p class="flex gap-1 items-center"> 
  <span>Popper State:</span>
  <code>{{ popperState }}</code>
</p>

<div>
  <spr-dropdown 
    :menu="menu" 
    dropdown-type="single-select" 
    placement="bottom" 
    @get-selected-item="item => handleSingleSelectedItem('inputText5', item)"
    @get-popper-state="handlePopperState"
  >
    <spr-input v-model="inputTextModels.inputText5" label="Dropdown Label" placeholder="Select item..."  :readonly="true" />
  </spr-dropdown>
</div>

```vue
<template>
  <spr-dropdown
    :menu="menu"
    dropdown-type="single-select"
    placement="bottom"
    @get-selected-item="handleSingleSelectedItem"
    @get-popper-state="handlePopperState"
  >
    <spr-input v-model="inputText" label="Dropdown Label" placeholder="Select item..." :readonly="true" />
  </spr-dropdown>
</template>

<script setup>
import { ref } from 'vue';

const inputText = ref('');

const menu = ref([
  { text: 'sample 1', value: 'sample1' },
  { text: 'sample 2', value: 'sample2' },
  { text: 'sample 3', value: 'sample3' },
  { text: 'sample 4', value: 'sample4' },
  { text: 'sample 5', value: 'sample5' },
  { text: 'sample 6', value: 'sample6' },
  { text: 'sample 7', value: 'sample7' },
  { text: 'sample 8', value: 'sample8' },
  { text: 'sample 9', value: 'sample9' },
  { text: 'sample 10', value: 'sample10' },
]);

const handleSingleSelectedItem = (item) => {
  console.log('Item:', item);

  inputText.value = item.text;
};

const handlePopperState = (state) => {
  console.log('Popper State:', state);
};
</script>
```

## Dropdown API

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
      <td>menu</td>
      <td>List of options that compose of `text` and  `value`</td>
      <td>Array</td>
      <td>-</td>
    </tr>
    <tr>
      <td>pre-selected-items</td>
      <td>List of string of menu `text`</td>
      <td>Array</td>
      <td>-</td>
    </tr>
    <tr>
      <td>dropdown-type</td>
      <td>Change dropdown type by `single-select` or `multi-select`</td>
      <td>string</td>
      <td>`single-select`</td>
    </tr>
    <tr>
      <td>placement</td>
      <td>Change placement of dropdown popper</td>
      <td>String</td>
      <td>bottom</td>
    </tr>
    <tr>
      <td>@get-selected-item</td>
      <td>You can get the selected item object. If the dropdown type is `multi-select`, you will probably get an array of objects.</td>
      <td>Function</td>
      <td>-</td>
    </tr>
    <tr>
      <td>@get-popper-state</td>
      <td>You can get the popper state of the dropdown.</td>
      <td>Function</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

<script lang="ts" setup>
import { ref } from "vue";

import SprInput from "@/components/input/input.vue";
import SprDropdown from "@/components/dropdown/dropdown.vue";
import SprButton from "@/components/button/button.vue";

const inputTextModels = ref({
  inputText1: "",
  inputText2: "",
  inputText3: "",
  inputText4: "",
  inputText5: "",
  inputText6: "",
  inputText7: "",
  inputText8: "",
  inputText9: "",
  inputText10: "",
});

const menu = ref([
  { text: 'sample 1', value: 'sample1' },
  { text: 'sample 2', value: 'sample2' },
  { text: 'sample 3', value: 'sample3' },
  { text: 'sample 4', value: 'sample4' },
  { text: 'sample 5', value: 'sample5' },
  { text: 'sample 6', value: 'sample6' },
  { text: 'sample 7', value: 'sample7' },
  { text: 'sample 8', value: 'sample8' },
  { text: 'sample 9', value: 'sample9' },
  { text: 'sample 10', value: 'sample10' },
]);

const preSelectedItems = ref(['sample 2']);

const handleSingleSelectedItem = (inputModelText, item) => {
  console.log('Item:', item);

  inputTextModels.value[inputModelText] = item.text;
};

const handleMultiSelectedItem = (inputModelText, item) => {
  console.log('Item:', item);

  if (Array.isArray(item)) {
    inputTextModels.value[inputModelText] = item.map((i) => i.text).join(', ');
  }
};

const popperState = ref(false);

const handlePopperState = (state) => {
  console.log('Popper State:', state);

  popperState.value = state;
};
</script>
