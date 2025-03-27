<template>
  <Menu
    v-model:shown="isFilterOpen"
    aria-id="filter-option-wrapper"
    distance="4"
    placement="bottom"
    :triggers="['click']"
    :popper-hide-triggers="[]"
    :container="`#${uniqueId}`"
    :style="{
      width: props.width,
      position: 'relative',
    }"
    :auto-hide="false"
  >
    <span
      :id="uniqueId"
      :style="{
        width: props.width,
        position: 'relative',
      }"
    >
      <slot>
        <spr-input v-model="searchValue" type="text" :placeholder="placeholder" :label="label" :disabled="disabled">
          <template #icon>
            <Icon icon="ph:magnifying-glass" />
          </template>
        </spr-input>
      </slot>
    </span>

    <template #popper>
      <div :class="filterClass.MenuOptionClasses">
        <div v-if="filterMenu.length > 0 && filterable" class="spr-flex spr-items-center spr-gap-2">
          <div class="spr-space-x-size-spacing-3xs spr-space-y-size-spacing-3xs">
            <template v-for="menu in filterMenu" :key="menu.field">
              <spr-chips
                v-if="mappedFilterMenuList[menu.field].count"
                :label="mappedFilterMenuList[menu.field].columnName"
                icon="ph:funnel-simple"
              />
            </template>
          </div>

          <Menu
            v-model:shown="isAddFilterVisible"
            aria-id="filter-menu-wrapper"
            distance="4"
            placement="right-start"
            :triggers="['click']"
            :auto-hide="false"
          >
            <spr-button has-icon variant="secondary" size="small">
              <Icon icon="ph:faders-horizontal" />
            </spr-button>

            <template #popper>
              <div :class="filterClass.PopperWrapperClasses">
                <div :class="filterClass.PopperHeaderClasses">
                  Add Filter
                  <span class="spr-cursor-pointer" @click="isAddFilterVisible = false">
                    <Icon icon="ph:x" />
                  </span>
                </div>
                <div :class="filterClass.PopperContentClasses">
                  <Menu
                    v-for="menu in filterMenu"
                    :key="menu.field"
                    v-model:shown="mappedFilterMenuList[menu.field].isFilterVisible"
                    aria-id="filter-menu-wrapper"
                    placement="right-start"
                    :triggers="['click']"
                    :auto-hide="false"
                  >
                    <spr-chips
                      :active="mappedFilterMenuList[menu.field].isFilterVisible"
                      :label="mappedFilterMenuList[menu.field].columnName"
                      :badge="getSelectedItemPerFilterMenu(menu.field) > 0"
                      :badge-text="getSelectedItemPerFilterMenu(menu.field).toString()"
                      badge-variant="danger"
                      icon="ph:funnel-simple"
                      @click="getMappedFilterData(menu.field)"
                    />

                    <template #popper>
                      <div :class="['spr-w-[320px]', filterClass.PopperWrapperClasses]">
                        <div :class="filterClass.PopperHeaderClasses">
                          Add Filter
                          <span
                            class="spr-cursor-pointer"
                            @click="mappedFilterMenuList[menu.field].isFilterVisible = false"
                          >
                            <Icon icon="ph:x" />
                          </span>
                        </div>

                        <div class="spr-p-size-spacing-2xs">
                          <spr-input v-model="filterMenuSearchvalue" type="text" placeholder="Select Employees">
                            <template #icon>
                              <Icon icon="ph:magnifying-glass" />
                            </template>
                          </spr-input>
                        </div>

                        <div
                          v-if="getSelectedFilterMenuOption.length > 0"
                          class="spr-space-x-2 spr-space-y-2 spr-p-size-spacing-2xs"
                        >
                          <spr-chips
                            v-for="(FilterMenuOption, i) in getSelectedFilterMenuOption"
                            :key="i"
                            :label="FilterMenuOption.text"
                            :active="true"
                            closable
                            @close="handleRemoveFilterValues(FilterMenuOption.value)"
                          />
                        </div>
                        <div
                          v-if="!props.loading && getFiltereredMenuOption.length > 0"
                          ref="filterMenuOptionList"
                          class="spr-max-h-[264px] spr-space-y-size-spacing-6xs spr-overflow-auto spr-p-size-spacing-2xs"
                        >
                          <div
                            v-for="option in getFiltereredMenuOption"
                            :key="option.value"
                            :class="[
                              filterClass.filterListClasses,
                              { 'spr-background-color-multiple-active': mappedMenuData[option.value].isSelected },
                            ]"
                          >
                            <spr-checkbox
                              v-model="mappedMenuData[option.value].isSelected"
                              class="spr-w-full"
                              :checked="mappedMenuData[option.value].isSelected"
                              :label="mappedMenuData[option.value].text"
                              :description="mappedMenuData[option.value].subtext"
                            />
                          </div>
                        </div>

                        <div v-else :class="filterClass.LoadingStateClasses">
                          <slot v-if="props.loading" name="loading"> loading... </slot>
                          <slot v-else name="empty"> No Result Found! </slot>
                        </div>

                        <div :class="filterClass.ActionButtonClasses">
                          <spr-button
                            variant="secondary"
                            size="small"
                            @click="mappedFilterMenuList[menu.field].isFilterVisible = false"
                          >
                            Cancel
                          </spr-button>
                          <spr-button size="small" tone="success" @click="saveSelectedFilter(menu.field)">
                            Save
                          </spr-button>
                        </div>
                      </div>
                    </template>
                  </Menu>
                </div>
              </div>
            </template>
          </Menu>
        </div>

        <spr-button variant="secondary" size="small" @click="selectAllOptions">Select All</spr-button>
      </div>

      <div
        v-if="getFiltereredOption.length > 0 && !filling"
        ref="filterOptionRef"
        class="spr-max-h-[264px] spr-space-y-size-spacing-6xs spr-overflow-auto spr-p-size-spacing-3xs"
      >
        <div
          v-for="option in getFiltereredOption"
          :key="option.value"
          :class="[
            filterClass.filterListClasses,
            { 'spr-background-color-multiple-active': mappedFilterOption[option.value].isSelected },
          ]"
        >
          <spr-checkbox
            v-model="mappedFilterOption[option.value].isSelected"
            class="spr-w-full"
            :checked="mappedFilterOption[option.value].isSelected"
            :label="mappedFilterOption[option.value].text"
            :description="mappedFilterOption[option.value].subtext"
          />
        </div>
      </div>
      <div v-else>
        <slot v-if="filling" name="loading-state">
          <div :class="filterClass.LoadingStateClasses">Loading...</div>
        </slot>
        <slot v-else name="empty-state">
          <div :class="filterClass.LoadingStateClasses">Result not found!</div>
        </slot>
      </div>
    </template>
  </Menu>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { Menu } from 'floating-vue';
import SprInput from '@/components/input/input.vue';
import SprButton from '@/components/button/button.vue';
import SprChips from '@/components/chips/chips.vue';
import SprCheckbox from '@/components/checkbox/checkbox.vue';
import 'floating-vue/dist/style.css';
import { useFilter } from './use-filter';
import { filterPropTypes, filterEmitTypes } from './filter';

const props = defineProps(filterPropTypes);
const emit = defineEmits(filterEmitTypes);

const {
  isFilterOpen,
  searchValue,
  isAddFilterVisible,
  mappedFilterOption,
  getFiltereredOption,
  mappedMenuData,
  getSelectedFilterMenuOption,
  getFiltereredMenuOption,
  filterMenuSearchvalue,
  mappedFilterMenuList,
  filterClass,
  uniqueId,
  filterOptionRef,
  filterMenuOptionList,

  selectAllOptions,
  getMappedFilterData,
  saveSelectedFilter,
  getSelectedItemPerFilterMenu,
  handleRemoveFilterValues,
} = useFilter(props, emit);
</script>
