---
outline: 'deep'
---

# Currency Input

Currency input with selectable currency code and formatting (thousand separators, fixed decimals, symbol/code display).

## Basic Usage

<spr-input-currency v-model="inputModel" label="Amount" />

```vue
<template>
  <spr-input-currency v-model="inputModel" label="Amount" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Active State

<spr-input-currency v-model="inputModel" label="Amount" active />

```vue
<template>
  <spr-input-currency v-model="inputModel" label="Amount" active />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Error State

<spr-input-currency v-model="inputModel" label="Amount" :error="true">
  <template #icon>
    <Icon icon="ph:warning-circle-fill" />
  </template>
</spr-input-currency>

```vue
<template>
  <spr-input-currency v-model="inputModel" label="Amount" :error="true">
    <template #icon>
      <Icon icon="ph:warning-circle-fill" />
    </template>
  </spr-input-currency>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Disabled State

<spr-input-currency v-model="inputModel" label="Amount" :disabled="true" />

```vue
<template>
  <spr-input-currency v-model="inputModel" label="Amount" :disabled="true" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Disabled Country Currency

<spr-input-currency v-model="inputModel" label="Amount" :disabled-country-currency="true" />

````vue
<template>
  <spr-input-currency v-model="inputModel" label="Amount" :disabled-country-currency="true" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>

## Show Currency Code vs Symbol ```vue
<template>
  <spr-input-currency v-model="inputModel" label="Amount" :display-as-code="true" />

  <spr-input-currency v-model="inputModel" label="Amount" :display-as-code="false" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
````

## Pre-Selected Currency

```vue
<template>
  <spr-input-currency v-model="inputModel" label="Amount" pre-selected-currency="USD" />
</template>
```

## Numeric Value Emit

Emits a parsed numeric value (number) stripped of grouping characters on blur and on mount (if an initial value exists) via `@get-numeric-value`.

```vue
<template>
  <spr-input-currency v-model="inputModel" label="Salary" @get-numeric-value="(val) => (numeric = val)" />
  <p>Numeric: {{ numeric }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('12345.67');
const numeric = ref(0);
</script>
```

<script setup lang="ts">
import { ref, computed } from 'vue';

import { Icon } from '@iconify/vue';

import SprInputCurrency from "@/components/input/input-currency/input-currency.vue"

const inputModel = ref('');
</script>
