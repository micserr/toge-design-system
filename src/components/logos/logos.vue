<template>
  <AdvancedImage v-bind="$attrs" :cldImg="logoSrc" :alt="logoAlt" :title="logoAlt" :width="width" />
</template>

<script lang="ts" setup>
import { useLogos } from './use-logos';
import { logosPropTypes } from './logos';
import { AdvancedImage } from '@cloudinary/vue';

const props = defineProps(logosPropTypes);

const { logoSrc, logoAlt } = useLogos(props);
</script>

<style scoped>
img {
  display: inline-block; 
  line-height: 1;
  vertical-align: middle;
}
</style>
