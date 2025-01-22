<template>
  <button
    ref="buttonRef"
    v-bind="buttonProps"
    :class="[
      'inline-flex w-fit min-w-[56px] cursor-pointer items-center justify-center rounded-md outline-none duration-150 ease-in-out',
      'hover:shadow-button-hover',
      'active:scale-95',
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
