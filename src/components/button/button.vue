<template>
  <button ref="buttonRef" :class="buttonClassses" v-bind="buttonProps" @click="handleClick">
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { buttonEmitTypes, buttonPropTypes } from './button';
import { useButton } from './use-button';

const props = defineProps(buttonPropTypes);
const emit = defineEmits(buttonEmitTypes);

const { buttonRef, buttonClassses, buttonProps, handleClick } = useButton(props, emit);
</script>
