---
title: Calendar Component
descripttion: The Calendar component is a comprehensive and customizable weekly calendar designed for employee scheduling and management. It provides a full-featured interface for viewing and interacting with employee schedules, including support for weekly date navigation, employee listing with profile information, multiple shift display, rest days, infinite scrolling, empty state customization, loading states, and responsive design.
outline: deep
---

# Calendar Component

The `Calendar` component is a comprehensive and customizable weekly calendar designed for employee scheduling and management. It provides a full-featured interface for viewing and interacting with employee schedules, including support for:

- Weekly date navigation with intuitive controls
- Employee listing with profile information and work hour tracking
- Multiple shift display for each day with detailed information
- Support for rest days and custom shift types
- Infinite scrolling for large employee lists
- Empty state customization
- Loading states and skeleton loaders
- Responsive design with proper handling of overflows

## Usage

### Basic Example

<div class="spr-text-base">
  <div v-if="searchEmployee">
  <span class="spr-font-medium">Search Employee:</span>
    {{searchEmployee}}
  </div>
  <div v-if="selectedCell.employeeId">
  <span class="spr-font-medium">Selected Cell: </span>
  {{selectedCell}}
  </div>
  <div v-if="selectedCompany">
  <span class="spr-font-medium">Selected Company:</span>
    {{selectedCompany}}
  </div>
  <div v-if="selectedDepartment">
  <span class="spr-font-medium">Selected Department:</span>
    {{selectedDepartment}}
  </div>
  <div v-if="selectedBranch">
  <span class="spr-font-medium">Selected Branch:</span>
    {{selectedBranch}}
  </div>
</div>

<div class="spr-overflow-x-auto">
  <div>
    <SprCalendar
      v-model:search="searchEmployee"
      v-model:selected-cell="selectedCell"
      v-model:selected-company="selectedCompany"
      v-model:selected-department="selectedDepartment"
      v-model:selected-branch="selectedBranch"
      :employees="employees"
      :initial-date="initialDate"
      :company-options="companyOptions"
      :department-options="departmentOptions"
      :branch-options="branchOptions"
    />
  </div>
</div>

```vue
<template>
  <SprCalendar
    v-model:search="searchEmployee"
    v-model:selected-cell="selectedCell"
    v-model:selected-company="selectedCompany"
    v-model:selected-department="selectedDepartment"
    v-model:selected-branch="selectedBranch"
    :employees="employees"
    :initial-date="initialDate"
    :company-options="companyOptions"
    :department-options="departmentOptions"
    :branch-options="branchOptions"
  />
</template>

<script setup lang="ts">
import SprCalendar from '@/components/calendar/calendar.vue';
import { ref } from 'vue';

const initialDate = new Date();
const searchEmployee = ref();
const selectedCompany = ref('');
const selectedDepartment = ref('');
const selectedBranch = ref('');
const selectedCell = ref({
  employeeId: '',
  date: '',
  schedule: null,
});

const employees = [
  {
    id: 1,
    name: 'Theresa Webb',
    position: 'Senior UX Researcher',
    avatar: '',
    highlight: true,
    hoursWorked: 40,
    hoursTarget: 48,
    schedule: {
      '2025-05-05': [{ type: 'restday' }],
      '2025-05-06': [{ startTime: '09:00AM', endTime: '06:00PM', location: 'Office A', type: 'Standard Day Shift' }],
      '2025-05-07': [{ startTime: '09:00AM', endTime: '06:00PM', location: 'Office A', type: 'Standard Day Shift' }],
      '2025-05-13': [{ startTime: '09:00AM', endTime: '06:00PM', location: 'Office A', type: 'Standard Day Shift' }],
      // ...other dates
    },
  },
  {
    id: 2,
    name: 'Kathryn Murphy',
    position: 'Interaction Designer',
    avatar: '',
    highlight: true,
    hoursWorked: 35,
    hoursTarget: 48,
    schedule: {
      '2025-05-05': [{ type: 'restday' }],
      '2025-05-08': [{ startTime: '10:00AM', endTime: '07:00PM', location: 'Office B', type: 'Morning Shift' }],
      '2025-05-10': [{ startTime: '10:00AM', endTime: '07:00PM', location: 'Office B', type: 'Morning Shift' }],
      '2025-05-13': [
        { startTime: '10:00AM', endTime: '06:00PM', location: 'Office a', type: 'Morning Shift' },
        { startTime: '10:00AM', endTime: '07:00PM', location: 'Office B', type: 'Morning Shift' },
        { startTime: '10:00AM', endTime: '08:00PM', location: 'Office c', type: 'Morning Shift' },
        { startTime: '10:00AM', endTime: '09:00PM', location: 'Office d', type: 'Morning Shift' },
      ],
      // ...other dates
    },
  },
  {
    id: 3,
    name: 'Kathryn Murphy',
    position: 'Interaction Designer',
    avatar: '',
    highlight: true,
    hoursWorked: 35,
    hoursTarget: 48,
    schedule: {
      '2025-05-01': [{ type: 'restday' }],
      '2025-05-02': [{ startTime: '10:00AM', endTime: '07:00PM', location: 'Office B', type: 'Morning Shift' }],
      // ...other dates
    },
  },
  {
    id: 4,
    name: 'Kathryn Murphy',
    position: 'Interaction Designer',
    avatar: '',
    highlight: true,
    hoursWorked: 35,
    hoursTarget: 48,
    schedule: {
      '2025-05-12': [{ type: 'restday' }],
      '2025-05-15': [{ startTime: '10:00AM', endTime: '07:00PM', location: 'Office B', type: 'Morning Shift' }],
      // ...other dates
    },
  },
];

const companyOptions = [
  { text: 'All Companies', value: 'all' },
  { text: 'Company A', value: 'company-a' },
  { text: 'Company B', value: 'company-b' },
];

const departmentOptions = [
  { text: 'All Departments', value: 'all' },
  { text: 'Design', value: 'design' },
  { text: 'Development', value: 'development' },
];

const branchOptions = [
  { text: 'All Branches', value: 'all' },
  { text: 'Branch A', value: 'branch-a' },
  { text: 'Branch B', value: 'branch-b' },
];
</script>
```

