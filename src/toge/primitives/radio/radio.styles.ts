import classNames from 'classnames'

export interface RadioStyleState {
  isSelected: boolean
  disabled: boolean
  bordered: boolean
  fullWidth: boolean
  choiceBox: boolean
  hasSlot: boolean
  isHovered: boolean
}

export interface RadioClasses {
  baseClasses: string
  baseInputClasses: string
  baseIndicatorClasses: string
  labelClasses: string
  borderedClasses: string
}

export function getRadioClasses(state: RadioStyleState): RadioClasses {
  const { isSelected, disabled, bordered, fullWidth, choiceBox, hasSlot, isHovered } = state

  const baseClasses = classNames('spr-relative spr-m-0 spr-flex spr-items-center', {
    'spr-inline-block': !choiceBox,
    'spr-block': choiceBox,
    'spr-w-full': fullWidth || choiceBox,
    'spr-align-middle': !choiceBox,
    'spr-border-color spr-border-color-weak spr-border spr-border-solid spr-p-2 spr-rounded-lg spr-transition spr-ease-in-out spr-duration-150 active:spr-scale-[0.98]':
      choiceBox,
    'spr-border-color-success-base spr-background-color-brand-weak': choiceBox && isSelected && !disabled,
    'spr-cursor-pointer': choiceBox && !disabled,
    'spr-cursor-not-allowed': disabled && choiceBox,
  })

  const baseInputClasses = classNames('spr-sr-only spr-peer spr-inline-block', {
    'spr-cursor-not-allowed': disabled,
  })

  const baseIndicatorClasses = classNames(
    'spr-inline-block spr-w-4 spr-h-4 spr-rounded-full spr-border-2 spr-border-solid spr-shrink-0',
    {
      'spr-mr-2': hasSlot,
      'group-active:spr-scale-95': !disabled,
    },

    // Hover State
    {
      'spr-background-color-brand-hover spr-border-2 spr-border-color-brand-hover spr-shadow-[inset_0px_0px_0px_2.5px_#fff]':
        isHovered && isSelected && !disabled && !bordered,
      'spr-background-color-base spr-border-2 spr-border-color-supporting spr-shadow-[inset_0px_0px_0px_2.5px_#fff]':
        isHovered && !isSelected && !disabled && !bordered,
      'spr-background-color-base spr-border-2 spr-border-color-supporting':
        isHovered && !isSelected && !disabled && bordered,
    },

    // Active State
    {
      'spr-border-color-brand-base spr-background-color-brand-base spr-shadow-[inset_0px_0px_0px_2.5px_#fff] animate-shadow-grow':
        isSelected && !disabled && !bordered,
      'spr-border-color-supporting spr-shadow-[inset_0px_0px_0px_2.5px#fff]':
        !isSelected && !disabled && !bordered,
      'spr-border-color-brand-base spr-background-color-brand-base animate-shadow-grow':
        isSelected && !disabled && bordered,
      'spr-border-color-supporting': !isSelected && !disabled && bordered,
    },

    // Disabled State
    {
      'spr-cursor-not-allowed': disabled,
      'spr-border-color-disabled spr-background-color-disabled spr-shadow-[inset_0px_0px_0px_2.5px_#fff]':
        disabled && isSelected && !bordered,
      'spr-border-color-disabled spr-background-color spr-cursor-not-allowed':
        disabled && !isSelected && !bordered,
      'spr-bg-white-400 spr-shadow-[inset_0px_0px_0px_2.5px_#fff]':
        disabled && isSelected && bordered,
      'spr-border-white-400 spr-background-color-disabled':
        disabled && !isSelected && bordered,
    },
  )

  const labelClasses = classNames(
    'spr-group spr-m-0 spr-inline-flex spr-w-auto spr-items-center spr-p-0 spr-font-main',
    'spr-text-color-strong spr-inline-flex spr-items-center spr-p-0',
    {
      'spr-text-color-disabled': disabled && !bordered,
      'spr-text-color-on-fill-disabled': disabled && bordered,
      'spr-cursor-pointer': !disabled,
      'spr-cursor-not-allowed': disabled,
    },
  )

  const borderedClasses = classNames(
    'spr-border spr-rounded-md spr-p-size-spacing-2xs spr-border-solid spr-box-border',
    {
      'spr-border-color-brand-base spr-background-color-brand-weak': isSelected && !disabled,
      'spr-border-color-weak spr-bg-white-50 hover:spr-background-color-hover': !isSelected && !disabled,
      'spr-border-color-disabled spr-background-color-disabled': disabled,
      'spr-w-full': fullWidth,
      'spr-w-fit': !fullWidth,
    },
  )

  return {
    baseClasses,
    baseInputClasses,
    baseIndicatorClasses,
    labelClasses,
    borderedClasses,
  }
}
