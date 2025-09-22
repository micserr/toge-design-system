---
outline: 'deep'
---

# Contact Number Input

International contact number input with country selector and validation.

Uses `libphonenumber-js` internally for parsing and formatting on blur.

## Basic Usage

<spr-input-contact-number v-model="model" label="Contact Number" />

```vue
<template>
  <spr-input-contact-number v-model="model" label="Contact Number" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const model = ref('');
</script>
```

## Get Selected Country Codes

```vue
<spr-input-contact-number
  v-model="contact"
  label="Contact Number"
  @get-selected-country-calling-code="handleCodes"
  @get-contact-number-errors="handleErrors"
/>

<script setup lang="ts">
import { ref } from 'vue';
const contact = ref('');
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

```vue
<spr-input-contact-number v-model="contact" label="Contact" pre-selected-country-code="US" />
```
