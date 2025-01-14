<template>
  <div :class="wrapperClasses">
    <label v-if="label" :class="labelClasses">
      {{ label }}
    </label>

    <div class="tw-relative tw-flex tw-items-center">
      <input
        v-model="selectedValue"
        type="text"
        :class="timepickerClasses"
        :placeholder="getPlaceHolder"
        :readonly="disableTyping"
        :disabled="disabled"
        @focus="handleClick"
        @keydown.up.prevent="isOpen = true"
        @keydown.down.prevent="isOpen = true"
        @click="handleClick"
        @input="filterInput"
        @focusout="isOpen = false"
      />

      <div :class="iconClasses">
        <IconClock />
      </div>
    </div>

    <div v-if="isOpen" :class="optionClasses">
      <div v-if="filteredOptions.length > 0">
        <div
          v-for="option in filteredOptions"
          :key="option"
          :class="[
            'tw-flex tw-justify-between',
            'tw-body-xs-regular tw-p-size-spacing-3xs',
            'hover:tw-background-color-hover',
            'tw-rounded-border-radius-md',
            'tw-cursor-pointer',
            {
              'tw-background-color-single-active tw-rounded-border-radius-md':
                option.toUpperCase() === selectedValue.toUpperCase(),
            },
          ]"
          @mousedown.prevent="selectOption(option)"
        >
          {{ option }}

          <span v-if="option.toUpperCase() === selectedValue.toUpperCase()" class="tw-text-color-brand-base"
            ><IconCheck
          /></span>
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
  filteredOptions,
  selectedValue,
  getPlaceHolder,
  selectOption,
  filterInput,
  handleClick,
} = useTimePicker(props, emit);
</script>
