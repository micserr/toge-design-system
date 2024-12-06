<template>
  <div v-if="visible" :class="[fill ? 'lozenge-fill' : 'lozenge']">
    <div
      :class="[
        'tw-inline-flex tw-items-center tw-gap-1 tw-rounded-md tw-border tw-border-solid tw-p-1 tw-text-xs tw-font-medium tw-uppercase',
        tone,
      ]"
    >
      <div v-if="$slots.icon" class="tw-flex tw-items-center">
        <slot name="icon" />
      </div>

      <div v-if="$slots.avatar" class="tw-flex tw-items-center">
        <slot name="avatar" />
      </div>

      <div v-if="url && !$slots.avatar" class="tw-h-4 tw-w-4">
        <img class="tw-h-full tw-w-full tw-rounded-full tw-object-cover" :src="url" alt="avatar" />
      </div>

      <div>{{ label }}</div>

      <div v-if="removable" :class="['tw-flex tw-cursor-pointer tw-items-center']" @click="hanndleRemoveLozenge">
        <IconXThin />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconXThin from '~icons/ph/x-thin';
import { lozengePropTypes } from './lozenge';
import { useLozenge } from './use-lozenge';

defineProps(lozengePropTypes);

const emit = defineEmits(['onRemove']);
const { hanndleRemoveLozenge } = useLozenge(emit);
</script>

<style lang="scss" scoped>
.lozenge {
  @apply tw-flex tw-flex-wrap tw-gap-2;

  .pending {
    @apply tw-border-mango-700 tw-bg-mango-100 tw-text-mango-700;
  }

  .information {
    @apply tw-border-blueberry-700 tw-bg-blueberry-100 tw-text-blueberry-700;
  }

  .success {
    @apply tw-border-kangkong-700 tw-bg-kangkong-100 tw-text-kangkong-700;
  }
  .neutral {
    @apply tw-border-mushroom-300 tw-bg-mushroom-50 tw-text-mushroom-600;
  }

  .danger {
    @apply tw-border-tomato-600 tw-bg-tomato-100 tw-text-tomato-600;
  }

  .caution {
    @apply tw-border-carrot-700 tw-bg-carrot-100 tw-text-carrot-700;
  }
}

.lozenge-fill {
  @apply tw-flex tw-flex-wrap tw-gap-2;

  .pending {
    @apply tw-border-none tw-bg-mango-500 tw-text-mushroom-950;
  }

  .information {
    @apply tw-border-none tw-bg-blueberry-600 tw-text-white-50;
  }

  .success {
    @apply tw-bg-kangkong-600 tw-text-white-50;
  }

  .neutral {
    @apply tw-border-none tw-bg-mushroom-50 tw-text-mushroom-950;
  }

  .danger {
    @apply tw-border-none tw-bg-tomato-600 tw-text-white-50;
  }

  .caution {
    @apply tw-border-none tw-bg-carrot-500 tw-text-mushroom-950;
  }
}
</style>
