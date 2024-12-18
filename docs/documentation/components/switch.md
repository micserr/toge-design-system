<script setup>
  import { ref } from 'vue';
  import SprSwitch from "@/components/switch/switch.vue";

  // Basic usage
  const switchValue1 = ref(false);
  // Text label
  const switchValue2 = ref(false);
  const switchValue3 = ref(false);
  const switchValue4 = ref(false);
  // Disabled
  const switchValue5 = ref(false);
  const switchValue6 = ref(true);
  // Animated
  const switchValue7 = ref(false);
  const switchValue8 = ref(true);
  // Emit
  const switchValue9 = ref(true);
  const switch9Label = ref("No event yet.");
  const switch9UpdateHandler = (value) => {
    switch9Label.value = "Value changed to " + value;
  };
</script>

# Switch

Switch component to show a boolean state (similar to a checkbox).

## Basic Usage

<div>
  <spr-switch v-model="switchValue1">Switch</spr-switch>
  <p> switchValue1 : {{ switchValue1 }}</p>
</div>

```vue
<template>
  <div>
    <spr-switch v-model="switchValue1">Switch</spr-switch>
    <p> switchValue1: {{ switchValue1 }}</p>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import SprSwitch from "@/components/switch/switch.vue";

  const switchValue1 = ref(false);
</script>
```

## Text Label
  <spr-switch v-model="switchValue2" class="tw-mb-2">Left</spr-switch>
  <spr-switch v-model="switchValue3" class="tw-mb-2">
    <template #rightText> Right </template>
  </spr-switch>
  <spr-switch v-model="switchValue4" class="tw-mb-2">
    <template #leftText> Right </template>
    <template #rightText> Right </template>
  </spr-switch>

```vue
<!-- Default text position -->
<spr-switch v-model="switchValue2">Left</spr-switch>

<!-- Text position using the rightText slot -->
<spr-switch v-model="switchValue3">
  <template #rightText> Right </template>
</spr-switch>

<!-- Text position using both the leftText and rightText slots -->
<spr-switch v-model="switchValue4">
  <template #leftText> Left </template>
  <template #rightText> Right </template>
</spr-switch>
```

## Disabled
<spr-switch v-model="switchValue5" class="tw-mb-2" disabled>Disabled false switch</spr-switch>
<spr-switch v-model="switchValue6" class="tw-mb-2" :disabled="true">Disabled true switch</spr-switch>

```vue
<!-- Declare the disabled property -->
<spr-switch v-model="switchValue5" disabled>Disabled false switch</spr-switch>

<!-- or set a value to the disabled property -->
<spr-switch v-model="switchValue6" :disabled="true">Disabled true switch</spr-switch>
```

## Animated
<spr-switch v-model="switchValue7" class="tw-mb-2" :animated="true">with Animation</spr-switch>
<spr-switch v-model="switchValue8" class="tw-mb-2" :animated="false">without Animation</spr-switch>

```vue
<!-- Switch with animation -->
<spr-switch v-model="switchValue7" :animated="true">with Animation</spr-switch>

<!-- Switch without animation -->
<spr-switch v-model="switchValue8" :animated="false">without Animation</spr-switch>
```

## Emit
The switch component uses ```@vueuse/core```'s ```useVModel``` for properties and emit v-model binding. By default, ```update:modelValue``` emit is defined and can be used to listen for any value changes with  ```modelValue``` property.

<div class="tw-mt-10">
  <spr-switch v-model="switchValue9" @update:modelValue = "switch9UpdateHandler">Switch</spr-switch>
  <p>{{ switch9Label }}</p>
</div>

```vue
<template>
  <div>
    <spr-switch v-model="switchValue9" @update:modelValue = "switch9UpdateHandler">Switch</spr-switch>
    <p>{{ switch9Label }}</p>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import SprSwitch from "@/components/switch/switch.vue";

  const switchValue9 = ref(true);
  const switch9Label = ref("No event yet.");
  const switch9UpdateHandler = (value) => {
    switch9Label.value = "Value changed to " + value;
  };
</script>
```

## Switch API

### Switch Attributes

| Name     | Description        | Type                                     | Default  |
| -------- | ------------------ | ---------------------------------------- | -------- |
| disabled | disable the switch | `boolean`                                | false    |
| animated | show CSS animation when clicked | `boolean`                   | true     |
