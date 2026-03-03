<template>
  <div :style="props.width ? { width: props.width } : {}">
    <Menu
      v-model:shown="isOpen"
      aria-id="date-range-picker-wrapper"
      distance="4"
      :placement="props.placement ?? 'bottom'"
      :triggers="[]"
      :popper-hide-triggers="[]"
      :auto-hide="false"
      :disabled="props.disabled || props.readonly"
      :container="popperContainerAttr"
      :strategy="props.popperStrategy ?? 'absolute'"
      :delay="0"
      style="position: relative; width: 100%"
    >
      <div :id="uniqueId" :class="classes.wrapper">
        <label v-if="props.label" :for="uniqueId" :class="classes.label">
          {{ props.label }}
        </label>

        <!-- Dual input row -->
        <div :class="classes.inputRow">
          <!-- Start date input -->
          <div
            :class="[classes.inputBase, activeInput === 'start' && isOpen ? 'spr-border-[1.5px] spr-border-solid spr-border-kangkong-700' : '']"
            @click="!props.disabled && !props.readonly ? openForStart() : undefined"
          >
            <span :class="[classes.displayText, { [classes.placeholder]: !model.startDate }]">
              {{ model.startDate ? formatDisplayDate(model.startDate) : 'Start date' }}
            </span>
            <div :class="classes.iconWrapper">
              <Icon :class="classes.calendarIcon" icon="ph:calendar-blank" />
            </div>
          </div>

          <!-- Separator -->
          <span :class="classes.separator">{{ props.separator ?? 'to' }}</span>

          <!-- End date input -->
          <div
            :class="[classes.inputBase, activeInput === 'end' && isOpen ? 'spr-border-[1.5px] spr-border-solid spr-border-kangkong-700' : '']"
            @click="!props.disabled && !props.readonly ? openForEnd() : undefined"
          >
            <span :class="[classes.displayText, { [classes.placeholder]: !model.endDate }]">
              {{ model.endDate ? formatDisplayDate(model.endDate) : 'End date' }}
            </span>
            <div :class="classes.iconWrapper">
              <Icon :class="classes.calendarIcon" icon="ph:calendar-blank" />
            </div>
          </div>
        </div>
      </div>

      <template #popper>
        <!-- Dual-panel calendar -->
        <div :class="classes.popperPanel">
          <!-- Left panel (start month) -->
          <div class="spr-p-4">
            <CalendarPanel
              :current-month="leftMonth"
              :current-year="leftYear"
              :min-max-year="props.minMaxYear ?? { min: 1900, max: new Date().getFullYear() }"
              :rest-days="props.restDays ?? []"
              :disabled-dates="props.disabledDates"
              :start-date="model.startDate"
              :end-date="model.endDate"
              :hovered-date="hoveredDate"
              :selection-step="selectionStep"
              @day-click="handleDayClick"
              @day-hover="hoveredDate = $event"
              @day-leave="hoveredDate = null"
              @prev-month="navigateLeft('prev')"
              @next-month="navigateLeft('next')"
            />
          </div>

          <div :class="classes.panelDivider" />

          <!-- Right panel (end month) -->
          <div class="spr-p-4">
            <CalendarPanel
              :current-month="rightMonth"
              :current-year="rightYear"
              :min-max-year="props.minMaxYear ?? { min: 1900, max: new Date().getFullYear() }"
              :rest-days="props.restDays ?? []"
              :disabled-dates="props.disabledDates"
              :start-date="model.startDate"
              :end-date="model.endDate"
              :hovered-date="hoveredDate"
              :selection-step="selectionStep"
              @day-click="handleDayClick"
              @day-hover="hoveredDate = $event"
              @day-leave="hoveredDate = null"
              @prev-month="navigateRight('prev')"
              @next-month="navigateRight('next')"
            />
          </div>
        </div>
      </template>
    </Menu>

    <div v-if="props.displayHelper" :class="classes.helper">
      <slot name="helperMessage">
        <Icon v-if="props.helperIcon" class="spr-h-5 spr-min-h-5 spr-w-5 spr-min-w-5" :icon="props.helperIcon" />
        <span>{{ props.helperText }}</span>
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, defineComponent, h } from 'vue'
import { Icon } from '@iconify/vue'
import { Menu } from 'floating-vue'
import 'floating-vue/dist/style.css'
import type { DateRangePickerProps, DateRangePickerEmits, DateRange } from './date-range-picker.types'
import { getDateRangePickerClasses, getRangeDayClasses } from './date-range-picker.styles'
import { useDateRangePickerState } from './date-range-picker.state'
import type { DisabledDates, RestDayType, CalendarDay } from '../date-calendar-picker/date-calendar-picker.types'
import { useDateCalendarPickerState } from '../date-calendar-picker/date-calendar-picker.state'

