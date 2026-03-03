<template>
  <div ref="tabContainer" :class="containerClasses">
    <div
      v-for="(tab, index) in props.list"
      :key="index"
      ref="tabElements"
      :class="getTabClasses(props.underlined!, index === model, !!tab.disabled, index, props.list!.length)"
      @click="onTabClick(index, tab.disabled)"
    >
      <!-- Regular Tab Active Background Indicator -->
      <div
        v-if="!props.underlined && index === model"
        :class="getRegularActiveIndicatorClasses(index === 0, index === props.list!.length - 1)"
      />

      <div
        :class="{
          'spr-relative spr-z-[10] spr-flex spr-items-center spr-gap-size-spacing-5xs spr-leading-none': true,
          'spr-cursor-not-allowed': tab.disabled,
        }"
      >
        <div v-if="tab.icon">
          <Icon
            :class="{
              'spr-body-sm-regular': true,
              'spr-text-color-brand-base': index === model,
            }"
            :icon="index === model && typeof tab.iconFill === 'string' ? tab.iconFill : tab.icon"
          />
        </div>
        <div v-if="tab.label">
          {{ tab.label }}
        </div>
        <div v-if="props.showBadge && tab.badge" class="tab-badge spr-pl-size-spacing-5xs">
          <TogeBadge
            :text="tab.badge.text"
            :variant="(tab.badge.variant as BadgeVariant | undefined)"
            :size="(tab.badge.size as BadgeSize | undefined)"
          />
        </div>
      </div>
    </div>

    <!-- Underlined Active Indicator -->
    <div
      v-if="props.underlined"
      :class="activeIndicatorClasses"
      :style="{
        width: `${underlineWidth}px`,
        left: `${underlineLeft}px`,
      }"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'
import TogeBadge from '../../primitives/badge/badge.vue'
import type { BadgeVariant, BadgeSize } from '../../primitives/badge/badge.types'
import type { TabsProps, TabsEmits, TabsSlots } from './tabs.types'
import {
  getTabClasses,
  getTabsContainerClasses,
  getTabActiveIndicatorClasses,
  getRegularActiveIndicatorClasses,
} from './tabs.styles'
import { useTabsState } from './tabs.state'

const props = withDefaults(defineProps<TabsProps>(), {
  list: () => [],
  underlined: false,
  showBadge: false,
})

const emit = defineEmits<TabsEmits>()
defineSlots<TabsSlots>()

const model = defineModel<number>({ default: 0 })

const tabElements = ref<HTMLElement[]>([])
const tabContainer = ref<HTMLElement | null>(null)

const { underlineWidth, underlineLeft, updateUnderline } = useTabsState(
  () => model.value,
  () => tabElements.value,
)

function onTabClick(index: number, disabled?: boolean) {
  if (disabled) return
  if (model.value === index) return
  model.value = index
  emit('change', index)
}

const containerClasses = computed(() => getTabsContainerClasses())
const activeIndicatorClasses = computed(() => getTabActiveIndicatorClasses())

// ResizeObserver to update underline on container resize (no vueuse)
let resizeObserver: ResizeObserver | null = null

onMounted(() => {
  if (tabContainer.value) {
    resizeObserver = new ResizeObserver(() => {
      updateUnderline()
    })
    resizeObserver.observe(tabContainer.value)
  }
})

onUnmounted(() => {
  if (resizeObserver) {
    resizeObserver.disconnect()
    resizeObserver = null
  }
})
</script>
