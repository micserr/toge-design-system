import { ref } from 'vue';

export const usePopper = () => {
  const popperRef = ref<HTMLDivElement | null>(null);

  return {
    popperRef,
  };
};
