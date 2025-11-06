---
title: Username Input
descripttion: Username specific input with potential future validation rules.
outline: deep
---

# Username Input

Username specific input with potential future validation rules.

## Basic Usage

<spr-input-username v-model="inputModels.basic" label="Username" placeholder="Enter username" />

```vue
<template>
  <spr-input-username v-model="inputModel" label="Username" placeholder="Enter username" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Active State

<spr-input-username v-model="inputModels.activeState" label="Username" placeholder="Enter username" active />

```vue
<template>
  <spr-input-username v-model="inputModel" label="Username" placeholder="Enter username" active />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Error State

<spr-input-username v-model="inputModels.errorState" label="Username" placeholder="Enter username" :error="true">
  <template #icon>
    <Icon icon="ph:warning-circle-fill" />
  </template>
</spr-input-username>

```vue
<template>
  <spr-input-username v-model="inputModel" label="Username" placeholder="Enter username" :error="true">
    <template #icon>
      <Icon icon="ph:warning-circle-fill" />
    </template>
  </spr-input-username>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Disabled State

<spr-input-username v-model="inputModels.disabledState" label="Username" placeholder="Enter username" :disabled="true" />

```vue
<template>
  <spr-input-username v-model="inputModel" label="Username" placeholder="Enter username" :disabled="true" />
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

import SprInputUsername from '@/components/input/input-username/input-username.vue';

const inputModels = ref({
  basic: '',
  activeState: '',
  errorState: '',
  disabledState: '',
});
</script>
