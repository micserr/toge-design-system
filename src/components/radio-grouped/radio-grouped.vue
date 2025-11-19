<template>
  <div :class="['spr-relative']">
    <div :class="radioGroupedClasses.containerClasses">
      <spr-radio
        v-for="(option, index) in renderOptions()"
        :id="`${props.id}-${index}`"
        :key="`${props.id}-option-${index}`"
        v-model="proxyValue"
        :name="props.name"
        :value="option.value"
        :disabled="isOptionDisabled(option)"
      >
        {{ option.text }}
      </spr-radio>
    </div>

    <div v-if="(displayHelper && props.helperText) || error" :class="radioGroupedClasses.helperClasses">
      <Icon
        v-if="error || props.helperIcon"
        class="spr-h-5 spr-min-h-5 spr-w-5 spr-min-w-5"
        :icon="error ? 'ph:info-fill' : props.helperIcon || ''"
      />
      <span>{{ props.helperText }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import SprRadio from '@/components/radio/radio.vue';

import { radioGroupedPropTypes, radioGroupedEmitTypes } from './radio-grouped';
import { useRadioGrouped } from './use-radio-grouped';

const props = defineProps(radioGroupedPropTypes);
const emit = defineEmits(radioGroupedEmitTypes);

const { radioGroupedClasses, proxyValue, renderOptions, isOptionDisabled, error, displayHelper } = useRadioGrouped(
  props,
  emit,
);
</script>
