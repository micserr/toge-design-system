<template>
  <!-- :min-max-year="{
      min: 1900,
      max: 2026,
    }" -->
  <!-- :disabled-dates="{
      // from: '2-10-2025',
      // to: '3-25-2025',
      // pastDates: true,
      // futureDates: true,
      // selectedDates: ['3-25-2025', '3-28-2025'],
      // weekends: true,
      // weekdays: true,
      // selectedDays: ['su', 'mo', 'tu', 'th', 'sa'],
    }" -->
  <!-- width -->
  <!-- :rest-days="['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa']" -->
  <SprDatePicker
    v-model="datePickerModel"
    label="Date Picker"
    current-year="2025"
    @get-date-formats="getDateFormats"
    @get-month-list="getMonthList"
    @get-year-list="getYearList"
  >
  </SprDatePicker>
</template>

<script setup>
import { ref } from 'vue';

import SprDatePicker from './components/date-picker/date-picker.vue';

// Format: 'MM-DD-YYYY'
const datePickerModel = ref('');

const getDateFormats = (date) => {
  console.log(date);
};

const getMonthList = (months) => {
  console.log(months);
};

const getYearList = (years) => {
  console.log(years);
};
</script>

<style>
body {
  font-family: 'Rubik', sans-serif;
}
</style>
