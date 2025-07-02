<template>
  <div
    v-bind="snackProps"
    ref="snackRef"
    class="snackbar spr-background-color-inverted spr-text-color-inverted-strong spr-font-size-200 spr-line-height-400 spr-border-color-strong spr-box-border spr-flex spr-h-fit spr-flex-row spr-items-center spr-rounded-border-radius-lg spr-border spr-border-solid spr-px-size-spacing-2xs spr-py-size-spacing-3xs"
    @click="handleClick"
  >
    <div class="spr-flex spr-flex-auto spr-items-center">
      <slot name="icon">
        <Icon
          v-if="showIcon"
          :icon="snackIcon"
          :width="iconSize"
          :height="iconSize"
          :class="[snackToneCssClass, 'spr-mr-size-spacing-3xs spr-flex-shrink-0']"
        />
      </slot>
      
      <slot name="label">
        <label>{{ text }}</label>
      </slot>
    </div>
    <template v-if="showAction">
      <slot>
        <label
          :class="[
            snackToneCssClass,
            'spr-font-size-100 spr-line-height-100 spr-ml-size-spacing-3xs spr-flex spr-items-center spr-font-medium spr-uppercase selection:spr-cursor-pointer',
          ]"
          @click="() => action()"
        >
          <spr-button
            v-if="actionIconProps"
            icon-only
            :class="['!spr-p-size-spacing-4xs hover:spr-cursor-pointer', { 'spr-mr-2': actionText !== '' }]"
            size="small"
            variant="secondary"
            :tone="actionIconProps.tone"
          >
            <Icon :icon="actionIconProps.icon" width="20" height="20" />
          </spr-button>
          {{ actionText }}
        </label>
      </slot>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import SprButton from '@/components/button/button.vue';
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
