import { computed, ref, ComputedRef } from 'vue';

import classNames from 'classnames';

import type { SetupContext } from 'vue';
import type { SnackEmitTypes, SnackPropTypes } from './snack';

export const useSnack = (props: SnackPropTypes, emit: SetupContext<SnackEmitTypes>['emit']) => {
  const snackRef = ref<HTMLButtonElement | null>(null);

  const { text, actionText, tone, showAction, showIcon, duration, actionIconProps } = props;

  const snackProps: ComputedRef<Record<string, unknown>> = computed(() => {
    return {
      text: text,
      actionText: actionText,
      tone: tone,
      showAction: showAction,
      showIcon: showIcon,
      duration: duration,
      actionIconProps: actionIconProps
    };
  });

  const snackToneCssClass: ComputedRef<string> = computed(() => {
    return classNames({
      'spr-text-kangkong-500': tone === 'success',
      'spr-text-tomato-500': tone === 'danger',
      'spr-text-carrot-500': tone === 'caution',
      'spr-text-blueberry-500': tone === 'information',
    });
  });

  const snackIcon = computed(() => {
    if (props.tone == 'caution') return 'ph:warning-fill';
    else if (props.tone == 'danger') return 'ph:warning-circle-fill';
    else if (props.tone == 'success') return 'ph:check-circle-fill';
    return 'ph:info-fill';
  });

  const handleClick = (evt: MouseEvent) => {
    emit('click', evt);
  };

  return {
    snackRef,
    snackProps,
    snackToneCssClass,
    snackIcon,
    handleClick,
  };
};
