<template>
  <div class="flex">
    <div
      v-for="(tab, index) in list"
      :key="index"
      :class="[
        tabsClasses,
        'body-sm-regular text-color-strong cursor-pointer border-solid',
        {
          'background-color-single-active border': !underlined && selectedTabIndex === index,
          'border-color-weak hover:background-color-hover border-x-[0.5px] border-y':
            !underlined && selectedTabIndex !== index,
          'border-color-base border-b': underlined && selectedTabIndex !== index,
          'border-b-2': underlined && selectedTabIndex === index,
          'border-color-disabled text-color-disabled !cursor-not-allowed border-b': underlined && tab.disabled,
          'body-sm-regular': selectedTabIndex !== index,
          'body-sm-regular text-color-brand-base border-color-success-base': selectedTabIndex === index,
          'border-l-0': selectedTabIndex - index === -1,
          'border-r-0': selectedTabIndex - index === 1,
        },
      ]"
      @click="updateSelectedTabIndex(index, tab.disabled)"
    >
      <div class="flex items-center gap-size-spacing-5xs leading-none">
        <div v-if="!!tab.icon">
          <component
            :is="selectedTabIndex === index && !!tab.iconFill ? tab.iconFill : tab.icon"
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

const emit = defineEmits(tabsEmitTypes);
const props = defineProps(tabsPropTypes);
const { updateSelectedTabIndex, selectedTabIndex, tabsClasses } = useTabs(props, emit);
</script>
