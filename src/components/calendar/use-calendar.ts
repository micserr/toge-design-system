import { computed, SetupContext, toRefs, ref, watch } from 'vue';
import dayjs from 'dayjs';
import classNames from 'classnames';
import { useVModel } from '@vueuse/core';

import type { CalendarPropTypes, CalendarEmitTypes, SelectedShift } from './calendar';

export const useCalendar = (props: CalendarPropTypes, emit: SetupContext<CalendarEmitTypes>['emit']) => {
  const { initialDate, companyOptions, departmentOptions, branchOptions } = toRefs(props);

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
  };

  const searchEmployee = useVModel(props, 'search', emit);
  const selectedCell = useVModel(props, 'selectedCell', emit);
  const selectedCompany = useVModel(props, 'selectedCompany', emit);
  const selectedDepartment = useVModel(props, 'selectedDepartment', emit);
  const selectedBranch = useVModel(props, 'selectedBranch', emit);

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

  const goToToday = () => {
    state.currentDate.value = dayjs();
  };

  const onShiftClick = (selected: SelectedShift) => {
    selectedCell.value = selected;
  };

  const handleHover = (isHover: boolean, index: number, employeeId: number) => {
    state.isHover.value = isHover;
    state.hoveredCell.value = isHover ? index : null;
    state.employeeId.value = employeeId;
  };

  const showAddShift = (index: number, employeeId: number) => {
    return state.hoveredCell.value === index && state.isHover.value && state.employeeId.value === employeeId;
  };

  const handleFilter = (filter: string, selected: string) => {
    if (filter === 'company') {
      const foundCompany = companyOptions.value.find((item) => item.value === selected);
      state.selectedCompany.value = foundCompany?.text ?? '';
      selectedCompany.value = selected;
    }

    if (filter === 'department') {
      const foundCompany = departmentOptions.value.find((item) => item.value === selected);
      state.selectedDepartment.value = foundCompany?.text ?? '';
      selectedDepartment.value = selected;
    }

    if (filter === 'branch') {
      const foundCompany = branchOptions.value.find((item) => item.value === selected);
      state.selectedBranch.value = foundCompany?.text ?? '';
      selectedBranch.value = selected;
    }
  };

  watch(state.searchTerm, (value, oldValue) => {
    if (value === oldValue) return; // Prevent unnecessary updates
    searchEmployee.value = value;
  });

  const getCalendarClasses = computed(() => {
    const borderClasses = classNames(' spr-border spr-border-color-weak spr-border-solid');
    const headerWrapper = classNames(
      'spr-bg-color-weak spr-flex spr-w-full spr-items-center spr-justify-between spr-border-x-0 spr-border-b spr-border-t-0 spr-p-size-spacing-sm',
    );

    const contentWrapper = classNames('spr-divide-color-weak spr-divide-x-0 spr-divide-y spr-divide-solid');
    const calendarFilter = classNames('spr-grid spr-grid-cols-4 spr-gap-size-spacing-2xs spr-p-size-spacing-xs');
    const calendarTable = classNames(
      'spr-table spr-w-full spr-table-fixed spr-border-collapse spr-border-spacing-0 spr-overflow-hidden spr-rounded-border',
    );
    const tableHeaderEmployeeName = classNames(
      'spr-body-xs-regular-medium spr-border-x spr-border-y spr-p-size-spacing-xs spr-text-left first:spr-border-l-0 spr-overflow-hidden',
    );
    const tableHeader = classNames('spr-border-x-0 spr-border-y spr-border-l spr-p-size-spacing-sm spr-text-center');
    const headerContent = classNames(
      'spr-flex  spr-flex-row spr-w-full spr-items-center spr-gap-size-spacing-3xs lg:spr-flex-col spr-overflow-hidden',
    );
    const headerDate = classNames(
      'spr-font-size-400 spr-line-height-500 spr-letter-spacing-dense spr-flex spr-h-size-spacing-md spr-w-size-spacing-md spr-items-center spr-justify-center spr-rounded-full spr-font-main spr-font-normal',
    );

    return {
      borderClasses,
      headerWrapper,
      contentWrapper,
      calendarFilter,
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

    formatDate,
    isToday,
    prevWeek,
    nextWeek,
    goToToday,
    onShiftClick,
    handleHover,
    showAddShift,
    handleFilter,

    ...state,
  };
};
