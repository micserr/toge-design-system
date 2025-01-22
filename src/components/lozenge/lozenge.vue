<template>
  <div v-if="visible" :class="[fill ? 'lozenge-fill' : 'lozenge']">
    <div
      :class="[
        'label-xs-medium inline-flex items-center gap-size-spacing-6xs rounded-md border border-solid p-size-spacing-5xs text-xs uppercase',
        tone,
      ]"
    >
      <div v-if="$slots.icon" class="flex h-3 w-3 items-center overflow-hidden">
        <slot name="icon" />
      </div>

      <div v-if="$slots.avatar" class="flex items-center">
        <slot name="avatar" />
      </div>

      <div v-if="url && !$slots.avatar" class="h-4 w-4 overflow-hidden">
        <img class="h-full w-full rounded-full object-cover" :src="url" alt="avatar" />
      </div>

      <div>{{ label }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { lozengePropTypes } from './lozenge';

defineProps(lozengePropTypes);
</script>
