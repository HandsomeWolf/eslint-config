/* eslint-disable unicorn/prefer-module */
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  overrides: [
    {
      files: ['*.yml', '*.yaml'],
      parser: 'yaml-eslint-parser',
      parserOptions: {
        defaultYAMLVersion: '1.2',
      },
      extends: ['plugin:yml/standard'],
      rules: {
        quotes: ['error', 'single'],
        'yml/no-empty-mapping-value': 'off',
      },
    },
  ],
});
