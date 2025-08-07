---
outline: 'deep'
---

<div class="spr-bg-red-300 spr-text-warning-800 spr-border spr-border-warning-200 spr-p-4 spr-mb-6 spr-rounded spr-font-medium spr-flex spr-items-center spr-gap-2">
  <span>
   <strong>Notice:</strong> The Dropdown component is now intended for navigation menus or other UI interactions, not for form field selection. If you are using Dropdown for forms, please use the <a href="/documentation/components/select/select-single.html" class="spr-text-warning-700 spr-underline spr-font-semibold">Select component</a> instead. This documentation will be updated soon for navigation menus or other UI interactions usage.
  </span>
</div>

# Dropdown

Dropdowns appears when the user interacts with a trigger element (such as a button or a link) and is usually used for navigation menus, form selections, actions, and filters.

## Basic Usage

Dropdowns are versatile UI components that can be integrated with various elements, such as buttons, chips, inputs, and more, to provide users with a list of options or actions.

<div>
  <spr-dropdown
    id="dropdown1"
    v-model="dropdownModel.dropdown1"
    :menu-list="menuList"
    @update:model-value="(value) => handleSelectedItem(value, 'single', 'inputText1')"
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
  <spr-dropdown
    id="sample-dropdown"
    v-model="dropdownModel"
    :menu-list="menuList"
    @update:model-value="handleSelectedItem"
  >
    <spr-input v-model="inputTextModel" label="Dropdown Label" readonly placeholder="Select item..." />
  </spr-dropdown>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const dropdownModel = ref([]);
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

const handleSelectedItem = (selectedItem) => {
  inputTextModel.value[inputModel] = menuList.value.find((item) => item.value === selectedItem[0]).text;
};
</script>
```

## Multi Select

This feature allows users to select multiple options from the dropdown list. It provides a more flexible way of choosing several items without closing the dropdown. Just pass the prop `multi-select`.

<div>
  <spr-dropdown
    id="dropdown2"
    v-model="dropdownModel.dropdown2"
    :menu-list="menuList"
    multi-select
    @update:model-value="(value) => handleSelectedItem(value, 'multi', 'inputText2')"
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
  <spr-dropdown
    id="sample-dropdown"
    v-model="dropdownModel"
    :menu-list="menuList"
    multi-select
    @update:model-value="handleSelectedItem"
  >
    <spr-input v-model="inputTextModel" label="Dropdown Label" readonly placeholder="Select item..." />
  </spr-dropdown>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const dropdownModel = ref([]);
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

const handleSelectedItem = (selectedItem) => {
  const selectedTexts = selectedItem
    .map((item) => menuList.value.find((menuItem) => menuItem.value === item).text)
    .join(', ');
  inputTextModel.value[inputModel] = selectedTexts;
};
</script>
```

## Multiple Number Values

The dropdown component fully supports arrays of number values in multi-select mode, preserving the numeric type throughout the selection process.

<div>
  <dropdown-number-multi-select />
</div>

```vue
<template>
  <spr-dropdown
    id="number-multi-dropdown"
    v-model="selectedNumbers"
    :menu-list="numberOptions"
    multi-select
    @update:model-value="handleSelectedItems"
  >
    <spr-input v-model="displayText" label="Select Numbers" readonly placeholder="Select numbers..." />
  </spr-dropdown>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// Define number options with numeric values
const numberOptions = [
  { text: 'One', value: 1 },
  { text: 'Two', value: 2 },
  { text: 'Three', value: 3 },
  { text: 'Four', value: 4 },
  { text: 'Five', value: 5 },
];

// Initialize with preselected values
const selectedNumbers = ref([1, 3]); // Selected "One" and "Three"
const displayText = ref('One, Three');

// Handle selected items
const handleSelectedItems = (items) => {
  // Numbers are preserved in the items array
  const selectedTexts = items
    .map((value) => {
      const option = numberOptions.find((opt) => opt.value === value);
      return option ? option.text : '';
    })
    .filter(Boolean)
    .join(', ');

  // Update display text
  displayText.value = selectedTexts;
};
</script>
```

### Key Points About Number Value Support

1. **Value Type Preservation**: Number values remain as numbers in the v-model
2. **Type-Safe Comparison**: Both direct number comparison and string representation comparison are supported
3. **Pre-Selected Values**: You can pre-select number values using an array of numbers
4. **Mixed Types**: While supported, we recommend using consistent types (all strings or all numbers) for better maintainability

For more details and advanced examples, see [Dropdown Number Multi-Select Example](/documentation/examples/dropdown-number-multi-select).

## Grouped Items By

