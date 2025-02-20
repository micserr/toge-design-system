<template>
  <div :class="wrapperClasses">
    <label v-if="props.label" :for="id" :class="labelClasses">
      {{ props.label }}
    </label>
    <div class="spr-relative">
      <div v-if="$slots.prefix || " :class="prefixSlotClasses">
        <slot name="prefix" />
          <Icon v-if="props.type === 'username'" icon="ph:user" />
        </div>
      </div>
      <input
        :class="[inputClasses, { 'number-input': type === 'number' }]"
        :placeholder="props.placeholder"
        :disabled="props.disabled"
        :readonly="props.readonly"
        :value="props.modelValue"
        @input="onInput"
      />
      <div v-if="$slots.trailing" :class="trailingSlotClasses">
        <slot name="trailing" />
      </div>
      <div v-if="$slots.icon || TYPE_HAS_TRAILING_ICONS.includes(props.type)" :class="iconSlotClasses">
        <slot name="icon" >
          <Icon v-if="props.type === 'search'" icon="ph:magnifying-glass" />
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlots } from 'vue';

import { inputPropTypes, inputEmitTypes, TYPE_HAS_TRAILING_ICONS, TYPE_HAS_LEADING_ICONS} from './input';
import { useInput } from './use-input';
import { Icon } from '@iconify/vue';

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
