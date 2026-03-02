import { ref, toRefs, computed, ComputedRef } from 'vue';

import classNames from 'classnames';

import type { SetupContext } from 'vue';
import type { ModalEmitTypes, ModalPropTypes } from './modal';

interface ModalClasses {
  backdropClasses: string;
  baseClasses: string;
  headerClasses: string;
  headerCloseButtonXClasses: string;
  contentClasses: string;
  footerClasses: string;
}

export const useModal = (props: ModalPropTypes, emit: SetupContext<ModalEmitTypes>['emit']) => {
  const { size, contentPadding, staticBackdrop } = toRefs(props);

  const modalClasses: ComputedRef<ModalClasses> = computed(() => {
    const backdropClasses = classNames(
      'spr-fixed spr-bottom-0 spr-left-0 spr-right-0 spr-top-0 spr-z-[1050] spr-h-full spr-w-full spr-bg-[#4C5857] spr-opacity-60',
    );

    const baseClasses = classNames(
      'spr-fixed spr-z-[1100] spr-left-1/2 spr-top-1/2 spr-transform -spr-translate-x-1/2 -spr-translate-y-1/2',
      'spr-background-color spr-rounded-xl',
      'spr-border spr-border-solid spr-border-color-weak',
      'spr-w-[calc(100%-2rem)] spr-max-w-[calc(100%-2rem)]',
      {
        'sm:spr-w-[360px] sm:spr-max-w-[480px]': size.value === 'sm',
        'sm:spr-w-[480px] sm:spr-max-w-[720px]': size.value === 'md',
        'md:spr-w-[720px] md:spr-max-w-[960px]': size.value === 'lg',
        'lg:spr-w-[900px] lg:spr-max-w-[1200px]': size.value === 'xl',
        'xl:spr-w-[1200px] xl:spr-max-w-[1400px]': size.value === 'xxl',
      },
      { 'bounce-animation': staticBackdropClicked.value },
    );

    const headerClasses = classNames(
      'spr-flex spr-items-start spr-justify-between spr-gap-2',
      'spr-text-color-strong spr-subheading-xs',
      'spr-border-color-weak spr-border-x-0 spr-border-b spr-border-t-0 spr-border-solid',
      'spr-rounded-tl-xl spr-rounded-tr-xl',
      'spr-p-2 sm:spr-px-4 sm:spr-py-3',
    );

    const headerCloseButtonXClasses = classNames(
      'spr-text-color-weak spr-subheading-xs spr-mt-0.5 spr-cursor-pointer',
      'spr-transition spr-duration-150 spr-ease-in-out',
      'hover:spr-text-color-base',
      'active:spr-text-color-strong active:spr-scale-75',
    );

    const contentClasses = classNames(
      'spr-body-sm-regular spr-max-h-[calc(100vh-200px)] spr-overflow-y-auto spr-overflow-x-hidden',
      {
        'spr-p-2 sm:spr-p-4': contentPadding.value,
      },
    );

    const footerClasses = classNames(
      'spr-border-color-weak spr-border-x-0 spr-border-b-0 spr-border-t spr-border-solid',
      'spr-flex spr-w-full spr-items-center spr-px-size-spacing-xs spr-py-size-spacing-2xs',
      'spr-text-color-strong spr-subheading-xs',
    );

    return {
      backdropClasses,
      baseClasses,
      headerClasses,
      headerCloseButtonXClasses,
      contentClasses,
      footerClasses,
    };
  });

  const staticBackdropClicked = ref(false);

  const handleCloseModal = () => {
    emit('update:modelValue', false);
  };

  const handleBackdropClick = () => {
    if (!staticBackdrop.value) {
      handleCloseModal();
    } else {
      staticBackdropClicked.value = true;

      setTimeout(() => {
        staticBackdropClicked.value = false;
      }, 500);
    }
  };

  return {
    modalClasses,
    staticBackdropClicked,
    handleCloseModal,
    handleBackdropClick,
  };
};
