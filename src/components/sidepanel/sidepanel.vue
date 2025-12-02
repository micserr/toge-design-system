<template>
  <div v-if="!props.isStacking && isOpen && hasBackdrop" :class="sidepanelClasses.backdropBaseClasses"></div>

  <Transition
    :enter-active-class="sidepanelClasses.sidepanelTransitionActiveClasses"
    :leave-active-class="sidepanelClasses.sidepanelTransitionActiveClasses"
    :enter-from-class="sidepanelClasses.sidepanelTransitionHiddenClasses"
    :enter-to-class="sidepanelClasses.sidepanelTransitionVisibleClasses"
    :leave-from-class="sidepanelClasses.sidepanelTransitionVisibleClasses"
    :leave-to-class="sidepanelClasses.sidepanelTransitionHiddenClasses"
    :appear="!props.isStacking"
  >
    <div
      v-if="props.isOpen || props.isStacking"
      ref="sidepanelRef"
      role="dialog"
      aria-labelledby="sidepanel-title"
      aria-describedby="sidepanel-content"
      :class="sidepanelClasses.sidepanelBaseClasses"
      data-testid="sidepanel-dialog"
      :style="{ height: typeof height === 'number' ? `${height}px` : height }"
    >
      <template v-if="!props.hideHeader">
        <div v-if="!$slots.header" :class="sidepanelClasses.sidepanelHeaderClasses">
          <div v-if="!isLoading" id="headers">
            <div id="sidepanel-title" :class="sidepanelClasses.sidepanelHeaderTitleClasses">
              {{ headerTitle }}
            </div>
            <div id="sidepanel-subtitle" :class="sidepanelClasses.sidepanelHeaderSubtitleClasses">
              <slot name="subtitle">
                <span class="spr-text-color-base">{{ headerSubtitle }}</span>
              </slot>
            </div>
          </div>
          <div v-else id="header-loaders" class="spr-w-full spr-flex spr-flex-col spr-gap-size-spacing-4xs">
            <div class="spr-skeletal-loader spr-h-4 spr-w-[90%] spr-rounded-md"></div>
            <div
              v-if="headerSubtitle || $slots.subtitle"
              class="spr-skeletal-loader spr-h-8 spr-w-[95%] spr-rounded-md"
            ></div>
          </div>

          <div class="spr-flex spr-items-center spr-gap-size-spacing-3xs">
            <Icon
              v-if="props.isExpandable"
              :class="sidepanelClasses.sidepanelHeaderIconClasses"
              :icon="isExpanded ? 'ph:arrows-in-simple' : 'ph:arrows-out-simple'"
              data-testid="expand-icon"
              @click="handlePanelExpansion"
            />
            <Icon
              :class="sidepanelClasses.sidepanelHeaderIconClasses"
              icon="ph:x"
              data-testid="x-icon"
              @click="handleClose"
            />
          </div>
        </div>
        <div v-else>
          <slot name="header"></slot>
        </div>
      </template>

      <div id="sidepanel-content" :class="sidepanelClasses.sidepanelContentClasses">
        <slot />
      </div>

      <div v-if="$slots.footer" :class="sidepanelClasses.sidepanelFooterClasses">
        <slot name="footer"></slot>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';

import { useSidepanel } from './use-sidepanel';
import { sidepanelPropTypes, sidepanelEmitTypes } from './sidepanel';

const props = defineProps(sidepanelPropTypes);
const emit = defineEmits(sidepanelEmitTypes);

const { sidepanelClasses, sidepanelRef, handleClose, isExpanded, handlePanelExpansion } = useSidepanel(props, emit);
</script>
