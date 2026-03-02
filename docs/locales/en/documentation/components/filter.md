---
title: Filter
descripttion: The `Filter` component is a versatile and powerful filtering solution designed for complex data filtering scenarios. It supports both simple search functionality and advanced filtering options with category-based filtering, making it ideal for applications that require robust data exploration capabilities.
outline: deep
---

# Filter

The `Filter` component is a versatile and powerful filtering solution designed for complex data filtering scenarios. It supports both simple search functionality and advanced filtering options with category-based filtering, making it ideal for applications that require robust data exploration capabilities.

## Features

- **Multi-select Filtering**: Select multiple options from dropdown menus with checkbox controls.
- **Advanced Filter Menu**: Create complex filter combinations with category-based filtering through a nested menu system.
- **Infinite Scrolling**: Built-in support for loading large datasets incrementally for better performance.
- **Search Functionality**: Search capabilities for both main options and advanced filter options.
- **External API Integration**: Seamless integration with external search and filter APIs.
- **Avatar Support**: Display user avatars or other visual identifiers alongside filter options.
- **Customizable UI**: Extensive slot system for customizing appearance and behavior.
- **Accessibility**: Keyboard navigation and ARIA support for better accessibility.
- **Error Handling**: Built-in error state and helper text support for validation scenarios.
- **Responsive Design**: Adapts to different screen sizes and container widths.

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

