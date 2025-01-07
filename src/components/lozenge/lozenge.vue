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

<style lang="scss" scoped>
.lozenge {
  @apply tw-flex tw-flex-wrap tw-rounded-md;

  .pending {
    @apply tw-text-color-pending-base tw-background-color-pending-weak tw-border-color-pending-base;
  }

  .information {
    @apply tw-text-color-information-base tw-background-color-information-weak tw-border-color-information-base;
  }

  .success {
    @apply tw-text-color-success-base tw-background-color-success-weak tw-border-color-success-base;
  }

  .neutral {
    @apply tw-text-color-base tw-background-color-base tw-border-color-base;
  }

  .danger {
    @apply tw-text-color-danger-base tw-background-color-danger-weak tw-border-color-danger-base;
  }

  .caution {
    @apply tw-text-color-caution-base tw-background-color-caution-weak tw-border-color-caution-base;
  }

  .plain {
    @apply tw-text-color-strong tw-border-color-base tw-background-color;
  }
}

.lozenge-fill {
  @apply tw-flex tw-flex-wrap;

  .pending {
    @apply tw-background-color-pending-base tw-text-color-strong tw-border-none;
  }

  .information {
    @apply tw-background-color-information-base tw-text-color-inverted-strong tw-border-none;
  }

  .success {
    @apply tw-background-color-success-base tw-text-color-inverted-strong;
  }

  .danger {
    @apply tw-background-color-danger-base tw-text-color-inverted-strong tw-border-none;
  }

  .neutral {
    @apply tw-background-color-base tw-text-color-strong tw-border-none;
  }

  .caution {
    @apply tw-background-color-caution-base tw-text-color-strong tw-border-none;
  }

  .plain {
    @apply tw-text-color-strong tw-background-color tw-border-none;
  }
}
</style>
