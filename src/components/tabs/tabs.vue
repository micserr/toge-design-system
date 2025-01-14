<template>
  <div class="tw-flex">
    <div
      v-for="(tab, index) in list"
      :key="index"
      :class="[
        tabsClasses,
        'tw-label-xs-regular tw-cursor-default tw-cursor-pointer tw-border-solid',
        {
          'tw-background-color-single-active tw-border-color-success-base tw-border':
            !underlined && selectedTabIndex === index,
          'tw-border-color-weak hover:tw-background-color-hover tw-border-x-[0.5px] tw-border-y':
            !underlined && selectedTabIndex !== index,
          'tw-border-color-base tw-text-color-base tw-border-b': underlined && selectedTabIndex !== index,
          'tw-border-color-success-base tw-text-color-brand-base tw-label-xs-medium tw-border-b-2':
            underlined && selectedTabIndex === index,
          'tw-border-color-disabled tw-text-color-disabled tw-cursor-not-allowed tw-border-b':
            underlined && tab.disabled,
        },
      ]"
      @click="updateSelectedTabIndex(index, tab.disabled)"
    >
      <div class="tw-flex tw-items-center tw-gap-size-spacing-5xs">
        <div v-if="!!tab.icon" class="tw-h-4 tw-w-4">
          <component :is="tab.icon" />
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
