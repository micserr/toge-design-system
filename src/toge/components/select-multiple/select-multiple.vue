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
      :container="props.popperContainer || `#select-multiple-popper-${props.id}`"
      :delay="0"
      :style="{ position: 'relative', width: props.width }"
      @apply-show="emit('popper-state', true)"
      @apply-hide="emit('popper-state', false)"
    >
      <!-- Trigger -->
      <div>
        <button
          :id="props.id"
          type="button"
          :class="classes.trigger"
          :disabled="props.disabled"
          :aria-expanded="isOpen"
          :aria-haspopup="'listbox'"
          :aria-multiselectable="true"
          :aria-invalid="props.error || undefined"
        >
          <!-- Chips / placeholder area -->
          <div :class="classes.triggerInner">
            <!-- Persistent display text when set -->
            <template v-if="props.persistentDisplayText">
              <span :class="classes.placeholder">{{ props.persistentDisplayText }}</span>
            </template>

            <!-- Selected chips -->
            <template v-else-if="selectedOptions.length">
              <span
                v-for="option in selectedOptions"
                :key="option.value"
                :class="classes.chip"
              >
                <slot name="chip" :option="option">
                  <span :class="classes.chipText">{{ option.text }}</span>
                  <span
                    :class="classes.chipClose"
                    role="button"
                    :aria-label="`Remove ${option.text}`"
                    @click.stop="removeOption(option.value)"
                  >
                    <Icon icon="ph:x" class="spr-h-3 spr-w-3" />
                  </span>
                </slot>
              </span>
            </template>

            <!-- Placeholder -->
            <template v-else>
              <span :class="classes.placeholder">{{ props.placeholder }}</span>
            </template>
          </div>

          <!-- Trailing icons -->
          <div :class="classes.trailingIcons">
            <!-- Clear all button -->
            <span
              v-if="props.clearable && model.length"
              :class="classes.clearBtn"
              role="button"
              aria-label="Clear all selections"
              @click.stop="clearAll"
            >
              <Icon icon="ph:x" class="spr-h-4 spr-w-4" />
            </span>

            <!-- Input loader -->
            <Icon
              v-if="props.inputLoader"
              icon="svg-spinners:270-ring"
              class="spr-h-4 spr-w-4 spr-text-color-supporting"
            />

            <!-- Chevron -->
            <Icon
              v-else
              icon="ph:caret-down"
              :class="[classes.chevron, { 'spr-rotate-180': isOpen }]"
              class="spr-h-4 spr-w-4"
            />
          </div>
        </button>

        <!-- Hidden native select for QA automation -->
        <select
          v-if="props.options.length"
          :value="model"
          data-testid="qa-hidden-select"
          tabindex="-1"
          aria-hidden="true"
          multiple
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
          :id="`select-multiple-popper-${props.id}`"
          :style="{ width: props.popperWidth }"
        />
      </div>

      <!-- Dropdown panel -->
      <template #popper>
        <div :class="classes.popperContent">
          <!-- Search input -->
          <div v-if="props.searchable" class="spr-border-b spr-border-color-weak">
            <input
              type="text"
              :class="classes.searchInput"
              placeholder="Search..."
              :value="searchQuery"
              aria-label="Search options"
              @input="onSearch"
            />
          </div>

          <!-- Options list -->
          <div
            :class="classes.optionsList"
            role="listbox"
            :aria-labelledby="props.id"
            aria-multiselectable="true"
          >
            <!-- Options loader -->
            <div v-if="props.optionsLoader" :class="classes.loader">
              <Icon icon="svg-spinners:270-ring" class="spr-h-5 spr-w-5 spr-text-color-supporting" />
            </div>

            <template v-else-if="props.options.length">
              <div
                v-for="option in props.options"
                :key="option.value"
                :class="
                  option.disabled
                    ? classes.optionItemDisabled
                    : isSelected(option.value)
                    ? classes.optionItemSelected
                    : classes.optionItem
                "
                role="option"
                :aria-selected="isSelected(option.value)"
                :aria-disabled="option.disabled || undefined"
                @click="toggleOption(option)"
              >
                <slot name="option" :option="option" :selected="isSelected(option.value)">
                  <!-- Option icon -->
                  <Icon
                    v-if="option.icon"
                    :icon="option.icon"
                    class="spr-h-4 spr-w-4 spr-shrink-0"
                  />

                  <!-- Checkbox indicator -->
                  <div
                    :class="[
                      'spr-flex spr-items-center spr-justify-center spr-h-4 spr-w-4 spr-rounded-border-radius-xs spr-border spr-border-color-weak spr-shrink-0',
                      { 'spr-bg-color-brand-base spr-border-color-brand-base': isSelected(option.value) },
                    ]"
                    aria-hidden="true"
                  >
                    <Icon
                      v-if="isSelected(option.value)"
                      icon="ph:check"
                      class="spr-h-3 spr-w-3 spr-text-white"
                    />
                  </div>

                  <!-- Option text + subtext -->
                  <div class="spr-flex spr-flex-col spr-flex-1 spr-min-w-0">
                    <span class="spr-truncate">{{ option.text }}</span>
                    <span
                      v-if="option.subtext"
                      class="spr-body-sm-regular spr-text-color-supporting spr-truncate"
                    >
                      {{ option.subtext }}
                    </span>
                  </div>
                </slot>
              </div>
            </template>

            <!-- Empty state -->
            <template v-else>
              <slot name="empty">
                <div :class="classes.emptyState">
                  <span :class="classes.emptyStateText">No results found</span>
                </div>
              </slot>
            </template>
          </div>
        </div>
      </template>
    </Menu>

    <!-- Helper text -->
    <div v-if="props.displayHelper" :class="classes.helperRow">
      <div :class="classes.helperText">
        <Icon
          v-if="props.helperIcon"
          class="spr-h-5 spr-min-h-5 spr-w-5 spr-min-w-5"
          :icon="props.helperIcon"
        />
        <span>{{ props.helperText }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { Menu } from 'floating-vue'
import { Icon } from '@iconify/vue'
import type { SelectMultipleProps, SelectMultipleEmits, SelectMultipleSlots, SelectOption } from './select-multiple.types'
import { getSelectMultipleClasses } from './select-multiple.styles'
import { useSelectMultipleState } from './select-multiple.state'

import 'floating-vue/dist/style.css'

const props = withDefaults(defineProps<SelectMultipleProps>(), {
  placeholder: 'Select options',
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
  searchable: false,
  displayHelper: false,
  inputLoader: false,
  optionsLoader: false,
})

const emit = defineEmits<SelectMultipleEmits>()
defineSlots<SelectMultipleSlots>()

const model = defineModel<(string | number)[]>({ default: () => [] })

const { isOpen, searchQuery } = useSelectMultipleState()

const selectedOptions = computed<SelectOption[]>(() =>
  props.options.filter((o) => model.value.includes(o.value)),
)

const classes = computed(() =>
  getSelectMultipleClasses({
    disabled: props.disabled,
    error: props.error,
    active: props.active || isOpen.value,
  }),
)

function isSelected(value: string | number): boolean {
  return model.value.includes(value)
}

function toggleOption(option: SelectOption): void {
  if (option.disabled) return
  const current = [...model.value]
  const idx = current.indexOf(option.value)
  if (idx === -1) {
    current.push(option.value)
  } else {
    current.splice(idx, 1)
  }
  model.value = current
}

function removeOption(value: string | number): void {
  model.value = model.value.filter((v) => v !== value)
}

function clearAll(): void {
  model.value = []
}

function onSearch(e: Event): void {
  const value = (e.target as HTMLInputElement).value
  searchQuery.value = value
  emit('search', value)
}
</script>
