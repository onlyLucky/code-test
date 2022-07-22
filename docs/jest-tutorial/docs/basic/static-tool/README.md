# 静态检查工具

前面的章节讲了很多关于单测和集成测试的内容，它们可以有效地提高我们的代码信心。

不过，不只有写测试才能提高代码信心，我们还能通过静态代码检查工具来实现，比如 TypeScript、ESLint 等。TypeScript 之前已跟大家聊过了，
这章就来讲讲 ESLint。

## ESLint

**[ESLint](https://eslint.org/) 是一个前端标准的静态代码检查工具，它可以根据配置的规则来检查代码是否符合规范。**
现在市面上已经有很多 ESLint 相关的规则集，我们只需安装配置它们就好了：

```shell
# ESLint
npm i -D eslint@8.13.0
# TypeScript 相关
npm i -D @typescript-eslint/eslint-plugin@5.19.0 @typescript-eslint/parser@5.19.0
```

在项目根目录添加 `.eslintrc.js`：

```js
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  plugins: [],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    // 关闭规则
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
};
```

我们配置的 ESLint 继承了 `eslint:recommended` 以及 `plugin:@typescript-eslint/recommended` 的 **ESLint 配置**。

执行 `npx eslint src --fix` 会自动修复 `src` 文件下的代码了。

## Prettier

**[Prettier](https://prettier.io/) 是一个代码格式化工具。** 前一小节说到 ESLint 是通过制定的的规范来检查代码的，这里的 **规范** 有两种：
* 代码风格规范
* 代码质量规范

Prettier 主要负责的是代码风格。

::: tip
**绝大多数程序是不会对代码质量规范有异议的，但他们往往很难在代码风格上达成共识。**
而代码风格又是一个很主观的东西，公说公有理，婆说婆有理，怎么办呢？

Prettier 就说：别吵了，我来定一个 **最完美** 的规范，你们就先按我的来，哪条不满意的，再自己配吧。
:::

现在我们来安装一下 Prettier：

```shell
# Prettier
npm i -D prettier@2.6.2
# Prettier x ESLint 的配置和插件
npm i -D eslint-config-prettier@8.5.0 eslint-plugin-prettier@4.0.0
```

在根目录添加配置文件 `.prettierrc`：

```json
{}
```

这里我们不修改任何 Prettier 配置。然后在 `.eslintrc.js` 里引入 Prettier：

```js
module.exports = {
  // ...
  extends: [
    // ...
    "plugin:prettier/recommended",
  ],
};
```

**注意：要把 Prettier 的推荐配置 `plugin:prettier/recommended` 放在 `extends` 最后一项。**

## 写测试的规则

那么代码质量方面呢？著名的有 Airbnb 研发的 [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) ESLint 配置。
不过，由于这个项目重点在测试，所以我们只关注测试代码的质量就好了。正好 Jest 和 React Testing Library 也推出了自己的 ESLint 规则和配置，我们来安装一下：

```shell
# Jest 和 RTL 的
npm i -D eslint-plugin-jest@26.1.4 eslint-plugin-testing-library@5.3.1
```

在 `.eslintrc.js` 里引入它们，最终 ESLint 的完整配置如下：

```js
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    "jest/globals": true,
  },
  plugins: [],
  extends: [
    // ESLint
    "eslint:recommended",
    // TypeScript
    "plugin:@typescript-eslint/recommended",
    // Jest
    "plugin:jest/recommended",
    // React Testing Library
    "plugin:testing-library/react",
    // Prettier
    "plugin:prettier/recommended",
  ],
  rules: {
    // 关闭规则
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-var": "off",
    "@typescript-eslint/no-var-requires": "off",
    "testing-library/no-dom-import": "off",
    // 错误提示
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/valid-expect": "error",
    "testing-library/await-async-query": "error",
    "testing-library/no-await-sync-query": "error",
    // 告警提示
    "jest/no-disabled-tests": "warn",
    "jest/prefer-to-have-length": "warn",
    "testing-library/no-debugging-utils": "warn",
  },
};
```

有了这种提示，你写测试代码时就会更规范，更少犯错。

## `extends` vs `plugins`

这一节我想聊聊 ESLint 中 `extends` 和 `plugins` 这两个配置参数的区别，相信这会困扰很多人。

举个例子，假如我们要配置 ESLint x TypeScript，可以看到官网有这样的配置：

```js
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
};
```

神奇的是，当你去掉 `plugins` 之后发现 `eslint` 依然可以正常工作。更神奇的是，只要你写了 `extends`，那么连 `parser` 也可以不用加，要知道没有指定 `parser` 选项，eslint 可看不懂你的 TypeScript 文件。

所以说，到底是 `plugins` 加上了 TypeScript 的能力还是 `extends` 加上了 TypeScript 的规则呢？真让人头大，直到终于有一天受不了了，翻找了一下网上的资料发现了[这个帖子](https://stackoverflow.com/questions/61528185/eslint-extends-vs-plugins-v2020)。

先来说结论吧：**`plugins` 只是开启了这个插件，而 `extends` 则会继承别人写好的一份 `.eslintrc` 的配置，这份配置不仅仅包括了 `rules` 还有 `parser`，`plugins` 之类的东西。**

所以回到问题，为什么在继承了 `plugin:@typescript-eslint/recommended` 之后就可以不写 `plugins` 和 `parser` 呢？因为别人已经把配置都放在 `recommended` 这份配置表里了，这样对使用的人来说，就可以少写很多配置项了。

也就是说，下面两份配置是等价的：

```js
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: { sourceType: "module" },
  plugins: ["@typescript-eslint"],
  extends: [],
  rules: {
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions: true
      }
    ]
  }
}
```

以及

```js
module.exports = {
  plugins: [],
  extends: ["plugin:@typescript-eslint/recommended"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions: true
      }
    ]
  }
}
```

对于第一份配置：
* 需要手动添加 `parser`, `parserOptions`, `plugins`
* 只开启了 `@typescript-eslint/explicit-function-return-type` 一个规则
 
对于第二份配置：
* `plugin:@typescript-eslint/recommended` 自动添加了 `parser`, `parserOptions`, `plugins`
* 自动加上一些推荐的 TypeScript 的 ESLint 规则
* 自定义了 `@typescript-eslint/explicit-function-return-type` 规则

## 总结

**看完这一章，我们了解到不仅写测试能提高代码信心，静态代码检查工具也可以给我们很强的代码自信。** 具体的途径是配置 TypeScript 和 ESLint。

ESLint 中包含了两类规范：
* 代码风格规范
* 代码质量规范

Prettier 可以给我们提供一份相对全面的代码风格规范。建议把它与 ESLint 结合起来使用。

对于代码质量规范，开发者需要自己去找对应的框架提供的 ESLint 规范，比如有 Vue、React、Jest、React Testing Library 等。

最后顺带解释了 `extends` 与 `plugins` 两个配置项的区别：**`plugins` 只是开启了这个插件，而 `extends` 则会继承别人写好的一份 `.eslintrc` 的配置，
这份配置不仅仅包括了 `rules` 还有 `parser`，`plugins` 之类的配置项。**
