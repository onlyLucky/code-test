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
- [Jest 中的匹配器](#jest-中的匹配器)
  - [Using Matchers](#using-matchers)
  - [expect](#expect)
  - [expect.extend(matchers)](#expectextendmatchers)
- [Jest 测试异步代码](#jest-测试异步代码)
  - [回调方式](#回调方式)
  - [Promise 方式](#promise-方式)
  - [.resolvers / .rejects 匹配器](#resolvers--rejects-匹配器)
  - [Async / Await 方式](#async--await-方式)
- [Jest 测试定时器](#jest-测试定时器)
  - [基本用法](#基本用法)
  - [快进所有时间](#快进所有时间)
  - [解决循环定时器问题](#解决循环定时器问题)
- [Jest 中的 Mock 函数](#jest-中的-mock-函数)
  - [Mock 函数常用方法：](#mock-函数常用方法)

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

## Jest 中的匹配器

### Using Matchers

具体 dome example 参考链接

[using-matcher](./../jestDemo/test/experience/using-matcher.test.js)

- common

toBe 可以实现与 expect 是否一致 ，大致上可以判断 number，如果判断一个对象或者数组，可以使用 toEqual

toEqual，可以进行递归检查 object or array 的每一项

- Truthiness 判定

  - toBeNull 匹配 null
  - toBeUndefined 匹配未定义
  - toBeDefined 匹配已经定义的值
  - toBeTruthy 匹配为真的情况
  - toBeFalsy 匹配为假的情况

- Number 数据类型

  - toBeGreaterThan 大于判断
  - toBeGreaterThanOrEqual 大于等于判断
  - toBeLessThan 小于判定
  - toBeLessThanOrEqual 大于等于判定
  - toBe / toEqual 都可以做数字,字符串的等于判定
  - toBeCloseTo 浮点数等于判定

- Strings 字符串类型

  - toMatch 可以使用正则进行匹配

- Arrays and iterables 数组匹配

  - toContain 匹配数组中是否存在

- Exceptions 异常
  - toThrow 匹配异常
- [更多](https://jestjs.io/zh-Hans/docs/expect)

### expect

当写测试时，你经常需要检查值是否满足指定的条件。 expect 让您可以访问一些“匹配器”，让您验证不同类型的东西

### expect.extend(matchers)

可以使用 expect.extend 将自己的 matcher 添加到 Jest

```js
expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    console.log(this, "this:");
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be within range ${floor}-${ceiling}`,
        pass: true,
      };
    } else {
      return {
        message: `expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false,
      };
    }
  },
});

test("numeric ranges", () => {
  expect(100).toBeWithinRange(90, 110);
  expect(101).not.toBeWithinRange(0, 100);
  expect({ apples: 6, bananas: 3 }).toEqual({
    apples: expect.toBeWithinRange(1, 10),
    bananas: expect.not.toBeWithinRange(11, 20),
  });
});
```

异步 Matcher

```js
function getExternalValueFromRemoteSource() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    });
  });
}

expect.extend({
  async toBeDivisibleByExternalValue(received) {
    const externalValue = await getExternalValueFromRemoteSource();
    console.log("externalValue:", externalValue);
    const pass = received % externalValue === 0;
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be divisible by ${externalValue}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${received} to be divisible by ${externalValue}`,
        pass: false,
      };
    }
  },
});

test("is divisible by external value", async () => {
  await expect(100).toBeDivisibleByExternalValue();
  await expect(101).not.toBeDivisibleByExternalValue();
});
```

自定义 Matcher API

在自定义 Matcher 中，可以通过 this 来访问下列帮助函数与属性：

- this.isNot 在 matcher 之前是否调用了表示否定的 .not 修饰符
- this.promise

[expect 更多参考 Api](https://jestjs.io/zh-Hans/docs/expect)

## Jest 测试异步代码

可以用来测试我们日常接口返回的值，下面介绍了几种日常开发的使用场景

[异步测试代码参考](../jestDemo/test/experience/async.test.js)

### 回调方式

我们通过回调函数形式返回数据去测试

```js
test("the data is peanut butter", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("peanut butter");
      done();
    } catch (error) {
      done(error);
    }
  }
  fetchData(callback);
});
```

- Jest 会等 done 回调函数执行结束后，结束测试
- 若 done() 函数从未被调用，测试用例会正如你预期的那样执行失败（显示超时错误）
- 若 expect 执行失败，它会抛出一个错误，后面的 done() 不再执行。 若我们想知道测试用例为何失败，我们必须将 expect 放入 try 中，将 error 传递给 catch 中的 done 函数
- 如果我们不进行 try 捕获这个错误的话，同样也会返回一个错误，但是显示的是超时错误

### Promise 方式

在这里需要注意的是请求接口的方法，返回的一定要是一个 promise 对象，因为测试的地方需要一个 promise 进行`.then`获取成功回调后的数据

- 我们也可以使用`.catch`,来测试这个是失败的，不过这个应该很少使用

### .resolvers / .rejects 匹配器

其实这个和上面的差别不大，只是这里使用了 expect 的匹配器进行了 promise 的一层转化

```js
test(".resolvers test", () => {
  return expect(fetchExpectMatch(true)).resolves.toBe("peanut butter");
});

test(".rejects  test", () => {
  return expect(fetchExpectMatch(false)).rejects.toMatch("error");
});
```

- expect(fetchData()).resolves 是 promise 的 resolve 返回
- expect(fetchData()).rejects 是 promise 的 reject 返回
- 两者也需要返回一个 promise 的对象

### Async / Await 方式

async/await 实际上是语法糖，与 Promise 示例使用的逻辑相同

```js
test("Async / Await resolve", async () => {
  const data = await fetchExpectMatch(true);
  expect(data).toBe("peanut butter");
});

test("Async / Await reject", async () => {
  expect.assertions(1);
  try {
    await fetchExpectMatch(false);
  } catch (error) {
    expect(error).toMatch("error");
  }
});
```

也可以将 asyn/await 和 .resolvers/.rejects 结合使用。

## Jest 测试定时器

组件可能会使用基于时间的函数如 setTimeout、setInterval 和 Date.now 等。在测试环境中，使用可以手动“推进”时间的替代物来模拟这些功能会很有帮助。它会确保你的测试快速运行！

[Jest 测试定时器参考代码](../jestDemo/test/experience/setTimeout.test.js)

### 基本用法

```js
function timeGame(callback) {
  console.log("Ready...go!");
  setTimeout(() => {
    console.log("time's up -- stop");
    callback && callback();
  }, 1000);
}
// 通过jest.useFakeTimers();来模拟定时器函数
jest.useFakeTimers();

test("wait 1s before ending the game", () => {
  timeGame();
  // 验证定时器函数被调用的次数
  expect(global.setTimeout).toHaveBeenCalledTimes(1);
  // 验证定时器的时间是1s
  expect(global.setTimeout).toHaveBeenLastCalledWith(
    expect.any(Function),
    1000
  );
});
```

由于 jest 版本更新对 fakeTimers 进行了更改,刚遇到一个 **[received value must be a mock or spy function]**报错

下面解决方案，亲测可用

首先需要在 jest.config.js 中配置 timers:'real'

最后的代码修改可以查看上面的参考部分

### 快进所有时间

用于在测试中将时间“快进”到正确的时间点

```js
test("calls the callback after 1 second", () => {
  const timerGame = require("../timerGame");
  const callback = jest.fn();

  timerGame(callback);

  // 在这个时间点，定时器的回调不应该被执行
  expect(callback).not.toBeCalled();

  // “快进”时间使得所有定时器回调被执行
  jest.runAllTimers();

  // 现在回调函数应该被调用了！
  expect(callback).toBeCalled();
  expect(callback).toHaveBeenCalledTimes(1);
});
```

### 解决循环定时器问题

在某些场景下你可能还需要“循环定时器”——在定时器的 callback 函数中再次设置一个新定时器。 对于这种情况，如果将定时器一直运行下去那将陷入死循环，所以在此场景下不应该使用 jest.runAllTimers(),这种场景下可以使用`jest.runOnlyPendingTimers()`

```js
// 使用模拟定时器
jest.useFakeTimers();

// 验证定时器函数被调用的次数
expect(setTimeout).toHaveBeenCalledTimes(1);

// 验证定时器的时间是 1s
expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);

// 快进所有定时器结束
jest.runAllTimers();

// 解决定时器循环问题
jest.runOnlyPendingTimers();

// 快进定时器到指定时间
jest.advanceTimersByTime(1000);

// 清除所有定时器
jest.clearAllTimers();
```

## Jest 中的 Mock 函数

有两种方法可以模拟函数：要么在测试代码中创建一个 mock 函数，要么编写一个手动 mock 来覆盖模块依赖。

所有的 mock 函数都有这个特殊的 .mock 属性，它保存了关于此函数如何被调用、调用时的返回值的信息。 .mock 属性还追踪每次调用时 this 的值，所以我们同样可以也检视（inspect） this：

### Mock 函数常用方法：

```js
const mockFn = jest.fn();

const a = new mockFn();
const b = new mockFn();

mockFn.mock.instances[0] === a; // true
mockFn.mock.instances[1] === b; // true
```

1. mockFn.mockName(value)：设置 mock 函数的名字
2. mockFn.getMockName()： 返回 mockFn.mockName(value)中设置的名字
3. mockFn.mock.calls：mock 函数的调用信息

`mockFn.mock.calls`返回一个数组，数组中的每一个元素又是一个数组，包含 mock 函数的调用信息。比如，一个被调用两次的模拟函数 f，参数为 f('arg1'，'arg2')，然后使用参数 f('arg3'，'arg4')，mockFn.mock.calls 返回的数组形式如下：

> [['arg1', 'arg2'], ['arg3', 'arg4']]

因此，`mockFn.mock.calls.length`代表`mock`函数被调用次数，`mockFn.mock.calls[0][0]`代表第一次调用传入的第一个参数，以此类推。

4. mockFn.mock.results：mock 函数的 return 值，以数组存储
5. mockFn.mock.instances：mock 函数实例
6. mockFn.mockImplementation(fn)：创建一个 mock 函数

   > jest.fn(implementation)是 jest.fn().mockImplementation(implementation)的简写。

7. mockFn.mockImplementationOnce(fn)：创建一个 mock 函数

该函数将用作对 mocked 函数的一次调用的 mock 的实现。可以链式调用，以便多个函数调用产生不同的结果。

```js
const myMockFn = jest
  .fn()
  .mockImplementationOnce((cb) => cb(null, true))
  .mockImplementationOnce((cb) => cb(null, false));

myMockFn((err, val) => console.log(val)); // true

myMockFn((err, val) => console.log(val)); // false
```

8. mockFn.mockReturnThis()：jest.fn()的语法糖
   ```js
   jest.fn(function () {
     return this;
   });
   ```
9. mockFn.mockReturnValue(value)：接受一个值作为调用 mock 函数时的返回值

```js
const mock = jest.fn();
mock.mockReturnValue(42);
mock(); // 42
mock.mockReturnValue(43);
mock(); // 43
```

10. mockFn.mockReturnValueOnce(value)：接受一个值作为调用 mock 函数时的返回值，可以链式调用，以便产生不同的结果。

```js
const myMockFn = jest
  .fn()
  .mockReturnValue("default")
  .mockReturnValueOnce("first call")
  .mockReturnValueOnce("second call");

// 'first call', 'second call', 'default', 'default'
console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
```

11. ockFn.mockResolvedValue(value)：mock 异步函数的语法糖

    ```js
    jest.fn().mockImplementation(() => Promise.resolve(value));
    ```

    用于在 test 中模拟异步函数

    ```js
    test("async test", async () => {
      const asyncMock = jest.fn().mockResolvedValue(43);

      await asyncMock(); // 43
    });
    ```

12. mockFn.mockResolvedValueOnce(value)：语法糖

实现类似于

```js
jest.fn().mockImplementationOnce(() => Promise.resolve(value));
test("async test", async () => {
  const asyncMock = jest
    .fn()
    .mockResolvedValue("default")
    .mockResolvedValueOnce("first call")
    .mockResolvedValueOnce("second call");

  await asyncMock(); // first call
  await asyncMock(); // second call
  await asyncMock(); // default
  await asyncMock(); // default
});
```
13. mockFn.mockRejectedValue(value)：语法糖
    ```js
    jest.fn().mockImplementation(() => Promise.reject(value));
    test('async test', async () => {
      const asyncMock = jest.fn().mockRejectedValue(new Error('Async error'));

      await asyncMock(); // throws "Async error"
    });
    ```
14. mockFn.mockRejectedValueOnce(value)：语法糖
    ```js
    jest.fn().mockImplementationOnce(() => Promise.reject(value));
    test('async test', async () => {
      const asyncMock = jest
        .fn()
        .mockResolvedValueOnce('first call')
        .mockRejectedValueOnce(new Error('Async error'));

      await asyncMock(); // first call
      await asyncMock(); // throws "Async error"
    });
    ```
15. mockFn.mockClear()：重置所有存储在mockFn.mock.calls 和 mockFn.mock.instances数组中的信息

    当你想要清除两个断言之间的模拟使用数据时，这通常很有用。

16. mockFn.mockReset()：完成mockFn.mockClear()所做的所有事情，还删除任何模拟的返回值或实现

    当你想要将模拟完全重置回其初始状态时，这非常有用。（请注意，重置spy将导致函数没有返回值）。

17. mockFn.mockRestore()：完成mockFn.mockReset()所做的所有事情，并恢复原始（非模拟）实现

    当你想在某些测试用例中模拟函数并在其他测试用例中恢复原始实现时，这非常有用。





