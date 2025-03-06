import { computed, ref, toRefs } from 'vue';
import type { SetupContext } from 'vue';

import type { TablePaginationPropTypes, TablePaginationEmitTypes } from '@/components/table/table-pagination/table-pagination';
import type { DropdownMenuType } from '@/components/dropdown/dropdown';

export const useTablePagination = (props: TablePaginationPropTypes, emit:SetupContext<TablePaginationEmitTypes>['emit'] ) => {
  const { selectedRowCount, currentPage, totalItems } = toRefs(props);

  const tablePaginationBaseClass = 'spr-p-size-spacing-xs spr-flex spr-justify-between spr-bg-white-50 spr-h-max' as const
  const dropdownInputFieldClass = 'spr-w-[110px]' as const
  const paginationRightSideClass = 'spr-flex spr-justify-between spr-items-center spr-space-x-4' as const
  const computeRowRangeClass = 'spr-font-main spr-text-color-base' as const
  const dropdownSelection = ref(props.dropdownSelection);
  const navigationContainerClass = 'spr-flex spr-space-x-2' as const
  const navigationButtonClasses = 'spr-rounded-border-radius-md' as const
  const computeRowRange = computed(() => {
    const startRow = (currentPage.value - 1) * selectedRowCount.value + 1;
    const endRow = Math.min(currentPage.value * selectedRowCount.value, totalItems.value);
    return `${startRow} - ${endRow} of ${totalItems.value}`;
  });

  const computeSelectedRowCount = computed(() => {
    return `${selectedRowCount.value} Rows`;
  })

  const handleSelectedItem = (item: DropdownMenuType) => {
    emit('update:selectedRowCount', Number(item.value));
  };

  const previous = () => {
    emit('previous');
  }

  const next = () => {
    emit('next');
  }

  const disabledNext = computed(() => {
    return props.currentPage === 1;
  })

  const disabledPrevious = computed(() => {
    return props.totalItems <= props.currentPage * props.selectedRowCount;
  })

  return {
    tablePaginationBaseClass,
    dropdownInputFieldClass,
    paginationRightSideClass,
    computeRowRangeClass,
    navigationContainerClass,
    handleSelectedItem,
    computeRowRange,
    computeSelectedRowCount,
    navigationButtonClasses,
    next,
    previous,
    disabledNext,
    disabledPrevious,
    dropdownSelection
  };
};
