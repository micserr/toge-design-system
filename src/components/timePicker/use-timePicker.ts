import { computed, ref, ComputedRef } from 'vue';
import dayjs from 'dayjs';
import type { TimePickerPropTypes, TimePickerEmitTypes } from './timePicker';
import type { SetupContext } from 'vue';

import classNames from 'classnames';

export const useTimePicker = (props: TimePickerPropTypes, emit: SetupContext<TimePickerEmitTypes>['emit']) => {
  const { error, disabled, format, interval, disableTyping, fullWidth } = props;

  const isOpen = ref<boolean>(false);
  const selectedValue = ref<string>('');

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
      'focus:border-kangkong-700',
      'focus:text-color-strong',
      'focus:border-[1.5px]',
      'outline-none',
      'ring-0',
      {
        'border-[1.5px]': error,
        'border-tomato-600': error,
        'focus:border-tomato-600': error,
        'border-white-100': disabled,
        'background-color-disabled': disabled,
        'cursor-not-allowed': disabled,
        'text-color-on-fill-disabled': disabled,
        'cursor-pointer': disableTyping,
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
        'w-full': fullWidth,
      },
    );
  });

  const iconClasses: ComputedRef<string> = computed(() => {
    return classNames('absolute right-3 text-color-supporting', {
      '!text-tomato-600': error,
    });
  });

  const labelClasses: ComputedRef<string> = computed(() => {
    return classNames('body-sm-regular text-color-strong block  mb-size-spacing-4xs ', {
      'text-color-on-fill-disabled': disabled,
    });
  });

  const wrapperClasses: ComputedRef<string> = computed(() => {
    return 'relative w-full';
  });

  const filterInput = (event: Event) => {
    const target = event.target as HTMLInputElement | null;

    if (!target) return;

    const input = target.value.toUpperCase();
    const regex = format === '12' ? /^[0-9:APM\s]*$/ : /^[0-9:]*$/;

    if (!regex.test(input)) {
      selectedValue.value = selectedValue.value.slice(0, -1);
    } else {
      selectedValue.value = input;
    }

    emit('update:modelValue', selectedValue.value);
  };

  const generateTimeOptions = (): string[] => {
    const options = [];
    const start = dayjs().startOf('day');
    const end = dayjs().endOf('day');

    let current = start;
    while (current.isBefore(end) || current.isSame(end)) {
      options.push(formatTime(current));
      current = current.add(interval, 'minute');
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
    emit('update:modelValue', option);
    isOpen.value = false;
  };

  const handleClick = (event: FocusEvent) => {
    if (disabled) {
      event.preventDefault();
      return;
    }
    isOpen.value = true;
  };

  const getPlaceHolder: ComputedRef<string> = computed(() => {
    return format === '12' ? 'HH : MM AM/PM' : 'HH : MM';
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
