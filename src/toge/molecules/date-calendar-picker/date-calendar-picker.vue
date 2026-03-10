<template>
  <div :class="[classes.wrapper, { 'spr-opacity-60 spr-pointer-events-none': props.disabled }]" @mouseleave="emit('day-leave')">
    <!-- Header -->
    <div :class="classes.header">
      <!-- Tab buttons: show Month/Year in 'full' and 'month-year' mode; Year only in 'year-only' -->
      <div :class="classes.headerTabs">
        <TogeButton
          v-if="props.mode !== 'year-only'"
          variant="secondary"
          size="small"
          :aria-pressed="currentTab === 'tab-months'"
          @click="handleTabClick('tab-months')"
        >
          {{ MONTH_NAMES[currentMonth] }}
        </TogeButton>
        <TogeButton
          variant="secondary"
          size="small"
          :aria-pressed="currentTab === 'tab-years'"
          @click="handleTabClick('tab-years')"
        >
          {{ currentYear }}
        </TogeButton>
      </div>

      <!-- Prev/Next navigation -->
      <div :class="classes.headerNav">
        <!-- Calendar tab: prev/next month -->
        <template v-if="currentTab === 'tab-calendar'">
          <TogeButton
            variant="secondary"
            size="small"
            :has-icon="true"
            :disabled="isMinMonth"
            @click="handlePrevMonth"
          >
            <Icon icon="ph:caret-left" />
          </TogeButton>
          <TogeButton
            variant="secondary"
            size="small"
            :has-icon="true"
            :disabled="isMaxMonth"
            @click="handleNextMonth"
          >
            <Icon icon="ph:caret-right" />
          </TogeButton>
        </template>

        <!-- Year tab: prev/next page -->
        <template v-if="currentTab === 'tab-years'">
          <TogeButton
            variant="secondary"
            size="small"
            :has-icon="true"
            :disabled="yearPageIndex === 0"
            @click="yearPageIndex--"
          >
            <Icon icon="ph:caret-left" />
          </TogeButton>
          <TogeButton
            variant="secondary"
            size="small"
            :has-icon="true"
            :disabled="(yearPageIndex + 1) * YEARS_PER_PAGE >= yearsArray.length"
            @click="yearPageIndex++"
          >
            <Icon icon="ph:caret-right" />
          </TogeButton>
        </template>
      </div>
    </div>

    <!-- Body -->
    <div :class="classes.body">
      <!-- Calendar Tab (full mode only) -->
      <div v-if="currentTab === 'tab-calendar' && props.mode === 'full'" :class="classes.calendarGrid">
        <!-- Day headers -->
        <div
          v-for="dayName in DAY_NAMES"
          :key="dayName"
          :class="classes.dayHeaderCell"
        >
          {{ dayName }}
        </div>

        <!-- Day cells -->
        <template v-for="day in calendarDays" :key="day.fullDate">
          <div
            v-if="isWithinMinMaxYear(day.fullDate)"
            :class="[classes.dayCell, getDayCellClasses({
              isCurrentMonth: day.month === 'current',
              isSelected: day.fullDate === props.modelValue,
              isToday: isToday(day.fullDate),
              isDisabled: isDateDisabled(day.fullDate, props.disabledDates),
              isRestDay: isRestDay(day.fullDate, props.restDays ?? [], props.modelValue),
              isStartDate: props.startDate ? day.fullDate === props.startDate : undefined,
              isEndDate: props.endDate ? day.fullDate === props.endDate : undefined,
              isInRange: isInRange(day.fullDate),
            })]"
            @click="!isDateDisabled(day.fullDate, props.disabledDates) && !props.readonly ? handleDayClick(day) : undefined"
            @mouseenter="emit('day-hover', day.fullDate)"
          >
            <!-- Half range-fill behind endpoint circle -->
            <div
              v-if="hasActiveRange && day.fullDate === visualStart"
              :class="[classes.rangeHalfBg, 'spr-right-0']"
            />
            <div
              v-else-if="hasActiveRange && day.fullDate === visualEnd"
              :class="[classes.rangeHalfBg, 'spr-left-0']"
            />

            <!-- Endpoint circle (confirmed start or end) -->
            <div
              v-if="day.fullDate === props.startDate || day.fullDate === props.endDate"
              :class="classes.endpointCircle"
            >
              <span>{{ day.date }}</span>
              <div v-if="isToday(day.fullDate)" :class="classes.todayDot" />
            </div>

            <!-- Regular day content -->
            <template v-else>
              <span>{{ day.date }}</span>
              <div v-if="isToday(day.fullDate)" :class="classes.todayDot" />
            </template>
          </div>
          <div v-else />
        </template>
      </div>

      <!-- Months Tab -->
      <div v-if="currentTab === 'tab-months'" :class="classes.monthGrid">
        <div
          v-for="(monthName, idx) in MONTH_SHORT_NAMES"
          :key="idx"
          :class="[classes.monthCell, getMonthCellClasses({
            isCurrentMonth: idx === today.getMonth() && currentYear === today.getFullYear(),
            isSelected: idx === selectedMonthValue,
          })]"
          @click="!props.readonly ? handleMonthClick(idx) : undefined"
        >
          <span>{{ monthName }}</span>
          <div
            v-if="idx === today.getMonth() && currentYear === today.getFullYear()"
            :class="classes.currentPeriodDot"
          />
        </div>
      </div>

      <!-- Years Tab -->
      <div v-if="currentTab === 'tab-years'" :class="classes.yearGrid">
        <div
          v-for="year in currentYearPage"
          :key="year"
          :class="[classes.yearCell, getYearCellClasses({
            isCurrentYear: year === today.getFullYear(),
            isSelected: year === selectedYearValue,
          })]"
          @click="!props.readonly ? handleYearClick(year) : undefined"
        >
          <span>{{ year }}</span>
          <div
            v-if="year === today.getFullYear()"
            :class="classes.currentPeriodDot"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
