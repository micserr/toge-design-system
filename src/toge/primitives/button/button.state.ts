import { type Ref } from 'vue'
import { useElementHover, useMousePressed, useFocus } from '@vueuse/core'

export function useButtonState(buttonRef: Ref<HTMLButtonElement | null>) {
  const isHovered = useElementHover(buttonRef)
  const { pressed: isPressed } = useMousePressed({ target: buttonRef })
  const { focused: isFocused } = useFocus(buttonRef)
  return { isHovered, isPressed, isFocused }
}
