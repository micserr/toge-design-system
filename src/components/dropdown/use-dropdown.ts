import { ref, toRefs, onMounted, watch, computed, ComputedRef } from 'vue';

import classNames from 'classnames';

import type { SetupContext } from 'vue';
import type { DropdownPropTypes, DropdownEmitTypes } from './dropdown';

interface SelectedItem {
  text: string;
  value: string | number;
}

export const useDropdown = (props: DropdownPropTypes, emit: SetupContext<DropdownEmitTypes>['emit']) => {
  const { menu, preSelectedItems, dropdownType, menuOpened } = toRefs(props);

  const dropdownItemBaseClasses: ComputedRef<string> = computed(() => {
    return classNames(
      'spr-flex spr-cursor-pointer spr-items-center spr-justify-between spr-gap-1.5 spr-rounded-lg spr-p-2',
      'spr-transition spr-duration-150 spr-ease-in-out',
      'hover:spr-background-color-hover',
      'active:spr-background-color-single-active active:spr-scale-95',
    );
  });

  const menuOpenedState = ref<boolean>(false);

  watch(menuOpenedState, () => {
    handlePopperState();
  });

  const isSingleSelect = computed(() => dropdownType.value === 'single-select');
  const isMultiSelect = computed(() => dropdownType.value === 'multi-select');

  const selectedItems = ref<SelectedItem[]>([]);

  const handleSelectedItem = (item: SelectedItem) => {
    if (isSingleSelect.value) {
      menuOpenedState.value = false;

      selectedItems.value = [item];

      emit('get-selected-item', selectedItems.value[0]);
    }

    if (isMultiSelect.value) {
      const index = selectedItems.value.findIndex((selectedItem: SelectedItem) => selectedItem.value === item.value);

      if (index === -1) {
        checkboxModels.value[item.text] = true;
        selectedItems.value.push(item);
      } else {
        checkboxModels.value[item.text] = false;
        selectedItems.value.splice(index, 1);
      }

      emit('get-selected-item', selectedItems.value);
    }
  };

  const isItemSelected = (item: SelectedItem) => {
    if (Array.isArray(selectedItems.value)) {
      return selectedItems.value.some((selectedItem) => selectedItem.text === item.text);
    }

    return (selectedItems.value[0] as SelectedItem).text === item.text;
  };

  const checkboxModels = ref<Record<string, boolean>>({});

  const setCheckboxModels = () => {
    if (menu.value && menu.value.length > 0) {
      menu.value.forEach((item) => {
        checkboxModels.value = Object.assign({}, checkboxModels.value, {
          [item.text]: false,
        });
      });
    }
  };

  const setPreSelectedItems = () => {
    if (menu.value && menu.value.length > 0 && preSelectedItems.value && preSelectedItems.value.length > 0) {
      (preSelectedItems.value as string[]).forEach((preSelectedItem: string) => {
        const item = menu.value.find((menuItem) => menuItem.text === preSelectedItem);

        if (item) {
          if (isMultiSelect.value) {
            checkboxModels.value[item.text] = true;
          }

          selectedItems.value.push(item);
        }
      });

      if (isSingleSelect.value) {
        if (selectedItems.value.length > 0) {
          emit('get-selected-item', selectedItems.value[0]);
        }
      }

      if (isMultiSelect.value) {
        emit('get-selected-item', selectedItems.value);
      }
    }
  };

  const handlePopperState = () => {
    emit('get-popper-state', menuOpenedState.value);
  };

  onMounted(() => {
    menuOpenedState.value = menuOpened.value;

    setCheckboxModels();
    setPreSelectedItems();
    handlePopperState();
  });

  return {
    dropdownItemBaseClasses,
    menuOpenedState,
    handleSelectedItem,
    isItemSelected,
    checkboxModels,
  };
};
