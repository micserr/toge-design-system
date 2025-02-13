<template>
  <div :class="wrapperClasses">
    <label v-if="label" :for="id" :class="labelClasses">
      {{ label }}
    </label>
    <div class="relative">
      <div v-if="$slots.prefix" :class="prefixSlotClasses">
        <slot name="prefix" />
      </div>
      <input
        :class="[inputClasses, { 'number-input': type === 'number' }]"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        @input="onInput"
      />
      <div v-if="$slots.trailing" :class="trailingSlotClasses">
        <slot name="trailing" />
      </div>
      <div v-if="$slots.icon" :class="iconSlotClasses">
        <slot name="icon" />
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

const { inputClasses, wrapperClasses, labelClasses, iconSlotClasses, prefixSlotClasses, trailingSlotClasses, onInput } =
  useInput(props, slots, emit);
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
