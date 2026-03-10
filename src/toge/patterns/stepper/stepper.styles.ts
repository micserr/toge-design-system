import classNames from 'classnames'
import type { StepperVariant } from './stepper.types'

export interface StepperClasses {
  base: string
  step: string
  lineContainer: string
  line: string
}

export function getStepperClasses(variant: StepperVariant): StepperClasses {
  return {
    base: classNames('spr:flex spr:gap-size-spacing-xs', {
      'spr:flex-col spr:mb-size-spacing-xs': variant === 'vertical',
      'spr:flex-row spr:mr-size-spacing-xs': variant === 'horizontal',
    }),
    step: classNames('spr:flex spr:flex-grow', {
      'spr:flex-col': variant === 'vertical',
      'spr:flex-row': variant === 'horizontal',
    }),
    lineContainer: classNames('spr:flex spr:min-w-6 spr:min-h-6', {
      'spr:ml-3.5 spr:pt-size-spacing-2xs': variant === 'vertical',
      'spr:items-center spr:pl-size-spacing-xs spr:w-full': variant === 'horizontal',
    }),
    line: classNames({
      'spr:w-0.5 spr:rounded-full spr:h-12': variant === 'vertical',
      'spr:h-0.5 spr:rounded-full spr:w-full': variant === 'horizontal',
    }),
  }
}

export function getLineColorClass(status?: string): string {
  return status === 'completed' ? 'spr:bg-kangkong-700' : 'spr:bg-mushroom-200'
}
