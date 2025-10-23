<template>
  <div 
    ref="dateCalendarPickerRef"
    :class="dateCalendarPickerClasses"
  >
    <div
      :class="[
        'spr-flex spr-justify-between spr-gap-2 spr-px-4 spr-py-3',
        'spr-border spr-border-x-0 spr-border-b spr-border-t-0 spr-border-solid spr-border-mushroom-200',
      ]"
    >
      <!-- Tabs -->
      <div class="spr-flex spr-gap-1">
        <spr-button
          v-if="showMonthInput"
          :class="getTabClasses('tab-months')"
          variant="secondary"
          size="small"
          @click="handleTabClick('tab-months')"
        >
          {{ getMonthObject('monthValue', calendarTabPageData.selectedMonth)?.fullText }}
        </spr-button>
        <spr-button
          v-if="showYearInput"
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
      <DatePickerCalendarTab
        v-if="currentTab === 'tab-calendar' && showDateInput"
        :calendar-days="calendarDays"
        :selected-month="selectedMonthComputed"
        :selected-year="selectedYearComputed"
        :selected-day="selectedDayComputed"
        :min-max-year="minMaxYear"
        :rest-days="restDays"
        :disabled-dates="disabledDates"
        :disabled="disabled"
        :readonly="readonly"
        @update:date="handleCalendarDateUpdateWrapper as any"
        @update:month="handleCalendarMonthUpdateWrapper as any"
        @update:year="handleCalendarYearUpdateWrapper as any"
      />

      <!-- Months Tab  -->
      <DatePickerMonthTab
        v-if="currentTab === 'tab-months' && showMonthInput"
        :selected-month="selectedMonthComputed"
        :selected-year="selectedYearComputed"
        :min-max-year="minMaxYear"
        :disabled="disabled"
        :readonly="readonly"
        @update:month="handleMonthTabMonthUpdateWrapper as any"
      />

      <!-- Years Tab  -->
      <DatePickerYearTab
        v-if="currentTab === 'tab-years' && showYearInput"
        :selected-month="selectedMonthComputed"
        :selected-year="selectedYearComputed"
        :min-max-year="minMaxYear"
        :years-array="yearTabPageData.yearsArray"
        :current-page="yearTabPageData.currentPage"
        :items-per-page="yearTabPageData.itemsPerPage"
        :disabled="disabled"
        :readonly="readonly"
        @update:year="handleYearTabYearUpdateWrapper as any"
        @update:current-page="handleYearTabCurrentPageUpdateWrapper as any"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { Icon } from '@iconify/vue';
import classNames from 'classnames';

import SprButton from '@/components/button/button.vue';
import DatePickerCalendarTab from '../tabs/DatePickerCalendarTab.vue';
import DatePickerMonthTab from '../tabs/DatePickerMonthTab.vue';
import DatePickerYearTab from '../tabs/DatePickerYearTab.vue';

import { useDateCalendarPicker } from './use-date-calendar-picker';
import { dateCalendarPickerEmitTypes, dateCalendarPickerPropTypes } from './date-calendar-picker';

const props = defineProps(dateCalendarPickerPropTypes);
const emit = defineEmits(dateCalendarPickerEmitTypes);

const dateCalendarPickerRef = ref<HTMLElement | null>(null);

// Use the composable for all logic
const {
  // State
  currentTab,
  calendarTabPageData,
  yearTabPageData,
  
  // Computed properties
  showMonthInput,
  showDateInput,
  showYearInput,
  calendarDays,
  selectedMonthComputed,
  selectedYearComputed,
  selectedDayComputed,
  calendarTabIsMinMonth,
  calendarTabIsMaxMonth,
  yearTabIsPreviousButtonDisabled,
  yearTabIsNextButtonDisabled,
  
  // Functions
  getTabClasses,
  handleTabClick,
  getMonthObject,
  calendarTabPrevMonth,
  calendarTabNextMonth,
  yearTabGoToPreviousPage,
  yearTabGoToNextPage,
  
  // Event handlers
  handleCalendarDateUpdateWrapper,
  handleCalendarMonthUpdateWrapper,
  handleCalendarYearUpdateWrapper,
  handleMonthTabMonthUpdateWrapper,
  handleYearTabYearUpdateWrapper,
  handleYearTabCurrentPageUpdateWrapper,
} = useDateCalendarPicker(props, emit);

// Compute CSS classes using classNames utility
const dateCalendarPickerClasses = computed(() => {
  return classNames(
    'date-calendar-picker-container spr-bg-white spr-rounded-lg spr-shadow-lg spr-border spr-border-solid spr-border-mushroom-200 min-w-[320px]',
    {
      'spr-disabled': props.disabled,
      'spr-readonly': props.readonly,
    }
  );
});
</script>

