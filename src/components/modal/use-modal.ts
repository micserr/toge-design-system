import { ref, watch, computed, toRefs } from 'vue';

import classNames from 'classnames';

import type { SetupContext } from 'vue';
import type { ModalEmitTypes, ModalPropTypes } from './modal';

export const useModal = (props: ModalPropTypes, emit: SetupContext<ModalEmitTypes>['emit']) => {
  const dialog = ref<HTMLDialogElement | null>(null);
  const { size } = toRefs(props);

  const modalSizesClasses = computed(() => {
    return classNames({
      'spr-min-w-[360px] spr-max-w-[800px] ': size.value === 'sm',
      'spr-min-w-[480px] spr-max-w-[800px] ': size.value === 'md',
      'spr-w-[720px]': size.value === 'lg',
      'spr-w-[1280px]': size.value === 'xl',
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