You can group items by `default`, `A-Z` or `Z-A` order by passing the `group-items-by` prop and specifying the desired grouping type. See [List: Grouped Items](./list#grouped-items) for more examples.

<div class="spr-grid spr-gap-4">
  <spr-dropdown
    id="dropdown3"
    v-model="dropdownModel.dropdown3"
    :menu-list="menuList"
    group-items-by="A-Z"
    @update:model-value="(value) => handleSelectedItem(value, 'single', 'inputText3')"
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
    v-model="dropdownModel.dropdown4"
    :menu-list="menuList"
    multi-select
    group-items-by="A-Z"
    @update:model-value="(value) => handleSelectedItem(value, 'multi', 'inputText4')"
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
      v-model="dropdownModel.inputText3"
      :menu-list="menuList"
      group-items-by="A-Z"
      @update:model-value="handleSingleSelectedItem"
    >
      <spr-input v-model="inputTextModel" label="Single Select Dropdown" readonly placeholder="Select item..." />
    </spr-dropdown>

    <spr-dropdown
      id="sample-dropdown2"
      v-model="dropdownModel.inputText4"
      :menu-list="menuList"
      group-items-by="A-Z"
      multi-select
      @update:model-value="handleSelectedItem"
    >
      <spr-input v-model="inputTextModel" label="Multi Select Dropdown" readonly placeholder="Select item..." />
    </spr-dropdown>
  </div>
</template>
```

## Pre-Selected Items

Pre-selected items are options that are automatically selected when the dropdown is first displayed. You can achieve this by adding the `value` as an array of strings to the `v-model`.

<div class="spr-grid spr-gap-4">
  <spr-dropdown
    id="dropdown5"
    v-model="dropdownModel.dropdown5"
    :menu-list="menuList"
    group-items-by="A-Z"
    @update:model-value="(value) => handleSelectedItem(value, 'single', 'inputText5')"
  >
    <spr-input
      v-model="inputTextModel.inputText5"
      label="Single Select Dropdown"
      readonly
      placeholder="Select item..."
    />
  </spr-dropdown>
  <spr-dropdown
    id="dropdown6"
    v-model="dropdownModel.dropdown6"
    :menu-list="menuList"
    multi-select
    group-items-by="A-Z"
    @update:model-value="(value) => handleSelectedItem(value, 'multi', 'inputText6')"
  >
    <spr-input
      v-model="inputTextModel.inputText6"
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
      id="dropdownSample1"
      v-model="dropdownModel.dropdownModel1"
      :menu-list="menuList"
      group-items-by="A-Z"
      @update:model-value="(value) => handleSelectedItem(value, 'single', 'inputText5')"
    >
      <spr-input
        v-model="inputTextModel.inputTextModel1"
        label="Single Select Dropdown"
        readonly
        placeholder="Select item..."
      />
    </spr-dropdown>
    <spr-dropdown
      id="dropdownSample26"
      v-model="dropdownModel.dropdownModel2"
      :menu-list="menuList"
      multi-select
      group-items-by="A-Z"
      @update:model-value="(value) => handleSelectedItem(value, 'multi', 'inputText6')"
    >
      <spr-input
        v-model="inputTextModel.inputTextModel2"
        label="Multi Select Dropdown"
        readonly
        placeholder="Select item..."
      />
    </spr-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const dropdownModel = ref({
  dropdownModel1: ['apple'],
  dropdownModel2: ['date', 'fig', 'orange'],
});

const inputTextModel = ref({
  inputTextModel1: '',
  inputTextModel2: '',
});

// Load selected values to input texts
onMounted(() => {
  handleSelectedItem(dropdownModel.value.dropdownModel1, 'single', 'inputTextModel1');
  handleSelectedItem(dropdownModel.value.dropdownModel2, 'multi', 'inputTextModel2');
});

const handleSelectedItem = (selectedItem, dropdownType, inputModel) => {
  if (dropdownType === 'single') {
    inputTextModel.value[inputModel] = menuList.value.find((item) => item.value === selectedItem[0]).text;
  }

  if (dropdownType === 'multi') {
    const selectedTexts = selectedItem
      .map((item) => menuList.value.find((menuItem) => menuItem.value === item).text)
      .join(', ');

    inputTextModel.value[inputModel] = selectedTexts;
  }
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
      v-model="dropdownModel.dropdown7"
      :menu-list="menuList"
      placement="auto"
      popper-width="200px"
      @update:model-value="(value) => handleSelectedItem(value, 'single', 'inputText7')"
    >
      <spr-input
        v-model="inputTextModel.inputText7"
        label="Auto"
        readonly
        placeholder="Select item..."
      />
    </spr-dropdown>
    <spr-dropdown
      id="dropdown8"
      v-model="dropdownModel.dropdown8"
      :menu-list="menuList"
      placement="auto-start"
      popper-width="200px"
      @update:model-value="(value) => handleSelectedItem(value, 'single', 'inputText8')"
    >
      <spr-input
        v-model="inputTextModel.inputText8"
        label="Auto Start"
        readonly
        placeholder="Select item..."
      />
    </spr-dropdown>
    <spr-dropdown
      id="dropdown9"
      v-model="dropdownModel.dropdown9"
      :menu-list="menuList"
      placement="auto-end"
      popper-width="200px"
      @update:model-value="(value) => handleSelectedItem(value, 'single', 'inputText9')"
    >
      <spr-input
        v-model="inputTextModel.inputText9"
        label="Auto End"
        readonly
        placeholder="Select item..."
      />
    </spr-dropdown>
  </div>
  <div class="spr-flex spr-gap-4">
    <spr-dropdown
      id="dropdown10"
      v-model="dropdownModel.dropdown10"
      :menu-list="menuList"
      placement="top"
      popper-width="200px"
      @update:model-value="(value) => handleSelectedItem(value, 'single', 'inputText10')"
    >
      <spr-input
        v-model="inputTextModel.inputText10"
        label="Top"
        readonly
        placeholder="Select item..."
      />
    </spr-dropdown>
    <spr-dropdown
      id="dropdown11"
      v-model="dropdownModel.dropdown11"
      :menu-list="menuList"
      placement="top-start"
      popper-width="200px"
      @update:model-value="(value) => handleSelectedItem(value, 'single', 'inputText11')"
    >
      <spr-input
        v-model="inputTextModel.inputText11"
        label="Top Start"
        readonly
        placeholder="Select item..."
      />
    </spr-dropdown>
    <spr-dropdown
      id="dropdown12"
      v-model="dropdownModel.dropdown12"
      :menu-list="menuList"
      placement="top-end"
      popper-width="200px"
      @update:model-value="(value) => handleSelectedItem(value, 'single', 'inputText12')"
    >
      <spr-input
        v-model="inputTextModel.inputText12"
        label="Top End"
        readonly
        placeholder="Select item..."
      />
    </spr-dropdown>
  </div>
  <div class="spr-flex spr-gap-4">
    <spr-dropdown
      id="dropdown13"
      v-model="dropdownModel.dropdown13"
      :menu-list="menuList"
      placement="right"
      popper-width="200px"
      @update:model-value="(value) => handleSelectedItem(value, 'single', 'inputText13')"
    >
      <spr-input
        v-model="inputTextModel.inputText13"
        label="Right"
        readonly
        placeholder="Select item..."
      />
    </spr-dropdown>
    <spr-dropdown
      id="dropdown14"
      v-model="dropdownModel.dropdown14"
      :menu-list="menuList"
      placement="right-start"
      popper-width="200px"
      @update:model-value="(value) => handleSelectedItem(value, 'single', 'inputText14')"
    >
      <spr-input
        v-model="inputTextModel.inputText14"
        label="Right Start"
        readonly
        placeholder="Select item..."
      />
    </spr-dropdown>
    <spr-dropdown
      id="dropdown15"
      v-model="dropdownModel.dropdown15"
      :menu-list="menuList"
      placement="right-end"
      popper-width="200px"
      @update:model-value="(value) => handleSelectedItem(value, 'single', 'inputText15')"
    >
      <spr-input
        v-model="inputTextModel.inputText15"
        label="Right End"
        readonly
        placeholder="Select item..."
      />
    </spr-dropdown>
  </div>
  <div class="spr-flex spr-gap-4">
    <spr-dropdown
      id="dropdown16"
      v-model="dropdownModel.dropdown16"
      :menu-list="menuList"
      placement="bottom"
      popper-width="200px"
      @update:model-value="(value) => handleSelectedItem(value, 'single', 'inputText16')"
    >
      <spr-input
        v-model="inputTextModel.inputText16"
        label="Bottom"
        readonly
        placeholder="Select item..."
      />
    </spr-dropdown>
    <spr-dropdown
      id="dropdown17"
      v-model="dropdownModel.dropdown17"
      :menu-list="menuList"
      placement="bottom-start"
      popper-width="200px"
      @update:model-value="(value) => handleSelectedItem(value, 'single', 'inputText17')"
    >
      <spr-input
        v-model="inputTextModel.inputText17"
        label="Bottom Start"
        readonly
        placeholder="Select item..."
      />
    </spr-dropdown>
    <spr-dropdown
      id="dropdown18"
      v-model="dropdownModel.dropdown18"
      :menu-list="menuList"
      placement="bottom-end"
      popper-width="200px"
      @update:model-value="(value) => handleSelectedItem(value, 'single', 'inputText18')"
    >
      <spr-input
        v-model="inputTextModel.inputText18"
        label="Bottom End"
        readonly
        placeholder="Select item..."
      />
    </spr-dropdown>
  </div>
  <div class="spr-flex spr-gap-4">
    <spr-dropdown
      id="dropdown19"
      v-model="dropdownModel.dropdown19"
      :menu-list="menuList"
      placement="left"
      popper-width="200px"
      @update:model-value="(value) => handleSelectedItem(value, 'single', 'inputText19')"
    >
      <spr-input
        v-model="inputTextModel.inputText19"
        label="Left"
        readonly
        placeholder="Select item..."
      />
    </spr-dropdown>
    <spr-dropdown
      id="dropdown20"
      v-model="dropdownModel.dropdown20"
      :menu-list="menuList"
      placement="left-start"
      popper-width="200px"
      @update:model-value="(value) => handleSelectedItem(value, 'single', 'inputText20')"
    >
      <spr-input
        v-model="inputTextModel.inputText20"
        label="Left Start"
        readonly
        placeholder="Select item..."
      />
    </spr-dropdown>
    <spr-dropdown
      id="dropdown21"
      v-model="dropdownModel.dropdown21"
      :menu-list="menuList"
      placement="left-end"
      popper-width="200px"
      @update:model-value="(value) => handleSelectedItem(value, 'single', 'inputText21')"
    >
      <spr-input
        v-model="inputTextModel.inputText21"
        label="Left End"
        readonly
        placeholder="Select item..."
      />
    </spr-dropdown>
  </div>
</div>

## Search

The search feature allows users to quickly filter and find specific items within the dropdown list by typing in a search query. Pass down the string `text` of the item with the prop `search-string`.

<div>
  <spr-dropdown
    id="dropdown22"
    v-model="dropdownModel.dropdown22"
    :menu-list="menuList"
    :search-string="inputTextModel.inputText22"
    @update:model-value="(value) => handleSelectedItem(value, 'single', 'inputText22')"
  >
    <spr-input
      v-model="inputTextModel.inputText22"
      label="Dropdown Label"
      placeholder="Select item..."
    />
  </spr-dropdown>
</div>

```vue
<template>
  <spr-dropdown
    id="sample-dropdown"
    v-model="dropdownModel.sampleDropdown"
    :menu-list="menuList"
    :search-string="inputTextModel"
    @update:model-value="handleSelectedItem"
  >
    <spr-input v-model="inputTextModel" label="Dropdown Label" placeholder="Select item..." />
  </spr-dropdown>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputTextModel = ref('');
const dropdownModel = ref('');

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

const handleSelectedItem = (selectedItem) => {
  inputTextModel.value[inputModel] = menuList.value.find((item) => item.value === selectedItem[0]).text;
};
</script>
```

## Width and Popper Width

You can modify the width of the dropdown component in two ways: by adjusting the width of the dropdown wrapper or by changing the width of the dropdown popper.

`Width` - Is the overall width wrapper of both parent element and popper element.

`Popper Width` - Width of only popper element

`Popper Inner Width` - Width of the inner popper element, which is the width of the dropdown menu list.

<div>
  <spr-dropdown
    id="dropdown23"
    v-model="dropdownModel.dropdown23"
    :menu-list="menuList"
    width="50%"
    popper-width="200px"
    @update:model-value="(value) => handleSelectedItem(value, 'single', 'inputText8')"
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
    @update:model-value="handleSelectedItem"
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

const handleSelectedItem = (selectedItem) => {
  inputTextModel.value = menuList.value.find((item) => item.value === selectedItem[0]).text;
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

::: info Important to note:
Do not forget to pass prop `wrapperPosition` to overwrite `relative` position into `initial`.
:::

<spr-button tone="success" @click="modalModel = true">Open Modal</spr-button>

<spr-modal v-model="modalModel" title="Dropdown with Modal">
   <spr-dropdown
    id="dropdown27"
    v-model="dropdownModel.dropdown27"
    :menu-list="menuList"
    wrapper-position="initial"
    popper-stategy="fixed"
    @update:model-value="handleSelectedItem($event, 'single', 'inputText27')"
  >
    <spr-input
      v-model="inputTextModel.inputText27"
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
    <spr-dropdown
      id="sample-dropdown"
      v-model="dropdownModel"
      :menu-list="menuList"
      wrapper-position="initial"
      popper-stategy="fixed"
      @update:model-value="handleSelectedItem"
    >
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

const dropdownModel = ref([]);
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

const handleSelectedItem = (selectedItem) => {
  inputTextModel.value[inputModel] = menuList.value.find((item) => item.value === selectedItem[0]).text;
};
</script>
```

## Infinite Scroll

Infinite scroll allows the dropdown list to load more items as the user scrolls, this feature is particularly for back-end api integration. Instead of loading the entire list at once, new items are dynamically added as needed, improving performance and usability. Pass `@infinite-scroll-trigger` emit to get the trigger of menu when it reaches bottom.

<div>
  <spr-dropdown
    id="dropdown28"
    v-model="dropdownModel.dropdown28"
    :menu-list="paginatedMenuList"
    @update:model-value="(value) => handleSelectedItem(value, 'single', 'inputText28')"
    @infinite-scroll-trigger="handleInfiniteScrollTrigger"
  >
    <spr-input
      v-model="inputTextModel.inputText28"
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

const APIisLoading = ref(false);

const pagination = ref({
  totalpages: 10,
  currentPage: 1,
});

const handleInfiniteScrollTrigger = () => {
  if (pagination.value.currentPage === pagination.value.totalpages || APIisLoading.value) return;

  APIisLoading.value = true;
  pagination.value.currentPage += 1;

  getGhibliFilms();
};

const getGhibliFilms = async () => {
  try {
    const response = await fetch('https://ghibliapi.vercel.app/films');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const options = await response.json();

    paginatedMenuList.value = options.length
      ? [
          ...(paginatedMenuList.value || []),
          ...options.map((option: { id: string; original_title_romanised: string }) => ({
            text: option.original_title_romanised,
            value: option.id.replace(/\s+/g, ''),
          })),
        ]
      : [];

    APIisLoading.value = false;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};
</script>
```

## Ladderized Dropdown

Ladderized dropdown utilizes the [Ladderized List](./list#ladderized-list) component to display the dropdown items in a hierarchical manner. The `v-model` prop is an array of strings representing order of selected items per level.

<div>
  <spr-dropdown id="dropdown28" :menu-list="mockDropdownData" v-model="dropdownModel.dropdown28" :ladderized="true" @update:model-value="handleLadderizedDropdown">
    <spr-input v-model="inputTextModel.inputText28" label="Ladderized Dropdown" placeholder="Select item..." />
  </spr-dropdown>
</div>

```vue
<template>
  <div>
    <spr-dropdown
      id="dropdown28"
      :menu-list="mockDropdownData"
      v-model="dropdownModel"
      :ladderized="true"
      @update:model-value="handleLadderizedDropdown"
    >
      <spr-input v-model="inputTextModel" label="Ladderized Dropdown" placeholder="Select item..." />
    </spr-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const dropdownModel = ref([]);
const inputTextModel = ref('');

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

const handleLadderizedDropdown = (value) => {
  let tempValue: string[] = [];
  let tempMenuList: MenuListType[] = mockDropdownData;

  value.forEach((item) => {
    const activeItem = tempMenuList.find((listItem) => item === listItem.value);

    if (activeItem) {
      tempValue.push(activeItem.text);
      if (activeItem.sublevel) {
        tempMenuList = activeItem.sublevel;
      }
    }
  });

  inputTextModel.value.inputText28 = tempValue.join(', ');
};
</script>
```

## Ladderized Dropdown Search

Ladderized dropdown search allows users to filter items in a hierarchical manner. This feature is particularly useful when dealing with large datasets, as it enables users to quickly locate specific items within nested structures. Can be used if the `ladderized` prop is set to `true` and `searchString` prop has a value.

::: danger LIMITATION
Ladderized dropdown search does not support multi-select and can only search through two hierarchical levels (root level and sublevel).
:::

<div>
  <spr-dropdown id="dropdown28" :menu-list="mockDropdownData" v-model="dropdownModel.dropdown28" :ladderized="true" :search-string="inputTextModel.inputText28" @update:model-value="handleLadderizedDropdown">
    <spr-input v-model="inputTextModel.inputText28" label="Ladderized Dropdown" placeholder="Select item..." />
  </spr-dropdown>
</div>

```vue {7-8}
<template>
  <div>
    <spr-dropdown
      id="dropdown28"
      :menu-list="mockDropdownData"
      v-model="dropdownModel"
      :ladderized="true"
      :search-string="inputTextModel"
      @update:model-value="handleLadderizedDropdown"
    >
      <spr-input v-model="inputTextModel" label="Ladderized Dropdown" placeholder="Select item..." />
    </spr-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const dropdownModel = ref([]);
const inputTextModel = ref('');

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
          // [!code error]cannot be searched
          {
            // [!code error]
            text: 'Cub 1', // [!code error]
            value: 'cub1', // [!code error]
          }, // [!code error]
          {
            // [!code error]
            text: 'Cub 2', // [!code error]
            value: 'cub2', // [!code error]
          }, // [!code error]
        ], // [!code error]
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

const handleLadderizedDropdown = (value) => {
  let tempValue: string[] = [];
  let tempMenuList: MenuListType[] = mockDropdownData;

  value.forEach((item) => {
    const activeItem = tempMenuList.find((listItem) => item === listItem.value);

    if (activeItem) {
      tempValue.push(activeItem.text);
      if (activeItem.sublevel) {
        tempMenuList = activeItem.sublevel;
      }
    }
  });

  inputTextModel.value = tempValue.join(', ');
};
</script>
```

## Disabled, Active & Readonly

This is only applicable to selected components, such as form input fields. You can learn more in the <a href='/documentation/components/input.html' target='_blank'>Input Form</a>.

To disable the popper from showing when the wrapper is clicked, pass the disabled prop.

## Supported Value Types

The dropdown component supports various types of values for both single and multi-selection. The `v-model` binding can accept different data formats depending on your needs.

### Single Primitive Values

For single selection of primitive types like strings or numbers:

<div>
  <spr-dropdown
    id="dropdown-number"
    v-model="stringValue"
    :menu-list="stringMenuList"
    @update:model-value="handleStringSelection"
  >
    <spr-input v-model="stringDisplay" label="String Selection" readonly placeholder="Select a fruit..." />
  </spr-dropdown>
</div>

Value: {{ stringValue }}

<div>
  <spr-dropdown
    id="number-dropdown"
    v-model="numberValue"
    :menu-list="numberMenuList"
    @update:model-value="handleNumberSelection"
  >
    <spr-input v-model="numberDisplay" label="Number Selection" readonly placeholder="Select a number..." />
  </spr-dropdown>
</div>

Value: {{ numberValue }}

```vue
<template>
  <spr-dropdown
    id="string-dropdown"
    v-model="stringValue"
    :menu-list="stringMenuList"
    @update:model-value="handleStringSelection"
  >
    <spr-input v-model="stringDisplay" label="String Selection" readonly placeholder="Select a fruit..." />
  </spr-dropdown>

  <spr-dropdown
    id="number-dropdown"
    v-model="numberValue"
    :menu-list="numberMenuList"
    @update:model-value="handleNumberSelection"
  >
    <spr-input v-model="numberDisplay" label="Number Selection" readonly placeholder="Select a number..." />
  </spr-dropdown>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// For string values
const stringValue = ref('apple'); // Single string value
const stringDisplay = ref('Apple');

// For number values
const numberValue = ref(42); // Single number value
const numberDisplay = ref('42');

const stringMenuList = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
]);

