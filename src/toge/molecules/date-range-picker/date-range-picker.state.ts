import { ref, computed } from 'vue'
import type { DisabledDates, RestDayType, CalendarDay } from '../date-calendar-picker/date-calendar-picker.types'
import { useDateCalendarPickerState } from '../date-calendar-picker/date-calendar-picker.state'

export type SelectionStep = 'start' | 'end'

export function useDateRangePickerState(initialStartDate?: string, initialEndDate?: string) {
  // Left panel: start date calendar
  const leftState = useDateCalendarPickerState()
  // Right panel: end date calendar (next month from left)
  const rightState = useDateCalendarPickerState()

  const hoveredDate = ref<string | null>(null)
  const selectionStep = ref<SelectionStep>('start')

  // Initialize right panel to be one month ahead of left
  function syncRightToLeft() {
    if (rightState.currentMonth.value === leftState.currentMonth.value &&
        rightState.currentYear.value === leftState.currentYear.value) {
      // Advance right panel by one month
      if (leftState.currentMonth.value === 11) {
        rightState.currentMonth.value = 0
        rightState.currentYear.value = leftState.currentYear.value + 1
      } else {
        rightState.currentMonth.value = leftState.currentMonth.value + 1
        rightState.currentYear.value = leftState.currentYear.value
      }
    }
  }

  // Initialize panels
  if (initialStartDate) {
    const d = new Date(initialStartDate)
    if (!isNaN(d.getTime())) {
      leftState.currentMonth.value = d.getMonth()
      leftState.currentYear.value = d.getFullYear()
    }
  }
  if (initialEndDate) {
    const d = new Date(initialEndDate)
    if (!isNaN(d.getTime())) {
      rightState.currentMonth.value = d.getMonth()
      rightState.currentYear.value = d.getFullYear()
    }
  } else {
    syncRightToLeft()
  }

  function isInRange(
    fullDate: string,
    startDate: string,
    endDate: string,
    hovered: string | null,
  ): boolean {
    if (!startDate) return false

    const d = new Date(fullDate).getTime()
    const start = new Date(startDate).getTime()

    // If we have both start and end
    if (endDate) {
      const end = new Date(endDate).getTime()
      return d > start && d < end
    }

    // If only start (preview with hover)
    if (hovered) {
      const h = new Date(hovered).getTime()
      if (h > start) return d > start && d < h
      if (h < start) return d > h && d < start
    }

    return false
  }

  function validateRange(
    startDate: string,
    endDate: string,
    opts: { allowSameDay?: boolean; maxRange?: number; minRange?: number },
  ): boolean {
    if (!startDate || !endDate) return false

    const start = new Date(startDate).getTime()
    const end = new Date(endDate).getTime()

    if (end < start) return false
    if (!opts.allowSameDay && end === start) return false

    const dayDiff = Math.round((end - start) / (1000 * 60 * 60 * 24))

    if (opts.minRange !== undefined && dayDiff < opts.minRange) return false
    if (opts.maxRange !== undefined && dayDiff > opts.maxRange) return false

    return true
  }

  return {
    leftState,
    rightState,
    hoveredDate,
    selectionStep,
    syncRightToLeft,
    isInRange,
    validateRange,
  }
}
