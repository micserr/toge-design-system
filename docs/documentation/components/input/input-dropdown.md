---
outline: 'deep'
---

# Dropdown Input

Input styled variant primarily used as trigger/display inside dropdown-based components.

## Basic Usage

<spr-input-dropdown v-model="model" label="Dropdown Input" placeholder="Select an item ..." readonly />

```vue
<template>
  <spr-input-dropdown v-model="model" label="Dropdown Input" placeholder="Select an item ..." readonly />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const model = ref('');
</script>
```
