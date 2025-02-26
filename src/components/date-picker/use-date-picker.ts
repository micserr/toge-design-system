import { ref, toRefs, onMounted, watch, computed, ComputedRef } from 'vue';
import { onClickOutside } from '@vueuse/core';

import classNames from 'classnames';

import type { SetupContext } from 'vue';
import type { DatePickerPropTypes, DatePickerEmitTypes } from './date-picker';

interface DatePickerClasses {
  labelClasses: string;
  datePickerBaseInputClasses: string;
}

export const useDatePicker = (props: DatePickerPropTypes, emit: SetupContext<DatePickerEmitTypes>['emit']) => {
  const { active, disabled, readonly, error } = toRefs(props);

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

  const daysList = ref<Array<string>>(['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']);

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
  };
};
