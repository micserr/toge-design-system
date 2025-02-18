import { computed, ref, ComputedRef, toRefs } from 'vue';
import dayjs from 'dayjs';
import type { TimePickerPropTypes, TimePickerEmitTypes } from './timePicker';
import type { SetupContext } from 'vue';
import { useVModel } from '@vueuse/core';

import classNames from 'classnames';

export const useTimePicker = (props: TimePickerPropTypes, emit: SetupContext<TimePickerEmitTypes>['emit']) => {
  const { error, disabled, format, interval, disableTyping, fullWidth } = toRefs(props);

  const isOpen = ref<boolean>(false);
  const selectedValue = useVModel(props, 'modelValue', emit);

  const timepickerClasses: ComputedRef<string> = computed(() => {
    return classNames(
      'block',
      'w-full',
      'px-size-spacing-2xs',
      'py-size-spacing-4xs',
      'rounded-border-radius-md',
      'placeholder:text-mushroom-300',
      'text-color-strong',
      'font-size-200',
      'border border-solid border-mushroom-200',
      'focus:!border-kangkong-700',
      'focus:text-color-strong',
      'focus:!border-[1.5px]',
      'outline-none',
      'ring-0',
      {
        '!border-[1.5px]': error.value,
        '!border-tomato-600': error.value,
        'focus:!border-tomato-600': error.value,
        '!border-white-100': disabled.value,
        'background-color-disabled': disabled.value,
        'cursor-not-allowed': disabled.value,
        'text-color-on-fill-disabled': disabled.value,
        'cursor-pointer': disableTyping.value,
      },
    );
  });

  const optionClasses: ComputedRef<string> = computed(() => {
    return classNames(
      'absolute',
      'z-50 ',
      'mt-1',
      'max-h-[300px]',
      'w-[240px]',
      'overflow-y-auto',
      'background-color ',
      'text-mushroom-950',
      'border border-solid',
      'rounded-border-radius-md',
      'border-color-weak',
      'shadow-[0_2px_8px_-2px_rgba(38, 43, 43, 0.20)]',
      'p-size-spacing-3xs',
      {
        'w-full': fullWidth.value,
      },
    );
  });

  const iconClasses: ComputedRef<string> = computed(() => {
    return classNames('absolute right-3 text-color-supporting', {
      '!text-tomato-600': error.value,
    });
  });

  const labelClasses: ComputedRef<string> = computed(() => {
    return classNames('body-sm-regular text-color-strong block  mb-size-spacing-4xs ', {
      'text-color-on-fill-disabled': disabled.value,
    });
  });

  const wrapperClasses: ComputedRef<string> = computed(() => {
    return 'relative w-full';
  });

  const filterInput = (event: Event) => {
    const target = event.target as HTMLInputElement | null;

    if (!target) return;

    const input = target.value.toUpperCase();
    const regex = format.value === '12' ? /^[0-9:APM\s]*$/ : /^[0-9:]*$/;

    if (!regex.test(input)) {
      selectedValue.value = selectedValue.value?.slice(0, -1);
    } else {
      selectedValue.value = input;
    }
  };

  const generateTimeOptions = (): string[] => {
    const options = [];
    const start = dayjs().startOf('day');
    const end = dayjs().endOf('day');

    let current = start;
    while (current.isBefore(end) || current.isSame(end)) {
      options.push(formatTime(current));
      current = current.add(interval.value, 'minute');
    }

    return options;
  };

  const formatTime = (date: dayjs.Dayjs): string => {
    let hours = date.hour();
    const minutes = date.minute().toString().padStart(2, '0');
    if (props.format === '12') {
      const period = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format
      return `${hours.toString().padStart(2, '0')}:${minutes} ${period}`;
    }
    return `${hours.toString().padStart(2, '0')}:${minutes}`;
  };

  const timeOptions: ComputedRef<string[]> = computed(() => generateTimeOptions());

  const filteredOptions = computed(() => {
    return timeOptions.value;
  });

  const selectOption = (option: string) => {
    selectedValue.value = option;
    isOpen.value = false;
  };

  const handleClick = (event: FocusEvent) => {
    if (disabled.value) {
      event.preventDefault();
      return;
    }
    isOpen.value = true;
  };

  const getPlaceHolder: ComputedRef<string> = computed(() => {
    return format.value === '12' ? 'HH : MM AM/PM' : 'HH : MM';
  });

  return {
    timepickerClasses,
    optionClasses,
    iconClasses,
    labelClasses,
    wrapperClasses,
    filteredOptions,
    selectedValue,
    isOpen,
    getPlaceHolder,

    filterInput,
    selectOption,
    handleClick,
  };
};
