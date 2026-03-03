<template>
  <div :class="classes.baseClasses">
    <!-- Items per page selector -->
    <div class="spr-flex spr-items-center spr-gap-size-spacing-2xs">
      <span :class="classes.itemsPerPageLabelClasses">Rows per page:</span>
      <select
        :class="classes.selectClasses"
        :value="currentItemsPerPage"
        aria-label="Items per page"
        @change="handleItemsPerPageChange"
      >
        <option
          v-for="option in resolvedOptions"
          :key="option"
          :value="option"
        >
          {{ option }}
        </option>
      </select>
    </div>

    <!-- Right side: row range + navigation -->
    <div :class="classes.rightSideClasses">
      <div v-if="props.showRowCount !== false" :class="classes.rowRangeClasses">
        {{ rowRangeText }}
      </div>

      <nav :class="classes.navigationContainerClasses" aria-label="Pagination">
        <button
          :class="classes.navigationButtonClasses"
          type="button"
          :disabled="currentPage <= 1"
          :aria-disabled="currentPage <= 1"
          aria-label="Previous page"
          @click="handlePrevious"
        >
          <Icon icon="ph:caret-left" width="16" height="16" />
        </button>

        <button
          :class="classes.navigationButtonClasses"
          type="button"
          :disabled="currentPage >= totalPages"
          :aria-disabled="currentPage >= totalPages"
          aria-label="Next page"
          @click="handleNext"
        >
          <Icon icon="ph:caret-right" width="16" height="16" />
        </button>
      </nav>
    </div>

    <!-- Optional actions slot -->
    <div v-if="$slots.actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import type { TablePaginationProps, TablePaginationEmits, TablePaginationSlots } from './table-pagination.types'
import { getTablePaginationClasses } from './table-pagination.styles'

const props = withDefaults(defineProps<TablePaginationProps>(), {
  currentPage: 1,
  itemsPerPage: 10,
  itemsPerPageOptions: () => [10, 20, 50, 100],
  selectedRowCount: 0,
  showRowCount: true,
})

const emit = defineEmits<TablePaginationEmits>()

defineSlots<TablePaginationSlots>()

const classes = getTablePaginationClasses()

const currentPage = computed(() => props.currentPage ?? 1)
const currentItemsPerPage = computed(() => props.itemsPerPage ?? 10)

const resolvedOptions = computed(() =>
  props.itemsPerPageOptions && props.itemsPerPageOptions.length > 0
    ? props.itemsPerPageOptions
    : DEFAULT_OPTIONS,
)

const totalPages = computed(() =>
  Math.max(1, Math.ceil(props.totalItems / currentItemsPerPage.value)),
)

const rowStart = computed(() =>
  props.totalItems === 0 ? 0 : (currentPage.value - 1) * currentItemsPerPage.value + 1,
)

const rowEnd = computed(() =>
  Math.min(currentPage.value * currentItemsPerPage.value, props.totalItems),
)

const rowRangeText = computed(() =>
  `${rowStart.value}–${rowEnd.value} of ${props.totalItems}`,
)

function handlePrevious(): void {
  if (currentPage.value <= 1) return
  const page = currentPage.value - 1
  emit('update:currentPage', page)
  emit('page-change', page)
}

function handleNext(): void {
  if (currentPage.value >= totalPages.value) return
  const page = currentPage.value + 1
  emit('update:currentPage', page)
  emit('page-change', page)
}

function handleItemsPerPageChange(event: Event): void {
  const target = event.target as HTMLSelectElement
  const perPage = Number(target.value)
  emit('update:itemsPerPage', perPage)
  // Reset to page 1 when items per page changes
  emit('update:currentPage', 1)
  emit('page-change', 1)
}
</script>
