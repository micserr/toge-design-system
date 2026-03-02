<template>
  <div :class="['spr-relative', { 'spr-w-full': props.choiceBox || props.fullWidth }]">
    <div :class="radioGroupedClasses.containerClasses">
      <spr-radio
        v-for="(option, index) in renderOptions()"
        :id="`${props.id}-${index}`"
        :key="`${props.id}-option-${index}`"
        v-model="proxyValue"
        :name="props.name"
        :value="option.value"
        :disabled="isOptionDisabled(option)"
        :choice-box="props.choiceBox"
        :full-width="props.fullWidth || props.choiceBox"
        :description="option.description"
      >
        <span :class="getOptionLabelClasses(option, proxyValue)">
          {{ option.text }}
        </span>
      </spr-radio>
    </div>

    <div v-if="props.displayHelper" :class="radioGroupedClasses.helperClasses">
      <slot name="helperMessage">
        <Icon v-if="props.helperIcon" class="spr-h-5 spr-min-h-5 spr-w-5 spr-min-w-5" :icon="props.helperIcon" />
        <span>{{ props.helperText }}</span>
      </slot>
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

const { radioGroupedClasses, proxyValue, renderOptions, isOptionDisabled, getOptionLabelClasses } = useRadioGrouped(
  props,
  emit,
);
</script>
