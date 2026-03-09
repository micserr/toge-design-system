<template>
  <div
    id="accordion"
    :class="{ 'spr-rounded-border-radius-xl spr-border spr-border-solid spr-border-mushroom-200': props.bordered }"
  >
    <template v-for="(item, index) in props.accordionItems" :key="item.collapseId">
      <div
        :id="`accordion_item_${item.collapseId}`"
        :class="{ 'spr-border-x-0 spr-border-b-0 spr-border-t spr-border-solid spr-border-mushroom-200': index !== 0 }"
      >
        <div
          id="header"
          :class="[
            'spr-flex spr-items-center spr-justify-between spr-px-size-spacing-xs spr-py-size-spacing-sm',
            {
              'hover:spr-cursor-pointer': props.accordionTrigger === 'header',
              'active:spr-background-color-pressed': clickedIndex === index && props.accordionTrigger === 'header',
              'spr-rounded-t-border-radius-xl': clickedIndex === 0,
              'spr-rounded-b-border-radius-xl':
                clickedIndex === props.accordionItems.length - 1 && !collapsedState[index],
            },
          ]"
          @mousedown="setClickedIndex(index)"
          @mouseup="clearIndex"
          @mouseleave="clearIndex"
          @click="props.accordionTrigger === 'header' && toggleCollapse(index)"
        >
          <div class="spr-flex spr-w-[95%] spr-flex-col">
            <span class="spr-text-base spr-font-medium spr-leading-5 spr-text-mushroom-950">{{ item.title }}</span>
            <span v-if="item.subtitle" class="spr-text-200 spr-font-normal spr-leading-5 spr-text-mushroom-600">{{
              item.subtitle
            }}</span>
          </div>
          <spr-button
            v-if="props.accordionTrigger === 'button'"
            variant="secondary"
            has-icon
            size="medium"
            class="!spr-h-7 !spr-w-7 !spr-p-0"
            @click="toggleCollapse(index)"
          >
            <Icon :icon="collapsedState[index] ? 'ph:caret-up' : 'ph:caret-down'" width="16" height="16" />
          </spr-button>
          <Icon v-else :icon="collapsedState[index] ? 'ph:caret-up' : 'ph:caret-down'" width="16" height="16" />
        </div>
        <spr-collapsible v-model="collapsedState[index]">
          <div class="spr-px-size-spacing-xs spr-pb-size-spacing-sm">
            <slot :name="item.collapseId" />
          </div>
        </spr-collapsible>
      </div>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { Icon } from '@iconify/vue';

import { accordionPropTypes } from './accordion';
import { useAccordion } from './use-accordion';

import SprCollapsible from '@/components/collapsible/collapsible.vue';
import SprButton from '@/components/button/button.vue';

const props = defineProps(accordionPropTypes);

const { collapsedState, toggleCollapse, setClickedIndex, clearIndex, clickedIndex } = useAccordion(props);
</script>
