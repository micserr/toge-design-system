<template>
  <div class="spr-grid spr-grid-cols-4 spr-gap-2">
    <div
      v-for="(year, index) in yearTabCurrentYearPage"
      :key="index"
      :class="[
        'spr-subheading-xs spr-relative spr-flex spr-cursor-pointer spr-items-center spr-justify-center spr-rounded-lg spr-p-4',
        'spr-border spr-border-solid',
        'spr-transition spr-duration-150 spr-ease-in-out',
        'active:spr-scale-95',
        {
          'spr-text-color-brand-base': year === currentYear,
          'spr-border-color-weak hover:spr-background-color-hover active:spr-background-color-pressed':
            year !== selectedYear,
          'spr-border-color-brand-base spr-background-color-single-active': year === selectedYear,
        },
      ]"
      @click="handleYearClick(year)"
    >
      <span>{{ year }}</span>
      <div
        v-if="year === currentYear"
        class="spr-background-color-brand-base spr-absolute spr-bottom-2 spr-m-auto spr-h-1 spr-w-1 spr-rounded-full"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, watch } from 'vue';
import dayjs from 'dayjs';
import type { TabComponentProps, YearTabEmits } from '../date-picker';

interface Props extends Omit<TabComponentProps, 'selectedYear'> {
  selectedYear?: number;
  itemsPerPage?: number;
  yearsArray?: number[];
  currentPage?: number;
}

const props = withDefaults(defineProps<Props>(), {
  selectedYear: undefined,
  itemsPerPage: 12,
  yearsArray: () => [],
  currentPage: 0,
});

const emit = defineEmits<YearTabEmits>();

const yearsArray = computed(() => props.yearsArray || []);

const currentYear = computed(() => dayjs().year());

const yearTabCurrentYearPage = computed(() => {
  const start = props.currentPage * props.itemsPerPage;
  const remainingItems = yearsArray.value.slice(start);

  return remainingItems.length < props.itemsPerPage
    ? remainingItems
    : yearsArray.value.slice(start, start + props.itemsPerPage);
});

const isPreviousButtonDisabled = computed(() => {
  return props.currentPage === 0;
});

const isNextButtonDisabled = computed(() => {
  return (props.currentPage + 1) * props.itemsPerPage >= yearsArray.value.length;
});

const setCurrentPageYear = () => {
  const currentYearIndex = yearsArray.value.indexOf(props.selectedYear || 0);

  if (currentYearIndex !== -1) {
    const page = Math.floor(currentYearIndex / props.itemsPerPage);
    emit('update:currentPage', page);
  }
};

const handleYearClick = (year: number) => {
  emit('update:year', year);
};

// Watch for changes in selectedYear to update current page
watch(
  () => props.selectedYear,
  (newYear) => {
    if (newYear) {
      const yearIndex = yearsArray.value.indexOf(newYear);

      if (yearIndex !== -1) {
        const page = Math.floor(yearIndex / props.itemsPerPage);
        emit('update:currentPage', page);
      }
    }
  },
  { immediate: true }
);

// Watch for changes in minMaxYear to reset current page
watch(
  () => props.minMaxYear,
  () => {
    emit('update:currentPage', 0);
  }
);

// Expose methods for parent component
defineExpose({
  isPreviousButtonDisabled,
  isNextButtonDisabled,
  setCurrentPageYear,
});
</script>
