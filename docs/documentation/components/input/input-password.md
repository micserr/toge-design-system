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

## Active State

<spr-input-password v-model="modelActive" label="Password" placeholder="Enter password" active />

```vue
<template>
  <spr-input-password v-model="model" label="Password" placeholder="Enter password" active />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const model = ref('');
</script>
```

## Error State

<spr-input-password v-model="modelError" label="Password" placeholder="Enter password" :error="true">
  <template #icon>
    <Icon icon="ph:warning-circle-fill" />
  </template>
</spr-input-password>

```vue
<template>
  <spr-input-password v-model="model" label="Password" placeholder="Enter password" :error="true">
    <template #icon>
      <Icon icon="ph:warning-circle-fill" />
    </template>
  </spr-input-password>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const model = ref('');
</script>
```

## Disabled State

<spr-input-password v-model="modelDisabled" label="Password" placeholder="Enter password" :disabled="true" />

```vue
<template>
  <spr-input-password v-model="model" label="Password" placeholder="Enter password" :disabled="true" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const model = ref('');
</script>
```
