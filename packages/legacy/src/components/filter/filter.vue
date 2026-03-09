<template>
  <Menu
    v-model:shown="isFilterOpen"
    aria-id="filter-option-wrapper"
    distance="4"
    placement="bottom"
    :triggers="[]"
    :popper-hide-triggers="[]"
    :container="`#${generateStableId}`"
    :auto-hide="false"
    :delay="0"
    :popper-class="'filter-menu-popper'"
    :style="{
      width: props.width,
      position: 'relative',
    }"
  >
    <div
      :id="generateStableId"
      :style="{
        width: props.width,
        position: 'relative',
      }"
      @click="isFilterOpen = true"
    >
      <!-- Main Search Input -->
      <slot>
        <spr-input
          :id="props.id"
          v-model="searchValue"
          type="text"
          :placeholder="placeholder"
          :label="label"
          :disabled="disabled"
          :helper-text="props.helperText"
          :display-helper="!!props.helperText"
          :error="props.error"
        >
          <template #icon>
            <Icon icon="ph:magnifying-glass" />
          </template>
        </spr-input>
      </slot>
    </div>

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
            :delay="0"
            popover-base="filter-menu-base"
          >
            <spr-button id="add-filter-button" has-icon variant="secondary" size="small">
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
                    placement="right"
                    :triggers="['click']"
                    :delay="0"
                    :auto-hide="false"
                    popover-base="filter-menu-field"
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
                          <!-- search for the filter Option -->
                          <spr-input
                            :id="`${props.id}-search`"
                            v-model="filterMenuSearchvalue"
                            type="text"
                            placeholder="Search"
                          >
                            <template #icon>
                              <Icon icon="ph:magnifying-glass" />
                            </template>
                          </spr-input>
                        </div>

                        <div
                          v-if="getSelectedFilterMenuOption.length > 0"
                          class="spr-h-[70px] spr-space-x-2 spr-space-y-2 spr-overflow-auto spr-p-size-spacing-2xs"
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
                          v-if="getFilteredMenuOption.length > 0"
                          :id="menu.field"
                          ref="filterMenuOptionList"
                          class="spr-h-[264px] spr-space-y-size-spacing-6xs spr-overflow-auto spr-p-size-spacing-2xs"
                        >
                          <div
                            v-for="(option, key) in getFilteredMenuOption"
                            :key="option.value"
                            :class="[
                              filterClass.filterListClasses,
                              { 'spr-background-color-multiple-active': getFilteredMenuOption[key].isSelected },
                            ]"
                          >
                            <spr-checkbox
                              id="filter-menu-option"
                              v-model="getFilteredMenuOption[key].isSelected"
                              class="spr-w-full"
                              :checked="getFilteredMenuOption[key].isSelected"
                              :label="getFilteredMenuOption[key].text"
                              :description="getFilteredMenuOption[key].subtext"
                            />
                          </div>
                        </div>

                        <div v-else :class="filterClass.LoadingStateClasses">
                          <slot v-if="props.loading" name="loading"> loading... </slot>
                          <slot v-else name="empty"> No Result Found! </slot>
                        </div>

                        <div :class="filterClass.ActionButtonClasses">
                          <spr-button
                            id="cancel-button"
                            variant="secondary"
                            size="small"
                            @click="mappedFilterMenuList[menu.field].isFilterVisible = false"
                          >
                            Cancel
                          </spr-button>
                          <spr-button
                            id="save-button"
                            size="small"
                            tone="success"
                            @click="saveSelectedFilter(menu.field)"
                          >
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

        <spr-button id="select-all-button" variant="secondary" size="small" @click="selectAllOptions"
          >Select All</spr-button
        >
      </div>

      <div
        v-if="getFiltereredOption.length > 0 && !filling"
        ref="filterOptionRef"
        class="spr-max-h-[264px] spr-space-y-size-spacing-6xs spr-overflow-auto spr-p-size-spacing-3xs"
      >
        <div
          v-for="(option, key) in getFiltereredOption"
          :key="option.value"
          :class="[
            filterClass.filterListClasses,
            {
              'spr-background-color-multiple-active': getFiltereredOption[key].isSelected,
            },
          ]"
        >
          <div
            class="spr-flex spr-w-full spr-flex-row spr-items-center spr-justify-items-start spr-gap-size-spacing-3xs"
            @click="getFiltereredOption[key].isSelected = !getFiltereredOption[key].isSelected"
          >
            <spr-checkbox
              v-model="getFiltereredOption[key].isSelected"
              :checked="getFiltereredOption[key].isSelected"
            />

            <spr-avatar
              v-if="props.hasAvatar"
              size="md"
              alt="User Avatar"
              :src="getFiltereredOption[key].avatar"
              :variant="getFiltereredOption[key].avatar ? 'image' : 'initial'"
              :initial="getFiltereredOption[key].text"
            />

            <div>
              <div class="spr-body-sm-regular">{{ getFiltereredOption[key].text }}</div>
              <div class="spr-body-xs-regular spr-text-color-supporting">{{ getFiltereredOption[key].subtext }}</div>
            </div>
          </div>
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
import SprAvatar from '@/components/avatar/avatar.vue';
import 'floating-vue/dist/style.css';
import { useFilter } from './use-filter';
import { filterPropTypes, filterEmitTypes } from './filter';

const props = defineProps(filterPropTypes);
const emit = defineEmits(filterEmitTypes);

const {
  isFilterOpen,
  searchValue,
  isAddFilterVisible,
  getFiltereredOption,
  getSelectedFilterMenuOption,
  getFilteredMenuOption,
  filterMenuSearchvalue,
  mappedFilterMenuList,
  filterClass,
  generateStableId,
  filterOptionRef,
  filterMenuOptionList,

  selectAllOptions,
  getMappedFilterData,
  saveSelectedFilter,
  getSelectedItemPerFilterMenu,
  handleRemoveFilterValues,
} = useFilter(props, emit);
</script>
