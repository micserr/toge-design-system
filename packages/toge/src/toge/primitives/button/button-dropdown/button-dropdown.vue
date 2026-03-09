<template>
  <div class="spr-flex spr-h-fit spr-flex-row">
    <TogeButton
      v-bind="buttonPassthroughProps"
      :class="classes.mainButtonClasses"
      @click="(evt: MouseEvent) => emit('click', evt)"
    >
      <slot />
    </TogeButton>
    <SprDropdown
      :id="props.dropdownId"
      v-model="selectedMenu"
      :menu-list="props.menuList"
      :width="props.width"
      :popper-width="props.popperWidth"
      :popper-inner-width="props.popperInnerWidth"
      :placement="props.placement"
      no-check-in-list
    >
      <TogeButton
        v-bind="buttonPassthroughProps"
        :fullwidth="false"
        :has-icon="true"
        :class="classes.dropdownButtonClasses"
      >
        <Icon icon="ph:caret-down" />
      </TogeButton>
    </SprDropdown>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useVModel } from '@vueuse/core'
import { Icon } from '@iconify/vue'

import type { ButtonDropdownProps, ButtonDropdownEmits } from './button-dropdown.types'
import { getButtonDropdownClasses } from './button-dropdown.styles'

import TogeButton from '../button.vue'
import SprDropdown from '@/components/dropdown/dropdown.vue'

const props = withDefaults(defineProps<ButtonDropdownProps>(), {
  modelValue: () => [],
  tone: 'neutral',
  variant: 'primary',
  size: 'medium',
  type: 'button',
  disabled: false,
  hasIcon: false,
  fullwidth: false,
  placement: 'bottom',
  width: 'fit-content',
  popperWidth: 'fit-content',
  popperInnerWidth: 'unset',
})

const emit = defineEmits<ButtonDropdownEmits>()

defineSlots<{
  default(props: {}): any
}>()

const selectedMenu = useVModel(props, 'modelValue', emit)

const classes = computed(() =>
  getButtonDropdownClasses({
    tone: props.tone!,
    variant: props.variant!,
    disabled: props.disabled!,
  }),
)

// Pass shared button props through to both TogeButton instances
const buttonPassthroughProps = computed(() => ({
  tone: props.tone,
  variant: props.variant,
  size: props.size,
  type: props.type,
  disabled: props.disabled,
}))
</script>
