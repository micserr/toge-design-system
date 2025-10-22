<template>
  <div id="audit_trail_wrapper" ref="auditTrailWrapperRef" class="spr-flex spr-flex-col spr-gap-size-spacing-2xs">
    <div v-for="(entry, index) in auditTrailLogs" id="audit_trail_entry" :key="index" class="spr-relative spr-h-fit">
      <div class="spr-absolute spr-h-full spr-py-[6px]">
        <div
          :class="[
            'spr-h-[6px] spr-w-[6px] spr-rounded-full',
            index === 0 ? 'spr-bg-kangkong-600' : 'spr-bg-mushroom-200',
          ]"
        />
        <div
          :class="[
            'spr-relative spr-left-1/2 spr-mt-size-spacing-5xs spr-h-[calc(100%-18px)] spr-w-[1px] spr-translate-x-[-50%]',
            index === 0 ? 'spr-bg-kangkong-600' : 'spr-bg-mushroom-200',
            collapsedState[index] ? 'spr-h-[calc(100%-12px)]' : 'spr-h-[calc(100%-22px)]',
          ]"
        />
      </div>
      <div
        id="audit_trail_header"
        class="hover:spr-background-color-hover spr-ml-[10px] spr-flex spr-w-full spr-items-center spr-justify-between spr-gap-size-spacing-3xs spr-self-start spr-px-2 spr-py-[6px] hover:spr-cursor-pointer hover:spr-rounded-lg"
        @click="toggleCollapse(index)"
      >
        <div id="audit_trail_avatar" :class="[{ 'spr-self-start': isMultiLine[index] }]">
          <SprAvatar v-if="!!entry.avatarUrl" variant="image" :src="entry.avatarUrl" size="sm" />
          <SprAvatar v-else :initial="entry.userName" size="sm" />
        </div>
        <span
          id="audit_trail_title"
          :ref="(el) => setTitleRef(el, index)"
          class="spr-text-color-strong spr-text-200 spr-font-normal"
        >
          {{ entry.title }}
        </span>
        <div :class="['spr-h-4 spr-w-4', { 'spr-self-start': isMultiLine[index] }]">
          <Icon
            :icon="collapsedState[index] ? 'ph:caret-up' : 'ph:caret-down'"
            width="16px"
            height="16px"
            class="spr-text-color-strong"
          />
        </div>
      </div>
      <div id="audit_trail_logs_wrapper" class="spr-pl-[18px]">
        <SprCollapsible v-model="collapsedState[index]">
          <div
            v-for="(log, logIndex) in entry.logs"
            id="audit_trail_log_entries"
            :key="logIndex"
            :class="[
              'spr-flex spr-flex-col spr-gap-size-spacing-3xs',
              { 'spr-pb-size-spacing-3xs': logIndex !== entry.logs.length - 1 },
            ]"
          >
            <div id="log_label">
              <SprTooltip
                :text="log.label.join(' > ')"
                placement="bottom"
                :show-triggers="log.label.length > 2 ? 'hover' : []"
              >
                <div id="entry_label" class="spr-text-color-strong spr-text-200 spr-font-normal">
                  <template v-if="log.label.length === 1">
                    {{ log.label[0] }}
                  </template>
                  <template v-else-if="log.label.length === 2">
                    {{ log.label.join(' > ') }}
                  </template>
                  <template v-else> {{ log.label[0] }} > ... > {{ log.label[log.label.length - 1] }} </template>
                </div>
              </SprTooltip>
            </div>
            <div id="log_values" class="spr-flex spr-items-center spr-gap-size-spacing-3xs">
              <div
                id="old_value"
                class="spr-border-color-weak spr-text-color-supporting spr-rounded-border-radius-xs spr-border spr-border-solid spr-px-size-spacing-5xs spr-py-size-spacing-6xs spr-text-200 spr-font-normal"
              >
                {{ log.oldValue }}
              </div>
              <span class="spr-text-200 spr-font-medium"> → </span>
              <div
                id="new_value"
                class="spr-border-color-weak spr-text-color-strong spr-rounded-border-radius-xs spr-border spr-border-solid spr-px-size-spacing-5xs spr-py-size-spacing-6xs spr-text-200 spr-font-normal"
              >
                {{ log.newValue }}
              </div>
            </div>
          </div>
        </SprCollapsible>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import SprAvatar from '../avatar/avatar.vue';
import { useAuditTrail } from './use-audit-trail';
import { auditTrailPropTypes } from './audit-trail';
import { Icon } from '@iconify/vue';
import SprCollapsible from '../collapsible/collapsible.vue';
import SprTooltip from '../tooltip/tooltip.vue';

const props = defineProps(auditTrailPropTypes);
const { auditTrailLogs, collapsedState, toggleCollapse, setTitleRef, isMultiLine, auditTrailWrapperRef } =
  useAuditTrail(props);
</script>
