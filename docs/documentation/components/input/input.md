---
outline: 'deep'
---

# Input

UI element that allows users to enter and edit text or other data.

## Basic Usage

<spr-input v-model="inputModels.basic" type="text" label="Text Input" placeholder="Enter your username"  />

```vue
<template>
  <spr-input v-model="inputModel" type="text" label="Text Input" placeholder="Enter your username" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Pre Defined Values

<spr-input v-model="inputModels.preDefinedValues" type="text" label="Text Input" placeholder="Enter your username" />

```vue
<template>
  <spr-input v-model="inputModel" type="text" label="Text Input" placeholder="Enter your username" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputModel = ref('Sample Text');
</script>
```

## Active State

<spr-input v-model="inputModels.activeState" type="text" label="Text Input" placeholder="Enter your username" active />

```vue
<template>
  <spr-input v-model="inputModel" type="text" label="Text Input" placeholder="Enter your username" active />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Error State

<spr-input v-model="inputModels.errorState" type="text" label="Text Input" placeholder="Enter your username" :error="true">
  <template #icon>
    <Icon icon="ph:warning-circle-fill" />
  </template>
</spr-input>

```vue
<template>
  <spr-input v-model="inputModel" type="text" label="Text Input" placeholder="Enter your username" :error="true">
    <template #icon>
      <Icon icon="ph:warning-circle-fill" />
    </template>
  </spr-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Disabled State

<spr-input v-model="inputModels.disabledState" type="text" label="Text Input" placeholder="Enter your username" :disabled="true" />

```vue
<template>
  <spr-input v-model="inputModel" type="text" label="Text Input" placeholder="Enter your username" :disabled="true" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Min-Max Character Count

You can set minimum or maximum length limits by passing props `min-length` or `max-length` with the corresponding number value. Additionally, you can enable a character counter display in the bottom right of the input field with the `show-char-count` prop.

<div class="spr-grid spr-gap-3">
  <spr-input 
    v-model="inputModels.minMaxCharCount1" 
    type="text" 
    label="Text Input" 
    placeholder="Enter your username" 
    :min-length="0" 
    :max-length="50" 
    show-char-count 
  />
  <spr-input
    v-model="inputModels.minMaxCharCount2"
    type="text"
    label="Text Input" 
    placeholder="Enter a number" 
    :max-length="3"
    helper-text="Max 3 character allowed" 
    display-helper
    show-char-count
  />
</div>

```vue
<template>
  <spr-input
    v-model="inputModel"
    type="text"
    label="Text Input"
    placeholder="Enter your username"
    :min-length="0"
    :max-length="50"
    show-char-count
  />

  <spr-input
    v-model="inputModel"
    type="text"
    label="Text Input"
    placeholder="Enter a number"
    :max-length="3"
    helper-text="Max 3 character allowed"
    display-helper
    show-char-count
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Prefix

<spr-input v-model="inputModels.prefix" type="text" label="Text Input" placeholder="Enter your username"  >
  <template #prefix>
    <Icon icon="ph:warning-circle-fill" />
  </template>
</spr-input>

```vue
<template>
  <spr-input v-model="inputModel" type="text" label="Text Input" placeholder="Enter your username">
    <template #prefix>
      <Icon icon="ph:warning-circle-fill" />
    </template>
  </spr-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Trailing Label

<div class="spr-flex spr-flex-col spr-gap-2">
  <spr-input v-model="inputModels.trailingLabel1" type="text" label="Offset xs" placeholder="00" offset-size="xs">
    <template #trailing>
      minutes
    </template>
  </spr-input>

  <spr-input v-model="inputModels.trailingLabel2" type="text" label="offset sm" placeholder="0000000" offset-size="sm">
    <template #trailing>
      minutes
    </template>
  </spr-input>

  <spr-input v-model="inputModels.trailingLabel3" type="text" label="offset md" placeholder="Enter your name" offset-size="md" >
    <template #trailing>
      Name of the user
    </template>
  </spr-input>
</div>

```vue
<template>
  <!-- xs -->
  <spr-input v-model="inputModel" type="text" label="Offset xs" placeholder="00" offset-size="xs">
    <template #trailing> minutes </template>
  </spr-input>

  <!-- sm -->
  <spr-input v-model="inputModel" type="text" label="offset sm" placeholder="00" offset-size="sm">
    <template #trailing> minutes </template>
  </spr-input>

  <!-- md -->
  <spr-input v-model="inputModel" type="text" label="offset md" placeholder="Enter your name" offset-size="md">
    <template #trailing> Name of the user </template>
  </spr-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## Helper Message

A helper message is a text label below the input field that provides additional information about instructions, formatting hints, validation feedback, etc.

To display the helper message, set the `display-helper` prop to `true` and add the `helper-text` prop with the helper message text. You can also insert an icon with the `helper-icon` prop. This uses the [Iconify](https://icon-sets.iconify.design/) icon library.

<div class="spr-grid spr-gap-6">
  <spr-input 
    v-model="inputModels.helperMessage1"
    type="text" 
    label="Text Input" 
    placeholder="Enter your text" 
    helper-text="This is a helper message" 
    display-helper 
  />
  <spr-input 
    v-model="inputModels.helperMessage2" 
    type="text"
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
    v-model="inputModel"
    type="text"
    label="Text Input"
    placeholder="Enter your text"
    helper-text="This is a helper message"
    display-helper
  />

  <spr-input
    v-model="inputModel"
    type="text"
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

const inputModel = ref('');
</script>
```

Alternatively, you can use the `helperMessage` slot to display a custom helper message.

<div class="spr-grid spr-gap-6">
  <spr-input 
    v-model="inputModels.helperMessage3" 
    type="text"
    label="Text Input" 
    placeholder="Enter your text" 
    display-helper
  >
    <template #helperMessage>
      This is a helper message
    </template>
  </spr-input>
  <spr-input 
    v-model="inputModels.helperMessage4" 
    type="text"
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
  <spr-input v-model="inputModel" type="text" label="Text Input" placeholder="Enter your text">
    <template #helperMessage> This is a helper message </template>
  </spr-input>

  <spr-input v-model="inputModel" type="text" label="Text Input" placeholder="Enter your text" :error="true">
    <template #helperMessage>
      <icon icon="ph:warning-circle-fill" width="20px" height="20px" />
      <span>This is an error message</span>
    </template>
  </spr-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputModel = ref('');
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

import SprInputDropdown from "@/components/input/input-dropdown/input-dropdown.vue"
import SprLogo from "@/components/logo/logo.vue"

const inputModels = ref({
  basic: '',
  preDefinedValues: 'Sample Text',
  activeState: '',
  errorState: '',
  disabledState: '',
  minMaxCharCount1: '',
  minMaxCharCount2: '',
  prefix: '',
  trailingLabel1: '',
  trailingLabel2: '',
  trailingLabel3: '',
  helperMessage1: '',
  helperMessage2: '',
  helperMessage3: '',
  helperMessage4: '',
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
