<template>
  <div :class="['spr-flex spr-items-center spr-gap-2', textClasses]">
    <label v-if="hasLeftText" :for="inputId" class="spr-cursor-pointer">
      <slot name="leftText">
        <slot />
      </slot>
    </label>

    <div
      :class="wrapperClasses"
      role="switch"
      :aria-checked="model"
      :aria-disabled="props.disabled || undefined"
      :aria-label="props.ariaLabel || undefined"
      :tabindex="props.disabled ? -1 : 0"
      @click="handleToggle"
      @keydown.space.prevent="handleToggle"
      @keydown.enter="handleToggle"
    >
      <input
        :id="inputId"
        v-model="model"
        type="checkbox"
        :disabled="props.disabled"
        class="spr-absolute spr-left-0 spr-top-0 spr-z-10 spr-m-0 spr-h-6 spr-w-12 spr-opacity-0"
        :class="props.disabled ? 'spr-cursor-not-allowed' : 'spr-cursor-pointer'"
        tabindex="-1"
      />
      <span :class="trackClasses">
        <span :class="thumbClasses" />
      </span>
    </div>

    <label v-if="hasRightText" :for="inputId" class="spr-cursor-pointer">
      <slot name="rightText" />
    </label>
  </div>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import type { SwitchProps, SwitchEmits } from './switch.types'
import {
  getSwitchTrackClasses,
  getSwitchThumbClasses,
  getSwitchWrapperClasses,
  getSwitchTextClasses,
} from './switch.styles'

const props = withDefaults(defineProps<SwitchProps>(), {
  disabled: false,
})

const emit = defineEmits<SwitchEmits>()

defineSlots<{
  default(props: {}): any
  leftText(props: {}): any
  rightText(props: {}): any
}>()

const model = defineModel<boolean>({ default: false })

const slots = useSlots()

const hasLeftText = computed(
  () => !!(slots.default && slots.default().length > 0) || !!slots.leftText,
)
const hasRightText = computed(() => !!slots.rightText)

const inputId = props.id
  ? props.id + '_' + Math.random().toString(36).substring(2, 8)
  : 'switch_' + Math.random().toString(36).substring(2, 8)

const styleState = computed(() => ({
  checked: model.value,
  disabled: props.disabled!,
}))

const trackClasses = computed(() => getSwitchTrackClasses(styleState.value))
const thumbClasses = computed(() => getSwitchThumbClasses(styleState.value))
const wrapperClasses = computed(() => getSwitchWrapperClasses(styleState.value))
const textClasses = computed(() => getSwitchTextClasses(styleState.value))

function handleToggle() {
  if (props.disabled) return
  model.value = !model.value
  emit('change', model.value)
}
</script>
