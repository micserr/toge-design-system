---
title: Calendar Cell Component
descripttion: The Calendar Cell component is designed to display shift information in calendar views for scheduling and time management applications. Each cell can represent different shift types, statuses, and display customizable content.
outline: deep
---

# Calendar Cell Component

The `spr-calendar-cell` component is designed to display shift information in calendar views for scheduling and time management applications. Each cell can represent different shift types, statuses, and display customizable content.

## Overview

Calendar cells provide a standardized way to display:

- Shift types with consistent color coding
- Status indicators (approved, pending, error)
- Time and location information
- Custom content through slots

The component adapts to different contexts such as standard shifts, offline days (sick, vacation, etc.), and can be customized with different visual states.

## Basic Usage

### Shift Types

The Calendar Cell component supports various shift types, each with its own visual styling. This makes it easy to distinguish between different shifts at a glance.

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
// Array of different shift types with their details
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

// Optional: Handle click events when viewOnly is false
function handleClick(event) {
  console.log('Cell clicked:', event);
}
</script>
```

### Status Indicators

Calendar cells can display different statuses to indicate approval state. The status affects the border style and can optionally show error indicators.

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
  // Default/approved status - solid border
  { type: 'standard', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8, status: 'approved' },
  // Pending status - dashed border
  { type: 'standard', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8, status: 'pending' },
  // Error status - solid border with error indicator
  { type: 'standard', branchName: 'Main Branch', timeRange: '9:00 AM - 5:00 PM', hours: 8, status: 'error' },
];
</script>
```

### Offline Status Types

The component includes special types for off days, absences, and holidays. These types automatically display appropriate icons and labels.

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
  // Basic offline types
  { type: 'sick' },
  { type: 'vacation' },
  { type: 'emergency' },
  { type: 'restday' },
  { type: 'exempt' },
  { type: 'holiday' },

  // Offline types with pending status
  { status: 'pending', type: 'sick' },
  { status: 'pending', type: 'vacation' },
  { status: 'pending', type: 'emergency' },
  { status: 'pending', type: 'restday' },
  { status: 'pending', type: 'exempt' },
  { status: 'pending', type: 'holiday' },

  // Offline types with error status
  { status: 'error', type: 'sick' },
  { status: 'error', type: 'vacation' },
  { status: 'error', type: 'emergency' },
  { status: 'error', type: 'restday' },
  { status: 'error', type: 'exempt' },
  { status: 'error', type: 'holiday' },
];
</script>
```

### Custom Content Using Slots

The component provides slots for completely custom content while preserving the cell's styling and status indicators.

<div class="spr-grid spr-grid-cols-3 spr-gap-4">
  <spr-calendar-cell>
    <div class="spr-p-2">
      <div class="spr-font-medium">Custom Content</div>
      <div>You can add any HTML here</div>
    </div>
  </spr-calendar-cell>
  <spr-calendar-cell
    status="pending"
  >
    <div class="spr-p-2">
      <div class="spr-font-medium">Pending Cell</div>
      <div>With custom content</div>
    </div>
  </spr-calendar-cell>
  <spr-calendar-cell
    status="error"
  >
    <div class="spr-p-2">
      <div class="spr-font-medium">Error Cell</div>
      <div>With custom content</div>
    </div>
  </spr-calendar-cell>
</div>

```vue
<template>
  <!-- Default calendar cell with custom content -->
  <spr-calendar-cell>
    <div class="spr-p-2">
      <div class="spr-font-medium">Custom Content</div>
      <div>You can add any HTML here</div>
    </div>
  </spr-calendar-cell>

  <!-- Pending status with custom content -->
  <spr-calendar-cell status="pending">
    <div class="spr-p-2">
      <div class="spr-font-medium">Pending Cell</div>
      <div>With custom content</div>
    </div>
  </spr-calendar-cell>

  <!-- Error status with custom content -->
  <spr-calendar-cell status="error">
    <div class="spr-p-2">
      <div class="spr-font-medium">Error Cell</div>
      <div>With custom content</div>
    </div>
  </spr-calendar-cell>
</template>
```

### Full Width Display

By default, calendar cells have a maximum width. Use the `fullwidth` prop to make the cell expand to the full width of its container.

<div class="spr-grid spr-grid-cols-1 spr-gap-4">
  <spr-calendar-cell 
    fullwidth 
    type="standard" 
    title="Full Width Calendar Cell" 
    description="This cell takes up the entire available width"
  />
  <spr-calendar-cell 
    type="standard" 
    title="Default Width Calendar Cell" 
    description="This cell has the default max-width constraint"
  />
</div>

```vue
<template>
  <!-- Full width calendar cell -->
  <spr-calendar-cell
    fullwidth
    type="standard"
    title="Full Width Calendar Cell"
    description="This cell takes up the entire available width"
  />

  <!-- Default width calendar cell -->
  <spr-calendar-cell
    type="standard"
    title="Default Width Calendar Cell"
    description="This cell has the default max-width constraint"
  />
