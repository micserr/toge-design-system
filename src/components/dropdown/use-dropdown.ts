import { ref, onMounted, watch, computed } from 'vue';

import classNames from 'classnames';

import type { SetupContext } from 'vue';
import type { DropdownPropTypes, DropdownEmitTypes } from './dropdown';

interface SelectedItem {
  text: string;
  value: string | number;
}

export const useDropdown = (props: DropdownPropTypes, emit: SetupContext<DropdownEmitTypes>['emit']) => {
  const dropdownItemBaseClasses = computed(() => {
    return classNames(
      'spr-flex spr-cursor-pointer spr-items-center spr-justify-between spr-gap-1.5 spr-rounded-lg spr-p-2',
      'spr-transition spr-duration-150 spr-ease-in-out',
      'hover:spr-background-color-hover',
      'active:spr-background-color-single-active active:spr-scale-95',
    );
  });

  const menuOpened = ref(false);

  watch(menuOpened, () => {
    handlePopperState();
  });

  const isSingleSelect = computed(() => props.dropdownType === 'single-select');
  const isMultiSelect = computed(() => props.dropdownType === 'multi-select');

  const selectedItems = ref<SelectedItem[]>([]);

  const handleSelectedItem = (item: SelectedItem) => {
    if (isSingleSelect.value) {
      menuOpened.value = false;

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
    if (props.menu && props.menu.length > 0) {
      props.menu.forEach((item) => {
        checkboxModels.value = Object.assign({}, checkboxModels.value, {
          [item.text]: false,
        });
      });
    }
  };

  const setPreSelectedItems = () => {
    if (props.menu && props.menu.length > 0 && props.preSelectedItems && props.preSelectedItems.length > 0) {
      (props.preSelectedItems as string[]).forEach((preSelectedItem: string) => {
        const item = props.menu?.find((menuItem) => menuItem.text === preSelectedItem);

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
    emit('get-popper-state', menuOpened.value);
  };

  onMounted(() => {
    menuOpened.value = props.menuOpened;

    setCheckboxModels();
    setPreSelectedItems();
    handlePopperState();
  });

  return {
    dropdownItemBaseClasses,
    menuOpened,
    handleSelectedItem,
    isItemSelected,
    checkboxModels,
  };
};
