<template>
  <div :class="wrapperClasses">
    <label v-if="label" :class="labelClasses">
      {{ label }}
    </label>

    <div class="spr-relative spr-flex spr-items-center">
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

      <div :class="iconClasses" @click="handleClick">
        <Icon icon="ph:clock" />
      </div>
    </div>

    <div v-if="isOpen" :class="optionClasses">
      <div v-if="filteredOptions.length > 0">
        <div
          v-for="option in filteredOptions"
          :key="option"
          :class="[
            'spr-body-xs-regular spr-flex spr-cursor-pointer spr-justify-between spr-rounded-border-radius-md spr-p-size-spacing-3xs',
            'hover:spr-background-color-hover',
            {
              'spr-background-color-single-active spr-rounded-border-radius-md':
                option.toUpperCase() === selectedValue?.toUpperCase(),
            },
          ]"
          @mousedown.prevent="selectOption(option)"
        >
          {{ option }}

          <span
            v-if="option.toUpperCase() === selectedValue?.toUpperCase()"
            class="spr-text-color-brand-base spr-font-bold"
          >
            <Icon icon="ph:check" />
          </span>
        </div>
      </div>
      <div v-else class="spr-px-3 spr-py-2 spr-text-gray-500">No matching options found</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';

import { timePickerPropTypes, timePickerEmitTypes } from './time-picker';
import { useTimePicker } from './use-time-picker';

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
