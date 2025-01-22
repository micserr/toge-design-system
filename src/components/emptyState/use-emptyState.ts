import { computed } from 'vue';
import type { EmptyStatePropTypes } from './emptyState';

import classNames from 'classnames';
export const useEmptyState = (props: EmptyStatePropTypes) => {
  const { size, image } = props;

  const emptyStateWrapperClasses = computed(() => {
    return classNames(
      'tw-background-color-surface tw-flex tw-h-full tw-w-full tw-flex-col tw-items-center tw-justify-center tw-gap-size-spacing-2xs tw-px-size-spacing-2xl tw-py-size-spacing-3xl tw-text-center',
    );
  });

  const imageSizeClasses = computed(() => {
    return classNames({
      'tw-h-[200px] tw-w-[200px]': size === 'large',
      'tw-h-[120px] tw-w-[120px]': size === 'small',
    });
  });

  const getImageUrl = computed(() => {
    return new URL(`../../assets/images/${image}.png`, import.meta.url).href;
  });

  return {
    emptyStateWrapperClasses,
    imageSizeClasses,
    getImageUrl,
  };
};
