<template>
  <Teleport to="body">
    <Transition name="snackbar">
      <div v-if="snackbarStore.snacks.length > 0" class="snackbar-wrapper slide-in-element">
        <TransitionGroup name="snackbar" tag="ul">
          <li v-for="snack in snackbarStore.snacks" :key="snack.id" class="snackbar-snack spr-mb-size-spacing-3xs">
            <spr-snack
              :text="snack.text"
              :action-text="snack.actionText"
              :tone="snack.tone"
              :show-action="snack.showAction"
              :show-icon="snack.showIcon"
              :duration="snack.duration"
              :action-icon-props="snack.actionIconProps"
              :action="snack.action || snack.defaultAction"
            >
              <slot>
                <slot name="snackbarActions"></slot>
              </slot>
            </spr-snack>
          </li>
        </TransitionGroup>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts" setup>
import { useSnackbarStore } from '@/stores/useSnackbarStore';

import SprSnack from '@/components/snackbar/snack/snack.vue';
import { useSnackbar } from '@/components/snackbar/use-snackbar';

import { SnackPropTypes } from './snack/snack';
import { createPinia } from 'pinia';

const pinia = createPinia();
const snackbarStore = useSnackbarStore(pinia);
const { showSnackbar, showSuccess, showInformation, showDanger, showCaution } = useSnackbar();

defineExpose({
  showSnackbar: (payload: SnackPropTypes) => showSnackbar(payload),
  showSuccess: (payload: SnackPropTypes) => showSuccess(payload),
  showInformation: (payload: SnackPropTypes) => showInformation(payload),
  showDanger: (payload: SnackPropTypes) => showDanger(payload),
  showCaution: (payload: SnackPropTypes) => showCaution(payload),
});
</script>

<style lang="scss" scoped>
.snackbar {
  &-enter-from,
  &-leave-to {
    transform: translateY(100%);
    opacity: 0;
  }

  &-enter-active,
  &-leave-active {
    transition: 0.25s ease all;
  }

  &-wrapper {
    position: fixed;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;

    & > ul {
      list-style-type: none;
    }
  }
}
</style>
