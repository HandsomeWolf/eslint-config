/* eslint-disable unicorn/prefer-module */
const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  overrides: [
    {
      files: ["*.vue"],
      extends: ["plugin:vue/vue3-recommended"],
      plugins: ["vue"],
      rules: {
        "@typescript-eslint/consistent-type-imports": [
          "error",
          { prefer: "type-imports" },
        ],
        "vue/max-attributes-per-line": "off",
        "vue/no-v-html": "off",
        "vue/multi-word-component-names": "off",
        "vue/require-prop-types": "off",
        "vue/require-default-prop": "off",

        "vue/html-self-closing": [
          "error",
          {
            html: {
              void: "always",
              normal: "always",
              component: "always",
            },
            svg: "always",
            math: "always",
          },
        ],
        "vue/component-tags-order": [
          "error",
          { order: ["script", "template", "style"] },
        ],
        "vue/custom-event-name-casing": ["error", "camelCase"],
        "vue/no-useless-v-bind": "error",
        "vue/no-unused-refs": "error",
        "vue/padding-line-between-blocks": ["error", "always"],

        "vue/prefer-template": "error",
        "vue/eqeqeq": ["error", "smart"],
        "vue/no-constant-condition": "warn",
        "vue/object-shorthand": [
          "error",
          "always",
          {
            ignoreConstructors: false,
            avoidQuotes: true,
          },
        ],
        "vue/no-loss-of-precision": "error",
        "vue/no-empty-pattern": "error",
      },
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        sourceType: "module",
        extraFileExtensions: [".vue"],
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  ],
});
