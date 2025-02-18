<template>
  <div v-bind="switchProps" :class="['flex items-center gap-2', switchTextClass]">
    <label>
      <slot name="leftText">
        <slot></slot>
      </slot>
    </label>
    <div
      ref="switchWrapperRef"
      :class="{
        'relative flex items-center': true,
        'cursor-pointer transition duration-300 ease-in-out active:scale-90': !props.disabled,
      }"
    >
      <input
        ref="switchRef"
        v-model="proxyValue"
        type="checkbox"
        name="checkbox"
        :class="['input absolute left-0 top-0 z-10 m-0 h-6 w-12 opacity-0', switchInputClass]"
        :disabled="props.disabled"
      />
      <span
        :class="['switch-mark relative box-border inline-block h-6 w-12 rounded-[40px] p-1', switchMarkClass]"
      ></span>
    </div>
    <label>
      <slot name="rightText"></slot>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { useVModel } from '@vueuse/core';

import { switchEmitTypes, switchPropTypes } from './switch';
import { useSwitch } from './use-switch';

const props = defineProps(switchPropTypes);
const emit = defineEmits(switchEmitTypes);

const proxyValue = useVModel(props, 'modelValue', emit);

const { switchWrapperRef, switchRef, switchProps, switchMarkClass, switchTextClass, switchInputClass } =
  useSwitch(props);
</script>

<style lang="scss" scoped>
.input {
  &:checked ~ .switch-mark:before {
    @apply left-[1.7rem];
  }
}

.switch-mark {
  &:before,
  &:after {
    @apply absolute;
    content: '';
  }

  &:before {
    @apply left-1 top-1 h-4 w-4 rounded-[50%] bg-white-50;
  }
}
</style>
