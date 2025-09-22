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