// Internal CalendarPanel component to avoid duplicating template logic
const CalendarPanel = defineComponent({
  name: 'RangeCalendarPanel',
  props: {
    currentMonth: { type: Number, required: true },
    currentYear: { type: Number, required: true },
    minMaxYear: { type: Object as () => { min: number; max: number }, required: true },
    restDays: { type: Array as () => RestDayType[], default: () => [] },
    disabledDates: { type: Object as () => DisabledDates | undefined, default: undefined },
    startDate: { type: String, default: '' },
    endDate: { type: String, default: '' },
    hoveredDate: { type: String as () => string | null, default: null },
    selectionStep: { type: String as () => 'start' | 'end', default: 'start' },
  },
  emits: ['dayClick', 'dayHover', 'dayLeave', 'prevMonth', 'nextMonth'],
  setup(panelProps, { emit: panelEmit }) {
    const state = useDateCalendarPickerState(panelProps.currentMonth, panelProps.currentYear)

    // Sync when props change
    const syncedMonth = computed(() => panelProps.currentMonth)
    const syncedYear = computed(() => panelProps.currentYear)

    const TODAY = new Date()
    const MONTH_NAMES = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ]
    const DAY_NAMES = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

    const calendarDays = computed((): CalendarDay[] => {
      const year = panelProps.currentYear
      const month = panelProps.currentMonth
      const firstDay = new Date(year, month, 1).getDay()
      const daysInMonth = new Date(year, month + 1, 0).getDate()
      const daysInPrevMonth = new Date(year, month, 0).getDate()
      const days: CalendarDay[] = []
      for (let i = firstDay - 1; i >= 0; i--) {
        const d = daysInPrevMonth - i
        const m = month === 0 ? 11 : month - 1
        const y = month === 0 ? year - 1 : year
        days.push({ date: d, month: 'prev', fullDate: `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}` })
      }
      for (let d = 1; d <= daysInMonth; d++) {
        days.push({ date: d, month: 'current', fullDate: `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}` })
      }
      const remaining = 42 - days.length
      for (let d = 1; d <= remaining; d++) {
        const m = month === 11 ? 0 : month + 1
        const y = month === 11 ? year + 1 : year
        days.push({ date: d, month: 'next', fullDate: `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}` })
      }
      return days
    })

    function isInRange(fullDate: string): boolean {
      const start = panelProps.startDate
      const end = panelProps.endDate
      const hovered = panelProps.hoveredDate
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

    function isToday(fullDate: string): boolean {
      const d = new Date(fullDate)
      return d.getFullYear() === TODAY.getFullYear() && d.getMonth() === TODAY.getMonth() && d.getDate() === TODAY.getDate()
    }

    function isDateDisabled(fullDate: string): boolean {
      const dd = panelProps.disabledDates
      if (!dd) return false
      const date = new Date(fullDate)
      const todayStart = new Date()
      todayStart.setHours(0, 0, 0, 0)
      if (dd.from && dd.to) {
        const from = new Date(dd.from)
        const to = new Date(dd.to)
        if (date >= from && date <= to) return true
      }
      if (dd.pastDates) {
        if (typeof dd.pastDates === 'boolean' && date < todayStart) return true
        if (typeof dd.pastDates === 'string' && date < new Date(dd.pastDates)) return true
      }
      if (dd.futureDates) {
        const todayEnd = new Date()
        todayEnd.setHours(23, 59, 59, 999)
        if (typeof dd.futureDates === 'boolean' && date > todayEnd) return true
        if (typeof dd.futureDates === 'string' && date > new Date(dd.futureDates)) return true
      }
      if (dd.weekends && (date.getDay() === 0 || date.getDay() === 6)) return true
      if (dd.weekdays && date.getDay() > 0 && date.getDay() < 6) return true
      if (dd.selectedDates?.length) {
        if (dd.selectedDates.some((sd) => {
          const sdd = new Date(sd)
          return sdd.getFullYear() === date.getFullYear() && sdd.getMonth() === date.getMonth() && sdd.getDate() === date.getDate()
        })) return true
      }
      return false
    }

    const REST_DAY_INDEX: Record<string, number> = { su: 0, mo: 1, tu: 2, we: 3, th: 4, fr: 5, sa: 6 }
    function isRestDay(fullDate: string): boolean {
      if (!panelProps.restDays.length) return false
      const date = new Date(fullDate)
      return panelProps.restDays.some((rd) => REST_DAY_INDEX[rd] === date.getDay())
    }

    return () => {
      return h('div', { class: 'spr-min-w-[280px]' }, [
        // Header
        h('div', {
          class: 'spr-flex spr-justify-between spr-items-center spr-mb-2 spr-pb-2 spr-border-b spr-border-solid spr-border-mushroom-200',
        }, [
          h('span', { class: 'spr-body-md-semibold spr-text-color-strong' }, `${MONTH_NAMES[panelProps.currentMonth]} ${panelProps.currentYear}`),
          h('div', { class: 'spr-flex spr-gap-1' }, [
            h('button', {
              class: 'spr-cursor-pointer spr-rounded-border-radius-md spr-px-2 spr-py-1 spr-border spr-border-solid spr-border-mushroom-200 hover:spr-background-color-hover',
              type: 'button',
              onClick: () => panelEmit('prevMonth'),
            }, h(Icon, { icon: 'ph:caret-left' })),
            h('button', {
              class: 'spr-cursor-pointer spr-rounded-border-radius-md spr-px-2 spr-py-1 spr-border spr-border-solid spr-border-mushroom-200 hover:spr-background-color-hover',
              type: 'button',
              onClick: () => panelEmit('nextMonth'),
            }, h(Icon, { icon: 'ph:caret-right' })),
          ]),
        ]),
        // Day name headers
        h('div', { class: 'spr-grid spr-grid-cols-7 spr-mb-1' },
          DAY_NAMES.map((dn) =>
            h('div', { class: 'spr-text-center spr-body-xs-semibold spr-text-color-supporting spr-py-1', key: dn }, dn),
          ),
        ),
        // Calendar grid
        h('div', { class: 'spr-grid spr-grid-cols-7' },
          calendarDays.value.map((day) => {
            const withinYear = parseInt(day.fullDate.slice(0, 4), 10) >= panelProps.minMaxYear.min &&
              parseInt(day.fullDate.slice(0, 4), 10) <= panelProps.minMaxYear.max
            if (!withinYear) return h('div', { key: day.fullDate })

            const isStart = day.fullDate === panelProps.startDate
            const isEnd = day.fullDate === panelProps.endDate
            const inRange = isInRange(day.fullDate)
            const disabled = isDateDisabled(day.fullDate)
            const restDay = isRestDay(day.fullDate)
            const today = isToday(day.fullDate)
            const isCurrentMonth = day.month === 'current'

            const cellClass = [
              'spr-relative spr-box-border spr-flex spr-h-[40px] spr-items-center spr-justify-center spr-p-2 spr-transition spr-duration-150',
              getRangeDayClasses({ isCurrentMonth, isStartDate: isStart, isEndDate: isEnd, isInRange: inRange, isToday: today, isDisabled: disabled, isRestDay: restDay }),
            ]

            return h('div', {
              key: day.fullDate,
              class: cellClass,
              onClick: !disabled ? () => panelEmit('dayClick', day.fullDate) : undefined,
              onMouseenter: () => panelEmit('dayHover', day.fullDate),
              onMouseleave: () => panelEmit('dayLeave'),
            }, [
              h('span', {}, String(day.date)),
              today ? h('div', { class: 'spr-absolute spr-bottom-1 spr-m-auto spr-h-1 spr-w-1 spr-rounded-full spr-bg-green-600' }) : null,
            ])
          }),
        ),
      ])
    }
  },
})

