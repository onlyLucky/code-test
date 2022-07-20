/*
 * @Author: fg
 * @Date: 2022-07-20 17:03:01
 * @LastEditors: fg
 * @LastEditTime: 2022-07-20 17:38:14
 * @Description: 快照测试
 */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function renderHtml () {
  const div = document.createElement('div')
  div.innerHTML = '<h1>hello world</h1>'
  document.body.appendChild(div)
}

/* test('Snapshop Testing', () => {
  renderHtml()
  // 第一次运行测试，会生成快照文件，存储 expect() 传入的字符串
  // 下次运行测试的时候会和快照文件进行比对
  expect(document.body.innerHTML).toMatchSnapshot()
}) */
