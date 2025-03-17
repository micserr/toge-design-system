<template>
  <date-picker
    id="date"
    v-model="date"
    display-helper
    @get-date-formats="wew"
    @get-input-value="wow"
    @get-date-errors="asdjklasd"
  />
  {{ date }}

  <br />
  {{ sdjkfds }}

  <button @click="date = '01-12-2025'">asdasd</button>
</template>

<script setup>
import { ref } from 'vue';
import SprRadio from '@/components/radio/radio.vue';
import SprDatePicker from '@/components/date-picker/date-picker.vue';

const date = ref('01-12-1900');

const sdjkfds = ref('');

const wew = (e) => {
  console.log(e);
};

const wow = (e) => {
  sdjkfds.value = e;
};

const asdjklasd = (e) => {
  console.log(e);
};
</script>
