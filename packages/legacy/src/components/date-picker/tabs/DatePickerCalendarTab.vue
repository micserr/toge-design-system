<template>
  <div class="spr-grid spr-grid-cols-7">
    <div
      v-for="(dayOfWeek, dayOfWeekIndex) in daysOfWeek"
      :key="dayOfWeekIndex"
      class="spr-py-1 spr-text-center spr-font-semibold"
    >
      {{ dayOfWeek.text }}
    </div>

    <template v-for="day in calendarDays" :key="day.date">
      <div
        v-if="minMaxYear.min <= day.date.getFullYear() && minMaxYear.max >= day.date.getFullYear()"
        :class="[
          'spr-relative spr-box-border spr-flex spr-h-[40px] spr-items-center spr-justify-center spr-p-2',
          'spr-transition spr-duration-150 spr-ease-in-out',
          {
            // Rest Days
            'spr-background-color-disabled': isRestDay(day),

            // Today Indicator - only apply brand color if not selected
            'spr-text-color-brand-base': isTodayIndicator(day) && !isSelectedDate(day),

            // Active Month Dates - only apply if not selected and not today
            'spr-text-color-strong': isActiveMonthDates(day) && !isSelectedDate(day) && !isTodayIndicator(day),

            // Inactive Month Dates (Past/Future)
            'spr-text-color-disabled': isInactiveMonthDates(day),

            // Selected Date
            'spr-background-color-brand-base active:spr-background-color-brand-pressed spr-text-color-inverted-strong spr-cursor-pointer !spr-text-white-50 active:spr-scale-95':
              isSelectedDate(day),

            // Unselected Date
            'hover:spr-background-color-hover spr-border-color-weak active:spr-background-color-pressed spr-cursor-pointer spr-border spr-border-solid active:spr-scale-95':
              isUnSelectedDate(day),

            // Disabled Dates
            'spr-cursor-not-allowed spr-opacity-30': isDateDisabled(day),
          },
        ]"
        @click="!isDateDisabled(day) ? handleDateClick(day) : null"
      >
        <span>{{ day.date.getDate() }}</span>
        <div
          v-if="isTodayIndicator(day)"
          class="spr-background-color-brand-base spr-absolute spr-bottom-1 spr-m-auto spr-h-1 spr-w-1 spr-rounded-full"
        ></div>
      </div>
      <div v-else></div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import type { TabComponentProps, CalendarTabEmits, RestDayType, DisabledDatesType } from '../date-picker';

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

interface Props extends TabComponentProps {
  calendarDays: Array<{ date: Date; inactive: boolean }>;
  restDays: RestDayType[];
  disabledDates?: DisabledDatesType;
  selectedDate?: Date;
  selectedMonth: number;
  selectedDay?: number;
}

const props = defineProps<Props>();
const emit = defineEmits<CalendarTabEmits>();

const daysOfWeek = computed(() =>
  Array.from({ length: 7 }, (_, i) => ({
    text: dayjs().day(i).format('dd'),
    fullText: dayjs().day(i).format('dddd'),
    dayValue: i,
  })),
);

const currentDate = computed(() => dayjs());

const isRestDay = (day: { date: Date; inactive: boolean }) => {
  const restDaysValue = props.restDays.map((restDay) => {
    return daysOfWeek.value.find((d) => d.text.toLowerCase() === restDay.toLowerCase())?.dayValue;
  });

  if (isSelectedDate(day)) {
    return false;
  }

  if (restDaysValue.includes(day.date.getDay())) {
    return true;
  }

  return false;
};

const isTodayIndicator = (day: { date: Date }) => {
  if (day.date.toDateString() === currentDate.value.format('ddd MMM DD YYYY')) {
    return true;
  }

  return false;
};

const isActiveMonthDates = (day: { date: Date; inactive: boolean }) => {
  if (!day.inactive && !isDateDisabled(day)) {
    return true;
  }

  return false;
};

const isInactiveMonthDates = (day: { date: Date; inactive: boolean }) => {
  if (day.inactive && !isDateDisabled(day)) {
    return true;
  }

  return false;
};

const isSelectedDate = (day: { date: Date; inactive: boolean }) => {
  if (isDateDisabled(day)) {
    return false;
  }

  // Check if day, month, and year are selected (full mode)
  if (props.selectedDay && props.selectedMonth !== undefined && props.selectedYear) {
    return (
      day.date.getDate() === props.selectedDay &&
      day.date.getMonth() === props.selectedMonth &&
      day.date.getFullYear() === props.selectedYear &&
      !day.inactive
    );
  }

  // Check if day and month are selected, but not year
  if (props.selectedDay && props.selectedMonth !== undefined && !props.selectedYear) {
    return day.date.getDate() === props.selectedDay && day.date.getMonth() === props.selectedMonth && !day.inactive;
  }

  // Check if only day is selected
  if (props.selectedDay && !props.selectedMonth && !props.selectedYear) {
    return day.date.getDate() === props.selectedDay && !day.inactive;
  }

  return false;
};

