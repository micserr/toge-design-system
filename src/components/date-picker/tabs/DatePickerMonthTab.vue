<template>
  <div class="spr-grid spr-grid-cols-4 spr-gap-2">
    <div
      v-for="(month, monthIndex) in monthsList"
      :key="monthIndex"
      :class="[
        'spr-subheading-xs spr-relative spr-flex spr-cursor-pointer spr-items-center spr-justify-center spr-rounded-lg spr-p-4',
        'spr-border spr-border-solid',
        'spr-transition spr-duration-150 spr-ease-in-out',
        'active:spr-scale-95',
        {
          'spr-text-color-brand-base': month.monthValue === currentMonth,
          'spr-border-color-weak hover:spr-background-color-hover active:spr-background-color-pressed':
            month.monthValue !== selectedMonth,
          'spr-border-color-brand-base spr-background-color-single-active':
            month.monthValue === selectedMonth,
        },
      ]"
      @click="handleMonthClick(month)"
    >
      <span>{{ month.text }}</span>

      <div
        v-if="month.monthValue === currentMonth"
        class="spr-background-color-brand-base spr-absolute spr-bottom-2 spr-m-auto spr-h-1 spr-w-1 spr-rounded-full"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue';
import dayjs from 'dayjs';
import type { TabComponentProps, MonthTabEmits } from '../date-picker';

interface Props extends TabComponentProps {
  selectedMonth: number;
}

type Emits = MonthTabEmits;

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const { selectedMonth } = toRefs(props);

const monthsList = computed(() =>
  Array.from({ length: 12 }, (_, i) => ({
    text: dayjs().month(i).format('MMM'),
    fullText: dayjs().month(i).format('MMMM'),
    monthValue: i,
  }))
);

const currentMonth = computed(() => dayjs().month());

const handleMonthClick = (month: { text: string; fullText: string; monthValue: number }) => {
  emit('update:month', month.monthValue);
};
</script>
