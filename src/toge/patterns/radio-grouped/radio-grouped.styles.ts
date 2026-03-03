import classNames from 'classnames'

export interface RadioGroupedStyleState {
  horizontalAlign: 'left' | 'center' | 'right'
  error: boolean
  displayHelper: boolean
  hasCounter: boolean
}

export interface RadioGroupedClasses {
  containerClasses: string
  helperClasses: string
}

export function getOptionLabelClasses(
  isDisabled: boolean,
  isSelected: boolean,
  isChoiceBox: boolean,
): string {
  return classNames('spr-body-sm-regular', {
    'spr-text-color-disabled': isDisabled,
    'spr-text-color-strong': !isDisabled && (!isChoiceBox || !isSelected),
    'spr-text-color-specialty-token-dark': isChoiceBox && !isDisabled && isSelected,
  })
}

export function getRadioGroupedClasses(state: RadioGroupedStyleState): RadioGroupedClasses {
  const { horizontalAlign, error } = state

  const alignmentMap: Record<'left' | 'center' | 'right', string> = {
    left: 'spr-justify-start',
    center: 'spr-justify-center',
    right: 'spr-justify-end',
  }

  const containerClasses = classNames('spr-flex spr-flex-col spr-gap-2', {
    [alignmentMap[horizontalAlign]]: true,
  })

  const helperClasses = classNames(
    'spr-flex spr-items-center spr-gap-1 spr-mt-size-spacing-2xs spr-body-sm-regular',
    {
      'spr-text-mushroom-600': !error,
      'spr-text-color-danger-base': error,
    },
  )

  return {
    containerClasses,
    helperClasses,
  }
}
