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

  const currentTab = ref<string>('tab-dates');

  const monthsList = ref<Array<{ text: string; fullText: string }>>([
    { text: 'Jan', fullText: 'January' },
    { text: 'Feb', fullText: 'February' },
    { text: 'Mar', fullText: 'March' },
    { text: 'Apr', fullText: 'April' },
    { text: 'May', fullText: 'May' },
    { text: 'Jun', fullText: 'June' },
    { text: 'Jul', fullText: 'July' },
    { text: 'Aug', fullText: 'August' },
    { text: 'Sep', fullText: 'September' },
    { text: 'Oct', fullText: 'October' },
    { text: 'Nov', fullText: 'November' },
    { text: 'Dec', fullText: 'December' },
  ]);

  const daysList = ref<Array<string>>(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);

  const monthInput = ref<string>('');
  const dayInput = ref<string>('');
  const yearInput = ref<string | null>(year.value ? year.value.toString() : null);

  const handleMonthInput = () => {
    monthInput.value = monthInput.value.replace(/[^A-Za-z]/g, '');
    monthInput.value = monthInput.value.toUpperCase();
  };

  const handleDayInput = () => {
    dayInput.value = dayInput.value.replace(/[^0-9]/g, '');
  };

  const handleYearInput = () => {
    if (yearInput.value) {
      yearInput.value = yearInput.value.replace(/[^0-9]/g, '');
    }
  };

  const handleSelectedMonth = (selectedMonth: { text: string; longText: string }) => {
    currentTab.value = 'tab-dates';
    monthInput.value = selectedMonth.text.toUpperCase();
  };

  const handleSelectedYear = (selectedYear: string) => {
    currentTab.value = 'tab-dates';
    yearInput.value = selectedYear;
  };

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

  const yearsTabSetCurrentPageToLast = () => {
    yearTabPageData.value.currentPage = Math.floor(
      yearTabPageData.value.yearsArray.length / yearTabPageData.value.itemsPerPage,
    );
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

  watch(datePopperState, (newValue) => {
    if (newValue === false) {
      setTimeout(() => {
        currentTab.value = 'tab-dates';

        yearsTabSetCurrentPageToLast();
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
    yearsTabSetCurrentPageToLast();
  });

  return {
    datePickerClasses,
    datePickerRef,
    datePopperState,
    currentTab,
    monthsList,
    daysList,
    monthInput,
    dayInput,
    yearInput,
    handleMonthInput,
    handleDayInput,
    handleYearInput,
    handleSelectedMonth,
    handleSelectedYear,
    yearTabCurrentYearPage,
    yearTabGoToPreviousPage,
    yearTabGoToNextPage,
    yearTabIsPreviousButtonDisabled,
    yearTabIsNextButtonDisabled,
  };
};
