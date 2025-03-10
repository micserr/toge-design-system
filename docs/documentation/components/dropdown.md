# Dropdown

Dropdowns appears when the user interacts with a trigger element (such as a button or a link) and is usually used for navigation menus, form selections, actions, and filters.

## Basic Usage

Dropdowns are versatile UI components that can be integrated with various elements, such as buttons, chips, inputs, and more, to provide users with a list of options or actions.

<div>
  <spr-dropdown
    id="dropdown1"
    :menu-list="menuList"
    @get-selected-item="handleSelectedItem($event, 'single', 'inputText1')"
  >
    <spr-input
      v-model="inputTextModel.inputText1"
      label="Dropdown Label"
      readonly
      placeholder="Select item..."
    />
  </spr-dropdown>
</div>

```vue
<template>
  <spr-dropdown id="sample-dropdown" :menu-list="menuList" @get-selected-item="handleSelectedItem">
    <spr-input v-model="inputTextModel" label="Dropdown Label" readonly placeholder="Select item..." />
  </spr-dropdown>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputTextModel = ref('');

const menuList = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
  { text: 'Date', value: 'date' },
  { text: 'Elderberry', value: 'elderberry' },
  { text: 'Fig', value: 'fig' },
  { text: 'Grape', value: 'grape' },
  { text: 'Nectarine', value: 'nectarine' },
  { text: 'Orange', value: 'orange' },
  { text: 'Papaya', value: 'papaya' },
  { text: '89 Quince', value: '50' },
]);

const handleSelectedItem = (item) => {
  inputTextModel.value = item.text;
};
</script>
```

## Multi Select

This feature allows users to select multiple options from the dropdown list. It provides a more flexible way of choosing several items without closing the dropdown. Just pass the prop `multi-select`.

<div>
  <spr-dropdown
    id="dropdown2"
    :menu-list="menuList"
    multi-select
    @get-selected-item="handleSelectedItem($event, 'multi', 'inputText2')"
  >
    <spr-input
      v-model="inputTextModel.inputText2"
      label="Dropdown Label"
      readonly
      placeholder="Select item..."
    />
  </spr-dropdown>
</div>

```vue
<template>
  <spr-dropdown id="sample-dropdown" :menu-list="menuList" multi-select @get-selected-item="handleSelectedItem">
    <spr-input v-model="inputTextModel" label="Dropdown Label" readonly placeholder="Select item..." />
  </spr-dropdown>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputTextModel = ref('');

const menuList = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
  { text: 'Date', value: 'date' },
  { text: 'Elderberry', value: 'elderberry' },
  { text: 'Fig', value: 'fig' },
  { text: 'Grape', value: 'grape' },
  { text: 'Nectarine', value: 'nectarine' },
  { text: 'Orange', value: 'orange' },
  { text: 'Papaya', value: 'papaya' },
  { text: '89 Quince', value: '50' },
]);

const handleSelectedItem = (item) => {
  const selectedTexts = selectedItem.map((item) => item.text).join(', ');

  inputTextModel = selectedTexts;
};
</script>
```

## Grouped Items By

You can group items by `A-Z` or `Z-A` order by passing the `group-items-by` prop and specifying the desired grouping type.

<div class="spr-grid spr-gap-4">
  <spr-dropdown
    id="dropdown3"
    :menu-list="menuList"
    group-items-by="A-Z"
    @get-selected-item="handleSelectedItem($event, 'single', 'inputText3')"
  >
    <spr-input
      v-model="inputTextModel.inputText3"
      label="Single Select Dropdown"
      readonly
      placeholder="Select item..."
    />
  </spr-dropdown>
  <spr-dropdown
    id="dropdown4"
    :menu-list="menuList"
    multi-select
    group-items-by="A-Z"
    @get-selected-item="handleSelectedItem($event, 'multi', 'inputText4')"
  >
    <spr-input
      v-model="inputTextModel.inputText4"
      label="Multi Select Dropdown"
      readonly
      placeholder="Select item..."
    />
  </spr-dropdown>
</div>

