import { ref, computed } from 'vue'
import type { DisabledDates, RestDayType, CalendarDay } from './date-calendar-picker.types'

// Day index mapping for rest day checking (0=Sun, 1=Mon, ..., 6=Sat)
const REST_DAY_INDEX: Record<RestDayType, number> = {
  su: 0,
  mo: 1,
  tu: 2,
  we: 3,
  th: 4,
  fr: 5,
  sa: 6,
}

export function useDateCalendarPickerState(initialMonth?: number, initialYear?: number) {
  const today = new Date()
  const currentMonth = ref(initialMonth ?? today.getMonth()) // 0-indexed
  const currentYear = ref(initialYear ?? today.getFullYear())
  const hoveredDate = ref<string | null>(null)

  function prevMonth() {
    if (currentMonth.value === 0) {
      currentMonth.value = 11
      currentYear.value--
    } else {
      currentMonth.value--
    }
  }

  function nextMonth() {
    if (currentMonth.value === 11) {
      currentMonth.value = 0
      currentYear.value++
    } else {
      currentMonth.value++
    }
  }

  function prevYear() {
    currentYear.value--
  }

  function nextYear() {
    currentYear.value++
  }

  // Generate calendar grid for current month — always 42 cells (6 rows × 7 cols)
  const calendarDays = computed((): CalendarDay[] => {
    const year = currentYear.value
    const month = currentMonth.value
    const firstDay = new Date(year, month, 1).getDay() // 0=Sun
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const daysInPrevMonth = new Date(year, month, 0).getDate()

    const days: CalendarDay[] = []

    // Previous month padding
    for (let i = firstDay - 1; i >= 0; i--) {
      const d = daysInPrevMonth - i
      const m = month === 0 ? 11 : month - 1
      const y = month === 0 ? year - 1 : year
      days.push({
        date: d,
        month: 'prev',
        fullDate: `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`,
      })
    }

    // Current month days
    for (let d = 1; d <= daysInMonth; d++) {
      days.push({
        date: d,
        month: 'current',
        fullDate: `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`,
      })
    }

    // Next month padding to fill 42 cells (6 rows × 7 cols)
    const remaining = 42 - days.length
    for (let d = 1; d <= remaining; d++) {
      const m = month === 11 ? 0 : month + 1
      const y = month === 11 ? year + 1 : year
      days.push({
        date: d,
        month: 'next',
        fullDate: `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`,
      })
    }

    return days
  })

  // Generate years array for year tab (12 items per page)
  function buildYearsArray(min: number, max: number): number[] {
    return Array.from({ length: max - min + 1 }, (_, i) => min + i)
  }

  // Check if a fullDate string is disabled based on disabledDates prop
  function isDateDisabled(fullDate: string, disabledDates?: DisabledDates): boolean {
    if (!disabledDates) return false

    const date = new Date(fullDate)
    const todayStart = new Date()
    todayStart.setHours(0, 0, 0, 0)

    // from/to range
    if (disabledDates.from && disabledDates.to) {
      const from = new Date(disabledDates.from)
      const to = new Date(disabledDates.to)
      from.setHours(0, 0, 0, 0)
      to.setHours(23, 59, 59, 999)
      if (date >= from && date <= to) return true
    }

    // past dates
    if (disabledDates.pastDates) {
      if (typeof disabledDates.pastDates === 'boolean') {
        if (date < todayStart) return true
      } else {
        const cutoff = new Date(disabledDates.pastDates)
        cutoff.setHours(0, 0, 0, 0)
        if (date < cutoff) return true
      }
    }

    // future dates
    if (disabledDates.futureDates) {
      const todayEnd = new Date()
      todayEnd.setHours(23, 59, 59, 999)
      if (typeof disabledDates.futureDates === 'boolean') {
        if (date > todayEnd) return true
      } else {
        const cutoff = new Date(disabledDates.futureDates)
        cutoff.setHours(23, 59, 59, 999)
        if (date > cutoff) return true
      }
    }

    // specific selected dates
    if (disabledDates.selectedDates?.length) {
      const dateStr = fullDate
      if (
        disabledDates.selectedDates.some((d) => {
          const disabledDate = new Date(d)
          return (
            disabledDate.getFullYear() === date.getFullYear() &&
            disabledDate.getMonth() === date.getMonth() &&
            disabledDate.getDate() === date.getDate()
          )
        })
      )
        return true
    }

    // weekends
    if (disabledDates.weekends) {
      const day = date.getDay()
      if (day === 0 || day === 6) return true
    }

    // weekdays
    if (disabledDates.weekdays) {
      const day = date.getDay()
      if (day > 0 && day < 6) return true
    }

    // selected days of week
    if (disabledDates.selectedDays?.length) {
      const dayOfWeek = date.getDay()
      if (
        disabledDates.selectedDays.some(
          (d) => REST_DAY_INDEX[d.toLowerCase() as RestDayType] === dayOfWeek,
        )
      )
        return true
    }

    return false
  }

  // Check if a fullDate is a rest day
  function isRestDay(fullDate: string, restDays: RestDayType[], selectedValue?: string): boolean {
    if (!restDays.length) return false
    if (fullDate === selectedValue) return false // selected overrides rest day
    const date = new Date(fullDate)
    const dayOfWeek = date.getDay()
    return restDays.some((rd) => REST_DAY_INDEX[rd] === dayOfWeek)
  }

  // Check if fullDate is today
  function isToday(fullDate: string): boolean {
    const date = new Date(fullDate)
    const now = new Date()
    return (
      date.getFullYear() === now.getFullYear() &&
      date.getMonth() === now.getMonth() &&
      date.getDate() === now.getDate()
    )
  }

  const MONTH_NAMES = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ]

  const MONTH_SHORT_NAMES = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ]

  const DAY_NAMES = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

  return {
    today,
    currentMonth,
    currentYear,
    hoveredDate,
    prevMonth,
    nextMonth,
    prevYear,
    nextYear,
    calendarDays,
    buildYearsArray,
    isDateDisabled,
    isRestDay,
    isToday,
    MONTH_NAMES,
    MONTH_SHORT_NAMES,
    DAY_NAMES,
  }
}
