---
outline: 'deep'
---

# Currency Input

Currency input with selectable currency code and formatting (thousand separators, fixed decimals, symbol/code display).

## Basic Usage

<spr-input-currency v-model="amount" label="Amount" />

```vue
<template>
  <spr-input-currency v-model="amount" label="Amount" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const amount = ref('');
</script>
```

## Show Currency Code vs Symbol

```vue
<spr-input-currency v-model="amount" label="Amount" :display-as-code="true" />
<spr-input-currency v-model="amount2" label="Amount" :display-as-code="false" />

<script setup lang="ts">
import { ref } from 'vue';
const amount = ref('');
const amount2 = ref('');
</script>
```

## Numeric Value Emit

Listens to numeric parse result via `@get-numeric-value`.

```vue
<spr-input-currency v-model="raw" label="Salary" @get-numeric-value="(val) => (numeric = val)" />

<script setup lang="ts">
import { ref } from 'vue';
const raw = ref('');
const numeric = ref(0);
</script>
```

## Pre-Selected Currency

```vue
<spr-input-currency v-model="amount" label="Amount" pre-selected-currency="USD" />
```
