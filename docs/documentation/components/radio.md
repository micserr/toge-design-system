---
outline: 'deep'
---

# Radio

A Radio Button is a component that enables a user to select a single option from a set of choices.

## Basic Usage

<div class="spr-flex spr-flex-col spr-items-start spr-gap-2">
  <spr-radio id="radio1" v-model="radioModel.radio1" name="radio_name1" value="value1">
    Radio Label 1
  </spr-radio>
  <spr-radio id="radio2" v-model="radioModel.radio1" name="radio_name1" value="value2">
    Radio Label 2
  </spr-radio>
</div>

```vue
<template>
  <div class="spr-flex spr-flex-col spr-items-start spr-gap-2">
    <spr-radio id="radio1" v-model="radioModel" name="radio_name" value="value1">Radio Label 1</spr-radio>
    <spr-radio id="radio2" v-model="radioModel" name="radio_name" value="value2">Radio Label 2</spr-radio>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const radioModel = ref('');
</script>
```

## Active

<div class="spr-flex spr-flex-col spr-items-start spr-gap-2">
  <spr-radio id="radio3" v-model="radioModel.radio2" name="radio_name2" value="value1">
    Radio Label 1
  </spr-radio>
  <spr-radio id="radio4" v-model="radioModel.radio2" name="radio_name2" value="value2">
    Radio Label 2
  </spr-radio>
</div>

```vue
<template>
  <spr-radio id="radio1" v-model="radioModel" name="radio_name" value="value1">Radio Label 1</spr-radio>
  <spr-radio id="radio2" v-model="radioModel" name="radio_name" value="value2">Radio Label 2</spr-radio>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const radioModel = ref('value2');
</script>
```

## Disabled

Add the `disabled` attribute to the `<spr-radio>` component to disable the radio button.

<div class="spr-flex spr-flex-col spr-items-start spr-gap-2">
  <spr-radio id="radio5" v-model="radioModel.radio3" name="radio_name3" value="value1">
    Radio Label 1
  </spr-radio>
  <spr-radio id="radio6" v-model="radioModel.radio3" name="radio_name3" value="value2" disabled>
    Radio Label 2
  </spr-radio>
</div>

```vue
<template>
  <div class="spr-flex spr-flex-col spr-items-start spr-gap-2">
    <spr-radio id="disabledradio1" v-model="radioModel" name="radio_name" value="value1">Radio Label 1</spr-radio>
    <spr-radio id="disabledradio2" v-model="radioModel" name="radio_name" value="value2" disabled>
      Radio Label 2
    </spr-radio>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const radioModel = ref('');
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
    <tr>
      <td>bordered</td>
      <td>Add border to the component</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>fullWidth</td>
      <td>Defines if component is fit-content or full width</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark"  width="50px" />
</div>

<script lang="ts" setup>
import { ref } from "vue";

import SprRadio from "@/components/radio/radio.vue";
import SprLogo from "@/components/logo/logo.vue";

const radioModel = ref({
  radio1: '',
  radio2: 'value2',
  radio3: '',
  radio4: '',
  radio5: '',
  radio6: '',
  radio7: '',
  radio8: '',
  radio9: '',
  radio10: '',
});
</script>