```vue
<template>
  <div class="spr-grid spr-gap-4">
    <spr-dropdown
      id="sample-dropdown1"
      :menu-list="menuList"
      group-items-by="A-Z"
      @get-selected-item="handleSelectedItem"
    >
      <spr-input v-model="inputTextModel" label="Single Select Dropdown" readonly placeholder="Select item..." />
    </spr-dropdown>

    <spr-dropdown
      id="sample-dropdown2"
      :menu-list="menuList"
      group-items-by="A-Z"
      multi-select
      @get-selected-item="handleSelectedItem"
    >
      <spr-input v-model="inputTextModel" label="Multi Select Dropdown" readonly placeholder="Select item..." />
    </spr-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputTextModel = ref('');

const menuList = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
  { text: 'Date', value: 'date' },
  { text: 'Elderberry', value: 'elderberry' },
  { text: 'Fig', value: 'fig' },
  { text: 'Grape', value: 'grape' },
  { text: 'Nectarine', value: 'nectarine' },
  { text: 'Orange', value: 'orange' },
  { text: 'Papaya', value: 'papaya' },
  { text: '89 Quince', value: '50' },
]);

const handleSelectedItem = (item) => {
  console.log(item);
};
</script>
```

## Pre-Selected Items

Pre-selected items are options that are automatically selected when the dropdown is first displayed. You can achieve this by adding the `text` or `value` as an array of strings to the `v-model`.

<div class="spr-grid spr-gap-4">
  <spr-dropdown
    id="dropdown5"
    v-model="singlePreSelectedItems"
    :menu-list="menuList"
    group-items-by="A-Z"
    @get-selected-item="handleSelectedItem($event, 'single', 'inputText4')"
  >
    <spr-input
      v-model="inputTextModel.inputText4"
      label="Single Select Dropdown"
      readonly
      placeholder="Select item..."
    />
  </spr-dropdown>
  <spr-dropdown
    id="dropdown6"
    v-model="multiPreSelectedItems"
    :menu-list="menuList"
    multi-select
    group-items-by="A-Z"
    @get-selected-item="handleSelectedItem($event, 'multi', 'inputText5')"
  >
    <spr-input
      v-model="inputTextModel.inputText5"
      label="Multi Select Dropdown"
      readonly
      placeholder="Select item..."
    />
  </spr-dropdown>
</div>

```vue
<template>
  <div class="spr-grid spr-gap-4">
    <spr-dropdown
      id="sample-dropdown1"
      v-model="singlePreSelectedItems"
      :menu-list="menuList"
      group-items-by="A-Z"
      @get-selected-item="handleSelectedItem"
    >
      <spr-input v-model="inputTextModel" label="Single Select Dropdown" readonly placeholder="Select item..." />
    </spr-dropdown>

    <spr-dropdown
      id="sample-dropdown2"
      v-model="multiPreSelectedItems"
      :menu-list="menuList"
      group-items-by="A-Z"
      multi-select
      @get-selected-item="handleSelectedItem"
    >
      <spr-input v-model="inputTextModel" label="Multi Select Dropdown" readonly placeholder="Select item..." />
    </spr-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputTextModel = ref('');

const menuList = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
  { text: 'Date', value: 'date' },
  { text: 'Elderberry', value: 'elderberry' },
  { text: 'Fig', value: 'fig' },
  { text: 'Grape', value: 'grape' },
  { text: 'Nectarine', value: 'nectarine' },
  { text: 'Orange', value: 'orange' },
  { text: 'Papaya', value: 'papaya' },
  { text: '89 Quince', value: '50' },
]);

const singlePreSelectedItems = ['Banana'];

const multiPreSelectedItems = ['Apple', 'cherry', 'fig', 'Orange'];

const handleSelectedItem = (item) => {
  console.log(item);
};
</script>
```

## Placements

Placement refers to where the dropdown popper will be positioned relative to its trigger element (e.g., button, input field). Pass the `placement` props to modify the placement of the dropdown popper.

