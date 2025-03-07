<template>
  <div :class="[getCalendarCellClassess.getMainClasses]">
    <spr-status v-if="isError" :state="props.state" size="sm" />
    <Icon v-if="hasIconStatus" :icon="getCellIcon" />

    <div v-if="hasContent">
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
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Icon } from '@iconify/vue';
import SprStatus from '@/components/status/status.vue';
import { calendarCellPropTypes } from './calendar-cell';
import { useCalendarCell } from './use-calendar-cell';

const props = defineProps(calendarCellPropTypes);
const { getCalendarCellClassess, getShiftLabel, getCellIcon, hasIconStatus, isError, hasContent } =
  useCalendarCell(props);
</script>
