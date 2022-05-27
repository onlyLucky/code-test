/*
 * @Author: fg
 * @Date: 2022-05-26 17:27:02
 * @LastEditors: fg
 * @LastEditTime: 2022-05-27 14:12:51
 * @Description: sum.test
 */
const sum = require('../../src/experience/sum')

test('adds 1+2 to qequal 3', () => {
  expect(sum(1, 2)).toBe(3)
})
