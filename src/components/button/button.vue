<template>
  <component
    :is="tag"
    ref="buttonRef"
    v-bind="buttonProps"
    :class="['tw-inline-flex tw-min-h-3 tw-items-center tw-justify-center tw-rounded-md', buttonClass]"
    @click="handleClick"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'Btn',
});
import { useButton } from './use-button';
import { buttonEmitTypes, buttonPropTypes } from './button';

const props = defineProps(buttonPropTypes);
const emit = defineEmits(buttonEmitTypes);

const { buttonRef, buttonProps, buttonClass, handleClick } = useButton(props, emit);
</script>
