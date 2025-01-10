<template>
  <div v-if="visible" :class="[fill ? 'lozenge-fill' : 'lozenge']">
    <div
      :class="[
        'tw-label-xs-medium tw-inline-flex tw-items-center tw-gap-size-spacing-6xs tw-rounded-md tw-border tw-border-solid tw-p-size-spacing-5xs tw-text-xs tw-uppercase',
        tone,
      ]"
    >
      <div v-if="$slots.icon" class="tw-flex tw-h-3 tw-w-3 tw-items-center tw-overflow-hidden">
        <slot name="icon" />
      </div>

      <div v-if="$slots.avatar" class="tw-flex tw-items-center">
        <slot name="avatar" />
      </div>

      <div v-if="url && !$slots.avatar" class="tw-h-4 tw-w-4 tw-overflow-hidden">
        <img class="tw-h-full tw-w-full tw-rounded-full tw-object-cover" :src="url" alt="avatar" />
      </div>

      <div>{{ label }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { lozengePropTypes } from './lozenge';

defineProps(lozengePropTypes);
</script>

