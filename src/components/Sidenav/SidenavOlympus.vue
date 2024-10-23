<template>
  <div
    :class="[
      'tw-background-color-base tw-hidden-scrolls tw-fixed tw-bottom-0 tw-left-0 tw-top-0 tw-w-auto tw-overflow-y-auto tw-overflow-x-hidden tw-duration-300 tw-ease-in-out',
    ]"
  >
    <div
      :class="[
        'tw tw-grid tw-justify-center tw-px-[12px] tw-pb-[8px] tw-pt-[16px]',
        '[&>img]:tw-mx-auto [&>img]:tw-h-[24px] [&>img]:tw-w-[24px]',
      ]"
    >
      <slot name="logo-image" />
    </div>
    <div
      :class="[
        'tw-grid tw-justify-center tw-gap-[6px] tw-px-[12px] tw-pb-[16px] tw-pt-[8px]',
      ]"
    >
      <div
        v-if="hasQuickActions"
        :class="[
          'tw-text-color-brand-base tw-mx-auto tw-h-[32px] tw-cursor-pointer tw-text-[28px] tw-transition tw-ease-in-out',
          'hover:tw-text-color-success-hover',
          'active:tw-text-color-success-pressed active:tw-scale-90',
        ]"
      >
        <IconPlusCircleFill />
      </div>
      <div
        v-if="hasQuickActions"
        :class="[
          'tw-px-[8px] tw-py-[6px] tw-transition tw-ease-in-out',
          'hover:tw-background-color-hover',
          'active:tw-background-color-single-active active:tw-scale-90',
        ]"
      >
        <IconMagnifyingGlass />
      </div>
      <div
        v-for="i in 100"
        :key="i"
        class="tw-h-[32px] tw-w-[36px] tw-bg-tomato-300"
      >
        {{ i }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NavLink } from './SidenavOlympusInterface';

import IconPlusCircleFill from '~icons/ph/plus-circle-fill';
import IconMagnifyingGlass from '~icons/ph/magnifying-glass';

defineProps<{
  hasQuickActions: boolean;
  hasSearch: boolean;
  navLinks: NavLink[];
}>();
</script>
