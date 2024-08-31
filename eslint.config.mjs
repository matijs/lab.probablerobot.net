import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  // globally disable inline configuration, this also removes the need to use
  // `reportUnusedDisableDirectives` because these don't work anyway
  {
    linterOptions: {
      noInlineConfig: true,
    },
  },
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  {
    rules: {
      '@typescript-eslint/consistent-type-imports': ['error'],
    },
  },
  eslintConfigPrettier,
  // `ignores` on its own is equivalent to a global ignore
  {
    ignores: ['**/.netlify/'],
  },
);
