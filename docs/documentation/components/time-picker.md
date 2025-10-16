---
title: Time Picker
descripttion: The Time Picker component provides an intuitive interface for users to select a specific time from a dropdown list of options. It's designed to be flexible and user-friendly, supporting both 12-hour and 24-hour formats with customizable time intervals.
outline: deep
---

# Time Picker

The Time Picker component provides an intuitive interface for users to select a specific time from a dropdown list of options. It's designed to be flexible and user-friendly, supporting both 12-hour and 24-hour formats with customizable time intervals.

## Overview

The Time Picker component offers:

- Choice between 12-hour (AM/PM) and 24-hour time formats
- Customizable time intervals (e.g., every 15, 30, or 60 minutes)
- Optional input field for direct time entry or dropdown-only selection
- Full integration with form validation systems
- Responsive layout with full-width support
- Accessibility features for keyboard navigation

## Key Features

<ul class="spr-ml-4">
  <li class="spr-mb-2">
    <strong>Time Format Options:</strong>
    <span>
      Choose between 12-hour format with AM/PM indicators or 24-hour format using the <code>format</code> prop
    </span>
  </li>
  <li class="spr-mb-2">
    <strong>Customizable Intervals:</strong>
    <span>
      Configure the time increments (in minutes) between options using the <code>interval</code> prop
    </span>
  </li>
  <li class="spr-mb-2">
    <strong>Input Control:</strong>
    <span>
      Enable or disable manual time entry with the <code>disableTyping</code> prop to restrict selection to dropdown options only
    </span>
  </li>
  <li class="spr-mb-2">
    <strong>Form Integration:</strong>
    <span>
      Supports error states, helper text, and disabled states for seamless form integration
    </span>
  </li>
  <li class="spr-mb-2">
    <strong>Responsive Design:</strong>
    <span>
      Adapts to different container widths with the <code>fullWidth</code> prop for flexible layouts
    </span>
  </li>
</ul>

## Basic Usage

The simplest implementation of the Time Picker requires only a `v-model` directive to bind the selected time value.

<spr-time-picker 
    v-model="selectedValue"
    label="Select a time"
    id='time-basic'
  />

```vue
<template>
  <spr-time-picker v-model="selectedValue" label="Select a time" id="time-basic" />
</template>

<script setup>
import { ref } from 'vue';

const selectedValue = ref('');
</script>
```

:::tip
By default, the Time Picker uses 24-hour format with 30-minute intervals. The dropdown will display times from 00:00 to 23:30.
:::

## Time Formats

The Time Picker supports both 12-hour (AM/PM) and 24-hour formats. Use the `format` prop to specify your preferred format.

<div class="spr-flex spr-flex-col spr-gap-4">
  <spr-time-picker 
      v-model="selectedValue1"
      label="12-hour format (AM/PM)"
      format="12"
      id='time-format-12'
    />
  <spr-time-picker
      v-model="selectedValue2"
      label="24-hour format"
      format="24"
      id='time-format-24'
    />
</div>

```vue
<template>
  <div class="spr-flex spr-flex-col spr-gap-4">
    <!-- 12-hour format with AM/PM -->
    <spr-time-picker v-model="selectedValue1" label="12-hour format (AM/PM)" format="12" id="time-format-12" />

    <!-- 24-hour format -->
    <spr-time-picker v-model="selectedValue2" label="24-hour format" format="24" id="time-format-24" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedValue1 = ref('');
const selectedValue2 = ref('');
</script>
```

:::tip Format Examples

- 12-hour format: "09:30 AM", "12:00 PM", "06:45 PM"
- 24-hour format: "09:30", "12:00", "18:45"
  :::

## Custom Time Intervals

You can adjust the interval between time options using the `interval` prop. The value is specified in minutes.

<div class="spr-flex spr-flex-col spr-gap-4">
  <spr-time-picker 
      v-model="selectedValue3"
      label="15-minute intervals"
      interval="15"
      id="time-interval-15"
    />
  <spr-time-picker 
      v-model="selectedValue4"
      label="30-minute intervals (default)"
      interval="30"
      id="time-interval-30"
    />
  <spr-time-picker 
      v-model="selectedValue5"
      label="60-minute intervals (hourly)"
      interval="60"
      id="time-interval-60"
    />
</div>

```vue
<template>
  <div class="spr-flex spr-flex-col spr-gap-4">
    <!-- 15-minute intervals -->
    <spr-time-picker v-model="selectedValue3" label="15-minute intervals" interval="15" id="time-interval-15" />

    <!-- 30-minute intervals (default) -->
    <spr-time-picker
      v-model="selectedValue4"
      label="30-minute intervals (default)"
      interval="30"
      id="time-interval-30"
    />

    <!-- Hourly intervals -->
    <spr-time-picker
      v-model="selectedValue5"
      label="60-minute intervals (hourly)"
      interval="60"
      id="time-interval-60"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedValue3 = ref('');
const selectedValue4 = ref('');
const selectedValue5 = ref('');
</script>
```

:::tip
Smaller intervals provide more precise time selection but result in longer dropdown lists. Consider your use case when choosing the appropriate interval.
:::

## Input Control Options

### Disable Typing

