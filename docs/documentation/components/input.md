---
outline: 'deep'
---

# Input

UI element that allows users to enter and edit text or other data.

## Basic Usage

<spr-input v-model="inputValue.input1" label="Text Input" placeholder="Enter your username" />

```vue
<template>
  <spr-input v-model="inputValue" label="Text Input" placeholder="Enter your username" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValue = ref('');
</script>
```

## Pre Defined Values

<spr-input v-model="inputValue.input2" label="Text Input" placeholder="Enter your username" />

```vue
<template>
  <spr-input v-model="inputValue" label="Text Input" placeholder="Enter your username" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValue = ref('Sample Text');
</script>
```

## Active State

<spr-input v-model="inputValue.input3" label="Text Input" placeholder="Enter your username" active />

```vue
<template>
  <spr-input v-model="inputValue" label="Text Input" placeholder="Enter your username" active />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValue = ref('');
</script>
```

## Error State

<spr-input v-model="inputValue.input4" label="Text Input" placeholder="Enter your username" :error="true">
  <template #icon>
    <Icon icon="ph:warning-circle-fill" />
  </template>
</spr-input>

```vue
<template>
  <spr-input v-model="inputValue" label="Text Input" placeholder="Enter your username" :error="true">
    <template #icon>
      <Icon icon="ph:warning-circle-fill" />
    </template>
  </spr-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValue = ref('');
</script>
```

## Disabled State

<spr-input v-model="inputValue.input5" label="Text Input" placeholder="Enter your username" :disabled="true" />

```vue
<template>
  <spr-input v-model="inputValue" label="Text Input" placeholder="Enter your username" :disabled="true" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValue = ref('');
</script>
```

## Min Max Length & Character Count

You can set minimum or maximum length limits by passing props `min-length` or `max-length` with the corresponding number value. Additionally, you can enable a character counter display in the bottom right of the input field with the `show-char-count` prop.

<spr-input v-model="inputValue.input6" label="Text Input" placeholder="Enter your username" :min-length="0" :max-length="50" show-char-count />

<p>Character Length: {{ inputValue.input6.length }}</p>

<div class="spr-grid spr-gap-6">
  <spr-input
    v-model="inputValue.input20" 
    type="number"
    label="Numeric Input" 
    placeholder="Enter a number" 
    :max-length="3"
    helper-text="Max 3 digits allowed" 
    display-helper
    show-char-count
  />
</div>

```vue
<template>
  <!-- Text input with character count -->
  <spr-input
    v-model="inputValue"
    label="Text Input"
    placeholder="Enter your username"
    :min-length="0"
    :max-length="50"
    show-char-count
  />

  <!-- Numeric input with character count and helper -->
  <spr-input
    v-model="numericValue"
    type="number"
    label="Numeric Input"
    placeholder="Enter a number"
    :max-length="3"
    helper-text="Max 3 digits allowed"
    display-helper
    show-char-count
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValue = ref('');
const numericValue = ref(0);
</script>
```

## Prefix

<spr-input v-model="inputValue.input7" label="Text Input" placeholder="Enter your username"  >
  <template #prefix>
    <Icon icon="ph:warning-circle-fill" />
  </template>
</spr-input>

```vue
<template>
  <spr-input v-model="inputValue" label="Text Input" placeholder="Enter your username">
    <template #prefix>
      <Icon icon="ph:warning-circle-fill" />
    </template>
  </spr-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValue = ref('');
</script>
```

## Trailing Label

<div class="spr-flex spr-flex-col spr-gap-2">
  <spr-input v-model="inputValue.input6" label="Offset xs" placeholder="00" offset-size="xs" type="number">
    <template #trailing>
      minutes
    </template>
  </spr-input>

  <spr-input v-model="inputValue.input8" label="offset sm" placeholder="0000000" offset-size="sm" type="number">
    <template #trailing>
      minutes
    </template>
  </spr-input>

  <spr-input v-model="inputValue.input9" label="offset md" placeholder="Enter your name" offset-size="md" >
    <template #trailing>
      Name of the user
    </template>
  </spr-input>
</div>

```vue
<template>
  <!-- xs -->
  <spr-input v-model="inputValueXS" label="Offset xs" placeholder="00" offset-size="xs" type="number">
    <template #trailing> minutes </template>
  </spr-input>

  <!-- sm -->
  <spr-input v-model="inputValueSM" label="offset sm" placeholder="00" offset-size="sm" type="number">
    <template #trailing> minutes </template>
  </spr-input>

  <!-- md -->
  <spr-input v-model="inputValueMD" label="offset md" placeholder="Enter your name" offset-size="md">
    <template #trailing> Name of the user </template>
  </spr-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValueXS = ref('');

const inputValueSM = ref('');

const inputValueMD = ref('');
</script>
```

