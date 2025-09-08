---
outline: 'deep'
---

# Single Select

Selects are interactive components that allow users to choose from a list of options.

## Basic Usage

<div class="spr-grid spr-gap-4">
  <spr-select
    id="sample-selectBasic"
    v-model="selectModel.selectBasic"
    label="Select Label"
    placeholder="Select an option"
    :options="options"
  />
  
  <code class="spr-font-medium">
    V-Model: {{ selectModel.selectBasic ? selectModel.selectBasic : `""` }}
  </code>
</div>

```vue
<template>
  <spr-select
    id="sample-select"
    v-model="selectModel"
    label="Select Label"
    placeholder="Select an option"
    :options="options"
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

## Grouped Items By

You can group items by `default`, `A-Z` or `Z-A` order by passing the `group-items-by` prop and specifying the desired grouping type.

<div class="spr-grid spr-gap-4">
  <spr-select
    id="sample-selectGroupedItemsBy"
    v-model="selectModel.selectGroupedItemsBy"
    label="Select Label"
    placeholder="Select an option"
    :options="options"
    group-items-by="A-Z"
  />
</div>

```vue
<template>
  <div class="spr-grid spr-gap-4">
    <spr-select
      id="sample-select"
      v-model="selectModel"
      label="Select Label"
      placeholder="Select an option"
      :options="options"
      group-items-by="A-Z"
    />
  </div>
</template>
```

## Search

The search feature allows users to quickly filter and find specific items within the select list by typing in a search query.

- Use the `searchable-options` prop to enable the search input within the select component.

<div class="spr-grid spr-gap-4">
  <spr-select
    id="sample-selectSearch"
    v-model="selectModel.selectSearch"
    label="Select Label"
    placeholder="Select an option"
    :options="options"
    searchable
  />

  <code class="spr-font-medium">
    V-Model: {{ selectModel.selectSearch ? selectModel.selectSearch : `""` }}
  </code>
</div>

```vue
<template>
  <spr-select
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

````vue
<div class="spr-grid spr-gap-4">
  <spr-select
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
  <spr-select
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
````

## Pre-Selected Items

Pre-selected items are options that are automatically selected when the select is first displayed. The `v-model` for the select component supports:

