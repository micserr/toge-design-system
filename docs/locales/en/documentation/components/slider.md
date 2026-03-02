---
title: Slider
descripttion: The Slider component allows users to select a value from a range by dragging a handle. It supports minimum and maximum values, step increments, size variations, and can be disabled when needed. Additionally, it includes hover and press states for enhanced interactivity and emits a slideend event when the user finishes interacting with the slider.
outline: deep
---

# Slider

The Slider component allows users to select a value from a range by dragging a handle. It supports minimum and maximum values, step increments, size variations, and can be disabled when needed. Additionally, it includes hover and press states for enhanced interactivity and emits a slideend event when the user finishes interacting with the slider.

## Basic Usage

<div>
  <spr-slider :min="0" :max="100" :step="1" v-model="sliderValue"/>
  <p class="spr-m-0">Slider value: {{ sliderValue }}</p>
</div>

```vue
<template>
  <spr-slider :min="0" :max="100" :step="1" v-model="sliderValue" />
  <p class="spr-m-0">Slider value: {{ sliderValue }}</p>
</template>

<script setup>
import { ref } from 'vue';
const sliderValue = ref(0);
</script>
```

## Step

<div>
  <spr-slider :min="0" :max="100" :step="20" v-model="sliderValueStep"/>
  <p class="spr-m-0">Slider value: {{ sliderValueStep }}</p>
</div>

```vue
<template>
  <spr-slider :min="0" :max="100" :step="20" v-model="sliderValueStep" />
  <p class="spr-m-0">Slider value: {{ sliderValueStep }}</p>
</template>

<script setup>
import { ref } from 'vue';
const sliderValueStep = ref(0);
</script>
```

## Sizes

Slider component has 2 sizes. You can use the size prop to set the size of the slider. The default size is 'lg'. The available sizes are 'lg' and 'sm'.

<div class="spr-flex spr-flex-col spr-gap-5 spr-items-center">
  <spr-slider :min="0" :max="100" :step="1" v-model="sliderValueForLG" size="lg"/>
  <spr-slider :min="0" :max="100" :step="1" v-model="sliderValueForSM" size="sm"/>
</div>

```vue
<template>
  <spr-slider :min="0" :max="100" :step="1" v-model="sliderValueForLG" size="lg" />
  <spr-slider :min="0" :max="100" :step="1" v-model="sliderValueForSM" size="sm" />
</template>

<script setup>
import { ref } from 'vue';
const sliderValue = ref(0);
const sliderValueForLG = ref(0);
const sliderValueForSM = ref(0);
</script>
```

## Disabled

<div class="spr-flex spr-flex-col spr-gap-5 spr-items-center">
  <spr-slider :min="0" :max="100" :step="1" v-model="sliderValueDisabled"  :disabled="true"/>
</div>

```vue
<template>
  <spr-slider :min="0" :max="100" :step="1" v-model="sliderValueDisabled" :disabled="true" />
</template>

<script setup>
import { ref } from 'vue';
const sliderValueDisabled = ref(50);
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
      <td>modelValue / v-model</td>
      <td>The current value of the slider. This prop is used with v-model for two-way data binding, allowing the slider's value to be both read and updated by the parent component.</td>
      <td>number</td>
      <td>0</td>
    </tr>
    <tr>
      <td>size</td>
      <td>Controls the size of the slider component. The 'lg' option provides a larger, more prominent slider suitable for primary controls, while 'sm' offers a more compact version for space-constrained interfaces.</td>
      <td>'lg' | 'sm'</td>
      <td>'lg'</td>
    </tr>
    <tr>
      <td>min</td>
      <td>The minimum value that the slider can be set to. This defines the lower bound of the slider's range and corresponds to the leftmost position of the slider.</td>
      <td>number</td>
      <td>0</td>
    </tr>
    <tr>
      <td>max</td>
      <td>The maximum value that the slider can be set to. This defines the upper bound of the slider's range and corresponds to the rightmost position of the slider.</td>
      <td>number</td>
      <td>100</td>
    </tr>
    <tr>
      <td>step</td>
      <td>The increment between values on the slider. This determines the granularity of the slider movement. For example, a step of 5 would only allow values like 0, 5, 10, etc.</td>
      <td>number</td>
      <td>1</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>When set to true, the slider becomes non-interactive, visually indicating that it cannot be manipulated. The slider will appear with reduced opacity and a "not-allowed" cursor.</td>
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
      <td>Emitted when the slider value changes as the user drags the thumb. This event is used by v-model for two-way data binding. It fires continuously during the dragging process.</td>
      <td>(value: number): The current value of the slider</td>
    </tr>
    <tr>
      <td>slideend</td>
      <td>Emitted when the user completes a sliding interaction (releases the pointer). This is useful for triggering actions that should only occur once the user has finished adjusting the value, rather than during the dragging process.</td>
      <td>(value: number): The final value of the slider after the interaction is complete</td>
    </tr>
  </tbody>
</table>

<script lang="ts" setup>
import {ref} from 'vue'
import SprSlider from "@/components/slider/slider.vue";

const sliderValue = ref(0)
const sliderValueStep = ref(0)
const sliderValueForLG = ref(0);
const sliderValueForSM = ref(0);
const sliderValueDisabled =ref(50);
</script>
