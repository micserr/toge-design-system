---
title: Currency Input
descripttion: The Currency Input component allows users to enter and format currency values with selectable currency codes and symbols, supporting features like thousand separators, fixed decimals, and error handling.
outline: deep
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

The default of the currency component is to display the currency code (e.g., USD, EUR). You can switch to display the currency symbol (e.g., $, €) by setting the `display-as-symbol` prop to `true`.

<div class="spr-grid spr-gap-3">
  <spr-input-currency 
    id="input-currency-code-or-symbol-1" 
    v-model="inputModels.currencyCodeSymbol1" 
    label="Input Currenct" 
  />
  <spr-input-currency 
    id="input-currency-code-or-symbol-2" 
    v-model="inputModels.currencyCodeSymbol2" 
    label="Input Currenct" 
    display-as-symbol
  />
</div>

```vue
<template>
  <spr-input-currency id="input-currency-code-or-symbol-1" v-model="inputModel" label="Input Currenct" />

  <spr-input-currency
    id="input-currency-code-or-symbol-2"
    v-model="inputModel"
    label="Input Currenct"
    display-as-symbol
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
    <p>Selected Currency: {{ meta.currency }}</p>
    <p>Selected Symbol: {{ meta.symbol }}</p>
    <p>Raw Value: {{ meta.rawValue }}</p>
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

## Auto Format

Automatically applies thousand separators and limits decimals based on currency standards while typing and on blur. If a value already exists when the component is mounted, it will be auto-formatted immediately.

<div class="spr-grid spr-gap-3">
  <spr-input-currency 
    id="input-currency-auto-format" 
    v-model="inputModels.autoFormat" 
    label="Input Currency" 
    auto-format
  />
  <spr-input-currency 
    id="input-currency-auto-format-existing" 
    v-model="inputModels.autoFormatExisting" 
    label="With Initial Value" 
    auto-format
  />
</div>

```vue
<template>
  <spr-input-currency
    id="input-currency-auto-format-empty"
    v-model="inputModelEmpty"
    label="Empty Input Currency"
    auto-format
  />

  <spr-input-currency
    id="input-currency-auto-format-existing"
    v-model="inputModelWithValue"
    label="With Initial Value"
    auto-format
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModelEmpty = ref('');
// This value will be auto-formatted when component mounts
const inputModelWithValue = ref('1234567.8');
</script>
```

## Max and Min Decimals

Control the maximum and minimum number of decimal places allowed for the currency input.

**Use Cases:**

- **`max-decimals` only** - Limit precision without enforcing decimal places (e.g., cryptocurrency pricing)
- **`min-decimals` only** - Enforce minimum padding without limiting precision
- **Both together** - Create a range of allowed decimal places (most common)

### Example 1: Fixed Decimals (Price Field)

Always show exactly 2 decimal places. Perfect for price inputs where you need consistency.

Try typing: `100` → After blur shows `100.00`

<div>
  <spr-input-currency 
    id="input-currency-fixed-decimals" 
    v-model="inputModels.fixedDecimals" 
    label="Product Price (Fixed 2 Decimals)" 
    :min-decimals="2"
    :max-decimals="2"
    placeholder="Enter price"
  />
</div>

```vue
<template>
  <spr-input-currency
    id="input-currency-fixed-decimals"
    v-model="price"
    label="Product Price"
    :min-decimals="2"
    :max-decimals="2"
    placeholder="Enter price"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const price = ref('');
</script>
```

### Example 2: Flexible Decimals (0-4 Range)

Allow 0 to 4 decimal places. Useful for cryptocurrencies or measurements where precision varies.

Try typing: `100` → Stays as `100` (no padding), or `100.123456` → Becomes `100.1234`

<div>
  <spr-input-currency 
    id="input-currency-flexible-decimals" 
    v-model="inputModels.flexibleDecimals" 
    label="Cryptocurrency Amount (0-4 Decimals)" 
    :min-decimals="0"
    :max-decimals="4"
    placeholder="Enter amount"
  />
</div>

```vue
<template>
  <spr-input-currency
    id="input-currency-flexible-decimals"
    v-model="cryptoAmount"
    label="Cryptocurrency Amount"
    :min-decimals="0"
    :max-decimals="4"
    placeholder="Enter amount"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const cryptoAmount = ref('');
