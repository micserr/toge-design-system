import { ref, toRefs, computed, ComputedRef, onMounted } from 'vue';
import classNames from 'classnames';
import type { SetupContext } from 'vue';
import type { ListPropTypes, ListEmitTypes, MenuListType, GroupedMenuListType } from './list';
import { useVModel } from '@vueuse/core'

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
    if (menuList.value && menuList.value.length > 0) {

      if (groupItemsBy?.value) {
        if (groupItemsBy.value === 'default') groupMenuList();
        else sortMenuList();
      }
    }
  };

  const groupMenuList = () => {
    if (!groupItemsBy?.value) return;

    menuList.value.forEach((item) => {
      let groupKey = item.group;
      if (!groupKey) {
        groupKey = 'no-group';
      }
      if (groupedMenuList.value.some(g => g.groupLabel === groupKey)) {
        groupedMenuList.value.find(g => g.groupLabel === groupKey)?.items.push(item);
      } else {
        groupedMenuList.value.push({ groupLabel: groupKey, items: [item] });
      }
    });
  };

  const sortMenuList = () => {
    if (!groupItemsBy?.value) return;

    menuList.value
      .sort((a, b) => {
        if (groupItemsBy.value === 'A-Z') return a.text.localeCompare(b.text);
        if (groupItemsBy.value === 'Z-A') return b.text.localeCompare(a.text);
        return 0;
      })
      .forEach((item) => {
        const firstCharacter = item.text.charAt(0);
        const groupKey = /^\d/.test(firstCharacter) ? 'no-group' : firstCharacter.toUpperCase();

      if (groupedMenuList.value.some(g => g.groupLabel === groupKey)) {
        groupedMenuList.value.find(g => g.groupLabel === groupKey)?.items.push(item);
      } else {
        groupedMenuList.value.push({ groupLabel: groupKey, items: [item] });
      }
    });
  };

  const setPreSelectedItems = () => {
    if (preSelectedItems.value && preSelectedItems.value.length > 0) {
      preSelectedItems.value.forEach((preSelectedItem: string) => {
        // If single select, only select the first item and skip the for loop
        if (!multiSelect.value && selectedItems.value.length > 0)  return;
        
        const item = menuList.value.find(
          (menuItem) => String(menuItem.value) === String(preSelectedItem),
        );

        if (item) {
          selectedItems.value.push(item);
        }
      });
    }
  };

  const getListItemClasses = (item: MenuListType) => ({
    [listClasses.value.listItemClasses]: true,
    'spr-background-color-single-active': isItemSelected(item),
  });

  const handleSelectedItem = (item: MenuListType) => {
    if (!multiSelect.value) {
      selectedItems.value = [item];
    } else {
      const index = selectedItems.value.findIndex((selectedItem: MenuListType) => selectedItem.value === item.value);

      if (index === -1) {
        selectedItems.value.push(item);
      } else {
        selectedItems.value.splice(index, 1);
      }
      emit('update:modelValue', selectedItems.value);
    }
  };
  // #endregion - Helper Methods

  onMounted(() => {
    setMenuList();
    setPreSelectedItems();
  });

  return {
    listClasses,
    groupedMenuList,
    isItemSelected,
    getListItemClasses,
    handleSelectedItem,
  };
};