The available placement options are: `auto`, `auto-start`, `auto-end`, `top`, `top-start`, `top-end`, `right`, `right-start`, `right-end`, `bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, and `left-end`.

The default placement is `bottom`.

<div class="spr-grid spr-gap-4">
  <div class="spr-flex spr-gap-4">
    <spr-dropdown
      id="dropdown7"
      :menu-list="menuList"
      placement="auto"
      popper-width="200px"
      @get-selected-item="handleSelectedItem($event, 'single', 'inputText6')"
    >
      <spr-input
        v-model="inputTextModel.inputText6"
        label="Auto"
        readonly
        placeholder="Select item..."
      />
    </spr-dropdown>
    <spr-dropdown
      id="dropdown8"
      :menu-list="menuList"
      placement="auto-start"
      popper-width="200px"
      @get-selected-item="handleSelectedItem($event, 'single', 'inputText6')"
    >
      <spr-input
        v-model="inputTextModel.inputText6"
        label="Auto Start"
        readonly
        placeholder="Select item..."
      />
    </spr-dropdown>
    <spr-dropdown
      id="dropdown9"
      :menu-list="menuList"
      placement="auto-end"
      popper-width="200px"
      @get-selected-item="handleSelectedItem($event, 'single', 'inputText6')"
    >
      <spr-input
        v-model="inputTextModel.inputText6"
        label="Auto End"
        readonly
        placeholder="Select item..."
      />
    </spr-dropdown>
  </div>
  <div class="spr-flex spr-gap-4">
    <spr-dropdown
      id="dropdown10"
      :menu-list="menuList"
      placement="top"
      popper-width="200px"
      @get-selected-item="handleSelectedItem($event, 'single', 'inputText6')"
    >
      <spr-input
        v-model="inputTextModel.inputText6"
        label="Top"
        readonly
        placeholder="Select item..."
      />
    </spr-dropdown>
    <spr-dropdown
      id="dropdown11"
      :menu-list="menuList"
      placement="top-start"
      popper-width="200px"
      @get-selected-item="handleSelectedItem($event, 'single', 'inputText6')"
    >
      <spr-input
        v-model="inputTextModel.inputText6"
        label="Top Start"
        readonly
        placeholder="Select item..."
      />
    </spr-dropdown>
    <spr-dropdown
      id="dropdown12"
      :menu-list="menuList"
      placement="top-end"
      popper-width="200px"
      @get-selected-item="handleSelectedItem($event, 'single', 'inputText6')"
    >
      <spr-input
        v-model="inputTextModel.inputText6"
        label="Top End"
        readonly
        placeholder="Select item..."
      />
    </spr-dropdown>
  </div>
  <div class="spr-flex spr-gap-4">
    <spr-dropdown
      id="dropdown13"
      :menu-list="menuList"
      placement="right"
      popper-width="200px"
      @get-selected-item="handleSelectedItem($event, 'single', 'inputText6')"
    >
      <spr-input
        v-model="inputTextModel.inputText6"
        label="Right"
        readonly
        placeholder="Select item..."
      />
    </spr-dropdown>
    <spr-dropdown
      id="dropdown14"
      :menu-list="menuList"
      placement="right-start"
      popper-width="200px"
      @get-selected-item="handleSelectedItem($event, 'single', 'inputText6')"
    >
      <spr-input
        v-model="inputTextModel.inputText6"
        label="Right Start"
        readonly
        placeholder="Select item..."
      />
    </spr-dropdown>
    <spr-dropdown
      id="dropdown15"
      :menu-list="menuList"
      placement="right-end"
      popper-width="200px"
      @get-selected-item="handleSelectedItem($event, 'single', 'inputText6')"
    >
      <spr-input
        v-model="inputTextModel.inputText6"
        label="Right End"
        readonly
        placeholder="Select item..."
      />
    </spr-dropdown>
  </div>
  <div class="spr-flex spr-gap-4">
    <spr-dropdown
      id="dropdown16"
      :menu-list="menuList"
      placement="bottom"
      popper-width="200px"
      @get-selected-item="handleSelectedItem($event, 'single', 'inputText6')"
    >
      <spr-input
        v-model="inputTextModel.inputText6"
        label="Bottom"
        readonly
        placeholder="Select item..."
      />
    </spr-dropdown>
    <spr-dropdown
      id="dropdown17"
      :menu-list="menuList"
      placement="bottom-start"
      popper-width="200px"
      @get-selected-item="handleSelectedItem($event, 'single', 'inputText6')"
    >
      <spr-input
        v-model="inputTextModel.inputText6"
        label="Bottom Start"
        readonly
        placeholder="Select item..."
      />
    </spr-dropdown>
    <spr-dropdown
      id="dropdown18"
      :menu-list="menuList"
      placement="bottom-end"
      popper-width="200px"
      @get-selected-item="handleSelectedItem($event, 'single', 'inputText6')"
    >
      <spr-input
        v-model="inputTextModel.inputText6"
        label="Bottom End"
        readonly
        placeholder="Select item..."
      />
    </spr-dropdown>
  </div>
  <div class="spr-flex spr-gap-4">
    <spr-dropdown
      id="dropdown19"
      :menu-list="menuList"
      placement="left"
      popper-width="200px"
      @get-selected-item="handleSelectedItem($event, 'single', 'inputText6')"
    >
      <spr-input
        v-model="inputTextModel.inputText6"
        label="Left"
        readonly
        placeholder="Select item..."
      />
    </spr-dropdown>
    <spr-dropdown
      id="dropdown20"
      :menu-list="menuList"
      placement="left-start"
      popper-width="200px"
      @get-selected-item="handleSelectedItem($event, 'single', 'inputText6')"
    >
      <spr-input
        v-model="inputTextModel.inputText6"
        label="Left Start"
        readonly
        placeholder="Select item..."
      />
    </spr-dropdown>
    <spr-dropdown
      id="dropdown21"
      :menu-list="menuList"
      placement="left-end"
      popper-width="200px"
      @get-selected-item="handleSelectedItem($event, 'single', 'inputText6')"
    >
      <spr-input
        v-model="inputTextModel.inputText6"
        label="Left End"
        readonly
        placeholder="Select item..."
      />
    </spr-dropdown>
  </div>
</div>

```vue
<template>
  <spr-dropdown id="sample-dropdown" :menu-list="menuList" placement="top" @get-selected-item="handleSelectedItem">
    <spr-input v-model="inputTextModel" label="Dropdown Label" readonly placeholder="Select item..." />
  </spr-dropdown>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputTextModel = ref('');

