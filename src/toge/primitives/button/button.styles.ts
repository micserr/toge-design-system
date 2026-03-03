import classNames from 'classnames'
import type { ButtonTone, ButtonVariant, ButtonSize } from './button.types'

export interface ButtonStyleState {
  tone: ButtonTone
  size: ButtonSize
  variant: ButtonVariant
  disabled: boolean
  hasIcon: boolean
  fullwidth: boolean
  isHovered: boolean
  isPressed: boolean
  isFocused: boolean
}

function getDefaultBackground(tone: ButtonTone): string {
  const backgrounds: Record<ButtonTone, string> = {
    neutral: 'spr-background-color-base',
    success: 'spr-background-color-brand-base',
    danger: 'spr-background-color-danger-base',
  }
  return backgrounds[tone] || ''
}

function getHoveredBackground(tone: ButtonTone): string {
  const backgrounds: Record<ButtonTone, string> = {
    neutral: 'spr-background-color-hover',
    success: 'spr-background-color-success-pressed',
    danger: 'spr-background-color-danger-hover',
  }
  return backgrounds[tone] || ''
}

function getPressedBackground(tone: ButtonTone): string {
  const backgrounds: Record<ButtonTone, string> = {
    neutral: 'spr-background-color-pressed !spr-shadow-button',
    success: 'spr-background-color-brand-pressed !spr-shadow-button',
    danger: 'spr-background-color-danger-pressed !spr-shadow-button',
  }
  return backgrounds[tone] || ''
}

function getBackgroundBasedOnState(tone: ButtonTone, isPressed: boolean, isHovered: boolean): string {
  if (isPressed) return getPressedBackground(tone)
  if (isHovered) return getHoveredBackground(tone)
  return getDefaultBackground(tone)
}

function getTertiaryBackground(isPressed: boolean, isHovered: boolean): string {
  if (isPressed) return 'spr-background-color-pressed !spr-shadow-button'
  return classNames('!border-none', {
    'spr-background-color-hover': isHovered,
  })
}

function getButtonBackgroundClass(s: ButtonStyleState): string {
  if (s.variant === 'secondary') {
    if (s.isPressed) return 'spr-background-color-pressed !spr-shadow-button'
    return s.isHovered ? 'spr-background-color-hover' : 'spr-background-color '
  }
  if (s.variant === 'tertiary') {
    return getTertiaryBackground(s.isPressed, s.isHovered)
  }
  return getBackgroundBasedOnState(s.tone, s.isPressed, s.isHovered)
}

function getButtonTextClass(s: ButtonStyleState): string {
  if (s.variant === 'secondary' || s.variant === 'tertiary') {
    return classNames({
      'spr-text-color-strong': s.tone === 'neutral',
      'spr-text-color-brand-base': s.tone === 'success',
      'spr-text-color-danger-base': s.tone === 'danger',
    })
  }
  return classNames({
    'spr-text-color-strong': s.tone === 'neutral',
    'spr-text-color-inverted-strong': s.tone === 'success' || s.tone === 'danger',
  })
}

function getButtonBorderClass(s: ButtonStyleState): string {
  return classNames('spr-border spr-border-solid', {
    'spr-border-transparent': s.variant === 'primary' || s.variant === 'tertiary',
    'spr-border-white-50': (s.isFocused && s.variant === 'primary') || s.variant === 'tertiary',
    'spr-border-color-base': s.variant === 'secondary' && s.tone === 'neutral',
    'spr-border-color-brand-base': s.variant === 'secondary' && s.tone === 'success',
    'spr-border-color-danger-base': s.variant === 'secondary' && s.tone === 'danger',
  })
}

export function getButtonClasses(s: ButtonStyleState): string {
  const defaultClasses = classNames(
    'spr-background-color spr-flex spr-items-center spr-gap-1.5 spr-w-fit spr-min-w-[24px] spr-items-center spr-justify-center spr-rounded-md spr-outline-2 spr-outline-offset-4',
    {
      'spr-w-full': s.fullwidth,
    },
  )

  const sizeClasses = classNames('spr-font-medium', {
    'spr-min-w-6 spr-p-1.5 spr-leading-100 spr-font-size-100': !s.hasIcon && s.size === 'small',
    'spr-min-w-7 spr-p-2 spr-leading-100 spr-font-size-100': !s.hasIcon && s.size === 'medium',
    'spr-max-h-9 spr-min-w-9 spr-px-2 spr-py-3 spr-leading-300 spr-font-size-200': !s.hasIcon && s.size === 'large',

    // Has Icon
    'spr-min-w-6 spr-p-1.5 spr-leading-100 spr-font-size-100 [&>svg]:spr-font-size-200': s.hasIcon && s.size === 'small',
    'spr-min-w-7 spr-p-2 spr-leading-100 spr-font-size-100 [&>svg]:spr-font-size-300': s.hasIcon && s.size === 'medium',
    'spr-max-h-9 spr-min-w-9 spr-px-2 spr-py-3 spr-leading-300 spr-font-size-200 [&>svg]:spr-font-size-400':
      s.hasIcon && s.size === 'large',
  })

  const transitionClasses = classNames([
    'spr-transition spr-duration-150 spr-ease-in-out',
    'hover:spr-shadow-button-hover',
    'active:spr-scale-95',
  ])

  if (s.disabled) {
    if (s.variant === 'primary')
      return classNames(
        defaultClasses,
        sizeClasses,
        'spr-text-color-disabled spr-background-color-disabled !spr-shadow-none !spr-cursor-not-allowed spr-border-none',
      )

    if (s.variant === 'secondary')
      return classNames(
        defaultClasses,
        sizeClasses,
        'spr-text-color-disabled !spr-shadow-none !spr-cursor-not-allowed spr-border spr-border-solid spr-border-color-disabled',
      )

    if (s.variant === 'tertiary')
      return classNames(
        defaultClasses,
        sizeClasses,
        'spr-text-color-disabled !spr-shadow-none !spr-cursor-not-allowed spr-border-none',
      )
  }

  return classNames(
    defaultClasses,
    sizeClasses,
    getButtonBackgroundClass(s),
    getButtonTextClass(s),
    getButtonBorderClass(s),
    transitionClasses,
  )
}
