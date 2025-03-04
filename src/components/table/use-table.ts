import { ref, computed, toRefs } from 'vue';

import type { TablePropTypes, TableEmitTypes } from './table';
import type { SetupContext } from 'vue';

export const useTable = (props: TablePropTypes, emit: SetupContext<TableEmitTypes>['emit']) => {
  const { dataTable, action, headers, sortOrder } = toRefs(props);
  const sortField = ref('');
  const tableSortOrder = ref('asc');

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

  const sortData = (field) => {
    if (sortField.value === field) {
      tableSortOrder.value = sortOrder.value ? sortOrder.value : tableSortOrder.value === 'asc' ? 'desc' : 'asc';
    } else {
      sortField.value = field;
      tableSortOrder.value = sortOrder.value ? sortOrder.value : 'asc';
    }

    emit('onSort', { field: field, sortOrder: tableSortOrder.value });
  };

  const getHeaderCount = computed(() => (action.value ? headers.value.length + 1 : headers.value.length));

  return {
    sortedData,
    getHeaderCount,
    sortData,
  };
};
