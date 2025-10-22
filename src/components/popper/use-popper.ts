import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

export const usePopper = () => {
  const popperRef = ref<HTMLDivElement | null>(null);
  const popperState = ref<boolean>(false);

  onClickOutside(popperRef, () => {
    popperState.value = false;
  });

  return {
    popperState,
    popperRef,
  };
};
