<template>
  <spr-dropdown
    :id="props.id"
    ref="tableHeaderDropdown"
    width="100%"
    :triggers="[]"
    :popper-triggers="[]"
    popper-width="448px"
    no-padding
  >
    <div :class="props.headerClasses" @click="showDropdown">
      <span> {{ props.header.name }} </span>
      <span>
        <Icon class="!spr-justify-normal spr-text-[#4B685E]" icon="ph:funnel-simple" height="20px" width="20px" />
      </span>
    </div>

    <template #popper>
      <spr-card class="spr-max-h-[372px] spr-font-main" border-width="0px" :has-content-padding="false" show-header>
        <template #header>
          <div
            class="spr-border-color-weak spr-flex spr-w-full spr-flex-row spr-items-center spr-justify-between spr-border-0 spr-border-b spr-border-solid spr-p-size-spacing-xs"
          >
            <span class="spr-subheading-xs spr-capitalize">{{ props.header.name }}</span>
            <spr-button v-if="props.hasSelectAll" size="small" variant="secondary" @click="selectAll"
              >Select All</spr-button
            >
          </div>
        </template>
        <template #content>
          <div class="spr-max-h-[251px] spr-overflow-y-auto">
            <div v-if="props.isSortable" class="spr-border-color-weak spr-border-0 spr-border-b spr-border-solid">
              <spr-list
                v-model="selectedSort"
                class="spr-body-sm-regular spr-text-color-strong spr-capitalize [&_svg.spr-text-color-brand-base]:spr-hidden [&_svg]:spr-h-[16px] [&_svg]:spr-w-[16px]"
                :menu-list="props.sortOptions"
                :allow-deselect="true"
              />
            </div>
            <div v-if="props.header.filterList && props.header.filterList.length > 0">
              <spr-list
                v-model="selectedFilters"
                class="spr-body-sm-regular spr-text-color-strong spr-capitalize [&_svg]:spr-h-[16px] [&_svg]:spr-w-[16px]"
                :menu-list="props.header.filterList"
                multi-select
              />
            </div>
          </div>
        </template>
        <template #footer>
          <div class="spr-ms-auto spr-flex spr-items-center spr-py-size-spacing-5xs">
            <spr-button tone="success" @click="applyFilter">Apply Filter</spr-button>
          </div>
        </template>
      </spr-card>
    </template>
  </spr-dropdown>
</template>

<script setup lang="ts">
import SprDropdown from '@/components/dropdown/dropdown.vue';
import SprCard from '@/components/card/card.vue';
import SprButton from '@/components/button/button.vue';
import SprList from '@/components/list/list.vue';
import Icon from '@/components/icon/icon.vue';
import { tableHeaderDropdownEmitTypes, tableHeaderDropdownPropTypes } from './table-header-dropdown';
import { ref } from 'vue';
import { MenuListType } from '@/components/list/list';

const tableHeaderDropdown = ref<InstanceType<typeof SprDropdown> | null>(null);
const showDropdown = () => {
  tableHeaderDropdown.value?.showDropdown();
};

const props = defineProps(tableHeaderDropdownPropTypes);
const emits = defineEmits(tableHeaderDropdownEmitTypes);

const selectedSort = ref<MenuListType[]>([]);
const selectedFilters = ref<MenuListType[]>([]);

const applyFilter = () => {
  emits('onApplyFilter', {
    headerField: props.header.field,
    sortBy: selectedSort.value[0] ? (selectedSort.value[0].value as 'asc' | 'desc' | null) : null,
    appliedFilters: selectedFilters.value.reduce(
      (acc, filter) => {
        acc[filter.text] = filter.value as string;
        return acc;
      },
      {} as Record<string, string>,
    ),
  });
  tableHeaderDropdown.value?.hideDropdown();
};

const selectAll = () => {
  selectedFilters.value = props.header.filterList ? [...props.header.filterList] : [];
  emits('onSelectAll');
};

defineExpose({
  showDropdown
});
</script>
