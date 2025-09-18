import { ref, toRefs, computed, watch } from 'vue';
import { useVModel, useDebounceFn, onClickOutside } from '@vueuse/core';

import type { SelectLadderizedPropTypes } from './select-ladderized';

import type { MenuListType } from '@/components/list/list';

export const useSelectLadderized = (
  props: SelectLadderizedPropTypes,
  emit: (event: string, ...args: unknown[]) => void,
) => {
  const { options, disabled, textSeperator, prependText } = toRefs(props);

  const ladderizedClasses = computed(() => ({
    baseClasses: 'spr-flex spr-flex-col spr-gap-size-spacing-4xs',
    labelClasses: 'spr-body-sm-regular spr-text-color-strong spr-flex spr-gap-2',
    supportingLabelClasses: 'spr-body-sm-regular spr-text-color-supporting',
  }));

  const ladderizedSelectState = ref<HTMLDivElement | null>(null);

  // Popper Variables
  const ladderizedSelectPopperState = ref<boolean>(false);
  const ladderizedSelectPopperRef = ref<HTMLElement | null>(null);
  const isLadderizedSelectPopperDisabled = computed(() => disabled.value);

  // Ladderized Select Model
  const ladderizedSelectModel = useVModel(props, 'modelValue', emit);
  const ladderizedSelectOptions = computed(() => options.value);

  // Input Variables
  const inputText = ref<string>('');
  const isSearching = ref<boolean>(false);
  const wasCleared = ref<boolean>(false);

  const isLeafNode = (item: MenuListType): boolean => {
    return !item.sublevel || item.sublevel.length === 0;
  };

  // Helper to find the path to a selected value in the menu tree
  const findPathToValue = (items: MenuListType[], value: string | number, path: string[] = []): string[] | null => {
    for (const item of items) {
      const newPath = [...path, item.text];

      if (item.value === value) {
        return newPath;
      }

      if (item.sublevel) {
        const result = findPathToValue(item.sublevel, value, newPath);

        if (result) return result;
      }
    }

    return null;
  };

  const handleSelectedLadderizedItem = (selectedItems: string[], selectedItem?: MenuListType) => {
    wasCleared.value = false;

    // If the selectedItems is a single value (leaf from search), reconstruct the full path
    let fullPath: string[] | null = null;

    if (selectedItems.length === 1) {
      // Find the full path from root to leaf
      fullPath = findPathToValue(ladderizedSelectOptions.value, selectedItems[0]);

      if (fullPath) {
        // Traverse the tree by path, always matching the next text in the sublevel
        let currentLevel = ladderizedSelectOptions.value;
        const valuePath: (string | number)[] = [];

        for (const text of fullPath) {
          const found = currentLevel.find((item) => item.text === text);

          if (found) {
            valuePath.push(found.value);
            currentLevel = found.sublevel || [];
          } else {
            break;
          }
        }

        ladderizedSelectModel.value = valuePath.map(String);
        inputText.value = prependText.value
          ? fullPath.slice().reverse().join(textSeperator.value)
          : fullPath.join(textSeperator.value);

        // Find the actual item object for the last value in the path
        let leafItem: MenuListType | undefined = undefined;
        let leafLevel = ladderizedSelectOptions.value;

        for (const text of fullPath) {
          const found = leafLevel.find((item) => item.text === text);

          if (found) {
            leafItem = found;
            leafLevel = found.sublevel || [];
          } else {
            break;
          }
        }

        if (leafItem && isLeafNode(leafItem)) {
          ladderizedSelectPopperState.value = false;
        }

        return;
      }
    }

    ladderizedSelectModel.value = selectedItems;

    let itemToCheck = selectedItem;

    if (!itemToCheck && selectedItems.length > 0) {
      const findItemByValue = (items: MenuListType[], value: string | number): MenuListType | undefined => {
        for (const item of items) {
          if (item.value === value) return item;
          if (item.sublevel) {
            const found = findItemByValue(item.sublevel, value);

            if (found) return found;
          }
        }
        return undefined;
      };

      itemToCheck = findItemByValue(ladderizedSelectOptions.value, selectedItems[selectedItems.length - 1]);
    }

    if (itemToCheck) {
      const path = findPathToValue(ladderizedSelectOptions.value, itemToCheck.value);

      if (prependText.value) {
        inputText.value = path ? path.reverse().join(textSeperator.value) : itemToCheck.text || '';
      } else {
        inputText.value = path ? path.join(textSeperator.value) : itemToCheck.text || '';
      }

      if (isLeafNode(itemToCheck)) {
        ladderizedSelectPopperState.value = false;
      }
    } else if (selectedItems.length === 0 && !wasCleared.value) {
      inputText.value = '';
    }
  };

  const handleSearch = () => {
    isSearching.value = true;

    debouncedEmitSearch();
  };

  const debouncedEmitSearch = useDebounceFn(() => {
    // Optionally emit search event here if needed
  }, 300);

  const handleClear = () => {
    wasCleared.value = true;

    inputText.value = '';

    emit('update:modelValue', []);
  };

  // Watch for changes in modelValue to update inputText
  watch(
    () => ladderizedSelectModel.value,
    (newVal) => {
      if (wasCleared.value) {
        inputText.value = '';
        wasCleared.value = false;

        return;
      }

      if (Array.isArray(newVal) && newVal.length > 0) {
        // Treat the array as a single path for ladderized select
        let currentLevel = ladderizedSelectOptions.value;

        const pathTexts: string[] = [];

        for (const value of newVal) {
          const found = currentLevel.find((item) => item.value === value);

          if (!found) break;

          pathTexts.push(found.text);
          currentLevel = found.sublevel || [];
        }

        inputText.value = prependText.value
          ? pathTexts.slice().reverse().join(textSeperator.value)
          : pathTexts.join(textSeperator.value);
      }
    },
    { immediate: true },
  );

  watch(ladderizedSelectPopperState, (newState) => {
    emit('popper-state', newState);
  });

  // Close only when clicking completely outside both the popper and the trigger wrapper.
  onClickOutside(ladderizedSelectPopperRef, (event) => {
    const triggerWrapper = ladderizedSelectState.value;
    if (triggerWrapper && triggerWrapper.contains(event.target as Node)) {
      return; // ignore clicks on trigger content
    }
    if (ladderizedSelectPopperState.value) {
      ladderizedSelectPopperState.value = false;
    }
  });

  return {
    ladderizedClasses,
    ladderizedSelectState,
    ladderizedSelectPopperState,
    ladderizedSelectPopperRef,
    ladderizedSelectOptions,
    isLadderizedSelectPopperDisabled,
    ladderizedSelectModel,
    inputText,
    handleSelectedLadderizedItem,
    handleSearch,
    handleClear,
  };
};
