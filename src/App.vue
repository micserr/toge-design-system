<template>
  <div>Test Component Here</div>
  <spr-input
    v-model="inputValue"
    label="Text Input"
    placeholder="Enter your username"
    :max-length="50"
    :min-length="3"
  />

  {{ inputValue }}
</template>

<script setup>
import { ref } from 'vue';
import SprInput from '@/components/input/input.vue';

const inputValue = ref('');
</script>
