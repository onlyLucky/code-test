/*
 * @Author: fg
 * @Date: 2022-07-27 19:31:02
 * @LastEditors: fg
 * @LastEditTime: 2022-07-27 19:39:23
 * @Description: hacky test
 */
import getGreeting from "utils/hacky";

describe("Greeting", () => {
  it('默认值', () => {
    expect(getGreeting()).toBe('hello world!')
  })
  it('输出 mars', () => {
    expect(getGreeting(() => 'mars')).toBe('hello mars!')
  })
  it('输出 jupiter', () => {
    expect(getGreeting(() => 'jupiter')).toBe('hello jupiter!')
  })
  it('回到默认值', () => {
    expect(getGreeting()).toBe('hello world!')
  })
})