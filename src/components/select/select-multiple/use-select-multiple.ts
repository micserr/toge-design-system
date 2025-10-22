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
  const { displayText, options, textField, valueField, active, disabled, error } = toRefs(props);

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

  const inputText = ref<string | number>('');
  const inputTextBackup = ref<string | number>('');
  const chippedInputTextRef = ref(null);

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
    multiSelectModel.value = selectedValues;
    inputTextBackup.value =
      multiSelectedItems.length > 3
        ? `${multiSelectedItems.length} items selected`
        : multiSelectedItems.map((item) => item.text).join(', ');

    updateMultiSelectedItemsFromValue();
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
    const values = normalizedValue.value;

    if (!values || !values.length) {
      multiSelectedListItems.value = [];
      inputText.value = '';
      inputTextBackup.value = '';
      return;
    }

    // Always keep multiSelectedListItems in sync with selected values
    multiSelectedListItems.value = multiSelectOptions.value.filter((item) => {
      return values.some((val) => {
        let itemVal = item.value;
        let valToCompare = val;

        if (typeof itemVal === 'string' && itemVal.startsWith('{') && itemVal.endsWith('}')) {
          try {
            itemVal = JSON.parse(itemVal);
          } catch {}
        }
        if (typeof valToCompare === 'string' && valToCompare.startsWith('{') && valToCompare.endsWith('}')) {
          try {
            valToCompare = JSON.parse(valToCompare);
          } catch {}
        }
        if (typeof itemVal === 'object' && typeof valToCompare === 'object') {
          return JSON.stringify(itemVal) === JSON.stringify(valToCompare);
        }
        return itemVal == valToCompare;
      });
    });

    // Determine input text based on whether count-only mode is enabled
    if (props.displaySelectedCountOnly && values.length) {
      inputText.value = `${values.length} item${values.length === 1 ? '' : 's'} selected`;
    } else if (values.length > 3) {
      inputText.value = `${values.length} items selected`;
    } else {
      // Safely get display text for each value
      inputText.value = values
        .map((val) => {
          // Try to find the corresponding option for display text
          const found = multiSelectOptions.value.find((opt) => {
            let optVal = opt.value;
            let v = val;
            if (typeof optVal === 'string' && optVal.startsWith('{') && optVal.endsWith('}')) {
              try {
                optVal = JSON.parse(optVal);
              } catch {}
            }
            if (typeof v === 'string' && v.startsWith('{') && v.endsWith('}')) {
              try {
                v = JSON.parse(v);
              } catch {}
            }
            if (typeof optVal === 'object' && typeof v === 'object') {
              return JSON.stringify(optVal) === JSON.stringify(v);
            }
            return optVal == v;
          });
          return found ? found.text : typeof val === 'string' || typeof val === 'number' ? String(val) : '';
        })
        .join(', ');
    }

    // Always update backup to match inputText after update
    inputTextBackup.value = inputText.value;

    if (displayText.value && !hasUserSelected.value && (!inputText.value || inputText.value === '')) {
      inputText.value = displayText.value;
      inputTextBackup.value = displayText.value;
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

  watch(searchInput, () => {
    search.value = searchInput.value;
  });

  watch(multiSelectPopperState, (newState) => {
    emit('popper-state', newState);
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
      inputTextBackup.value = displayText.value;
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
