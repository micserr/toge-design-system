import { computed, ref, toRefs } from 'vue';
import type { ComputedRef, SetupContext } from 'vue';
import classNames from 'classnames';
import type {
  TablePaginationPropTypes,
  TablePaginationEmitTypes,
} from '@/components/table/table-pagination/table-pagination';
import { useVModel } from '@vueuse/core';

interface TablePaginationClasses {
  baseClass: string;
  dropdownInputFieldClass: string;
  rightSideClass: string;
  computeRowRangeClass: string;
  navigationContainerClass: string;
  inputFieldIconClass: string;
  navigationButtonClass: string;
  dropdownClass: string;
}

export const useTablePagination = (
  props: TablePaginationPropTypes,
  emit: SetupContext<TablePaginationEmitTypes>['emit'],
) => {
  const { selectedRowCount, totalItems, bordered, editableCurrentPage, showNumberOfRowsDropdown } = toRefs(props);

  const currentPage = useVModel(props, 'currentPage', emit);

  const paginationClasses: ComputedRef<TablePaginationClasses> = computed(() => {
    const baseClass = classNames('spr-p-size-spacing-xs spr-flex spr-justify-between spr-bg-white-50 spr-h-max', {
      'spr-border spr-border-solid spr-border-color-weak': bordered.value,
      'spr-border-x-0 spr-border-t spr-border-b-0 spr-border-solid spr-border-color-weak': !bordered.value,
    });

    const dropdownClass = classNames(
      '!spr-w-max [&_.dropdown-slot_div_div]:spr-border-color-base [&_.dropdown-slot_div_div]:spr-p-0'
    );
    
    const dropdownInputFieldClass = classNames('spr-max-w-[120px] spr-min-w-[48px] spr-h-full spr-font-medium [&_input]:spr-py-size-spacing-3xs [&_input]:spr-pr-size-spacing-5xs');
    const inputFieldIconClass = classNames('spr-text-mushroom-950 spr-pr-size-spacing-3xs spr-box-content');
    const rightSideClass = classNames(
      'spr-flex spr-justify-between spr-items-center',
      {
        'spr-space-x-4': !editableCurrentPage.value,
        'spr-gap-size-spacing-3xs': editableCurrentPage.value
      }
    );
    const computeRowRangeClass = classNames('spr-text-color-base spr-body-sm-regular');
    const navigationContainerClass = classNames(
      'spr-flex',
      {
        'spr-space-x-2': !editableCurrentPage.value,
        'spr-gap-size-spacing-5xs': editableCurrentPage.value
      }
    );
    const navigationButtonClass = classNames('spr-rounded-border-radius-md');
    return {
      baseClass,
      dropdownInputFieldClass,
      rightSideClass,
      computeRowRangeClass,
      inputFieldIconClass,
      navigationContainerClass,
      navigationButtonClass,
      dropdownClass,
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

  const handleSelectedItem = (item: unknown) => {
    emit('update:selectedRowCount', Number(item));
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

  const generateUniqueId = () => {
    const timestamp = Date.now();
    const randomNum = Math.floor(Math.random() * 1000000);

    return `dropdown-${timestamp}-${randomNum}`;
  };

  const dropdownId = ref(`dropdown-${generateUniqueId()}`);

  // Get total number of pages
  const totalPages = computed(() => {
    return Math.ceil(props.totalItems / props.selectedRowCount);
  });

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
    currentPage,
    totalPages,
    showNumberOfRowsDropdown
  };
};
