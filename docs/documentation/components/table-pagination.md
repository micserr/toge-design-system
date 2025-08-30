# Table Pagination

The Table Pagination component provides a standardized way to handle pagination controls for tables in your application. It includes features like row count selection, page navigation, and optionally editable current page input.

## Basic Usage
<div class="spr-h-fit">
  <spr-table :headers="headers" :data-table="data" :full-height="true">
    <template #footer>
      <spr-table-pagination
        v-model:selected-row-count="selectedRowCount"
        v-model:current-page="currentPage"
        :total-items="totalItems"
        :dropdown-selection="dropdownSelection"
        :version="'backend'"
        @previous="handlePrevious"
        @next="handleNext"
      />
    </template>
  </spr-table>
</div>

```vue
<template>
  <div class="spr-h-fit">
    <spr-table :headers="headers" :data-table="data" :full-height="true">
      <template #footer>
        <spr-table-pagination
          v-model:selected-row-count="selectedRowCount"
          v-model:current-page="currentPage"
          :total-items="totalItems"
          :dropdown-selection="dropdownSelection"
          :version="'backend'"
          @previous="handlePrevious"
          @next="handleNext"
        />
      </template>
    </spr-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import SprTable from "@/components/table/table.vue";
import SprTablePagination from "@/components/table/table-pagination/table-pagination.vue"
import tableData from "@/mock/tableData";

const rawData = ref([
  ...Array.from({ length: 100 }, (_, i) => ({
    name: {
      title: `Shift ${i + 1}`,
      subtext: `Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam. Item ${i + 1}`,
      image: `https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg`,
    },
    lastUpdate: {
      title: `Nov ${((i % 30) + 1)}, 2025`,
      subtext: `Lorem ipsum dolor item ${i + 1}`,
      image: `https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg`,
    },
    status: {
      title: ['Success', 'Pending', 'Failed'][i % 3],
      subtext: `Lorem ipsum dolor sit amet, consectetur, sed etiam. Status ${i + 1}`,
      image: `https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg`,
    },
  }))
]);

const headers = ref([
  { field: 'name', name: 'Role Name', hasAvatar: true, hasSubtext: true },
  { field: 'lastUpdate', name: 'Date'},
  { field: 'status', name: 'Status' },
]);

const totalItems = ref(tableData.value.length);
const currentPage = ref(1);
const dropdownSelection = [
  { text: '10', value: '10' },
  { text: '20', value: '20' },
  { text: '30', value: '30' },
];

const selectedRowCount = ref(10);
const data = ref(rawData.value.slice(0, selectedRowCount.value));

const updateDataTable = () => {
  data.value = rawData.value.slice((currentPage.value - 1) * selectedRowCount.value, currentPage.value * selectedRowCount.value);
}

const handlePrevious = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    updateDataTable();
  }
};

const handleNext = () => {
  if (currentPage.value * selectedRowCount.value < totalItems.value) {
    currentPage.value++;
    updateDataTable();
  }
};

watch(selectedRowCount, () => {
  currentPage.value = 1; // Reset to first page when row count changes
  updateDataTable();
});

watch(currentPage, (newValue) => {
  if(!currentPage.value) return;
  else if (currentPage.value > Math.ceil(totalItems.value / selectedRowCount.value)) {
    currentPage.value = Math.ceil(totalItems.value / selectedRowCount.value);
  }
  updateDataTable();
});
</script>
```

## With Editable Current Page

You can enable direct page number input by setting the `editable-current-page` prop:

<div class="spr-h-fit">
  <spr-table :headers="headers" :data-table="data" :full-height="true">
    <template #footer>
      <spr-table-pagination
        v-model:selected-row-count="selectedRowCount"
        v-model:current-page="currentPage"
        :total-items="totalItems"
        :dropdown-selection="dropdownSelection"
        :version="'backend'"
        editable-current-page
        @previous="handlePrevious"
        @next="handleNext"
      />
    </template>
  </spr-table>
</div>

