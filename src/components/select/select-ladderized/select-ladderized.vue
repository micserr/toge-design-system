<template>
  <div :class="ladderizedClasses.baseClasses">
    <label v-if="props.label" :for="props.id" :class="ladderizedClasses.labelClasses">
      {{ props.label }}
    </label>

    <Menu
      :shown="ladderizedSelectPopperState"
      aria-id="ladderized-select-wrapper"
      distance="4"
      :placement="props.placement"
      :triggers="[]"
      :popper-hide-triggers="[]"
      :auto-hide="false"
      :disabled="isLadderizedSelectPopperDisabled"
      :container="'#ladderized-select-wrapper'"
      :strategy="
        props.popperStrategy === 'fixed' || props.popperStrategy === 'absolute' ? props.popperStrategy : 'absolute'
      "
      :delay="0"
      :style="{
        position: props.wrapperPosition,
        width: props.width,
      }"
    >
      <div @click="handleOptionsToggle">
        <spr-input
          v-model="inputText"
          class="spr-cursor-pointer"
          :placeholder="props.placeholder"
          autocomplete="off"
          :helper-text="props.helperText"
          :helper-icon="props.helperIcon"
          :display-helper="props.displayHelper"
          readonly
          :disabled="props.disabled"
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

      <div id="ladderized-select-wrapper" :style="{ width: props.popperWidth }"></div>

      <template #popper>
        <div
          ref="ladderizedSelectRef"
          class="spr-grid spr-max-h-[300px] spr-gap-0.5 spr-overflow-y-auto spr-overflow-x-hidden"
        >
          <template v-if="ladderizedSelectOptions.length > 0">
            <spr-ladderized-list
              v-model="ladderizedSelectModel"
              :ladderized="true"
              :menu-list="ladderizedSelectOptions"
              :menu-level="ladderizedSelectModel.length"
              :remove-current-level-in-back-label="props.removeCurrentLevelInBackLabel"
              :searchable-menu="props.searchableOptions"
              :searchable-menu-placeholder="props.searchableOptionsPlaceholder"
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
  </div>
</template>

<script lang="ts" setup>
import { Menu } from 'floating-vue';
import { Icon } from '@iconify/vue';

import 'floating-vue/dist/style.css';

import SprInput from '@/components/input/input.vue';
import SprLadderizedList from '@/components/list/ladderized-list/ladderized-list.vue';

import { selectLadderizedPropTypes, selectLadderizedEmitTypes } from './select-ladderized';
import { useSelectLadderized } from './use-select-ladderized';

const props = defineProps(selectLadderizedPropTypes);
const emit = defineEmits(selectLadderizedEmitTypes);

const {
  ladderizedClasses,
  ladderizedSelectPopperState,
  ladderizedSelectRef,
  ladderizedSelectOptions,
  isLadderizedSelectPopperDisabled,
  ladderizedSelectModel,
  inputText,
  handleSelectedLadderizedItem,
  handleSearch,
  handleClear,
  handleOptionsToggle,
} = useSelectLadderized(props, emit);
</script>