const menuList = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
  { text: 'Date', value: 'date' },
  { text: 'Elderberry', value: 'elderberry' },
  { text: 'Fig', value: 'fig' },
  { text: 'Grape', value: 'grape' },
  { text: 'Nectarine', value: 'nectarine' },
  { text: 'Orange', value: 'orange' },
  { text: 'Papaya', value: 'papaya' },
  { text: '89 Quince', value: '50' },
]);

const handleSelectedItem = (item) => {
  console.log(item);
};
</script>
```

## Search

The search feature allows users to quickly filter and find specific items within the dropdown list by typing in a search query. Pass down the string either `text` or `value` of of the item with the prop `search-string`.

<div>
  <spr-dropdown
    id="dropdown22"
    :menu-list="menuList"
    :search-string="inputTextModel.inputText7"
    @get-selected-item="handleSelectedItem($event, 'single', 'inputText7')"
  >
    <spr-input
      v-model="inputTextModel.inputText7"
      label="Dropdown Label"
      placeholder="Select item..."
    />
  </spr-dropdown>
</div>

```vue
<template>
  <spr-dropdown
    id="sample-dropdown"
    :menu-list="menuList"
    :search-string="inputTextModel"
    @get-selected-item="handleSelectedItem"
  >
    <spr-input v-model="inputTextModel" label="Dropdown Label" placeholder="Select item..." />
  </spr-dropdown>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputTextModel = ref('');

const menuList = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
  { text: 'Date', value: 'date' },
  { text: 'Elderberry', value: 'elderberry' },
  { text: 'Fig', value: 'fig' },
  { text: 'Grape', value: 'grape' },
  { text: 'Nectarine', value: 'nectarine' },
  { text: 'Orange', value: 'orange' },
  { text: 'Papaya', value: 'papaya' },
  { text: '89 Quince', value: '50' },
]);

