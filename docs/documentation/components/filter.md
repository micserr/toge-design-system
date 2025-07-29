---
outline: 'deep'
---

# Filter Component

The `Filter` supports advanced filtering options, infinite scrolling, and dynamic data handling.

## Features

- Multi-select filtering with options.
- Advanced filter menu with nested filters.
- Infinite scrolling support.
- Customizable UI with slots and props.
- Avatar support for options.

## Basic Usage

<div class="spr-space-y-3"> 
<div class="spr-flex  spr-flex-col  spr-gap-2 spr-body-sm spr-border-b spr-border-solid spr-border-x-0 spr-border-t-0">
  <span>Selected: {{selectedOptions}}</span>
  <span>searchValue: {{searchValue}}</span>
</div>
  <spr-filter v-model="selectedOptions"  :options="options" label="Search"  v-model:search="searchValue" hasAvatar/>
</div>

```vue
<template>
  <spr-filter v-model="selectedOptions" v-model:search="searchValue" :options="options" label="Search" hasAvatar />
</template>

<script setup>
import { ref } from 'vue';

const options = ref([
  { column: '', isSelected: false, text: 'sample 1', value: 'sample1' },
  { column: '', isSelected: false, text: 'sample 2', value: 'sample2' },
  { column: '', isSelected: false, text: 'sample 3', value: 'sample3' },
  { column: '', isSelected: false, text: 'sample 4', value: 'sample4' },
  { column: '', isSelected: false, text: 'sample 5', value: 'sample5' },
]);

const selectedOptions = ref([]);
const searchValue = ref('');
</script>
```

## Filterable

<div class="spr-flex spr-flex-col spr-gap-6"> 
  <div
    class="spr-body-sm spr-flex spr-flex-col spr-gap-2 spr-border-x-0 spr-border-b spr-border-t-0 spr-border-solid"
  >
    <span>Selected: {{ selectedOptions1 }}</span>
    <span>searchValue: {{ searchValue1 }}</span>
  </div>
  <spr-filter 
    v-model="selectedOptions1"
    v-model:search="searchValue1" 
    :options="options1"
    label="Search"
    :filterMenu="filterMenuList1"
    :filterData="filterMenuOptions1"
    id="filter-menu"
    @selectedFilter="handleSelected"
    filterable
  />
</div>

```vue
<template>
  <spr-filter
    v-model="selectedOptions1"
    v-model:search="searchValue1"
    :options="options1"
    label="Search"
    :filterMenu="filterMenuList1"
    :filterData="filterMenuOptions1"
    filterable
  />
</template>

<script setup>
const options = ref([
  { column: '', isSelected: false, text: 'sample 1', value: 'sample1' },
  { column: '', isSelected: false, text: 'sample 2', value: 'sample2' },
  { column: '', isSelected: false, text: 'sample 3', value: 'sample3' },
  { column: '', isSelected: false, text: 'sample 4', value: 'sample4' },
  { column: '', isSelected: false, text: 'sample 5', value: 'sample5' },
]);

const filterMenuList = ref([
  { count: 0, isFilterVisible: false, columnName: 'Employee Type', field: 'employeeType' },
  { count: 0, isFilterVisible: false, columnName: 'Department', field: 'department' },
  { count: 0, isFilterVisible: false, columnName: 'Location', field: 'location' },
  { count: 0, isFilterVisible: false, columnName: 'Region', field: 'region' },
  { count: 0, isFilterVisible: false, columnName: 'Job Level', field: 'jobLevel' },
]);

const filterMenuOptions = [
  { column: 'location', isSelected: false, text: 'sample 1', value: 'sample1' },
  { column: 'location', isSelected: false, text: 'sample 2', value: 'sample2' },
  { column: 'location', isSelected: false, text: 'sample 3', value: 'sample3' },
  { column: 'location', isSelected: false, text: 'sample 4', value: 'sample4' },
];

const selectedOptions = ref([]);
const searchValue = ref('');
</script>
```

