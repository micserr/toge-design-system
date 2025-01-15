// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  {
    ignores: [
      'eslint.config.js',
      'node_modules/*',
      'dist/*',
      '.git',
      '*.config.js',
      '*.d.ts',
      '**/vite.config.ts',
      'lib/*',
      'docs/.vitepress/dist',
      'docs/.vitepress/cache',
      'playground/*',
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    plugins: {
      vue: pluginVue,
      'typescript-eslint': tseslint.plugin,
    },
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.app.json',
        extraFileExtensions: ['.vue'],
        sourceType: 'module',
      },
    },
    rules: {
      'vue/multi-word-component-names': [
        'error',
        {
          ignores: ['button', 'sidenav', 'lozenge', 'switch', 'radio', 'badge', 'input', 'tabs', 'modal'],
        },
      ],
    },
  },
  eslintConfigPrettier,
);
