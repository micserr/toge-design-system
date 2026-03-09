<template>
  <div :class="multiSelectClasses.baseClasses">
    <label v-if="props.label || props.supportingLabel" :for="props.id" :class="multiSelectClasses.labelClasses">
      <span v-if="props.label">{{ props.label }}</span>
      <span v-if="props.supportingLabel" :class="multiSelectClasses.supportingLabelClasses">
        {{ props.supportingLabel }}
      </span>
    </label>

    <Menu
      v-model:shown="multiSelectPopperState"
      aria-id="multi-select-wrapper"
      :distance="props.distance"
      :placement="props.placement"
      :triggers="props.triggers"
      :popper-triggers="props.popperTriggers"
      :auto-hide="props.autoHide"
      :disabled="isMultiSelectPopperDisabled"
      :container="props.popperContainer ? props.popperContainer : `#multi-select-${props.id}`"
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
        <div @click="multiSelectPopperState = !multiSelectPopperState">
          <template v-if="props.chipped">
            <div :class="multiSelectClasses.chippedInputTextBaseClasses">
              <div ref="chippedInputTextRef" :class="multiSelectClasses.chippedInputTextClasses">
                <div class="spr-h-auto spr-w-full">
                  <template v-if="multiSelectedListItems.length > 0">
                    <template v-if="!props.displaySelectedCountOnly">
                      <template v-for="item in multiSelectedListItems" :key="item.value">
                        <spr-chips
                          class="spr-m-1 spr-inline-block"
                          :label="String(item.text)"
                          closable
                          visible
                          @close="handleChippedRemoveItem(String(item.value))"
                        />
                      </template>
                    </template>
                    <template v-else>
                      <span
                        class="spr-text-color-supporting spr-px-3"
                        :aria-label="`${multiSelectedListItems.length} selected options`"
                      >
                        {{ multiSelectedListItems.length }} item{{ multiSelectedListItems.length === 1 ? '' : 's' }}
                        selected
                      </span>
                    </template>
                  </template>
                  <template v-else>
                    <span class="spr-placeholder spr-px-3 spr-text-gray-400">{{ props.placeholder }}</span>
                  </template>
                </div>
                <div :class="multiSelectClasses.chippedIconClasses">
                  <div
                    :class="[
                      'spr-flex spr-items-center spr-gap-1',
                      {
                        'spr-cursor-pointer': !props.disabled,
                        'spr-cursor-not-allowed': props.disabled,
                      },
                    ]"
                  >
                    <Icon
                      v-if="props.clearable && inputText"
                      icon="ph:x"
                      @click.stop="!props.disabled ? handleClear : null"
                    />
                    <Icon icon="ph:caret-down" />
                  </div>
                </div>
              </div>
            </div>
            <div v-if="props.displayHelper" :class="multiSelectClasses.chippedHelperContainerClasses">
              <div v-if="props.displayHelper" :class="multiSelectClasses.chippedHelperClasses">
                <slot name="helperMessage">
                  <Icon
                    v-if="props.helperIcon"
                    class="spr-h-5 spr-min-h-5 spr-w-5 spr-min-w-5"
                    :icon="props.helperIcon"
                  />
                  <span>{{ props.helperText }}</span>
                </slot>
              </div>
            </div>
          </template>
          <template v-else>
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
          </template>
        </div>

        <!-- Hidden Select for QA automation -->
        <select v-if="multiSelectOptions && multiSelectOptions.length" v-model="multiSelectModel" multiple hidden>
          <option v-for="option in multiSelectOptions" :key="option.value" :value="option.value">
            {{ option.text }}
          </option>
        </select>

        <!-- This div used to poppulate popper menu -->
        <div
          :id="`multi-select-${props.id}`"
          :style="{
            width: props.popperWidth,
          }"
        ></div>
      </div>

      <template #popper>
        <div ref="multipleSelectPopperRef" class="spr-max-h-[300px] spr-overflow-y-auto spr-overflow-x-hidden">
          <spr-list
            v-model="multiSelectedListItems"
            v-model:search-value="searchInput"
            :searchable-menu="props.searchable"
            searchable-menu-placeholder="Search"
            :menu-list="multiSelectOptions"
            :group-items-by="props.groupItemsBy"
            :pre-selected-items="Array.isArray(multiSelectModel) ? multiSelectModel.flat() : [multiSelectModel]"
            :loading="props.optionsLoader || props.loading"
            :infinite-scroll-loader="props.infiniteScrollLoader"
            :item-icon="props.itemIcon"
            :lozenge="props.lozenge"
            :supporting-display-text="props.supportingDisplayText"
            :display-list-item-selected="props.displayListItemSelected"
            :disabled-local-search="props.disabledLocalSearch"
            :disabled-unselected-items="props.disabledUnselectedItems"
            :allow-select-all="props.allowSelectAll"
            :avatar-variant="props.avatarVariant"
            :avatar-source="props.avatarSource"
            multi-select
            @update:model-value="handleMultiSelectedItem"
            @get-single-selected-item="emit('get-single-selected-item', $event)"
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

import SprInput from '../../input/input.vue';
import SprList from '../../list/list.vue';
import SprChips from '../../chips/chips.vue';

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
  searchInput,
  multipleSelectPopperRef,
  handleMultiSelectedItem,
  handleChippedRemoveItem,
  handleClear,
} = useMultiSelect(props, emit);

defineExpose({
  handleClear,
});
</script>
