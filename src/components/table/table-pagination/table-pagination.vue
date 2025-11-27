<template>
  <div :class="paginationClasses.baseClass" v-bind="$attrs">
    
    <spr-dropdown
      v-if="showNumberOfRowsDropdown"
      :id="dropdownId"
      :menu-list="dropdownSelection"
      dropdown-type="single-select"
      placement="bottom"
      :class="paginationClasses.dropdownClass"
      @update:model-value="handleSelectedItem"
    >
      <spr-input v-model="computeSelectedRowCount" :class="paginationClasses.dropdownInputFieldClass" :readonly="true">
        <template #icon>
          <Icon icon="ph:caret-down-bold" :class="paginationClasses.inputFieldIconClass" width="12px" height="12px"/>
        </template>
      </spr-input>
    </spr-dropdown>

    <div :class="paginationClasses.rightSideClass">
      <div v-if="editableCurrentPage" class="spr-flex spr-flex-row spr-items-center spr-gap-size-spacing-4xs">
        <span class="spr-body-xs-regular spr-text-color-base">Page</span>
        <input
          v-model="currentPage" type="number" min="1" :max="totalPages" 
          class="number-input 
            spr-text-center spr-font-main spr-font-medium spr-font-size-200 spr-font-height-300 sp-text-color-strong
            spr-p-size-spacing-3xs spr-rounded-border-radius-md spr-border spr-border-solid spr-border-color-base spr-outline-none 
            spr-min-w-[48px] spr-max-h-[36px] spr-w-[48px] spr-h-[32px] spr-box-border"
        />
        <span class="spr-body-xs-regular spr-text-color-base">of {{ totalPages }}</span>
      </div>
      <template v-else>
        <div :class="paginationClasses.computeRowRangeClass">
          {{ computeRowRange }}
        </div>
      </template>
      <div :class="paginationClasses.navigationContainerClass">
        <spr-button
          id="previousButton"
          has-icon
          :class="paginationClasses.navigationButtonClass"
          :disabled="disabledNext"
          @click="previous"
        >
          <Icon icon="ph:caret-left" />
        </spr-button>
        <spr-button
          id="nextButton"
          has-icon
          :class="paginationClasses.navigationButtonClass"
          :disabled="disabledPrevious"
          @click="next"
        >
          <Icon icon="ph:caret-right" />
        </spr-button>
      </div>
    </div>
    <div v-if="slots.actions" id="table_pagination_actions_slot">
      <slot name="actions" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

import { tablePaginationEmitTypes, tablePaginationPropTypes } from './table-pagination';
import { useTablePagination } from './use-table-pagination';

import SprInput from '@/components/input/input.vue';
import SprButton from '@/components/button/button.vue';
import SprDropdown from '@/components/dropdown/dropdown.vue';
import { useSlots } from 'vue';

const emit = defineEmits(tablePaginationEmitTypes);
const slots = useSlots();

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
  dropdownId,
  currentPage,
  totalPages,
  showNumberOfRowsDropdown
} = useTablePagination(props, emit);
</script>

<style scoped>
.number-input::-webkit-outer-spin-button,
.number-input::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none;
}

.number-input {
  -moz-appearance: textfield;
}
</style>
