import { computed, ref, ComputedRef } from 'vue';
import dayjs from 'dayjs';
import type { TimePickerPropTypes, TimePickerEmitTypes } from './timePicker';
import type { SetupContext } from 'vue';

import classNames from 'classnames';

export const useTimePicker = (props: TimePickerPropTypes, emit: SetupContext<TimePickerEmitTypes>['emit']) => {
  const { error, disabled, format, interval, disableTyping } = props;

  const isOpen = ref<boolean>(false);
  const selectedValue = ref<string>('');

  const timepickerClasses: ComputedRef<string> = computed(() => {
    return classNames(
      'tw-block',
      'tw-w-full',
      'tw-px-size-spacing-2xs',
      'tw-py-size-spacing-4xs',
      'tw-rounded-border-radius-md',
      'placeholder:tw-text-mushroom-300',
      'tw-text-color-strong',
      'tw-font-size-200',
      'tw-border tw-border-solid tw-border-mushroom-200',
      'focus:tw-border-kangkong-700',
      'focus:tw-text-color-strong',
      'focus:tw-border-[1.5px]',
      'tw-outline-none',
      'tw-ring-0',
      {
        'tw-border-[1.5px]': error,
        'tw-border-tomato-600': error,
        'focus:tw-border-tomato-600': error,
        'tw-border-white-100': disabled,
        'tw-background-color-disabled': disabled,
        'tw-cursor-not-allowed': disabled,
        'tw-text-color-on-fill-disabled': disabled,
        'tw-cursor-pointer': disableTyping,
      },
    );
  });

  const optionClasses: ComputedRef<string> = computed(() => {
    return classNames(
      'tw-absolute',
      'tw-z-50 ',
      'tw-mt-1',
      'tw-max-h-[240px]',
      'tw-w-[160px]',
      'tw-overflow-y-auto',
      'tw-background-color ',
      'tw-text-mushroom-950',
      'tw-border tw-border-solid',
      'tw-rounded-border-radius-md',
      'tw-border-color-weak',
      'tw-shadow-[0_2px_8px_-2px_rgba(38, 43, 43, 0.20)]',
      'tw-p-size-spacing-3xs',
    );
  });

  const iconClasses: ComputedRef<string> = computed(() => {
    return classNames('tw-absolute tw-right-3 tw-text-color-supporting', {
      '!tw-text-tomato-600': error,
    });
  });

  const labelClasses: ComputedRef<string> = computed(() => {
    return classNames('tw-body-sm-regular tw-text-color-strong tw-block  tw-mb-size-spacing-4xs ', {
      'tw-text-color-on-fill-disabled': disabled,
    });
  });

  const wrapperClasses: ComputedRef<string> = computed(() => {
    return 'tw-relative tw-w-full';
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
