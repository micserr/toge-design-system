import { ref, toRefs, computed, ComputedRef, onMounted, watch } from 'vue';
import { onClickOutside, useVModel, useDebounceFn } from '@vueuse/core';

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

  const multiSelectRef = ref<HTMLDivElement | null>(null);
  const multiSelectPopperState = ref<boolean>(false);
  const isMultiSelectPopperDisabled = computed(() => disabled.value);

  const multiSelectModel = useVModel(props, 'modelValue', emit);
  const multiSelectedListItems = ref<MenuListType[]>([]);
  const multiSelectMenuList = ref<MenuListType[]>([]);
  const hasUserSelected = ref(false);

  const inputText = ref<string | number>('');
  const inputTextBackup = ref<string | number>('');
  const isSearching = ref<boolean>(false);

  /**
   * Opens the multi-select dropdown menu and resets the searching state.
   */
  const handleMenuToggle = () => {
    multiSelectPopperState.value = true;
    isSearching.value = false;
  };

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
   * Processes the menuList prop and normalizes it into MenuListType[] for the dropdown.
   */
  const processMenuList = () => {
    if (!menuList.value || !Array.isArray(menuList.value) || menuList.value.length === 0) {
      multiSelectMenuList.value = [];

      return;
    }

    const firstItem = menuList.value[0];

    if (typeof firstItem === 'string') {
      multiSelectMenuList.value = (menuList.value as string[]).map((item) => ({
        text: item,
        value: item,
      }));

      return;
    }

    if (typeof firstItem === 'number') {
      multiSelectMenuList.value = (menuList.value as Array<number | string | Record<string, unknown>>)
        .filter((item): item is number => typeof item === 'number')
        .map((item) => ({
          text: item.toString(),
          value: item,
        }));

      return;
    }

    if (typeof firstItem === 'object' && firstItem !== null) {
      if ('text' in firstItem && 'value' in firstItem) {
        multiSelectMenuList.value = menuList.value as MenuListType[];

        return;
      }

      multiSelectMenuList.value = (menuList.value as Record<string, unknown>[]).map((item) => {
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

    multiSelectMenuList.value = menuList.value as MenuListType[];
  };

  /**
   * Returns the filtered menu list based on the search input, or the full list if local search is disabled.
   */
  const filteredMultiSelectMenuList = computed(() => {
    if (disabledLocalSearch.value) {
      return multiSelectMenuList.value;
    }

    const query = inputText.value.toString().toLowerCase().trim();

    if (!query) return multiSelectMenuList.value;

    return multiSelectMenuList.value.filter((item) => item.text?.toString().toLowerCase().includes(query));
  });

  /**
   * Handles the search input and emits the search-string event (debounced).
   */
  const handleSearch = () => {
    isSearching.value = true;

    debouncedEmitSearch();
  };

  /**
   * Debounced function to emit the search-string event for remote search.
   */
  const debouncedEmitSearch = useDebounceFn(() => {
    emit('search-string', inputText.value);
  }, 300);

  /**
   * Handles closing the dropdown when clicking outside, restoring input text if searching.
   */
  onClickOutside(multiSelectRef, () => {
    multiSelectPopperState.value = false;
    if (isSearching.value) {
      inputText.value = inputTextBackup.value;
    }
    isSearching.value = false;
  });

  /**
   * Handles selection changes from the dropdown and updates the model value.
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
    multiSelectPopperState.value = true;
    inputTextBackup.value = inputText.value;
  };

  /**
   * Updates the selected items in the dropdown based on the current model value.
   * Handles stringified objects and updates the input text accordingly.
   */
  const updateMultiSelectedItemsFromValue = () => {
    if (!multiSelectMenuList.value.length) return;

    const values = normalizedValue.value;

    if (!values || !values.length) {
      multiSelectedListItems.value = [];
      inputText.value = '';
      inputTextBackup.value = '';

      return;
    }

    multiSelectedListItems.value = multiSelectMenuList.value.filter((item) => {
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

    if (!isSearching.value) {
      if (multiSelectedListItems.value.length > 3) {
        inputText.value = `${multiSelectedListItems.value.length} items selected`;
      } else {
        inputText.value = multiSelectedListItems.value.map((item) => item.text).join(', ');
      }

      if (displayText.value && !hasUserSelected.value && (!inputText.value || inputText.value === '')) {
        inputText.value = displayText.value;
        inputTextBackup.value = displayText.value;
      } else if (hasUserSelected.value) {
        inputTextBackup.value = inputText.value;
      }
    }
  };

  /**
   * Clears the selection and input text, and closes the dropdown.
   */
  const handleClear = () => {
    emit('update:modelValue', []);

    inputText.value = '';

    multiSelectPopperState.value = false;
  };

  watch(multiSelectModel, () => {
    updateMultiSelectedItemsFromValue();
  });

  watch(multiSelectMenuList, () => {
    updateMultiSelectedItemsFromValue();
  });

  onMounted(() => {
    processMenuList();

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
