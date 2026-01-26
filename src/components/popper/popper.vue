<template>
  <Menu
    v-bind="$attrs"
    aria-id="popper-wrapper"
    distance="4"
    :container="`#${props.id}`"
    :style="{
      width: '100%',
    }"
  >
    <div :id="props.id">
      <slot />
    </div>

    <template #popper>
        <slot name="content" />
    </template>
  </Menu>
</template>

<script lang="ts" setup>
import { Menu } from 'floating-vue';

import 'floating-vue/dist/style.css';

import { popperPropTypes } from './popper';


const props = defineProps(popperPropTypes);

</script>
