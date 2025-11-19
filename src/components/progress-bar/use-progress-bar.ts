import { computed } from 'vue';

import type { ProgressBarPropTypes } from './progress-bar';

export const useProgressBar = (props: ProgressBarPropTypes) => {
  const handleProgressBarSize = computed<string>(() => {
    switch (props.size) {
      case 'xs':
        return 'spr-h-1';
      case 'sm':
        return 'spr-h-2';
      case 'lg':
        return 'spr-h-3';
      default:
        return 'spr-h-3';
    }
  });

  const validColor = computed<string>(() => {
    const validColors = ['success', 'danger', 'warning', 'info', 'neutral'];
    return validColors.includes(props.color) ? props.color : 'success';
  });

  const percentage = computed<number>(() => Math.min((props.value / (props.max || 100)) * 100, 100));

  const handleProgressBarStyle = computed<{ width: string; height: string }>(() => {
    return {
      width: percentage.value + '%',
      height: '100%',
    };
  });

  const containerClasses = computed<string>(() => {
    switch (props.labelPlacement) {
      case 'top':
        return 'spr-flex spr-flex-col-reverse spr-gap-size-spacing-5xs';
      case 'top-start':
        return 'spr-flex spr-flex-col-reverse spr-gap-size-spacing-5xs';
      case 'top-center':
        return 'spr-flex spr-flex-col-reverse spr-gap-size-spacing-5xs spr-items-center';
      case 'top-end':
        return 'spr-flex spr-flex-col-reverse spr-gap-size-spacing-5xs spr-items-end';
      case 'bottom':
        return 'spr-flex spr-flex-col spr-gap-size-spacing-5xs';
      case 'bottom-start':
        return 'spr-flex spr-flex-col spr-gap-size-spacing-5xs';
      case 'bottom-center':
        return 'spr-flex spr-flex-col spr-gap-size-spacing-5xs spr-items-center';
      case 'bottom-end':
        return 'spr-flex spr-flex-col spr-gap-size-spacing-5xs spr-items-end';
      case 'left':
        return 'spr-flex spr-flex-row spr-gap-size-spacing-5xs spr-items-center';
      case 'right':
        return 'spr-flex spr-flex-row-reverse spr-gap-size-spacing-5xs spr-items-center';
      default:
        return 'spr-flex spr-flex-col spr-gap-size-spacing-5xs';
    }
  });

  return {
    handleProgressBarSize,
    validColor,
    percentage,
    handleProgressBarStyle,
    containerClasses,
  };
};
