<template>
  <button
    ref="buttonRef"
    :class="buttonClasses"
    :disabled="props.disabled"
    :aria-disabled="props.disabled || undefined"
    :aria-label="props.ariaLabel || undefined"
    :aria-pressed="props.ariaPressed ?? undefined"
    :type="props.type"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import type { ButtonProps, ButtonEmits } from './button.types'
import { getButtonClasses } from './button.styles'
import { useButtonState } from './button.state'

const props = withDefaults(defineProps<ButtonProps>(), {
  tone: 'neutral',
  size: 'medium',
  variant: 'primary',
  type: 'button',
  disabled: false,
  hasIcon: false,
  fullwidth: false,
})

const emit = defineEmits<ButtonEmits>()

defineSlots<{
  default(props: {}): any
}>()

const buttonRef = ref<HTMLButtonElement | null>(null)
const { isHovered, isPressed, isFocused } = useButtonState(buttonRef)

const buttonClasses = computed(() =>
  getButtonClasses({
    tone: props.tone!,
    size: props.size!,
    variant: props.variant!,
    disabled: props.disabled!,
    hasIcon: props.hasIcon!,
    fullwidth: props.fullwidth!,
    isHovered: isHovered.value,
    isPressed: isPressed.value,
    isFocused: isFocused.value,
  }),
)

function handleClick(evt: MouseEvent) {
  if (props.disabled) {
    evt.stopPropagation()
    return
  }
  emit('click', evt)
}
</script>
