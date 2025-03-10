import { ref, toRefs, onMounted, watch } from 'vue';
import { onClickOutside, useInfiniteScroll } from '@vueuse/core';

import type { SetupContext } from 'vue';
import type { DropdownPropTypes, DropdownEmitTypes } from './dropdown';

interface SelectedItem {
  text: string;
  value: string | number;
}

export const useDropdown = (props: DropdownPropTypes, emit: SetupContext<DropdownEmitTypes>['emit']) => {
  const { modelValue, menuList, searchString, multiSelect } = toRefs(props);

  const dropdownPopperState = ref<boolean>(false);

  const dropdownRef = ref<HTMLDivElement | null>(null);

  const preSelectedItems = ref<Array<string>>([]);

  const initialMenuList = ref<{ text: string; value: string }[]>([]);
  const dropdownMenuList = ref<{ text: string; value: string }[]>([]);

  const handleSelectedItem = (item: SelectedItem) => {
    if (!multiSelect.value) {
      dropdownPopperState.value = false;
    }

    emit('get-selected-item', item);
  };

  const setDropdownMenuList = () => {
    initialMenuList.value = menuList.value;
    dropdownMenuList.value = initialMenuList.value;
  };

  const handleSearch = () => {
    if (menuList.value && menuList.value.length > 0) {
      dropdownMenuList.value = initialMenuList.value.filter((item) => {
        const searchTerm = searchString.value.toLowerCase();

        return item.text.toLowerCase().includes(searchTerm) || item.value.toLowerCase().includes(searchTerm);
      });
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

  onMounted(() => {
    preSelectedItems.value = modelValue.value;

    setDropdownMenuList();
  });

  return {
    dropdownPopperState,
    dropdownRef,
    preSelectedItems,
    dropdownMenuList,
    handleSelectedItem,
  };
};
