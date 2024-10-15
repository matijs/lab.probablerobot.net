import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPerfectionist from 'eslint-plugin-perfectionist';
import tseslint from 'typescript-eslint';

export default tseslint.config(
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
  {
    // `ignores` on its own is equivalent to a global ignore
    ignores: ['**/.netlify/'],
  },
);
