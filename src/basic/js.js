/* eslint-disable unicorn/prefer-module */
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  globals: {
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly',
  },
  reportUnusedDisableDirectives: true,
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  extends: ['eslint:recommended'],
  ignorePatterns: [
    '*.min.*',
    '*.d.ts',
    'CHANGELOG.md',
    'dist',
    'LICENSE*',
    'output',
    'out',
    'coverage',
    'public',
    'temp',
    'package-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '__snapshots__',
    // ignore for in lint-staged
    '*.css',
    '*.png',
    '*.ico',
    '*.toml',
    '*.patch',
    '*.txt',
    '*.crt',
    '*.key',
    'Dockerfile',
    // force include
    '!.github',
    '!.vitepress',
    '!.vscode',
    // force exclude
    '.vitepress/cache',
  ],
  rules: {
    'no-unused-vars': ['error', { args: 'none', ignoreRestSiblings: true }], // https://eslint.org/docs/rules/no-unused-vars#args
    'no-constant-condition': 'warn', // https://eslint.org/docs/rules/no-constant-condition#allow
    'no-debugger': 'warn', // https://eslint.org/docs/rules/no-debugger#allow
    'no-console': ['warn', { allow: ['warn', 'error'] }], // https://eslint.org/docs/rules/no-console#allow
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ], // https://eslint.org/docs/rules/no-restricted-syntax#disallowwith
    'no-return-await': 'warn', // https://eslint.org/docs/rules/no-return-await#allowtry
    'no-empty': ['error', { allowEmptyCatch: true }], // https://eslint.org/docs/rules/no-empty#allowemptycatch
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false,
      },
    ], // https://eslint.org/docs/rules/sort-imports#ignorecasesensitive

    'no-var': 'error', // https://eslint.org/docs/rules/no-var#enforcees6
    'prefer-const': [
      'warn',
      { destructuring: 'all', ignoreReadBeforeAssign: true },
    ], // https://eslint.org/docs/rules/prefer-const#destructuring
    'prefer-arrow-callback': [
      'error',
      { allowNamedFunctions: false, allowUnboundThis: true },
    ], // https://eslint.org/docs/rules/prefer-arrow-callback#allownamedfunctions
    'object-shorthand': [
      'error',
      'always',
      { ignoreConstructors: false, avoidQuotes: true },
    ], // https://eslint.org/docs/rules/object-shorthand#avoidquotes
    'prefer-rest-params': 'error', // https://eslint.org/docs/rules/prefer-rest-params#enforcees6
    'prefer-spread': 'error', // https://eslint.org/docs/rules/prefer-spread#enforcees6
    'prefer-template': 'error', // https://eslint.org/docs/rules/prefer-template#enforcees6
    'require-await': 'error', // https://eslint.org/docs/rules/require-await#enforcees6

    'array-callback-return': 'error', // https://eslint.org/docs/rules/array-callback-return#enforce
    'block-scoped-var': 'error', // https://eslint.org/docs/rules/block-scoped-var#enforce
    eqeqeq: ['error', 'smart'], // https://eslint.org/docs/rules/eqeqeq#enforce
    'no-alert': 'warn', // https://eslint.org/docs/rules/no-alert#enforce
    'no-case-declarations': 'error', // https://eslint.org/docs/rules/no-case-declarations#enforce
    'no-fallthrough': ['warn', { commentPattern: 'break[\\s\\w]*omitted' }], // https://eslint.org/docs/rules/no-fallthrough#commentpattern
    'no-multi-str': 'error', // https://eslint.org/docs/rules/no-multi-str#enforce
    'no-with': 'error', // https://eslint.org/docs/rules/no-with#enforce
    'no-void': 'error', // https://eslint.org/docs/rules/no-void#enforce
    'no-duplicate-imports': 'error', // https://eslint.org/docs/rules/no-duplicate-imports#enforce

    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ], // https://eslint.org/docs/rules/no-unused-expressions#allowshortcircuit
    'no-lonely-if': 'error', // https://eslint.org/docs/rules/no-lonely-if#enforce
    'prefer-exponentiation-operator': 'error', // https://eslint.org/docs/rules/prefer-exponentiation-operator#enforce
  },
  overrides: [
    {
      files: ['**/scripts/*', '**/cli.*'],
      rules: {
        'no-console': 'off',
      },
    },
    {
      files: ['**/*.{test,spec}.js?(x)'],
      rules: {
        'no-unused-expressions': 'off',
      },
    },
    {
      files: ['**/*.jsx'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  ],
});
