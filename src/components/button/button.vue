<template>
  <button
    ref="buttonRef"
    v-bind="buttonProps"
    :class="[
      'tw-inline-flex tw-w-fit tw-min-w-[56px] tw-cursor-pointer tw-items-center tw-justify-center tw-rounded-md tw-outline-none tw-duration-150 tw-ease-in-out',
      'hover:tw-shadow-button-hover',
      'active:tw-scale-95',
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
