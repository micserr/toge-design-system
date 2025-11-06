---
title: Attribute Filter
descripttion: The Attribute Filter component provides a user interface for filtering items based on various attributes. By default, it utilizes the chip component as the trigger element and the list component to display filter options, but it can be customized to use other components as needed.
outline: deep
---

# Attribute Filter

The Attribute Filter component provides a user interface for filtering items based on various attributes. By default, it utilizes the chip component as the trigger element and the list component to display filter options, but it can be customized to use other components as needed.

## Basic Usage

<SprAttributeFilter
id="attribute_filter1"
:filter-label="'Status'"
width="70px"
popper-width="300px"
placement="bottom-start"
:filter-menu-list="filterList" 
/>

```vue
<template>
  <SprAttributeFilter
    id="attribute_filter1"
    :filter-label="'Status'"
    width="70px"
    popper-width="300px"
    placement="bottom-start"
    :filter-menu-list="filterList"
  />
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const filterList = ref([
  { text: 'Approved', value: 'Approved' },
  { text: 'Completed', value: 'Completed' },
  { text: 'In Progress', value: 'In Progress' },
  { text: 'Pending', value: 'Pending' },
  { text: 'Rejected', value: 'Rejected' },
  { text: 'On Hold', value: 'On Hold' },
]);
</script>
```

## Multi Select

<SprAttributeFilter
id="attribute_filter5"
:filter-label="'Status'"
width="70px"
popper-width="300px"
placement="bottom-start"
:multiselect="true"
:filter-menu-list="filterList" 
/>

```vue
<template>
  <SprAttributeFilter
    id="attribute_filter5"
    :filter-label="'Status'"
    width="70px"
    popper-width="300px"
    placement="bottom-start"
    :filter-menu-list="filterList"
  />
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const filterList = ref([
  { text: 'Approved', value: 'Approved' },
  { text: 'Completed', value: 'Completed' },
  { text: 'In Progress', value: 'In Progress' },
  { text: 'Pending', value: 'Pending' },
  { text: 'Rejected', value: 'Rejected' },
  { text: 'On Hold', value: 'On Hold' },
]);
</script>
```

## Attribute Filter Trigger

By default, Attribute Filter is triggered by the chip component. You can change the trigger component by providing a default slot.

<SprAttributeFilter
  id="attribute_filter2"
  :filter-label="'Status'"
  width="70px"
  popper-width="300px"
  placement="bottom-start"
  :filter-menu-list="filterList">
<SprButton tone="success"> Status </SprButton>
</SprAttributeFilter>

```vue
<template>
  <SprAttributeFilter
    id="attribute_filter2"
    :filter-label="'Status'"
    width="70px"
    popper-width="300px"
    placement="bottom-start"
    :filter-menu-list="filterList"
  >
    <SprButton tone="success"> Status </SprButton>
  </SprAttributeFilter>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const filterList = ref([
  { text: 'Approved', value: 'Approved' },
  { text: 'Completed', value: 'Completed' },
  { text: 'In Progress', value: 'In Progress' },
  { text: 'Pending', value: 'Pending' },
  { text: 'Rejected', value: 'Rejected' },
  { text: 'On Hold', value: 'On Hold' },
]);
</script>
```

## Search

To render a search input inside the Attribute Filter popper, set the `searchable` prop to `true`. You can also bind a model to the search input using the `v-model:search` directive.

::: info
For API searching, disable local searching by setting the `disableLocalSearch` prop to `true`.
:::

<div class="spr-flex spr-items-center spr-gap-2">
  <SprAttributeFilter
    id="attribute_filter3"
    :filter-label="'Status w/ Local Search'"
    width="180px"
    v-model:search="searchString1"
    popper-width="300px"
    placement="bottom-start"
    :searchable="true"
    :filter-menu-list="filterList" 
  />

<SprAttributeFilter
id="attribute_filter4"
:filter-label="'Status w/o Local Search'"
width="180px"
popper-width="300px"
v-model:search="searchString2"
placement="bottom-start"
:searchable="true"
:disable-local-search="true"
:filter-menu-list="filterList"
@update:search="handleSearch"
/>

