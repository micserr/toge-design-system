<template>
  <Menu
    v-model:shown="dropdownPopperState"
    aria-id="dropdown-wrapper"
    distance="4"
    :placement="props.placement"
    :triggers="[]"
    :popper-hide-triggers="[]"
    :auto-hide="false"
    container="#dropdown-slot"
    strategy="fixed"
    :style="{
      width: props.width,
    }"
  >
    <div
      id="dropdown-slot"
      class="spr-relative"
      :style="{
        width: props.width,
      }"
      @click="dropdownPopperState = true"
    >
      <slot />
    </div>

    <template #popper>
      <div ref="dropdownRef" class="spr-grid spr-max-h-[300px] spr-gap-0.5 spr-overflow-y-auto spr-p-2">
        <template v-if="dropdownMenuList.length > 0">
          <SprList
            v-model="preSelectedItems"
            :menu-list="dropdownMenuList"
            :group-items-by="props.groupItemsBy"
            :multi-select="props.multiSelect"
            @get-selected-item="handleSelectedItem"
          />
        </template>
        <template v-else>
          <div class="spr-flex spr-items-center spr-p-2">
            <p class="spr-body-sm-regular spr-m-0">No results found</p>
          </div>
        </template>
      </div>
    </template>
  </Menu>
</template>

<script lang="ts" setup>
import { Menu } from 'floating-vue';

import 'floating-vue/dist/style.css';

import { dropdownPropTypes, dropdownEmitTypes } from './dropdown';
import { useDropdown } from './use-dropdown';

import SprList from '../list/list.vue';

const props = defineProps(dropdownPropTypes);
const emit = defineEmits(dropdownEmitTypes);

const { dropdownPopperState, dropdownRef, preSelectedItems, dropdownMenuList, handleSelectedItem } = useDropdown(
  props,
  emit,
);
</script>
