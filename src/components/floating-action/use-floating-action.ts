import { ref, watch, computed } from 'vue';
import type { FloatingActionProps } from './floating-action';
import classNames from 'classnames';

export function useFloatingAction(props: FloatingActionProps) {
  const isVisible = ref(props.show);

  const floatingActionClasses = computed(() => {
    const wrapperClass = classNames(
      'spr-bg-white-50 spr-body-md-regular spr-text-color-strong spr-bg-white spr-fixed spr-bottom-8 spr-left-1/2 spr-z-50 spr-flex spr-w-full spr-max-w-[1024px] spr--translate-x-1/2 spr-items-center spr-gap-4 spr-rounded-border-radius-md  spr-drop-shadow-md',
    );

    return {
      wrapperClass,
    };
  });

  watch(
    () => props.show,
    (newValue) => {
      isVisible.value = newValue;
    },
  );

  return { isVisible, floatingActionClasses };
}
