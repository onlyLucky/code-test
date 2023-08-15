/*
 * @Author: fg
 * @Date: 2023-08-15 11:40:47
 * @LastEditors: fg
 * @LastEditTime: 2023-08-15 18:43:28
 * @Description: content
 */
const { sum } = require("../../src/basic/math")
describe('Math module', () => {
  test('should return sum result when two number plus', () => {
    // given
    const number = 1
    const otherNumber = 2
    // when
    const result = sum(number, otherNumber)
    // then
    expect(result).toEqual(3)
  })
})