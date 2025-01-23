import { computed, ref } from 'vue';
import { useElementHover } from '@vueuse/core';
import { TooltipPropTypes } from './tooltip';

import classNames from 'classnames';

export const useTooltip = (props: TooltipPropTypes) => {
  const { position, text } = props as {
    text: string;
    position:
      | 'top'
      | 'top-start'
      | 'top-end'
      | 'bottom'
      | 'bottom-start'
      | 'bottom-end'
      | 'left'
      | 'left-start'
      | 'left-end'
      | 'right'
      | 'right-start'
      | 'right-end';
  };

  const componentRef = ref<HTMLDivElement | null>(null);
  const isHovered = useElementHover(componentRef);

  const tooltipClasses = computed(() => {
    // Tooltip Gap: 6px
    return classNames({
      hidden: !isHovered.value,
      'bottom-[calc(100%+6px)] left-[50%] translate-x-[-50%]': position === 'top',
      'bottom-[calc(100%+6px)] left-0': position === 'top-start',
      'bottom-[calc(100%+6px)] right-0': position === 'top-end',
      'top-[calc(100%+6px)] left-[50%] translate-x-[-50%]': position === 'bottom',
      'top-[calc(100%+6px)] left-0': position === 'bottom-start',
      'top-[calc(100%+6px)] right-0': position === 'bottom-end',
      'left-[calc(100%+6px)] top-[50%] translate-y-[-50%]': position === 'right',
      'left-[calc(100%+6px)] top-0': position === 'right-start',
      'left-[calc(100%+6px)] bottom-0': position === 'right-end',
      'right-[calc(100%+6px)] top-[50%] translate-y-[-50%]': position === 'left',
      'right-[calc(100%+6px)] top-0': position === 'left-start',
      'right-[calc(100%+6px)] bottom-0': position === 'left-end',
    });
  });

  return {
    componentRef,
    tooltipClasses,
    text,
  };
};
