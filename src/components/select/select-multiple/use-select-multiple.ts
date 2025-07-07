import { ref, toRefs, computed, ComputedRef, onMounted, watch } from 'vue';
import { onClickOutside, useVModel } from '@vueuse/core';

import classNames from 'classnames';

import type { SetupContext } from 'vue';
import type { MultiSelectPropTypes, MultiSelectEmitTypes } from './select-multiple';
import type { MenuListType } from '../../list/list';

interface MultiSelectClasses {
  baseClasses: string;
  labelClasses: string;
}

export const useMultiSelect = (props: MultiSelectPropTypes, emit: SetupContext<MultiSelectEmitTypes>['emit']) => {
  const { displayText, options, disabled, textField, valueField } = toRefs(props);

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

  const multiSelectRef = ref<HTMLDivElement | null>(null);
  const multiSelectPopperState = ref<boolean>(false);
  const isMultiSelectPopperDisabled = computed(() => disabled.value);

  const multiSelectModel = useVModel(props, 'modelValue', emit);
  const multiSelectedListItems = ref<MenuListType[]>([]);
  const multiSelectOptions = ref<MenuListType[]>([]);
  const hasUserSelected = ref(false);

  const inputText = ref<string | number>('');
  const inputTextBackup = ref<string | number>('');

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
   * Opens the multi-select options.
   */
  const handleOptionsToggle = () => {
    multiSelectPopperState.value = !multiSelectPopperState.value;
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
   * Updates the selected items in the multi-select based on the current model value.
   * Handles stringified objects and updates the input text accordingly.
   */
  const updateMultiSelectedItemsFromValue = () => {
    if (!multiSelectOptions.value.length) return;

    const values = normalizedValue.value;

    if (!values || !values.length) {
      multiSelectedListItems.value = [];
      inputText.value = '';
      inputTextBackup.value = '';

      return;
    }

    multiSelectedListItems.value = multiSelectOptions.value.filter((item) => {
      return values.some((val) => {
        let itemVal = item.value;
        let valToCompare = val;

        if (typeof itemVal === 'string' && itemVal.startsWith('{') && itemVal.endsWith('}')) {
          try {
            itemVal = JSON.parse(itemVal);
          } catch {
            // ignore
          }
        }

        if (typeof valToCompare === 'string' && valToCompare.startsWith('{') && valToCompare.endsWith('}')) {
          try {
            valToCompare = JSON.parse(valToCompare);
          } catch {
            // ignore
          }
        }

        if (typeof itemVal === 'object' && typeof valToCompare === 'object') {
          return JSON.stringify(itemVal) === JSON.stringify(valToCompare);
        }

        return itemVal == valToCompare;
      });
    });

    if (multiSelectedListItems.value.length > 3) {
      inputText.value = `${multiSelectedListItems.value.length} items selected`;
    } else {
      inputText.value = multiSelectedListItems.value.map((item) => item.text).join(', ');
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
    emit('update:modelValue', []);

    inputText.value = '';
    multiSelectPopperState.value = false;
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

  /**
   * Handles closing the multi-select when clicking outside.
   */
  onClickOutside(multiSelectRef, () => {
    multiSelectPopperState.value = false;

    updateMultiSelectedItemsFromValue();
  });

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
    handleMultiSelectedItem,
    handleClear,
    handleOptionsToggle,
  };
};