import { Icon } from '@iconify/vue'
import type { DateCalendarPickerProps, DateCalendarPickerEmits } from './date-calendar-picker.types'
import { useDateCalendarPickerState } from './date-calendar-picker.state'
import { getCalendarClasses, getDayCellClasses, getMonthCellClasses, getYearCellClasses } from './date-calendar-picker.styles'
import TogeButton from '../../primitives/button/button.vue'

const props = withDefaults(defineProps<DateCalendarPickerProps>(), {
  modelValue: '',
  selectedMonth: undefined,
  selectedYear: undefined,
  selectedDay: undefined,
  minMaxYear: () => ({ min: 1900, max: new Date().getFullYear() }),
  restDays: () => [],
  disabledDates: undefined,
  disabled: false,
  readonly: false,
  mode: 'full',
  format: 'MM-DD-YYYY',
  startDate: undefined,
  endDate: undefined,
  hoveredDate: undefined,
  naked: false,
})

const emit = defineEmits<DateCalendarPickerEmits>()

defineSlots<{ default(props: {}): unknown }>()

const classes = computed(() => getCalendarClasses(props.naked))
const YEARS_PER_PAGE = 12

const {
  today,
  currentMonth,
  currentYear,
  prevMonth,
  nextMonth,
  calendarDays,
  buildYearsArray,
  isDateDisabled,
  isRestDay,
  isToday,
  MONTH_NAMES,
  MONTH_SHORT_NAMES,
  DAY_NAMES,
} = useDateCalendarPickerState(
  props.selectedMonth ?? props.modelValue ? parseMonthFromValue(props.modelValue, props.minMaxYear) : undefined,
  props.selectedYear ?? props.modelValue ? parseYearFromValue(props.modelValue) : undefined,
)

// Initialize currentMonth/currentYear from selectedMonth/selectedYear props if provided
if (props.selectedMonth !== undefined) currentMonth.value = props.selectedMonth
if (props.selectedYear !== undefined) currentYear.value = props.selectedYear

// Parse initial modelValue
if (props.modelValue) {
  const parsed = parseDate(props.modelValue)
  if (parsed) {
    currentMonth.value = parsed.month
    currentYear.value = parsed.year
  }
}

function parseDate(value: string): { year: number; month: number; day: number } | null {
  if (!value) return null
  const d = new Date(value)
  if (isNaN(d.getTime())) return null
  return { year: d.getFullYear(), month: d.getMonth(), day: d.getDate() }
}

function parseMonthFromValue(value: string, _minMax: { min: number; max: number }): number | undefined {
  const parsed = parseDate(value)
  return parsed?.month
}

function parseYearFromValue(value: string): number | undefined {
  const parsed = parseDate(value)
  return parsed?.year
}

// Current tab state — initializes based on mode
const initialTab = props.mode === 'year-only' ? 'tab-years' : props.mode === 'month-year' ? 'tab-months' : 'tab-calendar'
const currentTab = ref<'tab-calendar' | 'tab-months' | 'tab-years'>(initialTab)

// Year pagination
const yearPageIndex = ref(0)
const yearsArray = computed(() => buildYearsArray(props.minMaxYear.min, props.minMaxYear.max))
const currentYearPage = computed(() => {
  const start = yearPageIndex.value * YEARS_PER_PAGE
  return yearsArray.value.slice(start, start + YEARS_PER_PAGE)
})

// Min/max month constraints
const isMinMonth = computed(() => {
  return currentYear.value === props.minMaxYear.min && currentMonth.value === 0
})

