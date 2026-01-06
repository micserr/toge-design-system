---
title: Contact Number Input
descripttion: The Contact Number Input component allows users to enter and format international phone numbers with a country selector, utilizing libphonenumber-js for parsing and validation.
outline: deep
---

# Contact Number Input

- This component utilizes libphonenumber-js to parse and format the input on blur.
- International contact number input with country selector and validation.

Uses `libphonenumber-js` internally for parsing and formatting on blur.

## Basic Usage

<spr-input-contact-number id="input-contact-number-basic" v-model="inputModels.basic" label="Input Contact Number"/>

```vue
<template>
  <spr-input-contact-number id="input-contact-number-basic" v-model="inputModel" label="Input Contact Number" />
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
    label="Input Contact Number" 
    active 
  />
</div>

```vue
<template>
  <spr-input-contact-number
    id="input-contact-number-active-state"
    v-model="inputModel"
    label="Input Contact Number"
    active
  />
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
    label="Input Contact Number" 
    error
  >
    <template #icon>
      <Icon icon="ph:warning-circle-fill" />
    </template>
  </spr-input-contact-number>
</div>

```vue
<template>
  <spr-input-contact-number
    id="input-contact-number-error-state"
    v-model="inputModel"
    label="Input Contact Number"
    error
  >
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
    label="Input Contact Number" 
    disabled 
  />
</div>

```vue
<template>
  <spr-input-contact-number
    id="input-contact-number-disabled-state"
    v-model="inputModel"
    label="Input Contact Number"
    disabled
  />
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
    label="Input Contact Number" 
    :disabled-country-calling-code="true" 
  />
</div>

```vue
<template>
  <spr-input-contact-number
    id="input-contact-number-disabled-country-calling-code"
    v-model="inputModel"
    label="Input Contact Number"
    :disabled-country-calling-code="true"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Get Selected Country Codes

<div class="spr-grid spr-gap-4">
  <spr-input-contact-number 
    id="input-contact-number-selected-country-codes"
    v-model="inputModels.selectedCountryCodes" 
    label="Input Contact Number"  
    @get-selected-country-calling-code="handleSelectedCountryCallingCode"
    @get-contact-number-errors="handleContactNumberErrors"
    @get-parsed-international-number="handleParsedInternationalNumber"
  />

  <div class="spr-p-4 spr-bg-blue-100">
    <p>Model Output: {{ inputModels.selectedCountryCodes }}</p>
    <p>Selected Country Code: {{ selectedCountryCode }}</p>
    <p>Selected Country Calling Code: {{ selectedCountryCallingCode }}</p>
    <p>Error Handling: {{ contactNumberErrors }}</p>
    <p>Parsed International Number: {{ parsedInternationalNumber }}</p>
  </div>
</div>

```vue
<template>
  <spr-input-contact-number
    id="input-contact-number-selected-country-codes"
    v-model="inputModel"
    label="Input Contact Number"
    @get-selected-country-calling-code="handleCodes"
    @get-contact-number-errors="handleErrors"
    @get-parsed-international-number="handleParsedNumber"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
const selectedCountry = ref('');
const selectedCalling = ref('');
const errors = ref([]);
const parsedNumber = ref('');

const handleCodes = (val: { countryCode: string; countryCallingCode: string }) => {
  selectedCountry.value = val.countryCode;
  selectedCalling.value = val.countryCallingCode;
};

const handleErrors = (val: { title: string; message: string }[]) => {
  errors.value = val;
};

const handleParsedNumber = (val: string) => {
  parsedNumber.value = val;
};
</script>
```

## Pre-Selected Country

<div>
  <spr-input-contact-number 
    id="input-contact-number-preselected-country" 
    v-model="inputModels.preSelectedCountry" 
    label="Input Contact Number" 
    pre-selected-country-code="US" 
  />
</div>

```vue
<template>
  <spr-input-contact-number
    id="input-contact-number-preselected-country"
    v-model="inputModel"
    label="Input Contact Number"
    pre-selected-country-code="US"
  />
