import { toRefs, computed, ComputedRef, Slots } from 'vue';
import classNames from 'classnames';

import type { CardPropTypes } from './card';

interface CardClasses {
  baseClasses: string;
  headerClasses: string;
  contentPaddingSizeClasses: string;
  footerClasses: string;
}

export const useCard = (props: CardPropTypes, slots: Slots) => {
  const { title, headerIcon, borderRadiusSize, hasCollapsible, isCollapsibleOpen, hasContentPadding } = toRefs(props);

  const cardClasses: ComputedRef<CardClasses> = computed(() => {
    const baseClasses = classNames(
      `spr-bg-white-50 spr-text-color-strong spr-border spr-border-solid spr-border-mushroom-200`,
      {
        'spr-rounded-border-radius-2xs': borderRadiusSize.value === 'xs',
        'spr-rounded-border-radius-xs': borderRadiusSize.value === 'sm',
        'spr-rounded-border-radius-sm': borderRadiusSize.value === 'md',
        'spr-rounded-border-radius-md': borderRadiusSize.value === 'xs',
        'spr-rounded-border-radius-lg': borderRadiusSize.value === 'lg',
        'spr-rounded-border-radius-xl': borderRadiusSize.value === 'xl' || !borderRadiusSize.value,
      },
    );

    const headerClasses = classNames(`spr-flex spr-items-center transition-all duration-300 ease-in-out`, {
      'spr-min-h-[18px]': slots.header,
      'spr-border-0 spr-border-b spr-border-solid spr-border-mushroom-200':
        (title.value || headerIcon.value) && (slots.content || slots.default),
      'spr-border-transparent': hasCollapsible.value && !isCollapsibleOpen.value,
      'spr-py-size-spacing-2xs spr-px-size-spacing-xs': title.value || headerIcon.value,
      'spr-rounded-t-border-radius-2xs': borderRadiusSize.value === 'xs',
      'spr-rounded-t-border-radius-xs': borderRadiusSize.value === 'sm',
      'spr-rounded-t-border-radius-sm': borderRadiusSize.value === 'md',
      'spr-rounded-t-border-radius-md': borderRadiusSize.value === 'xs',
      'spr-rounded-t-border-radius-lg': borderRadiusSize.value === 'lg',
      'spr-rounded-t-border-radius-xl': borderRadiusSize.value === 'xl' || !borderRadiusSize.value,
    });

    const contentPaddingSizeClasses = classNames({
      'spr-py-size-spacing-2xs spr-px-size-spacing-xs': hasContentPadding.value,
    });

    const footerClasses = classNames(
      `spr-flex spr-items-center spr-border-0 spr-border-t spr-border-solid spr-border-mushroom-200 spr-py-size-spacing-2xs spr-px-size-spacing-xs`,
      {
        'spr-rounded-b-border-radius-2xs': borderRadiusSize.value === 'xs',
        'spr-rounded-b-border-radius-xs': borderRadiusSize.value === 'sm',
        'spr-rounded-b-border-radius-sm': borderRadiusSize.value === 'md',
        'spr-rounded-b-border-radius-md': borderRadiusSize.value === 'xs',
        'spr-rounded-b-border-radius-lg': borderRadiusSize.value === 'lg',
        'spr-rounded-b-border-radius-xl': borderRadiusSize.value === 'xl' || !borderRadiusSize.value,
      },
    );

    return {
      baseClasses,
      headerClasses,
      contentPaddingSizeClasses,
      footerClasses,
    };
  });

  return {
    cardClasses,
  };
};
