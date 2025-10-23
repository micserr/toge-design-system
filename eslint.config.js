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
      globals: {
        console: 'readonly',
      },
    },
    rules: {
      'vue/multi-word-component-names': [
        'error',
        {
          ignores: [
            'accordion',
            'avatar',
            'badge',
            'banner',
            'button',
            'calendar',
            'card',
            'checkbox',
            'chips',
            'collapsible',
            'date-picker',
            'dropdown',
            'empty-state',
            'floating-action',
            'input',
            'list',
            'lozenge',
            'modal',
            'radio',
            'select',
            'sidenav',
            'sidepanel',
            'slider',
            'snack',
            'snackbar',
            'status',
            'switch',
            'step',
            'stepper',
            'table',
            'tabs',
            'textarea',
            'filter',
            'timePicker',
            'tooltip',
            'logo',
            'popper',
            'icon',
          ],
        },
      ],
    },
  },
  // Relax rules for test files
  {
    files: ['tests/**/*.{ts,js,vue}', '**/*.spec.{ts,js}', '**/*.test.{ts,js}'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  eslintConfigPrettier,
);