### Props

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default</th>
      <th>Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>modelValue</code></td>
      <td>The selected filter values. Supports v-model binding for selection state management.</td>
      <td><code>Array</code> | <code>String</code></td>
      <td><code>[]</code></td>
      <td>No</td>
    </tr>
    <tr>
      <td><code>options</code></td>
      <td>The list of filter options. Each option should have the structure: <code>{ column: string, isSelected: boolean, text: string, value: string, subtext?: string, avatar?: string }</code></td>
      <td><code>Array</code></td>
      <td><code>[]</code></td>
      <td>Yes</td>
    </tr>
    <tr>
      <td><code>label</code></td>
      <td>Label for the filter input field.</td>
      <td><code>String</code></td>
      <td><code>''</code></td>
      <td>No</td>
    </tr>
    <tr>
      <td><code>placeholder</code></td>
      <td>Placeholder text for the filter input field.</td>
      <td><code>String</code></td>
      <td><code>''</code></td>
      <td>No</td>
    </tr>
    <tr>
      <td><code>disabled</code></td>
      <td>Disables the filter input, preventing user interaction.</td>
      <td><code>Boolean</code></td>
      <td><code>false</code></td>
      <td>No</td>
    </tr>
    <tr>
      <td><code>filterable</code></td>
      <td>Enables the advanced filter menu with column-based filtering.</td>
      <td><code>Boolean</code></td>
      <td><code>false</code></td>
      <td>No</td>
    </tr>
    <tr>
      <td><code>id</code></td>
      <td>Unique identifier for the filter component. Used for accessibility and DOM manipulation.</td>
      <td><code>String</code></td>
      <td><code>'spr-filter'</code></td>
      <td>No</td>
    </tr>
    <tr>
      <td><code>filterMenu</code></td>
      <td>List of advanced filter menu categories. Each item should have: <code>{ columnName: string, field: string, isFilterVisible?: boolean, count?: number }</code></td>
      <td><code>Array</code></td>
      <td><code>[]</code></td>
      <td>No</td>
    </tr>
    <tr>
      <td><code>filterData</code></td>
      <td>Data for the advanced filter menu. Similar structure to <code>options</code> but specifically for the advanced filter.</td>
      <td><code>Array</code></td>
      <td><code>[]</code></td>
      <td>No</td>
    </tr>
    <tr>
      <td><code>loading</code></td>
      <td>Indicates if the advanced filter menu is in a loading state.</td>
      <td><code>Boolean</code></td>
      <td><code>false</code></td>
      <td>No</td>
    </tr>
    <tr>
      <td><code>filling</code></td>
      <td>Indicates if the main filter dropdown is in a loading state.</td>
      <td><code>Boolean</code></td>
      <td><code>false</code></td>
      <td>No</td>
    </tr>
    <tr>
      <td><code>search</code></td>
      <td>Search query for the main filter. Supports v-model:search binding.</td>
      <td><code>String</code></td>
      <td><code>''</code></td>
      <td>No</td>
    </tr>
    <tr>
      <td><code>searchFilter</code></td>
      <td>Search query for the advanced filter menu. Supports v-model:searchFilter binding.</td>
      <td><code>String</code></td>
      <td><code>''</code></td>
      <td>No</td>
    </tr>
    <tr>
      <td><code>width</code></td>
      <td>Width of the filter component. Accepts CSS width values (px, %, rem, etc.).</td>
      <td><code>String</code></td>
      <td><code>'100%'</code></td>
      <td>No</td>
    </tr>
    <tr>
      <td><code>deselected</code></td>
      <td>Value of the deselected filter option. Used to remove selections from outside the component.</td>
      <td><code>String</code></td>
      <td><code>''</code></td>
      <td>No</td>
    </tr>
    <tr>
      <td><code>hasSearchApi</code></td>
      <td>Enables external search API integration for the main filter. When true, local filtering is disabled.</td>
      <td><code>Boolean</code></td>
      <td><code>false</code></td>
      <td>No</td>
    </tr>
    <tr>
      <td><code>hasAvatar</code></td>
      <td>Enables avatar display for filter options. Use the <code>avatar</code> property in options to provide image URLs.</td>
      <td><code>Boolean</code></td>
      <td><code>false</code></td>
      <td>No</td>
    </tr>
    <tr>
      <td><code>helperText</code></td>
      <td>Helper text displayed below the filter component. Useful for providing additional context or instructions.</td>
      <td><code>String</code></td>
      <td><code>''</code></td>
      <td>No</td>
    </tr>
    <tr>
      <td><code>error</code></td>
      <td>Enables error state styling for the filter. Use with validation patterns.</td>
      <td><code>Boolean</code></td>
      <td><code>false</code></td>
      <td>No</td>
    </tr>
    <tr>
      <td><code>hasAdvancedFilterApi</code></td>
      <td>Enables external search API integration for the advanced filter menu. When true, local filtering is disabled.</td>
      <td><code>Boolean</code></td>
      <td><code>false</code></td>
      <td>No</td>
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
      <th>Usage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>getFilterData</code></td>
      <td><code>String</code></td>
      <td>Triggered when fetching filter data for a specific column in the advanced filter. The payload is the column field name.</td>
      <td><code>@getFilterData="handleGetFilterData"</code></td>
    </tr>
    <tr>
      <td><code>update:modelValue</code></td>
      <td><code>Array</code></td>
      <td>Updates the selected filter values. Used internally for v-model binding.</td>
      <td>Handled by <code>v-model</code> binding</td>
    </tr>
    <tr>
      <td><code>update:search</code></td>
      <td><code>String</code></td>
      <td>Updates the search query for the main filter. Used internally for v-model:search binding.</td>
      <td>Handled by <code>v-model:search</code> binding</td>
    </tr>
    <tr>
      <td><code>update:searchFilter</code></td>
      <td><code>String</code></td>
      <td>Updates the search query for the advanced filter menu. Used internally for v-model:searchFilter binding.</td>
      <td>Handled by <code>v-model:searchFilter</code> binding</td>
    </tr>
    <tr>
      <td><code>selectedFilter</code></td>
      <td><code>Array</code></td>
      <td>Emits the selected filter options from the advanced filter menu. Contains all selected options across all columns.</td>
      <td><code>@selectedFilter="handleSelectedFilter"</code></td>
    </tr>
    <tr>
      <td><code>infiniteScrollTrigger</code></td>
      <td><code>Boolean</code></td>
      <td>Triggered when infinite scrolling is activated for the main filter. Used for loading more data in paginated scenarios.</td>
      <td><code>@infiniteScrollTrigger="loadMoreOptions"</code></td>
    </tr>
    <tr>
      <td><code>infiniteScrollFilterTrigger</code></td>
      <td><code>String</code></td>
      <td>Triggered when infinite scrolling is activated for the advanced filter. The payload is the current column being scrolled.</td>
      <td><code>@infiniteScrollFilterTrigger="loadMoreFilterOptions"</code></td>
    </tr>
  </tbody>
</table>

### Slots

<table>
  <thead>
    <tr>
      <th>Slot Name</th>
      <th>Description</th>
      <th>Usage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>default</code></td>
      <td>Slot for customizing the filter input field. Replaces the default input component entirely.</td>
      <td>
      <pre><code>&lt;spr-filter&gt;
  &lt;custom-input /&gt;
&lt;/spr-filter&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><code>loading</code></td>
      <td>Slot for displaying a custom loading state in the advanced filter menu. Used when loading filter options.</td>
      <td>
      <pre><code>&lt;template #loading&gt;
  &lt;custom-loader /&gt;
&lt;/template&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><code>empty</code></td>
      <td>Slot for displaying a custom empty state in the advanced filter menu. Used when no filter options are found.</td>
      <td>
      <pre><code>&lt;template #empty&gt;
  &lt;empty-state message="No filters found" /&gt;
&lt;/template&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><code>loading-state</code></td>
      <td>Slot for displaying a custom loading state in the main filter dropdown. Used when loading main options.</td>
      <td>
      <pre><code>&lt;template #loading-state&gt;
  &lt;custom-loader /&gt;
