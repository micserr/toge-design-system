<template>
  <Menu
    v-model:shown="datePopperState"
    class="spr-grid spr-w-fit spr-gap-2"
    aria-id="date-picker-wrapper"
    distance="4"
    placement="bottom"
    :triggers="[]"
    :popper-hide-triggers="[]"
    :auto-hide="false"
  >
    <label v-if="props.label" :for="props.id" :class="datePickerClasses.labelClasses">
      {{ props.label }}
    </label>
    <div ref="datePickerRef" :class="datePickerClasses.datePickerBaseInputClasses" @click="datePopperState = true">
      <div class="spr-flex spr-h-full spr-w-full spr-items-center spr-gap-1.5">
        <input
          v-model="monthInput"
          :class="[
            'spr-h-full spr-w-[36px] spr-min-w-[36px] spr-border-none spr-bg-transparent spr-outline-none',
            'spr-text-color-strong spr-font-size-200',
            'placeholder:spr-text-color-weak',
          ]"
          type="text"
          placeholder="MMM"
          maxlength="3"
          @input="handleMonthInput(monthInput)"
          @keyup="handleMonthInput(monthInput)"
        />
        <span class="spr-text-color-strong spr-font-size-200 spr-text-color-weak">/</span>
        <input
          v-model="dateInput"
          :class="[
            'spr-h-full spr-w-[20px] spr-min-w-[20px] spr-border-none spr-bg-transparent spr-outline-none',
            'spr-text-color-strong spr-font-size-200',
            'placeholder:spr-text-color-weak',
          ]"
          type="text"
          placeholder="DD"
          maxlength="2"
          @input="handleDateInput(dateInput, null, null)"
          @keyup="handleDateInput(dateInput, null, null)"
        />
        <span class="spr-text-color-strong spr-font-size-200 spr-text-color-weak">/</span>
        <input
          v-model="yearInput"
          :class="[
            'spr-h-full spr-w-[42px] spr-min-w-[42px] spr-border-none spr-bg-transparent spr-outline-none',
            'spr-text-color-strong spr-font-size-200',
            'placeholder:spr-text-color-weak',
          ]"
          type="text"
          placeholder="YYYY"
          maxlength="4"
          @input="handleYearInput(yearInput)"
          @keyup="handleYearInput(yearInput)"
        />
      </div>
      <div class="spr-flex spr-items-center spr-justify-center">
        <Icon class="spr-h-5 spr-w-5 spr-text-mushroom-300" icon="ph:calendar-blank" />
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
          <div class="spr-flex spr-gap-1">
            <spr-button
              :class="[
                'spr-cursor-pointer',
                {
                  'spr-background-color-pressed !spr-shadow-button': currentTab === 'tab-months',
                },
              ]"
              variant="secondary"
              size="small"
              @click="currentTab = 'tab-months'"
            >
              {{ calendarTabGetMonthEquivalent(calendarTabPageData.selectedMonth) }}
            </spr-button>
            <spr-button
              :class="[
                'spr-cursor-pointer',
                {
                  'spr-background-color-pressed !spr-shadow-button': currentTab === 'tab-years',
                },
              ]"
              variant="secondary"
              size="small"
              @click="currentTab = 'tab-years'"
            >
              {{ calendarTabPageData.selectedYear }}
            </spr-button>
          </div>

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

          <div v-if="currentTab === 'tab-months'" class="spr-flex spr-gap-1">
            <spr-button class="spr-cursor-pointer" variant="secondary" size="small" disabled>
              <Icon icon="ph:caret-left" />
            </spr-button>
            <spr-button class="spr-cursor-pointer" variant="secondary" size="small" disabled>
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
          <div v-if="currentTab === 'tab-calendar'" class="spr-grid spr-grid-cols-7 spr-text-center spr-text-gray-700">
            <div
              v-for="(dayOfWeek, dayOfWeekIndex) in daysOfWeek"
              :key="dayOfWeekIndex"
              class="spr-py-1 spr-font-semibold"
            >
              {{ dayOfWeek.text }}
            </div>

            <div
              v-for="(day, dayIndex) in calendarTabPageData.calendarDays"
              :key="dayIndex"
              :class="[
                'spr-relative spr-box-border spr-flex spr-h-[40px] spr-cursor-pointer spr-items-center spr-justify-center spr-p-2',
                'spr-transition spr-duration-150 spr-ease-in-out',
                'hover:spr-background-color-hover',
                'active:spr-background-color-pressed active:spr-scale-95',
                {
                  'spr-background-color-disabled': day.date.getDay() === 0 || day.date.getDay() === 6,
                  'spr-text-color-brand-base': calendarTabIsToday('date', day.date.toISOString()),
                  'spr-border-color-weak spr-border spr-border-solid': !day.inactive,
                  'spr-text-color-disabled': day.inactive,
                  'spr-border-color-brand-base spr-background-color-single-active':
                    day.date.getDate().toString() === dateInput && !day.inactive,
                },
              ]"
              @click="handleDateInput(day.date.getDate().toString(), day.date.getMonth(), day.date.getFullYear())"
            >
              <span>{{ day.date.getDate() }}</span>
              <div
                v-if="calendarTabIsToday('date', day.date.toISOString())"
                class="spr-background-color-brand-base spr-absolute spr-bottom-1 spr-m-auto spr-h-1 spr-w-1 spr-rounded-full"
              ></div>
            </div>
          </div>

          <div v-if="currentTab === 'tab-months'" class="spr-grid spr-grid-cols-4 spr-gap-2">
            <div
              v-for="(month, monthIndex) in monthsList"
              :key="monthIndex"
              :class="[
                'spr-subheading-xs spr-relative spr-flex spr-cursor-pointer spr-items-center spr-justify-center spr-rounded-lg spr-p-4',
                'spr-border spr-border-solid',
                'spr-transition spr-duration-150 spr-ease-in-out',
                'active:spr-scale-95',
                {
                  'spr-text-color-brand-base': calendarTabIsToday('month', month.monthValue),
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
                v-if="calendarTabIsToday('month', month.monthValue)"
                class="spr-background-color-brand-base spr-absolute spr-bottom-2 spr-m-auto spr-h-1 spr-w-1 spr-rounded-full"
              ></div>
            </div>
          </div>

          <div v-if="currentTab === 'tab-years'" class="spr-grid spr-grid-cols-4 spr-gap-2">
            <div
              v-for="(year, index) in yearTabCurrentYearPage"
              :key="index"
              :class="[
                'spr-subheading-xs spr-relative spr-flex spr-cursor-pointer spr-items-center spr-justify-center spr-rounded-lg spr-p-4',
                'spr-border spr-border-solid',
                'spr-transition spr-duration-150 spr-ease-in-out',
                'active:spr-scale-95',
                {
                  'spr-text-color-brand-base': calendarTabIsToday('year', year),
                  'spr-border-color-weak hover:spr-background-color-hover active:spr-background-color-pressed':
                    year !== Number(yearInput),
                  'spr-border-color-brand-base spr-background-color-single-active': year === Number(yearInput),
                },
              ]"
              @click="yearTabHandleSelectedYear(String(year))"
            >
              <span>{{ year }}</span>
              <div
                v-if="calendarTabIsToday('year', year)"
                class="spr-background-color-brand-base spr-absolute spr-bottom-2 spr-m-auto spr-h-1 spr-w-1 spr-rounded-full"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Menu>
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
  datePopperState,
  currentTab,
  daysOfWeek,
  dateInput,
  monthsList,
  monthInput,
  yearInput,
  calendarTabPageData,
  calendarTabIsMinMonth,
  calendarTabIsMaxMonth,
  calendarTabIsToday,
  calendarTabGetMonthEquivalent,
  calendarTabPrevMonth,
  calendarTabNextMonth,
  monthTabHandleSelectedMonth,
  yearTabCurrentYearPage,
  yearTabGoToPreviousPage,
  yearTabGoToNextPage,
  yearTabIsPreviousButtonDisabled,
  yearTabIsNextButtonDisabled,
  handleDateInput,
  handleMonthInput,
  handleYearInput,
  yearTabHandleSelectedYear,
} = useDatePicker(props, emit);
</script>
