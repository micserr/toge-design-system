# TimePicker

allows users to select a time from a dropdown list. It supports both 12-hour and 24-hour formats and can be configured to disable typing.

## Key Features

<ul>
  <li>
    <strong>Time Format:</strong>
    <span>
      The component supports both 12-hour and 24-hour time formats, 
      which can be specified using the <code>format</code> prop.
    </span>
  </li>
  <li>
    <strong>Interval:</strong>
    <span>
      The time options can be generated at specified intervals (e.g., every 30 minutes) using the <code>interval</code> prop.
    </span>
  </li>
  <li>
    <strong>Disable Typing:</strong>
    <span>
      The <code>disableTyping</code> prop can be used to make the input field read-only, 
      preventing users from typing in the input field.
    </span>
  </li>
</ul>

## Basic Usage

<spr-timePicker 
    v-model="selectedValue"
    :label="`Timepicker value: ${selectedValue || ''}`"
  />

```vue
<spr-timePicker v-model="selectedValue" :label="`Timepicker value: ${selectedValue || ''}`" />
```

## Format

<div class="flex flex-col gap-4">
  <spr-timePicker 
      v-model="selectedValue"
      label="12 hour format"
      format="12"
    />
  <spr-timePicker
      v-model="selectedValue"
      label="24 hour format"
      format="24"
    />
</div>

```vue
<div class="flex flex-col gap-4">
  <spr-timePicker 
      v-model="selectedValue"
      label="12 hour format"
      format="12"
    />

  <spr-timePicker
      v-model="selectedValue"
      label="24 hour format"
      format="24"
    />
</div>
```

## Disable Typing

<spr-timePicker 
    v-model="selectedValue"
    label="Timepicker"
    disableTyping
    format="12"
  />

```vue
<spr-timePicker v-model="selectedValue" label="Timepicker" disableTyping format="12" />
```

## Disabled

<spr-timePicker 
    v-model="selectedValue"
    label="Timepicker"
    disabled
  />

```vue
<spr-timePicker v-model="selectedValue" label="Timepicker" disabled />
```

## Full width

<spr-timePicker 
    v-model="selectedValue"
    label="Timepicker"
    fullWidth
  />

```vue
<spr-timePicker v-model="selectedValue" label="Timepicker" fullWidth />
```

## Attributes

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
      <td>format</td>
      <td>set time format</td>
      <td>'12' &#124; '24'</td>
      <td>24</td>
    </tr>
    <tr>
      <td>disableTyping</td>
      <td>make the input field read-only</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>interval</td>
      <td>set time interval</td>
      <td>string</td>
      <td>30</td>
    </tr>
    <tr>
      <td>label</td>
      <td>Field Label</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>fullWidth</td>
      <td>Set full width to option</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

<script lang="ts" setup>
import { ref } from 'vue';

import SprTimePicker from "@/components/timePicker/timePicker.vue"

const selectedValue = ref('');
</script>
