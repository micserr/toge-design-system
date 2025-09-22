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

## Active State

<spr-input-username v-model="modelActive" label="Username" placeholder="Enter username" active />

```vue
<template>
  <spr-input-username v-model="model" label="Username" placeholder="Enter username" active />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const model = ref('');
</script>
```

## Error State

<spr-input-username v-model="modelError" label="Username" placeholder="Enter username" :error="true">
  <template #icon>
    <Icon icon="ph:warning-circle-fill" />
  </template>
</spr-input-username>

```vue
<template>
  <spr-input-username v-model="model" label="Username" placeholder="Enter username" :error="true">
    <template #icon>
      <Icon icon="ph:warning-circle-fill" />
    </template>
  </spr-input-username>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const model = ref('');
</script>
```

## Disabled State

<spr-input-username v-model="modelDisabled" label="Username" placeholder="Enter username" :disabled="true" />

```vue
<template>
  <spr-input-username v-model="model" label="Username" placeholder="Enter username" :disabled="true" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const model = ref('');
</script>
```
