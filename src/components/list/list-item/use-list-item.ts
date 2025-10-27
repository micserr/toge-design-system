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
  hasSublevels: ComputedRef<boolean>;
  showLozengeMode: ComputedRef<boolean>;
} {
  const { item, itemIcon, lozenge } = toRefs(props);

  const listItem = computed(() => item?.value);

  const hasIcon = computed(() => !!(itemIcon.value || item?.value!.icon));

  const iconName = computed(() => itemIcon.value || item?.value!.icon || '');

  const hasSublevels = computed(() => !!(item?.value!.sublevel && item?.value!.sublevel.length > 0));

  const showLozengeMode = computed(() => lozenge.value && !!item?.value!.lozengeProps);

  return {
    listItem,
    hasIcon,
    iconName,
    hasSublevels,
    showLozengeMode,
  };
}
