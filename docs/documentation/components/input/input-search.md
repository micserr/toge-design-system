---
title: Search Input
descripttion: Search input optimized for filtering lists or triggering search queries.
outline: deep
---

# Search Input

Search input optimized for filtering lists or triggering search queries.

## Basic Usage

<spr-input-search v-model="inputModels.basic" label="Search" placeholder="Search..." />

```vue
<template>
  <spr-input-search v-model="inputModel" label="Search" placeholder="Search..." />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Active State

<spr-input-search v-model="inputModels.activeState" label="Search" placeholder="Search..." active />

```vue
<template>
  <spr-input-search v-model="inputModel" label="Search" placeholder="Search..." active />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Error State

<spr-input-search v-model="inputModels.errorState" label="Search" placeholder="Search..." :error="true">
  <template #icon>
    <Icon icon="ph:warning-circle-fill" />
  </template>
</spr-input-search>

```vue
<template>
  <spr-input-search v-model="inputModel" label="Search" placeholder="Search..." :error="true">
    <template #icon>
      <Icon icon="ph:warning-circle-fill" />
    </template>
  </spr-input-search>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Disabled State

<spr-input-search v-model="inputModels.disabledState" label="Search" placeholder="Search..." :disabled="true" />

```vue
<template>
  <spr-input-search v-model="inputModel" label="Search" placeholder="Search..." :disabled="true" />
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

import SprInputSearch from '@/components/input/input-search/input-search.vue';

const inputModels = ref({
  basic: '',
  activeState: '',
  errorState: '',
  disabledState: '',
});
</script>
