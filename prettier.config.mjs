export default {
  singleQuote: true,
  trailingComma: 'es5',
  overrides: [
    {
      files: '*.yml',
      options: { singleQuote: false },
    },
  ],
};
