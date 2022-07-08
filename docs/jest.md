




<div align="center">
  <h1>jest使用</h1>
  <p>jest测试框架入门指南</p>
</div>

## 目录

- [目录](#目录)
- [起步](#起步)
  - [jest 介绍](#jest-介绍)
  - [jest 快速体验](#jest-快速体验)
  - [jest 监视模式](#jest-监视模式)
  - [使用 ES6 模块](#使用-es6-模块)
- [JestAPI](#jestapi)
  - [Test 函数](#test-函数)
  - [Expect 匹配器](#expect-匹配器)
  - [describe 函数](#describe-函数)
  - [生命周期钩子](#生命周期钩子)

## 起步

下面是一个测试流程：

1. 引入要测试的函数
2. 给函数一个输入
3. 定义预期输出
4. 检查函数是否返回了预期的输出结果

所谓的单元测试：输入 —— 预期输出 —— 验证结果

### jest 介绍

Jest 是 Facebook 出品的一个 JavaScript 开源测试框架。相对其他测试框架，其一大特点就是就是内置了常用的测试工具，比如零配置、自带断言、测试覆盖率工具等功能，实现了开箱即用。

Jest 适用但不局限于使用以下技术的项目：Babel,、TypeScript、 Node、 React、Angular、Vue 等。

Jest 主要特点：

- 零配置
- 自带断言
- 而作为一个面向前端的测试框架， Jest 可以利用其**特有的快照测试功能**，通过比对 UI 代码生成的快照文件，实现对 React 等常见前端框架的自动测试。
- 此外， Jest 的测试用例是并行执行的，而且**只执行发生改变的文件所对应的测试**，提升了测试速度。
- 测试覆盖率
- Mock 模拟

### jest 快速体验

[参考代码](../jestDemo/src/experience)

所有测试代码都和运行代码同名文件夹名，只不过

安装 jest 到项目中：

```js
npm i jest --save-dev
```

编写完成测试案例之后，npm script 进行配置

```js
// package.json
{
  script:{
    "test": "jest"
  }
}
```

> jest 命令会运行项目中所有以 .test.js 结尾的文件

**解决 vscode 中 jest 代码提示问题**

```js
npm i -D @types/jest
```

> 注意：@types/jest 必须安装到项目的根目录，并且以根目录的方式在 vscode 中打开，否则不生效。<br>
> 或者说只要是 vscode 打开的项目根目录有 @types/jest 这个包就可以了。

**配置文件**

```shell
npx jest --init
```

[详细配置信息](https://jestjs.io/docs/zh-Hans/configuration)

### jest 监视模式

**--watchAll**
监视文件的更改并在任何更改时重新运行所有测试

```shell
jest --watchALl
```

**--watch**
监视 Git 仓库中的文件更改，并重新运行与已更改的文件相关的测试。(这里需要 git 支持)

```shell
jest --watch
```

**监视模式中的辅助命令**

```shell
Watch Usage
 # 按 f 只运行失败的测试。
 # f 进入，f 退出
 › Press f to run only failed tests.

 # 按 o 只运行与更改文件相关的测试。
 # 需要 Git 支持
 # 也可以使用 jest --watch 直接进入 o 模式
 # jest --watchAll 监视所有文件变化并运行测试
 › Press o to only run tests related to changed files.

 # 按 p 以文件名正则表达式模式进行过滤。
 # 只有 --watchAll 的时候 p 模式才可以使用
 # 注意：testRegex 将尝试使用绝对文件路径来检测测试文件，因此，具有名称与之匹配的文件夹将所有文件作为测试运行
 # testRegex 与 testMatch 不能共存
 › Press p to filter by a filename regex pattern.

 # 按 t 以测试名称正则表达式模式进行过滤。
 › Press t to filter by a test name regex pattern.

 # 按 q 退出监视模式
 › Press q to quit watch mode.

 # 按 Enter 键触发测试运行
 › Press Enter to trigger a test run.
```

### 使用 ES6 模块

安装以下依赖

```shell
yarn add --dev babel-jest @babel/core @babel/preset-env
```

添加 babel 配置

```js
// babel.config.js
module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" } }]],
};
```

> Jest 在运行测试的时候会自动找到 Babel 将 ES6 代码转换为 ES5 执行。

## JestAPI

> 在测试文件中，Jest 将所有这些方法和对象放入全局环境中。我们可以导入相应的函数也可以不导入

```js
import { describe, expect, test } from "@jest/globals";
```

### Test 函数

> test 函数别名： it(name, fn, timeout)。

- [test(name, fn, timeout)](https://jestjs.io/zh-Hans/docs/api#testname-fn-timeout)
- [test.concurrent(name, fn, timeout)](https://jestjs.io/zh-Hans/docs/api#1-testconcurrentname-fn-timeout)
- [test.concurrent.each(table)(name, fn, timeout)](https://jestjs.io/zh-Hans/docs/api#1-testconcurrenteachtablename-fn-timeout)
- [test.concurrent.only.each(table)(name, fn)](https://jestjs.io/zh-Hans/docs/api#testconcurrentonlyeachtablename-fn)
- [test.concurrent.skip.each(table)(name, fn)](https://jestjs.io/zh-Hans/docs/api#testconcurrentskipeachtablename-fn)
- [test.each(table)(name, fn, timeout)](https://jestjs.io/zh-Hans/docs/api#1-testeachtablename-fn-timeout)
- [test.failing(name, fn, timeout)](https://jestjs.io/zh-Hans/docs/api#testfailingname-fn-timeout)
- [test.only(name, fn, timeout)](https://jestjs.io/zh-Hans/docs/api#1-testonlyname-fn-timeout)
- [test.skip(name, fn)](https://jestjs.io/zh-Hans/docs/api#testskipname-fn)
- [test.todo(name)](https://jestjs.io/zh-Hans/docs/api#testtodoname)

### Expect 匹配器

> 需要检查值是否满足某些条件。 Expect 使您可以访问许多“匹配器”，以使您可以验证不同的内容。

```js
test("two plus two is four", () => {
  expect(2 + 2).toBe(4);

  expect({ name: "jack" }).toEqual({ name: "jack" });

  expect("Christoph").toMatch(/stop/);

  expect(4).toBeGreaterThan(3);

  expect(4).toBeLessThan(5);
});
```

[匹配器列表查看](https://jestjs.io/zh-Hans/docs/expect)

### describe 函数

> 创建一个将几个相关测试组合在一起的块。

```js
const myBeverage = {
  delicious: true,
  sour: false,
};

describe("my beverage", () => {
  test("is delicious", () => {
    expect(myBeverage.delicious).toBeTruthy();
  });

  test("is not sour", () => {
    expect(myBeverage.sour).toBeFalsy();
  });
});
```

- [describe(name, fn)](https://jestjs.io/zh-Hans/docs/api#describename-fn)
- [describe.each(table)(name, fn, timeout)](https://jestjs.io/zh-Hans/docs/api#describeeachtablename-fn-timeout)
- [describe.only(name, fn)](https://jestjs.io/zh-Hans/docs/api#describeonlyname-fn)
- [describe.only.each(table)(name, fn)](https://jestjs.io/zh-Hans/docs/api#describeonlyeachtablename-fn)
- [describe.skip(name, fn)](https://jestjs.io/zh-Hans/docs/api#describeskipname-fn)
- [describe.skip.each(table)(name, fn)](https://jestjs.io/zh-Hans/docs/api#describeskipeachtablename-fn)

### 生命周期钩子

- [afterAll(fn, timeout)](https://jestjs.io/zh-Hans/docs/api#afterallfn-timeout)
- [afterEach(fn, timeout)](https://jestjs.io/zh-Hans/docs/api#aftereachfn-timeout)
- [beforeAll(fn, timeout)](https://jestjs.io/zh-Hans/docs/api#beforeallfn-timeout)
- [beforeEach(fn, timeout)](https://jestjs.io/zh-Hans/docs/api#beforeeachfn-timeout)
