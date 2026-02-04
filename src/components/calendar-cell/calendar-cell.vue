<template>
  <div
    v-if="!props.loading"
    :class="getCalendarCellClassess.getMainClasses"
    :style="props.customColor ? getCustomColorStyles : {}"
    @click="handleClick"
  >
    <slot>
      <div v-if="$slots.prefix || getCellIcon" :class="getCalendarCellClassess.getTextFormatClasses">
        <slot name="prefix">
          <Icon v-if="hasIconStatus" :icon="getCellIcon" />
        </slot>
      </div>
      <spr-status v-if="isError" :state="props.state" size="sm" />
      <div v-if="hasContent" :class="getCalendarCellClassess.getTextFormatClasses">
        <div v-if="props.title" :class="getCalendarCellClassess.titleClasses">
          {{ props.title }}
        </div>
        <div v-if="description" :class="getCalendarCellClassess.descriptionClasses">
          {{ props.description }}
        </div>
        <div v-if="getShiftLabel" :class="getCalendarCellClassess.getTypeLabelClassess">
          {{ getShiftLabel }}
        </div>
      </div>
    </slot>
  </div>

  <div v-else :class="getCalendarCellClassess.getMainClasses" :style="props.customColor ? getCustomColorStyles : {}" />
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

import { calendarCellPropTypes, calendarCellEmitTypes } from './calendar-cell';
import { useCalendarCell } from './use-calendar-cell';

import SprStatus from '@/components/status/status.vue';

const props = defineProps(calendarCellPropTypes);
const emit = defineEmits(calendarCellEmitTypes);

const {
  getCalendarCellClassess,
  getShiftLabel,
  getCellIcon,
  hasIconStatus,
  isError,
  hasContent,
  handleClick,
  getCustomColorStyles,
} = useCalendarCell(props, emit);
</script>
