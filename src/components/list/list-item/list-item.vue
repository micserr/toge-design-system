<template>
  <div :class="classes" @click="$emit('select')">
    <template v-if="showLozengeMode">
      <div class="spr-flex spr-items-center spr-gap-1">
        <spr-checkbox
          v-if="props.multiSelect"
          :disabled="item.disabled || (props.disabledUnselectedItems && !isSelected)"
          :checked="isSelected"
        />
        <spr-lozenge
          :label="item.text || (item.lozengeProps?.label as string)"
          :tone="item.lozengeProps?.tone as string & (typeof LOZENGE_TONE)[number]"
          :fill="item.lozengeProps?.fill as boolean"
          :url="item.lozengeProps?.url as string"
          :icon="item.lozengeProps?.icon as string"
          :max-width="item.lozengeProps?.maxWidth as string"
          :postfix-icon="item.lozengeProps?.postfixIcon as string"
        />
      </div>
    </template>
    <template v-else>
      <div class="spr-flex spr-items-center spr-gap-1">
        <spr-checkbox
          v-if="props.multiSelect"
          :disabled="item.disabled || (props.disabledUnselectedItems && !isSelected)"
          :checked="isSelected"
        />
        <div :class="[item.textColor, 'spr-flex spr-flex-row spr-items-center spr-gap-size-spacing-3xs']">
          <span
            v-if="hasIcon"
            :class="[
              item.iconColor,
              'spr-mt-[2px]',
              { 'spr-text-color-disabled': item.disabled || (props.disabledUnselectedItems && !isSelected) },
            ]"
          >
            <Icon :icon="iconName" width="20px" height="20px" />
          </span>
          <div
            :class="[
              'spr-flex spr-flex-auto spr-flex-col spr-justify-start',
              { 'spr-text-color-disabled': item.disabled || (props.disabledUnselectedItems && !isSelected) },
            ]"
          >
            <span class="spr-break-words spr-text-left spr-text-xs">
              {{ item.text }}
            </span>
            <span
              v-if="item.subtext"
              :class="[
                'spr-body-xs-regular spr-text-color-base spr-break-words spr-text-left',
                { 'spr-text-color-disabled': item.disabled || (props.disabledUnselectedItems && !isSelected) },
              ]"
            >
              {{ item.subtext }}
            </span>
          </div>
        </div>
      </div>

      <!-- Right Side Actions -->
      <div class="spr-flex spr-items-center spr-gap-1">
        <template v-if="props.ladderized">
          <Icon v-if="hasSublevels" class="spr-text-color-weak spr-size-4" icon="ph:caret-right" />
          <Icon
            v-else-if="isSelected && !props.noCheck"
            class="spr-text-color-brand-base spr-w-[1.39em]"
            icon="ph:check"
          />
        </template>
        <template v-else>
          <spr-lozenge
            v-if="item.lozenge"
            :label="item.lozenge?.label as string"
            :tone="item.lozenge?.tone as string & (typeof LOZENGE_TONE)[number]"
            :fill="item.lozenge?.fill as boolean"
            :url="item.lozenge?.url as string"
            :icon="item.lozenge?.icon as string"
            :max-width="item.lozenge?.maxWidth as string"
            :postfix-icon="item.lozenge?.postfixIcon as string"
          />
          <Icon
            v-if="isSelected && !props.noCheck && !props.multiSelect"
            class="spr-text-color-brand-base spr-w-[1.39em]"
            icon="ph:check"
          />
        </template>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { Icon } from '@iconify/vue';

import SprCheckbox from '@/components/checkbox/checkbox.vue';
import SprLozenge from '@/components/lozenge/lozenge.vue';

import { LOZENGE_TONE } from '@/components/lozenge/lozenge';

import { listItemPropTypes, listItemEmitTypes } from './list-item';
import { useListItem } from './use-list-item';

const props = defineProps(listItemPropTypes);
const emit = defineEmits(listItemEmitTypes);

const { hasIcon, iconName, hasSublevels, showLozengeMode } = useListItem(props, emit);

// Computed property to ensure item is always defined
const item = computed(() => props.item!);
</script>
