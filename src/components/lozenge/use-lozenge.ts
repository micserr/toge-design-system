import { computed, toRefs } from 'vue';

import classNames from 'classnames';

import type { LozengePropTypes } from './lozenge';

export const useLozenge = (props: LozengePropTypes) => {
  const { tone, fill } = toRefs(props);

  const lozengeClasses = computed(() => {
    return classNames(
      { 'spr-flex spr-flex-wrap spr-rounded-md !spr-border': !fill.value },
      { 'spr-flex spr-flex-wrap': fill.value },
    );
  });

  const lozengeToneClasses = computed(() => {
    return classNames({
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
    });
  });

  return {
    lozengeClasses,
    lozengeToneClasses,
  };
};
