<script setup lang="ts">
import { ref, onMounted } from 'vue';
import DefaultTheme from 'vitepress/theme';
import { UIFork } from 'uifork-vue';

const showUIFork = ref(false);

onMounted(() => {
  const params = new URLSearchParams(window.location.search);
  showUIFork.value = params.get('uifork') === 'true';
});
</script>

<template>
  <DefaultTheme.Layout />
  <UIFork v-if="showUIFork" />
</template>
