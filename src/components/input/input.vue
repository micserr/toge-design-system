<template>
  <div :class="inputClasses.baseClasses">
    <label v-if="props.label" :for="id" :class="inputClasses.labelClasses">
      {{ props.label }}
    </label>
    <div class="spr-relative">
      <div v-if="$slots.prefix" :class="inputClasses.prefixSlotClasses">
        <slot name="prefix" />
      </div>
      <input
        :class="[inputClasses.inputTextClasses, { 'number-input': props.type === 'number' }]"
        :placeholder="props.placeholder"
        :disabled="props.disabled"
        :readonly="props.readonly"
        :value="props.modelValue"
        :type="type"
        @input="onInput"
      />
      <div v-if="$slots.trailing" :class="inputClasses.trailingSlotClasses">
        <slot name="trailing" />
      </div>
      <div v-if="$slots.icon" :class="inputClasses.iconSlotClasses">
        <slot name="icon"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlots } from 'vue';

import { inputPropTypes, inputEmitTypes } from './input';
import { useInput } from './use-input';

const emit = defineEmits(inputEmitTypes);

const props = defineProps(inputPropTypes);
const slots = useSlots();

const { inputClasses, onInput } = useInput(props, slots, emit);
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
