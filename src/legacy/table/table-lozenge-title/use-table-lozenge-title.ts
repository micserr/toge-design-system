import { computed } from 'vue';
import type { TableLozengeTitlePropTypes } from './table-lozenge-title';

export const useTableLozengeTitle= (
  props: TableLozengeTitlePropTypes,
) => {
  
  const computeTone = computed(() => {
    return props.cell?.tone || 'plain';
  });

  const computeFill = computed(() => {
    return props.cell?.fill || false;
  });


  return {
    computeTone,
    computeFill,
  };
};
