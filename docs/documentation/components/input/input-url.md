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

## Active State

<spr-input-url v-model="modelActive" label="Website" placeholder="https://example.com" active />

```vue
<template>
  <spr-input-url v-model="model" label="Website" placeholder="https://example.com" active />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const model = ref('');
</script>
```

## Error State

<spr-input-url v-model="modelError" label="Website" placeholder="https://example.com" :error="true">
  <template #icon>
    <Icon icon="ph:warning-circle-fill" />
  </template>
</spr-input-url>

```vue
<template>
  <spr-input-url v-model="model" label="Website" placeholder="https://example.com" :error="true">
    <template #icon>
      <Icon icon="ph:warning-circle-fill" />
    </template>
  </spr-input-url>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const model = ref('');
</script>
```

## Disabled State

<spr-input-url v-model="modelDisabled" label="Website" placeholder="https://example.com" :disabled="true" />

```vue
<template>
  <spr-input-url v-model="model" label="Website" placeholder="https://example.com" :disabled="true" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const model = ref('');
</script>
```
