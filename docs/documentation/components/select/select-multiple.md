---
title: Ladderized Select
outline: deep
---

# Multi Select

The Multi Select component allows users to select multiple options from a select list. It is useful for scenarios where users need to choose more than one item from a predefined set of options.

## Basic Usage

<div class="spr-grid spr-gap-4">
  <spr-select-multiple
    id="sample-selectBasic"
    v-model="selectModel.selectBasic"
    label="Multi-Select Label"
    placeholder="Select an option"
    :options="options"
  />

  <code class="spr-font-medium">
    V-Model: {{ selectModel.selectBasic }}
  </code>
</div>

```vue
<template>
  id="sample-select" v-model="selectBasic" label="Multi-Select Label" placeholder="Select an option" :options="options"
  />

  <script lang="ts" setup>
    import { ref } from 'vue';

    const selectBasic = ref([]); // Use an array for multi-select
    const options = ref([
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
</template>
```

## Chipped

<div class="spr-grid spr-gap-4">
  <spr-select-multiple
    id="sample-selectChipped"
    v-model="selectModel.selectChipped"
    label="Multi-Select Label"
    placeholder="Select an option"
    :options="options"
    chipped
  />

  <code class="spr-font-medium">
    V-Model: {{ selectModel.selectChipped }}
  </code>
</div>

```vue
<template>
  <spr-select-multiple
    id="sample-select"
    v-model="selectChipped"
    label="Multi-Select Label"
    placeholder="Select an option"
    :options="options"
  />
</template>
```

## Grouped Items By

You can group items by `default`, `A-Z` or `Z-A` order by passing the `group-items-by` prop and specifying the desired grouping type.

<div class="spr-grid spr-gap-4">
  <spr-select-multiple
    id="sample-selectGroupedItemsBy"
    v-model="selectModel.selectGroupedItemsBy"
    label="Multi-Select Label"
    placeholder="Select an option"
    :options="options"
    group-items-by="A-Z"
  />
</div>

```vue
<template>
  <div class="spr-grid spr-gap-4">
    <spr-select-multiple
      id="sample-select"
      v-model="selectGroupedItemsBy"
      label="Multi-Select Label"
      placeholder="Select an option"
      :options="options"
      group-items-by="A-Z"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectGroupedItemsBy = ref([]); // Use an array for multi-select
const options = ref([
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

## Pre-Selected Items

Pre-selected items are options that are automatically selected when the select is first displayed. For multi-select, the `v-model` should be an array of values (strings, numbers, or objects) that match the `value` field of your options.

<div class="spr-grid spr-gap-4">
  <spr-select-multiple
    id="sample-selectPreSelectedItems"
    v-model="selectModel.selectPreSelectedItems"
    label="Select Fruits"
    placeholder="Select one or more fruits"
    :options="options"
    group-items-by="A-Z"
    text-field="text"
    value-field="value"
  />
  
  <code class="spr-font-medium">
    V-Model: {{ selectModel.selectPreSelectedItems ? selectModel.selectPreSelectedItems : `[]` }}
  </code>
</div>

```vue
<template>
  <spr-select-multiple
    id="sample-select"
    v-model="selectPreSelectedItems"
    label="Select Fruits"
    placeholder="Select one or more fruits"
    :options="options"
    group-items-by="A-Z"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// Pre-select multiple items by passing an array of values
