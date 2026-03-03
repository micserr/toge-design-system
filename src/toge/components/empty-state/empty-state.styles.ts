import classNames from 'classnames'
import type { EmptyStateSize } from './empty-state.types'

export interface EmptyStateStyleState {
  size: EmptyStateSize
  customClasses?: string
}

export interface EmptyStateClasses {
  container: string
  imageSize: string
}

export function getEmptyStateClasses(s: EmptyStateStyleState): EmptyStateClasses {
  const container = classNames(
    'spr-background-color spr-flex spr-h-full spr-w-full spr-flex-col spr-items-center spr-justify-center spr-gap-size-spacing-2xs spr-text-center',
    {
      'spr-px-size-spacing-sm spr-py-size-spacing-md spr-min-h-[240px]': s.size === 'small',
      'spr-px-size-spacing-sm spr-py-size-spacing-2xl spr-min-h-[360px]': s.size === 'large',
    },
    s.customClasses,
  )

  const imageSize = classNames({
    'spr-h-[200px] spr-w-[200px]': s.size === 'large',
    'spr-h-[120px] spr-w-[120px]': s.size === 'small',
  })

  return { container, imageSize }
}
