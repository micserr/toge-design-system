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
      'tw-hidden': !isHovered.value,
      'tw-bottom-[calc(100%+6px)] tw-left-[50%] tw-translate-x-[-50%]': position === 'top',
      'tw-bottom-[calc(100%+6px)] tw-left-0': position === 'top-start',
      'tw-bottom-[calc(100%+6px)] tw-right-0': position === 'top-end',
      'tw-top-[calc(100%+6px)] tw-left-[50%] tw-translate-x-[-50%]': position === 'bottom',
      'tw-top-[calc(100%+6px)] tw-left-0': position === 'bottom-start',
      'tw-top-[calc(100%+6px)] tw-right-0': position === 'bottom-end',
      'tw-left-[calc(100%+6px)] tw-top-[50%] tw-translate-y-[-50%]': position === 'right',
      'tw-left-[calc(100%+6px)] tw-top-0': position === 'right-start',
      'tw-left-[calc(100%+6px)] tw-bottom-0': position === 'right-end',
      'tw-right-[calc(100%+6px)] tw-top-[50%] tw-translate-y-[-50%]': position === 'left',
      'tw-right-[calc(100%+6px)] tw-top-0': position === 'left-start',
      'tw-right-[calc(100%+6px)] tw-bottom-0': position === 'left-end',
    });
  });

  return {
    componentRef,
    tooltipClasses,
    text,
  };
};
