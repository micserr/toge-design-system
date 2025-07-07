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
      <div ref="multiSelectRef">
        <div @click="handleOptionsToggle">
          <spr-input
            :id="`input-${props.id}`"
            v-model="inputText"
            :class="{
              'spr-cursor-pointer': true,
            }"
            :placeholder="props.placeholder"
            autocomplete="off"
            :helper-text="props.helperText"
            :helper-icon="props.helperIcon"
            :display-helper="props.displayHelper"
            :active="props.active"
            :readonly="true"
            :disabled="props.disabled"
            :error="props.error"
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

            <template #helperMessage>
              <slot name="helperMessage" />
            </template>
          </spr-input>

          <!-- Hidden Select for QA automation -->
          <select v-if="multiSelectOptions && multiSelectOptions.length" v-model="multiSelectModel" multiple hidden>
            <option v-for="option in multiSelectOptions" :key="option.value" :value="option.value">
              {{ option.text }}
            </option>
          </select>
        </div>

        <!-- This div used to poppulate popper menu -->
        <div
          :id="props.id"
          :style="{
            width: props.popperWidth,
          }"
        ></div>
      </div>

      <template #popper>
        <div class="spr-grid spr-max-h-[300px] spr-gap-0.5 spr-overflow-y-auto spr-overflow-x-hidden spr-p-2">
          <template v-if="multiSelectOptions.length > 0">
            <spr-list
              v-model="multiSelectedListItems"
              :menu-list="multiSelectOptions"
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
  multiSelectOptions,
  multiSelectedListItems,
  inputText,
  isMultiSelectPopperDisabled,
  handleMultiSelectedItem,
  handleClear,
  handleOptionsToggle,
} = useMultiSelect(props, emit);
</script>