Use the `disableTyping` prop to prevent users from manually entering a time. This restricts selection to the dropdown options only.

<spr-time-picker 
    v-model="selectedValue6"
    label="Selection only (no typing)"
    disableTyping
    format="12"
    id="time-disable-typing"
  />

```vue
<template>
  <spr-time-picker
    v-model="selectedValue6"
    label="Selection only (no typing)"
    disableTyping
    format="12"
    id="time-disable-typing"
  />
</template>

<script setup>
import { ref } from 'vue';

const selectedValue6 = ref('');
</script>
```

### Custom Placeholder

You can customize the input placeholder text using the `placeholder` prop.

<spr-time-picker 
    v-model="selectedValue7"
    label="With custom placeholder"
    placeholder="Select meeting time..."
    id="time-custom-placeholder"
  />

```vue
<template>
  <spr-time-picker
    v-model="selectedValue7"
    label="With custom placeholder"
    placeholder="Select meeting time..."
    id="time-custom-placeholder"
  />
</template>

<script setup>
import { ref } from 'vue';

const selectedValue7 = ref('');
</script>
```

## Form Integration

### Helper Text

Add explanatory text below the input field using the `helperText` prop.

<spr-time-picker 
    v-model="selectedValue8"
    label="Opening hours"
    helperText="Select the time your business opens"
    id="time-helper-text"
  />

```vue
<template>
  <spr-time-picker
    v-model="selectedValue8"
    label="Opening hours"
    helperText="Select the time your business opens"
    id="time-helper-text"
  />
</template>

<script setup>
import { ref } from 'vue';

const selectedValue8 = ref('');
</script>
```

### Error State

Display an error state using the `error` prop to indicate validation issues.

<spr-time-picker 
    v-model="selectedValue9" 
    label="Meeting time" 
    error 
    helperText="Please select a valid meeting time"
    id="time-error"
  />

```vue
<template>
  <spr-time-picker
    v-model="selectedValue9"
    label="Meeting time"
    error
    helperText="Please select a valid meeting time"
    id="time-error"
  />
</template>

<script setup>
import { ref } from 'vue';

const selectedValue9 = ref('');
</script>
```

### Disabled State

Disable the time picker using the `disabled` prop when you want to prevent interaction.

<spr-time-picker 
    v-model="selectedValue10"
    label="Appointment time (disabled)"
    disabled
    id="time-disabled"
  />

```vue
<template>
  <spr-time-picker v-model="selectedValue10" label="Appointment time (disabled)" disabled id="time-disabled" />
</template>

<script setup>
import { ref } from 'vue';

const selectedValue10 = ref('');
</script>
```

## Layout Options

### Full Width

Use the `fullWidth` prop to make the time picker expand to the full width of its container.

<spr-time-picker 
    v-model="selectedValue11" 
    label="Full width time picker" 
    fullWidth 
    id="time-full-width"
  />

```vue
<template>
  <spr-time-picker v-model="selectedValue11" label="Full width time picker" fullWidth id="time-full-width" />
</template>

<script setup>
import { ref } from 'vue';

const selectedValue11 = ref('');
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
      <td><code>modelValue</code></td>
      <td>The selected time value (used with <code>v-model</code>)</td>
      <td>string</td>
      <td>Required</td>
    </tr>
    <tr>
      <td><code>format</code></td>
      <td>Time format to display</td>
      <td>'12' | '24'</td>
      <td>'24'</td>
    </tr>
    <tr>
      <td><code>interval</code></td>
      <td>Time interval in minutes between options</td>
      <td>number</td>
      <td>30</td>
    </tr>
    <tr>
      <td><code>label</code></td>
      <td>Label text displayed above the input field</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td><code>placeholder</code></td>
      <td>Placeholder text for the input field</td>
      <td>string</td>
      <td>Format-dependent ('HH : MM' or 'HH : MM AM/PM')</td>
    </tr>
    <tr>
      <td><code>disableTyping</code></td>
      <td>When true, prevents manual text entry in the input field</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>error</code></td>
      <td>When true, displays the field in an error state</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>helperText</code></td>
      <td>Helper text displayed below the input field</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td><code>disabled</code></td>
      <td>When true, disables the time picker</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>fullWidth</code></td>
      <td>When true, the time picker expands to the full width of its container</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>id</code></td>
      <td>HTML ID attribute for the input element</td>
      <td>string</td>
      <td>'time-picker'</td>
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
      <td><code>update:modelValue</code></td>
      <td>Emitted when the selected time changes</td>
      <td>string: The new time value</td>
    </tr>
  </tbody>
</table>

## Products Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark"  width="50px" />
</div>

<script lang="ts" setup>
import { ref } from 'vue';

import SprTimePicker from "@/components/time-picker/time-picker.vue";
import SprLogo from "@/components/logo/logo.vue";

const selectedValue = ref('');
const selectedValue1 = ref('');
const selectedValue2 = ref('');
const selectedValue3 = ref('');
const selectedValue4 = ref('');
const selectedValue5 = ref('');
const selectedValue6 = ref('');
const selectedValue7 = ref('');
const selectedValue8 = ref('');
const selectedValue9 = ref('');
const selectedValue10 = ref('');
const selectedValue11 = ref('');
</script>
