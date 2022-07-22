/*
 * @Author: fg
 * @Date: 2022-07-22 16:43:56
 * @LastEditors: fg
 * @LastEditTime: 2022-07-22 17:58:59
 * @Description: sum test ts
 */
import sum from '@/utils/sum'

describe('sum test ts', () => {
  it('add', () => {
    expect(sum(1, 1)).toEqual(2)
  })
})