```vue
<template>
  <spr-table-pagination
    :selected-row-count="10"
    :total-items="100"
    :current-page="1"
    :editable-current-page="true"
    :dropdown-selection="[
      { text: '10', value: '10' },
      { text: '20', value: '20' },
      { text: '50', value: '50' },
      { text: '100', value: '100' }
    ]"
  />
</template>
```

## API Reference

### Props

<div class="spr-table-container">
  <table class="spr-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default</th>
        <th>Required</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>selectedRowCount</td>
        <td>number</td>
        <td>10</td>
        <td>Yes</td>
        <td>The number of rows to display per page</td>
      </tr>
      <tr>
        <td>totalItems</td>
        <td>number</td>
        <td>1</td>
        <td>Yes</td>
        <td>Total number of items in the dataset</td>
      </tr>
      <tr>
        <td>currentPage</td>
        <td>number</td>
        <td>1</td>
        <td>Yes</td>
        <td>Current active page number</td>
      </tr>
      <tr>
        <td>dropdownSelection</td>
        <td>Array<{ text: string; value: string }></td>
        <td>[
        { text: 10, value: 10 },
        { text: 20, value: 20 },
        { text: 50, value: 50 },
        { text: 100, value: 100 },
        ]</td>
        <td>Yes</td>
        <td>Available options for rows per page</td>
      </tr>
      <tr>
        <td>bordered</td>
        <td>boolean</td>
        <td>true</td>
        <td>No</td>
        <td>Whether to show border around the pagination component</td>
      </tr>
      <tr>
        <td>editableCurrentPage</td>
        <td>boolean</td>
        <td>false</td>
        <td>No</td>
        <td>Enable direct input of page number</td>
      </tr>
    </tbody>
  </table>
</div>

### Events

<div class="spr-table-container">
  <table class="spr-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Parameters</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>update:selectedRowCount</td>
        <td>(value: number)</td>
        <td>Emitted when the number of rows per page changes</td>
      </tr>
      <tr>
        <td>update:currentPage</td>
        <td>(value: number)</td>
        <td>Emitted when the current page number changes</td>
      </tr>
      <tr>
        <td>previous</td>
        <td>-</td>
        <td>Emitted when the previous page button is clicked</td>
      </tr>
      <tr>
        <td>next</td>
        <td>-</td>
        <td>Emitted when the next page button is clicked</td>
      </tr>
    </tbody>
  </table>
</div>

<script setup lang="ts">
import { ref, watch } from 'vue';
import SprTable from "@/components/table/table.vue";
import SprTablePagination from "@/components/table/table-pagination/table-pagination.vue";
import tableData from "@/mock/tableData";

const headers = ref([
  { field: 'name', name: 'Role Name', hasAvatar: true, hasSubtext: true },
  { field: 'lastUpdate', name: 'Date'},
  { field: 'status', name: 'Status' },
]);

const totalItems = ref(tableData.value.length);
const currentPage = ref(1);
const dropdownSelection = [
  { text: '10', value: '10' },
  { text: '20', value: '20' },
  { text: '30', value: '30' },
];

const selectedRowCount = ref(10);
const data = ref(tableData.value.slice(0, selectedRowCount.value));
const updateDataTable = () => {
  data.value = tableData.value.slice((currentPage.value - 1) * selectedRowCount.value, currentPage.value * selectedRowCount.value);
}
watch(selectedRowCount, () => {
  currentPage.value = 1; // Reset to first page when row count changes
  updateDataTable();
});

watch(currentPage, (newValue) => {
  if(!currentPage.value) return;
  else if (currentPage.value > Math.ceil(totalItems.value / selectedRowCount.value)) {
    currentPage.value = Math.ceil(totalItems.value / selectedRowCount.value);
  }
  updateDataTable();
});

const handlePrevious = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    updateDataTable();
  }
};

const handleNext = () => {
  if (currentPage.value * selectedRowCount.value < totalItems.value) {
    currentPage.value++;
    updateDataTable();
  }
};
</script>
