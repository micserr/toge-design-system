
import type { AccordionPropTypes } from './accordion';
import { toRefs, reactive } from 'vue';

export const useAccordion = (props: AccordionPropTypes) => {
  const { accordionItems, isDefaultOpen, alwaysOpen } = toRefs(props);

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

  return {
    accordionItems,
    isDefaultOpen,
    alwaysOpen,
    collapsedState,
    toggleCollapse,
  }
};
