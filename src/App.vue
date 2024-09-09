<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

let count = ref(0)
</script>

<template>
  <div class="w-80 mx-auto">
    <TheInput />
    <TheButton @click="count++"> count is {{ count }}</TheButton>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  transition: filter 300ms;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
