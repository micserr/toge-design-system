<template>
  <div
    :class="classes.baseClasses"
    @click="radioInputRef?.click()"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <input
      :id="props.id"
      ref="radioInputRef"
      type="radio"
      :name="props.name"
      :value="props.value"
      :checked="model === props.value"
      :disabled="props.disabled"
      :class="classes.baseInputClasses"
      :aria-checked="model === props.value"
      :aria-disabled="props.disabled || undefined"
      :aria-label="props.ariaLabel || undefined"
      @change="handleChange"
    />
    <label
      :for="props.id"
      :class="[classes.labelClasses, { [classes.borderedClasses]: props.bordered }]"
    >
      <span :class="classes.baseIndicatorClasses"></span>
      <div class="spr-flex spr-flex-col spr-gap-size-spacing-6xs">
        <slot />
        <span
          v-if="props.description"
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
import { ref, computed, useSlots } from 'vue'
import type { RadioProps, RadioEmits } from './radio.types'
import { getRadioClasses } from './radio.styles'

const props = withDefaults(defineProps<RadioProps>(), {
  id: undefined,
  name: undefined,
  value: undefined,
  description: undefined,
  disabled: false,
  bordered: false,
  choiceBox: false,
  fullWidth: false,
  ariaLabel: undefined,
})

const emit = defineEmits<RadioEmits>()

defineSlots<{
  default(props: {}): any
}>()

const model = defineModel<string | number | boolean>()
const radioInputRef = ref<HTMLInputElement | null>(null)
const isHovered = ref(false)
const slots = useSlots()

const classes = computed(() =>
  getRadioClasses({
    isSelected: model.value === props.value,
    disabled: props.disabled,
    bordered: props.bordered,
    fullWidth: props.fullWidth,
    choiceBox: props.choiceBox,
    hasSlot: !!slots.default,
    isHovered: isHovered.value,
  }),
)

function handleChange(evt: Event) {
  model.value = props.value
  emit('change', evt)
}
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
