
/*
 * @Author: fg
 * @Date: 2022-07-18 13:56:07
 * @LastEditors: fg
 * @LastEditTime: 2022-07-18 17:19:39
 * @Description: Jest 中的 Mock 函数
 */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function forEach (items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index])
  }
}

test('one type', () => {
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

