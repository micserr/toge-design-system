import { computed, SetupContext, toRefs, ref, watch, Slots } from 'vue';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import classNames from 'classnames';
import { useInfiniteScroll } from '@vueuse/core';
import { useVModel } from '@vueuse/core';

dayjs.extend(isBetween);

import type { CalendarPropTypes, CalendarEmitTypes, SelectedShift } from './calendar';

export const useCalendar = (props: CalendarPropTypes, emit: SetupContext<CalendarEmitTypes>['emit'], slots: Slots) => {
  const { initialDate, hideCopyButton } = toRefs(props);

  const state = {
    dateFormat: ref('YYYY-MM-DD'),
    companyDropDown: ref([]),
    departmentDropDown: ref([]),
    branchDropDown: ref([]),
    currentDate: ref(dayjs(initialDate.value)),
    searchTerm: ref<string>(''),
    selectedCompany: ref<string>(''),
    selectedDepartment: ref<string>(''),
    selectedBranch: ref<string>(''),
    isHover: ref<boolean>(false),
    hoveredCell: ref<number>(),
    employeeId: ref<number>(),
    sort: ref<string>(''),
    tableBodyRef: ref<HTMLElement | null>(null),
  };

  const searchEmployee = useVModel(props, 'search', emit);
  const selectedCell = useVModel(props, 'selectedCell', emit);

  const getSortIcon = computed(() => {
    if (!state.sort.value) {
      return 'ph:caret-up-down-light';
    }

    return state.sort.value === 'asc' ? 'ph:arrow-up' : 'ph:arrow-down';
  });

  const startDate = computed(() => state.currentDate.value.startOf('week'));

  const weekDates = computed(() => {
    return Array.from({ length: 7 }).map((_, index) => startDate.value.add(index, 'day'));
  });

  const weekRangeDisplay = computed(() => {
    const weekStart = startDate.value;
    const weekEnd = startDate.value.add(6, 'day');
    const format = 'MMM YYYY';

    if (weekStart.format('YYYY') !== weekEnd.format('YYYY')) {
      return `${weekStart.format(format)} - ${weekEnd.format(format)}`;
    }

    if (weekStart.format('MMM') !== weekEnd.format('MMM')) {
      return `${weekStart.format('MMM')} - ${weekEnd.format(format)}`;
    }

    return `${weekStart.format(format)}`;
  });

  const formatDate = (date: dayjs.Dayjs, formatStr: string) => date.format(formatStr);

  const isToday = (date: dayjs.Dayjs) => date.isSame(dayjs(), 'day');

  const prevWeek = () => {
    state.currentDate.value = state.currentDate.value.subtract(1, 'week');
  };

  const nextWeek = () => {
    state.currentDate.value = state.currentDate.value.add(1, 'week');
  };

  const getFirstAndLastDayOfWeek = () => {
    if (!state.currentDate.value) return;

    const firstDayOfWeek = state.currentDate.value.startOf('week');
    const lastDayOfWeek = state.currentDate.value.endOf('week');

    emit('update:firstLastDayOfWeek', {
      firstDay: firstDayOfWeek.format(state.dateFormat.value),
      lastDay: lastDayOfWeek.format(state.dateFormat.value),
    });
  };

  const goToToday = () => {
    const today = dayjs();
    const currentWeekStart = state.currentDate.value.startOf('week');
    const currentWeekEnd = state.currentDate.value.endOf('week');

    // Only update if today is not within the current week
    if (!today.isBetween(currentWeekStart, currentWeekEnd, 'day', '[]')) {
      state.currentDate.value = today;
    }
  };

  const onCellClick = (selected: SelectedShift) => {
    selectedCell.value = selected;
    emit('onCellClick', selected);
  };

  const handleHover = (isHover: boolean, index: number, employeeId: number) => {
    state.isHover.value = isHover;
    state.hoveredCell.value = isHover ? index : undefined;
    state.employeeId.value = employeeId;
  };

  const showCopyShift = (index: number, employeeId: number) => {
    return (
      state.hoveredCell.value === index &&
      state.isHover.value &&
      state.employeeId.value === employeeId &&
      !hideCopyButton.value
    );
  };

  const showCustomSlot = (index: number, employeeId: number) => {
    return (
      state.hoveredCell.value === index && state.isHover.value && state.employeeId.value === employeeId && slots.cell
    );
  };

  const handleSorting = () => {
    if (state.sort.value === 'asc') state.sort.value = '';
    else state.sort.value = state.sort.value === 'desc' ? 'asc' : 'desc';

    emit('update:sort', state.sort.value);
  };

  useInfiniteScroll(
    state.tableBodyRef,
    () => {
      emit('loadMore');
    },
    {
      distance: 50,
      direction: 'bottom',
    },
  );

  const getCalendarClasses = computed(() => {
    const borderClasses = classNames(' spr-border spr-border-color-weak spr-border-solid');
    const headerWrapper = classNames(
      'spr-bg-color-weak spr-flex spr-w-full spr-items-center spr-justify-between spr-p-size-spacing-sm',
    );

    const contentWrapper = classNames(
      ' spr-flex spr-flex-col spr-h-full spr-divide-color-weak spr-divide-x-0 spr-divide-y spr-divide-solid',
    );
    const calendarTable = classNames(
      'spr-h-full spr-table spr-w-full spr-table-fixed spr-border-collapse spr-border-spacing-0 spr-rounded-border',
    );
    const tableHeaderEmployeeName = classNames(
      'spr-sticky spr-left-0 spr-z-20 spr-background-color spr-body-xs-regular-medium spr-p-size-spacing-xs spr-text-left spr-overflow-hidden spr-h-full spr-border-x-0 spr-border-t-0 ',
    );
    const tableHeader = classNames(
      'spr-background-color spr-border-x-0 spr-border-t-0 spr-border-l  spr-p-size-spacing-sm spr-text-center',
    );
    const headerContent = classNames(
      'spr-flex  spr-flex-row spr-w-full spr-items-center spr-gap-size-spacing-3xs lg:spr-flex-col spr-overflow-hidden',
    );
    const headerDate = classNames(
      'spr-font-size-400 spr-line-height-500 spr-letter-spacing-dense spr-flex spr-h-size-spacing-md spr-w-size-spacing-md spr-items-center spr-justify-center spr-rounded-full spr-font-main spr-font-normal',
    );

    getFirstAndLastDayOfWeek();

    watch(state.searchTerm, (value, oldValue) => {
      if (value === oldValue) return; // Prevent unnecessary updates
      searchEmployee.value = value;
    });
    return {
      borderClasses,
      headerWrapper,
      contentWrapper,
      calendarTable,
      tableHeaderEmployeeName,
      tableHeader,
      headerContent,
      headerDate,
    };
  });

  return {
    weekDates,
    weekRangeDisplay,
    getCalendarClasses,
    getSortIcon,

    formatDate,
    isToday,
    prevWeek,
    nextWeek,
    goToToday,
    onCellClick,
    handleHover,
    showCopyShift,
    handleSorting,
    showCustomSlot,

    ...state,
  };
};
