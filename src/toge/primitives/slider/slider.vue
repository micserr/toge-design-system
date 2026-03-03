<template>
  <div :class="wrapperClasses">
    <input
      v-model.number="model"
      type="range"
      :min="props.min"
      :max="props.max"
      :step="props.step"
      :disabled="props.disabled"
      :aria-label="props.ariaLabel || undefined"
      :aria-valuemin="props.min"
      :aria-valuemax="props.max"
      :aria-valuenow="model"
      :aria-disabled="props.disabled || undefined"
      :class="inputClasses"
      @input="handleInput"
      @change="handleChange"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { SliderProps, SliderEmits } from './slider.types'
import { getSliderInputClasses, getSliderWrapperClasses } from './slider.styles'

const props = withDefaults(defineProps<SliderProps>(), {
  size: 'lg',
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
})

const emit = defineEmits<SliderEmits>()

const model = defineModel<number>({ default: 0 })

const styleState = computed(() => ({
  size: props.size!,
  disabled: props.disabled!,
}))

const inputClasses = computed(() => getSliderInputClasses(styleState.value))
const wrapperClasses = computed(() => getSliderWrapperClasses(styleState.value))

function handleInput(event: Event) {
  const value = Number((event.target as HTMLInputElement).value)
  model.value = value
  emit('change', value)
}

function handleChange(event: Event) {
  const value = Number((event.target as HTMLInputElement).value)
  emit('slideend', value)
}
</script>
