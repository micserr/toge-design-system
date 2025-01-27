# Input

UI element that allows users to enter and edit text or other data.

## Key Features

<ul>
  <li>
    <strong>Label:</strong>  
    <span>A descriptive text that indicates the purpose of the input field.</span>
  </li>
  <li>
    <strong>Placeholder:</strong>
    <span>A hint displayed inside the input field when it is empty, guiding the user on what to enter.</span>
  </li>
  <li>
    <strong>Error State:</strong>
    <span>Visual feedback indicating that the input value is invalid or required.</span>
  </li>
  <li>
    <strong>Icon Slot:</strong>
    <span>
      An optional icon that can be displayed inside the input field, 
      often used to indicate the type of input or provide additional context.
    </span>
  </li>
    <li>
      <strong>v-model Binding:</strong>
      <span>Two-way data binding that keeps the input value in sync with a variable in the component's state.</span>
  </li>
</ul>

## Basic Usage

<spr-input v-model="inputValue" label="Text Input" placeholder="Enter your username" />

```vue
<spr-input v-model="inputValue" label="Text Input" placeholder="Enter your username" />
```

## Error State

<spr-input v-model="inputValue" label="Text Input" placeholder="Enter your username" :error="'error'">
  <template #icon>
    <Icon icon="ph:warning-circle-fill" />
  </template>
</spr-input>

```vue
<spr-input v-model="inputValue" label="Text Input" placeholder="Enter your username" :error="'error'">
  <template #icon>
    <Icon icon="ph:warning-circle-fill" />
  </template>
</spr-input>
```

## Disabled State

<spr-input v-model="inputValue" label="Text Input" placeholder="Enter your username" disabled />

```vue
<spr-input v-model="inputValue" label="Text Input" placeholder="Enter your username" disabled />
```

## Prefix

<spr-input v-model="inputValue" label="Text Input" placeholder="Enter your username"  >
  <template #prefix>
    <Icon icon="ph:warning-circle-fill" />
  </template>
</spr-input>

```vue
<spr-input v-model="inputValue" label="Text Input" placeholder="Enter your username">
  <template #prefix>
    <Icon icon="ph:warning-circle-fill" />
  </template>
</spr-input>
```

## Trailing Label

<div class="flex flex-col gap-2">
  <spr-input v-model="inputValue" label="Offset xs" placeholder="00" offset-size="xs" type="number">
    <template #trailing>
      minutes
    </template>
  </spr-input>

  <spr-input v-model="inputValue" label="offset sm" placeholder="0000000" offset-size="sm" type="number">
    <template #trailing>
      minutes
    </template>
  </spr-input>

  <spr-input v-model="inputValue" label="offset md" placeholder="Enter your name" offset-size="md" >
    <template #trailing>
      Name of the user
    </template>
  </spr-input>
</div>

```vue
<!-- xs -->
<spr-input v-model="inputValue" label="Offset xs" placeholder="00" offset-size="xs" type="number">
  <template #trailing>
    minutes
  </template>
</spr-input>

<!-- sm -->
<spr-input v-model="inputValue" label="offset sm" placeholder="00" offset-size="sm" type="number">
  <template #trailing>
    minutes
  </template>
</spr-input>

<!-- md -->
<spr-input v-model="inputValue" label="offset md" placeholder="Enter your name" offset-size="md">
  <template #trailing>
    Name of the user
  </template>
</spr-input>
```

<script lang="ts" setup>
import { ref } from 'vue';

import { Icon } from '@iconify/vue';

import SprInput from "@/components/input/input.vue"

const inputValue = ref('');
</script>
