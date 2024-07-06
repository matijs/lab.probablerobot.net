export default {
  singleQuote: true,
  trailingComma: 'es5',
  overrides: [
    {
      files: ['*.yml', '*.yaml'],
      options: { singleQuote: false },
    },
  ],
};
