<template>
  <div :class="classes.baseClasses">
    <slot name="tableActionSection">
      <div :class="classes.searchFilterClasses">
        <TogeInputSearch
          v-if="props.toggleSearch"
          v-model="searchModel"
          :class="classes.searchInputClasses"
          :placeholder="props.searchPlaceholder || 'Search'"
        />
        <button
          v-if="props.toggleFilter"
          :class="classes.iconButtonClasses"
          type="button"
          aria-label="Filter"
          @click="emit('filter-click')"
        >
          <Icon icon="ph:sliders-horizontal" width="16" height="16" />
        </button>
      </div>

      <button
        v-if="props.toggleOption"
        :class="classes.iconButtonClasses"
        type="button"
        aria-label="Options"
        @click="emit('option-click')"
      >
        <Icon icon="ph:dots-three-vertical" width="16" height="16" />
      </button>
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import type { TableActionsProps, TableActionsEmits, TableActionsSlots } from './table-actions.types'
import { getTableActionsClasses } from './table-actions.styles'
import TogeInputSearch from '../../primitives/input/input-search/input-search.vue'

const props = withDefaults(defineProps<TableActionsProps>(), {
  toggleSearch: false,
  toggleOption: false,
  toggleFilter: false,
  searchPlaceholder: 'Search',
})

const emit = defineEmits<TableActionsEmits>()

defineSlots<TableActionsSlots>()

const searchModel = defineModel<string>('searchModel', { default: '' })

const classes = getTableActionsClasses()
</script>
