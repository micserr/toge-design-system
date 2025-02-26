import { ref, toRefs, computed, ComputedRef, SetupContext, onMounted, watch } from 'vue';
import { onClickOutside } from '@vueuse/core';

import classNames from 'classnames';

import type { DatePickerPropTypes, DatePickerEmitTypes } from './date-picker';

interface DatePickerClasses {
  labelClasses: string;
  datePickerBaseInputClasses: string;
}

export const useDatePicker = (props: DatePickerPropTypes, emit: SetupContext<DatePickerEmitTypes>['emit']) => {
  const { active, disabled, readonly, error, minYear, maxYear } = toRefs(props);

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

  const datePickerBaseInput = ref<HTMLInputElement | null>(null);

  onClickOutside(datePickerBaseInput, () => {
    datePopperState.value = false;
  });

  const datePopperState = ref<boolean>(false);

  const monthsList = ref<Array<string>>([
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]);

  const daysList = ref<Array<string>>(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);

  const monthInput = ref<string>('');
  const dayInput = ref<string>('');
  const yearInput = ref<string>('');

  const handleMonthInput = () => {
    monthInput.value = monthInput.value.replace(/[^A-Za-z]/g, '');
    monthInput.value = monthInput.value.toUpperCase();
  };

  const handleDayInput = () => {
    dayInput.value = dayInput.value.replace(/[^0-9]/g, '');
  };

  const handleYearInput = () => {
    yearInput.value = yearInput.value.replace(/[^0-9]/g, '');
  };

  const currentTab = ref<string>('tab-dates');

  const yearTabPageData = ref({
    yearsArray: Array.from({ length: maxYear.value - minYear.value + 1 }, (_, index) => minYear.value + index).filter(
      (year) => year <= maxYear.value && year >= minYear.value,
    ),
    currentPage: 0,
    itemsPerPage: 12,
  });

  const yearTabCurrentYearPage = computed(() => {
    const start = yearTabPageData.value.currentPage * yearTabPageData.value.itemsPerPage;
    const remainingItems = yearTabPageData.value.yearsArray.slice(start);

    return remainingItems.length < yearTabPageData.value.itemsPerPage
      ? remainingItems
      : yearTabPageData.value.yearsArray.slice(start, start + yearTabPageData.value.itemsPerPage);
  });

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

  onMounted(() => {
    yearTabPageData.value.currentPage = Math.floor(
      yearTabPageData.value.yearsArray.length / yearTabPageData.value.itemsPerPage,
    );
  });

  // Watch for changes to maxYear or minYear and adjust yearsArray
  watch([maxYear, minYear], () => {
    yearTabPageData.value.yearsArray = Array.from(
      { length: maxYear.value - minYear.value + 1 },
      (_, index) => minYear.value + index,
    ).filter((year) => year <= maxYear.value && year >= minYear.value);

    yearTabPageData.value.currentPage = 0;
  });

  return {
    datePickerClasses,
    datePickerBaseInput,
    datePopperState,
    monthsList,
    daysList,
    monthInput,
    dayInput,
    yearInput,
    handleMonthInput,
    handleDayInput,
    handleYearInput,
    currentTab,
    yearTabCurrentYearPage,
    yearTabGoToPreviousPage,
    yearTabGoToNextPage,
    yearTabIsPreviousButtonDisabled,
    yearTabIsNextButtonDisabled,
    minYear,
    maxYear,
  };
};
