<template>
  <Menu
    v-bind="$attrs"
    :shown="popperState"
    aria-id="popper-wrapper"
    distance="4"
    :container="`#${props.id}`"
    :style="{
      width: '100%',
    }"
  >
    <div :id="props.id" @click="popperState = true">
      <slot />
    </div>

    <template #popper>
      <div ref="popperRef">
        <slot name="content" />
      </div>
    </template>
  </Menu>
</template>

<script lang="ts" setup>
import { Menu } from 'floating-vue';

import 'floating-vue/dist/style.css';

import { popperPropTypes } from './popper';

import { usePopper } from './use-popper';

const props = defineProps(popperPropTypes);

const { popperState, popperRef } = usePopper();
</script>