## Deselect

This example demonstrates how to remove selected options from outside the component.

<div class="spr-space-y-3"> 
  <div class="spr-flex spr-gap-2">
    <div v-for="selected in selectedOptions2">
      <spr-button hasIcon size="small" tone="danger" variant="secondary" @click="removeSelected(selected.value)">
      {{selected.value}}
        <Icon icon="ph:trash" />
      </spr-button>
    </div> 
  </div>
  <spr-filter
    v-model="selectedOptions2" 
    v-model:search="searchValue2"
    id="search-filter"
    :deselected="deselected"
    :options="options"
    label="Search" 
  />
</div>

```vue
<template>
  <div class="spr-space-y-3">
    <div class="spr-flex spr-gap-2">
      <div v-for="selected in selectedOptions2">
        <spr-button hasIcon size="small" tone="danger" variant="secondary" @click="removeSelected(selected.value)">
          {{ selected.value }}
          <Icon icon="ph:trash" />
        </spr-button>
      </div>
    </div>
    <spr-filter
      v-model="selectedOptions2"
      v-model:search="searchValue2"
      id="search-filter"
      :deselected="deselected"
      :options="options"
      label="Search"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import SprButton from '@/components/button/button.vue';

const options = ref([
  { column: '', isSelected: false, text: 'sample 1', value: 'sample1' },
  { column: '', isSelected: false, text: 'sample 2', value: 'sample2' },
  { column: '', isSelected: false, text: 'sample 3', value: 'sample3' },
  { column: '', isSelected: false, text: 'sample 4', value: 'sample4' },
  { column: '', isSelected: false, text: 'sample 5', value: 'sample5' },
]);

const selectedOptions2 = ref([]);
const searchValue2 = ref('');
const deselected = ref('');

const removeSelected = (removeSelected) => {
  deselected.value = removeSelected;
};
</script>
```

## Error State

<div class="spr-space-y-3">
  <spr-filter
      v-model="selectedOptions2" 
      v-model:search="searchValue2"
      id="search-filter-display-text"
      :deselected="deselected"
      :options="options"
      helper-text="This is helper text!!"
    />

<spr-filter
      v-model="selectedOptions2" 
      v-model:search="searchValue2"
      id="search-filter-error"
      :deselected="deselected"
      :options="options"
      error
    />

</div>

