<template>
  <div v-show="model" :class="classes.base" role="alert">
    <div class="spr:flex spr:items-start spr:gap-size-spacing-3xs spr:flex-1">
      <TogeStatus :state="statusState" size="base" class="spr:shrink-0" />
      <slot>
        <span :class="classes.message">{{ props.message }}</span>
      </slot>
    </div>
    <button
      v-if="props.showCloseButton"
      type="button"
      :class="classes.close"
      aria-label="Close banner"
      @click="handleClose"
    >
      <Icon icon="ph:x-bold" />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import type { BannerProps, BannerEmits } from './banner.types'
import { getBannerClasses } from './banner.styles'
import TogeStatus from '../../primitives/status/status.vue'
import type { StatusState } from '../../primitives/status/status.types'

const props = withDefaults(defineProps<BannerProps>(), {
  type: 'success',
  showCloseButton: false,
  message: '',
})

const emit = defineEmits<BannerEmits>()

defineSlots<{ default(props: {}): any }>()

const model = defineModel<boolean>({ default: true })

const classes = computed(() => getBannerClasses({ type: props.type! }))

const statusState = computed((): StatusState => {
  const map: Record<string, StatusState> = {
    success: 'success',
    error: 'danger',
    info: 'information',
    pending: 'pending',
    caution: 'caution',
  }
  return map[props.type!]
})

function handleClose() {
  model.value = false
  emit('close')
}
</script>