const numberMenuList = ref([
  { text: '42', value: 42 },
  { text: '100', value: 100 },
  { text: '200', value: 200 },
]);

const handleStringSelection = () => {
  const selected = stringMenuList.value.find((item) => item.value === stringValue.value);
  stringDisplay.value = selected ? selected.text : '';
};

const handleNumberSelection = () => {
  const selected = numberMenuList.value.find((item) => item.value === numberValue.value);
  numberDisplay.value = selected ? selected.text : '';
};
</script>
```

### Single Object Values

For single selection of full objects:

<div>
  <spr-dropdown
    id="object-dropdown"
    v-model="selectedUser"
    :menu-list="userList"
    text-field="name"
    value-field="id"
    @update:model-value="handleUserSelection"
  >
    <spr-input v-model="userDisplay" label="User Selection" readonly placeholder="Select a user..." />
  </spr-dropdown>
</div>

Value: {{ selectedUser }}

```vue
<template>
  <spr-dropdown
    id="object-dropdown"
    v-model="selectedUser"
    :menu-list="userList"
    text-field="name"      <!-- Specify which field to display as text -->
    value-field="id"       <!-- Specify which field to use as value -->
    @update:model-value="handleUserSelection"
  >
    <spr-input v-model="userDisplay" label="User Selection" readonly placeholder="Select a user..." />
  </spr-dropdown>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// Object selection using full object reference
