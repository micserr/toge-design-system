import { ref, toRefs, computed, ComputedRef, onMounted, watch } from 'vue';
import { onClickOutside, useInfiniteScroll, useVModel, useDebounceFn } from '@vueuse/core';

import classNames from 'classnames';

import type { SetupContext } from 'vue';
import type { SelectPropTypes, SelectEmitTypes } from './select';
import type { MenuListType } from '../list/list';

interface SelectClasses {
  baseClasses: string;
  labelClasses: string;
  supportingLabelClasses: string;
}

export const useSelect = (props: SelectPropTypes, emit: SetupContext<SelectEmitTypes>['emit']) => {
  const { displayText, options, disabled, textField, valueField, disabledLocalSearch } = toRefs(props);

  const selectClasses: ComputedRef<SelectClasses> = computed(() => {
    const baseClasses = classNames('spr-flex spr-flex-col spr-gap-size-spacing-4xs');

    const labelClasses = classNames('spr-body-sm-regular spr-text-color-strong spr-flex spr-gap-2', {
      'spr-text-color-on-fill-disabled': disabled.value,
    });

    const supportingLabelClasses = classNames('spr-body-sm-regular spr-text-color-supporting', {
      'spr-text-color-on-fill-disabled': disabled.value,
    });

    return {
      baseClasses,
      labelClasses,
      supportingLabelClasses,
    };
  });

  // Popper Variables
  const selectRef = ref<HTMLDivElement | null>(null);
  const selectPopperState = ref<boolean>(false);
  const isSelectPopperDisabled = computed(() => disabled.value);

  // Select Variables
  const selectPopperRef = ref<HTMLDivElement | null>(null);
  const selectModel = useVModel(props, 'modelValue', emit);
  const selectedListItems = ref<MenuListType[]>();
  const selectOptions = ref<MenuListType[]>([]);
  const hasUserSelected = ref(false);

  // Input Text Variables
  const inputText = ref<string | number>('');
  const inputTextBackup = ref<string | number>('');
  const isSearching = ref<boolean>(false);

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

  const processOptions = () => {
    // Handle empty array or non-array values
    if (!options.value || !Array.isArray(options.value) || options.value.length === 0) {
      selectOptions.value = [];

      return;
    }

    const firstItem = options.value[0];

    // Handle array of strings
    if (typeof firstItem === 'string') {
      selectOptions.value = (options.value as string[]).map((item) => ({
        text: item,
        value: item,
      }));

      return;
    }

    // Handle array of numbers
    if (typeof firstItem === 'number') {
      selectOptions.value = (options.value as number[]).map((item) => ({
        text: item.toString(),
        value: item, // Keep the value as a number instead of converting to string
      }));

      return;
    }

    // Handle array of objects with dynamic attributes
    if (typeof firstItem === 'object' && firstItem !== null) {
      // Check if it's already in MenuListType format
      if ('text' in firstItem && 'value' in firstItem) {
        selectOptions.value = options.value as MenuListType[];

        return;
      }

      // Transform to MenuListType format using textField and valueField
      selectOptions.value = (options.value as Record<string, unknown>[]).map((item) => {
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

    selectOptions.value = options.value as MenuListType[];
  };

  const filteredSelectOptions = computed(() => {
    if (disabledLocalSearch.value) {
      return selectOptions.value;
    }

    const query = inputText.value.toString().toLowerCase().trim();

    if (!query) return selectOptions.value;

    return selectOptions.value.filter((item) => item.text?.toString().toLowerCase().includes(query));
  });

  // Search handler: only emit search-string on regular keys and ENTER, ignore modifier-only keys
  const handleSearch = (event: KeyboardEvent) => {
    // Ignore pure modifier keys: Shift, Control, Alt, Meta (Command/Windows), CapsLock
    const modifierOnlyKeys = ['Shift', 'Control', 'Alt', 'Meta', 'CapsLock'];

    if (!modifierOnlyKeys.includes(event.key)) {
      isSearching.value = true;
      debouncedEmitSearch();
    }
  };

  const debouncedEmitSearch = useDebounceFn(() => {
    emit('search-string', inputText.value);
  }, 300);

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

      emit('get-selected-option', item._originalObject);
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

    // Clone inputText to backup after selection
    inputTextBackup.value = inputText.value;

    emit('get-selected-option', item);

    // Always close select for single selection
    setTimeout(() => {
      selectPopperState.value = false;
    }, 10);
  };

  // Update selected items when model value changes externally
  const updateSelectedItemsFromValue = () => {
    if (!selectOptions.value.length) return;

    const values = normalizedValue.value;

    if (!values || !values.length) {
      selectedListItems.value = [];

      // Only set displayText if user hasn't typed anything
      if (
        displayText.value &&
        !hasUserSelected.value &&
        !isSearching.value &&
        (!inputText.value || inputText.value === '')
      ) {
        inputText.value = displayText.value;

        // Clone displayText to backup if present
        inputTextBackup.value = displayText.value;
      } else if (!hasUserSelected.value && (!inputText.value || inputText.value === '')) {
        inputText.value = '';
        inputTextBackup.value = '';
      }

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

    selectedListItems.value = selectOptions.value.filter((item) => {
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
      inputText.value = selectedListItems.value.map((item) => item.text).join(', ');

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
    if (disabled.value) return;

    inputText.value = '';

    emit('update:modelValue', '');
    emit('search-string', '');
  };

  watch(selectModel, () => {
    updateSelectedItemsFromValue();
  });

  watch(selectOptions, () => {
    updateSelectedItemsFromValue();
  });

  watch(
    options,
    () => {
      processOptions();
    },
    { deep: true },
  );

  watch(selectPopperState, (newState) => {
    emit('popper-state', newState);
  });

  onClickOutside(selectRef, () => {
    selectPopperState.value = false;

    // If user was searching, restore inputText from backup
    if (isSearching.value) {
      inputText.value = inputTextBackup.value;
    }

    isSearching.value = false;
  });

  useInfiniteScroll(
    selectPopperRef,
    () => {
      emit('infinite-scroll-trigger', true);
    },
    { distance: 10 },
  );

  onMounted(() => {
    processOptions();

    // Set initial selected items based on model value
    if (normalizedValue.value.length > 0) {
      updateSelectedItemsFromValue();
    } else if (displayText.value) {
      inputText.value = displayText.value;
      inputTextBackup.value = displayText.value;
    }
  });

  return {
    selectClasses,
    selectPopperState,
    selectRef,
    selectPopperRef,
    selectModel: compatPreSelectedItems, // Use compatible format for lists
    selectOptions,
    filteredSelectOptions,
    selectedListItems,
    inputText,
    isSelectPopperDisabled,
    isSearching,
    handleSelectedItem,
    handleSearch,
    handleClear,
  };
};
