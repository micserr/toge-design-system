---
title: Switch
descripttion: Switch component to show a boolean state (similar to a checkbox).
outline: deep
---

# Switch

Switch component to show a boolean state (similar to a checkbox).

## Basic Usage

<div>
  <spr-switch v-model="switchValue1" id="switch">Switch</spr-switch>
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

## API Reference

### Props

<table>
  <thead>
    <tr>
      <th class="spr-min-w-[180px]">Name</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>modelValue</code>
      </td>
      <td>The current value of the switch (on/off state). This prop is required for v-model binding to work correctly. Set to <code>true</code> for on state and <code>false</code> for off state.</td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>
        <code>disabled</code>
      </td>
      <td>When set to <code>true</code>, the switch cannot be interacted with and appears visually disabled with reduced opacity. The switch will not emit events when disabled.</td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>
        <code>state</code>
      </td>
      <td>
        Controls the visual state of the switch. This is primarily used internally but can be explicitly set:
        <ul>
          <li><code>default</code>: Normal state</li>
          <li><code>hover</code>: Hovered state (also sets autofocus)</li>
          <li><code>pressed</code>: When the switch is being clicked/pressed</li>
          <li><code>disabled</code>: When the switch is disabled</li>
        </ul>
      </td>
      <td>'default' | 'hover' | 'pressed' | 'disabled'</td>
      <td><code>'default'</code></td>
    </tr>
    <tr>
      <td>
        <code>id</code>
      </td>
      <td>The HTML id attribute for the switch input element. Used for associating the switch with labels for accessibility. When not provided, a random ID will be generated with format <code>switch_input_[random]</code> or <code>[provided_id]_[random]</code> if an id is provided.</td>
      <td>string</td>
      <td><code>''</code></td>
    </tr>
  </tbody>
</table>

### Events

<table>
  <thead>
    <tr>
      <th class="spr-min-w-[180px]">Name</th>
      <th>Description</th>
      <th>Parameters</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>update:modelValue</code>
      </td>
      <td>Emitted when the switch state changes. This event is used for v-model binding and will not be emitted when the switch is disabled. The component uses <code>@vueuse/core</code>'s <code>useVModel</code> for two-way binding.</td>
      <td>
        <code>(value: boolean)</code> - The new value of the switch after the state change
      </td>
    </tr>
  </tbody>
</table>

### Slots

<table>
  <thead>
    <tr>
      <th class="spr-min-w-[180px]">Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>default</code>
      </td>
      <td>Default slot that displays text to the left of the switch. Use this for providing a label when you want it on the left side. If both <code>default</code> and <code>leftText</code> slots are provided, <code>leftText</code> takes precedence.</td>
    </tr>
    <tr>
      <td>
        <code>leftText</code>
      </td>
      <td>Explicitly places text to the left of the switch. This slot takes precedence over the default slot if both are provided. If this slot and the default slot are empty, no left label will be shown.</td>
    </tr>
    <tr>
      <td>
        <code>rightText</code>
      </td>
      <td>Displays text to the right of the switch. Use this slot when you want the label to appear after the switch. If this slot is empty, no right label will be shown.</td>
    </tr>
  </tbody>
</table>

## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark"  width="50px" />
  <spr-logo name="ecosystem" theme="dark" width="50px" />
</div>

<script lang="ts" setup>
import { ref } from 'vue';

import SprSwitch from "@/components/switch/switch.vue";
import SprLogo from "@/components/logo/logo.vue";

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
