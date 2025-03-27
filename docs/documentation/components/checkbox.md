---
outline: 'deep'
---

# Checkbox

Checkboxes allow the user to select one or more items from a set.

## Basic Usage

You can also add a label to the checkbox by using the `label` attribute.

Value: <code>{{ checkboxModels.checkbox1 }}</code>

<SprCheckbox v-model="checkboxModels.checkbox1" label="Checkbox Label" />

```vue
<template>
  <SprCheckbox v-model="checkbox" label="Checkbox Label" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checkbox = ref(false);
</script>
```

## Adding Description

You can add a description to the checkbox by using the `description` attribute.

<SprCheckbox 
  v-model="checkboxModels.checkbox2" 
  label="Checkbox Label" 
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
/>

```vue
<template>
  <SprCheckbox
    v-model="checkbox"
    label="Checkbox Label"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checkbox = ref(false);
</script>
```

## Checked

Checkboxes can be set to checked by the use of `v-model` or `checked` props.

<h5 class="spr-my-4">Using <code>v-model</code>:</h5>

<SprCheckbox v-model="checkboxModels.checkbox3" label="Checkbox Label" />

```vue
<template>
  <SprCheckbox v-model="checkbox" label="Checkbox Label" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checkbox = ref(true);
</script>
```

<h5 class="spr-my-4">Using <code>checked</code> props:</h5>

<SprCheckbox label="Checkbox Label" checked />

```vue
<template>
  <SprCheckbox label="Checkbox Label" checked />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checkbox = ref(true);
</script>
```

## Disabled

Add `disabled` attribute to make the checkbox disabled.

<SprCheckbox v-model="checkboxModels.checkbox4" label="Checkbox Label" disabled />

```vue
<template>
  <SprCheckbox v-model="checkbox" label="Checkbox Label" disabled />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checkbox = ref(true);
</script>
```

## Indeterminate

Add `indeterminate` attribute to make the icon of the checkbox a minus sign.

<SprCheckbox v-model="checkboxModels.checkbox6" label="Checkbox Label" indeterminate />
<SprCheckbox v-model="checkboxModels.checkbox7" label="Checkbox Label" indeterminate disabled />


```vue
<template>
  <SprCheckbox v-model="checkbox" label="Checkbox Label" indeterminate />
  <SprCheckbox v-model="checkbox2" label="Checkbox Label" indeterminate disabled/>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checkbox = ref(true);
const checkbox2 = ref(true);
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
      <td>id</td>
      <td>ID of the `checkbox` element</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td>label</td>
      <td>Label of a checkbox</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td>description</td>
      <td>Description of a checkbox. Located at the bottom of label.</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>if `true`, the component is disabled</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>indeterminate</td>
      <td>if `true`, the component icon for checked state becomes `-`</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

<script lang="ts" setup>
import { ref } from "vue";

import SprCheckbox from "@/components/checkbox/checkbox.vue";

const checkboxModels = ref({
  checkbox1: false,
  checkbox2: false,
  checkbox3: true,
  checkbox4: false,
  checkbox5: true,
  checkbox6: true,
  checkbox7: true
});
</script>
