<template>
  <AdvancedImage v-bind="$attrs" :cld-img="logoSrc" :alt="logoTitle" :title="logoTitle" :width="width" />
</template>

<script lang="ts" setup>
import { useLogos } from './use-logos';
import { logosPropTypes } from './logos';
import { AdvancedImage } from '@cloudinary/vue';

const props = defineProps(logosPropTypes);

const { logoSrc, logoTitle } = useLogos(props);
</script>

<style scoped>
img {
  display: inline-block; 
  line-height: 1;
  vertical-align: middle;
}
</style>
