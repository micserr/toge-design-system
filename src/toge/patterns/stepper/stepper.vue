<template>
  <div :class="classes.base">
    <div v-for="(step, index) in props.steps" :key="index" :class="classes.step">
      <TogeStep
        :number="step.number"
        :label="step.label"
        :description="step.description"
        :status="step.status"
        :type="props.type"
        @click="(evt) => emit('step-click', step.number, evt)"
      />
      <div
        v-if="props.hasLines && index < (props.steps?.length ?? 0) - 1"
        :class="classes.lineContainer"
      >
        <div :class="[classes.line, getLineColorClass(step.status)]" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import TogeStep from './step/step.vue'
import type { StepperProps, StepperEmits } from './stepper.types'
import { getStepperClasses, getLineColorClass } from './stepper.styles'

const props = withDefaults(defineProps<StepperProps>(), {
  variant: 'vertical',
  steps: () => [],
  hasLines: false,
  type: 'compact',
})

const emit = defineEmits<StepperEmits>()

defineSlots<{ default(props: Record<string, never>): unknown }>()

const classes = computed(() => getStepperClasses(props.variant!))
</script>
