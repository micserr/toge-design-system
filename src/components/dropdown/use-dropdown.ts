import { ref, toRefs, computed, onMounted, watch } from 'vue';
import { onClickOutside, useInfiniteScroll } from '@vueuse/core';

import type { SetupContext } from 'vue';
import type { DropdownPropTypes, DropdownEmitTypes } from './dropdown';
import type { MenuListType } from '../list/list';

export const useDropdown = (props: DropdownPropTypes, emit: SetupContext<DropdownEmitTypes>['emit']) => {
  const { modelValue, menuList, searchString, multiSelect, disabled } = toRefs(props);

  const dropdownPopperState = ref<boolean>(false);

  const dropdownRef = ref<HTMLDivElement | null>(null);

  const preSelectedItems = ref<Array<string>>(modelValue.value);

  const initialMenuList = ref<MenuListType[]>([]);
  const dropdownMenuList = ref<MenuListType[]>([]);

  const isDropdownPopperDisabled = computed(() => disabled.value);

  const setDropdownMenuList = () => {
    initialMenuList.value = menuList.value;
    dropdownMenuList.value = initialMenuList.value;
  };

  const handleSearch = () => {
    if (menuList.value && menuList.value.length > 0) {
      dropdownMenuList.value = initialMenuList.value.filter((item: MenuListType) => {
        const searchTerm = searchString.value.toLowerCase();

        return item.text.toLowerCase().includes(searchTerm) || item.value.toString().toLowerCase().includes(searchTerm);
      });
    }
  };

  watch(modelValue, (newValue) => {
    preSelectedItems.value = newValue;
  });

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
    setDropdownMenuList();
  });

  return {
    dropdownPopperState,
    dropdownRef,
    preSelectedItems,
    dropdownMenuList,
    isDropdownPopperDisabled,
  };
};
