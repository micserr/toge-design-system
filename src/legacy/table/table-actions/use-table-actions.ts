import type { SetupContext } from 'vue';

import type { TableActionEmitTypes } from '@/components/table/table-actions/table-actions';

export const useTableActions = (emit:SetupContext<TableActionEmitTypes>['emit'] ) => {
  const tableActionsBaseClasses = "spr-h-max spr-p-size-spacing-2xs spr-flex spr-justify-between" as const
  const inputSearchClasses = "spr-w-full" as const
  const searchFilterClasses = "spr-size-[30%] spr-flex spr-gap-size-spacing-2xs" as const

  const updateSearchField = (value: string) => {
    emit('update:searchModel', value);
  }

  return {
    tableActionsBaseClasses,
    inputSearchClasses,
    searchFilterClasses,
    updateSearchField,
  };
};
