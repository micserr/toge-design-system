<template>
  <div :class="paginationClasses.baseClass">
    <spr-dropdown 
      :menu="dropdownSelection" 
      dropdown-type="single-select"
      placement="bottom"
      @get-selected-item="handleSelectedItem"
    >
      <spr-input v-model="computeSelectedRowCount" :class="paginationClasses.dropdownInputFieldClass" :readonly="true">
        <template #icon>
          <Icon icon="ph:caret-down-bold" :class="paginationClasses.inputFieldIconClass"/>
        </template>
      </spr-input>
    </spr-dropdown>

    <div :class="paginationClasses.rightSideClass">
      <div :class="paginationClasses.computeRowRangeClass">
        {{ computeRowRange }}
      </div>
      <div :class="paginationClasses.navigationContainerClass">
        <spr-button has-icon :class="paginationClasses.navigationButtonClass" :disabled="disabledNext" @click="previous" >
          <Icon icon="ph:caret-left"/>
        </spr-button>
        <spr-button has-icon :class="paginationClasses.navigationButtonClass" :disabled="disabledPrevious" @click="next" >
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
  paginationClasses,
  handleSelectedItem,
  computeRowRange,
  computeSelectedRowCount,
  next,
  previous,
  disabledNext,
  disabledPrevious,
  dropdownSelection,
} = useTablePagination(props, emit);


</script>
