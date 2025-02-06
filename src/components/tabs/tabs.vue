<template>
  <div class="relative flex">
    <div
      v-for="(tab, index) in list"
      :key="index"
      ref="tabElements"
      :class="[
        tabsClasses,
        {
          // Regular Tab
          'rounded-l-md': !underlined && index === 0,
          'rounded-r-md': !underlined && index === tabElements.length - 1,

          // Regular Tab - Active
          'border-color-success-base cursor-pointer border border-solid': !underlined && activeTab.index === index,

          // Regular Tab - Inactive
          'border-color-weak hover:background-color-hover cursor-pointer border-x-[0.5px] border-y border-solid':
            !underlined && activeTab.index !== index,

          // Regular Tab - Disabled
          'background-color-base !cursor-not-allowed': !underlined && tab.disabled,

          // Underlined Tab - Active
          'cursor-pointer': underlined && activeTab.index === index,

          // Underlined Tab - Inactive
          'border-color-base cursor-pointer border-b border-solid': underlined && activeTab.index !== index,
          'hover:background-color-hover cursor-pointer': underlined && activeTab.index !== index && !tab.disabled,

          // Underlined Tab - Disabled
          'border-color-disabled text-color-disabled !cursor-not-allowed border-b': underlined && tab.disabled,
        },
      ]"
      @click="updateSelectedTabIndex(index, tab.disabled)"
    >
      <!-- Regular Tab Background Active Indicator -->
      <div
        v-if="!underlined && activeTab.index === index"
        :class="[
          'background-color-single-active tw-w-full absolute bottom-0 left-0 z-[5] block h-full w-full',
          {
            'rounded-l-md': activeTab.index === 0,
            'rounded-r-md': activeTab.index === tabElements.length - 1,
          },
        ]"
      />

      <div
        :class="{
          'relative z-[10] flex items-center gap-size-spacing-5xs leading-none': true,
          'cursor-not-allowed': tab.disabled,
        }"
      >
        <div v-if="!!tab.icon">
          <Icon
            :class="{
              'body-sm-regular': true,
              'text-color-brand-base': activeTab.index === index,
            }"
            :icon="activeTab.index === index && typeof tab.iconFill === 'string' ? tab.iconFill : tab.icon"
          />
        </div>
        <div v-if="!!tab.label">
          {{ tab.label }}
        </div>
      </div>
    </div>

    <!-- Underlined Tab Active Indicator -->
    <div
      v-if="underlined"
      :class="[
        'background-color-success-base absolute bottom-0 left-0 z-10 block h-0.5 rounded-full',
        'transition-left duration-150 ease-in-out',
      ]"
      :style="{
        width: `${activeTab.width}px`,
        left: `${activeTab.undelineLeftOffset}px`,
      }"
    />
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';

import { tabsPropTypes, tabsEmitTypes } from './tabs';
import { useTabs } from './use-tabs';

const emit = defineEmits(tabsEmitTypes);
const props = defineProps(tabsPropTypes);

const { tabsClasses, activeTab, tabElements, updateSelectedTabIndex } = useTabs(props, emit);
</script>
