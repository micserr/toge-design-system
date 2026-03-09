<template>
  <div :class="ladderizedClasses.baseClasses">
    <label v-if="props.label || props.supportingLabel" :for="props.id" :class="ladderizedClasses.labelClasses">
      <span v-if="props.label">{{ props.label }}</span>
      <span v-if="props.supportingLabel" :class="ladderizedClasses.supportingLabelClasses">
        {{ props.supportingLabel }}
      </span>
    </label>

    <Menu
      v-model:shown="ladderizedSelectPopperState"
      aria-id="ladderized-select-wrapper"
      :distance="props.distance"
      :placement="props.placement"
      :triggers="props.triggers"
      :popper-triggers="props.popperTriggers"
      :auto-hide="props.autoHide"
      :disabled="isLadderizedSelectPopperDisabled"
      :container="props.popperContainer ? props.popperContainer : `#ladderized-select-popper-${props.id}`"
      :strategy="
        props.popperStrategy === 'fixed' || props.popperStrategy === 'absolute' ? props.popperStrategy : 'absolute'
      "
      :delay="0"
      :style="{
        position: props.wrapperPosition,
        width: props.width,
      }"
    >
      <div ref="ladderizedSelectState">
        <div @click="ladderizedSelectPopperState = !ladderizedSelectPopperState">
          <spr-input
            :id="`input-${props.id}`"
            v-model="inputText"
            class="spr-cursor-pointer"
            :placeholder="props.placeholder"
            autocomplete="off"
            :helper-text="props.helperText"
            :helper-icon="props.helperIcon"
            :display-helper="props.displayHelper"
            :readonly="!props.writableInputText"
            :active="props.active"
            :disabled="props.disabled"
            :error="props.error"
            @blur="handleInputChange"
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
        </div>

        <!-- This div used to poppulate popper menu -->
        <div :id="`ladderized-select-popper-${props.id}`" :style="{ width: props.popperWidth }"></div>
      </div>

      <template #popper>
        <div ref="ladderizedSelectPopperRef" class="spr-max-h-[300px] spr-overflow-y-auto spr-overflow-x-hidden">
          <template v-if="ladderizedSelectOptions.length > 0">
            <spr-ladderized-list
              v-model="ladderizedSelectModel"
              :ladderized="true"
              :menu-list="ladderizedSelectOptions"
              :menu-level="ladderizedSelectModel.length"
              :remove-current-level-in-back-label="props.removeCurrentLevelInBackLabel"
              :searchable-menu="props.searchableOptions"
              :searchable-menu-placeholder="props.searchableOptionsPlaceholder"
              :loading="props.optionsLoader"
              :infinite-scroll-loader="props.infiniteScrollLoader"
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

import { selectLadderizedPropTypes, selectLadderizedEmitTypes, SelectLadderizedEmitFn } from './select-ladderized';
import { useSelectLadderized } from './use-select-ladderized';

const props = defineProps(selectLadderizedPropTypes);
const emit = defineEmits(selectLadderizedEmitTypes);

const {
  ladderizedClasses,
  ladderizedSelectState,
  ladderizedSelectPopperState,
  ladderizedSelectPopperRef,
  ladderizedSelectOptions,
  isLadderizedSelectPopperDisabled,
  ladderizedSelectModel,
  inputText,
  handleSelectedLadderizedItem,
  handleClear,
  handleInputChange,
} = useSelectLadderized(props, emit as SelectLadderizedEmitFn);
</script>
