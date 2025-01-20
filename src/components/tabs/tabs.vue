<template>
  <div class="tw-flex">
    <div
      v-for="(tab, index) in list"
      :key="index"
      :class="[
        tabsClasses,
        'tw-body-sm-regular tw-text-color-strong tw-cursor-pointer tw-border-solid',
        {
          'tw-background-color-single-active tw-border': !underlined && selectedTabIndex === index,
          'tw-border-color-weak hover:tw-background-color-hover tw-border-x-[0.5px] tw-border-y':
            !underlined && selectedTabIndex !== index,
          'tw-border-color-base tw-border-b': underlined && selectedTabIndex !== index,
          'tw-border-b-2': underlined && selectedTabIndex === index,
          'tw-border-color-disabled tw-text-color-disabled !tw-cursor-not-allowed tw-border-b':
            underlined && tab.disabled,
          'tw-body-sm-regular': selectedTabIndex !== index,
          'tw-body-sm-regular tw-text-color-brand-base tw-border-color-success-base': selectedTabIndex === index,
          'tw-border-l-0': selectedTabIndex - index === -1,
          'tw-border-r-0': selectedTabIndex - index === 1,
        },
      ]"
      @click="updateSelectedTabIndex(index, tab.disabled)"
    >
      <div class="tw-flex tw-items-center tw-gap-size-spacing-5xs tw-leading-none">
        <div v-if="!!tab.icon">
          <component
            :is="selectedTabIndex === index && !!tab.iconFill ? tab.iconFill : tab.icon"
            class="tw-body-sm-regular"
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

const emit = defineEmits(tabsEmitTypes);
const props = defineProps(tabsPropTypes);
const { updateSelectedTabIndex, selectedTabIndex, tabsClasses } = useTabs(props, emit);
</script>
