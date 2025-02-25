import { ref, toRefs, onMounted, watch, computed, ComputedRef } from 'vue';

import classNames from 'classnames';

import type { SetupContext } from 'vue';
import type { DatePickerPropTypes, DatePickerEmitTypes } from './date-picker';

export const useDatePicker = (props: DatePickerPropTypes, emit: SetupContext<DatePickerEmitTypes>['emit']) => {
  // const {} = toRefs(props);

  const datePopperState = ref<boolean>(false);

  return {
    datePopperState,
  };
};
