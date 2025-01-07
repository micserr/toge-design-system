<script setup lang="ts">
import { computed, reactive, toRefs } from 'vue';
import { Repl, useStore, useVueImportMap, mergeImportMap  } from '@vue/repl';
import Monaco from '@vue/repl/monaco-editor';
// import { useStore } from './store';

// const store = useStore();
const { importMap } = useVueImportMap();
const builtinImportMap = computed(() => {
  return mergeImportMap(importMap.value, {
    imports: {
      '@jefmari/design-system-next': `https://unpkg.com/@jefmari/design-system-next@1.0.11/dist/design-system-next.js`,
    },
  });
});
const store = useStore(
  {
    // pre-set import map
    builtinImportMap,
  },
  // initialize repl with previously serialized state
  location.hash,
);

const previewOptions = {
  headHTML: '<link rel="stylesheet" href="https://unpkg.com/@jefmari/design-system-next@1.0.11/dist/main.css">',
  customCode: {
    importCode: `import SproutDesignSystem  from '@jefmari/design-system-next'`,
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

<style lang="scss">
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
