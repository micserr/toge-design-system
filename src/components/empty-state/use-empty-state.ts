import { computed, toRefs } from 'vue';

import classNames from 'classnames';

import type { EmptyStatePropTypes } from './empty-state';

export const useEmptyState = (props: EmptyStatePropTypes) => {
  const { size, image } = toRefs(props);

  const emptyStateWrapperClasses = computed(() => {
    return classNames(
      'spr-background-color spr-flex spr-h-full spr-w-full spr-flex-col spr-items-center spr-justify-center spr-gap-size-spacing-2xs spr-px-size-spacing-2xl spr-py-size-spacing-3xl spr-text-center spr-min-h-[240px]',
      {
        'spr-px-size-spacing-sm spr-py-size-spacing-md spr-min-h-[240px]': size.value === 'small',
        'spr-px-size-spacing-sm spr-py-size-spacing-2xl spr-min-h-[360px]': size.value === 'large',
      },
    );
  });

  const imageSizeClasses = computed(() => {
    return classNames({
      'spr-h-[200px] spr-w-[200px]': size.value === 'large',
      'spr-h-[120px] spr-w-[120px]': size.value === 'small',
    });
  });

  const getImageUrl = computed(() => {
    return new URL(`../../assets/images/${image.value}.png`, import.meta.url).href;
  });

  return {
    emptyStateWrapperClasses,
    imageSizeClasses,
    getImageUrl,
  };
};
