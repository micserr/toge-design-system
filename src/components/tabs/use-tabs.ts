import { ref, computed, onMounted, SetupContext, watch } from 'vue';
import classNames from 'classnames';
import type { TabsPropTypes, TabsEmitTypes } from './tabs';
import { useElementSize } from '@vueuse/core';

export const useTabs = (props: TabsPropTypes, emit: SetupContext<TabsEmitTypes>['emit']) => {
  const tabsClasses = computed(() => {
    return classNames({
      'spr-relative spr-px-size-spacing-xs spr-body-sm spr-text-color-strong spr-group': true,
      'spr-transition-left spr-duration-150 spr-ease-in-out': true,
      'capitalize spr-py-size-spacing-3xs': !props.underlined,
      'spr-uppercase spr-border-x-0 spr-border-t-0 spr-py-size-spacing-xs': props.underlined,
    });
  });

  const activeTab = ref({
    index: 0,
    previousIndex: -1,
    width: 0,
    underlineLeftOffset: 0,
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

    const currentTab = tabElements.value[activeTab.value.index];

    if (currentTab) {
      activeTab.value.width = currentTab.clientWidth;
      activeTab.value.underlineLeftOffset = currentTab.offsetLeft;
    }

    emit('tabIndex', activeTab.value.index);
  };

  const tabElements = ref<HTMLElement[]>([]);

  // For responsive underline adjustment
  const tabContainer = ref<HTMLElement | null>(null);
  const { width: tabContainerWidth } = useElementSize(tabContainer);
  watch(tabContainerWidth, () => {
    activeTab.value.width = tabElements.value[activeTab.value.index].clientWidth;
    activeTab.value.underlineLeftOffset = tabElements.value[activeTab.value.index].offsetLeft;
  });

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
    activeTab.value.underlineLeftOffset += leftOffsetDifference;

    emit('tabIndex', index);
  };

  watch(
    () => props.activeTab,
    (newValue, oldValue) => {
      if (newValue !== oldValue) {
        setActiveTab();
      }
    },
  );

  onMounted(() => {
    setActiveTab();
  });

  return {
    tabsClasses,
    activeTab,
    tabElements,
    tabContainer,
    updateSelectedTabIndex,
  };
};
