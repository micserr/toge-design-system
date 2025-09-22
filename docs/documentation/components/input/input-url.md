---
outline: 'deep'
---

# URL Input

URL input with native browser validation for properly formatted URLs.

## Basic Usage

<spr-input-url v-model="model" label="Website" placeholder="https://example.com" />

```vue
<template>
  <spr-input-url v-model="model" label="Website" placeholder="https://example.com" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const model = ref('');
</script>
```
