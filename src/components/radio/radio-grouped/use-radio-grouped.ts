import { toRefs, computed, ComputedRef } from 'vue';
import { useVModel } from '@vueuse/core';

import classNames from 'classnames';

import type { SetupContext } from 'vue';
import type { RadioGroupedPropTypes, RadioGroupedEmitTypes, RadioOption } from './radio-grouped';

interface RadioGroupedClasses {
  containerClasses: string;
  helperClasses: string;
}

export const useRadioGrouped = (props: RadioGroupedPropTypes, emit: SetupContext<RadioGroupedEmitTypes>['emit']) => {
  const { disabled, horizontalAlign, displayHelper, error, choiceBox } = toRefs(props);

  const radioGroupedClasses: ComputedRef<RadioGroupedClasses> = computed(() => {
    const alignmentMap = {
      left: 'spr-justify-start',
      center: 'spr-justify-center',
      right: 'spr-justify-end',
    };

    const containerClasses = classNames('spr-flex spr-flex-col spr-gap-2', {
      [alignmentMap[horizontalAlign.value as keyof typeof alignmentMap]]: true,
    });

    const helperClasses = classNames(
      'spr-flex spr-items-center spr-gap-1 spr-mt-size-spacing-2xs spr-body-sm-regular',
      {
        'spr-text-mushroom-600': !error.value,
        'spr-text-color-danger-base': error.value,
      },
    );

    return {
      containerClasses,
      helperClasses,
    };
  });

  const getOptionLabelClasses = (option: RadioOption, proxyValue): string => {
    return classNames('spr-body-sm-regular', {
      'spr-text-color-disabled': disabled.value || (option.disabled ?? false),
      'spr-text-color-strong':
        !disabled.value && !(option.disabled ?? false) && (!choiceBox.value || proxyValue !== option.value),
      'spr-text-color-specialty-token-dark':
        choiceBox.value && !disabled.value && !(option.disabled ?? false) && proxyValue === option.value,
    });
  };

  const proxyValue = useVModel(props, 'modelValue', emit);

  const renderOptions = (): RadioOption[] => {
    return props.options || [];
  };

  const isOptionDisabled = (option: RadioOption): boolean => {
    return disabled.value || (option.disabled ?? false);
  };

  return {
    radioGroupedClasses,
    proxyValue,
    renderOptions,
    isOptionDisabled,
    getOptionLabelClasses,
    disabled,
    displayHelper,
    horizontalAlign,
    error,
    choiceBox,
  };
};
