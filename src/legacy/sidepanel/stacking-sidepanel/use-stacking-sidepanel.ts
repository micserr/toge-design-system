import classNames from 'classnames';
import { computed, ref, watch, type SetupContext, type ShallowRef } from 'vue';
import { useRefHistory, useResizeObserver, useVModel, watchDeep } from '@vueuse/core';
import type { StackingSidePanelEmitTypes, StackingSidePanelPropTypes } from './stacking-sidepanel';

export const useStackingSidepanel = (
  props: StackingSidePanelPropTypes,
  emits: SetupContext<StackingSidePanelEmitTypes>['emit'],
  stackingSidepanelBase: Readonly<ShallowRef<HTMLDivElement | null>>,
) => {
  const activePanels = useVModel(props, 'stack', emits, { deep: true });
  const expandedPanel = ref('');
  const isTransitioning = ref(false);  
  const activePanel = computed(() => activePanels.value[activePanels.value.length -1] || null);

  // Ensure activePanels is an array
  watchDeep(activePanels, (newValue) => {
    // Emit the update event when active panels change
    emits('update:stack', newValue);
  });

  const showPanel = (name: string) => {
    expandedPanel.value = '';
    if (!activePanels.value.includes(name)) {
      activePanels.value.push(name);
      // Update transform immediately
      updateTransform();
    }
  };

  const hidePanel = (name: string) => {
    expandedPanel.value = '';
    const index = activePanels.value.indexOf(name);
    if (index !== -1) {
      activePanels.value.splice(index, 1);      
      undoResizeTracker();
      // Update transform immediately
      updateTransform();
    }
  };

  const handleExpandPanel = (action: 'expand' | 'shrink', name: string) => {
    expandedPanel.value = action === 'expand' ? name : '';
  };

  // Styling for the stacking sidepanel
  const stackingSidepanelBaseTransform = ref('transform: translateX()');
  // Track the width of the stacking sidepanel base
  const resizeTracker = ref(0);
  const { history, undo: undoResizeTracker } = useRefHistory(resizeTracker);

  // Watch for changes in the active panels to update the transform
  useResizeObserver(stackingSidepanelBase, (entries) => {  
    //stop observer if panel is expanding to stop population of history of resizeTracker
    if (!!isTransitioning.value || !!expandedPanel.value) return;

    const entry = entries[0];
    const { width } = entry.contentRect;
    resizeTracker.value = resizeTracker.value !== width ? width : resizeTracker.value;    
    updateTransform();
  });

  // Function to update transform based on current state
  const updateTransform = () => {
    // If there is only one panel, reset the transform to default
    if (activePanels.value.length <= 1) {
      stackingSidepanelBaseTransform.value = 'transform: translateX()';
      return;
    }

    let snapshot = history.value[0].snapshot;

    const numOfActivePanels = activePanels.value.length - 1;
    const numOfSnapshotHistory = history.value.length - 1;
    snapshot = history.value[numOfSnapshotHistory - numOfActivePanels]?.snapshot;
    if(!snapshot) return    

    stackingSidepanelBaseTransform.value = `transform: translateX(${snapshot}px);`;
  };

  // Watch for changes in active panels and update transform immediately
  watch(
    activePanels,
    () => {
      updateTransform();
    },
    { flush: 'post' },
  );

  watch(
    expandedPanel,
    () => {
      // transition delay of expanding panel
      isTransitioning.value = true;
      setTimeout(() => {
        isTransitioning.value = false;
      }, 150);
    },
  );

  const stackingSidepanelClasses = computed(() => {
    const sidepanelStackBackdropClasses =
      'spr-fixed spr-left-0 spr-top-0 spr-z-[1010] spr-h-full spr-w-full spr-bg-mushroom-700/60';

    const sidepanelStackBaseClasses = classNames(
      'spr-fixed spr-right-4 spr-top-1/2 spr-z-[1015] spr-flex spr-flex-row-reverse spr-gap-size-spacing-xs spr-transition-all spr-ease-[ease-in-out] spr-duration-[300ms]',
    );

    const sidepanelStackTransitionEnterActiveClasses = classNames(
      'spr-transition-all spr-ease-[ease-in-out] spr-duration-[150ms]',
    );

    const sidepanelStackTransitionLeaveActiveClasses = classNames(
      'spr-transition-all spr-ease-[ease-in-out] spr-duration-[150ms]',
    );

    const sidepanelStackMoveClasses = classNames('spr-transition-all spr-ease-[ease-in-out] spr-duration-[300ms]');

    const sidepanelStackEnterFromClasses = classNames('spr-opacity-0', {
      'spr-translate-x-1/2': activePanels.value.length <= 1,
    });

    const sidepanelStackLeaveToClasses = classNames('spr-opacity-0', {
      'spr-translate-x-1/2': activePanels.value.length <= 0,
      '-spr-translate-x-1/2': activePanels.value.length > 0,
    });

    return {
      sidepanelStackBackdropClasses,
      sidepanelStackBaseClasses,
      sidepanelStackTransitionEnterActiveClasses,
      sidepanelStackTransitionLeaveActiveClasses,
      sidepanelStackMoveClasses,
      sidepanelStackEnterFromClasses,
      sidepanelStackLeaveToClasses,
    };
  });

  return {
    showPanel,
    hidePanel,
    stackingSidepanelClasses,
    stackingSidepanelBaseTransform,
    activePanels,
    expandedPanel,
    handleExpandPanel,
    activePanel
  };
};
