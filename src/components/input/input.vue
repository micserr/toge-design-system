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
        @input="$emit('update:modelValue', $event.target.value)"
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
import { inputPropTypes } from './input';
import { defineProps, useSlots } from 'vue';
import { useInput } from './use-input';

const props = defineProps(inputPropTypes);
const slots = useSlots();

defineEmits(['update:modelValue']);
const { inputClasses, wrapperClasses, labelClasses, iconSlotClasses, prefixSlotClasses, trailingSlotClasses } =
  useInput(props, slots);
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
