<template>
  <div :class="classes.wrapper">
    <!-- Search Input -->
    <div v-if="props.searchable" :class="classes.searchWrapper">
      <input
        type="text"
        :placeholder="props.searchablePlaceholder || 'Search...'"
        :value="props.searchValue"
        class="spr-w-full spr-body-md-regular spr-bg-transparent spr-outline-none spr-text-color-base placeholder:spr-text-color-supporting"
        @input="handleSearchInput"
      />
    </div>

    <!-- Loading Skeleton -->
    <template v-if="props.optionsLoader">
      <div :class="classes.inner">
        <slot name="loader">
          <div v-for="i in 5" :key="i" :class="classes.skeletonItem" />
        </slot>
      </div>
    </template>

    <!-- Grouped Items -->
    <template v-else-if="hasGroups">
      <div :class="[classes.inner, classes.groupWrapper]">
        <div
          v-for="(group, groupIndex) in groupedItems"
          :key="groupIndex"
          :class="classes.groupItems"
        >
          <div v-if="group.label !== 'no-group'" :class="classes.groupLabel">
            {{ group.label }}
          </div>
          <div :class="classes.groupItemsInner">
            <template v-for="item in group.items" :key="item.value">
              <div
                role="option"
                tabindex="0"
                :aria-selected="isSelected(item)"
                :aria-disabled="item.disabled || undefined"
                :class="getItemClasses(item)"
                @click="handleItemClick(item)"
                @keyup.enter="handleItemClick(item)"
                @keydown.space.prevent="handleItemClick(item)"
              >
                <slot name="item" :item="item" :selected="isSelected(item)">
                  <!-- Item icon -->
                  <Icon
                    v-if="item.icon"
                    :icon="item.icon"
                    :style="item.iconColor ? { color: item.iconColor } : undefined"
                    :class="itemStyles.icon"
                  />
                  <!-- Lozenge mode -->
                  <template v-if="props.lozenge && item.lozengeProps">
                    <TogeLozenge v-bind="item.lozengeProps" :label="item.text" />
                  </template>
                  <!-- Normal text mode -->
                  <template v-else>
                    <span
                      :class="itemStyles.text"
                      :style="item.textColor ? { color: item.textColor } : undefined"
                    >
                      {{ item.text }}
                    </span>
                    <span v-if="item.subtext" :class="itemStyles.subtext">
                      {{ item.subtext }}
                    </span>
                  </template>
                  <!-- Checkmark for multiselect -->
                  <Icon
                    v-if="props.multiSelect && !props.noCheck && isSelected(item)"
                    icon="ph:check-bold"
                    :class="itemStyles.check"
                  />
                  <!-- Sublevel arrow -->
                  <Icon
                    v-if="item.sublevel && item.sublevel.length > 0"
                    :icon="openSublevelValues.has(item.value) ? 'ph:caret-up' : 'ph:caret-down'"
                    :class="itemStyles.sublevelArrow"
                    @click.stop="toggleSublevel(item)"
                  />
                </slot>
              </div>
              <!-- Sublevel items -->
              <div
                v-if="item.sublevel && item.sublevel.length > 0 && openSublevelValues.has(item.value)"
                :class="classes.sublevelWrapper"
              >
                <div
                  v-for="sub in item.sublevel"
                  :key="sub.value"
                  role="option"
                  tabindex="0"
                  :aria-selected="isSelected(sub)"
                  :aria-disabled="sub.disabled || undefined"
                  :class="getItemClasses(sub)"
                  @click="handleItemClick(sub)"
                  @keyup.enter="handleItemClick(sub)"
                  @keydown.space.prevent="handleItemClick(sub)"
                >
                  <slot name="item" :item="sub" :selected="isSelected(sub)">
                    <Icon
                      v-if="sub.icon"
                      :icon="sub.icon"
                      :style="sub.iconColor ? { color: sub.iconColor } : undefined"
                      :class="itemStyles.icon"
                    />
                    <template v-if="props.lozenge && sub.lozengeProps">
                      <TogeLozenge v-bind="sub.lozengeProps" :label="sub.text" />
                    </template>
                    <template v-else>
                      <span
                        :class="itemStyles.text"
                        :style="sub.textColor ? { color: sub.textColor } : undefined"
                      >
                        {{ sub.text }}
                      </span>
                      <span v-if="sub.subtext" :class="itemStyles.subtext">
                        {{ sub.subtext }}
                      </span>
                    </template>
                    <Icon
                      v-if="props.multiSelect && !props.noCheck && isSelected(sub)"
                      icon="ph:check-bold"
                      :class="itemStyles.check"
                    />
                  </slot>
                </div>
              </div>
            </template>
          </div>
        </div>

        <!-- Infinite Scroll Loader -->
        <div v-if="props.infiniteScrollLoader" :class="classes.loaderWrapper">
          <Icon icon="svg-spinners:270-ring" />
        </div>
      </div>
    </template>

    <!-- Flat Item List -->
    <template v-else-if="props.items && props.items.length > 0">
      <div :class="classes.inner">
        <template v-for="item in props.items" :key="item.value">
          <div
            role="option"
            tabindex="0"
            :aria-selected="isSelected(item)"
            :aria-disabled="item.disabled || undefined"
            :class="getItemClasses(item)"
            @click="handleItemClick(item)"
            @keyup.enter="handleItemClick(item)"
            @keydown.space.prevent="handleItemClick(item)"
          >
            <slot name="item" :item="item" :selected="isSelected(item)">
              <!-- Item icon -->
              <Icon
                v-if="item.icon"
                :icon="item.icon"
                :style="item.iconColor ? { color: item.iconColor } : undefined"
                :class="itemStyles.icon"
              />
              <!-- Lozenge mode -->
              <template v-if="props.lozenge && item.lozengeProps">
                <TogeLozenge v-bind="item.lozengeProps" :label="item.text" />
              </template>
              <!-- Normal text mode -->
              <template v-else>
                <span
                  :class="itemStyles.text"
                  :style="item.textColor ? { color: item.textColor } : undefined"
                >
                  {{ item.text }}
                </span>
                <span v-if="item.subtext" :class="itemStyles.subtext">
                  {{ item.subtext }}
                </span>
              </template>
              <!-- Checkmark for multiselect -->
              <Icon
                v-if="props.multiSelect && !props.noCheck && isSelected(item)"
                icon="ph:check-bold"
                :class="itemStyles.check"
              />
              <!-- Sublevel arrow -->
              <Icon
                v-if="item.sublevel && item.sublevel.length > 0"
                :icon="openSublevelValues.has(item.value) ? 'ph:caret-up' : 'ph:caret-down'"
                :class="itemStyles.sublevelArrow"
                @click.stop="toggleSublevel(item)"
              />
            </slot>
          </div>
          <!-- Sublevel items -->
          <div
            v-if="item.sublevel && item.sublevel.length > 0 && openSublevelValues.has(item.value)"
            :class="classes.sublevelWrapper"
          >
            <div
              v-for="sub in item.sublevel"
              :key="sub.value"
              role="option"
              tabindex="0"
              :aria-selected="isSelected(sub)"
              :aria-disabled="sub.disabled || undefined"
              :class="getItemClasses(sub)"
              @click="handleItemClick(sub)"
              @keyup.enter="handleItemClick(sub)"
              @keydown.space.prevent="handleItemClick(sub)"
            >
              <slot name="item" :item="sub" :selected="isSelected(sub)">
                <Icon
                  v-if="sub.icon"
                  :icon="sub.icon"
                  :style="sub.iconColor ? { color: sub.iconColor } : undefined"
                  :class="itemStyles.icon"
                />
                <template v-if="props.lozenge && sub.lozengeProps">
                  <TogeLozenge v-bind="sub.lozengeProps" :label="sub.text" />
                </template>
                <template v-else>
                  <span
                    :class="itemStyles.text"
                    :style="sub.textColor ? { color: sub.textColor } : undefined"
                  >
                    {{ sub.text }}
                  </span>
                  <span v-if="sub.subtext" :class="itemStyles.subtext">
                    {{ sub.subtext }}
                  </span>
                </template>
                <Icon
                  v-if="props.multiSelect && !props.noCheck && isSelected(sub)"
                  icon="ph:check-bold"
                  :class="itemStyles.check"
                />
              </slot>
            </div>
          </div>
        </template>

        <!-- Infinite Scroll Loader -->
        <div v-if="props.infiniteScrollLoader" :class="classes.loaderWrapper">
          <Icon icon="svg-spinners:270-ring" />
        </div>
      </div>
    </template>

    <!-- Empty State -->
    <template v-else>
      <div :class="classes.inner">
        <slot name="empty">
          <div :class="classes.emptyWrapper">
            <span :class="classes.emptyText">No results found</span>
          </div>
        </slot>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import type { ListProps, ListEmits, ListSlots, ListItem } from './list.types'
