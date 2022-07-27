/*
 * @Author: fg
 * @Date: 2022-07-27 18:38:16
 * @LastEditors: fg
 * @LastEditTime: 2022-07-27 18:41:25
 * @Description: getEnv test
 */
import * as envUtils from 'utils/env'

describe('getEnv', () => {
  it('开发环境', () => {
    jest.spyOn(envUtils, 'getEnv').mockReturnValue('dev')
    expect(envUtils.getEnv()).toEqual('dev')
  })
  it('正式环境', () => {
    jest.spyOn(envUtils, 'getEnv').mockReturnValue('prod')
    expect(envUtils.getEnv()).toEqual('prod')
  })
})