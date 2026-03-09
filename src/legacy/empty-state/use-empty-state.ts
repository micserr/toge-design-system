import { toRefs, computed, ComputedRef } from 'vue';

import classNames from 'classnames';

import type { EmptyStatePropTypes } from './empty-state';

interface EmptyStateClasses {
  baseClasses: string;
  imageSizeClasses: string;
}

export const useEmptyState = (props: EmptyStatePropTypes) => {
  const { size, image, emptyStateCustomClasses } = toRefs(props);

  const containerClasses = computed(() => {
    return emptyStateClasses.value.baseClasses + ' ' + emptyStateCustomClasses.value;
  })

  const emptyStateClasses: ComputedRef<EmptyStateClasses> = computed(() => {
    const baseClasses = classNames(
      'spr-background-color spr-flex spr-h-full spr-w-full spr-flex-col spr-items-center spr-justify-center spr-gap-size-spacing-2xs spr-text-center',
      {
        'spr-px-size-spacing-sm spr-py-size-spacing-md spr-min-h-[240px]': size.value === 'small',
        'spr-px-size-spacing-sm spr-py-size-spacing-2xl spr-min-h-[360px]': size.value === 'large',
      },
    );

    const imageSizeClasses = classNames({
      'spr-h-[200px] spr-w-[200px]': size.value === 'large',
      'spr-h-[120px] spr-w-[120px]': size.value === 'small',
    });

    return {
      baseClasses,
      imageSizeClasses,
    };
  });

  const getImageUrl = computed(() => {
    return image.value ? new URL(`../../assets/images/empty-states/${image.value}.svg`, import.meta.url).href : '';
  });

  return {
    emptyStateClasses,
    getImageUrl,
    containerClasses
  };
};
