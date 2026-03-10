import classNames from 'classnames'

export interface RadioStyleState {
  isSelected: boolean
  disabled: boolean
  hasSlot: boolean
  isHovered: boolean
}

export interface RadioClasses {
  baseClasses: string
  baseInputClasses: string
  baseIndicatorClasses: string
  labelClasses: string
}

export function getRadioClasses(state: RadioStyleState): RadioClasses {
  const { isSelected, disabled, hasSlot, isHovered } = state

  const baseClasses = classNames(
    'spr-relative spr-m-0 spr-flex spr-items-center spr-inline-block spr-align-middle',
  )

  const baseInputClasses = classNames('spr-sr-only spr-peer spr-inline-block', {
    'spr-cursor-not-allowed': disabled,
  })

  const baseIndicatorClasses = classNames(
    'spr-inline-block spr-w-4 spr-h-4 spr-rounded-full spr-border-2 spr-border-solid spr-shrink-0',
    { 'spr-mr-2': hasSlot },

    // Hover
    {
      'spr-background-color-brand-hover spr-border-color-brand-hover spr-shadow-[inset_0px_0px_0px_2.5px_#fff]':
        isHovered && isSelected && !disabled,
      'spr-background-color-base spr-border-color-supporting spr-shadow-[inset_0px_0px_0px_2.5px_#fff]':
        isHovered && !isSelected && !disabled,
    },

    // Default / active
    {
      'spr-border-color-brand-base spr-background-color-brand-base spr-shadow-[inset_0px_0px_0px_2.5px_#fff] animate-shadow-grow':
        isSelected && !disabled,
      'spr-border-color-supporting': !isSelected && !disabled && !isHovered,
    },

    // Disabled
    {
      'spr-cursor-not-allowed': disabled,
      'spr-border-color-disabled spr-background-color-disabled spr-shadow-[inset_0px_0px_0px_2.5px_#fff]':
        disabled && isSelected,
      'spr-border-color-disabled spr-background-color spr-cursor-not-allowed': disabled && !isSelected,
    },
  )

  const labelClasses = classNames(
    'spr-group spr-m-0 spr-inline-flex spr-w-auto spr-items-center spr-p-0 spr-font-main spr-text-color-strong',
    {
      'spr-text-color-disabled': disabled,
      'spr-cursor-pointer': !disabled,
      'spr-cursor-not-allowed': disabled,
    },
  )

  return { baseClasses, baseInputClasses, baseIndicatorClasses, labelClasses }
}
