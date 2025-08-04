<template>
  <div class="spr-flex spr-h-fit spr-flex-row">
    <spr-button
      v-bind="props"
      :class="buttonDropdownClasses.mainButtonClasses"
      @click="(event) => emits('click', event)"
    >
      <slot />
    </spr-button>
    <spr-dropdown
      :id="props.dropdownId"
      v-model="selectedMenu"
      :menu-list="menuList"
      :width="props.width"
      :popper-width="props.popperWidth"
      :popper-inner-width="props.popperInnerWidth"
      :placement="props.placement"
      no-check-in-list
    >
      <spr-button
        v-bind="props"
        :fullwidth="false"
        :has-icon="true"
        :class="buttonDropdownClasses.dropdownButtonClasses"
      >
        <icon icon="ph:caret-down" />
      </spr-button>
    </spr-dropdown>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

import { buttonDropdownEmits, buttonDropdownProps } from './button-dropdown';
import { useButtonDropdown } from './use-button-dropdown';

import SprButton from '@/components/button/button.vue';
import SprDropdown from '@/components/dropdown/dropdown.vue';

const props = defineProps(buttonDropdownProps);
const emits = defineEmits(buttonDropdownEmits);

const { selectedMenu, buttonDropdownClasses } = useButtonDropdown(props, emits);
</script>
