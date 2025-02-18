# Radio

A Radio Button is a component that enables a user to select a single option from a set of choices.

## Basic Usage

<div class="flex flex-col items-start gap-2">
  <spr-radio id="sample1" v-model="sampleradio" name="sampleradio" value="sample1">
    Default Checked Radio
  </spr-radio>

  <spr-radio id="sample2" v-model="sampleradio" name="sampleradio" value="sample2">
    Default Radio
  </spr-radio>
</div>

```vue
<template>
  <div class="flex flex-col items-start gap-2">
    <spr-radio id="sample1" v-model="sampleradio" name="sampleradio" value="sample1">Default Checked Radio</spr-radio>

    <spr-radio id="sample2" v-model="sampleradio" name="sampleradio" value="sample2">Default Radio</spr-radio>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const sampleradio = ref < string > 'sample1';
</script>
```

## Disabled

Add the `disabled` attribute to the `<spr-radio>` component to disable the radio button.

<div class="flex flex-col items-start gap-2">
  <spr-radio id="disabledradio1" v-model="disabledradio" name="disabledradio" value="disabledradio1" disabled>
    Disabled Checked Radio
  </spr-radio>

  <spr-radio id="disabledradio2" v-model="disabledradio" name="disabledradio" value="disabledradio2" disabled>
    Disabled Radio
  </spr-radio>
</div>

```vue
<template>
  <div class="flex flex-col items-start gap-2">
    <spr-radio id="disabledradio1" v-model="disabledradio" name="disabledradio" value="disabledradio1" disabled>
      Disabled Checked Radio
    </spr-radio>

    <spr-radio id="disabledradio2" v-model="disabledradio" name="disabledradio" value="disabledradio2" disabled>
      Disabled Radio
    </spr-radio>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const disabledradio = ref < string > 'disabledradio';
</script>
```

## Radio API

### Radio Attributes

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
      <td>the id of the `input` element</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td>name</td>
      <td>the name attribute of the `input` element</td>
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
      <td>value</td>
      <td>the value of the component</td>
      <td>any</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

<script lang="ts" setup>
import { ref } from "vue";

import SprRadio from "@/components/radio/radio.vue";

const sampleradio = ref<string>("sample1");
const disabledradio = ref<string>("disabledradio1");
</script>
