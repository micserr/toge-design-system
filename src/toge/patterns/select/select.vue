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
      :style="{ position: 'relative', width: props.width }"
      @apply-show="emit('popper-state', true)"
      @apply-hide="emit('popper-state', false)"
    >
      <!-- Trigger -->
      <div>
        <slot
          name="trigger"
          :selected="selectedOption"
          :is-open="isOpen"
          :display-text="triggerText"
        >
          <button
            :id="props.id"
            type="button"
            :class="classes.trigger"
            :disabled="props.disabled"
            :aria-expanded="isOpen"
            :aria-haspopup="'listbox'"
            :aria-invalid="props.error || undefined"
          >
            <!-- Trigger text -->
            <span :class="selectedOption || props.displayText ? classes.triggerTextSelected : classes.triggerText">
              {{ triggerText || props.placeholder }}
            </span>

            <!-- Clear button -->
            <span
              v-if="props.clearable && model !== null && model !== ''"
              :class="classes.clearBtn"
              role="button"
              aria-label="Clear selection"
              @click.stop="clearSelection"
            >
              <Icon icon="ph:x" class="spr-h-4 spr-w-4" />
            </span>

            <!-- Input loader -->
            <Icon
              v-if="props.inputLoader"
              icon="svg-spinners:270-ring"
              class="spr-h-4 spr-w-4 spr-text-color-supporting spr-shrink-0"
            />

            <!-- Chevron -->
            <Icon
              v-else
              icon="ph:caret-down"
              :class="[classes.chevron, { 'spr-rotate-180': isOpen }]"
              class="spr-h-4 spr-w-4"
            />
          </button>
        </slot>

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
                    : option.value === model
                    ? classes.optionItemSelected
                    : classes.optionItem
                "
                role="option"
                :aria-selected="option.value === model"
                :aria-disabled="option.disabled || undefined"
                @click="selectOption(option)"
              >
                <slot name="option" :option="option" :selected="option.value === model">
                  <!-- Option icon -->
                  <Icon
                    v-if="option.icon"
                    :icon="option.icon"
                    class="spr-h-4 spr-w-4 spr-shrink-0"
                  />

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

                  <!-- Selected checkmark -->
                  <Icon
                    v-if="option.value === model"
                    icon="ph:check"
                    :class="classes.checkIcon"
                    class="spr-h-4 spr-w-4"
                  />
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

            <!-- Infinite scroll loader -->
            <div v-if="props.infiniteScrollLoader" :class="classes.loader">
              <Icon icon="svg-spinners:270-ring" class="spr-h-5 spr-w-5 spr-text-color-supporting" />
            </div>
          </div>
        </div>
      </template>
    </Menu>

    <!-- Helper text -->
    <div
      v-if="props.displayHelper"
      :class="classes.helperRow"
    >
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
import { ref, computed } from 'vue'
import { Menu } from 'floating-vue'
import { Icon } from '@iconify/vue'
import type { SelectProps, SelectEmits, SelectSlots, SelectOption } from './select.types'
import { getSelectClasses } from './select.styles'

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
  searchable: false,
  displayHelper: false,
  inputLoader: false,
  optionsLoader: false,
  infiniteScrollLoader: false,
  lozenge: false,
})

const emit = defineEmits<SelectEmits>()
defineSlots<SelectSlots>()

const model = defineModel<string | number | null>({ default: null })
const isOpen = ref(false)
const searchQuery = ref('')

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

function clearSelection(): void {
  model.value = null
  emit('get-selected-option', null)
}

function onSearch(e: Event): void {
  const value = (e.target as HTMLInputElement).value
  searchQuery.value = value
  emit('search', value)
}
</script>
