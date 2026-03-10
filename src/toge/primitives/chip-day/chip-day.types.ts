export type ChipDayValue = 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday'

export interface ChipDayProps {
  day: ChipDayValue
  active?: boolean
  disabled?: boolean
  ariaLabel?: string
}

export interface ChipDayEmits {
  (e: 'update', value: boolean): void
}