```vue
<template>
  <div class="spr-space-y-3">
    <spr-filter
      v-model="selectedOptions2"
      v-model:search="searchValue2"
      id="search-filter-display-text"
      :deselected="deselected"
      :options="options"
      helper-text="This is helper text!!"
    />

    <spr-filter
      v-model="selectedOptions2"
      v-model:search="searchValue2"
      id="search-filter-error"
      :deselected="deselected"
      :options="options"
      error
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import SprButton from '@/components/button/button.vue';

const options = ref([
  { column: '', isSelected: false, text: 'sample 1', value: 'sample1' },
  { column: '', isSelected: false, text: 'sample 2', value: 'sample2' },
  { column: '', isSelected: false, text: 'sample 3', value: 'sample3' },
  { column: '', isSelected: false, text: 'sample 4', value: 'sample4' },
  { column: '', isSelected: false, text: 'sample 5', value: 'sample5' },
]);

const selectedOptions2 = ref([]);
const searchValue2 = ref('');
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
      <td>modelValue</td>
      <td>The selected filter values.</td>
      <td><code>Array</code> or <code>String</code></td>
      <td><code>[]</code></td>
    </tr>
    <tr>
      <td>options</td>
      <td>The list of filter options.</td>
      <td><code>Array</code></td>
      <td><code>[]</code></td>
    </tr>
    <tr>
      <td>label</td>
      <td>Label for the filter input.</td>
      <td><code>String</code></td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td>placeholder</td>
      <td>Placeholder text for the filter input.</td>
      <td><code>String</code></td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>Disables the filter input.</td>
      <td><code>Boolean</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>filterable</td>
      <td>Enables the advanced filter menu.</td>
      <td><code>Boolean</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>id</td>
      <td>Unique identifier for the filter.</td>
      <td><code>String</code></td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td>filterMenu</td>
      <td>List of advanced filter menu options.</td>
      <td><code>Array</code></td>
      <td><code>[]</code></td>
    </tr>
    <tr>
      <td>filterData</td>
      <td>Data for the advanced filter menu.</td>
      <td><code>Array</code></td>
      <td><code>[]</code></td>
    </tr>
    <tr>
      <td>loading</td>
      <td>Indicates if the filter is in a loading state.</td>
      <td><code>Boolean</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>filling</td>
      <td>Indicates if the filter is in a filling state.</td>
      <td><code>Boolean</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>search</td>
      <td>Search query for the main filter.</td>
      <td><code>String</code></td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td>searchFilter</td>
      <td>Search query for the advanced filter menu.</td>
      <td><code>String</code></td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td>width</td>
      <td>Width of the filter component.</td>
      <td><code>String</code></td>
      <td><code>'100%'</code></td>
    </tr>
    <tr>
      <td>deselected</td>
      <td>Value of the deselected filter option.</td>
      <td><code>String</code></td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td>hasSearchApi</td>
      <td>Enables external search API integration.</td>
      <td><code>Boolean</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>hasAvatar</td>
      <td>Enables avatar display for filter options.</td>
      <td><code>Boolean</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>helperText</td>
      <td>Helper text displayed below the filter component</td>     <td><code>String</code></td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td>error</td>
      <td>Enables error state styling for the filter</td>     <td><code>Boolean</code></td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td><code>hasAdvancedFilterApi</code></td>
      <td><code>boolean</code></td>
      <td>Enables external search API integration for the advanced filter.</td>
    </tr>
  </tbody>
</table>

### Events

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Payload Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>getFilterData</code></td>
      <td><code>String</code></td>
      <td>Triggered when fetching filter data for a specific column.</td>
    </tr>
    <tr>
      <td><code>update:modelValue</code></td>
      <td><code>Array</code></td>
      <td>Updates the selected filter values.</td>
    </tr>
    <tr>
      <td><code>update:search</code></td>
      <td><code>String</code></td>
      <td>Updates the search query for the main filter.</td>
    </tr>
    <tr>
      <td><code>update:searchFilter</code></td>
      <td><code>String</code></td>
      <td>Updates the search query for the advanced filter menu.</td>
    </tr>
    <tr>
      <td><code>selectedFilter</code></td>
      <td><code>Array</code></td>
      <td>Emits the selected filter options.</td>
    </tr>
    <tr>
      <td><code>infiniteScrollTrigger</code></td>
      <td><code>Boolean</code></td>
      <td>Triggered when infinite scrolling is activated for the main filter.</td>
    </tr>
    <tr>
      <td><code>infiniteScrollFilterTrigger</code></td>
      <td><code>String</code></td>
      <td>Triggered when infinite scrolling is activated for the advanced filter.</td>
    </tr>
  </tbody>
</table>

### Slots

<table>
  <thead>
    <tr>
      <th>Slot Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>default</code></td>
      <td>Slot for customizing the filter input.</td>
    </tr>
    <tr>
      <td><code>loading</code></td>
      <td>Slot for displaying a loading state in the advanced filter menu.</td>
    </tr>
    <tr>
      <td><code>empty</code></td>
      <td>Slot for displaying an empty state in the advanced filter menu.</td>
    </tr>
    <tr>
      <td><code>loading-state</code></td>
      <td>Slot for displaying a loading state in the main filter.</td>
    </tr>
    <tr>
      <td><code>empty-state</code></td>
      <td>Slot for displaying an empty state in the main filter.</td>
    </tr>
  </tbody>
</table>

## Advanced Features

### Infinite Scrolling

The component supports infinite scrolling for both the main filter and the advanced filter menu. Use the `infiniteScrollTrigger` and `infiniteScrollFilterTrigger` events to handle data fetching.

### Avatar Support

Enable the `hasAvatar` prop to display avatars for filter options. Provide an `avatar` property in the `options` array.

## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark"  width="50px" />
</div>

<script setup>
import { ref } from 'vue';
import SprFilter from '@/components/filter/filter.vue';
import { Icon } from '@iconify/vue';
import SprButton from "@/components/button/button.vue";
import SprLogo from "@/components/logo/logo.vue";

const options = ref([
    { column: '', isSelected: false, text: 'sample 1', subtext: '', value: 'sample1' },
    { column: '', isSelected: false, text: 'sample 2', subtext: '', value: 'sample2' },
    { column: '', isSelected: false, text: 'sample 4', subtext: 'subtext', value: 'sample4' },
    { column: '', isSelected: false, text: 'sample 5', subtext: 'subtext', value: 'sample5' },
]);

  const filterMenuList = ref([
    { count: 0, isFilterVisible: false, columnName: 'Employee Type', field: 'employeeType' },
    { count: 0, isFilterVisible: false, columnName: 'Department', field: 'department' },
    { count: 0, isFilterVisible: false, columnName: 'Location', field: 'location' },
    { count: 0, isFilterVisible: false, columnName: 'Region', field: 'region' },
    { count: 0, isFilterVisible: false, columnName: 'Job Level', field: 'jobLevel' },
  ]);

  const filterMenuOptions = ref([
    { column: 'location', isSelected: false, text: 'sample 1', subtext: 'subtext', value: 'sample1' },
    { column: 'location', isSelected: false, text: 'sample 2', subtext: 'subtext', value: 'sample2' },
    { column: 'location', isSelected: false, text: 'sample 3', subtext: 'subtext', value: 'sample3' },
    { column: 'location', isSelected: false, text: 'sample 4', subtext: 'subtext', value: 'sample4' },
    { column: 'location', isSelected: false, text: 'sample 5', subtext: 'subtext', value: 'sample5' },
]);

const options1 = ref([
    { column: '', isSelected: false, text: 'sample 1', subtext: '', value: 'sample1' },
    { column: '', isSelected: false, text: 'sample 2', subtext: '', value: 'sample2' },
    { column: '', isSelected: false, text: 'sample 4', subtext: 'subtext', value: 'sample4' },
    { column: '', isSelected: false, text: 'sample 5', subtext: 'subtext', value: 'sample5' },
]);

  const filterMenuList1 = ref([
    { count: 0, isFilterVisible: false, columnName: 'Employee Type', field: 'employeeType' },
    { count: 0, isFilterVisible: false, columnName: 'Department', field: 'department' },
    { count: 0, isFilterVisible: false, columnName: 'Location', field: 'location' },
  ]);

  const filterMenuOptions1 = ref([
    { column: 'location', isSelected: false, text: 'sample 1', subtext: 'subtext', value: 'sample1' },
    { column: 'location', isSelected: false, text: 'sample 2', subtext: 'subtext', value: 'sample2' },
    { column: 'location', isSelected: false, text: 'sample 3', subtext: 'subtext', value: 'sample3' },
    { column: 'location', isSelected: false, text: 'sample 4', subtext: 'subtext', value: 'sample4' },
    { column: 'location', isSelected: false, text: 'sample 5', subtext: 'subtext', value: 'sample5' },
]);



const selectedOptions = ref([]);
const selectedOptions1 = ref([]);
const searchValue = ref('')
const searchValue1 = ref('')
const selectedOptions2 = ref([]);
const searchValue2 = ref('');

const deselected = ref('')


const handleSelected = (e) => {
  console.log('selected', e)
}

const removeSelected = (removeSelected) => {
  deselected.value = removeSelected
}
</script>
