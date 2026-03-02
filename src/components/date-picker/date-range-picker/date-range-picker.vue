<template>
  <div>
    <Menu
      v-model:shown="datePopperState"
      aria-id="date-range-picker-wrapper"
      distance="4"
      :placement="finalPlacement"
      :triggers="[]"
      :popper-hide-triggers="[]"
      :auto-hide="false"
      :disabled="isDateRangePickerPopperDisabled"
      :container="props.popperContainer ? props.popperContainer : `#${props.id}`"
      :reference="activeInputRef"
      :strategy="
        props.popperStrategy === 'fixed' || props.popperStrategy === 'absolute' ? props.popperStrategy : 'absolute'
      "
      :delay="0"
      :auto-placement="!isUsingCustomSlot"
      :style="{
        position: props.wrapperPosition,
        width: props.width,
      }"
    >
      <div :id="props.id" class="spr-grid spr-gap-size-spacing-4xs">
        <label v-if="props.label" :for="props.id" :class="dateRangePickerClasses.labelClasses">
          {{ props.label }}
        </label>

        <!-- Date Range Input Container -->
        <div class="spr-flex spr-w-full spr-items-center spr-gap-2">
          <slot :handle-click="handleCustomComponentClick">
            <!-- fallback: original input fields -->
            <!-- Start Date Input -->
            <div
              ref="startDateContainerRef"
              :class="['spr-flex-1', dateRangePickerClasses.dateRangePickerBaseInputClasses]"
              @click.stop="handleStartDateClick"
            >
              <div class="spr-flex spr-h-full spr-items-center spr-gap-1.5">
                <input
                  :id="`${props.id}-start-month`"
                  ref="startMonthInputRef"
                  v-model="startMonthInput"
                  :class="[
                    'spr-w-[38px] spr-min-w-[38px] spr-uppercase',
                    dateRangePickerClasses.dateRangePickerInputClasses,
                  ]"
                  type="text"
                  placeholder="MMM"
                  maxlength="3"
                  :disabled="props.disabled"
                  :readonly="props.readonly"
                  @input="handleStartMonthInput"
                  @keyup="handleStartMonthInput"
                  @keydown="handleBackspace('start-month', $event)"
                />
                <span class="spr-text-color-strong spr-font-size-200 spr-text-color-weak">/</span>
                <input
                  :id="`${props.id}-start-date`"
                  ref="startDateInputRef"
                  v-model="startDateInput"
                  :class="[
                    'spr-w-[24px] spr-min-w-[24px] spr-text-center',
                    dateRangePickerClasses.dateRangePickerInputClasses,
                  ]"
                  type="text"
                  placeholder="DD"
                  maxlength="2"
                  :disabled="props.disabled"
                  :readonly="props.readonly"
                  @input="handleStartDateInput"
                  @keyup="handleStartDateInput"
                  @keydown="handleBackspace('start-date', $event)"
                />
                <span class="spr-text-color-strong spr-font-size-200 spr-text-color-weak">/</span>
                <input
                  :id="`${props.id}-start-year`"
                  ref="startYearInputRef"
                  v-model="startYearInput"
                  :class="['spr-w-[42px] spr-min-w-[42px]', dateRangePickerClasses.dateRangePickerInputClasses]"
                  type="text"
                  placeholder="YYYY"
                  maxlength="4"
                  :disabled="props.disabled"
                  :readonly="props.readonly"
                  @input="handleStartYearInput"
                  @keyup="handleStartYearInput"
                  @keydown="handleBackspace('start-year', $event)"
                />
              </div>
              <div class="spr-flex spr-items-center spr-justify-center">
                <Icon class="spr-text-color-supporting spr-h-4 spr-w-4" icon="ph:calendar-blank" />
              </div>
            </div>
            <!-- Separator -->
            <span class="spr-text-color-strong spr-font-size-200 spr-text-color-weak">{{ props.separator }}</span>
            <!-- End Date Input -->
            <div
              ref="endDateContainerRef"
              :class="['spr-flex-1', dateRangePickerClasses.dateRangePickerBaseInputClasses]"
              @click.stop="handleEndDateClick"
            >
              <div class="spr-flex spr-h-full spr-items-center spr-gap-1.5">
                <input
                  :id="`${props.id}-end-month`"
                  ref="endMonthInputRef"
                  v-model="endMonthInput"
                  :class="[
                    'spr-w-[38px] spr-min-w-[38px] spr-uppercase',
                    dateRangePickerClasses.dateRangePickerInputClasses,
                  ]"
                  type="text"
                  placeholder="MMM"
                  maxlength="3"
                  :disabled="props.disabled"
                  :readonly="props.readonly"
                  @input="handleEndMonthInput"
                  @keyup="handleEndMonthInput"
                  @keydown="handleBackspace('end-month', $event)"
                />
                <span class="spr-text-color-strong spr-font-size-200 spr-text-color-weak">/</span>
                <input
                  :id="`${props.id}-end-date`"
                  ref="endDateInputRef"
                  v-model="endDateInput"
                  :class="[
                    'spr-w-[24px] spr-min-w-[24px] spr-text-center',
                    dateRangePickerClasses.dateRangePickerInputClasses,
                  ]"
                  type="text"
                  placeholder="DD"
                  maxlength="2"
                  :disabled="props.disabled"
                  :readonly="props.readonly"
                  @input="handleEndDateInput"
                  @keyup="handleEndDateInput"
                  @keydown="handleBackspace('end-date', $event)"
                />
                <span class="spr-text-color-strong spr-font-size-200 spr-text-color-weak">/</span>
                <input
                  :id="`${props.id}-end-year`"
                  ref="endYearInputRef"
                  v-model="endYearInput"
                  :class="['spr-w-[42px] spr-min-w-[42px]', dateRangePickerClasses.dateRangePickerInputClasses]"
                  type="text"
                  placeholder="YYYY"
                  maxlength="4"
                  :disabled="props.disabled"
                  :readonly="props.readonly"
                  @input="handleEndYearInput"
                  @keyup="handleEndYearInput"
                  @keydown="handleBackspace('end-year', $event)"
                />
              </div>
              <div class="spr-flex spr-items-center spr-justify-center">
                <Icon class="spr-text-color-supporting spr-h-4 spr-w-4" icon="ph:calendar-blank" />
              </div>
            </div>
          </slot>
        </div>
      </div>

      <template #popper>
        <div ref="dateRangePickerRef">
          <div
            :class="[
              'spr-flex spr-justify-between spr-gap-2 spr-px-4 spr-py-3',
              'spr-border spr-border-x-0 spr-border-b spr-border-t-0 spr-border-solid spr-border-mushroom-200',
            ]"
          >
            <!-- Tabs -->
            <div class="spr-flex spr-gap-1">
              <spr-button
                :class="getTabClasses('tab-months')"
                variant="secondary"
                size="small"
                @click="handleTabClick('tab-months')"
              >
                {{ getMonthObject('monthValue', calendarTabPageData.selectedMonth)?.fullText }}
              </spr-button>
              <spr-button
                :class="getTabClasses('tab-years')"
                variant="secondary"
                size="small"
                @click="handleTabClick('tab-years')"
              >
                {{ calendarTabPageData.selectedYear }}
              </spr-button>
            </div>

            <!-- Next & Previous Buttons  -->
            <div v-if="currentTab === 'tab-calendar'" class="spr-flex spr-gap-1">
              <spr-button
                class="spr-cursor-pointer"
                variant="secondary"
                size="small"
                :disabled="calendarTabIsMinMonth"
                @click="calendarTabPrevMonth"
              >
                <Icon icon="ph:caret-left" />
              </spr-button>
              <spr-button
                class="spr-cursor-pointer"
                variant="secondary"
                size="small"
                :disabled="calendarTabIsMaxMonth"
                @click="calendarTabNextMonth"
              >
                <Icon icon="ph:caret-right" />
              </spr-button>
            </div>

            <div v-if="currentTab === 'tab-years'" class="spr-flex spr-gap-1">
              <spr-button
                class="spr-cursor-pointer"
                variant="secondary"
                size="small"
                :disabled="yearTabIsPreviousButtonDisabled"
                @click="yearTabGoToPreviousPage"
              >
                <Icon icon="ph:caret-left" />
              </spr-button>
              <spr-button
                class="spr-cursor-pointer"
                variant="secondary"
                size="small"
                :disabled="yearTabIsNextButtonDisabled"
                @click="yearTabGoToNextPage"
              >
                <Icon icon="ph:caret-right" />
              </spr-button>
            </div>
          </div>
          <div class="spr-px-4 spr-pb-4 spr-pt-2">
            <!-- Calendar Tab  -->
            <div v-if="currentTab === 'tab-calendar'" class="spr-grid spr-grid-cols-7">
              <div
                v-for="(dayOfWeek, dayOfWeekIndex) in daysOfWeek"
                :key="dayOfWeekIndex"
                class="spr-py-1 spr-text-center spr-font-semibold"
              >
                {{ dayOfWeek.text }}
              </div>

              <template v-for="day in calendarTabPageData.calendarDays" :key="day.date">
                <div
                  v-if="minMaxYear.min <= day.date.year() && minMaxYear.max >= day.date.year()"
                  :class="[
                    dateRangePickerClasses.calendarTabItemsBaseClasses,
                    {
                      // Rest Days
                      'spr-background-color-disabled': calendarTabIsRestDay(day),

                      // Today Indicator - only apply green color if not selected
                      'spr-text-green-600': calendarTabIsTodayIndicator(day) && !calendarTabIsSelectedDate(day),

                      // Active Month Dates - only apply if not selected and not today
                      'spr-text-color-strong':
                        calendarTabIsActiveMonthDates(day) &&
                        !calendarTabIsSelectedDate(day) &&
                        !calendarTabIsTodayIndicator(day) &&
                        !calendarTabIsInRange(day),

                      // Inactive Month Dates (Past/Future)
                      'spr-text-color-disabled': calendarTabIsInactiveMonthDates(day),

                      // Selected Date (Start or End) - Use brand color scheme from date picker
                      'spr-background-color-brand-base active:spr-background-color-brand-pressed spr-text-color-inverted-strong spr-font-medium !spr-text-white-50 active:spr-scale-95':
                        calendarTabIsSelectedDate(day),

                      // In Range (between start and end) - Light green background with brand outline, no border, using spr- prefix
                      'spr-cursor-pointer spr-bg-green-100 spr-outline spr-outline-1 spr-outline-offset-[-0.5px] spr-outline-kangkong-700':
                        calendarTabIsInRange(day),

                      // Unselected Date - Gray border, no hover effects
                      'spr-cursor-pointer spr-border spr-border-solid spr-border-gray-300':
                        calendarTabIsUnSelectedDate(day) && !calendarTabIsInRange(day),

                      // Disabled Dates
                      'spr-cursor-not-allowed spr-opacity-30': calendarTabIsDateIsDisabled(day),
                    },
                  ]"
                  @click="!calendarTabIsDateIsDisabled(day) ? calendarTabHandleDateInput(day) : null"
                >
                  <span>{{ day.date.date() }}</span>
                  <div
                    v-if="calendarTabIsTodayIndicator(day)"
                    class="spr-absolute spr-bottom-1 spr-m-auto spr-h-1 spr-w-1 spr-rounded-full spr-bg-green-600"
                  ></div>
                </div>
                <div v-else></div>
              </template>
            </div>

            <!-- Months Tab  -->
            <div v-if="currentTab === 'tab-months'" class="spr-grid spr-grid-cols-4 spr-gap-2">
              <div
                v-for="(month, monthIndex) in monthsList"
                :key="monthIndex"
                :class="[
                  dateRangePickerClasses.monthsTabItemsBaseClasses,
                  {
                    'spr-text-color-brand-base': month.monthValue === currentDate.month(),
                    'spr-border-color-weak hover:spr-background-color-hover active:spr-background-color-pressed':
                      month.text.toLowerCase() !== startMonthInput.toLowerCase() &&
                      month.text.toLowerCase() !== endMonthInput.toLowerCase(),
                    'spr-border-color-brand-base spr-background-color-single-active':
                      month.text.toLowerCase() === startMonthInput.toLowerCase() ||
                      month.text.toLowerCase() === endMonthInput.toLowerCase(),
                  },
                ]"
                @click="monthTabHandleSelectedMonth(month)"
              >
                <span>{{ month.text }}</span>

                <div
                  v-if="month.monthValue === currentDate.month()"
                  class="spr-background-color-brand-base spr-absolute spr-bottom-2 spr-m-auto spr-h-1 spr-w-1 spr-rounded-full"
                ></div>
              </div>
            </div>

            <!-- Years Tab  -->
            <div v-if="currentTab === 'tab-years'" class="spr-grid spr-grid-cols-4 spr-gap-2">
              <div
                v-for="(year, index) in yearTabCurrentYearPage"
                :key="index"
                :class="[
                  dateRangePickerClasses.yearsTabItemsBaseClasses,
                  {
                    'spr-text-color-brand-base': year === currentDate.year(),
                    'spr-border-color-weak hover:spr-background-color-hover active:spr-background-color-pressed':
                      year !== Number(startYearInput) && year !== Number(endYearInput),
                    'spr-border-color-brand-base spr-background-color-single-active':
                      year === Number(startYearInput) || year === Number(endYearInput),
                  },
                ]"
                @click="yearTabHandleSelectedYear(String(year))"
              >
                <span>{{ year }}</span>
                <div
                  v-if="year === currentDate.year()"
                  class="spr-background-color-brand-base spr-absolute spr-bottom-2 spr-m-auto spr-h-1 spr-w-1 spr-rounded-full"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </Menu>

    <div v-if="props.displayHelper" :class="dateRangePickerClasses.dateRangePickerInputHelperClasses">
      <slot name="helperMessage">
        <Icon v-if="props.helperIcon" class="spr-h-5 spr-min-h-5 spr-w-5 spr-min-w-5" :icon="props.helperIcon" />
        <span>{{ props.helperText }}</span>
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Menu } from 'floating-vue';
import { Icon } from '@iconify/vue';

