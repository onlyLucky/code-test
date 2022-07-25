/*
 * @Author: fg
 * @Date: 2022-07-25 20:47:51
 * @LastEditors: fg
 * @LastEditTime: 2022-07-25 21:13:52
 * @Description: sleep
 */
const sleep = (ms: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

export default sleep