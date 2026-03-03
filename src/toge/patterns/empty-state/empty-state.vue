<template>
  <div :class="classes.container">
    <div :class="classes.imageSize">
      <slot>
        <img v-if="props.image" :src="imageUrl" alt="empty state" class="spr-h-full spr-w-full spr-object-cover" />
      </slot>
    </div>
    <section class="spr-flex spr-flex-col spr-items-center spr-justify-center spr-gap-size-spacing-md">
      <div class="spr-text-color-strong spr-body-md spr-body-md-regular-medium spr-flex spr-flex-col spr-text-center">
        <span>{{ props.description }}</span>
        <div class="spr-text-color-base spr-body-sm-regular">{{ props.subDescription }}</div>
      </div>
      <slot name="button">
        <button v-if="props.hasButton" type="button" @click="(evt) => emit('click', evt)">
          Action
        </button>
      </slot>
    </section>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import type { EmptyStateProps, EmptyStateEmits } from './empty-state.types'
import { getEmptyStateClasses } from './empty-state.styles'

const props = withDefaults(defineProps<EmptyStateProps>(), {
  description: 'No results found',
  subDescription: 'Try a different search term.',
  size: 'small',
  image: 'list',
  hasButton: false,
  customClasses: '',
})

const emit = defineEmits<EmptyStateEmits>()

defineSlots<{
  default(props: {}): any
  button(props: {}): any
}>()

const classes = computed(() => getEmptyStateClasses({ size: props.size!, customClasses: props.customClasses }))

const imageUrl = computed(() =>
  props.image ? new URL(`../../../assets/images/empty-states/${props.image}.svg`, import.meta.url).href : ''
)
</script>
