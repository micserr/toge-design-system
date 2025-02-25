<template>
  <div
    class="spr-border-color-weak spr-w-full spr-overflow-hidden spr-rounded-border-radius-lg spr-border spr-border-solid"
  >
    <div v-if="!!$slots.default" :class="[{ 'spr-px-size-spacing-sm spr-py-size-spacing-xs': !!$slots.default }]">
      <slot />
    </div>

    <div class="spr-h-[400px] spr-overflow-auto">
      <table aria-describedby="describe" class="spr-w-full spr-table-fixed" cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <th
              v-for="(header, keyHeader) in headers"
              :key="keyHeader"
              :class="[
                'spr-sticky spr-top-0 spr-z-10',
                'spr-background-color-surface spr-min-h-12 spr-px-size-spacing-2xs spr-py-size-spacing-3xs',
                'spr-text-color-strong spr-font-size-100 spr-font-line-height-100 spr-font-letter-spacing-normal spr-text-start spr-font-medium spr-uppercase',
                'spr-border-color-weak spr-border-x-0 spr-border-y spr-border-solid',
                {
                  'spr-cursor-pointer': header.sort,
                  'spr-border-t-0': !$slots.default,
                },
              ]"
              @click="header.sort && sortData(header.field)"
            >
              <div class="spr-flex spr-flex-row spr-items-center spr-gap-size-spacing-5xs">
                <span>{{ header.name }}</span>
                <span v-if="header.sort" class="spr-flex spr-flex-row spr-items-center">
                  <Icon icon="ph:caret-up-down-light" />
                </span>
              </div>
            </th>

            <!-- for action Button -->
            <th
              v-if="action"
              :class="[
                'spr-sticky spr-top-0 spr-z-10',
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
                  v-if="column.hasAvatar && sortedData[keyIndex][column.field].image"
                  size="lg"
                  :src="sortedData[keyIndex][column.field].image"
                  alt="User Avatar"
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
              <SprEmptyState />
            </td>
          </tr>
          <tr v-else>
            <td :colspan="getHeaderCount" class="spr-overflow-hidden">
              <div v-if="!$slots.loading" class="spr-flex spr-items-center spr-justify-center">Loading...</div>
              <slot name="loading" class="" />
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

import { tablePropTypes } from './table';
import { useTable } from './use-table';

const props = defineProps(tablePropTypes);

const { sortedData, sortData, getHeaderCount } = useTable(props);
</script>
