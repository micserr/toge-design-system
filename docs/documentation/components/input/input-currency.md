---
outline: 'deep'
---

# Currency Input

Currency input with selectable currency code and formatting (thousand separators, fixed decimals, symbol/code display).

## Basic Usage

<spr-input-currency id="input-currency-basic" v-model="inputModels.basic" label="Currency" />

```vue
<template>
  <spr-input-currency id="input-currency-basic" v-model="inputModel" label="Currency" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Active State

<spr-input-currency id="input-currency-active-state" v-model="inputModels.activeState" label="Currency" active />

```vue
<template>
  <spr-input-currency id="input-currency-active-state" v-model="inputModel" label="Currency" active />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Error State

<spr-input-currency id="input-currency-error-state" v-model="inputModels.errorState" label="Currency" error>
  <template #icon>
    <Icon icon="ph:warning-circle-fill" />
  </template>
</spr-input-currency>

```vue
<template>
  <spr-input-currency v-model="inputModel" label="Currency" error>
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

<spr-input-currency v-model="inputModels.disabledState" label="Currency" :disabled="true" />

```vue
<template>
  <spr-input-currency v-model="inputModel" label="Currency" :disabled="true" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Disabled Country Currency

<spr-input-currency v-model="inputModels.disabledCountryCurrency" label="Currency" :disabled-country-currency="true" />

```vue
<template>
  <spr-input-currency v-model="inputModel" label="Currency" :disabled-country-currency="true" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Use Currency Code or Symbol

The default of the currency component is to display the currency code (e.g., USD, EUR). You can switch to display the currency symbol (e.g., $, €) by setting the `:display-as-code` prop to `false`.

<div class="spr-grid spr-gap-3">
  <spr-input-currency v-model="inputModels.currencyCodeSymbol1" label="Currency" :display-as-code="true" />

  <spr-input-currency v-model="inputModels.currencyCodeSymbol2" label="Currency" :display-as-code="false" />
</div>

```vue
<template>
  <spr-input-currency v-model="inputModel" label="Currency" :display-as-code="true" />

  <spr-input-currency v-model="inputModel" label="Currency" :display-as-code="false" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Get Selected Country Codes

## Pre-Selected Currency

```vue
<template>
  <spr-input-currency v-model="inputModel" label="Currency" pre-selected-currency="USD" />
</template>
```

## Numeric Value Emit Emits a parsed numeric value (number) stripped of grouping characters on blur and on mount (if

an initial value exists) via `@get-numeric-value`.

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

import SprInputCurrency from '@/components/input/input-currency/input-currency.vue';

const inputModels = ref({
  basic: '',
  activeState: '',
  errorState: '',
  disabledState: '',
  disabledCountryCurrency: '',
  currencyCodeSymbol1: '',
  currencyCodeSymbol2: '',
});
</script>