## Character Count Display

You can display a character counter in the bottom right of the input field by setting the `show-char-count` prop to `true`. When used with `max-length`, the character count will display in the format "current/max" and will change color to indicate when the maximum length is reached.

<spr-input 
  v-model="inputValue.input21" 
  label="Text with Character Count" 
  placeholder="Type to see the counter" 
  :max-length="20" 
  show-char-count 
/>

```vue
<template>
  <spr-input
    v-model="inputValue"
    label="Text with Character Count"
    placeholder="Type to see the counter"
    :max-length="20"
    show-char-count
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValue = ref('');
</script>
```

## Helper Message

A helper message is a text label below the input field that provides additional information about instructions, formatting hints, validation feedback, etc.

To display the helper message, set the `display-helper` prop to `true` and add the `helper-text` prop with the helper message text. You can also insert an icon with the `helper-icon` prop. This uses the [Iconify](https://icon-sets.iconify.design/) icon library.

<div class="spr-grid spr-gap-6">
  <spr-input 
    v-model="inputValue.input10" 
    label="Text Input" 
    placeholder="Enter your text" 
    helper-text="This is a helper message" 
    display-helper 
  />
  <spr-input 
    v-model="inputValue.input1" 
    label="Text Input" 
    placeholder="Enter your text" 
    helper-text="This is an error message" 
    helper-icon="ph:warning-circle-fill" 
    display-helper 
    error
  />
</div>

```vue
<template>
  <spr-input
    v-model="inputValue"
    label="Text Input"
    placeholder="Enter your text"
    helper-text="This is a helper message"
    display-helper
  />

  <spr-input
    v-model="inputValue"
    label="Text Input"
    placeholder="Enter your text"
    helper-text="This is an error message"
    helper-icon="ph:warning-circle-fill"
    display-helper
    error
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValue = ref('');
</script>
```

Alternatively, you can use the `helperMessage` slot to display a custom helper message.

<div class="spr-grid spr-gap-6">
  <spr-input 
    v-model="inputValue.input11" 
    label="Text Input" 
    placeholder="Enter your text" 
    display-helper
  >
    <template #helperMessage>
      This is a helper message
    </template>
  </spr-input>
  <spr-input 
    v-model="inputValue.input1" 
    label="Text Input" 
    placeholder="Enter your text" 
    display-helper 
    error 
  >
    <template #helperMessage>
      <icon icon="ph:warning-circle-fill" width="20px" height="20px" />
      <span>This is an error message</span>
    </template>
  </spr-input>
</div>

```vue
<template>
  <spr-input v-model="inputValue" label="Text Input" placeholder="Enter your text">
    <template #helperMessage> This is a helper message </template>
  </spr-input>

  <spr-input v-model="inputValue" label="Text Input" placeholder="Enter your text" :error="true">
    <template #helperMessage>
      <icon icon="ph:warning-circle-fill" width="20px" height="20px" />
      <span>This is an error message</span>
    </template>
  </spr-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValue = ref('');
</script>
```

## Input Types

### Search Input

<div>
   <spr-input-search v-model="inputValue.input12" label="Search" placeholder="Search ..."/>
</div>

```vue
<template>
  <spr-input-search v-model="inputValueSearch" label="Search" placeholder="Search ..." />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValueSearch = ref('');
</script>
```

### Username Input

<div>
  <spr-input-username v-model="inputValue.input13" label="Username" placeholder="Enter username" />
</div>

```vue
<template>
  <spr-input-username v-model="inputValueUsername" label="Username" placeholder="Enter username" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValueUsername = ref('');
</script>
```

### Email Input

<div>
  <spr-input-email v-model="inputValue.input14" label="Username" placeholder="Enter email" />
</div>

```vue
<template>
  <spr-input-email v-model="inputValueEmail" label="Username" placeholder="Enter email" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValueEmail = ref('');
</script>
```

### Password Input

<div>
  <form action="#">
    <spr-input-password v-model="inputValue.input15" label="Password" placeholder="Enter password" />
  </form>
</div>

```vue
<template>
  <spr-input-password
    v-model="inputValuePassword"
    label="Password"
    placeholder="Enter password"
    autocomplete="new-password"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValuePassword = ref('');
</script>
```

### URL Input

<div>
  <spr-input-url v-model="inputValue.input16" label="URL" placeholder="Enter url" />
</div>

```vue
<template>
  <spr-input-url v-model="inputValueURL" label="URL" placeholder="Enter url" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValueURL = ref('');
</script>
```

### Contact Number Input

This component utilizes `libphonenumber-js` to parse and format the input on blur. Masking of contact number on change will be implemented in the future.

<div>
  <div class="spr-grid spr-gap-4">
    <spr-input-contact-number 
      v-model="inputValue.input17" 
      label="Contact Number" 
      @get-selected-country-calling-code="handleSelectedCountryCallingCode"
      @get-contact-number-errors="handleContactNumberErrors" 
    />
    <spr-input-contact-number 
      v-model="inputValue.input17" 
      label="Disabled Calling Country Code" 
      @get-selected-country-calling-code="handleSelectedCountryCallingCode"
      @get-contact-number-errors="handleContactNumberErrors" 
      disabledCountryCallingCode
    />
  </div>
  <div class="spr-my-3 spr-p-4 spr-bg-blue-100">
    <p>Model Output: {{ inputValue.input17 }}</p>
    <p>Selected Country Code: {{ selectedCountryCode }}</p>
    <p>Selected Country Calling Code: {{ selectedCountryCallingCode }}</p>
    <p>Error Handling: {{ contactNumberErrors }}</p>
    <p>Parsed International Number: {{ parseInternationalNumber }}</p>
  </div>
</div>

::: info Importannt to note:
Since the v-model output is not in an international format (e.g., +63XXXXXXXXXXX), you will need to create a separate function that parses the model output along with the selected country code.
:::

```vue
<template>
  <div>
    <div class="spr-grid spr-gap-4">
      <spr-input-contact-number
        v-model="inputValueContactNumber"
        label="Contact Number"
        @get-selected-country-calling-code="handleSelectedCountryCallingCode"
        @get-contact-number-errors="handleContactNumberErrors"
      />
      <spr-input-contact-number
        v-model="inputValueContactNumber"
        label="Disabled Calling Country Code"
        @get-selected-country-calling-code="handleSelectedCountryCallingCode"
        @get-contact-number-errors="handleContactNumberErrors"
        disabledCountryCallingCode
      />
    </div>
    <p>Model Output: {{ inputValueContactNumber }}</p>
    <p>Selected Country Code: {{ selectedCountryCode }}</p>
    <p>Selected Country Calling Code: {{ selectedCountryCallingCode }}</p>
    <p>Error Handling: {{ contactNumberErrors }}</p>
    <p>Parsed International Number: {{ parseInternationalNumber }}</p>
  </div>

  <script lang="ts" setup>
    import { ref, computed } from 'vue';

    const inputValueContactNumber = ref('');
    const selectedCountryCode = ref('');
    const selectedCountryCallingCode = ref('');
    const contactNumberErrors = ref([]);

    const handleSelectedCountryCallingCode = (value: string) => {
      selectedCountryCode.value = value.countryCode;
      selectedCountryCallingCode.value = value.countryCallingCode;
    };

    const handleContactNumberErrors = (errors: { title: string; message: string }[]) => {
      contactNumberErrors.value = errors;
    };

    const handleContactNumberErrors = (errors: { title: string; message: string }[]) => {
      contactNumberErrors.value = errors;
    };

    const parseInternationalNumber = computed(() => {
      if (inputValueContactNumber.value) {
        const formattedNumber = `+${selectedCountryCallingCode.value}${inputValueContactNumber.value.replace(/[^0-9]/g, '')}`;

        return formattedNumber;
      }

      return '';
    });
  </script>
</template>
```

#### Set Pre Selected Country

<div class="spr-mt-3">
  <spr-input-contact-number
    v-model="inputValue.input18"
    label="Contact Number"
    pre-selected-country-code="US"
  />
</div>

```vue
<div class="spr-mt-3">
  <spr-input-contact-number
    v-model="inputValue"
    label="Contact Number"
    pre-selected-country-code="US"
  />
</div>
```

### Dropdown Input

This is the one used in the dropdown component. If you want to implement a dropdown, you can refer to the <a href="/documentation/components/dropdown.html" target="_blank">Dropdown Component</a>.

<div>
  <spr-input-dropdown v-model="inputValue.input19" label="Dropdown Input" placeholder="Select an item ..." readonly />
</div>

```vue
<template>
  <spr-input-dropdown v-model="dropdownInput" label="Dropdown Input" placeholder="Select an item ..." readonly />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const dropdownInput = ref('');
</script>
```

## API Reference

### Props

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
      <td>modelValue</td>
      <td>The current value of the input field. This prop is used for v-model binding to enable two-way data binding between the component and parent.</td>
      <td>string | number</td>
      <td>''</td>
    </tr>
    <tr>
      <td>type</td>
      <td>
        Specifies the type of input field, which determines its behavior and validation. Supports all standard HTML input types including:
        <ul>
          <li>text, number, email, password, search, url, tel</li>
          <li>date, datetime-local, month, time, week</li>
          <li>checkbox, radio, range, color</li>
          <li>file, button, submit, reset, image, hidden</li>
          <li>contact-number (custom type)</li>
        </ul>
      </td>
      <td>string</td>
      <td>'text'</td>
    </tr>
    <tr>
      <td>id</td>
      <td>Unique identifier for the input element. Used for associating the input with a label for accessibility.</td>
      <td>string</td>
      <td>'spr-input'</td>
    </tr>
    <tr>
      <td>label</td>
      <td>Text label displayed above the input field to describe its purpose.</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>supporting-label</td>
      <td>Text beside label that has a supporting style</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>placeholder</td>
      <td>Hint text displayed inside the input when it's empty, providing guidance on what to enter.</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>active</td>
      <td>When set to <code>true</code>, the input will appear in its active/focused state even when not actually focused.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>error</td>
      <td>When set to <code>true</code>, displays the input in an error state with error styling. Typically used for validation feedback.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>When set to <code>true</code>, makes the input non-interactive and visually indicates its disabled state.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>readonly</td>
      <td>When set to <code>true</code>, makes the input read-only, preventing users from modifying its value, but still allowing focus and selection.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>minLength</td>
      <td>Sets the minimum number of characters allowed in the input. Used for validation.</td>
      <td>number</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>maxLength</td>
      <td>Sets the maximum number of characters allowed in the input. Used for validation and with <code>showCharCount</code> to display limits.</td>
      <td>number</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>showCharCount</td>
      <td>When set to <code>true</code>, displays a character counter in the bottom right of the input field. When used with <code>maxLength</code>, shows current/max format.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>offsetSize</td>
      <td>
        Controls the spacing/offset size when using trailing content, affecting the positioning and padding:
        <ul>
          <li><code>xs</code>: Extra small offset, minimal padding</li>
          <li><code>sm</code>: Small offset, standard padding</li>
          <li><code>md</code>: Medium offset, larger padding</li>
        </ul>
      </td>
      <td>'xs' | 'sm' | 'md'</td>
      <td>'sm'</td>
    </tr>
    <tr>
      <td>displayHelper</td>
      <td>When set to <code>true</code>, shows the helper text area below the input field.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>helperText</td>
      <td>Text content for the helper message displayed below the input field when <code>displayHelper</code> is true.</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>helperIcon</td>
      <td>Icon name from Iconify to display alongside the helper text. Particularly useful for warning or error messages.</td>
      <td>string</td>
      <td>null</td>
    </tr>
  </tbody>
</table>

### Events

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Parameters</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>update:modelValue</td>
      <td>Emitted when the input value changes. This event enables v-model binding to work correctly.</td>
      <td>(value: string | number): The new value of the input field.</td>
    </tr>
  </tbody>
</table>

### Slots

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>prefix</td>
      <td>Content to display at the beginning of the input field, typically used for icons or additional decorations.</td>
    </tr>
    <tr>
      <td>trailing</td>
      <td>Content to display at the end of the input field, used for units, additional text, or action buttons.</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>Custom icon content to display inside the input field, particularly useful for custom input types.</td>
    </tr>
    <tr>
      <td>helperMessage</td>
      <td>Custom content for the helper message area, allowing more complex UI than just text and a single icon.</td>
    </tr>
  </tbody>
</table>

## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark"  width="50px" />
  <spr-logo name="ecosystem" theme="dark" width="50px" />
  <spr-logo name="sidekick" theme="dark" width="50px" />
</div>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useDebounceFn } from '@vueuse/core';

