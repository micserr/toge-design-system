import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

const Tones = ['plain', 'neutral', 'success', 'information', 'pending', 'caution', 'accent', 'danger'] as const;
const BORDER_RADIUS_SIZE = ['xl', 'lg', 'md', 'sm', 'xs', '2xs'] as const;

export const cardPropTypes = {
  id: {
    type: String,
  },
  tone: {
    type: String as PropType<(typeof Tones)[number] | undefined>,
    validator: (val: string | undefined) => !val || Tones.includes(val as (typeof Tones)[number]),
  },
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
  borderWidth: {
    type: String,
    default: '1px',
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

  flexbox: {
    type: Boolean,
    default: false,
  },
};

export type CardPropTypes = ExtractPropTypes<typeof cardPropTypes>;
