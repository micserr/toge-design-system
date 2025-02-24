<template>
  <div :class="wrapperClasses">
    <label v-if="props.label" :for="id" :class="labelClasses">
      {{ props.label }}
    </label>
    <div class="spr-relative">
      <div v-if="hasPrefix" :class="prefixSlotClasses">
        <slot name="prefix">
          <Icon v-if="props.type === 'username'" icon="ph:user" />
          <Icon v-if="props.type === 'email'" icon="ph:envelope" />
          <div v-if="props.type === 'url'">
            https://
          </div>
        </slot>
      </div>
      <input
        :class="[inputClasses, { 'number-input': type === 'number' }]"
        :placeholder="props.placeholder"
        :disabled="props.disabled"
        :readonly="props.readonly"
        :value="props.modelValue"
        :type="evaluateInputType()"
        @input="onInput"
      />
      <div v-if="$slots.trailing" :class="trailingSlotClasses">
        <slot name="trailing" />
      </div>
      <div v-if="hasIconSlot" :class="iconSlotClasses">
        <slot name="icon" >
          <Icon v-if="props.type === 'search'" icon="ph:magnifying-glass" />
          <Icon v-if="props.type === 'password'" :icon="evaluateEyeIcon()" @click="toggleShowPassword()"/>
          <Icon v-if="props.type === 'url'" icon="ph:question-fill" />
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlots } from 'vue';

import { inputPropTypes, inputEmitTypes} from './input';
import { useInput } from './use-input';
import { Icon } from '@iconify/vue';

const emit = defineEmits(inputEmitTypes);

const props = defineProps(inputPropTypes);
const slots = useSlots();

const { 
  inputClasses, 
  wrapperClasses, 
  labelClasses, 
  iconSlotClasses, 
  prefixSlotClasses, 
  trailingSlotClasses, 
  onInput, hasPrefix, 
  hasIconSlot, 
  toggleShowPassword, 
  evaluateEyeIcon, 
  evaluateInputType 
} =
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
