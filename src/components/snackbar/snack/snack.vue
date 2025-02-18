<template>
  <div 
    v-bind="snackProps"
    ref="snackRef" 
    class="
      snackbar 
      background-color-inverted
      text-color-inverted-strong
      font-size-200
      line-height-400
      h-fit
      rounded-border-radius-lg
      px-size-spacing-2xs
      py-size-spacing-3xs
      border
      border-solid
      border-color-strong
      box-border
      flex
      flex-row
      items-center
    "
    @click="handleClick"
  >
    <label 
      v-if="showIcon"
      :class="[
        snackToneCssClass,
        'mr-size-spacing-3xs',
      ]"
    >
      <Icon :icon="snackIcon" :width="iconSize" :height="iconSize"/>
    </label>
    <label class="flex-auto">{{ text }}</label>
    <div></div>
    <label 
      v-if="showAction" 
      :class="[ 
        snackToneCssClass,
        'ml-size-spacing-3xs',
        'cursor-pointer',
        'uppercase',
        'font-medium',
        'font-size-100',
        'line-height-100'
      ]"
      @click="() => action()"
    >
      {{ actionText }}
    </label>
  </div>
</template>

<script lang="ts" setup>
import { snackEmitTypes, snackPropTypes } from './snack';
import { useSnack } from './use-snack';
import { Icon } from '@iconify/vue';

const iconSize = "24px";

const props = defineProps(snackPropTypes);
const emit = defineEmits(snackEmitTypes);
const { snackRef, snackProps, snackToneCssClass, snackIcon, handleClick } = useSnack(props, emit);

</script>

<style lang="scss" scoped>
.snackbar {
  width: 360px;
  max-width: 360px;
  min-height: 56px;
  max-height: 76px;
}
</style>
