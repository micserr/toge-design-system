import { ref, computed, toRefs, watch, onMounted, onUnmounted } from 'vue';

import classNames from 'classnames';
import type { SetupContext } from 'vue';
import type { SidepanelPropTypes, SidepanelEmitTypes } from './sidepanel';

export const useSidepanel = (props: SidepanelPropTypes, emit: SetupContext<SidepanelEmitTypes>['emit']) => {
  const sidepanelRef = ref<HTMLDivElement | null>(null);
  const { size, position } = toRefs(props);

  const sidepanelSizesClasses = computed(() => {
    return classNames({
      'w-[360px]': size.value === 'sm',
      'w-[420px]': size.value === 'md',
      'w-[480px]': size.value === 'lg',
    });
  });

  const sidepanelStartEndState = computed(() => {
    return classNames({
      'translate-x-full -translate-y-2/4': position.value === 'right'
    })
  })

  const sidepanelMidState = computed(() => {
    return classNames({
      'translate-x-0 -translate-y-2/4': position.value === 'right'
    })
  })

  const handleClose = () => {
    emit('close');
  };

  const handleBackdropClick = () => {
    if (props.closeOutside) {
      emit('close')
    }
  }

  let ignoreClick = false;

  const handleClickOutside = (event: MouseEvent) => {
    if (ignoreClick) return;
    if (sidepanelRef.value && !sidepanelRef.value.contains(event.target as Node) && props.closeOutside) {
      emit('close')
    }
  };

  watch(
    () => props.isOpen,
    (value) => {
      if (value) {
        ignoreClick = true;
        setTimeout(() => {
          ignoreClick = false;
        });
      } else {
        emit('onClose');
      }
    },
  );

  onMounted(() => {
    document.addEventListener('click', handleClickOutside);
  });

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
  });

  return {
    sidepanelRef,
    sidepanelSizesClasses,
    sidepanelMidState,
    sidepanelStartEndState,
    handleClose,
    handleBackdropClick,
    handleClickOutside
  }
}
