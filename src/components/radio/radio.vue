<template>
  <input
    :id="props.id"
    ref="radioRef"
    v-model="proxyValue"
    type="radio"
    :name="props.name"
    :value="props.value"
    :disabled="props.disabled"
    :class="radioClasses"
  />
  <label
    ref="radioRef"
    :for="props.id"
    :disabled="props.disabled"
    :class="['group m-0 inline-flex w-auto items-center space-x-2 p-0', radioLabelClasses]"
  >
    <span :class="indicatorClasses"></span>
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
const { radioRef, radioClasses, indicatorClasses, radioLabelClasses } = useRadioButton(props);
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
  animation: shadowGrow 300ms ease-in-out forwards;
}
</style>
