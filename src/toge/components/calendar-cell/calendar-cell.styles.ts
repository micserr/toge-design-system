import classNames from 'classnames'
import type { CalendarCellState } from './calendar-cell.types'

export interface CalendarCellStyleState {
  type: string
  status: string
  state: CalendarCellState
  fullwidth: boolean
  viewOnly: boolean
  loading: boolean
  customColor: string
  lineThrough: boolean
  disabled: boolean
  hasCustomBorderSize: boolean
  customBorderSize: string
}

export interface CalendarCellClasses {
  main: string
  title: string
  description: string
  typeLabel: string
  textFormat: string
}

const TYPE_CLASSES: Record<string, string> = {
  standard: 'spr-border-kangkong-700 spr-bg-kangkong-50',
  'early-morning': 'spr-border-blueberry-700 spr-bg-blueberry-50',
  'late-morning': 'spr-border-color-pending-base spr-bg-mango-50',
  afternoon: 'spr-border-carrot-600 spr-bg-carrot-50',
  graveyard: 'spr-border-wintermelon-600 spr-bg-wintermelon-50',
  broken: 'spr-border-ubas-700 spr-bg-ubas-50',
  'multi-break': 'spr-border-[#F652F2] spr-bg-[#FDECFD]',
  'flexible-break': 'spr-border-[#24B155] spr-bg-[#CEFFE1]',
  'flexible-weekly': 'spr-border-[#539300] spr-bg-[#EBFFD2]',
  'flexible-daily': 'spr-border-[#0084CB] spr-bg-[#D4F0FF]',
  'fixed-flexible': 'spr-border-[#C771A6] spr-bg-[#FFF2FA]',
}

const OFFLINE_STATUSES = ['restday', 'vacation', 'holiday', 'exempt', 'sick', 'emergency']

function getCellTypeClasses(type: string): string {
  return TYPE_CLASSES[type] || 'spr-border-color-supporting spr-background-color-surface'
}

export function getCalendarCellClasses(s: CalendarCellStyleState): CalendarCellClasses {
  const wrapper = classNames(
    'spr-flex spr-items-center spr-p-size-spacing-3xs spr-gap-size-spacing-3xs spr-relative spr-rounded-lg spr-border-2 spr-transition-all spr-flex-col sm:spr-flex-row spr-overflow-hidden',
    {
      'spr-w-full': s.fullwidth,
      'spr-max-w-[217px]': !s.fullwidth,
      'spr-cursor-pointer': !s.viewOnly,
      'spr-h-[80px] spr-skeletal-loader': s.loading,
    },
  )

  const statusClasses = classNames({
    'spr-border-dashed': s.status === 'pending',
    'spr-border-solid spr-border-color-danger-base': s.status === 'error',
    'spr-border-solid': !s.status || (s.status !== 'pending' && s.status !== 'error'),
    'spr-border-opacity-50': s.disabled,
  })

  const main = classNames(wrapper, getCellTypeClasses(s.type), statusClasses)

  const title = classNames('spr-text-color-strong spr-body-sm-regular-medium', {
    'spr-text-color-danger-base': s.status === 'error',
  })

  const description = classNames('spr-text-color-strong spr-body-sm-regular', {
    'spr-text-color-danger-base': s.status === 'error',
  })

  const typeLabel = classNames('spr-text-color-strong spr-body-sm-regular', {
    'spr-text-color-danger-base': s.status === 'error',
    'spr-text-color-strong spr-body-sm-regular-medium': OFFLINE_STATUSES.includes(s.type),
  })

  const textFormat = classNames('spr-break-words', {
    'spr-line-through': s.lineThrough,
    'spr-opacity-50': s.disabled,
  })

  return { main, title, description, typeLabel, textFormat }
}

export const SHIFT_LABELS: Record<string, string> = {
  standard: 'Standard Day Shift',
  'early-morning': 'Early Morning',
  'late-morning': 'Late Morning',
  afternoon: 'Afternoon Shift',
  graveyard: 'Graveyard Shift',
  broken: 'Broken Shift',
  'multi-break': 'Multi Break Shift',
  'flexible-break': 'Flexible Break Shift',
  'flexible-weekly': 'Flexible Weekly',
  'flexible-daily': 'Flexible Daily',
  'fixed-flexible': 'Fixed Flexible',
  restday: 'RESTDAY',
  vacation: 'VACATION',
  emergency: 'EMERGENCY',
  exempt: 'EXEMPT',
  sick: 'SICK',
  holiday: 'HOLIDAY',
}

export const ICON_MAP: Record<string, string> = {
  restday: 'ph:prohibit',
  holiday: 'ph:prohibit',
  exempt: 'ph:prohibit',
  vacation: 'ph:island',
  sick: 'ph:pill',
  emergency: 'ph:ambulance',
}
