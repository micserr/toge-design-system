---
outline: 'deep'
---

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

<spr-time-picker 
    v-model="selectedValue"
    :label="`Timepicker value: ${selectedValue || ''}`"
    id='time-basic'
  />

```vue
<template>
  <spr-time-picker v-model="selectedValue" :label="`Timepicker value: ${selectedValue || ''}`" id="time-basic" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedValue = ref('');
</script>
```

## Format

<div class="spr-flex spr-flex-col spr-gap-4">
  <spr-time-picker 
      v-model="selectedValue1"
      label="12 hour format"
      format="12"
      id='time-format-12'
    />
  <spr-time-picker
      v-model="selectedValue2"
      label="24 hour format"
      format="24"
      id='time-format-24'
    />
</div>

```vue
<template>
  <div class="spr-flex spr-flex-col spr-gap-4">
    <spr-time-picker v-model="selectedValue1" label="12 hour format" format="12" id="time-format-12" />
    <spr-time-picker v-model="selectedValue2" label="24 hour format" format="24" id="time-format-24" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedValue1 = ref('');
const selectedValue2 = ref('');
</script>
```

## Disable Typing

<spr-time-picker 
    v-model="selectedValue3"
    label="Timepicker"
    disableTyping
    format="12"
    id="time-format-typing"
  />

```vue
<template>
  <spr-time-picker v-model="selectedValue3" label="Timepicker" disableTyping format="12" id="time-format-typing" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedValue3 = ref('');
</script>
```

## Error

<spr-time-picker v-model="selectedValue4" label="Timepicker" disableTyping format="12" error='true' id="time-error"/>

```vue
<template>
  <spr-time-picker v-model="selectedValue4" label="Timepicker" disableTyping format="12" error="true" id="time-error" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedValue4 = ref('');
</script>
```

## Disabled

<spr-time-picker 
    v-model="selectedValue5"
    label="Timepicker"
    disabled
    id="time-disabled"
  />

```vue
<template>
  <spr-time-picker v-model="selectedValue5" label="Timepicker" disabled id="time-disabled" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedValue5 = ref('');
</script>
```

## Full width

<spr-time-picker v-model="selectedValue6" label="Timepicker" fullWidth id="time-full-width"/>

```vue
<template>
  <spr-time-picker v-model="selectedValue6" label="Timepicker" fullWidth id="time-full-width" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedValue6 = ref('');
</script>
```

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

## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logos name="hr" theme="dark"  width="50px" />
</div>

<script lang="ts" setup>
import { ref } from 'vue';

import SprTimePicker from "@/components/time-picker/time-picker.vue";
import SprLogos from "@/components/logos/logos.vue";

const selectedValue = ref('');
const selectedValue1 = ref('');
const selectedValue2 = ref('');
const selectedValue3 = ref('');
const selectedValue4 = ref('');
const selectedValue5 = ref('');
const selectedValue6 = ref('');
</script>
