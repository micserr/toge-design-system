import classNames from 'classnames'
import type { EventCellState } from './event-cell.types'

export interface EventCellStyleState {
  state: EventCellState
  fullwidth: boolean
  viewOnly: boolean
  loading: boolean
  lineThrough: boolean
  disabled: boolean
}

export interface EventCellClasses {
  main: string
  title: string
  description: string
  textFormat: string
}

const STATE_CLASSES: Record<EventCellState, string> = {
  success: 'spr-border-kangkong-700 spr-bg-kangkong-50',
  information: 'spr-border-blueberry-700 spr-bg-blueberry-50',
  pending: 'spr-border-color-pending-base spr-bg-mango-50',
  caution: 'spr-border-carrot-600 spr-bg-carrot-50',
  danger: 'spr-border-color-danger-base spr-bg-ubas-50',
}

function getCellStateClasses(state: EventCellState): string {
  return STATE_CLASSES[state] || 'spr-border-color-supporting spr-background-color-surface'
}

export function getEventCellClasses(s: EventCellStyleState): EventCellClasses {
  const wrapper = classNames(
    'spr-flex spr-items-center spr-p-size-spacing-3xs spr-gap-size-spacing-3xs spr-relative spr-rounded-lg spr-border-2 spr-transition-all spr-flex-col sm:spr-flex-row spr-overflow-hidden',
    {
      'spr-w-full': s.fullwidth,
      'spr-max-w-[217px]': !s.fullwidth,
      'spr-cursor-pointer': !s.viewOnly,
      'spr-h-[80px] spr-skeletal-loader': s.loading,
      'spr-border-opacity-50': s.disabled,
    },
  )

  const main = classNames(wrapper, getCellStateClasses(s.state))

  const title = classNames('spr-text-color-strong spr-body-sm-regular-medium')

  const description = classNames('spr-text-color-strong spr-body-sm-regular')

  const textFormat = classNames('spr-break-words', {
    'spr-line-through': s.lineThrough,
    'spr-opacity-50': s.disabled,
  })

  return { main, title, description, textFormat }
}
