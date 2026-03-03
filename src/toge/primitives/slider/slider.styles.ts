import classNames from 'classnames'
import type { SliderSize } from './slider.types'

export interface SliderStyleState {
  size: SliderSize
  disabled: boolean
}

export function getSliderInputClasses(s: SliderStyleState): string {
  return classNames(
    'spr-w-full spr-appearance-none spr-bg-transparent spr-outline-none',
    '[&::-webkit-slider-runnable-track]:spr-rounded-lg',
    '[&::-webkit-slider-runnable-track]:spr-bg-white-100',
    '[&::-webkit-slider-thumb]:spr-appearance-none',
    '[&::-webkit-slider-thumb]:spr-rounded-full',
    '[&::-webkit-slider-thumb]:spr-bg-kangkong-600',
    '[&::-webkit-slider-thumb]:spr-border-0',
    '[&::-moz-range-track]:spr-rounded-lg',
    '[&::-moz-range-track]:spr-bg-white-100',
    '[&::-moz-range-thumb]:spr-rounded-full',
    '[&::-moz-range-thumb]:spr-bg-kangkong-600',
    '[&::-moz-range-thumb]:spr-border-0',
    {
      // Track height
      '[&::-webkit-slider-runnable-track]:spr-h-1 [&::-moz-range-track]:spr-h-1': s.size === 'sm',
      '[&::-webkit-slider-runnable-track]:spr-h-2 [&::-moz-range-track]:spr-h-2': s.size === 'lg',
      // Thumb size
      '[&::-webkit-slider-thumb]:spr-h-4 [&::-webkit-slider-thumb]:spr-w-4 [&::-webkit-slider-thumb]:spr--mt-1.5 [&::-moz-range-thumb]:spr-h-4 [&::-moz-range-thumb]:spr-w-4':
        s.size === 'sm',
      '[&::-webkit-slider-thumb]:spr-h-5 [&::-webkit-slider-thumb]:spr-w-5 [&::-webkit-slider-thumb]:spr--mt-1.5 [&::-moz-range-thumb]:spr-h-5 [&::-moz-range-thumb]:spr-w-5':
        s.size === 'lg',
      // Disabled
      'spr-cursor-not-allowed spr-opacity-50': s.disabled,
      'spr-cursor-pointer': !s.disabled,
    },
  )
}

export function getSliderWrapperClasses(s: SliderStyleState): string {
  return classNames('spr-relative spr-w-full spr-flex spr-items-center', {
    'spr-cursor-not-allowed spr-opacity-50': s.disabled,
  })
}
