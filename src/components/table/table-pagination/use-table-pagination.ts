import { computed, ref, toRefs } from 'vue';
import type { ComputedRef, SetupContext } from 'vue';
import classNames from 'classnames';
import type {
  TablePaginationPropTypes,
  TablePaginationEmitTypes,
} from '@/components/table/table-pagination/table-pagination';

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
  const { selectedRowCount, currentPage, totalItems, bordered } = toRefs(props);

  const paginationClasses: ComputedRef<TablePaginationClasses> = computed(() => {
    const baseClass = classNames('spr-p-size-spacing-xs spr-flex spr-justify-between spr-bg-white-50 spr-h-max', {
      'spr-border spr-border-solid spr-border-color-weak': bordered.value,
      'spr-border-x-0 spr-border-t spr-border-b-0 spr-border-solid spr-border-color-weak': !bordered.value,
    });
    const dropdownInputFieldClass = classNames('spr-w-[120px] spr-h-full spr-space-x-2');
    const inputFieldIconClass = classNames('spr-mt-0.5 spr-pl-1 spr-text-mushroom-950');
    const rightSideClass = classNames('spr-flex spr-justify-between spr-items-center spr-space-x-4');
    const computeRowRangeClass = classNames('spr-text-color-base spr-body-sm-regular');
    const navigationContainerClass = classNames('spr-flex spr-space-x-2');
    const navigationButtonClass = classNames('spr-rounded-border-radius-md');
    const dropdownClass = classNames('!spr-w-max');
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

  const handleSelectedItem = (item: string[]) => {
    emit('update:selectedRowCount', Number(item[0]));
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
