<template>
  <div v-if="activePanels.length > 0" :class="stackingSidepanelClasses.sidepanelStackBackdropClasses"></div>
  <div ref="stacking-sidepanel-base" :class="[stackingSidepanelClasses.sidepanelStackBaseClasses]" :style="stackingSidepanelBaseTransform">
    <transition-group 
      :enter-active-class="stackingSidepanelClasses.sidepanelStackTransitionActiveClasses"
      :leave-active-class="stackingSidepanelClasses.sidepanelStackTransitionActiveClasses"
      :enter-from-class="stackingSidepanelClasses.sidepanelStackEnterFromClasses"
      :leave-to-class="stackingSidepanelClasses.sidepanelStackLeaveToClasses"
      :move-class="stackingSidepanelClasses.sidepanelStackTransitionActiveClasses"
      appear
    >
      <div v-for="name in activePanels" :key="name">
        <slot :name="name" />
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { useTemplateRef } from 'vue';
import { useStackingSidepanel } from './use-stacking-sidepanel';
import { stackingSidePanelProps, stackingSidePanelEmits } from './stacking-sidepanel';

const stackingSidepanelBase = useTemplateRef('stacking-sidepanel-base');
const props = defineProps(stackingSidePanelProps);
const emits = defineEmits(stackingSidePanelEmits);

const {
  showPanel,
  hidePanel,
  stackingSidepanelClasses,
  stackingSidepanelBaseTransform,
  activePanels,
} = useStackingSidepanel(props, emits, stackingSidepanelBase);

defineExpose({
  showPanel,
  hidePanel,
});
</script>
