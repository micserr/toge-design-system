<template>
  <div :class="wrapperClasses">
    <label v-if="label" :for="id" :class="labelClasses">
      {{ label }}
    </label>
    <div class="tw-relative">
      <input
        :id="id"
        :type="type"
        :value="modelValue"
        :class="inputClasses"
        :placeholder="placeholder"
        :disabled="disabled"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <div :class="iconSlotClasses">
        <slot name="icon" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inputPropTypes } from './input';
import { defineProps } from 'vue';
import { useInput } from './use-input';

const props = defineProps(inputPropTypes);
const { inputClasses, wrapperClasses, labelClasses, iconSlotClasses } = useInput(props);
</script>
