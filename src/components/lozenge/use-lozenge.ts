import { toRefs, computed, ComputedRef, useSlots } from 'vue';
import classNames from 'classnames';
import type { LozengePropTypes } from './lozenge';

interface LozengeClasses {
  wrapperClasses: string;
  baseClasses: string;
  toneClasses: string;
  labelClasses: string;
}

export const useLozenge = (props: LozengePropTypes) => {
  const { tone, fill, loading, interactive, url, dropdown } = toRefs(props);
  const slots = useSlots();
  const isInteractive = computed(() => interactive.value || dropdown.value);

  const lozengeClasses: ComputedRef<LozengeClasses> = computed(() => {
    const wrapperClasses = classNames({
      'spr-h-fit spr-w-fit': !loading.value,
      'spr-flex spr-w-full': loading.value,
    });
    const baseClasses = classNames({
      'spr-flex spr-flex-wrap spr-rounded-md': !fill.value,
      'spr-flex spr-flex-wrap': fill.value,
      'spr-skeletal-loader spr-flex spr-h-6 spr-w-full spr-rounded-md': loading.value,
    });

    const toneClasses = classNames(
      'spr-box-border spr-h-[20px] spr-inline-flex spr-items-center spr-gap-size-spacing-6xs spr-rounded-md spr-border-solid spr-p-size-spacing-5xs spr-text-xs spr-uppercase',
      {
        'spr-h-[20px]': !url.value,
        'spr-h-[24px]': url.value || slots.avatar,
        'spr-border': !fill.value,
        'spr-cursor-pointer': isInteractive.value,
        // #region - Styles for hollow lozenge

        // Pending
        'spr-text-color-pending-base spr-background-color-pending-weak spr-border-color-pending-base':
          tone.value === 'pending' && !fill.value,
        'hover:spr-background-color-pending-weak-hover active:spr-background-color-pending-weak-pressed':
          tone.value === 'pending' && !fill.value && isInteractive.value,

        // Information
        'spr-text-color-information-base spr-background-color-information-weak spr-border-color-information-base':
          tone.value === 'information' && !fill.value,
        'hover:spr-background-color-information-weak-hover active:spr-background-color-information-weak-pressed':
          tone.value === 'information' && !fill.value && isInteractive.value,

        // Success
        'spr-text-color-success-base spr-background-color-success-weak spr-border-color-success-base':
          tone.value === 'success' && !fill.value,
        'hover:spr-background-color-success-weak-hover active:spr-background-color-success-weak-pressed':
          tone.value === 'success' && !fill.value && isInteractive.value,

        // Neutral
        'spr-text-color-base spr-background-color-surface-adaptive spr-border-color-base':
          tone.value === 'neutral' && !fill.value,

        // Danger
        'spr-text-color-danger-base spr-background-color-danger-weak spr-border-color-danger-base':
          tone.value === 'danger' && !fill.value,
        'hover:spr-background-color-danger-weak-hover active:spr-background-color-danger-weak-pressed':
          tone.value === 'danger' && !fill.value && isInteractive.value,

        // Caution
        'spr-text-color-caution-base spr-background-color-caution-weak spr-border-color-caution-base':
          tone.value === 'caution' && !fill.value,
        'hover:spr-background-color-caution-weak-hover active:spr-background-color-caution-weak-pressed':
          tone.value === 'caution' && !fill.value && isInteractive.value,

        // Plain
        'spr-text-color-strong spr-border-color-base spr-background-color': tone.value === 'plain' && !fill.value,

        // Shared hover/active for neutral and plain
        'hover:spr-background-color-hover active:spr-background-color-pressed':
          (tone.value === 'neutral' || tone.value === 'plain') && !fill.value && isInteractive.value,

        // #endregion - Styles for hollow (!fill) lozenge

        // #region - Styles for filled lozenge
        'spr-border-0': fill.value,
        'spr-text-color-strong':
          fill.value &&
          (tone.value === 'pending' || tone.value === 'neutral' || tone.value === 'caution' || tone.value === 'plain'),
        'spr-text-color-inverted-strong':
          fill.value && (tone.value === 'information' || tone.value === 'success' || tone.value === 'danger'),
        // Pending
        'spr-background-color-pending-base': tone.value === 'pending' && fill.value,
        'hover:spr-background-color-pending-hover active:spr-background-color-pending-pressed':
          tone.value === 'pending' && fill.value && isInteractive.value,
        // Information
        'spr-background-color-information-base': tone.value === 'information' && fill.value,
        'hover:spr-background-color-information-hover active:spr-background-color-information-pressed':
          tone.value === 'information' && fill.value && isInteractive.value,
        // Success
        'spr-background-color-success-base': tone.value === 'success' && fill.value,
        'hover:spr-background-color-success-hover active:spr-background-color-success-pressed':
          tone.value === 'success' && fill.value && isInteractive.value,
        // Neutral
        'spr-background-color-surface-adaptive': tone.value === 'neutral' && fill.value,
        // Danger
        'spr-background-color-danger-base': tone.value === 'danger' && fill.value,
        'hover:spr-background-color-danger-hover active:spr-background-color-danger-pressed':
          tone.value === 'danger' && fill.value && isInteractive.value,
        // Caution
        'spr-background-color-caution-base': tone.value === 'caution' && fill.value,
        'hover:spr-background-color-caution-hover active:spr-background-color-caution-pressed':
          tone.value === 'caution' && fill.value && isInteractive.value,

        // Plain
        'spr-background-color': tone.value === 'plain' && fill.value,

        // Shared hover/active for neutral and plain (filled)
        'hover:spr-background-color-surface active:spr-background-color-pressed':
          (tone.value === 'neutral' || tone.value === 'plain') && fill.value && isInteractive.value,
        // #endregion - Styles for filled lozenge
      },
    );

    const labelClasses = classNames(
      'spr-lozenge__label spr-label-xs-medium spr-flex-1 spr-min-w-0 spr-whitespace-nowrap spr-text-ellipsis spr-overflow-hidden',
    );

    return {
      wrapperClasses,
      baseClasses,
      toneClasses,
      labelClasses,
    };
  });

  return {
    lozengeClasses,
  };
};