// ─── Main component ────────────────────────────────────────────────────────────

const props = withDefaults(defineProps<DateRangePickerProps>(), {
  id: undefined,
  label: undefined,
  disabled: false,
  readonly: false,
  error: false,
  active: false,
  separator: 'to',
  width: undefined,
  format: 'MM-DD-YYYY',
  placement: 'bottom',
  popperStrategy: 'absolute',
  popperContainer: undefined,
  displayHelper: false,
  helperText: undefined,
  helperIcon: undefined,
  minMaxYear: () => ({ min: 1900, max: new Date().getFullYear() }),
  restDays: () => [],
  disabledDates: undefined,
  allowSameDay: false,
  maxRange: undefined,
  minRange: 1,
})

const emit = defineEmits<DateRangePickerEmits>()

defineSlots<{
  helperMessage(props: {}): unknown
}>()

const model = defineModel<DateRange>({ default: () => ({ startDate: '', endDate: '' }) })

const isOpen = ref(false)
const activeInput = ref<'start' | 'end'>('start')
const selectionStep = ref<'start' | 'end'>('start')
const hoveredDate = ref<string | null>(null)
const uniqueId = ref(props.id ?? 'drp-' + Math.random().toString(36).slice(2))

// Left panel (start calendar)
const leftMonth = ref(new Date().getMonth())
const leftYear = ref(new Date().getFullYear())

