import { computed, SetupContext } from 'vue';
import classNames from 'classnames';

import type { CalendarCellPropTypes, CalendarCellEmitTypes } from './calendar-cell';

export const useCalendarCell = (props: CalendarCellPropTypes, emit: SetupContext<CalendarCellEmitTypes>['emit']) => {
  const offlineStatus = ['restday', 'vacation', 'holiday', 'exempt', 'sick', 'emergency'];
  const shiftLabels: Record<string, string> = {
    standard: 'Standard Day Shift',
    'early-morning': 'Early Morning',
    'late-morning': 'Late Morning',
    afternoon: 'Afternoon Shift',
    graveyard: 'Graveyard Shift',
    broken: 'Broken Shift',
    'multi-break': 'Multi Break Shift',
    'flexible-break': 'Flexible Break Shift',
    'flexible-weekly': 'Flexible Weekly',
    'flexible-daily': 'Flexible Daily',
    'fixed-flexible': 'Fixed Flexible',
    restday: 'RESTDAY',
    vacation: 'VACATION',
    emergency: 'EMERGENCY',
    exempt: 'EXEMPT',
    sick: 'SICK',
    holiday: 'HOLIDAY',
  } as const;

  const iconMap: Record<string, string> = {
    restday: 'ph:prohibit',
    holiday: 'ph:prohibit',
    exempt: 'ph:prohibit',
    vacation: 'ph:island',
    sick: 'ph:pill',
    emergency: 'ph:ambulance',
  } as const;

  const typeClasses: Record<string, string> = {
    standard: 'spr-border-kangkong-700 spr-bg-kangkong-50',
    'early-morning': 'spr-border-blueberry-700 spr-bg-blueberry-50',
    'late-morning': 'spr-border-color-pending-base spr-bg-mango-50',
    afternoon: 'spr-border-carrot-600 spr-bg-carrot-50',
    graveyard: 'spr-border-wintermelon-600 spr-bg-wintermelon-50',
    broken: 'spr-border-ubas-700 spr-bg-ubas-50',
    'multi-break': 'spr-border-[#F652F2] spr-bg-[#FDECFD]',
    'flexible-break': 'spr-border-[#24B155] spr-bg-[#CEFFE1]',
    'flexible-weekly': 'spr-border-[#539300] spr-bg-[#EBFFD2]',
    'flexible-daily': 'spr-border-[#0084CB] spr-bg-[#D4F0FF]',
    'fixed-flexible': 'spr-border-[#C771A6] spr-bg-[#FFF2FA]',
  };

  const hasContent = computed(() => props.title || props.description || getShiftLabel.value);
  const hasIconStatus = computed(() => offlineStatus.includes(props.type) && props.status != 'error');
  const isError = computed(() => props.status === 'error');

  const getShiftLabel = computed((): string => {
    return shiftLabels[props.type] || props.type;
  });

  const getCellIcon = computed((): string => {
    return iconMap[props.type] || '';
  });

  const getCellClasses = computed((): string => {
    return typeClasses[props.type] || 'spr-border-color-supporting spr-background-color-surface';
  });

  const getCalendarCellClassess = computed(() => {
    const calendarCellWrapper = classNames(
      'spr-flex spr-items-center  spr-p-size-spacing-3xs spr-gap-size-spacing-3xs spr-relative spr-rounded-lg spr-border-2 spr-transition-all  sm:spr-flex-col spr-overflow-hidden',
      {
        'spr-w-full': props.fullwidth,
        'spr-max-w-[217px]': !props.fullwidth,
        'hover:spr-drop-shadow-sm  spr-cursor-pointer': !props.viewOnly,
      },
    );

    const statusCellClasses = classNames({
      'spr-border-dashed': props.status === 'pending',
      'spr-border-solid spr-border-color-danger-base': props.status === 'error',
      'spr-border-solid': !props.status || (props.status !== 'pending' && props.status !== 'error'),
    });

    const titleClasses = classNames('spr-text-color-strong spr-body-sm-regular-medium', {
      'spr-text-color-danger-base': props.status === 'error',
    });

    const descriptionClasses = classNames('spr-text-color-strong spr-body-sm-regular', {
      'spr-text-color-danger-base': props.status === 'error',
    });

    const getTypeLabelClassess = classNames('spr-text-color-strong spr-body-sm-regular', {
      'spr-text-color-danger-base': props.status === 'error',
      'spr-text-color-strong spr-body-sm-regular-medium': offlineStatus.includes(props.type),
    });

    const getMainClasses = classNames(calendarCellWrapper, getCellClasses.value, statusCellClasses);

    return {
      titleClasses,
      descriptionClasses,
      getTypeLabelClassess,
      getMainClasses,
      getCellClasses,
    };
  });

  const handleClick = (evt: MouseEvent) => {
    if (props.viewOnly) {
      evt.stopPropagation();

      return;
    }

    emit('onClick', evt);
  };

  return {
    getCalendarCellClassess,
    getCellIcon,
    offlineStatus,
    getShiftLabel,
    hasIconStatus,
    isError,
    hasContent,
    handleClick,
  };
};
