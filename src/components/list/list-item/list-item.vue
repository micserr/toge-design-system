<template>
  <div :class="props.classes" @click="$emit('select')">
    <template v-if="showLozengeMode">
      <div class="spr-flex spr-items-center spr-gap-2">
        <spr-checkbox
          v-if="props.multiSelect"
          :disabled="listItem.disabled || (props.disabledUnselectedItems && !isSelected)"
          :checked="isSelected"
        />
        <spr-lozenge
          :label="listItem.text || (listItem.lozengeProps?.label as string)"
          :tone="listItem.lozengeProps?.tone as string & (typeof LOZENGE_TONE)[number]"
          :fill="listItem.lozengeProps?.fill as boolean"
          :url="listItem.lozengeProps?.url as string"
          :icon="listItem.lozengeProps?.icon as string"
          :max-width="listItem.lozengeProps?.maxWidth as string"
          :postfix-icon="listItem.lozengeProps?.postfixIcon as string"
        />
      </div>
    </template>
    <template v-else>
      <div class="spr-flex spr-items-center spr-gap-2">
        <spr-checkbox
          v-if="props.multiSelect"
          :disabled="listItem.disabled || (props.disabledUnselectedItems && !isSelected)"
          :checked="isSelected"
        />
        <spr-radio
          v-if="props.radioList && !props.multiSelect"
          :id="`radio-${props.item?.value}`"
          class="spr-flex spr-items-center"
          name="radio-group"
          :value="props.item?.value"
          :model-value="isSelected ? props.item?.value : undefined"
          :disabled="props.item?.disabled || (props.disabledUnselectedItems && !isSelected)"
          @update:model-value="$emit('select')"
        />
        <div :class="[listItem.textColor, 'spr-flex spr-flex-row spr-items-center spr-gap-size-spacing-3xs']">
          <span
            v-if="hasIcon"
            :class="[
              'spr-flex spr-h-[30px] spr-w-[30px] spr-items-center spr-justify-center',
              iconClasses,
              { 'spr-text-color-disabled': listItem.disabled || (props.disabledUnselectedItems && !isSelected) },
            ]"
          >
            <Icon class="spr-text-xl" :icon="iconName" />
          </span>

          <span v-if="hasAvatar">
            <spr-avatar
              size="sm"
              :initial="props.avatarSource || listItem.text"
              :variant="props.avatarVariant"
              :src="props.avatarSource"
            />
          </span>

          <div
            :class="[
              'spr-flex spr-flex-auto spr-flex-col spr-justify-start',
              { 'spr-text-color-disabled': listItem.disabled || (props.disabledUnselectedItems && !isSelected) },
            ]"
          >
            <span class="spr-break-words spr-text-left spr-text-xs">
              {{ listItem.text }}
            </span>
            <span
              v-if="item.subtext"
              :class="[
                'spr-body-xs-regular spr-text-color-base spr-break-words spr-text-left',
                { 'spr-text-color-disabled': listItem.disabled || (props.disabledUnselectedItems && !isSelected) },
              ]"
            >
              {{ listItem.subtext }}
            </span>
          </div>
        </div>
      </div>

      <!-- Right Side Actions -->
      <div class="spr-flex spr-items-center spr-gap-2">
        <template v-if="props.ladderized">
          <Icon v-if="hasSublevels" class="spr-text-color-weak spr-size-4" icon="ph:caret-right" />
          <Icon
            v-else-if="isSelected && !props.noCheck && !props.multiSelect && !props.radioList"
            class="spr-text-color-brand-base spr-w-[1.39em]"
            icon="ph:check"
          />
        </template>
        <template v-else>
          <spr-lozenge
            v-if="listItem.lozenge"
            :label="listItem.lozenge?.label as string"
            :tone="listItem.lozenge?.tone as string & (typeof LOZENGE_TONE)[number]"
            :fill="listItem.lozenge?.fill as boolean"
            :url="listItem.lozenge?.url as string"
            :icon="listItem.lozenge?.icon as string"
            :max-width="listItem.lozenge?.maxWidth as string"
            :postfix-icon="listItem.lozenge?.postfixIcon as string"
          />
          <Icon
            v-if="isSelected && !props.noCheck && !props.multiSelect && !props.radioList"
            class="spr-text-color-brand-base spr-w-[1.39em]"
            icon="ph:check"
          />
        </template>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';

import SprCheckbox from '@/components/checkbox/checkbox.vue';
import SprRadio from '@/components/radio/radio.vue';
import SprLozenge from '@/components/lozenge/lozenge.vue';
import SprAvatar from '@/components/avatar/avatar.vue';

import { LOZENGE_TONE } from '@/components/lozenge/lozenge';

import { listItemPropTypes, listItemEmitTypes } from './list-item';
import { useListItem } from './use-list-item';

const props = defineProps(listItemPropTypes);
const emit = defineEmits(listItemEmitTypes);

const { listItem, hasIcon, iconName, iconClasses, hasSublevels, showLozengeMode, hasAvatar } = useListItem(props, emit);
</script>
