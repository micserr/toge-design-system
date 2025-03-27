<template>
  <div class="spr-relative">
    <input
      :id="props.id"
      ref="radioRef"
      v-model="proxyValue"
      type="radio"
      :name="props.name"
      :value="props.value"
      :disabled="props.disabled"
      :class="radioClasses.baseClasses"
    />
    <label ref="radioRef" :for="props.id" :disabled="props.disabled" :class="radioClasses.labelClasses">
      <span :class="radioClasses.baseIndicatorClasses"></span>
      <slot />
    </label>
  </div>
</template>

<script lang="ts" setup>
import { useSlots } from 'vue';

import { radioPropTypes, radioEmitTypes } from './radio';
import { useRadioButton } from './use-radio';

const props = defineProps(radioPropTypes);
const emit = defineEmits(radioEmitTypes);
const slots = useSlots();

const { proxyValue, radioRef, radioClasses } = useRadioButton(props, emit, slots);
</script>

<style scoped>
@keyframes shadowGrow {
  0% {
    box-shadow: inset 0px 0px 0px 25px #fff;
  }
  100% {
    box-shadow: inset 0px 0px 0px 2.5px #fff;
  }
}

.animate-shadow-grow {
  animation: shadowGrow 150ms ease-in-out forwards;
}
</style>
