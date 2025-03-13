import { ref, computed, toRefs, Slots } from 'vue';

import type { TablePropTypes, TableEmitTypes, TABLE_SORT, TableData } from './table';
import type { SetupContext } from 'vue';

import classNames from 'classnames';

export const useTable = (props: TablePropTypes, emit: SetupContext<TableEmitTypes>['emit'], slots: Slots) => {
  const { dataTable, action, headers, sortOrder } = toRefs(props);
  const sortField = ref('');
  const searchField = ref(props.searchModel);
  const tableSortOrder = ref<TABLE_SORT>('asc');

  const sortedData = computed(() => {
    if (!sortField.value) return dataTable.value;

    const sorted = [...dataTable.value].sort((a, b) => {
      const fieldA = a[sortField.value].title.toLowerCase();
      const fieldB = b[sortField.value].title.toLowerCase();

      if (fieldA < fieldB) return tableSortOrder.value === 'asc' ? -1 : 1;
      if (fieldA > fieldB) return tableSortOrder.value === 'asc' ? 1 : -1;
      return 0;
    });
    return sorted;
  });

  const sortData = (field: string) => {
    if (sortField.value === field) {
      tableSortOrder.value = sortOrder.value || tableSortOrder.value === 'asc' ? 'desc' : 'asc';
    } else {
      sortField.value = field;
      tableSortOrder.value = sortOrder.value || 'asc';
    }

    emit('onSort', { field: field, sortOrder: tableSortOrder.value });
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
      emit('onRowClick', rowData, rowKey)
    }
  }

  const getTableClasses = computed(() => {
    const tableWrapperClasses =
      'spr-table-wrapper spr-border-color-weak spr-w-full spr-overflow-hidden spr-rounded-border-radius-lg spr-border spr-border-solid';
    const headerBackground = classNames({
      'spr-background-color': props.variant === 'white',
      'spr-background-color-surface': props.variant === 'surface',
    });
    const headerClasses = classNames(
      'spr-min-h-12 spr-px-size-spacing-2xs spr-py-size-spacing-3xs',
      'spr-text-color-strong spr-font-size-100 spr-font-line-height-100 spr-font-letter-spacing-normal spr-text-start spr-font-medium spr-uppercase',
      'spr-border-color-weak spr-border-x-0 spr-border-y spr-border-solid',
      headerBackground,
    );

    const headerNameClass = 'spr-flex spr-flex-row spr-items-center spr-gap-size-spacing-5xs';

    const defaultSlotClasses = classNames({
      'spr-px-size-spacing-sm spr-py-size-spacing-xs': !!slots.default,
    });

    const tableHeaderActionsClasses = 'spr-border-color-weak spr-w-full spr-border spr-border-solid';
    const tableCellSlotClasses =
      'spr-background-color-surface spr-text-color-strong spr-font-size-100 spr-font-line-height-100 spr-font-letter-spacing-normal spr-uppercase';
    const tableRowClasses = classNames('hover:spr-background-color-hover spr-min-h-[60px]', {
      'spr-cursor-pointer': props.isRowClickable
    });
    const tableDataClasses =
      'spr-border-color-weak spr-overflow-hidden spr-border-x-0 spr-border-b spr-border-t-0 spr-border-solid spr-p-3';
    const tableRowActionClasses =
      'spr-border-color-weak spr-overflow-hidden spr-border-x-0 spr-border-b spr-border-t-0 spr-border-solid spr-p-3';
    const tableFooterClasses = 'spr-w-full spr-border spr-border-solid spr-border-color-weak';
    return {
      headerClasses,
      tableWrapperClasses,
      defaultSlotClasses,
      tableHeaderActionsClasses,
      headerNameClass,
      tableCellSlotClasses,

      tableRowClasses,
      tableDataClasses,
      tableRowActionClasses,
      tableFooterClasses,
    };
  });

  return {
    sortData,
    updateSearchField,
    handleRowClick,
    sortedData,
    getHeaderCount,
    hasTableActions,
    searchField,
    getTableClasses,
  };
};
