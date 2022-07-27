<div align="center">
  <h1>jest mock</h1>
  <p>jest中的mock，jest.fn()、jest.spyOn()、jest.mock()</p>
</div>

## 目录

- [目录](#目录)
- [Mock函数的作用](#mock函数的作用)
- [1.jest.fn()](#1jestfn)
- [2.jest.mock()](#2jestmock)
- [3.jest.spyOn()](#3jestspyon)


## Mock函数的作用

在项目中，一个模块的方法内常常会去调用另外一个模块的方法。在单元测试中，我们可能并不需要关心内部调用的方法的执行过程和结果，**只想知道它是否被正确调用即可，甚至会指定该函数的返回值**。此时，使用Mock函数是十分有必要。

Mock函数提供的以下三种特性，在我们写测试代码时十分有用：

1. 捕获函数调用情况
2. 设置函数返回值
3. 改变函数的内部实现

## 1.jest.fn()

jest.fn()所创建的Mock函数还可以设置返回值，定义内部实现或返回Promise对象
```js
jest.fn().mockReturnValue('default')
```

## 2.jest.mock()

## 3.jest.spyOn()