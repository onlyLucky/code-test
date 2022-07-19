
/*
 * @Author: fg
 * @Date: 2022-07-18 13:56:07
 * @LastEditors: fg
 * @LastEditTime: 2022-07-19 14:17:07
 * @Description: Jest 中的 Mock 函数
 */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function forEach (items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index])
  }
}

test('.mock test', () => {
  const mockCallback = jest.fn(x => 42 + x)

  forEach([0, 1], mockCallback)

  // 此 mock 函数被调用了两次
  // [ [ 0 ], [ 1 ] ] mockCallback.mock.calls 矩阵
  expect(mockCallback.mock.calls.length).toBe(2)

  // 第一次调用函数时的第一个参数是 0
  expect(mockCallback.mock.calls[0][0]).toBe(0)

  // 第二次调用函数时的第一个参数是 1
  expect(mockCallback.mock.calls[1][0]).toBe(1)

  // 第一次函数调用的返回值是 42
  expect(mockCallback.mock.results[0].value).toBe(42)
})

// .mock属性

test('.mock attr test', () => {
  const MyMock1 = jest.fn()
  const a = new MyMock1()
  console.log('MyMock1.mock.instances', MyMock1.mock.instances)
  // [<a>]
  const MyMock2 = jest.fn()
  const b = { a: 1 }
  const bound = MyMock2.bind(b)
  bound()
  console.log('MyMock2.mock.contexts', MyMock2.mock.contexts)
  // [<b>]
})
test('test function', () => {
  const someMockFunction = jest.fn((x, y) => 42 + x)
  console.log('someMockFunction.mock:', someMockFunction.mock)
  // expect(someMockFunction.mock.calls.length).toBe(2)
})

test('测试jest.fn()调用', () => {
  const mockFn = jest.fn()
  const result = mockFn(1, 2, 3)
  // 断言mockFn的执行后返回undefined
  expect(result).toBeUndefined()
  // 断言mockFn被调用
  expect(mockFn).toBeCalled()
  // 断言mockFn被调用了一次
  expect(mockFn).toBeCalledTimes(1)
  // 断言mockFn传入参数为1,2,3
  expect(mockFn).toHaveBeenCalledWith(1, 2, 3)
})

// jest.fn()所创建的Mock函数还可以设置返回值，定义内部实现或返回Promise对象

test('测试jest.fn()返回固定值', () => {
  const mockFn = jest.fn().mockReturnValue('default')
  // 断言mockFn执行后返回值为default
  expect(mockFn()).toBe('default')
})

test('测试jest.fn()内部实现', () => {
  const mockFn = jest.fn((num1, num2) => {
    return num1 * num2
  })
  // 断言mockFn执行返回100
  expect(mockFn(10, 10)).toBe(100)
})
test('测试jest.fn()返回Promise', async () => {
  const mockFn = jest.fn().mockResolvedValue('default')
  const result = await mockFn()
  // 断言mockFn通过await关键词执行后返回值为default
  expect(result).toBe('default')
  // 断言mockFn调用后返回的是promise对象
  expect(Object.prototype.toString.call(mockFn())).toBe('[object Promise]')
})

const fetch = require('../../src/experience/mock/fetch')
const event = require('../../src/experience/mock/event')
test('fetchPostsList callback was called', async () => {
  expect.assertions(1)
  const mockFn = jest.fn()
  const res = await fetch(mockFn)
  console.log(res)
  // 断言mockFn被调用
  expect(mockFn).toBeCalled()
})

test('fetchPostsList callback was called', async () => {
  expect.assertions(1)
  const mockFn = jest.fn()
  await fetch(mockFn)
  expect(mockFn).toBeCalled()
})
