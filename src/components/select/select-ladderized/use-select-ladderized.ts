import { ref, computed, watch } from 'vue';
import { useDebounceFn, onClickOutside } from '@vueuse/core';
import type { SelectLadderizedPropTypes, SelectLadderizedEmitTypes } from './select-ladderized';
import type { MenuListType } from '@/components/list/list';

export function useSelectLadderized(props: SelectLadderizedPropTypes, emit: (event: string, ...args: any[]) => void) {
  const ladderizedClasses = computed(() => ({
    baseClasses: 'spr-flex spr-flex-col spr-gap-size-spacing-4xs',
    labelClasses: 'spr-body-sm-regular spr-text-color-strong spr-block',
  }));

  // Popper Variables
  const ladderizedSelectPopperState = ref(false);
  const ladderizedSelectRef = ref(null);
  const isLadderizedSelectPopperDisabled = computed(() => props.disabled);

  // Ladderized Select Model
  const ladderizedSelectModel = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val),
  });
  const ladderizedSelectMenuList = computed(() => props.menuList);

  // Input Variables
  const inputText = ref<string>('');
  const isSearching = ref(false);
  const wasCleared = ref(false);

  // Filtered menu list for search
  const filteredLadderizedSelectMenuList = computed(() => {
    if (!props.searchable || !inputText.value.trim()) return ladderizedSelectMenuList.value;

    const search = inputText.value.trim().toLowerCase();

    const filterItems = (items: MenuListType[]): MenuListType[] => {
      return items
        .map((item: MenuListType) => {
          let match = item.text && item.text.toLowerCase().includes(search);

          const sublevel = item.sublevel ? filterItems(item.sublevel) : undefined;

          if (sublevel && sublevel.length > 0) match = true;

          if (match) {
            return { ...item, sublevel };
          }

          return null;
        })
        .filter(Boolean) as MenuListType[];
    };

    return filterItems(ladderizedSelectMenuList.value);
  });

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
    ladderizedSelectModel.value = selectedItems;

    let itemToCheck = selectedItem;

    // Fallback: if selectedItem is not provided, try to find it from the value
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

      itemToCheck = findItemByValue(ladderizedSelectMenuList.value, selectedItems[selectedItems.length - 1]);
    }

    if (itemToCheck) {
      const path = findPathToValue(ladderizedSelectMenuList.value, itemToCheck.value);

      inputText.value = path ? path.join(' > ') : itemToCheck.text || '';

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

  const handleMenuToggle = () => {
    ladderizedSelectPopperState.value = true;

    isSearching.value = false;
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
        // For multi-select, join all selected paths
        const paths = newVal.map((val) => {
          const path = findPathToValue(ladderizedSelectMenuList.value, val);

          return path ? path.join(' > ') : '';
        });

        inputText.value = paths.filter(Boolean).join(', ');
      }
    },
    { immediate: true },
  );

  onClickOutside(ladderizedSelectRef, () => {
    ladderizedSelectPopperState.value = false;
  });

  return {
    ladderizedClasses,
    ladderizedSelectPopperState,
    ladderizedSelectRef,
    ladderizedSelectMenuList,
    filteredLadderizedSelectMenuList,
    isLadderizedSelectPopperDisabled,
    ladderizedSelectModel,
    inputText,
    handleSelectedLadderizedItem,
    handleSearch,
    handleClear,
    handleMenuToggle,
  };
}
