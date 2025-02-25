<template>
  <SprInput v-bind="$attrs">
    <template #icon>
      <Icon icon="ph:magnifying-glass"/>
    </template>
  </SprInput>
</template>

<script setup lang="ts">
import SprInput from '@/components/input/input.vue';
import { Icon } from "@iconify/vue";
</script>
