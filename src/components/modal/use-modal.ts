import { ref, toRefs, computed, ComputedRef, watch } from 'vue';

import classNames from 'classnames';

import type { SetupContext } from 'vue';
import type { ModalEmitTypes, ModalPropTypes } from './modal';

interface ModalClasses {
  baseClasses: string;
}

export const useModal = (props: ModalPropTypes, emit: SetupContext<ModalEmitTypes>['emit']) => {
  const { size, staticBackdrop } = toRefs(props);

  const modalClasses: ComputedRef<ModalClasses> = computed(() => {
    const baseClasses = classNames(
      'spr-absolute spr-z-[99999999] spr-left-1/2 spr-top-1/2 spr-transform -spr-translate-x-1/2 -spr-translate-y-1/2',
      'spr-background-color spr-rounded-xl',
      'spr-border spr-border-solid spr-border-color-weak',
      'sm:spr-w-[calc(100%-2rem)] sm:spr-max-w-[calc(100%-2rem)]',
      {
        'spr-w-[360px] spr-max-w-[800px]': size.value === 'sm',
        'spr-w-[480px] spr-max-w-[800px]': size.value === 'md',
        'spr-w-[720px] spr-max-w-[800px]': size.value === 'lg',
        'spr-w-[800px] spr-max-w-[800px]': size.value === 'xl',
      },
    );

    return {
      baseClasses,
    };
  });

  const handleCloseModal = () => {
    if (staticBackdrop.value) return;

    emit('update:modelValue', false);
  };

  return {
    modalClasses,
    handleCloseModal,
  };
};
