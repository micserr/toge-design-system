# TimePicker

allows users to select a time from a dropdown list. It supports both 12-hour and 24-hour formats and can be configured to disable typing.

## Key Features

<ul>
  <li><strong>Time Format:</strong> The component supports both 12-hour and 24-hour time formats, which can be specified using the `format` prop.
  </li>
  <li><strong>Interval:</strong> The time options can be generated at specified intervals (e.g., every 30 minutes) using the `interval` prop.
  </li>
  <li><strong>Disable Typing:</strong> The `disableTyping` prop can be used to make the input field read-only, preventing users from typing in the input field.
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

<div class="tw-flex tw-flex-col tw-gap-4">
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
<div class="tw-flex tw-flex-col tw-gap-4">
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

| Name          | Description                    | Type            | Default |
| ------------- | ------------------------------ | --------------- | ------- |
| format        | set time format                | `'12' \| '24' ` | 24      |
| disableTyping | make the input field read-only | `boolean`       | false   |
| interval      | set time interval              | `string`        | 30      |
| label         | Field Label                    | `string`        | ''      |
| fullWidth     | Set full width to option       | `boolean`       | false   |

<script setup lang="ts">
  import { ref } from 'vue';
  import SprTimePicker from "@/components/timePicker/timePicker.vue"

  const selectedValue = ref();

</script>
