import { onClickOutside, useVModel } from '@vueuse/core';
import { computed, ComputedRef, nextTick, onMounted, ref, SetupContext, toRefs, watch, useSlots } from 'vue';

import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

import classNames from 'classnames';

import type { DateRangePickerEmitTypes, DateRangePickerPropTypes } from './date-range-picker';
import { PLACEMENTS_TYPES } from './date-range-picker';

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
dayjs.extend(isBetween);

interface DateRangePickerClasses {
  labelClasses: string;
  dateRangePickerBaseInputClasses: string;
  dateRangePickerInputClasses: string;
  dateRangePickerInputHelperClasses: string;
  calendarTabItemsBaseClasses: string;
  monthsTabItemsBaseClasses: string;
  yearsTabItemsBaseClasses: string;
}

interface MonthsList {
  text: string;
  fullText: string;
  monthValue: number;
}

type DayAbbreviation = 'su' | 'mo' | 'tu' | 'we' | 'th' | 'fr' | 'sa';

export const useDateRangePicker = (
  props: DateRangePickerPropTypes,
  emit: SetupContext<DateRangePickerEmitTypes>['emit'],
) => {
  const { active, disabled, readonly, error, currentYear, minMaxYear, restDays, disabledDates, format } = toRefs(props);
  const slots = useSlots();

  const modelValue = useVModel(props, 'modelValue', emit);

  const dateRangePickerClasses: ComputedRef<DateRangePickerClasses> = computed(() => {
    const labelClasses = classNames('spr-body-sm-regular spr-text-color-strong spr-block', {
      'spr-text-color-on-fill-disabled': disabled.value,
    });

    const dateRangePickerBaseInputClasses = classNames(
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

    const dateRangePickerInputClasses = classNames(
      'spr-h-full spr-border-none spr-bg-transparent spr-outline-none',
      'spr-font-size-200',
      'placeholder:spr-text-color-weak',
      {
        'spr-text-color-strong': !disabled.value && !readonly.value,
        'spr-text-color-on-fill-disabled': disabled.value || readonly.value,
        'spr-cursor-not-allowed': disabled.value,
      },
    );

    const dateRangePickerInputHelperClasses = classNames(
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
      dateRangePickerBaseInputClasses,
      dateRangePickerInputClasses,
      dateRangePickerInputHelperClasses,
      calendarTabItemsBaseClasses,
      monthsTabItemsBaseClasses,
      yearsTabItemsBaseClasses,
    };
  });

  const dateRangePickerRef = ref<HTMLInputElement | null>(null);
  const startMonthInputRef = ref<HTMLInputElement | null>(null);
  const startDateInputRef = ref<HTMLInputElement | null>(null);
  const startYearInputRef = ref<HTMLInputElement | null>(null);
  const endMonthInputRef = ref<HTMLInputElement | null>(null);
  const endDateInputRef = ref<HTMLInputElement | null>(null);
  const endYearInputRef = ref<HTMLInputElement | null>(null);

  // Refs for container elements
  const startDateContainerRef = ref<HTMLElement | null>(null);
  const endDateContainerRef = ref<HTMLElement | null>(null);

  // Track which input was clicked
  const activeInputRef = ref<HTMLElement | null>(null);
  const clickedInputType = ref<'start' | 'end'>('start');

  const datePopperState = ref<boolean>(false);
  const currentTab = ref<string>('tab-calendar');
  const currentDate = ref(dayjs());
  const selectionMode = ref<'start' | 'end'>('start');

  const daysOfWeek = ref(
    Array.from({ length: 7 }, (_, i) => ({
      text: dayjs().day(i).format('dd'),
      fullText: dayjs().day(i).format('dddd'),
      dayValue: i,
    })),
  );

  const monthsList = ref<MonthsList[]>(
    Array.from({ length: 12 }, (_, i) => ({
      text: dayjs().month(i).format('MMM'),
      fullText: dayjs().month(i).format('MMMM'),
      monthValue: i,
    })),
  );

  // Start date inputs
  const startMonthInput = ref<string>('');
  const startDateInput = ref<string>('');
  const startYearInput = ref<string>('');

  // End date inputs
  const endMonthInput = ref<string>('');
  const endDateInput = ref<string>('');
  const endYearInput = ref<string>('');

  const dateRangePickerErrors = ref<{ title: string; message: string }[]>([]);

  // #region - Calendar Tab
  const calendarTabPageData = ref({
    selectedMonth: dayjs().month(),
    selectedYear: Number(currentYear.value),
    calendarDays: [] as Array<{ date: dayjs.Dayjs; inactive: boolean }>,
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
        .month(calendarTabPageData.value.selectedMonth)
        .date(lastDate + index);

      calendar.push({ date, inactive: true });
    }

    calendarTabPageData.value.calendarDays = calendar;
  };

  const calendarTabPrevMonth = () => {
    if (calendarTabPageData.value.selectedMonth === 0) {
      calendarTabPageData.value.selectedMonth = 11;
      calendarTabPageData.value.selectedYear--;
    } else {
      calendarTabPageData.value.selectedMonth--;
    }
    calendarTabUpdateCalendar();
  };

  const calendarTabNextMonth = () => {
    if (calendarTabPageData.value.selectedMonth === 11) {
      calendarTabPageData.value.selectedMonth = 0;
      calendarTabPageData.value.selectedYear++;
    } else {
      calendarTabPageData.value.selectedMonth++;
    }
    calendarTabUpdateCalendar();
  };

  const calendarTabIsRestDay = (day: { date: dayjs.Dayjs; inactive: boolean }) => {
    if (restDays.value.length === 0) return false;
    // Use 'dd' format returns e.g. 'Su', 'Mo', etc. We need to map to 'su', 'mo', etc.
    const dayOfWeek = day.date.format('dd').toLowerCase() as DayAbbreviation;
    return restDays.value.includes(dayOfWeek);
  };

  const calendarTabIsTodayIndicator = (day: { date: dayjs.Dayjs }) => {
    return day.date.isSame(dayjs(), 'day');
  };

  const calendarTabIsActiveMonthDates = (day: { date: dayjs.Dayjs; inactive: boolean }) => {
    return !day.inactive;
  };

  const calendarTabIsInactiveMonthDates = (day: { date: dayjs.Dayjs; inactive: boolean }) => {
    return day.inactive;
  };

  const calendarTabIsSelectedDate = (day: { date: dayjs.Dayjs; inactive: boolean }) => {
    const startDate = dayjs(modelValue.value.startDate).format('MM-DD-YYYY');
    const endDate = dayjs(modelValue.value.endDate).format('MM-DD-YYYY');

    const dayDate = day.date.format('MM-DD-YYYY');
    // If only start date is selected, highlight it
    if (startDate && !endDate) {
      return dayDate === startDate;
    }

    // If both dates are selected, highlight start and end
    if (startDate && endDate) {
      return dayDate === startDate || dayDate === endDate;
    }

    return false;
  };

  const calendarTabIsInRange = (day: { date: dayjs.Dayjs; inactive: boolean }) => {
    const startDate = modelValue.value.startDate;
    const endDate = modelValue.value.endDate;

    // Only show range when both dates are selected
    if (!startDate || !endDate) return false;

    const dayDate = day.date;
    const start = dayjs(startDate, 'MM-DD-YYYY');
    const end = dayjs(endDate, 'MM-DD-YYYY');

    return dayDate.isAfter(start, 'day') && dayDate.isBefore(end, 'day');
  };

  const calendarTabIsUnSelectedDate = (day: { date: dayjs.Dayjs }) => {
    const startDate = modelValue.value.startDate;
    const endDate = modelValue.value.endDate;

    if (!startDate || !endDate) return true;

    const dayDate = day.date.format('MM-DD-YYYY');
    return dayDate !== startDate && dayDate !== endDate;
  };

  const calendarTabIsDateIsDisabled = (day: { date: dayjs.Dayjs }) => {
    return (
      calendarTabIsDateDisabledFromTo(day) ||
      calendarTabIsDateDisabledPastDate(day) ||
      calendarTabIsDateDisabledFutureDate(day) ||
      calendarTabIsDateDisabledSelectedDates(day) ||
      calendarTabIsDateDisabledWeekends(day) ||
      calendarTabIsDateDisabledWeekdays(day) ||
      calendarTabIsDateDisabledSelectedDays(day)
    );
  };

  const calendarTabIsDateDisabledFromTo = (day: { date: dayjs.Dayjs }) => {
    if (!safeDisabledDates.value?.from || !safeDisabledDates.value?.to) return false;
    const dayDate = day.date;
    const fromDate = dayjs(safeDisabledDates.value.from, 'MM-DD-YYYY');
    const toDate = dayjs(safeDisabledDates.value.to, 'MM-DD-YYYY');
    return dayDate.isBetween(fromDate, toDate, 'day', '[]');
  };

  const calendarTabIsDateDisabledPastDate = (day: { date: dayjs.Dayjs }) => {
    if (!safeDisabledDates.value?.pastDates) return false;
    const dayDate = day.date;
    const currentDate = dayjs();

    if (typeof safeDisabledDates.value.pastDates === 'string') {
      const pastDate = dayjs(safeDisabledDates.value.pastDates, 'MM-DD-YYYY');
      return dayDate.isBefore(pastDate, 'day');
    }

    return dayDate.isBefore(currentDate, 'day');
  };

  const calendarTabIsDateDisabledFutureDate = (day: { date: dayjs.Dayjs }) => {
    if (!safeDisabledDates.value?.futureDates) return false;
    const dayDate = day.date;
    const currentDate = dayjs();

    if (typeof safeDisabledDates.value.futureDates === 'string') {
      const futureDate = dayjs(safeDisabledDates.value.futureDates, 'MM-DD-YYYY');
      return dayDate.isAfter(futureDate, 'day');
    }

    return dayDate.isAfter(currentDate, 'day');
  };

  const calendarTabIsDateDisabledSelectedDates = (day: { date: dayjs.Dayjs }) => {
    if (!safeDisabledDates.value?.selectedDates) return false;
    const dayDate = day.date.format('MM-DD-YYYY');
    return safeDisabledDates.value.selectedDates.includes(dayDate);
  };

  const calendarTabIsDateDisabledWeekends = (day: { date: dayjs.Dayjs }) => {
    if (!safeDisabledDates.value?.weekends) return false;
    const dayOfWeek = day.date.day();
    return dayOfWeek === 0 || dayOfWeek === 6;
  };

  const calendarTabIsDateDisabledWeekdays = (day: { date: dayjs.Dayjs }) => {
    if (!safeDisabledDates.value?.weekdays) return false;
    const dayOfWeek = day.date.day();
    return dayOfWeek >= 1 && dayOfWeek <= 5;
  };

  const calendarTabIsDateDisabledSelectedDays = (day: { date: dayjs.Dayjs }) => {
    if (!safeDisabledDates.value?.selectedDays) return false;
    const dayOfWeek = day.date.format('dd').toLowerCase() as DayAbbreviation;
    return safeDisabledDates.value.selectedDays.includes(dayOfWeek);
  };

  // Update calendarTabHandleDateInput to use format.value
  const calendarTabHandleDateInput = (day: { date: dayjs.Dayjs }) => {
    if (calendarTabIsDateIsDisabled(day)) return;

    const selectedDate = dayjs(day.date).format(format.value);

    // If no start date is selected, set it as start date
    if (!modelValue.value.startDate) {
      modelValue.value = {
        ...modelValue.value,
        startDate: selectedDate,
      };
      selectionMode.value = 'end';
    }
    // If start date is selected but no end date, set it as end date
    else if (!modelValue.value.endDate) {
      // If selected date is before start date, swap them
      if (dayjs(selectedDate, format.value).isBefore(dayjs(modelValue.value.startDate, format.value))) {
        modelValue.value = {
          startDate: selectedDate,
          endDate: modelValue.value.startDate,
        };
      } else {
        modelValue.value = {
          ...modelValue.value,
          endDate: selectedDate,
        };
      }
      selectionMode.value = 'start';
      datePopperState.value = false;
    }
    // If both dates are selected, start a new selection
    else {
      modelValue.value = {
        startDate: selectedDate,
        endDate: '',
      };
      selectionMode.value = 'end';
    }

    updateInputFields();
    emitRangeChange();
  };

  // #region - Month Tab
  const monthTabHandleSelectedMonth = (selectedMonth: { text: string; fullText: string; monthValue: number }) => {
    calendarTabPageData.value.selectedMonth = selectedMonth.monthValue;
    calendarTabUpdateCalendar();
    currentTab.value = 'tab-calendar';
  };

  // #region - Year Tab
  const yearsArray = Array.from(
    { length: minMaxYear.value.max - minMaxYear.value.min + 1 },
    (_, index) => minMaxYear.value.min + index,
  ).filter((year) => year <= minMaxYear.value.max && year >= minMaxYear.value.min);

  const yearTabPageData = ref({
    currentPage: 0,
    itemsPerPage: 12,
    yearsArray,
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
    calendarTabPageData.value.selectedYear = Number(selectedYear);
    // Fill the correct year input based on selectionMode
    if (selectionMode.value === 'start') {
      startYearInput.value = selectedYear;
    } else {
      endYearInput.value = selectedYear;
    }
    calendarTabUpdateCalendar();
    currentTab.value = 'tab-calendar';
    yearsTabSetCurrentPageYear();
  };

  // #region - Input Handling
  // Update setWarningPropsValue to use format.value for error messages
  const setWarningPropsValue = (type: 'startDate' | 'endDate' | 'range' | 'year') => {
    const warningProps = {
      startDate: {
        title: 'Invalid Start Date',
        message: `Please enter a valid start date in the format ${format.value}`,
      },
      endDate: {
        title: 'Invalid End Date',
        message: `Please enter a valid end date in the format ${format.value}`,
      },
      range: {
        title: 'Invalid Date Range',
        message: 'End date must be after start date',
      },
      year: {
        title: 'Invalid Year',
        message: 'Year must be between the minimum and maximum allowed years',
      },
    };

    const existingIndex = dateRangePickerErrors.value.findIndex((error) => error.title === warningProps[type].title);
    if (existingIndex === -1) {
      dateRangePickerErrors.value.push(warningProps[type]);
    }
  };

  const clearWarningPropsValue = (type: 'startDate' | 'endDate' | 'range' | 'year') => {
    const warningProps = {
      startDate: 'Invalid Start Date',
      endDate: 'Invalid End Date',
      range: 'Invalid Date Range',
      year: 'Invalid Year',
    };

    const index = dateRangePickerErrors.value.findIndex((error) => error.title === warningProps[type]);
    if (index !== -1) {
      dateRangePickerErrors.value.splice(index, 1);
    }
  };

  // Update setModelValue to use format.value for parsing and formatting
  const setModelValue = () => {
    const startDateValid = validateDate(startMonthInput.value, startDateInput.value, startYearInput.value);
    const endDateValid = validateDate(endMonthInput.value, endDateInput.value, endYearInput.value);

    if (startDateValid && endDateValid) {
      const startDate = `${startMonthInput.value}-${startDateInput.value}-${startYearInput.value}`;
      const endDate = `${endMonthInput.value}-${endDateInput.value}-${endYearInput.value}`;
      // Validate range
      if (dayjs(startDate, format.value).isAfter(dayjs(endDate, format.value))) {
        setWarningPropsValue('range');
        return;
      } else {
        clearWarningPropsValue('range');
      }
      modelValue.value = {
        startDate: dayjs(startDate, 'MMM-DD-YYYY').format(format.value),
        endDate: dayjs(endDate, 'MMM-DD-YYYY').format(format.value),
      };
      emitRangeChange();
    }
  };

  const validateDate = (month: string, date: string, year: string): boolean => {
    if (!month || !date || !year) return false;

    const monthObj = getMonthObject('monthValue', month);
    if (!monthObj) {
      setWarningPropsValue('startDate');
      return false;
    }

    const dayjsDate = dayjs(`${monthObj.monthValue + 1}-${date}-${year}`, 'M-D-YYYY');
    if (!dayjsDate.isValid()) {
      setWarningPropsValue('startDate');
      return false;
    }

    const yearNum = Number(year);
    if (yearNum < minMaxYear.value.min || yearNum > minMaxYear.value.max) {
      setWarningPropsValue('year');
      return false;
    }

    clearWarningPropsValue('startDate');
    clearWarningPropsValue('year');
    return true;
  };

  const getMonthObject = (field: 'text' | 'fullText' | 'monthValue', value: string | number) => {
    return monthsList.value.find((month) => month[field] === value);
  };

  const getDatePickerInputClasses = (width: string) => {
    return `spr-w-[${width}] spr-min-w-[${width}]`;
  };

  const getTabClasses = (tab: string) => {
    return classNames('spr-cursor-pointer', {
      'spr-background-color-pressed !spr-shadow-button': currentTab.value === tab,
    });
  };

  const handleStartMonthInput = () => {
    startMonthInput.value = startMonthInput.value.replace(/[^A-Za-z0-9\s]/g, '').toLocaleUpperCase();
    handleConvertMonthIfValid('start');
    setModelValue();
  };

  const handleStartDateInput = () => {
    if (startDateInput.value.length === 2) {
      const day = Number(startDateInput.value);
      if (day < 1 || day > 31) {
        startDateInput.value = '';
        return;
      }
    }
    setModelValue();
  };

  const handleStartYearInput = () => {
    if (startYearInput.value.length === 4) {
      const year = Number(startYearInput.value);
      if (year < minMaxYear.value.min || year > minMaxYear.value.max) {
        startYearInput.value = '';
        return;
      }
    }
    setModelValue();
  };

  const handleEndMonthInput = () => {
    endMonthInput.value = endMonthInput.value.replace(/[^A-Za-z0-9\s]/g, '').toLocaleUpperCase();
    handleConvertMonthIfValid('end');
    setModelValue();
  };

  const handleEndDateInput = () => {
    if (endDateInput.value.length === 2) {
      const day = Number(endDateInput.value);
      if (day < 1 || day > 31) {
        endDateInput.value = '';
        return;
      }
    }
    setModelValue();
  };

  const handleEndYearInput = () => {
    if (endYearInput.value.length === 4) {
      const year = Number(endYearInput.value);
      if (year < minMaxYear.value.min || year > minMaxYear.value.max) {
        endYearInput.value = '';
        return;
      }
    }
    setModelValue();
  };

  const handleConvertMonthIfValid = (type: 'start' | 'end') => {
    const monthInput = type === 'start' ? startMonthInput.value : endMonthInput.value;
    const monthObj = monthsList.value.find((month) => month.text.toLowerCase() === monthInput.toLowerCase());

    if (monthObj) {
      if (type === 'start') {
        startMonthInput.value = monthObj.text;
      } else {
        endMonthInput.value = monthObj.text;
      }
    }
  };

  const handleTabClick = (tab: string) => {
    currentTab.value = tab;
  };

  const handleBackspace = (inputType: string, event: KeyboardEvent) => {
    if (event && event instanceof KeyboardEvent && event.key === 'Backspace') {
      // Start date fields
      if (inputType === 'start-date' && startDateInput.value === '') {
        nextTick(() => {
          if (startMonthInputRef.value) startMonthInputRef.value.focus();
        });
      }
      if (inputType === 'start-year' && startYearInput.value === '') {
        nextTick(() => {
          if (startDateInputRef.value) startDateInputRef.value.focus();
        });
      }
      // End date fields
      if (inputType === 'end-date' && endDateInput.value === '') {
        nextTick(() => {
          if (endMonthInputRef.value) endMonthInputRef.value.focus();
        });
      }
      if (inputType === 'end-year' && endYearInput.value === '') {
        nextTick(() => {
          if (endDateInputRef.value) endDateInputRef.value.focus();
        });
      }
    }
  };

  const updateInputFields = () => {
    if (modelValue.value.startDate) {
      const startDate = dayjs(modelValue.value.startDate, 'MM-DD-YYYY');
      startMonthInput.value = startDate.format('MMM');
      startDateInput.value = startDate.format('DD');
      startYearInput.value = startDate.format('YYYY');
    }

    if (modelValue.value.endDate) {
      const endDate = dayjs(modelValue.value.endDate, 'MM-DD-YYYY');
      endMonthInput.value = endDate.format('MMM');
      endDateInput.value = endDate.format('DD');
      endYearInput.value = endDate.format('YYYY');
    }
  };

  const emitRangeChange = () => {
    const isValid = !dateRangePickerErrors.value.length;
    emit('rangeChange', {
      startDate: modelValue.value.startDate,
      endDate: modelValue.value.endDate,
      isValid,
    });
  };

  const emitDateFormats = () => {
    if (modelValue.value.startDate && modelValue.value.endDate) {
      const startDate = dayjs(modelValue.value.startDate, 'MM-DD-YYYY');
      const endDate = dayjs(modelValue.value.endDate, 'MM-DD-YYYY');

      const formats = {
        'MM-DD-YYYY': {
          startDate: startDate.format('MM-DD-YYYY'),
          endDate: endDate.format('MM-DD-YYYY'),
        },
        'YYYY-MM-DD': {
          startDate: startDate.format('YYYY-MM-DD'),
          endDate: endDate.format('YYYY-MM-DD'),
        },
        'MM/DD/YYYY': {
          startDate: startDate.format('MM/DD/YYYY'),
          endDate: endDate.format('MM/DD/YYYY'),
        },
        'DD-MM-YYYY': {
          startDate: startDate.format('DD-MM-YYYY'),
          endDate: endDate.format('DD-MM-YYYY'),
        },
      };

      emit('getDateFormats', formats);
    }
  };

  // Update emitInputValue to use format.value
  const emitInputValue = () => {
    emit('getInputValue', modelValue.value);
  };

  const emitMonthList = () => {
    emit('getMonthList', monthsList.value);
  };

  const emitYearList = () => {
    const years = Array.from(
      { length: minMaxYear.value.max - minMaxYear.value.min + 1 },
      (_, i) => minMaxYear.value.min + i,
    );
    emit('getYearList', years);
  };

  // #region - Watchers
  watch(
    modelValue,
    () => {
      updateInputFields();
      emitDateFormats();
      emitInputValue();
    },
    { deep: true },
  );

  watch(dateRangePickerErrors, () => {}, { deep: true });

  watch(
    minMaxYear,
    () => {
      yearTabPageData.value.yearsArray = Array.from(
        { length: minMaxYear.value.max - minMaxYear.value.min + 1 },
        (_, index) => minMaxYear.value.min + index,
      ).filter((year) => year <= minMaxYear.value.max && year >= minMaxYear.value.min);

      yearTabPageData.value.currentPage = 0;
      emitYearList();
    },
    { deep: true },
  );

  // #region - Lifecycle
  onMounted(() => {
    calendarTabUpdateCalendar();
    yearsTabSetCurrentPageYear();
    updateInputFields();
    emitMonthList();
    emitYearList();
  });

  const isDateRangePickerPopperDisabled = computed(() => {
    return disabled.value || readonly.value;
  });

  // Provide a default for disabledDates to avoid undefined errors
  const defaultDisabledDates = {
    from: '',
    to: '',
    pastDates: false,
    futureDates: false,
    selectedDates: [],
    weekends: false,
    weekdays: false,
    selectedDays: [],
  };
  const safeDisabledDates = computed(() => disabledDates?.value ?? defaultDisabledDates);

  onClickOutside(dateRangePickerRef, () => {
    datePopperState.value = false;
  });

  // #region - Positioning and Click Handling
  // Check if user is using custom slot (not the default fallback)
  const isUsingCustomSlot = computed(() => {
    return !!slots.default;
  });

  // Dynamic placement based on which input was clicked (only for default inputs)
  const dynamicPlacement = computed(() => {
    // Get the base placement from props (top or bottom)
    let basePlacement = props.placement;

    if (basePlacement !== 'top' && basePlacement !== 'bottom') {
      basePlacement = 'bottom';
    }

    if (clickedInputType.value === 'start') {
      // For start date: concatenate base placement with 'start'
      return `${basePlacement}-start`;
    } else {
      // For end date: concatenate base placement with 'end'
      return `${basePlacement}-end`;
    }
  });

  // Final placement: use dynamic for default inputs, standard for custom slots
  const finalPlacement = computed(() => {
    if (isUsingCustomSlot.value) {
      return props.placement; // Use standard placement from props
    } else {
      return dynamicPlacement.value as (typeof PLACEMENTS_TYPES)[number]; // Use dynamic placement for default inputs
    }
  });

  // Handle start date input clicks
  const handleStartDateClick = () => {
    if (disabled.value || readonly.value) return;

    clickedInputType.value = 'start';
    activeInputRef.value = startDateContainerRef.value;
    datePopperState.value = true;
  };

  // Handle end date input clicks
  const handleEndDateClick = () => {
    if (disabled.value || readonly.value) return;

    clickedInputType.value = 'end';
    activeInputRef.value = endDateContainerRef.value;
    datePopperState.value = true;
  };

  // Handle custom component clicks (for slot usage)
  const handleCustomComponentClick = (event: Event) => {
    if (disabled.value || readonly.value) return;

    // For custom slots, use the clicked element as reference
    activeInputRef.value = event.currentTarget as HTMLElement;
    datePopperState.value = true;
  };

  return {
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
    dateRangePickerErrors,
    calendarTabPageData,
    calendarTabIsMinMonth,
    calendarTabIsMaxMonth,
    calendarTabUpdateCalendar,
    calendarTabPrevMonth,
    calendarTabNextMonth,
    calendarTabIsRestDay,
    calendarTabIsTodayIndicator,
    calendarTabIsActiveMonthDates,
    calendarTabIsInactiveMonthDates,
    calendarTabIsSelectedDate,
    calendarTabIsInRange,
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
    getMonthObject,
    getDatePickerInputClasses,
    getTabClasses,
    isDateRangePickerPopperDisabled,
    handleStartMonthInput,
    handleStartDateInput,
    handleStartYearInput,
    handleEndMonthInput,
    handleEndDateInput,
    handleEndYearInput,
    handleTabClick,
    handleBackspace,
    selectionMode,
    isUsingCustomSlot,
    dynamicPlacement,
    finalPlacement,
    handleStartDateClick,
    handleEndDateClick,
    handleCustomComponentClick,
  };
};
