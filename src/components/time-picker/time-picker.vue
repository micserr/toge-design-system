<template>
  <Menu
    v-model:shown="isOpen"
    :aria-id="props.fullWidth ? 'time-picker-wrapper-full-width' : 'time-picker-wrapper'"
    distance="4"
    placement="bottom-start"
    :triggers="['click']"
    :popper-hide-triggers="[]"
    :container="`#${uniqueId}`"
    :style="{
      width: '100%',
    }"
    instant-move
  >
    <div
      :id="uniqueId"
      :style="{
        width: '100%',
      }"
    >
      <spr-input
        :id="props.id"
        v-model="selectedValue"
        type="text"
        :placeholder="getPlaceHolder"
        :readonly="props.disableTyping"
        :disabled="props.disabled"
        :label="props.label"
        :error="props.error"
        :display-helper="!!props.helperText"
        :helper-text="props.helperText"
        @input="filterInput"
      >
        <template #icon>
          <Icon icon="ph:clock" />
        </template>
      </spr-input>
    </div>

    <template #popper>
      <div :class="optionClasses">
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
    </template>
  </Menu>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import { Menu } from 'floating-vue';
import 'floating-vue/dist/style.css';
import SprInput from '@/components/input/input.vue';

import { timePickerPropTypes, timePickerEmitTypes } from './time-picker';
import { useTimePicker } from './use-time-picker';

const props = defineProps(timePickerPropTypes);
const emit = defineEmits(timePickerEmitTypes);

const { optionClasses, isOpen, filteredOptions, selectedValue, getPlaceHolder, selectOption, filterInput, uniqueId } =
  useTimePicker(props, emit);
</script>
