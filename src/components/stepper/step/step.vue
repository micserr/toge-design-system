<template>
  <div :class="stepClasses.baseClass">
    <!-- STEP NUMBER -->
    <div :class="stepClasses.badgeClass">
      <icon v-if="props.status === 'completed' && props.type === 'solid'" icon="ph:check-bold" width="14px" height="14px" class="spr-text-color-inverted-strong"/>
      <span v-else :class="stepClasses.numberClass">
        {{ props.number }}
      </span>
    </div>
    
    <div :class="stepClasses.textContainerClass">
      <!-- LABEL -->
      <span v-if="props.label" :class="stepClasses.labelClass">
        {{ props.label }}
      </span>
      <!-- DESCRIPTION -->
      <span v-if="props.description" :class="stepClasses.descriptionClass">
        {{ props.description }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { stepEmitTypes, stepPropTypes } from '@/components/stepper/step/step';
import { useStep } from '@/components/stepper/step/use-step';
import { Icon } from '@iconify/vue'; 

const props = defineProps(stepPropTypes);
const emit = defineEmits(stepEmitTypes);
const { stepClasses } = useStep(props, emit);
</script>
