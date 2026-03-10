<template>
  <div :class="stepperClasses.baseClass">
    <div v-for="(step, index) in props.steps" :key="index" :class="stepperClasses.stepClass">
      <!-- STEP NUMBER -->
      <spr-step
        :number="step.number"
        :label="step.label"
        :status="step.status"
        :description="step.description"
        :type="props.type"
      />

      <!-- LINES -->
      <!-- Line container -->
      <div
        v-if="props.hasLines && index < props.steps.length - 1"
        :class="stepperClasses.lineContainerClass"
      >
        <!-- Actual line -->
        <div :class="[stepperClasses.linesClass, getLineColorClass(step)]"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SprStep from '@/legacy/stepper/step/step.vue';
import { stepperPropTypes } from '@/legacy/stepper/stepper';
import { useStepper } from '@/legacy/stepper/use-stepper';

const props = defineProps(stepperPropTypes);

const { stepperClasses, getLineColorClass} = useStepper(props);
</script>
