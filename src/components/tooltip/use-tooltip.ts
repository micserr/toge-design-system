import { computed, ref, toRefs } from 'vue';
import { useElementHover } from '@vueuse/core';
import { TooltipPropTypes } from './tooltip';

import classNames from 'classnames';

export const useTooltip = (props: TooltipPropTypes) => {
  const { position, text } = toRefs(props);

  const componentRef = ref<HTMLDivElement | null>(null);
  const isHovered = useElementHover(componentRef);

  const tooltipClasses = computed(() => {
    // Tooltip Gap: 6px
    return classNames({
      hidden: !isHovered.value,
      'bottom-[calc(100%+6px)] left-[50%] translate-x-[-50%]': position.value === 'top',
      'bottom-[calc(100%+6px)] left-0': position.value === 'top-start',
      'bottom-[calc(100%+6px)] right-0': position.value === 'top-end',
      'top-[calc(100%+6px)] left-[50%] translate-x-[-50%]': position.value === 'bottom',
      'top-[calc(100%+6px)] left-0': position.value === 'bottom-start',
      'top-[calc(100%+6px)] right-0': position.value === 'bottom-end',
      'left-[calc(100%+6px)] top-[50%] translate-y-[-50%]': position.value === 'right',
      'left-[calc(100%+6px)] top-0': position.value === 'right-start',
      'left-[calc(100%+6px)] bottom-0': position.value === 'right-end',
      'right-[calc(100%+6px)] top-[50%] translate-y-[-50%]': position.value === 'left',
      'right-[calc(100%+6px)] top-0': position.value === 'left-start',
      'right-[calc(100%+6px)] bottom-0': position.value === 'left-end',
    });
  });

  return {
    componentRef,
    tooltipClasses,
    text,
  };
};
