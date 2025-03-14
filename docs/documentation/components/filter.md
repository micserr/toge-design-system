---
outline: 'deep'
---

# Filter

## Basic Usage

<div class="spr-space-y-3"> 
<div class="spr-flex  spr-flex-col  spr-gap-2 spr-body-sm spr-border-b spr-border-solid spr-border-x-0 spr-border-t-0">
  <span >Selected: {{selectedOptions}}</span> 
  <span>searchValue: {{searchValue}}</span>
</div>
  <spr-filter v-model="selectedOptions"  :options="options" label="Search"  v-model:search="searchValue" id="search-filter"  />
</div>

```vue
<template>
  <spr-filter v-model="selectedOptions" v-model:search="searchValue" :options="options" label="Search" />
</template>

<script setup>
import { ref } from 'vue';

const options = [
  { column: '', isSelected: false, text: 'sample 1', value: 'sample1' },
  { column: '', isSelected: false, text: 'sample 2', value: 'sample2' },
  { column: '', isSelected: false, text: 'sample 3', value: 'sample3' },
  { column: '', isSelected: false, text: 'sample 4', value: 'sample4' },
  { column: '', isSelected: false, text: 'sample 5', value: 'sample5' },
];

const selectedOptions = ref([]);
const searchValue = ref('');
</script>
```

## With Additional Filter

### Filterable

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
const options = [
  { column: '', isSelected: false, text: 'sample 1', value: 'sample1' },
  { column: '', isSelected: false, text: 'sample 2', value: 'sample2' },
  { column: '', isSelected: false, text: 'sample 3', value: 'sample3' },
  { column: '', isSelected: false, text: 'sample 4', value: 'sample4' },
  { column: '', isSelected: false, text: 'sample 5', value: 'sample5' },
];

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

## Slots

<table>
  <thead>
    <tr>
      <th>Slot Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>loading-state</td>
      <td>Slot for the loading state main option.</td>
    </tr>
    <tr>
      <td>empty-state</td>
      <td>Slot for the empty state main option.</td>
    </tr>
    <tr>
      <td>loading</td>
      <td>Slot for the loading state.</td>
    </tr>
    <tr>
      <td>empty</td>
      <td>Slot for the empty state.</td>
    </tr>
  </tbody>
</table>

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
      <td>Selected value(s)</td>
      <td>Array | String</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>search</td>
      <td> The search text.</td>
      <td>String</td>
      <td>''</td>
    </tr>
    <tr>
      <td>options</td>
      <td>List of options</td>
      <td>Array</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>label</td>
      <td>Label for the select</td>
      <td>String</td>
      <td>''</td>
    </tr>
    <tr>
      <td>placeholder</td>
      <td>The placeholder text for the input field.</td>
      <td>String</td>
      <td>''</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>Disable the filter</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>filterable</td>
      <td>Whether the filter menu is enabled.</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>id</td>
      <td>ID for the select</td>
      <td>String</td>
      <td>''</td>
    </tr>
    <tr>
      <td>filterMenu</td>
      <td>The list of filter menu options.</td>
      <td>Array</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>filterData</td>
      <td>The list of filter data options.</td>
      <td>Array</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>loading</td>
      <td>Whether the filter menu is enabled.</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>loading</td>
      <td>Whether the filter menu is enabled.</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>@update:modelValue</td>
      <td>Emitted when the selected value(s) change</td>
      <td>function</td>
      <td>-</td>
    </tr>
    <tr>
      <td>@getFilterData</td>
      <td>Emitted to fetch filter data</td>
      <td>function</td>
      <td>-</td>
    </tr>
    <tr>
      <td>@update:selected</td>
      <td>Emitted when a filter option is selected</td>
      <td>function</td>
      <td>-</td>
    </tr>
    <tr>
      <td>@selectedFilter</td>
      <td>Emitted when a filter is applied.</td>
      <td>function</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

<script setup>
import { ref } from 'vue';
import SprFilter from '@/components/filter/filter.vue';

const options = [
    { column: '', isSelected: false, text: 'sample 1', subtext: '', value: 'sample1' },
    { column: '', isSelected: false, text: 'sample 2', subtext: '', value: 'sample2' },
    { column: '', isSelected: false, text: 'sample 4', subtext: 'subtext', value: 'sample4' },
    { column: '', isSelected: false, text: 'sample 5', subtext: 'subtext', value: 'sample5' },
];

  const filterMenuList = ref([
    { count: 0, isFilterVisible: false, columnName: 'Employee Type', field: 'employeeType' },
    { count: 0, isFilterVisible: false, columnName: 'Department', field: 'department' },
    { count: 0, isFilterVisible: false, columnName: 'Location', field: 'location' },
    { count: 0, isFilterVisible: false, columnName: 'Region', field: 'region' },
    { count: 0, isFilterVisible: false, columnName: 'Job Level', field: 'jobLevel' },
  ]);

  const filterMenuOptions = [
    { column: 'location', isSelected: false, text: 'sample 1', subtext: 'subtext', value: 'sample1' },
    { column: 'location', isSelected: false, text: 'sample 2', subtext: 'subtext', value: 'sample2' },
    { column: 'location', isSelected: false, text: 'sample 3', subtext: 'subtext', value: 'sample3' },
    { column: 'location', isSelected: false, text: 'sample 4', subtext: 'subtext', value: 'sample4' },
    { column: 'location', isSelected: false, text: 'sample 5', subtext: 'subtext', value: 'sample5' },
];

const options1 = [
    { column: '', isSelected: false, text: 'sample 1', subtext: '', value: 'sample1' },
    { column: '', isSelected: false, text: 'sample 2', subtext: '', value: 'sample2' },
    { column: '', isSelected: false, text: 'sample 4', subtext: 'subtext', value: 'sample4' },
    { column: '', isSelected: false, text: 'sample 5', subtext: 'subtext', value: 'sample5' },
];

  const filterMenuList1 = ref([
    { count: 0, isFilterVisible: false, columnName: 'Employee Type', field: 'employeeType' },
    { count: 0, isFilterVisible: false, columnName: 'Department', field: 'department' },
    { count: 0, isFilterVisible: false, columnName: 'Location', field: 'location' },
    { count: 0, isFilterVisible: false, columnName: 'Region', field: 'region' },
    { count: 0, isFilterVisible: false, columnName: 'Job Level', field: 'jobLevel' },
  ]);

  const filterMenuOptions1 = [
    { column: 'location', isSelected: false, text: 'sample 1', subtext: 'subtext', value: 'sample1' },
    { column: 'location', isSelected: false, text: 'sample 2', subtext: 'subtext', value: 'sample2' },
    { column: 'location', isSelected: false, text: 'sample 3', subtext: 'subtext', value: 'sample3' },
    { column: 'location', isSelected: false, text: 'sample 4', subtext: 'subtext', value: 'sample4' },
    { column: 'location', isSelected: false, text: 'sample 5', subtext: 'subtext', value: 'sample5' },
];



const selectedOptions = ref([]);
const selectedOptions1 = ref([]);
const searchValue = ref('')
const searchValue1 = ref('')


const handleSelected = (e) => {
  console.log('selected', e)
}
</script>
