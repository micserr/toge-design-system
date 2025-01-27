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
      'px-size-spacing-xs py-size-spacing-3xs capitalize text-color-strong first:rounded-l-md first:border-l last:border-r last:rounded-r-md':
        !underlined,
      'p-size-spacing-xs uppercase border-x-0 border-t-0': underlined,
    });
  });

  return {
    tabsClasses,
    selectedTabIndex,
    updateSelectedTabIndex,
  };
};
