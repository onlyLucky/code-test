/*
 * @Author: fg
 * @Date: 2022-07-25 14:41:37
 * @LastEditors: fg
 * @LastEditTime: 2022-07-25 15:46:08
 * @Description: getSearchObj.test
 */

import getSearchObj from "utils/getSearchObj";

/* describe("getSearchObj", () => {
  it('获取当前接口传参：', () => {
    // window.location.href = "http://https://www.baidu.com?a=1&b=2"
    // 使用全局暴露出来的 jsdom
    global.jsdom.reconfigure({
      url: "https://www.baidu.com?a=1&b=2",
    });

    expect(window.location.search).toEqual("?a=1&b=2")
    expect(getSearchObj()).toEqual({
      a: '1',
      b: '2',
    })
  })
  it("空参数返回空", () => {
    // window.location.href = "https://www.baidu.com";
    // 使用全局暴露出来的 jsdom
    global.jsdom.reconfigure({
      url: "https://www.baidu.com",
    });

    expect(window.location.search).toEqual("");
    expect(getSearchObj()).toEqual({});
  });
}) */
describe("getSearchObj", () => {
  it("可以获取当前网址的查询参数对象", () => {
    window.location.assign('https://www.baidu.com?a=1&b=2');

    expect(window.location.search).toEqual("?a=1&b=2");
    expect(getSearchObj()).toEqual({
      a: "1",
      b: "2",
    });
  });

  it("空参数返回空", () => {
    window.location.assign('https://www.baidu.com');

    expect(window.location.search).toEqual("");
    expect(getSearchObj()).toEqual({});
  });
});
