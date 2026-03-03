<template>
  <div :class="classes.wrapper">
    <template v-for="group in props.groups" :key="group.id">
      <Menu
        :placement="props.placement ?? 'bottom-start'"
        :distance="4"
        :triggers="['click']"
        :delay="0"
        :disabled="props.disabled"
        :popper-class="'attribute-filter-menu-popper'"
        auto-hide
      >
        <slot name="trigger" :group="group" :active-count="getActiveCount(group.id)">
          <button
            type="button"
            :class="[
              classes.trigger,
              getActiveCount(group.id) > 0 ? classes.triggerActive : '',
            ]"
            :disabled="props.disabled"
            :aria-disabled="props.disabled || undefined"
            :aria-expanded="undefined"
            :aria-haspopup="'listbox'"
          >
            <Icon v-if="group.icon" :icon="group.icon" width="16" height="16" />
            <span>{{ group.label }}</span>
            <span
              v-if="getActiveCount(group.id) > 0"
              class="spr-inline-flex spr-items-center spr-justify-center spr-min-w-[16px] spr-h-4 spr-px-1 spr-rounded-full spr-body-xs-regular spr-bg-color-brand-base spr-text-white"
            >
              {{ getActiveCount(group.id) }}
            </span>
            <Icon icon="ph:caret-down" width="12" height="12" />
          </button>
        </slot>

        <template #popper>
          <div :class="classes.menu" role="listbox" :aria-multiselectable="group.multiple ?? true">
            <template v-for="item in group.items" :key="item.value">
              <slot name="item" :item="item" :selected="isSelected(group.id, item.value)">
                <button
                  type="button"
                  :class="[
                    classes.menuItem,
                    item.disabled ? 'spr-text-color-disabled spr-cursor-not-allowed' : '',
                  ]"
                  :disabled="item.disabled"
                  :aria-disabled="item.disabled || undefined"
                  :aria-selected="isSelected(group.id, item.value)"
                  role="option"
                  @click="handleItemClick(group, item)"
                >
                  <Icon
                    v-if="isSelected(group.id, item.value)"
                    icon="ph:check"
                    width="16"
                    height="16"
                    class="spr-text-color-brand-base spr-shrink-0"
                  />
                  <span v-else class="spr-w-4 spr-shrink-0" />
                  <span>{{ item.label }}</span>
                </button>
              </slot>
            </template>
          </div>
        </template>
      </Menu>
    </template>

    <button
      v-if="hasClearableSelection"
      type="button"
      :class="classes.clearBtn"
      @click="handleClearAll"
    >
      Clear all
    </button>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { Menu } from 'floating-vue'
import 'floating-vue/dist/style.css'
import type {
  AttributeFilterProps,
  AttributeFilterEmits,
  AttributeFilterSlots,
  AttributeFilterGroup,
  AttributeFilterItem,
} from './attribute-filter.types'
import { getAttributeFilterClasses } from './attribute-filter.styles'

const props = withDefaults(defineProps<AttributeFilterProps>(), {
  groups: () => [],
  disabled: false,
  placement: 'bottom-start',
})

const model = defineModel<import('./attribute-filter.types').AttributeFilterValue>({ default: () => ({}) })

const emit = defineEmits<AttributeFilterEmits>()

defineSlots<AttributeFilterSlots>()

const classes = computed(() => getAttributeFilterClasses())

function isSelected(groupId: string, value: string | number): boolean {
  return (model.value[groupId] ?? []).includes(value)
}

function getActiveCount(groupId: string): number {
  return (model.value[groupId] ?? []).length
}

const hasClearableSelection = computed(() =>
  Object.values(model.value).some((values) => values.length > 0),
)

function handleItemClick(group: AttributeFilterGroup, item: AttributeFilterItem): void {
  if (item.disabled || props.disabled) return

  const currentGroupValues: (string | number)[] = model.value[group.id] ?? []
  let newGroupValues: (string | number)[]

  const isMultiple = group.multiple ?? true

  if (isMultiple) {
    if (currentGroupValues.includes(item.value)) {
      newGroupValues = currentGroupValues.filter((v) => v !== item.value)
    } else {
      newGroupValues = [...currentGroupValues, item.value]
    }
  } else {
    newGroupValues = currentGroupValues.includes(item.value) ? [] : [item.value]
  }

  const newValue: import('./attribute-filter.types').AttributeFilterValue = {
    ...model.value,
    [group.id]: newGroupValues,
  }

  model.value = newValue
  emit('filter-change', newValue)
}

function handleClearAll(): void {
  const cleared: import('./attribute-filter.types').AttributeFilterValue = {}
  for (const group of props.groups) {
    cleared[group.id] = []
  }
  model.value = cleared
  emit('filter-change', cleared)
  emit('clear')
}
</script>
