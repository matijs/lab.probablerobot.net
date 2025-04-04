import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPerfectionist from 'eslint-plugin-perfectionist';
import { globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  globalIgnores(['**/.netlify/']),
  {
    languageOptions: {
      parserOptions: {
        // make sure typescript-eslint stops warning about using an unsupported
        // TypeScript version
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
    linterOptions: {
      // globally disable inline configuration
      noInlineConfig: true,
    },
  },
  js.configs.recommended,
  eslintPluginPerfectionist.configs['recommended-natural'],
  ...tseslint.configs.strict,
  {
    rules: {
      '@typescript-eslint/consistent-type-imports': ['error'],
      'perfectionist/sort-objects': ['error', { partitionByNewLine: true }],
    },
  },
  {
    files: ['*.js'],
    languageOptions: {
      globals: { ...globals.node },
    },
  },
  {
    files: ['public/**/*.js'],
    languageOptions: {
      globals: { ...globals.browser },
    },
  },
  {
    files: ['**/src/**/*.js'],
    languageOptions: {
      globals: { ...globals.browser },
    },
  },
  eslintConfigPrettier,
);
