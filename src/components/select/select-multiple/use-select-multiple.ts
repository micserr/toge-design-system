import { ref, toRefs, computed, ComputedRef, onMounted, watch } from 'vue';
import { onClickOutside, useInfiniteScroll, useVModel, useDebounceFn } from '@vueuse/core';

import classNames from 'classnames';

import type { SetupContext } from 'vue';
import type { MultiSelectPropTypes, MultiSelectEmitTypes } from './select-multiple';
import type { MenuListType } from '../../list/list';

interface MultiSelectClasses {
  baseClasses: string;
  labelClasses: string;
}

export const useMultiSelect = (props: MultiSelectPropTypes, emit: SetupContext<MultiSelectEmitTypes>['emit']) => {
  const { displayText, menuList, disabled, textField, valueField, disabledLocalSearch } = toRefs(props);

  const multiSelectClasses: ComputedRef<MultiSelectClasses> = computed(() => {
    const baseClasses = classNames('spr-flex spr-flex-col spr-gap-size-spacing-4xs');

    const labelClasses = classNames('spr-body-sm-regular spr-text-color-strong spr-block', {
      'spr-text-color-on-fill-disabled': disabled.value,
    });

    return {
      baseClasses,
      labelClasses,
    };
  });

  // Popper Variables
  const multiSelectRef = ref<HTMLDivElement | null>(null);
  const multiSelectPopperState = ref<boolean>(false);
  const isMultiSelectPopperDisabled = computed(() => disabled.value);

  // Multi-Select Variables
  const multiSelectModel = useVModel(props, 'modelValue', emit);
  const multiSelectedListItems = ref<MenuListType[]>();
  const multiSelectMenuList = ref<MenuListType[]>([]);
  const hasUserSelected = ref(false);

  // Input Text Variables
  const inputText = ref<string | number>('');
  const inputTextBackup = ref<string | number>('');
  const isSearching = ref<boolean>(false);

  const handleMenuToggle = () => {
    multiSelectPopperState.value = true;

    isSearching.value = false;
  };

  // Normalized value for internal use - always an array
  const normalizedValue = computed(() => {
    // If already an array, use it
    if (Array.isArray(multiSelectModel.value)) {
      return multiSelectModel.value;
    }

    // If not an array but has a value, make it a single-item array
    if (multiSelectModel.value !== undefined && multiSelectModel.value !== null) {
      return [multiSelectModel.value];
    }

    // Default empty array
    return [];
  });

  const processMenuList = () => {
    // Handle empty array or non-array values
    if (!menuList.value || !Array.isArray(menuList.value) || menuList.value.length === 0) {
      multiSelectMenuList.value = [];

      return;
    }

    const firstItem = menuList.value[0];

    // Handle array of strings
    if (typeof firstItem === 'string') {
      multiSelectMenuList.value = (menuList.value as string[]).map((item) => ({
        text: item,
        value: item,
      }));

      return;
    }

    // Handle array of numbers
    if (typeof firstItem === 'number') {
      multiSelectMenuList.value = (menuList.value as number[]).map((item) => ({
        text: item.toString(),
        value: item, // Keep the value as a number instead of converting to string
      }));

      return;
    }

    // Handle array of objects with dynamic attributes
    if (typeof firstItem === 'object' && firstItem !== null) {
      // Check if it's already in MenuListType format
      if ('text' in firstItem && 'value' in firstItem) {
        multiSelectMenuList.value = menuList.value as MenuListType[];
        return;
      }
      // Transform to MenuListType format using textField and valueField
      multiSelectMenuList.value = (menuList.value as Record<string, unknown>[]).map((item) => {
        // Ensure displayText is a string
        const displayText = item[textField.value] !== undefined ? String(item[textField.value]) : 'Unnamed';
        // Use the specified value field if available, otherwise use the entire object
        let itemValue = valueField.value && item[valueField.value] !== undefined ? item[valueField.value] : item;
        // If itemValue is undefined, fallback to empty string
        if (itemValue === undefined) itemValue = '';
        return {
          text: displayText,
          value: typeof itemValue === 'object' ? JSON.stringify(itemValue) : String(itemValue),
          _originalObject: item, // Store the original object for reference
        };
      });
      return;
    }

    multiSelectMenuList.value = menuList.value as MenuListType[];
  };

  const filteredMultiSelectMenuList = computed(() => {
    if (disabledLocalSearch.value) {
      return multiSelectMenuList.value;
    }

    const query = inputText.value.toString().toLowerCase().trim();

    if (!query) return multiSelectMenuList.value;

    return multiSelectMenuList.value.filter((item) => item.text?.toString().toLowerCase().includes(query));
  });

  watch(menuList, () => {
    processMenuList();
  });

  // Search handler: always emit search-string, but only filter locally if local search is enabled
  const handleSearch = () => {
    isSearching.value = true;

    debouncedEmitSearch();
  };

  const debouncedEmitSearch = useDebounceFn(() => {
    emit('search-string', inputText.value);
  }, 300);

  onClickOutside(multiSelectRef, () => {
    multiSelectPopperState.value = false;
    // If user was searching, restore inputText from backup
    if (isSearching.value) {
      inputText.value = inputTextBackup.value;
    }
    isSearching.value = false;
  });

  useInfiniteScroll(
    multiSelectRef,
    () => {
      emit('infinite-scroll-trigger', true);
    },
    { distance: 10 },
  );

  // Handle multi-selected item for simple list component
  const handleMultiSelectedItem = (multiSelectedItems: MenuListType[]) => {
    // Get the last clicked item (assuming spr-list emits the full array in order)
    const lastClicked = multiSelectedItems[multiSelectedItems.length - 1];
    if (!lastClicked) return;

    // Normalize value for comparison
    let lastValue: string | number | Record<string, unknown>;
    if ('_originalObject' in lastClicked) {
      lastValue = lastClicked._originalObject ?? lastClicked.value;
    } else if (typeof lastClicked.value === 'number') {
      lastValue = lastClicked.value;
    } else if (
      typeof lastClicked.value === 'string' &&
      !isNaN(Number(lastClicked.value)) &&
      lastClicked.value.trim() !== '' &&
      /^-?\d+(\.\d+)?$/.test(lastClicked.value)
    ) {
      lastValue = Number(lastClicked.value);
    } else {
      lastValue = lastClicked.value;
    }

    // Always normalize current selection to an array
    let current: (string | number | Record<string, unknown>)[] = [];
    if (Array.isArray(multiSelectModel.value)) {
      current = [...multiSelectModel.value];
    } else if (
      multiSelectModel.value !== undefined &&
      multiSelectModel.value !== null &&
      multiSelectModel.value !== ''
    ) {
      current = [multiSelectModel.value];
    }

    // Find if already selected (deep compare for objects, strict for primitives)
    const isSelected = current.some((sel) => {
      if (typeof sel === 'object' && typeof lastValue === 'object') {
        return JSON.stringify(sel) === JSON.stringify(lastValue);
      }
      return sel === lastValue;
    });

    if (isSelected) {
      // Remove from selection
      current = current.filter((sel) => {
        if (typeof sel === 'object' && typeof lastValue === 'object') {
          return JSON.stringify(sel) !== JSON.stringify(lastValue);
        }
        return sel !== lastValue;
      });
    } else {
      // Add to selection
      current.push(lastValue);
    }

    hasUserSelected.value = true;
    multiSelectModel.value = current;
    multiSelectPopperState.value = true;
    // Clone inputText to backup after selection
    inputTextBackup.value = inputText.value;
  };

  // Update multi-selected items when model value changes externally
  const updateMultiSelectedItemsFromValue = () => {
    if (!multiSelectMenuList.value.length) return;

    const values = normalizedValue.value;

    if (!values || !values.length) {
      multiSelectedListItems.value = [];

      // Always clear inputText and backup if nothing is selected
      inputText.value = '';
      inputTextBackup.value = '';

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

    multiSelectedListItems.value = multiSelectMenuList.value.filter((item) => {
      // Handle objects with _originalObject property
      if ('_originalObject' in item && item._originalObject) {
        return valueData.some((v) => {
          // If both are objects, compare by JSON string or by ID
          if (v.isObject && typeof v.original === 'object') {
            const originalObj = item._originalObject as Record<string, unknown>;

            if (v.original === originalObj) return true;

            const itemJson = JSON.stringify(originalObj);

            if (v.string === itemJson) return true;

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

    // Only update inputText if not searching
    if (!isSearching.value) {
      if (multiSelectedListItems.value.length > 3) {
        inputText.value = `${multiSelectedListItems.value.length} items selected`;
      } else {
        inputText.value = multiSelectedListItems.value.map((item) => item.text).join(', ');
      }

      // Only use displayText.value if user hasn't selected anything yet
      if (displayText.value && !hasUserSelected.value && (!inputText.value || inputText.value === '')) {
        inputText.value = displayText.value;
        inputTextBackup.value = displayText.value;
      } else {
        // Always update backup to match inputText if not searching
        inputTextBackup.value = inputText.value;
      }
    }
  };

  const handleClear = () => {
    emit('update:modelValue', '');

    inputText.value = '';
  };

  watch(multiSelectModel, () => {
    updateMultiSelectedItemsFromValue();
  });

  watch(multiSelectMenuList, () => {
    updateMultiSelectedItemsFromValue();
  });

  onMounted(() => {
    processMenuList();

    // Set initial multi-selected items based on model value
    if (normalizedValue.value.length > 0) {
      updateMultiSelectedItemsFromValue();
    } else if (displayText.value) {
      inputText.value = displayText.value;
      inputTextBackup.value = displayText.value;
    }
  });

  return {
    multiSelectClasses,
    multiSelectPopperState,
    multiSelectRef,
    multiSelectModel,
    multiSelectMenuList,
    filteredMultiSelectMenuList,
    multiSelectedListItems,
    inputText,
    isMultiSelectPopperDisabled,
    isSearching,
    handleMultiSelectedItem,
    handleSearch,
    handleClear,
    handleMenuToggle,
  };
};
