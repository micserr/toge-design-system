import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tsconfigPaths from "vite-tsconfig-paths";
import Components from "unplugin-vue-components/vite";
import dts from "vite-plugin-dts";
// import gzipPlugin from "rollup-plugin-gzip";
import { libInjectCss } from "vite-plugin-lib-inject-css";

import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  plugins: [
    vue(),
    tsconfigPaths(),
    Components(),
    dts(/* { tsconfigPath: "./tsconfig.app.json", rollupTypes: true } */),
    // gzipPlugin(),
    libInjectCss(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      name: "Design System Next",
      fileName: "design-system-next",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
