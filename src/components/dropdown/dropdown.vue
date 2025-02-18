<template>
  <Menu
    v-model:shown="menuOpened"
    class="w-fit"
    aria-id="dropdown-wrapper"
    distance="4"
    :placement="props.placement"
    :triggers="[]"
    :popper-hide-triggers="[]"
  >
    <div @click="menuOpened = !menuOpened">
      <slot />
    </div>

    <template #popper>
      <div class="grid gap-0.5">
        <div
          v-for="(item, index) in props.menu"
          :key="index"
          :class="[
            dropdownItemBaseClasses,
            {
              'background-color-single-active': isItemSelected(item),
            },
          ]"
          @click="handleSelectedItem(item)"
        >
          <spr-checkbox v-if="props.dropdownType === 'multi-select'" v-model="checkboxModels[item.text]" />
          <div class="flex w-full items-center">
            <span class="text-xs">{{ item.text }}</span>
          </div>
          <Icon
            v-if="props.dropdownType === 'single-select' && isItemSelected(item)"
            class="text-color-brand-base w-[1.39em]"
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

const { dropdownItemBaseClasses, menuOpened, handleSelectedItem, isItemSelected, checkboxModels } = useDropdown(
  props,
  emit,
);
</script>
