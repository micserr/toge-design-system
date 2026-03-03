<template>
  <div :class="classes.container">
    <template v-for="(item, index) in props.items" :key="item.collapseId">
      <div
        :class="[
          classes.item,
          { 'spr-border-x-0 spr-border-b-0 spr-border-t spr-border-solid spr-border-mushroom-200': index !== 0 },
        ]"
      >
        <!-- Header -->
        <div
          :class="[
            classes.header,
            { 'hover:spr-cursor-pointer active:spr-background-color-pressed': props.trigger === 'header' },
          ]"
          @mousedown="props.trigger === 'header' && setClickedId(item.collapseId)"
          @mouseup="clearClickedId"
          @mouseleave="clearClickedId"
          @click="props.trigger === 'header' && toggleCollapse(item.collapseId)"
          @keydown.enter.prevent="props.trigger === 'header' && toggleCollapse(item.collapseId)"
          @keydown.space.prevent="props.trigger === 'header' && toggleCollapse(item.collapseId)"
          :role="props.trigger === 'header' ? 'button' : undefined"
          :tabindex="props.trigger === 'header' ? 0 : undefined"
          :aria-expanded="props.trigger === 'header' ? collapsedState[item.collapseId] : undefined"
          :aria-controls="props.trigger === 'header' ? `accordion-content-${item.collapseId}` : undefined"
        >
          <div class="spr-flex spr-w-[95%] spr-flex-col">
            <span class="spr-text-base spr-font-medium spr-leading-5 spr-text-mushroom-950">{{ item.title }}</span>
            <span
              v-if="item.subtitle"
              class="spr-text-200 spr-font-normal spr-leading-5 spr-text-mushroom-600"
            >{{ item.subtitle }}</span>
          </div>
          <button
            v-if="props.trigger === 'button'"
            type="button"
            :class="classes.triggerBtn"
            :aria-expanded="collapsedState[item.collapseId]"
            :aria-controls="`accordion-content-${item.collapseId}`"
            @click.stop="toggleCollapse(item.collapseId)"
          >
            <Icon :icon="collapsedState[item.collapseId] ? 'ph:caret-up' : 'ph:caret-down'" width="16" height="16" />
          </button>
          <Icon v-else :icon="collapsedState[item.collapseId] ? 'ph:caret-up' : 'ph:caret-down'" width="16" height="16" />
        </div>
        <!-- Content -->
        <TogeCollapsible :id="`accordion-content-${item.collapseId}`" v-model="collapsedState[item.collapseId]">
          <div class="spr-px-size-spacing-xs spr-pb-size-spacing-sm">
            <slot :name="item.collapseId" />
          </div>
        </TogeCollapsible>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import TogeCollapsible from '../../primitives/collapsible/collapsible.vue'
import type { AccordionProps, AccordionEmits } from './accordion.types'
import { getAccordionClasses } from './accordion.styles'
import { useAccordionState } from './accordion.state'

const props = withDefaults(defineProps<AccordionProps>(), {
  alwaysOpen: false,
  isDefaultOpen: false,
  trigger: 'button',
  bordered: true,
})

const emit = defineEmits<AccordionEmits>()
defineSlots<Record<string, () => any>>()

const { collapsedState, clickedId: _clickedId, toggleCollapse: _toggle, setClickedId, clearClickedId } =
  useAccordionState(
    () => props.items,
    () => props.alwaysOpen!,
    () => props.isDefaultOpen!,
  )

function toggleCollapse(id: string) {
  _toggle(id)
  emit('toggle', id, collapsedState[id])
}

const classes = computed(() => getAccordionClasses(props.bordered!))
</script>
