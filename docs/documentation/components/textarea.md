---
outline: 'deep'
---

# Textarea

## Basic Usage

<spr-textarea v-model="textarea" label="Description" placeholder="type here...."/>

```vue
<template>
  <spr-textarea v-model="textarea" label="Description" placeholder="type here...." />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const textarea = ref('');
</script>
```

## Error State

<spr-textarea v-model="textarea1" label="Description" placeholder="type here...."  error helperText="Required"/>

```vue
<template>
  <spr-textarea v-model="textarea1" label="Description" placeholder="type here...." error helperText="Required" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const textarea1 = ref('');
</script>
```

## Disabled

<spr-textarea v-model="textarea" label="Description" placeholder="type here...."  disabled/>

```vue
<template>
  <spr-textarea v-model="textarea" label="Description" placeholder="type here...." disabled />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const textarea = ref('');
</script>
```

## Readonly

<spr-textarea v-model="textarea2" label="Description" placeholder="type here...."  readonly/>

```vue
<template>
  <spr-textarea v-model="textarea2" label="Description" placeholder="type here...." readonly />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const textarea2 = ref('Hello world, Sprout Design System!!!');
</script>
```

<script setup lang="ts">
  import { ref } from 'vue';
  import SprTextarea from '@/components/textarea/textarea.vue';

  const textarea = ref('');
  const textarea1 = ref('');
  const textarea2 = ref('Hello world, Sprout Design System!!!');
</script>
