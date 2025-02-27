import { ref, toRefs, computed, ComputedRef, SetupContext, onMounted, watch } from 'vue';
import { onClickOutside } from '@vueuse/core';

import classNames from 'classnames';

import type { DatePickerPropTypes, DatePickerEmitTypes } from './date-picker';

interface DatePickerClasses {
  labelClasses: string;
  datePickerBaseInputClasses: string;
}

export const useDatePicker = (props: DatePickerPropTypes, emit: SetupContext<DatePickerEmitTypes>['emit']) => {
  const { active, disabled, readonly, error, year, minYear, maxYear } = toRefs(props);

  const datePickerClasses: ComputedRef<DatePickerClasses> = computed(() => {
    const labelClasses = classNames('spr-body-sm-regular spr-text-color-strong spr-block', {
      'spr-text-color-on-fill-disabled': disabled.value,
    });

    const datePickerBaseInputClasses = classNames(
      'spr-flex spr-w-full spr-items-center spr-gap-6 spr-rounded-lg spr-bg-white-50 spr-min-w-[336px] spr-py-1.5 spr-px-3',
      'spr-border spr-border-solid',
      {
        'spr-border-mushroom-200 focus:spr-border-kangkong-700': !error.value && !disabled.value && !active.value,
        'spr-border-kangkong-700 spr-border-[1.5px] spr-border-solid': active.value,
        'spr-border-tomato-600 focus:spr-border-tomato-600': error.value,
        'spr-background-color-disabled spr-border-white-100 focus:spr-border-white-100 spr-cursor-not-allowed spr-text-color-on-fill-disabled':
          disabled.value,
        'spr-cursor-pointer': readonly.value,
      },
    );

    return { labelClasses, datePickerBaseInputClasses };
  });

  const datePickerRef = ref<HTMLInputElement | null>(null);

  const datePopperState = ref<boolean>(false);

  const currentTab = ref<string>('tab-calendar');

  const daysOfWeek = ref<Array<{ text: string; fullText: string }>>([
    { text: 'Su', fullText: 'Sunday' },
    { text: 'Mo', fullText: 'Monday' },
    { text: 'Tu', fullText: 'Tuesday' },
    { text: 'We', fullText: 'Wednesday' },
    { text: 'Th', fullText: 'Thursday' },
    { text: 'Fr', fullText: 'Friday' },
    { text: 'Sa', fullText: 'Saturday' },
  ]);

  const monthsList = ref<Array<{ text: string; fullText: string; monthValue: number }>>([
    { text: 'Jan', fullText: 'January', monthValue: 0 },
    { text: 'Feb', fullText: 'February', monthValue: 1 },
    { text: 'Mar', fullText: 'March', monthValue: 2 },
    { text: 'Apr', fullText: 'April', monthValue: 3 },
    { text: 'May', fullText: 'May', monthValue: 4 },
    { text: 'Jun', fullText: 'June', monthValue: 5 },
    { text: 'Jul', fullText: 'July', monthValue: 6 },
    { text: 'Aug', fullText: 'August', monthValue: 7 },
    { text: 'Sep', fullText: 'September', monthValue: 8 },
    { text: 'Oct', fullText: 'October', monthValue: 9 },
    { text: 'Nov', fullText: 'November', monthValue: 10 },
    { text: 'Dec', fullText: 'December', monthValue: 11 },
  ]);

  const dateInput = ref<string>('');
  const monthInput = ref<string>('');
  const yearInput = ref<string | null>(year.value ? year.value.toString() : null);

  // #region - Calendar Tab
  const calendarTabPageData = ref({
    selectedMonth: new Date().getMonth(),
    selectedYear: new Date().getFullYear(),
    calendarDays: [] as Array<{ date: Date; inactive: boolean }>,
  });

  const calendarTabIsMinMonth = computed(
    () => calendarTabPageData.value.selectedYear === minYear.value && calendarTabPageData.value.selectedMonth === 0,
  );
  const calendarTabIsMaxMonth = computed(
    () => calendarTabPageData.value.selectedYear === maxYear.value && calendarTabPageData.value.selectedMonth === 11,
  );

  const calendarTabUpdateCalendar = () => {
    const firstDay = new Date(
      calendarTabPageData.value.selectedYear,
      calendarTabPageData.value.selectedMonth,
      1,
    ).getDay();
    const lastDate = new Date(
      calendarTabPageData.value.selectedYear,
      calendarTabPageData.value.selectedMonth + 1,
      0,
    ).getDate();
    const prevMonthDays = firstDay;
    const totalDays = prevMonthDays + lastDate;
    const nextMonthDays = totalDays % 7 === 0 ? 0 : 7 - (totalDays % 7);

    const calendar = [];

    // Previous month days
    for (let index = prevMonthDays; index > 0; index--) {
      const date = new Date(
        calendarTabPageData.value.selectedYear,
        calendarTabPageData.value.selectedMonth,
        -index + 1,
      );
      calendar.push({ date, inactive: true });
    }

    // Current month days
    for (let index = 1; index <= lastDate; index++) {
      const date = new Date(calendarTabPageData.value.selectedYear, calendarTabPageData.value.selectedMonth, index);
      calendar.push({ date, inactive: false });
    }

    // Next month days
    for (let index = 1; index <= nextMonthDays; index++) {
      const date = new Date(calendarTabPageData.value.selectedYear, calendarTabPageData.value.selectedMonth + 1, index);
      calendar.push({ date, inactive: true });
    }

    calendarTabPageData.value.calendarDays = calendar;
  };

  const calendarTabIsToday = (type: string, value: string | number) => {
    const today = new Date();

    if (type === 'date') {
      return new Date(value).toDateString() === today.toDateString();
    }

    if (type === 'month') {
      return today.getMonth() === value;
    }

    if (type === 'year') {
      return today.getFullYear() === value;
    }
  };

  const calendarTabGetMonthEquivalent = (monthValue: number) => {
    const month = monthsList.value.find((m) => m.monthValue === monthValue);

    return month ? month.fullText : '';
  };

  const calendarTabPrevMonth = () => {
    if (calendarTabIsMinMonth.value) return;

    if (calendarTabPageData.value.selectedMonth === 0) {
      calendarTabPageData.value.selectedMonth = 11;
      calendarTabPageData.value.selectedYear--;
    } else {
      calendarTabPageData.value.selectedMonth--;
    }

    calendarTabUpdateCalendar();
  };

  const calendarTabNextMonth = () => {
    if (calendarTabIsMaxMonth.value) return;

    if (calendarTabPageData.value.selectedMonth === 11) {
      calendarTabPageData.value.selectedMonth = 0;
      calendarTabPageData.value.selectedYear++;
    } else {
      calendarTabPageData.value.selectedMonth++;
    }

    calendarTabUpdateCalendar();
  };

  // #endregion - Calendar Tab

  // #region - Month Tab
  const monthTabHandleSelectedMonth = (selectedMonth: { text: string; fullText: string }) => {
    currentTab.value = 'tab-calendar';

    handleMonthInput(selectedMonth.text);
  };
  // #endregion - Month Tab

  // #region - Year Tab
  const yearTabPageData = ref({
    currentPage: 0,
    itemsPerPage: 12,
    yearsArray: Array.from({ length: maxYear.value - minYear.value + 1 }, (_, index) => minYear.value + index).filter(
      (year) => year <= maxYear.value && year >= minYear.value,
    ),
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

    handleYearInput(selectedYear);
  };
  // #endregion - Year Tab

  const handleDateInput = (selectedDate: string, selectedMonth: number | null, selectedYear: number | null) => {
    if (selectedDate) {
      dateInput.value = selectedDate.replace(/[^0-9]/g, '');

      if (selectedMonth !== null && selectedYear !== null) {
        const monthIsValid = monthsList.value.find((_month) => _month.monthValue === selectedMonth);
        const yearIsValid = yearTabPageData.value.yearsArray.find(
          (_year) => _year.toString() === selectedYear.toString(),
        );

        if (monthIsValid && yearIsValid) {
          monthInput.value = monthIsValid.text.toUpperCase();
          yearInput.value = yearIsValid.toString();

          calendarTabPageData.value.selectedMonth = selectedMonth;
          calendarTabPageData.value.selectedYear = selectedYear;

          calendarTabUpdateCalendar();
        }
      }
    }
  };

  const handleMonthInput = (selectedMonth: string | null) => {
    if (selectedMonth) {
      monthInput.value = selectedMonth.replace(/[^A-Za-z]/g, '').toUpperCase();

      const monthIsValid = monthsList.value.find(
        (_month) => _month.text.toLowerCase() === monthInput.value.toLowerCase(),
      );

      if (monthIsValid) {
        calendarTabPageData.value.selectedMonth = monthIsValid.monthValue;

        calendarTabUpdateCalendar();
      }
    }
  };

  const handleYearInput = (selectedYear: string | null) => {
    if (selectedYear) {
      yearInput.value = selectedYear.replace(/[^0-9]/g, '');

      const yearIsValid = yearTabPageData.value.yearsArray.find((_year) => _year.toString() === yearInput.value);

      if (yearIsValid) {
        calendarTabPageData.value.selectedYear = Number(yearInput.value);

        calendarTabUpdateCalendar();
      }
    }
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

  watch([maxYear, minYear], () => {
    yearTabPageData.value.yearsArray = Array.from(
      { length: maxYear.value - minYear.value + 1 },
      (_, index) => minYear.value + index,
    ).filter((year) => year <= maxYear.value && year >= minYear.value);

    yearTabPageData.value.currentPage = 0;
  });

  onClickOutside(datePickerRef, () => {
    datePopperState.value = false;
  });

  onMounted(() => {
    calendarTabUpdateCalendar();
    yearsTabSetCurrentPageYear();
  });

  return {
    datePickerClasses,
    datePickerRef,
    datePopperState,
    currentTab,
    daysOfWeek,
    monthsList,
    dateInput,
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
    yearTabHandleSelectedYear,
    handleDateInput,
    handleMonthInput,
    handleYearInput,
  };
};
