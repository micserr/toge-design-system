import { ref, computed, toRefs, Slots, watch } from 'vue';

import type { TablePropTypes, TableEmitTypes, TABLE_SORT, TableData, TableDataProps, Header } from './table';
import type { SetupContext } from 'vue';

import classNames from 'classnames';

export const useTable = (props: TablePropTypes, emit: SetupContext<TableEmitTypes>['emit'], slots: Slots) => {
  const { dataTable, action, headers, sortOrder, fullHeight, selectedKeyId, returnCompleteSelectedProperties } =
    toRefs(props);
  const sortField = ref('');
  const searchField = ref(props.searchModel);
  const tableSortOrder = ref<TABLE_SORT>(sortOrder.value);
  const selectAll = ref(false);
  const selectedData = ref<TableData[]>([]);

  const isAllSelected = computed(() => {
    if (selectedData.value.length === 0) return false;
    return selectedData.value.length === sortedData.value.length;
  });

  const isIndeterminate = computed(() => {
    if (selectedData.value.length === 0) return false;
    return selectedData.value.length > 0 && selectedData.value.length < sortedData.value.length;
  });

  const sortedData = computed(() => {
    if (!sortField.value || sortOrder?.value) return dataTable.value;
    const sorted = [...dataTable.value].sort((a, b) => {
      const fieldA = extractLowerCasedTitle(a[sortField.value]);
      const fieldB = extractLowerCasedTitle(b[sortField.value]);

      if (fieldA < fieldB) return tableSortOrder.value === 'asc' ? -1 : 1;
      if (fieldA > fieldB) return tableSortOrder.value === 'asc' ? 1 : -1;
      return 0;
    });
    return sorted;
  });

  const sortData = (field: string) => {
    if (sortField.value === field) {
      tableSortOrder.value = tableSortOrder.value === 'asc' ? 'desc' : 'asc';
    } else {
      sortField.value = field;
      tableSortOrder.value = 'asc';
    }

    emit('onSort', { field: field, sortOrder: tableSortOrder.value });
  };

  const getSortIcon = (field: string) => {
    if (sortField.value !== field) {
      return 'ph:caret-up-down-light';
    }

    return tableSortOrder.value === 'asc' ? 'ph:arrow-up' : 'ph:arrow-down';
  };

  const getHeaderCount = computed(() => (action.value ? headers.value.length + 1 : headers.value.length));

  const updateSearchField = (value: string) => {
    emit('update:searchModel', value);
  };

  const hasTableActions = computed(
    () => props.tableActions.search || props.tableActions.filter || props.tableActions.option,
  );

  const handleRowClick = (rowData: TableData, rowKey: number) => {
    if (props.isRowClickable) {
      emit('onRowClick', rowData, rowKey);
    }
  };

  const getEmptyStateSize = computed(() => {
    return fullHeight.value ? 'large' : 'small';
  });

  // Value is currently either a string, an object with a title property, or an array of objects with a title property
  const extractLowerCasedTitle = (value: string | { title: string } | Array<{ title: string }>) => {
    if (typeof value === 'string') return value.toLowerCase();
    else if (typeof value === 'object' && !Array.isArray(value) && value !== null) return value.title.toLowerCase();
    else if (Array.isArray(value) && value.length > 0) return value[0].title.toLowerCase();
    return '';
  };

  const getTableClasses = computed(() => {
    const tableWrapperClasses = classNames(
      'spr-flex spr-flex-col spr-h-full spr-border-color-weak spr-w-full spr-overflow-hidden spr-rounded-border-radius-lg spr-border spr-border-solid spr-table-wrapper spr-relative',
    );
    const tableFooterClasses = classNames('spr-w-full spr-bottom-0 spr-left-0', {
      'spr-background-color-surface': props.variant === 'surface',
      'spr-background-color': props.variant === 'white',
    });
    const headerBackground = classNames({
      'spr-background-color': props.variant === 'white',
      'spr-background-color-surface': props.variant === 'surface',
    });
    const headerClasses = (header: Header) => {
      if (header.customTailwindClasses){
        return classNames(header.customTailwindClasses);
      }

      return classNames(
        'spr-min-h-12 spr-px-size-spacing-2xs spr-py-size-spacing-3xs',
        'spr-text-color-strong spr-font-size-100 spr-font-line-height-100 spr-font-letter-spacing-normal spr-text-start spr-font-medium spr-uppercase',
        'spr-border-color-weak spr-border-x-0 spr-border-y spr-border-solid',
        {
          'spr-border-t-0': !slots.default,
      },
      headerBackground,
    )};

    const headerNameClass = 'spr-flex spr-flex-row spr-items-center spr-gap-size-spacing-5xs';

    const defaultSlotClasses = classNames({
      'spr-px-size-spacing-sm spr-py-size-spacing-xs': !!slots.default,
    });

    const tableHeaderActionsClasses = 'spr-border-color-weak spr-w-full spr-border spr-border-solid';
    const tableCellSlotClasses =
      'spr-background-color-surface spr-text-color-strong spr-font-size-100 spr-font-line-height-100 spr-font-letter-spacing-normal spr-uppercase';
    const tableRowClasses = classNames('spr-min-h-[60px]', {
      'spr-cursor-pointer': props.isRowClickable,
    });
    const tableDataClasses =
      'spr-border-color-weak spr-overflow-hidden spr-border-x-0 spr-border-b spr-border-t-0 spr-border-solid spr-p-3';
    const tableRowActionClasses =
      'spr-border-color-weak spr-overflow-hidden spr-border-x-0 spr-border-b spr-border-t-0 spr-border-solid spr-p-3';

    const tableBackgroundClasses = classNames('spr-h-full');

    const tableBodyClasses = classNames({
      'spr-overflow-y-auto spr-h-full': fullHeight.value,
      'spr-h-[250px]': !fullHeight.value && slots.footer,
      'spr-h-[360px]': !fullHeight.value && !slots.footer,
    });

    const emptyStateBaseClasses = classNames({
      'spr-overflow-y-hidden spr-h-[calc(90vh-150px)] md:spr-h-[calc(80vh-150px)] sm:spr-h-[calc(70vh-150px)]':
        fullHeight.value && slots.footer, // Adjust tbody height for header/footer
      'spr-overflow-y-auto spr-h-[75vh]': fullHeight.value && !slots.footer, // Adjust tbody height for header/footer
      'spr-h-[250px]': !fullHeight.value && slots.footer,
      'spr-h-[360px]': !fullHeight.value && !slots.footer,
    });

    const multiselectRowClass = classNames(
      'spr-border-color-weak spr-border-x-0 spr-border-b spr-border-t-0 spr-border-solid',
    );

    const multiselectClass = classNames('spr-px-size-spacing-2xs spr-py-size-spacing-3xs spr-w-[44px] ');

    const emptyStateClasses = classNames(`${emptyStateBaseClasses} ${props.emptyStateCustomClasses}`);
    const tableActionSlotClasses = classNames(`${defaultSlotClasses} ${props.tableActionSlotCustomClasses}`);

    return {
      headerClasses,
      tableWrapperClasses,
      defaultSlotClasses,
      tableHeaderActionsClasses,
      headerNameClass,
      tableCellSlotClasses,
      multiselectRowClass,
      multiselectClass,

      tableRowClasses,
      tableDataClasses,
      tableRowActionClasses,
      tableBackgroundClasses,
      tableBodyClasses,
      tableFooterClasses,
      emptyStateClasses,
      tableActionSlotClasses,
    };
  });

  //assert type TableDataProps
  const sortedDataItem = (rowIndex: number, headerField: string) => {
    return sortedData.value[rowIndex][headerField] as TableDataProps;
  };

  const isTableDataObject = (data: TableDataProps) => {
    return typeof data === 'object' && 'title' in data;
  };

  const handleSelect = (item: TableData) => {
    if (!selectedKeyId.value || !(selectedKeyId.value in item)) return;

    const selectedIndex = selectedData.value.findIndex((data) => {
      const typedData = data[selectedKeyId.value] as TableDataProps;
      const typedItemData = item[selectedKeyId.value] as TableDataProps;

      if (isTableDataObject(typedData) && isTableDataObject(typedItemData)) {
        return typedData.title === typedItemData.title;
      } else {
        return data[selectedKeyId.value] === item[selectedKeyId.value];
      }
    });

    if (selectedIndex !== -1) {
      selectedData.value.splice(selectedIndex, 1);
    } else {
      selectedData.value.push(item);
    }

    emitSelectedData();
  };

  const handleSelectAll = () => {
    if (isAllSelected.value || isIndeterminate.value) {
      selectedData.value = [];
    } else {
      selectedData.value = [...sortedData.value];
    }

    emitSelectedData();
  };

  const isRowSelected = (item: TableData) => {
    if (!selectedKeyId.value || !(selectedKeyId.value in item)) return false;

    return selectedData.value.some((data) => {
      const typedData = data[selectedKeyId.value] as TableDataProps;
      const typedItemData = item[selectedKeyId.value] as TableDataProps;
      if (isTableDataObject(typedData) && isTableDataObject(typedItemData)) {
        return typedData.title === typedItemData.title;
      } else {
        return data[selectedKeyId.value] === item[selectedKeyId.value];
      }
    });
  };

  const emitSelectedData = () => {
    if (returnCompleteSelectedProperties.value) {
      emit('update:selectedData', selectedData.value);
    } else {
      const mappedData = selectedData.value.map((item) => {
        const typedItem = item[selectedKeyId.value] as TableDataProps | string | number;
        if (typeof typedItem === 'object') {
          return { ...typedItem };
        } else {
          return typedItem;
        }
      });
      emit('update:selectedData', mappedData);
    }
  };

  watch(sortedData, (newVal) => {
    if (newVal && props.isMultiSelect && selectedData.value.length > 0) {
      // Remove items from selectedData that are not in the new sortedData
      // This is to ensure that the selectedData is always in sync with the sortedData

      newVal.forEach((item) => {
        const selectedIndex = selectedData.value.findIndex((data) => {
          const typedSelectedData = data[selectedKeyId.value] as TableDataProps;
          const typedSortedData = item[selectedKeyId.value] as TableDataProps;

          if (isTableDataObject(typedSelectedData) && isTableDataObject(typedSortedData)) {
            return typedSelectedData.title === typedSortedData.title;
          } else {
            return data[selectedKeyId.value] === item[selectedKeyId.value];
          }
        });

        if (selectedIndex === -1) {
          selectedData.value.splice(selectedIndex, 1);
        }
      });
    }
  });

  return {
    sortData,
    updateSearchField,
    handleRowClick,
    handleSelect,
    handleSelectAll,
    sortedData,
    getHeaderCount,
    hasTableActions,
    searchField,
    getTableClasses,
    getEmptyStateSize,
    selectAll,
    selectedData,
    isAllSelected,
    isRowSelected,
    isIndeterminate,
    sortedDataItem,
    getSortIcon,
    sortField,
  };
};
