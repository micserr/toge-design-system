<template>
  <div :style="props.width ? { width: props.width } : {}">
    <Menu
      v-model:shown="isOpen"
      aria-id="month-year-picker-wrapper"
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
      <div :id="uniqueId" :class="classes.wrapper">
        <label v-if="props.label" :for="uniqueId" :class="classes.label">
          {{ props.label }}
        </label>

        <!-- Input trigger -->
        <div
          :class="classes.inputBase"
          @click="!props.disabled && !props.readonly ? (isOpen = !isOpen) : undefined"
        >
          <span :class="[classes.displayText, { [classes.placeholder]: !model }]">
            {{ model ? formatDisplayValue(model) : 'Select month & year' }}
          </span>
          <div :class="classes.iconWrapper">
            <Icon :class="classes.calendarIcon" icon="ph:calendar-blank" />
          </div>
        </div>
      </div>

      <template #popper>
        <div :class="classes.popperWrapper">
          <!-- Popper Header -->
          <div :class="classes.popperHeader">
            <!-- Tab buttons -->
            <div :class="classes.popperHeaderTabs">
              <button
                :class="[classes.tabBtn, currentTab === 'tab-months' ? classes.tabBtnActive : '']"
                type="button"
                @click="handleTabClick('tab-months')"
              >
                {{ selectedMonthName ?? 'Month' }}
              </button>
              <button
                :class="[classes.tabBtn, currentTab === 'tab-years' ? classes.tabBtnActive : '']"
                type="button"
                @click="handleTabClick('tab-years')"
              >
                {{ selectedYearDisplay ?? 'Year' }}
              </button>
            </div>

            <!-- Year pagination nav (only in year tab) -->
            <div v-if="currentTab === 'tab-years'" :class="classes.popperHeaderNav">
              <button
                :class="classes.navBtn"
                type="button"
                :disabled="yearPageIndex === 0"
                @click="yearPageIndex--"
              >
                <Icon icon="ph:caret-left" />
              </button>
              <button
                :class="classes.navBtn"
                type="button"
                :disabled="(yearPageIndex + 1) * YEARS_PER_PAGE >= yearsArray.length"
                @click="yearPageIndex++"
              >
                <Icon icon="ph:caret-right" />
              </button>
            </div>
          </div>

          <!-- Popper Body -->
          <div :class="classes.popperBody">
            <!-- Months Grid -->
            <div v-if="currentTab === 'tab-months'" :class="classes.monthGrid">
              <div
                v-for="(monthName, idx) in MONTH_SHORT_NAMES"
                :key="idx"
                :class="[classes.monthCell, getMonthCellClasses(idx === today.getMonth(), idx === selectedMonthIndex)]"
                @click="handleMonthClick(idx)"
              >
                <span>{{ monthName }}</span>
                <div v-if="idx === today.getMonth()" :class="classes.currentPeriodDot" />
              </div>
            </div>

            <!-- Years Grid -->
            <div v-if="currentTab === 'tab-years'" :class="classes.yearGrid">
              <div
                v-for="year in currentYearPage"
                :key="year"
                :class="[classes.yearCell, getYearCellClasses(year === today.getFullYear(), year === selectedYearIndex)]"
                @click="handleYearClick(year)"
              >
                <span>{{ year }}</span>
                <div v-if="year === today.getFullYear()" :class="classes.currentPeriodDot" />
              </div>
            </div>
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
import { ref, computed, watch } from 'vue'
import { Icon } from '@iconify/vue'
import { Menu } from 'floating-vue'
import 'floating-vue/dist/style.css'
import type { MonthYearPickerProps, MonthYearPickerEmits } from './month-year-picker.types'
import { getMonthYearPickerClasses, getMonthCellClasses, getYearCellClasses } from './month-year-picker.styles'

const props = withDefaults(defineProps<MonthYearPickerProps>(), {
  id: undefined,
  label: undefined,
  disabled: false,
  readonly: false,
  error: false,
  active: false,
  width: undefined,
  placement: 'bottom',
  popperStrategy: 'absolute',
  popperContainer: undefined,
  displayHelper: false,
  helperText: undefined,
  helperIcon: undefined,
  minMaxYear: () => ({ min: 1900, max: new Date().getFullYear() }),
  format: 'MM-YYYY',
})

const emit = defineEmits<MonthYearPickerEmits>()

defineSlots<{
  helperMessage(props: {}): unknown
}>()

const model = defineModel<string>({ default: '' })

