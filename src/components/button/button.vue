<template>
  <button
    ref="buttonRef"
    v-bind="buttonProps"
    :class="[
      'tw-inline-flex tw-min-h-3 tw-w-fit tw-cursor-pointer tw-items-center tw-justify-center tw-rounded-md tw-outline-none tw-duration-150 tw-ease-in-out',
      'active:tw-scale-90',
      buttonClass,
    ]"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { buttonEmitTypes, buttonPropTypes } from './button';
import { useButton } from './use-button';

const props = defineProps(buttonPropTypes);
const emit = defineEmits(buttonEmitTypes);

const { buttonRef, buttonProps, buttonClass, handleClick } = useButton(props, emit);
</script>
