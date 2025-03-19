<template>
  <div :class="collapsibleClasses.container">
    <slot name="trigger" :toggle-collapsible="toggleCollapsible" />
    <Transition @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave">
      <div v-if="modelValue" ref="contentRef" :style="contentStyle">
        <slot />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { collapsiblePropTypes, collapsibleEmitTypes } from './collapsible';
import { useCollapsible } from './use-collapsible';

const props = defineProps(collapsiblePropTypes);
const emit = defineEmits(collapsibleEmitTypes);

const { collapsibleClasses, contentStyle, toggleCollapsible, onBeforeEnter, onEnter, onLeave } = useCollapsible(
  props,
  emit,
);
</script>
