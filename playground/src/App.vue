<script lang="ts" setup>
import { computed, ref } from 'vue';
import { Repl, useStore, useVueImportMap, mergeImportMap } from '@vue/repl';
import Monaco from '@vue/repl/monaco-editor';
import Welcome from '../template/welcome.vue?raw';
import New from '../template/new.vue?raw';
import { version as iconifyVersion } from '@iconify/vue/package.json';

import { version as packageVersion } from '../../package.json';

const { importMap } = useVueImportMap();
const builtinImportMap = computed(() => {
  return mergeImportMap(importMap.value, {
    imports: {
      'design-system-next': `https://unpkg.com/design-system-next@${packageVersion}/dist/design-system-next.js`,
      '@iconify/vue': `https://unpkg.com/@iconify/vue@${iconifyVersion}/dist/iconify.mjs`,
    },
  });
});
const template = ref({
  welcomeSFC: Welcome,
  newSFC: New,
});
const store = useStore({
  builtinImportMap,
  template,
});
const previewOptions = {
  headHTML: `<link rel="stylesheet" href="https://unpkg.com/design-system-next@${packageVersion}/dist/main.css">`,
  customCode: {
    importCode: `import SproutDesignSystem  from 'design-system-next'`,
    useCode: 'app.use(SproutDesignSystem )',
  },
};
</script>

<template>
  <Repl
    :store="store"
    :editor="Monaco"
    theme="dark"
    :showCompileOutput="false"
    :showTsConfig="false"
    :previewOptions="previewOptions"
  />
</template>

<style>
html,
body {
  width: 100vw;
  height: 100vh;
  margin: 0;

  #playground {
    height: 100%;
    width: 100%;
  }
}
</style>
