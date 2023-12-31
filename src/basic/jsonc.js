/* eslint-disable unicorn/prefer-module */
const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  extends: ["plugin:jsonc/recommended-with-jsonc"],
  overrides: [
    {
      files: ["*.json", "*.json5", "*.jsonc"],
      parser: "jsonc-eslint-parser",
      rules: {
        "jsonc/array-bracket-spacing": ["error", "never"],
        "jsonc/comma-dangle": ["error", "never"],
        "jsonc/comma-style": ["error", "last"],
        "jsonc/indent": ["error", 2],
        "jsonc/key-spacing": [
          "error",
          { beforeColon: false, afterColon: true },
        ],
        "jsonc/no-octal-escape": "error",
        "jsonc/object-curly-newline": [
          "error",
          { multiline: true, consistent: true },
        ],
        "jsonc/object-curly-spacing": ["error", "always"],
        "jsonc/object-property-newline": [
          "error",
          { allowMultiplePropertiesPerLine: true },
        ],
      },
    },
    {
      files: ["**/package.json"],
      parser: "jsonc-eslint-parser",
      rules: {
        "jsonc/sort-keys": [
          "error",
          {
            pathPattern: "^$",
            order: [
              "name",
              "version",
              "private",
              "packageManager",
              "description",
              "type",
              "keywords",
              "license",
              "homepage",
              "bugs",
              "repository",
              "author",
              "contributors",
              "funding",
              "files",
              "main",
              "module",
              "types",
              "exports",
              "typesVersions",
              "unpkg",
              "jsdelivr",
              "browser",
              "bin",
              "man",
              "directories",
              "publishConfig",
              "scripts",
              "peerDependencies",
              "peerDependenciesMeta",
              "optionalDependencies",
              "dependencies",
              "devDependencies",
              "engines",
              "config",
              "overrides",
              "pnpm",
              "husky",
              "lint-staged",
              "eslintConfig",
              "prettier",
            ],
          },
          {
            pathPattern: "^(?:dev|peer|optional|bundled)?[Dd]ependencies$",
            order: { type: "asc" },
          },
          {
            pathPattern: "^exports.*$",
            order: ["types", "require", "import", "default"],
          },
        ],
        "jsonc/sort-array-values": [
          "error",
          {
            pathPattern: "^files$",
            order: { type: "asc" },
          },
        ],
      },
    },
  ],
});
