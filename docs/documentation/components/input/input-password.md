---
outline: 'deep'
---

# Password Input

Password input with toggle visibility (if implemented in component) and native masking.

## Basic Usage

<spr-input-password v-model="model" label="Password" placeholder="Enter password" />

```vue
<template>
  <spr-input-password v-model="model" label="Password" placeholder="Enter password" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const model = ref('');
</script>
```
