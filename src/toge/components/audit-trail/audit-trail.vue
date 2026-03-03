<template>
  <div class="spr-flex spr-flex-col spr-gap-size-spacing-2xs">
    <div v-for="(entry, index) in props.logs" :key="index" class="spr-relative spr-h-fit">
      <!-- Timeline indicator -->
      <div class="spr-absolute spr-h-full spr-py-[6px]">
        <div :class="index === 0 ? 'spr-h-[6px] spr-w-[6px] spr-rounded-full spr-bg-kangkong-600' : 'spr-h-[6px] spr-w-[6px] spr-rounded-full spr-bg-mushroom-200'" />
        <div
          :class="[
            'spr-relative spr-left-1/2 spr-mt-size-spacing-5xs spr-w-[1px] spr-translate-x-[-50%]',
            index === 0 ? 'spr-bg-kangkong-600' : 'spr-bg-mushroom-200',
            collapsedState[index] ? 'spr-h-[calc(100%-12px)]' : 'spr-h-[calc(100%-22px)]',
          ]"
        />
      </div>
      <!-- Header row (clickable to toggle) -->
      <div
        class="hover:spr-background-color-hover spr-ml-[10px] spr-flex spr-w-full spr-items-center spr-justify-between spr-gap-size-spacing-3xs spr-self-start spr-px-2 spr-py-[6px] hover:spr-cursor-pointer hover:spr-rounded-lg"
        role="button"
        tabindex="0"
        :aria-expanded="collapsedState[index]"
        @click="handleToggle(index)"
        @keydown.enter.prevent="handleToggle(index)"
        @keydown.space.prevent="handleToggle(index)"
      >
        <div>
          <TogeAvatar v-if="entry.avatarUrl" variant="image" :src="entry.avatarUrl" size="sm" />
          <TogeAvatar v-else :initial="entry.userName" size="sm" />
        </div>
        <span class="spr-text-color-strong spr-text-200 spr-font-normal spr-flex-1">{{ entry.title }}</span>
        <Icon
          :icon="collapsedState[index] ? 'ph:caret-up' : 'ph:caret-down'"
          width="16px"
          height="16px"
          class="spr-text-color-strong"
        />
      </div>
      <!-- Logs -->
      <div class="spr-pl-[18px]">
        <TogeCollapsible v-model="collapsedState[index]">
          <div
            v-for="(log, logIndex) in entry.logs"
            :key="logIndex"
            :class="[
              'spr-flex spr-flex-col spr-gap-size-spacing-3xs',
              { 'spr-pb-size-spacing-3xs': logIndex !== entry.logs.length - 1 },
            ]"
          >
            <div class="spr-text-color-strong spr-text-200 spr-font-normal">
              <template v-if="log.label.length === 1">{{ log.label[0] }}</template>
              <template v-else-if="log.label.length === 2">{{ log.label.join(' > ') }}</template>
              <template v-else>{{ log.label[0] }} > ... > {{ log.label[log.label.length - 1] }}</template>
            </div>
            <div class="spr-flex spr-items-center spr-gap-size-spacing-3xs">
              <div
                class="spr-border-color-weak spr-text-color-supporting spr-rounded-border-radius-xs spr-border spr-border-solid spr-px-size-spacing-5xs spr-py-size-spacing-6xs spr-text-200 spr-font-normal"
              >
                {{ log.oldValue }}
              </div>
              <span class="spr-text-200 spr-font-medium">→</span>
              <div
                class="spr-border-color-weak spr-text-color-strong spr-rounded-border-radius-xs spr-border spr-border-solid spr-px-size-spacing-5xs spr-py-size-spacing-6xs spr-text-200 spr-font-normal"
              >
                {{ log.newValue }}
              </div>
            </div>
          </div>
        </TogeCollapsible>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import TogeAvatar from '../../primitives/avatar/avatar.vue'
import TogeCollapsible from '../collapsible/collapsible.vue'
import type { AuditTrailProps, AuditTrailEmits } from './audit-trail.types'
import { useAuditTrailState } from './audit-trail.state'

const props = withDefaults(defineProps<AuditTrailProps>(), {
  logs: () => [],
  alwaysOpen: true,
})

const emit = defineEmits<AuditTrailEmits>()

defineSlots<{ default(props: {}): any }>()

const { collapsedState, toggleCollapse } = useAuditTrailState(
  () => props.logs ?? [],
  () => props.alwaysOpen!,
)

function handleToggle(index: number) {
  toggleCollapse(index)
  emit('toggle', index, collapsedState[index])
}
</script>
