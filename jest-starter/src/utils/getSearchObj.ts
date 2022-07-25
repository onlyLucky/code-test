/*
 * @Author: fg
 * @Date: 2022-07-24 17:58:51
 * @LastEditors: fg
 * @LastEditTime: 2022-07-25 14:52:07
 * @Description: testEnvironment: 'jsdom' 配置项
 */

const getSearchObj = () => {
  // ?a=1&b=2
  const { search } = window.location
  // a=1&b=2
  const searchStr = search.slice(1)
  // ['a=1', 'b=2']
  const pairs = searchStr.split('&')
  // {'a': 1, 'b': 2}
  const searchObj: Record<string, string> = {}
  pairs.forEach(pair => {
    // [a, 1]
    let [key, value] = pair.split('=')
    searchObj[key] = value
  })
  return searchObj
}

// 如果你想把 查询字符串 转换为 对象，可以用下面更现代且更安全的方法(注意浏览器兼容性)
/* const getSearchObj = () => {
  return Object.fromEntries(
    new URLSearchParams(window.location.search).entries(),
  )
} */

export default getSearchObj