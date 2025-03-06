import { computed, onBeforeMount, ref, toRefs, watch } from 'vue';
import { FilterPropTypes, FilterPropsInterface, FilterEmitTypes } from './filter';
import type { SetupContext } from 'vue';
import { useVModel } from '@vueuse/core';
import classNames from 'classnames';

export const useFilter = (props: FilterPropTypes, emit: SetupContext<FilterEmitTypes>['emit']) => {
  const { options, filterMenu, filterData, loading, disabled, filterable } = toRefs(props);
  const selectedValue = useVModel(props, 'modelValue', emit);
  const isFilterOpen = ref<boolean>(false);
  const searchText = useVModel(props, 'search', emit);
  const searchValue = ref<string>('');
  const filterMenuSearchvalue = ref<string>('');
  const isAddFilterVisible = ref(false);
  const isAdvanceFilterVisible = ref(false);
  const mappedFilterOption = ref<{ [key: string]: FilterPropsInterface['optionDetails'] }>({});
  const mappedMenuData = ref<{ [key: string]: FilterPropsInterface['optionDetails'] }>({});
  const mappedFilterMenuList = ref<{ [key: string]: FilterPropsInterface['filterDetails'] }>({});
  const filterMenuList = ref<FilterPropsInterface['filterDetails'][]>(
    filterMenu.value as FilterPropsInterface['filterDetails'][],
  );
  const selectedFilters = ref<FilterPropsInterface['optionDetails'][]>([]);

  const getFiltereredOption = computed(() => {
    getMappedValues();

    return options.value?.filter((option) => option.text.toLowerCase().includes(searchValue.value.toLowerCase())) || [];
  });

  const getFiltereredMenuOption = computed(() => {
    return (
      filterData.value?.filter((option) =>
        option.text.toLowerCase().includes(filterMenuSearchvalue.value.toLowerCase()),
      ) || []
    );
  });

  const toggleDropdown = (event: FocusEvent) => {
    if (disabled.value) {
      event.preventDefault();
      return;
    }
    isFilterOpen.value = !isFilterOpen.value;
  };

  //map main option
  const getMappedValues = () => {
    if (!options.value?.length) return;

    mappedFilterOption.value = options.value.reduce(
      (accumulator, { value, isSelected, text, subtext }) => {
        if (!accumulator[value]?.isSelected) {
          accumulator[value] = { isSelected, text, value, subtext };
        }
        return accumulator;
      },
      mappedFilterOption.value as Record<string, FilterPropsInterface['optionDetails']>,
    );
  };

  //Map option from the filter
  const getMappedFilterData = (column: string) => {
    emit('getFilterData');

    if (loading.value || !filterData.value?.length) return;

    mappedMenuData.value = filterData.value.reduce(
      (accumulator, { value, isSelected, text, subtext }) => {
        const isExisting = selectedFilters.value.some(
          (prevSelected) => prevSelected.value === value && prevSelected.column === column,
        );
        accumulator[value] = {
          isSelected: isExisting || isSelected,
          text,
          value,
          column,
          subtext,
        };
        return accumulator;
      },
      {} as Record<string, FilterPropsInterface['optionDetails']>,
    );
  };

  const getMappedFilterMenuList = () => {
    if (!filterMenu.value || filterMenu.value.length === 0) return;

    mappedFilterMenuList.value = (filterMenu.value as FilterPropsInterface['filterDetails'][]).reduce(
      (accumulator, { isFilterVisible, columnName, field }) => {
        accumulator[field] = {
          isFilterVisible: isFilterVisible || false,
          columnName,
          field,
          count: 0,
          selected: {},
        };
        return accumulator;
      },
      {} as Record<string, FilterPropsInterface['filterDetails']>,
    );
  };

  // get all selected values in filter Menu Option
  const getSelectedFilterMenuOption = computed(() => {
    return Object.values(mappedMenuData.value).filter((item) => item.isSelected);
  });

  // get the count of selected Filter Menu List
  const getSelectedItemPerFilterMenu = (column: string) => {
    return Object.values(selectedFilters.value).filter((item) => item.column === column).length;
  };

  // get all selected values in filter option list
  const getSelectedOption = computed(() => {
    return Object.values(mappedFilterOption.value).filter((item) => item.isSelected);
  });

  watch(getSelectedOption, (value) => {
    selectedValue.value = value;
  });

  watch(searchValue, (value) => {
    searchText.value = value;
  });

  const selectAllOptions = () => {
    if (options.value && options.value.length > 0) {
      options.value.forEach((option) => {
        mappedFilterOption.value[option.value].isSelected = true;
      });
    }
  };

  const saveSelectedFilter = (field: string) => {
    const selectedValues = Object.values(mappedMenuData.value).filter(
      (selected) => selected.isSelected && selected.column === field,
    );

    selectedFilters.value = selectedFilters.value
      .filter((prevSelected) => prevSelected.column !== field)
      .concat(selectedValues);

    emit('selectedFilter', selectedFilters.value);
    mappedFilterMenuList.value[field].count = selectedValues.length;
    mappedFilterMenuList.value[field].isFilterVisible = false;
  };

  const handleRemoveFilterValues = (filter: string) => {
    mappedMenuData.value[filter].isSelected = false;
  };

  const filterClass = computed(() => {
    const MainClasses = classNames('spr-relative spr-inline-block spr-w-full');
    const MainOptionWrapperClasses = classNames(
      'spr-background-color spr-border-color-weak spr-absolute spr-left-0 spr-right-0 spr-top-full spr-z-10 spr-mt-1 spr-rounded-border-radius-md spr-border spr-border-solid',
    );
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

    const LoadingStateClasses = classNames('spr-p-size-spacing-sm spr-flex spr-items-center spr-justify-center');
    const ActionButtonClasses = classNames('spr-flex spr-justify-end spr-gap-2 spr-p-size-spacing-2xs');
    const filterListClasses = classNames(
      'spr-body-xs-regular spr-flex spr-cursor-pointer spr-justify-between spr-rounded-border-radius-md spr-p-size-spacing-4xs',
      'hover:spr-background-color-hover',
    );

    onBeforeMount(() => {
      getMappedFilterMenuList();
      // Call getMappedFilterMenuList upon component render
    });
    return {
      MainClasses,
      MainOptionWrapperClasses,
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
    mappedFilterOption,
    mappedMenuData,
    getSelectedFilterMenuOption,
    getFiltereredMenuOption,
    filterMenuSearchvalue,
    mappedFilterMenuList,
    filterClass,

    toggleDropdown,
    selectAllOptions,
    getMappedFilterData,
    saveSelectedFilter,
    getSelectedItemPerFilterMenu,
    handleRemoveFilterValues,
  };
};
