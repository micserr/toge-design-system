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

  const { menuList, menuLevel, groupItemsBy, multiSelect, preSelectedItems } = toRefs(props);

  const listClasses: ComputedRef<ListClasses> = computed(() => {
    const listItemClasses = classNames(
      'spr-flex spr-cursor-pointer spr-items-center spr-gap-1.5 spr-rounded-lg spr-p-2',
      'spr-transition spr-duration-150 spr-ease-in-out',
      'hover:spr-background-color-hover',
      'active:spr-background-color-single-active active:spr-scale-[.98]',
    );

    return { listItemClasses };
  });

  const searchText = ref<string>('');

  const localizedMenuList = ref<MenuListType[]>([]);
  const groupedMenuList = ref<GroupedMenuListType[]>([
    {
      groupLabel: 'no-group',
      items: [],
    },
  ]);

  // #region - Helper Methods
  const isParentMenu = computed(() => menuLevel.value === 0);

  const isItemSelected = (item: MenuListType) => {
    // First check standard selection via the selectedItems array
    const directSelected = selectedItems.value.some((selectedItem) => {
      // Compare both text and value properties to handle different value types
      if (selectedItem.text === item.text) return true;

      // Ensure comparison works for both string and number values
      const selectedItemValue = selectedItem.value;
      const itemValue = item.value;

      // For primitives, use string comparison to handle number-string comparison properly
      if (typeof selectedItemValue !== 'object' && typeof itemValue !== 'object') {
        return String(selectedItemValue) === String(itemValue);
      }

      // For objects, use JSON.stringify for comparison (will match for equality)
      if (
        typeof selectedItemValue === 'object' &&
        selectedItemValue !== null &&
        typeof itemValue === 'object' &&
        itemValue !== null
      ) {
        return JSON.stringify(selectedItemValue) === JSON.stringify(itemValue);
      }

      return false;
    });

    if (directSelected) return true;

    // Additional check for objects stored in _originalObject property
    if ('_originalObject' in item && item._originalObject && preSelectedItems.value?.length) {
      return preSelectedItems.value.some((preSelectedValue) => {
        // Direct reference comparison (most accurate)
        if (preSelectedValue === item._originalObject) {
          return true;
        }

        // If both are objects, compare their serialized forms
        if (typeof preSelectedValue === 'object' && preSelectedValue !== null) {
          const originalObj = item._originalObject as Record<string, unknown>;

          if (typeof originalObj === 'object') {
            // First try comparing by ID for more reliable object comparison
            if ('id' in preSelectedValue && 'id' in originalObj) {
              return preSelectedValue.id === originalObj.id;
            }

            // Fallback to full object comparison
            const valString = JSON.stringify(preSelectedValue);
            const itemString = JSON.stringify(originalObj);
            return valString === itemString;
          }

          // If object has an id field, check if it matches with the item value
          if ('id' in preSelectedValue) {
            return String(item.value).includes(String(preSelectedValue.id));
          }
        }

        return false;
      });
    }

    return false;
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
      .map((preSelectedItem: string | number | Record<string, unknown>) => {
        // For objects, check for matching _originalObject properties
        if (typeof preSelectedItem === 'object' && preSelectedItem !== null) {
          // Try to find an item with a matching _originalObject
          const objectMatch = localizedMenuList.value.find((menuItem) => {
            if (!menuItem._originalObject) return false;

            // Compare serialized versions for deep equality
            return JSON.stringify(menuItem._originalObject) === JSON.stringify(preSelectedItem);
          });

          if (objectMatch) return objectMatch;

          // If no direct object match, try matching on ID if both have it
          if ('id' in preSelectedItem) {
            const idMatch = localizedMenuList.value.find((menuItem) => {
              if (menuItem._originalObject && 'id' in menuItem._originalObject) {
                return menuItem._originalObject.id === preSelectedItem.id;
              }
              // Also check if the value field contains a stringified version that includes the id
              return String(menuItem.value).includes(String(preSelectedItem.id));
            });

            if (idMatch) return idMatch;
          }
        }

        // First try direct value comparison (for exact matches)
        const directMatch = localizedMenuList.value.find((menuItem) => menuItem.value === preSelectedItem);
        if (directMatch) return directMatch;

        // Special handling for number values in the preSelectedItems array
        if (typeof preSelectedItem === 'number') {
          // Find items that match the number value either directly or as a string
          const numericMatch = localizedMenuList.value.find(
            (menuItem) =>
              // Match if menuItem.value is the same number
              (typeof menuItem.value === 'number' && menuItem.value === preSelectedItem) ||
              // Match if menuItem.value is a string representation of the number
              (typeof menuItem.value === 'string' && menuItem.value === String(preSelectedItem)),
          );
          if (numericMatch) return numericMatch;
        }

        // Then try string comparison for cases where types differ (string vs number)
        return localizedMenuList.value.find((menuItem) => String(menuItem.value) === String(preSelectedItem));
      })
      .filter(Boolean) as MenuListType[];

    if (multiSelect.value) {
      selectedItems.value = selected;
    } else {
      const firstItem = selected[0];

      if (
        firstItem &&
        !selectedItems.value.some((selectedItem) => {
          // Use the same comparison logic as in isItemSelected
          if (selectedItem.text === firstItem.text) return true;
          return String(selectedItem.value) === String(firstItem.value);
        })
      ) {
        selectedItems.value = [firstItem];
      }
    }
  };

  const getListItemClasses = (item: MenuListType) => ({
    [listClasses.value.listItemClasses]: !item.disabled,
    'spr-background-color-single-active': isItemSelected(item) && !item.disabled,
    'hover:spr-cursor-not-allowed spr-flex spr-cursor-pointer spr-items-center spr-gap-1.5 spr-rounded-lg spr-p-2':
      item.disabled,
  });

  const handleSearch = () => {
    const search = searchText.value.trim().toLowerCase();

    if (!search) {
      setMenuList();

      return;
    }

    // Filter items by text or subtext
    const filtered = props.menuList.filter((item) => {
      const textMatch = item.text.toLowerCase().includes(search);
      const subtextMatch = item.subtext ? item.subtext.toLowerCase().includes(search) : false;

      return textMatch || subtextMatch;
    });

    localizedMenuList.value = filtered;

    // If grouping is enabled, regroup the filtered list
    if (groupItemsBy?.value) {
      groupedMenuList.value = [{ groupLabel: 'no-group', items: [] }];
      if (groupItemsBy.value === 'default') {
        filtered.forEach((item) => {
          const groupKey = item.group || 'no-group';

          if (groupedMenuList.value.some((g) => g.groupLabel === groupKey)) {
            groupedMenuList.value.find((g) => g.groupLabel === groupKey)?.items.push(item);
          } else {
            groupedMenuList.value.push({ groupLabel: groupKey, items: [item] });
          }
        });
      } else {
        filtered
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
      }
    }
  };

  const handleSelectedItem = (item: MenuListType) => {
    if (item.disabled) return;

    if (multiSelect.value) {
      // For multi-select, check if item is already selected
      const index = selectedItems.value.findIndex((selectedItem: MenuListType) => {
        // Compare text values first for simple match
        if (selectedItem.text === item.text) return true;

        // Compare primitive values with string conversion for compatibility
        if (typeof selectedItem.value !== 'object' && typeof item.value !== 'object') {
          return String(selectedItem.value) === String(item.value);
        }

        // For objects, compare their JSON string representations
        if (
          typeof selectedItem.value === 'object' &&
          selectedItem.value !== null &&
          typeof item.value === 'object' &&
          item.value !== null
        ) {
          return JSON.stringify(selectedItem.value) === JSON.stringify(item.value);
        }

        // Compare _originalObject if available (most reliable for complex objects)
        if (
          '_originalObject' in selectedItem &&
          selectedItem._originalObject &&
          '_originalObject' in item &&
          item._originalObject
        ) {
          // Direct reference equality check (fastest)
          if (selectedItem._originalObject === item._originalObject) {
            return true;
          }

          // ID-based comparison (reliable for objects with IDs)
          const selectedObj = selectedItem._originalObject as Record<string, unknown>;
          const itemObj = item._originalObject as Record<string, unknown>;

          if ('id' in selectedObj && 'id' in itemObj) {
            return selectedObj.id === itemObj.id;
          }

          // Full JSON comparison (most comprehensive but slower)
          return JSON.stringify(selectedItem._originalObject) === JSON.stringify(item._originalObject);
        }

        return false;
      });

      if (index === -1) {
        // Add item if not already selected
        selectedItems.value = [...selectedItems.value, item];
      } else {
        // Remove item if already selected
        const updatedItems = [...selectedItems.value];
        updatedItems.splice(index, 1);
        selectedItems.value = updatedItems;
      }
    } else {
      // For single-select, simply replace the selection
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
    searchText,
    listClasses,
    localizedMenuList,
    groupedMenuList,
    isParentMenu,
    isItemSelected,
    getListItemClasses,
    handleSearch,
    handleSelectedItem,
  };
};