const selectPreSelectedItems = ref(['100', 200, 'cherry']);
const options = ref([
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
  { text: 'One Hundred', value: '100' },
  { text: 'Two Hundred', value: 200 },
  { text: 'Lemon', value: 'lemon' },
  { text: 'Mango', value: 'mango' },
  { text: '300', value: '300' },
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
</script>
```

You can also pre-select items using an array of objects if your options uses objects as values. The component will match by value or by object reference as needed.

> **Note:**
>
> - If you want to start with no selection, use an empty array: `ref([])`.
> - If you want to pre-select all items, use the full array of values from your options.
> - The component will now always treat the model as an array for multi-select, so toggling and pre-selection will work as expected.

## Search

The search feature allows users to quickly filter and find specific items within the select list by typing in a search query.

- Use the `searchable-options` prop to enable the search input within the select component.

<div class="spr-grid spr-gap-4">
  <spr-select-multiple
    id="sample-selectSearch"
    v-model="selectModel.selectSearch"
    label="Select Label"
    placeholder="Select an option"
    :options="options"
    searchable
  />

  <code class="spr-font-medium">
    V-Model: {{ selectModel.selectSearch ? selectModel.selectSearch : `[]` }}
  </code>
</div>

```vue
<template>
  <spr-select-multiple
    id="sample-select"
    v-model="selectModel"
    label="Select Label"
    placeholder="Select an option"
    :options="options"
    searchable
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectModel = ref('');

const options = ref([
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

You can disable local search by passing the `disabled-local-search` prop. This is useful when you want to handle search via API only, and not filter the options locally.

Use `@searchString` emit to get the search string when the user types in the search input. This allows you to handle the search logic externally, such as fetching options from an API based on the search query.

<div class="spr-grid spr-gap-4">
  <spr-select-multiple
    id="sample-selectSearchDisabledLocalSearch"
    v-model="selectModel.selectSearchDisabledLocalSearch"
    label="Select Label"
    placeholder="Select an option"
    :options="options"
    searchable
    disabled-local-search
  />
  
  <code class="spr-font-medium">
    V-Model: {{ selectModel.selectSearchDisabledLocalSearch ? selectModel.selectSearchDisabledLocalSearch : `[]` }}
  </code>
</div>

```vue
<template>
  <spr-select-multiple
    id="sample-select"
    v-model="selectModel"
    label="Select Label"
    placeholder="Select an option"
    :options="options"
    searchable
    disabled-local-search
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectModel = ref('');

const options = ref([
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

You can disable local search by passing the `disabled-local-search` prop. This is useful when you want to handle search via API only, and not filter the options locally.

Use `@searchString` emit to get the search string when the user types in the search input. This allows you to handle the search logic externally, such as fetching options from an API based on the search query.

<div class="spr-grid spr-gap-4">
  <spr-select-multple
    id="sample-selectSearchDisabledLocalSearch"
    v-model="selectModel.selectSearchDisabledLocalSearch"
    label="Select Label"
    placeholder="Select an option"
    :options="options"
    searchable
    disabled-local-search
  />
  
  <code class="spr-font-medium">
    V-Model: {{ selectModel.selectSearchDisabledLocalSearch ? selectModel.selectSearchDisabledLocalSearch : `""` }}
  </code>
</div>

```vue
<template>
  <spr-select-multple
    id="sample-select"
    v-model="selectModel"
    label="Select Label"
    placeholder="Select an option"
    :options="options"
    searchable
    disabled-local-search
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectModel = ref('');

const options = ref([
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

## Placements

Placement refers to where the select popper will be positioned relative to its trigger element (e.g., button, input field). Pass the `placement` props to modify the placement of the select popper.

The available placement options are: `auto`, `auto-start`, `auto-end`, `top`, `top-start`, `top-end`, `right`, `right-start`, `right-end`, `bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, and `left-end`.

The default placement is `bottom`.

<div class="spr-grid spr-gap-4">
  <div class="spr-flex spr-gap-4">
    <spr-select-multiple
      id="sample-selectPlacements"
      v-model="selectModel.selectPlacements"
      label="Auto"
      placeholder="Select an option"
      :options="options"
      placement="auto"
      popper-width="200px"
    />
    <spr-select-multiple
      id="sample-selectPlacements"
      v-model="selectModel.selectPlacements"
      label="Auto Start"
      placeholder="Select an option"
      :options="options"
      placement="auto-start"
      popper-width="200px"
    />
    <spr-select-multiple
      id="sample-selectPlacements"
      v-model="selectModel.selectPlacements"
      label="Auto End"
      placeholder="Select an option"
      :options="options"
      placement="auto-end"
      popper-width="200px"
    />
  </div>
  <div class="spr-flex spr-gap-4">
    <spr-select-multiple
      id="sample-selectPlacements"
      v-model="selectModel.selectPlacements"
      label="Top"
      placeholder="Select an option"
      :options="options"
      placement="top"
      popper-width="200px"
    />
    <spr-select-multiple
      id="sample-selectPlacements"
      v-model="selectModel.selectPlacements"
      label="Top Start"
      placeholder="Select an option"
      :options="options"
      placement="top-start"
      popper-width="200px"
    />
    <spr-select-multiple
      id="sample-selectPlacements"
      v-model="selectModel.selectPlacements"
      label="Top End"
      placeholder="Select an option"
      :options="options"
      placement="top-end"
      popper-width="200px"
    />
  </div>
  <div class="spr-flex spr-gap-4">
    <spr-select-multiple
      id="sample-selectPlacements"
      v-model="selectModel.selectPlacements"
      label="Right"
      placeholder="Select an option"
      :options="options"
      placement="right"
      popper-width="200px"
    />
    <spr-select-multiple
      id="sample-selectPlacements"
      v-model="selectModel.selectPlacements"
      label="Right Start"
      placeholder="Select an option"
      :options="options"
      placement="right-start"
      popper-width="200px"
    />
    <spr-select-multiple
      id="sample-selectPlacements"
      v-model="selectModel.selectPlacements"
      label="Right End"
      placeholder="Select an option"
      :options="options"
      placement="right-end"
      popper-width="200px"
    />
  </div>
  <div class="spr-flex spr-gap-4">
    <spr-select-multiple
      id="sample-selectPlacements"
      v-model="selectModel.selectPlacements"
      label="Bottom"
      placeholder="Select an option"
      :options="options"
      placement="bottom"
      popper-width="200px"
    />
    <spr-select-multiple
      id="sample-selectPlacements"
      v-model="selectModel.selectPlacements"
      label="Bottom Start"
      placeholder="Select an option"
      :options="options"
      placement="bottom-start"
      popper-width="200px"
    />
    <spr-select-multiple
      id="sample-selectPlacements"
      v-model="selectModel.selectPlacements"
      label="Bottom End"
      placeholder="Select an option"
      :options="options"
      placement="bottom-end"
      popper-width="200px"
    />
  </div>
  <div class="spr-flex spr-gap-4">
    <spr-select-multiple
      id="sample-selectPlacements"
      v-model="selectModel.selectPlacements"
      label="Left"
      placeholder="Select an option"
      :options="options"
      placement="left"
      popper-width="200px"
    />
    <spr-select-multiple
      id="sample-selectPlacements"
      v-model="selectModel.selectPlacements"
      label="Left Start"
      placeholder="Select an option"
      :options="options"
      placement="left-start"
      popper-width="200px"
    />
    <spr-select-multiple
      id="sample-selectPlacements"
      v-model="selectModel.selectPlacements"
      label="Left End"
      placeholder="Select an option"
      :options="options"
      placement="left-end"
      popper-width="200px"
    />
  </div>
</div>

## Clearable

The clearable feature allows users to easily remove the selected value from the select input. This is particularly useful for forms where users may want to reset their selection without having to open the select.

<div class="spr-grid spr-gap-4">
  <spr-select-multiple
    id="sample-selectClearable"
    v-model="selectModel.selectClearable"
    label="Multi-Select Label"
    placeholder="Select an option"
    :options="options"
    clearable
  />

  <code class="spr-font-medium">
    V-Model: {{ selectModel.selectClearable ? selectModel.selectClearable : `""` }}
  </code>
</div>

## Width and Popper Width

You can modify the width of the select component in two ways: by adjusting the width of the select wrapper or by changing the width of the select popper.

`Width` - Is the overall width wrapper of both parent element and popper element.

`Popper Width` - Width of only popper element

<div>
  <spr-select-multiple
    id="sample-selectWidth"
    v-model="selectModel.selectWidth"
    label="Multi-Select Label"
    placeholder="Select an option"
    :options="options"
    width="50%"
    popper-width="200px"
  />
</div>

```vue
<template>
  <spr-select-multiple
    id="sample-select"
    v-model="selectModel"
    label="Multi-Select Label"
    placeholder="Select an option"
    :options="options"
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
   <spr-select-multiple
    id="sample-selectStrategy-modal"
    v-model="selectModel.selectStrategy"
    label="Multi-Select Label"
    placeholder="Select an option"
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
    <spr-select-multiple
      id="sample-select"
      v-model="selectModel"
      label="Multi-Select Label"
      placeholder="Select an option"
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

## Active, Disabled, Error States

For guidance on implementing error, active, and disabled states in the select component, you can refer to the documentation for the input text component, as the approach is similar. See the [Input Form](/documentation/components/input.html) for detailed instructions.

### Active State

<div>
  <spr-select-multiple
    id="sample-select"
    v-model="selectModel.selectActiveState"
    label="Select Label"
    placeholder="Select an option"
    :options="options"
    active
  />
</div>

```vue
<template>
  <spr-select-multiple
    id="sample-select"
    v-model="selectModel"
    label="Select Label"
    placeholder="Select an option"
    :options="options"
    active
  />
</template>
```

### Disabled State

<div>
  <spr-select-multiple
    id="sample-select"
    v-model="selectModel.selectDisabledState"
    label="Select Label"
    placeholder="Select an option"
    :options="options"
    disabled
  />
</div>

```vue
<template>
  <spr-select-multiple
    id="sample-select"
    v-model="selectModel"
    label="Select Label"
    placeholder="Select an option"
    :options="options"
    disabled
  />
</template>
```

### Error State

<div>
  <spr-select-multiple
    id="sample-select"
    v-model="selectModel.selectErrorState"
    label="Select Label"
    placeholder="Select an option"
    :options="options"
    error
  />
</div>

```vue
<template>
  <spr-select-multiple
    id="sample-select"
    v-model="selectModel"
    label="Select Label"
    placeholder="Select an option"
    :options="options"
    error
  />
</template>
```

## Helper Message

A helper message is a text label below the input field that provides additional information about instructions, formatting hints, validation feedback, etc.

To display the helper message, set the `display-helper` prop to `true` and add the `helper-text` prop with the helper message text. You can also insert an icon with the `helper-icon` prop. This uses the [Iconify](https://icon-sets.iconify.design/) icon library.

<div class="spr-grid spr-gap-8">
  <spr-select-multiple
    id="sample-select"
    v-model="selectModel.selectErrorState"
    label="Select Label"
    placeholder="Select an option"
    :options="options"
    helper-text="This is a helper message"
    display-helper
  />
  <spr-select-multiple
    id="sample-select"
    v-model="selectModel.selectErrorState"
    label="Select Label"
    placeholder="Select an option"
    :options="options"
    helper-text="This is an error message"
    helper-icon="ph:warning-circle-fill"
    display-helper
    error
  />
</div>

```vue
<template>
  <spr-select-multiple
    id="sample-select"
    v-model="selectModel"
    label="Select Label"
    placeholder="Select an option"
    :options="options"
    helper-text="This is a helper message"
    display-helper
  />

  <spr-select-multiple
    id="sample-select"
    v-model="selectModel"
    label="Select Label"
    placeholder="Select an option"
    :options="options"
    helper-text="This is an error message"
    helper-icon="ph:warning-circle-fill"
    display-helper
    error
  />
</template>
```

Alternatively, you can use the `helperMessage` slot to display a custom helper message.

<div class="spr-grid spr-gap-8">
  <spr-select-multiple
    id="sample-select"
    v-model="selectModel.selectErrorState"
    label="Select Label"
    placeholder="Select an option"
    :options="options"
    display-helper
  >
    <template #helperMessage>This is a helper message</template>
  </spr-select-multiple>
  <spr-select-multiple
    id="sample-select"
    v-model="selectModel.selectErrorState"
    label="Select Label"
    placeholder="Select an option"
    :options="options"
    display-helper
    error
  >
    <template #helperMessage>
      <icon icon="ph:warning-circle-fill" width="20px" height="20px" />
      <span>This is an error message</span>
    </template>
  </spr-select-multiple>
</div>

```vue
<template>
  <spr-select-multiple
    id="sample-select"
    v-model="selectModel"
    label="Select Label"
    placeholder="Select an option"
    :options="options"
    display-helper
  >
    <template #helperMessage>This is a helper message</template>
  </spr-select-multiple>

  <spr-select-multiple
    id="sample-select"
    v-model="selectModel"
    label="Select Label"
    placeholder="Select an option"
    :options="options"
    display-helper
    error
  >
    <template #helperMessage>
      <icon icon="ph:warning-circle-fill" width="20px" height="20px" />
      <span>This is an error message</span>
    </template>
  </spr-select-multiple>
</template>
```

## Supported Value Types

The `spr-select-multiple` component supports multiple value types for selection. **For multi-select, always use an array for `v-model`**, regardless of whether your values are strings, numbers, or objects. The component normalizes single values to an array internally, but it is best practice to use an array from the start.

### Multiple String Values

```vue
<template>
  <spr-select-multiple
    id="string-select"
    v-model="stringValues"
    label="Select Fruits"
    placeholder="Select fruits"
    :options="stringOptions"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const stringValues = ref(['apple', 'banana']); // Always use an array for multi-select

const stringOptions = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
]);
</script>
```

### Multiple Number Values

```vue
<template>
  <spr-select-multiple
    id="number-select"
    v-model="numberValues"
    label="Select Numbers"
    placeholder="Select numbers"
    :options="numberOptions"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const numberValues = ref([42, 100]); // Always use an array for multi-select

const numberOptions = ref([
  { text: '42', value: 42 },
  { text: '100', value: 100 },
  { text: '200', value: 200 },
]);
</script>
```

### Multiple Object Values

```vue
<template>
  <spr-select-multiple
    id="object-select"
    v-model="selectedUsers"
    label="Select Users"
    placeholder="Select users"
    :options="userList"
    text-field="name"
    value-field="id"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedUsers = ref([
  { id: 1, name: 'John', role: 'Developer' },
  { id: 2, name: 'Jane', role: 'Designer' },
]); // Always use an array for multi-select

const userList = ref([
  { id: 1, name: 'John', role: 'Developer' },
  { id: 2, name: 'Jane', role: 'Designer' },
  { id: 3, name: 'Bob', role: 'Manager' },
]);
</script>
```

> **Note:**
>
> - If you want to start with no selection, use an empty array: `ref([])`.
> - If you want to pre-select all items, use the full array of values from your options.
> - The component will always treat the model as an array for multi-select, so toggling and pre-selection will work as expected.

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
      <td>Required to bind popper within the select</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td><code>v-model</code></td>
      <td>Value binding for the select. Accepts an array of strings, numbers, or objects. Always use an array for multi-select.</td>
      <td>Array</td>
      <td>[]</td>
    </tr>
    <tr>
      <td><code>search-value</code></td>
      <td>Value binding for the search input. Accepts a string.</td>
      <td>String</td>
      <td>''</td>
    </tr>
    <tr>
      <td><code>options</code></td>
      <td>List of options. Can be an array of strings, numbers, or objects with <code>text</code> and <code>value</code> fields.</td>
      <td>Array</td>
      <td>[]</td>
    </tr>
    <tr>
      <td><code>group-items-by</code></td>
      <td>Group items by a specific field. Supported: 'A-Z', 'Z-A'.</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td><code>text-field</code></td>
      <td>Field name to use for display text when using object arrays.</td>
      <td>String</td>
      <td>'text'</td>
    </tr>
    <tr>
      <td><code>value-field</code></td>
      <td>Field name to use for value when using object arrays.</td>
      <td>String</td>
      <td>'value'</td>
    </tr>
    <tr>
      <td><code>placeholder</code></td>
      <td>Placeholder text for the input.</td>
      <td>String</td>
      <td>-</td>
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
      <td><code>placement</code></td>
      <td>Popper placement. See available options in the documentation.</td>
      <td>String</td>
      <td>'bottom'</td>
    </tr>
    <tr>
      <td><code>popper-strategy</code></td>
      <td>Popper positioning strategy. 'absolute' or 'fixed'.</td>
      <td>String</td>
      <td>'absolute'</td>
    </tr>
    <tr>
      <td><code>popper-width</code></td>
      <td>Width of the popper element.</td>
      <td>String</td>
      <td>'100%'</td>
    </tr>
    <tr>
      <td><code>width</code></td>
      <td>Width of the select wrapper.</td>
      <td>String</td>
      <td>'100%'</td>
    </tr>
    <tr>
      <td><code>wrapper-position</code></td>
      <td>CSS position of the wrapper. Use 'initial' for modal usage.</td>
      <td>String</td>
      <td>'relative'</td>
    </tr>
    <tr>
      <td><code>display-text</code></td>
      <td>Display text for the input (useful for async/infinite scroll).</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td><code>display-helper</code></td>
      <td>Show helper text below the input.</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>helper-icon</code></td>
      <td>Icon to display with the helper text.</td>
      <td>String</td>
      <td>null</td>
    </tr>
    <tr>
      <td><code>helper-text</code></td>
      <td>Helper text to display below the input.</td>
      <td>String</td>
      <td>''</td>
    </tr>
    <tr>
      <td><code>disabled</code></td>
      <td>Disable the select input and popper.</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>clearable</code></td>
      <td>Show a clear button to remove all selections.</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>chipped</code></td>
      <td>Make the inut field selected items into chips.</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>searchable</code></td>
      <td>Enable searching within the select options.</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>loading</code></td>
      <td>Show loading state for async options.</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>disabled-local-search</code></td>
      <td>Disable local search functionality.</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

### Events

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
      <td>update:modelValue</td>
      <td>array</td>
      <td>Emitted when the selection changes</td>
    </tr>
  </tbody>
</table>

### Notes

- Always use an array for `v-model` in multi-select mode.
- Supports string, number, and object values. The component normalizes single values to an array internally.
- For object values, use `text-field` and `value-field` to specify which fields to use.
- Use `clearable` to allow users to clear all selections.
- Use `helper-text` and `helper-icon` to display additional information below the input.
- Use `placement` and `popper-strategy` to control the select position and behavior.

## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark"  width="50px" />
  <spr-logo name="sidekick" theme="dark" width="50px" />
</div>

<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
import { useDebounceFn } from '@vueuse/core';

import { Icon } from '@iconify/vue';

import SprSelectMultiple from "@/components/select/select-multiple/select-multiple.vue";
import SprInput from "@/components/input/input.vue";
import SprButton from "@/components/button/button.vue";
import SprChips from "@/components/chips/chips.vue";
import SprLozenge from "@/components/lozenge/lozenge.vue"
import SprModal from "@/components/modal/modal.vue"
import SprLogo from "@/components/logo/logo.vue";

// Import MenuListType for typing
import type { MenuListType } from '@/components/list/list';

const selectModel = ref({
  selectBasic: [],
  selectChipped: [],
  selectGroupedItemsBy: [],
  selectPreSelectedItems: ['100', '200', 'cherry'],
  selectSearch: [],
  selectSearchDisabledLocalSearch: [],
  selectPlacements: [],
  selectClearable: [],
  selectWidth: [],
  selectStrategy: [],
  selectActiveState: [],
  selectDisabledState: [],
  selectErrorState: [],
});

const options = ref([
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
  { text: 'One Hundred', value: '100' },
  { text: 'Two Hundred', value: 200 },
  { text: 'Lemon', value: 'lemon' },
  { text: 'Mango', value: 'mango' },
  { text: '300', value: '300' },
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

const modalModel = ref(false);

// For string values
const stringValue = ref('apple');  // multiple string value
const stringDisplay = ref('Apple');

// For number values
const numberValue = ref(42);  // multiple number value
const numberDisplay = ref('42');

const stringOptions = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' }
]);

const numberOptions = ref([
  { text: '42', value: 42 },
  { text: '100', value: 100 },
  { text: '200', value: 200 }
]);

const handleStringSelection = () => {
  const selected = stringOptions.value.find(item => item.value === stringValue.value);
  stringDisplay.value = selected ? selected.text : '';
};

const handleNumberSelection = () => {
  const selected = numberOptions.value.find(item => item.value === numberValue.value);
  numberDisplay.value = selected ? selected.text : '';
};

const selectedUser = ref({ id: 1, name: 'John', role: 'Developer' });

const userList = ref([
  { id: 1, name: 'John', role: 'Developer' },
  { id: 2, name: 'Jane', role: 'Designer' },
  { id: 3, name: 'Bob', role: 'Manager' }
]);

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

// Infinit-Scroll

const multipleSelected = ref([]); 
const optionsAPI = ref<optionsType[]>([]);
const search = ref('');
const APIisLoading = ref(false);
const pagination = ref({
  totalpages: 10,
  currentPage: 1,
});

const setOptionsViaAPI = () => {
  getNextOptionsViaAPI();
};

const handleInfiniteScrollTrigger = () => {
  if (pagination.value.currentPage === pagination.value.totalpages || APIisLoading.value) return;

  APIisLoading.value = true;
  pagination.value.currentPage += 1;

  getNextOptionsViaAPI();
};

const getNextOptionsViaAPI = async () => {
  try {
    const url = search.value
      ? `https://api.thedogapi.com/v1/breeds/search?q=${search.value}&page=${pagination.value.currentPage}&limit=10`
      : `https://api.thedogapi.com/v1/breeds?page=${pagination.value.currentPage}&limit=10`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const options = await response.json();

    optionsAPI.value = options.length
      ? [
          ...(optionsAPI.value || []),
          ...options.map((option) => ({
            text: option.name,
            value: option.id,
          })),
        ]
      : [];

    APIisLoading.value = false;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};

const debouncedSetOptions = useDebounceFn(() => {
  APIisLoading.value = true;
  pagination.value.currentPage = 1;
  optionsAPI.value = [];
  setOptionsViaAPI();
}, 300);

watch(search, () => {
  debouncedSetOptions();
});

onMounted(() => {
  setOptionsViaAPI();
});
</script>
