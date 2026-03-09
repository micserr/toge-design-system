import { ref, toRefs, computed, ComputedRef, watch, onMounted } from 'vue';
import { useVModel } from '@vueuse/core';

import classNames from 'classnames';

import type { SetupContext } from 'vue';
import type { ListPropTypes, ListEmitTypes, MenuListType, GroupedMenuListType } from './list';

interface ListClasses {
  headerClasses: string;
  listItemClasses: string;
  borderClasses: string;
  listControlsClasses: string;
}

export const useList = (props: ListPropTypes, emit: SetupContext<ListEmitTypes>['emit']) => {
  const {
    menuList,
    menuLevel,
    groupItemsBy,
    multiSelect,
    preSelectedItems,
    disabledLocalSearch,
    noCheck,
    disabledUnselectedItems,
    stickySearchOffset,
    allowDeselect,
    allowSelectAll,
  } = toRefs(props);

  const listClasses: ComputedRef<ListClasses> = computed(() => {
    const borderClasses = classNames('spr-border-color-weak spr-border spr-border-solid');

    const headerClasses = classNames(
      'spr-sticky spr-z-20',
      'spr-grid spr-gap-3 spr-bg-white-50 spr-px-size-spacing-3xs spr-py-size-spacing-2xs',
      borderClasses,
      'spr-border-x-0 spr-border-b spr-border-t-0',
    );

    const listItemClasses = classNames(
      'spr-flex spr-cursor-pointer spr-items-center spr-justify-between spr-gap-1.5 spr-rounded-lg spr-p-2',
      'spr-transition spr-duration-150 spr-ease-in-out',
      'hover:spr-background-color-hover',
      'active:spr-background-color-single-active active:spr-scale-[.98]',
    );

    const listControlsClasses = classNames('spr-flex spr-w-full spr-items-center');

    return { headerClasses, listItemClasses, borderClasses, listControlsClasses };
  });

  const stickyOffsetStyle = computed(() => ({
    top:
      typeof stickySearchOffset.value === 'number' ? `${stickySearchOffset.value}px` : String(stickySearchOffset.value),
  }));

  const selectedItems = useVModel(props, 'modelValue', emit);
  const searchString = useVModel(props, 'searchValue', emit);

  const searchText = ref<string>('');

  const localizedMenuList = ref<MenuListType[]>([]);
  const apiSelectedList = ref<MenuListType[]>([]);
  const groupedMenuList = ref<GroupedMenuListType[]>([
    {
      groupLabel: 'no-group',
      items: [],
    },
  ]);

  // #region - Helper Methods
  const isParentMenu = computed(() => menuLevel.value === 0);

  const hasGroupedItems = computed(() => {
    return (
      props.groupItemsBy &&
      groupedMenuList.value &&
      groupedMenuList.value.length > 0 &&
      groupedMenuList.value.some((g) => g.items.length > 0)
    );
  });

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

    // When disabledLocalSearch is true, we need to check preserved items
    if (disabledLocalSearch.value && preSelectedItems.value?.length) {
      // Check if this item matches any of the pre-selected items
      return preSelectedItems.value.some((preSelectedValue) => {
        // Direct comparison for primitives
        if (typeof preSelectedValue !== 'object' || preSelectedValue === null) {
          return String(item.value) === String(preSelectedValue);
        }

        // For objects with an _originalObject property
        if ('_originalObject' in item && item._originalObject) {
          // Direct reference comparison (most accurate)
          if (preSelectedValue === item._originalObject) {
            return true;
          }

          // ID-based comparison if available
          if (
            'id' in preSelectedValue &&
            item._originalObject &&
            typeof item._originalObject === 'object' &&
            'id' in (item._originalObject as Record<string, unknown>)
          ) {
            return preSelectedValue.id === (item._originalObject as Record<string, unknown>).id;
          }

          // Full JSON comparison
          return JSON.stringify(preSelectedValue) === JSON.stringify(item._originalObject);
        }

        // Check if item.value contains or matches the preSelectedValue.id
        if ('id' in preSelectedValue) {
          return String(item.value).includes(String(preSelectedValue.id));
        }

        // Last resort: stringify both and compare
        try {
          if (typeof item.value === 'string' && item.value.startsWith('{')) {
            const parsedValue = JSON.parse(item.value);
            return JSON.stringify(parsedValue) === JSON.stringify(preSelectedValue);
          }
        } catch {
          // Ignore parse errors, continue with other checks
        }

        return false;
      });
    }

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

    const previousSelected = apiSelectedList.value.some((selectedItem) => {
      return selectedItem.value === item.value;
    });

    if (previousSelected) {
      handleSelectedItem(item);

      return true;
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

    let selected: MenuListType[] = [];

    // If disabledLocalSearch is true, we need to preserve preSelectedItems even if they're not in the options
    if (disabledLocalSearch.value) {
      // First, try to find matches in the current options
      const matchedItems = preSelectedItems.value
        .map((preSelectedItem: string | number | Record<string, unknown>) => {
          // Try to find a match in localizedMenuList
          const match = findMatchingItem(preSelectedItem, localizedMenuList.value);
          if (match) return match;

          // If no match is found and we need to preserve the item, create a placeholder item
          if (typeof preSelectedItem === 'object' && preSelectedItem !== null) {
            // For objects, try to create a display-friendly representation
            let displayText = 'Selected Item';
            if ('name' in preSelectedItem) displayText = String(preSelectedItem.name);
            else if ('title' in preSelectedItem) displayText = String(preSelectedItem.title);
            else if ('label' in preSelectedItem) displayText = String(preSelectedItem.label);
            else if ('text' in preSelectedItem) displayText = String(preSelectedItem.text);
            else if ('id' in preSelectedItem) displayText = `Item ${preSelectedItem.id}`;

            return {
              text: displayText,
              value: 'id' in preSelectedItem ? preSelectedItem.id : JSON.stringify(preSelectedItem),
              _originalObject: preSelectedItem,
              _preserved: true, // Mark this as preserved so we know it wasn't in the original list
            };
          } else {
            const displayText =
              selectedItems.value.find((item) => item.value === preSelectedItem)?.text || String(preSelectedItem);

            return {
              text: displayText,
              value: preSelectedItem,
              _preserved: true,
            };
          }
        })
        .filter(Boolean) as MenuListType[];

      selected = matchedItems;
    } else {
      // Standard behavior - only select items that exist in the current options
      selected = preSelectedItems.value
        .map((preSelectedItem: string | number | Record<string, unknown>) => {
          return findMatchingItem(preSelectedItem, localizedMenuList.value);
        })
        .filter(Boolean) as MenuListType[];
    }

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

  // Helper function to find a matching item in a list based on various comparison strategies
  const findMatchingItem = (item: string | number | Record<string, unknown>, list: MenuListType[]) => {
    // For objects, check for matching _originalObject properties
    if (typeof item === 'object' && item !== null) {
      // Try to find an item with a matching _originalObject
      const objectMatch = list.find((menuItem) => {
        if (!menuItem._originalObject) return false;

        // Compare serialized versions for deep equality
        return JSON.stringify(menuItem._originalObject) === JSON.stringify(item);
      });

      if (objectMatch) return objectMatch;

      // If no direct object match, try matching on ID if both have it
      if ('id' in item) {
        const idMatch = list.find((menuItem) => {
          if (menuItem._originalObject && 'id' in menuItem._originalObject) {
            return menuItem._originalObject.id === item.id;
          }
          // Also check if the value field contains a stringified version that includes the id
          return String(menuItem.value).includes(String(item.id));
        });

        if (idMatch) return idMatch;
      }
    }

    // First try direct value comparison (for exact matches)
    const directMatch = list.find((menuItem) => menuItem.value === item);
    if (directMatch) return directMatch;

    // Special handling for number values
    if (typeof item === 'number') {
      // Find items that match the number value either directly or as a string
      const numericMatch = list.find(
        (menuItem) =>
          // Match if menuItem.value is the same number
          (typeof menuItem.value === 'number' && menuItem.value === item) ||
          // Match if menuItem.value is a string representation of the number
          (typeof menuItem.value === 'string' && menuItem.value === String(item)),
      );
      if (numericMatch) return numericMatch;
    }

    // Then try string comparison for cases where types differ (string vs number)
    return list.find((menuItem) => String(menuItem.value) === String(item));
  };

  const getListItemClasses = (item: MenuListType) => ({
    [listClasses.value.listItemClasses]: !item.disabled && !(disabledUnselectedItems.value && !isItemSelected(item)),
    'spr-background-color-single-active': isItemSelected(item) && !item.disabled && !noCheck.value,
    'spr-cursor-not-allowed spr-flex spr-items-center spr-justify-between spr-gap-1.5 spr-rounded-lg':
      item.disabled || (disabledUnselectedItems.value && !isItemSelected(item)),
    'spr-p-size-spacing-3xs': !props.lozenge,
    'spr-py-size-spacing-3xs spr-px-size-spacing-4xs': props.lozenge,
  });

  const handleSearch = () => {
    const search = searchText.value.trim().toLowerCase();

    if (!search) {
      setMenuList();

      return;
    }

    // Recursive search for all matching items at any depth
    const recursiveSearch = (items: MenuListType[]): MenuListType[] => {
      let results: MenuListType[] = [];

      for (const item of items) {
        const textMatch = item.text.toLowerCase().includes(search);
        const subtextMatch = item.subtext ? item.subtext.toLowerCase().includes(search) : false;

        if (textMatch || subtextMatch) {
          results.push(item);
        }

        if (item.sublevel && item.sublevel.length > 0) {
          results = results.concat(recursiveSearch(item.sublevel));
        }
      }

      return results;
    };

    const filtered = recursiveSearch(props.menuList);

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

    if (disabledUnselectedItems.value && !isItemSelected(item)) return;

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
        const apiSelectedList = trackNewlySelectedItems(item, false);

        if (apiSelectedList.length > 0) {
          selectedItems.value = [...selectedItems.value, ...checkDuplicateValues(selectedItems.value, apiSelectedList)];
        }
      } else {
        // Remove item if already selected
        const updatedItems = [...selectedItems.value];
        updatedItems.splice(index, 1);
        selectedItems.value = updatedItems;

        // Track the deselection but DON'T add items back to selectedItems when deselecting
        trackNewlySelectedItems(item, true);
      }
      emit('get-single-selected-item', item);
    } else {
      // For single-select, simply replace the selection
      if (allowDeselect.value) {
        handleDeselect(item);
      } else {
        handleSingleSelect(item);
      }
    }
  };

  const handleDeselect = (item: MenuListType) => {
    if (selectedItems.value.length === 0 || !isItemSelected(item)) {
      selectedItems.value = [item];
      emit('get-single-selected-item', item);
    } else {
      selectedItems.value = [];
      emit('get-single-deselected-item', item);
    }
  };

  const handleSingleSelect = (item: MenuListType) => {
    selectedItems.value = [item];
    if (item.onClickFn) item.onClickFn();
    emit('get-single-selected-item', item);
  };
  // #endregion - Helper Methods

  const checkDuplicateValues = (selected: MenuListType[], apiSelected: MenuListType[]) => {
    return apiSelected.filter(
      (apiItem) =>
        !selected.some(
          (selectedItem) => String(selectedItem.value) === String(apiItem.value) || selectedItem.text === apiItem.text,
        ),
    );
  };

  const trackNewlySelectedItems = (selectedItem: MenuListType, isDeselected: boolean) => {
    // Use a more robust comparison to find items
    const existingIndex = apiSelectedList.value.findIndex((existing) => {
      // Compare by value (with string conversion for consistency)
      if (String(existing.value) === String(selectedItem.value)) return true;

      // Compare by text as a fallback
      if (existing.text === selectedItem.text) return true;

      return false;
    });

    if (existingIndex === -1 && !isDeselected) {
      // Add item only if it doesn't exist and we're selecting (not deselecting)
      apiSelectedList.value.push(selectedItem);
    } else if (existingIndex !== -1 && isDeselected) {
      // Remove item if it exists and we're deselecting
      apiSelectedList.value.splice(existingIndex, 1);
    }

    return apiSelectedList.value;
  };

  watch(
    menuList,
    () => {
      localizedMenuList.value = [];
      groupedMenuList.value = [];

      setMenuList();

      // If disabledLocalSearch is true, we need to preserve the selected items
      // even when the options change, so only call setPreSelectedItems on initial load
      // or when disabledLocalSearch is false
      if (!disabledLocalSearch.value || selectedItems.value.length === 0) {
        setPreSelectedItems();
      }
    },
    { deep: true },
  );

  watch(searchText, () => {
    if (disabledLocalSearch.value) {
      searchString.value = searchText.value;
      return;
    }
    handleSearch();
  });

  // Sync searchString (from prop) back to searchText (local state)
  watch(searchString, (newVal) => {
    if (searchText.value !== newVal) {
      searchText.value = newVal;
    }
  });

  watch(
    apiSelectedList,
    () => {
      // We only need to handle additions to apiSelectedList
      // Use checkDuplicateValues to ensure no duplicates when adding from apiSelectedList
      const newUniqueItems = checkDuplicateValues(selectedItems.value, apiSelectedList.value);

      if (newUniqueItems.length > 0) {
        selectedItems.value = [...selectedItems.value, ...newUniqueItems];
      }
    },
    { deep: true },
  );

  onMounted(() => {
    searchString.value = searchText.value;

    setMenuList();
    setPreSelectedItems();
  });

  // Handle search keyup to ignore modifier-only keys
  const handleSearchKeyup = (event: KeyboardEvent) => {
    // Ignore pure modifier keys: Shift, Control, Alt, Meta (Command/Windows), CapsLock
    const modifierOnlyKeys = ['Shift', 'Control', 'Alt', 'Meta', 'CapsLock'];

    if (!modifierOnlyKeys.includes(event.key)) {
      // Allow the search to proceed - v-model will handle the actual update
      return;
    }

    // For modifier-only keys, prevent default behavior if needed
    event.preventDefault();
  };

  // Computed property to check if any items are selected
  const hasSelectedItems = computed(() => {
    if (!multiSelect.value || !allowSelectAll.value) return false;
    return selectedItems.value.length > 0;
  });

  // Function to handle select/unselect all items
  const handleSelectAll = () => {
    if (!multiSelect.value || !allowSelectAll.value) return;

    const currentItems = hasGroupedItems.value
      ? groupedMenuList.value.flatMap((group) => group.items)
      : localizedMenuList.value;

    // Filter out disabled items
    const enabledItems = currentItems.filter((item) => !item.disabled);

    if (hasSelectedItems.value) {
      // If any items are selected, unselect all items completely
      selectedItems.value = [];
      // Also clear any preserved or API selected items
      apiSelectedList.value = [];
      emit('update:modelValue', []);
    } else {
      // If no items are selected, select all enabled items
      selectedItems.value = [...enabledItems];
      emit('update:modelValue', [...enabledItems]);
    }
  };

  return {
    listClasses,
    stickyOffsetStyle,
    selectedItems,
    searchText,
    localizedMenuList,
    groupedMenuList,
    apiSelectedList,
    isParentMenu,
    hasGroupedItems,
    hasSelectedItems,
    isItemSelected,
    getListItemClasses,
    handleSearch,
    handleSelectedItem,
    handleSelectAll,
    trackNewlySelectedItems,
    handleSearchKeyup,
  };
};
