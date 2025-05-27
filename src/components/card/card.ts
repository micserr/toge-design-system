import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

const BORDER_RADIUS_SIZE = ['xl', 'lg', 'md', 'sm', 'xs', '2xs'] as const;

export const cardPropTypes = {
  title: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  },
  headerIcon: {
    type: String,
    default: '',
  },
  showHeader: {
    type: Boolean,
    default: true,
  },
  showFooter: {
    type: Boolean,
    default: true,
  },
  borderRadiusSize: {
    type: String,
    validator: (value: (typeof BORDER_RADIUS_SIZE)[number]) => BORDER_RADIUS_SIZE.includes(value),
    default: 'xl',
  },
  hasCollapsible: {
    type: Boolean,
    default: false,
  },
  isCollapsibleOpen: {
    type: Boolean,
    default: false,
  },
  hasContentPadding: {
    type: Boolean,
    default: true,
  },
};

export type CardPropTypes = ExtractPropTypes<typeof cardPropTypes>;
