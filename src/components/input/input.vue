<template>
  <div :class="inputClasses.baseClasses">
    <label v-if="props.label || props.supportingLabel" :for="props.id" :class="inputClasses.labelClasses">
      <span v-if="props.label">{{ props.label }}</span>
      <span v-if="props.supportingLabel" :class="inputClasses.supportingLabelClasses">
        {{ props.supportingLabel }}
      </span>
    </label>

    <div :class="inputClasses.inputTextBaseClasses">
      <div v-if="$slots.prefix" :class="inputClasses.prefixSlotClasses">
        <slot name="prefix" />
      </div>
      <input
        v-bind="$attrs"
        :id="props.id"
        ref="inputTextRef"
        :class="[inputClasses.inputTextClasses, { 'number-input': props.type === 'number' }]"
        :placeholder="props.placeholder"
        :type="props.type"
        :minlength="props.minLength"
        :maxlength="props.maxLength"
        :value="modelValue"
        :disabled="props.disabled"
        :readonly="props.readonly"
        @input="onInput"
        @blur="onBlur"
      />
      <div v-if="$slots.trailing" :class="inputClasses.trailingSlotClasses">
        <slot name="trailing" />
      </div>
      <div v-if="$slots.icon" :class="inputClasses.iconSlotClasses" @click="disableClickEvent">
        <slot name="icon" />
      </div>
    </div>

    <div v-if="props.displayHelper || props.showCharCount" :class="inputClasses.helperContainerClasses">
      <div v-if="props.displayHelper" :class="inputClasses.helperClasses">
        <slot name="helperMessage">
          <Icon v-if="props.helperIcon" class="spr-h-5 spr-min-h-5 spr-w-5 spr-min-w-5" :icon="props.helperIcon" />
          <span>{{ props.helperText }}</span>
        </slot>
      </div>
      <div v-if="props.showCharCount" :class="inputClasses.charCountClasses">
        {{ currentLength }}{{ props.maxLength ? '/' + props.maxLength : '' }}
      </div>
    </div>
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

const { inputClasses, inputTextRef, onInput, onBlur, disableClickEvent, currentLength } = useInput(props, emit, slots);
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
