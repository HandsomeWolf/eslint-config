/* eslint-disable unicorn/prefer-module */
const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  globals: {
    document: "readonly",
    navigator: "readonly",
    window: "readonly",
  },
  reportUnusedDisableDirectives: true,
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
  extends: ["eslint:recommended"],
  plugins: ["unused-imports"],
  ignorePatterns: [
    "*.min.*",
    "*.d.ts",
    "CHANGELOG.md",
    "dist",
    "LICENSE*",
    "output",
    "out",
    "coverage",
    "public",
    "temp",
    "package-lock.json",
    "pnpm-lock.yaml",
    "yarn.lock",
    "__snapshots__",
    // ignore for in lint-staged
    "*.css",
    "*.png",
    "*.ico",
    "*.toml",
    "*.patch",
    "*.txt",
    "*.crt",
    "*.key",
    "Dockerfile",
    // force include
    "!.github",
    "!.vitepress",
    "!.vscode",
    // force exclude
    ".vitepress/cache",
  ],
  rules: {
    "no-unused-vars": "off",
    "no-constant-condition": "warn", // https://eslint.org/docs/rules/no-constant-condition#allow
    "no-debugger": "warn", // https://eslint.org/docs/rules/no-debugger#allow
    "no-console": ["warn", { allow: ["warn", "error"] }], // https://eslint.org/docs/rules/no-console#allow
    "no-restricted-syntax": [
      "error",
      "ForInStatement",
      "LabeledStatement",
      "WithStatement",
    ], // https://eslint.org/docs/rules/no-restricted-syntax#disallowwith
    "no-return-await": "warn", // https://eslint.org/docs/rules/no-return-await#allowtry
    "no-empty": ["error", { allowEmptyCatch: true }], // https://eslint.org/docs/rules/no-empty#allowemptycatch
    "sort-imports": [
      "error",
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        allowSeparatedGroups: false,
      },
    ],

    "no-var": "error",
    "prefer-const": [
      "warn",
      { destructuring: "all", ignoreReadBeforeAssign: true },
    ],
    "prefer-arrow-callback": [
      "error",
      { allowNamedFunctions: false, allowUnboundThis: true },
    ],
    "object-shorthand": [
      "error",
      "always",
      { ignoreConstructors: false, avoidQuotes: true },
    ],
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "require-await": "error",

    "array-callback-return": "error",
    "block-scoped-var": "error",
    eqeqeq: ["error", "smart"],
    "no-alert": "warn",
    "no-case-declarations": "error",
    "no-fallthrough": ["warn", { commentPattern: "break[\\s\\w]*omitted" }],
    "no-multi-str": "error",
    "no-with": "error",
    "no-void": "error",
    "no-duplicate-imports": "error",

    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    "no-lonely-if": "error",
    "prefer-exponentiation-operator": "error",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
  overrides: [
    {
      files: ["**/scripts/*", "**/cli.*"],
      rules: {
        "no-console": "off",
      },
    },
    {
      files: ["**/*.{test,spec}.js?(x)"],
      rules: {
        "no-unused-expressions": "off",
      },
    },
    {
      files: ["**/*.jsx"],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  ],
});