## Features

### Infinite Scroll

The calendar supports infinite scrolling for loading more employee data:

- Automatically triggers when scrolling near the bottom (50px threshold)
- Emits `loadMore` event when more data should be loaded
- Maintains smooth scrolling experience with proper spacing

Example of handling infinite scroll:

```vue
<template>
  <SprCalendar @load-more="handleLoadMore" :employees="employees" :loading="isLoading" />
</template>

<script setup>
const handleLoadMore = async () => {
  isLoading.value = true;
  // Load more employees here
  await loadMoreEmployees();
  isLoading.value = false;
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
      <td>employees</td>
      <td>Array of employee data to display in the calendar, including schedule information.</td>
      <td>Array</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>initialDate</td>
      <td>The initial date to display in the calendar. The calendar will show the week containing this date.</td>
      <td>Date</td>
      <td>Current date</td>
    </tr>
    <tr>
      <td>loading</td>
      <td>Controls whether to show a loading indicator, typically used during data fetching.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>companyOptions</td>
      <td>Array of options for the company filter dropdown.</td>
      <td>Array&lt;{text: string, value: string}&gt;</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>departmentOptions</td>
      <td>Array of options for the department filter dropdown.</td>
      <td>Array&lt;{text: string, value: string}&gt;</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>branchOptions</td>
      <td>Array of options for the branch filter dropdown.</td>
      <td>Array&lt;{text: string, value: string}&gt;</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>emptyState</td>
      <td>Configuration for the empty state displayed when there are no employees to show.</td>
      <td>Object</td>
      <td>Default empty state</td>
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
      <td>loadMore</td>
      <td>Emitted when the user scrolls near the bottom of the calendar (within 50px), indicating that more employee data should be loaded. Used for implementing infinite scroll.</td>
      <td>-</td>
    </tr>
    <tr>
      <td>onCellClick</td>
      <td>Emitted when a calendar cell is clicked. The parameter contains the employeeId, date, and shift information for the clicked cell.</td>
      <td>(data: SelectedShift)</td>
    </tr>
    <tr>
      <td>update:firstLastDayOfWeek</td>
      <td>Emitted when the visible week range changes, either through navigation or initialization. The dates are formatted as 'YYYY-MM-DD'.</td>
      <td>(range: { firstDay: string, lastDay: string })</td>
    </tr>
    <tr>
      <td>update:sort</td>
      <td>Emitted when the sort order changes by clicking the sort icon. Value will be 'asc', 'desc', or '' (empty string for no sorting).</td>
      <td>(value: string)</td>
    </tr>
    <tr>
      <td>update:search</td>
      <td>Emitted when the search term changes. Used for v-model binding.</td>
      <td>(value: string)</td>
    </tr>
    <tr>
      <td>update:selectedCell</td>
      <td>Emitted when a cell is selected. Used for v-model binding of the selectedCell prop.</td>
      <td>(data: SelectedShift)</td>
    </tr>
    <tr>
      <td>update:selectedCompany</td>
      <td>Emitted when the company filter selection changes. Used for v-model binding.</td>
      <td>(value: string)</td>
    </tr>
    <tr>
      <td>update:selectedDepartment</td>
      <td>Emitted when the department filter selection changes. Used for v-model binding.</td>
      <td>(value: string)</td>
    </tr>
    <tr>
      <td>update:selectedBranch</td>
      <td>Emitted when the branch filter selection changes. Used for v-model binding.</td>
      <td>(value: string)</td>
    </tr>
    <tr>
      <td>onClickEmptyButton</td>
      <td>Emitted when the empty state button is clicked. Can be used to trigger actions like adding a new employee.</td>
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
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>filter</td>
      <td>Slot for customizing the filter section above the calendar. Can be used to add custom filters or controls.</td>
      <td>
        <pre><code>&lt;template #filter&gt;
  &lt;div&gt;Custom Filter Content&lt;/div&gt;
&lt;/template&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td>loading</td>
      <td>Slot for customizing the loading state displayed during data fetching.</td>
      <td>
        <pre><code>&lt;template #loading&gt;
  &lt;div&gt;loading&lt;/div&gt;
&lt;/template&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td>empty-state</td>
      <td>Slot for customizing the empty state shown when there are no employees to display. By default, uses the SprEmptyState component.</td>
      <td>
        <pre><code>&lt;template #empty-state&gt;
  &lt;div&gt;No employees found&lt;/div&gt;
&lt;/template&gt;</code></pre>
      </td>
    </tr>
  </tbody>
</table>

## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark" width="50px" />
</div>

<script setup lang="ts">
import SprCalendar from '@/components/calendar/calendar.vue';
import SprLogo from "@/components/logo/logo.vue";
import { ref } from 'vue';

const initialDate = new Date();
const searchEmployee = ref();
const selectedCompany = ref('');
const selectedDepartment = ref('');
const selectedBranch = ref('');
const selectedCell = ref({
  employeeId: '',
  date: '',
  schedule: null,
});

const employees = [
  {
    id: 1,
    name: 'Theresa Webb',
    position: 'Senior UX Researcher',
    avatar: '',
    highlight: true,
    hoursWorked: 40,
    hoursTarget: 48,
    schedule: {
      '2025-05-05': [{ type: 'restday' }],
      '2025-05-06': [{ startTime: '09:00AM', endTime: '06:00PM', location: 'Office A', type: 'Standard Day Shift' }],
      '2025-05-07': [{ startTime: '09:00AM', endTime: '06:00PM', location: 'Office A', type: 'Standard Day Shift' }],
      '2025-05-13': [{ startTime: '09:00AM', endTime: '06:00PM', location: 'Office A', type: 'Standard Day Shift' }],
      // ...other dates
    },
  },
  {
    id: 2,
    name: 'Kathryn Murphy',
    position: 'Interaction Designer',
    avatar: '',
    highlight: true,
    hoursWorked: 35,
    hoursTarget: 48,
    schedule: {
      '2025-05-05': [{ type: 'restday' }],
      '2025-05-08': [{ startTime: '10:00AM', endTime: '07:00PM', location: 'Office B', type: 'Morning Shift' }],
      '2025-05-10': [{ startTime: '10:00AM', endTime: '07:00PM', location: 'Office B', type: 'Morning Shift' }],
      '2025-05-13': [
        { startTime: '10:00AM', endTime: '06:00PM', location: 'Office a', type: 'Morning Shift' },
        { startTime: '10:00AM', endTime: '07:00PM', location: 'Office B', type: 'Morning Shift' },
        { startTime: '10:00AM', endTime: '08:00PM', location: 'Office c', type: 'Morning Shift' },
        { startTime: '10:00AM', endTime: '09:00PM', location: 'Office d', type: 'Morning Shift' },
      ],
      // ...other dates
    },
  },
  {
    id: 3,
    name: 'Kathryn Murphy',
    position: 'Interaction Designer',
    avatar: '',
    highlight: true,
    hoursWorked: 35,
    hoursTarget: 48,
    schedule: {
      '2025-05-01': [{ type: 'restday' }],
      '2025-05-02': [{ startTime: '10:00AM', endTime: '07:00PM', location: 'Office B', type: 'Morning Shift' }],
      // ...other dates
    },
  },
  {
    id: 4,
    name: 'Kathryn Murphy',
    position: 'Interaction Designer',
    avatar: '',
    highlight: true,
    hoursWorked: 35,
    hoursTarget: 48,
    schedule: {
      '2025-05-12': [{ type: 'restday' }],
      '2025-05-15': [{ startTime: '10:00AM', endTime: '07:00PM', location: 'Office B', type: 'Morning Shift' }],
      // ...other dates
    },
  },
];

const companyOptions = [
  { text: 'All Companies', value: 'all' },
  { text: 'Company A', value: 'company-a' },
  { text: 'Company B', value: 'company-b' },
];

const departmentOptions = [
  { text: 'All Departments', value: 'all' },
  { text: 'Design', value: 'design' },
  { text: 'Development', value: 'development' },
];

const branchOptions = [
  { text: 'All Branches', value: 'all' },
  { text: 'Branch A', value: 'branch-a' },
  { text: 'Branch B', value: 'branch-b' },
];
</script>
