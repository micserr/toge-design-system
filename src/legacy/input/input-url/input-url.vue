<template>
  <spr-input v-bind="$attrs" type="url">
    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>

    <template #prefix>
      <span> https:// </span>
    </template>
    <template #icon>
      <Icon icon="ph:question-fill" />
    </template>
  </spr-input>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

import SprInput from '@/components/input/input.vue';
</script>
