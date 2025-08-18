<template>
  <div :class="getTableClasses.tableWrapperClasses">
    <div v-if="!!$slots.default" :class="getTableClasses.tableActionSlotClasses">
      <slot />
    </div>

    <div v-if="hasTableActions" :class="getTableClasses.tableHeaderActionsClasses">
      <spr-table-actions
        v-model:search-model="searchField"
        :toggle-search="props.tableActions.search"
        :toggle-option="props.tableActions.option"
        :toggle-filter="props.tableActions.filter"
        @update:search-model="updateSearchField"
      >
        <template #tableActionSection>
          <slot name="tableActionSection" />
        </template>
      </spr-table-actions>
    </div>
    <div :class="getTableClasses.tableBackgroundClasses">
      <table aria-describedby="describe" class="spr-h-full spr-w-full spr-table-fixed" cellspacing="0" cellpadding="0">
        <thead>
          <tr v-if="!(props.removeHeaderOnEmpty && sortedData.length <= 0)">
            <th v-if="props.isMultiSelect" :class="[getTableClasses.multiselectClass, getTableClasses.headerClasses]">
              <div class="spr-flex spr-items-center spr-justify-center">
                <spr-checkbox
                  label=""
                  :checked="isAllSelected || isIndeterminate"
                  :indeterminate="isIndeterminate"
                  @update:model-value="handleSelectAll"
                />
              </div>
            </th>
            <th v-for="(header, keyHeader) in headers" :key="keyHeader" :class="[getTableClasses.headerClasses(header)]">
              <div :class="getTableClasses.headerNameClass">
                <span :class="[{ 'spr-cursor-pointer': header.sort }]" @click="header.sort && sortData(header.field)">
                  {{ header.name }}
                </span>

                <span v-if="header.badgeText">
                  <spr-badge :text="header.badgeText" :variant="header.badgeVariant" size="small" />
                </span>
                <span
                  v-if="header.sort"
                  :class="[
                    'spr-flex spr-flex-row spr-items-center spr-p-size-spacing-6xs',
                    'hover:spr-rounded-border-radius-xs hover:spr-bg-mushroom-300',
                    { 'spr-cursor-pointer': header.sort },
                  ]"
                  @click="header.sort && sortData(header.field)"
                >
                  <Icon
                    :icon="getSortIcon(header.field)"
                    height="16"
                    width="16"
                    :class="[{ 'spr-text-kangkong-700': sortField === header.field }]"
                  />
                </span>
              </div>
            </th>

            <!-- for action Button -->
            <th v-if="action" :class="getTableClasses.headerClasses">
              <slot name="action-name" :class="getTableClasses.tableCellSlotClasses" />
            </th>
          </tr>
        </thead>
        <tbody v-if="sortedData.length > 0 && !loading" :class="getTableClasses.tableBodyClasses">
          <tr
            v-for="(item, keyIndex) in sortedData"
            :key="keyIndex"
            :class="[
              getTableClasses.tableRowClasses,
              isRowSelected(item) ? 'spr-bg-kangkong-100' : 'hover:spr-background-color-hover',
            ]"
            @click="handleRowClick(item, keyIndex)"
            @mouseover="$emit('onHover', { active: true, data: item })"
            @mouseleave="$emit('onHover', { active: false, data: item })"
          >
            <td
              v-if="props.isMultiSelect"
              :class="[getTableClasses.multiselectClass, getTableClasses.multiselectRowClass]"
            >
              <div class="spr-flex spr-items-center spr-justify-center">
                <spr-checkbox label="" :checked="isRowSelected(item)" @update:model-value="handleSelect(item)" />
              </div>
            </td>
            <td v-for="(column, headerKey) in headers" :key="headerKey" :class="getTableClasses.tableDataClasses">
              <slot v-if="$slots[column.field]" :name="column.field" :row="item" :row-index="keyIndex" />
              <template v-else>
                <div v-if="sortedData[keyIndex][column.field]" class="spr-flex spr-flex-row spr-items-center spr-gap-2">
                  <spr-avatar
                    v-if="column.hasAvatar"
                    size="lg"
                    :src="sortedDataItem(keyIndex, column.field).image"
                    alt="User Avatar"
                    :variant="column.avatarVariant ? column.avatarVariant : 'initial'"
                    :initial="sortedDataItem(keyIndex, column.field).title as string"
                  />
                  <div
                    v-if="column.hasIcon"
                    class="spr-flex spr-items-center spr-rounded-full spr-bg-mushroom-200 spr-p-1"
                  >
                    <Icon :icon="sortedDataItem(keyIndex, column.field).icon || ''" />
                  </div>
                  <div>
                    <!-- Array Title -->
                    <div
                      v-if="Array.isArray(sortedDataItem(keyIndex, column.field).title)"
                      class="spr-flex spr-flex-wrap spr-gap-2"
                    >
                      <div v-for="(cell, index) in sortedDataItem(keyIndex, column.field).title" :key="index">
                        <div v-if="column.hasLozengeTitle" class="spr-mt-1">
                          <spr-table-lozenge-title :cell="cell as LozengeTitle" />
                        </div>
                        <div v-else-if="column.hasChipTitle" class="spr-mt-1">
                          <spr-table-chips-title :cell="cell as ChipTitle" />
                        </div>
                      </div>
                    </div>

                    <!-- Single Title Handling -->
                    <div v-else>
                      <div v-if="column.hasLozengeTitle" class="spr-mt-1">
                        <!-- Defining lozenge title in the title so it wont confuse the consumer; hence the title.title-->
                        <!-- Also this structure allows multiple instances -->
                        <spr-table-lozenge-title :cell="sortedDataItem(keyIndex, column.field).title as LozengeTitle" />
                      </div>
                      <!-- Defining the chip title so it wont confuse the consumer; hence the title.title -->
                      <!-- Also this structure allows multiple instances -->
                      <div v-else-if="column.hasChipTitle" class="spr-mt-1">
                        <spr-table-chips-title :cell="sortedDataItem(keyIndex, column.field).title as ChipTitle" />
                      </div>
                      <div v-else class="spr-text-color-strong spr-font-size-200 spr-font-normal">
                        {{ sortedDataItem(keyIndex, column.field).title }}
                      </div>
                    </div>

                    <!-- Subtitle -->
                    <div v-if="column.hasSubtext" class="spr-text-color-base spr-text-xs spr-font-normal">
                      {{ sortedDataItem(keyIndex, column.field).subtext }}
                    </div>
                  </div>
                </div>
              </template>
            </td>
            <td v-if="action" :class="getTableClasses.tableRowActionClasses">
              <div class="spr-flex spr-items-center">
                <slot name="action" :row="item" />
              </div>
            </td>
          </tr>
        </tbody>
        <tbody v-else :class="getTableClasses.emptyStateClasses">
          <tr v-if="!loading" class="spr-h-full">
            <td :colspan="getHeaderCount" class="spr-flex spr-h-full spr-items-center spr-justify-center">
              <slot name="empty-state">
                <SprEmptyState :size="getEmptyStateSize" />
              </slot>
            </td>
          </tr>
          <tr v-else>
            <td :colspan="getHeaderCount" class="spr-overflow-hidden">
              <slot name="loading">
                <div class="spr-flex spr-items-center spr-justify-center">Loading...</div>
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="$slots.footer" :class="getTableClasses.tableFooterClasses">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSlots } from 'vue';
import { Icon } from '@iconify/vue';
import SprAvatar from '@/components/avatar/avatar.vue';
import SprEmptyState from '@/components/empty-state/empty-state.vue';
import SprBadge from '@/components/badge/badge.vue';
import SprTableActions from '@/components/table/table-actions/table-actions.vue';
import SprTableLozengeTitle from '@/components/table/table-lozenge-title/table-lozenge-title.vue';
import SprTableChipsTitle from '@/components/table/table-chips-title/table-chips-title.vue';
import SprCheckbox from '@/components/checkbox/checkbox.vue';

import { tablePropTypes, tableEmitTypes } from './table';
import type { ChipTitle } from '@/components/table/table-chips-title/table-chips-title';
import type { LozengeTitle } from '@/components/table/table-lozenge-title/table-lozenge-title';
import { useTable } from './use-table';

const props = defineProps(tablePropTypes);
const emit = defineEmits(tableEmitTypes);
const slots = useSlots();

const {
  sortedData,
  getHeaderCount,
  hasTableActions,
  searchField,
  getTableClasses,
  getEmptyStateSize,
  isAllSelected,
  isIndeterminate,
  sortField,

  isRowSelected,
  sortData,
  updateSearchField,
  handleRowClick,
  handleSelect,
  handleSelectAll,
  sortedDataItem,
  getSortIcon,
} = useTable(props, emit, slots);
</script>
