<template>
  <!-- 
   :year="2025" 
  -->
  <SprDatePicker v-model="datePickerModel" label="Date Picker" :min-year="1900" :max-year="2050" />
</template>

<script setup>
import { ref } from 'vue';

import SprDatePicker from './components/date-picker/date-picker.vue';

const datePickerModel = ref('');
</script>
