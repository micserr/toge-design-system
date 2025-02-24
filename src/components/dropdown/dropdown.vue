<template>
  <Menu
    v-model:shown="menuOpenedState"
    class="spr-w-fit"
    aria-id="dropdown-wrapper"
    distance="4"
    :placement="props.placement"
    :triggers="[]"
    :popper-hide-triggers="[]"
  >
    <div @click="menuOpenedState = !menuOpenedState">
      <slot />
    </div>

    <template #popper>
      <div class="spr-grid spr-gap-0.5">
        <div
          v-for="(item, index) in props.menu"
          :key="index"
          :class="[
            dropdownItemBaseClasses,
            {
              'spr-background-color-single-active': isItemSelected(item),
            },
          ]"
          @click="handleSelectedItem(item)"
        >
          <spr-checkbox v-if="props.dropdownType === 'multi-select'" v-model="checkboxModels[item.text]" />
          <div class="spr-flex spr-w-full spr-items-center">
            <span class="spr-text-xs">{{ item.text }}</span>
          </div>
          <Icon
            v-if="props.dropdownType === 'single-select' && isItemSelected(item)"
            class="spr-text-color-brand-base spr-w-[1.39em]"
            icon="ph:check"
          />
        </div>
      </div>
    </template>
  </Menu>
</template>

<script setup>
import { Menu } from 'floating-vue';
import { Icon } from '@iconify/vue';

import 'floating-vue/dist/style.css';

import { dropdownPropTypes, dropdownEmitTypes } from './dropdown';
import { useDropdown } from './use-dropdown';

import SprCheckbox from '../checkbox/checkbox.vue';

const props = defineProps(dropdownPropTypes);
const emit = defineEmits(dropdownEmitTypes);

const { dropdownItemBaseClasses, menuOpenedState, handleSelectedItem, isItemSelected, checkboxModels } = useDropdown(
  props,
  emit,
);
</script>
