<template>
  <div :class="filterClass.MainClasses">
    <spr-input
      v-model="searchValue"
      type="text"
      :placeholder="placeholder"
      :label="label"
      :disabled="disabled"
      @click="toggleDropdown"
    >
      <template #icon>
        <Icon icon="ph:magnifying-glass" />
      </template>
    </spr-input>

    <div v-if="isFilterOpen" :class="filterClass.MainOptionWrapperClasses">
      <div :class="filterClass.MenuOptionClasses">
        <div v-if="filterMenu.length > 0 && filterable" class="spr-flex spr-items-center spr-gap-2">
          <Menu
            v-model:shown="isAddFilterVisible"
            aria-id="filter-option-wrapper"
            distance="4"
            placement="right-start"
            :triggers="['click']"
          >
            <spr-button has-icon variant="secondary" size="small">
              <Icon icon="ph:faders-horizontal" />
            </spr-button>

            <template #popper>
              <div :class="filterClass.PopperWrapperClasses">
                <div :class="filterClass.PopperHeaderClasses">
                  Add Filter
                  <span class="spr-cursor-pointer" @click="isAddFilterVisible = false"><Icon icon="ph:x" /></span>
                </div>
                <div :class="filterClass.PopperContentClasses">
                  <Menu
                    v-for="menu in filterMenu"
                    :key="menu.field"
                    v-model:shown="mappedFilterMenuList[menu.field].isFilterVisible"
                    aria-id="filter-menu-wrapper"
                    placement="right-start"
                    :triggers="['click']"
                    show-group="filter-option-wrapper"
                  >
                    <spr-chips
                      :active="mappedFilterMenuList[menu.field].isFilterVisible"
                      :label="mappedFilterMenuList[menu.field].columnName"
                      :badge="getSelectedItemPerFilterMenu(mappedFilterMenuList[menu.field].field) > 0"
                      :badge-text="getSelectedItemPerFilterMenu(mappedFilterMenuList[menu.field].field).toString()"
                      badge-variant="danger"
                      icon="ph:funnel-simple"
                      @click="getMappedFilterData(mappedFilterMenuList[menu.field].field)"
                    />

                    <template #popper>
                      <div :class="['spr-w-[320px]', filterClass.PopperWrapperClasses]">
                        <div :class="filterClass.PopperHeaderClasses">
                          Add Filter
                          <span
                            class="spr-cursor-pointer"
                            @click="mappedFilterMenuList[menu.field].isFilterVisible = false"
                            ><Icon icon="ph:x"
                          /></span>
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
                          v-if="!loading && getFiltereredMenuOption.length > 0"
                          class="spr-max-h-[264px] spr-space-y-size-spacing-6xs spr-overflow-auto spr-p-size-spacing-2xs"
                        >
                          <div
                            v-for="option in getFiltereredMenuOption"
                            :key="option.value"
                            :class="[
                              filterClass.filterListClasses,
                              {
                                'spr-background-color-multiple-active': mappedMenuData[option.value].isSelected,
                              },
                            ]"
                          >
                            <spr-checkbox
                              v-model="mappedMenuData[option.value].isSelected"
                              :label="mappedMenuData[option.value].text"
                              :description="mappedMenuData[option.value].subtext"
                            />
                          </div>
                        </div>

                        <div v-else :class="filterClass.LoadingStateClasses">
                          <slot v-if="loading" name="loading"> loading... </slot>
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

          <div class="spr-space-x-size-spacing-3xs spr-space-y-size-spacing-3xs">
            <template v-for="menu in filterMenu" :key="menu.field">
              <spr-chips
                v-if="mappedFilterMenuList[menu.field].count"
                :label="mappedFilterMenuList[menu.field].columnName"
                icon="ph:funnel-simple"
              />
            </template>
          </div>
        </div>

        <spr-button variant="secondary" size="small" @click="selectAllOptions">Select All</spr-button>
      </div>

      <div
        v-if="getFiltereredOption.length > 0 && !refreshing"
        class="spr-max-h-[264px] spr-space-y-size-spacing-6xs spr-overflow-auto spr-p-size-spacing-3xs"
      >
        <div
          v-for="option in getFiltereredOption"
          :key="option.value"
          :class="[
            filterClass.filterListClasses,
            {
              'spr-background-color-multiple-active': mappedFilterOption[option.value].isSelected,
            },
          ]"
        >
          <spr-checkbox
            v-model="mappedFilterOption[option.value].isSelected"
            :label="mappedFilterOption[option.value].text"
            :description="mappedFilterOption[option.value].subtext"
          />
        </div>
      </div>
      <div v-else>
        <slot v-if="refreshing" name="loading-state">
          <div :class="filterClass.LoadingStateClasses">Loading...</div>
        </slot>
        <slot v-else name="empty-state">
          <div :class="filterClass.LoadingStateClasses">Result not found!</div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { Menu } from 'floating-vue';
import SprInput from '@/components/input/input.vue';
import SprButton from '@/components/button/button.vue';
import SprChips from '@/components/chips/chips.vue';
import SprCheckbox from '@/components/checkbox/checkbox.vue';

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

  toggleDropdown,
  selectAllOptions,
  getMappedFilterData,
  saveSelectedFilter,
  getSelectedItemPerFilterMenu,
  handleRemoveFilterValues,
} = useFilter(props, emit);
</script>