</script>
```

### Example 3: Scientific Precision (3-6 Range)

Force at least 3 decimals, allow up to 6. Useful for scientific or financial calculations.

Try typing: `100` → Becomes `100.000`, or `100.1234567` → Becomes `100.123456`

<div>
  <spr-input-currency 
    id="input-currency-scientific-decimals" 
    v-model="inputModels.scientificDecimals" 
    label="Scientific Measurement (3-6 Decimals)" 
    :min-decimals="3"
    :max-decimals="6"
    placeholder="Enter value"
  />
</div>

```vue
<template>
  <spr-input-currency
    id="input-currency-scientific-decimals"
    v-model="scientificValue"
    label="Scientific Measurement"
    :min-decimals="3"
    :max-decimals="6"
    placeholder="Enter value"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const scientificValue = ref('');
</script>
```

### Example 4: Max Decimals Only

Limit precision to 4 decimals without enforcing minimum padding. Useful for flexible inputs.

Try typing: `100` → Stays as `100`, or `100.12345` → Becomes `100.1234`

<div>
  <spr-input-currency 
    id="input-currency-max-decimals" 
    v-model="inputModels.maxDecimals" 
    label="Flexible Amount (Max 4 Decimals)" 
    :max-decimals="4"
    placeholder="Enter amount"
  />
</div>

```vue
<template>
  <spr-input-currency
    id="input-currency-max-decimals"
    v-model="amount"
    label="Flexible Amount"
    :max-decimals="4"
    placeholder="Enter amount"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const amount = ref('');
</script>
```

### Example 5: Min Decimals Only

Enforce minimum 2 decimal places padding without maximum limit. Useful when you want to show at least a certain precision.

Try typing: `100` → Becomes `100.00`, or `100.123456` → Stays as `100.123456`

<div>
  <spr-input-currency 
    id="input-currency-min-decimals" 
    v-model="inputModels.minDecimals" 
    label="Amount with Min Padding (Min 2 Decimals)" 
    :min-decimals="2"
    placeholder="Enter amount"
  />
</div>

```vue
<template>
  <spr-input-currency
    id="input-currency-min-decimals"
    v-model="minAmount"
    label="Amount with Min Padding"
    :min-decimals="2"
    placeholder="Enter amount"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const minAmount = ref('');
</script>
```

## Disable Rounding

When enabled, the component truncates (instead of rounds) fractional digits to the maximum allowed decimals.

<div>
  <spr-input-currency 
    id="input-currency-disable-rounding" 
    v-model="inputModels.disableRounding" 
    label="Input Currency" 
    :disable-rounding="true"
    :max-decimals="2"
  />
</div>

```vue
<template>
  <spr-input-currency
    id="input-currency-disable-rounding"
    v-model="inputModel"
    label="Input Currency"
    :disable-rounding="true"
    :max-decimals="2"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Custom Helper Message

You can pass a custom helper message through the `helperMessage` slot to display custom validation or additional information.

<div>
  <spr-input-currency
    id="input-currency-custom-helper"
    v-model="inputModels.customHelper"
    label="Input Currency"
    placeholder="Enter amount"
    :display-helper="true"
    :error="!!inputModels.customHelperError"
  > 
    <template #helperMessage>
      <div class="spr-flex spr-gap-2">
        <span v-if="inputModels.customHelperError" class="spr-text-red-500">{{ inputModels.customHelperError }}</span>
        <span v-else class="spr-text-gray-500">Minimum amount is $100</span>
      </div>
    </template>
  </spr-input-currency>
</div>

```vue
<template>
  <spr-input-currency
    id="input-currency-custom-helper"
    v-model="inputModel"
    label="Input Currency"
    placeholder="Enter amount"
    :display-helper="true"
    :error="!!errorMessage"
  >
    <template #helperMessage>
      <div class="spr-flex spr-gap-2">
        <span v-if="errorMessage" class="spr-text-red-500">{{ errorMessage }}</span>
        <span v-else class="spr-text-gray-500">Minimum amount is $100</span>
      </div>
    </template>
  </spr-input-currency>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const inputModel = ref('');

const errorMessage = computed(() => {
  const numValue = Number(inputModel.value.replace(/[^0-9.-]/g, ''));
  return numValue > 0 && numValue < 100 ? 'Amount must be at least $100' : '';
});
</script>
```

