import { computed, ref, toRefs } from 'vue';
import type { ComputedRef, SetupContext } from 'vue';

import type { TablePaginationPropTypes, TablePaginationEmitTypes } from '@/components/table/table-pagination/table-pagination';
import type { MenuListType } from '@/components/list/list';

interface TablePaginationClasses {
  baseClass: string;
  dropdownInputFieldClass: string;
  rightSideClass: string;
  computeRowRangeClass: string;
  navigationContainerClass: string;
  inputFieldIconClass: string;
  navigationButtonClass: string;
  dropdownClass: string,
}

export const useTablePagination = (props: TablePaginationPropTypes, emit: SetupContext<TablePaginationEmitTypes>['emit']) => {
  const { selectedRowCount, currentPage, totalItems } = toRefs(props);

  const paginationClasses: ComputedRef<TablePaginationClasses> = computed(() => {
    const baseClass = 'spr-p-size-spacing-xs spr-flex spr-justify-between spr-bg-white-50 spr-h-max' as const;
    const dropdownInputFieldClass = 'spr-w-[100px] spr-font-bold spr-h-full spr-space-x-2' as const;
    const inputFieldIconClass = 'spr-mt-0.5 spr-pl-1 spr-text-mushroom-950' as const;
    const rightSideClass = 'spr-flex spr-justify-between spr-items-center spr-space-x-4' as const;
    const computeRowRangeClass = 'spr-font-main spr-text-color-base spr-w-full' as const;
    const navigationContainerClass = 'spr-flex spr-space-x-2' as const;
    const navigationButtonClass = 'spr-rounded-border-radius-md' as const;
    const dropdownClass = '!spr-w-max' as const
    return {
      baseClass,
      dropdownInputFieldClass,
      rightSideClass,
      computeRowRangeClass,
      inputFieldIconClass,
      navigationContainerClass,
      navigationButtonClass,
      dropdownClass
    };
  });

  const dropdownSelection = ref(props.dropdownSelection);
  const computeRowRange = computed(() => {
    const startRow = (currentPage.value - 1) * selectedRowCount.value + 1;
    const endRow = Math.min(currentPage.value * selectedRowCount.value, totalItems.value);
    return `${startRow} - ${endRow} of ${totalItems.value}`;
  });

  const computeSelectedRowCount = computed(() => {
    return `${selectedRowCount.value} Rows`;
  });

  const handleSelectedItem = (item: MenuListType) => {
    emit('update:selectedRowCount', Number(item.value));
  };

  const previous = () => {
    emit('previous');
  };

  const next = () => {
    emit('next');
  };

  const disabledNext = computed(() => {
    return props.currentPage === 1;
  });

  const disabledPrevious = computed(() => {
    return props.totalItems <= props.currentPage * props.selectedRowCount;
  });

  // generate a unique id for dropdown so it won't interfere with other dropdowns in the page
  const dropdownId = ref(`dropdown-${crypto.randomUUID()}`);

  return {
    paginationClasses,
    handleSelectedItem,
    computeRowRange,
    computeSelectedRowCount,
    next,
    previous,
    disabledNext,
    disabledPrevious,
    dropdownSelection,
    dropdownId,
  };
};
