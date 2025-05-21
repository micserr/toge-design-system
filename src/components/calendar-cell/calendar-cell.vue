<template>
  <div :class="getCalendarCellClassess.getMainClasses" @click="handleClick">
    <slot name="prefix">
      <Icon v-if="hasIconStatus" :icon="getCellIcon" />
    </slot>
    <slot>
      <spr-status v-if="isError" :state="props.state" size="sm" />
      <div v-if="hasContent" class="spr-break-words">
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
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Icon } from '@iconify/vue';
import SprStatus from '@/components/status/status.vue';
import { calendarCellPropTypes, calendarCellEmitTypes } from './calendar-cell';
import { useCalendarCell } from './use-calendar-cell';

const props = defineProps(calendarCellPropTypes);
const emit = defineEmits(calendarCellEmitTypes);

const { getCalendarCellClassess, getShiftLabel, getCellIcon, hasIconStatus, isError, hasContent, handleClick } =
  useCalendarCell(props, emit);
</script>
