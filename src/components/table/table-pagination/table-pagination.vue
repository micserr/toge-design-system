<template>
  <div :class="tablePaginationBaseClass">
    <spr-dropdown 
      :menu="dropdownSelection" 
      dropdown-type="single-select"
      placement="bottom"
      @get-selected-item="handleSelectedItem"
    >
      <spr-input :class="dropdownInputFieldClass" v-model="computeSelectedRowCount" :readonly="true">
        <template #icon>
          <Icon icon="ph:caret-down" />
        </template>
      </spr-input>
    </spr-dropdown>

    <div :class="paginationRightSideClass">
      <div :class="computeRowRangeClass">
        {{ computeRowRange }}
      </div>
      <div :class="navigationContainerClass">
        <spr-button hasIcon :class="navigationButtonClasses" @click="previous" :disabled="disabledNext">
          <Icon icon="ph:caret-left"/>
        </spr-button>
        <spr-button hasIcon :class="navigationButtonClasses" @click="next" :disabled="disabledPrevious">
          <Icon icon="ph:caret-right"/>
        </spr-button>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import SprInput from '@/components/input/input.vue';
import SprButton from '@/components/button/button.vue';
import SprDropdown from "@/components/dropdown/dropdown.vue";
import { Icon } from '@iconify/vue';
import { tablePaginationEmitTypes, tablePaginationPropTypes } from './table-pagination';
import { useTablePagination } from './use-table-pagination';

const emit = defineEmits(tablePaginationEmitTypes);

const props = defineProps(tablePaginationPropTypes);

const {
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
  dropdownSelection,
} = useTablePagination(props, emit);


</script>
