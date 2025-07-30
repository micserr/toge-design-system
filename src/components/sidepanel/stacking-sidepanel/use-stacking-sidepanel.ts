import classNames from 'classnames';
import { computed, ref, type SetupContext, type ShallowRef } from 'vue';
import { useRefHistory, useResizeObserver, useVModel, watchDeep } from '@vueuse/core';
import type { StackingSidePanelEmitTypes, StackingSidePanelPropTypes } from './stacking-sidepanel';

export const useStackingSidepanel = (props: StackingSidePanelPropTypes, emits:SetupContext<StackingSidePanelEmitTypes>['emit'], stackingSidepanelBase: Readonly<ShallowRef<HTMLDivElement | null>>) => {
  const activePanels = useVModel(props, 'stack', emits, { deep: true });

  // Ensure activePanels is an array
  watchDeep(activePanels, (newValue) => {
    // Emit the update event when active panels change
    emits('update:stack', newValue);
  });

  const showPanel = (name: string) => {
    if (!activePanels.value.includes(name)) {
      activePanels.value.push(name);
    }
  };

  const hidePanel = (name: string) => {
    const index = activePanels.value.indexOf(name);
    if (index !== -1) {
      activePanels.value.splice(index, 1);
      // Undo resize tracker two times of history
      undoResizeTracker();
      undoResizeTracker();
    }
  };

  // Styling for the stacking sidepanel
  const stackingSidepanelBaseTransform = ref("transform: translateX()");
  // Track the width of the stacking sidepanel base
  const resizeTracker = ref(0);
  const { history, undo: undoResizeTracker } = useRefHistory(resizeTracker);

  // Watch for changes in the active panels to update the transform
  useResizeObserver(stackingSidepanelBase, (entries) => {
    const entry = entries[0]
    const { width } = entry.contentRect;
    resizeTracker.value = resizeTracker.value !== width ? width : resizeTracker.value;

    // If there is only one panel, reset the transform to default
    if (activePanels.value.length <= 1) {
      stackingSidepanelBaseTransform.value = "transform: translateX()";
      return;
    }

    stackingSidepanelBaseTransform.value = `transform: translateX(${history.value[0].snapshot}px);`;
  })

  const stackingSidepanelClasses = computed(() =>{
    const sidepanelStackBackdropClasses = 'spr-fixed spr-left-0 spr-top-0 spr-z-[1010] spr-h-full spr-w-full spr-bg-mushroom-700/60';

    const sidepanelStackBaseClasses = classNames(
      'spr-fixed spr-right-4 spr-top-1/2 spr-z-[1015] spr-flex spr-flex-row-reverse spr-gap-size-spacing-xs spr-transition-all spr-ease-[ease-in-out] spr-duration-[300ms]',
    );

    const sidepanelStackTransitionEnterActiveClasses = classNames(
      'spr-transition-all spr-ease-[ease-in-out] spr-duration-[300ms]'
    );

    const sidepanelStackTransitionLeaveActiveClasses = classNames(
      'spr-transition-all spr-ease-[ease-in-out] spr-duration-[150ms]'
    );
    

    const sidepanelStackEnterFromClasses = classNames(
      'spr-opacity-0',
      {
        'spr-translate-x-1/2': activePanels.value.length <= 1,
      }
    );

    const sidepanelStackLeaveToClasses = classNames(
      'spr-opacity-0',
      {
        'spr-translate-x-1/2': activePanels.value.length <= 0,
        '-spr-translate-x-1/2': activePanels.value.length > 0,
      }
    );

    return {
      sidepanelStackBackdropClasses,
      sidepanelStackBaseClasses,
      sidepanelStackTransitionEnterActiveClasses,
      sidepanelStackTransitionLeaveActiveClasses,
      sidepanelStackEnterFromClasses,
      sidepanelStackLeaveToClasses,
    }
  });

  return {
    showPanel,
    hidePanel,
    stackingSidepanelClasses,
    stackingSidepanelBaseTransform,
    activePanels,
  };
};
