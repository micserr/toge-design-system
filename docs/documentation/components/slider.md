---
outline: 'deep'
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
      <td>Changes slider value with two-way data binding</td>
      <td>number</td>
      <td>0</td>
    </tr>
    <tr>
      <td>size</td>
      <td>Defines the size of the slider. The accepted values are 'lg' and 'sm'.</td>
      <td>string</td>
      <td>lg</td>
    </tr>
    <tr>
      <td>min</td>
      <td>Sets minimum value</td>
      <td>number</td>
      <td>0</td>
    </tr>
    <tr>
      <td>max</td>
      <td>Sets maximum value</td>
      <td>number</td>
      <td>100</td>
    </tr>
    <tr>
      <td>step</td>
      <td>Defines range step</td>
      <td>number</td>
      <td>1</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>Disables slider</td>
      <td>boolean</td>
      <td>false</td>
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