const handleSelectedItem = (item) => {
  inputTextModel.value = item.text;
};
</script>
```

## Width and Popper Width

You can modify the width of the dropdown component in two ways: by adjusting the width of the dropdown wrapper or by changing the width of the dropdown popper.

`Width` - Is the overall width wrapper of both parent element and popper element.

`Popper Width` - Width of only popper element

<div>
  <spr-dropdown
    id="dropdown23"
    :menu-list="menuList"
    width="50%"
    popper-width="200px"
    @get-selected-item="handleSelectedItem($event, 'single', 'inputText8')"
  >
    <spr-input
      v-model="inputTextModel.inputText8"
      label="Dropdown Label"
      placeholder="Select item..."
      readonly
    />
  </spr-dropdown>
</div>

```vue
<template>
  <spr-dropdown
    id="sample-dropdown"
    :menu-list="menuList"
    width="50%"
    popper-width="200px"
    @get-selected-item="handleSelectedItem"
  >
    <spr-input v-model="inputTextModel" label="Dropdown Label" placeholder="Select item..." readonly />
  </spr-dropdown>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputTextModel = ref('');

const menuList = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
  { text: 'Date', value: 'date' },
  { text: 'Elderberry', value: 'elderberry' },
  { text: 'Fig', value: 'fig' },
  { text: 'Grape', value: 'grape' },
  { text: 'Nectarine', value: 'nectarine' },
  { text: 'Orange', value: 'orange' },
  { text: 'Papaya', value: 'papaya' },
  { text: '89 Quince', value: '50' },
]);

const handleSelectedItem = (item) => {
  inputTextModel.value = item.text;
};
</script>
```

## Other Components Integration

Dropdowns can be integrated with various UI components like buttons, inputs, and chips. This allows for seamless interaction with other parts of the interface, ensuring consistency and enhancing user experience across the application.

<div class="spr-grid spr-gap-4">
  <spr-dropdown id="dropdown24" :menu-list="menuList" width="200px" popper-width="200px">
    <spr-button class="spr-w-full" tone="success">Dropdown</spr-button>
  </spr-dropdown>

  <spr-dropdown id="dropdown25" :menu-list="menuList" width="200px" popper-width="200px">
    <spr-chips label="Basic Chip" />
  </spr-dropdown>

  <spr-dropdown id="dropdown26" :menu-list="menuList" width="200px" popper-width="200px">
      <spr-lozenge label="Plain" />
    </spr-dropdown>
</div>

```vue
<template>
  <div class="spr-grid spr-gap-4">
    <spr-dropdown id="sample-dropdown1" :menu-list="menuList" width="200px" popper-width="200px">
      <spr-button tone="success">Dropdown</spr-button>
    </spr-dropdown>

    <spr-dropdown id="sample-dropdown2" :menu-list="menuList" width="200px" popper-width="200px">
      <spr-chips label="Basic Chip" />
    </spr-dropdown>

    <spr-dropdown id="sample-dropdown3" :menu-list="menuList" width="200px" popper-width="200px">
      <spr-lozenge label="Plain" />
    </spr-dropdown>
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
  { text: 'Grape', value: 'grape' },
  { text: 'Nectarine', value: 'nectarine' },
  { text: 'Orange', value: 'orange' },
  { text: 'Papaya', value: 'papaya' },
  { text: '89 Quince', value: '50' },
]);
</script>
```

## Popper Strategy

The Popper strategy is primarily used when working with elements like modal. It helps control the positioning behavior of popper. The strategy ensures that the popper element is dynamically positioned based on the viewport, the reference element, or other factors such as scrolling or resizing.

By default, the Popper strategy is set to `absolute`, which positions the popper element relative to the nearest positioned ancestor (usually the body element). However, you can change the `strategy` to `fixed`, which positions the popper element relative to the viewport, ensuring that it remains in place even when the page is scrolled.

Pass the prop `popper-strategy` to change the behavior position of the popper.

<spr-button tone="success" @click="modalModel = true">Open Modal</spr-button>

<spr-modal v-model="modalModel" title="Dropdown with Modal">
   <spr-dropdown
    id="dropdown27"
    :menu-list="menuList"
    popper-stategy="fixed"
    @get-selected-item="handleSelectedItem($event, 'single', 'inputText9')"
  >
    <spr-input
      v-model="inputTextModel.inputText9"
      label="Dropdown Label"
      placeholder="Select item..."
      readonly
    />
  </spr-dropdown>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
</spr-modal>

```vue
<template>
  <spr-button tone="success" @click="modalModel = true">Open Modal</spr-button>

  <spr-modal v-model="modalModel" title="Dropdown with Modal">
    <spr-dropdown id="sample-dropdown" :menu-list="menuList" popper-stategy="fixed">
      <spr-input v-model="inputTextModel" label="Dropdown Label" placeholder="Select item..." readonly />
    </spr-dropdown>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
    </p>
  </spr-modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputTextModel = ref('');
