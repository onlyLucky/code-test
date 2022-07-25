/*
 * @Author: fg
 * @Date: 2022-07-25 15:54:36
 * @LastEditors: fg
 * @LastEditTime: 2022-07-25 15:57:35
 * @Description: TDD test
 */
import objToSearchStr from "utils/objToSearchStr";

describe('objToSearchStr', () => {
  it('可以将对象转化成查询参数字符串', () => {
    expect(objToSearchStr({
      a: "1",
      b: "2"
    })).toEqual('a=1&b=2');
  })
})