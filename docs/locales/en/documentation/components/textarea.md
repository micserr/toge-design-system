---
title: Textarea
descripttion: The Textarea component is a multi-line text input field that allows users to enter and edit larger amounts of text. It supports features such as character limits, helper messages, error states, and read-only mode to enhance user experience and accessibility.
outline: deep
---

# Textarea

## Basic Usage

<spr-textarea v-model="textarea" label="Description" placeholder="type here...."/>

```vue
<template>
  <spr-textarea v-model="textarea" label="Description" placeholder="type here...." />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const textarea = ref('');
</script>
```

## Display Helper

A helper message is a text label below the input field that provides additional information about instructions, formatting hints, validation feedback, etc.

To display the helper message, set the `display-helper` prop to `true` and add the `helper-text` prop with the helper message text. You can also insert an icon with the `helper-icon` prop. This uses the [Iconify](https://icon-sets.iconify.design/) icon library.

<div class="spr-grid spr-gap-6">
  <spr-textarea 
    v-model="textarea1" 
    label="Textarea" 
    display-helper 
    placeholder="type here...." 
    helper-text="This is a helper message" 
  />
  <spr-textarea 
    v-model="textarea1" 
    label="Textarea" 
    placeholder="type here...." 
    display-helper 
    helper-text="This is an error message" 
    helper-icon="ph:warning-circle-fill" 
    error 
  />
</div>

```vue
<template>
  <spr-textarea
    v-model="textarea"
    label="Textarea"
    placeholder="type here...."
    display-helper
    helper-text="This is a helper message"
  />
  <spr-textarea
    v-model="textarea"
    label="Textarea"
    placeholder="type here...."
    display-helper
    helper-text="This is an error message"
    helper-icon="ph:warning-circle-fill"
    error
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const textarea = ref('');
</script>
```

Alternatively, you can use the `helperMessage` slot to display a custom helper message.

<div class="spr-grid spr-gap-6">
  <spr-textarea 
    v-model="textarea1" 
    label="Textarea" 
    display-helper 
  >
    <template #helperMessage>
      This is a helper message
    </template>
  </spr-textarea>
  <spr-textarea 
   v-model="textarea1" 
    label="Textarea" 
    display-helper 
    error 
  >
    <template #helperMessage>
      <Icon icon="ph:warning-circle-fill" width="20px" height="20px" />
      <span>This is an error message</span>
    </template>
  </spr-textarea>
</div>

```vue
<template>
  <spr-textarea v-model="textarea" label="Textarea" display-helper>
    <template #helperMessage> This is a helper message </template>
  </spr-textarea>
  <spr-textarea v-model="textarea" label="Textarea" display-helper error>
    <template #helperMessage>
      <Icon icon="ph:warning-circle-fill" width="20px" height="20px" />
      <span>This is an error message</span>
    </template>
  </spr-textarea>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const textarea = ref('');
</script>
```

## Error State

<spr-textarea v-model="textarea1" label="Description" placeholder="type here...." display-helper helper-text="This is an error message" helper-icon="ph:warning-circle-fill" error />

```vue
<template>
  <spr-textarea
    v-model="textarea"
    label="Description"
    placeholder="type here...."
    display-helper
    helper-text="This is an error message"
    helper-icon="ph:warning-circle-fill"
    error
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const textarea = ref('');
</script>
```

## Max Length

<spr-textarea
    v-model="textareaMaxLength"
    label="Description"
    placeholder="type here...."
    :maxLength="255"
    hasCounter
  />

```vue
<template>
  <spr-textarea
    v-model="textareaMaxLength"
    label="Description"
    placeholder="type here...."
    :maxLength="255"
    hasCounter
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const textareaMaxLength = ref('set Maximum Characters');
</script>
```

## Disabled

<spr-textarea v-model="textarea" label="Description" placeholder="type here...."  disabled/>

```vue
<template>
  <spr-textarea v-model="textarea" label="Description" placeholder="type here...." disabled />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const textarea = ref('');
</script>
```

## Readonly

<spr-textarea v-model="textarea2" label="Description" placeholder="type here...."  readonly/>

```vue
<template>
  <spr-textarea v-model="textarea2" label="Description" placeholder="type here...." readonly />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const textarea2 = ref('Hello world, Sprout Design System!!!');
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
      <td>id</td>
      <td>A unique identifier for the textarea element. Used for label association and accessibility purposes.</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>modelValue / v-model</td>
      <td>The value of the textarea. Used with v-model directive for two-way data binding to capture and update the user's input.</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>label</td>
      <td>The text label displayed above the textarea to describe its purpose or content requirements.</td>
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
      <td>Placeholder text displayed inside the textarea when it's empty, providing guidance on what to enter.</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>active</td>
      <td>When true, applies an active state style to the textarea. Can be used to highlight the textarea in certain application states.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>When true, disables the textarea, preventing user interaction and applying a disabled appearance.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>readonly</td>
      <td>When true, makes the textarea read-only, allowing users to view but not modify the content.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>error</td>
      <td>When true, applies error state styling to indicate validation issues. Often used with helper text to provide feedback.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>minLength</td>
      <td>Sets the minimum number of characters required in the textarea. Used for HTML5 validation.</td>
      <td>number</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>maxLength</td>
      <td>Sets the maximum number of characters allowed in the textarea. Used for HTML5 validation and character counting.</td>
      <td>number</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>rows</td>
      <td>Specifies the visible height of the textarea in text lines. Controls the initial size of the textarea.</td>
      <td>number</td>
      <td>4</td>
    </tr>
    <tr>
      <td>displayHelper</td>
      <td>When true, displays a helper message area below the textarea. Used to provide additional information or validation feedback.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>helperIcon</td>
      <td>Specifies an icon to display alongside the helper message. Uses Iconify for icon rendering.</td>
      <td>string</td>
      <td>null</td>
    </tr>
    <tr>
      <td>helperText</td>
      <td>The text to display in the helper message area. Provides guidance, instructions, or validation feedback.</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>hasCounter</td>
      <td>When true, displays a character counter showing the current length relative to maxLength. Only effective when maxLength is also specified.</td>
      <td>boolean</td>
      <td>false</td>
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
      <td>Emitted when the textarea value changes. Used with v-model for two-way data binding.</td>
      <td>(value: string)</td>
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
      <td>helperMessage</td>
      <td>Allows for custom content in the helper message area. Use this slot to provide formatted text, icons, or other components in the helper message area.</td>
    </tr>
    <tr>
      <td>counter</td>
      <td>Allows for custom content in the character counter area. Use this slot to customize the appearance or behavior of the character counter.</td>
    </tr>
  </tbody>
</table>

## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark"  width="50px" />
</div>

<script setup lang="ts">
import { ref } from 'vue';

import { Icon } from '@iconify/vue';

import SprTextarea from '@/components/textarea/textarea.vue';
import SprLogo from "@/components/logo/logo.vue";

const textarea = ref('');
const textarea1 = ref('');
const textarea2 = ref('Hello world, Sprout Design System!!!');
const textareaMaxLength = ref('set Maximum Characters');
</script>
