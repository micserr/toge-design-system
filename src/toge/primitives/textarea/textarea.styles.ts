import classNames from 'classnames'

export interface TextareaStyleState {
  error: boolean
  disabled: boolean
  readonly: boolean
  displayHelper: boolean
  hasCounter: boolean
}

export interface TextareaClasses {
  wrapperClasses: string
  labelClasses: string
  supportingLabelClasses: string
  textAreaClasses: string
  helperClasses: string
  slotWrapperClasses: string
}

export function getTextareaClasses(state: TextareaStyleState): TextareaClasses {
  const { error, disabled, readonly, displayHelper, hasCounter } = state

  const wrapperClasses = classNames('spr-flex spr-flex-col spr-gap-size-spacing-4xs')

  const labelClasses = classNames('spr-body-sm-regular spr-text-color-strong spr-flex spr-gap-2', {
    'spr-text-color-on-fill-disabled': disabled,
    'spr-text-color-base': readonly,
  })

  const supportingLabelClasses = classNames('spr-body-sm-regular spr-text-color-supporting', {
    'spr-text-color-on-fill-disabled': disabled,
    'spr-text-color-base': readonly,
  })

  const textAreaClasses = classNames(
    'spr-block spr-w-full spr-px-size-spacing-2xs spr-py-size-spacing-4xs spr-rounded-border-radius-md spr-outline-none spr-ring-0 spr-resize-none spr-font-main',
    'spr-text-color-strong spr-font-size-200',
    'spr-border spr-border-solid',
    'placeholder:spr-text-mushroom-300',
    {
      'spr-border-mushroom-200 focus:spr-border-kangkong-700': !error && !disabled,
      'spr-border-tomato-600 focus:spr-border-tomato-600': error,
      'spr-background-color-disabled spr-border-white-100 focus:spr-border-white-100 spr-cursor-not-allowed spr-text-color-on-fill-disabled':
        disabled,
      'spr-background-color-disabled spr-border-white-100 focus:spr-border-white-100 spr-cursor-not-allowed spr-text-color-base':
        readonly,
    },
  )

  const helperClasses = classNames('spr-body-sm-regular spr-flex spr-items-center spr-gap-size-spacing-5xs', {
    'spr-text-color-danger-base': error,
    'spr-text-color-supporting': !error,
  })

  const slotWrapperClasses = classNames('spr-flex spr-items-start', {
    'spr-justify-between': displayHelper && hasCounter,
    'spr-justify-end': !displayHelper && hasCounter,
  })

  return {
    wrapperClasses,
    labelClasses,
    supportingLabelClasses,
    textAreaClasses,
    helperClasses,
    slotWrapperClasses,
  }
}