import { Icon } from '@iconify/vue';

import SprInput from "@/components/input/input.vue"
import SprInputSearch from "@/components/input/input-search/input-search.vue"
import SprInputUsername from "@/components/input/input-username/input-username.vue"
import SprInputEmail from "@/components/input/input-email/input-email.vue"
import SprInputPassword from "@/components/input/input-password/input-password.vue"
import SprInputUrl from "@/components/input/input-url/input-url.vue"
import SprInputContactNumber from "@/components/input/input-contact-number/input-contact-number.vue"
import SprInputDropdown from "@/components/input/input-dropdown/input-dropdown.vue"
import SprLogo from "@/components/logo/logo.vue"

const inputValue = ref({
  input1: '',
  input2: 'Sample Text',
  input3: '',
  input4: '',
  input5: '',
  input6: '',
  input7: '',
  input8: '',
  input9: '',
  input10: '',
  input11: '',
  input12: '',
  input13: '',
  input14: '',
  input15: '',
  input16: '',
  input17: '',
  input18: '',
  input19: '',
  input20: 0,
  input21: '',
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
  if (inputValue.value.input17) {
    const formattedNumber = `+${selectedCountryCallingCode.value}${inputValue.value.input17.replace(/[^0-9]/g, '')}`;

    return formattedNumber;
  }
  
  return '';
});

</script>
