import { ref, toRefs, computed, ComputedRef, onMounted, watch } from 'vue';

import classNames from 'classnames';

import type { SetupContext } from 'vue';
import type { ListPropTypes, ListEmitTypes } from './list';

interface ListClasses {
  listItemClasses: string;
}

interface SelectedItem {
  text: string;
  value: string | number;
}

export const useList = (props: ListPropTypes, emit: SetupContext<ListEmitTypes>['emit']) => {
  const { modelValue, menuList, groupItemsBy, multiSelect } = toRefs(props);

  const listClasses: ComputedRef<ListClasses> = computed(() => {
    const listItemClasses = classNames(
      'spr-flex spr-cursor-pointer spr-items-center spr-justify-between spr-gap-1.5 spr-rounded-lg spr-p-2',
      'spr-transition spr-duration-150 spr-ease-in-out',
      'hover:spr-background-color-hover',
      'active:spr-background-color-single-active active:spr-scale-[.98]',
    );

    return { listItemClasses };
  });

  const initialMenuList = ref<{ text: string; value: string }[]>([]);

  const groupedMenuList = ref<{ [key: string]: { text: string; value: string }[] }>({});

  const selectedItems = ref<SelectedItem[]>([]);

  // #region - Helper Methods
  const isItemSelected = (item: SelectedItem) => {
    return selectedItems.value.some((selectedItem) => selectedItem.text === item.text);
  };

  const setMenuList = () => {
    if (menuList.value && menuList.value.length > 0) {
      initialMenuList.value = menuList.value;

      if (groupItemsBy?.value) {
        setGroupedMenuList();
      }
    }
  };

  const setGroupedMenuList = () => {
    if (!groupItemsBy?.value) return;

    const groupedItems: { [key: string]: { text: string; value: string }[] } = {};

    initialMenuList.value.forEach((item) => {
      const firstCharacter = item.text.charAt(0);
      const groupKey = /^\d/.test(firstCharacter) ? '' : firstCharacter.toUpperCase();

      if (!groupedItems[groupKey]) {
        groupedItems[groupKey] = [];
      }

      groupedItems[groupKey].push(item);
    });

    const sortedGroupedItems = Object.keys(groupedItems)
      .sort((a, b) => {
        if (a === '') return -1;
        if (b === '') return 1;
        return groupItemsBy.value === 'Z-A' ? b.localeCompare(a) : a.localeCompare(b);
      })
      .reduce((result: { [key: string]: { text: string; value: string }[] }, key) => {
        const sortedItems = groupedItems[key].sort((a, b) => {
          const comparison = a.text.localeCompare(b.text);
          return groupItemsBy.value === 'Z-A' ? -comparison : comparison;
        });

        result[key] = sortedItems;

        return result;
      }, {});

    groupedMenuList.value = sortedGroupedItems;
  };

  const setPreSelectedItems = () => {
    if (modelValue.value && modelValue.value.length > 0) {
      modelValue.value.forEach((preSelectedItem: string) => {
        const item = initialMenuList.value.find(
          (menuItem) =>
            String(menuItem.text) === String(preSelectedItem) || String(menuItem.value) === String(preSelectedItem),
        );

        if (item) {
          selectedItems.value.push(item);
        }
      });
    }
  };

  const getListItemClasses = (item: SelectedItem) => ({
    [listClasses.value.listItemClasses]: true,
    'spr-background-color-single-active': isItemSelected(item),
  });

  const handleSelectedItem = (item: SelectedItem) => {
    if (!multiSelect.value) {
      selectedItems.value = [item];

      emit('get-selected-item', selectedItems.value[0]);
    } else {
      const index = selectedItems.value.findIndex((selectedItem: SelectedItem) => selectedItem.value === item.value);

      if (index === -1) {
        selectedItems.value.push(item);
      } else {
        selectedItems.value.splice(index, 1);
      }

      emit('get-selected-item', selectedItems.value);
    }
  };
  // #endregion - Helper Methods

  watch(modelValue, () => {
    setPreSelectedItems();
  });

  watch(
    menuList,
    () => {
      setMenuList();
      setPreSelectedItems();
    },
    { immediate: true },
  );

  onMounted(() => {
    setMenuList();
    setPreSelectedItems();
  });

  return {
    listClasses,
    initialMenuList,
    groupedMenuList,
    isItemSelected,
    getListItemClasses,
    handleSelectedItem,
  };
};
