<template>
  <div>Test Component Here</div>
  <spr-radio id="radio1" v-model="sampleradio" name="sampleradio" :value="0">Default Checked Radio</spr-radio>
  <spr-radio id="radio2" v-model="sampleradio" name="sampleradio" :value="1">Default Radio</spr-radio>
</template>

<script setup>
import { ref } from 'vue';
import SprRadio from '@/components/radio/radio.vue';

const sampleradio = ref('1');
</script>
