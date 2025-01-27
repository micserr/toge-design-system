<template>
  <div class="flex">
    <div
      v-for="(tab, index) in list"
      :key="index"
      :class="[
        tabsClasses,
        'body-sm-regular text-color-strong cursor-pointer border-solid',
        {
          // Active tab without underline
          'background-color-single-active border': !underlined && selectedTabIndex === index,

          // Inactive tab without underline
          'border-color-weak hover:background-color-hover border-x-[0.5px] border-y':
            !underlined && selectedTabIndex !== index,

          // Underlined tab that is not selected
          'border-color-base border-b': underlined && selectedTabIndex !== index,

          // Underlined and selected tab
          'border-b-2': underlined && selectedTabIndex === index,

          // Disabled tab with underline
          'border-color-disabled text-color-disabled !cursor-not-allowed border-b': underlined && tab.disabled,

          // Regular text for non-selected tabs
          'body-sm-regular': selectedTabIndex !== index,

          // Active tab with custom text and border styles
          'body-sm-regular text-color-brand-base border-color-success-base': selectedTabIndex === index,

          // Border adjustments for previous and next tab
          'border-l-0': selectedTabIndex - index === -1,
          'border-r-0': selectedTabIndex - index === 1,
        },
      ]"
      @click="updateSelectedTabIndex(index, tab.disabled)"
    >
      <div class="flex items-center gap-size-spacing-5xs leading-none">
        <div v-if="!!tab.icon">
          <Icon
            :icon="selectedTabIndex === index && !!tab.iconFill ? tab.iconFill : tab.icon"
            class="body-sm-regular"
          />
        </div>
        <div v-if="!!tab.label">
          {{ tab.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { tabsPropTypes, tabsEmitTypes } from './tabs';
import { useTabs } from './use-tabs';

import { Icon } from '@iconify/vue';

const emit = defineEmits(tabsEmitTypes);
const props = defineProps(tabsPropTypes);

const { updateSelectedTabIndex, selectedTabIndex, tabsClasses } = useTabs(props, emit);
</script>
