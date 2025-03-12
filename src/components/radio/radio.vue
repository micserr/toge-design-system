<template>
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
</template>

<script lang="ts" setup>
import { useVModel } from '@vueuse/core';

import { radioPropTypes, radioEmitTypes } from './radio';
import { useRadioButton } from './use-radio';

const props = defineProps(radioPropTypes);
const emit = defineEmits(radioEmitTypes);

const proxyValue = useVModel(props, 'modelValue', emit);
const { radioRef, radioClasses } = useRadioButton(props);
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
