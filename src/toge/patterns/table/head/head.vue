<template>
  <th
    :class="headClasses"
    :colspan="props.colspan"
    :style="[
      props.width ? { width: props.width } : {},
      props.sticky && props.stickyPosition ? { left: props.stickyPosition } : {},
    ]"
  >
    <div :class="innerClasses">
      <span @click="props.sort ? emit('sort') : undefined">
        <slot />
      </span>
      <span v-if="props.sort" :class="sortIconClasses" @click="emit('sort')">
        <Icon :icon="sortIcon" height="16" width="16" />
      </span>
    </div>
  </th>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import type { HeadProps, HeadEmits } from './head.types'
import { getHeadClasses, getHeadInnerClasses, getSortIconClasses } from './head.styles'

const props = withDefaults(defineProps<HeadProps>(), {
  align: 'left',
  sort: false,
  sortOrder: null,
  active: false,
  sticky: false,
})

const emit = defineEmits<HeadEmits>()

defineSlots<{ default(props: {}): any }>()

const headClasses = computed(() =>
  getHeadClasses({ align: props.align, sticky: props.sticky, active: props.active }),
)
const innerClasses = computed(() => getHeadInnerClasses(props.align))
const sortIconClasses = computed(() => getSortIconClasses(props.active))

const sortIcon = computed(() => {
  if (!props.active) return 'material-symbols:unfold-more-rounded'
  if (props.sortOrder === 'asc') return 'material-symbols:arrow-upward-rounded'
  if (props.sortOrder === 'desc') return 'material-symbols:arrow-downward-rounded'
  return 'material-symbols:unfold-more-rounded'
})
</script>