const selectedUser = ref({ id: 1, name: 'John', role: 'Developer' });
const userDisplay = ref('John');

const userList = ref([
  { id: 1, name: 'John', role: 'Developer' },
  { id: 2, name: 'Jane', role: 'Designer' },
  { id: 3, name: 'Bob', role: 'Manager' }
]);

const handleUserSelection = () => {
  // When using full objects, the display value should be updated
  userDisplay.value = selectedUser.value.name;
};
</script>
```

### Multiple Primitive Values

For multi-selection of primitive types like strings or numbers:

<div>
  <spr-dropdown
    id="multi-string-dropdown"
    v-model="selectedFruits"
    :menu-list="fruitList"
    multi-select
    @update:model-value="handleFruitsSelection"
  >
    <spr-input v-model="fruitsDisplay" label="Fruits Selection" readonly placeholder="Select fruits..." />
  </spr-dropdown>

Value: {{ selectedFruits }} (Fruits)

</div>
<div>
  <spr-dropdown
    id="multi-number-dropdown"
    v-model="selectedNumbers"
    :menu-list="numbersList"
    multi-select
    @update:model-value="handleNumbersSelection"
  >
    <spr-input v-model="numbersDisplay" label="Numbers Selection" readonly placeholder="Select numbers..." />
  </spr-dropdown>

Value: {{ selectedNumbers }} (Numbers)

</div>

```vue
<template>
  <spr-dropdown
    id="multi-string-dropdown"
    v-model="selectedFruits"
    :menu-list="fruitList"
    multi-select
    @update:model-value="handleFruitsSelection"
  >
    <spr-input v-model="fruitsDisplay" label="Fruits Selection" readonly placeholder="Select fruits..." />
  </spr-dropdown>

  <spr-dropdown
    id="multi-number-dropdown"
    v-model="selectedNumbers"
    :menu-list="numbersList"
    multi-select
    @update:model-value="handleNumbersSelection"
  >
    <spr-input v-model="numbersDisplay" label="Numbers Selection" readonly placeholder="Select numbers..." />
  </spr-dropdown>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// Multiple string values
