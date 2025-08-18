import { ref, toRefs, computed, ComputedRef, SetupContext, onMounted, watch, nextTick } from 'vue';
import { useVModel, onClickOutside, useDebounceFn } from '@vueuse/core';

import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';

import classNames from 'classnames';

import type { DatePickerPropTypes, DatePickerEmitTypes } from './date-picker';

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

interface DatePickerClasses {
  labelClasses: string;
  datePickerBaseInputClasses: string;
  datePickerInputClasses: string;
  datePickerInputHelperClasses: string;
  calendarTabItemsBaseClasses: string;
  monthsTabItemsBaseClasses: string;
  yearsTabItemsBaseClasses: string;
}

interface MonthsList {
  text: string;
  fullText: string;
  monthValue: number;
}

export const useDatePicker = (props: DatePickerPropTypes, emit: SetupContext<DatePickerEmitTypes>['emit']) => {
  const { active, disabled, readonly, error, currentYear, minMaxYear, restDays, disabledDates, format } = toRefs(props);

  const modelValue = useVModel(props, 'modelValue', emit);

  const datePickerClasses: ComputedRef<DatePickerClasses> = computed(() => {
    const labelClasses = classNames('spr-body-sm-regular spr-text-color-strong spr-block', {
      'spr-text-color-on-fill-disabled': disabled.value,
    });

    const datePickerBaseInputClasses = classNames(
      'spr-flex spr-justify-between spr-items-center spr-gap-6 spr-rounded-lg spr-bg-white-50 spr-min-w-[180px] spr-py-1.5 spr-px-3',
      {
        // Normal State
        'spr-border spr-border-solid spr-border-mushroom-200 focus:spr-border-kangkong-700':
          (!error.value && !disabled.value && !active.value && !datePopperState.value) || readonly.value,

        // Active State
        'spr-border spr-border-solid spr-border-kangkong-700 spr-border-[1.5px] spr-border-solid':
          (active.value || datePopperState.value === true) && !readonly.value,

        // Error State
        'spr-border spr-border-solid spr-border-tomato-600 focus:spr-border-tomato-600': error.value,

        // Disabled State
        'spr-background-color-disabled spr-border-white-100 focus:spr-border-white-100 spr-cursor-not-allowed !spr-text-white-400':
          disabled.value,

        // Readonly State
        'spr-cursor-default': readonly.value,
      },
    );

    const datePickerInputClasses = classNames(
      'spr-h-full spr-border-none spr-bg-transparent spr-outline-none',
      'spr-font-size-200',
      'placeholder:spr-text-color-weak',
      {
        'spr-text-color-strong': !disabled.value && !readonly.value,
        'spr-text-color-on-fill-disabled': disabled.value || readonly.value,
        'spr-cursor-not-allowed': disabled.value,
      },
    );

    const datePickerInputHelperClasses = classNames(
      'spr-body-sm-regular',
      'spr-flex spr-items-center spr-gap-size-spacing-5xs',
      'spr-mt-size-spacing-4xs',
      {
        'spr-text-color-danger-base': error.value,
        'spr-text-color-supporting': !error.value,
      },
    );

    const calendarTabItemsBaseClasses = classNames(
      'spr-relative spr-box-border spr-flex spr-h-[40px] spr-items-center spr-justify-center spr-p-2',
      'spr-transition spr-duration-150 spr-ease-in-out',
    );

    const monthsTabItemsBaseClasses = classNames(
      'spr-subheading-xs spr-relative spr-flex spr-cursor-pointer spr-items-center spr-justify-center spr-rounded-lg spr-p-4',
      'spr-border spr-border-solid',
      'spr-transition spr-duration-150 spr-ease-in-out',
      'active:spr-scale-95',
    );

    const yearsTabItemsBaseClasses = classNames(
      'spr-subheading-xs spr-relative spr-flex spr-cursor-pointer spr-items-center spr-justify-center spr-rounded-lg spr-p-4',
      'spr-border spr-border-solid',
      'spr-transition spr-duration-150 spr-ease-in-out',
      'active:spr-scale-95',
    );

    return {
      labelClasses,
      datePickerBaseInputClasses,
      datePickerInputClasses,
      datePickerInputHelperClasses,
      calendarTabItemsBaseClasses,
      monthsTabItemsBaseClasses,
      yearsTabItemsBaseClasses,
    };
  });

  const datePickerRef = ref<HTMLInputElement | null>(null);
  const monthInputRef = ref<HTMLInputElement | null>(null);
  const dateInputRef = ref<HTMLInputElement | null>(null);
  const yearInputRef = ref<HTMLInputElement | null>(null);

  const datePopperState = ref<boolean>(false);

  const currentTab = ref<string>('tab-calendar');

  const currentDate = ref(dayjs());

  const daysOfWeek = ref(
    Array.from({ length: 7 }, (_, i) => ({
      text: dayjs().day(i).format('dd'),
      fullText: dayjs().day(i).format('dddd'),
      dayValue: i,
    })),
  );

  const monthsList = ref(
    Array.from({ length: 12 }, (_, i) => ({
      text: dayjs().month(i).format('MMM'),
      fullText: dayjs().month(i).format('MMMM'),
      monthValue: i,
    })),
  );

  const monthInput = ref<string>('');
  const dateInput = ref<string>('');
  const yearInput = ref<string>('');

  const datePickerErrors = ref<{ title: string; message: string }[]>([]);

  // #region - Calendar Tab
  const calendarTabPageData = ref({
    selectedMonth: dayjs().month(),
    selectedYear: Number(currentYear.value),
    calendarDays: [] as Array<{ date: Date; inactive: boolean }>,
  });

  const calendarTabIsMinMonth = computed(() =>
    dayjs()
      .year(calendarTabPageData.value.selectedYear)
      .month(calendarTabPageData.value.selectedMonth)
      .isSame(dayjs().year(minMaxYear.value.min).month(0), 'month'),
  );

  const calendarTabIsMaxMonth = computed(() =>
    dayjs()
      .year(calendarTabPageData.value.selectedYear)
      .month(calendarTabPageData.value.selectedMonth)
      .isSame(dayjs().year(minMaxYear.value.max).month(11), 'month'),
  );

  const calendarTabUpdateCalendar = () => {
    const firstDay = dayjs()
      .year(calendarTabPageData.value.selectedYear)
      .month(calendarTabPageData.value.selectedMonth)
      .startOf('month')
      .day();

    const lastDate = dayjs()
      .year(calendarTabPageData.value.selectedYear)
      .month(calendarTabPageData.value.selectedMonth)
      .endOf('month')
      .date();

    const prevMonthDays = firstDay;
    const totalDays = prevMonthDays + lastDate;
    const nextMonthDays = totalDays % 7 === 0 ? 0 : 7 - (totalDays % 7);

    const calendar = [];

    // Previous month days
    for (let index = prevMonthDays; index > 0; index--) {
      const date = dayjs()
        .year(calendarTabPageData.value.selectedYear)
        .month(calendarTabPageData.value.selectedMonth)
        .date(-index + 1);

      calendar.push({ date, inactive: true });
    }

    // Current month days
    for (let index = 1; index <= lastDate; index++) {
      const date = dayjs()
        .year(calendarTabPageData.value.selectedYear)
        .month(calendarTabPageData.value.selectedMonth)
        .date(index);

      calendar.push({ date, inactive: false });
    }

    // Next month days
    for (let index = 1; index <= nextMonthDays; index++) {
      const date = dayjs()
        .year(calendarTabPageData.value.selectedYear)
        .month(calendarTabPageData.value.selectedMonth + 1)
        .date(index);

      calendar.push({ date, inactive: true });
    }

    calendarTabPageData.value.calendarDays = calendar.map((day) => ({ ...day, date: day.date.toDate() }));
  };

  const calendarTabPrevMonth = () => {
    if (calendarTabIsMinMonth.value) return;

    const newDate = dayjs()
      .year(calendarTabPageData.value.selectedYear)
      .month(calendarTabPageData.value.selectedMonth)
      .subtract(1, 'month');

    calendarTabPageData.value.selectedMonth = newDate.month();
    calendarTabPageData.value.selectedYear = newDate.year();

    calendarTabUpdateCalendar();
  };

  const calendarTabNextMonth = () => {
    if (calendarTabIsMaxMonth.value) return;

    const newDate = dayjs()
      .year(calendarTabPageData.value.selectedYear)
      .month(calendarTabPageData.value.selectedMonth)
      .add(1, 'month');

    calendarTabPageData.value.selectedMonth = newDate.month();
    calendarTabPageData.value.selectedYear = newDate.year();

    calendarTabUpdateCalendar();
  };

  const calendarTabIsRestDay = (day: { date: Date; inactive: boolean }) => {
    const restDaysValue = restDays.value.map((restDay) => {
      return daysOfWeek.value.find((d) => d.text.toLowerCase() === restDay.toLowerCase())?.dayValue;
    });

    if (calendarTabIsSelectedDate(day)) {
      return false;
    }

    if (restDaysValue.includes(day.date.getDay())) {
      return true;
    }

    return false;
  };

  const calendarTabIsTodayIndicator = (day: { date: Date }) => {
    if (day.date.toDateString() === currentDate.value.format('ddd MMM DD YYYY')) {
      return true;
    }

    return false;
  };

  const calendarTabIsActiveMonthDates = (day: { date: Date; inactive: boolean }) => {
    if (!day.inactive && !calendarTabIsDateIsDisabled(day)) {
      return true;
    }

    return false;
  };

  const calendarTabIsInactiveMonthDates = (day: { date: Date; inactive: boolean }) => {
    if (day.inactive && !calendarTabIsDateIsDisabled(day)) {
      return true;
    }

    return false;
  };

  const calendarTabIsSelectedDate = (day: { date: Date; inactive: boolean }) => {
    const monthValue = getMonthObject('text', monthInput.value)?.monthValue;

    // Check if only date is selected
    if (dateInput.value && !monthInput.value && !yearInput.value && !calendarTabIsDateIsDisabled(day)) {
      return day.date.getDate() === Number(dateInput.value) && !day.inactive;
    }

    // Check if date and month are selected, but not year
    if (dateInput.value && monthInput && !yearInput.value && !calendarTabIsDateIsDisabled(day)) {
      return day.date.getDate() === Number(dateInput.value) && day.date.getMonth() === monthValue && !day.inactive;
    }

    // Check if date, month, and year are selected
    if (dateInput.value && monthInput.value && yearInput.value && !calendarTabIsDateIsDisabled(day)) {
      return (
        day.date.getDate() === Number(dateInput.value) &&
        day.date.getMonth() === monthValue &&
        day.date.getFullYear().toString() === yearInput.value &&
        !day.inactive
      );
    }

    return false;
  };

  const calendarTabIsUnSelectedDate = (day: { date: Date }) => {
    const monthValue = getMonthObject('text', monthInput.value)?.monthValue;

    if (dateInput.value && !monthInput.value && !calendarTabIsDateIsDisabled(day)) {
      return day.date.getDate() !== Number(dateInput.value);
    }

    if (dateInput.value && monthInput && !calendarTabIsDateIsDisabled(day)) {
      return day.date.getDate() !== Number(dateInput.value) || day.date.getMonth() !== monthValue;
    }

    if (!dateInput.value && monthInput.value && !calendarTabIsDateIsDisabled(day)) {
      return true;
    }

    if (!dateInput.value && !monthInput.value && !calendarTabIsDateIsDisabled(day)) {
      return true;
    }

    return false;
  };

  const calendarTabIsDateIsDisabled = (day: { date: Date }) => {
    if (
      calendarTabIsDateDisabledFromTo(day) ||
      calendarTabIsDateDisabledPastDate(day) ||
      calendarTabIsDateDisabledFutureDate(day) ||
      calendarTabIsDateDisabledSelectedDates(day) ||
      calendarTabIsDateDisabledWeekends(day) ||
      calendarTabIsDateDisabledWeekdays(day) ||
      calendarTabIsDateDisabledSelectedDays(day)
    ) {
      return true;
    }

    return false;
  };

  const calendarTabIsDateDisabledFromTo = (day: { date: Date }) => {
    if (disabledDates?.value && disabledDates.value.from && disabledDates.value.to) {
      const disabledFrom = dayjs(disabledDates.value.from, 'MM-DD-YYYY').startOf('day');
      const disabledTo = dayjs(disabledDates.value.to, 'MM-DD-YYYY').endOf('day');

      const dayDate = dayjs(day.date);

      return dayDate.isSameOrAfter(disabledFrom, 'day') && dayDate.isSameOrBefore(disabledTo, 'day');
    }

    return false;
  };

  const calendarTabIsDateDisabledPastDate = (day: { date: Date }) => {
    if (disabledDates?.value && disabledDates?.value.pastDates) {
      const dayDate = dayjs(day.date);

      if (typeof disabledDates.value.pastDates === 'boolean') {
        return dayDate.isBefore(currentDate.value.startOf('day'));
      } else {
        const selectedDate = dayjs(disabledDates.value.pastDates);

        return dayDate.isBefore(dayjs(selectedDate, 'MM-DD-YYYY').startOf('day'));
      }
    }

    return false;
  };

  const calendarTabIsDateDisabledFutureDate = (day: { date: Date }) => {
    if (disabledDates?.value && disabledDates?.value.futureDates) {
      const dayDate = dayjs(day.date);

      if (typeof disabledDates.value.futureDates === 'boolean') {
        return dayDate.isAfter(currentDate.value.endOf('day'));
      } else {
        const selectedDate = dayjs(disabledDates.value.futureDates);

        return dayDate.isAfter(dayjs(selectedDate, 'MM-DD-YYYY').endOf('day'));
      }
    }

    return false;
  };

  const calendarTabIsDateDisabledSelectedDates = (day: { date: Date }) => {
    if (disabledDates?.value && disabledDates?.value.selectedDates && disabledDates.value.selectedDates.length > 0) {
      const dayDate = dayjs(day.date);

      disabledDates.value.selectedDates.forEach((_date) => {
        if (!dayjs(_date).isValid()) {
          console.error(`Error: disabledDates Props - Selected Dates - Invalid date format: "${_date}"`);
        }
      });

      return disabledDates.value.selectedDates.some((date) => dayDate.isSame(dayjs(date, 'MM-DD-YYYY'), 'day'));
    }

    return false;
  };

  const calendarTabIsDateDisabledWeekends = (day: { date: Date }) => {
    if (disabledDates?.value && disabledDates?.value.weekends) {
      const dayDate = dayjs(day.date);

      return dayDate.day() === 0 || dayDate.day() === 6;
    }

    return false;
  };

  const calendarTabIsDateDisabledWeekdays = (day: { date: Date }) => {
    if (disabledDates?.value && disabledDates?.value.weekdays) {
      const dayDate = dayjs(day.date);

      return dayDate.day() > 0 && dayDate.day() < 6;
    }

    return false;
  };

  const calendarTabIsDateDisabledSelectedDays = (day: { date: Date }) => {
    if (disabledDates?.value && disabledDates?.value.selectedDays) {
      const dayDate = dayjs(day.date);

      return disabledDates.value.selectedDays.some((day) => {
        const foundDay = daysOfWeek.value.find((d) => d.text.toLowerCase() === day.toLowerCase());

        if (!foundDay) {
          console.error(`Error: disabledDates Props - Selected Days - Invalid day: "${day}"`);
        }

        return foundDay ? dayDate.day() === daysOfWeek.value.indexOf(foundDay) : false;
      });
    }

    return false;
  };

  const calendarTabHandleDateInput = (day: { date: Date }) => {
    const selectedDate = dayjs(day.date);

    const formattedMonth = selectedDate.format('MM');
    const formattedDate = selectedDate.format('DD');
    const formattedYear = selectedDate.format('YYYY');

    monthInput.value = formattedMonth;
    dateInput.value = formattedDate;
    yearInput.value = formattedYear;

    // Update the model value with the formatted date using the specified format
    modelValue.value = selectedDate.format(format.value);

    calendarTabPageData.value.selectedMonth = day.date.getMonth();
    calendarTabPageData.value.selectedYear = day.date.getFullYear();

    handleConvertMonthIfValid();
    calendarTabUpdateCalendar();
    emitDateFormats();
    emitInputValue();

    datePickerErrors.value = [];

    emit('getDateErrors', datePickerErrors.value);

    setTimeout(() => {
      datePopperState.value = false;
    }, 100);
  };
  // #endregion - Calendar Tab

  // #region - Month Tab
  const monthTabHandleSelectedMonth = (selectedMonth: { text: string; fullText: string; monthValue: number }) => {
    currentTab.value = 'tab-calendar';

    const monthValue = selectedMonth.monthValue + 1;
    const formattedMonth = monthValue < 10 ? `0${monthValue}` : `${monthValue}`;

    monthInput.value = formattedMonth;
    calendarTabPageData.value.selectedMonth = selectedMonth.monthValue;

    handleConvertMonthIfValid();
    calendarTabUpdateCalendar();
    emitDateFormats();

    datePickerErrors.value = [];

    emit('getDateErrors', datePickerErrors.value);
  };
  // #endregion - Month Tab

  // #region - Year Tab
  const yearTabPageData = ref({
    currentPage: 0,
    itemsPerPage: 12,
    yearsArray: Array.from(
      { length: minMaxYear.value.max - minMaxYear.value.min + 1 },
      (_, index) => minMaxYear.value.min + index,
    ).filter((year) => year <= minMaxYear.value.max && year >= minMaxYear.value.min),
  });

  const yearTabCurrentYearPage = computed(() => {
    const start = yearTabPageData.value.currentPage * yearTabPageData.value.itemsPerPage;
    const remainingItems = yearTabPageData.value.yearsArray.slice(start);

    return remainingItems.length < yearTabPageData.value.itemsPerPage
      ? remainingItems
      : yearTabPageData.value.yearsArray.slice(start, start + yearTabPageData.value.itemsPerPage);
  });

  const yearsTabSetCurrentPageYear = () => {
    const currentYearIndex = yearTabPageData.value.yearsArray.indexOf(calendarTabPageData.value.selectedYear);

    if (currentYearIndex !== -1) {
      yearTabPageData.value.currentPage = Math.floor(currentYearIndex / yearTabPageData.value.itemsPerPage);
    }
  };

  const yearTabGoToPreviousPage = () => {
    if (yearTabPageData.value.currentPage > 0) {
      yearTabPageData.value.currentPage--;
    }
  };

  const yearTabGoToNextPage = () => {
    if (
      (yearTabPageData.value.currentPage + 1) * yearTabPageData.value.itemsPerPage <
      yearTabPageData.value.yearsArray.length
    ) {
      yearTabPageData.value.currentPage++;
    }
  };

  const yearTabIsPreviousButtonDisabled = computed(() => {
    return yearTabPageData.value.currentPage === 0;
  });

  const yearTabIsNextButtonDisabled = computed(() => {
    return (
      (yearTabPageData.value.currentPage + 1) * yearTabPageData.value.itemsPerPage >=
      yearTabPageData.value.yearsArray.length
    );
  });

  const yearTabHandleSelectedYear = (selectedYear: string) => {
    currentTab.value = 'tab-calendar';

    yearInput.value = selectedYear;
    calendarTabPageData.value.selectedYear = Number(selectedYear);

    handleConvertMonthIfValid();
    calendarTabUpdateCalendar();
    emitDateFormats();

    datePickerErrors.value = [];

    emit('getDateErrors', datePickerErrors.value);
  };
  // #endregion - Year Tab

  // #region - Helper Methods
  const isDatePickerPopperDisabled = computed(() => disabled.value || readonly.value);

  const setWarningPropsValue = (type: string) => {
    switch (type) {
      case 'MinMaxYear': {
        const _currentYear = Number(currentYear.value) || new Date().getFullYear();
        const { min, max } = minMaxYear.value;

        if (min > _currentYear || max < _currentYear) {
          console.error(
            `Error: minMaxYear Props - The current year (${_currentYear}) is outside of the valid range. ` +
              `min: ${min}, max: ${max}.`,
          );
        }

        break;
      }

      case 'disabledDatesToFrom': {
        if (disabledDates?.value?.from && disabledDates?.value?.to) {
          const disabledFromDate = dayjs(disabledDates.value.from, 'MM-DD-YYYY');
          const disabledToDate = dayjs(disabledDates.value.to, 'MM-DD-YYYY');

          if (disabledFromDate.isAfter(disabledToDate)) {
            console.error('Error: disabledDates props - The "from" date cannot be later than the "to" date.');
          }

          if (disabledToDate.isBefore(disabledFromDate)) {
            console.error('Error: disabledDates props - The "to" date cannot be earlier than the "from" date.');
          }
        }

        break;
      }

      default:
        break;
    }
  };

  const setModelValue = () => {
    if (modelValue.value) {
      // First try to parse with the specified format, then try default format as fallback
      let formattedDate = dayjs(modelValue.value, format.value);

      // If the date is not valid with the specified format, try with the default format
      if (!formattedDate.isValid()) {
        formattedDate = dayjs(modelValue.value, 'MM-DD-YYYY');
      }

      // If still not valid, try other common formats
      if (!formattedDate.isValid()) {
        const commonFormats = ['YYYY-MM-DD', 'MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY/MM/DD'];
        for (const fmt of commonFormats) {
          const tempDate = dayjs(modelValue.value, fmt);
          if (tempDate.isValid()) {
            formattedDate = tempDate;
            break;
          }
        }
      }

      if (formattedDate.isValid()) {
        const month = formattedDate.format('MM');
        const date = formattedDate.format('DD');
        const year = formattedDate.format('YYYY');

        handleValidateDate();

        monthInput.value = month;
        dateInput.value = date;
        yearInput.value = year;

        // Apply the specified format for the model value
        modelValue.value = formattedDate.format(format.value);

        calendarTabPageData.value.selectedMonth = formattedDate.get('month');
        calendarTabPageData.value.selectedYear = formattedDate.get('year');

        handleConvertMonthIfValid();
        calendarTabUpdateCalendar();
        emitDateFormats();

        // Use the specified format for the input value
        if (!monthInput.value && !dateInput.value && !yearInput.value) {
          emit('getInputValue', null);
        } else {
          emit('getInputValue', formattedDate.format(format.value));
        }
      } else {
        console.error(`Error: Could not parse date "${modelValue.value}" with format "${format.value}"`);
      }
    }
  };

  const getMonthObject = (field: string, value: string | number) => {
    return monthsList.value.find(
      (_month: MonthsList) =>
        _month[field as keyof MonthsList].toString().toLowerCase() === value.toString().toLowerCase(),
    );
  };

  const getDatePickerInputClasses = (width: string) => {
    return classNames(datePickerClasses.value.datePickerInputClasses, `spr-w-[${width}] spr-min-w-[${width}]`);
  };

  const getTabClasses = (tab: string) => {
    return classNames('spr-cursor-pointer', {
      'spr-background-color-pressed !spr-shadow-button': currentTab.value === tab,
    });
  };

  const handleMonthInput = () => {
    datePopperState.value = false;

    monthInput.value = monthInput.value.replace(/[^A-Za-z0-9\s]/g, '').toLocaleUpperCase();

    datePickerErrors.value = [];

    emit('getDateErrors', datePickerErrors.value);

    handleConvertMonthIfValid();

    handleValidateDate();

    // Do not set yearInput when typing monthInput
    if (!monthInput.value && !dateInput.value && !yearInput.value) {
      emit('getInputValue', null);
    }

    if (monthInput.value && dateInput.value && yearInput.value) {
      emitInputValue();
    }
  };

  const handleDateInput = () => {
    datePopperState.value = false;

    dateInput.value = dateInput.value.replace(/[^0-9]/g, '');

    datePickerErrors.value = [];

    emit('getDateErrors', datePickerErrors.value);

    handleValidateDate();

    // Do not set yearInput when typing dateInput
    if (!monthInput.value && !dateInput.value && !yearInput.value) {
      emit('getInputValue', null);
    }

    if (monthInput.value && dateInput.value && yearInput.value) {
      emitInputValue();
    }
  };

  const handleYearInput = () => {
    datePopperState.value = false;

    yearInput.value = yearInput.value.replace(/[^0-9]/g, '');

    datePickerErrors.value = [];

    emit('getDateErrors', datePickerErrors.value);

    // Only validate year, do not set monthInput or dateInput
    // Only emit year-related changes
    // Only validate if yearInput is 4 digits (full year)
    if (yearInput.value.length === 4) {
      handleValidateDate();

      if (!monthInput.value && !dateInput.value && !yearInput.value) {
        emit('getInputValue', null);
      }

      if (monthInput.value && dateInput.value && yearInput.value) {
        emitInputValue();
      }
    }
  };

  const handleConvertMonthIfValid = () => {
    if (monthInput.value.length >= 2) {
      const isNumeric = !isNaN(Number(monthInput.value)) && !isNaN(parseFloat(monthInput.value));

      if (isNumeric) {
        const sanitizeMonth = monthInput.value.replace(/\b0(\d)\b/g, '$1');
        const monthNumber = Number(sanitizeMonth);

        const monthIsValid = monthsList.value.find((_month: MonthsList) => _month.monthValue + 1 === monthNumber);

        if (monthIsValid) {
          monthInput.value = monthIsValid.text.toUpperCase();
        }
      } else {
        const monthIsValid = monthsList.value.find(
          (_month: MonthsList) => _month.text.toLowerCase() === monthInput.value.toLowerCase(),
        );

        if (monthIsValid) {
          monthInput.value = monthIsValid.text.toUpperCase();
        }
      }
    }
  };

  const handleValidateDate = useDebounceFn(() => {
    if (monthInput.value && dateInput.value && yearInput.value) {
      const selectedDate = `${monthInput.value}-${dateInput.value}-${yearInput.value}`;

      const isDateValid = dayjs(selectedDate, 'MM-DD-YYYY').isValid();
      const isYearValid =
        Number(yearInput.value) >= minMaxYear.value.min && Number(yearInput.value) <= minMaxYear.value.max;

      if (isDateValid && isYearValid) {
        datePickerErrors.value = datePickerErrors.value.filter((error) => error.title !== 'Invalid Date');

        const monthValue = getMonthObject('text', monthInput.value)?.monthValue;

        calendarTabPageData.value.selectedMonth = Number(monthValue);
        calendarTabPageData.value.selectedYear = Number(yearInput.value);

        calendarTabUpdateCalendar();
        emitDateFormats();
      } else {
        const errorExists = datePickerErrors.value.some((error) => error.title === 'Invalid Date');

        if (!errorExists) {
          let errorMessage;

          if (!isYearValid) {
            errorMessage = `Year must be between ${minMaxYear.value.min} and ${minMaxYear.value.max}.`;
          } else {
            errorMessage = `Invalid Date Format. Please use ${format.value}`;
          }

          datePickerErrors.value.push({
            title: 'Invalid Date',
            message: errorMessage,
          });

          datePopperState.value = false;

          emit('getDateErrors', datePickerErrors.value);

          console.error(`Invalid Date: "${selectedDate}". ${errorMessage}`);
        }
      }
    }
  }, 500);

  const handleTabClick = (tab: string) => {
    if (currentTab.value === tab) {
      currentTab.value = 'tab-calendar';
    } else {
      currentTab.value = tab;
    }
  };

  const handleBackspace = (inputType: string, event: KeyboardEvent) => {
    if (event && event instanceof KeyboardEvent && event.key === 'Backspace') {
      if (inputType === 'date' && dateInput.value === '') {
        nextTick(() => {
          if (monthInputRef.value) monthInputRef.value.focus();
        });
      }

      if (inputType === 'year' && yearInput.value === '') {
        nextTick(() => {
          if (dateInputRef.value) dateInputRef.value.focus();
        });
      }
    }
  };

  const emitDateFormats = () => {
    if (monthInput.value && dateInput.value && yearInput.value) {
      const monthIsValid = monthsList.value.find(
        (_month: MonthsList) => _month.text.toLowerCase() === monthInput.value.toLowerCase(),
      );
      const yearIsValid = yearTabPageData.value.yearsArray.find((_year) => _year === Number(yearInput.value));

      if (monthIsValid && yearIsValid) {
        const _date = dayjs(`${monthInput.value}-${dateInput.value}-${yearInput.value}`, 'MM-DD-YYYY');

        const formats = {
          // Standard date formats
          mmddyyyy: _date.format('MM-DD-YYYY'),
          ddmmyyyy: _date.format('DD-MM-YYYY'),
          yyyymmdd: _date.format('YYYY-MM-DD'),
          yyyyMMdd: _date.format('YYYY-MM-DD'),

          // Date with slashes and shortened styles
          mmddyyyyWithSlashes: _date.format('MM/DD/YYYY'),
          yyyyMMddWithSlashes: _date.format('YYYY/MM/DD'),

          // Short date formats
          shortDate: _date.format('MMM D, YYYY'),
          shortDateWithPeriod: _date.format('MMM. D, YYYY'),
          mmmdd: _date.format('MMM. DD'),

          // Full date format
          fullDate: _date.format('dddd, MMMM D, YYYY'),

          // Month and year formats
          monthYear: _date.format('MMMM YYYY'),

          // Miscellaneous formats
          mmddyy: _date.format('MMDDYY'),
          mm: _date.format('MM'),
          yyyy: _date.format('YYYY'),
          dd: _date.format('DD'),

          // ISO format with timezone offset
          isoDateWithTimeZone: _date.format('YYYY-MM-DDTHH:mm:ssZ'),

          // ISO format without timezone offset
          isoDateWithoutTimeZone: _date.format('YYYY-MM-DDTHH:mm:ss'),
        };

        emit('getDateFormats', formats);
      }
    }
  };

  const emitInputValue = () => {
    let emittedMonth = monthInput.value;

    const isNumeric = !isNaN(Number(monthInput.value)) && !isNaN(parseFloat(monthInput.value));

    if (!isNumeric) {
      const monthIsValid = monthsList.value.find(
        (_month: MonthsList) => _month.text.toLowerCase() === monthInput.value.toLowerCase(),
      );

      if (monthIsValid) {
        emittedMonth =
          monthIsValid.monthValue < 10 ? `0${monthIsValid.monthValue + 1}` : `${monthIsValid.monthValue + 1}`;
      }
    }
    // Format the date according to the format prop
    const dateObj = dayjs(`${emittedMonth}-${dateInput.value}-${yearInput.value}`, 'MM-DD-YYYY');

    // Use the specified format for the input value
    emit('getInputValue', (modelValue.value = dateObj.format(format.value)));
  };

  const emitMonthList = () => {
    emit('getMonthList', monthsList.value);
  };

  const emitYearList = () => {
    emit('getYearList', yearTabPageData.value.yearsArray);
  };
  // #endregion - Helper Methods

  const clearDate = () => {
    monthInput.value = '';
    dateInput.value = '';
    yearInput.value = '';
  };

  const handleSlotClick = () => {
    if(disabled.value || readonly.value) return;
    datePopperState.value = true;    
  };

  watch(datePopperState, (newValue) => {
    if (newValue === false) {
      setTimeout(() => {
        currentTab.value = 'tab-calendar';

        yearsTabSetCurrentPageYear();
      }, 500);
    }
  });

  watch(yearInput, (newValue) => {
    if (newValue) {
      const yearNumber = parseInt(newValue, 10);

      if (isNaN(yearNumber)) return;

      const yearIndex = yearTabPageData.value.yearsArray.indexOf(yearNumber);

      if (yearIndex !== -1) {
        const page = Math.floor(yearIndex / yearTabPageData.value.itemsPerPage);

        yearTabPageData.value.currentPage = page;
      }
    }
  });

  watch(minMaxYear, () => {
    yearTabPageData.value.yearsArray = Array.from(
      { length: minMaxYear.value.max - minMaxYear.value.min + 1 },
      (_, index) => minMaxYear.value.min + index,
    ).filter((year) => year <= minMaxYear.value.max && year >= minMaxYear.value.min);

    yearTabPageData.value.currentPage = 0;
  });

  onClickOutside(datePickerRef, () => {
    datePopperState.value = false;
  });

  onMounted(() => {
    setWarningPropsValue('MinMaxYear');
    setWarningPropsValue('disabledDatesToFrom');

    setModelValue();
    calendarTabUpdateCalendar();
    yearsTabSetCurrentPageYear();
    emitMonthList();
    emitYearList();
  });

  watch(modelValue, () => {
    setModelValue();
  });

  return {
    datePickerClasses,
    datePickerRef,
    monthInputRef,
    dateInputRef,
    yearInputRef,
    datePopperState,
    currentTab,
    currentDate,
    daysOfWeek,
    monthsList,
    dateInput,
    monthInput,
    yearInput,
    datePickerErrors,
    calendarTabPageData,
    calendarTabIsMinMonth,
    calendarTabIsMaxMonth,
    calendarTabPrevMonth,
    calendarTabNextMonth,
    calendarTabIsRestDay,
    calendarTabIsTodayIndicator,
    calendarTabIsActiveMonthDates,
    calendarTabIsInactiveMonthDates,
    calendarTabIsSelectedDate,
    calendarTabIsUnSelectedDate,
    calendarTabIsDateIsDisabled,
    calendarTabHandleDateInput,
    monthTabHandleSelectedMonth,
    yearTabCurrentYearPage,
    yearTabGoToPreviousPage,
    yearTabGoToNextPage,
    yearTabIsPreviousButtonDisabled,
    yearTabIsNextButtonDisabled,
    yearTabHandleSelectedYear,
    isDatePickerPopperDisabled,
    getMonthObject,
    getDatePickerInputClasses,
    getTabClasses,
    handleMonthInput,
    handleDateInput,
    handleYearInput,
    handleTabClick,
    handleBackspace,
    clearDate,
    handleSlotClick
  };
};
