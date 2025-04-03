<template>
  <Menu
    :shown="dropdownPopperState"
    aria-id="dropdown-wrapper"
    distance="4"
    :placement="props.placement"
    :triggers="[]"
    :popper-hide-triggers="[]"
    :auto-hide="false"
    :disabled="isDropdownPopperDisabled"
    :container="`#${props.id}`"
    :strategy="
      props.popperStrategy === 'fixed' || props.popperStrategy === 'absolute' ? props.popperStrategy : 'absolute'
    "
    :delay="0"
    :style="{
      position: props.wrapperPosition,
      width: props.width,
    }"
  >
    <div @click="dropdownPopperState = true">
      <slot />
    </div>

    <div
      :id="props.id"
      :style="{
        width: props.popperWidth,
      }"
    ></div>

    <template #popper>
      <div
        ref="dropdownRef"
        :class="[
          !props.ladderized && 'spr-p-2',
          'spr-grid spr-max-h-[300px] spr-gap-0.5 spr-overflow-y-auto spr-overflow-x-hidden',
        ]"
      >
        <template v-if="dropdownMenuList.length > 0">
          <spr-list
            v-if="!props.ladderized"
            v-model="selectedListItems"
            :menu-list="dropdownMenuList"
            :group-items-by="props.groupItemsBy"
            :multi-select="props.multiSelect"
            :pre-selected-items="dropdownValue"
            @update:model-value="handleSelectedItem"
          />
          <spr-ladderized-list
            v-else
            v-model="dropdownValue"
            :ladderized="props.ladderized"
            :menu-list="dropdownMenuList"
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
  </Menu>
</template>

<script lang="ts" setup>
import { Menu } from 'floating-vue';
import 'floating-vue/dist/style.css';
import { dropdownPropTypes, dropdownEmitTypes } from './dropdown';
import { useDropdown } from './use-dropdown';
import SprList from '../list/list.vue';
import SprLadderizedList from '../list/ladderized-list/ladderized-list.vue';
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
} = useDropdown(props, emit);
</script>
