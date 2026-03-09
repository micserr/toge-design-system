export interface CollapsibleProps {
  modelValue: boolean
  transitionDuration?: number
}

export interface CollapsibleEmits {
  (e: 'update:modelValue', value: boolean): void
}