const modalModel = ref(false);

const menuList = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
  { text: 'Date', value: 'date' },
  { text: 'Elderberry', value: 'elderberry' },
  { text: 'Fig', value: 'fig' },
  { text: 'Grape', value: 'grape' },
  { text: 'Nectarine', value: 'nectarine' },
  { text: 'Orange', value: 'orange' },
  { text: 'Papaya', value: 'papaya' },
  { text: '89 Quince', value: '50' },
]);

const handleSelectedItem = (item) => {
  console.log(item);
};
</script>
```

## Get Selected Items

This feature provides a method to retrieve the selected items from the dropdown programmatically. This can be helpful when you need to access the selected data for processing or submitting form values. Use `@get-selected-item` emit to get selected item.

<div class="spr-grid spr-gap-4">
  <div>
    <spr-dropdown
      id="dropdown28"
      :menu-list="menuList"
      @get-selected-item="handleSelectedItem($event, 'single', 'inputText10')"
    >
      <spr-input
        v-model="inputTextModel.inputText10"
        label="Single Select Dropdown"
        readonly
        placeholder="Select item..."
      />
    </spr-dropdown>
    <div class="spr-my-3 spr-p-4 spr-bg-blue-100">
      <h5>Single Select Output:</h5>
      <pre>{{ JSON.stringify(singleSelectData, null, 2) }}</pre>
    </div>
  </div>
  <div>
    <spr-dropdown
      id="dropdown29"
      :menu-list="menuList"
      multi-select
      @get-selected-item="handleSelectedItem($event, 'multi', 'inputText11')"
    >
      <spr-input
        v-model="inputTextModel.inputText11"
        label="Multi Select Dropdown"
        readonly
        placeholder="Select item..."
      />
    </spr-dropdown>
    <div class="spr-my-3 spr-p-4 spr-bg-blue-100">
      <h5>Multi Select Output:</h5>
      <pre>{{ JSON.stringify(multiSelectData, null, 2) }}</pre>
    </div>
  </div>
</div>

## Infinite Scroll

Infinite scroll allows the dropdown list to load more items as the user scrolls, this feature is particularly for back-end api integration. Instead of loading the entire list at once, new items are dynamically added as needed, improving performance and usability. Pass `@infinite-scroll-trigger` emit to get the trigger of menu when it reaches bottom.

<div>
  <spr-dropdown
    id="dropdown30"
    :menu-list="paginatedMenuList"
    @get-selected-item="handleSelectedItem($event, 'single', 'inputText12')"
    @infinite-scroll-trigger="handleInfiniteScrollTrigger"
  >
    <spr-input
      v-model="inputTextModel.inputText12"
      label="Dropdown Label"
      readonly
      placeholder="Select item..."
    />
  </spr-dropdown>
  <div class="spr-my-3 spr-p-4 spr-bg-blue-100">
    <h5>Paginated Menu List - Should load 10 Items per page:</h5>
    <p>Pagination:</p>
    <pre>{{ JSON.stringify(pagination, null, 2) }}</pre>
    <p>Data:</p>
    {{ paginatedMenuList }}
  </div>
</div>

```vue
<template>
  <spr-dropdown id="sample-dropdown" :menu-list="menuList" @infinite-scroll-trigger="handleInfiniteScrollTrigger">
    <spr-input v-model="inputTextModel" label="Dropdown Label" placeholder="Select item..." readonly />
  </spr-dropdown>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputTextModel = ref('');
