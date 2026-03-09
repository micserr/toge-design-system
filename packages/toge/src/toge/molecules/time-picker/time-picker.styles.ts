import classNames from 'classnames'
import type { TimeFormat } from './time-picker.types'

export function generateTimeSlots(interval: number, format: TimeFormat = '24'): string[] {
  const slots: string[] = []
  const minutesInDay = 24 * 60
  for (let minutes = 0; minutes < minutesInDay; minutes += interval) {
    const h = Math.floor(minutes / 60)
    const m = minutes % 60
    const mm = m.toString().padStart(2, '0')
    if (format === '12') {
      const period = h >= 12 ? 'PM' : 'AM'
      const h12 = h % 12 || 12
      slots.push(`${h12.toString().padStart(2, '0')}:${mm} ${period}`)
    } else {
      slots.push(`${h.toString().padStart(2, '0')}:${mm}`)
    }
  }
  return slots
}

export function getTimePickerClasses(fullWidth: boolean) {
  return {
    optionList: classNames('spr-max-h-[300px] spr-p-size-spacing-3xs spr-overflow-y-auto', {
      'spr-w-[240px]': !fullWidth,
    }),
    option: classNames(
      'spr-body-xs-regular spr-flex spr-cursor-pointer spr-justify-between',
      'spr-rounded-border-radius-md spr-p-size-spacing-3xs',
      'hover:spr-background-color-hover',
    ),
    optionActive: classNames('spr-background-color-single-active spr-rounded-border-radius-md'),
    optionActiveIcon: classNames('spr-text-color-brand-base spr-font-bold'),
    empty: classNames('spr-px-3 spr-py-2 spr-text-mushroom-500'),
  }
}
