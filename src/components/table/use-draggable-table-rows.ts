import { ref, onMounted, onUnmounted, nextTick, type Ref, type ComputedRef } from 'vue';
import Sortable from 'sortablejs';
import type { SortableEvent, Options as SortableOptions } from 'sortablejs';

export interface DragOptions extends Partial<SortableOptions> {
  onStart?: (evt: SortableEvent) => void;
  onEnd?: (evt: SortableEvent) => void;    
  disabled?: boolean;
}

export interface useDraggableTableRowsReturn {
  isDragging: Ref<boolean>;
  reinitializeSortable: () => void;
}

export const useDraggableTableRows = (
  elementRef: Ref<HTMLElement | null>,
  dragOptions: ComputedRef<DragOptions>,
): useDraggableTableRowsReturn => {
  const isDragging = ref(false);  
  let sortableInstance: Sortable | null = null;

  const destroySortable = () => {
    if (sortableInstance) {
      sortableInstance.destroy();
      sortableInstance = null;
    }
  };

  const initializeSortable = () => {
    if (!elementRef.value) return;

    destroySortable();
    sortableInstance = Sortable.create(elementRef.value, dragOptions.value);
  };

  const reinitializeSortable = () => {
    nextTick(() => {
      initializeSortable();
    });
  };
  
  onMounted(() => {
    nextTick(() => {
      initializeSortable();
    });
  });

  onUnmounted(() => {
    destroySortable();
  });

  return {
    isDragging,
    reinitializeSortable,
  };
};
