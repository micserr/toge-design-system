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

## Active State

<spr-input-email v-model="modelActive" label="Email" placeholder="Enter email" active />

```vue
<template>
  <spr-input-email v-model="model" label="Email" placeholder="Enter email" active />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const model = ref('');
</script>
```

## Error State

<spr-input-email v-model="modelError" label="Email" placeholder="Enter email" :error="true">
  <template #icon>
    <Icon icon="ph:warning-circle-fill" />
  </template>
</spr-input-email>

```vue
<template>
  <spr-input-email v-model="model" label="Email" placeholder="Enter email" :error="true">
    <template #icon>
      <Icon icon="ph:warning-circle-fill" />
    </template>
  </spr-input-email>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const model = ref('');
</script>
```

## Disabled State

<spr-input-email v-model="modelDisabled" label="Email" placeholder="Enter email" :disabled="true" />

```vue
<template>
  <spr-input-email v-model="model" label="Email" placeholder="Enter email" :disabled="true" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const model = ref('');
</script>
```
