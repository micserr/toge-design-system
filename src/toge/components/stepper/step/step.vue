<template>
  <div :class="classes.base" @click="emit('click', $event)">
    <div :class="classes.badge">
      <Icon
        v-if="props.status === 'completed' && props.type === 'solid'"
        icon="ph:check-bold"
        width="14px"
        height="14px"
        class="spr-text-color-inverted-strong"
      />
      <span v-else :class="classes.number">{{ props.number }}</span>
    </div>
    <div :class="classes.textContainer">
      <span v-if="props.label" :class="classes.label">{{ props.label }}</span>
      <span v-if="props.description" :class="classes.description">{{ props.description }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import type { StepProps, StepEmits } from './step.types'
import { getStepClasses } from './step.styles'

const props = withDefaults(defineProps<StepProps>(), {
  label: undefined,
  description: undefined,
  status: 'pending',
  type: undefined,
})

const emit = defineEmits<StepEmits>()

defineSlots<{ default(props: Record<string, never>): unknown }>()

const classes = computed(() => getStepClasses(props.status!, props.type))
</script>
