import { ref, toRefs, computed, ComputedRef, watch } from 'vue';

import classNames from 'classnames';

import type { SetupContext } from 'vue';
import type { ModalEmitTypes, ModalPropTypes } from './modal';

interface ModalClasses {
  baseClasses: string;
  sizeClasses: string;
}

export const useModal = (props: ModalPropTypes, emit: SetupContext<ModalEmitTypes>['emit']) => {
  const { size } = toRefs(props);

  const dialog = ref<HTMLDialogElement | null>(null);

  const modalClasses: ComputedRef<ModalClasses> = computed(() => {
    const baseClasses = classNames(
      'spr-modal spr-background-color spr-rounded-border-radius-xl spr-p-0 spr-drop-shadow-[0_2px_8px_-2px_rgba(38,43,43,0.20)]',
      'spr-border spr-border-solid spr-border-color-weak',
    );

    const sizeClasses = classNames({
      'spr-min-w-[360px] spr-max-w-[800px] ': size.value === 'sm',
      'spr-min-w-[480px] spr-max-w-[800px] ': size.value === 'md',
      'spr-w-[720px]': size.value === 'lg',
      'spr-w-[1280px]': size.value === 'xl',
    });

    return {
      baseClasses,
      sizeClasses,
    };
  });

  const openModal = () => {
    if (dialog.value) {
      dialog.value.showModal();
    }
  };

  const closeModal = () => {
    if (dialog.value) {
      dialog.value.close();
      emit('onClose');
    }
  };

  watch(
    () => props.open,
    (value) => {
      if (value) {
        openModal();
      } else {
        closeModal();
      }
    },
  );

  return {
    modalClasses,
    dialog,
    openModal,
    closeModal,
  };
};
