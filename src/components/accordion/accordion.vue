<template>
  <div id="accordion" class="spr-rounded-border-radius-xl spr-border spr-border-solid spr-border-mushroom-200">
    <template v-for="(item, index) in props.accordionItems" :key="item.collapseId">
      <div
        :id="`accordion_item_${item.collapseId}`"
        :class="{ 'spr-border-x-0 spr-border-b-0 spr-border-t spr-border-solid spr-border-mushroom-200': index !== 0 }"
      >
        <div class="spr-px-size-spacing-xs spr-py-size-spacing-sm">
          <div
            id="header"
            :class="[
              'spr-flex spr-items-center spr-justify-between',
              { 'hover:spr-cursor-pointer': props.accordionTrigger === 'header' },
            ]"
            @click="props.accordionTrigger === 'header' && toggleCollapse(index)"
          >
            <div class="spr-flex spr-flex-col">
              <span class="spr-text-base spr-font-medium spr-leading-5 spr-text-mushroom-950">{{ item.title }}</span>
              <span v-if="item.subtitle" class="spr-text-200 spr-font-normal spr-leading-5 spr-text-mushroom-600">{{
                item.subtitle
              }}</span>
            </div>
            <spr-button
              v-if="props.accordionTrigger === 'button'"
              variant="secondary"
              has-icon
              size="small"
              @click="toggleCollapse(index)"
            >
              <Icon :icon="collapsedState[index] ? 'ph:caret-up' : 'ph:caret-down'" />
            </spr-button>
            <Icon v-else :icon="collapsedState[index] ? 'ph:caret-up' : 'ph:caret-down'" />
          </div>
          <spr-collapsible v-model="collapsedState[index]">
            <div class="spr-pt-size-spacing-sm">
              <slot :name="item.collapseId" />
            </div>
          </spr-collapsible>
        </div>
      </div>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';
import { accordionPropTypes } from './accordion';
import { useAccordion } from './use-accordion';
import SprCollapsible from '@/components/collapsible/collapsible.vue';
import SprButton from '@/components/button/button.vue';
import { Icon } from '@iconify/vue';

const props = defineProps(accordionPropTypes);
const { collapsedState, toggleCollapse } = useAccordion(props);
</script>
