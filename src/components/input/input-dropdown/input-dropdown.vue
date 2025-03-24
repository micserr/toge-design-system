<template>
  <spr-input
    v-bind="$attrs"
    :class="{ 'spr-cursor-pointer': $attrs.readonly === '' || $attrs.readonly === 'true' || $attrs.readonly }"
  >
    <template #icon>
      <Icon icon="ph:caret-down" />
    </template>
  </spr-input>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

import SprInput from '@/components/input/input.vue';
</script>
