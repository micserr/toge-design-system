import { computed, ref, ComputedRef, toRefs } from 'vue';
import { useVModel } from '@vueuse/core';

import classNames from 'classnames';
import dayjs from 'dayjs';

import type { TimePickerPropTypes, TimePickerEmitTypes } from './time-picker';
import type { SetupContext } from 'vue';

export const useTimePicker = (props: TimePickerPropTypes, emit: SetupContext<TimePickerEmitTypes>['emit']) => {
  const { format, interval, fullWidth } = toRefs(props);

  const isOpen = ref<boolean>(false);
  const selectedValue = useVModel(props, 'modelValue', emit);
  const uniqueId = ref<string>(`time-picker-${dayjs().valueOf()}-${Math.floor(Math.random() * 1000)}`);

  const optionClasses: ComputedRef<string> = computed(() => {
    return classNames('spr-max-h-[300px] spr-p-size-spacing-3xs spr-overflow-y-auto', {
      'spr-w-[240px]': !fullWidth.value,
    });
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
  };

  const getPlaceHolder: ComputedRef<string> = computed(() => {
    if (props.placeholder) return props.placeholder;

    return format.value === '12' ? 'HH : MM AM/PM' : 'HH : MM';
  });

  return {
    optionClasses,
    filteredOptions,
    selectedValue,
    isOpen,
    getPlaceHolder,
    uniqueId,

    filterInput,
    selectOption,
  };
};
