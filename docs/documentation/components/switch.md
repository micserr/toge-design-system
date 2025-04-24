---
outline: 'deep'
---

# Switch

Switch component to show a boolean state (similar to a checkbox).

## Basic Usage

<div>
  <spr-switch v-model="switchValue1">Switch</spr-switch>
  <p>switchValue1 : {{ switchValue1 }}</p>
</div>

```vue
<template>
  <div>
    <spr-switch v-model="switchValue1">Switch</spr-switch>
    <p>switchValue1: {{ switchValue1 }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import SprSwitch from '@/components/switch/switch.vue';

const switchValue1 = ref(false);
</script>
```

## Text Label

<spr-switch v-model="switchValue2" class="spr-mb-2">
  Left
</spr-switch>

<spr-switch v-model="switchValue3" class="spr-mb-2">
  <template #rightText>Right</template>
</spr-switch>

<spr-switch v-model="switchValue4" class="spr-mb-2">
  <template #leftText>Left</template>
  <template #rightText>Right</template>
</spr-switch>

```vue
<!-- Default text position -->
<spr-switch v-model="switchValue2">Left</spr-switch>

<!-- Text position using the rightText slot -->
<spr-switch v-model="switchValue3">
  <template #rightText>Right</template>
</spr-switch>

<!-- Text position using both the leftText and rightText slots -->
<spr-switch v-model="switchValue4">
  <template #leftText>Left</template>
  <template #rightText>Right</template>
</spr-switch>
```

## Disabled

<spr-switch v-model="switchValue5" class="spr-mb-2" disabled>
  Disabled false switch
</spr-switch>

<spr-switch v-model="switchValue6" class="spr-mb-2" :disabled="true">
  Disabled true switch
</spr-switch>

```vue
<!-- Declare the disabled property -->
<spr-switch v-model="switchValue5" disabled>
  Disabled false switch
</spr-switch>

<!-- or set a value to the disabled property -->
<spr-switch v-model="switchValue6" :disabled="true">
  Disabled true switch
</spr-switch>
```

## Emit

The switch component uses `@vueuse/core`'s `useVModel` for properties and emit v-model binding. By default, `update:modelValue` emit is defined and can be used to listen for any value changes with `modelValue` property.

<div class="spr-mt-10">
  <spr-switch v-model="switchValue7" @update:modelValue = "switch7UpdateHandler">Switch</spr-switch>
  <p>{{ switch7Label }}</p>
</div>

```vue
<template>
  <div>
    <spr-switch v-model="switchValue7" @update:modelValue="switch7UpdateHandler">Switch</spr-switch>
    <p>{{ switch7Label }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import SprSwitch from '@/components/switch/switch.vue';

const switchValue7 = ref(true);
const switch7Label = ref('No event yet.');
const switch7UpdateHandler = (value) => {
  switch7Label.value = 'Value changed to ' + value;
};
</script>
```

## Slots

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>rightText</td>
      <td>right text label</td>
      <td>string</td>
    </tr>
    <tr>
      <td>leftText</td>
      <td>left text label</td>
      <td>string</td>
    </tr>
  </tbody>
</table>

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
      <td>disabled</td>
      <td>disable the switch</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logos name="hr" theme="dark"  width="50px" />
  <spr-logos name="ecosystem" theme="dark" width="50px" />
</div>

<script lang="ts" setup>
import { ref } from 'vue';

import SprSwitch from "@/components/switch/switch.vue";
import SprLogos from "@/components/logos/logos.vue";

// Basic usage
const switchValue1 = ref(false);

// Text label
const switchValue2 = ref(false);
const switchValue3 = ref(false);
const switchValue4 = ref(false);

// Disabled
const switchValue5 = ref(false);
const switchValue6 = ref(true);

// Emit
const switchValue7 = ref(true);
const switch7Label = ref("No event yet.");
const switch7UpdateHandler = (value) => {
  switch7Label.value = "Value changed to " + value;
};
</script>
