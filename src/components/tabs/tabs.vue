<template>
  <div class="tw-flex">
    <div
      v-for="(tab, index) in list"
      :key="index"
      :class="[
        tabsClasses,
        'tw-border-solid tw-cursor-default tw-label-xs-regular',
        {
          'tw-background-color-single-active tw-border tw-border-color-success-base': !underlined && selectedTabIndex === index,
          'tw-border-x-[0.5px] tw-border-y tw-border-color-weak hover:tw-background-color-hover': !underlined && selectedTabIndex !== index,
          'tw-border-b tw-border-color-base tw-text-color-base': underlined && selectedTabIndex !== index,
          'tw-border-b-2 tw-border-color-success-base tw-text-color-brand-base tw-label-xs-medium': underlined && selectedTabIndex === index,
          'tw-border-b tw-border-color-disabled tw-text-color-disabled': underlined && tab.disabled,
        }
      ]"
      @click="updateSelectedTabIndex(index, tab.disabled)"
    >
      <div class="tw-flex tw-items-center tw-gap-size-spacing-5xs">
        <div v-if="!!tab.icon" class="tw-w-4 tw-h-4">
          <component :is="tab.icon" />
        </div>
        <div v-if="!!tab.label">
          {{tab.label}}
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
