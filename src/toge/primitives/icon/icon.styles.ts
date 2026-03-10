import classNames from 'classnames'
import type { IconSize, IconTone, IconVariant } from './icon.types'

const TONE_MAP: Record<string, Record<string, string>> = {
  success: {
    primary: 'spr-border-color-brand-base spr-text-color-inverted-strong spr-background-color-success-base',
    secondary: 'spr-border-color-brand-base spr-text-color-success-base spr:bg-kangkong-50',
    tertiary: 'spr-text-color-success-base',
  },
  error: {
    primary: 'spr-border-color-danger-base spr-text-color-inverted-strong spr-background-color-danger-base',
    secondary: 'spr-border-color-danger-base spr-text-color-danger-base spr:bg-tomato-50',
    tertiary: 'spr-text-color-danger-base',
  },
  info: {
    primary:
      'spr-border-color-information-base spr-text-color-inverted-strong spr-background-color-information-base',
    secondary: 'spr-border-color-information-base spr-text-color-information-base spr:bg-sky-50',
    tertiary: 'spr-text-color-information-base',
  },
  pending: {
    primary: 'spr-border-color-pending-base spr-text-color-inverted-strong spr-background-color-pending-base',
    secondary: 'spr-border-color-pending-base spr-text-color-pending-base spr:bg-yellow-50',
    tertiary: 'spr-text-color-pending-base',
  },
  caution: {
    primary: 'spr-border-color-caution-base spr-text-color-inverted-strong spr-background-color-caution-base',
    secondary: 'spr-border-color-caution-base spr-text-color-caution-base spr:bg-orange-50',
    tertiary: 'spr-text-color-caution-base',
  },
}

const SIZE_MAP: Record<string, (variant: IconVariant | '') => string> = {
  '2xl': (v) => (v === 'tertiary' ? 'spr-font-size-700' : 'spr:h-20 spr:min-w-20 spr-font-size-700'),
  xl: (v) => (v === 'tertiary' ? 'spr-font-size-600' : 'spr:h-14 spr:min-w-14 spr-font-size-600'),
  lg: (v) => (v === 'tertiary' ? 'spr-font-size-500' : 'spr:h-10 spr:min-w-10 spr-font-size-500'),
  md: (v) => (v === 'tertiary' ? 'spr-font-size-400' : 'spr:h-9 spr:min-w-9 spr-font-size-400'),
  sm: (v) =>
    v === 'tertiary'
      ? 'spr-font-size-300'
      : 'spr:h-6 spr:min-w-6 spr-font-size-300 spr:rounded-border-radius-sm',
  xs: (v) =>
    v === 'tertiary'
      ? 'spr-font-size-250'
      : 'spr:h-5 spr:min-w-5 spr-font-size-250 spr:rounded-border-radius-xs',
  '2xs': (v) =>
    v === 'tertiary'
      ? 'spr-font-size-250'
      : 'spr:h-4 spr:min-w-4  spr-font-size-250 spr:rounded-border-radius-xs',
}

export function getIconClasses(
  size: IconSize,
  tone: IconTone | '',
  variant: IconVariant | '',
): string {
  const BASE_CLASSES =
    'spr:rounded-border-radius-md spr:relative spr:inline-block spr:rounded spr:flex spr:items-center spr:justify-center'

  const toneClasses = classNames('spr:border spr:border-solid', TONE_MAP[tone]?.[variant] || '')

  const sizeClasses = (SIZE_MAP[size] ?? SIZE_MAP.md)(variant as IconVariant | '')

  const variantClasses = classNames({
    'spr:border-0': variant === 'primary',
    'spr:border': variant === 'secondary',
    'spr:border-0 spr:bg-transparent ': variant === 'tertiary' || !variant,
  })

  return classNames(variantClasses, BASE_CLASSES, sizeClasses, toneClasses)
}
