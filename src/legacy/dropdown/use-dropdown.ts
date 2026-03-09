import { ref, toRefs, computed, onMounted, watch } from 'vue';
import { useInfiniteScroll, useVModel } from '@vueuse/core';

import type { SetupContext } from 'vue';
import type { DropdownPropTypes, DropdownEmitTypes } from './dropdown';
import type { MenuListType } from '../list/list';

export const useDropdown = (props: DropdownPropTypes, emit: SetupContext<DropdownEmitTypes>['emit']) => {
  const {
    menuList,
    searchString,
    disabled,
    multiSelect,
    removeCurrentLevelInBackLabel,
    ladderized,
    textField,
    valueField,
  } = toRefs(props);

  // Dropdown component ref variables
  const dropdownValue = useVModel(props, 'modelValue', emit); // v-model value of dropdown component
  const dropdownRef = ref<HTMLDivElement | null>(null);

  // List component ref variables
  const selectedListItems = ref<MenuListType[]>([]); // v-model value of the list component
  const dropdownMenuList = ref<MenuListType[]>([]); // menu list for the list component

  // Normalized value for internal use - always an array
  const normalizedValue = computed(() => {
    // If already an array, use it
    if (Array.isArray(dropdownValue.value)) {
      return dropdownValue.value;
    }
    // If not an array but has a value, make it a single-item array
    if (dropdownValue.value !== undefined && dropdownValue.value !== null) {
      return [dropdownValue.value];
    }
    // Default empty array
    return [];
  });

  // Compatibility layer for pre-selected items (List component expects string[] format)
  const compatPreSelectedItems = computed(() => {
    // For ladderized dropdown with search, handle the special format
    if (props.ladderized && Array.isArray(dropdownValue.value) && dropdownValue.value.length === 2) {
      // We return only the second value from the [subvalue, value] format which is the actual selected value
      return [dropdownValue.value[1]?.toString() || ''];
    }

    // For regular arrays (multi-select)
    if (Array.isArray(dropdownValue.value)) {
      return dropdownValue.value.map((item) => {
        if (item === undefined || item === null) return '';

        // For numbers, preserve the original number value instead of converting to string
        if (typeof item === 'number') return item;

        // For objects, pass the original object reference
        // This is key for proper multi-select of objects
        if (typeof item === 'object') return item;

        // For strings, pass as is
        return item.toString();
      });
    }

    // For single values (single-select)
    return dropdownValue.value !== undefined && dropdownValue.value !== null
      ? [
          typeof dropdownValue.value === 'object'
            ? // Pass object reference directly instead of stringifying
              dropdownValue.value
            : // For numbers, preserve the original number value
              typeof dropdownValue.value === 'number'
              ? dropdownValue.value
              : dropdownValue.value.toString(),
        ]
      : [];
  });

  // Popper state
  const dropdownPopperState = ref<boolean>(false);
  const isDropdownPopperDisabled = computed(() => disabled.value);

  // Exposed methods to show/hide dropdown. This is for custom trigger handling for custom dropdown.
  // To use these methods, set :triggers="[]" on the SprDropdown component to disable default triggers. (reference: https://floating-vue.starpad.dev/api/#shown)
  /* #region - Exposed Methods */
  const showDropdown = () => {
    dropdownPopperState.value = true;
  };
  const hideDropdown = () => {
    dropdownPopperState.value = false;
  };
  /* #endregion - Exposed Methods */

  const isLadderizedSearch = computed(
    () => ladderized.value && searchString.value !== '' && normalizedValue.value.length === 0,
  );

  const processMenuList = () => {
    // Handle empty array or non-array values
    if (!menuList.value || !Array.isArray(menuList.value) || menuList.value.length === 0) {
      dropdownMenuList.value = [];
      return;
    }

    // If ladderized is true and menu list items already conform to MenuListType, don't transform
    if (ladderized.value) {
      // Verify the items have the required structure for ladderized lists
      const allValid = menuList.value.every(
        (item) => typeof item === 'object' && item !== null && 'text' in item && 'value' in item,
      );

      if (allValid) {
        dropdownMenuList.value = menuList.value as MenuListType[];
      } else {
        console.warn('Ladderized dropdown requires menu items in {text, value} format');
        dropdownMenuList.value = [];
      }
      return;
    }

    const firstItem = menuList.value[0];

    // Handle array of strings
    if (typeof firstItem === 'string') {
      dropdownMenuList.value = (menuList.value as string[]).map((item) => ({
        text: item,
        value: item,
      }));
      return;
    }

    // Handle array of numbers
    if (typeof firstItem === 'number') {
      // Narrowing confirmed via runtime check above; cast through unknown to appease TS
      const numericList = menuList.value as unknown as number[];
      dropdownMenuList.value = numericList.map((item) => ({
        text: item.toString(),
        value: item, // Keep the value as a number instead of converting to string
      }));
      return;
    }

    // Handle array of objects with dynamic attributes
    if (typeof firstItem === 'object' && firstItem !== null) {
      // Check if it's already in MenuListType format
      if ('text' in firstItem && 'value' in firstItem) {
        dropdownMenuList.value = menuList.value as MenuListType[];
        return;
      }

      // Transform to MenuListType format using textField and valueField
      dropdownMenuList.value = (menuList.value as Record<string, unknown>[]).map((item) => {
        const rawText = item[textField.value];
        const displayText = typeof rawText === 'string' ? rawText : rawText != null ? String(rawText) : 'Unnamed';
        // Use the specified value field if available, otherwise use the entire object
        const itemValue = valueField.value && item[valueField.value] !== undefined ? item[valueField.value] : item;
        const normalizedValue =
          itemValue === undefined || itemValue === null
            ? ''
            : typeof itemValue === 'object'
              ? JSON.stringify(itemValue)
              : String(itemValue);

        return {
          text: displayText,
          // Keep original object reference separately; value kept primitive/stringified for list
          value: normalizedValue,
          _originalObject: item, // Store the original object for reference
        } as unknown as MenuListType;
      });
      return;
    }

    // Default fallback
    dropdownMenuList.value = menuList.value as MenuListType[];
  };

  watch(menuList, () => {
    processMenuList();
  });

  const handleSearch = () => {
    if (menuList.value && menuList.value.length === 0) {
      return;
    }

    if (!multiSelect.value) {
      singleSelectSearch();
    } else {
      // Process menu list for searching
      processMenuList();

      // Handle multi-select search - filter based on search string
      if (searchString.value.trim() !== '') {
        dropdownMenuList.value = getFilteredMenuList(dropdownMenuList.value);
      }
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
    // Process menu list first
    processMenuList();

    // Then filter based on search string
    if (searchString.value.trim() !== '') {
      dropdownMenuList.value = getFilteredMenuList(dropdownMenuList.value);
    }
  };

  const ladderizedSearch = () => {
    //revert to initial list if search string is empty or dropdownValue is not empty
    if (searchString.value === '' || normalizedValue.value.length > 0) {
      dropdownMenuList.value = [...menuList.value] as MenuListType[];
      return;
    }

    const menuListSubLevels = getAllSublevelItems(menuList.value as MenuListType[]);

    const filteredMenuList = getFilteredMenuList(menuList.value as MenuListType[]);
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
    return menuList.reduce<MenuListType[]>((currentValue, currentItem) => {
      if (currentItem.sublevel) {
        const mappedSublevel = currentItem.sublevel.map((sublevelItem: MenuListType) => ({
          ...sublevelItem, //text and value of a sublevel item
          subtext: currentItem.text, // text of parent of a sublevel item
          subvalue: typeof currentItem.value === 'string' ? currentItem.value : String(currentItem.value), // value of parent of a sublevel item as string
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
      // Determine the type of value to emit based on the original data type and multiSelect
      if (multiSelect.value) {
        // For multi-select, always return an array
        const values = selectedItems.map((item) => {
          // If we stored the original object, use it
          if ('_originalObject' in item) {
            return item._originalObject;
          }

          // For simple types, handle value type conversion properly
          const val = item.value;

          // If it's already a number, keep it as a number
          if (typeof val === 'number') {
            return val;
          }

          // For strings that look like numbers, convert them
          if (typeof val === 'string' && !isNaN(Number(val)) && val.trim() !== '') {
            // Only convert if it looks like a proper number format
            if (/^-?\d+(\.\d+)?$/.test(val)) {
              return Number(val);
            }
          }

          // Return the original value for all other cases
          return val;
        });

        dropdownValue.value = values as (string | number | Record<string, unknown>)[];
      } else {
        // For single-select
        if (selectedItems.length === 0) {
          dropdownValue.value = props.multiSelect ? [] : '';
          return;
        }

        const item = selectedItems[0];

        // If we stored the original object, use it
        if ('_originalObject' in item) {
          dropdownValue.value = item._originalObject as Record<string, unknown>;
        } else {
          // For simple types, return the value (try to convert number strings to numbers)
          const val = item.value;
          if (typeof val === 'string' && !isNaN(Number(val)) && val.trim() !== '') {
            dropdownValue.value = Number(val);
          } else {
            dropdownValue.value = val;
          }
        }
      }
    } else if (props.ladderized) {
      if (props.searchString !== '') {
        // generate dropdown value if ladderized with search string
        const subvalue = selectedItems[0]?.subvalue;
        const value = selectedItems[0]?.value;
        if (subvalue !== undefined && value !== undefined) {
          dropdownValue.value = [subvalue, value] as [string, string | number];
        }
      } else {
        // For regular ladderized dropdown selection without search
        if (selectedItems.length > 0) {
          const item = selectedItems[0];
          // Use the value directly for ladderized items
          if (item && item.value) {
            dropdownValue.value = item.value;
          }
        }
      }
    }

    // Always close dropdown for single selection, regardless of value type
    if (!multiSelect.value) {
      setTimeout(() => {
        dropdownPopperState.value = false;
      }, 10);
    }
  };

  // Handle selected item for ladderized list component
  const handleSelectedLadderizedItem = (selectedItems: string[]) => {
    // Update the model value with the selected ladderized items
    if (selectedItems.length > 0) {
      dropdownValue.value = selectedItems;
    }

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

  // Update selected items when model value changes externally
  const updateSelectedItemsFromValue = () => {
    if (!dropdownMenuList.value.length) return;

    const values = normalizedValue.value;
    if (!values || !values.length) {
      selectedListItems.value = [];
      return;
    }

    // Store both original values and string versions for flexible matching
    const valueData = values.map((val) => {
      if (val === undefined || val === null) return { original: '', string: '' };

      // For objects, use JSON string representation
      if (typeof val === 'object') {
        return {
          original: val,
          string: JSON.stringify(val),
          isObject: true,
          id: 'id' in val ? val.id : undefined,
        };
      }

      // For numbers and strings, keep original and string versions
      return {
        original: val,
        string: val.toString(),
        isObject: false,
      };
    });

    // Extract just string values for comparison
    const valueStrings = valueData.map((v) => v.string);

    if (props.ladderized) {
      // Special handling for ladderized dropdowns
      if (Array.isArray(dropdownValue.value) && dropdownValue.value.length === 2) {
        // Handle [subvalue, value] format used in ladderized dropdowns with search
        const subvalue = dropdownValue.value[0]?.toString() || '';
        const value = dropdownValue.value[1]?.toString() || '';

        selectedListItems.value = dropdownMenuList.value.filter((item) => {
          return item.value === value && (!item.subvalue || item.subvalue === subvalue);
        });
      } else {
        // Regular ladderized dropdown value
        selectedListItems.value = dropdownMenuList.value.filter((item) => {
          // Convert both to strings for comparison or check direct equality for numbers
          if (typeof item.value === 'number') {
            return valueData.some((v) => v.original === item.value || v.string === String(item.value));
          } else {
            return valueStrings.includes(String(item.value));
          }
        });
      }
    } else {
      // Regular dropdown value
      selectedListItems.value = dropdownMenuList.value.filter((item) => {
        // Handle objects with _originalObject property
        if ('_originalObject' in item && item._originalObject) {
          return valueData.some((v) => {
            // If both are objects, compare by JSON string or by ID
            if (v.isObject && typeof v.original === 'object') {
              const originalObj = item._originalObject as Record<string, unknown>;

              // First try direct equality comparison
              if (v.original === originalObj) return true;

              // Try JSON string comparison
              const itemJson = JSON.stringify(originalObj);
              if (v.string === itemJson) return true;

              // Try ID-based comparison if both have ID fields
              if (v.id !== undefined && 'id' in originalObj) {
                return v.id === originalObj.id;
              }
            }
            return false;
          });
        }

        // Handle both numeric and string values correctly
        if (typeof item.value === 'number') {
          return valueData.some((v) => v.original === item.value || v.string === String(item.value));
        } else {
          return valueStrings.includes(String(item.value));
        }
      });
    }
  };

  watch(dropdownValue, () => {
    updateSelectedItemsFromValue();
  });

  watch(dropdownMenuList, () => {
    updateSelectedItemsFromValue();
  });

  watch(dropdownPopperState, (newState) => {
    emit('popper-state', newState);
  });

  onMounted(() => {
    processMenuList();

    // Set initial selected items based on model value
    if (normalizedValue.value.length > 0) {
      updateSelectedItemsFromValue();
    }
  });

  return {
    dropdownPopperState,
    dropdownRef,
    dropdownMenuList,
    isDropdownPopperDisabled,
    selectedListItems,
    handleSelectedItem,
    handleSelectedLadderizedItem,
    dropdownValue: compatPreSelectedItems, // Use compatible format for lists
    removeCurrentLevelInBackLabel,
    isLadderizedSearch,
    showDropdown,
    hideDropdown,
  };
};
