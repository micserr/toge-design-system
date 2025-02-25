import { computed, ref, ComputedRef, toRefs } from 'vue';
import { useVModel } from '@vueuse/core';

import classNames from 'classnames';
import dayjs from 'dayjs';

import type { TimePickerPropTypes, TimePickerEmitTypes } from './time-picker';
import type { SetupContext } from 'vue';

export const useTimePicker = (props: TimePickerPropTypes, emit: SetupContext<TimePickerEmitTypes>['emit']) => {
  const { error, disabled, format, interval, disableTyping, fullWidth } = toRefs(props);

  const isOpen = ref<boolean>(false);
  const selectedValue = useVModel(props, 'modelValue', emit);

  const timepickerClasses: ComputedRef<string> = computed(() => {
    return classNames(
      'spr-block spr-w-full spr-px-size-spacing-2xs spr-py-size-spacing-4xs spr-rounded-border-radius-md spr-outline-none spr-ring-0',
      'spr-text-color-strong spr-font-size-200',
      'spr-border spr-border-solid spr-border-mushroom-200',
      'placeholder:spr-text-mushroom-300',
      'focus:!spr-border-kangkong-700 focus:spr-text-color-strong focus:!spr-border-[1.5px]',
      {
        '!spr-border-[1.5px]': error.value,
        '!spr-border-tomato-600': error.value,
        'focus:!spr-border-tomato-600': error.value,
        '!spr-border-white-100': disabled.value,
        'spr-background-color-disabled': disabled.value,
        'spr-cursor-not-allowed': disabled.value,
        'spr-text-color-on-fill-disabled': disabled.value,
        'spr-cursor-pointer': disableTyping.value,
      },
    );
  });

  const optionClasses: ComputedRef<string> = computed(() => {
    return classNames(
      'spr-absolute spr-z-50',
      'spr-mt-1 spr-max-h-[300px] spr-w-[240px] spr-overflow-y-auto spr-background-color spr-rounded-border-radius-md spr-shadow-[0_2px_8px_-2px_rgba(38, 43, 43, 0.20)] spr-p-size-spacing-3xs',
      'spr-text-mushroom-950',
      'spr-border spr-border-solid spr-border-color-weak',
      {
        'spr-w-full': fullWidth.value,
      },
    );
  });

  const iconClasses: ComputedRef<string> = computed(() => {
    return classNames('spr-absolute spr-right-3 spr-text-color-supporting', {
      '!spr-text-tomato-600': error.value,
    });
  });

  const labelClasses: ComputedRef<string> = computed(() => {
    return classNames('spr-body-sm-regular spr-text-color-strong spr-block spr-mb-size-spacing-4xs', {
      'spr-text-color-on-fill-disabled': disabled.value,
    });
  });

  const wrapperClasses: ComputedRef<string> = computed(() => {
    return 'spr-relative spr-w-full';
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
