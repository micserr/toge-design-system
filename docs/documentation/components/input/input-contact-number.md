---
outline: 'deep'
---

# Contact Number Input

- This component utilizes libphonenumber-js to parse and format the input on blur.
- International contact number input with country selector and validation.

Uses `libphonenumber-js` internally for parsing and formatting on blur.

## Basic Usage

<div class="spr-grid spr-gap-4">
  <spr-input-contact-number 
    id="input-contact-number-basic"
    v-model="inputModels.basic" 
    label="Contact Number"  
    @get-selected-country-calling-code="handleSelectedCountryCallingCode"
    @get-contact-number-errors="handleContactNumberErrors" 
  />

  <div class="spr-p-4 spr-bg-blue-100">
    <p>Model Output: {{ inputModels.basic }}</p>
    <p>Selected Country Code: {{ selectedCountryCode }}</p>
    <p>Selected Country Calling Code: {{ selectedCountryCallingCode }}</p>
    <p>Error Handling: {{ contactNumberErrors }}</p>
    <p>Parsed International Number: {{ parseInternationalNumber }}</p>
  </div>
</div>

```vue
<template>
  <spr-input-contact-number id="input-contact-number-basic" v-model="inputModel" label="Contact Number" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Active State

<div>
  <spr-input-contact-number 
    id="input-contact-number-active-state" 
    v-model="inputModels.activeState" 
    label="Contact Number" 
    active 
  />
</div>

```vue
<template>
  <spr-input-contact-number v-model="inputModel" label="Contact Number" active />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Error State

<div>
  <spr-input-contact-number 
    id="input-contact-number-error-state" 
    v-model="inputModels.errorState" 
    label="Contact Number" 
    error
  >
    <template #icon>
      <Icon icon="ph:warning-circle-fill" />
    </template>
  </spr-input-contact-number>
</div>

```vue
<template>
  <spr-input-contact-number v-model="inputModel" label="Contact Number" error>
    <template #icon>
      <Icon icon="ph:warning-circle-fill" />
    </template>
  </spr-input-contact-number>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Disabled State

<div>
  <spr-input-contact-number 
    id="input-contact-number-disabled-state" 
    v-model="inputModels.disabledState" 
    label="Contact Number" 
    disabled 
  />
</div>

```vue
<template>
  <spr-input-contact-number v-model="inputModel" label="Contact Number" disabled />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Disabled Country Calling Code

<div>
  <spr-input-contact-number 
    id="input-contact-number-disabled-country-calling-code" 
    v-model="inputModels.disabledCountryCallingCode" 
    label="Contact Number" 
    :disabled-country-calling-code="true" 
  />
</div>

```vue
<template>
  <spr-input-contact-number v-model="inputModel" label="Contact Number" :disabled-country-calling-code="true" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Get Selected Country Codes

```vue
<template>
  <spr-input-contact-number
    v-model="inputModel"
    label="Contact Number"
    @get-selected-country-calling-code="handleCodes"
    @get-contact-number-errors="handleErrors"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
const selectedCountry = ref('');
const selectedCalling = ref('');
const errors = ref([]);

const handleCodes = (val: { countryCode: string; countryCallingCode: string }) => {
  selectedCountry.value = val.countryCode;
  selectedCalling.value = val.countryCallingCode;
};

const handleErrors = (val: { title: string; message: string }[]) => {
  errors.value = val;
};
</script>
```

## Pre-Selected Country

<spr-input-contact-number v-model="inputModels.preSelectedCountry" label="Contact Number" pre-selected-country-code="US" />

```vue
<template>
  <spr-input-contact-number v-model="inputModel" label="Contact Number" pre-selected-country-code="US" />
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
      <td>The unique id for the component</td>
      <td>String</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td><code>v-model</code></td>
      <td>The current (unformatted) input value. Updates on user input and formatting events.</td>
      <td>String</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td><code>placeholder</code></td>
      <td>Placeholder text displayed when the input is empty.</td>
      <td>String</td>
      <td><code>'Enter Phone Number'</code></td>
    </tr>
    <tr>
      <td><code>pre-selected-country-code</code></td>
      <td>Initial ISO 3166-1 alpha-2 country code used to derive the default calling code (e.g., <code>PH</code>, <code>US</code>).</td>
      <td>String</td>
      <td><code>'PH'</code></td>
    </tr>
    <tr>
      <td><code>disabled</code></td>
      <td>Disables the entire contact number input (including country selector).</td>
      <td>Boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>disabled-country-calling-code</code></td>
      <td>Disables only the country calling code selector while keeping the number field interactive.</td>
      <td>Boolean</td>
      <td><code>false</code></td>
    </tr>
  </tbody>
</table>

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
      <td>Emitted whenever the raw input value changes (two-way binding support).</td>
    </tr>
    <tr>
      <td>@get-selected-country-calling-code</td>
      <td>{ countryCode: String; countryCallingCode: String }</td>
      <td>Emitted after country selection changes, providing both the ISO country code and its calling code.</td>
    </tr>
    <tr>
      <td>@get-parsed-international-number</td>
      <td>String</td>
      <td>Emitted with the fully parsed international number (e.g., <code>+15551234567</code>) after formatting logic runs.</td>
    </tr>
    <tr>
      <td>@get-contact-number-errors</td>
      <td>Array&lt;{ title: String; message: String }&gt;</td>
      <td>Emitted with validation error objects if parsing or formatting detects issues.</td>
    </tr>
  </tbody>
</table>

<script setup lang="ts">
import { ref, computed } from 'vue';

import { Icon } from '@iconify/vue';

import SprInputContactNumber from "@/components/input/input-contact-number/input-contact-number.vue"

const inputModels = ref({
  basic: '',
  activeState: '',
  errorState: '',
  disabledState: '',
  disabledCountryCallingCode: '',
  preSelectedCountry: '',
});

const selectedCountryCode = ref('');
const selectedCountryCallingCode = ref('');
const contactNumberErrors = ref<{ title: string; message: string }[]>([]);

const handleSelectedCountryCallingCode = (value: string) => {
  selectedCountryCode.value = value.countryCode;
  selectedCountryCallingCode.value = value.countryCallingCode;
};

const handleContactNumberErrors = (errors: { title: string; message: string }[]) => {
  contactNumberErrors.value = errors;
};

const parseInternationalNumber = computed(() => {
  if (inputModels.value.basic) {
    const formattedNumber = `+${selectedCountryCallingCode.value}${inputModels.value.basic.replace(/[^0-9]/g, '')}`;

    return formattedNumber;
  }
  
  return '';
});
</script>
