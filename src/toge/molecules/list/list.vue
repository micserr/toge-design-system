<template>
  <div
    ref="listRef"
    :class="classes.wrapper"
    role="listbox"
    :aria-multiselectable="props.multiSelect || undefined"
    @keydown="handleKeydown"
  >
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
                  <Icon
                    v-if="item.icon"
                    :icon="item.icon"
                    :style="item.iconColor ? { color: item.iconColor } : undefined"
                    :class="itemStyles.icon"
                  />
                  <template v-if="props.lozenge && item.lozengeProps">
                    <TogeLozenge v-bind="item.lozengeProps" :label="item.text" />
                  </template>
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
                  <Icon
                    v-if="!props.noCheck && isSelected(item)"
                    icon="ph:check-bold"
                    :class="itemStyles.check"
                  />
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
                      v-if="!props.noCheck && isSelected(sub)"
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
        <div v-if="props.infiniteScrollLoader" ref="loaderRef" :class="classes.loaderWrapper">
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
              <Icon
                v-if="item.icon"
                :icon="item.icon"
                :style="item.iconColor ? { color: item.iconColor } : undefined"
                :class="itemStyles.icon"
              />
              <template v-if="props.lozenge && item.lozengeProps">
                <TogeLozenge v-bind="item.lozengeProps" :label="item.text" />
              </template>
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
              <Icon
                v-if="!props.noCheck && isSelected(item)"
                icon="ph:check-bold"
                :class="itemStyles.check"
              />
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
                  v-if="!props.noCheck && isSelected(sub)"
                  icon="ph:check-bold"
                  :class="itemStyles.check"
                />
              </slot>
            </div>
          </div>
        </template>

        <!-- Infinite Scroll Loader -->
        <div v-if="props.infiniteScrollLoader" ref="loaderRef" :class="classes.loaderWrapper">
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
import { computed, ref, watch, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'
import type { ListProps, ListEmits, ListSlots, ListItem } from './list.types'
import { getListItemClasses, getListClasses } from './list.styles'
import TogeLozenge from '../../primitives/lozenge/lozenge.vue'

const props = withDefaults(defineProps<ListProps>(), {
  disabled: false,
  multiSelect: false,
  ladderized: false,
  noCheck: false,
  lozenge: false,
  infiniteScrollLoader: false,
  optionsLoader: false,
})

const emit = defineEmits<ListEmits>()

defineSlots<ListSlots>()

const model = defineModel<(string | number)[]>({ default: () => [] })

const listRef = ref<HTMLElement | null>(null)
const loaderRef = ref<HTMLElement | null>(null)

// UI-only state: which items have their sublevel open
const openSublevelValues = ref<Set<string | number>>(new Set())

// Static — getListClasses() takes no arguments so no need for computed
const classes = getListClasses()

// Shared text/icon/check styles — these don't vary per-item
const itemStyles = getListItemClasses({})

function isSelected(item: ListItem): boolean {
  return model.value.includes(item.value)
}

function getItemClasses(item: ListItem): string {
  return getListItemClasses({
    disabled: props.disabled || item.disabled,
    selected: isSelected(item),
    lozenge: props.lozenge,
  }).item
}

function handleItemClick(item: ListItem): void {
  if (props.disabled || item.disabled) return

  if (item.sublevel && item.sublevel.length > 0 && props.ladderized) {
    toggleSublevel(item)
    return
  }

  const alreadySelected = model.value.includes(item.value)
  model.value = props.multiSelect
    ? alreadySelected
      ? model.value.filter((v) => v !== item.value)
      : [...model.value, item.value]
    : [item.value]

  emit('select', item)
}

function toggleSublevel(item: ListItem): void {
  const next = new Set(openSublevelValues.value)
  next.has(item.value) ? next.delete(item.value) : next.add(item.value)
  openSublevelValues.value = next
}

function handleKeydown(event: KeyboardEvent): void {
  if (props.disabled || !['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return
  event.preventDefault()

  const items = Array.from(
    listRef.value?.querySelectorAll<HTMLElement>('[role="option"]:not([aria-disabled="true"])') ?? [],
  )
  if (!items.length) return

  const currentIndex = items.indexOf(document.activeElement as HTMLElement)

  if (event.key === 'ArrowDown') {
    items[currentIndex < items.length - 1 ? currentIndex + 1 : 0].focus()
  } else if (event.key === 'ArrowUp') {
    items[currentIndex > 0 ? currentIndex - 1 : items.length - 1].focus()
  } else if (event.key === 'Home') {
    items[0].focus()
  } else if (event.key === 'End') {
    items[items.length - 1].focus()
  }
}

// IntersectionObserver — fires infinite-scroll-trigger when the loader sentinel comes into view
let observer: IntersectionObserver | null = null

watch(loaderRef, (el) => {
  observer?.disconnect()
  if (!el) return
  observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) emit('infinite-scroll-trigger', true)
  })
  observer.observe(el)
})

onUnmounted(() => observer?.disconnect())

// Grouped items
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
