/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/*
 * @Author: fg
 * @Date: 2022-07-12 13:36:47
 * @LastEditors: fg
 * @LastEditTime: 2022-07-12 14:17:51
 * @Description: Jest 测试定时器
 */

function timeGame (callback) {
  console.log('Ready...go!')
  setTimeout(() => {
    console.log("time's up -- stop")
    callback && callback()
  }, 1000)
}
// 通过jest.useFakeTimers();来模拟定时器函数
jest.useFakeTimers('real')

beforeEach(() => {
  jest.spyOn(global, 'setTimeout')
})

afterEach(() => {
  global.setTimeout.mockRestore()
})

test('wait 1s before ending the game', () => {
  timeGame()
  // 验证定时器函数被调用的次数
  expect(global.setTimeout).toHaveBeenCalledTimes(1)
  // 验证定时器的时间是1s
  expect(global.setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000)
})
