<template>
  <div class="spr-flex spr-flex-row spr-h-fit">
    <spr-button v-bind="props" :class="buttonDropdownClasses.mainButtonClasses" @click="event => emits('click', event)">
      <slot />
    </spr-button>
    <spr-dropdown 
      id="button-dropdown-menu" 
      v-model="selectedMenu" 
      :menu-list="menuList" 
      :width="props.width" 
      :popper-width="props.popperWidth" 
      no-check-in-list
    >
      <spr-button v-bind="props" :fullwidth="false" :has-icon="true" :class="buttonDropdownClasses.dropdownButtonClasses">
        <icon icon="ph:caret-down" />
      </spr-button>
    </spr-dropdown>
  </div>
</template>

<script setup lang="ts">
import SprButton from "@/components/button/button.vue";
import SprDropdown from "@/components/dropdown/dropdown.vue";
import { Icon } from "@iconify/vue";
import { buttonDropdownEmits, buttonDropdownProps } from "./button-dropdown";
import { useButtonDropdown } from "./use-button-dropdown";

const props = defineProps(buttonDropdownProps);
const emits = defineEmits(buttonDropdownEmits)

const { selectedMenu, buttonDropdownClasses } = useButtonDropdown(props, emits);
</script>
