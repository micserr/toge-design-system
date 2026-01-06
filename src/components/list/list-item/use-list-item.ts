import { computed, toRefs } from 'vue';

import type { ComputedRef } from 'vue';
import type { ListItemPropTypes } from './list-item';

export function useListItem(
  props: ListItemPropTypes,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _emit?: unknown,
): {
  listItem: ComputedRef<ListItemPropTypes['item']>;
  hasIcon: ComputedRef<boolean>;
  iconName: ComputedRef<string>;
  iconClasses: ComputedRef<string>;
  hasSublevels: ComputedRef<boolean>;
  showLozengeMode: ComputedRef<boolean>;
  hasAvatar: ComputedRef<boolean>;
} {
  const { item, itemIcon, itemIconTone, itemIconFill, lozenge, avatarVariant } = toRefs(props);

  const listItem = computed(() => item?.value);

  const hasIcon = computed(() => !!(itemIcon.value || item?.value!.icon));

  const hasAvatar = computed(() => !!(avatarVariant.value && !hasIcon.value));

  const iconName = computed(() => itemIcon.value || item?.value!.icon || '');

  const iconClasses = computed(() => {
    // If item has a specific iconColor, use that
    if (item?.value?.iconColor) {
      return item.value.iconColor;
    }

    const tone = itemIconTone?.value || 'plain';
    const fill = itemIconFill?.value || false;

    const toneClasses: Record<string, string> = {
      plain: 'spr-text-color-base',
      pending: fill
        ? 'spr-bg-yellow-100 spr-text-yellow-700 spr-rounded-md spr-p-1.5'
        : 'spr-text-yellow-600 spr-rounded-md spr-p-1.5',
      information: fill
        ? 'spr-bg-blue-100 spr-text-blue-700 spr-rounded-md spr-p-1.5'
        : 'spr-text-blue-600 spr-rounded-md spr-p-1.5',
      success: fill
        ? 'spr-bg-green-100 spr-text-green-700 spr-rounded-md spr-p-1.5'
        : 'spr-text-green-600 spr-rounded-md spr-p-1.5',
      danger: fill
        ? 'spr-bg-red-100 spr-text-red-700 spr-rounded-md spr-p-1.5'
        : 'spr-text-red-600 spr-rounded-md spr-p-1.5',
      neutral: fill
        ? 'spr-bg-gray-100 spr-text-gray-700 spr-rounded-md spr-p-1.5'
        : 'spr-text-gray-600 spr-rounded-md spr-p-1.5',
      caution: fill
        ? 'spr-bg-orange-100 spr-text-orange-700 spr-rounded-md spr-p-1.5'
        : 'spr-text-orange-600 spr-rounded-md spr-p-1.5',
    };

    return toneClasses[tone] || toneClasses['plain'];
  });

  const hasSublevels = computed(() => !!(item?.value!.sublevel && item?.value!.sublevel.length > 0));

  const showLozengeMode = computed(() => lozenge.value && !!item?.value!.lozengeProps);

  return {
    listItem,
    hasIcon,
    hasAvatar,
    iconName,
    iconClasses,
    hasSublevels,
    showLozengeMode,
  };
}
