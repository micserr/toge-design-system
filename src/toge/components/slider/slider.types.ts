export type SliderSize = 'sm' | 'lg'

export interface SliderProps {
  size?: SliderSize
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  ariaLabel?: string
}

export interface SliderEmits {
  (e: 'change', value: number): void
  (e: 'slideend', value: number): void
}
