---
outline: 'deep'
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

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Type</th>
      <th>Available Values</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>id</td>
      <td>Specifies the unique identifier for the textarea.</td>
      <td><code>String</code></td>
      <td>-</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td>modelValue</td>
      <td>Specifies the value of the textarea.</td>
      <td><code>String</code></td>
      <td>-</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td>label</td>
      <td>Specifies the label for the textarea.</td>
      <td><code>String</code></td>
      <td>-</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td>placeholder</td>
      <td>Specifies the placeholder text for the textarea.</td>
      <td><code>String</code></td>
      <td>-</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td>active</td>
      <td>Indicates whether the textarea is active.</td>
      <td><code>Boolean</code></td>
      <td><code>true</code>, <code>false</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>Disables the textarea.</td>
      <td><code>Boolean</code></td>
      <td><code>true</code>, <code>false</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>readonly</td>
      <td>Sets the textarea to read-only mode.</td>
      <td><code>Boolean</code></td>
      <td><code>true</code>, <code>false</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>error</td>
      <td>Indicates whether the textarea is in an error state.</td>
      <td><code>Boolean</code></td>
      <td><code>true</code>, <code>false</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>minLength</td>
      <td>Specifies the minimum length of the textarea value.</td>
      <td><code>Number</code></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>maxLength</td>
      <td>Specifies the maximum length of the textarea value.</td>
      <td><code>Number</code></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>rows</td>
      <td>Specifies the number of rows for the textarea.</td>
      <td><code>Number</code></td>
      <td>-</td>
      <td><code>4</code></td>
    </tr>
    <tr>
      <td>displayHelper</td>
      <td>Enables the display of a helper message below the textarea.</td>
      <td><code>Boolean</code></td>
      <td><code>true</code>, <code>false</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>helperIcon</td>
      <td>Specifies the icon to display alongside the helper message.</td>
      <td><code>String</code></td>
      <td>-</td>
      <td><code>null</code></td>
    </tr>
    <tr>
      <td>helperText</td>
      <td>Specifies the helper message text.</td>
      <td><code>String</code></td>
      <td>-</td>
      <td><code>''</code></td>
    </tr>
  </tbody>
</table>

## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logos name="hr" theme="dark"  width="50px" />
</div>


<script setup lang="ts">
import { ref } from 'vue';

import { Icon } from '@iconify/vue';

import SprTextarea from '@/components/textarea/textarea.vue';
import SprLogos from "@/components/logos/logos.vue";

const textarea = ref('');
const textarea1 = ref('');
const textarea2 = ref('Hello world, Sprout Design System!!!');
</script>
