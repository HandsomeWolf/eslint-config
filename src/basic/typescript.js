/* eslint-disable unicorn/prefer-module */
const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended",
      ],
      plugins: ["@typescript-eslint"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
      },
      rules: {
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-redeclare": "error",

        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/consistent-type-imports": [
          "error",
          { fixStyle: "inline-type-imports", disallowTypeAnnotations: false },
        ],
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/prefer-as-const": "warn",
      },
    },
    {
      files: ["**/*.d.ts"],
      rules: {
        "import/no-duplicates": "off",
      },
    },
    {
      files: ["**/*.{test,spec}.ts?(x)"],
      rules: {
        "no-unused-expressions": "off",
      },
    },
  ],
});
