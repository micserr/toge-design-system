<template>
  <div v-bind="switchProps" :class="['switch', switchTextClass]">
    <label class="switch_text switch_left-text">
      <slot name="leftText">
        <slot></slot>
      </slot>
    </label>
    <div ref="switchWrapperRef" class="switch_wrapper" >
      <input 
        ref="switchRef" 
        v-model="proxyValue" 
        type="checkbox" 
        name="checkbox" 
        :class="['switch_input', switchInputClass]"
        :disabled="props.disabled"
      >
      <span :class="['switch_mark', switchMarkClass]"></span>
    </div>
    <label class="switch_text switch_right-text">
      <slot name="rightText"></slot>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { switchEmitTypes, switchPropTypes } from './switch';
import { useSwitch } from './use-switch';
import { useVModel } from '@vueuse/core';

const props = defineProps(switchPropTypes);
const emit = defineEmits(switchEmitTypes);

const proxyValue = useVModel(props, "modelValue", emit);

const { 
  switchWrapperRef, 
  switchRef,
  switchProps,
  switchMarkClass,
  switchTextClass,
  switchInputClass,
} = useSwitch(props);
</script>

<style lang="scss" scoped>
.switch {
  display: flex;
  align-items: center;
  width: fit-content;

  &_left-text {
    margin-right: 8px;
  }

  &_right-text {
    margin-left: 8px;
  }

  &_wrapper{
    position: relative;
    display: inline;
    height: 24px;
  }

  &_input{
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    width: 48px;
    height: 24px;
    margin: 0;

    &:checked ~ .switch_mark:before{
      left: 28px;
    }
  }

  &_mark{
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    border-radius: 40px;
    width: 48px;
    height: 24px;
    padding: 4px;

    &:before,
    &:after{
      content: "";
      position: absolute;
    }

    &:before{
      @apply tw-bg-white-50;

      top: 4px;
      left: 4px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
    }
  }
}
</style>