const selectedFruits = ref(['apple', 'banana']); // Array of strings
const fruitsDisplay = ref('Apple, Banana');

// Multiple number values
const selectedNumbers = ref([1, 2, 3]); // Array of numbers
const numbersDisplay = ref('1, 2, 3');

const fruitList = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
  { text: 'Date', value: 'date' },
]);

const numbersList = ref([
  { text: '1', value: 1 },
  { text: '2', value: 2 },
  { text: '3', value: 3 },
  { text: '4', value: 4 },
]);

const handleFruitsSelection = () => {
  const selectedTexts = selectedFruits.value.map((value) => {
    const item = fruitList.value.find((fruit) => fruit.value === value);
    return item ? item.text : '';
  });
  fruitsDisplay.value = selectedTexts.filter(Boolean).join(', ');
};

const handleNumbersSelection = () => {
  const selectedTexts = selectedNumbers.value.map((value) => {
    const item = numbersList.value.find((num) => num.value === value);
    return item ? item.text : '';
  });
  numbersDisplay.value = selectedTexts.filter(Boolean).join(', ');
};
</script>
```

### Multiple Object Values

For multi-selection of full objects:

<div>
  <spr-dropdown
    id="multi-object-dropdown"
    v-model="selectedUsers"
    :menu-list="usersList"
    text-field="name"
    value-field="id"
    multi-select
    @update:model-value="handleUsersSelection"
  >
    <spr-input v-model="usersDisplay" label="Team Members" readonly placeholder="Select team members..." />
  </spr-dropdown>
</div>

```vue
<template>
  <spr-dropdown
    id="multi-object-dropdown"
    v-model="selectedUsers"
    :menu-list="usersList"
    text-field="name"
    value-field="id"
    multi-select
    @update:model-value="handleUsersSelection"
  >
    <spr-input v-model="usersDisplay" label="Team Members" readonly placeholder="Select team members..." />
  </spr-dropdown>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// Multiple object values