&lt;/template&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><code>empty-state</code></td>
      <td>Slot for displaying a custom empty state in the main filter dropdown. Used when no options match the search.</td>
      <td>
      <pre><code>&lt;template #empty-state&gt;
  &lt;empty-state message="No results found" /&gt;
&lt;/template&gt;</code></pre>
      </td>
    </tr>
  </tbody>
</table>

## Advanced Features

### Infinite Scrolling

The component supports infinite scrolling for both the main filter and the advanced filter menu. This feature is particularly useful for handling large datasets that should be loaded incrementally to improve performance.

#### Implementation

1. **Main Filter Infinite Scroll**:
   - Listen for the `infiniteScrollTrigger` event which is emitted when the user scrolls to the bottom of the main filter dropdown.
   - Load additional data and append it to the `options` array.

```vue
<spr-filter v-model="selectedOptions" :options="options" @infiniteScrollTrigger="loadMoreOptions" />

<script setup>
const loadMoreOptions = () => {
  // Load more data from your API
  const newOptions = await fetchMoreOptions(page.value++);
  options.value = [...options.value, ...newOptions];
};
</script>
```

2. **Advanced Filter Infinite Scroll**:
   - Listen for the `infiniteScrollFilterTrigger` event which provides the column field being scrolled.
   - Load additional data for that specific column.

```vue
<spr-filter
  v-model="selectedOptions"
  :options="options"
  :filter-menu="filterMenu"
  :filter-data="filterData"
  filterable
  @infiniteScrollFilterTrigger="loadMoreFilterOptions"
/>

<script setup>
const loadMoreFilterOptions = (column) => {
  // Load more filter options for the specific column
  const newFilterOptions = await fetchMoreFilterOptions(column, page.value++);
  filterData.value = [...filterData.value, ...newFilterOptions];
};
</script>
```

### External Search API Integration

The Filter component supports integration with external search APIs for both the main filter and advanced filter menu. This allows for server-side filtering and searching.

#### Main Filter Search API

Enable the `hasSearchApi` prop to use an external API for filtering the main options. When enabled, the component doesn't filter options locally but relies on the external API to provide filtered results.

```vue
<spr-filter
  v-model="selectedOptions"
  v-model:search="searchValue"
  :options="options"
  :has-search-api="true"
  @update:search="handleSearchChange"
/>

<script setup>
const handleSearchChange = async (query) => {
  // Call your external API with the search query
  options.value = await searchApi(query);
};
</script>
```

#### Advanced Filter Search API

Enable the `hasAdvancedFilterApi` prop to use an external API for the advanced filter menu search. This works similarly to the main search API but for the advanced filter menu.

```vue
<spr-filter
  v-model="selectedOptions"
  :filter-menu="filterMenu"
  :filter-data="filterData"
  :has-advanced-filter-api="true"
  filterable
  @update:searchFilter="handleAdvancedSearch"
/>

<script setup>
const handleAdvancedSearch = async (query) => {
  // Call your external API with the search query and current column
  filterData.value = await searchAdvancedApi(query, selectedColumn.value);
};
</script>
```

### Avatar Support

The Filter component can display avatars alongside filter options to provide visual cues or user representations.

Enable the `hasAvatar` prop to display avatars for filter options. Provide an `avatar` property in each option object:

```vue
<spr-filter v-model="selectedOptions" :options="optionsWithAvatars" has-avatar />

<script setup>
const optionsWithAvatars = ref([
  {
    column: '',
    isSelected: false,
    text: 'John Doe',
    value: 'john',
    avatar: 'https://example.com/avatars/john.jpg',
  },
  {
    column: '',
    isSelected: false,
    text: 'Jane Smith',
    value: 'jane',
    avatar: 'https://example.com/avatars/jane.jpg',
  },
]);
</script>
```

If an avatar URL is not provided, the component will display an initial-based avatar using the first letter of the `text` property.

### External Deselection

The Filter component allows for deselecting options from outside the component, which is useful for implementing custom selection interfaces like external chips or badges.

```vue
<template>
  <div class="spr-flex spr-gap-2">
    <div v-for="selected in selectedOptions">
      <spr-button @click="removeSelected(selected.value)">
        {{ selected.text }}
        <Icon icon="ph:x" />
      </spr-button>
    </div>
  </div>
  <spr-filter v-model="selectedOptions" :options="options" :deselected="deselectedOption" />
</template>

<script setup>
const selectedOptions = ref([]);
const deselectedOption = ref('');

const removeSelected = (value) => {
  deselectedOption.value = value;
  // Reset the deselected value after it's been processed
  setTimeout(() => {
    deselectedOption.value = '';
  }, 100);
};
</script>
```

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
