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

To add value to the input without using `v-model` you can use `pre-value` prop to force add value to the input.
If both `v-model` and `pre-value` has a value, the most priority will be the `v-model`.

<spr-input v-model="inputValue.input2" label="Text Input" placeholder="Enter your username" pre-value="Sample Value" />

```vue
<template>
  <spr-input v-model="inputValue" label="Text Input" placeholder="Enter your username" pre-value="Sample Value" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValue = ref('');
</script>
```

## Active State

<spr-input v-model="inputValue.input3" label="Text Input" placeholder="Enter your username" :active="true" />

```vue
<template>
  <spr-input v-model="inputValue" label="Text Input" placeholder="Enter your username" />
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

## Min Max Length

You can either add min or max length by passing props `min-length` or `max-length` and add the corresponding number value.

<spr-input v-model="inputValue.input6" label="Text Input" placeholder="Enter your username" :min-length="0" :max-length="50" />

```vue
<template>
  <spr-input
    v-model="inputValue"
    label="Text Input"
    placeholder="Enter your username"
    :min-length="0"
    :max-length="50"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValue = ref('');
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

## Helper Message

A helper message is a text label below the input field that provides additional information about instructions, formatting hints, validation feedback, etc.

To display the helper message, set the `display-helper` prop to `true` and add the `helper-text` prop with the helper message text. You can also insert an icon with the `helper-icon` prop. This uses the [Iconify](https://icon-sets.iconify.design/) icon library.

<spr-input v-model="inputValue.input10" label="Text Input" placeholder="Enter your text" helper-text="This is a helper message" display-helper/>
<spr-input v-model="inputValue.input1" label="Text Input" placeholder="Enter your text" helper-text="This is an error message" helper-icon="ph:warning-circle-fill" display-helper error/>

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
    v-model="inputValue.input1"
    label="Text Input"
    placeholder="Enter your text"
    helper-text="This is an error message"
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

<spr-input v-model="inputValue.input11" label="Text Input" placeholder="Enter your text" display-helper>
  <template #helperMessage>
    This is a helper message
  </template>
</spr-input>
<spr-input v-model="inputValue.input1" label="Text Input" placeholder="Enter your text" display-helper error >
  <template #helperMessage>
    <icon icon="ph:warning-circle-fill" width="20px" height="20px" />
    This is a helper message
  </template>
</spr-input>

```vue
<spr-input v-model="inputValue.input1" label="Text Input" placeholder="Enter your text" display-helper>
  <template #helperMessage>
    This is a helper message
  </template>
</spr-input>
<spr-input v-model="inputValue.input1" label="Text Input" placeholder="Enter your text" display-helper error>
  <template #helperMessage>
    <icon icon="ph:warning-circle-fill" width="20px" height="20px" />
    This is a helper message
  </template>
</spr-input>

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
  <spr-input-username v-model="inputValue.input13" label="Username" placeholder="Enter username" :active="true"/>
</div>

```vue
<template>
  <spr-input-username v-model="inputValueUsername" label="Username" placeholder="Enter username" :active="true" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValueUsername = ref('');
</script>
```

### Email Input

<div>
  <spr-input-email v-model="inputValue.input14" label="Username" placeholder="Enter email" :active="true"/>
</div>

```vue
<template>
  <spr-input-email v-model="inputValueEmail" label="Username" placeholder="Enter email" :active="true" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValueEmail = ref('');
</script>
```

### Password Input

<div>
  <spr-input-password v-model="inputValue.input15" label="Password" placeholder="Enter password" :active="true"/>
</div>

```vue
<template>
  <spr-input-password v-model="inputValuePassword" label="Password" placeholder="Enter password" :active="true" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValuePassword = ref('');
</script>
```

### URL Input

<div>
  <spr-input-url v-model="inputValue.input16" label="URL" placeholder="Enter url" :active="true" />
</div>

```vue
<template>
  <spr-input-url v-model="inputValueURL" label="URL" placeholder="Enter url" :active="true" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValueURL = ref('');
</script>
```

### Contact Number Input

This component utilizes `libphonenumber-js` to parse and format the input on blur. Masking of contact number on change will be implemented in the future.

<div>
  <spr-input-contact-number v-model="inputValue.input17" label="Contact Number" placeholder="Enter contact number" class="spr-mb-size-spacing-3xs"/>
  <label>Output: {{ inputValue.input17 }}</label>
</div>

```vue
<template>
  <div>
    <spr-input-contact-number
      v-model="inputValueContactNumber"
      label="Contact Number"
      placeholder="Enter contact number"
      class="spr-mb-size-spacing-3xs"
    />
    <label>Output: {{ inputValueContactNumber }}</label>
  </div>

  <script lang="ts" setup>
    import { ref } from 'vue';

    const inputValueContactNumber = ref('');
  </script>
</template>
```

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
      <td>v-model</td>
      <td>Two-way binding for the input value.</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td>label</td>
      <td>The label for the input field.</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td>placeholder</td>
      <td>Placeholder text for the input field.</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td>pre-value</td>
      <td>Predefined value for the input, used when v-model is not set.</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td>active</td>
      <td>Determines if the input is in an active state.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>error</td>
      <td>Sets the input to an error state.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>Disables the input field.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>min-length</td>
      <td>Minimum length of the input value.</td>
      <td>number</td>
      <td>-</td>
    </tr>
    <tr>
      <td>max-length</td>
      <td>Maximum length of the input value.</td>
      <td>number</td>
      <td>-</td>
    </tr>
    <tr>
      <td>offset-size</td>
      <td>Size of the offset for the input field, can be xs, sm, md, etc.</td>
      <td>string</td>
      <td>sm</td>
    </tr>
    <tr>
      <td>display-helper</td>
      <td>Whether to display the helper message.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>helper-text</td>
      <td>Text for the helper message below the input field.</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td>helper-icon</td>
      <td>Icon to display alongside the helper message.</td>
      <td>string</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

<script lang="ts" setup>
import { ref } from 'vue';

import { Icon } from '@iconify/vue';

import SprInput from "@/components/input/input.vue"
import SprInputSearch from "@/components/input/input-search/input-search.vue"
import SprInputUsername from "@/components/input/input-username/input-username.vue"
import SprInputEmail from "@/components/input/input-email/input-email.vue"
import SprInputPassword from "@/components/input/input-password/input-password.vue"
import SprInputUrl from "@/components/input/input-url/input-url.vue"
import SprInputContactNumber from "@/components/input/input-contact-number/input-contact-number.vue"

const inputValue = ref({
  input1: '',
  input2: '',
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
});
</script>
