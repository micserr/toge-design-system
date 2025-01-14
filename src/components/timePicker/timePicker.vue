<template>
  <div :class="wrapperClasses">
    <label v-if="label" :class="labelClasses">
      {{ label }}
    </label>
    <input
      v-model="selectedValue"
      type="text"
      :class="timepickerClasses"
      :placeholder="getPlaceHolder"
      :readonly="disableTyping"
      :disabled="disabled"
      @focus="handleClick"
      @keydown.enter="handleEnter"
      @keydown.up.prevent="(navigateOptions(-1), (isOpen = true))"
      @keydown.down.prevent="(navigateOptions(1), (isOpen = true))"
      @click="handleClick"
      @input="filterInput"
      @focusout="isOpen = false"
    />

    <div :class="iconClasses">
      <IconClock />
    </div>

    <div v-if="isOpen" :class="optionClasses">
      <div v-if="filteredOptions.length > 0">
        <div
          v-for="(option, index) in filteredOptions"
          :key="option"
          :class="[
            'tw-body-xs-regular tw-flex tw-justify-between',
            'hover:tw-background-color-single-active tw-cursor-pointer tw-p-size-spacing-3xs',
            { 'tw-background-color-single-active tw-rounded-border-radius-md': index === selectedIndex },
          ]"
          @mousedown.prevent="selectOption(option)"
          @mouseover="selectedIndex = index"
        >
          {{ option }}

          <span v-if="index === selectedIndex" class="tw-text-color-brand-base"><IconCheck /></span>
        </div>
      </div>
      <div v-else class="tw-px-3 tw-py-2 tw-text-gray-500">No matching options found</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

import { timePickerPropTypes, timePickerEmitTypes } from './timePicker';
import { useTimePicker } from './use-timePicker';
import IconCheck from '~icons/ph/check';
import IconClock from '~icons/ph/clock-thin';

const props = defineProps(timePickerPropTypes);
const emit = defineEmits(timePickerEmitTypes);

const {
  timepickerClasses,
  optionClasses,
  iconClasses,
  labelClasses,
  wrapperClasses,
  isOpen,
  selectedIndex,
  filteredOptions,
  selectedValue,
  getPlaceHolder,
  selectOption,
  filterInput,
  navigateOptions,
  handleEnter,
  handleClick,
} = useTimePicker(props, emit);
</script>
