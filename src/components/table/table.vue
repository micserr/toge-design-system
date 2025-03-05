<template>
  <div
    class="spr-table-wrapper spr-border-color-weak spr-w-full spr-overflow-hidden spr-rounded-border-radius-lg spr-border spr-border-solid"
  > 
    <div v-if="!!$slots.default" :class="[{ 'spr-px-size-spacing-sm spr-py-size-spacing-xs': !!$slots.default }]">
      <slot />
    </div>

    <div v-if="hasTableActions" class="spr-w-full spr-border spr-border-solid spr-border-color-weak" >
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

    <div class="spr-h-[400px]">
      <table aria-describedby="describe" class="spr-w-full spr-table-fixed" cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <th
              v-for="(header, keyHeader) in headers"
              :key="keyHeader"
              :class="[
                'spr-background-color-surface spr-min-h-12 spr-px-size-spacing-2xs spr-py-size-spacing-3xs',
                'spr-text-color-strong spr-font-size-100 spr-font-line-height-100 spr-font-letter-spacing-normal spr-text-start spr-font-medium spr-uppercase',
                'spr-border-color-weak spr-border-x-0 spr-border-y spr-border-solid',
                {
                  'spr-cursor-pointer': header.sort,
                  'spr-border-t-0': !$slots.default,
                },
              ]"
            >
              <div class="spr-flex spr-flex-row spr-items-center spr-gap-size-spacing-5xs">
                <span @click="header.sort && sortData(header.field)">{{ header.name }}</span>

                <span v-if="header.badgeText">
                  <spr-badge :text="header.badgeText" :variant="header.badgeVariant" size="small" />
                </span>
                <span
                  v-if="header.sort"
                  class="spr-flex spr-flex-row spr-items-center"
                  @click="header.sort && sortData(header.field)"
                >
                  <Icon icon="ph:caret-up-down-light" />
                </span>
              </div>
            </th>

            <!-- for action Button -->
            <th
              v-if="action"
              :class="[
                'spr-background-color-surface spr-min-h-12 spr-py-size-spacing-3xs',
                'spr-text-color-strong spr-font-size-100 spr-font-line-height-100 spr-font-letter-spacing-normal spr-text-start spr-font-medium spr-uppercase',
                'spr-border-color-weak spr-border-x-0 spr-border-y spr-border-solid',
              ]"
            >
              <slot
                name="action-name"
                class="spr-background-color-surface spr-text-color-strong spr-font-size-100 spr-font-line-height-100 spr-font-letter-spacing-normal spr-uppercase"
              />
            </th>
          </tr>
        </thead>
        <tbody v-if="sortedData.length > 0 && !loading">
          <tr
            v-for="(item, keyIndex) in sortedData"
            :key="keyIndex"
            class="hover:spr-background-color-hover spr-min-h-[60px]"
          >
            <td
              v-for="(column, headerKey) in headers"
              :key="headerKey"
              class="spr-border-color-weak spr-overflow-hidden spr-border-x-0 spr-border-b spr-border-t-0 spr-border-solid spr-p-3"
            >
              <div v-if="sortedData[keyIndex][column.field]" class="spr-flex spr-flex-row spr-items-center spr-gap-2">
                <spr-avatar
                  v-if="column.hasAvatar"
                  size="lg"
                  :src="sortedData[keyIndex][column.field].image"
                  alt="User Avatar"
                  :variant="sortedData[keyIndex][column.field].image ? 'image' : 'initial'"
                  :initial="sortedData[keyIndex][column.field].title"
                />
                <div>
                  <div
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
            <td
              v-if="action"
              class="spr-border-color-weak spr-overflow-hidden spr-border-x-0 spr-border-b spr-border-t-0 spr-border-solid"
            >
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
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';

import SprAvatar from '@/components/avatar/avatar.vue';
import SprEmptyState from '@/components/empty-state/empty-state.vue';
import SprBadge from '@/components/badge/badge.vue';
import SprTableActions from '@/components/table/table-actions/table-actions.vue';

import { tablePropTypes, tableEmitTypes } from './table';
import { useTable } from './use-table';

const props = defineProps(tablePropTypes);
const emit = defineEmits(tableEmitTypes);

const { sortedData, sortData, getHeaderCount, updateSearchField, hasTableActions, searchField } = useTable(props, emit);
</script>
