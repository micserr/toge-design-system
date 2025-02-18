import { ref, computed, onMounted, SetupContext } from 'vue';
import type { TabsPropTypes, TabsEmitTypes } from './tabs';

import classNames from 'classnames';

export const useTabs = (props: TabsPropTypes, emit: SetupContext<TabsEmitTypes>['emit']) => {
  const tabsClasses = computed(() => {
    return classNames({
      'relative px-size-spacing-xs py-size-spacing-3xs body-sm text-color-strong group': true,
      'transition-left duration-150 ease-in-out': true,
      capitalize: !props.underlined,
      'uppercase border-x-0 border-t-0': props.underlined,
    });
  });

  const activeTab = ref({
    index: 0,
    previousIndex: -1,
    width: 0,
    undelineLeftOffset: 0,
  });

  const setActiveTab = () => {
    if (props.activeTab) {
      const matchingTabs = props.list.filter(
        (tab) => tab.label.toString().trim() === props.activeTab.toString().trim(),
      );

      if (matchingTabs.length > 0) {
        const index = props.list.indexOf(matchingTabs[0]);

        activeTab.value.index = index;
      }
    } else {
      activeTab.value.index = 0;
    }

    activeTab.value.width = tabElements.value[activeTab.value.index].clientWidth;

    emit('tabIndex', activeTab.value.index);
  };

  const tabElements = ref<HTMLElement[]>([]);

  const updateSelectedTabIndex = (index: number, disabled = false) => {
    if (disabled) return;

    const previousIndex = activeTab.value.index;

    if (previousIndex === index) return;

    activeTab.value.previousIndex = previousIndex;
    activeTab.value.index = index;
    activeTab.value.width = tabElements.value[index].clientWidth;

    // Update underline left offset based on the new index
    const previousTabLeftOffset = tabElements.value[previousIndex].offsetLeft;
    const currentTabLeftOffset = tabElements.value[index].offsetLeft;

    // Adjust the underline position based on the difference in offsets
    const leftOffsetDifference = currentTabLeftOffset - previousTabLeftOffset;

    // If moving to the right (increasing index), increase the left offset
    // If moving to the left (decreasing index), decrease the left offset
    activeTab.value.undelineLeftOffset += leftOffsetDifference;

    emit('tabIndex', index);
  };

  onMounted(() => {
    setActiveTab();
  });

  return {
    tabsClasses,
    activeTab,
    tabElements,
    updateSelectedTabIndex,
  };
};
