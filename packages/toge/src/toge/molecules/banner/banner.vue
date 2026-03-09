<template>
  <div v-show="model" :class="classes.base" role="alert">
    <div class="spr-flex spr-items-start spr-gap-size-spacing-3xs spr-flex-1">
      <Icon :icon="bannerIcon" :class="classes.icon" />
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
      <Icon icon="ph:x" />
    </button>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import type { BannerProps, BannerEmits } from './banner.types'
import { getBannerClasses, getBannerIcon } from './banner.styles'

const props = withDefaults(defineProps<BannerProps>(), {
  type: 'success',
  showCloseButton: false,
  message: '',
})

const emit = defineEmits<BannerEmits>()

defineSlots<{ default(props: {}): any }>()

const model = defineModel<boolean>({ default: true })

const classes = computed(() => getBannerClasses({ type: props.type! }))
const bannerIcon = computed(() => getBannerIcon(props.type!))

function handleClose() {
  model.value = false
  emit('close')
}
</script>
