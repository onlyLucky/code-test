/*
 * @Author: fg
 * @Date: 2022-07-21 11:08:51
 * @LastEditors: fg
 * @LastEditTime: 2022-07-21 11:12:13
 * @Description: sum.test
 */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const sum = require('../../src/utils/sum')

describe('sum.test', () => {
  it('test add', () => {
    expect(sum(1, 1)).toEqual(2)
  })
})
