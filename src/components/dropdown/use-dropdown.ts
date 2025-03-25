import { ref, toRefs, computed, onMounted, watch } from 'vue';
import { onClickOutside, useInfiniteScroll, useVModel } from '@vueuse/core';

import type { SetupContext } from 'vue';
import type { DropdownPropTypes, DropdownEmitTypes } from './dropdown';
import type { MenuListType } from '../list/list';

export const useDropdown = (props: DropdownPropTypes, emit: SetupContext<DropdownEmitTypes>['emit']) => {
  const { menuList, searchString, disabled, multiSelect, ladderized } = toRefs(props);

  // Dropdown component ref variables
  const dropdownValue = useVModel(props, 'modelValue', emit); // v-model value of  dropdown component
  const dropdownRef = ref<HTMLDivElement | null>(null);
  
  // List component ref variables
  const selectedListItems = ref<MenuListType[]>([]); // v-model value of the list component
  const dropdownMenuList = ref<MenuListType[]>([]); // menu list for the list component
  
  // Popper state
  const dropdownPopperState = ref<boolean>(false);
  const isDropdownPopperDisabled = computed(() => disabled.value);

  const initializeMenuList = () => {
    dropdownMenuList.value = menuList.value;
  };

  const handleSearch = () => {
    if (menuList.value && menuList.value.length > 0) {
      if (!multiSelect.value) {
        dropdownMenuList.value = menuList.value.filter((item: MenuListType) => {
          const searchTerm = searchString.value.toLowerCase();
  
          return item.text.toLowerCase().includes(searchTerm);
        });
      } else {
        dropdownMenuList.value = menuList.value;
        // TODO: Handle multi-select search
      }
    }
  };

  watch(searchString, () => {
    handleSearch();
  });

  onClickOutside(dropdownRef, () => {
    dropdownPopperState.value = false;
  });

  useInfiniteScroll(
    dropdownRef,
    () => {
      emit('infinite-scroll-trigger', true);
    },
    { distance: 10 },
  );

  // Handle selected item for simple list component
  const handleSelectedItem = (selectedItems: MenuListType[]) => {
    dropdownValue.value = selectedItems.map((item) => item.value.toString());

    if (!multiSelect.value) dropdownPopperState.value = false;
  };

  // Handle selected item for ladderized list component
  const handleSelectedLadderizedItem = (selectedItems: string[]) => {
    emit("update:modelValue", selectedItems);

    // If item is from last sublevel, close the dropdown
    if (checkIfItemFromLastSublevel(selectedItems)) {
      dropdownPopperState.value = false;
    }
  };

  const checkIfItemFromLastSublevel = (selectedItems: string[]) => {
    let selectedItemsObject = dropdownMenuList.value;

    // Traverse to the last item in the selectedItems array
    selectedItems.forEach((selectedItem) => {
      selectedItemsObject = selectedItemsObject.find((item) => selectedItem === item.value)?.sublevel ?? [];
    });

    // If there is a sublevel, return false
    if (selectedItemsObject.length > 0) {
      return false;
    }

    return true;
  }

  onMounted(() => {
    initializeMenuList();
  });

  return {
    dropdownPopperState,
    dropdownRef,
    dropdownMenuList,
    isDropdownPopperDisabled,
    selectedListItems,
    handleSelectedItem,
    handleSelectedLadderizedItem, 
    dropdownValue,
  };
};
