import { toRefs, computed, ComputedRef } from 'vue';

import classNames from 'classnames';

import { ChipsEmitTypes } from './chips';

import type { SetupContext } from 'vue';
import type { ChipsPropTypes } from './chips';

export const useChips = (props: ChipsPropTypes, emit: SetupContext<ChipsEmitTypes>['emit']) => {
  const { disabled, active, variant } = toRefs(props);

  const chipsBaseClasses: ComputedRef<string> = computed(() => {
    if (variant.value === 'day') {
      return classNames(
        'spr-background-color spr-label-xs-medium spr-inline-flex spr-items-center spr-justify-center spr-rounded-full spr-transition-all spr-aspect-square spr-h-10 spr-w-10 spr-body-sm-regular spr-border spr-border-solid',
        {
          // Base cursor state
          'hover:spr-cursor-pointer': !disabled.value,

          // Disabled state (highest priority)
          'spr-cursor-not-allowed spr-text-color-on-fill-disabled spr-background-color-disabled spr-border-color-disabled':
            disabled.value,

          // Active and enabled state
          'spr-text-color-strong spr-background-color-brand-base spr-text-color-inverted-strong spr-border-color-brand-base':
            active.value && !disabled.value,

          // Default state (with hover/pressed)
          'spr-text-color-strong spr-border-color-weak hover:spr-background-color-hover active:spr-background-color-pressed':
            !active.value && !disabled.value,
        },
      );
    }

    return classNames(
      'spr-body-xs-regular spr-py-1.5 spr-px-2 spr-text-color-strong spr-inline-flex spr-items-center spr-justify-center spr-gap-1 spr-rounded-full spr-transition-all spr-group',
      {
        // Base cursor state
        'hover:spr-cursor-pointer': !disabled.value,

        // Disabled state (highest priority)
        'spr-cursor-not-allowed spr-text-color-on-fill-disabled spr-background-color-disabled spr-border-solid spr-border-[1px] spr-border-color-disabled':
          disabled.value,

        // Active and enabled state
        'spr-background-color-brand-weak spr-border-solid spr-border-[1px] spr-border-color-brand-base':
          active.value && !disabled.value,

        // Default state (with hover/pressed)
        'spr-background-color-surface spr-border spr-border-solid spr-border-color-weak group-hover:spr-background-color-hover group-active:spr-background-color-pressed':
          !active.value && !disabled.value,

        // Reset close button styles
        '[&_.chips-close]:hover:spr-cursor-pointer [&_.chips-close]:spr-p-0 [&_.chips-close]:spr-m-0 [&_.chips-close]:spr-border-0 [&_.chips-close]:spr-bg-transparent [&_.chips-close]:spr-inline-flex [&_.chips-close]:spr-items-center [&_.chips-close]:spr-leading-[0]':
          true,
      },
    );
  });

  const handleClick = () => {
    if (!disabled.value) {
      emit('update', !active.value);
    }
  };

  const handleClose = (event: MouseEvent | KeyboardEvent) => {
    if (!disabled.value) {
      emit('close', event);
    }
  };

  return {
    chipsBaseClasses,
    handleClose,
    handleClick,
  };
};
