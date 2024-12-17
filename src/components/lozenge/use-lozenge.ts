import type { SetupContext } from 'vue';
import type { RemoveEmitTypes } from './lozenge';

export const useLozenge = (emit: SetupContext<RemoveEmitTypes>['emit']) => {
  const hanndleRemoveLozenge = (evt: MouseEvent) => {
    emit('onRemove', evt);
  };

  return {
    hanndleRemoveLozenge,
  };
};
