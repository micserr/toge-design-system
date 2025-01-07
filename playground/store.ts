import { computed, reactive, toRefs } from 'vue';
import { useStore as useReplStore, type StoreState, useVueImportMap, mergeImportMap } from '@vue/repl';

export const useStore = () => {
  const { importMap: builtIn } = useVueImportMap();

  const builtinImportMap = computed(() => {
    return mergeImportMap(builtIn.value, {
      imports: {
        '@jefmari/design-system-next': `https://unpkg.com/@jefmari/design-system-next@1.0.11/dist/design-system-next.js`,
      },
      scopes: {},
    });
  });

  const storeState: Partial<StoreState> = toRefs(
    reactive({
      builtinImportMap,
      sfcOptions: {
        script: {
          propsDestructure: true,
        },
      },
    }),
  );

  const utils = {
    versions,
    pr,
    setVersion,
    toggleNightly,
    serialize,
    init,
  };
  Object.assign(store, utils);
  return store as typeof store & typeof utils;
};

export type Store = ReturnType<typeof useStore>;
