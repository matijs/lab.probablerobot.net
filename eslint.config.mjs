import js from '@eslint/js';
import json from '@eslint/json';
import eslintConfigPrettier from 'eslint-config-prettier';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig(
  globalIgnores(['**/.netlify/']),
  {
    languageOptions: {
      parserOptions: {
        // Stop typescript-eslint from warning about unsupported TS versions
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
    linterOptions: {
      // Globally disable inline configuration
      noInlineConfig: true,
    },
  },
  {
    name: '@eslint/js recommended',
    files: ['**/*.{js,cjs,mjs,ts}'],
    plugins: { js },
    extends: [js.configs.recommended],
  },
  {
    name: 'typescript-eslint recommended',
    files: ['**/*.ts'],
    extends: [tseslint.configs.strict],
    rules: {
      '@typescript-eslint/consistent-type-imports': ['error'],
    },
  },
  {
    name: 'root .js files',
    files: ['*.js'],
    languageOptions: {
      globals: { ...globals.node },
    },
  },
  {
    name: '.js files in src/ directories',
    files: ['**/src/**/*.js'],
    languageOptions: {
      globals: { ...globals.browser },
    },
  },
  {
    name: '@eslint/json recommended for JSON',
    files: ['**/*.json'],
    ignores: ['**/tsconfig*.json'],
    language: 'json/json',
    extends: [json.configs.recommended],
  },
  {
    name: '@eslint/json recommended for JSONC',
    files: ['**/tsconfig*.json'],
    language: 'json/jsonc',
    extends: [json.configs.recommended],
  },
  eslintConfigPrettier,
);