- **String**: For single selection by value (e.g., `'apple'`).
- **Number**: For single selection by number value (e.g., `42`).
- **Array of strings or numbers**: For single selection by array (e.g., `['apple']` or `[42]`).
- **Object**: For single selection by object reference (e.g., `{ text: 'Apple', value: 'apple' }`). See more in the [Supported Value Types](#single-object-values).

<div class="spr-grid spr-gap-4">
  <spr-select
    id="sample-selectPreSelectedItems"
    v-model="selectModel.selectPreSelectedItems"
    label="Select Label"
    placeholder="Select an option"
    :options="options"
    group-items-by="A-Z"
    text-field="text"
    value-field="value"
  />
  
  <code class="spr-font-medium">
    V-Model: {{ selectModel.selectPreSelectedItems ? selectModel.selectPreSelectedItems : `""` }}
  </code>
</div>

```vue
<template>
  <div class="spr-grid spr-gap-4">
    <spr-select
      id="sample-select"
      v-model="selectModel"
      label="Select Label"
      placeholder="Select an option"
      :options="options"
      group-items-by="A-Z"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const selectModel = ref(['apple']);
</script>
```

You can also pre-select items with search functionality. This allows users to see the pre-selected items while still being able to search through the options.

<div class="spr-mt-4">
  <spr-select
    id="sample-selectPreSelectedItemsSearch"
    v-model="selectModel.selectPreSelectedItemsWithSearch"
    label="Select Label"
    placeholder="Select an option"
    :options="options"
    searchable
  />
</div>

## Placements

Placement refers to where the select popper will be positioned relative to its trigger element (e.g., button, input field). Pass the `placement` props to modify the placement of the select popper.

The available placement options are: `auto`, `auto-start`, `auto-end`, `top`, `top-start`, `top-end`, `right`, `right-start`, `right-end`, `bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, and `left-end`.

The default placement is `bottom`.

<div class="spr-grid spr-gap-4">
  <div class="spr-flex spr-gap-4">
    <spr-select
      id="sample-selectPlacements"
      v-model="selectModel.selectPlacements"
      label="Auto"
      placeholder="Select an option"
      :options="options"
      placement="auto"
      popper-width="200px"
    />
    <spr-select
      id="sample-selectPlacements"
      v-model="selectModel.selectPlacements"
      label="Auto Start"
      placeholder="Select an option"
      :options="options"
      placement="auto-start"
      popper-width="200px"
    />
    <spr-select
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
    <spr-select
      id="sample-selectPlacements"
      v-model="selectModel.selectPlacements"
      label="Top"
      placeholder="Select an option"
      :options="options"
      placement="top"
      popper-width="200px"
    />
    <spr-select
      id="sample-selectPlacements"
      v-model="selectModel.selectPlacements"
      label="Top Start"
      placeholder="Select an option"
      :options="options"
      placement="top-start"
      popper-width="200px"
    />
    <spr-select
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
    <spr-select
      id="sample-selectPlacements"
      v-model="selectModel.selectPlacements"
      label="Right"
      placeholder="Select an option"
      :options="options"
      placement="right"
      popper-width="200px"
    />
    <spr-select
      id="sample-selectPlacements"
      v-model="selectModel.selectPlacements"
      label="Right Start"
      placeholder="Select an option"
      :options="options"
      placement="right-start"
      popper-width="200px"
    />
    <spr-select
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
    <spr-select
      id="sample-selectPlacements"
      v-model="selectModel.selectPlacements"
      label="Bottom"
      placeholder="Select an option"
      :options="options"
      placement="bottom"
      popper-width="200px"
    />
    <spr-select
      id="sample-selectPlacements"
      v-model="selectModel.selectPlacements"
      label="Bottom Start"
      placeholder="Select an option"
      :options="options"
      placement="bottom-start"
      popper-width="200px"
    />
    <spr-select
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
    <spr-select
      id="sample-selectPlacements"
      v-model="selectModel.selectPlacements"
      label="Left"
      placeholder="Select an option"
      :options="options"
      placement="left"
      popper-width="200px"
    />
    <spr-select
      id="sample-selectPlacements"
      v-model="selectModel.selectPlacements"
      label="Left Start"
      placeholder="Select an option"
      :options="options"
      placement="left-start"
      popper-width="200px"
    />
    <spr-select
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
  <spr-select
    id="sample-selectClearable"
    v-model="selectModel.selectClearable"
    label="Select Label"
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
  <spr-select
    id="sample-selectWidth"
    v-model="selectModel.selectWidth"
    label="Select Label"
    placeholder="Select an option"
    :options="options"
    width="50%"
    popper-width="200px"
  />
</div>

```vue
<template>
  <spr-select
    id="sample-select"
    v-model="selectModel"
    label="Select Label"
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
   <spr-select
    id="sample-selectStrategy-modal"
    v-model="selectModel.selectStrategy"
    label="Select Label"
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
    <spr-select
      id="sample-select"
      v-model="selectModel"
      label="Select Label"
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

## Infinite Scroll

Infinite scroll allows the select list to load more items as the user scrolls. This feature is particularly useful for back-end API integration. Instead of loading the entire list at once, new items are dynamically added as needed, improving performance and usability. Pass `@infinite-scroll-trigger` emit to get the trigger of options when it reaches bottom.

When working with infinite scroll and API-driven selects, you can use the `display-text` prop to show a display value in the input on initial load (for example, when you only have the selected value and not the full option object yet). This is especially helpful for large datasets where you don't want to fetch all options at once.

<div>
  <spr-select
    id="sample-selectInfiniteScroll"
    v-model="selectModel.selectInfiniteScroll"
    label="Select Label"
    placeholder="Select an option"
    :display-text="displayText"
    :options="optionsAPI"
    @infinite-scroll-trigger="handleInfiniteScrollTrigger"
  />
  <div class="spr-my-3 spr-p-4 spr-bg-blue-100">
    <h5>Paginated Options - Should load 10 Items per page:</h5>
    <p>Pagination:</p>
    <pre>{{ JSON.stringify(pagination, null, 2) }}</pre>
    <p>Data:</p>
    {{ optionsAPI }}
  </div>
</div>

```vue
<template>
  <spr-select
    id="sample-select"
    v-model="selectModel"
    label="Select Label"
    placeholder="Select an option"
    :options="optionsAPI"
    :display-text="displayText"
    @infinite-scroll-trigger="handleInfiniteScrollTrigger"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectModel = ref(51); // Initial value for the select
const displayText = ref('Border Terrier'); // Display text for the selected option

const optionsAPI = ref<optionsType[]>([]);

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
    const response = await fetch(`https://api.thedogapi.com/v1/breeds?page=${pagination.value.currentPage}&limit=10`);

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
</script>
```

## Active, Disabled, Error States

For guidance on implementing error, active, and disabled states in the select component, you can refer to the documentation for the input text component, as the approach is similar. See the [Input Form](/documentation/components/input.html) for detailed instructions.

### Active State

<div>
  <spr-select
    id="sample-select"
    v-model="selectModel.selectActiveState"
    label="Select Label"
    placeholder="Select an option"
    :options="options"
    active
  />
</div>

```vue
<spr-select
  id="sample-select"
  v-model="selectModel"
  label="Select Label"
  placeholder="Select an option"
  :options="options"
  active
/>
```

### Disabled State

<div>
  <spr-select
    id="sample-select"
    v-model="selectModel.selectDisabledState"
    label="Select Label"
    placeholder="Select an option"
    :options="options"
    disabled
  />
</div>

```vue
<spr-select
  id="sample-select"
  v-model="selectModel"
  label="Select Label"
  placeholder="Select an option"
  :options="options"
  disabled
/>
```

### Error State

<div>
  <spr-select
    id="sample-select"
    v-model="selectModel.selectErrorState"
    label="Select Label"
    placeholder="Select an option"
    :options="options"
    error
  />
</div>

```vue
<spr-select
  id="sample-select"
  v-model="selectModel"
  label="Select Label"
  placeholder="Select an option"
  :options="options"
  error
/>
```

## Helper Message

A helper message is a text label below the input field that provides additional information about instructions, formatting hints, validation feedback, etc.

To display the helper message, set the `display-helper` prop to `true` and add the `helper-text` prop with the helper message text. You can also insert an icon with the `helper-icon` prop. This uses the [Iconify](https://icon-sets.iconify.design/) icon library.

<div class="spr-grid spr-gap-8">
  <spr-select
    id="sample-select"
    v-model="selectModel.selectErrorState"
    label="Select Label"
    placeholder="Select an option"
    :options="options"
    helper-text="This is a helper message"
    display-helper
  />
  <spr-select
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
<spr-select
  id="sample-select"
  v-model="selectModel"
  label="Select Label"
  placeholder="Select an option"
  :options="options"
  helper-text="This is a helper message"
  display-helper
/>

<spr-select
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
```

Alternatively, you can use the `helperMessage` slot to display a custom helper message.

<div class="spr-grid spr-gap-8">
  <spr-select
    id="sample-select"
    v-model="selectModel.selectErrorState"
    label="Select Label"
    placeholder="Select an option"
    :options="options"
    display-helper
  >
    <template #helperMessage>This is a helper message</template>
  </spr-select>
  <spr-select
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
  </spr-select>
</div>

```vue
<spr-select
  id="sample-select"
  v-model="selectModel"
  label="Select Label"
  placeholder="Select an option"
  :options="options"
  display-helper
>
  <template #helperMessage>This is a helper message</template>
</spr-select>

<spr-select
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
</spr-select>
```

## Supported Value Types

The select component supports various types of values. The `v-model` binding can accept different data formats depending on your needs.

### Single Primitive Values

For single selection of primitive types like strings or numbers:

<div>
  <spr-select
    id="select-number"
    v-model="stringValue"
    label="Select Label"
    placeholder="Select an option"
    :options="stringoptions"
  />
</div>

Value: {{ stringValue }}

<div>
  <spr-select
    id="number-select"
    v-model="numberValue"
    label="Select Label"
    placeholder="Select an option"
    :options="numberoptions"
  />
</div>

Value: {{ numberValue }}

```vue
<template>
  <spr-select
    id="string-select"
    v-model="stringValue"
    label="Select Label"
    placeholder="Select an option"
    :options="stringoptions"
  />

  <spr-select
    id="number-select"
    v-model="numberValue"
    label="Select Label"
    placeholder="Select an option"
    :options="numberoptions"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// For string values
const stringValue = ref('apple'); // Single string value

// For number values
const numberValue = ref(42); // Single number value

const stringoptions = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
]);

const numberoptions = ref([
  { text: '42', value: 42 },
  { text: '100', value: 100 },
  { text: '200', value: 200 },
]);
</script>
```

### Single Object Values

For single selection of full objects:

<div>
  <spr-select
    id="object-select"
    v-model="selectedUser"
    label="Select Label"
    placeholder="Select an option"
    :options="userList"
    text-field="name"
    value-field="id"
  />
</div>

Value: {{ selectedUser }}

```vue
<template>
  <spr-select
    id="object-select"
    v-model="selectedUser"
    label="Select Label"
    placeholder="Select an option"
    :options="userList"
    text-field="name"      // Specify which field to display as text
    value-field="id"       // Specify which field to use as value
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// Object selection using full object reference
const selectedUser = ref({ id: 1, name: 'John', role: 'Developer' });

const userList = ref([
  { id: 1, name: 'John', role: 'Developer' },
  { id: 2, name: 'Jane', role: 'Designer' },
  { id: 3, name: 'Bob', role: 'Manager' }
]);
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
      <td>Required to bind popper within the select</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>v-model</td>
      <td>Value binding for the select. Accepts:<br>
        <ul>
          <li><b>Single primitive values:</b> String ('apple'), Number (42)</li>
          <li><b>Single object values:</b> Full objects ({ id: 1, name: 'John' })</li>
          <li><b>Array of values:</b> Array of strings, numbers, or objects</li>
        </ul>
        The returned value type will match the input type (preserving strings, numbers, and objects).
      </td>
      <td>String | Number | Object | Array</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>options</td>
      <td>List of options composed of <code>text</code> and <code>value</code> properties, or array of strings/objects</td>
      <td>optionsType[] | string[] | object[]</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>group-items-by</td>
      <td>Group items by order: 'A-Z', 'Z-A'</td>
      <td>'A-Z' | 'Z-A'</td>
      <td>-</td>
    </tr>
    <tr>
      <td>text-field</td>
      <td>Field name to use for display text when using dynamic object arrays</td>
      <td>String</td>
      <td>'text'</td>
    </tr>
    <tr>
      <td>value-field</td>
      <td>Field name to use for value when using dynamic object arrays</td>
      <td>String</td>
      <td>'value'</td>
    </tr>
    <tr>
      <td>display-text</td>
      <td>Display text to show in the input on initial load (useful for API-driven selects). This value is only shown once, and will be replaced when the user selects a new item.</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>placeholder</td>
      <td>Placeholder text for the input</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>label</td>
      <td>Label text for the input</td>
      <td>String</td>
      <td>''</td>
    </tr>
    <tr>
      <td>placement</td>
      <td>Placement of the select popper (e.g., 'bottom', 'top', 'left', 'right')</td>
      <td>String</td>
      <td>'bottom'</td>
    </tr>
    <tr>
      <td>searchable</td>
      <td>
        Searchable is to allow typing in the input. If searchable is not set or is false, 
        the input will be readonly and users cannot type.
      </td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>disabled-local-search</td>
      <td>
        Disables local search when the searchable prop is set to true. 
        This is useful when you want to handle search via API only.
      </td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>popper-strategy</td>
      <td>Defines how the select's popper is positioned: 'absolute' or 'fixed'</td>
      <td>String</td>
      <td>'absolute'</td>
    </tr>
    <tr>
      <td>popper-width</td>
      <td>Width of the select's popper</td>
      <td>String</td>
      <td>'100%'</td>
    </tr>
    <tr>
      <td>width</td>
      <td>Width of the select component wrapper</td>
      <td>String</td>
      <td>'100%'</td>
    </tr>
    <tr>
      <td>wrapper-position</td>
      <td>CSS position of the select wrapper</td>
      <td>String</td>
      <td>'relative'</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>Disables the select if true</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>clearable</td>
      <td>Allows the user to clear the selected value with a clear button</td>
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
      <th>Description</th>
      <th>Payload</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>@update:model-value</td>
      <td>Event emitted when the model value changes</td>
      <td>Any</td>
    </tr>
    <tr>
      <td>@infinite-scroll-trigger</td>
      <td>Event emitted when the select is scrolled to the bottom (for dynamic data loading)</td>
      <td>None</td>
    </tr>
    <tr>
      <td>@searchString</td>
      <td>Event emitted when you type in the search input</td>
      <td>None</td>
    </tr>
  </tbody>
</table>

## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark"  width="50px" />
  <spr-logo name="sidekick" theme="dark" width="50px" />
</div>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

import { Icon } from '@iconify/vue';

import SprInput from "@/components/input/input.vue";
import SprSelect from "@/components/select/select.vue";
import SprButton from "@/components/button/button.vue";
import SprChips from "@/components/chips/chips.vue";
import SprLozenge from "@/components/lozenge/lozenge.vue"
import SprModal from "@/components/modal/modal.vue"
import SprLogo from "@/components/logo/logo.vue";

// Import optionsType for typing
import type { optionsType } from '@/components/list/list';

const selectModel = ref({
  selectBasic: '',
  selectGroupedItemsBy: '',
  selectSearch: '',
  selectPreSelectedItems:  'apple',
  selectPreSelectedItemsWithSearch: 'apple',
  selectPlacements: '',
  selectSearchDisabledLocalSearch: '',
  selectClearable: '',
  selectWidth: '',
  selectStrategy: '',
  selectInfiniteScroll: 51,
  selectActiveState: '',
  selectDisabledState: '',
  selectErrorState: '',
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

const modalModel = ref(false);

// For string values
const stringValue = ref('apple');  // Single string value
const stringDisplay = ref('Apple');

// For number values
const numberValue = ref(42);  // Single number value
const numberDisplay = ref('42');

const stringoptions = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' }
]);

const numberoptions = ref([
  { text: '42', value: 42 },
  { text: '100', value: 100 },
  { text: '200', value: 200 }
]);

const handleStringSelection = () => {
  const selected = stringoptions.value.find(item => item.value === stringValue.value);
  stringDisplay.value = selected ? selected.text : '';
};

const handleNumberSelection = () => {
  const selected = numberoptions.value.find(item => item.value === numberValue.value);
  numberDisplay.value = selected ? selected.text : '';
};

// #region - Infinite Scroll
const displayText = ref('Border Terrier'); // Display text for the selected option

const optionsAPI = ref<optionsType[]>([]);

const APIisLoading = ref(false);

const pagination = ref({
  totalpages: 10,
  currentPage: 1,
});

const setOptionsViaAPI = () => {
  getNextOptionsViaAPI();
}

const handleInfiniteScrollTrigger = () => {
  if (pagination.value.currentPage === pagination.value.totalpages || APIisLoading.value) return;

  APIisLoading.value = true;
  pagination.value.currentPage += 1;

  getNextOptionsViaAPI();
}

const getNextOptionsViaAPI = async () => {
  try {
    const response = await fetch(`https://api.thedogapi.com/v1/breeds?page=${pagination.value.currentPage}&limit=10`);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const options = await response.json();

    optionsAPI.value = options.length
      ? [
          ...(optionsAPI.value || []),
          ...options.map(option => ({
            text: option.name,
            value: option.id,
          })),
        ]
      : [];

    APIisLoading.value = false;
    
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}
// #endregion - Infinite Scroll

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

onMounted(() => {
  // Infinite Scroll - Initial API call to populate the paginated options
  getNextOptionsViaAPI();
});
</script>
