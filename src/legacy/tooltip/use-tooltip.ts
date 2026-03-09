import { ref } from 'vue';

import { Placement } from 'floating-vue';

import { TooltipPropTypes } from './tooltip';

export const useTooltip = (props: TooltipPropTypes) => {
  const placement = ref(props.placement as Placement);

  return {
    placement,
  };
};
