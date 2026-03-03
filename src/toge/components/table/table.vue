<template>
  <div :class="classes.tableWrapperClasses">
    <!-- Default slot (e.g. table title section) -->
    <div v-if="$slots.default" :class="classes.tableActionSlotClasses">
      <slot />
    </div>

    <div :class="classes.tableBackgroundClasses">
      <table
        :id="props.id"
        class="spr-h-full spr-w-full"
        cellspacing="0"
        cellpadding="0"
        :aria-label="props.id || 'data-table'"
      >
        <!-- thead -->
        <thead>
          <tr v-if="!(props.removeHeaderOnEmpty && props.tableData.length === 0)">
            <!-- Multiselect header checkbox -->
            <th
              v-if="props.isMultiSelect"
              :class="[classes.multiselectClass, classes.headerClasses(null)]"
            >
              <div class="spr-flex spr-items-center spr-justify-center">
                <TogeCheckbox
                  aria-label="Select all rows"
                  :model-value="isAllSelected || isIndeterminate"
                  :indeterminate="isIndeterminate"
                  @update:model-value="handleSelectAll"
                />
              </div>
            </th>

            <!-- Column headers -->
            <th
              v-for="(header, idx) in props.headers"
              :key="idx"
              :class="classes.headerClasses(header)"
              :style="header.width ? { width: header.width } : undefined"
            >
              <div :class="classes.headerNameClass">
                <span
                  :class="{ 'spr-cursor-pointer': header.sort }"
                  @click="header.sort ? handleSort(header.field) : undefined"
                >
                  {{ header.name }}
                </span>

                <span v-if="header.badgeText">
                  <TogeBadge :text="header.badgeText" :variant="header.badgeVariant" size="small" />
                </span>

                <span
                  v-if="header.sort"
                  class="spr-flex spr-flex-row spr-items-center spr-p-size-spacing-6xs hover:spr-rounded-border-radius-xs hover:spr-bg-mushroom-300 spr-cursor-pointer"
                  @click="handleSort(header.field)"
                >
                  <Icon
                    :icon="getSortIcon(header.field)"
                    height="16"
                    width="16"
                    :class="{ 'spr-text-kangkong-700': props.sortField === header.field }"
                  />
                </span>
              </div>
            </th>
          </tr>
        </thead>

        <!-- Loading state -->
        <tbody v-if="props.loading">
          <tr v-for="n in 5" :key="`skeleton-${n}`">
            <td
              :colspan="props.isMultiSelect ? props.headers.length + 1 : props.headers.length"
              class="spr-overflow-hidden"
            >
              <div class="spr-flex spr-items-center spr-justify-center spr-py-size-spacing-xs">
                <div class="spr-animate-pulse spr-h-4 spr-w-full spr-bg-mushroom-200 spr-rounded" />
              </div>
            </td>
          </tr>
        </tbody>

        <!-- Data rows -->
        <tbody v-else-if="props.tableData.length > 0" :class="classes.tableBodyClasses">
          <tr
            v-for="(row, rowIdx) in props.tableData"
            :key="rowIdx"
            :class="classes.rowClasses(rowIdx, isRowSelected(row))"
            @click="handleRowClick(row)"
          >
            <!-- Multiselect cell -->
            <td v-if="props.isMultiSelect" :class="[classes.multiselectClass, classes.cellClasses]">
              <div class="spr-flex spr-items-center spr-justify-center">
                <TogeCheckbox
                  aria-label="Select row"
                  :model-value="isRowSelected(row)"
                  @update:model-value="(val: boolean) => handleRowSelect(row, val)"
                />
              </div>
            </td>

            <!-- Data cells -->
            <td
              v-for="(header, hIdx) in props.headers"
              :key="hIdx"
              :class="classes.cellClasses"
              :style="header.width ? { width: header.width } : undefined"
            >
              <slot
                v-if="$slots.cell"
                name="cell"
                :row="row"
                :header="header"
                :value="row[header.field]"
              />
              <template v-else>
                {{ row[header.field] }}
              </template>
            </td>
          </tr>
        </tbody>

        <!-- Empty state -->
        <tbody v-else :class="classes.emptyStateClasses">
          <tr class="spr-h-full">
            <td
              :colspan="props.isMultiSelect ? props.headers.length + 1 : props.headers.length"
              class="spr-flex spr-h-full spr-items-center spr-justify-center"
            >
              <slot name="empty">
                <span class="spr-body-md-regular spr-text-color-weak">
                  {{ props.emptyText || 'No data available' }}
                </span>
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Footer slot -->
    <div v-if="$slots.tableActionSection">
      <slot name="tableActionSection" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import type { TableProps, TableEmits, TableSlots, SortOrder, TableHeader } from './table.types'
