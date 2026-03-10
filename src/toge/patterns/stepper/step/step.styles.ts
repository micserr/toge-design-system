import classNames from 'classnames'
import type { StepStatus, StepType } from './step.types'

export interface StepStyleClasses {
  base: string
  badge: string
  number: string
  textContainer: string
  label: string
  description: string
}

export function getStepClasses(status: StepStatus, type?: StepType): StepStyleClasses {
  const base = classNames('spr:flex spr:gap-2 spr:items-top', {
    'spr:p-size-spacing-3xs spr:rounded-border-radius-lg': type === 'solid',
    'spr-background-color-brand-weak': status === 'active' && type === 'solid',
    'spr:opacity-60': status === 'completed' && type === 'solid',
  })

  const badge = classNames(
    'spr:flex spr:items-center spr:justify-center spr:rounded-border-radius-full spr:h-6 spr:w-6 spr:border spr:border-solid',
    {
      'spr:border-2': type !== 'solid',
      'spr:border-1': type === 'solid',
      'spr-background-color-brand-base spr-border-color-brand-base': status === 'active',
      'spr:border-mushroom-300': status === 'pending',
      'spr:border-kangkong-700': status === 'completed',
      'spr-background-color-brand-base': status === 'completed' && type === 'solid',
    },
  )

  const number = classNames('spr-body-md-regular-medium', {
    'spr:text-white-50': status === 'active',
    'spr:text-mushroom-600': status === 'pending',
    'spr:text-kangkong-700': status === 'completed',
  })

  const textContainer = classNames('spr:flex spr:flex-col spr:mt-[2px]')

  const label = classNames('spr-body-md-regular spr:whitespace-nowrap', {
    'spr:text-kangkong-700 !spr-body-md-regular-medium': status === 'active' && type === 'compact',
    'spr:text-mushroom-600': status === 'pending',
    'spr:text-mushroom-950': status === 'completed',
  })

  const description = classNames('spr-body-sm-regular spr-text-color-supporting spr:whitespace-nowrap')

  return { base, badge, number, textContainer, label, description }
}
