import { ref, toRefs, computed, onMounted, watch } from 'vue';
import { onClickOutside, useInfiniteScroll, useVModel } from '@vueuse/core';

import type { SetupContext } from 'vue';
import type { DropdownPropTypes, DropdownEmitTypes } from './dropdown';
import type { MenuListType } from '../list/list';

export const useDropdown = (props: DropdownPropTypes, emit: SetupContext<DropdownEmitTypes>['emit']) => {
  const { menuList, searchString, disabled, multiSelect, removeCurrentLevelInBackLabel, ladderized } = toRefs(props);

  // Dropdown component ref variables
  const dropdownValue = useVModel(props, 'modelValue', emit); // v-model value of  dropdown component
  const dropdownRef = ref<HTMLDivElement | null>(null);

  // List component ref variables
  const selectedListItems = ref<MenuListType[]>([]); // v-model value of the list component
  const dropdownMenuList = ref<MenuListType[]>([]); // menu list for the list component

  // Popper state
  const dropdownPopperState = ref<boolean>(false);
  const isDropdownPopperDisabled = computed(() => disabled.value);

  const isLadderizedSearch = computed(() => (ladderized.value && searchString.value !== '' && dropdownValue.value.length === 0))

  const initializeMenuList = () => {
    dropdownMenuList.value = [...menuList.value];
  };

  watch(menuList, () => {
    initializeMenuList();
  });

  const handleSearch = () => {
    if (menuList.value && menuList.value.length === 0) {
      return;
    }

    if (!multiSelect.value) {
      singleSelectSearch();
    } else {
      dropdownMenuList.value = [...menuList.value];
      // TODO: Handle multi-select search
    }
  };

  const singleSelectSearch = () => {
    if (props.ladderized) {
      ladderizedSearch();
    } else {
      basicSearch();
    }
  };

  const basicSearch = () => {
    dropdownMenuList.value = getFilteredMenuList(menuList.value);
  };

  const ladderizedSearch = () => {
    //revert to initial list if search string is empty or dropdownValue is not empty
    if (searchString.value === '' || dropdownValue.value.length > 0) {
      dropdownMenuList.value = [...menuList.value];
      return;
    }

    const menuListSubLevels = getAllSublevelItems(menuList.value);

    const filteredMenuList = getFilteredMenuList(menuList.value);
    const filteredMenuListSubLevels = getFilteredMenuList(menuListSubLevels);

    if (filteredMenuList.length > 0) {
      //if there is a match at the top level of the menuList
      dropdownMenuList.value = getAllSublevelItems(filteredMenuList);
    } else if (filteredMenuListSubLevels.length > 0) {
      //if there is a match at the 2nd level (sublevel of a menuList item) of the menuList
      dropdownMenuList.value = filteredMenuListSubLevels;
    } else {
      dropdownMenuList.value = [];
    }
  };

  // compile sublevel items from menuList to a single array
  // and add text and value of the parent item to all sublevel items as subtext and subvalue
  const getAllSublevelItems = (menuList: MenuListType[]) => {
    return menuList.reduce((currentValue, currentItem) => {
      if (currentItem.sublevel) {
        const mappedSublevel = currentItem.sublevel.map((sublevelItem: MenuListType) => ({
          ...sublevelItem, //text and value of a sublevel item
          subtext: currentItem.text, // text of parent of a sublevel item
          subvalue: currentItem.value, // value of parent of a sublevel item
        }));

        return [...currentValue, ...mappedSublevel];
      }

      return currentValue;
    }, [] as MenuListType[]);
  };

  // filter list based on search string and menuList/sublevel texts
  const getFilteredMenuList = (list: MenuListType[]) => {
    return list.filter((item: MenuListType) => {
      const searchTerm = searchString.value.toLowerCase().trim();
      return item.text.toLowerCase().includes(searchTerm);
    });
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
    if (!props.ladderized) {
      dropdownValue.value = selectedItems.map((item) => item.value.toString());
    }

    if (!multiSelect.value) {
      if (props.ladderized && props.searchString !== '') {
        // generate dropdown value if ladderized with search string
        dropdownValue.value = [selectedItems[0].subvalue ?? '', selectedItems[0].value];
      }
      setTimeout(() => {
        dropdownPopperState.value = false;
      }, 10);
    }
  };

  // Handle selected item for ladderized list component
  const handleSelectedLadderizedItem = (selectedItems: string[]) => {
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
  };

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
    removeCurrentLevelInBackLabel,
    isLadderizedSearch
  };
};
