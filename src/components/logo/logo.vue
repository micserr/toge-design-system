<template>
  <div>
    <img v-bind="$attrs" :src="logoSrc" :alt="logoTitle" :title="logoTitle" :width="width" />
  </div>
</template>

<script lang="ts" setup>
import { useLogo } from './use-logo';
import { logoPropTypes } from './logo';

const props = defineProps(logoPropTypes);

const { logoSrc, logoTitle } = useLogo(props);
</script>
