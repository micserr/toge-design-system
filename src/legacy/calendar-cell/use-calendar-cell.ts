import { computed, SetupContext, toRefs } from 'vue';
import classNames from 'classnames';

import type { CalendarCellPropTypes, CalendarCellEmitTypes } from './calendar-cell';

export const useCalendarCell = (props: CalendarCellPropTypes, emit: SetupContext<CalendarCellEmitTypes>['emit']) => {
  const {
    title,
    description,
    type,
    status,
    subDescription,
    icon,
    fullwidth,
    viewOnly,
    loading,
    customColor,
    customBorderSize,
    lineThrough,
    disabled,
  } = toRefs(props);
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

  const getCellIcon = computed((): string => {
    return icon.value || iconMap[type.value];
  });
  const hasContent = computed(() => title.value || description.value || getShiftLabel.value);
  const hasIconStatus = computed(() => status.value != 'error' && getCellIcon.value);
  const isError = computed(() => status.value === 'error');

  const getShiftLabel = computed((): string => {
    return subDescription.value || shiftLabels[type.value];
  });

  const getCellClasses = computed((): string => {
    return typeClasses[type.value] || 'spr-border-color-supporting spr-background-color-surface';
  });

  const getCustomColorStyles = computed(() => {
    if (!customColor.value || !customColor.value.startsWith('#')) return {};
    if (customColor.value === '#FFFFFF') {
      return {
        borderColor: '#B8C1C0',
        backgroundColor: customColor.value,
      };
    }

    const opacity = '20'; // 20 in hex = 12.5% opacity

    return {
      borderColor: customColor.value,
      backgroundColor: customColor.value.startsWith('#') ? `${customColor.value}${opacity}` : customColor.value,
    };
  });

  const getCalendarCellClassess = computed(() => {
    const calendarCellWrapper = classNames(
      'spr-flex spr-items-center spr-p-size-spacing-3xs spr-gap-size-spacing-3xs spr-relative spr-rounded-lg spr-border-2 spr-transition-all spr-flex-col sm:spr-flex-row spr-overflow-hidden',

      {
        'spr-w-full': fullwidth.value,
        'spr-max-w-[217px]': !fullwidth.value,
        'spr-cursor-pointer': !viewOnly.value,
        'spr-h-[80px] spr-skeletal-loader': loading.value,
        [`spr-border-[${customBorderSize.value}px]`]: customBorderSize.value,
      },
    );

    const statusCellClasses = classNames({
      'spr-border-dashed': status.value === 'pending',
      'spr-border-solid spr-border-color-danger-base': status.value === 'error',
      'spr-border-solid': !status.value || (status.value !== 'pending' && status.value !== 'error'),
      'spr-border-opacity-50 ': disabled.value,
    });

    const titleClasses = classNames('spr-text-color-strong spr-body-sm-regular-medium', {
      'spr-text-color-danger-base': status.value === 'error',
    });

    const descriptionClasses = classNames('spr-text-color-strong spr-body-sm-regular', {
      'spr-text-color-danger-base': status.value === 'error',
    });

    const getTypeLabelClassess = classNames('spr-text-color-strong spr-body-sm-regular', {
      'spr-text-color-danger-base': status.value === 'error',
      'spr-text-color-strong spr-body-sm-regular-medium': offlineStatus.includes(type.value),
    });

    const getMainClasses = classNames(calendarCellWrapper, getCellClasses.value, statusCellClasses);

    const getTextFormatClasses = classNames('spr-break-words', {
      'spr-line-through': lineThrough.value,
      'spr-opacity-50': disabled.value,
    });

    return {
      titleClasses,
      descriptionClasses,
      getTypeLabelClassess,
      getMainClasses,
      getCellClasses,
      getTextFormatClasses,
    };
  });

  const handleClick = (evt: MouseEvent) => {
    if (viewOnly.value) {
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
    getCustomColorStyles,
  };
};
