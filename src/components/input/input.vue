<template>
  <div :class="inputClasses.baseClasses">
    <label v-if="props.label" :for="id" :class="inputClasses.labelClasses">
      {{ props.label }}
    </label>

    <div :class="inputClasses.inputTextBaseClasses">
      <div v-if="$slots.prefix" :class="inputClasses.prefixSlotClasses">
        <slot name="prefix" />
      </div>
      <input
        v-bind="$attrs"
        :class="[inputClasses.inputTextClasses, { 'number-input': props.type === 'number' }]"
        :placeholder="props.placeholder"
        :disabled="props.disabled"
        :readonly="props.readonly"
        :type="props.type"
        :minlength="props.minLength"
        :maxlength="props.maxLength"
        :value="modelValue"
        @input="onInput"
      />
      <!-- :value="props.modelValue ? modelValue : props.preValue" -->
      <div v-if="$slots.trailing" :class="inputClasses.trailingSlotClasses">
        <slot name="trailing" />
      </div>
      <div v-if="$slots.icon" :class="inputClasses.iconSlotClasses">
        <slot name="icon" />
      </div>
    </div>

    <label
      v-if="props.displayHelper"
      :class="[inputClasses.helperClasses, 'spr-body-sm-regular', 'spr-flex spr-items-center spr-gap-size-spacing-5xs']"
    >
      <slot name="helperMessage">
        <icon v-if="props.helperIcon" :icon="props.helperIcon" width="20px" height="20px" />
        {{ props.helperText }}
      </slot>
    </label>
  </div>
</template>

<script setup lang="ts">
import { useSlots } from 'vue';

import { Icon } from '@iconify/vue';

import { inputPropTypes, inputEmitTypes } from './input';
import { useInput } from './use-input';

const emit = defineEmits(inputEmitTypes);
const props = defineProps(inputPropTypes);
const slots = useSlots();

const { inputClasses, onInput } = useInput(props, emit, slots);
</script>

<style scoped>
.number-input::-webkit-outer-spin-button,
.number-input::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none;
}

.number-input {
  -moz-appearance: textfield;
}
</style>