const today = new Date()
const isOpen = ref(false)
const currentTab = ref<'tab-months' | 'tab-years'>('tab-months')
const uniqueId = ref(props.id ?? 'myp-' + Math.random().toString(36).slice(2))

const YEARS_PER_PAGE = 12
const yearPageIndex = ref(0)

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

const MONTH_SHORT_NAMES = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

// Internal selected state (separate from model — model is the committed value)
const selectedMonthIndex = ref<number | undefined>(undefined)
const selectedYearIndex = ref<number | undefined>(undefined)

// Initialize from existing modelValue
function parseModelValue(value: string) {
  if (!value) return
  // Try to parse YYYY-MM-DD or YYYY-MM
  const isoMatch = value.match(/^(\d{4})-(\d{2})/)
  if (isoMatch) {
    selectedYearIndex.value = parseInt(isoMatch[1], 10)
    selectedMonthIndex.value = parseInt(isoMatch[2], 10) - 1
    return
  }
  // Try MM-YYYY format
  const mmYyyy = value.match(/^(\d{2})-(\d{4})$/)
  if (mmYyyy) {
    selectedMonthIndex.value = parseInt(mmYyyy[1], 10) - 1
    selectedYearIndex.value = parseInt(mmYyyy[2], 10)
    return
  }
}

parseModelValue(model.value)

const popperContainerAttr = computed(() =>
  props.popperContainer ? props.popperContainer : `#${uniqueId.value}`,
)

const classes = computed(() =>
  getMonthYearPickerClasses({
    disabled: props.disabled,
    readonly: props.readonly,
    error: props.error,
    active: props.active,
    isOpen: isOpen.value,
  }),
)

const yearsArray = computed(() => {
  const { min, max } = props.minMaxYear
  return Array.from({ length: max - min + 1 }, (_, i) => min + i)
})

const currentYearPage = computed(() => {
  const start = yearPageIndex.value * YEARS_PER_PAGE
  return yearsArray.value.slice(start, start + YEARS_PER_PAGE)
})

const selectedMonthName = computed(() =>
  selectedMonthIndex.value !== undefined ? MONTH_SHORT_NAMES[selectedMonthIndex.value] : undefined,
)

const selectedYearDisplay = computed(() =>
  selectedYearIndex.value !== undefined ? String(selectedYearIndex.value) : undefined,
)

function formatDisplayValue(value: string): string {
  if (!value) return ''
  parseModelValue(value)
  if (selectedMonthIndex.value !== undefined && selectedYearIndex.value !== undefined) {
    const format = props.format ?? 'MM-YYYY'
    const mm = String(selectedMonthIndex.value + 1).padStart(2, '0')
    const yyyy = String(selectedYearIndex.value)
    const mmmm = MONTH_NAMES[selectedMonthIndex.value]
    const mmm = MONTH_SHORT_NAMES[selectedMonthIndex.value]
    return format
      .replace('MMMM', mmmm)
      .replace('MMM', mmm)
      .replace('MM', mm)
      .replace('YYYY', yyyy)
  }
  return value
}

function buildISOValue(): string {
  if (selectedMonthIndex.value === undefined || selectedYearIndex.value === undefined) return ''
  const mm = String(selectedMonthIndex.value + 1).padStart(2, '0')
  const yyyy = String(selectedYearIndex.value)
  return `${yyyy}-${mm}-01`
}

function emitValue() {
  const isoValue = buildISOValue()
  if (!isoValue) return
  model.value = isoValue
  emit('change', isoValue)
}

function handleTabClick(tab: 'tab-months' | 'tab-years') {
  currentTab.value = tab
}

function handleMonthClick(monthIdx: number) {
  selectedMonthIndex.value = monthIdx
  // If we have a year already, emit; otherwise go to year tab
  if (selectedYearIndex.value !== undefined) {
    emitValue()
    isOpen.value = false
  } else {
    currentTab.value = 'tab-years'
  }
}

function handleYearClick(year: number) {
  selectedYearIndex.value = year
  // If we have a month already, emit; otherwise go to months tab
  if (selectedMonthIndex.value !== undefined) {
    emitValue()
    isOpen.value = false
  } else {
    currentTab.value = 'tab-months'
  }
}

// When popper closes, reset tab to months
watch(isOpen, (open) => {
  if (!open) {
    currentTab.value = 'tab-months'
  }
})

// Watch modelValue for external changes
watch(
  () => model.value,
  (v) => { if (v) parseModelValue(v) },
)

// Watch minMaxYear changes to reset year page
watch(
  () => props.minMaxYear,
  () => { yearPageIndex.value = 0 },
  { deep: true },
)
</script>
