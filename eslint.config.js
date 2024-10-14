import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  {
    plugins: {
      "typescript-eslint": tseslint.plugin,
    },
    languageOptions: {
      parserOptions: {
        parser: "@typescript-eslint/parser",
        project: "./tsconfig.app.json",
        extraFileExtensions: [".vue"],
        sourceType: "module",
      },
    },
    ignores: ["node_modules/*", "dist/*", ".git", "*.config.js", "*.d.ts", "**/vite.config.ts", "lib/*"], // dist not working here for some reason T_T
  },
  eslintConfigPrettier,
);