</template>
```

### Loading State

Use the `loading` prop to display a skeletal loading animation while data is being fetched.

<div class="spr-grid spr-grid-cols-1 spr-gap-4">
  <spr-calendar-cell fullwidth loading />
</div>

```vue
<template>
  <spr-calendar-cell fullwidth loading />
</template>
```

### Custom Colors

You can override the default color scheme using the `custom-color` prop. For proper background opacity, hexadecimal color codes are recommended.

<div class="spr-grid spr-grid-cols-2 spr-gap-4">
  <spr-calendar-cell 
    custom-color="#b134eb" 
    type="late-morning"
    title="Custom Hex Color" 
    description="Using hex code with opacity"
  />
  <spr-calendar-cell 
    custom-color="blue" 
    type="late-morning"
    title="Named Color" 
    description="Using named color without opacity"
  />
</div>

```vue
<template>
  <!-- Using hex color code (recommended for proper opacity) -->
  <spr-calendar-cell
    custom-color="#b134eb"
    type="late-morning"
    title="Custom Hex Color"
    description="Using hex code with opacity"
  />

  <!-- Using named color (no opacity effect) -->
  <spr-calendar-cell
    custom-color="blue"
    type="late-morning"
    title="Named Color"
    description="Using named color without opacity"
  />
</template>
```

::: tip
When using custom colors, hexadecimal format (e.g., `#b134eb`) is recommended for proper background opacity effects. The `type` prop's color styling will be ignored when `custom-color` is provided.
:::

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
      <td>type</td>
      <td>Defines the type of calendar cell with specific color styling and label</td>
      <td><code>standard</code> | <code>early-morning</code> | <code>late-morning</code> | <code>afternoon</code> | <code>graveyard</code> | <code>broken</code> | <code>multi-break</code> | <code>flexible-break</code> | <code>flexible-weekly</code> | <code>flexible-daily</code> | <code>fixed-flexible</code> | <code>restday</code> | <code>vacation</code> | <code>holiday</code> | <code>exempt</code> | <code>sick</code> | <code>emergency</code></td>
      <td><code>standard</code></td>
    </tr>
    <tr>
      <td>status</td>
      <td>Controls the visual status of the cell, affecting border style</td>
      <td><code>default</code> | <code>approved</code> | <code>pending</code> | <code>error</code></td>
      <td><code>default</code></td>
    </tr>
    <tr>
      <td>title</td>
      <td>Primary text displayed in the cell, typically time information</td>
      <td>string</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td>description</td>
      <td>Secondary text displayed in the cell, typically location information</td>
      <td>string</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td>state</td>
      <td>The state used for the status component when in error state</td>
      <td><code>success</code> | <code>information</code> | <code>pending</code> | <code>caution</code> | <code>danger</code></td>
      <td><code>danger</code></td>
    </tr>
    <tr>
      <td>fullwidth</td>
      <td>Makes the cell take up the full width of its container</td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>viewOnly</td>
      <td>When true, disables click interactions (removes hover effects and click event)</td>
      <td>boolean</td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td>subDescription</td>
      <td>Optional text that overrides the default shift label</td>
      <td>string</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td>icon</td>
      <td>Custom icon to override the default icons for offline status types</td>
      <td>string</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td>loading</td>
      <td>Shows a skeletal loading animation instead of content</td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>customColor</td>
      <td>Applies a custom border and background color to the cell (hex format recommended for proper opacity)</td>
      <td>string</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td>className</td>
      <td>Additional CSS class names to apply to the component</td>
      <td>string</td>
      <td><code>''</code></td>
    </tr>
  </tbody>
</table>

### Events

<table>
  <thead>
    <tr>
      <th>Event Name</th>
      <th>Description</th>
      <th>Parameters</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>@onClick</td>
      <td>Emitted when the calendar cell is clicked (only if <code>viewOnly</code> is <code>false</code>)</td>
      <td><code>(event: MouseEvent)</code></td>
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
      <td>Default slot for custom content, replaces the standard title, description, and shift label</td>
    </tr>
    <tr>
      <td>prefix</td>
      <td>Slot for custom content before the main content, replaces the status icon for offline types</td>
    </tr>
  </tbody>
</table>

## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark"  width="50px" />
</div>

<script lang="ts" setup>
import SprCalendarCell from '@/components/calendar-cell/calendar-cell.vue'
import SprLogo from "@/components/logo/logo.vue";

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

function handleClick(event) {
  console.log('Cell clicked:', event);
}
</script>
