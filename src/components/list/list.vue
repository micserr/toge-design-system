<template>
  <div class="spr-font-main">
    <template v-if="props.groupItemsBy">
      <div class="spr-grid spr-gap-2">
        <div v-for="(items, labelIndex) in groupedMenuList" :key="labelIndex" class="spr-grid spr-gap-0.5">
          <label v-if="labelIndex" class="spr-label-sm-regular spr-text-color-base spr-p-2">
            {{ labelIndex }}
          </label>
          <div
            v-for="(item, itemIndex) in items"
            :key="itemIndex"
            :class="getListItemClasses(item)"
            @click="handleSelectedItem(item)"
          >
            <spr-checkbox v-if="props.multiSelect" :checked="isItemSelected(item)" />
            <div class="spr-flex spr-w-full spr-items-center">
              <span class="spr-text-xs">{{ item.text }}</span>
            </div>
            <Icon
              v-if="isItemSelected(item) && !props.multiSelect"
              class="spr-text-color-brand-base spr-w-[1.39em]"
              icon="ph:check"
            />
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div
        v-for="(item, index) in initialMenuList"
        :key="index"
        :class="getListItemClasses(item)"
        @click="handleSelectedItem(item)"
      >
        <spr-checkbox v-if="props.multiSelect" :checked="isItemSelected(item)" />
        <div class="spr-flex spr-w-full spr-items-center">
          <span class="spr-text-xs">{{ item.text }}</span>
        </div>
        <Icon
          v-if="isItemSelected(item) && !props.multiSelect"
          class="spr-text-color-brand-base spr-w-[1.39em]"
          icon="ph:check"
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

const { initialMenuList, groupedMenuList, isItemSelected, getListItemClasses, handleSelectedItem } = useList(
  props,
  emit,
);
</script>
