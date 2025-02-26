<template>
  <SprDatePicker v-model="datePickerModel" label="Date Picker" :min-year="1900" :max-year="3000" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import SprDatePicker from './components/date-picker/date-picker.vue';

const datePickerModel = ref('');
</script>

<style lang="scss">
body {
  @apply spr-m-0 spr-font-main;
}
</style>
