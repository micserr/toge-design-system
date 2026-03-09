<template>
  <Menu
    v-model:shown="dropdownPopperState"
    aria-id="dropdown-wrapper"
    :distance="props.distance"
    :placement="props.placement"
    :triggers="props.triggers"
    :popper-triggers="props.popperTriggers"
    :auto-hide="props.autoHide"
    :disabled="isDropdownPopperDisabled"
    :container="props.popperContainer ? props.popperContainer : `#${props.id}`"
    :strategy="
      props.popperStrategy === 'fixed' || props.popperStrategy === 'absolute' ? props.popperStrategy : 'absolute'
    "
    :delay="0"
    :style="{
      position: props.wrapperPosition,
      width: props.width,
    }"
  >
    <div class="dropdown-slot">
      <slot />
    </div>

    <div
      :id="props.id"
      :style="{
        width: props.popperWidth,
      }"
    ></div>

    <template #popper>
      <template v-if="$slots.popper">
        <div
          :class="['spr-overflow-y-auto spr-overflow-x-hidden', !props.noPadding && 'spr-p-4']"
          :style="{
            width: props.popperInnerWidth,
          }"
        >
          <slot name="popper" />
        </div>
      </template>
      <template v-else>
        <div
          ref="dropdownRef"
          :class="[
            'spr-grid spr-max-h-[300px] spr-gap-0.5 spr-overflow-y-auto spr-overflow-x-hidden',
            !props.ladderized || isLadderizedSearch,
          ]"
          :style="{
            width: props.popperInnerWidth,
          }"
        >
          <template v-if="dropdownMenuList.length > 0">
            <spr-list
              v-if="!props.ladderized || isLadderizedSearch"
              v-model="selectedListItems"
              :menu-list="dropdownMenuList"
              :searchable-menu="props.searchableMenu"
              :group-items-by="props.groupItemsBy"
              :multi-select="props.multiSelect"
              :pre-selected-items="dropdownValue"
              :no-check="props.noCheckInList"
              :lozenge="props.lozenge"
              @update:model-value="handleSelectedItem"
            />
            <spr-ladderized-list
              v-else
              v-model="dropdownValue"
              :ladderized="props.ladderized"
              :menu-list="dropdownMenuList"
              :searchable-menu="props.searchableMenu"
              :remove-current-level-in-back-label="removeCurrentLevelInBackLabel"
              @update:model-value="handleSelectedLadderizedItem"
            />
          </template>
          <template v-else>
            <div class="spr-flex spr-items-center spr-justify-center spr-p-2 spr-text-center">
              <span class="spr-body-sm-regular spr-m-0">No results found</span>
            </div>
          </template>
        </div>
      </template>
    </template>
  </Menu>
</template>

<script lang="ts" setup>
import { Menu } from 'floating-vue';

import 'floating-vue/dist/style.css';

import SprList from '../list/list.vue';
import SprLadderizedList from '../list/ladderized-list/ladderized-list.vue';

import { dropdownPropTypes, dropdownEmitTypes } from './dropdown';

import { useDropdown } from './use-dropdown';

const props = defineProps(dropdownPropTypes);
const emit = defineEmits(dropdownEmitTypes);

const {
  dropdownPopperState,
  dropdownRef,
  dropdownMenuList,
  isDropdownPopperDisabled,
  selectedListItems,
  handleSelectedItem,
  handleSelectedLadderizedItem,
  dropdownValue,
  removeCurrentLevelInBackLabel,
  isLadderizedSearch,
  showDropdown,
  hideDropdown,
} = useDropdown(props, emit);

defineExpose({
  showDropdown,
  hideDropdown,
});
</script>
