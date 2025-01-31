<template>
  <button
    ref="buttonRef"
    v-bind="buttonProps"
    :class="[
      'background-color inline-flex w-fit min-w-[24px] items-center justify-center rounded-md outline-2 outline-offset-4 duration-150 ease-in-out',
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
