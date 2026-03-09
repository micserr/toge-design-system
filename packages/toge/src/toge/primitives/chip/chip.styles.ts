import classNames from 'classnames'
import type { ChipProps } from './chip.types'

export function getChipClasses(props: ChipProps): { wrapper: string; close: string } {
  const { variant, size, disabled, active, tone } = props

  if (variant === 'day') {
    return {
      wrapper: classNames(
        'spr-background-color spr-label-xs-medium spr-inline-flex spr-items-center spr-justify-center spr-rounded-full spr-transition-all spr-aspect-square spr-h-10 spr-w-10 spr-body-sm-regular spr-border spr-border-solid',
        {
          'hover:spr-cursor-pointer': !disabled,
          'spr-cursor-not-allowed spr-text-color-on-fill-disabled spr-background-color-disabled spr-border-color-disabled':
            disabled,
          'spr-text-color-strong spr-background-color-brand-base spr-text-color-inverted-strong spr-border-color-brand-base':
            active && !disabled,
          'spr-text-color-strong spr-border-color-weak hover:spr-background-color-hover active:spr-background-color-pressed':
            !active && !disabled,
        },
      ),
      close: '',
    }
  }

  return {
    wrapper: classNames(
      'spr-body-xs-regular spr-text-color-strong spr-inline-flex spr-items-center spr-justify-center spr-gap-1 spr-rounded-full spr-transition-all spr-group',
      {
        'hover:spr-cursor-pointer': !disabled,
        'spr-py-1.5 spr-px-2': size === 'md',
        'spr-py-0.5 spr-px-1.5': size === 'sm',
        'spr-cursor-not-allowed spr-text-color-on-fill-disabled spr-background-color-disabled spr-border-solid spr-border-[1px] spr-border-color-disabled':
          disabled,
        'spr-background-color-brand-weak spr-border-solid spr-border-[1px] spr-border-color-brand-base':
          active && !disabled,
        'spr-border spr-border-solid spr-border-color-weak group-hover:spr-background-color-hover group-active:spr-background-color-pressed':
          !active && !disabled,
        'spr-background-color-surface': !active && !disabled && tone === 'default',
        'spr-background-color': !active && !disabled && tone === 'subtle',
      },
    ),
    close: classNames(
      'chips-close spr-cursor-pointer spr-p-0 spr-m-0 spr-border-0 spr-bg-transparent spr-inline-flex spr-items-center spr-leading-[0]',
    ),
  }
}

export function getChipIcon(icon: string, iconWeight: string): string {
  return iconWeight === 'regular' ? icon : `${icon}-${iconWeight}`
}
