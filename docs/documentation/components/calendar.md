# Calendar Component

The `Calendar` component is a reusable and customizable calendar designed for employee scheduling.

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

  <div class="spr-m-12 spr-overflow-auto">
    <div class="spr-w-[1200px]">
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

````vue
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

## Slots ### `filter` - **Description:** Slot for customizing the filter section. - **Example:** ```vue
<template #filter>
  <div>Custom Filter Content</div>
</template>
````

### `loading`

- **Description:** Slot for customizing the filter section.
- **Example:**
  ```vue
  <template #loading>
    <div>loading</div>
  </template>
  ```

---

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
      <th>Prop</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>employees</code> (required)</td>
      <td><code>Array&lt;Employee[]&gt;</code></td>
      <td>N/A</td>
      <td>List of employees to display in the calendar.</td>
    </tr>
    <tr>
      <td><code>initialDate</code></td>
      <td><code>Date</code></td>
      <td><code>new Date()</code></td>
      <td>The initial date to display in the calendar.</td>
    </tr>
    <tr>
      <td><code>search</code></td>
      <td><code>String</code></td>
      <td><code>''</code></td>
      <td>The search term for filtering employees.</td>
    </tr>
    <tr>
      <td><code>selectedCell</code></td>
      <td><code>Object&lt;SelectedShift&gt;</code></td>
      <td><code>{ employeeId: '', date: '', shift: null }</code></td>
      <td>The currently selected cell in the calendar.</td>
    </tr>
    <tr>
      <td><code>emptyStateTitle</code></td>
      <td><code>''</code></td>
      <td><code>-</code></td>
      <td>The title text displayed when the calendar has no events or data to show.</td>
    </tr>
    <tr>
      <td><code>emptyStateButtonText</code></td>
      <td><code>string</code></td>
      <td><code>-</code></td>
      <td>The text displayed on the action button in the empty state, prompting the user to take an action (e.g., "Add Event").</td>
    </tr>
    <tr>
      <td><code>emptyStateDescription</code></td>
      <td><code>string</code></td>
      <td>-</td>
      <td>The text displayed description for empty state</td>
    </tr>
    <tr>
      <td><code>Loading</code></td>
      <td><code>boolean</code></td>
      <td>-</td>
      <td>Displays a loading state for the calendar, typically shown as a spinner or skeleton while data is being fetched.</td>
    </tr>
    <tr>
      <td><code>hideAddButton</code></td>
      <td><code>boolean</code></td>
      <td>-</td>
      <td>Hide the add button</td>
    </tr>
  </tbody>
</table>

### Events

<table>
  <thead>
    <tr>
      <th>Event Name</th>
      <th>Parameters</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>loadMore</code></td>
      <td>-</td>
      <td>Emitted when the user scrolls near the bottom of the calendar, indicating that more employee data should be loaded.</td>
    </tr>
    <tr>
      <td><code>onCellClick</code></td>
      <td><code>SelectedShift</code></td>
      <td>Emitted when a calendar cell is clicked.</td>
    </tr>
    <tr>
      <td><code>update:firstLastDayOfWeek</code></td>
      <td><code>{ firstDay: string, lastDay: string }</code></td>
      <td>Emitted when the visible week range changes.</td>
    </tr>
    <tr>
      <td><code>update:sort</code></td>
      <td><code>string</code></td>
      <td>Emitted when the sort order changes.</td>
    </tr>
    <tr>
      <td><code>update:search</code></td>
      <td><code>string</code></td>
      <td>Emitted when the search term changes.</td>
    </tr>
    <tr>
      <td><code>update:selectedCell</code></td>
      <td><code>SelectedShift</code></td>
      <td>Emitted when a cell is selected.</td>
    </tr>
    <tr>
      <td><code>onClickEmptyButton</code></td>
      <td>-</td>
      <td>Emitted when the empty state button is clicked.</td>
    </tr>
  </tbody>
</table>

---

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
