<template>
  <div v-bind="switchProps" :class="['spr-flex spr-items-center spr-gap-2', switchTextClass]">
    <label>
      <slot name="leftText">
        <slot></slot>
      </slot>
    </label>
    <div
      ref="switchWrapperRef"
      :class="{
        'spr-relative spr-flex spr-items-center': true,
        'spr-cursor-pointer spr-transition spr-duration-300 spr-ease-in-out active:spr-scale-90': !props.disabled,
      }"
    >
      <input
        ref="switchRef"
        v-model="proxyValue"
        type="checkbox"
        name="checkbox"
        :class="[
          'input spr-absolute spr-left-0 spr-top-0 spr-z-10 spr-m-0 spr-h-6 spr-w-12 spr-opacity-0',
          switchInputClass,
        ]"
        :disabled="props.disabled"
      />
      <span
        :class="[
          'switch-mark spr-relative spr-box-border spr-inline-block spr-h-6 spr-w-12 spr-rounded-[40px] spr-p-1',
          switchMarkClass,
        ]"
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
    @apply spr-left-[1.7rem];
  }
}

.switch-mark {
  &:before,
  &:after {
    @apply spr-absolute;
    content: '';
  }

  &:before {
    @apply spr-left-1 spr-top-1 spr-h-4 spr-w-4 spr-rounded-[50%] spr-bg-white-50;
  }
}
</style>
