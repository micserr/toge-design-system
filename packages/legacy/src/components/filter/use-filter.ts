import { computed, ref, toRefs, watch } from 'vue';
import { FilterPropTypes, FilterPropsInterface, FilterEmitTypes } from './filter';
import type { SetupContext } from 'vue';
import { useVModel } from '@vueuse/core';
import classNames from 'classnames';
import dayjs from 'dayjs';
import { useInfiniteScroll, onClickOutside } from '@vueuse/core';

export const useFilter = (props: FilterPropTypes, emit: SetupContext<FilterEmitTypes>['emit']) => {
  const {
    options,
    filterMenu,
    filterData,
    loading,
    filterable,
    filling,
    deselected,
    hasSearchApi,
    hasAdvancedFilterApi,
  } = toRefs(props);

  const selectedValue = useVModel(props, 'modelValue', emit);
  const searchText = useVModel(props, 'search', emit);
  const searchFilterValue = useVModel(props, 'searchFilter', emit);

  const isFilterOpen = ref<boolean>(false);
  const searchValue = ref<string>('');
  const filterMenuSearchvalue = ref<string>('');
  const isAddFilterVisible = ref<boolean>(false);
  const isAdvanceFilterVisible = ref<boolean>(false);
  const mappedMenuData = ref<Record<string, FilterPropsInterface['optionDetails']>>({});
  const mappedFilterMenuList = ref<Record<string, FilterPropsInterface['filterDetails']>>({});
  const filterMenuList = ref<FilterPropsInterface['filterDetails'][]>(
    filterMenu.value as FilterPropsInterface['filterDetails'][],
  );
  const selectedFilters = ref<FilterPropsInterface['optionDetails'][]>([]);
  const filterOptionRef = ref<HTMLDivElement | null>(null);
  const filterMenuOptionList = ref<(HTMLDivElement | null)[]>([]);
  const selectedColumn = ref<string>('');

  // Main List
  const getFiltereredOption = computed<FilterPropsInterface['optionDetails'][]>(() => {
    if (filling.value) return options.value;

    const searchQuery = hasSearchApi.value ? '' : searchValue.value.toLowerCase();

    const list = options.value?.filter((option, index) => {
      const existing = selectedValue.value.find((selected) => selected.value === option.value && selected.isSelected);
      if (existing) {
        options.value[index].isSelected = true;
      }
      return option.text.toLowerCase().includes(searchQuery);
    });

    return list;
  });

  //  Filter Menu Option List
  const getFilteredMenuOption = computed<FilterPropsInterface['optionDetails'][]>(() => {
    if (loading.value) return filterData.value;

    const searchQuery = hasAdvancedFilterApi.value ? '' : filterMenuSearchvalue.value.toLowerCase();

    const filter = filterData.value.filter((option, index) => {
      const existing = selectedFilters.value.find(
        (prevSelected) =>
          prevSelected.value === option.value &&
          prevSelected.isSelected &&
          prevSelected.column === selectedColumn.value,
      );

      if (existing) {
        filterData.value[index].isSelected = true;
      }

      return option.text.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return filter;
  });

  const hasVisibleFilter = computed(() => {
    return Object.values(mappedFilterMenuList.value).some((menu) => menu.isFilterVisible);
  });

  const getSelectedFilterMenuOption = computed(() => {
    return selectedFilters.value.filter((item) => item.isSelected && item.column === selectedColumn.value);
  });

  const generateStableId = computed(() => {
    if (props.id) {
      return `filter-popover-${props.id}`;
    }
    return `filter-popover-${dayjs().valueOf().toString().slice(-8)}`;
  });

  const getMappedFilterData = (column: string) => {
    mappedFilterMenuList.value[column].isFilterVisible = true;

    if (selectedColumn.value !== column) {
      filterMenuSearchvalue.value = '';
      selectedColumn.value = column;
      emit('getFilterData', column);
    }
  };

  const setFilterVisible = (field: string) => {
    Object.keys(mappedFilterMenuList.value).forEach((key) => {
      mappedFilterMenuList.value[key].isFilterVisible = key === field;
    });
  };

  const getMappedFilterMenuList = () => {
    if (!filterMenu.value?.length) return;
    mappedFilterMenuList.value = filterMenu.value.reduce(
      (acc, { isFilterVisible, columnName, field }) => {
        acc[field] = { isFilterVisible: isFilterVisible || false, columnName, field, count: 0, selected: {} };
        return acc;
      },
      {} as Record<string, FilterPropsInterface['filterDetails']>,
    );
  };

  const getSelectedItemPerFilterMenu = (column: string) => {
    return selectedFilters.value.filter((item) => item.column === column).length;
  };

  onClickOutside(filterOptionRef, () => {
    isFilterOpen.value = false;
  });

  const selectAllOptions = () => {
    if (options.value?.length) {
      getFiltereredOption.value.forEach((_, key) => {
        getFiltereredOption.value[key].isSelected = true;
      });
    }
  };

  const saveSelectedFilter = (field: string) => {
    const selectedValues = getFilteredMenuOption.value.filter((option) => option.isSelected && option.column === field);

    const newValues = selectedValues.filter(
      (newVal) =>
        !selectedFilters.value.some((existing) => existing.value === newVal.value && existing.column === newVal.column),
    );

    selectedFilters.value = [...selectedFilters.value, ...newValues];

    mappedFilterMenuList.value[field].count = selectedValues.length;
    mappedFilterMenuList.value[field].isFilterVisible = false;
    filterMenuSearchvalue.value = '';
    emit('selectedFilter', selectedFilters.value);
  };

  const handleRemoveFilterValues = (filter: string) => {
    getFilteredMenuOption.value.map((option) => {
      if (option.value === filter) {
        option.isSelected = false;
      }
      return option;
    });

    selectedFilters.value = selectedFilters.value.filter((item) => item.value !== filter);
    mappedFilterMenuList.value[selectedColumn.value].count = selectedFilters.value.length;
    emit('selectedFilter', selectedFilters.value);
  };

  const infiniteScrollHandler = () => {
    if (hasVisibleFilter.value) {
      emit('infiniteScrollFilterTrigger', selectedColumn.value);
      return;
    }
    emit('infiniteScrollTrigger', true);
  };

  watch(selectedColumn, (_value) => {
    setFilterVisible(_value);
  });

  watch(deselected, (_value) => {
    if (!_value) return; // Guard to prevent unnecessary execution
    getFiltereredOption.value.forEach(({ value: id }, key) => {
      if (id === _value) {
        getFiltereredOption.value[key].isSelected = false;
      }
    });

    selectedValue.value = (selectedValue.value as FilterPropsInterface['optionDetails'][]).filter(
      ({ value: id }) => id !== _value,
    );
  });

  watch(
    () => getFiltereredOption.value,
    (newOptions) => {
      const selected = newOptions.filter((item) => item.isSelected);

      const uniqueValues = Array.from(
        new Map(
          [...(selectedValue.value as FilterPropsInterface['optionDetails'][]), ...selected].map((item) => [
            item.value,
            item,
          ]),
        ).values(),
      );

      // Remove items from selectedValue if their isSelected is false in getFiltereredOption
      const selectedOption = uniqueValues.filter((item) => {
        const option = getFiltereredOption.value.find((opt) => opt.value === item.value);
        if (option && !option.isSelected) return false;
        return true;
      });

      if (JSON.stringify(selectedValue.value) === JSON.stringify(selectedOption)) return; // Prevent unnecessary updates

      selectedValue.value = selectedOption;
    },
    { deep: true },
  );

  watch(searchValue, (value, oldValue) => {
    if (value === oldValue) return; // Prevent unnecessary updates
    searchText.value = value;
  });

  watch(filterMenuSearchvalue, (value, oldValue) => {
    if (value === oldValue || !hasAdvancedFilterApi.value) return; // Prevent unnecessary updates
    searchFilterValue.value = value;
  });

  useInfiniteScroll(() => filterMenuOptionList.value[0], infiniteScrollHandler, { distance: 10 });
  useInfiniteScroll(filterOptionRef, infiniteScrollHandler, { distance: 10 });

  const filterClass = computed(() => {
    const MainClasses = classNames('spr-relative spr-inline-block spr-w-full');
    const MenuOptionClasses = classNames(
      'spr-border-color-weak spr-border spr-border-x-0 spr-border-t-0 spr-border-solid spr-p-size-spacing-2xs',
      'spr-flex spr-items-center',
      { 'spr-justify-between': filterMenu.value.length > 0 && filterable.value },
      { 'spr-justify-end': filterMenu.value.length === 0 || !filterable.value },
    );
    const PopperWrapperClasses = classNames(
      'spr-flex spr-flex-col spr-divide-x-0 spr-divide-y spr-divide-solid spr-divide-mushroom-200',
    );
    const PopperHeaderClasses = classNames('spr-flex spr-items-center spr-justify-between spr-p-size-spacing-2xs');
    const PopperContentClasses = classNames(
      'spr-flex spr-w-[328px] spr-flex-wrap spr-gap-size-spacing-2xs spr-p-size-spacing-xs',
    );
    const LoadingStateClasses = classNames(
      'spr-h-[264px] spr-p-size-spacing-sm spr-flex spr-items-center spr-justify-center',
    );
    const ActionButtonClasses = classNames('spr-flex spr-justify-end spr-gap-2 spr-p-size-spacing-2xs');
    const filterListClasses = classNames(
      'spr-body-xs-regular spr-flex spr-cursor-pointer spr-justify-between spr-rounded-border-radius-md spr-p-size-spacing-4xs',
      'hover:spr-background-color-hover',
    );

    getMappedFilterMenuList();

    return {
      MainClasses,
      MenuOptionClasses,
      PopperWrapperClasses,
      PopperHeaderClasses,
      PopperContentClasses,
      LoadingStateClasses,
      ActionButtonClasses,
      filterListClasses,
    };
  });

  return {
    isFilterOpen,
    searchValue,
    isAddFilterVisible,
    isAdvanceFilterVisible,
    filterMenuList,
    getFiltereredOption,
    mappedMenuData,
    getSelectedFilterMenuOption,
    getFilteredMenuOption,
    filterMenuSearchvalue,
    mappedFilterMenuList,
    filterClass,
    generateStableId,
    filterOptionRef,
    filterMenuOptionList,

    selectAllOptions,
    getMappedFilterData,
    saveSelectedFilter,
    getSelectedItemPerFilterMenu,
    handleRemoveFilterValues,
  };
};
