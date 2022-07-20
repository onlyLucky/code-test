/*
 * @Author: fg
 * @Date: 2022-07-20 14:18:19
 * @LastEditors: fg
 * @LastEditTime: 2022-07-20 14:20:56
 * @Description: jest 钩子函数
 */

class Counter {
  constructor () {
    this.number = 0
  }

  addOne () {
    this.number += 1
  }

  minusOne () {
    this.number -= 1
  }
}

export default Counter