## Get Currency Value Event

Access the numeric value directly through the `@get-currency-value` event. This emits the parsed numeric value, making it easy to work with currency values without string conversion.

<div>
  <spr-input-currency 
    id="input-currency-get-value" 
    v-model="inputModels.getCurrencyValue" 
    label="Get Raw Value" 
    placeholder="Type and blur to see raw value"
    @get-currency-value="onGetCurrencyValue"
  />
  <div v-if="displayedRawValue" class="spr-mt-4 spr-p-3 spr-bg-gray-100 spr-rounded">
    <p class="spr-text-sm spr-text-gray-700">Raw Value: <span class="spr-font-bold">{{ displayedRawValue }}</span></p>
  </div>
</div>

```vue
<template>
  <div>
    <spr-input-currency
      id="input-currency-get-value"
      v-model="currencyValue"
      label="Get Raw Value"
      placeholder="Type and blur to see raw value"
      @get-currency-value="handleGetCurrencyValue"
    />
    <div v-if="rawValue" class="spr-mt-4 spr-rounded spr-bg-gray-100 spr-p-3">
      <p class="spr-text-sm spr-text-gray-700">
        Raw Value: <span class="spr-font-bold">{{ rawValue }}</span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const currencyValue = ref('');
const numericValue = ref<number | null>(null);

const handleGetCurrencyValue = (value: number | null) => {
  numericValue.value = value;
  console.log('Numeric value:', value);
};
</script>
```

**Example Usage:**

When you type `1234567.89` and blur, `@get-currency-value` emits `1234567.89` (a number).

```typescript
// In your component
const onGetCurrencyValue = (value: number | null) => {
  // Use the numeric value directly (null for empty input)
  if (value === null) {
    console.log('Input is empty');
    return;
  }
  console.log('User entered:', value);
  // Send to API
  // Store in database
  // Perform calculations
  const discounted = value * 0.9;
};
```

**Key Points:**

- `@get-currency-value` emits the parsed numeric value (Number type)
- Direct numeric value useful for calculations, API calls, and storage
- While typing: emits the numeric value as typed (e.g., `123`)
- On blur: emits the parsed numeric value with decimals applied (e.g., `123.00`)
- Also emitted on **component mount** if there's an initial value
- Emitted on currency change when applicable
- No need for string conversion - use it directly in calculations

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
      <td>When true shows currency code (e.g., <code>USD</code>); otherwise shows symbol (or code if symbol ambiguous).</td>
      <td>Boolean</td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td><code>display-as-symbol</code></td>
      <td>When true shows currency symbol (e.g., $, €) regardless of other settings. Takes precedence over <code>display-as-code</code>.</td>
      <td>Boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>disable-rounding</code></td>
      <td>When true, fractional digits are truncated (not rounded) to the maximum allowed decimals.</td>
      <td>Boolean</td>
      <td><code>false</code></td>
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
      <td>{ currency: String; symbol: String; numericValue: Number | null; rawValue: String | null }</td>
      <td>Emitted after selecting a currency and on blur. Includes code, symbol (or code if ambiguous), numericValue (parsed float) and rawValue (canonical unformatted string).</td>
    </tr>
    <tr>
      <td>@get-currency-value</td>
      <td>Number | null</td>
      <td>Parsed numeric value emitted while typing, on blur, on currency change, and on mount (if initial value). Emits null for empty input. Provides direct access to the numeric value without string conversion.</td>
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
  autoFormat: '',
  autoFormatExisting: '1234567.8',
  maxDecimals: '',
  minDecimals: '',
  disableRounding: '',
  customHelper: '',
  customHelperError: '',
  getCurrencyValue: '',
});

const displayedRawValue = ref('');

const onGetCurrencyValue = (value: string) => {
  displayedRawValue.value = value;
  console.log('Raw unformatted value:', value);
};

const meta = ref<{
  currency: string;
  symbol: string;
  numericValue: number | null;
  rawValue: string | null;
} >({
  currency: '',
  symbol: '',
  numericValue: null,
  rawValue: null,
});

// Updated payload signature now includes numericValue and rawValue
const handleSelectedCurrencyMeta = (payload: {
  currency: string;
  symbol: string;
  numericValue: number | null;
  rawValue: string | null;
}) => {
  meta.value = payload;
};
</script>
