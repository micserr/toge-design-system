<template>
  <Transition
    name="slide-up"
    enter-active-class="spr-transition spr-duration-[150ms] spr-ease-in-out"
    enter-from-class="spr-translate-y-20"
    enter-to-class="spr-translate-y-0"
    leave-active-class="spr-transition spr-duration-[150ms] spr-ease-in-out"
    leave-from-class="spr-translate-y-0"
    leave-to-class="spr-translate-y-20"
  >
    <div v-if="isVisible" :class="[floatingActionClasses.wrapperClass]">
      <div
        v-if="!$slots.default"
        class="spr-flex spr-w-full spr-items-center spr-justify-between spr-px-size-spacing-md spr-py-size-spacing-2xs"
      >
        <slot v-if="$slots.message" name="message" />

        <div v-if="$slots.actions" class="spr-flex spr-items-center spr-gap-1">
          <slot name="actions" />
        </div>
      </div>
      <slot />
    </div>
  </Transition>
</template>
<script lang="ts" setup>
import { floatingActionPropTypes } from './floating-action';
import { useFloatingAction } from './use-floating-action';

const props = defineProps(floatingActionPropTypes);
const { isVisible, floatingActionClasses } = useFloatingAction(props);
</script>
