import type { PropType, ExtractPropTypes } from 'vue';
import type { MenuListType } from '../list';
export const listItemPropTypes = {
  item: {
    type: Object as PropType<MenuListType>,
    required: true,
  },
  isSelected: {
    type: Boolean,
    required: true,
  },
  classes: {
    type: [String, Array, Object] as PropType<string | string[] | Record<string, boolean>>,
    required: true,
  },
  multiSelect: {
    type: Boolean,
    default: false,
  },
  lozenge: {
    type: Boolean,
    default: false,
  },
  ladderized: {
    type: Boolean,
    default: false,
  },
  noCheck: {
    type: Boolean,
    default: false,
  },
  itemIcon: {
    type: String,
    default: '',
  },
  itemIconTone: {
    type: String,
    default: 'plain',
  },
  itemIconFill: {
    type: Boolean,
    default: false,
  },
  disabledUnselectedItems: {
    type: Boolean,
    default: false,
  },
  radioList: {
    type: Boolean,
    default: false,
  },
  avatarVariant: {
    type: String,
    default: '',
  },
  avatarSource: {
    type: String,
    default: '',
  },
};

export const listItemEmitTypes = {
  select: () => true,
};

export type ListItemPropTypes = ExtractPropTypes<typeof listItemPropTypes>;
export type ListItemEmitTypes = typeof listItemEmitTypes;
