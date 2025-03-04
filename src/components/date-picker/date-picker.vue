<template>
  <div>
    <Menu
      v-model:shown="datePopperState"
      aria-id="date-picker-wrapper"
      distance="4"
      placement="bottom"
      :triggers="[]"
      :popper-hide-triggers="[]"
      :auto-hide="false"
      :disabled="isDatePickerPopperDisabled"
      :style="{
        width: props.width,
      }"
    >
      <div class="spr-grid spr-gap-2">
        <label v-if="props.label" :for="props.id" :class="datePickerClasses.labelClasses">
          {{ props.label }}
        </label>
        <div ref="datePickerRef" :class="datePickerClasses.datePickerBaseInputClasses" @click="datePopperState = true">
          <div class="spr-flex spr-h-full spr-items-center spr-gap-1.5">
            <input
              ref="monthInputRef"
              v-model="monthInput"
              :class="getDatePickerInputClasses('36px')"
              type="text"
              placeholder="MMM"
              maxlength="3"
              :disabled="props.disabled"
              :readonly="props.readonly"
              @input="handleMonthInput(monthInput, $event as KeyboardEvent)"
              @keyup="handleMonthInput(monthInput, $event as KeyboardEvent)"
              @keydown="handleMonthInput(monthInput, $event as KeyboardEvent)"
              @blur="handleMonthInput(monthInput, $event as FocusEvent)"
            />
            <span class="spr-text-color-strong spr-font-size-200 spr-text-color-weak">/</span>
            <input
              ref="dateInputRef"
              v-model="dateInput"
              :class="['spr-text-center', getDatePickerInputClasses('20px')]"
              type="text"
              placeholder="DD"
              maxlength="2"
              :disabled="props.disabled"
              :readonly="props.readonly"
              @input="handleDateInput(dateInput, null, null, $event as KeyboardEvent)"
              @keyup="handleDateInput(dateInput, null, null, $event as KeyboardEvent)"
            />
            <span class="spr-text-color-strong spr-font-size-200 spr-text-color-weak">/</span>
            <input
              ref="yearInputRef"
              v-model="yearInput"
              :class="getDatePickerInputClasses('42px')"
              type="text"
              placeholder="YYYY"
              maxlength="4"
              :disabled="props.disabled"
              :readonly="props.readonly"
              @input="handleYearInput(yearInput, $event as KeyboardEvent)"
              @keyup="handleYearInput(yearInput, $event as KeyboardEvent)"
            />
          </div>
          <div class="spr-flex spr-items-center spr-justify-center">
            <Icon class="spr-h-5 spr-w-5 spr-text-mushroom-300" icon="ph:calendar-blank" />
          </div>
        </div>
      </div>

      <template #popper>
        <div ref="datePickerRef">
          <div
            :class="[
              'spr-flex spr-justify-between spr-gap-2 spr-px-4 spr-py-3',
              'spr-border spr-border-solid spr-border-mushroom-200',
            ]"
          >
            <!-- Tabs -->
            <div class="spr-flex spr-gap-1">
              <spr-button
                :class="getTabClasses('tab-months')"
                variant="secondary"
                size="small"
                @click="currentTab = 'tab-months'"
              >
                {{ getMonthObject('monthValue', calendarTabPageData.selectedMonth)?.fullText }}
              </spr-button>
              <spr-button
                :class="getTabClasses('tab-years')"
                variant="secondary"
                size="small"
                @click="currentTab = 'tab-years'"
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
            <div v-if="currentTab === 'tab-calendar'" class="spr-grid spr-grid-cols-7 spr-gap-2">
              <div
                v-for="(dayOfWeek, dayOfWeekIndex) in daysOfWeek"
                :key="dayOfWeekIndex"
                class="spr-py-1 spr-text-center spr-font-semibold"
              >
                {{ dayOfWeek.text }}
              </div>

              <template v-for="day in calendarTabPageData.calendarDays" :key="day.date">
                <div
                  v-if="minMaxYear.min <= day.date.getFullYear() && minMaxYear.max >= day.date.getFullYear()"
                  :class="[
                    datePickerClasses.calendarTabItemsBaseClasses,
                    {
                      // Rest Days
                      'spr-background-color-disabled': calendarTabIsRestDay(day),

                      // Today Indicator
                      'spr-text-color-brand-base': calendarTabIsTodayIndicator(day),

                      // Active Month Dates
                      'spr-text-color-strong': calendarTabIsActiveMonthDates(day),

                      // Inactive Month Dates (Past/Future)
                      'spr-text-color-disabled': calendarTabIsInactiveMonthDates(day),

                      // Selected Date
                      'spr-border-color-brand-base spr-background-color-single-active active:spr-background-color-brand-pressed spr-cursor-pointer spr-border spr-border-solid active:spr-scale-95':
                        calendarTabIsSelectedDate(day),

                      // Unselected Date
                      'hover:spr-background-color-hover spr-border-color-weak active:spr-background-color-pressed spr-cursor-pointer spr-border spr-border-solid active:spr-scale-95':
                        calendarTabIsUnSelectedDate(day),

                      // Disabled Dates
                      'spr-cursor-not-allowed spr-opacity-30': calendarTabIsDateIsDisabled(day),
                    },
                  ]"
                  @click="!calendarTabIsDateIsDisabled(day) ? calendarTabHandleDateInput(day) : null"
                >
                  <span>{{ day.date.getDate() }}</span>
                  <div
                    v-if="calendarTabIsTodayIndicator(day)"
                    class="spr-background-color-brand-base spr-absolute spr-bottom-1 spr-m-auto spr-h-1 spr-w-1 spr-rounded-full"
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
                  datePickerClasses.monthsTabItemsBaseClasses,
                  {
                    'spr-text-color-brand-base': month.monthValue === currentDate.month(),
                    'spr-border-color-weak hover:spr-background-color-hover active:spr-background-color-pressed':
                      month.text.toLowerCase() !== monthInput.toLowerCase(),
                    'spr-border-color-brand-base spr-background-color-single-active':
                      month.text.toLowerCase() === monthInput.toLowerCase(),
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
                  datePickerClasses.yearsTabItemsBaseClasses,
                  {
                    'spr-text-color-brand-base': year === currentDate.year(),
                    'spr-border-color-weak hover:spr-background-color-hover active:spr-background-color-pressed':
                      year !== Number(yearInput),
                    'spr-border-color-brand-base spr-background-color-single-active': year === Number(yearInput),
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
    <template v-if="datePickerErrors.length > 0">
      <p :class="datePickerClasses.datePickerInputHelperClasses">
        <slot name="helperMessage">
          <Icon icon="ph:warning-circle-fill" width="20px" height="20px" />
          <span>{{ datePickerErrors[0].message }}</span>
        </slot>
      </p>
    </template>
    <template v-else>
      <p v-if="props.displayHelper" :class="datePickerClasses.datePickerInputHelperClasses">
        <slot name="helperMessage">
          <Icon v-if="props.helperIcon" :icon="props.helperIcon" width="20px" height="20px" />
          <span>{{ props.helperText }}</span>
        </slot>
      </p>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { Menu } from 'floating-vue';
import { Icon } from '@iconify/vue';

import 'floating-vue/dist/style.css';

import { datePickerPropTypes, datePickerEmitTypes } from './date-picker';
import { useDatePicker } from './use-date-picker';

import SprButton from '@/components/button/button.vue';

const props = defineProps(datePickerPropTypes);
const emit = defineEmits(datePickerEmitTypes);

const {
  datePickerClasses,
  datePickerRef,
  monthInputRef,
  dateInputRef,
  yearInputRef,
  datePopperState,
  currentTab,
  currentDate,
  daysOfWeek,
  dateInput,
  monthsList,
  monthInput,
  yearInput,
  datePickerErrors,
  calendarTabPageData,
  calendarTabIsMinMonth,
  calendarTabIsMaxMonth,
  calendarTabIsRestDay,
  calendarTabIsTodayIndicator,
  calendarTabIsActiveMonthDates,
  calendarTabIsInactiveMonthDates,
  calendarTabIsSelectedDate,
  calendarTabIsUnSelectedDate,
  calendarTabIsDateIsDisabled,
  calendarTabHandleDateInput,
  getMonthObject,
  getDatePickerInputClasses,
  getTabClasses,
  isDatePickerPopperDisabled,
  calendarTabPrevMonth,
  calendarTabNextMonth,
  monthTabHandleSelectedMonth,
  yearTabCurrentYearPage,
  yearTabGoToPreviousPage,
  yearTabGoToNextPage,
  yearTabIsPreviousButtonDisabled,
  yearTabIsNextButtonDisabled,
  handleMonthInput,
  handleDateInput,
  handleYearInput,
  yearTabHandleSelectedYear,
} = useDatePicker(props, emit);
</script>
