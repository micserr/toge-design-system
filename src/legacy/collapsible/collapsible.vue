<template>
  <div :class="collapsibleClasses.container">
    <slot name="trigger" :toggle-collapsible="toggleCollapsible" />
    <Transition
      :css="false"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @before-leave="onBeforeLeave"
      @leave="onLeave"
    >
      <div v-show="modelValue" :style="contentStyle">
        <slot />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { collapsiblePropTypes, collapsibleEmitTypes } from './collapsible';
import { useCollapsible } from './use-collapsible';

const props = defineProps(collapsiblePropTypes);
const emit = defineEmits(collapsibleEmitTypes);

const { collapsibleClasses, contentStyle, toggleCollapsible, onBeforeEnter, onEnter, onBeforeLeave, onLeave } =
  useCollapsible(props, emit);
</script>