const isMaxMonth = computed(() => {
  return currentYear.value === props.minMaxYear.max && currentMonth.value === 11
})

// Derived selected month/year from modelValue for highlighting
const selectedMonthValue = computed(() => {
  if (!props.modelValue) return undefined
  const parsed = parseDate(props.modelValue)
  return parsed?.month
})

const selectedYearValue = computed(() => {
  if (!props.modelValue) return undefined
  const parsed = parseDate(props.modelValue)
  return parsed?.year
})

function isWithinMinMaxYear(fullDate: string): boolean {
  const year = parseInt(fullDate.slice(0, 4), 10)
  return year >= props.minMaxYear.min && year <= props.minMaxYear.max
}

// Confirmed range endpoints (both start and end selected)
const visualStart = computed(() => {
  if (!props.startDate || !props.endDate) return null
  const s = new Date(props.startDate).getTime()
  const e = new Date(props.endDate).getTime()
  return s <= e ? props.startDate : props.endDate
})

const visualEnd = computed(() => {
  if (!props.startDate || !props.endDate) return null
  const s = new Date(props.startDate).getTime()
  const e = new Date(props.endDate).getTime()
  return s <= e ? props.endDate : props.startDate
})

const hasActiveRange = computed(() =>
  visualStart.value !== null && visualEnd.value !== null && visualStart.value !== visualEnd.value,
)

function isInRange(fullDate: string): boolean {
  const start = props.startDate
  const end = props.endDate
  const hovered = props.hoveredDate
  if (!start) return false
  const d = new Date(fullDate).getTime()
  const s = new Date(start).getTime()
  if (end) {
    const e = new Date(end).getTime()
    return d > s && d < e
  }
  if (hovered) {
    const h = new Date(hovered).getTime()
    if (h > s) return d > s && d < h
    if (h < s) return d > h && d < s
  }
  return false
}

function handlePrevMonth() {
  prevMonth()
  emit('prev-month')
}

function handleNextMonth() {
  nextMonth()
  emit('next-month')
}

function handleTabClick(tab: 'tab-calendar' | 'tab-months' | 'tab-years') {
  if (currentTab.value === tab && props.mode === 'full') {
    currentTab.value = 'tab-calendar'
  } else {
    currentTab.value = tab
  }
}

function handleDayClick(day: { date: number; month: 'current' | 'prev' | 'next'; fullDate: string }) {
  // Update displayed month/year if user clicks prev/next month day
  const d = new Date(day.fullDate)
  currentMonth.value = d.getMonth()
  currentYear.value = d.getFullYear()

  emit('update:modelValue', day.fullDate)
  emit('update:month', d.getMonth())
  emit('update:year', d.getFullYear())
  emit('update:day', d.getDate())

  // Return to calendar tab after month/year selection in full mode
  if (props.mode === 'full') {
    currentTab.value = 'tab-calendar'
  }
}

function handleMonthClick(monthIndex: number) {
  currentMonth.value = monthIndex
  emit('update:month', monthIndex)

  if (props.mode === 'full') {
    // Go back to calendar tab after selecting month
    currentTab.value = 'tab-calendar'
  } else if (props.mode === 'month-year') {
    // Emit a combined value: YYYY-MM-01 as ISO string
    const isoDate = `${currentYear.value}-${String(monthIndex + 1).padStart(2, '0')}-01`
    emit('update:modelValue', isoDate)
  }
}

function handleYearClick(year: number) {
  currentYear.value = year
  emit('update:year', year)

  if (props.mode === 'full' || props.mode === 'month-year') {
    currentTab.value = props.mode === 'month-year' ? 'tab-months' : 'tab-calendar'
  } else if (props.mode === 'year-only') {
    const isoDate = `${year}-01-01`
    emit('update:modelValue', isoDate)
  }
}

// Watch modelValue to sync calendar display
watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue) {
      const parsed = parseDate(newValue)
      if (parsed) {
        currentMonth.value = parsed.month
        currentYear.value = parsed.year
      }
    }
  },
)

// Watch selectedMonth/selectedYear props
watch(
  () => props.selectedMonth,
  (v) => { if (v !== undefined) currentMonth.value = v },
)

watch(
  () => props.selectedYear,
  (v) => { if (v !== undefined) currentYear.value = v },
)

// Watch minMaxYear changes to reset year page
watch(
  () => props.minMaxYear,
  () => { yearPageIndex.value = 0 },
  { deep: true },
)

// Watch mode changes to reset tab
watch(
  () => props.mode,
  (mode) => {
    currentTab.value = mode === 'year-only' ? 'tab-years' : mode === 'month-year' ? 'tab-months' : 'tab-calendar'
  },
)
</script>
