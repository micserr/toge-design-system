# Input

UI element that allows users to enter and edit text or other data.

## Key Features

<ul>
  <li><strong>Label:</strong>  A descriptive text that indicates the purpose of the input field.
  </li>
  <li><strong>Placeholder:</strong> A hint displayed inside the input field when it is empty, guiding the user on what to enter.
  </li>
  <li><strong>Error State:</strong> Visual feedback indicating that the input value is invalid or required.
  </li>
  <li><strong>Icon Slot:</strong>An optional icon that can be displayed inside the input field, often used to indicate the type of input or provide additional context.
  </li>
    <li><strong>v-model Binding:</strong> Two-way data binding that keeps the input value in sync with a variable in the component's state.
  </li>
</ul>

## Basic Usage

<spr-input 
    v-model="inputValue"
    label="Text Input"
    placeholder="Enter your username"
/>

```vue
<spr-input v-model="inputValue" label="Text Input" placeholder="Enter your username" />
```

## Error State

<spr-input 
    v-model="inputValue"
    label="Text Input"
    placeholder="Enter your username"
    :error="'error'">
<template #icon>
<IconWarning />
</template>
</spr-input>

```vue
<spr-input v-model="inputValue" label="Text Input" placeholder="Enter your username" :error="'error'">
  <template #icon>
    <IconWarning />
  </template>
</spr-input>
```

## Disabled State

<spr-input 
    v-model="inputValue"
    label="Text Input"
    placeholder="Enter your username"
    disabled
/>

```vue
<spr-input v-model="inputValue" label="Text Input" placeholder="Enter your username" disabled />
```

<script setup lang="ts">
  import { ref } from 'vue';
  import SprInput from "@/components/input/input.vue"
  import IconWarning from '~icons/ph/warning-circle-fill';

</script>
