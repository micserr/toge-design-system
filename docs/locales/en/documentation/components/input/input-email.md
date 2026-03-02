---
title: Email Input
descripttion: Email input with native browser validation patterns.
outline: deep
---

# Email Input

Email input with native browser validation patterns.

## Basic Usage

<spr-input-email v-model="inputModels.basic" label="Email" placeholder="Enter email" />

```vue
<template>
  <spr-input-email v-model="inputModel" label="Email" placeholder="Enter email" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Active State

<spr-input-email v-model="inputModels.activeState" label="Email" placeholder="Enter email" active />

```vue
<template>
  <spr-input-email v-model="inputModel" label="Email" placeholder="Enter email" active />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Error State

<spr-input-email v-model="inputModels.errorState" label="Email" placeholder="Enter email" :error="true">
  <template #icon>
    <Icon icon="ph:warning-circle-fill" />
  </template>
</spr-input-email>

```vue
<template>
  <spr-input-email v-model="inputModel" label="Email" placeholder="Enter email" :error="true">
    <template #icon>
      <Icon icon="ph:warning-circle-fill" />
    </template>
  </spr-input-email>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Disabled State

<spr-input-email v-model="inputModels.disabledState" label="Email" placeholder="Enter email" :disabled="true" />

```vue
<template>
  <spr-input-email v-model="inputModel" label="Email" placeholder="Enter email" :disabled="true" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## API Reference

This username input shares the same props, events, slots, and validation behavior as the base **Input**
component. Refer to the canonical API documentation here:

<a href="/documentation/components/input/input.html#api-reference">Input Component API Reference</a>

Only the visual intent (username context) differs; no additional props or unique events are introduced at this time.

<script setup lang="ts">
import { ref } from 'vue';

import { Icon } from '@iconify/vue';

import SprInputEmail from '@/components/input/input-email/input-email.vue';

const inputModels = ref({
  basic: '',
  activeState: '',
  errorState: '',
  disabledState: '',
});
</script>