import 'floating-vue/dist/style.css';

import { dateRangePickerPropTypes, dateRangePickerEmitTypes } from './date-range-picker';
import { useDateRangePicker } from './use-date-range-picker';

import SprButton from '@/components/button/button.vue';

const props = defineProps(dateRangePickerPropTypes);
const emit = defineEmits(dateRangePickerEmitTypes);

const {
  dateRangePickerClasses,
  dateRangePickerRef,
  startMonthInputRef,
  startDateInputRef,
  startYearInputRef,
  endMonthInputRef,
  endDateInputRef,
  endYearInputRef,
  startDateContainerRef,
  endDateContainerRef,
  activeInputRef,
  datePopperState,
  currentTab,
  currentDate,
  daysOfWeek,
  monthsList,
  startMonthInput,
  startDateInput,
  startYearInput,
  endMonthInput,
  endDateInput,
  endYearInput,
  calendarTabPageData,
  calendarTabIsMinMonth,
  calendarTabIsMaxMonth,
  calendarTabIsRestDay,
  calendarTabIsTodayIndicator,
  calendarTabIsActiveMonthDates,
  calendarTabIsInactiveMonthDates,
  calendarTabIsSelectedDate,
  calendarTabIsInRange,
  calendarTabIsUnSelectedDate,
  calendarTabIsDateIsDisabled,
  calendarTabHandleDateInput,
  getMonthObject,
  getTabClasses,
  isDateRangePickerPopperDisabled,
  calendarTabPrevMonth,
  calendarTabNextMonth,
  monthTabHandleSelectedMonth,
  yearTabCurrentYearPage,
  yearTabGoToPreviousPage,
  yearTabGoToNextPage,
  yearTabIsPreviousButtonDisabled,
  yearTabIsNextButtonDisabled,
  yearTabHandleSelectedYear,
  handleStartMonthInput,
  handleStartDateInput,
  handleStartYearInput,
  handleEndMonthInput,
  handleEndDateInput,
  handleEndYearInput,
  handleTabClick,
  handleBackspace,
  isUsingCustomSlot,
  finalPlacement,
  handleStartDateClick,
  handleEndDateClick,
  handleCustomComponentClick,
} = useDateRangePicker(props, emit);
</script>
