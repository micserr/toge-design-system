<template>
  <div></div>
</template>
<!-- <template>
  <Menu
    :shown="selectPopperState"
    aria-id="select-wrapper"
    distance="4"
    :placement="props.placement"
    :triggers="[]"
    :popper-hide-triggers="[]"
    :auto-hide="false"
    :disabled="isSelectPopperDisabled"
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
    <div @click="selectPopperState = true">
      {{ selectedListItems }}

      <spr-input
        v-model="inputText"
        label="Select Numbers"
        :placeholder="props.placeholder"
        :readonly="props.readonly"
        :disabled="props.disabled"
        autocomplete="off"
      />
    </div>

    <div
      :id="props.id"
      :style="{
        width: props.popperWidth,
      }"
    ></div>

    <template #popper>
      <div
        ref="selectRef"
        :class="[
          (!props.ladderized || isLadderizedSearch) && 'spr-p-2',
          'spr-grid spr-max-h-[300px] spr-gap-0.5 spr-overflow-y-auto spr-overflow-x-hidden',
        ]"
      >
        <template v-if="selectMenuList.length > 0">
          <spr-list
            v-if="!props.ladderized || isLadderizedSearch"
            v-model="selectedListItems"
            :menu-list="selectMenuList"
            :group-items-by="props.groupItemsBy"
            :multi-select="props.multiSelect"
            :pre-selected-items="selectValue"
            @update:model-value="handleSelectedItem"
          />
          <spr-ladderized-list
            v-else
            v-model="selectValue"
            :ladderized="props.ladderized"
            :menu-list="selectMenuList"
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
  </Menu>
</template>

<script lang="ts" setup>
import { Menu } from 'floating-vue';

import 'floating-vue/dist/style.css';

import SprInput from '../../input/input.vue';
import SprList from '../../list/list.vue';
import SprLadderizedList from '../../list/ladderized-list/ladderized-list.vue';

import { selectPropTypes, selectEmitTypes } from './select-multiple';

import { useSelect } from './use-select-multiple';

const props = defineProps(selectPropTypes);
const emit = defineEmits(selectEmitTypes);

const {
  selectPopperState,
  selectRef,
  selectMenuList,
  isSelectPopperDisabled,
  selectedListItems,
  handleSelectedItem,
  handleSelectedLadderizedItem,
  selectValue,
  removeCurrentLevelInBackLabel,
  isLadderizedSearch,
  inputText,
} = useSelect(props, emit);
</script> -->
