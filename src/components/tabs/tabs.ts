import type { PropType, ExtractPropTypes, Component } from 'vue';
import type { BadgePropTypes } from '../badge/badge';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

type List = {
  label: string;
  icon?: string;
  iconFill?: Component;
  disabled?: boolean;
  badge?: BadgePropTypes;
};

export const tabsPropTypes = {
  /**
   * @description Tabs List,
   * option list: label, icon, iconFill, disabled
   */
  list: {
    type: Array<List>,
    default: () => [],
  },
  /**
   * @description Tabs Type (underlined, not underlined)
   */
  underlined: {
    type: Boolean,
    default: false,
  },
  /**
   * @description Active Tab
   */
  activeTab: {
    type: String,
    default: '',
  },
  showBadge: {
    type: Boolean,
    default: false,
  }
};

export const tabsEmitTypes = {
  tabIndex: (index: number): index is number => typeof index === 'number',
};

export type TabsPropTypes = ExtractPropTypes<typeof tabsPropTypes>;

export type TabsEmitTypes = typeof tabsEmitTypes;
