<template>
  <div
    v-bind="snackProps"
    ref="snackRef"
    class="snackbar spr-background-color-inverted spr-text-color-inverted-strong spr-font-size-200 spr-line-height-400 spr-border-color-strong spr-box-border spr-flex spr-h-fit spr-flex-row spr-items-center spr-rounded-border-radius-lg spr-border spr-border-solid spr-px-size-spacing-2xs spr-py-size-spacing-3xs"
    @click="handleClick"
  >
    <label v-if="showIcon" :class="[snackToneCssClass, 'spr-mr-size-spacing-3xs']">
      <Icon :icon="snackIcon" :width="iconSize" :height="iconSize" />
    </label>
    <label class="flex-auto">{{ text }}</label>
    <div></div>
    <label
      v-if="showAction"
      :class="[
        snackToneCssClass,
        'spr-font-size-100 spr-line-height-100 spr-ml-size-spacing-3xs spr-font-medium spr-uppercase selection:spr-cursor-pointer',
      ]"
      @click="() => action()"
    >
      {{ actionText }}
    </label>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';

import { snackEmitTypes, snackPropTypes } from './snack';
import { useSnack } from './use-snack';

const iconSize = '24px';

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
