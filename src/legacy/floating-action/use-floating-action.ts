import { toRef, computed } from 'vue';
import type { FloatingActionProps } from './floating-action';

export function useFloatingAction(props: FloatingActionProps) {
  const isVisible = toRef(props, 'show');

  const floatingActionClasses = computed(() => {
    const wrapperClass = 'spr-bg-white-50 spr-body-md-regular spr-text-color-strong spr-bg-white spr-fixed spr-bottom-8 spr-left-1/2 spr-z-50 spr-flex spr-w-full spr-max-w-[1024px] spr--translate-x-1/2 spr-items-center spr-gap-4 spr-rounded-border-radius-md  spr-drop-shadow-md'

    return {
      wrapperClass,
    };
  });

  return { isVisible, floatingActionClasses };
}
