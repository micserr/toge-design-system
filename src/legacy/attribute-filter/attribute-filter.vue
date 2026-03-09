<template>
  <Menu
    :shown="isFilterActive"
    aria-id="attribute_filter_wrapper"
    :distance="props.distance"
    :placement="props.placement"
    :triggers="props.triggers"
    :popper-triggers="props.popperTriggers"
    :auto-hide="props.autoHide"
    :disabled="props.disabled"
    :container="`#${props.id}`"
    :strategy="
      props.popperStrategy === 'fixed' || props.popperStrategy === 'absolute' ? props.popperStrategy : 'absolute'
    "
    :delay="0"
    :style="{
      position: props.wrapperPosition,
      width: props.width,
    }"
    @hide="handleClosePopper"
    @show="handleShowPopper"
  >
    <div @click="handleFilterTrigger">
      <slot>
        <spr-chips
          :label="props.filterLabel"
          :active="isFilterActive"
          icon="ph:funnel-simple"
          :badge="props.showSelectedFilterCount"
          :badge-text="props.selectedFilterCount ?? savedFilters.length.toString()"
          :badge-variant="props.badgeVariant"
          :closable="props.clearable"
          :disabled="props.disabled"
          @close="handleClear"
        />
      </slot>
    </div>

    <div
      :id="props.id"
      :style="{
        width: props.popperWidth,
      }"
    ></div>
    <template #popper="{ hide }">
      <div
        id="attribute_filter_popper"
        :style="{
          width: props.popperInnerWidth,
        }"
      >
        <slot name="header">
          <div
            id="attribute_filter_header"
            class="spr-border-color-weak spr-flex spr-items-center spr-justify-between spr-border-x-0 spr-border-b spr-border-t-0 spr-border-solid spr-px-size-spacing-xs spr-py-size-spacing-2xs"
          >
            <span class="spr-text-color-strong spr-text-300 spr-font-medium"> {{ props.headerLabel }} </span>
            <Icon
              icon="ph:x"
              width="20px"
              height="20px"
              class="spr-text-color-weak spr-cursor-pointer"
              @click="hide()"
            />
          </div>
        </slot>
        <div
          v-if="props.searchable"
          id="attribute_filter_subheader"
          class="spr-border-color-weak spr-border-x-0 spr-border-b spr-border-t-0 spr-border-solid spr-px-size-spacing-xs spr-py-size-spacing-2xs"
        >
          <spr-input-search
            v-model="searchModel"
            label=""
            placeholder="Search..."
            class="!spr-py-0"
            @focus="isSearchFocused = true"
            @blur="isSearchFocused = false"
          />
        </div>
        <slot name="actions"> </slot>
        <slot name="body">
          <div
            v-if="!noList"
            id="attribute_filter_body"
            ref="filterDropdownRef"
            class="spr-max-h-[250px] spr-overflow-y-auto"
          >
            <spr-list
              v-model="selectedFilters"              
              :menu-list="attributeFilterList"
              :multi-select="props.multiselect"
              @update:model-value="handleOnSelect"
            />
          </div>
        </slot>
        <slot name="footer">
          <div
            id="attribute_filter_footer"
            class="spr-border-color-weak spr-flex spr-items-center spr-justify-end spr-gap-size-spacing-3xs spr-border-x-0 spr-border-b-0 spr-border-t spr-border-solid spr-px-size-spacing-xs spr-py-size-spacing-2xs"
          >
            <spr-button variant="secondary" size="medium" @click="isFilterActive = false"> Cancel </spr-button>
            <spr-button variant="primary" size="medium" tone="success" @click="handleSave"> Save </spr-button>
          </div>
        </slot>
      </div>
    </template>
  </Menu>
</template>
<script lang="ts" setup>
import { Menu } from 'floating-vue';
import { attributeFilterEmitTypes, attributeFilterPropTypes } from './attribute-filter';
import { useAttributeFilter } from './use-attribute-filter';
import SprChips from '../chips/chips.vue';
import { Icon } from '@iconify/vue';
import SprInputSearch from '../input/input-search/input-search.vue';
import SprList from '../list/list.vue';
import SprButton from '../button/button.vue';

import 'floating-vue/dist/style.css';

const props = defineProps(attributeFilterPropTypes);
const emit = defineEmits(attributeFilterEmitTypes);
const searchModel = defineModel<string>('search', {
  default: '',
});
const {
  isFilterActive,
  isSearchFocused,
  attributeFilterList,
  handleFilterTrigger,
  selectedFilters,
  savedFilters,
  handleClosePopper,
  handleShowPopper,
  handleSave,  
  handleOnSelect,
  filterDropdownRef,
  handleClear,
} = useAttributeFilter(props, emit, searchModel);
</script>
