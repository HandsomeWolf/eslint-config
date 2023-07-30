# 使用说明

## @handsomewolf/eslint-config

1. 先安装依赖

```base
npm i @handsomewolf/eslint-config -D

或

pnpm i @handsomewolf/eslint-config -D
```

2. 在项目根目录新增 `.eslintrc` 文件，内容为：
```json
{
  "root": true,
  "extends": ["@handsomewolf/eslint-config"]
}

```

3. 如果是vscode编辑器，请在根目录的 `.vscode/settings.json` 文件中新增
```json
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "html",
    "yaml",
    "vue",
    "markdown",
    "md",
    "json",
    "jsonc"
  ]
}
```
因为eslint默认只会校验JavaScript文件，而该依赖包的规则中增加了json、yml等文件校验，例如package.json排序等