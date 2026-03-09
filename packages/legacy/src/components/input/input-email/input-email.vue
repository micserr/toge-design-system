<template>
  <spr-input v-bind="$attrs">
    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>

    <template #prefix>
      <Icon icon="ph:envelope" />
    </template>
  </spr-input>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

import SprInput from '@/components/input/input.vue';
</script>