</div>

```vue
<template>
  <div class="spr-flex spr-items-center spr-gap-2">
    <SprAttributeFilter
      id="attribute_filter3"
      :filter-label="'Status w/ Local Search'"
      width="180px"
      v-model:search="searchString1"
      popper-width="300px"
      placement="bottom-start"
      :searchable="true"
      :filter-menu-list="filterList"
    />

    <SprAttributeFilter
      id="attribute_filter4"
      :filter-label="'Status w/o Local Search'"
      width="180px"
      popper-width="300px"
      placement="bottom-start"
      :searchable="true"
      :disable-local-search="true"
      :filter-menu-list="filterList"
      @update:search="handleSearch"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const searchString1 = ref('');
const searchString2 = ref('');

const filterList = ref([
  { text: 'Approved', value: 'Approved' },
  { text: 'Completed', value: 'Completed' },
  { text: 'In Progress', value: 'In Progress' },
  { text: 'Pending', value: 'Pending' },
  { text: 'Rejected', value: 'Rejected' },
  { text: 'On Hold', value: 'On Hold' },
]);

const handleSearch = (search: string) => {
  //do something with search term
};
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
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>id</code></td>
      <td>
        <p>Unique identifier for the component</p>
      </td>
      <td>string</td>
      <td>'attribute_filter'</td>
    </tr>
    <tr>
      <td><code>filterLabel</code></td>
      <td>
        <p>Label displayed on the filter trigger</p>
      </td>
      <td>string</td>
      <td>'Filter'</td>
    </tr>
    <tr>
      <td><code>headerLabel</code></td>
      <td>
        <p>Label displayed on the filter popper header</p>
      </td>
      <td>string</td>
      <td>'Add Filter'</td>
    </tr>
    <tr>
      <td><code>disabled</code></td>
      <td>When true, disables the chip component and the filter dropdown from being opened</td>
      <td>boolean</td>
      <td>false</td>
    </tr>        
    <tr>
      <td><code>multiselect</code></td>
      <td>Enables multiple selection of filter options</td>
      <td>boolean</td>
      <td>false</td>
    </tr>            
    <tr>
      <td><code>filterMenuList</code></td>
      <td>List of filter options to display in the dropdown</td>
      <td><code>{text: string, value: string}[]</code> | <code>string[]</code></td>
      <td>[]</td>
    </tr>
    <tr>
      <td><code>searchable</code></td>
      <td>Enable to render a search input within the filter dropdown</td>
      <td>boolean</td>
      <td>false</td>
    </tr>    
    <tr>
      <td><code>disableLocalSearch</code></td>
      <td>When true, disables the local search functionality within the filter dropdown</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>showSelectedFilterCount</code></td>
      <td>When true, displays a badge in the chip component trigger indicating the number of selected filters</td>
      <td>boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td><code>selectedFilterCount</code></td>
      <td>Set the text to display in the badge indicating the number of selected filters. If not provided and the no list prop is false, it will default to the length of the selected filters.</td>
      <td>string</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td><code>badgeVariant</code></td>
      <td>Variant style for the badge displayed on the chip component trigger</td>
      <td>'brand' | 'information' | 'danger' | 'disabled'</td>
      <td>'danger'</td>
    </tr>
    <tr>
      <td><code>noList</code></td>
      <td>When true, will not display the filter list. To be used if body slot is provided.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>clearable</code></td>
      <td>When true, will render an X icon in the default chip trigger to clear selected filters or if no list, will trigger the onClearFilter event.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

### Dropdown Specific Props

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
      <td><code>placement</code></td>
      <td>Controls the position of the filter dropdown relative to the trigger</td>
      <td>'auto' | 'auto-start' | 'auto-end' | 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end'</td>
      <td>'bottom'</td>
    </tr>
    <tr>
      <td><code>wrapper-position</code></td>
      <td>CSS position value for the filter dropdown</td>
      <td>string</td>
      <td>'relative'</td>
    </tr>
    <tr>
      <td><code>width</code></td>
      <td>Width of the filter wrapper (including the trigger element)</td>
      <td>string</td>
      <td>'100%'</td>
    </tr>
    <tr>
      <td><code>popper-width</code></td>
      <td>Width of the filter dropdown that appears when triggered</td>
      <td>string</td>
      <td>'100%'</td>
    </tr>
    <tr>
      <td><code>popper-inner-width</code></td>
      <td>Width of the inner content area of the filter dropdown</td>
      <td>string</td>
      <td>'unset'</td>
    </tr>
    <tr>
      <td><code>popper-strategy</code></td>
      <td>Positioning strategy for the filter dropdown, especially important in modals</td>
      <td>'absolute' | 'fixed'</td>
      <td>'absolute'</td>
    </tr>
    <tr>  
      <td><code>triggers</code></td>
      <td>Array of events that will trigger the filter dropdown to open</td>
      <td>'click' | 'hover' | 'focus' | 'touch'[]</td>
      <td>[]</td>
    </tr>
    <tr>
      <td><code>popper-triggers</code></td>
      <td>Array of events that will trigger the filter dropdown menu (popper element) to open</td>
      <td>'click' | 'hover' | 'focus' | 'touch'[]</td>
      <td>[]</td>
    </tr>
    <tr>
      <td><code>auto-hide</code></td>
      <td>When true, automatically hides the filter dropdown when clicking outside it</td>
      <td>boolean</td>
      <td>true</td>
    </tr>
  </tbody>
</table>

### Events

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Parameters</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>onSaveFilter</td>
      <td>Emitted when clicking the save button in the default footer</td>
      <td>(savedFilters: MenuListType[])</td>
    </tr>
    <tr>
      <td>onOpenFilter</td>
      <td>Emitted when the filter dropdown is shown</td>
      <td>-</td>
    </tr>
    <tr>
      <td>onCloseFilter</td>
      <td>Emitted when the filter dropdown is closed</td>
      <td>-</td>
    </tr>
    <tr>
      <td>onSelectFilter</td>
      <td>Emitted when selecting a filter option from the dropdown</td>
      <td>(selectedFilters: MenuListType[])</td>
    </tr>
    <tr>
      <td>infiniteScrollTrigger</td>
      <td>Emitted when the user scrolls to the bottom of the filter dropdown</td>
      <td>-</td>
    </tr>
    <tr>
      <td>@update:search</td>
      <td>Emitted when the search input value changes</td>
      <td>(searchString: string)</td>
    </tr>
    <tr>
      <td>onClearFilter</td>
      <td>Emitted when the clear action is triggered to reset selected filters</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

### Slots

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>default</td>
      <td>Slot for the trigger of the filter dropdown. Defaults to the chip component</td>
    </tr>
    <tr>
      <td>header</td>
      <td>Slot for the header inside the filter dropdown</td>
    </tr>
    <tr>
      <td>actions</td>
      <td>Slot for additional actions inside the filter dropdown. Slotted between the header (search container if searchable) and the body</td>
    </tr>
    <tr>
      <td>body</td>
      <td>Slot for the main content. Defaults to the list component.</td>
    </tr>
    <tr>
      <td>footer</td>
      <td>Slot for the footer inside the filter dropdown. Defaults to a cancel and save button</td>
    </tr>
  </tbody>
</table>

<script lang="ts" setup>  
  import SprAttributeFilter from '@/components/attribute-filter/attribute-filter.vue'
  import SprButton from '@/components/button/button.vue'
  
  import { ref } from 'vue'

  const searchString1 = ref('')
  const searchString2 = ref('')

  const filterList = ref([
    { text: 'Approved', value: 'Approved' },    
    { text: 'Completed', value: 'Completed' },
    { text: 'In Progress', value: 'In Progress' },
    { text: 'Pending', value: 'Pending' },
    { text: 'Rejected', value: 'Rejected' },
    { text: 'On Hold', value: 'On Hold' },
  ])

</script>
