import { computed } from 'vue';
import type { EmptyStatePropTypes } from './emptyState';

import classNames from 'classnames';
export const useEmptyState = (props: EmptyStatePropTypes) => {
  const { size, image } = props;

  const emptyStateWrapperClasses = computed(() => {
    return classNames(
      'background-color flex h-full w-full flex-col items-center justify-center gap-size-spacing-2xs px-size-spacing-2xl py-size-spacing-3xl text-center min-h-[240px]',
      {
        'px-size-spacing-sm py-size-spacing-md min-h-[240px]': size === 'small',
        'px-size-spacing-sm py-size-spacing-2xl min-h-[360px]': size === 'large',
      },
    );
  });

  const imageSizeClasses = computed(() => {
    return classNames({
      'h-[200px] w-[200px]': size === 'large',
      'h-[120px] w-[120px]': size === 'small',
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
