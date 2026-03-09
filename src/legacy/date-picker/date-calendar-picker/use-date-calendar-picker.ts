import { computed, ref, watch } from 'vue';
import { toRefs } from 'vue';
import dayjs from 'dayjs';

import type { SetupContext } from 'vue';
import type { DateCalendarPickerEmitTypes, DateCalendarPickerPropTypes } from './date-calendar-picker';

export const useDateCalendarPicker = (
  props: DateCalendarPickerPropTypes, 
  emit: SetupContext<DateCalendarPickerEmitTypes>['emit']
) => {
  // Extract reactive props
  const { 
    mode, 
  } = toRefs(props);

  // Internal state
  const currentTab = ref<string>('tab-calendar');
  const calendarTabPageData = ref({
    selectedMonth: props.selectedMonth ?? dayjs().month(),
    selectedYear: props.selectedYear ?? dayjs().year(),
    calendarDays: [] as Array<{ date: Date; inactive: boolean }>,
  });

  const yearTabPageData = ref({
    currentPage: 0,
    itemsPerPage: 12,
    yearsArray: Array.from(
      { length: props.minMaxYear.max - props.minMaxYear.min + 1 },
      (_, index) => props.minMaxYear.min + index,
    ).filter((year) => year <= props.minMaxYear.max && year >= props.minMaxYear.min),
  });

  // Computed properties
  const showMonthInput = computed(() => mode.value === 'full' || mode.value === 'month-year');
  const showDateInput = computed(() => mode.value === 'full');
  const showYearInput = computed(() => mode.value === 'full' || mode.value === 'month-year' || mode.value === 'year-only');

  const calendarDays = computed(() => calendarTabPageData.value.calendarDays);
  const selectedMonthComputed = computed(() => calendarTabPageData.value.selectedMonth);
  const selectedYearComputed = computed(() => calendarTabPageData.value.selectedYear);
  const selectedDayComputed = computed(() => props.modelValue ? dayjs(props.modelValue, props.format).date() : 0);

  // Calendar navigation computed properties
  const calendarTabIsMinMonth = computed(() =>
    dayjs()
      .year(calendarTabPageData.value.selectedYear)
      .month(calendarTabPageData.value.selectedMonth)
      .isSame(dayjs().year(props.minMaxYear.min).month(0), 'month'),
  );

  const calendarTabIsMaxMonth = computed(() =>
    dayjs()
      .year(calendarTabPageData.value.selectedYear)
      .month(calendarTabPageData.value.selectedMonth)
      .isSame(dayjs().year(props.minMaxYear.max).month(11), 'month'),
  );

  const yearTabIsPreviousButtonDisabled = computed(() => {
    return yearTabPageData.value.currentPage === 0;
  });

  const yearTabIsNextButtonDisabled = computed(() => {
    return (
      (yearTabPageData.value.currentPage + 1) * yearTabPageData.value.itemsPerPage >=
      yearTabPageData.value.yearsArray.length
    );
  });

  // Calendar update function
  const calendarTabUpdateCalendar = () => {
    const firstDay = dayjs()
      .year(calendarTabPageData.value.selectedYear)
      .month(calendarTabPageData.value.selectedMonth)
      .startOf('month')
      .day();

    const lastDate = dayjs()
      .year(calendarTabPageData.value.selectedYear)
      .month(calendarTabPageData.value.selectedMonth)
      .endOf('month')
      .date();

    const prevMonthDays = firstDay;
    const totalDays = prevMonthDays + lastDate;
    const nextMonthDays = totalDays % 7 === 0 ? 0 : 7 - (totalDays % 7);

    const calendar = [];

    // Previous month days
    for (let index = prevMonthDays; index > 0; index--) {
      const date = dayjs()
        .year(calendarTabPageData.value.selectedYear)
        .month(calendarTabPageData.value.selectedMonth)
        .date(-index + 1);

      calendar.push({ date, inactive: true });
    }

    // Current month days
    for (let index = 1; index <= lastDate; index++) {
      const date = dayjs()
        .year(calendarTabPageData.value.selectedYear)
        .month(calendarTabPageData.value.selectedMonth)
        .date(index);

      calendar.push({ date, inactive: false });
    }

    // Next month days
    for (let index = 1; index <= nextMonthDays; index++) {
      const date = dayjs()
        .year(calendarTabPageData.value.selectedYear)
        .month(calendarTabPageData.value.selectedMonth + 1)
        .date(index);

      calendar.push({ date, inactive: true });
    }

    calendarTabPageData.value.calendarDays = calendar.map((day) => ({ ...day, date: day.date.toDate() }));
    goBackToCalendarTab();
  };

  const goBackToCalendarTab = () => {
    if(props.mode === 'full' && currentTab.value !== 'tab-calendar') {      
      currentTab.value = 'tab-calendar';
    }
  }

  // Navigation functions
  const calendarTabPrevMonth = () => {
    if (calendarTabIsMinMonth.value) return;

    const newDate = dayjs()
      .year(calendarTabPageData.value.selectedYear)
      .month(calendarTabPageData.value.selectedMonth)
      .subtract(1, 'month');

    calendarTabPageData.value.selectedMonth = newDate.month();
    calendarTabPageData.value.selectedYear = newDate.year();

    calendarTabUpdateCalendar();
  };

  const calendarTabNextMonth = () => {
    if (calendarTabIsMaxMonth.value) return;

    const newDate = dayjs()
      .year(calendarTabPageData.value.selectedYear)
      .month(calendarTabPageData.value.selectedMonth)
      .add(1, 'month');

    calendarTabPageData.value.selectedMonth = newDate.month();
    calendarTabPageData.value.selectedYear = newDate.year();

    calendarTabUpdateCalendar();
  };

  const yearTabGoToPreviousPage = () => {
    if (yearTabPageData.value.currentPage > 0) {
      yearTabPageData.value.currentPage--;
    }
  };

  const yearTabGoToNextPage = () => {
    if (
      (yearTabPageData.value.currentPage + 1) * yearTabPageData.value.itemsPerPage <
      yearTabPageData.value.yearsArray.length
    ) {
      yearTabPageData.value.currentPage++;
    }
  };

  // Tab functions
  const getTabClasses = (tab: string) => {
    return {
      'spr-cursor-pointer': true,
      'spr-background-color-pressed !spr-shadow-button': currentTab.value === tab,
    };
  };

  const handleTabClick = (tab: string) => {    
    if (currentTab.value === tab && props.mode === 'full') {
      currentTab.value = 'tab-calendar';
    } else {
      currentTab.value = tab;
    }
  };

  // Month list for display
  const monthsList = ref(
    Array.from({ length: 12 }, (_, i) => ({
      text: dayjs().month(i).format('MMM'),
      fullText: dayjs().month(i).format('MMMM'),
      monthValue: i,
    })),
  );

  const getMonthObject = (field: string, value: string | number) => {
    return monthsList.value.find(
      (_month: { text: string; fullText: string; monthValue: number }) =>
        _month[field as keyof typeof _month].toString().toLowerCase() === value.toString().toLowerCase(),
    );
  };

  // Event handlers
  const handleCalendarDateUpdate = (day: { date: Date; inactive: boolean }) => {
    const selectedDate = dayjs(day.date);
    
    // Update internal state
    calendarTabPageData.value.selectedMonth = day.date.getMonth();
    calendarTabPageData.value.selectedYear = day.date.getFullYear();
    
    // Update calendar display
    calendarTabUpdateCalendar();
    
    // Emit events
    emit('update:month', day.date.getMonth());
    emit('update:year', day.date.getFullYear());
    emit('update:day', day.date.getDate());
    emit('update:modelValue', selectedDate.format(props.format));
  };

  const handleCalendarMonthUpdate = (month: number) => {
    calendarTabPageData.value.selectedMonth = month;
    emit('update:month', month);
  };

  const handleCalendarYearUpdate = (year: number) => {
    calendarTabPageData.value.selectedYear = year;
    emit('update:year', year);
  };

  const handleMonthTabMonthUpdate = (month: number) => {
    calendarTabPageData.value.selectedMonth = month;
    calendarTabUpdateCalendar();
    emit('update:month', month);
  };

  const handleYearTabYearUpdate = (year: number) => {
    calendarTabPageData.value.selectedYear = year;
    calendarTabUpdateCalendar();
    emit('update:year', year);
  };

  const handleYearTabCurrentPageUpdate = (page: number) => {
    yearTabPageData.value.currentPage = page;
  };

  // Wrapper functions for event handlers
  const handleCalendarDateUpdateWrapper = (day: { date: Date; inactive: boolean }) => {
    handleCalendarDateUpdate(day);
  };

  const handleCalendarMonthUpdateWrapper = (month: number) => {
    handleCalendarMonthUpdate(month);
  };

  const handleCalendarYearUpdateWrapper = (year: number) => {
    handleCalendarYearUpdate(year);
  };

  const handleMonthTabMonthUpdateWrapper = (month: number) => {
    handleMonthTabMonthUpdate(month);
  };

  const handleYearTabYearUpdateWrapper = (year: number) => {
    handleYearTabYearUpdate(year);
  };

  const handleYearTabCurrentPageUpdateWrapper = (page: number) => {
    handleYearTabCurrentPageUpdate(page);
  };

  // Initialize based on mode
  const getInitialTab = () => {
    switch (props.mode) {
      case 'month-year':
        return 'tab-months';
      case 'year-only':
        return 'tab-years';
      default:
        return 'tab-calendar';
    }
  };

  // Initialize component
  currentTab.value = getInitialTab();
  calendarTabUpdateCalendar();

  // Watch for prop changes
  watch(() => props.modelValue, (newValue) => {
    if (newValue) {
      const parsedDate = dayjs(newValue, props.format);
      if (parsedDate.isValid()) {
        calendarTabPageData.value.selectedMonth = parsedDate.month();
        calendarTabPageData.value.selectedYear = parsedDate.year();
        calendarTabUpdateCalendar();
      }
    }
  });

  watch(() => props.selectedMonth, (newMonth) => {
    if (newMonth !== undefined) {
      calendarTabPageData.value.selectedMonth = newMonth;
      calendarTabUpdateCalendar();
    }
  });

  watch(() => props.selectedYear, (newYear) => {
    if (newYear !== undefined) {
      calendarTabPageData.value.selectedYear = newYear;
      calendarTabUpdateCalendar();
    }
  });

  watch(() => props.mode, () => {
    currentTab.value = getInitialTab();
  });

  watch(() => props.minMaxYear, () => {
    yearTabPageData.value.yearsArray = Array.from(
      { length: props.minMaxYear.max - props.minMaxYear.min + 1 },
      (_, index) => props.minMaxYear.min + index,
    ).filter((year) => year <= props.minMaxYear.max && year >= props.minMaxYear.min);
    
    yearTabPageData.value.currentPage = 0;
  }, { deep: true });

  return {
    // State
    currentTab,
    calendarTabPageData,
    yearTabPageData,
    
    // Computed properties
    showMonthInput,
    showDateInput,
    showYearInput,
    calendarDays,
    selectedMonthComputed,
    selectedYearComputed,
    selectedDayComputed,
    calendarTabIsMinMonth,
    calendarTabIsMaxMonth,
    yearTabIsPreviousButtonDisabled,
    yearTabIsNextButtonDisabled,
    
    // Functions
    getTabClasses,
    handleTabClick,
    getMonthObject,
    calendarTabPrevMonth,
    calendarTabNextMonth,
    yearTabGoToPreviousPage,
    yearTabGoToNextPage,
    
    // Event handlers
    handleCalendarDateUpdateWrapper,
    handleCalendarMonthUpdateWrapper,
    handleCalendarYearUpdateWrapper,
    handleMonthTabMonthUpdateWrapper,
    handleYearTabYearUpdateWrapper,
    handleYearTabCurrentPageUpdateWrapper,
  };
};
