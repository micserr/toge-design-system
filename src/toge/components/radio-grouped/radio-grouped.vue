<template>
  <div :class="['spr-relative', { 'spr-w-full': props.choiceBox || props.fullWidth }]">
    <div :class="classes.containerClasses">
      <TogeRadio
        v-for="(option, index) in props.options"
        :id="`${props.id}-${index}`"
        :key="`${props.id}-option-${index}`"
        v-model="model"
        :name="props.name"
        :value="option.value"
        :disabled="isOptionDisabled(option)"
        :bordered="props.bordered"
        :choice-box="props.choiceBox"
        :full-width="props.fullWidth || props.choiceBox"
        :description="option.description"
        @change="(evt) => handleChange(option.value)"
      >
        <span :class="getOptionLabel(option)">
          {{ option.text }}
        </span>
      </TogeRadio>
    </div>

    <div v-if="props.displayHelper" :class="classes.helperClasses">
      <slot name="helperMessage">
        <Icon
          v-if="props.helperIcon"
          class="spr-h-5 spr-min-h-5 spr-w-5 spr-min-w-5"
          :icon="props.helperIcon"
        />
        <span>{{ props.helperText }}</span>
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import TogeRadio from '../../primitives/radio/radio.vue'
import type { RadioGroupedProps, RadioGroupedEmits, RadioOption } from './radio-grouped.types'
import { getRadioGroupedClasses, getOptionLabelClasses } from './radio-grouped.styles'

const props = withDefaults(defineProps<RadioGroupedProps>(), {
  id: undefined,
  disabled: false,
  description: undefined,
  fullWidth: false,
  bordered: false,
  choiceBox: false,
  displayHelper: false,
  helperIcon: undefined,
  helperText: undefined,
  error: false,
  horizontalAlign: 'left',
})

const emit = defineEmits<RadioGroupedEmits>()

defineSlots<{
  helperMessage(props: {}): any
}>()

const model = defineModel<string | number | boolean>()

const classes = computed(() =>
  getRadioGroupedClasses({
    horizontalAlign: props.horizontalAlign,
    error: props.error,
    displayHelper: props.displayHelper,
    hasCounter: false,
  }),
)

function isOptionDisabled(option: RadioOption): boolean {
  return props.disabled || (option.disabled ?? false)
}

function getOptionLabel(option: RadioOption): string {
  return getOptionLabelClasses(
    isOptionDisabled(option),
    model.value === option.value,
    props.choiceBox,
  )
}

function handleChange(value: string | number | boolean): void {
  emit('change', value)
}
</script>