const modalModel = ref(false);

const menuList = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
  { text: 'Date', value: 'date' },
  { text: 'Elderberry', value: 'elderberry' },
  { text: 'Fig', value: 'fig' },
  { text: 'Grape', value: 'grape' },
  { text: 'Nectarine', value: 'nectarine' },
  { text: 'Orange', value: 'orange' },
  { text: 'Papaya', value: 'papaya' },
  { text: '89 Quince', value: '50' },
]);

const pagination = ref({
  totalpages: 10,
  currentPage: 1,
});

const handleInfiniteScrollTrigger = () => {
  if (pagination.value.currentPage === pagination.value.totalpages) return;

  pagination.value.currentPage += 1;

  // For testing purposes only
  const fastFoodItems = [
    'Burger',
    'Pizza',
    'Fries',
    'Hot Dog',
    'Sandwich',
    'Tacos',
    'Chicken Wings',
    'Chicken Nuggets',
    'Wrap',
    'Pasta',
    'Onion Rings',
    'Shakes',
    'Fried Chicken',
    'Salad',
    'Milkshake',
    'Mozzarella Sticks',
    'Popcorn Chicken',
    'Bagel',
    'Quesadilla',
    'Breakfast Burrito',
  ];

  // For testing purposes only
  for (let i = 0; i < 10; i++) {
    const randomFood = fastFoodItems[Math.floor(Math.random() * fastFoodItems.length)];

    menuList.value.push({
      text: randomFood,
      value: randomFood.toLowerCase().replace(' ', '_'),
    });
  }
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
      <td>id</td>
      <td>Required to bind popper within the datepicker</td>
      <td>Array</td>
      <td>-</td>
    </tr>
    <tr>
      <td>v-model</td>
      <td>List of strings representing the `text` or `value` of pre-selected menu items</td>
      <td>Array</td>
      <td>-</td>
    </tr>
    <tr>
      <td>menu-list</td>
      <td>List of options composed of `text` and `value` properties</td>
      <td>Array</td>
      <td>-</td>
    </tr>
    <tr>
      <td>width</td>
      <td>Defines the width of the dropdown component wrapper</td>
      <td>String</td>
      <td>`100%`</td>
    </tr>
    <tr>
      <td>popper-width</td>
      <td>Defines the width of the dropdown's popper</td>
      <td>String</td>
      <td>`100%`</td>
    </tr>
    <tr>
      <td>popper-strategy</td>
      <td>Defines how the dropdown's popper is positioned relative to the reference element. Can be `absolute` or `fixed`</td>
      <td>string</td>
      <td>`absolute`</td>
    </tr>
    <tr>
      <td>placement</td>
      <td>Changes the placement of the dropdown popper (e.g., `bottom`, `top`, `left`, `right`)</td>
      <td>string</td>
      <td>`bottom`</td>
    </tr>
    <tr>
      <td>multi-select</td>
      <td>If set, allows multiple selections in the dropdown</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>@get-selected-item</td>
      <td>Event emitted when a selection is made. You will get the selected item (or items in case of multi-select).</td>
      <td>Function</td>
      <td>-</td>
    </tr>
    <tr>
      <td>@get-popper-state</td>
      <td>Event emitted when the popper state is changed (e.g., opened or closed)</td>
      <td>Function</td>
      <td>-</td>
    </tr>
    <tr>
      <td>@infinite-scroll-trigger</td>
      <td>Event emitted when the dropdown is scrolled to the bottom. Useful for dynamic data loading</td>
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
import SprChips from "@/components/chips/chips.vue";
import SprLozenge from "@/components/lozenge/lozenge.vue"
import SprModal from "@/components/modal/modal.vue"

const menuList = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
  { text: 'Date', value: 'date' },
  { text: 'Elderberry', value: 'elderberry' },
  { text: 'Fig', value: 'fig' },
  { text: 'Grape', value: 'grape' },
  { text: 'Honeydew', value: 'honeydew' },
  { text: 'Indian Fig', value: 'indian_fig' },
  { text: 'Jackfruit', value: 'jackfruit' },
  { text: 'Kiwi', value: 'kiwi' },
  { text: 'Lemon', value: 'lemon' },
  { text: 'Mango', value: 'mango' },
  { text: 'Nectarine', value: 'nectarine' },
  { text: 'Orange', value: 'orange' },
  { text: 'Papaya', value: 'papaya' },
  { text: '89 Quince', value: '50' },
  { text: 'Raspberry', value: 'raspberry' },
  { text: 'Strawberry', value: 'strawberry' },
  { text: 'Tangerine', value: 'tangerine' },
  { text: 'Uva', value: 'uva' },
  { text: 'Vanilla', value: 'vanilla' },
  { text: 'Watermelon', value: 'watermelon' },
  { text: 'Xigua', value: 'xigua' },
  { text: 'Yunnan Hackberry', value: 'yunnan_hackberry' },
  { text: 'Zucchini', value: 'zucchini' },
  { text: 'Apricot', value: 'apricot' },
  { text: 'Blueberry', value: 'blueberry' },
  { text: 'Cantaloupe', value: 'cantaloupe' },
  { text: 'Dragonfruit', value: 'dragonfruit' },
  { text: 'Pineapple', value: 'pineapple' },
]);

