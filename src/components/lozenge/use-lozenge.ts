import { toRefs, computed, ComputedRef } from 'vue';

import classNames from 'classnames';

import type { LozengePropTypes } from './lozenge';

interface LozengeClasses {
  baseClasses: string;
  toneClasses: string;
}

export const useLozenge = (props: LozengePropTypes) => {
  const { tone, fill } = toRefs(props);

  const lozengeClasses: ComputedRef<LozengeClasses> = computed(() => {
    const baseClasses = classNames(
      { 'spr-flex spr-flex-wrap spr-rounded-md !spr-border': !fill.value },
      { 'spr-flex spr-flex-wrap': fill.value },
    );

    const toneClasses = classNames(
      'spr-label-xs-medium spr-inline-flex spr-items-center spr-gap-size-spacing-6xs spr-rounded-md spr-border spr-border-solid spr-p-size-spacing-5xs spr-text-xs spr-uppercase',
      {
        'spr-text-color-pending-base spr-background-color-pending-weak !spr-border-color-pending-base':
          tone.value === 'pending' && !fill.value,
        'spr-text-color-information-base spr-background-color-information-weak !spr-border-color-information-base':
          tone.value === 'information' && !fill.value,
        'spr-text-color-success-base spr-background-color-success-weak !spr-border-color-success-base':
          tone.value === 'success' && !fill.value,
        'spr-text-color-base spr-background-color-base !spr-border-color-base': tone.value === 'neutral' && !fill.value,
        'spr-text-color-danger-base spr-background-color-danger-weak !spr-border-color-danger-base':
          tone.value === 'danger' && !fill.value,
        'spr-text-color-caution-base spr-background-color-caution-weak !spr-border-color-caution-base':
          tone.value === 'caution' && !fill.value,
        'spr-text-color-strong !spr-border-color-base spr-background-color': tone.value === 'plain' && !fill.value,

        'spr-background-color-pending-base spr-text-color-strong !spr-border-0': tone.value === 'pending' && fill.value,
        'spr-background-color-information-base spr-text-color-inverted-strong !spr-border-0':
          tone.value === 'information' && fill.value,
        'spr-background-color-success-base spr-text-color-inverted-strong !spr-border-0':
          tone.value === 'success' && fill.value,
        'spr-background-color-base spr-text-color-strong !spr-border-0': tone.value === 'neutral' && fill.value,
        'spr-background-color-danger-base spr-text-color-inverted-strong !spr-border-0':
          tone.value === 'danger' && fill.value,
        'spr-background-color-caution-base spr-text-color-strong !spr-border-0': tone.value === 'caution' && fill.value,
        'spr-text-color-strong spr-background-color !spr-border-0': tone.value === 'plain' && fill.value,
      },
    );

    return {
      baseClasses,
      toneClasses,
    };
  });

  return {
    lozengeClasses,
  };
};
