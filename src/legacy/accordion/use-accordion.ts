
import type { AccordionPropTypes } from './accordion';
import { toRefs, reactive, ref } from 'vue';

export const useAccordion = (props: AccordionPropTypes) => {
  const { accordionItems, isDefaultOpen, alwaysOpen } = toRefs(props);
  const clickedIndex = ref<number>()

  const collapsedState = reactive(accordionItems.value.map(() => isDefaultOpen.value && alwaysOpen.value));

  const toggleCollapse = (index: number) => {
    if (index < 0 || index >= collapsedState.length) return;

    collapsedState[index] = !collapsedState[index];

    if (!props.alwaysOpen) {
      collapsedState.forEach((_, i) => {
        if (i !== index) {
          collapsedState[i] = false;
        }
      });
    }
  };

  const setClickedIndex = (index: number) => {
    clickedIndex.value = index
  }

  const clearIndex = () => {
    clickedIndex.value = undefined
  }

  return {
    accordionItems,
    isDefaultOpen,
    alwaysOpen,
    collapsedState,
    toggleCollapse,
    setClickedIndex,
    clearIndex,
    clickedIndex
  }
};
