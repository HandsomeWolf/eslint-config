/* eslint-disable unicorn/prefer-module */
const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  plugins: ["import"],
  extends: [
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  rules: {
    "import/first": "error",
    "import/no-mutable-exports": "error",
    "import/no-duplicates": "error",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        pathGroups: [{ pattern: "@/**", group: "internal" }],
        pathGroupsExcludedImportTypes: ["type"],
      },
    ],
    "import/no-default-export": "error",
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  overrides: [
    {
      files: [
        `**/*config*.?([cm])[jt]s?(x)`,
        `**/views/**/*.?([cm])[jt]s?(x)`,
        `**/pages/**/*.?([cm])[jt]s?(x)`,
        `**/{index,vite,esbuild,rollup,webpack,rspack}.ts`,
        "**/*.d.ts",
        `**/*.md/**`,
      ],
      rules: {
        "import/no-default-export": "off",
      },
    },
  ],
});