const isUnSelectedDate = (day: { date: Date }) => {
  if (isDateDisabled(day)) {
    return false;
  }

  // If no selection at all, all dates are unselected
  if (!props.selectedDay && !props.selectedMonth && !props.selectedYear) {
    return true;
  }

  // If only month is selected, all dates are unselected
  if (!props.selectedDay && props.selectedMonth !== undefined && !props.selectedYear) {
    return true;
  }

  // If day, month, and year are selected, check if this date matches
  if (props.selectedDay && props.selectedMonth !== undefined && props.selectedYear) {
    return !(
      day.date.getDate() === props.selectedDay &&
      day.date.getMonth() === props.selectedMonth &&
      day.date.getFullYear() === props.selectedYear
    );
  }

  // If day and month are selected, check if this date matches
  if (props.selectedDay && props.selectedMonth !== undefined && !props.selectedYear) {
    return !(day.date.getDate() === props.selectedDay && day.date.getMonth() === props.selectedMonth);
  }

  // If only day is selected, check if this date matches
  if (props.selectedDay && !props.selectedMonth && !props.selectedYear) {
    return day.date.getDate() !== props.selectedDay;
  }

  return true;
};

const isDateDisabled = (day: { date: Date }) => {
  if (
    isDateDisabledFromTo(day) ||
    isDateDisabledPastDate(day) ||
    isDateDisabledFutureDate(day) ||
    isDateDisabledSelectedDates(day) ||
    isDateDisabledWeekends(day) ||
    isDateDisabledWeekdays(day) ||
    isDateDisabledSelectedDays(day)
  ) {
    return true;
  }

  return false;
};

const isDateDisabledFromTo = (day: { date: Date }) => {
  if (props.disabledDates?.from && props.disabledDates?.to) {
    const disabledFrom = dayjs(props.disabledDates.from, 'MM-DD-YYYY').startOf('day');
    const disabledTo = dayjs(props.disabledDates.to, 'MM-DD-YYYY').endOf('day');

    const dayDate = dayjs(day.date);

    return dayDate.isSameOrAfter(disabledFrom, 'day') && dayDate.isSameOrBefore(disabledTo, 'day');
  }

  return false;
};

const isDateDisabledPastDate = (day: { date: Date }) => {
  if (props.disabledDates?.pastDates) {
    const dayDate = dayjs(day.date);

    if (typeof props.disabledDates.pastDates === 'boolean') {
      return dayDate.isBefore(currentDate.value.startOf('day'));
    } else {
      const selectedDate = dayjs(props.disabledDates.pastDates);

      return dayDate.isBefore(dayjs(selectedDate, 'MM-DD-YYYY').startOf('day'));
    }
  }

  return false;
};

const isDateDisabledFutureDate = (day: { date: Date }) => {
  if (props.disabledDates?.futureDates) {
    const dayDate = dayjs(day.date);

    if (typeof props.disabledDates.futureDates === 'boolean') {
      return dayDate.isAfter(currentDate.value.endOf('day'));
    } else {
      const selectedDate = dayjs(props.disabledDates.futureDates);

      return dayDate.isAfter(dayjs(selectedDate, 'MM-DD-YYYY').endOf('day'));
    }
  }

  return false;
};

const isDateDisabledSelectedDates = (day: { date: Date }) => {
  if (props.disabledDates?.selectedDates && props.disabledDates.selectedDates.length > 0) {
    const dayDate = dayjs(day.date);

    props.disabledDates.selectedDates.forEach((_date) => {
      if (!dayjs(_date).isValid()) {
        console.error(`Error: disabledDates Props - Selected Dates - Invalid date format: "${_date}"`);
      }
    });

    return props.disabledDates.selectedDates.some((date) => dayDate.isSame(dayjs(date, 'MM-DD-YYYY'), 'day'));
  }

  return false;
};

const isDateDisabledWeekends = (day: { date: Date }) => {
  if (props.disabledDates?.weekends) {
    const dayDate = dayjs(day.date);

    return dayDate.day() === 0 || dayDate.day() === 6;
  }

  return false;
};

const isDateDisabledWeekdays = (day: { date: Date }) => {
  if (props.disabledDates?.weekdays) {
    const dayDate = dayjs(day.date);

    return dayDate.day() > 0 && dayDate.day() < 6;
  }

  return false;
};

const isDateDisabledSelectedDays = (day: { date: Date }) => {
  if (props.disabledDates?.selectedDays) {
    const dayDate = dayjs(day.date);

    return props.disabledDates.selectedDays.some((day) => {
      const foundDay = daysOfWeek.value.find((d) => d.text.toLowerCase() === day.toLowerCase());

      if (!foundDay) {
        console.error(`Error: disabledDates Props - Selected Days - Invalid day: "${day}"`);
      }

      return foundDay ? dayDate.day() === daysOfWeek.value.indexOf(foundDay) : false;
    });
  }

  return false;
};

const handleDateClick = (day: { date: Date; inactive: boolean }) => {
  emit('update:date', day);
  emit('update:month', day.date.getMonth());
  emit('update:year', day.date.getFullYear());
};
</script>
