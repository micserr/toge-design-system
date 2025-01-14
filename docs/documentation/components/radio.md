# Radio

A Radio Button is a component that enables a user to select a single option from a set of choices.

## Basic Usage

<div class="tw-flex tw-flex-col tw-items-start tw-gap-2">
  <spr-radio id="sample1" v-model="sampleradio" name="sampleradio" value="sample1">
    Default Checked Radio
  </spr-radio>

  <spr-radio id="sample2" v-model="sampleradio" name="sampleradio" value="sample2">
    Default Radio
  </spr-radio>
</div>


```vue
<template>
  <div class="tw-flex tw-flex-col tw-items-start tw-gap-2">
    <spr-radio id="sample1" v-model="sampleradio" name="sampleradio" value="sample1">
      Default Checked Radio
    </spr-radio>

    <spr-radio id="sample2" v-model="sampleradio" name="sampleradio" value="sample2">
      Default Radio
    </spr-radio>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const sampleradio = ref<string>("sample1");
</script>
```

## Disabled

Add the ```disabled``` attribute to the ```<spr-radio>``` component to disable the radio button.

<div class="tw-flex tw-flex-col tw-items-start tw-gap-2">
  <spr-radio id="disabledradio1" v-model="disabledradio" name="disabledradio" value="disabledradio1" disabled>
    Disabled Checked Radio
  </spr-radio>

  <spr-radio id="disabledradio2" v-model="disabledradio" name="disabledradio" value="disabledradio2" disabled>
    Disabled Radio
  </spr-radio>
</div>


```vue
<template>
  <div class="tw-flex tw-flex-col tw-items-start tw-gap-2">
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

  const disabledradio = ref<string>("disabledradio");
</script>
```
## Radio API

### Radio Attributes

| Name     | Description        | Type                                     | Default  |
| -------- | ------------------ | ---------------------------------------- | -------- |
| id       | the id of the `input` element | `string`                      | -        |
| name     | the name attribute of the `input` element | `string`          | -        |
| disabled | if `true`, the component is disabled  | `boolean`             | false    |
| value    | the  value of the component  | `any`                          | -        |

<script setup lang="ts">
  import { ref } from "vue";
  import SprRadio from "@/components/radio/radio.vue";

  const sampleradio = ref<string>("sample1");
  const disabledradio = ref<string>("disabledradio1");
</script>
