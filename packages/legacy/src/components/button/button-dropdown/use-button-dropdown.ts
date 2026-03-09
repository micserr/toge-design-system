import { computed, toRefs, type SetupContext } from 'vue';
import { useVModel } from '@vueuse/core';

import classNames from 'classnames';

import type { ButtonDropdownEmitTypes, ButtonDropdownPropTypes } from './button-dropdown';

export const useButtonDropdown = (
  props: ButtonDropdownPropTypes,
  emits: SetupContext<ButtonDropdownEmitTypes>['emit'],
) => {
  const { tone, variant, disabled } = toRefs(props);

  const selectedMenu = useVModel(props, 'modelValue', emits);

  const buttonDropdownClasses = computed(() => {
    const mainButtonClasses = classNames('spr-rounded-r-none spr-border-r', {
      '!spr-border-solid spr-border-l-0 spr-border-t-0 spr-border-b-0': disabled.value && variant.value !== 'secondary',
      'spr-border-r-kangkong-800': tone.value === 'success' && !disabled.value,
      'spr-border-r-mushroom-200': tone.value !== 'success' || (tone.value === 'success' && disabled.value),
    });

    const dropdownButtonClasses = classNames('spr-rounded-l-none', {
      'spr-border-solid spr-border-l-0': variant.value === 'secondary',
      'spr-border-l-transparent': variant.value !== 'secondary',
    });

    return { mainButtonClasses, dropdownButtonClasses };
  });

  return {
    selectedMenu,
    buttonDropdownClasses,
  };
};
