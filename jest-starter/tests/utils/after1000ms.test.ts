/*
 * @Author: fg
 * @Date: 2022-07-25 16:16:34
 * @LastEditors: fg
 * @LastEditTime: 2022-07-25 17:32:54
 * @Description: after1000ms
 */

import { after1000ms } from "utils/after1000ms";

/* describe("After 1000ms", () => {
  it('可以在1000ms后自动执行函数', (done) => {
    after1000ms(() => {
      expect('???')
      done()
    })
  })
}) */

describe("after1000ms", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  it("可以在 1000ms 后自动执行函数", () => {
    jest.spyOn(global, "setTimeout");

    after1000ms();

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);
  });
});
// 快进时间
describe("快进时间after1000ms", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });
  it("可以在1000ms后自动执行函数", () => {
    jest.spyOn(global, "setTimeout");
    const callback = jest.fn()
    expect(callback).not.toHaveBeenCalled()
    after1000ms(callback);
    jest.runAllTimers();
    expect(callback).toHaveBeenCalled();
    expect(setTimeout).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);
  })
})
// 用 jest.fn 生成了一个监听函数（假函数），然后马上断言这个函数是没有被调用过的。然后， 在调用 after1000ms 之后，用 jest.runAllTimers 快进时间，最后来判断 callback 是否只被调用了 1 次

