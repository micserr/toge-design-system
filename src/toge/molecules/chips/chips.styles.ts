import classNames from 'classnames'
import type { ChipsSize, ChipsTone } from './chips.types'

export function getChipsClasses(
  size: ChipsSize,
  disabled: boolean,
  active: boolean,
  tone: ChipsTone,
): string {
  return classNames(
    'spr-body-sm-regular spr-text-color-strong spr:inline-flex spr:items-center spr:justify-center spr:gap-1 spr:rounded-full spr:transition-all spr:group',
    {
      'spr:cursor-pointer': !disabled,
      'spr:py-1.5 spr:px-2': size === 'md',
      'spr:py-0.5 spr:px-1.5': size === 'sm',
      'spr:py-1 spr:px-2': size === 'lg',
      'spr:cursor-not-allowed spr-text-color-on-fill-disabled spr-background-color-disabled spr:border-solid spr:border-[1px] spr-border-color-disabled':
        disabled,
      'spr-background-color-brand-weak spr:border-solid spr:border-[1px] spr-border-color-brand-base':
        active && !disabled,
      'spr:border spr:border-solid spr-border-color-weak group-hover:spr-background-color-hover group-active:spr-background-color-pressed':
        !active && !disabled,
      'spr-background-color-surface': !active && !disabled && tone === 'default',
      'spr-background-color': !active && !disabled && tone === 'subtle',
      '[&_.chips-close]:spr:cursor-pointer [&_.chips-close]:spr:p-0 [&_.chips-close]:spr:m-0 [&_.chips-close]:spr:border-0 [&_.chips-close]:spr:bg-transparent [&_.chips-close]:spr:inline-flex [&_.chips-close]:spr:items-center [&_.chips-close]:spr:leading-[0]':
        true,
    },
  )
}

export function getChipsIcon(icon: string, iconWeight: string): string {
  return iconWeight === 'regular' ? icon : `${icon}-${iconWeight}`
}
