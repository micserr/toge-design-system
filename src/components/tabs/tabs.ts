import type { PropType, ExtractPropTypes, Component } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

type List = {
  label: string;
  icon?: string;
  iconFill?: Component;
  disabled?: boolean;
};

export const tabsPropTypes = {
  /**
   * @description Tabs Type (underlined, not underlined)
   */
  underlined: {
    type: Boolean,
    default: false,
  },
  /**
   * @description Tabs List,
   * option list: label, icon, iconFill, disabled
   */
  list: {
    type: Array<List>,
    default: () => [],
  },
};

export const tabsEmitTypes = {
  tabIndex: (index: number): index is number => typeof index === 'number',
};

export type TabsPropTypes = ExtractPropTypes<typeof tabsPropTypes>;

export type TabsEmitTypes = typeof tabsEmitTypes;
