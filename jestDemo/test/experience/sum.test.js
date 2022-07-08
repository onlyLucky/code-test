/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/*
 * @Author: fg
 * @Date: 2022-05-26 17:27:02
 * @LastEditors: fg
 * @LastEditTime: 2022-07-08 14:50:02
 * @Description: sum.test
 */
const sum = require('../../src/experience/sum')

test('adds 1+2 to qequal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('two plus two is four', () => {
  expect(2 + 2).toBe(4)
  expect({ name: 'jack' }).toEqual({ name: 'jack' })
  // morn than 3  4>3
  expect(4).toBeGreaterThan(3)
  expect(4).toBeLessThan(5)
})
const myBeverage = {
  delicious: true,
  sour: false
}
describe('my describe', () => {
  test('is delicious', () => {
    expect(myBeverage.delicious).toBeTruthy()
  })
  test('is not sour', () => {
    expect(myBeverage.sour).toBeFalsy()
  })
})
