import { toRefs, computed } from 'vue';
import { useVModel } from '@vueuse/core';

import classNames from 'classnames';

import type { SetupContext } from 'vue';
import type { TextAreaPropTypes, TextAreaEmitTypes } from './textarea';

export const useTextArea = (props: TextAreaPropTypes, emit: SetupContext<TextAreaEmitTypes>['emit']) => {
  const { error, disabled, readonly } = toRefs(props);

  const modelValue = useVModel(props, 'modelValue', emit);

  const textareaClasses = computed(() => {
    const wrapperClasses = classNames('spr-flex spr-flex-col spr-gap-size-spacing-4xs');

    const labelClasses = classNames('spr-body-sm-regular spr-text-color-strong spr-flex spr-gap-2', {
      'spr-text-color-on-fill-disabled': disabled.value,
      'spr-text-color-base': readonly.value,
    });

    const supportingLabelClasses = classNames('spr-body-sm-regular spr-text-color-supporting', {
      'spr-text-color-on-fill-disabled': disabled.value,
      'spr-text-color-base': readonly.value,
    });

    const textAreaClasses = classNames(
      'spr-block spr-w-full spr-px-size-spacing-2xs spr-py-size-spacing-4xs spr-rounded-border-radius-md spr-outline-none spr-ring-0 spr-resize-none spr-font-main',
      'spr-text-color-strong spr-font-size-200',
      'spr-border spr-border-solid',
      'placeholder:spr-text-mushroom-300',
      {
        'spr-border-mushroom-200 focus:spr-border-kangkong-700': !error.value && !disabled.value,
        'spr-border-tomato-600 focus:spr-border-tomato-600': error.value,
        'spr-background-color-disabled spr-border-white-100 focus:spr-border-white-100 spr-cursor-not-allowed spr-text-color-on-fill-disabled':
          disabled.value,
        'spr-background-color-disabled spr-border-white-100 focus:spr-border-white-100 spr-cursor-not-allowed   spr-text-color-base':
          readonly.value,
      },
    );

    const helperClasses = classNames('spr-body-sm-regular spr-flex spr-items-center spr-gap-size-spacing-5xs', {
      'spr-text-color-danger-base': error.value,
      'spr-text-color-supporting': !error.value,
    });

    const slotWrapperClasses = classNames('spr-flex spr-items-start', {
      'spr-justify-between': props.displayHelper && props.hasCounter,
      'spr-justify-end': !props.displayHelper && props.hasCounter,
    });

    return { wrapperClasses, labelClasses, supportingLabelClasses, textAreaClasses, helperClasses, slotWrapperClasses };
  });

  const onInput = (event: Event) => {
    modelValue.value = (event.target as HTMLInputElement).value;
  };

  return {
    textareaClasses,
    onInput,
  };
};
