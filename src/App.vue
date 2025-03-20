<template>
  <div>Test Component Here</div>
  <!-- :pre-value="adasdsadas" -->
  <!-- Pass a static value to pre-value -->
  <spr-input v-model="test" label="Test" :pre-value="testsss" />

  {{ test }}
  <!-- This should update dynamically as input changes -->

  <button @click="test = 'Test 333333a;skd; laks;dk las;k dl;'">Change</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import SprInput from './components/input/input.vue';

const test = ref('wewew'); // The model bound to the input
const testsss = ref('qweqweqwe');

// const adasdsadas = 'asdasdlaskjdlkasjlkdjaskljdlkas'; // Static value instead of function
</script>
