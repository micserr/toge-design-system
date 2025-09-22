---
outline: 'deep'
---

# Email Input

Email input with native browser validation patterns.

## Basic Usage

<spr-input-email v-model="model" label="Email" placeholder="Enter email" />

```vue
<template>
  <spr-input-email v-model="model" label="Email" placeholder="Enter email" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const model = ref('');
</script>
```
