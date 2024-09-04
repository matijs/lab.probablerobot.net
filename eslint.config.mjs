import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPerfectionist from 'eslint-plugin-perfectionist';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // globally disable inline configuration, this also removes the need to use
  // `reportUnusedDisableDirectives` because these don't work anyway
  {
    linterOptions: {
      noInlineConfig: true,
    },
  },
  eslint.configs.recommended,
  eslintPluginPerfectionist.configs['recommended-natural'],
  ...tseslint.configs.strict,
  {
    rules: {
      '@typescript-eslint/consistent-type-imports': ['error'],
      'perfectionist/sort-objects': ['error', { partitionByNewLine: true }],
    },
  },
  eslintConfigPrettier,
  // `ignores` on its own is equivalent to a global ignore
  {
    ignores: ['**/.netlify/'],
  },
);
