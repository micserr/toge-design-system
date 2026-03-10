<template>
  <div :id="uniqueId" :style="props.width ? { width: props.width } : {}">
    <!-- Label outside Menu so popover anchors to inputs row only -->
    <label
      v-if="props.label"
      class="spr-body-sm-regular spr-text-color-strong spr-block spr-mb-size-spacing-4xs"
    >
      {{ props.label }}
    </label>

    <Menu
      v-model:shown="isOpen"
      aria-id="date-range-picker-wrapper"
      popper-class="spr-picker-popper"
      distance="4"
      :placement="props.placement ?? 'bottom'"
      :triggers="[]"
      :popper-hide-triggers="[]"
      :auto-hide="true"
      :disabled="props.disabled || props.readonly"
      :container="popperContainerAttr"
      :strategy="props.popperStrategy ?? 'absolute'"
      :delay="0"
      style="position: relative; width: 100%"
    >
      <!-- Dual input row -->
      <div class="spr-flex spr-w-full spr-items-center spr-gap-2">
        <!-- Start date input -->
        <div
          class="spr-flex-1"
          :class="{ 'spr-cursor-pointer': !props.disabled && !props.readonly, 'spr-cursor-not-allowed': props.disabled }"
          @click="!props.disabled && !props.readonly ? openForStart() : undefined"
        >
          <TogeInput
            :model-value="model.startDate ? formatDisplayDate(model.startDate) : ''"
            placeholder="Start date"
            :disabled="props.disabled"
            :readonly="true"
            :error="props.error"
            style="pointer-events: none"
          >
            <template #icon>
              <Icon icon="ph:calendar-blank" />
            </template>
          </TogeInput>
        </div>

        <!-- Separator -->
        <span :class="classes.separator">{{ props.separator }}</span>

        <!-- End date input -->
        <div
          class="spr-flex-1"
          :class="{ 'spr-cursor-pointer': !props.disabled && !props.readonly, 'spr-cursor-not-allowed': props.disabled }"
          @click="!props.disabled && !props.readonly ? openForEnd() : undefined"
        >
          <TogeInput
            :model-value="model.endDate ? formatDisplayDate(model.endDate) : ''"
            placeholder="End date"
            :disabled="props.disabled"
            :readonly="true"
            :error="props.error"
            style="pointer-events: none"
          >
            <template #icon>
              <Icon icon="ph:calendar-blank" />
            </template>
          </TogeInput>
        </div>
      </div>

      <template #popper>
        <div :class="classes.popperPanel">
          <TogeDateCalendarPicker
            mode="full"
            :naked="true"
            :selected-month="leftMonth"
            :selected-year="leftYear"
            :start-date="model.startDate"
            :end-date="model.endDate"
            :hovered-date="hoveredDate"
            :min-max-year="props.minMaxYear ?? { min: 1900, max: new Date().getFullYear() }"
            :rest-days="props.restDays ?? []"
            :disabled-dates="props.disabledDates"
            @update:model-value="handleDayClick"
            @day-hover="hoveredDate = $event"
            @day-leave="hoveredDate = null"
            @prev-month="navigateLeft('prev')"
            @next-month="navigateLeft('next')"
          />

          <div class="spr-self-stretch spr-flex-shrink-0 spr-w-[1px] spr-bg-mushroom-200" />

          <TogeDateCalendarPicker
            mode="full"
            :naked="true"
            :selected-month="rightMonth"
            :selected-year="rightYear"
            :start-date="model.startDate"
            :end-date="model.endDate"
            :hovered-date="hoveredDate"
            :min-max-year="props.minMaxYear ?? { min: 1900, max: new Date().getFullYear() }"
            :rest-days="props.restDays ?? []"
            :disabled-dates="props.disabledDates"
            @update:model-value="handleDayClick"
            @day-hover="hoveredDate = $event"
            @day-leave="hoveredDate = null"
            @prev-month="navigateRight('prev')"
            @next-month="navigateRight('next')"
          />
        </div>
      </template>
    </Menu>

    <!-- Helper rendered outside Menu so popover anchors to inputs only -->
    <div
      v-if="props.showHelper"
      class="spr-flex spr-flex-row spr-items-start spr-justify-between spr-w-full spr-mt-1"
    >
      <div :class="['spr-body-sm-regular spr-flex spr-items-center spr-gap-size-spacing-5xs spr-flex-1', props.error ? 'spr-text-color-danger-base' : 'spr-text-color-supporting']">
        <Icon v-if="props.helperIcon" class="spr-h-5 spr-min-h-5 spr-w-5 spr-min-w-5" :icon="props.helperIcon" />
        <span>{{ props.helperText }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'
import { Menu } from 'floating-vue'
import 'floating-vue/dist/style.css'
import type { DateRangePickerProps, DateRangePickerEmits, DateRange } from './date-range-picker.types'
import { getDateRangePickerClasses } from './date-range-picker.styles'
import TogeInput from '../../primitives/input/input.vue'
import TogeDateCalendarPicker from '../date-calendar-picker/date-calendar-picker.vue'

const props = withDefaults(defineProps<DateRangePickerProps>(), {
  id: undefined,
  label: undefined,
  disabled: false,
  readonly: false,
  error: false,
  separator: 'to',
  width: undefined,
  format: 'MM-DD-YYYY',
  placement: 'bottom',
  popperStrategy: 'absolute',
  popperContainer: undefined,
  showHelper: false,
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

const model = defineModel<DateRange>({ default: () => ({ startDate: '', endDate: '' }) })

const isOpen = ref(false)
const selectionStep = ref<'start' | 'end'>('start')
const hoveredDate = ref<string | null>(null)
const uniqueId = ref(props.id ?? 'drp-' + Math.random().toString(36).slice(2))

const leftMonth = ref(new Date().getMonth())
const leftYear = ref(new Date().getFullYear())
const rightMonth = ref(leftMonth.value === 11 ? 0 : leftMonth.value + 1)
const rightYear = ref(leftMonth.value === 11 ? leftYear.value + 1 : leftYear.value)

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

const classes = getDateRangePickerClasses()

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
  selectionStep.value = 'start'
  if (model.value.startDate) {
    const d = new Date(model.value.startDate)
    leftMonth.value = d.getMonth()
    leftYear.value = d.getFullYear()
    // right panel = next month after left
    if (leftMonth.value === 11) { rightMonth.value = 0; rightYear.value = leftYear.value + 1 }
    else { rightMonth.value = leftMonth.value + 1; rightYear.value = leftYear.value }
  }
  isOpen.value = true
}

function openForEnd() {
  selectionStep.value = model.value.startDate ? 'end' : 'start'
  if (model.value.endDate) {
    const d = new Date(model.value.endDate)
    rightMonth.value = d.getMonth()
    rightYear.value = d.getFullYear()
    // left panel = month before right
    if (rightMonth.value === 0) { leftMonth.value = 11; leftYear.value = rightYear.value - 1 }
    else { leftMonth.value = rightMonth.value - 1; leftYear.value = rightYear.value }
  } else if (model.value.startDate) {
    const d = new Date(model.value.startDate)
    leftMonth.value = d.getMonth()
    leftYear.value = d.getFullYear()
    if (leftMonth.value === 11) { rightMonth.value = 0; rightYear.value = leftYear.value + 1 }
    else { rightMonth.value = leftMonth.value + 1; rightYear.value = leftYear.value }
  }
  isOpen.value = true
}

function handleDayClick(fullDate: string) {
  if (selectionStep.value === 'start') {
    // First click: set start, clear end, wait for second click
    model.value = { startDate: fullDate, endDate: '' }
    selectionStep.value = 'end'
    hoveredDate.value = null
    emit('range-change', { startDate: fullDate, endDate: '', isValid: false })
  } else {
    // Second click: smart-sort so earlier date is always start
    const a = new Date(model.value.startDate).getTime()
    const b = new Date(fullDate).getTime()
    const sorted = a <= b
      ? { startDate: model.value.startDate, endDate: fullDate }
      : { startDate: fullDate, endDate: model.value.startDate }
    model.value = { ...sorted }
    hoveredDate.value = null
    selectionStep.value = 'start'
    const isValid = validateCurrentRange(sorted.startDate, sorted.endDate)
    emit('range-change', { ...sorted, isValid })
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
    if (leftMonth.value === 0) { leftMonth.value = 11; leftYear.value-- }
    else leftMonth.value--
  } else {
    if (leftMonth.value === 11) { leftMonth.value = 0; leftYear.value++ }
    else leftMonth.value++
  }
}

function navigateRight(direction: 'prev' | 'next') {
  if (direction === 'prev') {
    if (rightMonth.value === 0) { rightMonth.value = 11; rightYear.value-- }
    else rightMonth.value--
  } else {
    if (rightMonth.value === 11) { rightMonth.value = 0; rightYear.value++ }
    else rightMonth.value++
  }
}
</script>

