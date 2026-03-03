<template>
  <Transition name="floating-action">
    <div v-show="props.show" :class="classes.wrapper" aria-live="polite">
      <div :class="classes.inner">
        <slot>
          <span v-if="$slots.message" class="spr-flex-1"><slot name="message" /></span>
          <div class="spr-flex spr-items-center spr-gap-size-spacing-3xs"><slot name="actions" /></div>
        </slot>
      </div>
    </div>
  </Transition>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import type { FloatingActionProps } from './floating-action.types'
import { getFloatingActionClasses } from './floating-action.styles'

const props = withDefaults(defineProps<FloatingActionProps>(), { show: false })

defineSlots<{
  default(props: {}): any
  message(props: {}): any
  actions(props: {}): any
}>()

const classes = computed(() => getFloatingActionClasses())
</script>
<style scoped>
.floating-action-enter-active,
.floating-action-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.floating-action-enter-from,
.floating-action-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(16px);
}
</style>
