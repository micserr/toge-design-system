<template>
  <div v-if="visible" :class="lozengeClasses">
    <div
      :class="[
        'spr-label-xs-medium spr-inline-flex spr-items-center spr-gap-size-spacing-6xs spr-rounded-md spr-border spr-border-solid spr-p-size-spacing-5xs spr-text-xs spr-uppercase',
        lozengeToneClasses,
      ]"
    >
      <div v-if="$slots.icon" class="spr-flex spr-h-3 spr-w-3 spr-items-center spr-overflow-hidden">
        <slot name="icon" />
      </div>

      <div v-if="$slots.avatar" class="spr-flex spr-items-center">
        <slot name="avatar" />
      </div>

      <div v-if="url && !$slots.avatar" class="spr-h-4 spr-w-4 spr-overflow-hidden">
        <img class="spr-h-full spr-w-full spr-rounded-full spr-object-cover" :src="url" alt="avatar" />
      </div>

      <div>{{ label }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { lozengePropTypes } from './lozenge';
import { useLozenge } from './use-lozenge';

const props = defineProps(lozengePropTypes);

const { lozengeClasses, lozengeToneClasses } = useLozenge(props);
</script>
