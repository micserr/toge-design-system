import { ref, toRefs, computed, ComputedRef, watch, onMounted } from 'vue';
import { useVModel } from '@vueuse/core';

import classNames from 'classnames';

import type { SetupContext } from 'vue';
import type { ListPropTypes, ListEmitTypes, MenuListType, GroupedMenuListType } from './list';

interface ListClasses {
  listItemClasses: string;
}

export const useList = (props: ListPropTypes, emit: SetupContext<ListEmitTypes>['emit']) => {
  const selectedItems = useVModel(props, 'modelValue', emit);

  const { menuList, groupItemsBy, multiSelect, preSelectedItems } = toRefs(props);

  const listClasses: ComputedRef<ListClasses> = computed(() => {
    const listItemClasses = classNames(
      'spr-flex spr-cursor-pointer spr-items-center spr-gap-1.5 spr-rounded-lg spr-p-2',
      'spr-transition spr-duration-150 spr-ease-in-out',
      'hover:spr-background-color-hover',
      'active:spr-background-color-single-active active:spr-scale-[.98]',
    );

    return { listItemClasses };
  });

  const localizedMenuList = ref<MenuListType[]>([]);
  const groupedMenuList = ref<GroupedMenuListType[]>([
    {
      groupLabel: 'no-group',
      items: [],
    },
  ]);

  // #region - Helper Methods
  const isItemSelected = (item: MenuListType) => {
    return selectedItems.value.some((selectedItem) => selectedItem.text === item.text);
  };

  const setMenuList = () => {
    localizedMenuList.value = [...props.menuList];

    if (localizedMenuList.value && localizedMenuList.value.length > 0) {
      if (groupItemsBy?.value) {
        if (groupItemsBy.value === 'default') {
          groupMenuList();
        } else {
          sortMenuList();
        }
      }
    }
  };

  const groupMenuList = () => {
    if (!groupItemsBy?.value) return;

    localizedMenuList.value.forEach((item) => {
      let groupKey = item.group;

      if (!groupKey) {
        groupKey = 'no-group';
      }

      if (groupedMenuList.value.some((g) => g.groupLabel === groupKey)) {
        groupedMenuList.value.find((g) => g.groupLabel === groupKey)?.items.push(item);
      } else {
        groupedMenuList.value.push({ groupLabel: groupKey, items: [item] });
      }
    });
  };

  const sortMenuList = () => {
    if (!groupItemsBy?.value) return;

    localizedMenuList.value
      .sort((a, b) => {
        if (groupItemsBy.value === 'A-Z') return a.text.localeCompare(b.text);
        if (groupItemsBy.value === 'Z-A') return b.text.localeCompare(a.text);
        return 0;
      })
      .forEach((item) => {
        const firstCharacter = item.text.charAt(0);
        const groupKey = /^\d/.test(firstCharacter) ? 'no-group' : firstCharacter.toUpperCase();

        if (groupedMenuList.value.some((g) => g.groupLabel === groupKey)) {
          groupedMenuList.value.find((g) => g.groupLabel === groupKey)?.items.push(item);
        } else {
          groupedMenuList.value.push({ groupLabel: groupKey, items: [item] });
        }
      });
  };

  const setPreSelectedItems = () => {
    if (!preSelectedItems.value?.length) return;

    const selected = preSelectedItems.value
      .map((preSelectedItem: string) =>
        localizedMenuList.value.find((menuItem) => String(menuItem.value) === String(preSelectedItem)),
      )
      .filter(Boolean) as MenuListType[];

    if (multiSelect.value) {
      selectedItems.value = selected;
    } else {
      const firstItem = selected[0];

      if (
        firstItem &&
        !selectedItems.value.some((selectedItem) => String(selectedItem.value) === String(firstItem.value))
      ) {
        selectedItems.value = [firstItem];
      }
    }
  };

  const getListItemClasses = (item: MenuListType) => ({
    [listClasses.value.listItemClasses]: true,
    'spr-background-color-single-active': isItemSelected(item),
  });

  const handleSelectedItem = (item: MenuListType) => {
    if (multiSelect.value) {
      const index = selectedItems.value.findIndex((selectedItem: MenuListType) => selectedItem.value === item.value);

      if (index === -1) {
        selectedItems.value = [...selectedItems.value, item];
      } else {
        const updatedItems = [...selectedItems.value];

        updatedItems.splice(index, 1);
        selectedItems.value = updatedItems;
      }
    } else {
      selectedItems.value = [item];
    }
  };
  // #endregion - Helper Methods

  watch(menuList, () => {
    localizedMenuList.value = [];
    groupedMenuList.value = [];

    setMenuList();
    setPreSelectedItems();
  });

  onMounted(() => {
    setMenuList();
    setPreSelectedItems();
  });

  return {
    listClasses,
    localizedMenuList,
    groupedMenuList,
    isItemSelected,
    getListItemClasses,
    handleSelectedItem,
  };
};
