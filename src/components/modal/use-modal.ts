import { ref, watch, computed } from 'vue';
import type { SetupContext } from 'vue';
import type { ModalEmitTypes } from './modal';
import type { ModalPropTypes } from './modal';

import classNames from 'classnames';
export const useModal = (props: ModalPropTypes, emit: SetupContext<ModalEmitTypes>['emit']) => {
  const dialog = ref<HTMLDialogElement | null>(null);
  const { size } = props;

  const modalSizesClasses = computed(() => {
    return classNames({
      'tw-min-w-[360px] tw-max-w-[800px] ': size === 'sm',
      'tw-min-w-[480px] tw-max-w-[800px] ': size === 'md',
      'tw-w-[720px]': size === 'lg',
      'tw-w-[1280px]': size === 'xl',
    });
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
    dialog,
    modalSizesClasses,

    openModal,
    closeModal,
  };
};
