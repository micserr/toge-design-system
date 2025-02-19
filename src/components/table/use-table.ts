import { ref, computed, toRefs } from 'vue';

import type { TablePropTypes } from './table';

export const useTable = (props: TablePropTypes) => {
  const { dataTable, action, headers } = toRefs(props);
  const sortField = ref('');
  const sortOrder = ref('asc');

  const sortedData = computed(() => {
    if (!sortField.value) return dataTable.value;

    const sorted = [...dataTable.value].sort((a, b) => {
      const fieldA = a[sortField.value].title.toLowerCase();
      const fieldB = b[sortField.value].title.toLowerCase();

      if (fieldA < fieldB) return sortOrder.value === 'asc' ? -1 : 1;
      if (fieldA > fieldB) return sortOrder.value === 'asc' ? 1 : -1;
      return 0;
    });
    return sorted;
  });

  const sortData = (field) => {
    if (sortField.value === field) {
      sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
    } else {
      sortField.value = field;
      sortOrder.value = 'asc';
    }
  };

  const getHeaderCount = computed(() => (action.value ? headers.value.length + 1 : headers.value.length));

  return {
    sortedData,
    getHeaderCount,
    sortData,
  };
};
