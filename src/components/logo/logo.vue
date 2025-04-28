<template>
  <AdvancedImage v-bind="$attrs" :cld-img="logoSrc" :alt="logoTitle" :title="logoTitle" :width="width" />
</template>

<script lang="ts" setup>
import { useLogo } from './use-logo';
import { logoPropTypes } from './logo';
import { AdvancedImage } from '@cloudinary/vue';

const props = defineProps(logoPropTypes);

const { logoSrc, logoTitle } = useLogo(props);
</script>

<style scoped>
img {
  display: inline-block; 
  line-height: 1;
  vertical-align: middle;
}
</style>
