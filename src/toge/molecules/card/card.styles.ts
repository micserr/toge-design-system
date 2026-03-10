import classNames from 'classnames'
import type { CardBorderRadius } from './card.types'

export interface CardStyleState {
  borderRadiusSize: CardBorderRadius
  flexbox: boolean
}

export interface CardClasses {
  base: string
  header: string
  body: string
  footer: string
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
  const base = classNames(
    'spr-background-color spr-border spr-border-solid spr-border-color-weak spr-overflow-hidden',
    {
      'spr-flex spr-flex-col spr-h-full': s.flexbox,
      [getBorderRadiusClass(s.borderRadiusSize, 'spr-rounded')]: true,
    },
  )

  const header = classNames(
    'spr-flex spr-items-center spr-py-size-spacing-2xs spr-px-size-spacing-xs spr-border-0 spr-border-b spr-border-solid spr-border-color-weak',
  )

  const body = classNames(
    'spr-py-size-spacing-2xs spr-px-size-spacing-xs spr-body-sm-regular spr-text-color-base',
    { 'spr-flex-1': s.flexbox },
  )

  const footer = classNames(
    'spr-flex spr-items-center spr-border-0 spr-border-t spr-border-solid spr-border-color-weak spr-py-size-spacing-2xs spr-px-size-spacing-xs',
  )

  return { base, header, body, footer }
}