</template>
```

## Display Helper

Display helpful text or error messages below the input field using the `display-helper`, `helper-text`, `helper-icon`, and `error` props. You can also customize the helper message with a slot.

<div class="spr-grid spr-gap-4">
  <div>
    <p class="spr-text-sm spr-font-semibold spr-mb-2">Helper Text</p>
    <spr-input-contact-number
      id="input-contact-number-helper-text"
      v-model="inputModels.helperText"
      label="Input Contact Number"
      display-helper
      helper-text="Enter a valid international phone number"
    />
  </div>
  <div>
    <p class="spr-text-sm spr-font-semibold spr-mb-2">Error State with Helper</p>
    <spr-input-contact-number
      id="input-contact-number-error-helper"
      v-model="inputModels.errorHelper"
      label="Input Contact Number"
      display-helper
      helper-icon="ph:warning-circle-fill"
      helper-text="Invalid phone number format"
      error
    />
  </div>
  <div>
    <p class="spr-text-sm spr-font-semibold spr-mb-2">Custom Helper Message</p>
    <spr-input-contact-number
      id="input-contact-number-custom-helper"
      v-model="inputModels.customHelper"
      label="Input Contact Number"
      display-helper
      helper-icon="ph:info-fill"
      helper-text="Phone number info"
    >
      <template #helperMessage>
        <div class="spr-flex spr-w-full spr-justify-between spr-gap-2">
          <div class="spr-body-sm-regular spr-flex spr-items-center spr-gap-1">
            <Icon class="spr-min-h-5 spr-min-w-5" icon="ph:info-fill" />
            <span>Enter number with country code prefix</span>
          </div>
          <div class="spr-body-sm-regular">
            {{ inputModels.customHelper.length }} characters
          </div>
        </div>
      </template>
    </spr-input-contact-number>
  </div>
</div>

```vue
<template>
  <div class="spr-grid spr-gap-4">
    <!-- Helper Text -->
    <spr-input-contact-number
      id="input-contact-number-helper-text"
      v-model="inputModel"
      label="Input Contact Number"
      display-helper
      helper-text="Enter a valid international phone number"
    />

    <!-- Error State with Helper -->
    <spr-input-contact-number
      id="input-contact-number-error-helper"
      v-model="inputModel"
      label="Input Contact Number"
      display-helper
      helper-icon="ph:warning-circle-fill"
      helper-text="Invalid phone number format"
      error
    />

    <!-- Custom Helper Message -->
    <spr-input-contact-number
      id="input-contact-number-custom-helper"
      v-model="inputModel"
      label="Input Contact Number"
      display-helper
      helper-icon="ph:info-fill"
      helper-text="Phone number info"
    >
      <template #helperMessage>
        <div class="spr-flex spr-w-full spr-justify-between spr-gap-2">
          <div class="spr-body-sm-regular spr-flex spr-items-center spr-gap-1">
            <Icon class="spr-min-h-5 spr-min-w-5" icon="ph:info-fill" />
            <span>Enter number with country code prefix</span>
          </div>
          <div class="spr-body-sm-regular">{{ inputModel.length }} characters</div>
        </div>
      </template>
    </spr-input-contact-number>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

const inputModel = ref('');
</script>
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
    <tr>
      <td><code>display-helper</code></td>
      <td>When set to <code>true</code>, displays the helper text below the input field.</td>
      <td>Boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>helper-text</code></td>
      <td>Helper text to display below the input when <code>display-helper</code> is <code>true</code>. Provides additional context or instructions for the user.</td>
      <td>String</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td><code>helper-icon</code></td>
      <td>Icon name to display alongside the helper text. Accepts any icon name from the icon library.</td>
      <td>String</td>
      <td><code>null</code></td>
    </tr>
    <tr>
      <td><code>error</code></td>
      <td>When set to <code>true</code>, displays the input in an error state with red text for the helper message.</td>
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
  selectedCountryCodes: '',
  preSelectedCountry: '',
  helperText: '',
  errorHelper: '',
  customHelper: '',
});

const selectedCountryCode = ref('');
const selectedCountryCallingCode = ref('');
const contactNumberErrors = ref<{ title: string; message: string }[]>([]);
const parsedInternationalNumber = ref('');

const handleSelectedCountryCallingCode = (value: string) => {
  selectedCountryCode.value = value.countryCode;
  selectedCountryCallingCode.value = value.countryCallingCode;
};

const handleContactNumberErrors = (errors: { title: string; message: string }[]) => {
  contactNumberErrors.value = errors;
};

const handleParsedInternationalNumber = (value: string) => {
  parsedInternationalNumber.value = value;
};

const parseInternationalNumber = computed(() => {
  if (inputModels.value.basic) {
    const formattedNumber = `+${selectedCountryCallingCode.value}${inputModels.value.basic.replace(/[^0-9]/g, '')}`;

    return formattedNumber;
  }
  
  return '';
});
</script>
