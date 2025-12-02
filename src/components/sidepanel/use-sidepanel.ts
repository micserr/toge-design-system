import { ref, toRefs, computed, ComputedRef, watch, onMounted, onUnmounted } from 'vue';

import classNames from 'classnames';

import type { SetupContext } from 'vue';
import type { SidepanelPropTypes, SidepanelEmitTypes } from './sidepanel';

interface SidepanelClasses {
  sidepanelBaseClasses: string;
  sidepanelHeaderClasses: string;
  sidepanelHeaderTitleClasses: string;
  sidepanelHeaderIconClasses: string;
  sidepanelContentClasses: string;
  sidepanelFooterClasses: string;
  sidepanelTransitionActiveClasses: string;
  sidepanelTransitionHiddenClasses: string;
  sidepanelTransitionVisibleClasses: string;
  backdropBaseClasses: string;
  sidepanelHeaderSubtitleClasses: string;
}

export const useSidepanel = (props: SidepanelPropTypes, emit: SetupContext<SidepanelEmitTypes>['emit']) => {
  const { size, position, isStacking, footerNoPadding, isExpanded, isActivePanel, footerNoTopBorder } = toRefs(props);

  const sidepanelClasses: ComputedRef<SidepanelClasses> = computed(() => {
    const sidepanelBaseClasses = classNames(
      'spr-right-4 spr-top-1/2 spr-z-[1015] spr-flex spr-h-full spr-min-h-[200px] spr-translate-y-[-50%] spr-flex-col spr-rounded-border-radius-xl spr-bg-white-50 spr-drop-shadow spr-transition-all spr-ease-[ease-in-out] spr-duration-[150ms]',
      {
        'spr-fixed': !isStacking.value,
        'spr-w-[360px]': size.value === 'sm' && !isExpanded.value,
        'spr-w-[420px]': size.value === 'md' && !isExpanded.value,
        'spr-w-[480px]': size.value === 'lg' && !isExpanded.value,
        '[@media(max-width:360px)]:spr-w-[calc(100vw-35px)]': size.value === 'sm' && !isExpanded.value && !isStacking.value,
        '[@media(max-width:420px)]:spr-w-[calc(100vw-35px)]': size.value === 'md' && !isExpanded.value && !isStacking.value,
        '[@media(max-width:480px)]:spr-w-[calc(100vw-35px)]': size.value === 'lg' && !isExpanded.value && !isStacking.value,
        'spr-w-[calc(100vw-50px)]': isExpanded.value,
        'spr-pointer-events-none': !isActivePanel.value && isStacking.value
      },
    );

    const sidepanelHeaderClasses = classNames(
      'spr-tw-min-h-12 spr-text-color-strong spr-flex spr-justify-between spr-border-0 spr-border-b spr-border-solid spr-border-mushroom-200 spr-p-4',
    );

    const sidepanelHeaderTitleClasses = classNames('spr-subheading-xs');

    const sidepanelHeaderSubtitleClasses = classNames('spr-text-200 spr-max-w-[95%]');

    const sidepanelHeaderIconClasses = classNames('spr-text-color-weak spr-h-5 spr-w-5 spr-cursor-pointer');

    const sidepanelContentClasses = classNames('spr-h-full spr-overflow-y-auto');

    const sidepanelFooterClasses = classNames(
      'spr-bottom-0 spr-left-0 spr-w-full spr-rounded-b-border-radius-xl spr-border-0 spr-border-solid spr-border-mushroom-200 spr-bg-white-50 ',
      {
        'spr-py-3': !footerNoPadding.value,
        'spr-border-t': !footerNoTopBorder.value
      },
    );

    const sidepanelTransitionActiveClasses = classNames({
      'spr-transition-all spr-duration-[150ms] spr-ease-[ease-in-out]': !isStacking.value,
    });

    const sidepanelTransitionHiddenClasses = classNames('spr-opacity-0', {
      'spr-translate-x-full -spr-translate-y-2/4': !isStacking.value && position.value === 'right',
    });

    const sidepanelTransitionVisibleClasses = classNames({
      'spr-translate-x-0 -spr-translate-y-2/4': !isStacking.value && position.value === 'right',
    });
    const backdropBaseClasses = classNames(
      'spr-fixed spr-left-0 spr-top-0 spr-z-[1010] spr-h-full spr-w-full spr-bg-mushroom-700/60',
    );

    return {
      sidepanelBaseClasses,
      sidepanelHeaderClasses,
      sidepanelHeaderTitleClasses,
      sidepanelHeaderIconClasses,
      sidepanelContentClasses,
      sidepanelFooterClasses,
      sidepanelTransitionActiveClasses,
      sidepanelTransitionHiddenClasses,
      sidepanelTransitionVisibleClasses,
      backdropBaseClasses,
      sidepanelHeaderSubtitleClasses
    };
  });

  const sidepanelRef = ref<HTMLDivElement | null>(null);

  const handleClose = () => {
    emit('close');
  };

  const handlePanelExpansion = () => {    
    if (isExpanded.value) {
      emit('shrink');
    } else {
      emit('expand');
    }
  };

  let ignoreClick = false;

  const handleClickOutside = (event: MouseEvent) => {
    if (ignoreClick || isStacking.value) return;
    if (sidepanelRef.value && !sidepanelRef.value.contains(event.target as Node) && props.closeOutside) {
      emit('close');
    }
  };

  const handleEscapeClose = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && props.isOpen && props.escapeClose) {
      emit('close');
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
    window.addEventListener('keydown', handleEscapeClose);
  });

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
    window.removeEventListener('keydown', handleEscapeClose);
  });

  return {
    sidepanelClasses,
    sidepanelRef,
    isExpanded,
    handleClose,
    handlePanelExpansion,
  };
};
