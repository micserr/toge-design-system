import { computed, toRefs } from 'vue';
import classNames from 'classnames';
import type { LozengePropTypes } from './lozenge';

export const useLozenge = (props: LozengePropTypes) => {
  const { tone, fill } = toRefs(props);
  const lozengeClasses = computed(() => {
    return classNames({ 'flex flex-wrap rounded-md !border': !fill.value }, { 'flex flex-wrap': fill.value });
  });

  const lozengeToneClasses = computed(() => {
    return classNames({
      'text-color-pending-base background-color-pending-weak !border-color-pending-base':
        tone.value === 'pending' && !fill.value,
      'text-color-information-base background-color-information-weak !border-color-information-base':
        tone.value === 'information' && !fill.value,
      'text-color-success-base background-color-success-weak !border-color-success-base':
        tone.value === 'success' && !fill.value,
      'text-color-base background-color-base !border-color-base': tone.value === 'neutral' && !fill.value,
      'text-color-danger-base background-color-danger-weak !border-color-danger-base':
        tone.value === 'danger' && !fill.value,
      'text-color-caution-base background-color-caution-weak !border-color-caution-base':
        tone.value === 'caution' && !fill.value,
      'text-color-strong !border-color-base background-color': tone.value === 'plain' && !fill.value,

      'background-color-pending-base text-color-strong !border-none': tone.value === 'pending' && fill.value,
      'background-color-information-base text-color-inverted-strong !border-none':
        tone.value === 'information' && fill.value,
      'background-color-success-base text-color-inverted-strong': tone.value === 'success' && fill.value,
      'background-color-base text-color-strong !border-none': tone.value === 'neutral' && fill.value,
      'background-color-danger-base text-color-inverted-strong !border-none': tone.value === 'danger' && fill.value,
      'background-color-caution-base text-color-strong !border-none': tone.value === 'caution' && fill.value,
      'text-color-strong background-color !border-none': tone.value === 'plain' && fill.value,
    });
  });

  return {
    lozengeClasses,
    lozengeToneClasses,
  };
};