// Right panel (end calendar — one month ahead)
const rightMonth = ref(leftMonth.value === 11 ? 0 : leftMonth.value + 1)
const rightYear = ref(leftMonth.value === 11 ? leftYear.value + 1 : leftYear.value)

// Initialize from existing model value
if (model.value.startDate) {
  const d = new Date(model.value.startDate)
  if (!isNaN(d.getTime())) {
    leftMonth.value = d.getMonth()
    leftYear.value = d.getFullYear()
  }
}
if (model.value.endDate) {
  const d = new Date(model.value.endDate)
  if (!isNaN(d.getTime())) {
    rightMonth.value = d.getMonth()
    rightYear.value = d.getFullYear()
  }
} else {
  // Default right panel to next month from left
  if (leftMonth.value === 11) {
    rightMonth.value = 0
    rightYear.value = leftYear.value + 1
  } else {
    rightMonth.value = leftMonth.value + 1
    rightYear.value = leftYear.value
  }
}

const popperContainerAttr = computed(() =>
  props.popperContainer ? props.popperContainer : `#${uniqueId.value}`,
)

const classes = computed(() =>
  getDateRangePickerClasses({
    disabled: props.disabled,
    readonly: props.readonly,
    error: props.error,
    active: props.active,
    isOpen: isOpen.value,
  }),
)

function formatDisplayDate(value: string): string {
  if (!value) return ''
  const d = new Date(value)
  if (isNaN(d.getTime())) return value
  const format = props.format ?? 'MM-DD-YYYY'
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  const yyyy = String(d.getFullYear())
  return format.replace('MM', mm).replace('DD', dd).replace('YYYY', yyyy)
}

function openForStart() {
  activeInput.value = 'start'
  selectionStep.value = 'start'
  isOpen.value = true
}

function openForEnd() {
  activeInput.value = 'end'
  selectionStep.value = 'end'
  isOpen.value = true
}

function handleDayClick(fullDate: string) {
  if (selectionStep.value === 'start') {
    // Selecting start date — reset end date
    model.value = { startDate: fullDate, endDate: '' }
    selectionStep.value = 'end'
    activeInput.value = 'end'
    emit('range-change', { startDate: fullDate, endDate: '', isValid: false })
  } else {
    // Selecting end date
    const start = model.value.startDate
    const end = fullDate

    // If end is before start, swap
    if (new Date(end).getTime() < new Date(start).getTime()) {
      model.value = { startDate: end, endDate: start }
    } else {
      model.value = { startDate: start, endDate: end }
    }

    const isValid = validateCurrentRange(model.value.startDate, model.value.endDate)
    emit('update:modelValue', model.value)
    emit('range-change', { ...model.value, isValid })

    // Close after selecting end date
    selectionStep.value = 'start'
    setTimeout(() => { isOpen.value = false }, 100)
  }
}

function validateCurrentRange(startDate: string, endDate: string): boolean {
  if (!startDate || !endDate) return false
  const start = new Date(startDate).getTime()
  const end = new Date(endDate).getTime()
  if (end < start) return false
  if (!props.allowSameDay && end === start) return false
  const dayDiff = Math.round((end - start) / (1000 * 60 * 60 * 24))
  if (props.minRange !== undefined && dayDiff < props.minRange) return false
  if (props.maxRange !== undefined && dayDiff > props.maxRange) return false
  return true
}

function navigateLeft(direction: 'prev' | 'next') {
  if (direction === 'prev') {
    if (leftMonth.value === 0) {
      leftMonth.value = 11
      leftYear.value--
    } else {
      leftMonth.value--
    }
  } else {
    if (leftMonth.value === 11) {
      leftMonth.value = 0
      leftYear.value++
    } else {
      leftMonth.value++
    }
  }
}

function navigateRight(direction: 'prev' | 'next') {
  if (direction === 'prev') {
    if (rightMonth.value === 0) {
      rightMonth.value = 11
      rightYear.value--
    } else {
      rightMonth.value--
    }
  } else {
    if (rightMonth.value === 11) {
      rightMonth.value = 0
      rightYear.value++
    } else {
      rightMonth.value++
    }
  }
}
</script>
