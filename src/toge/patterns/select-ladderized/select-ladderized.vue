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
      :container="props.popperContainer || `#select-ladderized-popper-${props.id}`"
      :delay="0"
      :style="{ position: 'relative', width: props.width }"
      @apply-show="onPopperShow"
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
          :aria-invalid="props.error || undefined"
        >
          <!-- Trigger text -->
          <span :class="model.length ? classes.triggerTextSelected : classes.triggerText">
            {{ triggerText || props.placeholder }}
          </span>

          <!-- Clear button -->
          <span
            v-if="props.clearable && model.length"
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

        <!-- Popper anchor container -->
        <div
          :id="`select-ladderized-popper-${props.id}`"
          :style="{ width: props.popperWidth }"
        />
      </div>

      <!-- Dropdown panel -->
      <template #popper>
        <div :class="classes.popperContent">
          <div :class="classes.optionsList" role="listbox" :aria-labelledby="props.id">
            <!-- Back button (shown when drilled into a sublevel) -->
            <button
              v-if="breadcrumb.length"
              type="button"
              :class="classes.backButton"
              @click="goBack"
            >
              <Icon icon="ph:arrow-left" class="spr-h-4 spr-w-4 spr-shrink-0" />
              <span>{{ breadcrumb[breadcrumb.length - 1] }}</span>
            </button>

            <!-- Current level options -->
            <template v-if="currentLevel.length">
              <div
                v-for="option in currentLevel"
                :key="option.value"
                :class="
                  option.disabled
                    ? classes.optionItemDisabled
                    : isOptionSelected(option)
                    ? classes.optionItemSelected
                    : classes.optionItem
                "
                role="option"
                :aria-selected="isOptionSelected(option)"
                :aria-disabled="option.disabled || undefined"
                :aria-expanded="option.sublevel?.length ? true : undefined"
                @click="onOptionClick(option)"
              >
                <span :class="classes.optionItemText">{{ option.text }}</span>
                <span :class="classes.optionItemTrailing">
                  <!-- Selected checkmark (only leaf nodes) -->
                  <Icon
                    v-if="isOptionSelected(option) && !option.sublevel?.length"
                    icon="ph:check"
                    class="spr-h-4 spr-w-4 spr-text-color-brand-base"
                  />
                  <!-- Drill-in chevron for parent nodes -->
                  <Icon
                    v-if="option.sublevel?.length"
                    icon="ph:caret-right"
                    class="spr-h-4 spr-w-4"
                  />
                </span>
              </div>
            </template>

            <!-- Empty state -->
            <template v-else>
              <div :class="classes.emptyState">
                <span :class="classes.emptyStateText">No results found</span>
              </div>
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
import { ref, computed, watch } from 'vue'
import { Menu } from 'floating-vue'
import { Icon } from '@iconify/vue'
import type { SelectLadderizedProps, SelectLadderizedEmits, SelectLadderizedOption } from './select-ladderized.types'
import { getSelectLadderizedClasses } from './select-ladderized.styles'
import { useSelectLadderizedState } from './select-ladderized.state'

import 'floating-vue/dist/style.css'

const props = withDefaults(defineProps<SelectLadderizedProps>(), {
  placeholder: 'Select an option',
  label: '',
  supportingLabel: '',
  distance: 6,
  placement: 'bottom',
  popperStrategy: 'absolute',
  popperWidth: '100%',
  popperContainer: '',
  width: '100%',
  textSeparator: ' > ',
  disabled: false,
  error: false,
  active: false,
  clearable: false,
  displayHelper: false,
  inputLoader: false,
  prependText: false,
})

const emit = defineEmits<SelectLadderizedEmits>()

const model = defineModel<string[]>({ default: () => [] })

const { currentLevel, breadcrumb, init, drillDown, goBack: goBackState, reset } = useSelectLadderizedState(
  () => props.options,
)

// isOpen tracks the floating-vue Menu shown state (two-way via v-model:shown)
const isOpen = ref(false)

const classes = computed(() =>
  getSelectLadderizedClasses({
    disabled: props.disabled,
    error: props.error,
    active: props.active || isOpen.value,
  }),
)

// Trigger text: join selected values with separator
const triggerText = computed<string>(() => {
  if (!model.value.length) return ''
  if (props.prependText) {
    return model.value.join(props.textSeparator)
  }
  return model.value.join(props.textSeparator)
})

// Reset drill-down state when popover opens
function onPopperShow(): void {
  init()
  emit('popper-state', true)
}

function onOptionClick(option: SelectLadderizedOption): void {
  if (option.disabled) return
  if (option.sublevel?.length) {
    drillDown(option)
  } else {
    // Leaf node: select it. Build path from breadcrumb + option text as the value chain.
    const path = [...breadcrumb.value, option.text]
    model.value = path
    isOpen.value = false
    reset()
  }
}

function goBack(): void {
  goBackState(props.options)
}

function clearSelection(): void {
  model.value = []
  reset()
}

// Determine whether an option is in the current selection path
function isOptionSelected(option: SelectLadderizedOption): boolean {
  if (!model.value.length) return false
  if (!option.sublevel?.length) {
    // Leaf: check if it matches the last segment and breadcrumb matches the path prefix
    const depth = breadcrumb.value.length
    return (
      model.value.length > depth &&
      model.value[depth] === option.text &&
      breadcrumb.value.every((seg, i) => model.value[i] === seg)
    )
  }
  // Parent: check if the selection path passes through this node
  const depth = breadcrumb.value.length
  return model.value[depth] === option.text
}

// Keep currentLevel in sync if options change externally
watch(
  () => props.options,
  () => {
    if (!isOpen.value) {
      reset()
    }
  },
)
</script>
