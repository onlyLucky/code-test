/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/*
 * @Author: fg
 * @Date: 2022-07-12 13:36:47
 * @LastEditors: fg
 * @LastEditTime: 2022-07-18 14:08:53
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
jest.useFakeTimers('fakeTimers')

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

test('calls the callback after 1 second', () => {
  const callback = jest.fn()
  timeGame(callback)

  // 在这个时间点，定时器的回调不应该被执行
  expect(callback).not.toBeCalled()
  // “快进”时间使得所有定时器回调被执行
  jest.runAllTimers()

  // 现在回调函数应该被调用了！
  expect(callback).toBeCalled()
  expect(callback).toHaveBeenCalledTimes(1)
})

/* describe('infiniteTimerGame', () => {
  test('schedules a 10-second timer after 1 second', () => {
    const infiniteTimerGame = require('../../src/experience/testTime/infiniteTimerGame')
    const callback = jest.fn()
    infiniteTimerGame(callback)

    expect(global.setTimeout).toHaveBeenCalledTimes(1)
    expect(global.setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000)
    jest.runOnlyPendingTimers()

    expect(callback).toBeCalled()

    expect(global.setTimeout).toHaveBeenCalledTimes(2)
    expect(global.setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000)
  })
}) */
