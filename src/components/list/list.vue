<template>
  <div class="spr-font-main">
    <template v-if="props.groupItemsBy">
      <div class="spr-grid spr-gap-2">
        <div v-for="(list, listIndex) in groupedMenuList" :key="listIndex" class="spr-grid spr-gap-0.5">
          <div v-if="list.groupLabel !== 'no-group'" class="spr-py-size-spacing-3xs spr-px-size-spacing-4xs spr-label-xs-medium spr-text-color-base spr-uppercase">
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
            <div class="spr-flex-auto spr-flex spr-flex-col spr-justify-start">
              <span class="spr-text-xs spr-text-left">{{ item.text }}</span>
              <span v-if="item.subtext" class="spr-body-xs-regular spr-text-color-base spr-text-left">{{ item.subtext }}</span>
            </div>
            <Icon
              v-if="isItemSelected(item) && !props.multiSelect"
              class="spr-text-color-brand-base spr-w-[1.39em]"
              icon="ph:check"
            />
            <Icon
              v-else-if="props.ladderized && item.sublevel && item.sublevel?.length > 0"
              class="spr-text-color-weak spr-size-4"
              icon="ph:caret-right"
            />
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div
        v-for="(item, index) in props.menuList"
        :key="index"
        :class="getListItemClasses(item)"
        @click="handleSelectedItem(item)"
      >
        <spr-checkbox v-if="props.multiSelect" :checked="isItemSelected(item)" />
        <div class="spr-flex-auto spr-flex spr-flex-col spr-justify-start">
          <span class="spr-text-xs spr-text-left">{{ item.text }}</span>
          <span v-if="item.subtext" class="spr-body-xs-regular spr-text-color-base spr-text-left">{{ item.subtext }}</span>
        </div>
        <Icon
          v-if="isItemSelected(item) && !props.multiSelect"
          class="spr-text-color-brand-base spr-w-[1.39em]"
          icon="ph:check"
        />
        <Icon
          v-else-if="props.ladderized && item.sublevel && item.sublevel?.length > 0"
          class="spr-text-color-weak spr-size-4"
          icon="ph:caret-right"
        />
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';

import { listPropTypes, listEmitTypes } from './list';
import { useList } from './use-list';

import SprCheckbox from '../checkbox/checkbox.vue';

const props = defineProps(listPropTypes);
const emit = defineEmits(listEmitTypes);

const { groupedMenuList, isItemSelected, getListItemClasses, handleSelectedItem } = useList(
  props,
  emit,
);
</script>
