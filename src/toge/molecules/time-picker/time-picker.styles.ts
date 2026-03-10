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
