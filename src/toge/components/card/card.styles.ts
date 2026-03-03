import classNames from 'classnames'
import type { CardTone, CardBorderRadius } from './card.types'

export interface CardStyleState {
  tone: CardTone
  borderRadiusSize: CardBorderRadius
  hasCollapsible: boolean
  isCollapsibleOpen: boolean
  hasContentPadding: boolean
  flexbox: boolean
  hasTitle: boolean
  hasHeaderIcon: boolean
  hasHeaderSlot: boolean
  hasContentSlot: boolean
}

export interface CardClasses {
  base: string
  header: string
  contentPadding: string
  footer: string
  flexBox: string
}

function getBorderRadiusClass(size: CardBorderRadius, prefix: 'spr-rounded' | 'spr-rounded-t' | 'spr-rounded-b'): string {
  const map: Record<CardBorderRadius, string> = {
    '2xs': `${prefix}-border-radius-2xs`,
    'xs': `${prefix}-border-radius-xs`,
    'sm': `${prefix}-border-radius-sm`,
    'md': `${prefix}-border-radius-md`,
    'lg': `${prefix}-border-radius-lg`,
    'xl': `${prefix}-border-radius-xl`,
  }
  return map[size] || `${prefix}-border-radius-xl`
}

export function getCardClasses(s: CardStyleState): CardClasses {
  const base = classNames('spr-border-solid', {
    // Tones - background
    'spr-background-color': s.tone === 'plain',
    'spr-background-color-surface': s.tone === 'neutral',
    'spr-background-color-success-weak': s.tone === 'success',
    'spr-background-color-information-weak': s.tone === 'information',
    'spr-background-color-pending-weak': s.tone === 'pending',
    'spr-background-color-caution-weak': s.tone === 'caution',
    'spr-background-color-accent-weak': s.tone === 'accent',
    'spr-background-color-danger-weak': s.tone === 'danger',
    // Tones - borders
    'spr-border-color-weak': s.tone === 'plain',
    'spr-border-color-base': s.tone === 'neutral',
    'spr-border-color-success-base': s.tone === 'success',
    'spr-border-color-information-base': s.tone === 'information',
    'spr-border-color-pending-base': s.tone === 'pending',
    'spr-border-color-caution-base': s.tone === 'caution',
    'spr-border-color-accent-base': s.tone === 'accent',
    'spr-border-color-danger-base': s.tone === 'danger',
    [getBorderRadiusClass(s.borderRadiusSize, 'spr-rounded')]: true,
  })

  const header = classNames(
    'spr-flex spr-items-center spr-transition-all spr-duration-300 spr-ease-in-out',
    {
      'spr-min-h-[18px]': s.hasHeaderSlot,
      'spr-border-0 spr-border-b spr-border-solid spr-border-mushroom-200':
        (s.hasTitle || s.hasHeaderIcon) && (s.hasContentSlot),
      'spr-border-transparent': s.hasCollapsible && !s.isCollapsibleOpen,
      'spr-py-size-spacing-2xs spr-px-size-spacing-xs': s.hasTitle || s.hasHeaderIcon,
      [getBorderRadiusClass(s.borderRadiusSize, 'spr-rounded-t')]: true,
    },
  )

  const contentPadding = classNames({
    'spr-py-size-spacing-2xs spr-px-size-spacing-xs': s.hasContentPadding,
  })

  const footer = classNames(
    'spr-flex spr-items-center spr-border-0 spr-border-t spr-border-solid spr-border-mushroom-200 spr-py-size-spacing-2xs spr-px-size-spacing-xs',
    {
      [getBorderRadiusClass(s.borderRadiusSize, 'spr-rounded-b')]: true,
    },
  )

  const flexBox = classNames({
    'spr-flex spr-flex-col spr-h-full': s.flexbox,
  })

  return { base, header, contentPadding, footer, flexBox }
}
