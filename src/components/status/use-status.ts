import { computed, type ComputedRef } from 'vue';

import type { StatusPropTypes } from './status';

export const useStatus = (props: StatusPropTypes) => {

  const statusClass: ComputedRef<string> = computed(() => {
    const baseClasses = 'spr-w-6 spr-h-6 ';
    const stateClasses: Record<string, string> = {
      success: 'spr-text-kangkong-600',
      information: 'spr-text-blueberry-700',
      pending: 'spr-text-mango-500',
      caution: 'spr-text-carrot-500',
      danger: 'spr-text-tomato-600',
    };
    return baseClasses + (stateClasses[props.state] || 'spr-text-kangkong-600');
  });

  const statusIcon: ComputedRef<string> = computed(() => {
    const stateIcons: Record<string, string> = {
      success: 'ph:check-circle-fill',
      information: 'ph:info-fill',
      pending: 'ph:warning-fill',
      caution: 'ph:warning-fill',
      danger: 'ph:warning-circle-fill',
    };
    return stateIcons[props.state] || 'ph:check-circle-fill';
  });

  const statusDescription: ComputedRef<string> = computed(() => {
    const stateDescriptions: Record<string, string> = {
      success: 'Success',
      information: 'Information',
      pending: 'Pending',
      caution: 'Caution',
      danger: 'Danger',
    };
    return stateDescriptions[props.state] || 'Success';
  });

  return {
    statusIcon,
    statusClass,
    statusDescription
  };
};