import { getTableClasses } from './table.styles'
import TogeCheckbox from '../../primitives/checkbox/checkbox.vue'
import TogeBadge from '../../primitives/badge/badge.vue'

const props = withDefaults(defineProps<TableProps>(), {
  id: 'toge-table',
  loading: false,
  isMultiSelect: false,
  selectedRows: () => [],
  sortField: '',
  sortOrder: null,
  emptyText: 'No data available',
  removeHeaderOnEmpty: false,
  striped: false,
  hoverable: true,
  bordered: false,
  dense: false,
  stickyHeader: false,
})

const emit = defineEmits<{
  'sort-change': [field: string, order: SortOrder]
  'row-select': [row: Record<string, unknown>, selected: boolean]
  'select-all': [selected: boolean]
  'row-click': [row: Record<string, unknown>]
  'update:selectedRows': [rows: Record<string, unknown>[]]
}>()

defineSlots<{
  default(props: {}): any
  tableActionSection(props: {}): any
  cell(props: { row: Record<string, unknown>; header: TableHeader; value: unknown }): any
  empty(props: {}): any
}>()

const classes = computed(() =>
  getTableClasses({
    striped: props.striped,
    hoverable: props.hoverable,
    bordered: props.bordered,
    dense: props.dense,
    stickyHeader: props.stickyHeader,
  }),
)

// Selection computed helpers
const isAllSelected = computed(() => {
  if (!props.tableData.length || !props.selectedRows?.length) return false
  return props.tableData.every((row) => isRowSelected(row))
})

const isIndeterminate = computed(() => {
  if (!props.selectedRows?.length) return false
  return props.selectedRows.length > 0 && !isAllSelected.value
})

function isRowSelected(row: Record<string, unknown>): boolean {
  return (props.selectedRows ?? []).some((r) => JSON.stringify(r) === JSON.stringify(row))
}

// Sort logic — purely derived from props, no internal state
function getSortIcon(field: string): string {
  if (props.sortField !== field) return 'material-symbols:unfold-more-rounded'
  if (props.sortOrder === 'asc') return 'material-symbols:arrow-upward-rounded'
  if (props.sortOrder === 'desc') return 'material-symbols:arrow-downward-rounded'
  return 'material-symbols:unfold-more-rounded'
}

function handleSort(field: string): void {
  let nextOrder: SortOrder
  if (props.sortField !== field) {
    nextOrder = 'asc'
  } else if (props.sortOrder === 'asc') {
    nextOrder = 'desc'
  } else {
    nextOrder = null
  }
  emit('sort-change', field, nextOrder)
}

// Row interaction handlers
function handleRowClick(row: Record<string, unknown>): void {
  emit('row-click', row)
}

function handleRowSelect(row: Record<string, unknown>, selected: boolean): void {
  emit('row-select', row, selected)

  const current = props.selectedRows ?? []
  let updated: Record<string, unknown>[]

  if (selected) {
    updated = [...current, row]
  } else {
    updated = current.filter((r) => JSON.stringify(r) !== JSON.stringify(row))
  }

  emit('update:selectedRows', updated)
}

function handleSelectAll(selected: boolean): void {
  emit('select-all', selected)
  const updated = selected ? [...props.tableData] : []
  emit('update:selectedRows', updated)
}
</script>
