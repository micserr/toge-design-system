---
outline: 'deep'
---

# Currency Input

Currency input with selectable currency code and formatting (thousand separators, fixed decimals, symbol/code display).

## Basic Usage

<spr-input-currency id="input-currency-basic" v-model="inputModels.basic" label="Input Currenct" />

```vue
<template>
  <spr-input-currency id="input-currency-basic" v-model="inputModel" label="Input Currenct" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Active State

<spr-input-currency id="input-currency-active-state" v-model="inputModels.activeState" label="Input Currenct" active />

```vue
<template>
  <spr-input-currency id="input-currency-active-state" v-model="inputModel" label="Input Currenct" active />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Error State

<spr-input-currency id="input-currency-error-state" v-model="inputModels.errorState" label="Input Currenct" error>
  <template #icon>
    <Icon icon="ph:warning-circle-fill" />
  </template>
</spr-input-currency>

```vue
<template>
  <spr-input-currency id="input-currency-error-state" v-model="inputModel" label="Input Currenct" error>
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

<div>
  <spr-input-currency 
    id="input-currency-disabled-state" 
    v-model="inputModels.disabledState" 
    label="Input Currenct" 
    disabled 
  />
</div>

```vue
<template>
  <spr-input-currency id="input-currency-disabled-state" v-model="inputModel" label="Input Currenct" disabled />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Disabled Country Currency

<div>
  <spr-input-currency 
    id="input-currency-disabled-country-currency" 
    v-model="inputModels.disabledCountryCurrency" 
    label="Input Currenct" 
    disabled-country-currency 
  />
</div>

```vue
<template>
  <spr-input-currency
    id="input-currency-disabled-country-currency"
    v-model="inputModel"
    label="Input Currenct"
    disabled-country-currency
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Use Currency Code or Symbol

The default of the currency component is to display the currency code (e.g., USD, EUR). You can switch to display the currency symbol (e.g., $, €) by setting the `:display-as-code` prop to `false`.

<div class="spr-grid spr-gap-3">
  <spr-input-currency 
    id="input-currency-code-or-symbol-1" 
    v-model="inputModels.currencyCodeSymbol1" 
    label="Input Currenct" 
    :display-as-code="true" 
  />

<spr-input-currency 
    id="input-currency-code-or-symbol-2" 
    v-model="inputModels.currencyCodeSymbol2" 
    label="Input Currenct" 
    :display-as-code="false" 
  />

</div>

```vue
<template>
  <spr-input-currency
    id="input-currency-code-or-symbol-1"
    v-model="inputModel"
    label="Input Currenct"
    :display-as-code="true"
  />

  <spr-input-currency
    id="input-currency-code-or-symbol-2"
    v-model="inputModel"
    label="Input Currenct"
    :display-as-code="false"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Get Selected Currency Meta

<div class="spr-grid spr-gap-4">
  <spr-input-currency 
    id="input-currency-selected-currency"
    v-model="inputModels.selectedCurrencyMeta" 
    label="Input Currenct"  
    @get-selected-currency-meta="handleSelectedCurrencyMeta"
  />

  <div class="spr-p-4 spr-bg-blue-100">
    <p>Model Output: {{ inputModels.selectedCurrencyMeta }}</p>
    <p>Selected Currency: {{ selectedCurrency }}</p>
    <p>Selected Symbol: {{ selectedSymbol }}</p>
  </div>
</div>

```vue
<template>
  <spr-input-currency
    id="input-currency-selected-currency"
    v-model="inputModel"
    label="Input Currenct"
    @get-selected-currency-meta="handleSelectedCurrencyMeta"
  />

  <div class="spr-bg-blue-100 spr-p-4">
    <p>Model Output: {{ inputModel }}</p>
    <p>Selected Currency: {{ selectedCurrency }}</p>
    <p>Selected Symbol: {{ selectedSymbol }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
const selectedCurrency = ref('');
const selectedSymbol = ref('');

const handleSelectedCurrencyMeta = (val: { currency: string; symbol: string }) => {
  selectedCurrency.value = val.currency;
  selectedSymbol.value = val.symbol;
};
</script>
```

