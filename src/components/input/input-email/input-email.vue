<template>
  <SprInput v-bind="$attrs">
    <template #prefix>
      <Icon icon="ph:envelope" />
    </template>
  </SprInput>
</template>

<script setup lang="ts">
import SprInput from '@/components/input/input.vue';
import { Icon } from "@iconify/vue";
</script>