const selectedUsers = ref([
  { id: 1, name: 'John', role: 'Developer' },
  { id: 2, name: 'Jane', role: 'Designer' },
]);
const usersDisplay = ref('John, Jane');

const usersList = ref([
  { id: 1, name: 'John', role: 'Developer' },
  { id: 2, name: 'Jane', role: 'Designer' },
  { id: 3, name: 'Bob', role: 'Manager' },
  { id: 4, name: 'Alice', role: 'Product Owner' },
]);

const handleUsersSelection = () => {
  console.log('Selected Users:', selectedUsers.value);
  // When using full objects, extract the display names
  const names = selectedUsers.value.map((user) => user.name);
  usersDisplay.value = names.join(', ');
};
</script>
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
      <td>Required to bind popper within the datepicker</td>
      <td>Array</td>
      <td>-</td>
    </tr>
    <tr>
      <td>v-model</td>
      <td>Value binding for the dropdown. Accepts:<br>
        <ul>
          <li><b>Single primitive values:</b> String ('apple'), Number (42)</li>
          <li><b>Single object values:</b> Full objects ({ id: 1, name: 'John' })</li>
          <li><b>Multiple primitive values:</b> Array of strings (['apple', 'banana']), Array of numbers ([1, 2, 3])</li>
          <li><b>Multiple object values:</b> Array of objects ([{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }])</li>
        </ul>
        The returned value type will match the input type (preserving strings, numbers, and objects).
      </td>
      <td>String | Number | Object | Array</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>menu-list</td>
      <td>List of options composed of `text` and `value` properties</td>
      <td>MenuListType[] (see <a href='/documentation/components/list.html' target='_blank'>List</a>)</td>
      <td>[]</td>
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
      <td>popper-inner-width</td>
      <td>Width of the dropdown menu inner content</td>
      <td>String</td>
      <td>unset</td>
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
      <td>disabled</td>
      <td>If set, allows to disabled popper on click to the wrapper</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>search-string</td>
      <td>Search string to filter the dropdown list</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>ladderized</td>
      <td>If set, allows to display dropdown items in a hierarchical manner.</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>remove-current-level-in-back-label</td>
      <td>Defines whether the back label in the ladderized list will exclude the current level</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>noCheckInList</td>
      <td>Disables the display of check for singe list dropdown menu.</td>
      <td>Boolean</td>
      <td>false</td>
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

## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark"  width="50px" />
  <spr-logo name="payroll" theme="dark"  width="50px" />
  <spr-logo name="sidekick" theme="dark" width="50px" />
</div>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

import SprInput from "@/components/input/input.vue";
import SprDropdown from "@/components/dropdown/dropdown.vue";
import SprButton from "@/components/button/button.vue";
import SprChips from "@/components/chips/chips.vue";
import SprLozenge from "@/components/lozenge/lozenge.vue"
import SprModal from "@/components/modal/modal.vue"
import SprLogo from "@/components/logo/logo.vue";
import DropdownNumberMultiSelect from "@/examples/dropdown-number-multi-select.vue";

// Import MenuListType for typing
import type { MenuListType } from '@/components/list/list';

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

const mockDropdownData: MenuListType[] = [
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

const dropdownModel = ref({
  dropdown1: [],
  dropdown2: [],
  dropdown3: [],
  dropdown4: [],
  dropdown5: ['apple'],
  dropdown6: ['date', 'fig', 'orange'],
  dropdown7: [],
  dropdown8: [],
  dropdown9: [],
  dropdown10: [],
  dropdown11: [],
  dropdown12: [],
  dropdown13: [],
  dropdown14: [],
  dropdown15: [],
  dropdown16: [],
  dropdown17: [],
  dropdown18: [],
  dropdown19: [],
  dropdown20: [],
  dropdown21: [],
  dropdown22: [],
  dropdown23: [],
  //Skip 24, 25, 26
  dropdown27: [],
  dropdown28: [],
})

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
  inputText21: "",
  inputText22: "",
  inputText23: "",
  //Skip 24, 25, 26
  inputText27: "",
  inputText28: "",
});

// For string values
const stringValue = ref('apple');  // Single string value
const stringDisplay = ref('Apple');

// For number values
const numberValue = ref(42);  // Single number value
const numberDisplay = ref('42');

const stringMenuList = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' }
]);

const numberMenuList = ref([
  { text: '42', value: 42 },
  { text: '100', value: 100 },
  { text: '200', value: 200 }
]);

const handleStringSelection = () => {
  const selected = stringMenuList.value.find(item => item.value === stringValue.value);
  stringDisplay.value = selected ? selected.text : '';
};

const handleNumberSelection = () => {
  const selected = numberMenuList.value.find(item => item.value === numberValue.value);
  numberDisplay.value = selected ? selected.text : '';
};

