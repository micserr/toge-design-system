<template>
  <div class="spr-font-main">
    <div
      v-if="props.searchableMenu"
      :class="[
        'spr-sticky spr-z-20',
        'spr-grid spr-gap-3 spr-bg-white-50 spr-p-size-spacing-3xs',
        'spr-border-color-weak spr-border spr-border-x-0 spr-border-b spr-border-t-0 spr-border-solid',
      ]"
      :style="{
        top:
          typeof props.stickySearchOffset === 'number'
            ? props.stickySearchOffset + 'px'
            : String(props.stickySearchOffset),
      }"
    >
      <spr-input-search v-model="searchText" :placeholder="props.searchableMenuPlaceholder" autocomplete="off" />
    </div>

    <div class="spr-p-size-spacing-3xs">
      <template v-if="props.groupItemsBy">
        <template v-if="groupedMenuList && groupedMenuList.length > 0">
          <div class="spr-grid spr-gap-2">
            <div v-for="(list, listIndex) in groupedMenuList" :key="listIndex" class="spr-grid spr-gap-0.5">
              <div
                v-if="list.groupLabel !== 'no-group'"
                class="spr-label-xs-medium spr-text-color-base spr-px-size-spacing-4xs spr-py-size-spacing-3xs spr-uppercase"
              >
                <span>
                  {{ list.groupLabel }}
                </span>
              </div>
              <div
                v-for="(item, itemIndex) in list.items"
                :key="itemIndex"
                :class="getListItemClasses(item)"
                @click="handleSelectedItem(item)"
              >
                <spr-checkbox v-if="props.multiSelect" :checked="isItemSelected(item)" />
                <template v-if="props.lozenge">
                  <spr-lozenge
                    :label="item.text || (item.lozengeProps?.label as string)"
                    :tone="item.lozengeProps?.tone as string & (typeof LOZENGE_TONE)[number]"
                    :fill="item.lozengeProps?.fill as boolean"
                    :url="item.lozengeProps?.url as string"
                    :icon="item.icon || (item.lozengeProps?.icon as string)"
                    :postfix-icon="item.lozengeProps?.postfixIcon as string"
                  />
                </template>
                <template v-else>
                  <div :class="[item.textColor, 'spr-flex spr-flex-row spr-items-center spr-gap-size-spacing-3xs']">
                    <span v-if="item.icon" :class="[item.iconColor, 'spr-mt-[2px]']">
                      <icon :icon="item.icon" width="20px" height="20px" />
                    </span>
                    <div class="spr-flex spr-flex-auto spr-flex-col spr-justify-start">
                      <span class="spr-text-left spr-text-xs">
                        {{ item.text }}
                      </span>
                      <span v-if="item.subtext" class="spr-body-xs-regular spr-text-color-base spr-text-left">
                        {{ item.subtext }}
                      </span>
                    </div>
                  </div>
                  <template v-if="props.ladderized">
                    <template v-if="item.sublevel && item.sublevel?.length > 0">
                      <Icon class="spr-text-color-weak spr-size-4" icon="ph:caret-right" />
                    </template>
                    <template v-else>
                      <Icon
                        v-if="isItemSelected(item) && !props.noCheck"
                        class="spr-text-color-brand-base spr-w-[1.39em]"
                        icon="ph:check"
                      />
                    </template>
                  </template>
                  <template v-else>
                    <Icon
                      v-if="isItemSelected(item) && !props.noCheck && !props.multiSelect"
                      class="spr-text-color-brand-base spr-w-[1.39em]"
                      icon="ph:check"
                    />
                  </template>
                </template>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <div v-if="props.loading" class="spr-skeletal-loader spr-h-8 spr-w-full spr-rounded-md" />
          <div v-else class="spr-flex spr-items-center spr-justify-center spr-p-2 spr-text-center">
            <span class="spr-body-sm-regular spr-m-0">No results found</span>
          </div>
        </template>
      </template>

      <template v-else>
        <template v-if="localizedMenuList && localizedMenuList.length > 0">
          <div
            v-for="(item, index) in localizedMenuList"
            :key="index"
            :class="getListItemClasses(item)"
            @click="handleSelectedItem(item)"
          >
            <spr-checkbox v-if="props.multiSelect" :disabled="item.disabled" :checked="isItemSelected(item)" />
            <template v-if="props.lozenge">
              <spr-lozenge
                :label="item.text || (item.lozengeProps?.label as string)"
                :tone="item.lozengeProps?.tone as string & (typeof LOZENGE_TONE)[number]"
                :fill="item.lozengeProps?.fill as boolean"
                :url="item.lozengeProps?.url as string"
                :icon="item.lozengeProps?.icon as string"
                :postfix-icon="item.lozengeProps?.postfixIcon as string"
              />
            </template>
            <template v-else>
              <div :class="[item.textColor, 'spr-flex spr-flex-row spr-items-center spr-gap-size-spacing-3xs']">
                <span v-if="item.icon" :class="[item.iconColor, 'spr-mt-[2px]']"
                  ><icon :icon="item.icon" width="20px" height="20px"
                /></span>
                <div
                  :class="[
                    'spr-flex spr-flex-auto spr-flex-col spr-justify-start',
                    { 'spr-text-color-disabled': item.disabled },
                  ]"
                >
                  <span class="spr-text-left spr-text-xs">{{ item.text }}</span>
                  <span
                    v-if="item.subtext"
                    :class="[
                      'spr-body-xs-regular spr-text-color-base spr-text-left',
                      { 'spr-text-color-disabled': item.disabled },
                    ]"
                  >
                    {{ item.subtext }}
                  </span>
                </div>
              </div>
              <template v-if="props.ladderized">
                <template v-if="item.sublevel && item.sublevel?.length > 0">
                  <Icon class="spr-text-color-weak spr-size-4" icon="ph:caret-right" />
                </template>
                <template v-else>
                  <Icon
                    v-if="isItemSelected(item) && !props.noCheck"
                    class="spr-text-color-brand-base spr-w-[1.39em]"
                    icon="ph:check"
                  />
                </template>
              </template>
              <template v-else>
                <Icon
                  v-if="isItemSelected(item) && !props.noCheck && !props.multiSelect"
                  class="spr-text-color-brand-base spr-w-[1.39em]"
                  icon="ph:check"
                />
              </template>
            </template>
          </div>
        </template>
        <template v-else>
          <div v-if="props.loading" class="spr-skeletal-loader spr-h-8 spr-w-full spr-rounded-md" />
          <div v-else class="spr-flex spr-items-center spr-justify-center spr-p-2 spr-text-center">
            <span class="spr-body-sm-regular spr-m-0">No results found</span>
          </div>
        </template>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';

import SprCheckbox from '@/components/checkbox/checkbox.vue';
import SprInputSearch from '@/components/input/input-search/input-search.vue';
import SprLozenge from '@/components/lozenge/lozenge.vue';

import { LOZENGE_TONE } from '@/components/lozenge/lozenge';

import { listPropTypes, listEmitTypes } from './list';
import { useList } from './use-list';

const props = defineProps(listPropTypes);
const emit = defineEmits(listEmitTypes);

const { searchText, localizedMenuList, groupedMenuList, isItemSelected, getListItemClasses, handleSelectedItem } =
  useList(props, emit);
</script>
