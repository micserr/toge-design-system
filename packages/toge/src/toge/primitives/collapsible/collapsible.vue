<template>
  <div :class="containerClasses">
    <slot name="trigger" :toggle-collapsible="toggleCollapsible" :is-open="props.modelValue" />
    <Transition
      :css="false"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @before-leave="onBeforeLeave"
      @leave="onLeave"
    >
      <div v-show="props.modelValue" :style="contentStyle">
        <slot />
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { computed, nextTick } from 'vue'
import type { CollapsibleProps, CollapsibleEmits } from './collapsible.types'
import { getCollapsibleContainerClasses, getCollapsibleContentStyle } from './collapsible.styles'

const props = withDefaults(defineProps<CollapsibleProps>(), {
  transitionDuration: 150,
})

const emit = defineEmits<CollapsibleEmits>()

defineSlots<{
  trigger(props: { toggleCollapsible: () => void; isOpen: boolean }): any
  default(props: {}): any
}>()

const containerClasses = computed(() => getCollapsibleContainerClasses())

const contentStyle = computed(() => getCollapsibleContentStyle(props.transitionDuration))

const toggleCollapsible = () => {
  emit('update:modelValue', !props.modelValue)
}

const onBeforeEnter = (el: Element) => {
  ;(el as HTMLElement).style.maxHeight = '0px'
}

const onEnter = async (el: Element, done: () => void) => {
  await nextTick()
  const element = el as HTMLElement
  element.style.maxHeight = `${element.scrollHeight}px`
  setTimeout(() => {
    element.style.maxHeight = '' // clear inline style after transition
    done()
  }, props.transitionDuration)
}

const onBeforeLeave = (el: Element) => {
  const element = el as HTMLElement
  element.style.maxHeight = `${element.scrollHeight}px`
}

const onLeave = (el: Element, done: () => void) => {
  const element = el as HTMLElement
  // Force reflow
  void element.offsetHeight
  element.style.maxHeight = '0px'
  setTimeout(done, props.transitionDuration)
}
</script>
