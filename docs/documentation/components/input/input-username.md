---
outline: 'deep'
---

# Username Input

Username specific input with potential future validation rules.

## Basic Usage

<spr-input-username v-model="model" label="Username" placeholder="Enter username" />

```vue
<template>
  <spr-input-username v-model="model" label="Username" placeholder="Enter username" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const model = ref('');
</script>
```
