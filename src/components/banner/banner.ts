import { PropType, type ExtractPropTypes } from 'vue';

export const BANNER_TYPE = ['success', 'error', 'info', 'pending', 'caution'] as const;

export const bannerProps = {
  type: {
    type: String as PropType<(typeof BANNER_TYPE)[number]>,
    validator: (value: (typeof BANNER_TYPE)[number]) => BANNER_TYPE.includes(value),
    default: 'success',
  },
  showCloseButton: {
    type: Boolean,
    default: false,
  },
  message: {
    type: String,
  }
};

export type BannerPropTypes = ExtractPropTypes<typeof bannerProps>;
