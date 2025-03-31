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

<script setup lang="ts">
  import { ref } from 'vue';

  import { Icon } from '@iconify/vue';
  
  import SprTextarea from '@/components/textarea/textarea.vue';

  const textarea = ref('');
  const textarea1 = ref('');
  const textarea2 = ref('Hello world, Sprout Design System!!!');
</script>
