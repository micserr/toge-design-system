import { computed } from 'vue';
import classNames from 'classnames';
import type { LozengePropTypes } from './lozenge';

export const useLozenge = (props: LozengePropTypes) => {
  const { tone, fill } = props;
  const lozengeClasses = computed(() => {
    return classNames({ 'flex flex-wrap rounded-md !border': !fill }, { 'flex flex-wrap': fill });
  });

  const lozengeToneClasses = computed(() => {
    return classNames({
      'text-color-pending-base background-color-pending-weak !border-color-pending-base': tone === 'pending' && !fill,
      'text-color-information-base background-color-information-weak !border-color-information-base':
        tone === 'information' && !fill,
      'text-color-success-base background-color-success-weak !border-color-success-base': tone === 'success' && !fill,
      'text-color-base background-color-base !border-color-base': tone === 'neutral' && !fill,
      'text-color-danger-base background-color-danger-weak !border-color-danger-base': tone === 'danger' && !fill,
      'text-color-caution-base background-color-caution-weak !border-color-caution-base': tone === 'caution' && !fill,
      'text-color-strong !border-color-base background-color': tone === 'plain' && !fill,

      'background-color-pending-base text-color-strong !border-none': tone === 'pending' && fill,
      'background-color-information-base text-color-inverted-strong !border-none': tone === 'information' && fill,
      'background-color-success-base text-color-inverted-strong': tone === 'success' && fill,
      'background-color-base text-color-strong !border-none': tone === 'neutral' && fill,
      'background-color-danger-base text-color-inverted-strong !border-none': tone === 'danger' && fill,
      'background-color-caution-base text-color-strong !border-none': tone === 'caution' && fill,
      'text-color-strong background-color !border-none': tone === 'plain' && fill,
    });
  });

  return {
    lozengeClasses,
    lozengeToneClasses,
  };
};
