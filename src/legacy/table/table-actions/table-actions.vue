<template>
  <div :class="tableActionsBaseClasses">
    <slot name="tableActionSection">
      <div :class="searchFilterClasses">
        <spr-input-search  
          v-if="props.toggleSearch" 
          :model-value="props.searchModel"  
          :class="inputSearchClasses" 
          placeholder="Search"
          @update:model-value="updateSearchField"
        />
        <spr-button v-if="props.toggleFilter" variant="secondary" has-icon>
          <Icon icon="ph:sliders-horizontal"/>
        </spr-button>
      </div>
      <spr-button v-if="props.toggleOption" >
        <Icon icon="ph:dots-three-vertical"/>
      </spr-button>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { useTableActions } from './use-table-actions';
import SprInputSearch from '@/components/input/input-search/input-search.vue';
import SprButton from '@/components/button/button.vue';
import { Icon } from '@iconify/vue';
import { tableActionEmitTypes, tableActionPropTypes } from './table-actions';

const emit = defineEmits(tableActionEmitTypes);

const props = defineProps(tableActionPropTypes);

const {
  tableActionsBaseClasses,
  inputSearchClasses,
  searchFilterClasses,
  updateSearchField
} = useTableActions(emit);
</script>
