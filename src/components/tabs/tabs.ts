import type { PropType, ExtractPropTypes, Component } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

type List = {
  label: string;
  icon?: Component
  iconFill?: Component
  disabled?: boolean;
}

export const tabsPropTypes = {
  /**
   * @description Tabs Label
   */
  text: {
    type: String,
    default: '0',
  },
  /**
   * @description Tabs Type (underlined, not underlined)
   */
  underlined: {
    type: Boolean,
    default: false,
  },
  /**
   * @description Tabs List
   */
  list: {
    type: Array<List>,
    default: () => [],
  }
};

export const tabsEmitTypes = {
  tabIndex: (index: number): index is number => typeof index === 'number',
};

export type TabsPropTypes = ExtractPropTypes<typeof tabsPropTypes>;
export type TabsEmitTypes = typeof tabsEmitTypes;