const paginatedMenuList = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
  { text: 'Date', value: 'date' },
  { text: 'Elderberry', value: 'elderberry' },
  { text: 'Fig', value: 'fig' },
  { text: 'Grape', value: 'grape' },
  { text: 'Honeydew', value: 'honeydew' },
  { text: 'Indian Fig', value: 'indian_fig' },
  { text: 'Jackfruit', value: 'jackfruit' },
]);

const inputTextModel = ref({
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
  inputText11: "",
  inputText12: "",
  inputText13: "",
  inputText14: "",
  inputText15: "",
  inputText16: "",
  inputText17: "",
  inputText18: "",
  inputText19: "",
  inputText20: "",
});

const modalModel = ref(false);

const singlePreSelectedItems = ref(['Banana']);

const multiPreSelectedItems = ref(['Apple', 'date', 'fig', 'Orange']);

const handleSelectedItem = (selectedItem, dropdownType, inputModel) => {
  if (dropdownType === 'single') {
    inputTextModel.value[inputModel] = selectedItem.text;

    if (inputModel === 'inputText10') {
      singleSelectData.value = selectedItem;
    }
  }

  if (dropdownType === 'multi') {
    const selectedTexts = selectedItem.map(item => item.text).join(', ');

    inputTextModel.value[inputModel] = selectedTexts;

    if (inputModel === 'inputText11') {
      multiSelectData.value = selectedItem;
    }
  }
}

const singleSelectData = ref({});

const multiSelectData = ref([]);

const pagination = ref({
  totalpages: 10,
  currentPage: 1,
});

const handleInfiniteScrollTrigger = () => {
  if (pagination.value.currentPage === pagination.value.totalpages) return;

  pagination.value.currentPage += 1;

  const fastFoodItems = [
    'Burger', 'Pizza', 'Fries', 'Hot Dog', 'Sandwich', 'Tacos', 'Chicken Wings', 'Chicken Nuggets', 'Wrap', 'Pasta',
    'Onion Rings', 'Shakes', 'Fried Chicken', 'Salad', 'Milkshake', 'Mozzarella Sticks', 'Popcorn Chicken', 'Bagel', 
    'Quesadilla', 'Breakfast Burrito'
  ];


  for (let i = 0; i < 10; i++) {
    const randomFood = fastFoodItems[Math.floor(Math.random() * fastFoodItems.length)];

    paginatedMenuList.value.push({
      text: randomFood,
      value: randomFood.toLowerCase().replace(' ', '_')
    });
  }
}
</script>
