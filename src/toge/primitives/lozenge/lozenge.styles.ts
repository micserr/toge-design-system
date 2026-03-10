import classNames from 'classnames'
import type { LozengeTone } from './lozenge.types'

export function getLozengeWrapperClasses(loading: boolean): string {
  return classNames({
    'spr:h-fit spr:w-fit': !loading,
    'spr:flex spr:w-full': loading,
  })
}

export function getLozengeBaseClasses(fill: boolean, loading: boolean): string {
  return classNames({
    'spr:flex spr:flex-wrap spr:rounded-md': !fill,
    'spr:flex spr:flex-wrap': fill,
    'spr-skeletal-loader spr:flex spr:h-6 spr:w-full spr:rounded-md': loading,
  })
}

export function getLozengeToneClasses(
  tone: LozengeTone,
  fill: boolean,
  isInteractive: boolean,
  hasUrl: boolean,
  hasAvatarSlot: boolean,
): string {
  return classNames(
    'spr:box-border spr:h-[20px] spr:inline-flex spr:items-center spr:gap-size-spacing-6xs spr:rounded-md spr:border-solid spr:p-size-spacing-5xs spr:text-xs spr:uppercase',
    {
      'spr:h-[20px]': !hasUrl,
      'spr:h-[24px]': hasUrl || hasAvatarSlot,
      'spr:border': !fill,
      'spr:cursor-pointer': isInteractive,

      // Pending hollow
      'spr-text-color-pending-base spr-background-color-pending-weak spr-border-color-pending-base':
        tone === 'pending' && !fill,
      'hover:spr-background-color-pending-weak-hover active:spr-background-color-pending-weak-pressed':
        tone === 'pending' && !fill && isInteractive,

      // Information hollow
      'spr-text-color-information-base spr-background-color-information-weak spr-border-color-information-base':
        tone === 'information' && !fill,
      'hover:spr-background-color-information-weak-hover active:spr-background-color-information-weak-pressed':
        tone === 'information' && !fill && isInteractive,

      // Success hollow
      'spr-text-color-success-base spr-background-color-success-weak spr-border-color-success-base':
        tone === 'success' && !fill,
      'hover:spr-background-color-success-weak-hover active:spr-background-color-success-weak-pressed':
        tone === 'success' && !fill && isInteractive,

      // Neutral hollow
      'spr-text-color-base spr-background-color-surface-adaptive spr-border-color-base':
        tone === 'neutral' && !fill,

      // Danger hollow
      'spr-text-color-danger-base spr-background-color-danger-weak spr-border-color-danger-base':
        tone === 'danger' && !fill,
      'hover:spr-background-color-danger-weak-hover active:spr-background-color-danger-weak-pressed':
        tone === 'danger' && !fill && isInteractive,

      // Caution hollow
      'spr-text-color-caution-base spr-background-color-caution-weak spr-border-color-caution-base':
        tone === 'caution' && !fill,
      'hover:spr-background-color-caution-weak-hover active:spr-background-color-caution-weak-pressed':
        tone === 'caution' && !fill && isInteractive,

      // Plain hollow
      'spr-text-color-strong spr-border-color-base spr-background-color': tone === 'plain' && !fill,

      // Neutral + plain shared hover (hollow)
      'hover:spr-background-color-hover active:spr-background-color-pressed':
        (tone === 'neutral' || tone === 'plain') && !fill && isInteractive,

      // Filled shared
      'spr:border-0': fill,
      'spr-text-color-strong':
        fill &&
        (tone === 'pending' || tone === 'neutral' || tone === 'caution' || tone === 'plain'),
      'spr-text-color-inverted-strong':
        fill && (tone === 'information' || tone === 'success' || tone === 'danger'),

      // Pending filled
      'spr-background-color-pending-base': tone === 'pending' && fill,
      'hover:spr-background-color-pending-hover active:spr-background-color-pending-pressed':
        tone === 'pending' && fill && isInteractive,

      // Information filled
      'spr-background-color-information-base': tone === 'information' && fill,
      'hover:spr-background-color-information-hover active:spr-background-color-information-pressed':
        tone === 'information' && fill && isInteractive,

      // Success filled
      'spr-background-color-success-base': tone === 'success' && fill,
      'hover:spr-background-color-success-hover active:spr-background-color-success-pressed':
        tone === 'success' && fill && isInteractive,

      // Neutral filled
      'spr-background-color-surface-adaptive': tone === 'neutral' && fill,

      // Danger filled
      'spr-background-color-danger-base': tone === 'danger' && fill,
      'hover:spr-background-color-danger-hover active:spr-background-color-danger-pressed':
        tone === 'danger' && fill && isInteractive,

      // Caution filled
      'spr-background-color-caution-base': tone === 'caution' && fill,
      'hover:spr-background-color-caution-hover active:spr-background-color-caution-pressed':
        tone === 'caution' && fill && isInteractive,

      // Plain filled
      'spr-background-color': tone === 'plain' && fill,

      // Neutral + plain shared hover (filled)
      'hover:spr-background-color-surface active:spr-background-color-pressed':
        (tone === 'neutral' || tone === 'plain') && fill && isInteractive,
    },
  )
}

export function getLozengeLabelClasses(): string {
  return classNames(
    'spr:lozenge__label spr-label-xs-medium spr:flex-1 spr:min-w-0 spr:whitespace-nowrap spr:text-ellipsis spr:overflow-hidden',
  )
}
