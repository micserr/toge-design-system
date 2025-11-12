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
      :style="{ height: typeof height === 'number' ? `${height}px` : height }"
    >
      <template v-if="!props.hideHeader">
        <div v-if="!$slots.header" :class="sidepanelClasses.sidepanelHeaderClasses">
          <div id="sidepanel-title" :class="sidepanelClasses.sidepanelHeaderTitleClasses">
            {{ headerTitle }}
          </div>
          <div class="spr-flex spr-items-center spr-gap-size-spacing-3xs">            
            <Icon
              v-if="props.isExpandable"
              :class="sidepanelClasses.sidepanelHeaderIconClasses"
              :icon="isExpanded ? 'ph:arrows-in-simple' : 'ph:arrows-out-simple'"
              @click="handlePanelExpansion"
            />
            <Icon :class="sidepanelClasses.sidepanelHeaderIconClasses" icon="ph:x" @click="handleClose" />
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
