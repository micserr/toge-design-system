<template>
  <div class="border-color-weak w-full rounded-border-radius-lg border border-solid">
    <div v-if="!!$slots.default" :class="[{ 'px-size-spacing-sm py-size-spacing-xs': !!$slots.default }]">
      <slot />
    </div>

    <div class="h-[400px] overflow-auto">
      <table aria-describedby="describe" class="w-full" cellspacing="0" cellpadding="0">
        <thead>
          <tr
            :class="[
              'background-color-surface',
              {
                'rounded-t-border-radius-lg': !$slots.default,
              },
            ]"
          >
            <th
              v-for="(header, keyHeader) in headers"
              :key="keyHeader"
              :class="[
                'background-color-surface text-color-strong font-size-100 font-line-height-100 font-letter-spacing-normal sticky top-0 z-10 min-h-12 border-none px-size-spacing-2xs py-size-spacing-3xs text-start font-medium uppercase',
                {
                  'cursor-pointer': header.sort,
                },
              ]"
              @click="header.sort && sortData(header.field)"
            >
              <div class="flex flex-row items-center gap-size-spacing-5xs">
                <span>{{ header.name }}</span>
                <span v-if="header.sort" class="flex flex-row items-center"
                  ><Icon icon="ph:caret-up-down-light"
                /></span>
              </div>
            </th>
            <!-- for action Button -->
            <th
              v-if="action"
              class="background-color-surface text-color-strong font-size-100 font-line-height-100 font-letter-spacing-normal sticky top-0 z-10 border-none px-size-spacing-2xs py-size-spacing-3xs text-start font-medium uppercase"
            >
              <slot
                name="action-name"
                class="background-color-surface text-color-strong font-size-100 font-line-height-100 font-letter-spacing-normal uppercase"
              />
            </th>
          </tr>
        </thead>
        <tbody v-if="sortedData.length > 0">
          <tr v-for="(item, keyIndex) in sortedData" :key="keyIndex" class="hover:background-color-hover min-h-[60px]">
            <td v-for="(column, headerKey) in headers" :key="headerKey" class="border-b px-6 py-3">
              <div v-if="sortedData[keyIndex][column.field]" class="flex flex-row items-center gap-2">
                <spr-avatar
                  v-if="column.hasAvatar && sortedData[keyIndex][column.field].image"
                  size="lg"
                  :src="sortedData[keyIndex][column.field].image"
                  alt="User Avatar"
                />
                <div>
                  <div
                    :class="[
                      'text-color-strong font-size-200 font-normal',
                      { 'text-color-strong body-sm-regular-medium': column.hasSubtext },
                    ]"
                  >
                    {{ sortedData[keyIndex][column.field].title }}
                  </div>
                  <div v-if="column.hasSubtext" class="text-color-base text-xs font-normal">
                    {{ sortedData[keyIndex][column.field].subtext }}
                  </div>
                </div>
              </div>
            </td>
            <td v-if="action">
              <div class="flex items-center space-x-1 px-6 py-3">
                <slot name="action" :row="item" />
              </div>
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td :colspan="headers.length">
              <SprEmptyState />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import SprAvatar from '@/components/avatar/avatar.vue';
import SprEmptyState from '@/components/empty-state/empty-state.vue';
import { tablePropTypes } from './table';
import { useTable } from './use-table';

const props = defineProps(tablePropTypes);
const { sortedData, sortData } = useTable(props);
</script>
