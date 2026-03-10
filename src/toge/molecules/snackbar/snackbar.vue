<template>
  <Teleport to="body">
    <div :class="positionClasses">
      <TransitionGroup name="snack">
        <div
          v-for="snack in props.snacks"
          :key="snack.id ?? snack.text"
          :class="getSnackClasses(snack.tone ?? 'neutral').wrapper"
          role="alert"
          aria-live="polite"
        >
          <slot name="snack" :snack="snack">
            <Icon
              v-if="snack.showIcon !== false"
              :icon="getSnackIcon(snack.tone ?? 'neutral')"
              :class="getSnackClasses(snack.tone ?? 'neutral').icon"
              width="24"
              height="24"
            />
            <span :class="getSnackClasses(snack.tone ?? 'neutral').text">{{ snack.text }}</span>
            <TogeButton
              v-if="snack.showAction"
              variant="text"
              @click="emit('action', snack)"
            >
              <span :class="getSnackClasses(snack.tone ?? 'neutral').actionLabel">
                {{ snack.actionText ?? 'Undo' }}
              </span>
            </TogeButton>
          </slot>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import TogeButton from '../../primitives/button/button.vue'
import type { SnackbarProps, SnackbarEmits, SnackbarSlots, SnackTone } from './snackbar.types'
import { getSnackbarPositionClasses, getSnackClasses } from './snackbar.styles'

const props = withDefaults(defineProps<SnackbarProps>(), {
  position: 'bottom-left',
})

const emit = defineEmits<SnackbarEmits>()

defineSlots<SnackbarSlots>()

const positionClasses = computed(() => getSnackbarPositionClasses(props.position))

function getSnackIcon(tone: SnackTone): string {
  const icons: Record<SnackTone, string> = {
    success: 'material-symbols:check-circle-rounded',
    warning: 'material-symbols:warning-rounded',
    error: 'material-symbols:error-rounded',
    info: 'material-symbols:info-rounded',
    neutral: 'material-symbols:notifications-rounded',
  }
  return icons[tone]
}
</script>

<style scoped>
.snack-enter-active,
.snack-leave-active {
  transition: all 0.3s ease;
}
.snack-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.snack-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
