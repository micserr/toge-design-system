<template>
  <div :class="selectClasses.baseClasses">
    <label v-if="props.label" :for="id" :class="selectClasses.labelClasses">
      {{ props.label }}
    </label>

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
      <div @click="handleMenuToggle">
        <spr-input
          v-model="inputText"
          :class="{
            'spr-cursor-pointer': !props.searchable,
          }"
          :placeholder="props.placeholder"
          :readonly="!props.searchable"
          :disabled="props.disabled"
          autocomplete="off"
          :helper-text="props.helperText"
          :helper-icon="props.helperIcon"
          :display-helper="props.displayHelper"
          @keyup="handleSearch"
        >
          <template #icon>
            <div class="spr-flex spr-items-center spr-gap-1">
              <Icon
                v-if="props.clearable && inputText"
                class="spr-cursor-pointer"
                icon="ph:x"
                @click.stop="handleClear"
              />
              <Icon icon="ph:caret-down" />
            </div>
          </template>
        </spr-input>

        <select
          v-if="selectMenuList && selectMenuList.length"
          :value="Array.isArray(selectModel) ? selectModel[0] : selectModel"
          data-testid="qa-hidden-select"
          tabindex="-1"
          aria-hidden="true"
          hidden
        >
          <option v-for="item in selectMenuList" :key="item.value" :value="item.value">
            {{ item.text }}
          </option>
        </select>
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
          class="spr-grid spr-max-h-[300px] spr-gap-0.5 spr-overflow-y-auto spr-overflow-x-hidden spr-p-2"
        >
          <template v-if="isSearching">
            <template v-if="!props.disabledLocalSearch">
              <template v-if="filteredSelectMenuList.length > 0">
                <spr-list
                  v-model="selectedListItems"
                  :menu-list="filteredSelectMenuList"
                  :group-items-by="props.groupItemsBy"
                  :pre-selected-items="Array.isArray(selectModel) ? selectModel.flat() : [selectModel]"
                  @update:model-value="handleSelectedItem"
                />
              </template>
              <template v-else>
                <div class="spr-flex spr-items-center spr-justify-center spr-p-2 spr-text-center">
                  <span class="spr-body-sm-regular spr-m-0">No results found</span>
                </div>
              </template>
            </template>
            <template v-else>
              <template v-if="selectMenuList.length > 0">
                <spr-list
                  v-model="selectedListItems"
                  :menu-list="selectMenuList"
                  :group-items-by="props.groupItemsBy"
                  :pre-selected-items="Array.isArray(selectModel) ? selectModel.flat() : [selectModel]"
                  @update:model-value="handleSelectedItem"
                />
              </template>
              <template v-else>
                <div class="spr-flex spr-items-center spr-justify-center spr-p-2 spr-text-center">
                  <span class="spr-body-sm-regular spr-m-0">No results found</span>
                </div>
              </template>
            </template>
          </template>
          <template v-else>
            <template v-if="selectMenuList.length > 0">
              <spr-list
                v-model="selectedListItems"
                :menu-list="selectMenuList"
                :group-items-by="props.groupItemsBy"
                :pre-selected-items="Array.isArray(selectModel) ? selectModel.flat() : [selectModel]"
                @update:model-value="handleSelectedItem"
              />
            </template>
            <template v-else>
              <div class="spr-flex spr-items-center spr-justify-center spr-p-2 spr-text-center">
                <span class="spr-body-sm-regular spr-m-0">No results found</span>
              </div>
            </template>
          </template>
        </div>
      </template>
    </Menu>
  </div>
</template>

<script lang="ts" setup>
import { Menu } from 'floating-vue';
import { Icon } from '@iconify/vue';

import 'floating-vue/dist/style.css';

import SprInput from '../input/input.vue';
import SprList from '../list/list.vue';

import { selectPropTypes, selectEmitTypes } from './select';

import { useSelect } from './use-select';

const props = defineProps(selectPropTypes);
const emit = defineEmits(selectEmitTypes);

const {
  selectClasses,
  selectPopperState,
  selectRef,
  selectModel,
  selectMenuList,
  filteredSelectMenuList,
  selectedListItems,
  inputText,
  isSelectPopperDisabled,
  isSearching,
  handleSelectedItem,
  handleSearch,
  handleClear,
  handleMenuToggle,
} = useSelect(props, emit);
</script>
