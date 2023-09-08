/* eslint-disable unicorn/prefer-module */
const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  plugins: ["markdown"],
  extends: ["plugin:markdown/recommended"],
  overrides: [
    {
      files: ["**/*.md/*.*"],
      parserOptions: {
        ecmaFeatures: {
          impliedStrict: true,
        },
      },
      plugins: ["@typescript-eslint"],
      rules: {
        "unicorn/numeric-separators-style": "off",
        "@typescript-eslint/no-redeclare": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "off",
        "no-alert": "off",
        "no-console": "off",
        "no-restricted-imports": "off",
        "no-undef": "off",
        "no-unused-expressions": "off",
        "no-unused-vars": "off",
        "unused-imports/no-unused-vars": "off",
        "unused-imports/no-unused-imports": "off",
      },
    },
  ],
});
