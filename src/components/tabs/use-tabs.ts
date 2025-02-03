import { ref, computed, onMounted, SetupContext } from 'vue';
import type { TabsPropTypes, TabsEmitTypes } from './tabs';

import classNames from 'classnames';

export const useTabs = (props: TabsPropTypes, emit: SetupContext<TabsEmitTypes>['emit']) => {
  const tabsClasses = computed(() => {
    return classNames({
      'relative z-[10] px-size-spacing-xs py-size-spacing-3xs body-sm text-color-strong group': true,
      'transition-left duration-150 ease-in-out': true,
      capitalize: !props.underlined,
      'uppercase border-x-0 border-t-0': props.underlined,
    });
  });

  const activeTab = ref({
    index: 0,
    previousIndex: -1,
    height: 0,
    width: 0,
    undelineLeftOffset: 0,
  });

  const tabElements = ref<HTMLElement[]>([]);

  const updateSelectedTabIndex = (index: number, disabled = false) => {
    if (disabled) return;

    activeTab.value.previousIndex = activeTab.value.index;

    if (activeTab.value.index === index) return;

    activeTab.value.index = index;

    // Update underline left offset based on previous index
    const indexDifference = Math.abs(activeTab.value.index - activeTab.value.previousIndex);

    if (activeTab.value.index > activeTab.value.previousIndex) {
      // Moving right: increase the offset by the width of each tab
      activeTab.value.undelineLeftOffset += indexDifference * activeTab.value.width;
    } else {
      // Moving left: decrease the offset by the width of each tab
      activeTab.value.undelineLeftOffset -= indexDifference * activeTab.value.width;
    }

    emit('tabIndex', index);
  };

  onMounted(() => {
    activeTab.value.height = tabElements.value[activeTab.value.index].offsetHeight;
    activeTab.value.width = tabElements.value[activeTab.value.index].offsetWidth;
  });

  return {
    tabsClasses,
    activeTab,
    tabElements,
    updateSelectedTabIndex,
  };
};
