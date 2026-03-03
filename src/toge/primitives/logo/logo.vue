<template>
  <div>
    <img :src="logoSrc" :alt="logoTitle" :title="logoTitle" :width="widthPx" v-bind="$attrs" />
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import type { LogoProps } from './logo.types'
import { getLogoClasses, getLogoTitle } from './logo.styles'

const props = withDefaults(defineProps<LogoProps>(), {
  name: 'hr',
  theme: 'dark',
  width: 50,
})

const logoSrc = computed(
  () => `https://res.cloudinary.com/dfeykvudc/image/upload/sprout-${props.name}-${props.theme}`
)

const logoTitle = computed(() => getLogoTitle(props.name!))

const widthPx = computed(() => props.width)
</script>
