# Calendar Cell Component

The `spr-calendar-cell` component is used to display a cell in a calendar view. It includes status, title, description, and shift label.

## Basic Usage

### Shift

<div class="spr-grid spr-grid-cols-3 spr-gap-4">
  <spr-calendar-cell
    v-for="(shift, index) in shifts"
    :key="index"
    :type="shift.type"
    :title="shift.timeRange"
    :description="shift.branchName"
    @click="handleClick"
  />
</div>

```vue
<template>
  <spr-calendar-cell
    v-for="(shift, index) in shifts"
    :key="index"
    :type="shift.type"
    :title="shift.timeRange"
    :description="shift.branchName"
    @click="handleClick"
  />
</template>

<script lang="ts" setup>
const shifts = [
  { type: 'standard', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8 },
  { type: 'early-morning', branchName: 'Main Branch', timeRange: '5:00 AM - 1:00 PM', hours: 8 },
  { type: 'late-morning', branchName: 'Main Branch', timeRange: '10:00 AM - 6:00 PM', hours: 8 },
  { type: 'afternoon', branchName: 'Main Branch', timeRange: '1:00 PM - 9:00 PM', hours: 8 },
  { type: 'graveyard', branchName: 'Main Branch', timeRange: '11:00 PM - 7:00 AM', hours: 8 },
  { type: 'broken', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8 },
  { type: 'multi-break', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8 },
  { type: 'flexible-break', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8 },
  { type: 'flexible-weekly', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8 },
  { type: 'flexible-daily', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8 },
  { type: 'fixed-flexible', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8 },
];
</script>
```

### Status

<div class="spr-grid spr-grid-cols-3 spr-gap-4">
  <spr-calendar-cell
    v-for="(shift, index) in status"
    :key="index"
    :type="shift.type"
    :title="shift.timeRange"
    :description="shift.branchName"
    :status="shift.status"
  />
</div>

```vue
<template>
  <spr-calendar-cell
    v-for="(shift, index) in status"
    :key="index"
    :type="shift.type"
    :title="shift.timeRange"
    :description="shift.branchName"
    :status="shift.status"
  />
</template>

<script lang="ts" setup>
const status = [
  { type: 'standard', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8, status: 'approved' },
  { type: 'standard', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8, status: 'pending' },
  { type: 'standard', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8, status: 'error' },
];
</script>
```

### Offline

<div class="spr-grid spr-grid-cols-3 spr-gap-4">
  <spr-calendar-cell
    v-for="(shift, index) in offline"
    :key="index"
    :type="shift.type"
    :status="shift.status"
  />
</div>

```vue
<template>
  <spr-calendar-cell v-for="(shift, index) in offline" :key="index" :type="shift.type" :status="shift.status" />
</template>

<script lang="ts" setup>
import SprCalendarCell from '@/components/calendar-cell/calendar-cell.vue';

const offline = [
  { type: 'sick' },
  { type: 'vacation' },
  { type: 'emergency' },
  { type: 'restday' },
  { type: 'exempt' },
  { type: 'holiday' },
  { status: 'pending', type: 'sick' },
  { status: 'pending', type: 'vacation' },
  { status: 'pending', type: 'emergency' },
  { status: 'pending', type: 'restday' },
  { status: 'pending', type: 'exempt' },
  { status: 'pending', type: 'holiday' },
  { status: 'error', type: 'sick' },
  { status: 'error', type: 'vacation' },
  { status: 'error', type: 'emergency' },
  { status: 'error', type: 'restday' },
  { status: 'error', type: 'exempt' },
  { status: 'error', type: 'holiday' },
];
</script>
```

### Slot

<div class="spr-grid spr-grid-cols-3 spr-gap-4">
  <spr-calendar-cell>
    Content here...
  </spr-calendar-cell>
  <spr-calendar-cell
    status="pending"
  >
    Content here...
  </spr-calendar-cell>
    <spr-calendar-cell
    status="error"
  >
    Content here...
  </spr-calendar-cell>
</div>

```vue
<spr-calendar-cell>
    Content here...
  </spr-calendar-cell>
<spr-calendar-cell status="pending">
    Content here...
  </spr-calendar-cell>
<spr-calendar-cell status="error">
    Content here...
  </spr-calendar-cell>
```

### fullwidth

<div class="spr-grid spr-grid-row-3 spr-gap-4">
  <spr-calendar-cell fullwidth/>
  <spr-calendar-cell />
</div>

```vue
<spr-calendar-cell fullwidth />
<spr-calendar-cell />
```

## Cell API

### Cell Attributes

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
      <td>type</td>
      <td> The type of shift</td>
      <td>string</td>
      <td> standard | early-morning | late-morning | afternoon | graveyard | broken | multi-break | flexible-break | flexible-weekly | flexible-daily | fixed-flexible | restday | vacation | holiday | exempt | sick | holiday | emergency
      </td>
    </tr>
    <tr>
      <td>status</td>
      <td>The visual style of the card</td>
      <td>string</td>
      <td>approved | pending | error</td>
    </tr>
    <tr>
      <td>title</td>
      <td>The title to be displayed in the cell.</td>
      <td>String</td>
      <td>''</td>
    </tr>
    <tr>
      <td>description</td>
      <td>The description to be displayed in the cell.</td>
      <td>String</td>
      <td>''</td>
    </tr>
    <tr>
      <td>state</td>
      <td>The state associated with the status.</td>
      <td>String</td>
      <td>'success', 'information', 'pending', 'caution', 'danger'</td>
    </tr>
    <tr>
      <td>fullwidth</td>
      <td>change cell width</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

### Event

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>onClick</td>
      <td>emits when click</td>
    </tr>
  </tbody>
</table>

<script lang="ts" setup>
import SprCalendarCell from '@/components/calendar-cell/calendar-cell.vue'

const shifts = [
  { type: 'standard', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8 },
  { type: 'early-morning', branchName: 'Main Branch', timeRange: '5:00 AM - 1:00 PM', hours: 8 },
  { type: 'late-morning', branchName: 'Main Branch', timeRange: '10:00 AM - 6:00 PM', hours: 8 },
  { type: 'afternoon', branchName: 'Main Branch', timeRange: '1:00 PM - 9:00 PM', hours: 8 },
  { type: 'graveyard', branchName: 'Main Branch', timeRange: '11:00 PM - 7:00 AM', hours: 8 },
  { type: 'broken', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8 },
  { type: 'multi-break', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8 },
  { type: 'flexible-break', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8 },
  { type: 'flexible-weekly', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8 },
  { type: 'flexible-daily', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8 },
  { type: 'fixed-flexible', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8 },
];

const status = [
  { type: 'standard', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8, status: 'approved' },
  { type: 'standard', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8, status: 'pending' },
  { type: 'standard', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8, status: 'error' },
];

const offline = [
  { type: 'sick'},
  { type: 'vacation'},
  { type: 'emergency'},
  { type: 'restday'},
  { type: 'exempt'},
  { type: 'holiday'},
  { status: 'pending' ,type: 'sick'},
  { status: 'pending' ,type: 'vacation'},
  { status: 'pending' ,type: 'emergency'},
  { status: 'pending' ,type: 'restday'},
  { status: 'pending' ,type: 'exempt'},
  { status: 'pending' ,type: 'holiday'},
  { status: 'error' ,type: 'sick'},
  { status: 'error' ,type: 'vacation'},
  { status: 'error' ,type: 'emergency'},
  { status: 'error' ,type: 'restday'},
  { status: 'error' ,type: 'exempt'},
  { status: 'error' ,type: 'holiday'},
];

</script>
