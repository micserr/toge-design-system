export type RestDayType = 'su' | 'mo' | 'tu' | 'we' | 'th' | 'fr' | 'sa'

export interface MinMaxYear {
  min: number
  max: number
}

export interface DisabledDates {
  to?: string
  from?: string
  pastDates?: boolean | string
  futureDates?: boolean | string
  selectedDates?: string[]
  weekends?: boolean
  weekdays?: boolean
  selectedDays?: string[]
}

export type DatePickerMode = 'full' | 'month-year' | 'year-only'

export interface CalendarDay {
  date: number
  month: 'current' | 'prev' | 'next'
  fullDate: string
}

export interface DateCalendarPickerProps {
  modelValue?: string
  selectedMonth?: number
  selectedYear?: number
  selectedDay?: number
  minMaxYear?: MinMaxYear
  restDays?: RestDayType[]
  disabledDates?: DisabledDates
  disabled?: boolean
  readonly?: boolean
  mode?: DatePickerMode
  format?: string
}

export interface DateCalendarPickerEmits {
  'update:modelValue': [value: string]
  'update:month': [month: number]
  'update:year': [year: number]
  'update:day': [day: number]
}