onMounted(() => {
  handleSelectedItem(dropdownModel.value.dropdown5, 'single', 'inputText5');
  handleSelectedItem(dropdownModel.value.dropdown6, 'multi', 'inputText6');
});

const modalModel = ref(false);

const handleSelectedItem = (selectedItem, dropdownType, inputModel) => {
  if (dropdownType === 'single') {
    // Properly handle single value selections regardless of format
    const value = Array.isArray(selectedItem) ? selectedItem[0] : selectedItem;
    const selected = menuList.value.find(item => item.value === value);
    inputTextModel.value[inputModel] = selected ? selected.text : '';
  }

  if (dropdownType === 'multi') {
    // Handle multi-select properly ensuring we look up each value
    const selectedTexts = selectedItem.map(item => {
      const menuItem = menuList.value.find(menuItem => menuItem.value === item);
      return menuItem ? menuItem.text : '';
    }).filter(Boolean).join(', ');

    inputTextModel.value[inputModel] = selectedTexts;
  }
}

const APIisLoading = ref(false);

// Define pagination object for infinite scroll example
const pagination = ref({
  totalpages: 10,
  currentPage: 1,
});

/**
 * Handler for infinite scroll trigger
 * This is called when the user scrolls to the bottom of the dropdown list
 */
const handleInfiniteScrollTrigger = () => {
  // Don't load more if we're already at the last page or loading
  if (pagination.value.currentPage === pagination.value.totalpages || APIisLoading.value) return;

  // Set loading state and increment page
  APIisLoading.value = true;
  pagination.value.currentPage += 1;

  // Fetch more data
  getGhibliFilms();
}

const getGhibliFilms = async () => {
  try {
    const response = await fetch('https://ghibliapi.vercel.app/films');
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const options = await response.json();

    paginatedMenuList.value = options.length
      ? [
          ...(paginatedMenuList.value || []),
          ...options.map((option: { id: string; original_title_romanised: string }) => ({
            text: option.original_title_romanised,
            value: option.id.replace(/\s+/g, ''),
          })),
        ]
      : [];

    APIisLoading.value = false;
    
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

const handleLadderizedDropdown = (value) => {
  let tempValue: string[] = [];
  let tempMenuList: MenuListType[] = mockDropdownData;

  // For ladderized dropdown, we iterate through the value path array
  value.forEach((item) => {
    const activeItem = tempMenuList.find((listItem) => item === listItem.value);

    if (activeItem) { 
      tempValue.push(activeItem.text);
      // Move to the sublevel for the next iteration if it exists
      if (activeItem.sublevel) {
        tempMenuList = activeItem.sublevel;
      }
    }
  });

  // Update the input display text with the path representation
  inputTextModel.value.inputText28 = tempValue.join(" > ");
};

// Object selection using full object reference
const selectedUser = ref({ id: 1, name: 'John', role: 'Developer' });
const userDisplay = ref('John');

const userList = ref([
  { id: 1, name: 'John', role: 'Developer' },
  { id: 2, name: 'Jane', role: 'Designer' },
  { id: 3, name: 'Bob', role: 'Manager' }
]);


// Multiple string values
const selectedFruits = ref(['apple', 'banana']);  // Array of strings
const fruitsDisplay = ref('Apple, Banana');

// Multiple number values
const selectedNumbers = ref([1, 2, 3]);  // Array of numbers
const numbersDisplay = ref('1, 2, 3');

const fruitList = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
  { text: 'Date', value: 'date' },
]);

const numbersList = ref([
  { text: '1', value: 1 },
  { text: '2', value: 2 },
  { text: '3', value: 3 },
  { text: '4', value: 4 },
]);

const handleFruitsSelection = () => {
  const selectedTexts = selectedFruits.value.map(value => {
    const item = fruitList.value.find(fruit => fruit.value === value);
    return item ? item.text : '';
  });
  fruitsDisplay.value = selectedTexts.filter(Boolean).join(', ');
};

const handleNumbersSelection = () => {
  const selectedTexts = selectedNumbers.value.map(value => {
    const item = numbersList.value.find(num => num.value === value);
    return item ? item.text : '';
  });
  numbersDisplay.value = selectedTexts.filter(Boolean).join(', ');
};

const handleUserSelection = () => {
  // When using full objects, the display value should be updated
  userDisplay.value = selectedUser.value.name;
};

// Multiple object values
const selectedUsers = ref([
  { id: 1, name: 'John', role: 'Developer' },
  { id: 2, name: 'Jane', role: 'Designer' }
]);
const usersDisplay = ref('John, Jane');

const usersList = ref([
  { id: 1, name: 'John', role: 'Developer' },
  { id: 2, name: 'Jane', role: 'Designer' },
  { id: 3, name: 'Bob', role: 'Manager' },
  { id: 4, name: 'Alice', role: 'Product Owner' }
]);

const handleUsersSelection = () => {
  console.log('Selected Users:', selectedUsers.value);
  // When using full objects, extract the display names
  const names = selectedUsers.value.map(user => user.name);
  usersDisplay.value = names.join(', ');
};
</script>
