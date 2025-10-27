import type { ComputedRef } from 'vue';
import { computed } from 'vue';

import type { ListItemPropTypes } from './list-item';

export function useListItem(
  props: ListItemPropTypes,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _emit?: unknown,
): {
  hasIcon: ComputedRef<boolean>;
  iconName: ComputedRef<string>;
  hasSublevels: ComputedRef<boolean>;
  showLozengeMode: ComputedRef<boolean>;
} {
  const hasIcon = computed(() => !!(props.itemIcon || props.item!.icon));

  const iconName = computed(() => props.itemIcon || props.item!.icon || '');

  const hasSublevels = computed(() => !!(props.item!.sublevel && props.item!.sublevel.length > 0));

  const showLozengeMode = computed(() => props.lozenge && !!props.item!.lozengeProps);

  return {
    hasIcon,
    iconName,
    hasSublevels,
    showLozengeMode,
  };
}
