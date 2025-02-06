<template>
  <div :class="wrapperClasses">
    <label v-if="label" :for="id" :class="labelClasses">
      {{ label }}
    </label>
    <div class="relative">
      <div :class="prefixSlotClasses">
        <slot name="prefix" />
      </div>
      <input
        :id="id"
        :type="type"
        :value="modelValue"
        :class="[inputClasses, { 'number-input': type === 'number' }]"
        :placeholder="placeholder"
        :disabled="disabled"
        @input="onInput"
      />
      <div :class="trailingSlotClasses">
        <slot name="trailing" />
      </div>
      <div :class="iconSlotClasses">
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
