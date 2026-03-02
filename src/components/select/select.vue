<template>
  <div :class="selectClasses.baseClasses">
    <label v-if="props.label || props.supportingLabel" :for="props.id" :class="selectClasses.labelClasses">
      <span v-if="props.label">{{ props.label }}</span>
      <span v-if="props.supportingLabel" :class="selectClasses.supportingLabelClasses">
        {{ props.supportingLabel }}
      </span>
    </label>

    <Menu
      v-model:shown="selectPopperState"
      aria-id="select-wrapper"
      :distance="props.distance"
      :placement="props.placement"
      :triggers="props.triggers"
      :popper-triggers="props.popperTriggers"
      :auto-hide="props.autoHide"
      :disabled="isSelectPopperDisabled"
      :container="props.popperContainer ? props.popperContainer : `#select-popper-${props.id}`"
      :strategy="
        props.popperStrategy === 'fixed' || props.popperStrategy === 'absolute' ? props.popperStrategy : 'absolute'
      "
      :delay="0"
      :style="{
        position: props.wrapperPosition,
        width: props.width,
      }"
    >
      <div ref="selectRef">
        <div @click="!props.searchable ? (selectPopperState = !selectPopperState) : null">
          <spr-input
            :id="`input-${props.id}`"
            v-model="inputText"
            :class="{
              'spr-cursor-pointer': !props.searchable,
            }"
            :placeholder="props.placeholder"
            autocomplete="off"
            :helper-text="props.helperText"
            :helper-icon="props.helperIcon"
            :display-helper="props.displayHelper"
            :active="props.active"
            :readonly="!props.searchable"
            :disabled="props.disabled"
            :error="props.error"
            @keyup="handleSearch"
            @click="props.searchable ? (selectPopperState = true) : null"
          >
            <template #icon>
              <div
                :class="[
                  'spr-flex spr-items-center spr-gap-1',
                  {
                    'spr-cursor-pointer': !props.disabled,
                    'spr-cursor-not-allowed': props.disabled,
                  },
                ]"
              >
                <Icon v-if="props.clearable && inputText" icon="ph:x" @click.stop="handleClear" />
                <Icon v-if="props.inputLoader" icon="svg-spinners:270-ring" />
                <Icon v-else icon="ph:caret-down" />
              </div>
            </template>

            <template #helperMessage>
              <slot name="helperMessage" />
            </template>
          </spr-input>

          <!-- Hidden Select for QA automation -->
          <select
            v-if="selectOptions && selectOptions.length"
            :value="Array.isArray(selectModel) ? selectModel[0] : selectModel"
            data-testid="qa-hidden-select"
            tabindex="-1"
            aria-hidden="true"
            hidden
          >
            <option v-for="item in selectOptions" :key="item.value" :value="item.value">
              {{ item.text }}
            </option>
          </select>
        </div>

        <!-- This div used to poppulate popper menu -->
        <div
          :id="`select-popper-${props.id}`"
          :style="{
            width: props.popperWidth,
          }"
        ></div>
      </div>

      <template #popper>
        <div ref="selectPopperRef" class="spr-max-h-[300px] spr-overflow-y-auto spr-overflow-x-hidden">
          <spr-list
            v-model="selectedListItems"
            :menu-list="isSearching && !props.disabledLocalSearch ? filteredSelectOptions : selectOptions"
            :group-items-by="props.groupItemsBy"
            :pre-selected-items="Array.isArray(selectModel) ? selectModel.flat() : [selectModel]"
            :loading="props.optionsLoader"
            :infinite-scroll-loader="props.infiniteScrollLoader"
            :item-icon="props.itemIcon"
            :lozenge="props.lozenge"
            :avatar-variant="props.avatarVariant"
            :avatar-source="props.avatarSource"
            @update:model-value="handleSelectedItem"
          />
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
  selectPopperRef,
  selectModel,
  selectOptions,
  filteredSelectOptions,
  selectedListItems,
  inputText,
  isSelectPopperDisabled,
  isSearching,
  handleSelectedItem,
  handleSearch,
  handleClear,
} = useSelect(props, emit);

defineExpose({
  handleClear,
});
</script>
