import { ref, toRefs, computed, ComputedRef, onMounted, watch } from 'vue';
import { onClickOutside, useVModel, useFocus, useInfiniteScroll } from '@vueuse/core';

import classNames from 'classnames';

import type { SetupContext } from 'vue';
import type { MultiSelectPropTypes, MultiSelectEmitTypes } from './select-multiple';
import type { MenuListType } from '../../list/list';

interface MultiSelectClasses {
  baseClasses: string;
  labelClasses: string;
  supportingLabelClasses: string;
  chippedInputTextBaseClasses: string;
  chippedInputTextClasses: string;
  chippedIconClasses: string;
  chippedHelperContainerClasses: string;
  chippedHelperClasses: string;
}

export const useMultiSelect = (props: MultiSelectPropTypes, emit: SetupContext<MultiSelectEmitTypes>['emit']) => {
  const { displayText, persistentDisplayText, options, textField, valueField, active, disabled, error } = toRefs(props);

  const multiSelectClasses: ComputedRef<MultiSelectClasses> = computed(() => {
    const baseClasses = classNames('spr-flex spr-flex-col spr-gap-size-spacing-4xs');

    const labelClasses = classNames('spr-body-sm-regular spr-text-color-strong spr-flex spr-gap-2', {
      'spr-text-color-on-fill-disabled': disabled.value,
    });

    const supportingLabelClasses = classNames('spr-body-sm-regular spr-text-color-supporting', {
      'spr-text-color-on-fill-disabled': disabled.value,
    });

    const chippedInputTextBaseClasses = classNames(
      'spr-relative spr-flex spr-items-center spr-min-h-10 spr-rounded-border-radius-md spr-border-[1.5px] spr-border-solid',
      {
        'spr-cursor-pointer': !disabled.value,

        // Border State
        'spr-border-color-weak': !focused.value && !error.value && !disabled.value && !active.value,
        'spr-border-color-brand-base': !focused.value && active.value,
        'spr-border-color-danger-base': !focused.value && error.value,

        // Border State Focused
        'focus: spr-border-kangkong-700': focused.value && !error.value && !disabled.value && !active.value,
        'focus: spr-border-tomato-600': focused.value && error.value,
        'focus: spr-border-white-100': focused.value && disabled.value,

        // Disabled State
        'spr-background-color-disabled spr-cursor-not-allowed spr-border-mushroom-100': disabled.value,
      },
    );

    const chippedInputTextClasses = classNames(
      'spr-flex spr-gap-1 spr-justify-between spr-w-full spr-outline-none spr-ring-0 spr-border-none spr-rounded-border-radius-md spr-font-size-200',
      'spr-font-size-200 [font-weight:inherit]',
      'placeholder:spr-text-mushroom-300',
      {
        'spr-text-color-strong': !disabled.value,

        // Disabled State
        'spr-text-color-on-fill-disabled !spr-cursor-not-allowed': disabled.value,
      },
    );

    const chippedIconClasses = classNames(
      'spr-flex spr-items-center spr-justify-center spr-h-inherit spr-px-2 [&>svg]:spr-min-h-4 [&>svg]:spr-min-w-4',
      {
        'spr-text-mushroom-300': !error.value,
        'spr-text-tomato-600': error.value,
      },
    );

    const chippedHelperContainerClasses = classNames(
      'spr-flex spr-flex-row spr-items-start spr-justify-between spr-w-full',
    );

    const chippedHelperClasses = classNames(
      'spr-body-sm-regular spr-flex spr-items-center spr-gap-size-spacing-5xs spr-flex-1',
      {
        'spr-text-color-danger-base': error.value,
        'spr-text-color-supporting': !error.value,
      },
    );

    return {
      baseClasses,
      labelClasses,
      supportingLabelClasses,
      chippedInputTextBaseClasses,
      chippedInputTextClasses,
      chippedIconClasses,
      chippedHelperContainerClasses,
      chippedHelperClasses,
    };
  });

  const multiSelectRef = ref<HTMLDivElement | null>(null);
  const multiSelectPopperState = ref<boolean>(false);
  const isMultiSelectPopperDisabled = computed(() => disabled.value);

  const multiSelectModel = useVModel(props, 'modelValue', emit);
  const multiSelectedListItems = ref<MenuListType[]>([]);
  const multiSelectOptions = ref<MenuListType[]>([]);
  const hasUserSelected = ref(false);
  const isHandlingSelection = ref<boolean>(false);
  const selectedItemsCache = ref<Map<string, MenuListType>>(new Map());

  const inputText = ref<string | number>('');
  const chippedInputTextRef = ref(null);
  const isSearching = ref<boolean>(false);

  const search = useVModel(props, 'searchValue', emit);
  const searchInput = ref<string>('');
  const multipleSelectPopperRef = ref<HTMLDivElement | null>(null);

  const { focused } = useFocus(chippedInputTextRef);
  /**
   * Returns the normalized value of the model as an array for internal use.
   */
  const normalizedValue = computed(() => {
    if (Array.isArray(multiSelectModel.value)) {
      return multiSelectModel.value;
    }

    if (multiSelectModel.value !== undefined && multiSelectModel.value !== null) {
      return [multiSelectModel.value];
    }

    return [];
  });

  /**
   * Processes the options prop and normalizes it into MenuListType[] for the multi-select.
   */
  const processOptions = () => {
    if (!options.value || !Array.isArray(options.value) || options.value.length === 0) {
      multiSelectOptions.value = [];

      return;
    }

    const firstItem = options.value[0];

    if (typeof firstItem === 'string') {
      multiSelectOptions.value = (options.value as string[]).map((item) => ({
        text: item,
        value: item,
      }));

      return;
    }

    if (typeof firstItem === 'number') {
      multiSelectOptions.value = (options.value as Array<number | string | Record<string, unknown>>)
        .filter((item): item is number => typeof item === 'number')
        .map((item) => ({
          text: item.toString(),
          value: item,
        }));

      return;
    }

    if (typeof firstItem === 'object' && firstItem !== null) {
      if ('text' in firstItem && 'value' in firstItem) {
        multiSelectOptions.value = options.value as MenuListType[];

        return;
      }

      multiSelectOptions.value = (options.value as Record<string, unknown>[]).map((item) => {
        const displayText = item[textField.value] !== undefined ? String(item[textField.value]) : 'Unnamed';

        let itemValue = valueField.value && item[valueField.value] !== undefined ? item[valueField.value] : item;

        if (itemValue === undefined) itemValue = '';

        return {
          text: displayText,
          value: typeof itemValue === 'object' ? JSON.stringify(itemValue) : String(itemValue),
          _originalObject: item,
        };
      });

      return;
    }

    multiSelectOptions.value = options.value as MenuListType[];
  };

  /**
   * Handles selection changes from the multi-select and updates the model value.
   * Converts stringified objects back to objects if needed.
   */
  const handleMultiSelectedItem = (multiSelectedItems: MenuListType[]) => {
    isHandlingSelection.value = true;

    const selectedValues = multiSelectedItems.map((item) => {
      if (typeof item.value === 'string' && item.value.startsWith('{') && item.value.endsWith('}')) {
        try {
          return JSON.parse(item.value);
        } catch {
          return item.value;
        }
      }
      return item.value;
    });

    hasUserSelected.value = true;

    // Clear searching flag to allow inputText update
    isSearching.value = false;

    // Update cache with all selected items
    selectedItemsCache.value.clear();
    multiSelectedItems.forEach((item) => {
      const key = typeof item.value === 'object' ? JSON.stringify(item.value) : String(item.value);
      selectedItemsCache.value.set(key, item);
    });

    multiSelectModel.value = selectedValues;

    // Directly update the selected items list without filtering from potentially filtered options
    multiSelectedListItems.value = multiSelectedItems;

    // Update inputText directly based on the selected items
    if (!persistentDisplayText.value) {
      if (props.displaySelectedCountOnly && multiSelectedItems.length) {
        inputText.value = `${multiSelectedItems.length} item${multiSelectedItems.length === 1 ? '' : 's'} selected`;
      } else if (multiSelectedItems.length > 3) {
        inputText.value = `${multiSelectedItems.length} items selected`;
      } else if (multiSelectedItems.length > 0) {
        const displayTexts = multiSelectedItems.map((item) => item.text).filter((text) => text !== '');
        inputText.value = displayTexts.length > 0 ? displayTexts.join(', ') : '';
      } else {
        inputText.value = displayText.value || '';
      }
    }

    isHandlingSelection.value = false;
    emit('get-selected-options', multiSelectedItems);
  };

  /**
   * Removes an item from the multi-select model by its value.
   * Handles stringified objects and emits the updated model value.
   */
  const handleChippedRemoveItem = (itemValue: string) => {
    let currentValues = Array.isArray(multiSelectModel.value) ? [...multiSelectModel.value] : [multiSelectModel.value];

    currentValues = currentValues.filter((val) => {
      let valToCompare = val;

      if (typeof valToCompare === 'string' && valToCompare.startsWith('{') && valToCompare.endsWith('}')) {
        try {
          valToCompare = JSON.parse(valToCompare);
        } catch {
          // ignore
        }
      }

      if (typeof itemValue === 'string' && itemValue.startsWith('{') && itemValue.endsWith('}')) {
        try {
          itemValue = JSON.parse(itemValue);
        } catch {
          // ignore
        }
      }

      if (typeof valToCompare === 'object' && typeof itemValue === 'object') {
        return JSON.stringify(valToCompare) !== JSON.stringify(itemValue);
      }

      return valToCompare != itemValue;
    });

    emit('update:modelValue', currentValues);
  };

  /**
   * Updates the selected items in the multi-select based on the current model value.
   * Handles stringified objects and updates the input text accordingly.
   */
  const updateMultiSelectedItemsFromValue = () => {
    // Don't interfere if we're in the middle of handling a selection
    if (isHandlingSelection.value) {
      return;
    }

    const values = normalizedValue.value;

    if (!values || !values.length) {
      multiSelectedListItems.value = [];
      selectedItemsCache.value.clear();

      // Always show displayText if provided and no selected items
      if (displayText.value) {
        inputText.value = displayText.value;
      } else if (!persistentDisplayText.value) {
        inputText.value = '';
      }

      return;
    }

    // First try to build from cache, then fall back to filtering options
    const seenValues = new Set<string>();
    const itemsFromCache: MenuListType[] = [];
    const valuesNotInCache: (string | number | Record<string, unknown>)[] = [];

    values.forEach((val) => {
      const key = typeof val === 'object' ? JSON.stringify(val) : String(val);
      if (selectedItemsCache.value.has(key)) {
        if (!seenValues.has(key)) {
          itemsFromCache.push(selectedItemsCache.value.get(key)!);
          seenValues.add(key);
        }
      } else {
        valuesNotInCache.push(val);
      }
    });

    // For values not in cache, search in multiSelectOptions
    const itemsFromOptions = multiSelectOptions.value.filter((item) => {
      const isMatch = valuesNotInCache.some((val) => {
        let itemVal = item.value;
        let valToCompare = val;

        if (typeof itemVal === 'string' && itemVal.startsWith('{') && itemVal.endsWith('}')) {
          try {
            itemVal = JSON.parse(itemVal);
          } catch {
            // ignore error
          }
        }
        if (typeof valToCompare === 'string' && valToCompare.startsWith('{') && valToCompare.endsWith('}')) {
          try {
            valToCompare = JSON.parse(valToCompare);
          } catch {
            // ignore error
          }
        }
        if (typeof itemVal === 'object' && typeof valToCompare === 'object') {
          return JSON.stringify(itemVal) === JSON.stringify(valToCompare);
        }
        return itemVal == valToCompare;
      });

      if (isMatch) {
        const itemKey = typeof item.value === 'object' ? JSON.stringify(item.value) : String(item.value);
        if (seenValues.has(itemKey)) {
          return false; // Skip duplicates
        }
        seenValues.add(itemKey);
      }

      return isMatch;
    });

    // Combine items from cache and options, update cache for new items
    multiSelectedListItems.value = [...itemsFromCache, ...itemsFromOptions];

    // Update cache with newly found items
    itemsFromOptions.forEach((item) => {
      const key = typeof item.value === 'object' ? JSON.stringify(item.value) : String(item.value);
      selectedItemsCache.value.set(key, item);
    });

    // Determine input text based on whether count-only mode is enabled
    if (!persistentDisplayText.value) {
      if (props.displaySelectedCountOnly && values.length) {
        inputText.value = `${values.length} item${values.length === 1 ? '' : 's'} selected`;
      } else if (values.length > 3) {
        inputText.value = `${values.length} items selected`;
      } else {
        // Safely get display text for each value
        const displayTexts = values
          .map((val) => {
            // Try to find the corresponding option for display text
            const found = multiSelectOptions.value.find((opt) => {
              let optVal = opt.value;
              let v = val;
              if (typeof optVal === 'string' && optVal.startsWith('{') && optVal.endsWith('}')) {
                try {
                  optVal = JSON.parse(optVal);
                } catch {
                  // ignore error
                }
              }
              if (typeof v === 'string' && v.startsWith('{') && v.endsWith('}')) {
                try {
                  v = JSON.parse(v);
                } catch {
                  // ignore error
                }
              }
              if (typeof optVal === 'object' && typeof v === 'object') {
                return JSON.stringify(optVal) === JSON.stringify(v);
              }
              return optVal == v;
            });
            // Only return text if found, otherwise return empty string
            return found ? found.text : '';
          })
          .filter((text) => text !== ''); // Filter out empty strings from not found items

        inputText.value = displayTexts.length > 0 ? displayTexts.join(', ') : '';
      }
    }

    if (
      persistentDisplayText.value ||
      (displayText.value && !hasUserSelected.value && (!inputText.value || inputText.value === ''))
    ) {
      inputText.value = displayText.value;
    }
  };

  /**
   * Clears the selection and input text, and closes the multi-select.
   */
  const handleClear = () => {
    if (disabled.value) return;

    multiSelectedListItems.value = [];
    inputText.value = '';
    multiSelectPopperState.value = false;

    emit('update:modelValue', []);
  };

  watch(multiSelectModel, () => {
    updateMultiSelectedItemsFromValue();
  });

  watch(
    multiSelectOptions,
    () => {
      updateMultiSelectedItemsFromValue();
    },
    { deep: true },
  );

  // Add watcher for options prop to re-process options when changed
  watch(
    options,
    () => {
      processOptions();
      updateMultiSelectedItemsFromValue();
    },
    { deep: true },
  );

  watch(searchInput, (newVal, oldVal) => {
    search.value = newVal;

    // Track if user is actively searching
    isSearching.value = newVal.length > 0;

    // Only emit search-string if value actually changed (not just modifier keys)
    // Modifier key presses alone won't change the input value
    if (newVal !== oldVal) {
      emit('search-string', newVal);
    }
  });

  watch(multiSelectPopperState, (newState) => {
    emit('popper-state', newState);
  });

  // Watcher for displayText to update inputText when displayText changes and there are no selected items
  watch(displayText, (newVal) => {
    // Only update inputText if there are no selected items
    if (!multiSelectedListItems.value.length) {
      inputText.value = newVal;
    }
  });

  /**
   * Handles closing the multi-select when clicking outside.
   */
  onClickOutside(
    multiSelectRef,
    (event) => {
      // If click happened inside the floating popper content, don't treat as outside
      if (multipleSelectPopperRef.value && multipleSelectPopperRef.value.contains(event.target as Node)) {
        return;
      }

      multiSelectPopperState.value = false;

      // Clear search state when closing
      isSearching.value = false;
      searchInput.value = '';

      updateMultiSelectedItemsFromValue();
    },
    {
      ignore: [multipleSelectPopperRef],
    },
  );

  useInfiniteScroll(
    multipleSelectPopperRef,
    () => {
      emit('infinite-scroll-trigger', true);
    },
    { distance: 10 },
  );

  onMounted(() => {
    processOptions();

    if (normalizedValue.value.length > 0) {
      updateMultiSelectedItemsFromValue();
    } else if (displayText.value) {
      inputText.value = displayText.value;
    }
  });

  return {
    multiSelectClasses,
    multiSelectPopperState,
    multiSelectRef,
    multiSelectModel,
    multiSelectOptions,
    multiSelectedListItems,
    inputText,
    isMultiSelectPopperDisabled,
    searchInput,
    multipleSelectPopperRef,
    handleMultiSelectedItem,
    handleChippedRemoveItem,
    handleClear,
    normalizedValue,
  };
};
