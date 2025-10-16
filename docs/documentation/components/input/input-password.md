---
title: Password Input
descripttion: Password input with toggle visibility (if implemented in component) and native masking.
outline: deep
---

# Password Input

Password input with toggle visibility (if implemented in component) and native masking.

## Basic Usage

<spr-input-password v-model="inputModels.basic" label="Password" placeholder="Enter password" />

```vue
<template>
  <spr-input-password v-model="inputModel" label="Password" placeholder="Enter password" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Active State

<spr-input-password v-model="inputModels.activeState" label="Password" placeholder="Enter password" active />

```vue
<template>
  <spr-input-password v-model="inputModel" label="Password" placeholder="Enter password" active />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Error State

<spr-input-password v-model="inputModels.errorState" label="Password" placeholder="Enter password" :error="true">
  <template #icon>
    <Icon icon="ph:warning-circle-fill" />
  </template>
</spr-input-password>

```vue
<template>
  <spr-input-password v-model="inputModel" label="Password" placeholder="Enter password" :error="true">
    <template #icon>
      <Icon icon="ph:warning-circle-fill" />
    </template>
  </spr-input-password>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Disabled State

<spr-input-password v-model="inputModels.disabledState" label="Password" placeholder="Enter password" :disabled="true" />

```vue
<template>
  <spr-input-password v-model="inputModel" label="Password" placeholder="Enter password" :disabled="true" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## API Reference

This username input shares the same props, events, slots, and validation behavior as the base **Input**
component. Refer to the canonical API documentation here:

<a href="/documentation/components/input/input.html#api-reference">Input Component API Reference</a>

Only the visual intent (username context) differs; no additional props or unique events are introduced at this time.

<script setup lang="ts">
import { ref } from 'vue';

import { Icon } from '@iconify/vue';

import SprInputPassword from '@/components/input/input-password/input-password.vue';

const inputModels = ref({
  basic: '',
  activeState: '',
  errorState: '',
  disabledState: '',
});
</script>
