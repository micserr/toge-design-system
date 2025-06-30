<template>
  <div :class="multiSelectClasses.baseClasses">
    <label v-if="props.label" :for="id" :class="multiSelectClasses.labelClasses">
      {{ props.label }}
    </label>

    <Menu
      :shown="multiSelectPopperState"
      aria-id="multi-select-wrapper"
      distance="4"
      :placement="props.placement"
      :triggers="[]"
      :popper-hide-triggers="[]"
      :auto-hide="false"
      :disabled="isMultiSelectPopperDisabled"
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
      </div>

      <div
        :id="props.id"
        :style="{
          width: props.popperWidth,
        }"
      ></div>

      <select
        :id="`${props.id}-multiple-select`"
        tabindex="-1"
        aria-hidden="true"
        data-qa="multi-select-hidden"
        multiple
        hidden
      >
        <option v-for="item in multiSelectedListItems" :key="item.value" :value="item.value" selected>
          {{ item.text }}
        </option>
      </select>

      <template #popper>
        <div
          ref="multiSelectRef"
          class="spr-grid spr-max-h-[300px] spr-gap-0.5 spr-overflow-y-auto spr-overflow-x-hidden spr-p-2"
        >
          <template v-if="isSearching">
            <template v-if="!props.disabledLocalSearch">
              <template v-if="filteredMultiSelectMenuList.length > 0">
                <spr-list
                  v-model="multiSelectedListItems"
                  :menu-list="filteredMultiSelectMenuList"
                  :group-items-by="props.groupItemsBy"
                  :pre-selected-items="Array.isArray(multiSelectModel) ? multiSelectModel.flat() : [multiSelectModel]"
                  multi-select
                  @update:model-value="handleMultiSelectedItem"
                />
              </template>
              <template v-else>
                <div class="spr-flex spr-items-center spr-justify-center spr-p-2 spr-text-center">
                  <span class="spr-body-sm-regular spr-m-0">No results found</span>
                </div>
              </template>
            </template>
            <template v-else>
              <template v-if="multiSelectMenuList.length > 0">
                <spr-list
                  v-model="multiSelectedListItems"
                  :menu-list="multiSelectMenuList"
                  :group-items-by="props.groupItemsBy"
                  :pre-selected-items="Array.isArray(multiSelectModel) ? multiSelectModel.flat() : [multiSelectModel]"
                  multi-select
                  @update:model-value="handleMultiSelectedItem"
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
            <template v-if="multiSelectMenuList.length > 0">
              <spr-list
                v-model="multiSelectedListItems"
                :menu-list="multiSelectMenuList"
                :group-items-by="props.groupItemsBy"
                :pre-selected-items="Array.isArray(multiSelectModel) ? multiSelectModel.flat() : [multiSelectModel]"
                multi-select
                @update:model-value="handleMultiSelectedItem"
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

import SprInput from '../../input/input.vue';
import SprList from '../../list/list.vue';

import { multiSelectPropTypes, multiSelectEmitTypes } from './select-multiple';

import { useMultiSelect } from './use-select-multiple';

const props = defineProps(multiSelectPropTypes);
const emit = defineEmits(multiSelectEmitTypes);

const {
  multiSelectClasses,
  multiSelectPopperState,
  multiSelectRef,
  multiSelectModel,
  multiSelectMenuList,
  filteredMultiSelectMenuList,
  multiSelectedListItems,
  inputText,
  isMultiSelectPopperDisabled,
  isSearching,
  handleMultiSelectedItem,
  handleSearch,
  handleClear,
  handleMenuToggle,
} = useMultiSelect(props, emit);
</script>
