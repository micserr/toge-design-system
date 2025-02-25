<template>
  <SprInput v-bind="$attrs" :type="'url'">
    <template #prefix>
      <div>
        https://
      </div>
    </template>
    <template #icon>
      <Icon icon="ph:question-fill" />
    </template>
  </SprInput>
</template>

<script setup lang="ts">
import SprInput from '@/components/input/input.vue';
import { Icon } from "@iconify/vue";
</script>
