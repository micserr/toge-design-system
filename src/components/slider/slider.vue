<template>
  <div
    ref="sliderRef"
    :class="[
      handleSliderSize,
      'spr-relative spr-w-full spr-rounded-lg spr-bg-white-100',
      props.disabled ? 'spr-cursor-not-allowed spr-opacity-50' : 'spr-cursor-pointer',
    ]"
    role="slider"
    :aria-valuenow="props.modelValue"
    :aria-valuemin="props.min"
    :aria-valuemax="props.max"
    :aria-disabled="props.disabled"
    tabindex="0"
    @pointerdown="startDrag"
  >
    <div
      :class="[
        handleSliderSize,
        'spr-absolute spr-left-0 spr-top-1/2 spr--translate-y-1/2 spr-rounded-lg spr-bg-kangkong-600',
        { 'spr-cursor-not-allowed': props.disabled },
      ]"
      :style="handleSliderStyle"
    ></div>

    <Icon
      icon="ph:circle-fill"
      :class="[
        handleSliderThumbSize,
        'spr-absolute spr-top-1/2 spr--translate-x-1/2 spr--translate-y-1/2 spr-transform spr-rounded-full spr-text-kangkong-600 hover:spr-text-kangkong-700 active:spr-border-2 active:spr-border-solid active:spr-text-kangkong-800',
        { 'spr-pointer-events-none spr-cursor-not-allowed': props.disabled },
      ]"
      :style="handleThumbStyle"
      @pointerdown="startDrag"
    />
  </div>
</template>

<script setup lang="ts">
import { useSlider } from './use-slider';
import { sliderPropTypes } from './slider';
import { Icon } from '@iconify/vue';

const props = defineProps(sliderPropTypes);
const emit = defineEmits(['update:modelValue', 'slideend']);

const { sliderRef, handleSliderSize, handleSliderThumbSize, startDrag, handleSliderStyle, handleThumbStyle } =
  useSlider(props, emit);
</script>
