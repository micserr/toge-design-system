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

## Active State

<spr-input-dropdown v-model="modelActive" label="Dropdown Input" placeholder="Select an item ..." active readonly />

```vue
<template>
  <spr-input-dropdown v-model="model" label="Dropdown Input" placeholder="Select an item ..." active readonly />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const model = ref('');
</script>
```

## Error State

<spr-input-dropdown v-model="modelError" label="Dropdown Input" placeholder="Select an item ..." :error="true" readonly>
  <template #icon>
    <Icon icon="ph:warning-circle-fill" />
  </template>
</spr-input-dropdown>

```vue
<template>
  <spr-input-dropdown v-model="model" label="Dropdown Input" placeholder="Select an item ..." :error="true" readonly>
    <template #icon>
      <Icon icon="ph:warning-circle-fill" />
    </template>
  </spr-input-dropdown>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const model = ref('');
</script>
```

## Disabled State

<spr-input-dropdown v-model="modelDisabled" label="Dropdown Input" placeholder="Select an item ..." :disabled="true" />

```vue
<template>
  <spr-input-dropdown v-model="model" label="Dropdown Input" placeholder="Select an item ..." :disabled="true" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const model = ref('');
</script>
```
