---
title: Dropdown Input
descripttion: The Dropdown Input component is a styled input variant used as a trigger/display within dropdown-based components, supporting various states like active, error, and disabled.
outline: deep
---

# Dropdown Input

Input styled variant primarily used as trigger/display inside dropdown-based components.

## Basic Usage

<div>
  <spr-input-dropdown 
    id="input-dropdown-basic" 
    v-model="inputModels.basic" 
    label="Input Dropdown" 
    placeholder="Select an item ..." 
    readonly 
  />
</div>

```vue
<template>
  <spr-input-dropdown
    id="input-dropdown-basic"
    v-model="inputModel"
    label="Input Dropdown"
    placeholder="Select an item ..."
    readonly
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Active State

<div>
  <spr-input-dropdown 
    id="input-dropdown-active-state" 
    v-model="inputModels.activeState" 
    label="Input Dropdown" 
    placeholder="Select an item ..." 
    active 
    readonly 
  />
</div>

```vue
<template>
  <spr-input-dropdown
    id="input-dropdown-active-state"
    v-model="inputModel"
    label="Input Dropdown"
    placeholder="Select an item ..."
    active
    readonly
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Error State

<div>
  <spr-input-dropdown 
    id="input-dropdown-error-state" 
    v-model="inputModels.errorState" 
    label="Input Dropdown" 
    placeholder="Select an item ..." 
    error 
    readonly
  >
    <template #icon>
      <Icon icon="ph:warning-circle-fill" />
    </template>
  </spr-input-dropdown>
</div>

## API Reference

This username input shares the same props, events, slots, and validation behavior as the base **Input**
component. Refer to the canonical API documentation here:

<a href="/documentation/components/input/input.html#api-reference">Input Component API Reference</a>

Only the visual intent (username context) differs; no additional props or unique events are introduced at this time.

```vue
<template>
  <spr-input-dropdown
    id="input-dropdown-error-state"
    v-model="inputModel"
    label="Input Dropdown"
    placeholder="Select an item ..."
    error
    readonly
  >
    <template #icon>
      <Icon icon="ph:warning-circle-fill" />
    </template>
  </spr-input-dropdown>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Disabled State

<div>
  <spr-input-dropdown 
    id="input-dropdown-disabled-state" 
    v-model="inputModels.disabledState" 
    label="Input Dropdown" 
    placeholder="Select an item ..." 
    disabled 
  />
</div>

```vue
<template>
  <spr-input-dropdown
    id="input-dropdown-disabled-state"
    v-model="inputModel"
    label="Input Dropdown"
    placeholder="Select an item ..."
    disabled
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

<script setup lang="ts">
import { ref } from 'vue';

import { Icon } from '@iconify/vue';

import SprInputDropdown from '@/components/input/input-dropdown/input-dropdown.vue';

const inputModels = ref({
  basic: '',
  activeState: '',
  errorState: '',
  disabledState: '',
});
</script>
