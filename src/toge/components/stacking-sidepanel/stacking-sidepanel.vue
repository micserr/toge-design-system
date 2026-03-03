<template>
  <Teleport to="body">
    <div v-if="model.length > 0" :class="classes.backdrop" />
    <div :class="classes.base">
      <TransitionGroup
        enter-active-class="spr-transition-all spr-duration-[150ms] spr-ease-[ease-in-out]"
        leave-active-class="spr-transition-all spr-duration-[150ms] spr-ease-[ease-in-out]"
        enter-from-class="spr-opacity-0 spr-translate-x-full"
        leave-to-class="spr-opacity-0 spr-translate-x-full"
        move-class="spr-transition-transform spr-duration-[150ms]"
      >
        <div v-for="name in model" :key="name" class="spr-h-full spr-flex spr-items-center">
          <slot :name="name" />
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { StackingSidepanelProps } from './stacking-sidepanel.types'
import { getStackingSidepanelClasses } from './stacking-sidepanel.styles'

const props = withDefaults(defineProps<StackingSidepanelProps>(), {})

defineSlots<Record<string, () => any>>()

const model = defineModel<string[]>({ default: () => [] })

const classes = computed(() => getStackingSidepanelClasses())
</script>
