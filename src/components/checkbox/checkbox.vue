<template>
  <label :class="wrapperClasses">
    <div class="relative flex items-center">
      <input
        type="checkbox"
        :checked="props.modelValue"
        :class="inputCheckboxClasses"
        :disabled="props.disabled"
        @change="handleCheckbox"
      />
      <span :class="inputCheckboxCheckIconClasses">
        <Icon icon="ph:check-bold" />
      </span>
    </div>
    <div v-if="props.label || props.description" class="grid gap-0.5">
      <span v-if="props.label" :class="labelClasses">
        {{ props.label }}
      </span>
      <span v-if="props.description" :class="descriptionClasses">
        {{ props.description }}
      </span>
    </div>
  </label>
</template>

<script setup>
import { Icon } from '@iconify/vue';

import { checkboxPropTypes, checkboxEmitTypes } from './checkbox';
import { useCheckbox } from './use-checkbox';

const props = defineProps(checkboxPropTypes);
const emit = defineEmits(checkboxEmitTypes);

const {
  wrapperClasses,
  inputCheckboxClasses,
  inputCheckboxCheckIconClasses,
  labelClasses,
  descriptionClasses,
  handleCheckbox,
} = useCheckbox(props, emit);
</script>
