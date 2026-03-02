import { toRefs, computed, ComputedRef, Slots } from 'vue';
import classNames from 'classnames';

import type { CardPropTypes } from './card';

interface CardClasses {
  baseClasses: string;
  headerClasses: string;
  contentPaddingSizeClasses: string;
  footerClasses: string;
  hasFlexBox: string;
}

export const useCard = (props: CardPropTypes, slots: Slots) => {
  const {
    tone,
    title,
    headerIcon,
    borderRadiusSize,
    hasCollapsible,
    isCollapsibleOpen,
    hasContentPadding,
    flexbox,
    customBorderSize,
  } = toRefs(props);

  const cardClasses: ComputedRef<CardClasses> = computed(() => {
    const toneValue = tone?.value;

    const baseClasses = classNames(`spr-border-solid`, {
      // Tones
      'spr-background-color-base': !toneValue,
      'spr-background-color': toneValue === 'plain',
      'spr-background-color-surface': toneValue === 'neutral',
      'spr-background-color-success-weak': toneValue === 'success',
      'spr-background-color-information-weak': toneValue === 'information',
      'spr-background-color-pending-weak': toneValue === 'pending',
      'spr-background-color-caution-weak': toneValue === 'caution',
      'spr-background-color-accent-weak': toneValue === 'accent',
      'spr-background-color-danger-weak': toneValue === 'danger',

      // Borders
      'spr-border-color-weak': !toneValue || toneValue === 'plain',
      'spr-border-color-base': toneValue === 'neutral',
      'spr-border-color-success-base': toneValue === 'success',
      'spr-border-color-information-base': toneValue === 'information',
      'spr-border-color-pending-base': toneValue === 'pending',
      'spr-border-color-caution-base': toneValue === 'caution',
      'spr-border-color-accent-base': toneValue === 'accent',
      'spr-border-color-danger-base': toneValue === 'danger',

      // Border radius
      'spr-rounded-border-radius-2xs': borderRadiusSize.value === '2xs',
      'spr-rounded-border-radius-xs': borderRadiusSize.value === 'xs',
      'spr-rounded-border-radius-sm': borderRadiusSize.value === 'sm',
      'spr-rounded-border-radius-md': borderRadiusSize.value === 'md',
      'spr-rounded-border-radius-lg': borderRadiusSize.value === 'lg',
      'spr-rounded-border-radius-xl': borderRadiusSize.value === 'xl' || !borderRadiusSize.value,

      [`spr-border-[${customBorderSize.value}px]`]: customBorderSize.value,
      'spr-border-none': customBorderSize.value === '0',
    });

    const headerClasses = classNames(`spr-flex spr-items-center transition-all duration-300 ease-in-out`, {
      'spr-min-h-[18px]': slots.header,
      'spr-border-0 spr-border-b spr-border-solid spr-border-mushroom-200':
        (title.value || headerIcon.value) && (slots.content || slots.default),
      'spr-border-transparent': hasCollapsible.value && !isCollapsibleOpen.value,
      'spr-py-size-spacing-2xs spr-px-size-spacing-xs': title.value || headerIcon.value,
      'spr-rounded-t-border-radius-2xs': borderRadiusSize.value === '2xs',
      'spr-rounded-t-border-radius-xs': borderRadiusSize.value === 'xs',
      'spr-rounded-t-border-radius-sm': borderRadiusSize.value === 'sm',
      'spr-rounded-t-border-radius-md': borderRadiusSize.value === 'md',
      'spr-rounded-t-border-radius-lg': borderRadiusSize.value === 'lg',
      'spr-rounded-t-border-radius-xl': borderRadiusSize.value === 'xl' || !borderRadiusSize.value,
    });

    const contentPaddingSizeClasses = classNames({
      'spr-py-size-spacing-2xs spr-px-size-spacing-xs': hasContentPadding.value,
    });

    const footerClasses = classNames(
      `spr-flex spr-items-center spr-border-0 spr-border-t spr-border-solid spr-border-mushroom-200 spr-py-size-spacing-2xs spr-px-size-spacing-xs`,
      {
        'spr-rounded-b-border-radius-2xs': borderRadiusSize.value === '2xs',
        'spr-rounded-b-border-radius-xs': borderRadiusSize.value === 'xs',
        'spr-rounded-b-border-radius-sm': borderRadiusSize.value === 'sm',
        'spr-rounded-b-border-radius-md': borderRadiusSize.value === 'md',
        'spr-rounded-b-border-radius-lg': borderRadiusSize.value === 'lg',
        'spr-rounded-b-border-radius-xl': borderRadiusSize.value === 'xl' || !borderRadiusSize.value,
      },
    );

    const hasFlexBox = classNames({
      'spr-flex spr-flex-col spr-h-full': flexbox.value,
    });

    return {
      baseClasses,
      headerClasses,
      contentPaddingSizeClasses,
      footerClasses,
      hasFlexBox,
    };
  });

  return {
    cardClasses,
  };
};
