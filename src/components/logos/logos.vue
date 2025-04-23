<template>
  <AdvancedImage v-bind="$attrs" :cldImg="logoSrc" :alt="logoAlt" :title="logoAlt" />
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
  display: inline-block; /* Ensures the img behaves correctly */
  line-height: 1; /* Prevents extra space below the image */
  width: 150px;
  vertical-align: middle;
}
</style>
