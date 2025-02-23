import { computed, Slots } from 'vue';
import classNames from 'classnames';
import type { CardPropTypes } from './card';

export const useCard = (props: CardPropTypes, slots: Slots) => {
  const wrapperClasses = computed(() => {
    return classNames(`spr-bg-white-50 spr-text-color-strong spr-border spr-border-solid spr-border-mushroom-200`, {
      'spr-rounded-border-radius-2xs': props.borderRadiusSize === 'xs',
      'spr-rounded-border-radius-xs': props.borderRadiusSize === 'sm',
      'spr-rounded-border-radius-sm': props.borderRadiusSize === 'md',
      'spr-rounded-border-radius-md': props.borderRadiusSize === 'xs',
      'spr-rounded-border-radius-lg': props.borderRadiusSize === 'lg',
      'spr-rounded-border-radius-xl': props.borderRadiusSize === 'xl' || !props.borderRadiusSize,
    });
  });

  const headerClasses = computed(() => {
    return classNames(`spr-flex spr-items-center`, {
      'spr-min-h-[18px]': slots.header,
      'spr-border-0 spr-border-b spr-border-solid spr-border-mushroom-200': (props.title || props.headerIcon) && (slots.content || slots.default),
      'spr-py-size-spacing-2xs spr-px-size-spacing-xs': props.title || props.headerIcon,
      'spr-rounded-t-border-radius-2xs': props.borderRadiusSize === 'xs',
      'spr-rounded-t-border-radius-xs': props.borderRadiusSize === 'sm',
      'spr-rounded-t-border-radius-sm': props.borderRadiusSize === 'md',
      'spr-rounded-t-border-radius-md': props.borderRadiusSize === 'xs',
      'spr-rounded-t-border-radius-lg': props.borderRadiusSize === 'lg',
      'spr-rounded-t-border-radius-xl': props.borderRadiusSize === 'xl' || !props.borderRadiusSize,
    });
  });

  const footerClasses = computed(() => {
    return classNames(`spr-flex spr-items-center spr-border-0 spr-border-t spr-border-solid spr-border-mushroom-200 spr-py-size-spacing-2xs spr-px-size-spacing-xs`, {
      'spr-rounded-b-border-radius-2xs': props.borderRadiusSize === 'xs',
      'spr-rounded-b-border-radius-xs': props.borderRadiusSize === 'sm',
      'spr-rounded-b-border-radius-sm': props.borderRadiusSize === 'md',
      'spr-rounded-b-border-radius-md': props.borderRadiusSize === 'xs',
      'spr-rounded-b-border-radius-lg': props.borderRadiusSize === 'lg',
      'spr-rounded-b-border-radius-xl': props.borderRadiusSize === 'xl' || !props.borderRadiusSize,
    });
  });

  const contentPaddingSizeClasses = computed(() => {
    return classNames('spr-py-size-spacing-2xs spr-px-size-spacing-xs');
  });

  return {
    wrapperClasses,
    headerClasses,
    footerClasses,
    contentPaddingSizeClasses,
  };
};
