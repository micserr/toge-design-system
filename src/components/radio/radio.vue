<template>
  <div
    :class="radioClasses.baseClasses"
    @click="radioRef?.click()"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <input
      :id="props.id"
      ref="radioRef"
      v-model="proxyValue"
      type="radio"
      :name="props.name"
      :value="props.value"
      :disabled="props.disabled"
      :class="radioClasses.baseInputClasses"
    />
    <label
      ref="radioRef"
      :for="props.id"
      :disabled="props.disabled"
      :class="[radioClasses.labelClasses, { [radioClasses.borderedClasses]: props.bordered }]"
    >
      <span :class="radioClasses.baseIndicatorClasses"></span>
      <div class="spr-flex spr-flex-col spr-gap-size-spacing-6xs">
        <slot />
        <span
          v-if="props.description && props.description !== ''"
          :class="[
            'spr-text-xs spr-font-normal spr-leading-4 spr-text-mushroom-600',
            { 'spr-text-color-disabled': props.disabled },
          ]"
        >
          {{ props.description }}
        </span>
      </div>
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

const { proxyValue, radioRef, radioClasses, isHovered } = useRadioButton(props, emit, slots);
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
