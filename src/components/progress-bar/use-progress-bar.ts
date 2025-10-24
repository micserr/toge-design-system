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

  return {
    handleProgressBarSize,
    validColor,
    percentage,
    handleProgressBarStyle,
  };
};
