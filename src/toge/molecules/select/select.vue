<template>
  <div :class="classes.wrapper" :style="{ width: props.width }">
    <!-- Label row -->
    <label
      v-if="props.label || props.supportingLabel"
      :for="props.id"
      :class="classes.label"
    >
      <span v-if="props.label">{{ props.label }}</span>
      <span v-if="props.supportingLabel" :class="classes.supportingLabel">
        {{ props.supportingLabel }}
      </span>
    </label>

    <!-- Floating-vue Menu wrapper -->
    <Menu
      v-model:shown="isOpen"
      :distance="props.distance"
      :placement="props.placement"
      :strategy="props.popperStrategy === 'fixed' ? 'fixed' : 'absolute'"
      :disabled="props.disabled"
      :container="props.popperContainer || `#select-popper-${props.id}`"
      :delay="0"
      :triggers="['click']"
      :popper-triggers="['click']"
      :style="{ position: 'relative', width: props.width }"
      popper-class="toge-popover-popper"
      @apply-show="emit('popper-state', true)"
      @apply-hide="emit('popper-state', false)"
    >
      <div>
        <!-- Trigger button -->
        <button
          :id="props.id"
          type="button"
          :class="classes.trigger"
          :disabled="props.disabled"
          :aria-expanded="isOpen"
          :aria-haspopup="'listbox'"
          :aria-invalid="props.error || undefined"
        >
          <!-- Inner display area — slotable -->
          <div :class="classes.triggerInner">
            <slot name="display" :selected="selectedOption" :is-open="isOpen">
              <span
                class="spr:font-main spr-font-size-200"
                :class="triggerText ? 'spr-text-color-strong' : classes.placeholder"
              >
                {{ triggerText || props.placeholder }}
              </span>
            </slot>
          </div>

          <!-- Trailing icons -->
          <div :class="classes.trailingIcons">
            <span
              v-if="props.clearable && model !== null && model !== ''"
              :class="classes.clearBtn"
              role="button"
              aria-label="Clear selection"
              @click.stop="clearSelection"
            >
              <Icon icon="ph:x" class="spr:h-4 spr:w-4" />
            </span>
            <Icon
              v-if="props.inputLoader"
              icon="svg-spinners:270-ring"
              class="spr:h-4 spr:w-4 spr-text-color-supporting"
            />
            <Icon
              v-else
              icon="ph:caret-down"
              :class="[classes.chevron, { 'spr:rotate-180': isOpen }]"
              class="spr:h-4 spr:w-4"
            />
          </div>
        </button>

        <!-- Hidden native select for QA automation -->
        <select
          v-if="props.options.length"
          :value="model ?? ''"
          data-testid="qa-hidden-select"
          tabindex="-1"
          aria-hidden="true"
          hidden
        >
          <option
            v-for="item in props.options"
            :key="item.value"
            :value="item.value"
          >
            {{ item.text }}
          </option>
        </select>

        <!-- Popper anchor container -->
        <div
          :id="`select-popper-${props.id}`"
          :style="{ width: props.popperWidth }"
        />
      </div>

      <!-- Dropdown panel -->
      <template #popper>
        <div class="spr:rounded-border-radius-lg spr:border spr:border-solid spr-border-color-weak spr-background-color spr:shadow-md spr:overflow-hidden spr:p-2">
          <TogeList
            :items="(props.options as any)"
            :model-value="model !== null && model !== undefined ? [model] : []"
            :options-loader="props.optionsLoader"
            :infinite-scroll-loader="props.infiniteScrollLoader"
            class="spr:max-h-[300px]"
            @select="handleListSelect"
            @infinite-scroll-trigger="emit('infinite-scroll-trigger', $event)"
          >
            <template v-if="$slots.option" #item="{ item, selected }">
              <slot name="option" :option="item" :selected="selected" />
            </template>
            <template v-if="$slots.empty" #empty>
              <slot name="empty" />
            </template>
          </TogeList>
        </div>
      </template>
    </Menu>

    <!-- Helper text -->
    <div v-if="props.showHelper" :class="classes.helperRow">
      <div :class="classes.helperText">
        <Icon
          v-if="props.helperIcon"
          class="spr:h-5 spr:min-h-5 spr:w-5 spr:min-w-5"
          :icon="props.helperIcon"
        />
        <span>{{ props.helperText }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { Menu } from 'floating-vue'
import { Icon } from '@iconify/vue'
import type { SelectProps, SelectEmits, SelectSlots, SelectOption } from './select.types'
import { getSelectClasses } from './select.styles'
import TogeList from '../list/list.vue'
import type { ListItem } from '../list/list.types'

import 'floating-vue/dist/style.css'

const props = withDefaults(defineProps<SelectProps>(), {
  placeholder: 'Select an option',
  label: '',
  supportingLabel: '',
  distance: 6,
  placement: 'bottom',
  popperStrategy: 'absolute',
  popperWidth: '100%',
  popperContainer: '',
  width: '100%',
  disabled: false,
  error: false,
  active: false,
  clearable: false,
  showHelper: false,
  inputLoader: false,
  optionsLoader: false,
  infiniteScrollLoader: false,
  lozenge: false,
})

const emit = defineEmits<SelectEmits>()
defineSlots<SelectSlots>()

const model = defineModel<string | number | null>({ default: null })
const isOpen = ref(false)

const selectedOption = computed<SelectOption | null>(
  () => props.options.find((o) => o.value === model.value) ?? null,
)

const triggerText = computed<string>(
  () => props.displayText || selectedOption.value?.text || '',
)

const classes = computed(() =>
  getSelectClasses({
    disabled: props.disabled,
    error: props.error,
    active: props.active || isOpen.value,
  }),
)

function selectOption(option: SelectOption): void {
  if (option.disabled) return
  model.value = option.value
  emit('get-selected-option', option)
  isOpen.value = false
}

function handleListSelect(item: ListItem): void {
  selectOption(item as unknown as SelectOption)
}

function clearSelection(): void {
  model.value = null
  emit('get-selected-option', null)
}
</script>
