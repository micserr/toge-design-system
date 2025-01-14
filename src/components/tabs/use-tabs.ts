import { ref, computed, SetupContext } from 'vue';
import type { TabsPropTypes, TabsEmitTypes } from './tabs';

import classNames from 'classnames';

export const useTabs = (props: TabsPropTypes, emit: SetupContext<TabsEmitTypes>['emit']) => {
  const selectedTabIndex = ref(0);
  const { underlined } = props;

  function updateSelectedTabIndex(index: number, disabled = false) {
    if (disabled) return;
    if (selectedTabIndex.value === index) return;
    selectedTabIndex.value = index;

    emit('tabIndex', index);
  }

  const tabsClasses = computed(() => {
    return classNames({
      'tw-px-size-spacing-xs tw-py-size-spacing-3xs tw-capitalize tw-text-color-strong first:tw-rounded-l-md last:tw-rounded-r-md': !underlined,
      'tw-p-size-spacing-xs tw-uppercase tw-border-x-0 tw-border-t-0': underlined,
    })
  })

  return {
    tabsClasses,
    selectedTabIndex,
    updateSelectedTabIndex
  };
};
