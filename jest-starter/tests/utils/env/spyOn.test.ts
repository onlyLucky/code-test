/*
 * @Author: fg
 * @Date: 2022-07-27 16:36:15
 * @LastEditors: fg
 * @LastEditTime: 2022-07-27 18:00:51
 * @Description: spyOn.test
 */
import { config } from 'utils/env'

describe('spyOn config', () => {
  it('开发环境', () => {
    jest.spyOn(config, 'getEnv').mockReturnValue('dev')
    expect(config.getEnv()).toEqual('dev')
  })
  it('正式环境', () => {
    jest.spyOn(config, 'getEnv').mockReturnValue('prod')
    expect(config.getEnv()).toEqual('prod')
  })
})