import { getListItemClasses, getListClasses } from './list.styles'
import TogeLozenge from '../../primitives/lozenge/lozenge.vue'

const props = withDefaults(defineProps<ListProps>(), {
  modelValue: () => [],
  searchValue: '',
  multiSelect: false,
  searchable: false,
  searchablePlaceholder: 'Search...',
  ladderized: false,
  noCheck: false,
  lozenge: false,
  infiniteScrollLoader: false,
  optionsLoader: false,
})

const emit = defineEmits<ListEmits>()

defineSlots<ListSlots>()

const model = defineModel<(string | number)[]>({ default: () => [] })

// UI-only state: which items have their sublevel open
const openSublevelValues = ref<Set<string | number>>(new Set())

const classes = computed(() => getListClasses())

// Shared item style object (not dependent on per-item state — per-item state is applied in getItemClasses)
const itemStyles = computed(() => getListItemClasses({}))

function isSelected(item: ListItem): boolean {
  return model.value.includes(item.value)
}

function getItemClasses(item: ListItem): string {
  return getListItemClasses({
    disabled: item.disabled,
    selected: isSelected(item),
    lozenge: props.lozenge,
  }).item
}

function handleItemClick(item: ListItem): void {
  if (item.disabled) return

  // For ladderized items with sublevel, toggling is handled by the arrow click
  // Clicking the row itself still selects the item (parent-level selection allowed)
  if (item.sublevel && item.sublevel.length > 0 && props.ladderized) {
    toggleSublevel(item)
    return
  }

  let nextValue: (string | number)[]

  if (props.multiSelect) {
    const alreadySelected = model.value.includes(item.value)
    nextValue = alreadySelected
      ? model.value.filter((v) => v !== item.value)
      : [...model.value, item.value]
  } else {
    nextValue = [item.value]
  }

  model.value = nextValue
  emit('select', item)
}

function toggleSublevel(item: ListItem): void {
  const next = new Set(openSublevelValues.value)
  if (next.has(item.value)) {
    next.delete(item.value)
  } else {
    next.add(item.value)
  }
  openSublevelValues.value = next
}

function handleSearchInput(event: Event): void {
  const target = event.target as HTMLInputElement
  emit('search', target.value)
}

// Derive grouped structure from items that carry a `group` field
const hasGroups = computed(() => props.items.some((item) => item.group))

const groupedItems = computed((): Array<{ label: string; items: ListItem[] }> => {
  if (!hasGroups.value) return []

  const map = new Map<string, ListItem[]>()
  for (const item of props.items) {
    const label = item.group ?? 'no-group'
    if (!map.has(label)) map.set(label, [])
    map.get(label)!.push(item)
  }

  return Array.from(map.entries()).map(([label, items]) => ({ label, items }))
})
</script>
