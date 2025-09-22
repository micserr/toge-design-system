---
outline: 'deep'
---

# Search Input

Search input optimized for filtering lists or triggering search queries.

## Basic Usage

<spr-input-search v-model="model" label="Search" placeholder="Search..." />

```vue
<template>
  <spr-input-search v-model="model" label="Search" placeholder="Search..." />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const model = ref('');
</script>
```

## Active State

<spr-input-search v-model="modelActive" label="Search" placeholder="Search..." active />

```vue
<template>
  <spr-input-search v-model="model" label="Search" placeholder="Search..." active />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const model = ref('');
</script>
```

## Error State

<spr-input-search v-model="modelError" label="Search" placeholder="Search..." :error="true">
  <template #icon>
    <Icon icon="ph:warning-circle-fill" />
  </template>
</spr-input-search>

```vue
<template>
  <spr-input-search v-model="model" label="Search" placeholder="Search..." :error="true">
    <template #icon>
      <Icon icon="ph:warning-circle-fill" />
    </template>
  </spr-input-search>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const model = ref('');
</script>
```

## Disabled State

<spr-input-search v-model="modelDisabled" label="Search" placeholder="Search..." :disabled="true" />

```vue
<template>
  <spr-input-search v-model="model" label="Search" placeholder="Search..." :disabled="true" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const model = ref('');
</script>
```
