/*
 * @Author: fg
 * @Date: 2022-07-27 18:05:18
 * @LastEditors: fg
 * @LastEditTime: 2022-07-27 18:08:25
 * @Description: content
 */
import { configObj } from "utils/env";

describe("configObj env getter", () => {
  it('开发环境', () => {
    jest.spyOn(configObj, 'env', 'get').mockReturnValue('dev')
    expect(configObj.env).toEqual('dev')
  })
  it('正式环境', () => {
    jest.spyOn(configObj, 'env', 'get').mockReturnValue('prod')
    expect(configObj.env).toEqual('prod')
  })
})