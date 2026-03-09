<template>
  <div ref="tabContainer" class="spr-relative spr-flex">
    <div
      v-for="(tab, index) in list"
      :key="index"
      ref="tabElements"
      :class="[
        tabsClasses,
        {
          // Regular Tab
          'spr-rounded-l-md': !underlined && index === 0,
          'spr-rounded-r-md': !underlined && index === tabElements.length - 1,

          // Regular Tab - Active
          'spr-border-color-success-base spr-cursor-pointer !spr-border !spr-border-solid':
            !underlined && activeTab.index === index,

          // Regular Tab - Inactive
          'spr-border-color-weak hover:spr-background-color-hover spr-cursor-pointer !spr-border-x-[0.5px] !spr-border-y !spr-border-solid':
            !underlined && activeTab.index !== index,

          // Regular Tab - Disabled
          'spr-background-color-disabled !spr-cursor-not-allowed !spr-text-color-on-fill-disabled':
            !underlined && tab.disabled,

          // Underlined Tab - Active
          'spr-cursor-pointer': underlined && activeTab.index === index,

          // Underlined Tab - Inactive
          'spr-border-color-base spr-cursor-pointer !spr-border-b !spr-border-solid':
            underlined && activeTab.index !== index,
          'hover:spr-background-color-hover spr-cursor-pointer':
            underlined && activeTab.index !== index && !tab.disabled,

          // Underlined Tab - Disabled
          'spr-border-color-disabled spr-text-color-on-fill-disabled !spr-cursor-not-allowed spr-border-b':
            underlined && tab.disabled,
        },
      ]"
      @click="updateSelectedTabIndex(index, tab.disabled)"
    >
      <!-- Regular Tab Background Active Indicator -->
      <div
        v-if="!underlined && activeTab.index === index"
        :class="[
          'spr-background-color-single-active spr-tw-w-full spr-absolute spr-bottom-0 spr-left-0 spr-z-[5] spr-block spr-h-full spr-w-full spr-',
          {
            'spr-rounded-l-md': activeTab.index === 0,
            'spr-rounded-r-md': activeTab.index === tabElements.length - 1,
          },
        ]"
      />

      <div
        :class="{
          'spr-relative spr-z-[10] spr-flex spr-items-center spr-gap-size-spacing-5xs spr-leading-none': true,
          'spr-cursor-not-allowed': tab.disabled,
        }"
      >
        <div v-if="!!tab.icon">
          <Icon
            :class="{
              'spr-body-sm-regular': true,
              'spr-text-color-brand-base': activeTab.index === index,
            }"
            :icon="activeTab.index === index && typeof tab.iconFill === 'string' ? tab.iconFill : tab.icon"
          />
        </div>
        <div v-if="!!tab.label">
          {{ tab.label }}
        </div>
        <div v-if="props.showBadge" class="tab-badge spr-pl-size-spacing-5xs">
          <spr-badge
            v-if="!!tab.badge"
            :text="tab.badge.text"
            :variant="tab.badge.variant"
            :size="tab.badge.size"
          />
        </div>
      </div>
    </div>

    <!-- Underlined Tab Active Indicator -->
    <div
      v-if="underlined"
      :class="[
        'spr-background-color-success-base spr-absolute spr-bottom-0 spr-left-0 spr-z-10 spr-block spr-h-0.5 spr-rounded-full',
        'spr-transition-left spr-duration-150 spr-ease-in-out',
      ]"
      :style="{
        width: `${activeTab.width}px`,
        left: `${activeTab.underlineLeftOffset}px`,
      }"
    />
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';

import { tabsPropTypes, tabsEmitTypes } from './tabs';
import { useTabs } from './use-tabs';

import SprBadge from '../badge/badge.vue';

const emit = defineEmits(tabsEmitTypes);
const props = defineProps(tabsPropTypes);

const { tabsClasses, activeTab, tabElements, tabContainer, updateSelectedTabIndex } = useTabs(props, emit);
</script>
