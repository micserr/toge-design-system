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
    :class="[
      'tw-flex tw-items-center tw-space-x-2',
      radioLabelClasses
    ]"
  >
    <span :class="indicatorClasses"></span>
    <slot />
  </label>
</template>

<script lang="ts" setup>
import { radioPropTypes, radioEmitTypes } from "./radio";
import { useVModel } from "@vueuse/core";
import { useRadioButton } from "./use-radio";

const props = defineProps(radioPropTypes);
const emit = defineEmits(radioEmitTypes);

const proxyValue = useVModel(props, "modelValue", emit);
const { radioRef, radioClasses, indicatorClasses, radioLabelClasses } = useRadioButton(props);
</script>
