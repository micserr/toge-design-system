import { ref, toRefs, computed, ComputedRef, onMounted, watch } from 'vue';
import { onClickOutside, useInfiniteScroll, useVModel, useDebounceFn } from '@vueuse/core';

import classNames from 'classnames';

import type { SetupContext } from 'vue';
import type { SelectPropTypes, SelectEmitTypes } from './select';
import type { MenuListType } from '../list/list';

interface SelectClasses {
  baseClasses: string;
  labelClasses: string;
}

export const useSelect = (props: SelectPropTypes, emit: SetupContext<SelectEmitTypes>['emit']) => {
  const { displayText, menuList, disabled, textField, valueField } = toRefs(props);

  const selectClasses: ComputedRef<SelectClasses> = computed(() => {
    const baseClasses = classNames('spr-flex spr-flex-col spr-gap-size-spacing-4xs');

    const labelClasses = classNames('spr-body-sm-regular spr-text-color-strong spr-block', {
      'spr-text-color-on-fill-disabled': disabled.value,
    });

    return {
      baseClasses,
      labelClasses,
    };
  });

  const selectRef = ref<HTMLDivElement | null>(null);
  const selectPopperState = ref<boolean>(false);
  const isSelectPopperDisabled = computed(() => disabled.value);

  const selectModel = useVModel(props, 'modelValue', emit);
  const inputText = ref<string | number>('');
  const isSearching = ref<boolean>(false);
  const selectedListItems = ref<MenuListType[]>();
  const selectMenuList = ref<MenuListType[]>([]);
  const hasUserSelected = ref(false);

  const handleMenuToggle = () => {
    selectPopperState.value = true;

    isSearching.value = false;
  };

  // Normalized value for internal use - always an array
  const normalizedValue = computed(() => {
    // If already an array, use it
    if (Array.isArray(selectModel.value)) {
      return selectModel.value;
    }

    // If not an array but has a value, make it a single-item array
    if (selectModel.value !== undefined && selectModel.value !== null) {
      return [selectModel.value];
    }

    // Default empty array
    return [];
  });

  // Compatibility layer for pre-selected items (List component expects string[] format)
  const compatPreSelectedItems = computed(() => {
    if (selectModel.value === undefined || selectModel.value === null) return [];

    if (Array.isArray(selectModel.value)) {
      return selectModel.value;
    }

    return [selectModel.value];
  });

  const processMenuList = () => {
    // Handle empty array or non-array values
    if (!menuList.value || !Array.isArray(menuList.value) || menuList.value.length === 0) {
      selectMenuList.value = [];

      return;
    }

    const firstItem = menuList.value[0];

    // Handle array of strings
    if (typeof firstItem === 'string') {
      selectMenuList.value = (menuList.value as string[]).map((item) => ({
        text: item,
        value: item,
      }));

      return;
    }

    // Handle array of numbers
    if (typeof firstItem === 'number') {
      selectMenuList.value = (menuList.value as number[]).map((item) => ({
        text: item.toString(),
        value: item, // Keep the value as a number instead of converting to string
      }));
      return;
    }

    // Handle array of objects with dynamic attributes
    if (typeof firstItem === 'object' && firstItem !== null) {
      // Check if it's already in MenuListType format
      if ('text' in firstItem && 'value' in firstItem) {
        selectMenuList.value = menuList.value as MenuListType[];

        return;
      }

      // Transform to MenuListType format using textField and valueField
      selectMenuList.value = (menuList.value as Record<string, unknown>[]).map((item) => {
        const displayText = item[textField.value] || 'Unnamed';
        // Use the specified value field if available, otherwise use the entire object
        const itemValue = valueField.value && item[valueField.value] !== undefined ? item[valueField.value] : item;

        return {
          text: displayText,
          value: typeof itemValue === 'object' ? JSON.stringify(itemValue) : itemValue.toString(),
          _originalObject: item, // Store the original object for reference
        };
      });

      return;
    }

    selectMenuList.value = menuList.value as MenuListType[];
  };

  const filteredSelectMenuList = computed(() => {
    const query = inputText.value.toLowerCase().trim();

    if (!query) return selectMenuList.value;

    return selectMenuList.value.filter((item) => item.text?.toString().toLowerCase().includes(query));
  });

  watch(menuList, () => {
    processMenuList();
  });

  const handleSearch = () => {
    isSearching.value = true;

    debouncedEmitSearch();
  };

  const debouncedEmitSearch = useDebounceFn(() => {
    emit('search-string', inputText.value);
  }, 300);

  onClickOutside(selectRef, () => {
    selectPopperState.value = false;
  });

  useInfiniteScroll(
    selectRef,
    () => {
      emit('infinite-scroll-trigger', true);
    },
    { distance: 10 },
  );

  // Handle selected item for simple list component
  const handleSelectedItem = (selectedItems: MenuListType[]) => {
    if (selectedItems.length === 0) {
      selectModel.value = '';

      return;
    }

    hasUserSelected.value = true; // User has now made a selection

    const item = selectedItems[0];

    // If we stored the original object, use it
    if ('_originalObject' in item) {
      selectModel.value = item._originalObject as Record<string, unknown>;
    } else {
      // For simple types, return the value (try to convert number strings to numbers)
      const itemValue = item.value;
      const itemText = item.text || '';

      if (typeof itemValue === 'string' && !isNaN(Number(itemValue)) && itemValue.trim() !== '') {
        selectModel.value = Number(itemValue);
      } else {
        selectModel.value = itemValue;
      }

      inputText.value = itemText;
    }

    // Always close select for single selection
    setTimeout(() => {
      selectPopperState.value = false;
    }, 10);
  };

  // Update selected items when model value changes externally
  const updateSelectedItemsFromValue = () => {
    if (!selectMenuList.value.length) return;

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

    selectedListItems.value = selectMenuList.value.filter((item) => {
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

    inputText.value = selectedListItems.value.map((item) => item.text).join(', ');

    // Only use displayText.value if user hasn't selected anything yet
    if (displayText.value && !hasUserSelected.value) {
      inputText.value = displayText.value;
    }
  };

  const handleClear = () => {
    emit('update:modelValue', '');

    inputText.value = '';
  };

  watch(selectModel, () => {
    updateSelectedItemsFromValue();
  });

  watch(selectMenuList, () => {
    updateSelectedItemsFromValue();
  });

  onMounted(() => {
    processMenuList();

    // Set initial selected items based on model value
    if (normalizedValue.value.length > 0) {
      updateSelectedItemsFromValue();
    } else if (displayText.value) {
      inputText.value = displayText.value;
    }
  });

  return {
    selectClasses,
    selectPopperState,
    handleMenuToggle,
    selectRef,
    inputText,
    selectMenuList,
    filteredSelectMenuList,
    isSelectPopperDisabled,
    selectedListItems,
    handleSelectedItem,
    handleSearch,
    handleClear,
    isSearching,
    selectModel: compatPreSelectedItems, // Use compatible format for lists
  };
};