## Pre-Selected Currency

<spr-input-currency v-model="inputModels.preSelectedCurrency" label="Input Currenct" pre-selected-currency="USD" />

```vue
<template>
  <spr-input-currency v-model="inputModel" label="Input Currenct" pre-selected-currency="USD" />
</template>
```

## API Reference

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>id</code></td>
      <td>The unique id for the component.</td>
      <td>String</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td><code>v-model</code></td>
      <td>The raw (possibly unformatted while typing) currency string value.</td>
      <td>String</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td><code>placeholder</code></td>
      <td>Placeholder text displayed when the input is empty.</td>
      <td>String</td>
      <td><code>'0.00'</code></td>
    </tr>
    <tr>
      <td><code>pre-selected-currency</code></td>
      <td>Initial ISO 4217 currency code (e.g., <code>USD</code>, <code>EUR</code>). Determines initial selector value.</td>
      <td>String</td>
      <td><code>'PHP'</code></td>
    </tr>
    <tr>
      <td><code>disabled</code></td>
      <td>Disables the entire currency input (including currency selector).</td>
      <td>Boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>disabled-country-currency</code></td>
      <td>Disables only the currency selector while keeping the text field interactive.</td>
      <td>Boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>auto-format</code></td>
      <td>Automatically applies thousand separators (and limits decimals) on blur and while typing (where valid).</td>
      <td>Boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>max-decimals</code></td>
      <td>Maximum number of fractional digits preserved when formatting.</td>
      <td>Number</td>
      <td><code>2</code></td>
    </tr>
    <tr>
      <td><code>min-decimals</code></td>
      <td>Minimum number of fractional digits (currently not padded automatically if you removed padding logic).</td>
      <td>Number</td>
      <td><code>2</code></td>
    </tr>
    <tr>
      <td><code>display-as-code</code></td>
      <td>When true shows currency code (e.g., <code>USD</code>); when false shows symbol (or code if symbol ambiguous).</td>
      <td>Boolean</td>
      <td><code>true</code></td>
    </tr>
  </tbody>
</table>

<p class="spr-mt-4 spr-text-300">
For additional shared props, events, slots, and behavior inherited from the base input component, please refer to the
<a href="/documentation/components/input/input.html#api-reference">Input Component API Reference</a>.
</p>

### Events

<table>
  <thead>
    <tr>
      <th>Event</th>
      <th>Payload</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>@update:model-value</td>
      <td>String</td>
      <td>Emitted whenever the bound input value changes (two-way binding).</td>
    </tr>
    <tr>
      <td>@get-selected-currency-meta</td>
      <td>{ currency: String; symbol: String }</td>
      <td>Emitted after selecting a currency; provides the currency code and its display symbol (falls back to code if ambiguous).</td>
    </tr>
    <tr>
      <td>@get-currency-errors</td>
      <td>Array&lt;{ title: String; message: String }&gt;</td>
      <td>Validation or parsing errors encountered during input normalization.</td>
    </tr>
    <tr>
      <td>@get-numeric-value</td>
      <td>Number</td>
      <td>Parsed numeric value (group separators stripped) emitted on mount (if initial value) and blur.</td>
    </tr>
  </tbody>
</table>

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
  selectedCurrencyMeta: '',
  preSelectedCurrency: '',
});

const selectedCurrency = ref('');
const selectedSymbol = ref('');
const currencyNumeric = ref(0);

const handleSelectedCurrencyMeta = (item: { currency: string; symbol: string }) => {
  selectedCurrency.value = item.currency;
  selectedSymbol.value = item.symbol;
};

const handleCurrencyNumeric = (value: number) => {
  currencyNumeric.value = value;
};
</script>
