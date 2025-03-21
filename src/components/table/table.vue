<template>
  <div :class="getTableClasses.tableWrapperClasses">
    <div v-if="!!$slots.default" :class="getTableClasses.defaultSlotClasses">
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

    <div :class="getTableClasses.getTableHeight">
      <table aria-describedby="describe" class="spr-w-full spr-table-fixed" cellspacing="0" cellpadding="0">
        <thead>
          <tr v-if="sortedData.length > 0 || !props.removeHeaderOnEmpty">
            <th v-for="(header, keyHeader) in headers" :key="keyHeader" :class="[getTableClasses.headerClasses]">
              <div :class="getTableClasses.headerNameClass">
                <span :class="[{ 'spr-cursor-pointer': header.sort }]" @click="header.sort && sortData(header.field)">
                  {{ header.name }}
                </span>

                <span v-if="header.badgeText">
                  <spr-badge :text="header.badgeText" :variant="header.badgeVariant" size="small" />
                </span>
                <span
                  v-if="header.sort"
                  :class="['spr-flex spr-flex-row spr-items-center', { 'spr-cursor-pointer': header.sort }]"
                  @click="header.sort && sortData(header.field)"
                >
                  <Icon icon="ph:caret-up-down-light" />
                </span>
              </div>
            </th>

            <!-- for action Button -->
            <th v-if="action" :class="getTableClasses.headerClasses">
              <slot name="action-name" :class="getTableClasses.tableCellSlotClasses" />
            </th>
          </tr>
        </thead>
        <tbody v-if="sortedData.length > 0 && !loading">
          <tr
            v-for="(item, keyIndex) in sortedData"
            :key="keyIndex"
            :class="getTableClasses.tableRowClasses"
            @click="handleRowClick(item, keyIndex)"
          >
            <td v-for="(column, headerKey) in headers" :key="headerKey" :class="getTableClasses.tableDataClasses">
              <div v-if="sortedData[keyIndex][column.field]" class="spr-flex spr-flex-row spr-items-center spr-gap-2">
                <spr-avatar
                  v-if="column.hasAvatar"
                  size="lg"
                  :src="sortedData[keyIndex][column.field].image"
                  alt="User Avatar"
                  :variant="column.avatarVariant ? column.avatarVariant : 'initial'"
                  :initial="sortedData[keyIndex][column.field].title"
                />
                <div
                  v-if="column.hasIcon"
                  class="spr-flex spr-items-center spr-rounded-full spr-bg-mushroom-200 spr-p-1"
                >
                  <Icon :icon="sortedData[keyIndex][column.field].icon || ''" />
                </div>
                <div>
                  <div v-if="column.hasLozengeTitle" class="spr-mt-1">
                    <spr-lozenge
                      :label="sortedData[keyIndex][column.field].title"
                      :tone="sortedData[keyIndex][column.field].lozengeTone || 'plain'"
                      :url="sortedData[keyIndex][column.field].lozengeAvatarUrl"
                      :fill="sortedData[keyIndex][column.field].lozengeFill || false"
                    >
                      <template v-if="sortedData[keyIndex][column.field].lozengeIcon" #icon>
                        <Icon :icon="sortedData[keyIndex][column.field].lozengeIcon || ''" />
                      </template>
                    </spr-lozenge>
                  </div>
                  <div
                    v-else
                    :class="[
                      'spr-text-color-strong spr-font-size-200 spr-font-normal',
                      { 'spr-text-color-strong spr-body-sm-regular-medium': column.hasSubtext },
                    ]"
                  >
                    {{ sortedData[keyIndex][column.field].title }}
                  </div>
                  <div v-if="column.hasSubtext" class="spr-text-color-base spr-text-xs spr-font-normal">
                    {{ sortedData[keyIndex][column.field].subtext }}
                  </div>
                </div>
              </div>
            </td>
            <td v-if="action" :class="getTableClasses.tableRowActionClasses">
              <div class="spr-flex spr-items-center">
                <slot name="action" :row="item" />
              </div>
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr v-if="!loading">
            <td :colspan="getHeaderCount" class="spr-overflow-hidden">
              <slot name="empty-state">
                <SprEmptyState />
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
import SprLozenge from '@/components/lozenge/lozenge.vue';

import { tablePropTypes, tableEmitTypes } from './table';
import { useTable } from './use-table';

const props = defineProps(tablePropTypes);
const emit = defineEmits(tableEmitTypes);
const slots = useSlots();

const {
  sortedData,
  sortData,
  getHeaderCount,
  updateSearchField,
  hasTableActions,
  searchField,
  getTableClasses,
  handleRowClick,
} = useTable(props, emit, slots);
</script>
