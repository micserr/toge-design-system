<template>
  <div :class="wrapperClasses">
    <label v-if="label" :class="labelClasses">
      {{ label }}
    </label>

    <div class="relative flex items-center">
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
        <Icon icon="ph:clock" />
      </div>
    </div>

    <div v-if="isOpen" :class="optionClasses">
      <div v-if="filteredOptions.length > 0">
        <div
          v-for="option in filteredOptions"
          :key="option"
          :class="[
            'flex justify-between',
            'body-xs-regular p-size-spacing-3xs',
            'hover:background-color-hover',
            'rounded-border-radius-md',
            'cursor-pointer',
            {
              'background-color-single-active rounded-border-radius-md':
                option.toUpperCase() === selectedValue.toUpperCase(),
            },
          ]"
          @mousedown.prevent="selectOption(option)"
        >
          {{ option }}

          <span v-if="option.toUpperCase() === selectedValue.toUpperCase()" class="text-color-brand-base font-bold">
            <Icon icon="ph:check" />
          </span>
        </div>
      </div>
      <div v-else class="px-3 py-2 text-gray-500">No matching options found</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

import { timePickerPropTypes, timePickerEmitTypes } from './timePicker';
import { useTimePicker } from './use-timePicker';

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
